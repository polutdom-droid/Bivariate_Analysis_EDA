/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo, useRef, useEffect } from 'react';
import { ALL_41_SLIDES, formatAllSlidesToMarkdown } from './data/allSlides';
import { LookerCanvasSimulator } from './components/LookerCanvasSimulator';
import { BlueprintSpecificationView } from './components/BlueprintSpecificationView';
import { OriginalPdfSlideViewer } from './components/OriginalPdfSlideViewer';
import { ExportReportModal } from './components/ExportReportModal';
import {
  MathEquationDisplay,
  MathSymbolBadge,
  RichMathText,
} from './components/MathRenderer';
import {
  ChevronLeft,
  ChevronRight,
  Download,
  Search,
  Check,
  Copy,
  LayoutGrid,
  BookOpen,
  Calculator,
  BarChart2,
  Columns,
  Code2,
  Smartphone,
  Monitor,
  Tablet,
  Maximize2,
  Globe,
  Layers,
  List,
  GripVertical,
  PanelLeftClose,
  PanelLeftOpen,
} from 'lucide-react';

type ActiveWorkspaceTab =
  | 'single_studio'
  | 'split_view'
  | 'all_blueprints_feed'
  | 'pdf_side_by_side';

type ChapterFilter =
  | 'ALL'
  | 'INTRO'
  | 'QUANT_QUANT'
  | 'QUAL_QUANT'
  | 'QUAL_QUAL'
  | 'MULTIVARIATE';

type ViewportSizeMode = 'full' | 'desktop' | 'tablet' | 'mobile';

