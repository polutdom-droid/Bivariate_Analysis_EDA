import React from 'react';
import katex from 'katex';

// Exact publication-grade LaTeX mapping for all slide equations, split into clean visual clauses so they never overflow boxes
const EXACT_EQUATION_LATEX_PARTS_MAP: Record<string, string[]> = {
  'x̄ = (1 / n) ∑_{i=1}^{n} x_i ,    s_X = √[ (1 / (n - 1)) ∑_{i=1}^{n} (x_i - x̄)² ]': [
    '\\bar{x} = \\frac{1}{n} \\sum_{i=1}^{n} x_i',
    's_X = \\sqrt{\\frac{1}{n - 1} \\sum_{i=1}^{n} (x_i - \\bar{x})^2}',
  ],

  'IQR = Q_3 - Q_1 ,    Upper Fence = Q_3 + 1.5 × IQR ,    Lower Fence = Q_1 - 1.5 × IQR': [
    '\\text{IQR} = Q_3 - Q_1',
    '\\text{Upper Fence} = Q_3 + 1.5 \\times \\text{IQR}',
    '\\text{Lower Fence} = Q_1 - 1.5 \\times \\text{IQR}',
  ],

  'x̄ = (1 / n) ∑_{i=1}^{n} x_i ,    V(X) = (1 / (n - 1)) ∑_{i=1}^{n} (x_i - x̄)² ,    σ̂ = √V(X)': [
    '\\bar{x} = \\frac{1}{n} \\sum_{i=1}^{n} x_i',
    '\\mathbb{V}(X) = \\frac{1}{n - 1} \\sum_{i=1}^{n} (x_i - \\bar{x})^2',
    '\\hat{\\sigma}_X = \\sqrt{\\mathbb{V}(X)}',
  ],

  'Cov(X, Y) = (1 / (n - 1)) ∑_{i=1}^{n} (x_i - x̄)(y_i - ȳ)': [
    '\\text{Cov}(X, Y) = \\frac{1}{n - 1} \\sum_{i=1}^{n} (x_i - \\bar{x})(y_i - \\bar{y})',
  ],

  'Cov(X, Y) > 0  ⇒  Same Direction (↗) ,    Cov(X, Y) < 0  ⇒  Opposite Direction (↘) ,    Cov(aX, bY) = a · b · Cov(X, Y)': [
    '\\text{Cov}(X, Y) > 0 \\implies \\text{Same Direction } (\\nearrow)',
    '\\text{Cov}(X, Y) < 0 \\implies \\text{Opposite Direction } (\\searrow)',
    '\\text{Cov}(aX, bY) = a \\cdot b \\cdot \\text{Cov}(X, Y)',
  ],

  'r = r_{X,Y} = [ ∑_{i=1}^{n} (x_i - x̄)(y_i - ȳ) ] / √[ (∑_{i=1}^{n} (x_i - x̄)²) (∑_{i=1}^{n} (y_i - ȳ)²) ] = Cov(X, Y) / (s_X · s_Y)': [
    'r_{X,Y} = \\frac{\\sum_{i=1}^{n} (x_i - \\bar{x})(y_i - \\bar{y})}{\\sqrt{\\sum_{i=1}^{n} (x_i - \\bar{x})^2 \\sum_{i=1}^{n} (y_i - \\bar{y})^2}} = \\frac{\\text{Cov}(X, Y)}{s_X \\cdot s_Y}',
  ],

  'If Y = aX + b (a ≠ 0), then r_{X,Y} = sign(a) = ±1 ;    If Y = c (constant), then s_Y = 0 ⇒ r_{X,Y} = 0 / 0 (Undefined)': [
    'Y = aX + b \\; (a \\neq 0) \\implies r_{X,Y} = \\text{sign}(a) = \\pm 1',
    'Y = c \\implies s_Y = 0 \\implies r_{X,Y} = \\frac{0}{0} \\text{ (Undefined)}',
  ],

  'R = [ r_{j,k} ]_{p × p} ,    where r_{j,j} = 1  and  r_{j,k} = r_{k,j} = Cov(X_j, X_k) / (s_{X_j} · s_{X_k})': [
    '\\mathbf{R} = \\left[ r_{j,k} \\right]_{p \\times p}',
    'r_{j,j} = 1',
    'r_{j,k} = r_{k,j} = \\frac{\\text{Cov}(X_j, X_k)}{s_{X_j} \\cdot s_{X_k}}',
  ],

  'ρ_{X,Y} = r_{R[X], R[Y]} = Cov(R[X], R[Y]) / (s_{R[X]} · s_{R[Y]}) = 1 - [ 6 ∑_{i=1}^{n} d_i² ] / [ n(n² - 1) ]': [
    '\\rho_{X,Y} = r_{\\text{R}[X], \\text{R}[Y]} = \\frac{\\text{Cov}(\\text{R}[X], \\text{R}[Y])}{s_{\\text{R}[X]} \\cdot s_{\\text{R}[Y]}} = 1 - \\frac{6 \\sum_{i=1}^{n} d_i^2}{n(n^2 - 1)}',
  ],

  's_X = √[ ((1-3)² + ... + (4-3)²) / (5 - 1) ] = 1.58 ,  s_Y = 446.9 ⇒ r_{X,Y} = 0.71 ;    R[X] = R[Y] = [1, 3, 2, 5, 4] ⇒ d_i = 0 ⇒ ρ_{X,Y} = 1 - 6(0) / [5(5² - 1)] = 1': [
    's_X = \\sqrt{\\frac{(1-3)^2 + \\dots + (4-3)^2}{5 - 1}} = 1.58 , \\quad s_Y = 446.9 \\implies r_{X,Y} = 0.71',
    '\\text{R}[X] = \\text{R}[Y] = [1, 3, 2, 5, 4] \\implies d_i = 0 \\implies \\rho_{X,Y} = 1 - \\frac{6(0)}{5(5^2 - 1)} = 1',
  ],

  'Δ_{non-linear} = |ρ_{X,Y}| - |r_{X,Y}| = 0.856590 - 0.678662 = +0.177928': [
    '\\Delta_{\\text{non-linear}} = |\\rho_{X,Y}| - |r_{X,Y}| = 0.856590 - 0.678662 = +0.177928',
  ],

  'lifeExp ≈ β₀ + β₁ · log₁₀(gdpPercap) + ε ,    where R[log₁₀(gdpPercap)] ≡ R[gdpPercap]': [
    '\\text{lifeExp} \\approx \\beta_0 + \\beta_1 \\cdot \\log_{10}(\\text{gdpPercap}) + \\varepsilon',
    '\\text{R}\\!\\left[\\log_{10}(\\text{gdpPercap})\\right] \\equiv \\text{R}\\!\\left[\\text{gdpPercap}\\right]',
  ],

  'BSS = ∑_{g=1}^{G} n_g (x̄_g - x̄)² ,    TSS = ∑_{i=1}^{n} (x_i - x̄)² ,    η² = BSS / TSS ∈ [0, 1]': [
    '\\text{BSS} = \\sum_{g=1}^{G} n_g (\\bar{x}_g - \\bar{x})^2',
    '\\text{TSS} = \\sum_{i=1}^{n} (x_i - \\bar{x})^2',
    '\\eta^2 = \\frac{\\text{BSS}}{\\text{TSS}} \\in [0, 1]',
  ],

  'η² = BSS / TSS = BSS / (BSS + WSS) ,    F = [ BSS / (G - 1) ] / [ WSS / (n - G) ] = [ η² / (G - 1) ] / [ (1 - η²) / (n - G) ]': [
    '\\eta^2 = \\frac{\\text{BSS}}{\\text{TSS}} = \\frac{\\text{BSS}}{\\text{BSS} + \\text{WSS}}',
    'F = \\frac{\\text{BSS} / (G - 1)}{\\text{WSS} / (n - G)} = \\frac{\\eta^2 / (G - 1)}{(1 - \\eta^2) / (n - G)}',
  ],

  'f̂_h(x | G = g) = (1 / (n_g · h)) ∑_{i ∈ g} K( (x - x_i) / h ) ,    where ∫ f̂_h(x | G = g) dx = 1': [
    '\\hat{f}_h(x \\mid G = g) = \\frac{1}{n_g \\cdot h} \\sum_{i \\in g} K\\!\\left(\\frac{x - x_i}{h}\\right)',
    '\\int_{-\\infty}^{\\infty} \\hat{f}_h(x \\mid G = g) \\, dx = 1',
  ],

  'gdp_category(x) = { Developing if x ≤ Q_{0.333} ; Emerging if Q_{0.333} < x ≤ Q_{0.667} ; Developed if x > Q_{0.667} } ,    P(Y = y_j | X = x_i) ≠ P(Y = y_j)': [
    '\\text{gdp\\_cat}(x) = \\begin{cases} \\text{Developing} & x \\le Q_{1/3} \\\\ \\text{Emerging} & Q_{1/3} < x \\le Q_{2/3} \\\\ \\text{Developed} & x > Q_{2/3} \\end{cases}',
    '\\mathbb{P}(Y = y_j \\mid X = x_i) \\neq \\mathbb{P}(Y = y_j)',
  ],

  'Percent(g, c) = (n_{g,c} / n_{g,.}) × 100% ,    where ∑_{c=1}^{3} Percent(g, c) = 100%  for each continent g': [
    '\\text{Percent}(g, c) = \\frac{n_{g,c}}{n_{g,\\cdot}} \\times 100\\%',
    '\\sum_{c=1}^{3} \\text{Percent}(g, c) = 100\\% \\quad (\\forall g)',
  ],

  'O_{i,j} = n_{i,j} / N ,    E_{i,j} = O_{i,.} × O_{.,j} = (n_{i,.} · n_{.,j}) / N² ,    χ²(X, Y) = ∑_{i,j} (O_{i,j} - E_{i,j})² / E_{i,j}  [or N ∑ (O_{i,j} - E_{i,j})² / E_{i,j}]': [
    'O_{i,j} = \\frac{n_{i,j}}{N} , \\quad E_{i,j} = O_{i,\\cdot} \\times O_{\\cdot,j} = \\frac{n_{i,\\cdot} \\cdot n_{\\cdot,j}}{N^2}',
    '\\chi^2(X, Y) = \\sum_{i=1}^{I} \\sum_{j=1}^{J} \\frac{(O_{i,j} - E_{i,j})^2}{E_{i,j}}',
  ],

  'f(x; k) = [ x^{(k/2) - 1} · e^{-x/2} ] / [ 2^{k/2} · Γ(k/2) ]  (for x > 0) ,    p-value = P(χ²(df) ≥ χ²_{obs}) = ∫_{χ²_{obs}}^{∞} f(x; df) dx': [
    'f(x; k) = \\frac{x^{(k/2) - 1} e^{-x/2}}{2^{k/2} \\, \\Gamma(k/2)} \\quad (x > 0)',
    'p\\text{-value} = \\mathbb{P}\\!\\left(\\chi^2(\\text{df}) \\ge \\chi^2_{\\text{obs}}\\right) = \\int_{\\chi^2_{\\text{obs}}}^{\\infty} f(x; \\text{df}) \\, dx',
  ],

  'df = (I - 1)(J - 1) = (4 - 1)(7 - 1) = 3 × 6 = 18 ,    χ²_{obs} ≈ 3298 ≫ C_{0.01} = 34.805  ⇒  p-value ≈ 0 < 0.01  (Reject H₀)': [
    '\\text{df} = (I - 1)(J - 1) = (4 - 1)(7 - 1) = 18',
    '\\chi^2_{\\text{obs}} \\approx 3298 \\gg C_{0.01} = 34.805 \\implies p\\text{-value} \\approx 0 < 0.01 \\; (\\text{Reject } H_0)',
  ],

  'V = √[ (χ² / n) / min(I - 1, J - 1) ] ∈ [0, 1]': [
    'V = \\sqrt{\\frac{\\chi^2 / n}{\\min(I - 1, \\, J - 1)}} \\in [0, 1]',
  ],

  'Ṽ = √[ φ̃² / min(Ĩ - 1, J̃ - 1) ] ,  where  φ̃² = max(0, χ²/n - df/(n - 1)) ,  Ĩ = I - (I - 1)²/(n - 1) ,  J̃ = J - (J - 1)²/(n - 1)': [
    '\\tilde{V} = \\sqrt{\\frac{\\tilde{\\phi}^2}{\\min(\\tilde{I} - 1, \\, \\tilde{J} - 1)}}',
    '\\tilde{\\phi}^2 = \\max\\!\\left(0, \\, \\frac{\\chi^2}{n} - \\frac{\\text{df}}{n - 1}\\right)',
    '\\tilde{I} = I - \\frac{(I - 1)^2}{n - 1} , \\quad \\tilde{J} = J - \\frac{(J - 1)^2}{n - 1}',
  ],

  'Area_i = π · r_i² ∝ pop_i   ⇒   r_i = r_{max} · √( pop_i / pop_{max} )': [
    '\\text{Area}_i = \\pi r_i^2 \\propto \\text{pop}_i \\implies r_i = r_{\\max} \\cdot \\sqrt{\\frac{\\text{pop}_i}{\\text{pop}_{\\max}}}',
  ],

  'Slope_{[t_1, t_2]} = (Y_{t_2} - Y_{t_1}) / (t_2 - t_1) ,    CAGR = (Y_{2007} / Y_{1952})^{1 / (2007 - 1952)} - 1': [
    '\\text{Slope}_{[t_1, t_2]} = \\frac{Y_{t_2} - Y_{t_1}}{t_2 - t_1}',
    '\\text{CAGR} = \\left(\\frac{Y_{2007}}{Y_{1952}}\\right)^{\\frac{1}{2007 - 1952}} - 1',
  ],

  'Total Bivariate Pairs = (p choose 2) = p(p - 1) / 2': [
    '\\text{Total Bivariate Pairs} = \\binom{p}{2} = \\frac{p(p - 1)}{2}',
  ],
};

