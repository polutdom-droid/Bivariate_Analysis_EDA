import React, { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import {
  Camera,
  ZoomIn,
  ZoomOut,
  Move,
  RotateCcw,
  Crosshair,
  MousePointerClick,
  Sparkles,
  Pin,
  X,
  Layers,
} from 'lucide-react';
import { RichMathText } from './MathRenderer';

export interface PlotlyHoverData {
  title: string;
  subtitle?: string;
  color: string;
  xPct: number;
  yPct: number;
  clientX: number;
  clientY: number;
  plotLeft: number;
  plotTop: number;
  plotWidth: number;
  plotHeight: number;
  xCoordLabel: string;
  yCoordLabel: string;
  tagType: string;
}

export interface PinnedPlotlyPoint {
  id: string;
  title: string;
  subtitle?: string;
  color: string;
  coords: string;
  tagType: string;
}

interface TouchSonarBurst {
  id: number;
  x: number;
  y: number;
  color: string;
}

interface PlotlyInteractiveStageProps {
  slideNumber: number;
  slideTitleEn: string;
  slideTitleKm: string;
  children: React.ReactNode;
}

export const PlotlyInteractiveStage: React.FC<PlotlyInteractiveStageProps> = ({
  slideNumber,
  slideTitleEn,
  children,
}) => {
  const stageRef = useRef<HTMLDivElement | null>(null);
  const tooltipRef = useRef<HTMLDivElement | null>(null);
  const lastHoveredTitleRef = useRef<string>('');
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const [panOffset, setPanOffset] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isPanMode, setIsPanMode] = useState<boolean>(false);
  const [isDraggingPan, setIsDraggingPan] = useState<boolean>(false);
  const panStartRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

  const [showSpikes, setShowSpikes] = useState<boolean>(true);
  const [hoverMode, setHoverMode] = useState<'closest' | 'compare'>('closest');
  const [hoverData, setHoverData] = useState<PlotlyHoverData | null>(null);
  const [pinnedPoints, setPinnedPoints] = useState<PinnedPlotlyPoint[]>([]);
  const [sonarBursts, setSonarBursts] = useState<TouchSonarBurst[]>([]);
  const [exportStatus, setExportStatus] = useState<string | null>(null);

  // Reset zoom/pan and hover state when changing slides
  useEffect(() => {
    setZoomLevel(1);
    setPanOffset({ x: 0, y: 0 });
    setHoverData(null);
    setPinnedPoints([]);
    setSonarBursts([]);
  }, [slideNumber]);

  const spawnSonarBurst = (clientX: number, clientY: number, color = '#FACC15') => {
    if (!stageRef.current) return;
    const sRect = stageRef.current.getBoundingClientRect();
    const id = Date.now() + Math.random();
    const localX = clientX - sRect.left;
    const localY = clientY - sRect.top;
    setSonarBursts((prev) => [...prev.slice(-5), { id, x: localX, y: localY, color }]);
    setTimeout(() => {
      setSonarBursts((prev) => prev.filter((b) => b.id !== id));
    }, 680);
  };

  // Extract meaningful Plotly tooltip metadata from any SVG, Table Row, or HTML chart element
  const inspectChartTarget = (
    target: HTMLElement | SVGElement,
    clientX: number,
    clientY: number
  ): PlotlyHoverData | null => {
    if (!stageRef.current) return null;
    const stageRect = stageRef.current.getBoundingClientRect();

    // 1. Check if hovering/touching a Statistical Table Row (tbody tr)
    const tableRowEl = target.closest('tbody tr') as HTMLTableRowElement | null;
    if (tableRowEl) {
      const tableEl = tableRowEl.closest('table') || tableRowEl;
      const cells = Array.from(tableRowEl.querySelectorAll('td'))
        .map((td) => td.textContent?.trim())
        .filter(Boolean);
      if (cells.length >= 2) {
        const plotRect = tableEl.getBoundingClientRect();
        const xPct = Math.max(0, Math.min(100, ((clientX - plotRect.left) / plotRect.width) * 100));
        const yPct = Math.max(0, Math.min(100, ((clientY - plotRect.top) / plotRect.height) * 100));
        return {
          title: `Table Row: ${cells[0]}`,
          subtitle: cells.slice(1).join('  ·  '),
          color: '#38BDF8',
          xPct,
          yPct,
          clientX,
          clientY,
          plotLeft: plotRect.left - stageRect.left,
          plotTop: plotRect.top - stageRect.top,
          plotWidth: plotRect.width,
          plotHeight: plotRect.height,
          xCoordLabel: `Col ${Math.min(cells.length, Math.max(1, Math.ceil((xPct / 100) * cells.length)))}`,
          yCoordLabel: `${cells[0]}`,
          tagType: 'TR',
        };
      }
    }

    // 2. Check if inside an SVG or an interactive HTML bar/tile with [data-plotly-label] or [title]
    const svgEl = target.closest('svg');
    const htmlPlotlyEl = target.closest('[data-plotly-label], [title]') as HTMLElement | null;

    if (!svgEl && !htmlPlotlyEl) {
      return null;
    }

    // For spike crosshairs, always use the full chart plot box (not a tiny single bar segment)
    const htmlChartBox =
      (target.closest('.bg-\\[\\#070B14\\]') as HTMLElement | null) ||
      (target.closest('.bg-\\[\\#0D1527\\]') as HTMLElement | null) ||
      stageRef.current;

    const containerRect = svgEl
      ? svgEl.getBoundingClientRect()
      : htmlChartBox.getBoundingClientRect();

    if (containerRect.width === 0 || containerRect.height === 0) return null;

    const xPct = Math.max(
      0,
      Math.min(100, ((clientX - containerRect.left) / containerRect.width) * 100)
    );
    const yPct = Math.max(
      0,
      Math.min(100, ((clientY - containerRect.top) / containerRect.height) * 100)
    );

    const tagName = target.tagName.toLowerCase();

    // Find the closest interactive shape inside the SVG or HTML chart
    const shapeEl = target.closest(
      '[data-plotly-label], circle, rect, path, polyline, polygon, line, g'
    ) as Element | null;

    let label = '';
    let subtitle = '';
    let color = '#38BDF8';

    // Check explicit data-plotly-label or HTML title attribute
    if (shapeEl) {
      const explicitLabel =
        shapeEl.getAttribute('data-plotly-label') ||
        shapeEl.getAttribute('title') ||
        shapeEl.parentElement?.getAttribute('data-plotly-label') ||
        shapeEl.parentElement?.getAttribute('title');
      const explicitSub =
        shapeEl.getAttribute('data-plotly-sub') ||
        shapeEl.parentElement?.getAttribute('data-plotly-sub');

      if (explicitLabel) {
        label = explicitLabel;
      }
      if (explicitSub) {
        subtitle = explicitSub;
      }

      // Check child <title> inside the shape or its parent <g>
      if (!label) {
        const titleChild =
          shapeEl.querySelector('title') || shapeEl.parentElement?.querySelector('title');
        if (titleChild && titleChild.textContent) {
          label = titleChild.textContent.trim();
        }
      }

      // Extract fill or stroke color
      const fillAttr =
        shapeEl.getAttribute('fill') ||
        shapeEl.querySelector('circle, rect, path')?.getAttribute('fill');
      const strokeAttr =
        shapeEl.getAttribute('stroke') ||
        shapeEl.querySelector('circle, rect, path, line, polyline')?.getAttribute('stroke');

      if (fillAttr && fillAttr !== 'none' && !fillAttr.startsWith('url')) {
        color = fillAttr;
      } else if (strokeAttr && strokeAttr !== 'none') {
        color = strokeAttr;
      } else if (htmlPlotlyEl) {
        const computedBg = window.getComputedStyle(htmlPlotlyEl).backgroundColor;
        if (computedBg && computedBg !== 'rgba(0, 0, 0, 0)') {
          color = computedBg;
        }
      }

      // If still no explicit label on an SVG shape, synthesize a descriptive Plotly readout
      if (!label && svgEl) {
        const parentG = shapeEl.closest('g');
        if (parentG) {
          const texts = Array.from(parentG.querySelectorAll('text'))
            .map((t) => t.textContent?.trim())
            .filter(Boolean);
          if (texts.length > 0) {
            label = texts.join(' · ');
          }
        }
      }
    }

    // Fallback for general SVG hover or unlabelled shapes
    if (!label && svgEl) {
      const cardEl = svgEl.closest('div');
      const cardTitleEl = cardEl?.querySelector('.text-white.font-bold, .font-bold.text-white');
      const chartTitle = cardTitleEl?.textContent?.trim() || `Slide ${slideNumber} Plotly Trace`;

      if (tagName === 'circle') {
        const cx = parseFloat(target.getAttribute('cx') || '0').toFixed(1);
        const cy = parseFloat(target.getAttribute('cy') || '0').toFixed(1);
        const r = parseFloat(target.getAttribute('r') || '0').toFixed(1);
        label = `${chartTitle}`;
        subtitle = `Scatter Point / Bubble: (cx=${cx}, cy=${cy}, r=${r}px)`;
      } else if (tagName === 'rect') {
        const h = parseFloat(target.getAttribute('height') || '0').toFixed(1);
        const w = parseFloat(target.getAttribute('width') || '0').toFixed(1);
        label = `${chartTitle}`;
        subtitle = `Bar / Box Trace: height=${h}, width=${w}`;
      } else if (tagName === 'path' || tagName === 'polyline' || tagName === 'line') {
        label = `${chartTitle}`;
        subtitle = `Curve / Trendline Trace at (${xPct.toFixed(1)}%, ${(100 - yPct).toFixed(1)}%)`;
      } else {
        label = `${chartTitle}`;
        subtitle = `Cursor Coordinates: X=${xPct.toFixed(1)}%, Y=${(100 - yPct).toFixed(1)}%`;
      }
    }

    if (!label) return null;

    if (!subtitle && label.includes('|')) {
      const parts = label.split('|').map((s) => s.trim());
      label = parts[0];
      subtitle = parts.slice(1).join(' · ');
    }

    return {
      title: label,
      subtitle:
        subtitle ||
        (hoverMode === 'compare'
          ? `Unified Compare Mode · Slide ${slideNumber} Trace`
          : `Plotly Interactive Point · ប៉ះ/ចុចដើម្បីចាក់សោទិន្នន័យ`),
      color,
      xPct,
      yPct,
      clientX,
      clientY,
      plotLeft: containerRect.left - stageRect.left,
      plotTop: containerRect.top - stageRect.top,
      plotWidth: containerRect.width,
      plotHeight: containerRect.height,
      xCoordLabel: `x: ${xPct.toFixed(1)}%`,
      yCoordLabel: `y: ${(100 - yPct).toFixed(1)}%`,
      tagType: tagName.toUpperCase(),
    };
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (isDraggingPan && isPanMode) {
      const dx = e.clientX - panStartRef.current.x;
      const dy = e.clientY - panStartRef.current.y;
      setPanOffset({ x: dx, y: dy });
      return;
    }

    const target = e.target as HTMLElement | SVGElement;
    const info = inspectChartTarget(target, e.clientX, e.clientY);
    setHoverData(info);

    // Spawn a subtle sonar pulse when moving onto a new distinct data point/bar/row
    if (
      info &&
      info.title !== lastHoveredTitleRef.current &&
      ['CIRCLE', 'RECT', 'PATH', 'POLYLINE', 'TR', 'DIV'].includes(info.tagType)
    ) {
      lastHoveredTitleRef.current = info.title;
      spawnSonarBurst(e.clientX, e.clientY, info.color);
    }
  };

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (isPanMode) {
      setIsDraggingPan(true);
      panStartRef.current = {
        x: e.clientX - panOffset.x,
        y: e.clientY - panOffset.y,
      };
      return;
    }

    const target = e.target as HTMLElement | SVGElement;
    spawnSonarBurst(e.clientX, e.clientY, '#FACC15');

    // Ignore pinning on form controls
    if (target.closest('button, input, select, label, a')) return;

    const info = inspectChartTarget(target, e.clientX, e.clientY);
    if (info) {
      setHoverData(info);
      const isShape = ['CIRCLE', 'RECT', 'PATH', 'POLYLINE', 'POLYGON', 'TR'].includes(
        info.tagType
      );
      const hasExplicitAttr = Boolean(target.closest('[data-plotly-label], [title]'));

      if (isShape || hasExplicitAttr) {
        const newPin: PinnedPlotlyPoint = {
          id: `${info.title}-${Date.now()}`,
          title: info.title,
          subtitle: info.subtitle,
          color: info.color,
          coords: `${info.xCoordLabel}, ${info.yCoordLabel}`,
          tagType: info.tagType,
        };
        setPinnedPoints((prev) => {
          const filtered = prev.filter((p) => p.title !== newPin.title);
          return [newPin, ...filtered].slice(0, 4);
        });
      }
    }
  };

  const handlePointerUp = () => {
    setIsDraggingPan(false);
  };

  const handleResetAxes = () => {
    setZoomLevel(1);
    setPanOffset({ x: 0, y: 0 });
    setIsPanMode(false);
  };

  const handleDownloadPlotPng = () => {
    if (!stageRef.current) return;
    const svg = stageRef.current.querySelector('svg');
    if (!svg) return;

    setExportStatus('កំពុងទាញយក PNG...');
    const serializer = new XMLSerializer();
    let svgString = serializer.serializeToString(svg);
    if (!svgString.includes('xmlns="http://www.w3.org/2000/svg"')) {
      svgString = svgString.replace('<svg', '<svg xmlns="http://www.w3.org/2000/svg"');
    }

    const svgBlob = new Blob([svgString], { type: 'image/svg+xml;charset=utf-8' });
    const url = URL.createObjectURL(svgBlob);
    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 1200;
      canvas.height = 675;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.fillStyle = '#070B14';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 40, 40, canvas.width - 80, canvas.height - 80);
        const pngUrl = canvas.toDataURL('image/png');
        const link = document.createElement('a');
        link.download = `Plotly_Slide_${slideNumber}_${slideTitleEn
          .replace(/[^a-zA-Z0-9]/g, '_')
          .slice(0, 28)}.png`;
        link.href = pngUrl;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
      URL.revokeObjectURL(url);
      setExportStatus('បានទាញយក PNG!');
      setTimeout(() => setExportStatus(null), 2000);
    };
    img.src = url;
  };

  // Smart Viewport + Stage-Aware Tooltip Positioning (Auto-Flips Left/Right & Above/Below so it NEVER clips)
  const getSmartTooltipStyle = (): React.CSSProperties => {
    if (!hoverData) return { display: 'none' };
    const vw = typeof window !== 'undefined' ? window.innerWidth : 1280;
    const vh = typeof window !== 'undefined' ? window.innerHeight : 800;
    const sRect = stageRef.current?.getBoundingClientRect();

    const tooltipW = tooltipRef.current?.offsetWidth || 290;
    const tooltipH = tooltipRef.current?.offsetHeight || 108;

    const rightLimit = sRect ? Math.min(vw - 12, sRect.right - 8) : vw - 12;
    const leftLimit = sRect ? Math.max(12, sRect.left + 8) : 12;

    // Flip to the left of the cursor if cursor is in the right 45% of the stage or near right edge
    const shouldFlipLeft =
      (sRect && hoverData.clientX > sRect.left + sRect.width * 0.55) ||
      hoverData.clientX + tooltipW + 24 > rightLimit;

    let left = shouldFlipLeft
      ? hoverData.clientX - tooltipW - 18
      : hoverData.clientX + 18;

    // Strictly clamp horizontally within stage/viewport bounds
    if (rightLimit - leftLimit >= tooltipW) {
      left = Math.max(leftLimit, Math.min(rightLimit - tooltipW, left));
    } else {
      left = Math.max(12, Math.min(vw - tooltipW - 12, left));
    }

    // Place above cursor by default; flip below cursor if near top of stage/viewport
    const topLimit = sRect ? Math.max(12, sRect.top + 8) : 12;
    let top = hoverData.clientY - tooltipH - 16;
    if (top < topLimit) {
      top = hoverData.clientY + 22;
    }
    top = Math.max(12, Math.min(vh - tooltipH - 12, top));

    return {
      left: `${Math.round(left)}px`,
      top: `${Math.round(top)}px`,
    };
  };

  return (
    <div className="space-y-3">
      {/* Authentic Interactive Plotly Express Header & Modebar */}
      <div className="bg-[#0B1324] border border-[#1E293B] rounded-xl px-3.5 py-2 flex flex-wrap items-center justify-between gap-2">
        <div className="flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#0EA5E9]/15 border border-[#0EA5E9]/40 text-[#38BDF8] font-mono text-[11px] font-bold">
            <Sparkles className="w-3 h-3 text-[#FACC15]" />
            <span>Plotly Interactive Canvas</span>
          </span>
          <span className="text-xs text-[#FACC15] khmer-text font-semibold">
            អាចប៉ះ / អូសមើលទិន្នន័យលើក្រាហ្វគ្រប់ចំណុច (Touch, Hover, Bounce & Pin)
          </span>
        </div>

        {/* Plotly Modebar Controls */}
        <div className="flex flex-wrap items-center gap-1 bg-[#060A14] border border-[#1E293B] rounded-lg p-1">
          <button
            onClick={handleDownloadPlotPng}
            className="p-1.5 rounded hover:bg-[#162238] text-slate-300 hover:text-white transition-colors cursor-pointer"
            title="Download plot as a png (ទាញយករូបភាពក្រាហ្វ PNG)"
          >
            <Camera className="w-3.5 h-3.5 text-[#38BDF8]" />
          </button>

          <div className="w-px h-4 bg-[#1E293B] mx-0.5" />

          <button
            onClick={() => setZoomLevel((z) => Math.min(2.25, Number((z + 0.25).toFixed(2))))}
            className="p-1.5 rounded hover:bg-[#162238] text-slate-300 hover:text-white transition-colors cursor-pointer"
            title="Zoom in (ពង្រីកក្រាហ្វ)"
          >
            <ZoomIn className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={() => {
              setZoomLevel((z) => {
                const next = Math.max(1, Number((z - 0.25).toFixed(2)));
                if (next === 1) setPanOffset({ x: 0, y: 0 });
                return next;
              });
            }}
            className="p-1.5 rounded hover:bg-[#162238] text-slate-300 hover:text-white transition-colors cursor-pointer"
            title="Zoom out (បង្រួមក្រាហ្វ)"
          >
            <ZoomOut className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={() => setIsPanMode((prev) => !prev)}
            className={`p-1.5 rounded transition-colors cursor-pointer ${
              isPanMode
                ? 'bg-[#0284C7] text-white'
                : 'hover:bg-[#162238] text-slate-300 hover:text-white'
            }`}
            title="Pan / Drag chart (អូសផ្លាស់ទីក្រាហ្វ)"
          >
            <Move className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={handleResetAxes}
            className="p-1.5 rounded hover:bg-[#162238] text-slate-300 hover:text-white transition-colors cursor-pointer"
            title="Reset axes (កំណត់ទំហំដើមវិញ)"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>

          <div className="w-px h-4 bg-[#1E293B] mx-0.5" />

          <button
            onClick={() => setShowSpikes((prev) => !prev)}
            className={`inline-flex items-center gap-1 px-2 py-1 rounded text-[11px] font-mono font-semibold transition-colors cursor-pointer ${
              showSpikes
                ? 'bg-[#0284C7]/25 border border-[#38BDF8]/50 text-[#38BDF8]'
                : 'hover:bg-[#162238] text-slate-400'
            }`}
            title="Toggle Spike Lines (បន្ទាត់កូអរដោនេ X/Y)"
          >
            <Crosshair className="w-3 h-3" />
            <span className="hidden sm:inline">Spikes</span>
          </button>

          <button
            onClick={() => setHoverMode((m) => (m === 'closest' ? 'compare' : 'closest'))}
            className={`inline-flex items-center gap-1 px-2 py-1 rounded text-[11px] font-mono font-semibold transition-colors cursor-pointer ${
              hoverMode === 'compare'
                ? 'bg-amber-500/20 border border-amber-400/50 text-[#FACC15]'
                : 'hover:bg-[#162238] text-slate-300'
            }`}
            title="Switch Hover Mode (Closest vs Compare)"
          >
            <Layers className="w-3 h-3" />
            <span className="hidden sm:inline">
              {hoverMode === 'compare' ? 'Compare' : 'Closest'}
            </span>
          </button>

          {zoomLevel > 1 && (
            <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-mono text-[11px] font-bold tabular-nums">
              {Math.round(zoomLevel * 100)}%
            </span>
          )}
          {exportStatus && (
            <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-[11px] khmer-text font-bold">
              {exportStatus}
            </span>
          )}
        </div>
      </div>

      {/* Interactive Plotly Touch & Hover Stage */}
      <div
        ref={stageRef}
        onPointerMove={handlePointerMove}
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
        onPointerLeave={() => {
          setHoverData(null);
          setIsDraggingPan(false);
        }}
        className={`relative rounded-xl overflow-hidden select-none plotly-touch-stage ${
          isPanMode ? 'cursor-grab active:cursor-grabbing' : ''
        }`}
      >
        <div
          style={{
            transform: `translate3d(${panOffset.x}px, ${panOffset.y}px, 0) scale(${zoomLevel})`,
            transformOrigin: 'center center',
            transition: isDraggingPan ? 'none' : 'transform 0.22s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        >
          {children}
        </div>

        {/* Live Touch / Hover Sonar Ripple Bursts (Stage-Relative) */}
        {sonarBursts.map((burst) => (
          <div
            key={burst.id}
            className="pointer-events-none absolute z-30 w-9 h-9 rounded-full border-2 animate-touch-sonar"
            style={{
              left: burst.x,
              top: burst.y,
              borderColor: burst.color,
              boxShadow: `0 0 14px ${burst.color}`,
            }}
          />
        ))}

        {/* Live Plotly Crosshair Spike Lines Overlay (Scoped to the Active Plot Area) */}
        {showSpikes && hoverData && (
          <div
            className="pointer-events-none absolute z-20 overflow-hidden"
            style={{
              left: hoverData.plotLeft,
              top: hoverData.plotTop,
              width: hoverData.plotWidth,
              height: hoverData.plotHeight,
            }}
          >
            {/* Vertical X-Spike Line */}
            <div
              className="absolute top-0 bottom-0 border-l border-dashed border-[#38BDF8]/75"
              style={{ left: `${hoverData.xPct}%` }}
            />
            {/* Horizontal Y-Spike Line */}
            <div
              className="absolute left-0 right-0 border-t border-dashed border-[#FACC15]/75"
              style={{ top: `${hoverData.yPct}%` }}
            />
            {/* Active Cursor Ring */}
            <div
              className="absolute -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-2 border-[#FACC15] bg-[#38BDF8]/30 shadow-[0_0_12px_rgba(250,204,21,0.9)]"
              style={{ left: `${hoverData.xPct}%`, top: `${hoverData.yPct}%` }}
            />
            {/* X-Axis Spike Coordinate Tag */}
            <div
              className="absolute bottom-1.5 -translate-x-1/2 px-2 py-0.5 rounded bg-[#060A14]/95 border border-[#38BDF8]/70 text-[10px] font-mono font-bold text-[#38BDF8] whitespace-nowrap shadow-md"
              style={{ left: `${Math.max(14, Math.min(86, hoverData.xPct))}%` }}
            >
              {hoverData.xCoordLabel}
            </div>
            {/* Y-Axis Spike Coordinate Tag */}
            <div
              className="absolute left-1.5 -translate-y-1/2 px-2 py-0.5 rounded bg-[#060A14]/95 border border-[#FACC15]/70 text-[10px] font-mono font-bold text-[#FACC15] whitespace-nowrap shadow-md"
              style={{ top: `${Math.max(16, Math.min(82, hoverData.yPct))}%` }}
            >
              {hoverData.yCoordLabel}
            </div>
          </div>
        )}
      </div>

      {/* Portal-Rendered Floating Plotly Hover Tooltip Card (Never Clipped by Overflow-Hidden Containers!) */}
      {hoverData &&
        typeof document !== 'undefined' &&
        createPortal(
          <div
            ref={tooltipRef}
            className="pointer-events-none fixed z-[9999] w-72 sm:w-80 bg-[#060A14]/95 backdrop-blur-md border-2 border-[#38BDF8] rounded-xl px-3.5 py-2.5 shadow-[0_16px_40px_rgba(0,0,0,0.85)] transition-[left,top] duration-75"
            style={getSmartTooltipStyle()}
          >
            <div className="flex items-start gap-2.5">
              <span
                className="w-3.5 h-3.5 rounded-sm shrink-0 mt-1 border border-white/60 shadow-xs"
                style={{ backgroundColor: hoverData.color }}
              />
              <div className="min-w-0 flex-1 space-y-1">
                <div className="text-xs font-extrabold text-white leading-snug break-words khmer-text">
                  <RichMathText text={hoverData.title} />
                </div>
                {hoverData.subtitle && (
                  <div className="text-[11px] font-medium text-[#FACC15] leading-snug break-words khmer-text">
                    <RichMathText text={hoverData.subtitle} />
                  </div>
                )}
                <div className="flex flex-wrap items-center gap-2 pt-1 border-t border-[#1E293B] text-[10px] font-mono text-slate-400">
                  <span className="text-[#38BDF8] font-semibold">{hoverData.xCoordLabel}</span>
                  <span>•</span>
                  <span className="text-[#FACC15] font-semibold">{hoverData.yCoordLabel}</span>
                  <span>•</span>
                  <span className="text-emerald-300 inline-flex items-center gap-0.5 khmer-text">
                    <MousePointerClick className="w-2.5 h-2.5" /> ចុចដើម្បី Pin
                  </span>
                </div>
              </div>
            </div>
          </div>,
          document.body
        )}

      {/* Pinned Plotly Data Inspector (Appears when User Touches/Clicks Data Points on the Chart) */}
      <div className="bg-[#0B1324] border border-[#1E293B] rounded-xl px-4 py-2.5">
        {pinnedPoints.length > 0 ? (
          <div className="space-y-2">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-2 text-xs font-bold text-[#38BDF8] khmer-text">
                <Pin className="w-3.5 h-3.5 text-[#FACC15]" />
                <span>
                  ទិន្នន័យនៃចំណុចដែលបានប៉ះ/ចុចលើក្រាហ្វ (Pinned Plotly Data Points: {pinnedPoints.length})
                </span>
              </div>
              <button
                onClick={() => setPinnedPoints([])}
                className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-rose-500/15 hover:bg-rose-500/25 border border-rose-500/30 text-rose-300 text-[11px] font-semibold cursor-pointer khmer-text"
              >
                <X className="w-3 h-3" />
                <span>សម្អាត (Clear)</span>
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
              {pinnedPoints.map((pt) => (
                <div
                  key={pt.id}
                  className="bg-[#060A14] border border-[#1E293B] rounded-lg p-2.5 flex items-start justify-between gap-2 touch-spring-card"
                >
                  <div className="flex items-start gap-2 min-w-0">
                    <span
                      className="w-3 h-3 rounded-full shrink-0 mt-1 border border-white/50"
                      style={{ backgroundColor: pt.color }}
                    />
                    <div className="min-w-0 space-y-0.5">
                      <div className="text-xs font-bold text-white break-words khmer-text">
                        <RichMathText text={pt.title} />
                      </div>
                      {pt.subtitle && (
                        <div className="text-[11px] text-[#FACC15] break-words khmer-text">
                          <RichMathText text={pt.subtitle} />
                        </div>
                      )}
                      <div className="text-[10px] font-mono text-slate-400">{pt.coords}</div>
                    </div>
                  </div>
                  <button
                    onClick={() =>
                      setPinnedPoints((prev) => prev.filter((item) => item.id !== pt.id))
                    }
                    className="text-slate-500 hover:text-white p-0.5 cursor-pointer shrink-0"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-slate-400 khmer-text">
            <div className="flex items-center gap-2">
              <MousePointerClick className="w-3.5 h-3.5 text-[#38BDF8] shrink-0" />
              <span>
                <strong className="text-slate-200">Plotly Interactive Tip៖</strong> ប៉ះ (Touch) ឬ ដាក់ Mouse លើចំណុច របារ តារាង ឬខ្សែកោងណាមួយ ដើម្បីឃើញចលនា (Spring Bounce & Sonar Animation) និងតម្លៃទិន្នន័យ។
              </span>
            </div>
            <span className="font-mono text-[11px] text-[#38BDF8]">
              Hover: {hoverMode === 'compare' ? 'Compare Mode' : 'Closest Point'} · Spikes:{' '}
              {showSpikes ? 'ON' : 'OFF'}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};
