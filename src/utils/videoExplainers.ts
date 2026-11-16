export type VideoSceneRendererId =
  | 'eda_univariate_to_bivariate'
  | 'boxplot_iqr_outliers'
  | 'covariance_quadrants'
  | 'pearson_vs_spearman_outlier'
  | 'log_scale_and_anscombe'
  | 'anova_variance_decomposition'
  | 'contingency_chi_square'
  | 'mosaic_treemap_and_spaghetti'
  | 'curse_of_dimensionality'
  | 'pca_and_multivariate_synthesis';

export interface VideoExplainerScene {
  id: string;
  startSec: number;
  endSec: number;
  title: { en: string; km: string };
  caption: { en: string; km: string };
  spokenScript: { en: string; km: string };
  formulaLatex: string;
  keyTakeaway: { en: string; km: string };
}

export interface VideoExplainerModule {
  id: VideoSceneRendererId;
  slideRangeLabel: string;
  targetPages: number[];
  durationSec: number;
  title: { en: string; km: string };
  subtitle: { en: string; km: string };
  badgeLabel: string;
  scenes: VideoExplainerScene[];
}

export const VIDEO_EXPLAINER_MODULES: VideoExplainerModule[] = [
  {
    id: 'eda_univariate_to_bivariate',
    slideRangeLabel: 'Slides 1–4',
    targetPages: [1, 2, 3, 4],
    durationSec: 52,
    title: {
      en: 'From 1D Univariate to 2D Bivariate & The 3-Case Taxonomy',
      km: 'ពីការវិភាគអថេរទោល (1D) ទៅកាន់ការវិភាគទ្វេអថេរ (2D) និងករណីទាំង ៣',
    },
    subtitle: {
      en: 'Why marginal distributions P(X) and P(Y) alone miss hidden joint relationships',
      km: 'ហេតុអ្វីរបាយអថេរទោលមិនអាចប្រាប់ពីទំនាក់ទំនងរួម P(X, Y) បានទេ?',
    },
    badgeLabel: '0:52 · Foundations',
    scenes: [
      {
        id: 'eda-s1',
        startSec: 0,
        endSec: 13,
        title: {
          en: 'Scene 1 · 1D Marginal Distribution P(X)',
          km: 'ឈុតទី ១ · របាយអថេរទោល ១ វិមាត្រ P(X)',
        },
        caption: {
          en: 'Univariate EDA examines a single column X along one axis—showing its center and spread, while completely flattening away how it relates to Y.',
          km: 'ការវិភាគអថេរទោលពិនិត្យជួរឈរតែមួយ X លើបន្ទាត់ដេក ដើម្បីដឹងពីមធ្យមភាគ និងគម្លាត ប៉ុន្តែវាលាក់ទំនាក់ទំនងជាមួយអថេរផ្សេងទាំងស្រុង។',
        },
        spokenScript: {
          en: 'In exploratory data analysis, we always start by inspecting one variable at a time on a single axis. While a histogram or summary table reveals the average and spread of X, flattening every observation onto one dimension hides how X behaves alongside any second variable Y.',
          km: 'នៅក្នុងការវិភាគទិន្នន័យដំបូង យើងតែងតែចាប់ផ្តើមពិនិត្យអថេរតែមួយលើអ័ក្សដេកជាមុនសិន។ ទោះបីជាតារាងស្ថិតិទោលអាចប្រាប់យើងពីមធ្យមភាគ និងការរាយប៉ាយរបស់ X ក៏ដោយ ប៉ុន្តែវាបង្ហាប់ទិន្នន័យឱ្យរាបស្មើ ហើយលាក់បាំងទំនាក់ទំនងជាមួយអថេរ Y ទាំងស្រុង។',
        },
        formulaLatex: 'f_X(x) = \\int f_{X,Y}(x, y)\\,dy',
        keyTakeaway: {
          en: 'Univariate checks one feature at a time—necessary first, but blind to interactions.',
          km: 'អថេរទោលពិនិត្យលក្ខណៈតែមួយប៉ុណ្ណោះ—ចាំបាច់ដំបូង តែមើលមិនឃើញទំនាក់ទំនងទេ។',
        },
      },
      {
        id: 'eda-s2',
        startSec: 13,
        endSec: 26,
        title: {
          en: 'Scene 2 · Lifting into 2D Joint Space (X, Y)',
          km: 'ឈុតទី ២ · ការលើកទិន្នន័យចូលប្លង់ទ្វេអថេរ (X, Y)',
        },
        caption: {
          en: 'Adding the vertical Y-axis lifts every observation into 2D space. Suddenly, upward slopes, curves, clusters, and dependency P(X,Y) ≠ P(X)·P(Y) appear.',
          km: 'ពេលបន្ថែមអ័ក្សបញ្ឈរ Y ចំណុចទិន្នន័យហោះឡើងបង្កើតជាប្លង់ 2D ដែលបង្ហាញពីទំនោរកើនឡើង កញ្ចុំទិន្នន័យ និងភាពពឹងផ្អែកគ្នាភ្លាមៗ។',
        },
        spokenScript: {
          en: 'Now watch what happens when we introduce a second vertical axis Y. Each point lifts off the baseline into two-dimensional joint space. Immediately, a hidden diagonal trend emerges, proving that X and Y are statistically dependent rather than moving at random.',
          km: 'ឥឡូវសូមមើលពេលយើងបន្ថែមអ័ក្សបញ្ឈរ Y មួយទៀត។ ចំណុចទិន្នន័យនីមួយៗនឹងហោះឡើងចូលទៅក្នុងប្លង់ពីរវិមាត្រ។ ភ្លាមៗនោះ និន្នាការកើនឡើងតាមបន្ទាត់ទ្រូងក៏លេចចេញមក ដែលបង្ហាញថាអថេរទាំងពីរពិតជាពឹងផ្អែកគ្នា។',
        },
        formulaLatex: 'P(X, Y) \\neq P(X) \\cdot P(Y)',
        keyTakeaway: {
          en: 'Joint 2D geometry uncovers hidden dependency and conditional patterns.',
          km: 'ប្លង់ទ្វេអថេរបង្ហាញភាពពឹងផ្អែកគ្នា និងទំនោរលាក់កំបាំង។',
        },
      },
      {
        id: 'eda-s3',
        startSec: 26,
        endSec: 39,
        title: {
          en: 'Scene 3 · Identical Marginals, Opposite Joints',
          km: 'ឈុតទី ៣ · របាយទោលដូចគ្នា តែរូបរាងរួមខុសគ្នាស្រឡះ',
        },
        caption: {
          en: 'Two datasets can have identical 1D mean and standard deviation yet form a tight linear trend (r = +0.92) on the left or a zero-correlation circle (r = 0) on the right.',
          km: 'សំណុំទិន្នន័យពីរអាចមានមធ្យមភាគ និងគម្លាតស្តង់ដារ 1D ដូចគ្នាបេះបិទ ប៉ុន្តែមួយជាបន្ទាត់ត្រង់ (r = +0.92) និងមួយទៀតជារង្វង់មូល (r = 0)។',
        },
        spokenScript: {
          en: 'Here is a classic trap in data science: two datasets can share the exact same one-dimensional mean and standard deviation, yet look totally different in 2D. On the left, points climb cleanly along a line; on the right, they form a perfect ring with zero linear correlation.',
          km: 'នេះគឺជាអន្ទាក់ស្ថិតិដ៏សំខាន់មួយ៖ សំណុំទិន្នន័យពីរអាចមានមធ្យមភាគ និងគម្លាតស្តង់ដារទោលដូចគ្នាបេះបិទ ប៉ុន្តែពេលគូសជាប្លង់ពីរវិមាត្រ ខាងឆ្វេងជាបន្ទាត់ត្រង់កើនឡើង ចំណែកខាងស្តាំបែរជារង្វង់មូលដែលមានសហសម្ព័ន្ធស្មើសូន្យ។',
        },
        formulaLatex: '(\\bar{x}_1, s_1) = (\\bar{x}_2, s_2) \\;\\not\\Rightarrow\\; r_1 = r_2',
        keyTakeaway: {
          en: 'Never rely on 1D summary tables alone—always inspect bivariate pairs.',
          km: 'កុំវិនិច្ឆ័យដោយមើលតែតារាង 1D—ត្រូវវិភាគគូអថេរ 2D ជានិច្ច។',
        },
      },
      {
        id: 'eda-s4',
        startSec: 39,
        endSec: 52,
        title: {
          en: 'Scene 4 · The 3 Bivariate Analysis Regimes',
          km: 'ឈុតទី ៤ · ការបែងចែកករណីទាំង ៣ នៃការវិភាគទ្វេអថេរ',
        },
        caption: {
          en: 'Every bivariate pair maps to one of 3 toolkits: Quant×Quant (Scatter + Pearson r / Spearman ρ), Quant×Qual (Boxplot + ANOVA η²), or Qual×Qual (Contingency + χ², Cramér’s V).',
          km: 'គ្រប់គូអថេរចែកជា ៣ ករណី៖ បរិមាណ×បរិមាណ (Scatter + r, ρ), បរិមាណ×គុណភាព (Boxplot + η²) និងគុណភាព×គុណភាព (តារាងខ្វែង + χ², V)។',
        },
        spokenScript: {
          en: 'To analyze any pair systematically, we classify variables into three regimes. Quantitative by quantitative uses scatter plots with Pearson or Spearman. Quantitative by categorical uses boxplots and ANOVA eta squared. And categorical by categorical uses contingency tables with chi-squared and Cramér’s V.',
          km: 'ដើម្បីវិភាគឱ្យត្រូវតាមក្បួន យើងបែងចែកជាបីករណីធំៗ។ ទីមួយ បរិមាណទល់បរិមាណ ប្រើក្រាហ្វពង្រាយ និងមេគុណភៀសុន ឬស្ពែរមែន។ ទីពីរ បរិមាណទល់ប្រភេទ ប្រើប្រអប់ប្រៀបធៀប និងអេតាការ៉េ។ ទីបី ប្រភេទទល់ប្រភេទ ប្រើតារាងខ្វែង និងតេស្តខៃស្វែរ។',
        },
        formulaLatex: '(X, Y) \\in \\{\\text{Q}\\times\\text{Q},\\; \\text{Q}\\times\\text{C},\\; \\text{C}\\times\\text{C}\\}',
        keyTakeaway: {
          en: 'Variable types strictly dictate both the numerical indicator and the best visualization.',
          km: 'ប្រភេទអថេរជាអ្នកកំណត់ទាំងរូបមន្តសូចនាករ និងប្រភេទក្រាហ្វសមស្រប។',
        },
      },
    ],
  },
  {
    id: 'boxplot_iqr_outliers',
    slideRangeLabel: 'Slides 5–7',
    targetPages: [5, 6, 7],
    durationSec: 56,
    title: {
      en: 'Skewness, Boxplot IQR Fences & Bimodal Violinplots',
      km: 'ភាពពេបនៃទិន្នន័យ (Skewness) របង Boxplot IQR និងក្រាហ្វ Violinplot',
    },
    subtitle: {
      en: 'How extreme countries pull Mean away from Median & how Tukey fences catch Outliers',
      km: 'របៀបដែលតម្លៃ Outliers ទាញមធ្យមភាគឱ្យឃ្លាតពីមេដ្យាន និងរបៀបគូសប្រអប់ Boxplot',
    },
    badgeLabel: '0:56 · Univariate & Outliers',
    scenes: [
      {
        id: 'box-s1',
        startSec: 0,
        endSec: 14,
        title: {
          en: 'Scene 1 · Outliers Pull Mean Away from Median',
          km: 'ឈុតទី ១ · Outliers ទាញមធ្យមភាគឱ្យឃ្លាតពីមេដ្យាន',
        },
        caption: {
          en: 'In Gapminder 2007 population, China (1.32B) and India (1.11B) create extreme right-skew—pulling the Mean up to 44.02M while the typical Median stays at 10.52M.',
          km: 'ក្នុងទិន្នន័យប្រជាជនឆ្នាំ ២០០៧ ប្រទេសចិន (1.32B) និងឥណ្ឌា (1.11B) ទាញមធ្យមភាគឡើងខ្ពស់ដល់ 44.02M ខណៈមេដ្យាននៅនឹងត្រឹម 10.52M។',
        },
        spokenScript: {
          en: 'Let us examine how extreme values distort averages using global population data. Most countries sit near ten million people, so the median stays steady at 10.5 million. However, China at 1.3 billion and India at 1.1 billion stretch the right tail dramatically, dragging the arithmetic mean up to 44 million.',
          km: 'សូមពិនិត្យមើលថាតើតម្លៃដាច់ស្រយាលទាញមធ្យមភាគយ៉ាងដូចម្តេច តាមរយៈទិន្នន័យប្រជាជនពិភពលោក។ ប្រទេសភាគច្រើនមានប្រជាជនប្រមាណដប់លាននាក់ ដូច្នេះមេដ្យាននៅរក្សាតម្លៃដប់លានកន្លះ។ ប៉ុន្តែប្រទេសចិន និងឥណ្ឌាដែលមានប្រជាជនលើសមួយពាន់លាននាក់ បានទាញមធ្យមភាគឱ្យហក់ឡើងដល់សែសិបបួនលានឯណោះ។',
        },
        formulaLatex: '\\bar{x} = 44.02\\text{M} \\;\\gg\\; Q_2 = 10.52\\text{M}',
        keyTakeaway: {
          en: 'Mean is sensitive to extreme skew; Median (Q₂) stays robust for typical values.',
          km: 'មធ្យមភាគរសើបនឹងតម្លៃដាច់ស្រយាល; មេដ្យានរឹងមាំសម្រាប់តម្លៃធម្មតា។',
        },
      },
      {
        id: 'box-s2',
        startSec: 14,
        endSec: 28,
        title: {
          en: 'Scene 2 · Constructing the Interquartile Box [Q₁, Q₃]',
          km: 'ឈុតទី ២ · ការបង្កើតប្រអប់ចតុភាគ [Q₁, Q₃]',
        },
        caption: {
          en: 'Sorting all 142 countries splits them into quarters. The Boxplot’s central box spans from Q₁ (25th percentile) to Q₃ (75th percentile), enclosing the middle 50% of nations.',
          km: 'ពេលតម្រៀប ១៤២ ប្រទេសពីតូចទៅធំ ប្រអប់កណ្តាលលាតសន្ធឹងពីចតុភាគទី ១ (25%) ដល់ទី ៣ (75%) ដើម្បីគ្របដណ្តប់ទិន្នន័យកណ្តាល 50%។',
        },
        spokenScript: {
          en: 'To build a summary immune to outliers, we sort all 142 countries from smallest to largest and mark quartiles. The central rectangle runs from the first quartile at 25 percent to the third quartile at 75 percent. Its width defines the interquartile range, locking in the middle half of the world.',
          km: 'ដើម្បីបង្កើតរង្វាស់ដែលធន់នឹងតម្លៃដាច់ស្រយាល យើងតម្រៀបប្រទេសទាំងអស់ពីតូចទៅធំ រួចកំណត់ចតុភាគ។ ប្រអប់កណ្តាលលាតសន្ធឹងពីចតុភាគទីមួយត្រឹមម្ភៃប្រាំភាគរយ ដល់ចតុភាគទីបីត្រឹមចិតសិបប្រាំភាគរយ ដែលគ្របដណ្តប់ប្រទេសពាក់កណ្តាលកណ្តាលនៃពិភពលោក។',
        },
        formulaLatex: '\\text{IQR} = Q_3 - Q_1',
        keyTakeaway: {
          en: 'Box width equals IQR, capturing the stable middle 50% spread.',
          km: 'ទទឹងប្រអប់ស្មើនឹង IQR ដែលវាស់ការរាយប៉ាយកណ្តាល 50% ដោយមិនរង្គើ។',
        },
      },
      {
        id: 'box-s3',
        startSec: 28,
        endSec: 42,
        title: {
          en: 'Scene 3 · Tukey 1.5×IQR Outlier Fence Detection',
          km: 'ឈុតទី ៣ · របងចាប់តម្លៃដាច់ស្រយាល 1.5 × IQR',
        },
        caption: {
          en: 'Whiskers extend up to 1.5×IQR beyond Q₁ and Q₃. Any observation crossing that mathematical boundary is flagged objectively as an Outlier dot rather than hidden inside a bar.',
          km: 'ព្រុយ Boxplot លាតដល់ត្រឹម Q₃ + 1.5×IQR។ ចំណុចណាហួសព្រំដែនគណិតវិទ្យានេះ ត្រូវចាប់ដាច់ដោយឡែកជាចំណុច Outliers ដោយស្វ័យប្រវត្តិ។',
        },
        spokenScript: {
          en: 'Next, Tukey’s boxplot extends whiskers outward by one point five times the interquartile range. Notice this boundary acts as an objective statistical fence. Any nation whose population crosses above Q3 plus one point five times IQR lights up individually as an outlier rather than getting buried in an average.',
          km: 'បន្ទាប់មក ព្រុយប្រអប់ត្រូវលាតសន្ធឹងចេញក្រៅចម្ងាយមួយចុចប្រាំដងនៃគម្លាតអន្តរចតុភាគ។ ព្រំដែននេះដើរតួជារបងស្តង់ដារ ហើយរាល់ទិន្នន័យណាដែលលោតហួសរបងនេះ នឹងត្រូវកត់សម្គាល់ជាចំណុចដាច់ស្រយាលដាច់ដោយឡែក មិនឱ្យលាក់បាំងក្នុងមធ្យមភាគឡើយ។',
        },
        formulaLatex: '\\text{Upper Fence} = Q_3 + 1.5 \\times \\text{IQR}',
        keyTakeaway: {
          en: '1.5×IQR fences isolate extreme observations consistently without arbitrary guessing.',
          km: 'របង 1.5×IQR ចាប់តម្លៃ Outliers ដោយមានវិធានច្បាស់លាស់ មិនស្មានតាមអារម្មណ៍។',
        },
      },
      {
        id: 'box-s4',
        startSec: 42,
        endSec: 56,
        title: {
          en: 'Scene 4 · Violin KDE Exposes Bimodal Peaks',
          km: 'ឈុតទី ៤ · ក្រាហ្វវីយ៉ូឡុងបង្ហាញទម្រង់កំពូលពីរ (Bimodal)',
        },
        caption: {
          en: 'Boxplots hide multimodality inside a flat box. Wrapping Kernel Density curves into a Violinplot exposes two hidden life-expectancy clusters (~52y and ~75y)!',
          km: 'Boxplots អាចលាក់ទម្រង់កំពូលច្រើន។ ការបន្ថែមខ្សែកោងដង់ស៊ីតេបង្កើតជា Violinplot ជួយបង្ហាញកំពូលអាយុរំពឹងរស់ពីរផ្សេងគ្នា (~52 ឆ្នាំ និង ~75 ឆ្នាំ)!',
        },
        spokenScript: {
          en: 'Finally, watch out for one blind spot in boxplots: a rectangle cannot show if your data splits into two separate peaks. Wrapping a smoothed kernel density curve around the box creates a violin plot, immediately exposing two distinct life expectancy clusters around 52 years and 75 years.',
          km: 'ជាចុងក្រោយ Boxplot មានចំណុចខ្វះខាតមួយគឺវាមិនអាចបង្ហាញទេ ប្រសិនបើទិន្នន័យចែកជាកំពូលពីរ។ ការគូសខ្សែកោងដង់ស៊ីតេជុំវិញប្រអប់បង្កើតបានជាក្រាហ្វវីយ៉ូឡុង ដែលបង្ហាញកំពូលអាយុរំពឹងរស់ពីរក្រុមដាច់ពីគ្នាគឺនៅហាសិបពីរឆ្នាំ និងចិតសិបប្រាំឆ្នាំ។',
        },
        formulaLatex: '\\hat{f}_h(x) = \\frac{1}{nh}\\sum_{i=1}^n K\\!\\left(\\frac{x - x_i}{h}\\right)',
        keyTakeaway: {
          en: 'Combine Boxplot quartiles with Violin density to catch bimodal distributions.',
          km: 'ប្រើ Violinplot រួមជាមួយ Boxplot ដើម្បីមើលឃើញទាំងចតុភាគ និងរូបរាងកំពូលដង់ស៊ីតេ។',
        },
      },
    ],
  },
  {
    id: 'covariance_quadrants',
    slideRangeLabel: 'Slides 8–11',
    targetPages: [8, 9, 10, 11],
    durationSec: 56,
    title: {
      en: 'Covariance Quadrants & Normalizing into Pearson r',
      km: 'កាដ្រង់ទាំង ៤ នៃកូវ៉ារ្យង់ Cov(X,Y) និងការបម្លែងទៅជា Pearson r',
    },
    subtitle: {
      en: 'Geometric intuition behind centered products (xᵢ − x̄)(yᵢ − ȳ)',
      km: 'អត្ថន័យធរណីមាត្រនៃផលគុណគម្លាត (xᵢ − x̄)(yᵢ − ȳ) ជុំវិញចំណុចកណ្តាល',
    },
    badgeLabel: '0:56 · Covariance & r',
    scenes: [
      {
        id: 'cov-s1',
        startSec: 0,
        endSec: 14,
        title: {
          en: 'Scene 1 · Centering Origin at Centroid (x̄, ȳ)',
          km: 'ឈុតទី ១ · ការប្តូរគល់អ័ក្សទៅចំណុចកណ្តាល (x̄, ȳ)',
        },
        caption: {
          en: 'Draw a vertical line at x̄ and a horizontal line at ȳ through the cloud’s balance point. Every observation now has signed deviations (xᵢ − x̄) and (yᵢ − ȳ).',
          km: 'គូសបន្ទាត់កាត់មធ្យមភាគ x̄ និង ȳ ត្រង់ចំណុចកណ្តាល ដើម្បីបែងចែកប្លង់ជា ៤ កាដ្រង់ និងវាស់គម្លាតមានសញ្ញារបស់ចំណុចនីមួយៗ។',
        },
        spokenScript: {
          en: 'How do we mathematically measure whether two variables rise together? First, we locate the centroid at the average of X and average of Y, then slice the scatter plot into four quadrants. Now every point is measured by how far left or right, and above or below center, it sits.',
          km: 'តើយើងវាស់តាមគណិតវិទ្យាយ៉ាងដូចម្តេច ដើម្បីដឹងថាអថេរពីរកើនឡើងស្របគ្នាឬអត់? ជាដំបូង យើងរកចំណុចកណ្តាលនៃមធ្យមភាគទាំងពីរ រួចគូសបន្ទាត់កាត់បែងចែកប្លង់ជាបួនកាដ្រង់។ ពេលនេះ ចំណុចនីមួយៗមានគម្លាតឆ្វេងស្តាំ និងលើក្រោមធៀបនឹងចំណុចកណ្តាល។',
        },
        formulaLatex: '(\\Delta x_i, \\Delta y_i) = (x_i - \\bar{x},\\; y_i - \\bar{y})',
        keyTakeaway: {
          en: 'Centering at (x̄, ȳ) turns raw coordinates into positive and negative deviations.',
          km: 'ការកំណត់គោលនៅ (x̄, ȳ) បម្លែងតម្លៃដើមទៅជាគម្លាតវិជ្ជមាន និងអវិជ្ជមាន។',
        },
      },
      {
        id: 'cov-s2',
        startSec: 14,
        endSec: 28,
        title: {
          en: 'Scene 2 · Positive Quadrants (+,+) and (−,−)',
          km: 'ឈុតទី ២ · កាដ្រង់វិជ្ជមាន Q-I (+,+) និង Q-III (−,−)',
        },
        caption: {
          en: 'In Top-Right (+,+) both variables exceed their mean; in Bottom-Left (−,−) both sit below mean. Multiplying two same-sign deviations always adds positive area (+)!',
          km: 'នៅជ្រុងលើស្តាំ (+,+) អថេរទាំងពីរធំជាងមធ្យមភាគ ឯជ្រុងក្រោមឆ្វេង (−,−) តូចជាងមធ្យមភាគ។ ផលគុណសញ្ញាដូចគ្នាតែងតែផ្តល់ផ្ទៃវិជ្ជមាន (+)!',
        },
        spokenScript: {
          en: 'Look at the top-right and bottom-left quadrants. In the top-right, both X and Y are above average. In the bottom-left, both are below average, and two negatives multiplied together still yield a positive rectangle. Points falling here vote for positive covariance.',
          km: 'សូមពិនិត្យកាដ្រង់លើខាងស្តាំ និងក្រោមខាងឆ្វេង។ នៅលើខាងស្តាំ អថេរទាំងពីរខ្ពស់ជាងមធ្យមភាគ។ នៅក្រោមខាងឆ្វេង ទាំងពីរទាបជាងមធ្យមភាគ ហើយលេខដកគុណលេខដកនៅតែចេញជាតម្លៃបូកដដែល ដែលជួយបង្កើនកូវ៉ារ្យង់វិជ្ជមាន។',
        },
        formulaLatex: '(x_i - \\bar{x})(y_i - \\bar{y}) > 0',
        keyTakeaway: {
          en: 'Same-side deviations (+,+ or −,−) contribute positive rectangular products.',
          km: 'គម្លាតស្របទិស (+,+ ឬ −,−) បង្កើតផលគុណផ្ទៃវិជ្ជមាន។',
        },
      },
      {
        id: 'cov-s3',
        startSec: 28,
        endSec: 42,
        title: {
          en: 'Scene 3 · Negative Quadrants (−,+) and (+,−)',
          km: 'ឈុតទី ៣ · កាដ្រង់អវិជ្ជមាន Q-II (−,+) និង Q-IV (+,−)',
        },
        caption: {
          en: 'Points in Top-Left (−,+) or Bottom-Right (+,−) move in opposite directions relative to the mean—subtracting negative area (−) from the average covariance.',
          km: 'ចំណុចនៅជ្រុងលើឆ្វេង (−,+) និងក្រោមស្តាំ (+,−) ដើរផ្ទុយទិសគ្នាធៀបនឹងមធ្យមភាគ ដែលដកបន្ថយផ្ទៃអវិជ្ជមាន (−) ចេញពីផលបូកកូវ៉ារ្យង់។',
        },
        spokenScript: {
          en: 'By contrast, points landing in the top-left or bottom-right quadrants move in opposite directions: one variable sits above average while the other falls below. Their product is negative, canceling out positive areas. Averaging all these signed rectangles gives the sample covariance.',
          km: 'ផ្ទុយទៅវិញ ចំណុចនៅកាដ្រង់លើខាងឆ្វេង ឬក្រោមខាងស្តាំ មានអថេរមួយខ្ពស់ជាងមធ្យមភាគ និងមួយទៀតទាបជាង។ ផលគុណរបស់វាមានសញ្ញាដក ដែលទាញទម្លាក់កូវ៉ារ្យង់សរុប។ ការគិតមធ្យមនៃផ្ទៃមានសញ្ញាទាំងអស់នេះគឺជាកូវ៉ារ្យង់។',
        },
        formulaLatex: '\\text{Cov}(X,Y) = \\frac{1}{n-1}\\sum_{i=1}^n (x_i - \\bar{x})(y_i - \\bar{y})',
        keyTakeaway: {
          en: 'Covariance averages all signed products; balanced positive and negative gives Cov ≈ 0.',
          km: 'កូវ៉ារ្យង់ជាមធ្យមនៃផ្ទៃមានសញ្ញាទាំង ៤; បើលើសលប់ស្មើគ្នានោះ Cov ≈ 0។',
        },
      },
      {
        id: 'cov-s4',
        startSec: 42,
        endSec: 56,
        title: {
          en: 'Scene 4 · Dividing by sₓ·sᵧ Removes Units → r ∈ [−1, +1]',
          km: 'ឈុតទី ៤ · ចែកនឹង sₓ·sᵧ ដើម្បីបំបាត់ខ្នាត → r ∈ [−1, +1]',
        },
        caption: {
          en: 'Covariance depends on currency or unit scale (dollars × years). Dividing by sₓ·sᵧ normalizes X and Y into unit-free Z-scores, bounding Pearson r strictly inside [−1, +1].',
          km: 'កូវ៉ារ្យង់ប្រែប្រួលតាមខ្នាតរង្វាស់ (ឧ. ដុល្លារ×ឆ្នាំ)។ ការចែកនឹង sₓ·sᵧ ជួយលុបខ្នាតចោល និងបង្រួមមេគុណ Pearson r មកចន្លោះ [−1, +1] ជានិច្ច។',
        },
        spokenScript: {
          en: 'There is one catch with covariance: changing dollars to cents multiplies covariance by one hundred. To solve this, Pearson correlation divides covariance by the standard deviation of X times the standard deviation of Y. All units cancel out, locking r permanently between minus one and plus one.',
          km: 'កូវ៉ារ្យង់មានបញ្ហាមួយគឺតម្លៃវាផ្លាស់ប្តូរពេលយើងប្តូរខ្នាត ដូចជាពីដុល្លារទៅរៀល។ ដើម្បីដោះស្រាយ លោកភៀសុនបានចែកកូវ៉ារ្យង់នឹងផលគុណគម្លាតស្តង់ដារទាំងពីរ។ ការចែកនេះលុបខ្នាតចោលអស់ ហើយបង្រួមមេគុណសហសម្ព័ន្ធឱ្យនៅចន្លោះដកមួយដល់បូកមួយជានិច្ច។',
        },
        formulaLatex: 'r = \\frac{\\text{Cov}(X, Y)}{s_X \\cdot s_Y} \\in [-1, +1]',
        keyTakeaway: {
          en: 'Pearson r is unitless, scale-invariant, and only measures straight-line strength.',
          km: 'Pearson r គ្មានខ្នាត មិនប្រែប្រួលតាមរង្វាស់ ហើយវាស់កម្រិតបន្ទាត់ត្រង់។',
        },
      },
    ],
  },
  {
    id: 'pearson_vs_spearman_outlier',
    slideRangeLabel: 'Slides 12–15',
    targetPages: [12, 13, 14, 15],
    durationSec: 60,
    title: {
      en: 'Pearson (r) vs. Spearman Rank (ρ) & Outlier Stress Test',
      km: 'ការប្រៀបធៀប Pearson (r) ទល់នឹង Spearman (ρ) និងតេស្ត Outliers',
    },
    subtitle: {
      en: 'Watching how converting raw values into ranks linearizes curves and defeats extreme outliers',
      km: 'ចលនាបម្លែងតម្លៃដើមទៅជាចំណាត់ថ្នាក់ (Ranks) និងភាពធន់នឹង Outliers',
    },
    badgeLabel: '1:00 · Rank Correlation',
    scenes: [
      {
        id: 'sp-s1',
        startSec: 0,
        endSec: 15,
        title: {
          en: 'Scene 1 · Monotonic Curve: Straight Line Struggles',
          km: 'ឈុតទី ១ · ខ្សែកោងម៉ូណូតូន៖ បន្ទាត់ត្រង់មិនសមស្រប',
        },
        caption: {
          en: 'Even when Y rises strictly with every increase in X along an exponential curve, a straight linear fit misses the bend—causing Pearson r to underreport the true strength.',
          km: 'ទោះបី Y កើនឡើងជាលំដាប់រៀងរាល់ពេល X កើនឡើងតាមខ្សែកោងអិចស្ប៉ូណង់ស្យែលក៏ដោយ បន្ទាត់ត្រង់ Pearson វាស់មិនដល់ ១ ឡើយ ព្រោះទិន្នន័យកោង។',
        },
        spokenScript: {
          en: 'Suppose Y rises steadily every single time X grows, following an exponential curve. Because Pearson correlation only tests how closely points hug a rigid straight line, the bend in the curve creates large gaps from the line and pulls Pearson r well below 1.0, underestimating the true link.',
          km: 'ឧបមាថា Y កើនឡើងជានិច្ចរាល់ពេល X កើនឡើង ប៉ុន្តែជាទម្រង់ខ្សែកោងអិចស្ប៉ូណង់ស្យែល។ ដោយសារមេគុណភៀសុនវាស់បានតែបន្ទាត់ត្រង់ ភាពកោងនៃទិន្នន័យធ្វើឱ្យចំណុចឃ្លាតពីបន្ទាត់ត្រង់ ហើយបន្ទាបតម្លៃសហសម្ព័ន្ធឱ្យទាបជាងការពិត។',
        },
        formulaLatex: 'Y = e^{0.8X} \\implies r_{\\text{Pearson}} < 1',
        keyTakeaway: {
          en: 'Pearson r drops whenever a strong relationship is curved rather than linear.',
          km: 'Pearson r ធ្លាក់ចុះនៅពេលទំនាក់ទំនងមានរាងកោង ទោះកើនឡើងស្របគ្នាក៏ដោយ។',
        },
      },
      {
        id: 'sp-s2',
        startSec: 15,
        endSec: 30,
        title: {
          en: 'Scene 2 · Morphing Raw Values to Integer Ranks',
          km: 'ឈុតទី ២ · ការបម្លែងតម្លៃដើមទៅជាតារាងចំណាត់ថ្នាក់ (Ranks)',
        },
        caption: {
          en: 'Spearman replaces raw measurements with sorted integer ranks (1, 2, 3, ...). Equal steps in rank snap any strictly monotonic curve straight onto a perfect 45° diagonal (ρ = 1.00)!',
          km: 'Spearman ជំនួសតម្លៃដើមដោយលេខរៀងលំដាប់ (1, 2, 3, ...)។ ភ្លាមៗនោះ ខ្សែកោងម៉ូណូតូនទាំងអស់ប្រែត្រង់ជាបន្ទាត់ទ្រូង 45° ដែលមាន ρ = 1.00!',
        },
        spokenScript: {
          en: 'Spearman fixes this curve problem with an elegant idea: forget the exact magnitudes and replace every X and Y value with its sorted rank order—first, second, third, and so on. Watch the curved points snap into equally spaced grid positions along a clean 45-degree diagonal, giving Spearman rho equals 1.0.',
          km: 'មេគុណស្ពែរមែនដោះស្រាយបញ្ហានេះដោយវិធីដ៏ឆ្លាតវៃ គឺជំនួសតម្លៃលេខដើមទាំងអស់ដោយចំណាត់ថ្នាក់លំដាប់ ទីមួយ ទីពីរ ទីបី។ សូមមើលចំណុចខ្សែកោងរំកិលតម្រៀបគ្នាជាបន្ទាត់ត្រង់សែសិបប្រាំដឺក្រេភ្លាម ដែលផ្តល់តម្លៃស្ពែរមែនស្មើមួយពេញ។',
        },
        formulaLatex: '\\rho = \\text{Pearson}\\big(\\text{rank}(X),\\; \\text{rank}(Y)\\big) = 1.00',
        keyTakeaway: {
          en: 'Spearman ρ equals Pearson r applied to ranks—detecting any monotonic trend.',
          km: 'Spearman ρ គឺជា Pearson r គណនាលើចំណាត់ថ្នាក់—ចាប់បានគ្រប់ទំនោរម៉ូណូតូន។',
        },
      },
      {
        id: 'sp-s3',
        startSec: 30,
        endSec: 45,
        title: {
          en: 'Scene 3 · Outlier Explosion: Y₄ Jumps 2 → 1000',
          km: 'ឈុតទី ៣ · ការផ្ទុះតម្លៃ Outlier៖ Y₄ លោតពី 2 → 1000',
        },
        caption: {
          en: 'Now stress-test both metrics: when one data-entry error spikes Y₄ from 2 to 1,000, squared deviations hijack Pearson r—flipping a flat −0.10 cloud into a fake +0.98!',
          km: 'ឥឡូវសូមធ្វើតេស្ត Outliers៖ គ្រាន់តែកំហុសវាយទិន្នន័យ ១ ចំណុចលោតពី 2 ទៅ 1,000 តម្លៃ Pearson r លោតក្រឡាប់ពី −0.10 ទៅជា +0.98 ភ្លាម!',
        },
        spokenScript: {
          en: 'Here is a second superpower of Spearman: outlier resistance. Imagine a tiny dataset with almost zero correlation, around minus 0.1. If a single typo accidentally sends one point sky-high to 1,000, Pearson correlation gets completely hijacked by that single leverage point and falsely reports plus 0.98.',
          km: 'ឥឡូវសូមមើលចំណុចខ្លាំងទីពីររបស់ស្ពែរមែន គឺភាពធន់នឹងតម្លៃដាច់ស្រយាល។ ឧបមាថាទិន្នន័យដើមគ្មានទំនាក់ទំនងទេ ប៉ុន្តែគ្រាន់តែមានកំហុសវាយតួលេខមួយចំណុចហោះឡើងដល់មួយពាន់ មេគុណភៀសុនត្រូវបានទាញក្រឡាប់ឱ្យចេញលទ្ធផលក្លែងក្លាយដល់បូកសូន្យចុចកៅសិបប្រាំបី។',
        },
        formulaLatex: 'Y_4 \\uparrow 1000 \\implies r \\text{ hijacked} \\to +0.98',
        keyTakeaway: {
          en: 'A single extreme outlier can completely reverse the sign and magnitude of Pearson r.',
          km: 'Outlier តែ ១ គ្រាប់អាចបង្វែរសញ្ញា និងបំផ្លាញភាពត្រឹមត្រូវនៃ Pearson r។',
        },
      },
      {
        id: 'sp-s4',
        startSec: 45,
        endSec: 60,
        title: {
          en: 'Scene 4 · Spearman Rank Stays 100% Immune',
          km: 'ឈុតទី ៤ · មេគុណ Spearman រក្សាតម្លៃដើមមិនរង្គើ',
        },
        caption: {
          en: 'Whether Y₄ is 20 or 1,000,000, it stays rank #5 in line. Because ranks ignore extreme gaps, Spearman ρ remains completely immune to heavy-tailed outliers.',
          km: 'ទោះ Y₄ ស្មើ 20 ឬ 1,000,000 ក៏ដោយ ចំណាត់ថ្នាក់របស់វានៅតែលេខ ៥ ដដែល ធ្វើឱ្យមេគុណ Spearman ρ នៅរក្សាតម្លៃដើម ១០០% មិនប្រែប្រួលឡើយ!',
        },
        spokenScript: {
          en: 'Watch why Spearman stays calm during the exact same outlier spike. Whether that top point sits at 20, 1,000, or even one million, it is still just rank number five out of five. Because the rank table does not change at all, Spearman rho stays rock solid and protects your analysis.',
          km: 'ប៉ុន្តែសូមមើលថាតើហេតុអ្វីស្ពែរមែនមិនរង្គើទាល់តែសោះ។ ទោះចំណុចកំពូលនោះឡើងដល់ម្ភៃ មួយពាន់ ឬមួយលានក៏ដោយ ចំណាត់ថ្នាក់របស់វានៅតែជាប់លេខប្រាំដដែល។ ដោយសារតារាងលំដាប់មិនប្រែប្រួល មេគុណស្ពែរមែនរក្សាលទ្ធផលពិតដដែល និងការពារការវិភាគរបស់អ្នកពីទិន្នន័យខុសប្រក្រតី។',
        },
        formulaLatex: '\\text{rank}(1000) = 5 \\implies \\rho \\text{ invariant!}',
        keyTakeaway: {
          en: 'Always compute both r and ρ: big gaps signal either nonlinearity or hidden outliers.',
          km: 'គណនាទាំង r និង ρ ជានិច្ច៖ បើលេខទាំងពីរខុសគ្នាខ្លាំង បង្ហាញថាមានភាពកោង ឬ Outliers។',
        },
      },
    ],
  },
  {
    id: 'log_scale_and_anscombe',
    slideRangeLabel: 'Slides 16–20',
    targetPages: [16, 17, 18, 19, 20],
    durationSec: 56,
    title: {
      en: 'Log₁₀ Scale Linearization & Anscombe’s Quartet Warning',
      km: 'ការពន្លាតអ័ក្ស Log₁₀ និងមេរៀនព្រមានពី Anscombe’s Quartet',
    },
    subtitle: {
      en: 'How log₁₀(GDP) straightens curved trends & why 4 plots share r = 0.816',
      km: 'របៀបដែល log₁₀(GDP) ធ្វើឱ្យក្រាហ្វត្រង់ និងមូលហេតុដែលត្រូវមើលក្រាហ្វជានិច្ច',
    },
    badgeLabel: '0:56 · Log & Anscombe',
    scenes: [
      {
        id: 'log-s1',
        startSec: 0,
        endSec: 14,
        title: {
          en: 'Scene 1 · Linear X Squashes Low-Income Nations',
          km: 'ឈុតទី ១ · មាត្រដ្ឋានធម្មតាប្រជ្រៀតប្រទេសចំណូលទាបនៅខាងឆ្វេង',
        },
        caption: {
          en: 'In Gapminder, GDP per capita spans $240 to $49,000. On a raw linear X-axis, 70% of countries cram tightly against the left wall while lifeExp bends steeply—limiting r to 0.679.',
          km: 'GDP ប្រែប្រួលពី $240 ដល់ $49,000។ លើអ័ក្សធម្មតា ប្រទេស 70% ប្រជ្រៀតគ្នានៅជញ្ជាំងឆ្វេង រួចកោងឡើងខ្លាំង ធ្វើឱ្យ r ធ្លាក់នៅត្រឹម 0.679។',
        },
        spokenScript: {
          en: 'In Gapminder, GDP per capita ranges from a few hundred dollars to nearly fifty thousand dollars. On a standard linear axis, equal dollar gaps squeeze seventy percent of countries tightly against the left wall, turning the health-versus-wealth relationship into a steep curve with r of only 0.679.',
          km: 'ក្នុងទិន្នន័យពិភពលោក ផលិតផលក្នុងស្រុកសរុបក្នុងមនុស្សម្នាក់លាតសន្ធឹងពីរាប់រយដុល្លារ ដល់ជិតប្រាំម៉ឺនដុល្លារ។ លើអ័ក្សធម្មតា ប្រទេសភាគច្រើនត្រូវបានបង្ហាប់ប្រជ្រៀតគ្នានៅខាងឆ្វេង បង្កើតជាខ្សែកោងចោត ដែលធ្វើឱ្យមេគុណភៀសុនវាស់បានត្រឹមសូន្យចុចប្រាំមួយប្រាំពីរប្រាំបួន។',
        },
        formulaLatex: '\\text{Linear GDP}:\\; r = 0.679 \\;(\\text{Curved})',
        keyTakeaway: {
          en: 'Linear axes compress multiplicative wealth, hiding clear economic structure.',
          km: 'អ័ក្សធម្មតាបង្ហាប់ទិន្នន័យចំណូលដែលកើនតាមមេគុណ ធ្វើឱ្យមើលមិនឃើញលំនាំ។',
        },
      },
      {
        id: 'log-s2',
        startSec: 14,
        endSec: 28,
        title: {
          en: 'Scene 2 · Applying log₁₀(X) Unpacks Straight Line',
          km: 'ឈុតទី ២ · ការប្រើ log₁₀(X) ពន្លាតចំណុចឱ្យក្លាយជាបន្ទាត់ត្រង់',
        },
        caption: {
          en: 'Applying log₁₀(GDP) spaces ×10 jumps ($1k → $10k → $100k) equally. The squeezed nations unpack smoothly into a straight linear band, lifting Pearson r from 0.679 to 0.809!',
          km: 'ពេលប្តូរមក log₁₀(GDP) គម្លាតគុណ ១០ ($1k → $10k) មានចម្ងាយស្មើគ្នា ធ្វើឱ្យចំណុចលាតត្រង់ជាបន្ទាត់ ហើយតម្លៃ r ហក់ឡើងពី 0.679 ដល់ 0.809!',
        },
        spokenScript: {
          en: 'Watch what happens when we apply a base-10 logarithm transform to GDP. Equal visual distances now represent ten-fold percentage growth—from one thousand to ten thousand dollars. Instantly, the crowded cloud unpacks into a clean straight band, boosting linear correlation from 0.679 up to 0.809.',
          km: 'ឥឡូវសូមមើលពេលយើងប្រើបម្លែងលោការីតគោលដប់លើអ័ក្សចំណូល។ ចម្ងាយស្មើគ្នានៅលើក្រាហ្វពេលនេះតំណាងឱ្យកំណើនគុណនឹងដប់ដង ឧទាហរណ៍ពីមួយពាន់ទៅមួយម៉ឺនដុល្លារ។ ភ្លាមៗនោះ ចំណុចប្រជ្រៀតគ្នាត្រូវបានពន្លាតរាបស្មើជាបន្ទាត់ត្រង់ ហើយមេគុណភៀសុនកើនដល់សូន្យចុចប្រាំបីសូន្យប្រាំបួន។',
        },
        formulaLatex: '\\log_{10}(\\text{GDP}):\\; r:\\; 0.679 \\longrightarrow 0.809',
        keyTakeaway: {
          en: 'Log₁₀ linearizes proportional growth—essential before fitting Pearson r or linear regression.',
          km: 'Log₁₀ បម្លែងកំណើនភាគរយឱ្យត្រង់—ចាំបាច់បំផុតមុនប្រើ Pearson r ឬ Regression។',
        },
      },
      {
        id: 'log-s3',
        startSec: 28,
        endSec: 42,
        title: {
          en: 'Scene 3 · Anscombe’s 4 Datasets Share r = 0.816',
          km: 'ឈុតទី ៣ · ទិន្នន័យ Anscombe ទាំង ៤ មាន r = 0.816 ស្មើគ្នាបេះបិទ',
        },
        caption: {
          en: 'Anscombe’s famous Quartet proves numbers alone can deceive: Plot I is a noisy line, II is a clean parabola, III has 1 high outlier, and IV is vertical—yet ALL four share identical r = 0.816!',
          km: 'ទិន្នន័យ Anscombe ទាំង ៤ មានមធ្យមភាគ វ៉ារ្យង់ និង r = 0.816 ស្មើគ្នាបេះបិទ៖ ក្រាហ្វ I ត្រង់, II កោងប៉ារ៉ាបូល, III មាន Outlier និង IV បញ្ឈរ!',
        },
        spokenScript: {
          en: 'Francis Anscombe created a famous four-part demonstration every analyst must remember. All four datasets share the exact same means, the same variances, the same regression line, and the exact same correlation of 0.816. Yet visually, one is linear, one is curved, one has an outlier, and one is vertical.',
          km: 'លោកហ្វ្រង់ស៊ីស អានស្កុម បានបង្កើតឧទាហរណ៍ដ៏ល្បីមួយដែលអ្នកវិភាគគ្រប់រូបត្រូវចងចាំ។ សំណុំទិន្នន័យទាំងបួនមានមធ្យមភាគ បន្ទាត់តម្រែតម្រង់ និងមេគុណសហសម្ព័ន្ធស្មើគ្នាបេះបិទគឺសូន្យចុចប៉ែតមួយប្រាំមួយ ប៉ុន្តែរូបរាងពិតប្រាកដរបស់វាខុសគ្នាទាំងស្រុងទាំងបួនផ្ទាំង។',
        },
        formulaLatex: '\\bar{x}=9,\\; \\bar{y}=7.5,\\; r=0.816 \\;(\\text{All 4 Plots!})',
        keyTakeaway: {
          en: 'Identical regression and correlation numbers can mask wildly different geometries.',
          km: 'តួលេខស្ថិតិ និងសមីការដូចគ្នាបេះបិទ អាចលាក់រូបរាងខុសគ្នាទាំងស្រុង។',
        },
      },
      {
        id: 'log-s4',
        startSec: 42,
        endSec: 56,
        title: {
          en: 'Scene 4 · Golden Visualization Law',
          km: 'ឈុតទី ៤ · វិធានមាស៖ ត្រូវមើលក្រាហ្វជានិច្ចមុនសន្និដ្ឋាន',
        },
        caption: {
          en: 'Statistical indicators quantify strength, while charts validate assumptions. Always inspect a Scatterplot before reporting Pearson r or building predictive models.',
          km: 'តួលេខសូចនាករប្រាប់ពីកម្រិតខ្លាំងខ្សោយ ចំណែកក្រាហ្វផ្ទៀងផ្ទាត់រូបរាងពិត។ ត្រូវគូសក្រាហ្វ Scatterplot ផ្ទៀងផ្ទាត់ជានិច្ចមុននឹងធ្វើសេចក្តីសន្និដ្ឋាន។',
        },
        spokenScript: {
          en: 'That brings us to the golden visualization rule of exploratory analysis: statistics and graphics are partners, not substitutes. Compute numerical indicators like Pearson r to rank relationships quickly, then always verify the highest-scoring pairs on a scatter plot before drawing conclusions.',
          km: 'ដូច្នេះ វិធានមាសក្នុងការវិភាគទិន្នន័យគឺ តួលេខស្ថិតិ និងក្រាហ្វត្រូវដើរទន្ទឹមគ្នា មិនអាចខ្វះមួយណាបានឡើយ។ ចូរគណនាសូចនាករស្ថិតិជាមុន ហើយត្រូវគូសក្រាហ្វផ្ទៀងផ្ទាត់រូបរាងពិតជានិច្ច មុននឹងសន្និដ្ឋាន ឬសង់ម៉ូដែល។',
        },
        formulaLatex: '\\text{Insight} = \\text{Numeric } r + \\text{Visual Scatter}',
        keyTakeaway: {
          en: 'Compute numerical indicators first, verify graphically second, and trust conclusions supported by both.',
          km: 'គណនាសូចនាករជាមុន ផ្ទៀងផ្ទាត់លើក្រាហ្វជាក្រោយ ទើបលទ្ធផលគួរឱ្យទុកចិត្ត។',
        },
      },
    ],
  },
  {
    id: 'anova_variance_decomposition',
    slideRangeLabel: 'Slides 21–27',
    targetPages: [21, 22, 23, 24, 25, 26, 27],
    durationSec: 60,
    title: {
      en: 'ANOVA Variance Decomposition (TSS = BSS + WSS) & η²',
      km: 'ការបំបែកវ៉ារ្យង់ ANOVA (TSS = BSS + WSS) និងមេគុណ η²',
    },
    subtitle: {
      en: 'How Quantitative × Categorical measures what % of variance is explained by group labels',
      km: 'របៀបវាស់ថាតើប្រភេទក្រុម (ទ្វីប) អាចពន្យល់ការប្រែប្រួលអថេរបរិមាណបានប៉ុន្មានភាគរយ',
    },
    badgeLabel: '1:00 · ANOVA & Eta²',
    scenes: [
      {
        id: 'an-s1',
        startSec: 0,
        endSec: 15,
        title: {
          en: 'Scene 1 · Total Sum of Squares (TSS) Around Global Mean',
          km: 'ឈុតទី ១ · វ៉ារ្យង់សរុប (TSS) ធៀបនឹងមធ្យមភាគរួម ȳ',
        },
        caption: {
          en: 'Step 1 (Quant × Categorical): temporarily ignore continent labels and measure every nation’s squared distance from the single world average ȳ = 67.01y to obtain Total Sum of Squares (TSS).',
          km: 'ជំហានទី ១ (បរិមាណ × ប្រភេទ)៖ គិតមធ្យមភាគពិភពលោករួម ȳ = 67.01 ឆ្នាំ រួចវាស់គម្លាតការ៉េរបស់ប្រទេសទាំងអស់ធៀបនឹងបន្ទាត់រួមនេះ ដើម្បីរក TSS។',
        },
        spokenScript: {
          en: 'When comparing a numeric column like life expectancy against categories like continent, we use one-way ANOVA variance decomposition. First, pretend continent labels do not exist. Measure every country’s vertical distance from the single global average of 67 years, square those gaps, and sum them into Total Sum of Squares.',
          km: 'នៅពេលប្រៀបធៀបអថេរបរិមាណ ដូចជាអាយុរំពឹងរស់ ជាមួយអថេរប្រភេទដូចជាទ្វីប យើងប្រើវិធីបំបែកវ៉ារ្យង់ ANOVA។ ដំបូង យើងគណនាវ៉ារ្យង់សរុប TSS ដោយវាស់គម្លាតរបស់ប្រទេសនីមួយៗធៀបនឹងមធ្យមភាគពិភពលោករួមគឺហុកសិបប្រាំពីរឆ្នាំ។',
        },
        formulaLatex: '\\text{TSS} = \\sum_{k=1}^K \\sum_{i \\in I_k} (y_i - \\bar{y})^2',
        keyTakeaway: {
          en: 'TSS measures total variation across the entire dataset before grouping.',
          km: 'TSS វាស់ការបែកខ្ញែកសរុបទាំងអស់មុនពេលបែងចែកតាមក្រុម។',
        },
      },
      {
        id: 'an-s2',
        startSec: 15,
        endSec: 30,
        title: {
          en: 'Scene 2 · Between-Group Sum of Squares (BSS)',
          km: 'ឈុតទី ២ · វ៉ារ្យង់រវាងក្រុម (BSS)៖ មធ្យមភាគទ្វីបធៀបមធ្យមភាគរួម',
        },
        caption: {
          en: 'Next, replace each country with its continent mean ȳₖ: Africa sits low (~54.8y) while Europe sits high (~77.6y). Weighting each group’s gap from ȳ produces Between-Group Variance (BSS).',
          km: 'បន្ទាប់មក គណនាមធ្យមភាគតាមទ្វីបនីមួយៗ៖ អាហ្វ្រិក (~54.8 ឆ្នាំ) ធៀបនឹងអឺរ៉ុប (~77.6 ឆ្នាំ)។ គម្លាតរវាងមធ្យមភាគទ្វីប និងមធ្យមភាគរួមបង្កើតជា BSS។',
        },
        spokenScript: {
          en: 'Now turn on the continent labels. Each continent forms its own distinct level: Africa averages around 55 years, Asia and the Americas sit in the low seventies, and Europe reaches nearly 78 years. Summing the weighted squared gaps between each continent mean and the global mean gives the Between-Group Sum of Squares.',
          km: 'បន្ទាប់មក ទ្វីបនីមួយៗមានមធ្យមភាគដាច់ដោយឡែកពីគ្នា៖ អាហ្វ្រិកមានមធ្យមភាគប្រមាណហាសិបប្រាំឆ្នាំ ចំណែកអឺរ៉ុបឡើងដល់ជិតចិតសិបប្រាំបីឆ្នាំ។ គម្លាតរវាងមធ្យមភាគទ្វីបទាំងនេះធៀបនឹងមធ្យមភាគរួម បង្កើតបានជាវ៉ារ្យង់រវាងក្រុម BSS។',
        },
        formulaLatex: '\\text{BSS} = \\sum_{k=1}^K n_k(\\bar{y}_k - \\bar{y})^2',
        keyTakeaway: {
          en: 'Larger BSS means categories strongly separate the numeric variable’s averages.',
          km: 'BSS កាន់តែធំ បង្ហាញថាប្រភេទក្រុមនីមួយៗមានកម្រិតមធ្យមភាគខុសគ្នាកាន់តែខ្លាំង។',
        },
      },
      {
        id: 'an-s3',
        startSec: 30,
        endSec: 45,
        title: {
          en: 'Scene 3 · Within-Group Sum of Squares (WSS)',
          km: 'ឈុតទី ៣ · វ៉ារ្យង់ក្នុងក្រុម (WSS)៖ គម្លាតផ្ទៃក្នុងនៃទ្វីបនីមួយៗ',
        },
        caption: {
          en: 'Even inside the same continent, countries still differ from their local continent mean ȳₖ. Those internal residuals sum to WSS, and exact orthogonality ensures TSS = BSS + WSS.',
          km: 'ទោះនៅក្នុងទ្វីបតែមួយក៏ដោយ ប្រទេសនីមួយៗនៅតែមានគម្លាតធៀបនឹងមធ្យមភាគទ្វីបរបស់ខ្លួន ȳₖ។ ផលបូកគម្លាតផ្ទៃក្នុងនេះគឺ WSS ហើយ TSS = BSS + WSS ជានិច្ច។',
        },
        spokenScript: {
          en: 'Of course, knowing someone lives in Asia or Africa does not tell the whole story—countries still vary around their own continent mean. Those internal deviations form the Within-Group Sum of Squares. By mathematical orthogonality, Total Variance splits cleanly into Between Variance plus Within Variance.',
          km: 'ទោះជាយ៉ាងណា នៅក្នុងទ្វីបតែមួយ ប្រទេសនីមួយៗនៅតែមានគម្លាតផ្ទៃក្នុងធៀបនឹងមធ្យមភាគទ្វីបរបស់ខ្លួន ដូចជាជប៉ុន និងកម្ពុជានៅអាស៊ី។ គម្លាតផ្ទៃក្នុងនេះបង្កើតជា WSS ហើយតាមគណិតវិទ្យា វ៉ារ្យង់សរុបបំបែកដាច់ជា BSS បូកនឹង WSS។',
        },
        formulaLatex: '\\text{WSS} = \\sum_{k=1}^K \\sum_{i \\in I_k} (y_i - \\bar{y}_k)^2',
        keyTakeaway: {
          en: 'TSS = BSS + WSS cleanly partitions signal (between groups) from residual spread (within groups).',
          km: 'TSS = BSS + WSS បំបែកដាច់រវាងភាពខុសគ្នារវាងក្រុម និងគម្លាតសេសក្នុងក្រុម។',
        },
      },
      {
        id: 'an-s4',
        startSec: 45,
        endSec: 60,
        title: {
          en: 'Scene 4 · Correlation Ratio η² = BSS / TSS = 0.635',
          km: 'ឈុតទី ៤ · សមាមាត្រសហសម្ព័ន្ធ η² = BSS / TSS = 0.635',
        },
        caption: {
          en: 'Dividing BSS by TSS produces the Correlation Ratio η² = 0.635—proving that Continent alone explains 63.5% of global life-expectancy variance across 142 countries!',
          km: 'យក BSS ចែកនឹង TSS បានមេគុណ η² = 0.635 ដែលបញ្ជាក់ថាត្រឹមតែអថេរទ្វីបមួយ អាចពន្យល់ការប្រែប្រួលអាយុរំពឹងរស់ពិភពលោកបានដល់ 63.5%!',
        },
        spokenScript: {
          en: 'Finally, dividing Between Variance by Total Variance yields eta squared—just like R-squared in regression. In our 2007 Gapminder dataset, eta squared equals 0.635. That means knowing only a country’s continent already explains 63.5 percent of all variation in global life expectancy.',
          km: 'ជាចុងក្រោយ ការយកវ៉ារ្យង់រវាងក្រុម BSS ចែកនឹងវ៉ារ្យង់សរុប TSS ផ្តល់មេគុណអេតាការ៉េ ស្មើសូន្យចុចប្រាំមួយបីប្រាំ។ នេះមានន័យថា គ្រាន់តែដឹងពីទ្វីបរបស់ប្រទេសមួយ អាចពន្យល់ការប្រែប្រួលអាយុរំពឹងរស់ទូទាំងពិភពលោកបានដល់ហុកសិបបីចុចប្រាំភាគរយ។',
        },
        formulaLatex: '\\eta^2 = \\frac{\\text{BSS}}{\\text{TSS}} = 1 - \\frac{\\text{WSS}}{\\text{TSS}} \\in [0, 1]',
        keyTakeaway: {
          en: 'η² ∈ [0, 1] directly reports the % of numeric variance explained by a categorical label.',
          km: 'η² ∈ [0, 1] ប្រាប់ជាភាគរយថាតើអថេរប្រភេទអាចពន្យល់អថេរបរិមាណបានប៉ុន្មាន។',
        },
      },
    ],
  },
  {
    id: 'contingency_chi_square',
    slideRangeLabel: 'Slides 28–31',
    targetPages: [28, 29, 30, 31],
    durationSec: 60,
    title: {
      en: 'Contingency Tables, Expected Counts (Eᵢⱼ), χ² & Cramér’s Ṽ',
      km: 'តារាងខ្វែង តម្លៃរំពឹងទុក (Eᵢⱼ) តេស្ត Chi-Square (χ²) និង Cramér’s Ṽ',
    },
    subtitle: {
      en: 'Testing statistical independence between two categorical variables',
      km: 'ការធ្វើតេស្តភាពឯករាជ្យរវាងអថេរគុណភាពពីរ (ឧ. ទ្វីប និងកម្រិតចំណូល)',
    },
    badgeLabel: '1:00 · Chi² & Cramér’s V',
    scenes: [
      {
        id: 'chi-s1',
        startSec: 0,
        endSec: 15,
        title: {
          en: 'Scene 1 · Observed Contingency Grid (Oᵢⱼ)',
          km: 'ឈុតទី ១ · តារាងប្រេកង់សង្កេតជាក់ស្តែង (Oᵢⱼ)',
        },
        caption: {
          en: 'For two categorical variables (Continent × Income Tier), build an R×C contingency table recording Observed counts Oᵢⱼ inside every cell plus row and column marginal totals.',
          km: 'សម្រាប់អថេរប្រភេទពីរ (ទ្វីប × កម្រិតចំណូល) យើងរាប់ប្រេកង់ជាក់ស្តែង Oᵢⱼ ក្នុងក្រឡានីមួយៗ រួចបូកផលបូកសរុបតាមជួរដេក និងជួរឈរ។',
        },
        spokenScript: {
          en: 'How do we test correlation when both variables are categorical—such as Continent versus Income Level? First, we tabulate the actual observed counts O i j inside every combination cell, then sum each row total and each column total along the margins of the table.',
          km: 'តើយើងសាកល្បងទំនាក់ទំនងយ៉ាងដូចម្តេច នៅពេលអថេរទាំងពីរសុទ្ធតែជាប្រភេទក្រុម ដូចជាទ្វីប និងកម្រិតប្រាក់ចំណូល? ជាដំបូង យើងរាប់ចំនួនប្រទេសជាក់ស្តែងនៅក្នុងក្រឡានីមួយៗនៃតារាងខ្វែង រួចបូកផលបូកសរុបតាមជួរដេក និងជួរឈរ។',
        },
        formulaLatex: 'n = \\sum_{i=1}^R \\sum_{j=1}^C O_{ij}',
        keyTakeaway: {
          en: 'Observed table Oᵢⱼ captures the true joint count distribution across categories.',
          km: 'Oᵢⱼ គឺជាចំនួនទិន្នន័យពិតប្រាកដដែលសង្កេតឃើញនៅក្នុងក្រឡានីមួយៗ។',
        },
      },
      {
        id: 'chi-s2',
        startSec: 15,
        endSec: 30,
        title: {
          en: 'Scene 2 · Null Hypothesis H₀ Expected Count Eᵢⱼ',
          km: 'ឈុតទី ២ · ការគណនាតម្លៃរំពឹងទុក Eᵢⱼ ក្រោមសម្មតិកម្មឯករាជ្យ H₀',
        },
        caption: {
          en: 'Under null hypothesis H₀ (complete independence), probability multiplies: each cell should hold Eᵢⱼ = (Row Total × Col Total) / n. Compare these expected numbers against Oᵢⱼ.',
          km: 'ក្រោមសម្មតិកម្មឯករាជ្យ H₀ ក្រឡានីមួយៗគួរមាន Eᵢⱼ = (ផលបូកជួរដេក × ផលបូកជួរឈរ) / n ដើម្បីប្រៀបធៀបជាមួយតម្លៃពិត Oᵢⱼ។',
        },
        spokenScript: {
          en: 'Next, we ask what the table would look like if Continent and Income were completely unrelated. Under that independence baseline, each cell’s expected count E i j equals its row total multiplied by its column total, divided by the grand total sample size n.',
          km: 'បន្ទាប់មក យើងគណនាតម្លៃគោលក្រោមសម្មតិកម្មថាអថេរទាំងពីរគ្មានទំនាក់ទំនងគ្នាសោះ។ តម្លៃរំពឹងទុកក្នុងក្រឡានីមួយៗ ត្រូវគណនាដោយយកផលបូកជួរដេក គុណនឹងផលបូកជួរឈរ រួចចែកនឹងចំនួនទិន្នន័យសរុប។',
        },
        formulaLatex: 'E_{ij} = \\frac{n_{i\\cdot} \\times n_{\\cdot j}}{n}',
        keyTakeaway: {
          en: 'Eᵢⱼ computes the exact theoretical table expected if the two categories were independent.',
          km: 'Eᵢⱼ ជាតម្លៃទ្រឹស្តីដែលរំពឹងទុក ប្រសិនបើអថេរទាំងពីរឯករាជ្យពីគ្នា។',
        },
      },
      {
        id: 'chi-s3',
        startSec: 30,
        endSec: 45,
        title: {
          en: 'Scene 3 · Measuring Discrepancy via χ² Statistic',
          km: 'ឈុតទី ៣ · វាស់គម្លាតរវាង Oᵢⱼ និង Eᵢⱼ តាមរូបមន្ត χ²',
        },
        caption: {
          en: 'Cells where Observed Oᵢⱼ clashes sharply with Expected Eᵢⱼ (e.g., Europe High-Income and Africa Low-Income) light up red and push χ² high above the critical cutoff, rejecting H₀!',
          km: 'ក្រឡាដែល Oᵢⱼ ខុសគ្នាខ្លាំងពី Eᵢⱼ (ដូចជាអឺរ៉ុបចំណូលខ្ពស់ និងអាហ្វ្រិកចំណូលទាប) ជំរុញតម្លៃ χ² ឱ្យឡើងខ្ពស់ហួសតម្លៃកំណត់ ហើយបដិសេធភាពឯករាជ្យ H₀!',
        },
        spokenScript: {
          en: 'Now we compare Observed minus Expected in every cell, square it, divide by Expected, and sum across the whole table to get Pearson’s chi-squared statistic. Huge mismatches—like Europe having far more high-income nations and Africa having more low-income nations—push chi-squared sky-high, rejecting independence.',
          km: 'ឥឡូវ យើងវាស់គម្លាតរវាងតម្លៃសង្កេត និងតម្លៃរំពឹងទុកក្នុងគ្រប់ក្រឡា រួចបូកបញ្ចូលគ្នាជាតម្លៃខៃស្វែរ។ គម្លាតដ៏ធំនៅត្រង់ទ្វីបអឺរ៉ុបចំណូលខ្ពស់ និងអាហ្វ្រិកចំណូលទាប ធ្វើឱ្យតម្លៃខៃស្វែរកើនឡើងខ្ពស់ ដែលបញ្ជាក់ច្បាស់ថាអថេរទាំងពីរមានទំនាក់ទំនងគ្នា។',
        },
        formulaLatex: '\\chi^2 = \\sum_{i,j} \\frac{(O_{ij} - E_{ij})^2}{E_{ij}}, \\quad \\text{df} = (R-1)(C-1)',
        keyTakeaway: {
          en: 'Large χ² (and tiny p-value < 0.05) proves two categories are statistically dependent.',
          km: 'χ² ធំ (និង p-value តូចជាង 0.05) បញ្ជាក់ថាអថេរប្រភេទទាំងពីរពិតជាទាក់ទងគ្នា។',
        },
      },
      {
        id: 'chi-s4',
        startSec: 45,
        endSec: 60,
        title: {
          en: 'Scene 4 · Cramér’s Ṽ Normalizes Strength to [0, 1]',
          km: 'ឈុតទី ៤ · Cramér’s Ṽ បំប្លែងកម្រិតទំនាក់ទំនងមក [0, 1]',
        },
        caption: {
          en: 'Because χ² grows automatically when sample size n doubles, χ² alone cannot rank strength across datasets. Cramér’s V (and bias-corrected Ṽ) normalizes χ² onto a clean [0, 1] scale.',
          km: 'ដោយសារ χ² កើនឡើងតាមទំហំទិន្នន័យ n យើងត្រូវប្រើ Cramér’s V និង Ṽ (កែលម្អលម្អៀង) ដើម្បីបង្រួមកម្រិតទំនាក់ទំនងមកចន្លោះ [0, 1]។',
        },
        spokenScript: {
          en: 'Be careful: chi-squared tells us significance, not strength, because doubling your dataset automatically doubles chi-squared. To measure true effect size on a zero-to-one scale, we compute Cramér’s V—and its bias-corrected version V-tilde—allowing fair comparison across any sample size or table shape.',
          km: 'ប៉ុន្តែត្រូវប្រុងប្រយ័ត្ន៖ តម្លៃខៃស្វែរកើនឡើងដោយស្វ័យប្រវត្តិតាមចំនួនទិន្នន័យសរុប។ ដើម្បីវាស់កម្រិតទំនាក់ទំនងពិតប្រាកដលើខ្នាតពីសូន្យដល់មួយ យើងប្រើមេគុណក្រាមែរ វី និង វីកែលម្អ ដែលអាចប្រៀបធៀបសំណុំទិន្នន័យតូច និងធំបានស្មើភាពគ្នា។',
        },
        formulaLatex: 'V = \\sqrt{\\frac{\\chi^2}{n \\cdot \\min(R-1,\\, C-1)}} \\in [0, 1]',
        keyTakeaway: {
          en: 'Use χ² for hypothesis testing (p-value) and Cramér’s Ṽ to measure association strength [0, 1].',
          km: 'ប្រើ χ² សម្រាប់តេស្តសម្មតិកម្ម និងប្រើ Cramér’s Ṽ ដើម្បីវាស់កម្រិតខ្លាំងខ្សោយ [0, 1]។',
        },
      },
    ],
  },
  {
    id: 'mosaic_treemap_and_spaghetti',
    slideRangeLabel: 'Slides 32–35',
    targetPages: [32, 33, 34, 35],
    durationSec: 52,
    title: {
      en: 'Treemaps, 100% Stacked Bars & Untangling Spaghetti Lineplots',
      km: 'ក្រាហ្វ Treemap របារ 100% និងវិធីដោះស្រាយក្រាហ្វសរសៃមី (Spaghetti Plot)',
    },
    subtitle: {
      en: 'Visual best practices for Categorical pairs and High-density Time Series',
      km: 'បច្ចេកទេសបង្ហាញក្រាហ្វប្រភេទក្រុម និងខ្សែបន្ទាត់ពេលវេលាដែលមានទិន្នន័យច្រើន',
    },
    badgeLabel: '0:52 · Visual Clarity',
    scenes: [
      {
        id: 'spag-s1',
        startSec: 0,
        endSec: 13,
        title: {
          en: 'Scene 1 · 100% Normalized Stacked Bars & Treemaps',
          km: 'ឈុតទី ១ · របារភាគរយ 100% និងក្រាហ្វផ្ទៃ Treemap',
        },
        caption: {
          en: 'Raw count bars mislead when groups have unequal sizes (52 African nations vs 2 Oceania nations). 100% stacked columns and Treemaps compare conditional proportions P(Y | X) fairly.',
          km: 'របាររាប់ចំនួនធម្មតាងាយធ្វើឱ្យច្រឡំពេលក្រុមមានទំហំខុសគ្នា (ឧ. អាហ្វ្រិក 52 vs អូសេអានី 2)។ របារ 100% និង Treemap ជួយប្រៀបធៀបសមាមាត្រភាគរយបានស្មើភាពគ្នា។',
        },
        spokenScript: {
          en: 'When visualizing two categories with unequal group sizes—like fifty-two countries in Africa versus only two in Oceania—raw count bars hide proportions. Normalizing every column to 100 percent, or using an area-proportional treemap, reveals conditional shares cleanly at a glance.',
          km: 'នៅពេលគូសក្រាហ្វប្រភេទក្រុមដែលមានចំនួនខុសគ្នាខ្លាំង ដូចជាអាហ្វ្រិកមានហាសិបពីរប្រទេស ធៀបនឹងអូសេអានីមានតែពីរប្រទេស ការប្រើរបាររាប់ចំនួនធម្មតាពិបាកប្រៀបធៀបណាស់។ របារភាគរយមួយរយភាគរយ និងក្រាហ្វផ្ទៃជួយឱ្យយើងមើលសមាមាត្របានស្មើភាពគ្នា។',
        },
        formulaLatex: 'P(\\text{Cat } j \\mid \\text{Group } i) = \\frac{O_{ij}}{n_{i\\cdot}} \\times 100\\%',
        keyTakeaway: {
          en: '100% stacked bars compare proportions fairly regardless of group headcount.',
          km: 'របារ 100% ប្រៀបធៀបសមាមាត្រភាគរយបានត្រឹមត្រូវ ទោះក្រុមតូចឬធំខុសគ្នាក៏ដោយ។',
        },
      },
      {
        id: 'spag-s2',
        startSec: 13,
        endSec: 26,
        title: {
          en: 'Scene 2 · The Unreadable 142-Line Spaghetti Plot',
          km: 'ឈុតទី ២ · បញ្ហាក្រាហ្វសរសៃមី (Spaghetti Plot) ដែលមើលមិនយល់',
        },
        caption: {
          en: 'Plotting all 142 country trajectories from 1952 to 2007 on one chart with 142 rainbow colors creates an unreadable tangled "Spaghetti Plot" where every insight gets buried.',
          km: 'ការគូសខ្សែ 142 ប្រទេសពីឆ្នាំ 1952–2007 ព្រមគ្នាលើក្រាហ្វតែមួយជាមួយពណ៌ចម្រុះ បង្កើតជាក្រាហ្វសរសៃមីជំពាក់វាក់វិន ដែលគ្មាននរណាអាចអានដឹងរឿងឡើយ។',
        },
        spokenScript: {
          en: 'Now look at a classic time-series mistake: plotting all 142 country life-expectancy lines on a single canvas with rainbow colors. Instead of telling a clear story, the overlapping trajectories collapse into a chaotic tangled spaghetti plot that overwhelms the human eye.',
          km: 'ឥឡូវសូមមើលកំហុសដែលជួបញឹកញាប់បំផុតក្នុងក្រាហ្វពេលវេលា៖ ការគូសខ្សែទាំងមួយរយសែសិបពីរប្រទេសចូលលើផ្ទាំងតែមួយជាមួយពណ៌ចម្រុះ។ លទ្ធផលគឺខ្សែជំពាក់វាក់វិនគ្នាដូចសរសៃមី ធ្វើឱ្យអ្នកមើលវង្វេងភ្នែក និងរកសាច់រឿងមិនឃើញឡើយ។',
        },
        formulaLatex: '\\text{Overplotting} \\propto K_{\\text{lines}} = 142',
        keyTakeaway: {
          en: 'Overplotting dozens of colored lines destroys visual storytelling completely.',
          km: 'ការគូសខ្សែពណ៌ចម្រុះច្រើនត្រួតស៊ីគ្នាបំផ្លាញសមត្ថភាពទំនាក់ទំនងនៃក្រាហ្វ។',
        },
      },
      {
        id: 'spag-s3',
        startSec: 26,
        endSec: 39,
        title: {
          en: 'Scene 3 · Focus + Context (Fade Background to Gray)',
          km: 'ឈុតទី ៣ · បច្ចេកទេស Focus + Context (បន្សាបខ្សែផ្សេងជាពណ៌ប្រផេះ)',
        },
        caption: {
          en: 'Apply Focus + Context: mute the 139 background nations to translucent gray (α = 0.15) while coloring only focal stories—Cambodia’s dramatic dip & recovery vs Australia/NZ.',
          km: 'អនុវត្ត Focus + Context៖ បន្សាបខ្សែប្រទេសទូទៅជាពណ៌ប្រផេះស្រាល (α = 0.15) រួចរំលេចពណ៌ច្បាស់តែប្រទេសគោលដៅ (កម្ពុជា និងអូស្ត្រាលី/នូវែលសេឡង់)!',
        },
        spokenScript: {
          en: 'How do expert designers untangle a spaghetti plot? Technique one is Focus plus Context. Fade all background countries to soft gray so they remain visible as global context, then spotlight only your focal countries—like Cambodia’s historic recovery alongside Australia.',
          km: 'តើអ្នកជំនាញដោះស្រាយក្រាហ្វសរសៃមីយ៉ាងដូចម្តេច? វិធីទីមួយគឺ Focus plus Context។ យើងបន្សាបខ្សែប្រទេសទូទៅទៅជាពណ៌ប្រផេះស្រាលជាផ្ទៃក្រោយ រួចរំលេចពណ៌ច្បាស់តែប្រទេសសំខាន់ៗ ដូចជាការងើបឡើងវិញរបស់កម្ពុជា ធៀបនឹងអូស្ត្រាលី។',
        },
        formulaLatex: '\\alpha_{\\text{context}} = 0.15 \\quad \\text{vs} \\quad \\alpha_{\\text{focus}} = 1.0',
        keyTakeaway: {
          en: 'Gray background context keeps global reference while making focal lines pop instantly.',
          km: 'ប្រផេះផ្ទៃក្រោយរក្សាកម្រិតប្រៀបធៀបសកល ហើយពណ៌ច្បាស់រំលេចរឿងរ៉ាវសំខាន់ភ្លាមៗ។',
        },
      },
      {
        id: 'spag-s4',
        startSec: 39,
        endSec: 52,
        title: {
          en: 'Scene 4 · Small Multiples (Facet Panels by Continent)',
          km: 'ឈុតទី ៤ · ការបំបែកផ្ទាំងតូចៗ (Small Multiples) តាមទ្វីប',
        },
        caption: {
          en: 'Technique two is Small Multiples (Facet Grid): split lines into synchronized panels per continent with identical X/Y scales—allowing side-by-side comparison with zero overlap.',
          km: 'វិធីទីពីរគឺ Small Multiples៖ បំបែកក្រាហ្វជាប្រអប់តូចៗតាមទ្វីបនីមួយៗដោយប្រើមាត្រដ្ឋាន X និង Y ដូចគ្នា ដើម្បីប្រៀបធៀបគ្នាបានស្អាតគ្មានការជាន់ខ្សែឡើយ។',
        },
        spokenScript: {
          en: 'Technique two is Small Multiples. Instead of forcing every continent onto one crowded rectangle, split the chart into synchronized mini-panels with identical time and vertical scales. Viewers can instantly compare Africa, Asia, the Americas, and Europe without visual clutter.',
          km: 'វិធីទីពីរគឺ Small Multiples ឬការបំបែកផ្ទាំងតូចៗ។ ជំនួសឱ្យការដាក់ទ្វីបទាំងអស់ជាន់គ្នា យើងបំបែកជាប្រអប់ក្រាហ្វតូចៗតាមទ្វីបនីមួយៗដោយប្រើអ័ក្ស និងមាត្រដ្ឋានដូចគ្នា ដែលអាចប្រៀបធៀបបានច្បាស់ និងស្អាតបំផុត។',
        },
        formulaLatex: '\\text{Shared } (X, Y) \\text{ Scales} \\;\\times\\; K \\text{ Facet Panels}',
        keyTakeaway: {
          en: 'Small Multiples with shared axes eliminate clutter across large categorical groups.',
          km: 'Small Multiples ដែលមានអ័ក្សរួម លុបបំបាត់ភាពរញ៉េរញ៉ៃនៅពេលមានក្រុមច្រើន។',
        },
      },
    ],
  },
  {
    id: 'curse_of_dimensionality',
    slideRangeLabel: 'Slides 36–38',
    targetPages: [36, 37, 38],
    durationSec: 56,
    title: {
      en: 'O(p²) Pairplot Explosion & Curse of Dimensionality',
      km: 'កំណើនផ្ទុះគូអថេរ O(p²) និងបញ្ហាវិមាត្រខ្ពស់ (Curse of Dimensionality)',
    },
    subtitle: {
      en: 'Why screening indicators first beats plotting p(p-1)/2 charts & why distances collapse',
      km: 'ហេតុអ្វីត្រូវរកសូចនាករមុនគូសក្រាហ្វ p(p-1)/2 និងមូលហេតុដែលលំហទទេស្អាតនៅវិមាត្រខ្ពស់',
    },
    badgeLabel: '0:56 · High Dimensions',
    scenes: [
      {
        id: 'cod-s1',
        startSec: 0,
        endSec: 14,
        title: {
          en: 'Scene 1 · Combinatorial Explosion: p(p−1)/2 Pairs',
          km: 'ឈុតទី ១ · កំណើនការ៉េនៃគូក្រាហ្វ៖ p(p − 1)/2',
        },
        caption: {
          en: 'With p = 4 columns, a pairplot needs only 6 charts. At p = 20 it reaches 190 charts, and at p = 100 columns it explodes quadratically to 4,950 tiny unreadable scatter plots!',
          km: 'ពេលមាន ៤ អថេរ មានតែ ៦ គូក្រាហ្វ។ ពេល p = 20 ឡើងដល់ 190 ក្រាហ្វ; ឯពេល p = 100 ជួរឈរ វាផ្ទុះឡើងដល់ 4,950 ក្រាហ្វដែលមើលមិនរួចឡើយ!',
        },
        spokenScript: {
          en: 'Why can’t we just draw scatter plots for every pair in a big dataset? Because the number of pairs grows quadratically as p times p minus 1 over 2. Four columns require only six plots, twenty columns require 190 plots, and a hundred columns explode to 4,950 microscopic charts.',
          km: 'ហេតុអ្វីយើងមិនអាចគូសក្រាហ្វពង្រាយគ្រប់គូទាំងអស់នៅក្នុងទិន្នន័យធំ? ពីព្រោះចំនួនគូកើនឡើងជាការ៉េ។ បួនជួរឈរត្រូវការតែប្រាំមួយក្រាហ្វ ម្ភៃជួរឈរឡើងដល់មួយរយកៅសិបក្រាហ្វ ប៉ុន្តែមួយរយជួរឈរផ្ទុះឡើងដល់បួនពាន់ប្រាំបួនរយហាសិបក្រាហ្វ ដែលគ្មានមនុស្សណាអាចមើលអស់ឡើយ។',
        },
        formulaLatex: '\\text{Pairs}(p) = \\binom{p}{2} = \\frac{p(p-1)}{2} = \\mathcal{O}(p^2)',
        keyTakeaway: {
          en: 'Pairplots collapse above ~10 features due to O(p²) combinatorial growth.',
          km: 'Pairplot មិនអាចប្រើបានទេពេលមានអថេរលើសពី ១០ ដោយសារកំណើន O(p²)។',
        },
      },
      {
        id: 'cod-s2',
        startSec: 14,
        endSec: 28,
        title: {
          en: 'Scene 2 · Exponential Volume Sparsity (10ᵖ Cells)',
          km: 'ឈុតទី ២ · ភាពស្រឡះទទេនៃលំហអិចស្ប៉ូណង់ស្យែល (10ᵖ ប្រអប់)',
        },
        caption: {
          en: 'Even worse, dividing each dimension into 10 bins expands space exponentially: 10 cells in 1D → 100 in 2D → 1,000 in 3D → 10²⁰ in 20D! Fixed sample sizes become empty deserts.',
          km: 'កាន់តែធ្ងន់ធ្ងរ ការបន្ថែមវិមាត្រពង្រីកប្រអប់លំហជាអិចស្ប៉ូណង់ស្យែល (10 → 100 → 1,000 → 10²⁰) ធ្វើឱ្យទិន្នន័យក្លាយជាស្រឡះទទេស្អាតគ្មានសំណាកគ្រប់គ្រាន់។',
        },
        spokenScript: {
          en: 'Beyond chart overload lies an even deeper mathematical wall called the Curse of Dimensionality. If you split each axis into just ten bins, one dimension has ten cells, two dimensions have 100, and twenty dimensions explode to ten to the power twenty cells—leaving your dataset stranded in empty space.',
          km: 'ក្រៅពីបញ្ហាក្រាហ្វច្រើនពេក នៅមានបញ្ហាគណិតវិទ្យាមួយទៀតហៅថាបណ្តាសានៃវិមាត្រខ្ពស់។ ប្រសិនបើវិមាត្រនីមួយៗបែងចែកជាដប់ប្រអប់ មួយវិមាត្រមានដប់ប្រអប់ ពីរវិមាត្រមានមួយរយប្រអប់ ហើយម្ភៃវិមាត្រផ្ទុះដល់ដប់ស្វ័យគុណម្ភៃប្រអប់ ដែលធ្វើឱ្យលំហក្លាយជាវាលទទេស្អាត។',
        },
        formulaLatex: '\\text{Grid Cells}(p) = m^p \\quad (10^1 \\to 10^2 \\to 10^3)',
        keyTakeaway: {
          en: 'Volume expands exponentially (mᵖ), starving high-dimensional models of nearby points.',
          km: 'មាឌលំហកើនជាអិចស្ប៉ូណង់ស្យែល mᵖ ធ្វើឱ្យទិន្នន័យស្តើងពេកក្នុងលំហវិមាត្រខ្ពស់។',
        },
      },
      {
        id: 'cod-s3',
        startSec: 28,
        endSec: 42,
        title: {
          en: 'Scene 3 · Distance Concentration Breaks Nearest Neighbors',
          km: 'ឈុតទី ៣ · ចម្ងាយរវាងចំណុចជិតបំផុត និងឆ្ងាយបំផុតរលាយស្មើគ្នា',
        },
        caption: {
          en: 'In very high dimensions, the ratio (d_max − d_min)/d_min shrinks toward zero: every point becomes almost equidistant from every other point—blinding k-NN & K-Means.',
          km: 'នៅក្នុងវិមាត្រខ្ពស់ខ្លាំង ចម្ងាយជិតបំផុត និងឆ្ងាយបំផុតកៀកគ្នាសឹងស្មើគ្នា ដែលធ្វើឱ្យវិធីសាស្ត្រ Clustering ដូចជា K-Means និង k-NN បាត់បង់ភាពច្បាស់។',
        },
        spokenScript: {
          en: 'This sparsity triggers a bizarre geometric phenomenon called distance concentration. As dimensions increase toward infinity, the distance to the nearest neighbor and the distance to the farthest point converge toward the same number, making Euclidean distance metrics and K-Means clustering lose contrast.',
          km: 'ភាពស្តើងនៃលំហនេះបង្កើតបាតុភូតចម្លែកមួយទៀត គឺការប្រមូលផ្តុំចម្ងាយ។ នៅពេលវិមាត្រកើនខ្ពស់ខ្លាំង ចម្ងាយទៅចំណុចជិតបំផុត និងឆ្ងាយបំផុតមានតម្លៃប្រហាក់ប្រហែលគ្នា ដែលធ្វើឱ្យការបែងចែកកញ្ចុំទិន្នន័យបាត់បង់ភាពច្បាស់លាស់។',
        },
        formulaLatex: '\\lim_{p\\to\\infty} \\frac{d_{\\max} - d_{\\min}}{d_{\\min}} = 0',
        keyTakeaway: {
          en: 'High dimensions degrade Euclidean distance—requiring screening or dimensionality reduction.',
          km: 'វិមាត្រខ្ពស់បន្សាបអត្ថន័យចម្ងាយ Euclidean—ទាមទារការត្រង ឬបង្រួមវិមាត្រជាមុន។',
        },
      },
      {
        id: 'cod-s4',
        startSec: 42,
        endSec: 56,
        title: {
          en: 'Scene 4 · Golden EDA Rule: Indicator Heatmap Filter',
          km: 'ឈុតទី ៤ · វិធានមាស៖ ប្រើ Heatmap សូចនាករស្ថិតិត្រងមុនគូសក្រាហ្វ',
        },
        caption: {
          en: 'Solution: compute a numerical indicator matrix (r, ρ, η², Ṽ) across all 4,950 pairs first, highlight high-signal cells (|r| > 0.7), then plot only the winning pairs!',
          km: 'ដំណោះស្រាយ៖ គណនាតារាង Heatmap សូចនាករស្ថិតិជាមុន រួចចម្រាញ់យកតែគូណាដែលមានសញ្ញាខ្លាំង (|r| > 0.7) មកគូសក្រាហ្វពិនិត្យលម្អិត!',
        },
        spokenScript: {
          en: 'So how do professionals beat 4,950 pairs? Compute a fast numerical correlation heatmap matrix across all pairs first. Filter for the strongest indicators—such as absolute correlation above 0.7—and then draw detailed scatter plots only for those top-ranked pairs.',
          km: 'ដូច្នេះ វិធីដោះស្រាយរបស់អ្នកជំនាញគឺ កុំគូសក្រាហ្វទាំងអស់! ចូរគណនាម៉ាទ្រីសសូចនាករស្ថិតិជាមុនសិន បង្ហាញជាតារាងពណ៌ Heatmap រួចត្រងយកតែគូណាដែលមានសហសម្ព័ន្ធខ្លាំងលើសសូន្យចុចប្រាំពីរ ដើម្បីគូសក្រាហ្វពិនិត្យឱ្យច្បាស់។',
        },
        formulaLatex: '\\text{Filter } |r_{ij}| > \\tau \\;\\Longrightarrow\\; \\text{Inspect Top Pairs}',
        keyTakeaway: {
          en: 'Always compute indicator matrices first, then selectively visualize the strongest pairs.',
          km: 'ប្រើសូចនាករស្ថិតិត្រងទិន្នន័យជាមុន រួចទើបគូសក្រាហ្វចំណុចសំខាន់ៗជាក្រោយ។',
        },
      },
    ],
  },
  {
    id: 'pca_and_multivariate_synthesis',
    slideRangeLabel: 'Slides 39–41',
    targetPages: [39, 40, 41],
    durationSec: 56,
    title: {
      en: '5D Gapminder Encoding & PCA Maximum-Variance Rotation',
      km: 'ការបង្ហាញ 5 វិមាត្រព្រមគ្នា និងការបង្វិលអ័ក្ស PCA រកវ៉ារ្យង់អតិបរមា',
    },
    subtitle: {
      en: 'Compressing correlated dimensions onto orthogonal Principal Components PC₁ & PC₂',
      km: 'របៀបបង្រួមវិមាត្រទិន្នន័យដោយរក្សាទុកព័ត៌មានសំខាន់បំផុតតាមទិសដៅអ័ក្ស PC₁ និង PC₂',
    },
    badgeLabel: '0:56 · 5D & PCA',
    scenes: [
      {
        id: 'pca-s1',
        startSec: 0,
        endSec: 14,
        title: {
          en: 'Scene 1 · Packing 5 Variables into One Animated Chart',
          km: 'ឈុតទី ១ · ការបង្ហាញអថេរទាំង ៥ ព្រមគ្នាលើក្រាហ្វតែមួយ',
        },
        caption: {
          en: 'Hans Rosling’s Gapminder chart packs 5 dimensions onto a 2D screen: X = log(GDP), Y = lifeExp, Bubble Size = population, Color = continent, and Animation Time = 1952–2007.',
          km: 'ក្រាហ្វ Gapminder បង្ហាញ 5 វិមាត្រលើអេក្រង់ 2D៖ X = log(GDP), Y = អាយុរំពឹងរស់, ទំហំពពុះ = ប្រជាជន, ពណ៌ = ទ្វីប និងចលនាពេលវេលា = 1952–2007។',
        },
        spokenScript: {
          en: 'Before compressing dimensions mathematically, visual design already lets us pack five variables cleanly onto one flat screen: X position for income, Y position for life expectancy, bubble area for population, color hue for continent, and smooth frame animation for year.',
          km: 'មុននឹងឈានដល់ការបង្រួមវិមាត្រតាមគណិតវិទ្យា ការរចនាក្រាហ្វឆ្លាតវៃអាចបង្ហាញអថេរប្រាំផ្សេងគ្នាលើអេក្រង់តែមួយបាន គឺអ័ក្សដេកសម្រាប់ចំណូល អ័ក្សឈរសម្រាប់អាយុរំពឹងរស់ ទំហំពពុះសម្រាប់ប្រជាជន ពណ៌សម្រាប់ទ្វីប និងចលនាសម្រាប់ឆ្នាំ។',
        },
        formulaLatex: '(X, Y, \\text{Area}, \\text{Hue}, t) \\in \\mathbb{R}^5',
        keyTakeaway: {
          en: 'Thoughtful visual encoding communicates up to 5 variables clearly on a 2D canvas.',
          km: 'លក្ខណៈក្រាហ្វដូចជាទីតាំង ទំហំ ពណ៌ និងចលនា អាចបង្ហាញដល់ ៥ វិមាត្រព្រមគ្នា។',
        },
      },
      {
        id: 'pca-s2',
        startSec: 14,
        endSec: 28,
        title: {
          en: 'Scene 2 · Rotating Projection Axis to Maximize Variance',
          km: 'ឈុតទី ២ · ការបង្វិលអ័ក្សដើម្បីស្វែងរកវ៉ារ្យង់អតិបរមា',
        },
        caption: {
          en: 'When columns exceed 5, Principal Component Analysis (PCA) rotates a new unit vector w₁ around the centroid until the projected shadow captures maximum variance (λ₁).',
          km: 'ពេលអថេរលើសពី ៥ វិធីសាស្ត្រ PCA បង្វិលអ័ក្សថ្មី w₁ ជុំវិញចំណុចកណ្តាល រហូតដល់ចំណុចបញ្ចាំងលើអ័ក្សនោះរក្សាបានវ៉ារ្យង់ព័ត៌មានធំបំផុត (λ₁)។',
        },
        spokenScript: {
          en: 'When datasets have dozens of correlated numeric columns, we switch to Principal Component Analysis, or PCA. Watch the projection vector w1 rotate smoothly around the cloud center until it locks along the longest diagonal stretch—capturing the single direction of maximum information variance.',
          km: 'នៅពេលមានអថេរច្រើនរាប់សិបជួរឈរ យើងប្រើវិធីសាស្ត្រភីស៊ីអេ។ សូមមើលអ័ក្សថ្មីបង្វិលជុំវិញចំណុចកណ្តាល រហូតដល់តម្រង់តាមបណ្តោយទិន្នន័យវែងបំផុត ដែលជាទិសដៅរក្សាទុកព័ត៌មានវ៉ារ្យង់បានច្រើនបំផុត។',
        },
        formulaLatex: '\\max_{\\|\\mathbf{w}_1\\|=1} \\mathbf{w}_1^\\top \\boldsymbol{\\Sigma}\\, \\mathbf{w}_1 = \\lambda_1',
        keyTakeaway: {
          en: 'PC₁ aligns with the top eigenvector of covariance matrix Σ to preserve maximum signal.',
          km: 'PC₁ រកទិសដៅ Eigenvector ធំជាងគេនៃម៉ាទ្រីសកូវ៉ារ្យង់ ដើម្បីរក្សាទុកព័ត៌មានអតិបរមា។',
        },
      },
      {
        id: 'pca-s3',
        startSec: 28,
        endSec: 42,
        title: {
          en: 'Scene 3 · Orthogonal PC₂ & Dropping Low-Variance Noise',
          km: 'ឈុតទី ៣ · អ័ក្សកែង PC₂ និងការកាត់ចោលទិន្នន័យរំខាន (Noise)',
        },
        caption: {
          en: 'PC₂ locks strictly perpendicular (90°) to PC₁ so features become uncorrelated. Dropping minor low-eigenvalue axes shrinks dimensions while retaining over 90% structure!',
          km: 'អ័ក្ស PC₂ ត្រូវកែង 90° នឹង PC₁ ដើម្បីកុំឱ្យព័ត៌មានជាន់គ្នា។ ការកាត់អ័ក្សតូចៗដែលជា Noise ចោល ជួយបង្រួមវិមាត្រដោយនៅរក្សាទុកព័ត៌មានលើសពី 90%!',
        },
        spokenScript: {
          en: 'Next, PCA places a second axis PC2 strictly at ninety degrees to PC1, guaranteeing the new features are completely uncorrelated. By keeping only the top two or three principal components and discarding tiny low-variance axes, we eliminate noise and defeat the curse of dimensionality.',
          km: 'បន្ទាប់មក អ័ក្សទីពីរត្រូវដាក់ឱ្យកែងកៅសិបដឺក្រេជាមួយអ័ក្សទីមួយ ដើម្បីធានាថាអថេរថ្មីមិនជាន់ព័ត៌មានគ្នា។ ការរក្សាទុកតែអ័ក្សធំៗពីរបីដំបូង ហើយកាត់ចោលទិន្នន័យរំខានតូចៗ ជួយបង្រួមវិមាត្រដោយនៅរក្សាព័ត៌មានជាងកៅសិបភាគរយ។',
        },
        formulaLatex: '\\boldsymbol{\\Sigma}\\mathbf{w}_k = \\lambda_k\\mathbf{w}_k, \\quad \\mathbf{w}_1 \\perp \\mathbf{w}_2',
        keyTakeaway: {
          en: 'Orthogonal eigenvectors compress correlated columns into clean, noise-free axes.',
          km: 'អ័ក្សកែង Eigenvectors បង្រួមអថេរច្រើនទៅជាអ័ក្សថ្មីស្អាត គ្មានការជាន់ព័ត៌មាន។',
        },
      },
      {
        id: 'pca-s4',
        startSec: 42,
        endSec: 56,
        title: {
          en: 'Scene 4 · Complete EDA-to-Unsupervised Pipeline',
          km: 'ឈុតទី ៤ · សំយោគមេរៀន៖ ពី EDA ទៅកាន់ Unsupervised Learning',
        },
        caption: {
          en: 'Full workflow mastered: 1D distribution & outlier checks → 2D bivariate indicators (r, ρ, η², Ṽ) → indicator screening → PCA & Unsupervised Clustering!',
          km: 'សរុបដំណើរការពេញលេញ៖ ពិនិត្យអថេរទោល (1D) → វិភាគទ្វេអថេរ (r, ρ, η², Ṽ) → ត្រងសូចនាករលើ Heatmap → បង្រួមវិមាត្រ PCA និង Clustering!',
        },
        spokenScript: {
          en: 'You now have the complete exploratory workflow: start with univariate distributions and outlier fences, choose the right bivariate indicator and chart for each variable pair, screen high-dimensional matrices before plotting, and finish with PCA to power unsupervised clustering.',
          km: 'សរុបមក ឥឡូវនេះអ្នកមានដំណើរការវិភាគពេញលេញហើយ៖ ចាប់ផ្តើមពីរបាយទោល និងរបង Outliers ជ្រើសសូចនាករ និងក្រាហ្វទ្វេអថេរឱ្យត្រូវតាមប្រភេទ ប្រើម៉ាទ្រីសត្រងគូសំខាន់ៗ រួចបញ្ចប់ដោយភីស៊ីអេសម្រាប់បង្រួមវិមាត្រ និង Clustering។',
        },
        formulaLatex: '\\text{Variance Retained} = \\frac{\\lambda_1 + \\lambda_2}{\\sum_{j=1}^p \\lambda_j}',
        keyTakeaway: {
          en: 'Bivariate statistics form the direct mathematical backbone of PCA and Unsupervised Learning.',
          km: 'ការវិភាគទ្វេអថេរ គឺជាគ្រឹះគណិតវិទ្យាផ្ទាល់សម្រាប់ PCA និង Unsupervised Learning។',
        },
      },
    ],
  },
];

/**
 * Returns the tailored mini-video explainer module corresponding to any slide (1..41).
 */
export function getVideoExplainerForSlide(pageNumber: number): VideoExplainerModule {
  const found = VIDEO_EXPLAINER_MODULES.find((m) =>
    m.targetPages.includes(pageNumber)
  );
  return found || VIDEO_EXPLAINER_MODULES[0];
}