// Exact LaTeX mapping for variable glossary symbols so words inside symbols render properly
const EXACT_SYMBOL_LATEX_MAP: Record<string, string> = {
  'IQR': '\\text{IQR}',
  'BSS': '\\text{BSS}',
  'WSS': '\\text{WSS}',
  'TSS': '\\text{TSS}',
  'Cov(X, Y)': '\\text{Cov}(X, Y)',
  'Cov(X, Y) > 0': '\\text{Cov}(X, Y) > 0',
  'Cov(X, Y) < 0': '\\text{Cov}(X, Y) < 0',
  'sign(a)': '\\text{sign}(a)',
  'log₁₀(gdpPercap)': '\\log_{10}(\\text{gdpPercap})',
  'R[log₁₀(X)] ≡ R[X]': '\\text{R}[\\log_{10}(X)] \\equiv \\text{R}[X]',
  'R[x_i], R[y_i]': '\\text{R}[x_i], \\, \\text{R}[y_i]',
  'd_i = R[x_i] - R[y_i]': 'd_i = \\text{R}[x_i] - \\text{R}[y_i]',
  'Percent(g, c)': '\\text{Percent}(g, c)',
  'p-value': 'p\\text{-value}',
  'k = df = (I - 1)(J - 1)': 'k = \\text{df} = (I - 1)(J - 1)',
  'df = (I - 1)(J - 1)': '\\text{df} = (I - 1)(J - 1)',
  'min(I - 1, J - 1)': '\\min(I - 1, \\, J - 1)',
  'pop_i': '\\text{pop}_i',
  'pop_{max}': '\\text{pop}_{\\max}',
  'r_{max}': 'r_{\\max}',
  'r_i ∝ √pop_i': 'r_i \\propto \\sqrt{\\text{pop}_i}',
  'Slope_{[t_1, t_2]}': '\\text{Slope}_{[t_1, t_2]}',
  't ∈ {1952, ..., 2007}': 't \\in \\{1952, \\dots, 2007\\}',
  'X = [x₁, x₂, ..., xₙ]': 'X = [x_1, x_2, \\dots, x_n]',
  'Y = [y₁, y₂, ..., yₙ]': 'Y = [y_1, y_2, \\dots, y_n]',
  'χ²_{obs} ≈ 3298': '\\chi^2_{\\text{obs}} \\approx 3298',
};

