import React, { useState } from 'react';
import { SlideBlueprint } from '../types/blueprint';
import { ALL_41_SLIDES } from '../data/allSlides';
import {
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  Download,
  Grid,
  Maximize2,
} from 'lucide-react';

interface OriginalPdfSlideViewerProps {
  currentSlide: SlideBlueprint;
  onSelectPage: (pageNumber: number) => void;
  showFilmstrip?: boolean;
}

export const OriginalPdfSlideViewer: React.FC<OriginalPdfSlideViewerProps> = ({
  currentSlide,
  onSelectPage,
  showFilmstrip = true,
}) => {
  const [zoomPercent, setZoomPercent] = useState<number>(100);
  const [showAllGridModal, setShowAllGridModal] = useState<boolean>(false);

  const slideImageUrl = `/assets/slides/slide-${currentSlide.pageNumber}.png`;
  const pdfUrl = `/assets/aistudio/II._Bivariate_Analysis_5ea6f796.pdf`;

  return (
    <div className="bg-slate-900 rounded-xl border border-slate-800 overflow-hidden shadow-sm text-white">
      {/* Top Toolbar */}
      <div className="px-4 py-3 bg-slate-950 border-b border-slate-800 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <span className="px-2.5 py-1 rounded bg-blue-600/20 border border-blue-500/40 text-blue-300 font-mono text-xs font-bold tabular-nums">
            ORIGINAL PDF SLIDE {currentSlide.pageNumber} / 41
          </span>
          <div className="text-xs text-slate-300 truncate">
            <span className="font-semibold text-white">{currentSlide.pageIdentity.titleEn}</span>
            <span className="mx-2 text-slate-600">·</span>
            <span className="text-slate-400 font-mono tabular-nums">
              Footer #{currentSlide.slideFooterNumber}
            </span>
          </div>
        </div>

        {/* Viewer Controls */}
        <div className="flex flex-wrap items-center gap-2">
          {/* Prev / Next */}
          <div className="flex items-center bg-slate-900 border border-slate-800 rounded-lg p-0.5">
            <button
              onClick={() => onSelectPage(Math.max(1, currentSlide.pageNumber - 1))}
              disabled={currentSlide.pageNumber === 1}
              className="px-2.5 py-1 rounded text-xs font-medium text-slate-300 hover:text-white hover:bg-slate-800 disabled:opacity-40 cursor-pointer disabled:cursor-not-allowed flex items-center gap-1"
              title="Previous Slide"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
              <span>Prev</span>
            </button>
            <span className="px-2.5 text-xs font-mono text-slate-400 tabular-nums">
              {currentSlide.pageNumber} / 41
            </span>
            <button
              onClick={() => onSelectPage(Math.min(41, currentSlide.pageNumber + 1))}
              disabled={currentSlide.pageNumber === 41}
              className="px-2.5 py-1 rounded text-xs font-medium text-slate-300 hover:text-white hover:bg-slate-800 disabled:opacity-40 cursor-pointer disabled:cursor-not-allowed flex items-center gap-1"
              title="Next Slide"
            >
              <span>Next</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Zoom Controls */}
          <div className="flex items-center bg-slate-900 border border-slate-800 rounded-lg p-0.5">
            <button
              onClick={() => setZoomPercent((z) => Math.max(60, z - 20))}
              className="p-1.5 rounded text-slate-300 hover:text-white hover:bg-slate-800 cursor-pointer"
              title="Zoom Out"
            >
              <ZoomOut className="w-3.5 h-3.5" />
            </button>
            <span className="px-2 text-xs font-mono text-slate-300 tabular-nums">
              {zoomPercent}%
            </span>
            <button
              onClick={() => setZoomPercent((z) => Math.min(200, z + 20))}
              className="p-1.5 rounded text-slate-300 hover:text-white hover:bg-slate-800 cursor-pointer"
              title="Zoom In"
            >
              <ZoomIn className="w-3.5 h-3.5" />
            </button>
            {zoomPercent !== 100 && (
              <button
                onClick={() => setZoomPercent(100)}
                className="p-1.5 rounded text-slate-400 hover:text-white hover:bg-slate-800 cursor-pointer"
                title="Reset Zoom"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Toggle 41-Slide Contact Sheet Grid */}
          <button
            onClick={() => setShowAllGridModal((prev) => !prev)}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors cursor-pointer ${
              showAllGridModal
                ? 'bg-blue-600 text-white border-blue-500'
                : 'bg-slate-900 text-slate-300 border-slate-800 hover:bg-slate-800'
            }`}
          >
            <Grid className="w-3.5 h-3.5" />
            <span>{showAllGridModal ? 'Single Slide View' : 'All 41 Slides Grid'}</span>
          </button>

          {/* Download Original PDF */}
          <a
            href={pdfUrl}
            download="II._Bivariate_Analysis.pdf"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium border border-slate-700 transition-colors"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download PDF</span>
          </a>
        </div>
      </div>

      {/* Main Slide Canvas Area or 41-Slide Contact Sheet Grid */}
      {showAllGridModal ? (
        <div className="p-5 bg-slate-950 max-h-[680px] overflow-y-auto">
          <div className="flex items-center justify-between mb-4">
            <div className="text-xs font-mono uppercase text-slate-400">
              ALL 41 ORIGINAL PDF SLIDES — CLICK ANY SLIDE TO INSPECT ITS LOOKER STUDIO BLUEPRINT
            </div>
            <button
              onClick={() => setShowAllGridModal(false)}
              className="text-xs text-blue-400 hover:underline cursor-pointer"
            >
              Return to Single Slide View
            </button>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-4">
            {ALL_41_SLIDES.map((s) => {
              const active = s.pageNumber === currentSlide.pageNumber;
              return (
                <button
                  key={s.pageNumber}
                  onClick={() => {
                    onSelectPage(s.pageNumber);
                    setShowAllGridModal(false);
                  }}
                  className={`group text-left rounded-lg overflow-hidden border transition-all cursor-pointer bg-slate-900 ${
                    active
                      ? 'border-blue-500 ring-2 ring-blue-500/40'
                      : 'border-slate-800 hover:border-slate-600'
                  }`}
                >
                  <div className="aspect-[16/10] bg-white overflow-hidden relative">
                    <img
                      src={`/assets/slides/slide-${s.pageNumber}.png`}
                      alt={`Slide ${s.pageNumber}: ${s.pageIdentity.titleEn}`}
                      loading="lazy"
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform"
                    />
                    <span className="absolute top-1.5 left-1.5 px-1.5 py-0.5 rounded bg-slate-900/85 text-white font-mono text-[10px] font-bold tabular-nums">
                      Page {s.pageNumber}
                    </span>
                  </div>
                  <div className="p-2">
                    <div className="text-[11px] font-semibold text-slate-200 truncate">
                      {s.pageIdentity.titleEn}
                    </div>
                    <div className="text-[10px] text-slate-400 khmer-text truncate">
                      {s.pageIdentity.titleKm}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      ) : (
        <div className="p-4 sm:p-6 bg-slate-950/80 flex flex-col items-center justify-center overflow-x-auto">
          <div
            className="bg-white rounded-lg shadow-lg overflow-hidden border border-slate-700 transition-all duration-150"
            style={{
              width: `${zoomPercent}%`,
              maxWidth: zoomPercent === 100 ? '960px' : 'none',
            }}
          >
            <img
              key={currentSlide.pageNumber}
              src={slideImageUrl}
              alt={`Original PDF Slide ${currentSlide.pageNumber} — ${currentSlide.pageIdentity.titleEn}`}
              className="w-full h-auto block select-none"
            />
          </div>
        </div>
      )}

      {/* Optional Bottom Filmstrip of All 41 Slides */}
      {showFilmstrip && !showAllGridModal && (
        <div className="px-4 py-3 bg-slate-950 border-t border-slate-800">
          <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400 mb-2 flex items-center justify-between">
            <span>QUICK SLIDE FILMSTRIP (PAGES 1 TO 41)</span>
            <span>CLICK ANY THUMBNAIL TO SWITCH PAGE</span>
          </div>
          <div className="flex items-center gap-2.5 overflow-x-auto pb-1">
            {ALL_41_SLIDES.map((s) => {
              const active = s.pageNumber === currentSlide.pageNumber;
              return (
                <button
                  key={s.pageNumber}
                  onClick={() => onSelectPage(s.pageNumber)}
                  className={`shrink-0 w-28 rounded overflow-hidden border transition-all cursor-pointer text-left ${
                    active
                      ? 'border-blue-500 ring-2 ring-blue-500/50 bg-slate-800'
                      : 'border-slate-800 opacity-70 hover:opacity-100 bg-slate-900'
                  }`}
                >
                  <div className="aspect-[16/10] bg-white">
                    <img
                      src={`/assets/slides/slide-${s.pageNumber}.png`}
                      alt={`Thumb ${s.pageNumber}`}
                      loading="lazy"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="px-1.5 py-1 flex items-center justify-between text-[10px] font-mono tabular-nums">
                    <span className={active ? 'text-blue-300 font-bold' : 'text-slate-400'}>
                      P{s.pageNumber}
                    </span>
                    <span className="text-slate-500">#{s.slideFooterNumber}</span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
