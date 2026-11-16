import React, { useState, useEffect } from 'react';
import { SlideBlueprint } from '../types/blueprint';
import {
  GAPMINDER_2007_SAMPLE,
  TIPS_SAMPLE,
  OCEANIA_TIMESERIES,
  ASIA_CATEGORY_EVOLUTION,
  COVID_SURVEY_2021,
  CONTINENT_GDP_CAT_PERCENT,
} from '../data/datasets';
import {
  Play,
  Pause,
  RotateCcw,
  Sliders,
  ExternalLink,
  BarChart2,
  ChevronLeft,
  ChevronRight,
  Filter,
  TrendingUp,
  Activity,
  PieChart,
  Compass,
  Sigma,
  Sparkles,
  BookOpen,
  Briefcase,
  Code2,
  AlertTriangle,
  Lightbulb,
  ListChecks,
  Film,
  Youtube,
  Globe,
} from 'lucide-react';
import {
  MathEquationDisplay,
  MathSymbolBadge,
  RichMathText,
  ScorecardValueDisplay,
} from './MathRenderer';
import { PlotlyInteractiveStage } from './PlotlyInteractiveStage';
import { MiniVideoExplainerPlayer } from './MiniVideoExplainerPlayer';
import { getBeyondSlideEnrichment } from '../utils/beyondSlideInsights';
import { getSlideLearningResources, ResourceLinkType } from '../utils/learningResources';

interface LookerCanvasSimulatorProps {
  slide: SlideBlueprint;
  onJumpToSlide: (pageNumber: number) => void;
  langMode?: 'dual' | 'en' | 'km';
}

type ChartExplorerOverride =
  | 'auto'
  | 'quant_scatter'
  | 'outlier_lab'
  | 'anova_kde'
  | 'qual_chi2'
  | 'animated_bubble';

const CONTINENT_COLORS: Record<string, string> = {
  Africa: '#6366F1',
  Asia: '#F43F5E',
  Americas: '#10B981',
  Europe: '#A855F7',
  Oceania: '#F97316',
};