export function convertUnicodeMathToLatex(input: string): string {
  const trimmed = input.trim();
  if (EXACT_SYMBOL_LATEX_MAP[trimmed]) {
    return EXACT_SYMBOL_LATEX_MAP[trimmed];
  }
  if (EXACT_EQUATION_LATEX_PARTS_MAP[trimmed]) {
    return EXACT_EQUATION_LATEX_PARTS_MAP[trimmed].join(' \\quad , \\qquad ');
  }

  let s = trimmed;
  s = s
    .replace(/\$([0-9])/g, '\\$$$1')
    .replace(/([0-9]),([0-9]{3})/g, '$1{,}$2')
    .replace(/x̄/g, '\\bar{x}')
    .replace(/ȳ/g, '\\bar{y}')
    .replace(/X̄/g, '\\bar{X}')
    .replace(/Ȳ/g, '\\bar{Y}')
    .replace(/σ̂/g, '\\hat{\\sigma}')
    .replace(/f̂/g, '\\hat{f}')
    .replace(/Ṽ/g, '\\tilde{V}')
    .replace(/φ̃²/g, '\\tilde{\\phi}^2')
    .replace(/φ̃/g, '\\tilde{\\phi}')
    .replace(/Ĩ/g, '\\tilde{I}')
    .replace(/J̃/g, '\\tilde{J}')
    .replace(/Cov\(/g, '\\text{Cov}(')
    .replace(/log₁₀/g, '\\log_{10}')
    .replace(/√\[([^\]]+)\]/g, '\\sqrt{$1}')
    .replace(/√\(([^)]+)\)/g, '\\sqrt{$1}')
    .replace(/√([a-zA-Z0-9_]+)/g, '\\sqrt{$1}')
    .replace(/∑/g, '\\sum ')
    .replace(/∫/g, '\\int ')
    .replace(/χ²_{obs}/g, '\\chi^2_{\\text{obs}}')
    .replace(/χ²\(df\)/g, '\\chi^2(\\text{df})')
    .replace(/χ²/g, '\\chi^2')
    .replace(/η²/g, '\\eta^2')
    .replace(/χ/g, '\\chi ')
    .replace(/η/g, '\\eta ')
    .replace(/ρ/g, '\\rho ')
    .replace(/φ/g, '\\phi ')
    .replace(/α/g, '\\alpha ')
    .replace(/β₀/g, '\\beta_0')
    .replace(/β₁/g, '\\beta_1')
    .replace(/β/g, '\\beta ')
    .replace(/ε/g, '\\varepsilon ')
    .replace(/π/g, '\\pi ')
    .replace(/Γ/g, '\\Gamma ')
    .replace(/Δ/g, '\\Delta ')
    .replace(/σ/g, '\\sigma ')
    .replace(/²/g, '^2')
    .replace(/³/g, '^3')
    .replace(/₀/g, '_0')
    .replace(/₁/g, '_1')
    .replace(/₂/g, '_2')
    .replace(/₃/g, '_3')
    .replace(/₄/g, '_4')
    .replace(/ₙ/g, '_n')
    .replace(/ᵢ/g, '_i')
    .replace(/⇒/g, '\\implies ')
    .replace(/→/g, '\\rightarrow ')
    .replace(/⇔/g, '\\iff ')
    .replace(/≈/g, '\\approx ')
    .replace(/≠/g, '\\neq ')
    .replace(/≡/g, '\\equiv ')
    .replace(/≤/g, '\\le ')
    .replace(/≥/g, '\\ge ')
    .replace(/≫/g, '\\gg ')
    .replace(/≪/g, '\\ll ')
    .replace(/∈/g, '\\in ')
    .replace(/∝/g, '\\propto ')
    .replace(/×/g, '\\times ')
    .replace(/·/g, '\\cdot ')
    .replace(/±/g, '\\pm ')
    .replace(/∞/g, '\\infty ')
    .replace(/↗/g, '\\nearrow ')
    .replace(/↘/g, '\\searrow ')
    .replace(/(^|[^\\])%/g, '$1\\%');

  return s;
}

