import React, { useState } from 'react';
import { SlideBlueprint } from '../types/blueprint';
import { formatSlideBlueprintToMarkdown } from '../data/allSlides';
import {
  Copy,
  Check,
  FileText,
  Layers,
  Calculator,
  Sliders,
  BookOpen,
  Briefcase,
  Lightbulb,
  AlertTriangle,
  ListChecks,
  Code2,
} from 'lucide-react';
import {
  MathEquationDisplay,
  MathSymbolBadge,
  RichMathText,
  ScorecardValueDisplay,
} from './MathRenderer';
import { getBeyondSlideEnrichment } from '../utils/beyondSlideInsights';

interface BlueprintSpecificationViewProps {
  slide: SlideBlueprint;
  compactHeader?: boolean;
  langMode?: 'dual' | 'en' | 'km';
}

export const BlueprintSpecificationView: React.FC<BlueprintSpecificationViewProps> = ({
  slide,
  compactHeader = false,
  langMode = 'dual',
}) => {
  const [copiedPage, setCopiedPage] = useState(false);
  const [copiedOnScreen, setCopiedOnScreen] = useState(false);

  const {
    pageNumber,
    slideFooterNumber,
    sectionTag,
    pageIdentity,
    wireframe,
    chartMetricsMath,
    controls,
    expandedContent,
  } = slide;

  const handleCopyBlueprint = () => {
    const text = formatSlideBlueprintToMarkdown(slide);
    navigator.clipboard.writeText(text);
    setCopiedPage(true);
    setTimeout(() => setCopiedPage(false), 2000);
  };

  const handleCopyOnScreenText = () => {
    const bullets = expandedContent.onScreenText.bullets
      .map((b, idx) => `${idx + 1}. ${b.en}\n   ${b.km}`)
      .join('\n\n');
    const text = `${expandedContent.onScreenText.heading.en}\n${expandedContent.onScreenText.heading.km}\n\n${bullets}\n\n${expandedContent.onScreenText.callout.en}\n${expandedContent.onScreenText.callout.km}`;
    navigator.clipboard.writeText(text);
    setCopiedOnScreen(true);
    setTimeout(() => setCopiedOnScreen(false), 2000);
  };

  return (
    <article className="bg-[#0B1120] border border-[#1E293B] rounded-2xl shadow-xl overflow-hidden text-slate-100 animate-pane-slide-right">
      {/* Exact Required Header Banner */}
      <div className="bg-[#0D1526] text-white px-6 py-4 flex flex-wrap items-center justify-between gap-4 border-b border-[#1E293B]">
        <div>
          <div className="flex flex-wrap items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#38BDF8] tabular-nums">
            <span className="px-2.5 py-0.5 rounded bg-[#082F49] border border-[#0284C7]/60 font-bold">
              [LOOKER STUDIO PAGE {pageNumber}: CORRESPONDING TO SLIDE {pageNumber}]
            </span>
            <span className="text-slate-600">·</span>
            <span className="text-slate-300">PDF Slide Footer #{slideFooterNumber}</span>
            <span className="text-slate-600">·</span>
            <span className="text-slate-300">{sectionTag.en}</span>
          </div>
          {!compactHeader && (
            <div className="mt-2 space-y-1">
              {langMode !== 'km' && (
                <h2 className="text-lg sm:text-xl font-extrabold tracking-tight text-white">
                  {pageIdentity.titleEn}
                </h2>
              )}
              {langMode !== 'en' && (
                <p className="text-base sm:text-lg font-bold text-[#FACC15] khmer-text">
                  {pageIdentity.titleKm}
                </p>
              )}
            </div>
          )}
        </div>

        <button
          onClick={handleCopyBlueprint}
          className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#111C30] hover:bg-[#1E293B] text-slate-100 text-xs font-semibold border border-[#263552] transition-colors cursor-pointer"
        >
          {copiedPage ? (
            <>
              <Check className="w-3.5 h-3.5 text-emerald-400" />
              <span>Copied Page {pageNumber} Blueprint</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5 text-[#38BDF8]" />
              <span>Copy Page {pageNumber} Spec (EN/KH)</span>
            </>
          )}
        </button>
      </div>

      <div className="divide-y divide-[#1E293B]">
        {/* SECTION 1: Page Identity & Theme */}
        <section className="p-6 animate-section-slide-right" style={{ animationDelay: '40ms' }}>
          <div className="flex items-center gap-2.5 mb-4">
            <span className="w-6 h-6 rounded bg-[#082F49] border border-[#0284C7]/60 text-[#38BDF8] font-mono text-xs font-bold flex items-center justify-center tabular-nums">
              1
            </span>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              1. Page Identity & Theme
            </h3>
            <span className="text-slate-500">·</span>
            <span className="text-sm font-semibold text-[#FACC15] khmer-text">
              អត្តសញ្ញាណទំព័រ និងពណ៌
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
            {/* Bilingual Page Title Card */}
            <div className="lg:col-span-6 bg-[#080D1A] border border-[#1E293B] rounded-xl p-4 touch-spring-card">
              <div className="text-[11px] font-semibold uppercase tracking-wider text-[#38BDF8] mb-2">
                Bilingual Page Title · ចំណងជើងទំព័រពីរភាសា
              </div>
              <div className="space-y-3">
                {langMode !== 'km' && (
                  <div>
                    <span className="text-[11px] font-mono uppercase text-slate-400 block">
                      English Title
                    </span>
                    <p className="text-base font-bold text-white mt-0.5">{pageIdentity.titleEn}</p>
                  </div>
                )}
                {langMode !== 'en' && (
                  <div className={langMode === 'dual' ? 'pt-2.5 border-t border-[#1E293B]' : ''}>
                    <span className="text-[11px] font-mono uppercase text-slate-400 block">
                      Khmer Title (ចំណងជើងភាសាខ្មែរ)
                    </span>
                    <p className="text-base font-bold text-[#FACC15] khmer-text mt-0.5">
                      {pageIdentity.titleKm}
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Canvas Setup & Hex Swatches */}
            <div className="lg:col-span-6 bg-[#080D1A] border border-[#1E293B] rounded-xl p-4 touch-spring-card">
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#38BDF8]">
                  Canvas Theme & Color Hierarchy · ប្រធានបទ និងកូដពណ៌
                </span>
                <span className="text-xs font-semibold text-white">
                  {pageIdentity.themeName.en}
                </span>
              </div>
              <p className="text-xs text-[#FDE047]/90 khmer-text mb-3">
                {pageIdentity.themeName.km}
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {[
                  { label: 'Canvas BG', hex: pageIdentity.canvasBgHex },
                  { label: 'Surface', hex: pageIdentity.surfaceCardHex },
                  { label: 'Primary', hex: pageIdentity.primaryAccentHex },
                  { label: 'Secondary', hex: pageIdentity.secondaryAccentHex },
                  { label: 'Text Ink', hex: pageIdentity.textPrimaryHex },
                ].map((swatch) => (
                  <div
                    key={swatch.label}
                    className="bg-[#0D1526] border border-[#1E293B] rounded-lg p-2.5 flex items-center gap-2.5 min-w-0 touch-spring-card"
                  >
                    <span
                      className="w-6 h-6 rounded-md border border-slate-600 shrink-0 shadow-xs"
                      style={{ backgroundColor: swatch.hex }}
                    />
                    <div className="min-w-0 flex-1">
                      <div className="text-[11px] text-slate-400 font-medium break-words leading-tight">
                        {swatch.label}
                      </div>
                      <div className="text-xs font-mono font-bold text-white tabular-nums mt-0.5">
                        {swatch.hex}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Visual Hierarchy Rationale */}
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 bg-[#080D1A] border border-[#1E293B] rounded-xl p-4 touch-spring-card">
            {langMode !== 'km' && (
              <div>
                <div className="text-[11px] font-mono uppercase text-[#38BDF8] mb-1">
                  Visual Hierarchy Rationale (English)
                </div>
                <p className="text-sm text-slate-200 leading-relaxed">
                  {pageIdentity.hierarchyRationale.en}
                </p>
              </div>
            )}
            {langMode !== 'en' && (
              <div>
                <div className="text-[11px] font-mono uppercase text-[#FACC15] mb-1 khmer-text">
                  មូលហេតុនៃការរៀបចំឋានានុក្រមពណ៌ (Khmer)
                </div>
                <p className="text-sm text-slate-200 khmer-text">
                  {pageIdentity.hierarchyRationale.km}
                </p>
              </div>
            )}
          </div>
        </section>

        {/* SECTION 2: Visual Wireframe & Layout Grid */}
        <section className="p-6 animate-section-slide-right" style={{ animationDelay: '90ms' }}>
          <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
            <div className="flex items-center gap-2.5">
              <span className="w-6 h-6 rounded bg-[#082F49] border border-[#0284C7]/60 text-[#38BDF8] font-mono text-xs font-bold flex items-center justify-center tabular-nums">
                2
              </span>
              <h3 className="text-sm font-bold uppercase tracking-wider text-white">
                2. Visual Wireframe & Layout Grid
              </h3>
              <span className="text-slate-500">·</span>
              <span className="text-sm font-semibold text-[#FACC15] khmer-text">
                ប្លង់រៀបចំសមាសភាគលើទំព័រ
              </span>
            </div>
            <div className="text-xs font-mono text-[#38BDF8] bg-[#082F49]/60 px-2.5 py-1 rounded border border-[#0284C7]/40 tabular-nums">
              16:9 Canvas Grid: {wireframe.gridAllocation}
            </div>
          </div>

          <div className="space-y-3">
            {/* Header Zone */}
            <div className="bg-[#080D1A] border border-[#1E293B] rounded-xl p-4 touch-spring-card">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#38BDF8] mb-2">
                <Layers className="w-3.5 h-3.5 text-[#38BDF8]" />
                <span>Header Section (ផ្នែកក្បាលទំព័រខាងលើ)</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {langMode !== 'km' && (
                  <p className="text-sm text-slate-200 leading-relaxed">
                    {wireframe.headerSection.en}
                  </p>
                )}
                {langMode !== 'en' && (
                  <p className="text-sm text-slate-300 khmer-text">
                    {wireframe.headerSection.km}
                  </p>
                )}
              </div>
            </div>

            {/* Main 16:9 Split Zones */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div className="bg-[#080D1A] border border-[#1E293B] rounded-xl p-4 touch-spring-card">
                <div className="text-xs font-bold uppercase tracking-wider text-[#38BDF8] mb-2">
                  Main Workspace — Left / Primary Zone (ផ្នែកខាងឆ្វេង ឬផ្នែកគោល)
                </div>
                {langMode !== 'km' && (
                  <p className="text-sm text-slate-200 leading-relaxed mb-3">
                    {wireframe.leftZone.en}
                  </p>
                )}
                {langMode !== 'en' && (
                  <p className="text-sm text-slate-300 khmer-text pt-2 border-t border-[#1E293B]">
                    {wireframe.leftZone.km}
                  </p>
                )}
              </div>

              <div className="bg-[#080D1A] border border-[#1E293B] rounded-xl p-4 touch-spring-card">
                <div className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-2">
                  Main Workspace — Right / Interactive Zone (ផ្នែកខាងស្តាំ ឬក្រាហ្វទិន្នន័យ)
                </div>
                {langMode !== 'km' && (
                  <p className="text-sm text-slate-200 leading-relaxed mb-3">
                    {wireframe.rightZone.en}
                  </p>
                )}
                {langMode !== 'en' && (
                  <p className="text-sm text-slate-300 khmer-text pt-2 border-t border-[#1E293B]">
                    {wireframe.rightZone.km}
                  </p>
                )}
              </div>
            </div>

            {/* Footer / Bottom Strip */}
            <div className="bg-[#080D1A] border border-[#1E293B] rounded-xl p-4 touch-spring-card">
              <div className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-2">
                Bottom / Navigation Strip (របារខាងក្រោម និងប៊ូតុងបញ្ជា)
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {langMode !== 'km' && (
                  <p className="text-sm text-slate-200 leading-relaxed">
                    {wireframe.bottomOrTopBar.en}
                  </p>
                )}
                {langMode !== 'en' && (
                  <p className="text-sm text-slate-300 khmer-text">
                    {wireframe.bottomOrTopBar.km}
                  </p>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: Chart, Metrics & Math Mapping */}
        <section className="p-6 animate-section-slide-right" style={{ animationDelay: '140ms' }}>
          <div className="flex items-center gap-2.5 mb-4">
            <span className="w-6 h-6 rounded bg-[#082F49] border border-[#0284C7]/60 text-[#38BDF8] font-mono text-xs font-bold flex items-center justify-center tabular-nums">
              3
            </span>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              3. Chart, Metrics & Math Mapping
            </h3>
            <span className="text-slate-500">·</span>
            <span className="text-sm font-semibold text-[#FACC15] khmer-text">
              ការរៀបចំក្រាហ្វ ទិន្នន័យ និងរូបមន្ត
            </span>
          </div>

          <div className="space-y-6">
            {/* 3A: Metric Scorecards */}
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-[#38BDF8] mb-3">
                Metric Scorecards · សូចនាករគន្លឹះ (KPI Blocks)
              </div>
              {chartMetricsMath.scorecards.length === 0 ? (
                <div className="bg-[#080D1A] border border-[#1E293B] rounded-xl p-4 text-sm text-slate-400">
                  No numeric KPI Scorecards required on this conceptual/divider page · គ្មានប្រអប់សូចនាករតួលេខលើទំព័រផ្តើមជំពូកនេះទេ។
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                  {chartMetricsMath.scorecards.map((sc, idx) => (
                    <div
                      key={idx}
                      className="bg-[#080D1A] border border-[#1E293B] rounded-xl p-4 flex flex-col justify-between gap-3 min-w-0 touch-spring-card"
                    >
                      <div className="space-y-1.5 min-w-0">
                        {langMode !== 'km' && (
                          <div className="text-xs font-bold text-white break-words leading-snug">
                            <RichMathText text={sc.label.en} />
                          </div>
                        )}
                        {langMode !== 'en' && (
                          <div className="text-xs text-[#FACC15] khmer-text font-medium break-words">
                            <RichMathText text={sc.label.km} />
                          </div>
                        )}
                        <div className="text-lg sm:text-xl font-bold text-[#38BDF8] tabular-nums py-1.5 break-words">
                          <ScorecardValueDisplay value={sc.value} />
                        </div>
                        <div className="flex flex-wrap items-center gap-1.5 text-[11px] font-mono text-slate-400">
                          <span className="px-2 py-0.5 rounded bg-[#0D1526] border border-[#1E293B] break-all">
                            Field: <span className="text-slate-200">{sc.metricField}</span>
                          </span>
                          <span className="px-2 py-0.5 rounded bg-[#0D1526] border border-[#1E293B] break-all">
                            Agg: <span className="text-slate-200">{sc.aggregation}</span>
                          </span>
                        </div>
                      </div>
                      <div className="pt-2.5 border-t border-[#1E293B] space-y-1">
                        {langMode !== 'km' && (
                          <p className="text-xs text-slate-300 break-words leading-relaxed">
                            <RichMathText text={sc.comparisonNote.en} />
                          </p>
                        )}
                        {langMode !== 'en' && (
                          <p className="text-xs text-slate-400 khmer-text break-words">
                            <RichMathText text={sc.comparisonNote.km} />
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* 3B: Interactive Chart Setup */}
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-[#38BDF8] mb-3">
                Interactive Chart Setup · ការកំណត់ទម្រង់ក្រាហ្វក្នុង Looker Studio
              </div>
              {chartMetricsMath.charts.length === 0 ? (
                <div className="bg-[#080D1A] border border-[#1E293B] rounded-xl p-3.5 text-sm text-slate-400">
                  Typography & Conceptual Layout Page (No Looker Studio data chart widget needed) · ទំព័រផ្តោតលើអត្ថបទ និងចំណងជើងជំពូក។
                </div>
              ) : (
                <div className="space-y-3">
                  {chartMetricsMath.charts.map((ch, idx) => (
                    <div
                      key={idx}
                      className="bg-[#080D1A] border border-[#1E293B] rounded-xl p-4 space-y-3 touch-spring-card"
                    >
                      <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-[#1E293B] pb-2.5">
                        <div>
                          <span className="text-xs font-mono uppercase text-[#38BDF8] font-bold mr-2">
                            Chart #{idx + 1}
                          </span>
                          <span className="text-sm font-bold text-white">
                            {ch.chartType.en}
                          </span>
                          <span className="mx-2 text-slate-500">/</span>
                          <span className="text-sm font-semibold text-[#FACC15] khmer-text">
                            {ch.chartType.km}
                          </span>
                        </div>
                        <span className="text-xs font-mono text-slate-300 bg-[#111C30] border border-[#1E293B] px-2.5 py-0.5 rounded">
                          Sort: {ch.sorting}
                        </span>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                        <div className="bg-[#0D1526] p-3.5 rounded-lg border border-[#1E293B] min-w-0">
                          <span className="font-mono uppercase text-slate-400 block mb-1">
                            Dimensions (វិមាត្រ)
                          </span>
                          <span className="font-mono font-semibold text-[#38BDF8] break-words">
                            {ch.dimensions.join(', ')}
                          </span>
                        </div>
                        <div className="bg-[#0D1526] p-3.5 rounded-lg border border-[#1E293B] min-w-0">
                          <span className="font-mono uppercase text-slate-400 block mb-1">
                            Breakdown Dimension (វិមាត្របំបែក)
                          </span>
                          <span className="font-mono font-semibold text-amber-300 break-words">
                            {ch.breakdownDimension || 'None / គ្មាន'}
                          </span>
                        </div>
                        <div className="bg-[#0D1526] p-3.5 rounded-lg border border-[#1E293B] min-w-0">
                          <span className="font-mono uppercase text-slate-400 block mb-1">
                            Metrics (រង្វាស់តួលេខ)
                          </span>
                          <span className="font-mono font-semibold text-emerald-300 break-words">
                            {ch.metrics.length > 0 ? ch.metrics.join(', ') : 'None (Text/Matrix)'}
                          </span>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                        {langMode !== 'km' && (
                          <p className="text-xs text-slate-200 leading-relaxed">
                            <strong className="text-[#38BDF8]">Styling & Config (EN): </strong>
                            {ch.stylingNote.en}
                          </p>
                        )}
                        {langMode !== 'en' && (
                          <p className="text-xs text-slate-300 khmer-text">
                            <strong className="text-[#FACC15]">ការកំណត់រចនាប័ទ្ម (KM): </strong>
                            {ch.stylingNote.km}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* 3C: Mathematical Formulas */}
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#38BDF8] mb-3">
                <Calculator className="w-3.5 h-3.5 text-[#38BDF8]" />
                <span>Mathematical Formulas & Variable Definitions · រូបមន្តគណិតវិទ្យា និងការពន្យល់អថេរ</span>
              </div>
              {chartMetricsMath.formulas.length === 0 ? (
                <div className="bg-[#080D1A] border border-[#1E293B] rounded-xl p-3.5 text-sm text-slate-400">
                  No formal mathematical equations appear on this specific slide · គ្មានរូបមន្តគណិតវិទ្យាផ្លូវការនៅលើស្លាយនេះទេ។
                </div>
              ) : (
                <div className="space-y-4">
                  {chartMetricsMath.formulas.map((fm, idx) => (
                    <div
                      key={idx}
                      className="bg-[#060A12] text-slate-100 rounded-xl p-4 border border-[#1E293B] touch-spring-card"
                    >
                      <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
                        <h4 className="text-sm font-bold text-white">{fm.title.en}</h4>
                        <span className="text-sm font-semibold text-[#FACC15] khmer-text">
                          {fm.title.km}
                        </span>
                      </div>

                      <div className="bg-[#0B1120] border border-[#1E293B] rounded-xl px-5 py-4 my-3 overflow-x-auto touch-spring-card">
                        <MathEquationDisplay equation={fm.equation} />
                      </div>

                      <div className="text-[11px] font-mono uppercase tracking-wider text-[#38BDF8] mb-3">
                        Symbol & Variable Glossary (English & Khmer) · និយមន័យអថេរនីមួយៗ៖
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                        {fm.variables.map((v, vIdx) => (
                          <div
                            key={vIdx}
                            className="p-3.5 rounded-xl bg-[#0B1120] border border-[#1E293B] space-y-2 min-w-0 touch-spring-card"
                          >
                            <div className="inline-flex items-center px-3 py-1 rounded-lg bg-[#111C30] border border-[#0284C7]/40 max-w-full">
                              <MathSymbolBadge symbol={v.symbol} />
                            </div>
                            <div className="space-y-1.5 min-w-0">
                              {langMode !== 'km' && (
                                <div className="text-xs text-slate-200 leading-relaxed break-words">
                                  <RichMathText text={v.en} />
                                </div>
                              )}
                              {langMode !== 'en' && (
                                <div className="text-xs text-[#FDE047] khmer-text leading-relaxed break-words">
                                  <RichMathText text={v.km} />
                                </div>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>

        {/* SECTION 4: Page Controls & Interactive Filters */}
        <section className="p-6 animate-section-slide-right" style={{ animationDelay: '190ms' }}>
          <div className="flex items-center gap-2.5 mb-4">
            <span className="w-6 h-6 rounded bg-[#082F49] border border-[#0284C7]/60 text-[#38BDF8] font-mono text-xs font-bold flex items-center justify-center tabular-nums">
              4
            </span>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              4. Page Controls & Interactive Filters
            </h3>
            <span className="text-slate-500">·</span>
            <span className="text-sm font-semibold text-[#FACC15] khmer-text">
              ប៊ូតុងបញ្ជា និងតម្រងទិន្នន័យ
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {controls.map((ctrl, idx) => (
              <div
                key={idx}
                className="bg-[#080D1A] border border-[#1E293B] rounded-xl p-4 space-y-2 touch-spring-card"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2 min-w-0">
                    <Sliders className="w-3.5 h-3.5 text-[#38BDF8] shrink-0" />
                    <span className="text-sm font-bold text-white break-words">{ctrl.controlType.en}</span>
                  </div>
                  <span className="text-xs font-mono bg-[#111C30] border border-[#1E293B] px-2.5 py-0.5 rounded text-[#38BDF8] break-all">
                    Field: {ctrl.field}
                  </span>
                </div>
                <div className="text-xs font-semibold text-[#FACC15] khmer-text">
                  {ctrl.controlType.km}
                </div>
                <div className="text-xs font-mono text-slate-400">
                  Default State: <span className="text-white">{ctrl.defaultState}</span>
                </div>
                <div className="pt-2 border-t border-[#1E293B] space-y-1.5">
                  {langMode !== 'km' && (
                    <p className="text-xs text-slate-200 leading-relaxed">{ctrl.purpose.en}</p>
                  )}
                  {langMode !== 'en' && (
                    <p className="text-xs text-slate-300 khmer-text">{ctrl.purpose.km}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 5: Expanded Bilingual Content & In-Depth Explanation */}
        <section className="p-6 animate-section-slide-right" style={{ animationDelay: '240ms' }}>
          <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
            <div className="flex items-center gap-2.5">
              <span className="w-6 h-6 rounded bg-[#082F49] border border-[#0284C7]/60 text-[#38BDF8] font-mono text-xs font-bold flex items-center justify-center tabular-nums">
                5
              </span>
              <h3 className="text-sm font-bold uppercase tracking-wider text-white">
                5. Expanded Bilingual Content & In-Depth Explanation
              </h3>
              <span className="text-slate-500">·</span>
              <span className="text-sm font-semibold text-[#FACC15] khmer-text">
                អត្ថបទពន្យល់លម្អិតបន្ថែមជាពីរភាសា
              </span>
            </div>

            <button
              onClick={handleCopyOnScreenText}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#111C30] hover:bg-[#1E293B] text-slate-200 text-xs font-medium border border-[#263552] transition-colors cursor-pointer"
            >
              {copiedOnScreen ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Copied On-Screen Text</span>
                </>
              ) : (
                <>
                  <FileText className="w-3.5 h-3.5 text-[#38BDF8]" />
                  <span>Copy Looker Text Box Copy (EN/KH)</span>
                </>
              )}
            </button>
          </div>

          <div className="space-y-6">
            {/* 5A: On-Screen Text Box Content */}
            <div className="bg-[#080D1A] border border-[#1E293B] rounded-xl p-5">
              <div className="text-xs font-bold uppercase tracking-wider text-[#38BDF8] mb-3">
                On-Screen Text (Paste directly into Looker Studio Text Box) · អត្ថបទបង្ហាញលើអេក្រង់
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pb-4 mb-4 border-b border-[#1E293B]">
                {langMode !== 'km' && (
                  <div>
                    <span className="text-[11px] font-mono uppercase text-slate-400 block">
                      Heading (EN)
                    </span>
                    <h4 className="text-base font-bold text-white mt-0.5">
                      {expandedContent.onScreenText.heading.en}
                    </h4>
                  </div>
                )}
                {langMode !== 'en' && (
                  <div>
                    <span className="text-[11px] font-mono uppercase text-slate-400 block">
                      Heading (KM)
                    </span>
                    <h4 className="text-base font-bold text-[#FACC15] khmer-text mt-0.5">
                      {expandedContent.onScreenText.heading.km}
                    </h4>
                  </div>
                )}
              </div>

              <div className="space-y-3 mb-4">
                {expandedContent.onScreenText.bullets.map((b, idx) => (
                  <div
                    key={idx}
                    className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-[#0D1526] p-3.5 rounded-lg border border-[#1E293B] touch-spring-card"
                  >
                    {langMode !== 'km' && (
                      <div className="flex gap-2.5 min-w-0">
                        <span className="font-mono text-xs font-bold text-[#38BDF8] tabular-nums shrink-0 mt-0.5">
                          0{idx + 1}.
                        </span>
                        <p className="text-sm text-slate-100 leading-relaxed min-w-0 break-words">
                          <RichMathText text={b.en} />
                        </p>
                      </div>
                    )}
                    {langMode !== 'en' && (
                      <div className="flex gap-2.5 min-w-0">
                        <span className="font-mono text-xs font-bold text-[#FACC15] tabular-nums shrink-0 mt-0.5">
                          ០{idx + 1}.
                        </span>
                        <p className="text-sm text-slate-200 khmer-text min-w-0 break-words">
                          <RichMathText text={b.km} />
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="bg-[#082F49]/40 border border-[#0284C7]/50 rounded-xl p-4 grid grid-cols-1 md:grid-cols-2 gap-4 touch-spring-card">
                {langMode !== 'km' && (
                  <div>
                    <span className="text-[11px] font-mono uppercase font-bold text-[#38BDF8] block mb-1">
                      Key Callout Banner (EN)
                    </span>
                    <p className="text-sm font-medium text-white">
                      <RichMathText text={expandedContent.onScreenText.callout.en} />
                    </p>
                  </div>
                )}
                {langMode !== 'en' && (
                  <div>
                    <span className="text-[11px] font-mono uppercase font-bold text-[#FACC15] block mb-1 khmer-text">
                      ចំណុចសង្កត់សំខាន់លើអេក្រង់ (KM)
                    </span>
                    <p className="text-sm font-medium text-[#FEF08A] khmer-text">
                      <RichMathText text={expandedContent.onScreenText.callout.km} />
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* 5B: Deep-Dive Lesson Explanation */}
            <div className="bg-[#080D1A] border border-[#1E293B] rounded-xl p-5 touch-spring-card">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#38BDF8] mb-3">
                <BookOpen className="w-4 h-4 text-[#38BDF8]" />
                <span>
                  Deep-Dive Lesson Explanation · ការពន្យល់ពង្រីកសេចក្តីលម្អិត (Theory & Underlying Logic)
                </span>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                {langMode !== 'km' && (
                  <div className="bg-[#0D1526] p-4 rounded-xl border border-[#1E293B] touch-spring-card">
                    <div className="text-[11px] font-mono uppercase text-[#38BDF8] mb-2">
                      In-Depth Statistical & Pedagogical Elaboration (English)
                    </div>
                    <p className="text-sm text-slate-200 leading-relaxed">
                      <RichMathText text={expandedContent.deepDiveExplanation.en} />
                    </p>
                  </div>
                )}
                {langMode !== 'en' && (
                  <div className="bg-[#0D1526] p-4 rounded-xl border border-[#1E293B] touch-spring-card">
                    <div className="text-[11px] font-mono uppercase text-[#FACC15] mb-2 khmer-text">
                      ការពន្យល់ស៊ីជម្រៅផ្នែកទ្រឹស្តីស្ថិតិ និងការវិភាគទិន្នន័យ (Khmer)
                    </div>
                    <p className="text-sm text-slate-200 khmer-text">
                      <RichMathText text={expandedContent.deepDiveExplanation.km} />
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* 5C: Practical Application / Case Study */}
            <div className="bg-[#06281E]/60 border border-emerald-500/40 rounded-xl p-5 touch-spring-card">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-300">
                  <Briefcase className="w-4 h-4 text-emerald-400" />
                  <span>
                    Practical Application & Real-World Case Study · ឧទាហរណ៍ជាក់ស្តែងក្នុងការងារពិត
                  </span>
                </div>
                <span className="text-xs font-semibold text-emerald-300 bg-emerald-950/80 border border-emerald-500/40 px-2.5 py-1 rounded">
                  Benchmark Metric: <RichMathText text={expandedContent.practicalApplication.impactMetric} />
                </span>
              </div>

              <div className="mb-3 space-y-1">
                {langMode !== 'km' && (
                  <h4 className="text-sm font-bold text-white">
                    <RichMathText text={expandedContent.practicalApplication.scenarioTitle.en} />
                  </h4>
                )}
                {langMode !== 'en' && (
                  <p className="text-sm font-bold text-[#FACC15] khmer-text">
                    <RichMathText text={expandedContent.practicalApplication.scenarioTitle.km} />
                  </p>
                )}
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-3 border-t border-emerald-500/30">
                {langMode !== 'km' && (
                  <p className="text-sm text-slate-100 leading-relaxed">
                    <RichMathText text={expandedContent.practicalApplication.description.en} />
                  </p>
                )}
                {langMode !== 'en' && (
                  <p className="text-sm text-slate-200 khmer-text">
                    <RichMathText text={expandedContent.practicalApplication.description.km} />
                  </p>
                )}
              </div>
            </div>

            {/* 5D, 5E, 5F: Beyond-the-Slide Mathematical Intuition, Walkthrough, Pitfalls & Python Code */}
            {(() => {
              const beyond = getBeyondSlideEnrichment(slide);
              return (
                <>
                  {/* 5D: Beyond-the-Slide Mathematical Intuition & Step-by-Step Walkthrough */}
                  <div className="bg-[#080D1A] border border-[#1E293B] rounded-xl p-5 space-y-4 touch-spring-card">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-300">
                      <Lightbulb className="w-4 h-4 text-[#FACC15] shrink-0" />
                      <span>
                        {beyond.intuitionTitle.en} · {beyond.intuitionTitle.km}
                      </span>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                      {langMode !== 'km' && (
                        <div className="bg-[#0D1526] p-4 rounded-xl border border-[#1E293B] text-sm text-slate-200 leading-relaxed">
                          <RichMathText text={beyond.intuitionBody.en} />
                        </div>
                      )}
                      {langMode !== 'en' && (
                        <div className="bg-[#0D1526] p-4 rounded-xl border border-[#1E293B] text-sm text-[#FEF08A] khmer-text leading-relaxed">
                          <RichMathText text={beyond.intuitionBody.km} />
                        </div>
                      )}
                    </div>

                    <div className="pt-2">
                      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-300 mb-3">
                        <ListChecks className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>
                          Step-by-Step Calculation & Analytical Protocol · ជំហាននៃការគណនា និងវិភាគតាមលំដាប់លំដោយ
                        </span>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                        {[
                          beyond.stepByStepWalkthrough.step1,
                          beyond.stepByStepWalkthrough.step2,
                          beyond.stepByStepWalkthrough.step3,
                        ].map((st, sIdx) => (
                          <div
                            key={sIdx}
                            className="p-3.5 rounded-xl bg-[#0D1526] border border-[#1E293B] space-y-2 touch-spring-card"
                          >
                            {langMode !== 'km' && (
                              <div className="text-xs text-slate-200 leading-relaxed">
                                <RichMathText text={st.en} />
                              </div>
                            )}
                            {langMode !== 'en' && (
                              <div className="text-xs text-slate-300 khmer-text leading-relaxed">
                                <RichMathText text={st.km} />
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* 5E: Interpretation Thresholds & Common Statistical Pitfalls */}
                  <div className="bg-[#080D1A] border border-[#1E293B] rounded-xl p-5 space-y-4 touch-spring-card">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-rose-300">
                      <AlertTriangle className="w-4 h-4 text-rose-400 shrink-0" />
                      <span>
                        Interpretation Thresholds & Common Pitfalls · កម្រិតស្តង់ដារបកស្រាយ និងកំហុសឆ្គងដែលត្រូវជៀសវាង
                      </span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                      {[
                        {
                          badge: 'Interpretation Rule · វិធានវិនិច្ឆ័យស្តង់ដារ',
                          ...beyond.thresholdsAndPitfalls.rule,
                        },
                        {
                          badge: 'Statistical Pitfall · កំហុសឆ្គងដែលត្រូវជៀសវាង',
                          ...beyond.thresholdsAndPitfalls.pitfall,
                        },
                      ].map((pit, pIdx) => (
                        <div
                          key={pIdx}
                          className="p-4 rounded-xl bg-[#0D1526] border border-rose-500/25 space-y-2 touch-spring-card"
                        >
                          <div className="inline-flex items-center px-2.5 py-0.5 rounded bg-rose-500/15 border border-rose-500/30 text-xs font-mono font-bold text-rose-300">
                            <RichMathText text={pit.badge} />
                          </div>
                          {langMode !== 'km' && (
                            <p className="text-xs text-slate-200 leading-relaxed">
                              <RichMathText text={pit.en} />
                            </p>
                          )}
                          {langMode !== 'en' && (
                            <p className="text-xs text-[#FDE047] khmer-text leading-relaxed">
                              <RichMathText text={pit.km} />
                            </p>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* 5F: Mathematical Proof & Algebraic Derivation */}
                  <div className="bg-[#080D1A] border border-[#1E293B] rounded-xl p-5 space-y-4 touch-spring-card">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-cyan-300">
                      <BookOpen className="w-4 h-4 text-cyan-400 shrink-0" />
                      <span>
                        {beyond.mathematicalDerivation.title.en} · {beyond.mathematicalDerivation.title.km}
                      </span>
                    </div>
                    <div className="space-y-3">
                      {beyond.mathematicalDerivation.proofSteps.map((pStep, pIdx) => (
                        <div
                          key={pIdx}
                          className="grid grid-cols-1 lg:grid-cols-2 gap-4 p-4 rounded-xl bg-[#0D1526] border border-cyan-500/25 touch-spring-card"
                        >
                          {langMode !== 'km' && (
                            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed min-w-0 break-words">
                              <RichMathText text={pStep.en} />
                            </p>
                          )}
                          {langMode !== 'en' && (
                            <p className="text-xs sm:text-sm text-[#FEF08A] khmer-text leading-relaxed min-w-0 break-words">
                              <RichMathText text={pStep.km} />
                            </p>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* 5G: Exam & Viva Preparation Q&A */}
                  <div className="bg-[#080D1A] border border-[#1E293B] rounded-xl p-5 space-y-4 touch-spring-card">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#FACC15]">
                      <Lightbulb className="w-4 h-4 text-[#FACC15] shrink-0" />
                      <span>
                        Exam & Viva Defense Q&A · សំណួរ-ចម្លើយត្រៀមប្រឡង និងការពារកិច្ចការ
                      </span>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                      {beyond.examVivaQA.map((qa, qIdx) => (
                        <div
                          key={qIdx}
                          className="p-4 rounded-xl bg-[#0D1526] border border-[#FACC15]/30 space-y-3 touch-spring-card"
                        >
                          <div className="space-y-1.5 border-b border-[#1E293B] pb-2.5">
                            {langMode !== 'km' && (
                              <h5 className="text-xs sm:text-sm font-bold text-[#38BDF8] leading-snug">
                                <RichMathText text={qa.question.en} />
                              </h5>
                            )}
                            {langMode !== 'en' && (
                              <p className="text-xs sm:text-sm font-bold text-[#FACC15] khmer-text leading-snug">
                                <RichMathText text={qa.question.km} />
                              </p>
                            )}
                          </div>
                          <div className="space-y-2">
                            {langMode !== 'km' && (
                              <p className="text-xs text-slate-200 leading-relaxed">
                                <strong className="text-emerald-300">Answer: </strong>
                                <RichMathText text={qa.answer.en} />
                              </p>
                            )}
                            {langMode !== 'en' && (
                              <p className="text-xs text-slate-200 khmer-text leading-relaxed">
                                <strong className="text-emerald-300">ចម្លើយ៖ </strong>
                                <RichMathText text={qa.answer.km} />
                              </p>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* 5H: Annotated Python Implementation */}
                  <div className="bg-[#080D1A] border border-[#1E293B] rounded-xl p-5 space-y-4 touch-spring-card">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#38BDF8]">
                        <Code2 className="w-4 h-4 text-[#38BDF8] shrink-0" />
                        <span>
                          Python Implementation & Reproducible Lab Code · កូដអនុវត្តផ្ទាល់ក្នុង Python
                        </span>
                      </div>
                      <span className="text-xs font-mono text-slate-400">
                        pandas · scipy.stats · plotly.express
                      </span>
                    </div>
                    <pre className="rounded-xl bg-[#04070E] border border-[#1E293B] p-4 text-xs font-mono text-emerald-300 overflow-x-auto leading-relaxed">
                      <code>{beyond.pythonCodeSnippet}</code>
                    </pre>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                      {langMode !== 'km' && (
                        <p className="text-xs text-slate-200 leading-relaxed">
                          <RichMathText text={beyond.pythonCodeExplanation.en} />
                        </p>
                      )}
                      {langMode !== 'en' && (
                        <p className="text-xs text-[#FDE047] khmer-text leading-relaxed">
                          <RichMathText text={beyond.pythonCodeExplanation.km} />
                        </p>
                      )}
                    </div>
                  </div>
                </>
              );
            })()}
          </div>
        </section>
      </div>
    </article>
  );
};