export default function App() {
  const [selectedPage, setSelectedPage] = useState<number>(1);
  const [activeTab, setActiveTab] = useState<ActiveWorkspaceTab>('single_studio');
  const [chapterFilter, setChapterFilter] = useState<ChapterFilter>('ALL');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [langMode, setLangMode] = useState<'dual' | 'en' | 'km'>('dual');
  const [viewportMode, setViewportMode] = useState<ViewportSizeMode>('full');
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(true);
  const [copiedAll, setCopiedAll] = useState<boolean>(false);
  const [specsSubMode, setSpecsSubMode] = useState<'all_pages' | 'formulas'>('all_pages');
  const [isExportModalOpen, setIsExportModalOpen] = useState<boolean>(false);
  const [slideAnimCounter, setSlideAnimCounter] = useState<number>(1);
  const [sidebarWidth, setSidebarWidth] = useState<number>(320);
  const [isDraggingSidebar, setIsDraggingSidebar] = useState<boolean>(false);
  const [splitViewRatio, setSplitViewRatio] = useState<number>(50);
  const [isDraggingSplitView, setIsDraggingSplitView] = useState<boolean>(false);
  const mainScrollRef = useRef<HTMLElement | null>(null);
  const stepperStripRef = useRef<HTMLDivElement | null>(null);
  const workspaceRowRef = useRef<HTMLDivElement | null>(null);
  const splitViewContainerRef = useRef<HTMLDivElement | null>(null);

  const currentSlide = useMemo(
    () => ALL_41_SLIDES.find((s) => s.pageNumber === selectedPage) || ALL_41_SLIDES[0],
    [selectedPage]
  );

  const filteredSlides = useMemo(() => {
    return ALL_41_SLIDES.filter((slide) => {
      if (chapterFilter === 'INTRO' && (slide.pageNumber < 1 || slide.pageNumber > 7)) {
        return false;
      }
      if (chapterFilter === 'QUANT_QUANT' && (slide.pageNumber < 8 || slide.pageNumber > 21)) {
        return false;
      }
      if (chapterFilter === 'QUAL_QUANT' && (slide.pageNumber < 22 || slide.pageNumber > 27)) {
        return false;
      }
      if (chapterFilter === 'QUAL_QUAL' && (slide.pageNumber < 28 || slide.pageNumber > 33)) {
        return false;
      }
      if (chapterFilter === 'MULTIVARIATE' && (slide.pageNumber < 34 || slide.pageNumber > 41)) {
        return false;
      }

      if (!searchQuery.trim()) return true;
      const q = searchQuery.toLowerCase();
      return (
        String(slide.pageNumber).includes(q) ||
        slide.slideFooterNumber.toLowerCase().includes(q) ||
        slide.pageIdentity.titleEn.toLowerCase().includes(q) ||
        slide.pageIdentity.titleKm.toLowerCase().includes(q) ||
        slide.sectionTag.en.toLowerCase().includes(q) ||
        slide.sectionTag.km.toLowerCase().includes(q)
      );
    });
  }, [chapterFilter, searchQuery]);

  const handleDownloadAllMarkdown = () => {
    const fullMarkdown = formatAllSlidesToMarkdown();
    const blob = new Blob([fullMarkdown], { type: 'text/markdown;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Looker_Studio_41_Pages_Bivariate_Analysis_EN_KH.md';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleCopyAllMarkdown = () => {
    const fullMarkdown = formatAllSlidesToMarkdown();
    navigator.clipboard.writeText(fullMarkdown);
    setCopiedAll(true);
    setTimeout(() => setCopiedAll(false), 2500);
  };

  const scrollRightPaneToTop = () => {
    if (mainScrollRef.current) {
      mainScrollRef.current.scrollTop = 0;
      mainScrollRef.current.scrollTo({ top: 0 });
    }
    window.scrollTo({ top: 0 });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  };

  useEffect(() => {
    if (activeTab !== 'all_blueprints_feed') {
      scrollRightPaneToTop();
      const rafId = requestAnimationFrame(() => {
        scrollRightPaneToTop();
      });
      return () => cancelAnimationFrame(rafId);
    }
  }, [selectedPage, slideAnimCounter, activeTab]);

  // Global pointer drag listeners for Left-Right Sidebar Resizer & Split-View Resizer
  useEffect(() => {
    if (!isDraggingSidebar && !isDraggingSplitView) return;

    const handlePointerMove = (e: PointerEvent) => {
      if (isDraggingSidebar) {
        const containerLeft = workspaceRowRef.current?.getBoundingClientRect().left || 0;
        const rawWidth = e.clientX - containerLeft;
        if (rawWidth < 120) {
          setSidebarOpen(false);
          setIsDraggingSidebar(false);
          return;
        }
        const maxAllowed = Math.min(640, Math.floor(window.innerWidth * 0.62));
        const clampedWidth = Math.max(210, Math.min(maxAllowed, rawWidth));
        setSidebarWidth(clampedWidth);
      }

      if (isDraggingSplitView && splitViewContainerRef.current) {
        const rect = splitViewContainerRef.current.getBoundingClientRect();
        if (rect.width > 0) {
          const pct = ((e.clientX - rect.left) / rect.width) * 100;
          setSplitViewRatio(Math.max(25, Math.min(75, Math.round(pct))));
        }
      }
    };

    const handlePointerUp = () => {
      setIsDraggingSidebar(false);
      setIsDraggingSplitView(false);
    };

    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('pointerup', handlePointerUp);
    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerup', handlePointerUp);
    };
  }, [isDraggingSidebar, isDraggingSplitView]);

  const handleSelectSlide = (pageNum: number) => {
    const clamped = Math.max(1, Math.min(41, pageNum));
    setSelectedPage(clamped);
    setSlideAnimCounter((prev) => prev + 1);

    if (activeTab === 'all_blueprints_feed') {
      setTimeout(() => {
        const el = document.getElementById(`blueprint-page-${clamped}`);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 40);
    } else {
      scrollRightPaneToTop();
    }

    // Scroll only the horizontal stepper container (1..41) without calling scrollIntoView
    setTimeout(() => {
      const strip = stepperStripRef.current;
      const stepperBtn = document.getElementById(`stepper-btn-${clamped}`);
      if (strip && stepperBtn) {
        const targetLeft =
          stepperBtn.offsetLeft - strip.clientWidth / 2 + stepperBtn.clientWidth / 2;
        strip.scrollTo({ left: Math.max(0, targetLeft), behavior: 'smooth' });
      }
    }, 40);
  };

  return (
    <div className="min-h-screen md:h-screen md:overflow-hidden bg-[#060A12] text-slate-100 flex flex-col">
      {/* Executive Dark Slate & Navy Top Header (Matching Reference Image) */}
      <header className="shrink-0 z-30 bg-[#080D1A] text-white border-b border-[#1E293B] px-4 lg:px-6 py-3 space-y-2.5">
        {/* Top Row: Brand Identity on Left & 4 Mode Tabs on Right */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          {/* Brand Identity + Author Badge */}
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-10 h-10 rounded-xl bg-[#0B192C] border-2 border-[#0EA5E9] flex items-center justify-center text-[#38BDF8] shrink-0 shadow-[0_0_15px_rgba(14,165,233,0.25)]">
              <BarChart2 className="w-5 h-5" />
            </div>
            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-base sm:text-lg font-extrabold tracking-tight text-white">
                  Looker Studio BI Blueprints
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-amber-500/15 border border-amber-500/40 text-amber-400 text-xs font-bold">
                  Mr. POL Utdom
                </span>
              </div>
              <div className="text-xs text-slate-400 khmer-text truncate mt-0.5">
                ការវិភាគទិន្នន័យទ្វេអថេរ (Bivariate Analysis) • ៤១ ស្លាយឯករាជ្យ
              </div>
            </div>
          </div>

          {/* Right Mode Switcher: Canvas | Split View | Specs | PDF */}
          <nav className="flex items-center gap-1 bg-[#050811] p-1 rounded-xl border border-[#1E293B]">
            <button
              onClick={() => setActiveTab('single_studio')}
              className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                activeTab === 'single_studio'
                  ? 'bg-[#0284C7] text-white shadow-xs'
                  : 'text-slate-400 hover:text-white hover:bg-[#111C30]'
              }`}
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span>Canvas</span>
            </button>
            <button
              onClick={() => setActiveTab('split_view')}
              className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                activeTab === 'split_view'
                  ? 'bg-[#0284C7] text-white shadow-xs'
                  : 'text-slate-400 hover:text-white hover:bg-[#111C30]'
              }`}
            >
              <Columns className="w-3.5 h-3.5" />
              <span>Split View</span>
            </button>
            <button
              onClick={() => setActiveTab('all_blueprints_feed')}
              className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                activeTab === 'all_blueprints_feed'
                  ? 'bg-[#0284C7] text-white shadow-xs'
                  : 'text-slate-400 hover:text-white hover:bg-[#111C30]'
              }`}
            >
              <Code2 className="w-3.5 h-3.5" />
              <span>Specs</span>
            </button>
            <button
              onClick={() => setActiveTab('pdf_side_by_side')}
              className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                activeTab === 'pdf_side_by_side'
                  ? 'bg-[#0284C7] text-white shadow-xs'
                  : 'text-slate-400 hover:text-white hover:bg-[#111C30]'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>PDF</span>
            </button>
          </nav>
        </div>

        {/* Second Row: 4-Option Viewport Switcher (ទំហំពេញ (Full) | Desktop | Tablet | Mobile), Language Toggle & Export Button */}
        <div className="flex flex-wrap items-center gap-2.5 pt-1">
          {/* 4-Mode Viewport Pill Switcher matching Reference Image */}
          <div className="inline-flex flex-wrap items-center gap-1 bg-[#050811] border border-[#1E293B] rounded-2xl p-1">
            <button
              onClick={() => setViewportMode('full')}
              className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer khmer-text ${
                viewportMode === 'full'
                  ? 'bg-[#4F46E5] text-white shadow-[0_0_15px_rgba(79,70,229,0.45)]'
                  : 'text-slate-400 hover:text-white hover:bg-[#111C30]'
              }`}
            >
              <Maximize2 className="w-3.5 h-3.5" />
              <span>ទំហំពេញ (Full)</span>
            </button>
            <button
              onClick={() => setViewportMode('desktop')}
              className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                viewportMode === 'desktop'
                  ? 'bg-[#4F46E5] text-white shadow-[0_0_15px_rgba(79,70,229,0.45)]'
                  : 'text-slate-400 hover:text-white hover:bg-[#111C30]'
              }`}
            >
              <Monitor className="w-3.5 h-3.5" />
              <span>Desktop</span>
            </button>
            <button
              onClick={() => setViewportMode('tablet')}
              className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                viewportMode === 'tablet'
                  ? 'bg-[#4F46E5] text-white shadow-[0_0_15px_rgba(79,70,229,0.45)]'
                  : 'text-slate-400 hover:text-white hover:bg-[#111C30]'
              }`}
            >
              <Tablet className="w-3.5 h-3.5" />
              <span>Tablet</span>
            </button>
            <button
              onClick={() => setViewportMode('mobile')}
              className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                viewportMode === 'mobile'
                  ? 'bg-[#4F46E5] text-white shadow-[0_0_15px_rgba(79,70,229,0.45)]'
                  : 'text-slate-400 hover:text-white hover:bg-[#111C30]'
              }`}
            >
              <Smartphone className="w-3.5 h-3.5" />
              <span>Mobile</span>
            </button>
          </div>

          {/* Language Switcher: Dual | EN | ខ្មែរ */}
          <div className="inline-flex items-center gap-1 bg-[#050811] border border-[#1E293B] rounded-xl p-1">
            <Globe className="w-3.5 h-3.5 text-slate-400 ml-2 mr-1" />
            {(
              [
                { id: 'dual', label: 'Dual' },
                { id: 'en', label: 'EN' },
                { id: 'km', label: 'ខ្មែរ' },
              ] as const
            ).map((item) => (
              <button
                key={item.id}
                onClick={() => setLangMode(item.id)}
                className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-colors cursor-pointer khmer-text ${
                  langMode === item.id
                    ? 'bg-[#0284C7] text-white'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Emerald Green Export Report Button */}
          <button
            onClick={() => setIsExportModalOpen(true)}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-xl bg-[#059669] hover:bg-[#10B981] text-white text-xs font-bold transition-colors cursor-pointer shadow-xs"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Export Report</span>
          </button>
        </div>
      </header>

      {/* Main Split Workspace (Draggable Left-Right Resizable Panes on Tablet/Desktop) */}
      <div
        ref={workspaceRowRef}
        className={`flex-1 flex flex-col md:flex-row md:overflow-hidden min-h-0 relative ${
          isDraggingSidebar || isDraggingSplitView ? 'select-none cursor-col-resize' : ''
        }`}
      >
        {/* Collapsed Sidebar Quick Pull-Tab Handle on Far Left */}
        {!sidebarOpen && (
          <button
            onClick={() => setSidebarOpen(true)}
            className="hidden md:flex flex-col items-center justify-center w-6 bg-[#080D1A] hover:bg-[#0D1B30] border-r border-[#1E293B] hover:border-[#0EA5E9] text-slate-400 hover:text-[#38BDF8] transition-colors cursor-pointer shrink-0 group"
            title="បើកបញ្ជីស្លាយខាងឆ្វេង (Open Slide List Sidebar)"
          >
            <PanelLeftOpen className="w-4 h-4 group-hover:scale-110 transition-transform" />
          </button>
        )}

        {/* Left Sidebar: 41 Isolated Slide Navigator with Dynamic Resizable Width */}
        {sidebarOpen && (
          <aside
            style={{ width: typeof window !== 'undefined' && window.innerWidth >= 768 ? `${sidebarWidth}px` : undefined }}
            className="w-full md:w-[var(--sidebar-w)] bg-[#080D1A] border-b md:border-b-0 border-[#1E293B] shrink-0 flex flex-col md:h-full md:overflow-hidden"
          >
            {/* Sidebar Header, Khmer Search & Category Pills */}
            <div className="p-4 border-b border-[#1E293B] space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-200 khmer-text">
                  <Layers className="w-4 h-4 text-[#38BDF8]" />
                  <span>បញ្ជីស្លាយទាំង ៤១ (SLIDES)</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="px-2.5 py-0.5 rounded-md bg-[#082F49] border border-[#0284C7]/60 text-[#38BDF8] font-mono text-xs font-bold tabular-nums">
                    {filteredSlides.length} / 41
                  </span>
                  <button
                    onClick={() => setSidebarOpen(false)}
                    className="hidden md:inline-flex p-1 rounded-md bg-[#111C30] hover:bg-[#1E293B] border border-[#1E293B] text-slate-400 hover:text-white transition-colors cursor-pointer"
                    title="បង្រួមរបារខាងឆ្វេង (Collapse Sidebar)"
                  >
                    <PanelLeftClose className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Search Input with Khmer Placeholder */}
              <div className="relative">
                <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="ស្វែងរកស្លាយ, រូបមន្ត, ប្រធានបទ..."
                  className="w-full pl-9 pr-3 py-2 text-xs bg-[#050811] border border-[#1E293B] rounded-xl focus:outline-none focus:border-[#0EA5E9] text-slate-100 placeholder:text-slate-500 khmer-text"
                />
              </div>

              {/* Category Filter Buttons */}
              <div className="flex flex-wrap gap-1.5">
                {[
                  { id: 'ALL', label: 'All Slides (1-41)' },
                  { id: 'INTRO', label: 'Intro & Univariate' },
                  { id: 'QUANT_QUANT', label: 'Quant × Quant' },
                  { id: 'QUAL_QUANT', label: 'Qual × Quant' },
                  { id: 'QUAL_QUAL', label: 'Qual × Qual' },
                  { id: 'MULTIVARIATE', label: 'Multivariate & Time' },
                ].map((ch) => (
                  <button
                    key={ch.id}
                    onClick={() => setChapterFilter(ch.id as ChapterFilter)}
                    className={`px-2.5 py-1 rounded-lg text-[11px] font-semibold transition-all cursor-pointer tabular-nums ${
                      chapterFilter === ch.id
                        ? 'bg-[#0284C7] text-white shadow-xs'
                        : 'bg-[#0F172A] border border-[#1E293B] text-slate-300 hover:text-white hover:border-slate-600'
                    }`}
                  >
                    {ch.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Scrollable 41 Slide Cards */}
            <div className="flex-1 overflow-y-auto p-3 space-y-2.5 max-h-80 md:max-h-none">
              {filteredSlides.map((slide) => {
                const isSelected = slide.pageNumber === selectedPage;
                return (
                  <button
                    key={slide.pageNumber}
                    onClick={() => handleSelectSlide(slide.pageNumber)}
                    className={`w-full text-left p-3.5 rounded-2xl transition-all flex items-start gap-3 cursor-pointer ${
                      isSelected
                        ? 'bg-[#0D1B30] border-2 border-[#0EA5E9] shadow-[0_0_20px_rgba(14,165,233,0.18)]'
                        : 'bg-[#0B1120] border border-[#1E293B] hover:border-slate-700 hover:bg-[#0E1629]'
                    }`}
                  >
                    {/* Number Badge */}
                    <div
                      className={`w-8 h-8 rounded-lg font-mono text-xs font-extrabold flex items-center justify-center shrink-0 mt-0.5 tabular-nums ${
                        isSelected
                          ? 'bg-[#0EA5E9] text-slate-950'
                          : 'bg-[#162033] text-slate-400 border border-[#263552]'
                      }`}
                    >
                      {slide.pageNumber}
                    </div>

                    <div className="min-w-0 flex-1 space-y-1">
                      <div className="flex items-center justify-between gap-2 text-[10px] font-mono uppercase tracking-wider">
                        <span className="text-slate-400 truncate">{slide.sectionTag.en}</span>
                        {isSelected ? (
                          <span className="text-[#38BDF8] font-bold shrink-0 flex items-center gap-0.5">
                            ACTIVE <ChevronRight className="w-3 h-3" />
                          </span>
                        ) : (
                          <ChevronRight className="w-3 h-3 text-slate-600 shrink-0" />
                        )}
                      </div>

                      {langMode !== 'km' && (
                        <div className="text-xs font-bold text-white leading-snug break-words line-clamp-2">
                          {slide.pageIdentity.titleEn}
                        </div>
                      )}
                      {langMode !== 'en' && (
                        <div
                          className={`text-xs khmer-text font-semibold leading-relaxed break-words line-clamp-2 ${
                            isSelected ? 'text-[#FACC15]' : 'text-[#FDE047]/85'
                          }`}
                        >
                          {slide.pageIdentity.titleKm}
                        </div>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          </aside>
        )}

        {/* Interactive Draggable Left-Right Split Resizer Handle */}
        {sidebarOpen && (
          <div
            onPointerDown={(e) => {
              e.preventDefault();
              setIsDraggingSidebar(true);
            }}
            onDoubleClick={() => setSidebarWidth(320)}
            title="ទាញឆ្វេង-ស្ដាំដើម្បីពង្រីក ឬបង្រួម (Drag Left/Right to Resize • Double-click to Reset)"
            className={`hidden md:flex flex-col items-center justify-center w-3 shrink-0 cursor-col-resize relative group select-none z-20 transition-colors ${
              isDraggingSidebar
                ? 'bg-[#0EA5E9]/30'
                : 'bg-[#060A12] hover:bg-[#0EA5E9]/15'
            }`}
          >
            {/* Full-height divider line */}
            <div
              className={`w-[2px] h-full transition-colors ${
                isDraggingSidebar
                  ? 'bg-[#FACC15] shadow-[0_0_12px_#FACC15]'
                  : 'bg-[#1E293B] group-hover:bg-[#38BDF8]'
              }`}
            />

            {/* Center Tactile Grip Pill */}
            <div
              className={`absolute top-1/2 -translate-y-1/2 flex flex-col items-center justify-center py-2.5 px-1 rounded-full border transition-all shadow-lg ${
                isDraggingSidebar
                  ? 'bg-[#082F49] border-[#FACC15] text-[#FACC15] scale-110 shadow-[0_0_16px_rgba(250,204,21,0.5)]'
                  : 'bg-[#0D1527] border-[#263552] group-hover:border-[#38BDF8] text-slate-400 group-hover:text-white group-hover:scale-105'
              }`}
            >
              <GripVertical className="w-3.5 h-3.5" />
            </div>

            {/* Live Width Readout Badge while Dragging or Hovering */}
            <div
              className={`pointer-events-none absolute top-1/2 -translate-y-12 left-4 px-2 py-0.5 rounded-md bg-[#060A14]/95 border border-[#38BDF8] text-[10px] font-mono font-bold text-[#FACC15] whitespace-nowrap shadow-lg transition-opacity ${
                isDraggingSidebar ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
              }`}
            >
              {Math.round(sidebarWidth)}px · ទាញឆ្វេង-ស្ដាំ
            </div>
          </div>
        )}

        {/* Right Primary Content Area */}
        <main
          ref={mainScrollRef}
          className="flex-1 min-w-0 p-4 lg:p-6 space-y-5 md:h-full md:overflow-y-auto overflow-x-hidden"
        >
          {/* Top Numbered Slide Stepper Bar (Matching Reference Image) */}
          <div className="bg-[#0B1120] border border-[#1E293B] rounded-2xl p-4 space-y-3 shadow-lg">
            {/* Breadcrumb Row */}
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-2.5 text-xs sm:text-sm">
                <button
                  onClick={() => setSidebarOpen((prev) => !prev)}
                  className="p-1.5 rounded-lg bg-[#111C30] border border-[#1E293B] text-slate-300 hover:text-white cursor-pointer"
                  title="Toggle Slide List Sidebar"
                >
                  <List className="w-4 h-4" />
                </button>
                <span className="text-slate-400 font-mono">Lecture 02</span>
                <span className="text-slate-600">/</span>
                <span className="font-bold text-white tabular-nums">
                  Slide {currentSlide.pageNumber} of 41
                </span>
                <span className="text-slate-600">/</span>
                <span className="font-mono text-[#38BDF8] font-medium">
                  {currentSlide.sectionTag.en}
                </span>
              </div>

              <div className="hidden sm:block text-xs font-mono text-slate-400 tabular-nums">
                PDF Footer #{currentSlide.slideFooterNumber}
              </div>
            </div>

            {/* Numbered Stepper Row: < Prev Slide | 1 2 3 4 ... 41 | Next Slide > */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => handleSelectSlide(selectedPage - 1)}
                disabled={selectedPage === 1}
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-[#111C30] hover:bg-[#1E293B] border border-[#1E293B] disabled:opacity-40 text-xs font-semibold text-slate-200 cursor-pointer disabled:cursor-not-allowed shrink-0"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
                <span>Prev Slide</span>
              </button>

              {/* Scrollable Numbered Buttons 1..41 */}
              <div
                ref={stepperStripRef}
                className="relative flex-1 flex items-center gap-1.5 overflow-x-auto py-1 px-1"
              >
                {ALL_41_SLIDES.map((s) => {
                  const active = s.pageNumber === selectedPage;
                  return (
                    <button
                      key={s.pageNumber}
                      id={`stepper-btn-${s.pageNumber}`}
                      onClick={() => handleSelectSlide(s.pageNumber)}
                      className={`w-8 h-8 rounded-lg font-mono text-xs font-bold shrink-0 transition-all cursor-pointer tabular-nums ${
                        active
                          ? 'bg-[#0284C7] text-white shadow-[0_0_12px_rgba(2,132,199,0.5)]'
                          : 'bg-[#111C30] text-slate-400 hover:text-white hover:bg-[#1E293B] border border-[#1E293B]'
                      }`}
                    >
                      {s.pageNumber}
                    </button>
                  );
                })}
              </div>

              <button
                onClick={() => handleSelectSlide(selectedPage + 1)}
                disabled={selectedPage === 41}
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-[#111C30] hover:bg-[#1E293B] border border-[#1E293B] disabled:opacity-40 text-xs font-semibold text-slate-200 cursor-pointer disabled:cursor-not-allowed shrink-0"
              >
                <span>Next Slide</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Responsive Viewport Wrapper with Keyed Slide-In-From-Right Animation */}
          <div
            key={`slide-pane-${selectedPage}-${slideAnimCounter}-${activeTab}`}
            className={`animate-pane-slide-right ${
              viewportMode === 'mobile'
                ? 'max-w-[430px] mx-auto w-full space-y-6 transition-all duration-300'
                : viewportMode === 'tablet'
                ? 'max-w-[820px] mx-auto w-full space-y-6 transition-all duration-300'
                : viewportMode === 'desktop'
                ? 'max-w-[1280px] mx-auto w-full space-y-6 transition-all duration-300'
                : 'w-full max-w-none space-y-6 transition-all duration-300'
            }`}
          >
            {/* MODE 1: CANVAS (Live Looker Studio 16:9 Canvas + 5-Section Blueprint below) */}
            {activeTab === 'single_studio' && (
              <>
                <LookerCanvasSimulator
                  slide={currentSlide}
                  onJumpToSlide={(pageNum) => handleSelectSlide(pageNum)}
                  langMode={langMode}
                />

                <BlueprintSpecificationView slide={currentSlide} langMode={langMode} />
              </>
            )}

            {/* MODE 2: SPLIT VIEW (Draggable Left-Right Split between Original PDF Slide & Live Looker Studio Canvas) */}
            {activeTab === 'split_view' && (
              <>
                <div
                  ref={splitViewContainerRef}
                  className="flex flex-col xl:flex-row items-stretch gap-4 xl:gap-0 relative"
                >
                  {/* Left Split Pane: Original PDF Slide */}
                  <div
                    style={{
                      width:
                        typeof window !== 'undefined' && window.innerWidth >= 1280
                          ? `${splitViewRatio}%`
                          : undefined,
                    }}
                    className="w-full xl:pr-2 min-w-0"
                  >
                    <OriginalPdfSlideViewer
                      currentSlide={currentSlide}
                      onSelectPage={handleSelectSlide}
                      showFilmstrip={false}
                    />
                  </div>

                  {/* Draggable Split-View Resizer Handle (Desktop XL) */}
                  <div
                    onPointerDown={(e) => {
                      e.preventDefault();
                      setIsDraggingSplitView(true);
                    }}
                    onDoubleClick={() => setSplitViewRatio(50)}
                    title="ទាញឆ្វេង-ស្ដាំដើម្បីប្ដូរទំហំ Split View (Drag to Resize • Double-click for 50/50)"
                    className="hidden xl:flex flex-col items-center justify-center w-4 shrink-0 cursor-col-resize group relative select-none my-2"
                  >
                    <div
                      className={`w-[2px] h-full rounded-full transition-colors ${
                        isDraggingSplitView
                          ? 'bg-[#FACC15] shadow-[0_0_12px_#FACC15]'
                          : 'bg-[#1E293B] group-hover:bg-[#38BDF8]'
                      }`}
                    />
                    <div
                      className={`sticky top-1/2 flex flex-col items-center justify-center py-2.5 px-1 rounded-full border transition-all shadow-lg ${
                        isDraggingSplitView
                          ? 'bg-[#082F49] border-[#FACC15] text-[#FACC15] scale-110'
                          : 'bg-[#0D1527] border-[#263552] group-hover:border-[#38BDF8] text-slate-400 group-hover:text-white'
                      }`}
                    >
                      <GripVertical className="w-3.5 h-3.5" />
                    </div>
                    <div
                      className={`pointer-events-none absolute top-4 px-2 py-0.5 rounded bg-[#060A14]/95 border border-[#38BDF8] text-[10px] font-mono font-bold text-[#FACC15] whitespace-nowrap transition-opacity ${
                        isDraggingSplitView ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                      }`}
                    >
                      {splitViewRatio}% / {100 - splitViewRatio}%
                    </div>
                  </div>

                  {/* Right Split Pane: Live Looker Studio Canvas */}
                  <div
                    style={{
                      width:
                        typeof window !== 'undefined' && window.innerWidth >= 1280
                          ? `${100 - splitViewRatio}%`
                          : undefined,
                    }}
                    className="w-full xl:pl-2 min-w-0"
                  >
                    <LookerCanvasSimulator
                      slide={currentSlide}
                      onJumpToSlide={(pageNum) => handleSelectSlide(pageNum)}
                      langMode={langMode}
                    />
                  </div>
                </div>

                <BlueprintSpecificationView slide={currentSlide} langMode={langMode} />
              </>
            )}

            {/* MODE 3: SPECS (All 41 Blueprints Feed + Formula & Chart Directory) */}
            {activeTab === 'all_blueprints_feed' && (
              <div className="space-y-6">
                <div className="bg-[#0B1120] border border-[#1E293B] rounded-2xl p-5 flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <div className="text-xs font-mono uppercase text-[#38BDF8] font-bold tabular-nums">
                      STRICT 1-TO-1 SLIDE ISOLATION · NO MERGING OR SKIPPING
                    </div>
                    <h1 className="text-lg font-extrabold text-white mt-0.5">
                      Complete 41-Page Google Looker Studio Blueprint Specification (English & Khmer)
                    </h1>
                    <p className="text-sm text-[#FACC15] khmer-text mt-0.5 font-medium">
                      ប្លង់មេលម្អិតទាំង ៤១ ទំព័រដាច់ៗពីគ្នា សម្រាប់បង្កើតរបាយការណ៍អន្តរកម្មក្នុង Google Looker Studio
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-2">
                    <div className="inline-flex bg-[#050811] border border-[#1E293B] rounded-xl p-1">
                      <button
                        onClick={() => setSpecsSubMode('all_pages')}
                        className={`px-3 py-1.5 rounded-lg text-xs font-bold cursor-pointer ${
                          specsSubMode === 'all_pages'
                            ? 'bg-[#0284C7] text-white'
                            : 'text-slate-400 hover:text-white'
                        }`}
                      >
                        All 41 Page Specs
                      </button>
                      <button
                        onClick={() => setSpecsSubMode('formulas')}
                        className={`px-3 py-1.5 rounded-lg text-xs font-bold cursor-pointer ${
                          specsSubMode === 'formulas'
                            ? 'bg-[#0284C7] text-white'
                            : 'text-slate-400 hover:text-white'
                        }`}
                      >
                        Formulas & Chart Matrix
                      </button>
                    </div>

                    <button
                      onClick={handleCopyAllMarkdown}
                      className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#111C30] hover:bg-[#1E293B] border border-[#263552] text-white text-xs font-semibold transition-colors cursor-pointer"
                    >
                      {copiedAll ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                          <span>Copied All 41 Pages</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5 text-[#38BDF8]" />
                          <span>Copy All 41 Blueprints (.md)</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

                {specsSubMode === 'all_pages' ? (
                  <div className="space-y-8">
                    {filteredSlides.map((slide) => (
                      <div key={slide.pageNumber} id={`blueprint-page-${slide.pageNumber}`}>
                        <BlueprintSpecificationView slide={slide} langMode={langMode} />
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="space-y-6">
                    {/* Mathematical Equations Directory */}
                    <div className="bg-[#0B1120] border border-[#1E293B] rounded-2xl p-6 space-y-4">
                      <div className="flex items-center gap-2 text-xs font-mono uppercase text-[#38BDF8] font-bold">
                        <Calculator className="w-4 h-4" />
                        <span>ALL MATHEMATICAL EQUATIONS & BILINGUAL VARIABLE DEFINITIONS</span>
                      </div>
                      <div className="space-y-4">
                        {ALL_41_SLIDES.filter((s) => s.chartMetricsMath.formulas.length > 0).map(
                          (slide) => (
                            <div
                              key={slide.pageNumber}
                              className="border border-[#1E293B] rounded-xl overflow-hidden bg-[#080D1A]"
                            >
                              <div className="bg-[#0D1526] px-4 py-3 flex flex-wrap items-center justify-between gap-2 border-b border-[#1E293B]">
                                <div className="text-xs font-bold text-white tabular-nums">
                                  Page {slide.pageNumber} (Slide #{slide.slideFooterNumber}):{' '}
                                  {slide.pageIdentity.titleEn} ·{' '}
                                  <span className="khmer-text text-[#FACC15]">
                                    {slide.pageIdentity.titleKm}
                                  </span>
                                </div>
                                <button
                                  onClick={() => {
                                    handleSelectSlide(slide.pageNumber);
                                    setActiveTab('single_studio');
                                  }}
                                  className="text-xs font-semibold text-[#38BDF8] hover:underline cursor-pointer"
                                >
                                  Open Page {slide.pageNumber} Canvas →
                                </button>
                              </div>
                              <div className="p-4 space-y-4">
                                {slide.chartMetricsMath.formulas.map((fm, idx) => (
                                  <div key={idx} className="space-y-3 bg-[#050811] p-4 rounded-xl border border-[#1E293B]">
                                    <div className="flex flex-wrap justify-between gap-2">
                                      <span className="text-xs font-bold text-[#38BDF8]">
                                        <RichMathText text={fm.title.en} />
                                      </span>
                                      <span className="text-xs text-[#FACC15] khmer-text font-semibold">
                                        <RichMathText text={fm.title.km} />
                                      </span>
                                    </div>
                                    <div className="text-emerald-300 bg-[#03060C] p-4 rounded-xl border border-[#0EA5E9]/30 overflow-x-auto">
                                      <MathEquationDisplay equation={fm.equation} />
                                    </div>
                                    {fm.variables.length > 0 && (
                                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 pt-1">
                                        {fm.variables.map((v, vIdx) => (
                                          <div
                                            key={vIdx}
                                            className="flex items-start gap-2.5 p-2.5 rounded-lg bg-[#0B1120] border border-[#1E293B] text-xs"
                                          >
                                            <span className="px-2 py-0.5 rounded bg-[#111C30] border border-[#0284C7]/40 text-amber-300 shrink-0">
                                              <MathSymbolBadge symbol={v.symbol} />
                                            </span>
                                            <div className="space-y-0.5 min-w-0">
                                              <div className="text-slate-200">
                                                <RichMathText text={v.en} />
                                              </div>
                                              <div className="text-[#FACC15] khmer-text">
                                                <RichMathText text={v.km} />
                                              </div>
                                            </div>
                                          </div>
                                        ))}
                                      </div>
                                    )}
                                  </div>
                                ))}
                              </div>
                            </div>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* MODE 4: PDF (Original PDF Slide Deck Viewer + Blueprint) */}
            {activeTab === 'pdf_side_by_side' && (
              <div className="space-y-6">
                <OriginalPdfSlideViewer
                  currentSlide={currentSlide}
                  onSelectPage={handleSelectSlide}
                  showFilmstrip={true}
                />

                <BlueprintSpecificationView slide={currentSlide} langMode={langMode} />
              </div>
            )}
          </div>
        </main>
      </div>

      {/* Multi-Format Slide & Blueprint Export Modal */}
      <ExportReportModal
        isOpen={isExportModalOpen}
        onClose={() => setIsExportModalOpen(false)}
        slides={ALL_41_SLIDES}
      />
    </div>
  );
}