export const MathEquationDisplay: React.FC<{ equation: string }> = ({ equation }) => {
  const trimmed = equation.trim();
  const parts = EXACT_EQUATION_LATEX_PARTS_MAP[trimmed] || [convertUnicodeMathToLatex(trimmed)];

  return (
    <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 py-1 text-emerald-300">
      {parts.map((latexPart, idx) => {
        let html = '';
        try {
          html = katex.renderToString(latexPart, {
            displayMode: true,
            throwOnError: false,
            strict: false,
          });
        } catch {
          return (
            <code key={idx} className="font-mono text-sm text-emerald-300 break-all">
              {latexPart}
            </code>
          );
        }

        return (
          <div
            key={idx}
            className="max-w-full overflow-x-auto px-2 py-0.5"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        );
      })}
    </div>
  );
};

export const MathSymbolBadge: React.FC<{ symbol: string; className?: string }> = ({
  symbol,
  className = '',
}) => {
  const latex = convertUnicodeMathToLatex(symbol);
  let html = '';
  try {
    html = katex.renderToString(latex, {
      displayMode: false,
      throwOnError: false,
      strict: false,
    });
  } catch {
    return (
      <span className={`font-mono font-bold text-[#FACC15] break-words ${className}`}>
        {symbol}
      </span>
    );
  }

  return (
    <span
      className={`inline-block max-w-full overflow-x-auto align-middle text-[#FACC15] font-semibold ${className}`}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};

// Complete KaTeX mapping for ALL 41 slides' KPI Scorecard values so every numeric & formula scorecard renders in full KaTeX Math
const PURE_MATH_SCORECARD_VALUES: Record<string, string> = {
  '41': '41',
  '3': '3',
  'Slides 4–7': '\\text{Slides } 4\\text{--}7',
  'Slides 8–40': '\\text{Slides } 8\\text{--}40',
  'Claus O. Wilke': '\\text{Claus O. Wilke}',
  'The Examples Book': '\\text{The Examples Book}',
  'Univariate → Bivariate': '\\text{Univariate} \\rightarrow \\text{Bivariate}',
  '1,704 × 5': '1{,}704 \\times 5',
  '67.01 yrs': '67.01\\text{ yrs}',
  '$11,680.07': '\\$11{,}680.07',
  '44.02M': '44.02\\text{M}',
  '199.6K → 1.32B': '199.6\\text{K} \\rightarrow 1.32\\text{B}',
  '~74–78 yrs': '\\sim 74\\text{--}78\\text{ yrs}',
  '66 Countries': '66\\text{ Countries}',
  'Cov, r, ρ + Scatter': '\\text{Cov},\\; r,\\; \\rho \\;+\\; \\text{Scatter}',
  'η² + Box/Violin': '\\eta^2 \\;+\\; \\text{Box/Violin}',
  'χ², V + Mosaic/Bar': '\\chi^2,\\; V \\;+\\; \\text{Mosaic/Bar}',
  '6 Indicators': '6\\text{ Indicators}',
  '9 Chart Families': '9\\text{ Chart Families}',
  '$19.79': '\\$19.79',
  '$3.00': '\\$3.00',
  '+8.32 ($²)': '+8.32\\;(\\$^2)',
  'Cov = 8.32': '\\text{Cov} = 8.32',
  'Cov = 3.4023': '\\text{Cov} = 3.4023',
  'r = 0.676': 'r = 0.676',
  '[-1.00, +1.00]': '[-1.00,\\; +1.00]',
  '+1 → 0 → -1': '+1 \\rightarrow 0 \\rightarrow -1',
  'r = ±1 (or Undef)': 'r = \\pm 1 \\; (\\text{or Undef})',
  'r = 0.00': 'r = 0.00',
  '+0.678662': '+0.678662',
  '-0.055676': '-0.055676',
  '+0.047553': '+0.047553',
  'Monotonic': '\\text{Monotonic}',
  'Quan. & Ordinal': '\\text{Quant. \\& Ordinal}',
  '0.71': 'r = 0.71',
  '1.00': '\\rho = 1.00',
  '0.678662': 'r = 0.678662',
  '0.856590': '\\rho = 0.856590',
  'r=0.927 | ρ=1': 'r = 0.927 \\; \\mid \\; \\rho = 1',
  'Parametric (Linear)': '\\text{Parametric (Linear)}',
  'Non-Parametric (Rank)': '\\text{Non-Parametric (Rank)}',
  'Concave Log Curve': '\\text{Concave } \\log_{10} \\text{ Curve}',
  '98.6% < 0.3B': '98.6\\% < 0.3\\text{B}',
  'r = 0.809': 'r = 0.809',
  'r = -0.056': 'r = -0.056',
  'Strong Positive': 'r > 0 \\; (\\text{Strong Positive})',
  '4–5 Nations': '4\\text{--}5\\text{ Nations}',
  'No Clear Trend': 'r \\approx 0 \\; (\\text{No Trend})',
  '7 Pillars': '7\\text{ Pillars}',
  'WCAG AA (4.5:1)': '\\text{WCAG AA } (4.5 : 1)',
  '∑ n_g(x̄_g - x̄)²': '\\sum_{g=1}^{G} n_g (\\bar{x}_g - \\bar{x})^2',
  '∑ (x_i - x̄)²': '\\sum_{i=1}^{n} (x_i - \\bar{x})^2',
  '0 ≤ η² ≤ 1': '0 \\le \\eta^2 \\le 1',
  '0.635 (63.5%)': '\\eta^2 = 0.635 \\; (63.5\\%)',
  '0.424 (42.4%)': '\\eta^2 = 0.424 \\; (42.4\\%)',
  '$1,452': '\\$1{,}452',
  '$431 → $47.1K': '\\$431 \\rightarrow \\$47.1\\text{K}',
  '$28,054': '\\$28{,}054',
  '45–55 yrs': '45\\text{--}55\\text{ yrs}',
  '78–82 yrs': '78\\text{--}82\\text{ yrs}',
  '0.635': '\\eta^2 = 0.635',
  '0.424': '\\eta^2 = 0.424',
  '33.3% & 66.7%': 'Q_{1/3} = 33.3\\% \\; \\& \\; Q_{2/3} = 66.7\\%',
  '71.15%': '71.15\\%',
  '76.67%': '76.67\\%',
  '71.15% (37)': '71.15\\% \\; (n = 37)',
  '68.00% (17)': '68.00\\% \\; (n = 17)',
  '30.3% / 33.3% / 36.4%': '30.3\\% \\;/\\; 33.3\\% \\;/\\; 36.4\\%',
  '76.67% & 100%': '76.67\\% \\; \\& \\; 100\\%',
  'O_{i,j} ≈ E_{i,j}': 'O_{i,j} \\approx E_{i,j}',
  '(I - 1)(J - 1)': '\\text{df} = (I - 1)(J - 1)',
  'p-value < 0.05': 'p\\text{-value} < 0.05',
  'E[χ²] = df': '\\mathbb{E}[\\chi^2] = \\text{df}',
  'V[χ²] = 2·df': '\\mathbb{V}[\\chi^2] = 2 \\cdot \\text{df}',
  '85,855 ppl': 'N = 85{,}855',
  'df = 18': '\\text{df} = 18',
  '≈ 3,298': '\\chi^2 \\approx 3{,}298',
  'V = 0.504': 'V = 0.504',
  'V = 0.113': 'V = 0.113',
  '3 / 3 Cases': '3 / 3\\text{ Cases}',
  'Multivariate & Time': '\\text{Multivariate \\& Time}',
  '2 Variables': '2\\text{ Variables } (X, Y)',
  '+1 Variable': '+1\\text{ Variable } (Z)',
  '3 Shapes (● ◆ ■)': '3\\text{ Shapes } (\\bullet, \\blacklozenge, \\blacksquare)',
  '12 Combinations': '4 \\times 3 = 12\\text{ Combinations}',
  '4 Variables': '4\\text{ Variables } (X, Y, \\text{Color}, \\text{Size})',
  'China & India': '\\text{China } (1.32\\text{B}) \\; \\& \\; \\text{India } (1.11\\text{B})',
  '69.1 → 81.2 yrs': '69.1 \\rightarrow 81.2\\text{ yrs}',
  '8.69M → 20.43M': '8.69\\text{M} \\rightarrow 20.43\\text{M}',
  '$34.4K vs $25.2K': '\\$34.4\\text{K vs } \\$25.2\\text{K}',
  '33 Countries': 'n = 33\\text{ Countries}',
  '16 (1952) → 10 (2007)': '16_{(1952)} \\rightarrow 10_{(2007)}',
  '7 (1952) → 12 (2007)': '7_{(1952)} \\rightarrow 12_{(2007)}',
  '5 Dimensions': '5\\text{ Dimensions } (X, Y, C, S, t)',
  'LifeExp: 48.9 yrs': '\\overline{\\text{lifeExp}}_{1952} = 48.9\\text{ yrs}',
  'LifeExp: 67.0 yrs': '\\overline{\\text{lifeExp}}_{2007} = 67.0\\text{ yrs}',
  '1,225 Pairs': '\\binom{50}{2} = 1{,}225\\text{ Pairs}',
  'r, ρ, η², χ², Ṽ': 'r, \\; \\rho, \\; \\eta^2, \\; \\chi^2, \\; \\tilde{V}',
  'Top 5–10 Pairs': '\\text{Top } 5\\text{--}10\\text{ Pairs}',
  '41 / 41 (100%)': '41 / 41 \\; (100\\%)',
  'EN + KH (100%)': '\\text{EN} + \\text{KH } (100\\%)',
};

// Renders KPI Scorecard values cleanly in 100% KaTeX Math
export const ScorecardValueDisplay: React.FC<{ value: string }> = ({ value }) => {
  const trimmed = value.trim();
  const mappedLatex = PURE_MATH_SCORECARD_VALUES[trimmed] || convertUnicodeMathToLatex(trimmed);

  try {
    const html = katex.renderToString(mappedLatex, {
      displayMode: false,
      throwOnError: false,
      strict: false,
    });
    return (
      <span
        className="inline-block max-w-full overflow-x-auto align-middle text-[#38BDF8]"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    );
  } catch {
    return (
      <span className="font-mono text-[#38BDF8] break-words leading-snug">
        <RichMathText text={value} />
      </span>
    );
  }
};

/**
 * Pre-processes US Dollar currency tokens (like `$10,000`, `$34.4k`, `$25.2k`, `$11,680.07`, `\$11,680`)
 * into unambiguous `⟦...⟧` LaTeX tokens BEFORE `$ ... $` math delimiter matching runs.
 * This prevents two dollar amounts in the same sentence from ever being paired as a `$ ... $` block!
 */
function preprocessCurrencyAndLatex(text: string): string {
  // 0. Protect any escaped \$ inside LaTeX as __USD__ and ($²) as (\text{USD}^2) before delimiter matching
  let result = text
    .replace(/\\\$/g, '__USD__')
    .replace(/\(\$²\)/g, '⟦(__USD__^2)⟧');

  // 1. Handle genuine `$ ... $` LaTeX blocks first, but ONLY if they do not span plain English prose or Khmer characters
  result = result.replace(/\$([^$\n]{1,140})\$/g, (match, inner) => {
    const stripped = inner
      .replace(/\\text\{[^}]*\}/g, '')
      .replace(/\\[A-Za-z]+/g, '')
      .replace(/__USD__/g, '');
    // If stripped content contains 2+ consecutive plain English words or Khmer characters, it is prose between a currency $ and a later $
    if (/[A-Za-z]{2,}\s+[A-Za-z]{2,}/.test(stripped) || /[\u1780-\u17FF]/.test(stripped)) {
      return match;
    }
    return `⟦${inner}⟧`;
  });

  // 2. Convert standalone US Dollar currency amounts (e.g. $10,000, $34.4k, $25.2k, $9,000, $11,680.07) into ⟦__USD__...⟧
  result = result.replace(
    /([+-])?\$(\d+(?:,\d{3})*(?:\.\d+)?)([MBKmbk])?/g,
    (_match, sign, digits, suffix) => {
      const signStr = sign || '';
      const formattedDigits = digits.replace(/,/g, '{,}');
      const suffixStr = suffix ? `\\text{${suffix}}` : '';
      return `⟦${signStr}__USD__${formattedDigits}${suffixStr}⟧`;
    }
  );

  // 3. Second pass for any `$ ... $` LaTeX block that came AFTER a standalone currency `$` in the same sentence (e.g. Slide 26: "$9,000 in Africa ... $\eta^2 = 0.635$")
  result = result.replace(/\$([^$\n]{1,140})\$/g, (match, inner) => {
    const stripped = inner
      .replace(/\\text\{[^}]*\}/g, '')
      .replace(/\\[A-Za-z]+/g, '')
      .replace(/__USD__/g, '');
    if (/[A-Za-z]{2,}\s+[A-Za-z]{2,}/.test(stripped) || /[\u1780-\u17FF]/.test(stripped)) {
      return match;
    }
    return `⟦${inner}⟧`;
  });

  return result;
}