export const LookerCanvasSimulator: React.FC<LookerCanvasSimulatorProps> = ({
  slide,
  onJumpToSlide,
  langMode = 'dual',
}) => {
  // Interactive Looker Studio Control States
  const [continentFilter, setContinentFilter] = useState<string>('All');
  const [sexFilter, setSexFilter] = useState<'All' | 'Female' | 'Male'>('All');
  const [simSlope, setSimSlope] = useState<number>(0.35);
  const [outlierY4, setOutlierY4] = useState<number>(1000);
  const [useLogScale, setUseLogScale] = useState<boolean>(slide.pageNumber !== 18);
  const [highlightAnomalies, setHighlightAnomalies] = useState<boolean>(true);
  const [selectedDf, setSelectedDf] = useState<number>(18);
  const [colorMode, setColorMode] = useState<'log_pop' | 'continent' | 'flat'>('continent');
  const [bubbleMaxRadius, setBubbleMaxRadius] = useState<number>(22);
  const [animYear, setAnimYear] = useState<number>(2007);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [columnCountP, setColumnCountP] = useState<number>(20);
  const [chartOverride, setChartOverride] = useState<ChartExplorerOverride>('auto');
  const [hoveredCountry, setHoveredCountry] = useState<string | null>(null);
  const [chartAnimSeed, setChartAnimSeed] = useState<number>(1);
  const [isSlopeAnimating, setIsSlopeAnimating] = useState<boolean>(false);
  const [isOutlierAnimating, setIsOutlierAnimating] = useState<boolean>(false);
  const [isDfAnimating, setIsDfAnimating] = useState<boolean>(false);
  const [isColsAnimating, setIsColsAnimating] = useState<boolean>(false);
  const [resourceFilter, setResourceFilter] = useState<'all' | ResourceLinkType>('all');

  // Sync log scale, retrigger entrance animations, and start relevant motion when switching slides
  useEffect(() => {
    setChartOverride('auto');
    setChartAnimSeed((prev) => prev + 1);
    setIsSlopeAnimating(false);
    setIsOutlierAnimating(false);
    setIsDfAnimating(false);
    setIsColsAnimating(false);

    if (slide.pageNumber === 18) setUseLogScale(false);
    if (slide.pageNumber === 19) setUseLogScale(true);
    if (slide.pageNumber === 39) {
      setAnimYear(1952);
      setIsPlaying(true);
    } else {
      setIsPlaying(false);
      setAnimYear(2007);
    }
  }, [slide.pageNumber]);

  // Animation loop for Animated Plotly Bubble Chart (1952 -> 2007)
  useEffect(() => {
    if (!isPlaying) return;
    const years = [1952, 1957, 1962, 1967, 1972, 1977, 1982, 1987, 1992, 1997, 2002, 2007];
    const timer = setInterval(() => {
      setAnimYear((prev) => {
        const idx = years.indexOf(prev);
        if (idx === -1 || idx === years.length - 1) {
          return 1952;
        }
        return years[idx + 1];
      });
    }, 620);
    return () => clearInterval(timer);
  }, [isPlaying]);

  // Animation loop for Covariance Slope Simulator (-1.0 <-> +1.0)
  useEffect(() => {
    if (!isSlopeAnimating) return;
    let dir = 1;
    const timer = setInterval(() => {
      setSimSlope((prev) => {
        const next = Number((prev + dir * 0.1).toFixed(2));
        if (next >= 1) {
          dir = -1;
          return 1;
        }
        if (next <= -1) {
          dir = 1;
          return -1;
        }
        return next;
      });
    }, 120);
    return () => clearInterval(timer);
  }, [isSlopeAnimating]);

  // Animation loop for Spearman Outlier Lab (Y₄: 2 -> 2000)
  useEffect(() => {
    if (!isOutlierAnimating) return;
    const steps = [2, 5, 15, 50, 150, 400, 800, 1200, 1600, 2000];
    const timer = setInterval(() => {
      setOutlierY4((prev) => {
        const idx = steps.findIndex((s) => s >= prev);
        if (idx === -1 || idx === steps.length - 1) return steps[0];
        return steps[idx + 1];
      });
    }, 450);
    return () => clearInterval(timer);
  }, [isOutlierAnimating]);

  // Animation loop for Chi-Square Degrees of Freedom (df: 1 -> 30)
  useEffect(() => {
    if (!isDfAnimating) return;
    const dfs = [1, 5, 10, 15, 18, 20, 30];
    const timer = setInterval(() => {
      setSelectedDf((prev) => {
        const idx = dfs.indexOf(prev);
        if (idx === -1 || idx === dfs.length - 1) return dfs[0];
        return dfs[idx + 1];
      });
    }, 650);
    return () => clearInterval(timer);
  }, [isDfAnimating]);

  // Animation loop for Combinatorial Pairwise Columns p (3 -> 100)
  useEffect(() => {
    if (!isColsAnimating) return;
    const timer = setInterval(() => {
      setColumnCountP((prev) => (prev >= 100 ? 5 : prev + 5));
    }, 180);
    return () => clearInterval(timer);
  }, [isColsAnimating]);

  const filteredGapminder = GAPMINDER_2007_SAMPLE.filter(
    (r) => continentFilter === 'All' || r.continent === continentFilter
  );

  const filteredTips = TIPS_SAMPLE.filter(
    (r) => sexFilter === 'All' || r.sex === sexFilter
  );

  // Dynamic Pearson calculation for Slide 15 Outlier Lab
  const xToy = [1, 3, 2, 5, 4];
  const yToy = [0.1, 1, 0.2, outlierY4, 1.5];
  const meanX = 3;
  const meanY = yToy.reduce((a, b) => a + b, 0) / 5;
  const covXY =
    xToy.reduce((acc, x, i) => acc + (x - meanX) * (yToy[i] - meanY), 0) / 4;
  const stdX = Math.sqrt(
    xToy.reduce((acc, x) => acc + Math.pow(x - meanX, 2), 0) / 4
  );
  const stdY = Math.sqrt(
    yToy.reduce((acc, y) => acc + Math.pow(y - meanY, 2), 0) / 4
  );
  const dynamicPearsonToy = covXY / (stdX * stdY);
  const dynamicSpearmanToy = outlierY4 > 1.5 ? 1.0 : 0.9;

  // Reusable Interactive Flagship Bivariate Scatter & Indicator Dashboard
  const renderFlagshipBivariateOverviewChart = (bannerNote?: string) => (
    <div className="space-y-4">
      {bannerNote && (
        <div className="bg-[#0D1527] border border-[#1E293B] rounded-xl px-4 py-2.5 flex flex-wrap items-center justify-between gap-2 text-xs">
          <span className="text-[#38BDF8] font-mono font-bold">{bannerNote}</span>
          <span className="text-[#FACC15] khmer-text">
            ក្រាហ្វអន្តរកម្មគោលនៃមេរៀនការវិភាគទ្វេអថេរ (Bivariate Analysis Interactive Chart)
          </span>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        {/* Left 7 Cols: Interactive Gapminder Bubble Scatter Plot with Regression Line */}
        <div className="lg:col-span-7 bg-[#0D1527] border border-[#1E293B] rounded-xl p-4 space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div>
              <div className="text-xs font-bold text-white">
                Interactive Bivariate Scatter & Bubble Chart: Life Expectancy vs. GDP per Capita (2007)
              </div>
              <div className="text-[11px] text-[#FACC15] khmer-text">
                ក្រាហ្វពង្រាយទ្វេអថេរ៖ អាយុរំពឹងរស់ ធៀបនឹងចំណូល GDP ក្នុងមនុស្សម្នាក់ (បែងចែកតាមទ្វីប និងទំហំប្រជាជន)
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-1.5">
              <button
                onClick={() => {
                  if (!isPlaying && animYear === 2007) setAnimYear(1952);
                  setIsPlaying((prev) => !prev);
                }}
                className={`inline-flex items-center gap-1 px-2.5 py-1 rounded text-[11px] font-bold cursor-pointer transition-all ${
                  isPlaying
                    ? 'bg-amber-500 text-slate-950 shadow-[0_0_12px_rgba(245,158,11,0.45)]'
                    : 'bg-[#111C30] hover:bg-[#1E293B] text-[#FACC15] border border-amber-500/40'
                }`}
              >
                {isPlaying ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
                <span>{isPlaying ? `Pause (${animYear})` : 'Animate 1952–2007'}</span>
              </button>
              <button
                onClick={() => setUseLogScale(false)}
                className={`px-2.5 py-1 rounded text-[11px] font-mono font-bold cursor-pointer ${
                  !useLogScale
                    ? 'bg-[#0284C7] text-white'
                    : 'bg-[#070B14] text-slate-400 border border-[#1E293B]'
                }`}
              >
                Linear X
              </button>
              <button
                onClick={() => setUseLogScale(true)}
                className={`px-2.5 py-1 rounded text-[11px] font-mono font-bold cursor-pointer ${
                  useLogScale
                    ? 'bg-[#0284C7] text-white'
                    : 'bg-[#070B14] text-slate-400 border border-[#1E293B]'
                }`}
              >
                Log₁₀(GDP)
              </button>
            </div>
          </div>

          <svg viewBox="0 0 460 240" className="w-full h-56 bg-[#070B14] rounded-xl border border-[#1E293B]">
            {/* Subtle Year Watermark when animating */}
            <text
              x="365"
              y="185"
              fontSize="48"
              fontWeight="bold"
              fill="#1E293B"
              fillOpacity="0.65"
              textAnchor="middle"
            >
              {animYear}
            </text>

            {/* Grid lines */}
            {[40, 80, 120, 160, 200].map((gy) => (
              <line
                key={gy}
                x1="45"
                y1={gy}
                x2="435"
                y2={gy}
                stroke="#1E293B"
                strokeDasharray="3,3"
              />
            ))}
            {[110, 190, 270, 350, 420].map((gx) => (
              <line
                key={gx}
                x1={gx}
                y1="20"
                x2={gx}
                y2="205"
                stroke="#1E293B"
                strokeDasharray="3,3"
              />
            ))}
            {/* Axes */}
            <line x1="45" y1="205" x2="435" y2="205" stroke="#475569" strokeWidth="1.5" />
            <line x1="45" y1="20" x2="45" y2="205" stroke="#475569" strokeWidth="1.5" />

            {/* Y-axis labels */}
            <text x="38" y="35" fontSize="9" textAnchor="end" fill="#94A3B8">85y</text>
            <text x="38" y="90" fontSize="9" textAnchor="end" fill="#94A3B8">70y</text>
            <text x="38" y="145" fontSize="9" textAnchor="end" fill="#94A3B8">55y</text>
            <text x="38" y="200" fontSize="9" textAnchor="end" fill="#94A3B8">40y</text>

            {/* X-axis labels */}
            {useLogScale ? (
              <>
                <text x="90" y="220" fontSize="9" textAnchor="middle" fill="#94A3B8">$500</text>
                <text x="190" y="220" fontSize="9" textAnchor="middle" fill="#94A3B8">$2,000</text>
                <text x="300" y="220" fontSize="9" textAnchor="middle" fill="#94A3B8">$10,000</text>
                <text x="405" y="220" fontSize="9" textAnchor="middle" fill="#94A3B8">$45,000</text>
              </>
            ) : (
              <>
                <text x="60" y="220" fontSize="9" textAnchor="middle" fill="#94A3B8">$0</text>
                <text x="180" y="220" fontSize="9" textAnchor="middle" fill="#94A3B8">$15k</text>
                <text x="300" y="220" fontSize="9" textAnchor="middle" fill="#94A3B8">$30k</text>
                <text x="415" y="220" fontSize="9" textAnchor="middle" fill="#94A3B8">$50k</text>
              </>
            )}

            {/* Animated Trend Line / Curve */}
            {useLogScale ? (
              <line
                x1="60"
                y1="185"
                x2="420"
                y2="32"
                stroke="#38BDF8"
                strokeWidth="2.2"
                className="svg-line-draw"
              />
            ) : (
              <path
                d="M 55 185 Q 115 65, 420 35"
                fill="none"
                stroke="#FACC15"
                strokeWidth="2.2"
                className="svg-line-draw"
              />
            )}

            {/* Country Bubbles with Smooth Gliding & Entrance Animation */}
            {filteredGapminder.map((row, idx) => {
              const progress = (animYear - 1952) / 55;
              const gdpVal = row.gdpPercap * (0.28 + 0.72 * progress);
              const lifeVal =
                row.continent === 'Europe' || row.continent === 'Oceania'
                  ? row.lifeExp - (1 - progress) * 11
                  : row.lifeExp - (1 - progress) * 23;

              const cx = useLogScale
                ? 50 + ((Math.log10(Math.max(200, gdpVal)) - 2.3) / 2.5) * 370
                : 50 + (gdpVal / 52000) * 370;
              const cy = 200 - ((Math.max(36, lifeVal) - 36) / 50) * 170;
              const radius = Math.max(4.5, Math.sqrt(row.pop / 1318683096) * 20);
              const color = CONTINENT_COLORS[row.continent] || '#38BDF8';
              const isHovered = hoveredCountry === row.country;

              return (
                <g
                  key={row.country}
                  data-plotly-label={`${row.country} (${row.continent}) — Year ${animYear}`}
                  data-plotly-sub={`GDP/Capita: $${Math.round(gdpVal).toLocaleString()} · LifeExp: ${lifeVal.toFixed(1)} yrs · Pop: ${(row.pop / 1e6).toFixed(1)}M`}
                  onMouseEnter={() => setHoveredCountry(row.country)}
                  onMouseLeave={() => setHoveredCountry(null)}
                  className="cursor-pointer"
                >
                  {row.country === 'Cambodia' && (
                    <circle
                      cx={cx}
                      cy={cy}
                      r={radius + 6}
                      fill="none"
                      stroke="#FACC15"
                      strokeWidth="1.5"
                      className="svg-pulse-ring"
                    />
                  )}
                  <circle
                    cx={cx}
                    cy={cy}
                    r={isHovered ? radius + 3 : radius}
                    fill={color}
                    fillOpacity={isHovered ? '0.95' : '0.78'}
                    stroke={isHovered || row.country === 'Cambodia' ? '#FACC15' : '#FFFFFF'}
                    strokeWidth={isHovered || row.country === 'Cambodia' ? '2' : '0.8'}
                    className="svg-bubble-appear"
                    style={{ animationDelay: `${idx * 18}ms` }}
                  />
                  {(row.country === 'Cambodia' ||
                    row.country === 'China' ||
                    row.country === 'United States' ||
                    row.country === 'Japan' ||
                    isHovered) && (
                    <text
                      x={cx}
                      y={cy - radius - 4}
                      fontSize="8.5"
                      fontWeight="bold"
                      textAnchor="middle"
                      fill={row.country === 'Cambodia' || isHovered ? '#FACC15' : '#E2E8F0'}
                    >
                      {row.country}
                    </text>
                  )}
                </g>
              );
            })}

            <text x="240" y="235" fontSize="9.5" fontWeight="bold" textAnchor="middle" fill="#38BDF8">
              X: gdpPercap ({useLogScale ? 'Log₁₀ Scale — Linearized!' : 'Linear Scale — Right-Skewed'}) · Y: lifeExp (Years)
            </text>
          </svg>

          {/* Continent Color Legend */}
          <div className="flex flex-wrap items-center justify-between gap-2 text-[11px]">
            <div className="flex flex-wrap items-center gap-3">
              {Object.entries(CONTINENT_COLORS).map(([cont, hex]) => (
                <button
                  key={cont}
                  onClick={() => setContinentFilter(continentFilter === cont ? 'All' : cont)}
                  className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded border cursor-pointer ${
                    continentFilter === cont
                      ? 'bg-[#162033] border-[#38BDF8] text-white font-bold'
                      : 'border-transparent text-slate-300 hover:text-white'
                  }`}
                >
                  <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: hex }} />
                  <span>{cont}</span>
                </button>
              ))}
            </div>
            <span className="text-xs text-emerald-400">
              <RichMathText text="Pearson $r = 0.679$ · Spearman $\rho = 0.857$" />
            </span>
          </div>
        </div>

        {/* Right 5 Cols: Interactive Bivariate Statistical Indicators Bar Chart */}
        <div className="lg:col-span-5 bg-[#0D1527] border border-[#1E293B] rounded-xl p-4 flex flex-col justify-between space-y-3">
          <div>
            <div className="text-xs font-bold text-white">
              6 Key Bivariate Statistical Indicators (មេគុណស្ថិតិទ្វេអថេរទាំង ៦)
            </div>
            <div className="text-[11px] text-slate-400 khmer-text mb-3">
              ចុចលើរបារនីមួយៗដើម្បីលោតទៅកាន់ទំព័រមេរៀនលម្អិត៖
            </div>

            <div className="space-y-2.5">
              {[
                {
                  name: 'Spearman Rank ρ (GDP × LifeExp)',
                  km: 'មេគុណចំណាត់ថ្នាក់ Spearman',
                  val: 0.857,
                  pct: 85.7,
                  color: '#FACC15',
                  targetPage: 16,
                },
                {
                  name: 'Log₁₀ Pearson r (log GDP × LifeExp)',
                  km: 'សហសម្ព័ន្ធលីនេអ៊ែរលើមាត្រដ្ឋាន Log',
                  val: 0.809,
                  pct: 80.9,
                  color: '#38BDF8',
                  targetPage: 19,
                },
                {
                  name: 'Linear Pearson r (GDP × LifeExp)',
                  km: 'មេគុណសហសម្ព័ន្ធលីនេអ៊ែរ Pearson',
                  val: 0.679,
                  pct: 67.9,
                  color: '#3B82F6',
                  targetPage: 12,
                },
                {
                  name: 'Tips Correlation r (Bill × Tip)',
                  km: 'សហសម្ព័ន្ធវិក្កយបត្រ និងប្រាក់ធីប',
                  val: 0.676,
                  pct: 67.6,
                  color: '#10B981',
                  targetPage: 10,
                },
                {
                  name: 'ANOVA Eta-Squared η² (Continent × LifeExp)',
                  km: 'សមាមាត្រវ៉ារ្យង់រវាងទ្វីប និងអាយុរំពឹងរស់',
                  val: 0.635,
                  pct: 63.5,
                  color: '#A855F7',
                  targetPage: 26,
                },
                {
                  name: 'ANOVA Eta-Squared η² (Continent × GDP)',
                  km: 'សមាមាត្រវ៉ារ្យង់រវាងទ្វីប និង GDP',
                  val: 0.424,
                  pct: 42.4,
                  color: '#F43F5E',
                  targetPage: 26,
                },
              ].map((ind, i) => (
                <button
                  key={i}
                  onClick={() => onJumpToSlide(ind.targetPage)}
                  data-plotly-label={`${ind.name} = ${ind.val.toFixed(3)}`}
                  data-plotly-sub={`${ind.km} · ចុចដើម្បីលោតទៅស្លាយទី ${ind.targetPage}`}
                  className="w-full text-left group bg-[#070B14] hover:bg-[#111C30] border border-[#1E293B] rounded-lg p-3 transition-colors cursor-pointer space-y-1.5 touch-spring-card"
                >
                  <div className="flex items-start justify-between gap-2 text-xs">
                    <span className="font-bold text-slate-200 group-hover:text-white break-words leading-snug">
                      <RichMathText text={ind.name} />
                    </span>
                    <span className="font-extrabold text-[#38BDF8] shrink-0">
                      <MathSymbolBadge symbol={ind.val.toFixed(3)} className="!text-[#38BDF8]" />
                    </span>
                  </div>
                  <div className="w-full h-2 bg-[#162033] rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full svg-bar-stretch-x"
                      style={{
                        width: `${ind.pct}%`,
                        backgroundColor: ind.color,
                        animationDelay: `${i * 85}ms`,
                      }}
                    />
                  </div>
                  <div className="flex flex-wrap items-center justify-between gap-2 text-[11px]">
                    <span className="text-slate-400 khmer-text break-words">{ind.km}</span>
                    <span className="font-mono text-[#38BDF8] shrink-0">Slide {ind.targetPage} →</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Render the slide-specific or explorer-selected interactive chart
  const renderInteractiveStage = () => {
    // If user clicked a specific chart tab in the Chart Explorer Bar, render that chart directly
    if (chartOverride === 'quant_scatter') {
      return renderFlagshipBivariateOverviewChart('QUANTITATIVE × QUANTITATIVE — SCATTER & REGRESSION LAB');
    }

    switch (slide.simulatorMode) {
      case 'cover_hero':
      case 'agenda_navigation':
      case 'resource_cards':
      case 'section_divider':
        return renderFlagshipBivariateOverviewChart(
          `SLIDE ${slide.pageNumber} INTERACTIVE BIVARIATE OVERVIEW — ${slide.sectionTag.en.toUpperCase()}`
        );

      case 'gapminder_summary_table':
        return (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
            {/* Left 7 Cols: Summary Table */}
            <div className="lg:col-span-7 bg-[#0D1527] rounded-xl border border-[#1E293B] p-4 overflow-x-auto">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold text-white">
                  <RichMathText text='Gapminder 2007 Descriptive Statistics (`data2007[["pop", "lifeExp", "gdpPercap"]].describe()`)' />
                </span>
                <span className="text-xs text-[#38BDF8]">
                  <RichMathText text="$n = 142$ Countries" />
                </span>
              </div>
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="border-b border-[#1E293B] text-[#38BDF8] font-bold">
                    <th className="py-2 px-3">Statistic / ស្ថិតិ</th>
                    <th className="py-2 px-3 text-right">pop (ប្រជាជន)</th>
                    <th className="py-2 px-3 text-right">lifeExp (អាយុរំពឹងរស់)</th>
                    <th className="py-2 px-3 text-right">gdpPercap (GDP/ម្នាក់)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#1E293B] text-slate-200">
                  <tr className="bg-rose-500/10">
                    <td className="py-2 px-3 font-bold text-rose-300">
                      <RichMathText text="mean ($\bar{x}$ មធ្យមភាគ)" />
                    </td>
                    <td className="py-2 px-3 text-right font-bold text-rose-300">
                      <RichMathText text="$44.02\text{M}$" />
                    </td>
                    <td className="py-2 px-3 text-right font-bold text-rose-300">
                      <RichMathText text="$67.01\text{ yrs}$" />
                    </td>
                    <td className="py-2 px-3 text-right font-bold text-rose-300">
                      <RichMathText text="$\$11{,}680.07$" />
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 font-bold text-slate-300">
                      <RichMathText text="std ($s_X$ គម្លាតស្តង់ដារ)" />
                    </td>
                    <td className="py-2 px-3 text-right">
                      <RichMathText text="$147.62\text{M}$" />
                    </td>
                    <td className="py-2 px-3 text-right">
                      <RichMathText text="$12.07\text{ yrs}$" />
                    </td>
                    <td className="py-2 px-3 text-right">
                      <RichMathText text="$\$12{,}859.94$" />
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 font-bold text-slate-300">
                      <RichMathText text="min ($\min$ អប្បបរមា)" />
                    </td>
                    <td className="py-2 px-3 text-right">
                      <RichMathText text="$199.6\text{K}$" />
                    </td>
                    <td className="py-2 px-3 text-right">
                      <RichMathText text="$39.61\text{ yrs}$" />
                    </td>
                    <td className="py-2 px-3 text-right">
                      <RichMathText text="$\$277.55$" />
                    </td>
                  </tr>
                  <tr className="bg-sky-500/15">
                    <td className="py-2 px-3 font-bold text-[#38BDF8]">
                      <RichMathText text="$50\%$ ($Q_2$ មេដ្យាន Median)" />
                    </td>
                    <td className="py-2 px-3 text-right font-bold text-[#38BDF8]">
                      <RichMathText text="$10.52\text{M}$" />
                    </td>
                    <td className="py-2 px-3 text-right font-bold text-[#38BDF8]">
                      <RichMathText text="$71.94\text{ yrs}$" />
                    </td>
                    <td className="py-2 px-3 text-right font-bold text-[#38BDF8]">
                      <RichMathText text="$\$6{,}124.37$" />
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 font-bold text-[#FACC15]">
                      <RichMathText text="max ($\max$ អតិបរមា)" />
                    </td>
                    <td className="py-2 px-3 text-right text-[#FACC15]">
                      <RichMathText text="$1{,}318.68\text{M}$" />
                    </td>
                    <td className="py-2 px-3 text-right text-[#FACC15]">
                      <RichMathText text="$82.60\text{ yrs}$" />
                    </td>
                    <td className="py-2 px-3 text-right text-[#FACC15]">
                      <RichMathText text="$\$49{,}357.19$" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Right 5 Cols: Visual Skewness Comparison Chart (Mean vs Median) */}
            <div className="lg:col-span-5 bg-[#0D1527] rounded-xl border border-[#1E293B] p-4 space-y-3">
              <div className="text-xs font-bold text-white">
                Mean vs. Median Skewness Diagnostic Chart (ក្រាហ្វប្រៀបធៀបមធ្យមភាគ និងមេដ្យាន)
              </div>
              <svg viewBox="0 0 280 175" className="w-full h-44 bg-[#070B14] rounded-xl border border-[#1E293B]">
                {/* Pop Bars */}
                <text x="50" y="25" fontSize="9" fontWeight="bold" textAnchor="middle" fill="#E2E8F0">pop (M)</text>
                <rect x="28" y="38" width="20" height="105" fill="#F43F5E" rx="3" className="svg-bar-rise" style={{ animationDelay: '40ms' }} data-plotly-label="Population Mean (មធ្យមភាគប្រជាជន): 44.02M" data-plotly-sub="Right-skewed due to China (1.32B) & India (1.11B)" />
                <rect x="52" y="118" width="20" height="25" fill="#38BDF8" rx="3" className="svg-bar-rise" style={{ animationDelay: '120ms' }} data-plotly-label="Population Median 50% (មេដ្យានប្រជាជន): 10.52M" data-plotly-sub="Robust central tendency across n=142 countries" />
                <text x="38" y="34" fontSize="8" textAnchor="middle" fill="#FDA4AF">44M</text>
                <text x="62" y="114" fontSize="8" textAnchor="middle" fill="#38BDF8">10.5M</text>

                {/* LifeExp Bars */}
                <text x="140" y="25" fontSize="9" fontWeight="bold" textAnchor="middle" fill="#E2E8F0">lifeExp (Yrs)</text>
                <rect x="118" y="55" width="20" height="88" fill="#F43F5E" rx="3" className="svg-bar-rise" style={{ animationDelay: '200ms' }} data-plotly-label="Life Expectancy Mean (មធ្យមភាគអាយុរំពឹងរស់): 67.01 yrs" data-plotly-sub="Std Dev = 12.07 yrs · Range: 39.6y to 82.6y" />
                <rect x="142" y="48" width="20" height="95" fill="#38BDF8" rx="3" className="svg-bar-rise" style={{ animationDelay: '280ms' }} data-plotly-label="Life Expectancy Median 50% (មេដ្យាន): 71.94 yrs" data-plotly-sub="Left-skewed distribution (Median > Mean)" />
                <text x="128" y="50" fontSize="8" textAnchor="middle" fill="#FDA4AF">67.0</text>
                <text x="152" y="43" fontSize="8" textAnchor="middle" fill="#38BDF8">71.9</text>

                {/* GDP Bars */}
                <text x="230" y="25" fontSize="9" fontWeight="bold" textAnchor="middle" fill="#E2E8F0">GDP ($k)</text>
                <rect x="208" y="48" width="20" height="95" fill="#F43F5E" rx="3" className="svg-bar-rise" style={{ animationDelay: '360ms' }} data-plotly-label="GDP per Capita Mean (មធ្យមភាគ GDP): $11,680" data-plotly-sub="Std Dev = $12,860 · Pulled up by high-income nations" />
                <rect x="232" y="93" width="20" height="50" fill="#38BDF8" rx="3" className="svg-bar-rise" style={{ animationDelay: '440ms' }} data-plotly-label="GDP per Capita Median 50% (មេដ្យាន GDP): $6,124" data-plotly-sub="50% of countries have GDP/capita ≤ $6,124" />
                <text x="218" y="43" fontSize="8" textAnchor="middle" fill="#FDA4AF">$11.7k</text>
                <text x="242" y="88" fontSize="8" textAnchor="middle" fill="#38BDF8">$6.1k</text>

                <line x1="15" y1="143" x2="265" y2="143" stroke="#475569" />
                <rect x="55" y="155" width="8" height="8" fill="#F43F5E" />
                <text x="67" y="162" fontSize="8.5" fill="#E2E8F0">Mean (មធ្យមភាគ)</text>
                <rect x="155" y="155" width="8" height="8" fill="#38BDF8" />
                <text x="167" y="162" fontSize="8.5" fill="#E2E8F0">Median 50% (មេដ្យាន)</text>
              </svg>
            </div>
          </div>
        );

      case 'gapminder_univariate_trio':
      case 'bivariate_decision_matrix':
        return (
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Plot 1: Boxplot of pop */}
              <div className="bg-[#0D1527] rounded-xl border border-[#1E293B] p-4">
                <div className="text-xs font-bold text-white text-center mb-1">
                  1. Boxplot of pop (Log Scale)
                </div>
                <div className="text-[11px] text-[#FACC15] khmer-text text-center mb-2">
                  ប្រអប់ទិន្នន័យចំនួនប្រជាជន (មាន Outliers ខ្ពស់)
                </div>
                <svg viewBox="0 0 180 150" className="w-full h-40 bg-[#070B14] rounded-lg border border-[#1E293B]">
                  <line x1="35" y1="20" x2="155" y2="20" stroke="#1E293B" strokeDasharray="2,2" />
                  <line x1="35" y1="55" x2="155" y2="55" stroke="#1E293B" strokeDasharray="2,2" />
                  <line x1="35" y1="90" x2="155" y2="90" stroke="#1E293B" strokeDasharray="2,2" />
                  <line x1="35" y1="125" x2="155" y2="125" stroke="#1E293B" strokeDasharray="2,2" />
                  <text x="30" y="23" fontSize="8" textAnchor="end" fill="#94A3B8">1B</text>
                  <text x="30" y="58" fontSize="8" textAnchor="end" fill="#94A3B8">100M</text>
                  <text x="30" y="93" fontSize="8" textAnchor="end" fill="#94A3B8">10M</text>
                  <text x="30" y="128" fontSize="8" textAnchor="end" fill="#94A3B8">1M</text>
                  <circle cx="95" cy="18" r="3" fill="#FACC15" className="svg-bubble-appear" style={{ animationDelay: '350ms' }} data-plotly-label="Outlier: China (pop = 1,318.68M)" data-plotly-sub="Extreme upper outlier on Population Boxplot" />
                  <circle cx="95" cy="22" r="3" fill="#FACC15" className="svg-bubble-appear" style={{ animationDelay: '420ms' }} data-plotly-label="Outlier: India (pop = 1,110.40M)" data-plotly-sub="Extreme upper outlier on Population Boxplot" />
                  <circle cx="95" cy="42" r="2.5" fill="#38BDF8" className="svg-bubble-appear" style={{ animationDelay: '250ms' }} data-plotly-label="Outlier: United States (pop = 301.14M)" data-plotly-sub="Upper outlier above Q3 + 1.5×IQR" />
                  <circle cx="95" cy="48" r="2.5" fill="#38BDF8" className="svg-bubble-appear" style={{ animationDelay: '300ms' }} data-plotly-label="Outlier: Indonesia (pop = 223.55M)" data-plotly-sub="Upper outlier above Q3 + 1.5×IQR" />
                  <g className="svg-box-reveal" data-plotly-label="Population Boxplot IQR (Q1=4.51M, Median=10.52M, Q3=31.21M)" data-plotly-sub="50% of countries have population between 4.5M and 31.2M">
                    <line x1="95" y1="56" x2="95" y2="138" stroke="#6366F1" strokeWidth="2" />
                    <line x1="75" y1="56" x2="115" y2="56" stroke="#6366F1" strokeWidth="2" />
                    <line x1="75" y1="138" x2="115" y2="138" stroke="#6366F1" strokeWidth="2" />
                    <rect x="65" y="72" width="60" height="34" fill="#6366F1" fillOpacity="0.45" stroke="#818CF8" strokeWidth="1.5" />
                    <line x1="65" y1="89" x2="125" y2="89" stroke="#FACC15" strokeWidth="2.5" />
                  </g>
                </svg>
              </div>
              {/* Plot 2: Violinplot of lifeExp */}
              <div className="bg-[#0D1527] rounded-xl border border-[#1E293B] p-4">
                <div className="text-xs font-bold text-white text-center mb-1">
                  2. Violinplot of lifeExp
                </div>
                <div className="text-[11px] text-[#FACC15] khmer-text text-center mb-2">
                  ក្រាហ្វវីយ៉ូឡុងនៃអាយុរំពឹងរស់ (កំពូល ២)
                </div>
                <svg viewBox="0 0 180 150" className="w-full h-40 bg-[#070B14] rounded-lg border border-[#1E293B]">
                  <text x="28" y="35" fontSize="8" textAnchor="end" fill="#94A3B8">80y</text>
                  <text x="28" y="85" fontSize="8" textAnchor="end" fill="#94A3B8">60y</text>
                  <text x="28" y="130" fontSize="8" textAnchor="end" fill="#94A3B8">40y</text>
                  <path
                    d="M 95 15 C 105 30, 138 42, 135 55 C 130 70, 112 80, 112 98 C 112 115, 102 128, 95 140 C 88 128, 78 115, 78 98 C 78 80, 60 70, 55 55 C 52 42, 85 30, 95 15 Z"
                    fill="#F43F5E"
                    fillOpacity="0.45"
                    stroke="#FB7185"
                    strokeWidth="2"
                    className="svg-box-reveal"
                    style={{ animationDelay: '120ms' }}
                    data-plotly-label="Violinplot of lifeExp (Bimodal Density)"
                    data-plotly-sub="Primary peak ~74 yrs (Developed/Emerging) · Secondary mode ~52 yrs (Africa)"
                  />
                  <line x1="70" y1="55" x2="120" y2="55" stroke="#FACC15" strokeWidth="2" className="svg-line-draw" />
                </svg>
              </div>
              {/* Plot 3: Histogram of GDP Per Capita */}
              <div className="bg-[#0D1527] rounded-xl border border-[#1E293B] p-4">
                <div className="text-xs font-bold text-white text-center mb-1">
                  3. Histogram of GDP Per Capita
                </div>
                <div className="text-[11px] text-[#FACC15] khmer-text text-center mb-2">
                  អ៊ីស្តូក្រាមនៃ GDP (ពេបស្តាំខ្លាំង)
                </div>
                <svg viewBox="0 0 180 150" className="w-full h-40 bg-[#070B14] rounded-lg border border-[#1E293B]">
                  {[
                    { x: 35, h: 105, bin: '$0 – $5,000', count: 68 },
                    { x: 50, h: 36, bin: '$5,000 – $10,000', count: 24 },
                    { x: 65, h: 25, bin: '$10,000 – $15,000', count: 16 },
                    { x: 80, h: 12, bin: '$15,000 – $20,000', count: 8 },
                    { x: 95, h: 10, bin: '$20,000 – $25,000', count: 6 },
                    { x: 110, h: 15, bin: '$25,000 – $32,000', count: 10 },
                    { x: 125, h: 11, bin: '$32,000 – $40,000', count: 7 },
                    { x: 140, h: 6, bin: '$40,000 – $50,000', count: 3 },
                  ].map((b, i) => (
                    <rect
                      key={i}
                      x={b.x}
                      y={135 - b.h}
                      width="13"
                      height={b.h}
                      fill="#10B981"
                      rx="1.5"
                      className="svg-bar-rise"
                      style={{ animationDelay: `${i * 70}ms` }}
                      data-plotly-label={`GDP Histogram Bin: ${b.bin}`}
                      data-plotly-sub={`Count: ${b.count} countries (${((b.count / 142) * 100).toFixed(1)}% of world)`}
                    />
                  ))}
                  <text x="35" y="146" fontSize="8" fill="#94A3B8">$0</text>
                  <text x="90" y="146" fontSize="8" fill="#94A3B8">$20k</text>
                  <text x="140" y="146" fontSize="8" fill="#94A3B8">$45k</text>
                </svg>
              </div>
            </div>

            {slide.simulatorMode === 'bivariate_decision_matrix' && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-1">
                <button
                  onClick={() => onJumpToSlide(9)}
                  className="p-3.5 rounded-xl bg-[#0D1527] hover:bg-[#111C30] border border-[#0284C7]/60 text-left cursor-pointer"
                >
                  <div className="text-xs font-bold text-[#38BDF8]">Case 1: Quantitative vs Quantitative →</div>
                  <div className="text-xs text-[#FACC15] khmer-text mt-1">
                    <RichMathText text="ករណីទី 1៖ បរិមាណ × បរិមាណ ($\text{Cov}, r, \rho$, Scatterplot)" />
                  </div>
                </button>
                <button
                  onClick={() => onJumpToSlide(22)}
                  className="p-3.5 rounded-xl bg-[#0D1527] hover:bg-[#111C30] border border-purple-500/60 text-left cursor-pointer"
                >
                  <div className="text-xs font-bold text-purple-300">Case 2: Quantitative vs Categorical →</div>
                  <div className="text-xs text-[#FACC15] khmer-text mt-1">
                    <RichMathText text="ករណីទី 2៖ បរិមាណ × ប្រភេទ (មេគុណ $\eta^2$, Boxplot/Violin, Density)" />
                  </div>
                </button>
                <button
                  onClick={() => onJumpToSlide(28)}
                  className="p-3.5 rounded-xl bg-[#0D1527] hover:bg-[#111C30] border border-emerald-500/60 text-left cursor-pointer"
                >
                  <div className="text-xs font-bold text-emerald-300">Case 3: Categorical vs Categorical →</div>
                  <div className="text-xs text-[#FACC15] khmer-text mt-1">
                    <RichMathText text="ករណីទី 3៖ ប្រភេទ × ប្រភេទ (តេស្ត $\chi^2$, Cramér’s $V$, Treemap/Bar)" />
                  </div>
                </button>
              </div>
            )}
          </div>
        );

      case 'tips_covariance_scatter':
      case 'pearson_correlation_tips':
        return (
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
            <div className="md:col-span-7 bg-[#0D1527] rounded-xl border border-[#1E293B] p-4">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                <div>
                  <span className="text-xs font-bold text-white block">
                    Tips vs. Total Bill Scatter & Regression (Cov = 8.32, Pearson r = 0.676)
                  </span>
                  <span className="text-[11px] text-[#FACC15] khmer-text">
                    ក្រាហ្វពង្រាយរវាងប្រាក់វិក្កយបត្រសរុប និងប្រាក់ធីប បែងចែកតាមភេទ
                  </span>
                </div>
                <div className="flex items-center gap-1 text-xs">
                  {(['All', 'Female', 'Male'] as const).map((g) => (
                    <button
                      key={g}
                      onClick={() => setSexFilter(g)}
                      className={`px-2.5 py-1 rounded-lg font-bold cursor-pointer ${
                        sexFilter === g
                          ? 'bg-[#0284C7] text-white'
                          : 'bg-[#070B14] text-slate-400 border border-[#1E293B]'
                      }`}
                    >
                      {g}
                    </button>
                  ))}
                </div>
              </div>
              <svg viewBox="0 0 320 185" className="w-full h-48 bg-[#070B14] rounded-xl border border-[#1E293B]">
                <line x1="35" y1="155" x2="300" y2="155" stroke="#475569" />
                <line x1="35" y1="15" x2="35" y2="155" stroke="#475569" />
                <line
                  x1="45"
                  y1="142"
                  x2="290"
                  y2="25"
                  stroke="#FACC15"
                  strokeWidth="2.2"
                  className="svg-line-draw"
                />
                {filteredTips.map((row, idx) => {
                  const cx = 35 + (row.totalBill / 52) * 260;
                  const cy = 155 - (row.tip / 10) * 135;
                  return (
                    <circle
                      key={row.id}
                      cx={cx}
                      cy={cy}
                      r="5"
                      fill={row.sex === 'Female' ? '#38BDF8' : '#F43F5E'}
                      stroke="#FFFFFF"
                      strokeWidth="0.8"
                      opacity="0.9"
                      className="svg-bubble-appear"
                      style={{ animationDelay: `${idx * 25}ms` }}
                      data-plotly-label={`Table #${row.id} (${row.sex})`}
                      data-plotly-sub={`Total Bill: $${row.totalBill.toFixed(2)} · Tip: $${row.tip.toFixed(2)} (${((row.tip / row.totalBill) * 100).toFixed(1)}%)`}
                    />
                  );
                })}
                <text x="145" y="38" fontSize="10" fontWeight="bold" fill="#FACC15">
                  Cov(X,Y) = 8.32 | Pearson r = 0.676
                </text>
                <text x="165" y="174" fontSize="9" textAnchor="middle" fill="#94A3B8">
                  total_bill ($ USD) → tip ($ USD)
                </text>
              </svg>
            </div>
            <div className="md:col-span-5 bg-[#0D1527] rounded-xl border border-[#1E293B] p-4">
              <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-bold text-white mb-1.5">
                <span>Interactive Covariance Slope Simulator</span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setIsSlopeAnimating((prev) => !prev)}
                    className={`inline-flex items-center gap-1 px-2.5 py-1 rounded text-[11px] font-bold cursor-pointer ${
                      isSlopeAnimating
                        ? 'bg-amber-500 text-slate-950'
                        : 'bg-[#111C30] hover:bg-[#1E293B] text-[#FACC15] border border-amber-500/40'
                    }`}
                  >
                    {isSlopeAnimating ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
                    <span>{isSlopeAnimating ? 'Pause' : 'Auto-Sweep'}</span>
                  </button>
                  <span className="text-[#38BDF8]">
                    <MathSymbolBadge symbol={`\\text{Cov} = ${(simSlope * 9.72).toFixed(2)}`} className="!text-[#38BDF8]" />
                  </span>
                </div>
              </div>
              <div className="text-[11px] text-[#FACC15] khmer-text mb-2">
                ទាញគ្រាប់រំកិល ឬចុច Auto-Sweep ដើម្បីមើលចលនាប្រែប្រួលមេគុណកូវ៉ារ្យង់៖
              </div>
              <input
                type="range"
                min="-1"
                max="1"
                step="0.05"
                value={simSlope}
                onChange={(e) => {
                  setIsSlopeAnimating(false);
                  setSimSlope(parseFloat(e.target.value));
                }}
                className="w-full mb-3"
              />
              <svg viewBox="0 0 220 135" className="w-full h-36 bg-[#070B14] border border-[#1E293B] rounded-xl">
                <line x1="110" y1="0" x2="110" y2="135" stroke="#334155" />
                <line x1="0" y1="67" x2="220" y2="67" stroke="#334155" />
                {Array.from({ length: 25 }).map((_, i) => {
                  const x = -8 + (i / 24) * 16;
                  const y = simSlope * x;
                  return (
                    <circle
                      key={i}
                      cx={110 + x * 9}
                      cy={67 - y * 6}
                      r="3.2"
                      fill={simSlope >= 0 ? '#38BDF8' : '#F43F5E'}
                      className="svg-bubble-glider"
                      data-plotly-label={`Simulated Point #${i + 1}: (x=${x.toFixed(2)}, y=${y.toFixed(2)})`}
                      data-plotly-sub={`Slope = ${simSlope.toFixed(2)} · Cov(X,Y) = ${(simSlope * 9.72).toFixed(2)}`}
                    />
                  );
                })}
              </svg>
            </div>
          </div>
        );

      case 'pearson_pattern_gallery':
        return (
          <div className="bg-[#0D1527] rounded-xl border border-[#1E293B] p-4 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div>
                <div className="text-xs font-bold text-white">
                  21 Canonical Correlation Scatter Patterns (Row 1: Linear Spread | Row 2: Slope Invariance | Row 3: Non-Linear r = 0 Traps)
                </div>
                <div className="text-[11px] text-[#FACC15] khmer-text">
                  ក្រាហ្វគំរូទាំង ២១ បង្ហាញពីដែនកំណត់នៃមេគុណ Pearson r នៅពេលទិន្នន័យមានរាងកោងមិនលីនេអ៊ែរ (r = 0)
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-7 gap-3 text-center font-mono text-xs">
              {[
                { r: '1.0', type: 'line_pos' },
                { r: '0.8', type: 'noisy_pos' },
                { r: '0.4', type: 'weak_pos' },
                { r: '0.0', type: 'cloud' },
                { r: '0.0 (Parabola)', type: 'parabola' },
                { r: '0.0 (Circle)', type: 'circle' },
                { r: '-1.0', type: 'line_neg' },
              ].map((item, idx) => (
                <div
                  key={idx}
                  data-plotly-label={`Canonical Pattern #${idx + 1}: Pearson r = ${item.r}`}
                  data-plotly-sub={
                    item.type === 'parabola' || item.type === 'circle'
                      ? 'Non-Linear Trap: Strong deterministic curve where linear Pearson r = 0!'
                      : `Linear correlation pattern (${item.type})`
                  }
                  className="p-3 bg-[#070B14] rounded-xl border border-[#1E293B] flex flex-col justify-between gap-2 min-w-0 touch-spring-card"
                >
                  <div className="font-bold text-[#38BDF8] text-[11px] break-words leading-tight">
                    <RichMathText text={`r = ${item.r}`} />
                  </div>
                  <svg viewBox="0 0 80 60" className="w-full h-16 bg-[#0B1120] rounded">
                    {item.type === 'line_pos' && (
                      <line x1="10" y1="50" x2="70" y2="10" stroke="#38BDF8" strokeWidth="3" />
                    )}
                    {item.type === 'noisy_pos' && (
                      <>
                        <circle cx="15" cy="48" r="2.5" fill="#38BDF8" />
                        <circle cx="25" cy="38" r="2.5" fill="#38BDF8" />
                        <circle cx="35" cy="35" r="2.5" fill="#38BDF8" />
                        <circle cx="48" cy="24" r="2.5" fill="#38BDF8" />
                        <circle cx="62" cy="14" r="2.5" fill="#38BDF8" />
                      </>
                    )}
                    {item.type === 'weak_pos' && (
                      <>
                        <circle cx="15" cy="45" r="2.5" fill="#38BDF8" />
                        <circle cx="25" cy="20" r="2.5" fill="#38BDF8" />
                        <circle cx="40" cy="38" r="2.5" fill="#38BDF8" />
                        <circle cx="55" cy="18" r="2.5" fill="#38BDF8" />
                        <circle cx="65" cy="28" r="2.5" fill="#38BDF8" />
                      </>
                    )}
                    {item.type === 'cloud' && (
                      <>
                        <circle cx="20" cy="20" r="2.5" fill="#94A3B8" />
                        <circle cx="40" cy="30" r="2.5" fill="#94A3B8" />
                        <circle cx="60" cy="20" r="2.5" fill="#94A3B8" />
                        <circle cx="25" cy="45" r="2.5" fill="#94A3B8" />
                        <circle cx="55" cy="45" r="2.5" fill="#94A3B8" />
                      </>
                    )}
                    {item.type === 'parabola' && (
                      <path d="M 10 12 Q 40 58, 70 12" fill="none" stroke="#F43F5E" strokeWidth="2.5" />
                    )}
                    {item.type === 'circle' && (
                      <circle cx="40" cy="30" r="18" fill="none" stroke="#FACC15" strokeWidth="2.5" />
                    )}
                    {item.type === 'line_neg' && (
                      <line x1="10" y1="10" x2="70" y2="50" stroke="#10B981" strokeWidth="3" />
                    )}
                  </svg>
                </div>
              ))}
            </div>
          </div>
        );

      case 'gapminder_pearson_matrix':
      case 'pearson_vs_spearman_matrix':
      case 'correlation_comparison_table':
        return (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
            {/* Heatmap Matrix */}
            <div className="lg:col-span-6 bg-[#0D1527] rounded-xl border border-[#1E293B] p-4">
              <div className="text-xs font-bold text-white mb-1">
                <RichMathText text="Pearson vs. Spearman Correlation Matrix Heatmap — Gapminder $2007$" />
              </div>
              <div className="text-[11px] text-[#FACC15] khmer-text mb-3">
                <RichMathText text="ម៉ាទ្រីសសហសម្ព័ន្ធ Pearson $r = 0.679$ ធៀបនឹង Spearman $\rho = 0.857$ រវាង GDP និង LifeExp" />
              </div>
              <table className="w-full text-xs border-collapse">
                <thead>
                  <tr className="border-b border-[#1E293B] text-[#38BDF8]">
                    <th className="p-2 text-left">Variable Pair</th>
                    <th className="p-2 text-right">
                      <RichMathText text="Pearson ($r$)" />
                    </th>
                    <th className="p-2 text-right">
                      <RichMathText text="Spearman ($\rho$)" />
                    </th>
                    <th className="p-2 text-right">
                      <RichMathText text="Gain ($\Delta$)" />
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#1E293B] text-slate-200">
                  <tr className="bg-emerald-500/15">
                    <td className="p-2 font-bold text-white">
                      <RichMathText text="$\text{gdpPercap} \times \text{lifeExp}$" />
                    </td>
                    <td className="p-2 text-right font-bold text-[#38BDF8]">
                      <MathSymbolBadge symbol="0.6787" className="!text-[#38BDF8]" />
                    </td>
                    <td className="p-2 text-right font-bold text-[#FACC15]">
                      <MathSymbolBadge symbol="0.8566" />
                    </td>
                    <td className="p-2 text-right font-bold text-emerald-400">
                      <MathSymbolBadge symbol="+0.1779" className="!text-emerald-400" />
                    </td>
                  </tr>
                  <tr>
                    <td className="p-2 font-bold">
                      <RichMathText text="$\text{gdpPercap} \times \text{pop}$" />
                    </td>
                    <td className="p-2 text-right">
                      <MathSymbolBadge symbol="-0.0557" className="!text-slate-200" />
                    </td>
                    <td className="p-2 text-right">
                      <MathSymbolBadge symbol="-0.0646" className="!text-slate-200" />
                    </td>
                    <td className="p-2 text-right text-slate-400">
                      <MathSymbolBadge symbol="-0.0089" className="!text-slate-400" />
                    </td>
                  </tr>
                  <tr>
                    <td className="p-2 font-bold">
                      <RichMathText text="$\text{lifeExp} \times \text{pop}$" />
                    </td>
                    <td className="p-2 text-right">
                      <MathSymbolBadge symbol="0.0476" className="!text-slate-200" />
                    </td>
                    <td className="p-2 text-right">
                      <MathSymbolBadge symbol="0.0034" className="!text-slate-200" />
                    </td>
                    <td className="p-2 text-right text-slate-400">
                      <MathSymbolBadge symbol="-0.0442" className="!text-slate-400" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Visual Grouped Bar Chart comparing Pearson vs Spearman */}
            <div className="lg:col-span-6 bg-[#0D1527] rounded-xl border border-[#1E293B] p-4">
              <div className="text-xs font-bold text-white mb-2">
                <RichMathText text="Visual Comparison: Linear Pearson ($r$) vs. Rank Spearman ($\rho$)" />
              </div>
              <svg viewBox="0 0 300 155" className="w-full h-40 bg-[#070B14] rounded-xl border border-[#1E293B]">
                <line x1="40" y1="125" x2="275" y2="125" stroke="#475569" />
                {/* Pair 1: GDP x LifeExp */}
                <rect x="65" y={125 - 0.679 * 100} width="32" height={0.679 * 100} fill="#38BDF8" rx="3" className="svg-bar-rise" style={{ animationDelay: '60ms' }} data-plotly-label="Pearson r (gdpPercap × lifeExp) = 0.679" data-plotly-sub="Linear correlation underestimates curved relationship" />
                <text x="81" y={120 - 0.679 * 100} fontSize="9" fontWeight="bold" textAnchor="middle" fill="#38BDF8">0.679</text>

                <rect x="103" y={125 - 0.857 * 100} width="32" height={0.857 * 100} fill="#FACC15" rx="3" className="svg-bar-rise" style={{ animationDelay: '160ms' }} data-plotly-label="Spearman ρ (gdpPercap × lifeExp) = 0.857" data-plotly-sub="Rank correlation captures true monotonic curve (+0.178 gain)" />
                <text x="119" y={120 - 0.857 * 100} fontSize="9" fontWeight="bold" textAnchor="middle" fill="#FACC15">0.857</text>
                <text x="100" y="142" fontSize="9" fontWeight="bold" textAnchor="middle" fill="#E2E8F0">gdpPercap × lifeExp</text>

                {/* Toy Outlier Lab comparison */}
                <rect x="185" y={125 - 0.506 * 100} width="32" height={0.506 * 100} fill="#38BDF8" rx="3" className="svg-bar-rise" style={{ animationDelay: '260ms' }} data-plotly-label="Pearson r (Outlier Dataset Y₄=1000) = 0.506" data-plotly-sub="Severely distorted by single extreme outlier Y₄=1000" />
                <text x="201" y={120 - 0.506 * 100} fontSize="9" fontWeight="bold" textAnchor="middle" fill="#38BDF8">0.506</text>

                <rect x="223" y={125 - 1.0 * 100} width="32" height={100} fill="#FACC15" rx="3" className="svg-bar-rise" style={{ animationDelay: '360ms' }} data-plotly-label="Spearman ρ (Outlier Dataset Y₄=1000) = 1.000" data-plotly-sub="100% immune to monotonic outlier distortion!" />
                <text x="239" y="20" fontSize="9" fontWeight="bold" textAnchor="middle" fill="#FACC15">1.000</text>
                <text x="220" y="142" fontSize="9" fontWeight="bold" textAnchor="middle" fill="#E2E8F0">Outlier Dataset (Y₄=1000)</text>
              </svg>
            </div>
          </div>
        );

      case 'spearman_rank_concept':
      case 'spearman_outlier_lab':
        return (
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
            <div className="md:col-span-7 bg-[#0D1527] rounded-xl border border-[#1E293B] p-4">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <span className="text-xs font-bold text-white">
                  <RichMathText text={`Interactive Outlier Sensitivity Lab: $X = [1, 3, 2, 5, 4]$, $Y = [0.1, 1, 0.2, ${outlierY4}, 1.5]$`} />
                </span>
                <button
                  onClick={() => setIsOutlierAnimating((prev) => !prev)}
                  className={`inline-flex items-center gap-1 px-2.5 py-1 rounded text-[11px] font-bold cursor-pointer ${
                    isOutlierAnimating
                      ? 'bg-amber-500 text-slate-950'
                      : 'bg-[#111C30] hover:bg-[#1E293B] text-[#FACC15] border border-amber-500/40'
                  }`}
                >
                  {isOutlierAnimating ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
                  <span>{isOutlierAnimating ? 'Pause Outlier' : 'Animate Outlier Y₄'}</span>
                </button>
              </div>
              <div className="flex items-center gap-3 mb-3">
                <label className="text-xs font-medium text-slate-300">
                  <RichMathText text="Adjust Extreme Outlier $Y_4$ (at $X=5$):" />
                </label>
                <input
                  type="range"
                  min="2"
                  max="2000"
                  step="10"
                  value={outlierY4}
                  onChange={(e) => {
                    setIsOutlierAnimating(false);
                    setOutlierY4(Number(e.target.value));
                  }}
                  className="flex-1"
                />
                <span className="text-xs font-bold text-[#FACC15]">
                  <MathSymbolBadge symbol={String(outlierY4)} />
                </span>
              </div>
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-xl bg-rose-950/50 border border-rose-500/40">
                  <div className="text-rose-300 font-bold">
                    <RichMathText text="Pearson $r_{X,Y}$" />
                  </div>
                  <div className="text-xl font-bold text-white my-1">
                    <MathSymbolBadge symbol={`r = ${dynamicPearsonToy.toFixed(3)}`} className="!text-white" />
                  </div>
                  <div className="text-[11px] text-rose-300">
                    <RichMathText text={`$s_Y = ${stdY.toFixed(1)}$ (Pulled down by $Y_4 = ${outlierY4}$)`} />
                  </div>
                </div>
                <div className="p-3 rounded-xl bg-emerald-950/50 border border-emerald-500/40">
                  <div className="text-emerald-300 font-bold">
                    <RichMathText text="Spearman $\rho_{X,Y}$" />
                  </div>
                  <div className="text-xl font-bold text-[#FACC15] my-1">
                    <MathSymbolBadge symbol={`\\rho = ${dynamicSpearmanToy.toFixed(2)}`} />
                  </div>
                  <div className="text-[11px] text-emerald-300">
                    <RichMathText text="$\text{R}[X] = \text{R}[Y] = [1,3,2,5,4] \implies \forall d_i = 0$" />
                  </div>
                </div>
              </div>
            </div>
            <div className="md:col-span-5 bg-[#0D1527] rounded-xl border border-[#1E293B] p-4">
              <div className="text-xs font-bold text-center text-white mb-2">
                Log-Y Plot of the 5 Observations (ក្រាហ្វពង្រាយនៃចំណុចទិន្នន័យទាំង ៥)
              </div>
              <svg viewBox="0 0 220 145" className="w-full h-40 bg-[#070B14] rounded-xl border border-[#1E293B]">
                {[
                  { x: 1, y: 0.1 },
                  { x: 2, y: 0.2 },
                  { x: 3, y: 1.0 },
                  { x: 4, y: 1.5 },
                  { x: 5, y: outlierY4 },
                ].map((pt, idx) => {
                  const cx = 25 + (pt.x / 5.5) * 175;
                  const logY = Math.log10(pt.y);
                  const cy = 125 - ((logY + 1.2) / 4.6) * 105;
                  return (
                    <g
                      key={idx}
                      data-plotly-label={`Observation #${idx + 1}: (X=${pt.x}, Y=${pt.y})`}
                      data-plotly-sub={`Rank R[X]=${idx + 1}, Rank R[Y]=${idx + 1}, Rank Diff dᵢ=0 · Pearson r=${dynamicPearsonToy.toFixed(3)}, Spearman ρ=${dynamicSpearmanToy.toFixed(2)}`}
                    >
                      {idx === 4 && (
                        <circle
                          cx={cx}
                          cy={cy}
                          r="10"
                          fill="none"
                          stroke="#FACC15"
                          strokeWidth="1.5"
                          className="svg-pulse-ring"
                        />
                      )}
                      <circle
                        cx={cx}
                        cy={cy}
                        r="5.5"
                        fill={idx === 4 ? '#FACC15' : '#38BDF8'}
                        className="svg-bubble-glider"
                      />
                      <text x={cx} y={cy - 8} fontSize="8" textAnchor="middle" fill="#E2E8F0">
                        ({pt.x}, {pt.y})
                      </text>
                    </g>
                  );
                })}
                <text x="115" y="140" fontSize="8" textAnchor="middle" fill="#94A3B8">
                  X = [1, 2, 3, 4, 5] (Monotonic Rank Order 100% Preserved)
                </text>
              </svg>
            </div>
          </div>
        );

      case 'gapminder_linear_scatter':
      case 'gapminder_log_scatter':
      case 'gapminder_scatter_insights':
      case 'visualization_best_practices':
        return (
          <div className="space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-2 bg-[#0D1527] px-4 py-2.5 rounded-xl border border-[#1E293B]">
              <div className="flex items-center gap-2 text-xs">
                <Sliders className="w-3.5 h-3.5 text-[#38BDF8]" />
                <span className="font-semibold text-white">Axis Scale Mode (មាត្រដ្ឋានអ័ក្ស):</span>
                <button
                  onClick={() => setUseLogScale(false)}
                  className={`px-3 py-1 rounded-lg font-bold cursor-pointer ${
                    !useLogScale ? 'bg-[#0284C7] text-white' : 'bg-[#070B14] text-slate-400 border border-[#1E293B]'
                  }`}
                >
                  Linear Scale (Slide 18)
                </button>
                <button
                  onClick={() => setUseLogScale(true)}
                  className={`px-3 py-1 rounded-lg font-bold cursor-pointer ${
                    useLogScale ? 'bg-[#0284C7] text-white' : 'bg-[#070B14] text-slate-400 border border-[#1E293B]'
                  }`}
                >
                  Log₁₀ Scale (Slide 19–20)
                </button>
              </div>
              <label className="flex items-center gap-1.5 text-xs text-[#FACC15] font-semibold cursor-pointer">
                <input
                  type="checkbox"
                  checked={highlightAnomalies}
                  onChange={(e) => setHighlightAnomalies(e.target.checked)}
                />
                Highlight High-GDP / Low-LifeExp Anomalies (South Africa, Gabon)
              </label>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Plot 1: GDP vs LifeExp */}
              <div className="bg-[#0D1527] rounded-xl border border-[#1E293B] p-4">
                <div className="text-xs font-bold text-white mb-1 text-center">
                  The World {useLogScale ? 'Log₁₀(GDP) ' : 'Linear GDP '}vs. Life Expectancy in 2007
                </div>
                <svg viewBox="0 0 280 170" className="w-full h-44 bg-[#070B14] rounded-xl border border-[#1E293B]">
                  {filteredGapminder.map((row, idx) => {
                    const cx = useLogScale
                      ? 25 + ((Math.log10(row.gdpPercap) - 2.3) / 2.5) * 235
                      : 25 + (row.gdpPercap / 52000) * 235;
                    const cy = 145 - ((row.lifeExp - 35) / 50) * 125;
                    const isAnomaly =
                      highlightAnomalies && row.gdpPercap > 4000 && row.lifeExp < 58;
                    return (
                      <circle
                        key={idx}
                        cx={cx}
                        cy={cy}
                        r={isAnomaly ? '6' : '4.5'}
                        fill={isAnomaly ? '#F43F5E' : '#38BDF8'}
                        stroke={isAnomaly ? '#FACC15' : 'none'}
                        strokeWidth="1.5"
                        opacity="0.85"
                      >
                        <title>{`${row.country}: GDP $${row.gdpPercap}, LifeExp ${row.lifeExp}`}</title>
                      </circle>
                    );
                  })}
                  <text x="140" y="162" fontSize="8.5" textAnchor="middle" fill="#94A3B8">
                    gdpPercap ({useLogScale ? 'Log₁₀ Scale: 1k → 10k → 50k' : 'Linear: 0 → 50k'})
                  </text>
                </svg>
              </div>
              {/* Plot 2: GDP vs Population */}
              <div className="bg-[#0D1527] rounded-xl border border-[#1E293B] p-4">
                <div className="text-xs font-bold text-white mb-1 text-center">
                  The World GDP vs. {useLogScale ? 'Log₁₀(Population) ' : 'Linear Population '}in 2007
                </div>
                <svg viewBox="0 0 280 170" className="w-full h-44 bg-[#070B14] rounded-xl border border-[#1E293B]">
                  {filteredGapminder.map((row, idx) => {
                    const cx = 25 + (row.gdpPercap / 52000) * 235;
                    const cy = useLogScale
                      ? 145 - ((Math.log10(row.pop) - 5.5) / 3.8) * 125
                      : 145 - (row.pop / 1400000000) * 125;
                    return (
                      <circle
                        key={idx}
                        cx={cx}
                        cy={cy}
                        r="4.5"
                        fill="#A855F7"
                        opacity="0.85"
                      >
                        <title>{`${row.country}: Pop ${row.pop.toLocaleString()}`}</title>
                      </circle>
                    );
                  })}
                  <text x="140" y="162" fontSize="8.5" textAnchor="middle" fill="#94A3B8">
                    gdpPercap vs {useLogScale ? 'log₁₀(pop) — Decorrelated Cloud (r = -0.056)' : 'Linear pop (Crushed near 0!)'}
                  </text>
                </svg>
              </div>
            </div>
          </div>
        );

      case 'eta_squared_formula':
      case 'eta_squared_anova_visual':
      case 'conditional_violin_gdp':
      case 'conditional_density_lifeexp':
      case 'eta_squared_boxplots_comparison':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Left Chart: 5-Continent Boxplot & Violin Comparison */}
            <div className="bg-[#0D1527] rounded-xl border border-[#1E293B] p-4">
              <div className="text-xs font-bold text-white text-center mb-1">
                LifeExp per Continent Boxplot (ANOVA η² = 0.635)
              </div>
              <div className="text-[11px] text-[#FACC15] khmer-text text-center mb-2">
                ៦៣.៥% នៃវ៉ារ្យង់អាយុរំពឹងរស់ត្រូវបានពន្យល់ដោយទ្វីបទាំង ៥
              </div>
              <svg viewBox="0 0 280 160" className="w-full h-44 bg-[#070B14] rounded-xl border border-[#1E293B]">
                {[
                  { name: 'Africa', x: 40, yTop: 75, yBot: 118, med: 100, medVal: '52.8 yrs', iqr: '46.5y – 59.4y', color: '#6366F1' },
                  { name: 'Asia', x: 90, yTop: 42, yBot: 78, med: 56, medVal: '72.4 yrs', iqr: '65.5y – 75.6y', color: '#F43F5E' },
                  { name: 'Americas', x: 140, yTop: 38, yBot: 60, med: 50, medVal: '72.9 yrs', iqr: '71.7y – 76.4y', color: '#10B981' },
                  { name: 'Europe', x: 190, yTop: 26, yBot: 45, med: 34, medVal: '78.6 yrs', iqr: '75.0y – 79.8y', color: '#A855F7' },
                  { name: 'Oceania', x: 240, yTop: 22, yBot: 28, med: 25, medVal: '80.7 yrs', iqr: '80.2y – 81.2y', color: '#F97316' },
                ].map((c, idx) => (
                  <g
                    key={c.name}
                    className="svg-box-reveal"
                    style={{ animationDelay: `${idx * 90}ms` }}
                    data-plotly-label={`${c.name} — Life Expectancy Boxplot`}
                    data-plotly-sub={`Median: ${c.medVal} · IQR: ${c.iqr} · Global ANOVA η² = 0.635`}
                  >
                    <line x1={c.x} y1={c.yTop - 10} x2={c.x} y2={c.yBot + 10} stroke={c.color} strokeWidth="1.5" />
                    <rect
                      x={c.x - 15}
                      y={c.yTop}
                      width="30"
                      height={c.yBot - c.yTop}
                      fill={c.color}
                      fillOpacity="0.45"
                      stroke={c.color}
                      strokeWidth="1.5"
                      rx="2"
                    />
                    <line
                      x1={c.x - 15}
                      y1={c.med}
                      x2={c.x + 15}
                      y2={c.med}
                      stroke="#FACC15"
                      strokeWidth="2.5"
                    />
                    <text x={c.x} y="148" fontSize="8.5" textAnchor="middle" fill="#E2E8F0">
                      {c.name}
                    </text>
                  </g>
                ))}
              </svg>
            </div>

            {/* Right Chart: Conditional KDE Density Curves & GDP Boxplot */}
            <div className="bg-[#0D1527] rounded-xl border border-[#1E293B] p-4">
              <div className="text-xs font-bold text-white text-center mb-1">
                {slide.simulatorMode === 'conditional_density_lifeexp'
                  ? 'Overlaid Kernel Density (KDE) of LifeExp by Continent'
                  : 'GDP per Capita by Continent (ANOVA η² = 0.424)'}
              </div>
              <div className="text-[11px] text-[#FACC15] khmer-text text-center mb-2">
                ការប្រៀបធៀបរបាយទិន្នន័យតាមក្រុមទ្វីបនីមួយៗ
              </div>
              {slide.simulatorMode === 'conditional_density_lifeexp' ? (
                <svg viewBox="0 0 280 160" className="w-full h-44 bg-[#070B14] rounded-xl border border-[#1E293B]">
                  {/* Africa KDE */}
                  <path d="M 20 135 Q 75 45, 135 135" fill="#6366F1" fillOpacity="0.3" stroke="#6366F1" strokeWidth="2.2" className="svg-line-draw" data-plotly-label="Africa KDE Density Curve (ទ្វីបអាហ្វ្រិក)" data-plotly-sub="Mean LifeExp = 54.8 yrs · Wide spread (39.6y – 76.4y)" />
                  {/* Asia KDE */}
                  <path d="M 95 135 Q 165 40, 225 135" fill="#F43F5E" fillOpacity="0.3" stroke="#F43F5E" strokeWidth="2.2" className="svg-line-draw" style={{ animationDelay: '180ms' }} data-plotly-label="Asia KDE Density Curve (ទ្វីបអាស៊ី)" data-plotly-sub="Mean LifeExp = 70.7 yrs · Median = 72.4 yrs" />
                  {/* Europe & Oceania KDE */}
                  <path d="M 160 135 Q 220 20, 260 135" fill="#10B981" fillOpacity="0.35" stroke="#10B981" strokeWidth="2.2" className="svg-line-draw" style={{ animationDelay: '360ms' }} data-plotly-label="Europe & Oceania KDE Density Curve" data-plotly-sub="Mean LifeExp = 77.6 – 80.7 yrs · Tightly clustered at high longevity" />
                  <text x="75" y="65" fontSize="8.5" fill="#818CF8">Africa (~54y)</text>
                  <text x="155" y="55" fontSize="8.5" fill="#FDA4AF">Asia (~71y)</text>
                  <text x="215" y="32" fontSize="8.5" fill="#6EE7B7">Europe/Oceania (~80y)</text>
                  <line x1="15" y1="135" x2="265" y2="135" stroke="#475569" />
                  <text x="140" y="150" fontSize="8.5" textAnchor="middle" fill="#94A3B8">
                    Life Expectancy (35 yrs → 85 yrs)
                  </text>
                </svg>
              ) : (
                <svg viewBox="0 0 280 160" className="w-full h-44 bg-[#070B14] rounded-xl border border-[#1E293B]">
                  {[
                    { name: 'Africa', x: 40, yTop: 118, yBot: 132, med: 128, medGdp: '$1,452', color: '#6366F1' },
                    { name: 'Asia', x: 90, yTop: 72, yBot: 128, med: 118, medGdp: '$4,471', color: '#F43F5E' },
                    { name: 'Americas', x: 140, yTop: 95, yBot: 118, med: 108, medGdp: '$8,948', color: '#10B981' },
                    { name: 'Europe', x: 190, yTop: 42, yBot: 92, med: 65, medGdp: '$28,054', color: '#A855F7' },
                    { name: 'Oceania', x: 240, yTop: 48, yBot: 72, med: 60, medGdp: '$29,810', color: '#F97316' },
                  ].map((c, idx) => (
                    <g
                      key={c.name}
                      className="svg-box-reveal"
                      style={{ animationDelay: `${idx * 90}ms` }}
                      data-plotly-label={`${c.name} — GDP per Capita Boxplot`}
                      data-plotly-sub={`Median GDP/Capita: ${c.medGdp} · ANOVA η² = 0.424`}
                    >
                      <rect
                        x={c.x - 15}
                        y={c.yTop}
                        width="30"
                        height={c.yBot - c.yTop}
                        fill={c.color}
                        fillOpacity="0.45"
                        stroke={c.color}
                        strokeWidth="1.5"
                        rx="2"
                      />
                      <line
                        x1={c.x - 15}
                        y1={c.med}
                        x2={c.x + 15}
                        y2={c.med}
                        stroke="#FACC15"
                        strokeWidth="2.5"
                      />
                      <text x={c.x} y="148" fontSize="8.5" textAnchor="middle" fill="#E2E8F0">
                        {c.name}
                      </text>
                    </g>
                  ))}
                </svg>
              )}
            </div>
          </div>
        );

      case 'qual_treemap_mosaic':
      case 'qual_stacked_grouped_bars':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-[#0D1527] rounded-xl border border-[#1E293B] p-4">
              <div className="text-xs font-bold text-white mb-1">
                100% Stacked Barplot: Categorical GDP vs. Continent
              </div>
              <div className="text-[11px] text-[#FACC15] khmer-text mb-3">
                ក្រាហ្វរបារជាន់គ្នា ១០០% បង្ហាញសមាមាត្រប្រទេសកំពុងអភិវឌ្ឍ កំពុងរីកចម្រើន និងអភិវឌ្ឍហើយ
              </div>
              <div className="space-y-2.5">
                {CONTINENT_GDP_CAT_PERCENT.map((row) => (
                  <div key={row.continent} className="text-xs">
                    <div className="flex justify-between mb-1">
                      <span className="font-semibold text-white">
                        {row.continent} <span className="text-[#FACC15] khmer-text">({row.continentKm})</span>
                      </span>
                      <span className="font-mono text-[#38BDF8]">n = {row.totalCountries}</span>
                    </div>
                    <div className="w-full h-5 rounded-md overflow-hidden flex font-mono text-[10px] text-white font-bold">
                      {row.developing > 0 && (
                        <div
                          style={{ width: `${row.developing}%` }}
                          className="bg-[#6366F1] flex items-center justify-center"
                          data-plotly-label={`${row.continent} — Developing (${row.developing}%)`}
                          data-plotly-sub={`n = ${row.totalCountries} countries in ${row.continent} (${row.continentKm})`}
                        >
                          {row.developing >= 14 ? `${row.developing}%` : ''}
                        </div>
                      )}
                      {row.emerging > 0 && (
                        <div
                          style={{ width: `${row.emerging}%` }}
                          className="bg-[#F43F5E] flex items-center justify-center"
                          data-plotly-label={`${row.continent} — Emerging (${row.emerging}%)`}
                          data-plotly-sub={`n = ${row.totalCountries} countries in ${row.continent} (${row.continentKm})`}
                        >
                          {row.emerging >= 14 ? `${row.emerging}%` : ''}
                        </div>
                      )}
                      {row.developed > 0 && (
                        <div
                          style={{ width: `${row.developed}%` }}
                          className="bg-[#10B981] flex items-center justify-center"
                          data-plotly-label={`${row.continent} — Developed (${row.developed}%)`}
                          data-plotly-sub={`n = ${row.totalCountries} countries in ${row.continent} (${row.continentKm})`}
                        >
                          {row.developed >= 14 ? `${row.developed}%` : ''}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-[#0D1527] rounded-xl border border-[#1E293B] p-4 flex flex-col justify-between">
              <div>
                <div className="text-xs font-bold text-white mb-1">
                  Treemap Hierarchy: Continent → [Developing, Emerging, Developed]
                </div>
                <div className="text-[11px] text-[#FACC15] khmer-text mb-3">
                  ក្រាហ្វ Treemap បង្ហាញទំហំសមាមាត្រតាមទ្វីប និងចំណាត់ថ្នាក់សេដ្ឋកិច្ច
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 text-xs font-bold text-white">
                <div
                  className="bg-sky-600/80 border border-sky-400/50 p-3 rounded-xl flex flex-col justify-between gap-2 min-h-20"
                  data-plotly-label="Treemap: Americas (ទ្វីបអាមេរិក, n=25)"
                  data-plotly-sub="68.0% Emerging · 24.0% Developed · 8.0% Developing"
                >
                  <span className="break-words">Americas (អាមេរិក)</span>
                  <span className="text-[11px] bg-slate-950/60 px-2 py-1 rounded self-start font-mono">
                    68.0% Emerging
                  </span>
                </div>
                <div
                  className="bg-purple-600/80 border border-purple-400/50 p-3 rounded-xl flex flex-col justify-between gap-2 min-h-20"
                  data-plotly-label="Treemap: Oceania (ទ្វីបអូសេអានី, n=2)"
                  data-plotly-sub="100% Developed (Australia & New Zealand)"
                >
                  <span className="break-words">Oceania (អូសេអានី)</span>
                  <span className="text-[11px] bg-slate-950/60 px-2 py-1 rounded self-start font-mono">
                    100% Developed
                  </span>
                </div>
                <div
                  className="bg-rose-600/80 border border-rose-400/50 p-3 rounded-xl flex flex-col justify-between gap-2 min-h-20"
                  data-plotly-label="Treemap: Africa (ទ្វីបអាហ្វ្រិក, n=52)"
                  data-plotly-sub="71.2% Developing · 26.9% Emerging · 1.9% Developed"
                >
                  <span className="break-words">Africa (អាហ្វ្រិក)</span>
                  <span className="text-[11px] bg-slate-950/60 px-2 py-1 rounded self-start font-mono">
                    71.2% Developing
                  </span>
                </div>
                <div
                  className="bg-amber-600/80 border border-amber-400/50 p-3 rounded-xl flex flex-col justify-between gap-2 min-h-20"
                  data-plotly-label="Treemap: Europe (ទ្វីបអឺរ៉ុប, n=30)"
                  data-plotly-sub="76.7% Developed · 23.3% Emerging · 0% Developing"
                >
                  <span className="break-words">Europe (អឺរ៉ុប)</span>
                  <span className="text-[11px] bg-slate-950/60 px-2 py-1 rounded self-start font-mono">
                    76.7% Developed
                  </span>
                </div>
                <div
                  className="sm:col-span-2 bg-emerald-600/80 border border-emerald-400/50 p-3 rounded-xl flex flex-col justify-between gap-2 min-h-20"
                  data-plotly-label="Treemap: Asia (ទ្វីបអាស៊ី, n=33)"
                  data-plotly-sub="Balanced 1/3 Split: 36.4% Developed · 33.3% Emerging · 30.3% Developing"
                >
                  <span className="break-words">Asia (អាស៊ី — 33 Countries Balanced 1/3 Split)</span>
                  <span className="text-[11px] bg-slate-950/60 px-2 py-1 rounded self-start font-mono break-words">
                    36.4% Developed · 33.3% Emerging · 30.3% Developing
                  </span>
                </div>
              </div>
            </div>
          </div>
        );

      case 'chi_square_contingency_theory':
      case 'chi_square_distributions_summary':
      case 'covid_survey_chi_square':
      case 'cramers_v_bias_correction':
        return (
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            <div className="md:col-span-7 bg-[#0D1527] rounded-xl border border-[#1E293B] p-4 overflow-x-auto">
              <div className="text-xs font-bold text-white mb-1">
                <RichMathText text="🇫🇷 2021 Covid-19 Vaccine Survey Contingency Table ($N = 85{,}855$, $\text{df} = 18$, $\chi^2 \approx 3{,}298$, Cramér’s $V = 0.113$)" />
              </div>
              <div className="text-[11px] text-[#FACC15] khmer-text mb-3">
                <RichMathText text="តារាងខ្វែងរវាងប្រភេទមុខរបរទាំង 7 និងកម្រិតយល់ព្រមចាក់វ៉ាក់សាំង (0 ដល់ 3)" />
              </div>
              <table className="w-full text-xs border-collapse">
                <thead>
                  <tr className="border-b border-[#1E293B] text-[#38BDF8]">
                    <th className="p-1.5 text-left">Favor Level</th>
                    {COVID_SURVEY_2021.map((r) => (
                      <th key={r.jobCode} className="p-1.5 text-right">{r.jobCode}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#1E293B] text-slate-200">
                  <tr>
                    <td className="p-1.5 font-bold text-[#38BDF8]">
                      <RichMathText text="$3$ (Strong)" />
                    </td>
                    {COVID_SURVEY_2021.map((r) => (
                      <td key={r.jobCode} className="p-1.5 text-right">
                        <MathSymbolBadge symbol={r.favor3.toLocaleString()} className="!text-slate-200" />
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="p-1.5 font-bold text-emerald-400">
                      <RichMathText text="$2$ (Mod)" />
                    </td>
                    {COVID_SURVEY_2021.map((r) => (
                      <td key={r.jobCode} className="p-1.5 text-right">
                        <MathSymbolBadge symbol={r.favor2.toLocaleString()} className="!text-slate-200" />
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="p-1.5 font-bold text-[#FACC15]">
                      <RichMathText text="$1$ (Low)" />
                    </td>
                    {COVID_SURVEY_2021.map((r) => (
                      <td key={r.jobCode} className="p-1.5 text-right">
                        <MathSymbolBadge symbol={r.favor1.toLocaleString()} className="!text-slate-200" />
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="p-1.5 font-bold text-rose-400">
                      <RichMathText text="$0$ (Refuse)" />
                    </td>
                    {COVID_SURVEY_2021.map((r) => (
                      <td key={r.jobCode} className="p-1.5 text-right">
                        <MathSymbolBadge symbol={r.favor0.toLocaleString()} className="!text-slate-200" />
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="md:col-span-5 bg-[#0D1527] rounded-xl border border-[#1E293B] p-4">
              <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-bold text-white mb-2">
                <span>
                  <RichMathText text={`$\\chi^2(\\text{df} = ${selectedDf})$ Density Curve`} />
                </span>
                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => setIsDfAnimating((prev) => !prev)}
                    className={`inline-flex items-center gap-1 px-2 py-1 rounded text-[11px] font-bold cursor-pointer ${
                      isDfAnimating
                        ? 'bg-amber-500 text-slate-950'
                        : 'bg-[#111C30] hover:bg-[#1E293B] text-[#FACC15] border border-amber-500/40'
                    }`}
                  >
                    {isDfAnimating ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
                    <span>{isDfAnimating ? 'Pause' : 'Animate df'}</span>
                  </button>
                  <select
                    value={selectedDf}
                    onChange={(e) => {
                      setIsDfAnimating(false);
                      setSelectedDf(Number(e.target.value));
                    }}
                    className="text-xs bg-[#070B14] text-[#38BDF8] border border-[#1E293B] rounded px-2 py-1 font-mono"
                  >
                    {[1, 5, 10, 15, 18, 20, 30].map((d) => (
                      <option key={d} value={d}>df = {d}</option>
                    ))}
                  </select>
                </div>
              </div>
              <svg viewBox="0 0 240 130" className="w-full h-36 bg-[#070B14] rounded-xl border border-[#1E293B]">
                <path
                  d={`M 15 108 Q ${15 + selectedDf * 3.5} 15, ${50 + selectedDf * 5} 98 L 225 108`}
                  fill="#0284C7"
                  fillOpacity="0.25"
                  stroke="#38BDF8"
                  strokeWidth="2.5"
                  className="svg-line-draw"
                  data-plotly-label={`Chi-Square χ²(df = ${selectedDf}) Probability Density Curve`}
                  data-plotly-sub={`Mean = df = ${selectedDf}, Variance = 2·df = ${selectedDf * 2} · Critical C(α=0.01) = 34.81`}
                />
                <line
                  x1={Math.min(210, 55 + selectedDf * 4.5)}
                  y1="15"
                  x2={Math.min(210, 55 + selectedDf * 4.5)}
                  y2="108"
                  stroke="#F43F5E"
                  strokeDasharray="3,3"
                  strokeWidth="2"
                  data-plotly-label="Critical Threshold C(α = 0.01) = 34.81"
                  data-plotly-sub="Observed χ² = 3,298 ≫ 34.81 ⇒ Reject H₀ (Strong Dependence)"
                />
                <text x="120" y="122" fontSize="8" textAnchor="middle" fill="#94A3B8">
                  df = {selectedDf} | Critical C(α=0.01) = 34.81 ≪ χ² = 3,298
                </text>
              </svg>
            </div>
          </div>
        );

      case 'multivariate_color_encoding':
      case 'multivariate_shape_encoding':
      case 'multivariate_bubble_size':
      case 'animated_plotly_bubble':
        return (
          <div className="space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-3 bg-[#0D1527] px-4 py-2.5 rounded-xl border border-[#1E293B] text-xs">
              <div className="flex items-center gap-3 w-full">
                <button
                  onClick={() => {
                    if (animYear === 2007) setAnimYear(1952);
                    setIsPlaying(!isPlaying);
                  }}
                  className="px-3.5 py-1.5 rounded-lg bg-[#0284C7] hover:bg-[#0369A1] text-white font-bold flex items-center gap-1.5 cursor-pointer"
                >
                  {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                  {isPlaying ? 'Pause' : 'Play 1952–2007 ▶'}
                </button>
                <button
                  onClick={() => {
                    setIsPlaying(false);
                    setAnimYear(1952);
                  }}
                  className="p-1.5 rounded-lg bg-[#070B14] border border-[#1E293B] text-slate-300 hover:text-white cursor-pointer"
                  title="Reset to 1952"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>
                <span className="font-mono font-bold text-[#FACC15] tabular-nums">
                  Year = {animYear}
                </span>
                <input
                  type="range"
                  min="1952"
                  max="2007"
                  step="5"
                  value={animYear}
                  onChange={(e) => {
                    setIsPlaying(false);
                    setAnimYear(Number(e.target.value));
                  }}
                  className="flex-1"
                />
                <div className="hidden sm:flex items-center gap-2">
                  <span className="text-slate-400">Size:</span>
                  <input
                    type="range"
                    min="10"
                    max="32"
                    value={bubbleMaxRadius}
                    onChange={(e) => setBubbleMaxRadius(Number(e.target.value))}
                    className="w-20"
                  />
                </div>
              </div>
            </div>

            <div className="bg-[#0D1527] rounded-xl border border-[#1E293B] p-4">
              <svg viewBox="0 0 440 195" className="w-full h-56 bg-[#070B14] rounded-xl border border-[#1E293B]">
                {/* Watermark Year */}
                <text
                  x="355"
                  y="155"
                  fontSize="54"
                  fontWeight="bold"
                  fill="#1E293B"
                  textAnchor="middle"
                >
                  {animYear}
                </text>

                {filteredGapminder.map((row) => {
                  const progress = (animYear - 1952) / 55;
                  const gdpVal = row.gdpPercap * (0.28 + 0.72 * progress);
                  const lifeVal =
                    row.continent === 'Europe' || row.continent === 'Oceania'
                      ? row.lifeExp - (1 - progress) * 11
                      : row.lifeExp - (1 - progress) * 23;

                  const cx = 35 + ((Math.log10(Math.max(200, gdpVal)) - 2.2) / 2.6) * 370;
                  const cy = 168 - ((Math.max(32, lifeVal) - 30) / 56) * 145;
                  const r = Math.max(
                    4,
                    Math.sqrt(row.pop / 1318683096) * bubbleMaxRadius
                  );

                  const fill = CONTINENT_COLORS[row.continent] || '#38BDF8';

                  return (
                    <g key={row.country}>
                      {row.country === 'Cambodia' && (
                        <circle
                          cx={cx}
                          cy={cy}
                          r={r + 5}
                          fill="none"
                          stroke="#FACC15"
                          strokeWidth="1.5"
                          className="svg-pulse-ring"
                        />
                      )}
                      <circle
                        cx={cx}
                        cy={cy}
                        r={r}
                        fill={fill}
                        fillOpacity="0.82"
                        stroke={row.country === 'Cambodia' ? '#FACC15' : '#FFFFFF'}
                        strokeWidth={row.country === 'Cambodia' ? '1.8' : '0.9'}
                        className="svg-bubble-glider"
                      >
                        <title>{`${row.country} (${animYear}): GDP $${Math.round(gdpVal)}, LifeExp ${lifeVal.toFixed(1)} yrs`}</title>
                      </circle>
                    </g>
                  );
                })}
                <text x="220" y="186" fontSize="9" textAnchor="middle" fill="#38BDF8">
                  gdpPercap (Log₁₀ Scale: $100 → $1,000 → $10k → $50k) vs. lifeExp (Years) · Bubble Size = Population
                </text>
              </svg>
            </div>
          </div>
        );

      case 'timeseries_oceania_lines':
        return (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { title: '1. Evolution of Life Expectancy', km: 'ការវិវត្តនៃអាយុរំពឹងរស់ (១៩៥២-២០០៧)', ausKey: 'australiaLifeExp', nzKey: 'nzLifeExp', min: 68, max: 82 },
              { title: '2. Evolution of Population (M)', km: 'ការវិវត្តនៃចំនួនប្រជាជន (លាននាក់)', ausKey: 'australiaPopM', nzKey: 'nzPopM', min: 1, max: 22 },
              { title: '3. Evolution of GDP per Capita', km: 'ការវិវត្តនៃចំណូល GDP ក្នុងមនុស្សម្នាក់', ausKey: 'australiaGdp', nzKey: 'nzGdp', min: 9000, max: 36000 },
            ].map((panel, pIdx) => {
              const ausPoints = OCEANIA_TIMESERIES.map((r, i) => {
                const x = 20 + (i / 11) * 140;
                const val = Number(r[panel.ausKey as keyof typeof r]);
                const y = 125 - ((val - panel.min) / (panel.max - panel.min)) * 100;
                return `${x},${y}`;
              }).join(' ');
              const nzPoints = OCEANIA_TIMESERIES.map((r, i) => {
                const x = 20 + (i / 11) * 140;
                const val = Number(r[panel.nzKey as keyof typeof r]);
                const y = 125 - ((val - panel.min) / (panel.max - panel.min)) * 100;
                return `${x},${y}`;
              }).join(' ');
              return (
                <div key={panel.title} className="bg-[#0D1527] rounded-xl border border-[#1E293B] p-4">
                  <div className="text-xs font-bold text-white text-center">
                    {panel.title}
                  </div>
                  <div className="text-[11px] text-[#FACC15] khmer-text text-center mb-2">
                    {panel.km}
                  </div>
                  <svg viewBox="0 0 180 145" className="w-full h-40 bg-[#070B14] rounded-xl border border-[#1E293B]">
                    <polyline
                      fill="none"
                      stroke="#38BDF8"
                      strokeWidth="2.5"
                      points={ausPoints}
                      className="svg-line-draw"
                      style={{ animationDelay: `${pIdx * 120}ms` }}
                      data-plotly-label={`Australia — ${panel.title}`}
                      data-plotly-sub="1952 to 2007 Time Series (5-year intervals)"
                    />
                    <polyline
                      fill="none"
                      stroke="#F43F5E"
                      strokeWidth="2.5"
                      points={nzPoints}
                      className="svg-line-draw"
                      style={{ animationDelay: `${pIdx * 120 + 180}ms` }}
                      data-plotly-label={`New Zealand — ${panel.title}`}
                      data-plotly-sub="1952 to 2007 Time Series (5-year intervals)"
                    />
                    {OCEANIA_TIMESERIES.map((r, i) => {
                      const x = 20 + (i / 11) * 140;
                      const ausVal = Number(r[panel.ausKey as keyof typeof r]);
                      const nzVal = Number(r[panel.nzKey as keyof typeof r]);
                      const yAus = 125 - ((ausVal - panel.min) / (panel.max - panel.min)) * 100;
                      const yNz = 125 - ((nzVal - panel.min) / (panel.max - panel.min)) * 100;
                      return (
                        <g key={r.year}>
                          <circle
                            cx={x}
                            cy={yAus}
                            r="3"
                            fill="#38BDF8"
                            stroke="#070B14"
                            strokeWidth="1"
                            data-plotly-label={`Australia (${r.year}): ${ausVal.toLocaleString()}`}
                            data-plotly-sub={`${panel.title} · ${panel.km}`}
                          />
                          <circle
                            cx={x}
                            cy={yNz}
                            r="3"
                            fill="#F43F5E"
                            stroke="#070B14"
                            strokeWidth="1"
                            data-plotly-label={`New Zealand (${r.year}): ${nzVal.toLocaleString()}`}
                            data-plotly-sub={`${panel.title} · ${panel.km}`}
                          />
                        </g>
                      );
                    })}
                    <text x="25" y="138" fontSize="8" fill="#94A3B8">1952</text>
                    <text x="90" y="138" fontSize="8" fill="#94A3B8">1980</text>
                    <text x="145" y="138" fontSize="8" fill="#94A3B8">2007</text>
                  </svg>
                </div>
              );
            })}
          </div>
        );

      case 'timeseries_asia_stacked_bars':
        return (
          <div className="bg-[#0D1527] rounded-xl border border-[#1E293B] p-4">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
              <div>
                <div className="text-xs font-bold text-white">
                  Evolution of Asian Countries’ GDP Categories from 1952 to 2007 (n = 33 Countries)
                </div>
                <div className="text-[11px] text-[#FACC15] khmer-text">
                  ការផ្លាស់ប្តូរចំណាត់ថ្នាក់សេដ្ឋកិច្ចនៃប្រទេសនៅទ្វីបអាស៊ីពីឆ្នាំ ១៩៥២ ដល់ ២០០៧
                </div>
              </div>
              <div className="flex items-center gap-3 text-xs">
                <span className="inline-flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-xs bg-[#6366F1]" /> Developing</span>
                <span className="inline-flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-xs bg-[#F43F5E]" /> Emerging</span>
                <span className="inline-flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-xs bg-[#10B981]" /> Developed</span>
              </div>
            </div>
            <div className="grid grid-cols-12 gap-2 items-end h-44 pt-2 bg-[#070B14] p-3 rounded-xl border border-[#1E293B]">
              {ASIA_CATEGORY_EVOLUTION.map((row, idx) => (
                <div key={row.year} className="flex flex-col items-center h-full justify-end">
                  <div
                    className="w-full flex flex-col rounded-t overflow-hidden h-32 svg-bar-rise"
                    style={{ animationDelay: `${idx * 65}ms` }}
                  >
                    <div
                      style={{ height: `${(row.developed / 33) * 100}%` }}
                      className="bg-[#10B981]"
                      data-plotly-label={`Asia (${row.year}) — Developed: ${row.developed}/33 countries (${((row.developed / 33) * 100).toFixed(1)}%)`}
                      data-plotly-sub={`Emerging: ${row.emerging} · Developing: ${row.developing}`}
                    />
                    <div
                      style={{ height: `${(row.emerging / 33) * 100}%` }}
                      className="bg-[#F43F5E]"
                      data-plotly-label={`Asia (${row.year}) — Emerging: ${row.emerging}/33 countries (${((row.emerging / 33) * 100).toFixed(1)}%)`}
                      data-plotly-sub={`Developed: ${row.developed} · Developing: ${row.developing}`}
                    />
                    <div
                      style={{ height: `${(row.developing / 33) * 100}%` }}
                      className="bg-[#6366F1]"
                      data-plotly-label={`Asia (${row.year}) — Developing: ${row.developing}/33 countries (${((row.developing / 33) * 100).toFixed(1)}%)`}
                      data-plotly-sub={`Developed: ${row.developed} · Emerging: ${row.emerging}`}
                    />
                  </div>
                  <span className="text-[10px] font-mono text-slate-300 mt-1.5">
                    {row.year}
                  </span>
                </div>
              ))}
            </div>
          </div>
        );

      case 'reflective_pause_canvas':
      case 'golden_rule_takeaway':
      case 'course_completion_celebration':
        return (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
            {/* Combinatorial Pairwise Growth Curve Chart */}
            <div className="lg:col-span-7 bg-[#0D1527] rounded-xl border border-[#1E293B] p-4 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div>
                  <div className="text-xs font-bold text-white">
                    <RichMathText text="Combinatorial Pairwise Explosion: $\text{Pairs} = \frac{p(p - 1)}{2}$" />
                  </div>
                  <div className="text-[11px] text-[#FACC15] khmer-text">
                    <RichMathText text="ហេតុអ្វីត្រូវគណនាសូចនាករស្ថិតិ ($r, \rho, \eta^2, V$) មុននឹងគូសក្រាហ្វ?" />
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setIsColsAnimating((prev) => !prev)}
                    className={`inline-flex items-center gap-1 px-2.5 py-1 rounded text-[11px] font-bold cursor-pointer ${
                      isColsAnimating
                        ? 'bg-amber-500 text-slate-950'
                        : 'bg-[#111C30] hover:bg-[#1E293B] text-[#FACC15] border border-amber-500/40'
                    }`}
                  >
                    {isColsAnimating ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
                    <span>{isColsAnimating ? 'Pause' : 'Animate p'}</span>
                  </button>
                  <span className="text-xs font-bold text-[#38BDF8]">
                    <RichMathText text={`$p = ${columnCountP} \\implies ${(columnCountP * (columnCountP - 1)) / 2}$ Pairs!`} />
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3 text-xs">
                <span className="text-slate-300">Dataset Columns (p):</span>
                <input
                  type="range"
                  min="3"
                  max="100"
                  value={columnCountP}
                  onChange={(e) => {
                    setIsColsAnimating(false);
                    setColumnCountP(Number(e.target.value));
                  }}
                  className="flex-1"
                />
              </div>

              <svg viewBox="0 0 360 150" className="w-full h-40 bg-[#070B14] rounded-xl border border-[#1E293B]">
                <line x1="35" y1="130" x2="340" y2="130" stroke="#475569" />
                <line x1="35" y1="15" x2="35" y2="130" stroke="#475569" />
                <path
                  d="M 35 130 Q 180 125, 335 18"
                  fill="none"
                  stroke="#38BDF8"
                  strokeWidth="2.5"
                  className="svg-line-draw"
                  data-plotly-label="Quadratic Combinatorial Curve: Pairs = p(p - 1) / 2"
                  data-plotly-sub={`Current p = ${columnCountP} columns ⇒ ${(columnCountP * (columnCountP - 1)) / 2} bivariate charts`}
                />
                <circle
                  cx={35 + (columnCountP / 100) * 300}
                  cy={130 - Math.pow(columnCountP / 100, 2) * 112}
                  r="10"
                  fill="none"
                  stroke="#FACC15"
                  strokeWidth="1.5"
                  className="svg-pulse-ring"
                />
                <circle
                  cx={35 + (columnCountP / 100) * 300}
                  cy={130 - Math.pow(columnCountP / 100, 2) * 112}
                  r="6"
                  fill="#FACC15"
                  stroke="#FFFFFF"
                  strokeWidth="1.5"
                  className="svg-bubble-glider"
                  data-plotly-label={`p = ${columnCountP} Variables ⇒ ${(columnCountP * (columnCountP - 1)) / 2} Bivariate Pairs`}
                  data-plotly-sub="Compute statistical indicators (r, ρ, η², V) first before plotting!"
                />
                <text
                  x={Math.min(290, Math.max(70, 35 + (columnCountP / 100) * 300))}
                  y={Math.max(28, 120 - Math.pow(columnCountP / 100, 2) * 112)}
                  fontSize="9.5"
                  fontWeight="bold"
                  textAnchor="middle"
                  fill="#FACC15"
                >
                  p={columnCountP} ⇒ {(columnCountP * (columnCountP - 1)) / 2} charts
                </text>
              </svg>
            </div>

            {/* Golden Rule Summary Box */}
            <div className="lg:col-span-5 bg-[#0D1527] rounded-xl border border-[#1E293B] p-5 flex flex-col justify-center space-y-3">
              <div className="text-xs font-mono uppercase text-[#38BDF8] font-bold">
                GOLDEN RULE OF BIVARIATE EDA
              </div>
              <p className="text-lg font-extrabold text-white leading-snug">
                &ldquo;Begin the analysis with <span className="text-[#38BDF8]">indicators</span>, then visualize the ones with potential impact.&rdquo;
              </p>
              <p className="text-sm font-bold text-[#FACC15] khmer-text leading-relaxed">
                «ចូរចាប់ផ្តើមការវិភាគដោយប្រើសូចនាករស្ថិតិ (Indicators: r, ρ, η², V) ជាមុនសិន បន្ទាប់មកទើបគូសក្រាហ្វសម្រាប់គូណាដែលមានសក្តានុពលផ្តល់ផលប៉ះពាល់សំខាន់ៗ។»
              </p>
            </div>
          </div>
        );

      default:
        return renderFlagshipBivariateOverviewChart();
    }
  };

  return (
    <div className="rounded-2xl border border-[#1E293B] bg-[#0B1120] text-white overflow-hidden shadow-xl">
      {/* Top Looker Studio Window Header Bar (Matching Reference Image) */}
      <div className="bg-[#0D1526] border-b border-[#1E293B] px-5 py-4 space-y-3.5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3 min-w-0">
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#3B5BDB] text-white text-xs font-bold shrink-0 shadow-xs">
              <BarChart2 className="w-3.5 h-3.5" />
              <span>Looker Studio</span>
            </div>
            <div className="min-w-0">
              <div className="text-sm font-bold text-white font-mono truncate">
                02_Bivariate_Analysis_EDA_ITC_AMS.looker
              </div>
              <div className="text-xs text-slate-400 khmer-text truncate">
                របាយការណ៍បទបង្ហាញអន្តរកម្ម BI • ការវិភាគទិន្នន័យទ្វេអថេរ (៤១ ទំព័រដាច់ដោយឡែក)
              </div>
            </div>
          </div>
        </div>

        {/* Second Row: Page Selector Dropdown on Left & Live Status Badges on Right */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="inline-flex items-center gap-2 bg-[#070B14] border border-[#1E293B] rounded-xl px-2.5 py-1.5">
            <button
              onClick={() => onJumpToSlide(Math.max(1, slide.pageNumber - 1))}
              disabled={slide.pageNumber === 1}
              className="p-1 rounded hover:bg-[#1E293B] text-slate-400 hover:text-white disabled:opacity-30 cursor-pointer disabled:cursor-not-allowed"
              title="Previous Page"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <select
              value={slide.pageNumber}
              onChange={(e) => onJumpToSlide(Number(e.target.value))}
              aria-label="Select Looker Studio Page"
              className="bg-transparent text-xs sm:text-sm font-mono font-bold text-[#38BDF8] focus:outline-none cursor-pointer pr-2 tabular-nums"
            >
              {Array.from({ length: 41 }, (_, i) => i + 1).map((num) => (
                <option key={num} value={num} className="bg-[#0B1120] text-white">
                  Page {num} of 41: Slide {num}
                </option>
              ))}
            </select>

            <button
              onClick={() => onJumpToSlide(Math.min(41, slide.pageNumber + 1))}
              disabled={slide.pageNumber === 41}
              className="p-1 rounded hover:bg-[#1E293B] text-slate-400 hover:text-white disabled:opacity-30 cursor-pointer disabled:cursor-not-allowed"
              title="Next Page"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => {
                const el = document.getElementById('mini-video-explainer');
                if (el) {
                  el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#059669]/20 hover:bg-[#059669]/35 border border-[#10B981]/50 text-xs text-emerald-300 hover:text-white font-semibold cursor-pointer transition-colors khmer-text"
              title="Jump to Short Animated Video Explainer"
            >
              <Film className="w-3.5 h-3.5 text-[#FACC15]" />
              <span>វីដេអូខ្លីពន្យល់មេរៀន (Mini-Video)</span>
            </button>
            <button
              onClick={() => setChartAnimSeed((prev) => prev + 1)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#082F49] hover:bg-[#0284C7] border border-[#0284C7]/60 text-xs text-[#38BDF8] hover:text-white font-semibold cursor-pointer transition-colors khmer-text"
              title="Replay Chart Entrance Animations"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#FACC15]" />
              <span>ចលនាក្រាហ្វ (Replay Animation)</span>
            </button>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#111C30] border border-[#1E293B] text-xs text-slate-300 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Live Looker Canvas (16:9)</span>
            </div>
            <div className="inline-flex items-center px-3 py-1.5 rounded-lg bg-[#111C30] border border-[#1E293B] text-xs text-slate-200 font-medium khmer-text">
              View Mode (មើល)
            </div>
          </div>
        </div>
      </div>

      {/* Main Executive Canvas Workspace */}
      <div className="p-5 sm:p-7 bg-[#080D1A] space-y-6">
        {/* Canvas Identity Badges & Color Swatch Dots */}
        <div className="space-y-3 border-b border-[#1E293B] pb-5">
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="px-3 py-1 rounded-md bg-[#082F49] border border-[#0284C7]/60 text-[#38BDF8] font-mono text-xs font-bold uppercase tracking-wider tabular-nums">
              LOOKER STUDIO PAGE {slide.pageNumber} • SLIDE {slide.pageNumber}
            </span>
            <span className="px-3 py-1 rounded-md bg-[#162033] border border-[#263552] text-slate-300 text-xs font-medium">
              {slide.sectionTag.en}
            </span>
            <span className="text-xs font-mono text-slate-500 tabular-nums">
              Footer #{slide.slideFooterNumber}
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="space-y-0.5">
              <div className="text-xs font-mono text-slate-400">
                Canvas Theme: <span className="text-slate-300">{slide.pageIdentity.themeName.en}</span>
              </div>
              <div className="text-xs text-slate-500 khmer-text">
                ទម្រង់ផ្ទៃពណ៌ខៀវក្រមៅ និងប្រផេះប្រណិត បែបវិជ្ជាជីវៈ (សមាមាត្រ 16:9 - 1920x1080 ភិចសែល) • {slide.pageIdentity.themeName.km}
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2.5">
              <a
                href="#slide-learning-resources"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-sky-500/15 hover:bg-sky-500/25 border border-sky-400/40 text-xs font-semibold text-sky-300 transition-colors"
                title="Jump to curated Website & YouTube links for this slide"
              >
                <Globe className="w-3.5 h-3.5 text-sky-300" />
                <Youtube className="w-3.5 h-3.5 text-rose-400" />
                <span className="khmer-text">
                  {langMode === 'en'
                    ? 'Web & YouTube Links'
                    : langMode === 'km'
                    ? 'តំណភ្ជាប់ Website & YouTube'
                    : 'Links · Website & YouTube'}
                </span>
              </a>

              {/* 3 Color Dots Pill matching Reference Screenshot */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#111A2E] border border-[#1E293B]">
                <span
                  className="w-3.5 h-3.5 rounded-full"
                  style={{ backgroundColor: slide.pageIdentity.primaryAccentHex || '#2563EB' }}
                  title={`Primary: ${slide.pageIdentity.primaryAccentHex}`}
                />
                <span
                  className="w-3.5 h-3.5 rounded-full"
                  style={{ backgroundColor: slide.pageIdentity.secondaryAccentHex || '#F97316' }}
                  title={`Secondary: ${slide.pageIdentity.secondaryAccentHex}`}
                />
                <span
                  className="w-3.5 h-3.5 rounded-full bg-[#38BDF8]"
                  title="Highlight: #38BDF8"
                />
              </div>
            </div>
          </div>

          {/* Large Bilingual Hero Titles (White English + Vibrant Gold Khmer) */}
          <div className="pt-2 space-y-2">
            {langMode !== 'km' && (
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-snug">
                {slide.pageIdentity.titleEn}
              </h2>
            )}
            {langMode !== 'en' && (
              <p className="text-xl sm:text-2xl font-bold text-[#FACC15] khmer-text leading-relaxed">
                {slide.pageIdentity.titleKm}
              </p>
            )}
          </div>
        </div>

        {/* Looker Studio Interactive Page Filters Box (Matching Reference Image) */}
        <div className="rounded-xl bg-[#0D1527] border border-[#1E293B] p-4 space-y-3">
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-slate-200">
              <Filter className="w-3.5 h-3.5 text-[#38BDF8]" />
              <span>
                LOOKER STUDIO INTERACTIVE PAGE FILTERS (តម្រងទិន្នន័យលើទំព័រ)
              </span>
            </div>
            <span className="text-[11px] font-mono text-[#38BDF8] tabular-nums">
              {slide.controls.length} Active Control(s)
            </span>
          </div>

          <div className="rounded-lg bg-[#070B14] border border-[#1E293B] px-4 py-3 flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-xs text-slate-400">
                Filter by Continent / Domain (ជ្រើសរើសទ្វីប)៖
              </span>
              <select
                value={continentFilter}
                onChange={(e) => setContinentFilter(e.target.value)}
                aria-label="Filter by Continent"
                className="text-xs bg-[#0F172A] border border-[#0284C7]/60 rounded-lg px-3 py-1.5 font-semibold text-[#38BDF8] focus:outline-none cursor-pointer"
              >
                <option value="All">All Continents / All Domains (ទាំងអស់)</option>
                <option value="Asia">Asia (ទ្វីបអាស៊ី)</option>
                <option value="Europe">Europe (ទ្វីបអឺរ៉ុប)</option>
                <option value="Africa">Africa (ទ្វីបអាហ្វ្រិក)</option>
                <option value="Americas">Americas (ទ្វីបអាមេរិក)</option>
                <option value="Oceania">Oceania (ទ្វីបអូសេអានី)</option>
              </select>
            </div>

            {/* Quick Lesson Chart Topic Switcher with Math Notation */}
            <div className="flex flex-wrap items-center gap-1.5">
              <span className="text-[11px] text-slate-400 khmer-text mr-1">ក្រាហ្វមេរៀន៖</span>
              {[
                { label: 'Slide Chart', math: '', page: slide.pageNumber },
                { label: 'Scatter', math: 'r', page: 19 },
                { label: 'Outlier', math: 'ρ', page: 15 },
                { label: 'ANOVA / KDE', math: 'η²', page: 25 },
                { label: 'Contingency', math: 'χ² , Ṽ', page: 28 },
                { label: '1952–2007 Bubble', math: 'log₁₀(x)', page: 39 },
              ].map((btn, i) => (
                <button
                  key={i}
                  onClick={() => onJumpToSlide(btn.page)}
                  className={`px-2.5 py-1 rounded-lg text-[11px] font-semibold cursor-pointer transition-colors inline-flex items-center gap-1.5 ${
                    slide.pageNumber === btn.page
                      ? 'bg-[#0284C7] text-white'
                      : 'bg-[#111C30] hover:bg-[#1E293B] text-slate-300 border border-[#1E293B]'
                  }`}
                >
                  <span>{btn.label}</span>
                  {btn.math && (
                    <span className="px-1.5 py-0.2 rounded bg-slate-950/60 text-amber-300">
                      <MathSymbolBadge symbol={btn.math} />
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* KPI Scorecard Strip in Dark Executive Theme with Clean Fitting & KaTeX Math */}
        {slide.chartMetricsMath.scorecards.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {slide.chartMetricsMath.scorecards.map((sc, i) => (
              <div
                key={i}
                className="bg-[#0D1527] rounded-xl border border-[#1E293B] p-4 flex flex-col justify-between gap-2 min-w-0 touch-spring-card"
              >
                <div className="space-y-1 min-w-0">
                  {langMode !== 'km' && (
                    <div className="text-xs font-semibold text-slate-200 break-words leading-snug">
                      <RichMathText text={sc.label.en} />
                    </div>
                  )}
                  {langMode !== 'en' && (
                    <div className="text-xs font-medium text-[#FACC15] khmer-text break-words">
                      <RichMathText text={sc.label.km} />
                    </div>
                  )}
                  <div className="text-lg sm:text-xl font-bold text-[#38BDF8] py-1.5 break-words">
                    <ScorecardValueDisplay value={sc.value} />
                  </div>
                </div>
                <div className="text-xs text-slate-400 pt-2 border-t border-[#1E293B] space-y-1 min-w-0">
                  {langMode !== 'km' && (
                    <div className="break-words leading-relaxed">
                      <RichMathText text={sc.comparisonNote.en} />
                    </div>
                  )}
                  {langMode !== 'en' && (
                    <div className="khmer-text text-slate-300 break-words">
                      <RichMathText text={sc.comparisonNote.km} />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Live Looker Studio Mathematical Equations Block (Full KaTeX Display Mode) */}
        {slide.chartMetricsMath.formulas.length > 0 && (
          <div className="rounded-xl bg-[#0A101F] border border-[#1E293B] p-4 sm:p-5 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#1E293B] pb-3">
              <div className="flex items-center gap-2 text-xs font-bold text-[#38BDF8] tracking-wider uppercase khmer-text">
                <Sigma className="w-4 h-4 text-[#FACC15] shrink-0" />
                <span>
                  LOOKER STUDIO MATHEMATICAL MODEL & LATEX FORMULAS (រូបមន្តគណិតវិទ្យាពេញលេញលើផ្ទាំងក្រាហ្វ)
                </span>
              </div>
              <span className="px-2.5 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-[11px] font-mono text-amber-300">
                KaTeX Math Engine · {slide.chartMetricsMath.formulas.length} Equation(s)
              </span>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {slide.chartMetricsMath.formulas.map((fm, idx) => (
                <div
                  key={idx}
                  className="rounded-xl bg-[#060A14] border border-[#1E293B] p-4 sm:p-5 space-y-4 min-w-0 touch-spring-card"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    {langMode !== 'km' && (
                      <span className="text-xs sm:text-sm font-bold text-white break-words">
                        <RichMathText text={fm.title.en} />
                      </span>
                    )}
                    {langMode !== 'en' && (
                      <span className="text-xs sm:text-sm font-semibold text-[#FACC15] khmer-text break-words">
                        <RichMathText text={fm.title.km} />
                      </span>
                    )}
                  </div>

                  {/* Full KaTeX Display Equation */}
                  <div className="rounded-xl bg-[#03060C] border border-[#0EA5E9]/30 px-4 py-4 text-emerald-300 shadow-inner overflow-x-auto touch-spring-card">
                    <MathEquationDisplay equation={fm.equation} />
                  </div>

                  {/* Spacious Variable Legend Cards */}
                  {fm.variables.length > 0 && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
                      {fm.variables.map((v, vIdx) => (
                        <div
                          key={vIdx}
                          className="p-3 rounded-xl bg-[#0D1527] border border-[#1E293B] space-y-1.5 min-w-0 touch-spring-card"
                        >
                          <div className="inline-flex items-center px-2.5 py-0.5 rounded-md bg-[#111C30] border border-[#0284C7]/40 max-w-full">
                            <MathSymbolBadge symbol={v.symbol} />
                          </div>
                          <div className="space-y-1 min-w-0 text-xs">
                            {langMode !== 'km' && (
                              <div className="text-slate-200 leading-relaxed break-words">
                                <RichMathText text={v.en} />
                              </div>
                            )}
                            {langMode !== 'en' && (
                              <div className="text-[#FDE047] khmer-text leading-relaxed break-words">
                                <RichMathText text={v.km} />
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Main Interactive Visual Stage with Plotly Interactive Touch/Hover/Crosshair Engine */}
        <div key={chartAnimSeed} className="rounded-xl overflow-hidden text-slate-100 animate-chart-stage">
          <PlotlyInteractiveStage
            slideNumber={slide.pageNumber}
            slideTitleEn={slide.pageIdentity.titleEn}
            slideTitleKm={slide.pageIdentity.titleKm}
          >
            {renderInteractiveStage()}
          </PlotlyInteractiveStage>
        </div>

        {/* Interactive Animated Mini-Video Explainer (60fps Scene-by-Scene Walkthrough) */}
        <MiniVideoExplainerPlayer
          slideNumber={slide.pageNumber}
          langMode={langMode}
          onJumpToSlide={onJumpToSlide}
        />

        {/* BEYOND-THE-SLIDE DEEP-DIVE EXPLANATION & LECTURE NOTES ON CANVAS */}
        {(() => {
          const beyond = getBeyondSlideEnrichment(slide);
          const { expandedContent } = slide;
          return (
            <div className="rounded-2xl bg-[#0A101F] border border-[#1E293B] p-5 sm:p-6 space-y-5 shadow-xl">
              {/* Section Banner Header */}
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#1E293B] pb-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#38BDF8]">
                    <BookOpen className="w-4 h-4 text-[#FACC15] shrink-0" />
                    <span>
                      BEYOND-THE-SLIDE DEEP-DIVE & LECTURE NOTES · ការពន្យល់លម្អិតបន្ថែមក្រៅពីស្លាយដើម
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 khmer-text">
                    បន្ថែមពីលើអត្ថបទសង្ខេបក្នុងស្លាយដើម ផ្នែកនេះពន្យល់ស៊ីជម្រៅអំពីអត្ថន័យគណិតវិទ្យា ជំហានគណនា កំហុសឆ្គងដែលត្រូវជៀសវាង ឧទាហរណ៍ជាក់ស្តែង និងកូដ Python៖
                  </p>
                </div>
                <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[11px] font-mono font-semibold text-emerald-300">
                  Slide {slide.pageNumber} Extended Pedagogy (EN / ខ្មែរ)
                </span>
              </div>

              {/* 1. Deep-Dive Statistical & Pedagogical Theory + Mathematical Intuition */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {/* Slide Deep-Dive Theory */}
                <div className="rounded-xl bg-[#060A14] border border-[#1E293B] p-4 sm:p-5 space-y-3 touch-spring-card">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#38BDF8]">
                    <BookOpen className="w-4 h-4 text-[#38BDF8] shrink-0" />
                    <span>1. In-Depth Statistical Theory · ការពន្យល់ទ្រឹស្តីស្ថិតិស៊ីជម្រៅ</span>
                  </div>
                  {langMode !== 'km' && (
                    <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                      <RichMathText text={expandedContent.deepDiveExplanation.en} />
                    </p>
                  )}
                  {langMode !== 'en' && (
                    <p className="text-xs sm:text-sm text-[#FEF08A] khmer-text leading-relaxed pt-1 border-t border-[#1E293B]/80">
                      <RichMathText text={expandedContent.deepDiveExplanation.km} />
                    </p>
                  )}
                </div>

                {/* Professor's Mathematical & Geometric Intuition */}
                <div className="rounded-xl bg-[#060A14] border border-[#1E293B] p-4 sm:p-5 space-y-3 touch-spring-card">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-300">
                    <Lightbulb className="w-4 h-4 text-[#FACC15] shrink-0" />
                    <span>2. {beyond.intuitionTitle.en} · {beyond.intuitionTitle.km}</span>
                  </div>
                  {langMode !== 'km' && (
                    <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                      <RichMathText text={beyond.intuitionBody.en} />
                    </p>
                  )}
                  {langMode !== 'en' && (
                    <p className="text-xs sm:text-sm text-[#FDE047] khmer-text leading-relaxed pt-1 border-t border-[#1E293B]/80">
                      <RichMathText text={beyond.intuitionBody.km} />
                    </p>
                  )}
                </div>
              </div>

              {/* 2. Step-by-Step Calculation Walkthrough & Interpretation Thresholds/Pitfalls */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {/* Step-by-Step Calculation Walkthrough */}
                <div className="rounded-xl bg-[#060A14] border border-[#1E293B] p-4 sm:p-5 space-y-3 touch-spring-card">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-300">
                    <ListChecks className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>
                      3. Step-by-Step Analytical Walkthrough · ជំហាននៃការវិភាគ និងគណនាតាមលំដាប់លំដោយ
                    </span>
                  </div>
                  <div className="space-y-2.5">
                    {[
                      beyond.stepByStepWalkthrough.step1,
                      beyond.stepByStepWalkthrough.step2,
                      beyond.stepByStepWalkthrough.step3,
                    ].map((step, sIdx) => (
                      <div
                        key={sIdx}
                        className="p-3 rounded-lg bg-[#0B1222] border border-[#1E293B] space-y-1 touch-spring-card"
                      >
                        {langMode !== 'km' && (
                          <div className="text-xs text-slate-200 leading-relaxed">
                            <RichMathText text={step.en} />
                          </div>
                        )}
                        {langMode !== 'en' && (
                          <div className="text-xs text-slate-300 khmer-text leading-relaxed">
                            <RichMathText text={step.km} />
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Thresholds & Common Pitfalls */}
                <div className="rounded-xl bg-[#060A14] border border-[#1E293B] p-4 sm:p-5 space-y-3 touch-spring-card">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-rose-300">
                    <AlertTriangle className="w-4 h-4 text-rose-400 shrink-0" />
                    <span>
                      4. Thresholds & Common Pitfalls · កម្រិតស្តង់ដារបកស្រាយ និងកំហុសឆ្គងដែលត្រូវជៀសវាង
                    </span>
                  </div>
                  <div className="space-y-2.5">
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
                        className="p-3 rounded-lg bg-[#0B1222] border border-rose-500/20 space-y-1.5 touch-spring-card"
                      >
                        <div className="inline-flex items-center px-2.5 py-0.5 rounded bg-rose-500/15 border border-rose-500/30 text-[11px] font-mono font-bold text-rose-300">
                          <RichMathText text={pit.badge} />
                        </div>
                        {langMode !== 'km' && (
                          <div className="text-xs text-slate-200 leading-relaxed">
                            <RichMathText text={pit.en} />
                          </div>
                        )}
                        {langMode !== 'en' && (
                          <div className="text-xs text-[#FDE047] khmer-text leading-relaxed">
                            <RichMathText text={pit.km} />
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* 3. Real-World Case Study & Python Code Implementation */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {/* Practical Case Study */}
                <div className="rounded-xl bg-[#06281E]/50 border border-emerald-500/35 p-4 sm:p-5 space-y-3 touch-spring-card">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-300">
                      <Briefcase className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>5. Real-World Case Study · ឧទាហរណ៍អនុវត្តជាក់ស្តែង</span>
                    </div>
                    <span className="px-2 py-0.5 rounded bg-emerald-950/90 border border-emerald-500/40 text-[10px] text-emerald-300">
                      <RichMathText text={expandedContent.practicalApplication.impactMetric} />
                    </span>
                  </div>
                  <div className="space-y-1">
                    {langMode !== 'km' && (
                      <h4 className="text-xs sm:text-sm font-bold text-white">
                        <RichMathText text={expandedContent.practicalApplication.scenarioTitle.en} />
                      </h4>
                    )}
                    {langMode !== 'en' && (
                      <p className="text-xs sm:text-sm font-bold text-[#FACC15] khmer-text">
                        <RichMathText text={expandedContent.practicalApplication.scenarioTitle.km} />
                      </p>
                    )}
                  </div>
                  {langMode !== 'km' && (
                    <p className="text-xs text-slate-100 leading-relaxed">
                      <RichMathText text={expandedContent.practicalApplication.description.en} />
                    </p>
                  )}
                  {langMode !== 'en' && (
                    <p className="text-xs text-slate-200 khmer-text leading-relaxed pt-1 border-t border-emerald-500/25">
                      <RichMathText text={expandedContent.practicalApplication.description.km} />
                    </p>
                  )}
                </div>

                {/* Annotated Python Implementation */}
                <div className="rounded-xl bg-[#060A14] border border-[#1E293B] p-4 sm:p-5 space-y-3 touch-spring-card">
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#38BDF8]">
                      <Code2 className="w-4 h-4 text-[#38BDF8] shrink-0" />
                      <span>6. Python Data Science Implementation · កូដអនុវត្តផ្ទាល់</span>
                    </div>
                    <span className="text-[10px] font-mono text-slate-400">
                      pandas · scipy.stats · plotly
                    </span>
                  </div>
                  <pre className="rounded-lg bg-[#03060C] border border-[#1E293B] p-3 text-[11px] font-mono text-emerald-300 overflow-x-auto leading-relaxed">
                    <code>{beyond.pythonCodeSnippet}</code>
                  </pre>
                  {langMode !== 'km' && (
                    <p className="text-xs text-slate-300 leading-relaxed">
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

              {/* 4. Mathematical Proof & Algebraic Derivation + Exam & Viva Q&A */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {/* Mathematical Proof & Algebraic Derivation */}
                <div className="rounded-xl bg-[#060A14] border border-cyan-500/30 p-4 sm:p-5 space-y-3 touch-spring-card">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-cyan-300">
                    <BookOpen className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>
                      7. {beyond.mathematicalDerivation.title.en} · {beyond.mathematicalDerivation.title.km}
                    </span>
                  </div>
                  <div className="space-y-2.5">
                    {beyond.mathematicalDerivation.proofSteps.map((pStep, pIdx) => (
                      <div
                        key={pIdx}
                        className="p-3 rounded-lg bg-[#0B1222] border border-[#1E293B] space-y-1.5 touch-spring-card"
                      >
                        {langMode !== 'km' && (
                          <p className="text-xs text-slate-200 leading-relaxed min-w-0 break-words">
                            <RichMathText text={pStep.en} />
                          </p>
                        )}
                        {langMode !== 'en' && (
                          <p className="text-xs text-[#FEF08A] khmer-text leading-relaxed min-w-0 break-words">
                            <RichMathText text={pStep.km} />
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Exam & Viva Preparation Q&A */}
                <div className="rounded-xl bg-[#060A14] border border-[#FACC15]/30 p-4 sm:p-5 space-y-3 touch-spring-card">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#FACC15]">
                    <Lightbulb className="w-4 h-4 text-[#FACC15] shrink-0" />
                    <span>
                      8. Exam & Viva Defense Q&A · សំណួរ-ចម្លើយត្រៀមប្រឡង និងការពារកិច្ចការ
                    </span>
                  </div>
                  <div className="space-y-2.5">
                    {beyond.examVivaQA.map((qa, qIdx) => (
                      <div
                        key={qIdx}
                        className="p-3 rounded-lg bg-[#0B1222] border border-[#1E293B] space-y-2 touch-spring-card"
                      >
                        <div className="space-y-1 border-b border-[#1E293B] pb-2">
                          {langMode !== 'km' && (
                            <p className="text-xs font-bold text-[#38BDF8] leading-snug">
                              <RichMathText text={qa.question.en} />
                            </p>
                          )}
                          {langMode !== 'en' && (
                            <p className="text-xs font-bold text-[#FACC15] khmer-text leading-snug">
                              <RichMathText text={qa.question.km} />
                            </p>
                          )}
                        </div>
                        <div className="space-y-1">
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
              </div>

              {/* 5. Curated External Learning Links (Verified Websites & YouTube Tutorials) */}
              {(() => {
                const resourceBundle = getSlideLearningResources(slide.pageNumber);
                const visibleLinks =
                  resourceFilter === 'all'
                    ? resourceBundle.links
                    : resourceBundle.links.filter((l) => l.type === resourceFilter);
                const ytCount = resourceBundle.links.filter((l) => l.type === 'youtube').length;
                const webCount = resourceBundle.links.filter((l) => l.type === 'website').length;

                return (
                  <div
                    id="slide-learning-resources"
                    className="rounded-xl bg-[#060A14] border border-sky-500/35 p-4 sm:p-5 space-y-4 scroll-mt-6"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#1E293B] pb-3">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-sky-300">
                          <Globe className="w-4 h-4 text-sky-400 shrink-0" />
                          <span>
                            9. Curated Website & YouTube Study Links · ប្រភព Website និង YouTube សម្រាប់ស្វែងយល់បន្ថែម
                          </span>
                        </div>
                        <div className="flex flex-wrap items-center gap-2 text-xs text-slate-300">
                          {langMode !== 'km' && (
                            <span>Topic Focus: <strong className="text-white">{resourceBundle.topicLabel.en}</strong></span>
                          )}
                          {langMode !== 'en' && (
                            <span className="text-[#FDE047] khmer-text">
                              {langMode === 'dual' ? '· ' : ''}ប្រធានបទ៖ {resourceBundle.topicLabel.km}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Filter pills: All / YouTube / Website */}
                      <div className="inline-flex items-center gap-1.5 bg-[#0B1222] border border-[#1E293B] rounded-lg p-1">
                        <button
                          type="button"
                          onClick={() => setResourceFilter('all')}
                          className={`px-2.5 py-1 rounded-md text-xs font-semibold transition-colors cursor-pointer ${
                            resourceFilter === 'all'
                              ? 'bg-sky-500 text-slate-950'
                              : 'text-slate-300 hover:text-white'
                          }`}
                        >
                          All ({resourceBundle.links.length})
                        </button>
                        <button
                          type="button"
                          onClick={() => setResourceFilter('youtube')}
                          className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-semibold transition-colors cursor-pointer ${
                            resourceFilter === 'youtube'
                              ? 'bg-rose-500 text-white'
                              : 'text-rose-300 hover:bg-rose-500/15'
                          }`}
                        >
                          <Youtube className="w-3.5 h-3.5" />
                          <span>YouTube ({ytCount})</span>
                        </button>
                        <button
                          type="button"
                          onClick={() => setResourceFilter('website')}
                          className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-semibold transition-colors cursor-pointer ${
                            resourceFilter === 'website'
                              ? 'bg-cyan-500 text-slate-950'
                              : 'text-cyan-300 hover:bg-cyan-500/15'
                          }`}
                        >
                          <Globe className="w-3.5 h-3.5" />
                          <span>Website ({webCount})</span>
                        </button>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                      {visibleLinks.map((item) => {
                        const isYouTube = item.type === 'youtube';
                        let hostname = '';
                        try {
                          hostname = new URL(item.url).hostname.replace(/^www\./, '');
                        } catch {
                          hostname = item.sourceName;
                        }

                        return (
                          <a
                            key={item.id}
                            href={item.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`group flex flex-col justify-between gap-3 rounded-xl p-4 border transition-all touch-spring-card ${
                              isYouTube
                                ? 'bg-[#120A12] border-rose-500/30 hover:border-rose-400/70 hover:bg-[#190D18]'
                                : 'bg-[#091322] border-cyan-500/30 hover:border-cyan-400/70 hover:bg-[#0D1A2E]'
                            }`}
                          >
                            <div className="space-y-2.5">
                              {/* Top Source & Format Row */}
                              <div className="flex flex-wrap items-center justify-between gap-2">
                                <span
                                  className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold border ${
                                    isYouTube
                                      ? 'bg-rose-500/15 border-rose-500/40 text-rose-300'
                                      : 'bg-cyan-500/15 border-cyan-500/40 text-cyan-300'
                                  }`}
                                >
                                  {isYouTube ? (
                                    <Youtube className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                                  ) : (
                                    <Globe className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                                  )}
                                  <span>{item.sourceName}</span>
                                </span>
                                <span className="text-[11px] font-mono text-slate-400 khmer-text">
                                  {langMode === 'km' ? item.badgeLabel.km : item.badgeLabel.en}
                                </span>
                              </div>

                              {/* Titles */}
                              <div className="space-y-1">
                                {langMode !== 'km' && (
                                  <h4 className="text-xs sm:text-sm font-bold text-white group-hover:text-sky-200 leading-snug">
                                    {item.title.en}
                                  </h4>
                                )}
                                {langMode !== 'en' && (
                                  <p className="text-xs sm:text-sm font-semibold text-[#FACC15] khmer-text leading-snug">
                                    {item.title.km}
                                  </p>
                                )}
                              </div>

                              {/* Why this link helps */}
                              <div className="space-y-1">
                                {langMode !== 'km' && (
                                  <p className="text-xs text-slate-300 leading-relaxed">
                                    {item.description.en}
                                  </p>
                                )}
                                {langMode !== 'en' && (
                                  <p className="text-xs text-slate-200 khmer-text leading-relaxed">
                                    {item.description.km}
                                  </p>
                                )}
                              </div>
                            </div>

                            {/* Footer Action Row */}
                            <div className="flex items-center justify-between gap-2 pt-2.5 border-t border-white/10 text-xs">
                              <span className="font-mono text-[11px] text-slate-400 truncate">
                                {hostname}
                              </span>
                              <span
                                className={`inline-flex items-center gap-1 font-bold shrink-0 khmer-text ${
                                  isYouTube
                                    ? 'text-rose-300 group-hover:text-rose-200'
                                    : 'text-cyan-300 group-hover:text-cyan-200'
                                }`}
                              >
                                <span>
                                  {isYouTube
                                    ? langMode === 'en'
                                      ? 'Watch on YouTube'
                                      : langMode === 'km'
                                      ? 'ទស្សនាលើ YouTube'
                                      : 'Watch YouTube · មើលវីដេអូ'
                                    : langMode === 'en'
                                    ? 'Open Website'
                                    : langMode === 'km'
                                    ? 'បើក Website'
                                    : 'Open Website · បើកគេហទំព័រ'}
                                </span>
                                <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                              </span>
                            </div>
                          </a>
                        );
                      })}
                    </div>
                  </div>
                );
              })()}
            </div>
          );
        })()}
      </div>
    </div>
  );
};
