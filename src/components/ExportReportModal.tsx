import React, { useState, useMemo } from 'react';
import { SlideBlueprint } from '../types/blueprint';
import {
  generateEditablePptxBlob,
  generateExactFontLockedPptxBlob,
  generateEditableHtmlSlidesBlob,
  getMarkdownPreviewText,
  getLookerStudioCsvText,
  getCalculatedFieldsSqlText,
} from '../utils/exportGenerators';
import {
  X,
  Download,
  Copy,
  Check,
  FileText,
  Layers,
  Globe,
  FileDown,
  MonitorPlay,
  BookOpen,
  Loader2,
} from 'lucide-react';

interface ExportReportModalProps {
  isOpen: boolean;
  onClose: () => void;
  slides: SlideBlueprint[];
}

type ExportPreviewTab = 'markdown' | 'csv' | 'sql';

export const ExportReportModal: React.FC<ExportReportModalProps> = ({
  isOpen,
  onClose,
  slides,
}) => {
  const [activePreviewTab, setActivePreviewTab] = useState<ExportPreviewTab>('markdown');
  const [copiedPreview, setCopiedPreview] = useState<boolean>(false);
  const [lockedProgress, setLockedProgress] = useState<string | null>(null);
  const [editableBusy, setEditableBusy] = useState<boolean>(false);

  const previewText = useMemo(() => {
    if (activePreviewTab === 'markdown') return getMarkdownPreviewText();
    if (activePreviewTab === 'csv') return getLookerStudioCsvText(slides);
    return getCalculatedFieldsSqlText();
  }, [activePreviewTab, slides]);

  if (!isOpen) return null;

  const triggerDownload = (blob: Blob, filename: string) => {
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleDownloadEditablePptx = () => {
    setEditableBusy(true);
    setTimeout(() => {
      try {
        const blob = generateEditablePptxBlob(slides);
        triggerDownload(blob, '02_Bivariate_Analysis_Editable_Khmer_XML.pptx');
      } finally {
        setEditableBusy(false);
      }
    }, 50);
  };

  const handleDownloadExactFontPptx = async () => {
    if (lockedProgress) return;
    setLockedProgress('0 / 41');
    try {
      const blob = await generateExactFontLockedPptxBlob(slides, (cur, total) => {
        setLockedProgress(`${cur} / ${total}`);
      });
      triggerDownload(blob, '02_Bivariate_Analysis_Exact_Font_Locked.pptx');
    } finally {
      setLockedProgress(null);
    }
  };

  const handleDownloadEditableHtml = () => {
    const blob = generateEditableHtmlSlidesBlob(slides);
    triggerDownload(blob, '02_Bivariate_Analysis_Editable_Web_Slides.html');
  };

  const handleCopyPreviewText = () => {
    navigator.clipboard.writeText(previewText);
    setCopiedPreview(true);
    setTimeout(() => setCopiedPreview(false), 2000);
  };

  const handleDownloadActiveTabFile = () => {
    if (activePreviewTab === 'markdown') {
      const blob = new Blob([previewText], { type: 'text/markdown;charset=utf-8' });
      triggerDownload(blob, '02_Bivariate_Analysis_Looker_Blueprint_41_Pages.md');
    } else if (activePreviewTab === 'csv') {
      const blob = new Blob([previewText], { type: 'text/csv;charset=utf-8' });
      triggerDownload(blob, '02_Bivariate_Analysis_Looker_Data_Source.csv');
    } else {
      const blob = new Blob([previewText], { type: 'application/sql;charset=utf-8' });
      triggerDownload(blob, '02_Bivariate_Analysis_Calculated_Fields.sql');
    }
  };

  const activeExtension =
    activePreviewTab === 'markdown' ? '.md' : activePreviewTab === 'csv' ? '.csv' : '.sql';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs overflow-y-auto">
      <div className="relative w-full max-w-5xl rounded-2xl bg-[#0A0F1D] border border-[#1E293B] shadow-2xl overflow-hidden text-slate-100 my-auto">
        {/* Top Modal Header Bar */}
        <div className="px-6 py-4 bg-[#0D1526] border-b border-[#1E293B] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/15 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
              <Download className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-base font-extrabold text-white">
                Export Looker Studio Blueprint & Presentation Deck
              </h2>
              <p className="text-xs text-slate-400 khmer-text">
                ទាញយកឯកសារបទបង្ហាញ ទិន្នន័យ និងកូដរូបមន្តទាំង ៤១ ទំព័រ (English & ភាសាខ្មែរ)
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-[#162033] hover:bg-[#1E293B] text-slate-400 hover:text-white transition-colors cursor-pointer"
            title="Close Export Modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Main Modal Content */}
        <div className="p-6 space-y-5 max-h-[82vh] overflow-y-auto">
          {/* Top Container: CHOOSE YOUR SLIDE FORMAT (Matching Reference Image) */}
          <div className="rounded-2xl bg-[#0D1322] border border-[#1E293B] p-5 space-y-4">
            <div className="flex items-center gap-2.5 text-xs sm:text-sm font-extrabold text-[#FACC15] khmer-text tracking-wide">
              <MonitorPlay className="w-4 h-4 text-[#FACC15] shrink-0" />
              <span>
                CHOOSE YOUR SLIDE FORMAT (ជ្រើសរើសទម្រង់ស្លាយ៖ អាចកែអក្សរបាន ឬ ចាក់សោ FONT ១០០%)
              </span>
            </div>

            {/* 4 Format Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* CARD 1: Editable .pptx (Amber/Gold) */}
              <div className="rounded-xl bg-[#23170B] border border-amber-500/40 hover:border-amber-400 p-4 flex flex-col justify-between transition-all">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-0.5 rounded bg-amber-500 text-slate-950 font-mono text-[10px] font-extrabold uppercase">
                      EDITABLE .PPTX
                    </span>
                    <MonitorPlay className="w-4 h-4 text-amber-400" />
                  </div>

                  <h3 className="text-sm font-extrabold text-white leading-snug">
                    1. Editable PowerPoint + Khmer Font XML (.pptx)
                  </h3>

                  <p className="text-xs text-amber-200/80 khmer-text leading-relaxed">
                    អាចចុចកែអក្សរខ្មែរ/អង់គ្លេសបានគ្រប់ប្រអប់ក្នុង PowerPoint + កំណត់ Font ដើម (Kantumruy Pro & Inter) ក្នុងកូដ XML
                  </p>
                </div>

                <button
                  onClick={handleDownloadEditablePptx}
                  disabled={editableBusy}
                  className="mt-5 inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 hover:text-amber-300 cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>{editableBusy ? 'Generating .pptx...' : 'Download Editable .pptx'}</span>
                </button>
              </div>

              {/* CARD 2: Exact Font .pptx (Purple/Violet) */}
              <div className="rounded-xl bg-[#1D1132] border border-purple-500/40 hover:border-purple-400 p-4 flex flex-col justify-between transition-all">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-0.5 rounded bg-purple-400 text-slate-950 font-mono text-[10px] font-extrabold uppercase">
                      EXACT FONT .PPTX
                    </span>
                    <Layers className="w-4 h-4 text-purple-300" />
                  </div>

                  <h3 className="text-sm font-extrabold text-white leading-snug">
                    2. 100% Exact-Font Locked Slides (.pptx)
                  </h3>

                  <p className="text-xs text-purple-200/80 khmer-text leading-relaxed">
                    រក្សា Font ដើម (Kantumruy Pro & Inter) ១០០% ដូចក្នុងកម្មវិធីបេះបិទ ទោះកុំព្យូទ័រមិនទាន់ដំឡើង Font ក៏ដោយ
                  </p>
                </div>

                <button
                  onClick={handleDownloadExactFontPptx}
                  disabled={Boolean(lockedProgress)}
                  className="mt-5 inline-flex items-center gap-1.5 text-xs font-bold text-purple-300 hover:text-purple-200 cursor-pointer text-left"
                >
                  {lockedProgress ? (
                    <>
                      <Loader2 className="w-3.5 h-3.5 animate-spin shrink-0" />
                      <span>Rendering Slides ({lockedProgress})...</span>
                    </>
                  ) : (
                    <>
                      <Download className="w-3.5 h-3.5 shrink-0" />
                      <span>Download Exact-Font .pptx</span>
                    </>
                  )}
                </button>
              </div>

              {/* CARD 3: Editable + Exact Font Web Slides .html (Sky/Cyan) */}
              <div className="rounded-xl bg-[#091D34] border border-sky-500/40 hover:border-sky-400 p-4 flex flex-col justify-between transition-all">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-0.5 rounded bg-sky-400 text-slate-950 font-mono text-[10px] font-extrabold uppercase">
                      EDITABLE + EXACT FONT
                    </span>
                    <Globe className="w-4 h-4 text-sky-400" />
                  </div>

                  <h3 className="text-sm font-extrabold text-white leading-snug">
                    3. Editable + Exact Font Web Slides (.html)
                  </h3>

                  <p className="text-xs text-sky-200/80 khmer-text leading-relaxed">
                    ទាំងអាចចុចកែអក្សរបានផ្ទាល់ + ទាំងរក្សា Font ដើម Kantumruy Pro, Inter និងរូបមន្ត KaTeX ១០០% ដោយមិនបាច់ដំឡើង Font!
                  </p>
                </div>

                <button
                  onClick={handleDownloadEditableHtml}
                  className="mt-5 inline-flex items-center gap-1.5 text-xs font-bold text-sky-400 hover:text-sky-300 cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download Editable .html</span>
                </button>
              </div>

              {/* CARD 4: Original Lecture Slides .pdf (Emerald/Teal) */}
              <div className="rounded-xl bg-[#07231C] border border-emerald-500/40 hover:border-emerald-400 p-4 flex flex-col justify-between transition-all">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-0.5 rounded bg-emerald-400 text-slate-950 font-mono text-[10px] font-extrabold uppercase">
                      ORIGINAL .PDF
                    </span>
                    <FileDown className="w-4 h-4 text-emerald-400" />
                  </div>

                  <h3 className="text-sm font-extrabold text-white leading-snug">
                    4. Original Lecture Slides (.pdf)
                  </h3>

                  <p className="text-xs text-emerald-200/80 khmer-text leading-relaxed">
                    ទាញយកឯកសារស្លាយដើម PDF ១០០% ទាំង ៤១ ទំព័រ (02_Bivariate_Analysis_EDA.pdf)
                  </p>
                </div>

                <a
                  href="/assets/aistudio/II._Bivariate_Analysis_5ea6f796.pdf"
                  download="02_Bivariate_Analysis_EDA.pdf"
                  className="mt-5 inline-flex items-center gap-1.5 text-xs font-bold text-emerald-400 hover:text-emerald-300"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download Original .pdf</span>
                </a>
              </div>
            </div>
          </div>

          {/* 3-Tab Code/Data Selector Row (Matching Reference Image) */}
          <div className="flex flex-wrap items-center gap-2.5">
            <button
              onClick={() => setActivePreviewTab('markdown')}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activePreviewTab === 'markdown'
                  ? 'bg-[#059669] text-white shadow-sm'
                  : 'bg-[#162033] border border-[#263552] text-slate-300 hover:text-white'
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              <span>1. Full 41-Page Markdown Blueprint (.md)</span>
            </button>

            <button
              onClick={() => setActivePreviewTab('csv')}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activePreviewTab === 'csv'
                  ? 'bg-[#059669] text-white shadow-sm'
                  : 'bg-[#162033] border border-[#263552] text-slate-300 hover:text-white'
              }`}
            >
              <Download className="w-3.5 h-3.5" />
              <span>2. Looker Studio CSV Data Source (.csv)</span>
            </button>

            <button
              onClick={() => setActivePreviewTab('sql')}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activePreviewTab === 'sql'
                  ? 'bg-[#059669] text-white shadow-sm'
                  : 'bg-[#162033] border border-[#263552] text-slate-300 hover:text-white'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>3. Calculated Fields SQL (.sql)</span>
            </button>
          </div>

          {/* Monospace Preview Box */}
          <div className="rounded-xl bg-[#050811] border border-[#1E293B] p-4 max-h-56 overflow-y-auto font-mono text-xs text-slate-200 leading-relaxed whitespace-pre-wrap">
            {previewText}
          </div>
        </div>

        {/* Bottom Footer Action Bar (Matching Reference Image) */}
        <div className="px-6 py-4 bg-[#080D1A] border-t border-[#1E293B] flex flex-wrap items-center justify-between gap-4">
          <div className="text-xs font-mono text-slate-400 tabular-nums">
            41 Pages • Original Slide Format Preserved 100%
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleCopyPreviewText}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#162033] hover:bg-[#1E293B] border border-[#263552] text-slate-100 text-xs font-bold transition-colors cursor-pointer"
            >
              {copiedPreview ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Copied Preview Text</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-slate-300" />
                  <span>Copy Preview Text</span>
                </>
              )}
            </button>

            <button
              onClick={handleDownloadActiveTabFile}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#059669] hover:bg-[#10B981] text-white text-xs font-bold transition-colors cursor-pointer shadow-sm"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download {activeExtension}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