// Helper to convert inline matched math/numeric tokens into clean KaTeX LaTeX
function tokenToLatex(token: string): string {
  // 1. Pre-tokenized `⟦...⟧` LaTeX block
  if (token.startsWith('⟦') && token.endsWith('⟧')) {
    return token.slice(1, -1).replace(/__USD__/g, '\\$');
  }

  // 2. Number with unit suffix like 44.02M, 1.32B, 199.6K, 34.4k, 67.01 yrs
  const unitMatch = token.match(/^([+-]?\d+(?:,\d{3})*(?:\.\d+)?)([MBKmbk]|%|\s*yrs)$/);
  if (unitMatch) {
    const numPart = unitMatch[1].replace(/,/g, '{,}');
    const unitPart = unitMatch[2].trim();
    if (unitPart === '%') return `${numPart}\\%`;
    return `${numPart}\\text{${unitPart.startsWith('y') ? ' yrs' : unitPart}}`;
  }

  // 3. Signed / comma / decimal / percentage number
  if (/^[+-]?\d+(?:,\d{3})*(?:\.\d+)?%?$/.test(token)) {
    return token.replace(/,/g, '{,}').replace(/%$/, '\\%');
  }

  return convertUnicodeMathToLatex(token);
}

// Comprehensive regex capturing:
// 1. Backtick code `...`
// 2. Pre-tokenized LaTeX/Currency blocks `⟦...⟧`
// 3. Multi-symbol math relations & intervals (e.g., r = 0.6787, ρ = 0.8566, η² = 0.635, χ² ≈ 3,298, df = 18, n = 142, N = 85,855, [-1, +1], [0, 1], p-value < 0.05)
// 4. Symbolic statistical tokens (Cov(X,Y), log₁₀(...), x̄, ȳ, σ̂, Ṽ, χ², η², ρ, Q₁, Q₂, Q₃, H₀, H₁, etc.)
// 5. Standalone numbers, decimals, percentages, and suffixed quantities (e.g. +0.678662, -0.055676, 44.02M, 63.5%, 3,298)
const MATH_TOKEN_REGEX =
  /(`[^`]+`|⟦[^⟧]+⟧|\b(?:Cov\([^)]+\)|r_[A-Za-z0-9,[\]]+|ρ_[A-Za-z0-9,[\]]+|r|ρ|η²|χ²_{obs}|χ²\(df\)|χ²|Ṽ|V|df|n|N|p|Y_4|Y₄|y_4|y₄|s_X|s_Y)\s*(?:=|≈|≤|≥|<|>|≪|≫|∈)\s*[+-]?\d+(?:,\d{3})*(?:\.\d+)?%?|\b(?:p-value)\s*(?:=|≈|≤|≥|<|>)\s*\d+(?:\.\d+)?|\[[+-]?\d+(?:\.\d+)?\s*,\s*[+-]?\d+(?:\.\d+)?\]|\bCov\([^)]+\)|\br_[A-Za-z0-9,[\]]+|\bρ_[A-Za-z0-9,[\]]+|x̄_g|x̄|ȳ|X̄|Ȳ|σ̂|f̂_h|Ṽ|φ̃²|Ĩ|J̃|χ²_{obs}|χ²\(df\)|χ²|η²|ρ|log₁₀\([^)]+\)|log₁₀|p\(p\s*-\s*1\)\s*\/\s*2|d_i²|d_i|dᵢ|s_X|s_Y|n_g|O_{i,j}|E_{i,j}|Q_1|Q_2|Q_3|Q₁|Q₂|Q₃|H_0|H_1|H₀|H₁|Y_4|Y₄|y_4|y₄|[+-]?\d+(?:,\d{3})*(?:\.\d+)?(?:[MBKmbk]|%)(?!\w)|[+-]?\d+(?:,\d{3})+(?:\.\d+)?|[+-]?\d+\.\d+|[+-]\d+|\b\d+\b)/g;

export const RichMathText: React.FC<{ text: string; className?: string }> = ({
  text,
  className = '',
}) => {
  if (!text) return null;
  const preprocessed = preprocessCurrencyAndLatex(text);
  const parts = preprocessed.split(MATH_TOKEN_REGEX);

  return (
    <span className={`break-words ${className}`}>
      {parts.map((part, idx) => {
        if (!part) return null;

        // 1. Backtick code
        if (part.startsWith('`') && part.endsWith('`')) {
          const inner = part.slice(1, -1);
          return (
            <code
              key={idx}
              className="px-1.5 py-0.5 mx-0.5 rounded bg-[#111C30] border border-[#1E293B] text-[#38BDF8] font-mono text-[0.9em] tabular-nums break-all"
            >
              {inner}
            </code>
          );
        }

        // 2. Matched math or numeric token
        MATH_TOKEN_REGEX.lastIndex = 0;
        if (MATH_TOKEN_REGEX.test(part)) {
          MATH_TOKEN_REGEX.lastIndex = 0;
          const latex = tokenToLatex(part);
          try {
            const html = katex.renderToString(latex, {
              displayMode: false,
              throwOnError: false,
              strict: false,
            });
            return (
              <span
                key={idx}
                className="inline-block max-w-full overflow-x-auto mx-0.5 align-middle text-emerald-300"
                dangerouslySetInnerHTML={{ __html: html }}
              />
            );
          } catch {
            return <span key={idx}>{part}</span>;
          }
        }
        MATH_TOKEN_REGEX.lastIndex = 0;
        return <React.Fragment key={idx}>{part}</React.Fragment>;
      })}
    </span>
  );
};
