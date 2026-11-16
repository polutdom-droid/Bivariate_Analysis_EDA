import { SlideBlueprint } from '../types/blueprint';

export interface ExamVivaQA {
  question: { en: string; km: string };
  answer: { en: string; km: string };
}

export interface BeyondSlideEnrichment {
  slideSpecificLectureNote: {
    title: { en: string; km: string };
    narrative: { en: string; km: string };
    keyTakeawayFormula: string;
  };
  mathematicalDerivation: {
    title: { en: string; km: string };
    proofSteps: { en: string; km: string }[];
  };
  intuitionTitle: { en: string; km: string };
  intuitionBody: { en: string; km: string };
  thresholdsAndPitfalls: {
    rule: { en: string; km: string };
    pitfall: { en: string; km: string };
  };
  stepByStepWalkthrough: {
    step1: { en: string; km: string };
    step2: { en: string; km: string };
    step3: { en: string; km: string };
  };
  examVivaQA: ExamVivaQA[];
  pythonCodeSnippet: string;
  pythonCodeExplanation: { en: string; km: string };
}

const SLIDE_SPECIFIC_NOTES: Record<
  number,
  {
    title: { en: string; km: string };
    narrative: { en: string; km: string };
    keyTakeawayFormula: string;
  }
> = {
  1: {
    title: {
      en: 'Slide 1 Masterclass: Role of Bivariate Analysis in EDA & Unsupervised Learning',
      km: 'មេរៀនស៊ីជម្រៅស្លាយទី ១៖ តួនាទីនៃការវិភាគទ្វេអថេរ (Bivariate Analysis) ក្នុង EDA និង Unsupervised Learning',
    },
    narrative: {
      en: 'In Exploratory Data Analysis (EDA) and Unsupervised Learning, we do not have a single predefined target label $Y$ to predict. Instead, our goal is to uncover the hidden dependency structure among all $p$ variables in a dataset $\\mathbf{X} \\in \\mathbb{R}^{n \\times p}$. Bivariate analysis is the fundamental bridge between inspecting isolated columns (Univariate) and building high-dimensional clustering or PCA models (Multivariate).',
      km: 'នៅក្នុងមុខវិជ្ជា Exploratory Data Analysis (EDA) និងការរៀនគ្មានការបង្រៀន (Unsupervised Learning) យើងមិនមានអថេរគោលដៅ $Y$ កំណត់ទុកជាមុនសម្រាប់ទស្សន៍ទាយនោះទេ។ គោលដៅរបស់យើងគឺស្វែងរករចនាសម្ព័ន្ធទំនាក់ទំនងដែលលាក់កំបាំងរវាងគ្រប់អថេរទាំង $p$ នៅក្នុងសំណុំទិន្នន័យ $\\mathbf{X} \\in \\mathbb{R}^{n \\times p}$។ ការវិភាគទ្វេអថេរ (Bivariate Analysis) គឺជាស្ពានភ្ជាប់ដ៏សំខាន់បំផុតរវាងការពិនិត្យអថេរទោល (Univariate) និងការវិភាគពហុអថេរ (ដូចជា PCA ឬ Clustering)។',
    },
    keyTakeawayFormula: '\\text{EDA Pipeline: Univariate } f(X) \\longrightarrow \\text{Bivariate } f(X, Y) \\longrightarrow \\text{Multivariate } f(X_1, \\dots, X_p)',
  },
  2: {
    title: {
      en: 'Slide 2 Masterclass: The 3-Case Taxonomy of Bivariate Analysis',
      km: 'មេរៀនស៊ីជម្រៅស្លាយទី ២៖ រចនាសម្ព័ន្ធមេរៀន និងការបែងចែកករណីទាំង ៣ នៃការវិភាគទ្វេអថេរ',
    },
    narrative: {
      en: 'Every bivariate problem in data science falls into one of exactly 3 mathematical regimes based on measurement scale: (1) Quantitative vs. Quantitative ($\\mathbb{R} \\times \\mathbb{R}$), (2) Quantitative vs. Qualitative ($\\mathbb{R} \\times \\mathcal{G}$), and (3) Qualitative vs. Qualitative ($\\mathcal{G}_1 \\times \\mathcal{G}_2$). Choosing the wrong indicator or chart for a pair’s data types is the #1 mistake in data analysis.',
      km: 'រាល់ចំណោទនៃការវិភាគទ្វេអថេរទាំងអស់ក្នុងវិទ្យាសាស្ត្រទិន្នន័យ ត្រូវបានបែងចែកជា ៣ ករណីដាច់ដោយឡែកពីគ្នាផ្អែកលើប្រភេទនៃអថេរ៖ (១) បរិមាណ ទល់នឹង បរិមាណ ($\\mathbb{R} \\times \\mathbb{R}$), (២) បរិមាណ ទល់នឹង គុណភាព ($\\mathbb{R} \\times \\mathcal{G}$), និង (៣) គុណភាព ទល់នឹង គុណភាព ($\\mathcal{G}_1 \\times \\mathcal{G}_2$)។ ការជ្រើសរើសរូបមន្តសូចនាករ និងប្រភេទក្រាហ្វឱ្យត្រូវតាមករណីទាំង ៣ នេះ គឺជាមូលដ្ឋានគ្រឹះដ៏សំខាន់បំផុតរបស់អ្នកវិភាគទិន្នន័យ។',
    },
    keyTakeawayFormula: '\\text{Pair }(X, Y) \\in \\big\\{ \\text{Quant}\\times\\text{Quant},\\; \\text{Quant}\\times\\text{Qual},\\; \\text{Qual}\\times\\text{Qual} \\big\\}',
  },
  3: {
    title: {
      en: 'Slide 3 Masterclass: Theoretical Grammar of Graphics (Wilke) vs. Interactive Implementation',
      km: 'មេរៀនស៊ីជម្រៅស្លាយទី ៣៖ ការគួបផ្សំរវាងទ្រឹស្តីរចនាក្រាហ្វ (Claus O. Wilke) និងការអនុវត្តកូដជាក់ស្តែង',
    },
    narrative: {
      en: 'Claus O. Wilke’s "Fundamentals of Data Visualization" teaches perceptual accuracy (why position beats angle, why log scales unpack multiplicative skew, and why color palettes must be perceptually uniform). Pairing Wilke’s theory with interactive Plotly and Google Looker Studio turns static academic plots into live decision-support systems.',
      km: 'សៀវភៅ «Fundamentals of Data Visualization» របស់លោក Claus O. Wilke បង្រៀនយើងអំពីច្បាប់នៃការមើលឃើញរបស់ភ្នែកមនុស្ស (ហេតុអ្វីទីតាំងចំណុចច្បាស់ជាងមុំ ហេតុអ្វីមាត្រដ្ឋានលោការីតជួយពន្លាតទិន្នន័យពេប និងការប្រើពណ៌សម្រាប់អ្នកពិការពណ៌)។ ការគួបផ្សំទ្រឹស្តីនេះជាមួយនឹងឧបករណ៍អន្តរកម្មដូចជា Plotly និង Google Looker Studio ជួយបម្លែងក្រាហ្វសិក្សាធម្មតាឱ្យទៅជាប្រព័ន្ធវិភាគទិន្នន័យកម្រិតអាជីព។',
    },
    keyTakeawayFormula: '\\text{Visual Perception Accuracy: Planar Position } (X, Y) > \\text{Length} > \\text{Area} > \\text{Color Hue} > \\text{Shape}',
  },
  4: {
    title: {
      en: 'Slide 4 Masterclass: Transitioning from 1D Marginal Distributions to 2D Joint Distributions',
      km: 'មេរៀនស៊ីជម្រៅស្លាយទី ៤៖ ការផ្លាស់ប្តូរពីការសិក្សាអថេរទោល $P(X)$ ទៅកាន់ការសិក្សាអថេររួម $P(X, Y)$',
    },
    narrative: {
      en: 'Knowing the marginal distributions $P(X)$ and $P(Y)$ separately does NOT tell you the joint distribution $P(X,Y)$! Two datasets can have the exact same mean $\\bar{x}$, variance $s_X^2$, mean $\\bar{y}$, and variance $s_Y^2$, yet one dataset has $r = +0.95$ while the other has $r = -0.95$ or forms a circle (Anscombe’s Quartet).',
      km: 'ការស្គាល់របាយអថេរទោល $P(X)$ និង $P(Y)$ ដាច់ដោយឡែកពីគ្នា មិនអាចប្រាប់យើងពីរបាយរួម $P(X,Y)$ បានឡើយ! សំណុំទិន្នន័យពីរអាចមានមធ្យមភាគ $\\bar{x}, \\bar{y}$ និងគម្លាតស្តង់ដារ $s_X, s_Y$ ស្មើគ្នាបេះបិទ ប៉ុន្តែសំណុំទិន្នន័យទីមួយមានទំនាក់ទំនងកើនឡើង ($r = +0.95$) រីឯសំណុំទិន្នន័យទីពីរមានទំនាក់ទំនងថយចុះ ($r = -0.95$) ឬជារង្វង់មូល (ដូចក្នុងឧទាហរណ៍ Anscombe’s Quartet)។',
    },
    keyTakeawayFormula: 'f_{X,Y}(x, y) \\neq f_X(x) \\cdot f_Y(y) \\iff X \\text{ and } Y \\text{ are statistically dependent}',
  },
  5: {
    title: {
      en: 'Slide 5 Masterclass: Reading the Gapminder 2007 Five-Number Summary & Skewness Diagnostic',
      km: 'មេរៀនស៊ីជម្រៅស្លាយទី ៥៖ ការអានតារាងស្ថិតិពិពណ៌នា Gapminder ២០០៧ និងការវិនិច្ឆ័យភាពពេបនៃទិន្នន័យ',
    },
    narrative: {
      en: 'Look closely at the 2007 cross-section ($n = 142$ countries): for `pop`, the Mean is $44.02\\text{M}$ while the Median ($50\\%$) is only $10.52\\text{M}$ ($\text{Mean}/\\text{Median} = 4.18\\times$)! For `gdpPercap`, the Mean is $\\$11,680.07$ while the Median is $\\$6,124.37$ ($1.91\\times$). By contrast, for `lifeExp`, the Mean ($67.01$ yrs) is slightly below the Median ($71.94$ yrs), indicating left-skewness caused by low-longevity countries in Sub-Saharan Africa.',
      km: 'សូមពិនិត្យមើលទិន្នន័យឆ្នាំ ២០០៧ ($n = 142$ ប្រទេស)៖ សម្រាប់ចំនួនប្រជាជន `pop` មធ្យមភាគគឺ $44.02\\text{M}$ ប៉ុន្តែមេដ្យាន ($50\\%$) មានត្រឹមតែ $10.52\\text{M}$ ប៉ុណ្ណោះ (មធ្យមភាគធំជាងមេដ្យានដល់ទៅ $4.18$ ដង)! សម្រាប់ `gdpPercap` មធ្យមភាគគឺ $\\$11,680.07$ ខណៈមេដ្យានគឺ $\\$6,124.37$ ($1.91$ ដង)។ ផ្ទុយទៅវិញ សម្រាប់អាយុរំពឹងរស់ `lifeExp` មធ្យមភាគ ($67.01$ ឆ្នាំ) គឺទាបជាងមេដ្យាន ($71.94$ ឆ្នាំ) ដែលបង្ហាញថាទិន្នន័យពេបទៅឆ្វេង ដោយសារប្រទេសមួយចំនួននៅអាហ្វ្រិកមានអាយុរំពឹងរស់ទាប។',
    },
    keyTakeawayFormula: '\\text{Right-Skewed: } \\bar{x} \\gg Q_2 \\; (\\text{pop, gdpPercap}) \\qquad \\text{Left-Skewed: } \\bar{x} < Q_2 \\; (\\text{lifeExp})',
  },
  6: {
    title: {
      en: 'Slide 6 Masterclass: Why Boxplot, Violinplot, and Histogram Reveal Complementary Truths',
      km: 'មេរៀនស៊ីជម្រៅស្លាយទី ៦៖ ហេតុអ្វីក្រាហ្វ Boxplot, Violinplot និង Histogram បំពេញបន្ថែមឱ្យគ្នាទៅវិញទៅមក?',
    },
    narrative: {
      en: 'On Slide 6, each of the 3 univariate charts exposes a distinct structural property: (1) The Boxplot of `pop` uses Tukey’s fences ($Q_3 + 1.5\\times\\text{IQR}$) to flag extreme outliers like China ($1.32\\text{B}$) and India ($1.11\\text{B}$); (2) The Violinplot of `lifeExp` uses Kernel Density Estimation (KDE) to reveal a bimodal distribution (a secondary bump at ~50 yrs and a main peak at ~75 yrs) that a Boxplot completely hides; (3) The Histogram of `gdpPercap` shows the L-shaped exponential decay across income brackets.',
      km: 'នៅលើស្លាយទី ៦ ក្រាហ្វអថេរទោលទាំង ៣ បង្ហាញលក្ខណៈសម្បត្តិខុសៗគ្នា៖ (១) ក្រាហ្វ Boxplot នៃ `pop` ប្រើរបង Tukey ($Q_3 + 1.5\\times\\text{IQR}$) ដើម្បីចាប់យកប្រទេស Outliers ដូចជាចិន ($1.32\\text{B}$) និងឥណ្ឌា ($1.11\\text{B}$); (២) ក្រាហ្វ Violinplot នៃ `lifeExp` បង្ហាញឱ្យឃើញកំពូលពីរ (Bimodal៖ កំពូលតូចនៅជិត ៥០ ឆ្នាំ និងកំពូលធំនៅជិត ៧៥ ឆ្នាំ) ដែលក្រាហ្វ Boxplot មិនអាចបង្ហាញបាន; និង (៣) ក្រាហ្វ Histogram នៃ `gdpPercap` បង្ហាញពីការប្រមូលផ្តុំប្រទេសក្រីក្រយ៉ាងច្រើននៅខាងឆ្វេង។',
    },
    keyTakeawayFormula: '\\text{Upper Outlier Fence} = Q_3 + 1.5 \\times (Q_3 - Q_1)',
  },
  7: {
    title: {
      en: 'Slide 7 Masterclass: Complete Map of Bivariate Indicators & Visualizations',
      km: 'មេរៀនស៊ីជម្រៅស្លាយទី ៧៖ ផែនទីសង្ខេបរួមនៃសូចនាករស្ថិតិ (Indicators) និងក្រាហ្វ (Visualizations) ទាំងអស់',
    },
    narrative: {
      en: 'Slide 7 is the master cheat-sheet of the entire course. Notice the strict duality on every branch: every pair of variables requires BOTH a numerical **Indicator** (to quantify association strength objectively) AND a graphical **Visualization** (to inspect geometry, nonlinearity, clusters, and anomalies).',
      km: 'ស្លាយទី ៧ គឺជាតារាងមេរៀនសង្ខេបដ៏សំខាន់បំផុតនៃវគ្គសិក្សាទាំងមូល។ សូមសង្កេតថា នៅគ្រប់ករណីទាំង ៣ យើងត្រូវការទាំងពីរផ្នែកជានិច្ច គឺ៖ **សូចនាករតួលេខ (Indicator)** សម្រាប់វាស់កម្រិតទំនាក់ទំនងឱ្យច្បាស់លាស់ និង **ការបង្ហាញជាក្រាហ្វ (Visualization)** សម្រាប់មើលរូបរាងទំនាក់ទំនង កញ្ចុំទិន្នន័យ និងចំណុចខុសប្រក្រតី។',
    },
    keyTakeawayFormula: '\\text{Quant}\\times\\text{Quant}: (\\text{Cov}, r, \\rho) \\;\\mid\\; \\text{Quant}\\times\\text{Qual}: (\\eta^2) \\;\\mid\\; \\text{Qual}\\times\\text{Qual}: (\\chi^2, V, \\tilde{V})',
  },
};

/**
 * Generates comprehensive academic & practical explanations BEYOND the raw PDF slide text
 * for each of the 41 slides in Chapter II: Bivariate Analysis.
 */
export function getBeyondSlideEnrichment(slide: SlideBlueprint): BeyondSlideEnrichment {
  const p = slide.pageNumber;
  const customNote = SLIDE_SPECIFIC_NOTES[p] || {
    title: {
      en: `Slide ${p} Masterclass: ${slide.pageIdentity.titleEn}`,
      km: `មេរៀនស៊ីជម្រៅស្លាយទី ${p}៖ ${slide.pageIdentity.titleKm}`,
    },
    narrative: {
      en: slide.expandedContent.deepDiveExplanation.en,
      km: slide.expandedContent.deepDiveExplanation.km,
    },
    keyTakeawayFormula:
      slide.chartMetricsMath.formulas[0]?.equation ||
      '\\text{Indicator Screening } (r, \\rho, \\eta^2, \\tilde{V}) + \\text{Interactive Visualization} = \\text{Complete Bivariate Insight}',
  };

  // 1. Intro, Roadmap, Literature & Univariate Refresher (Slides 1–7)
  if (p >= 1 && p <= 7) {
    return {
      slideSpecificLectureNote: customNote,
      mathematicalDerivation: {
        title: {
          en: 'Mathematical Proof & Algebraic Foundation: Sample Variance Degrees of Freedom (n - 1) & Robust Quartiles',
          km: 'សម្រាយបញ្ជាក់គណិតវិទ្យា៖ ហេតុអ្វីវ៉ារ្យង់គំរូប្រើភាគបែង (n - 1) និងទំនាក់ទំនងរវាងមធ្យមភាគ និងមេដ្យាន',
        },
        proofSteps: [
          {
            en: '1. Bessel’s Correction ($n - 1$): Because the sample mean $\\bar{x} = \\frac{1}{n}\\sum_{i=1}^n x_i$ minimizes the sum of squared deviations $\\sum (x_i - c)^2$, we always have $\\sum_{i=1}^n (x_i - \\bar{x})^2 < \\sum_{i=1}^n (x_i - \\mu)^2$. Taking expectations yields $\\mathbb{E}\\left[\\sum_{i=1}^n (x_i - \\bar{x})^2\\right] = (n - 1)\\sigma^2$, so dividing by $n - 1$ makes $s_X^2$ an unbiased estimator of $\\sigma^2$!',
            km: '១. ការកែតម្រូវ Bessel ($n - 1$)៖ ដោយសារមធ្យមភាគគំរូ $\\bar{x} = \\frac{1}{n}\\sum_{i=1}^n x_i$ ធ្វើឱ្យផលបូកការ៉េនៃគម្លាតតូចបំផុត នោះផលបូក $\\sum_{i=1}^n (x_i - \\bar{x})^2$ តែងតែតូចជាងគម្លាតធៀបនឹងមធ្យមភាគសកល $\\mu$ ជានិច្ច។ តាមការគណនាតម្លៃរំពឹងទុក $\\mathbb{E}\\left[\\sum_{i=1}^n (x_i - \\bar{x})^2\\right] = (n - 1)\\sigma^2$ ដូច្នេះយើងត្រូវចែកនឹង $n - 1$ ទើបវ៉ារ្យង់គំរូ $s_X^2$ មិនលម្អៀង (Unbiased estimator)។',
          },
          {
            en: '2. Variational Property of Mean vs. Median: The arithmetic mean $\\bar{x}$ minimizes the $L_2$ squared error $\\sum_{i=1}^n (x_i - c)^2$ (making it sensitive to squared outliers), whereas the Median $Q_2$ minimizes the $L_1$ absolute error $\\sum_{i=1}^n |x_i - c|$ (making its breakdown point $50\\%$—completely immune to extreme outliers like China’s population!).',
            km: '២. លក្ខណៈគណិតវិទ្យារវាងមធ្យមភាគ និងមេដ្យាន៖ មធ្យមភាគ $\\bar{x}$ បង្រួមផលបូកការ៉េនៃគម្លាត $\\sum_{i=1}^n (x_i - c)^2$ ឱ្យតូចបំផុត (ហេតុនេះទើបវារសើបខ្លាំងនឹង Outliers ដោយសារការលើកជាការ៉េ) ចំណែកឯមេដ្យាន $Q_2$ បង្រួមផលបូកតម្លៃដាច់ខាត $\\sum_{i=1}^n |x_i - c|$ ឱ្យតូចបំផុត ដែលធ្វើឱ្យមេដ្យានមិនប្រែប្រួលឡើយទោះបីមានតម្លៃ Outliers ធំប៉ុណ្ណាក៏ដោយ។',
          },
        ],
      },
      intuitionTitle: {
        en: 'Core Statistical Intuition (Beyond the Slide): Why Univariate Must Precede Bivariate',
        km: 'ខ្លឹមសារស៊ីជម្រៅក្រៅពីស្លាយ៖ ហេតុអ្វីត្រូវពិនិត្យអថេរទោល (Univariate) មុននឹងឈានចូលការវិភាគទ្វេអថេរ (Bivariate)?',
      },
      intuitionBody: {
        en: 'In the original slide deck, we see summary tables (`describe()`) and 3 plots (Boxplot, Violinplot, Histogram) for `pop`, `lifeExp`, and `gdpPercap`. Beyond what is written on the slide: if you skip univariate inspection, extreme right-skewness in `pop` (Mean = 44.02M vs. Median = 10.52M) and `gdpPercap` (Mean = $11,680 vs. Median = $6,124) will severely distort parametric bivariate metrics like Covariance and Pearson $r$. Inspecting marginal distributions first tells you immediately whether you need a $\\log_{10}$ transformation or rank-based Spearman $\\rho$.',
        km: 'នៅក្នុងស្លាយដើម មានបង្ហាញត្រឹមតារាង `describe()` និងក្រាហ្វ ៣ (Boxplot, Violinplot, Histogram)។ ប៉ុន្តែអ្វីដែលសំខាន់ក្រៅពីស្លាយគឺ៖ ប្រសិនបើយើងមិនពិនិត្យរបាយអថេរទោលជាមុនទេ ទិន្នន័យដែលពេបស្ដាំខ្លាំងដូចជា ចំនួនប្រជាជន `pop` (មធ្យមភាគ 44.02M ខុសឆ្ងាយពីមេដ្យាន 10.52M) និងចំណូល `gdpPercap` (មធ្យមភាគ $11,680 ធៀបនឹងមេដ្យាន $6,124) នឹងធ្វើឱ្យរង្វាស់ទ្វេអថេរដូចជា Covariance និង Pearson $r$ លម្អៀងខុសពីការពិត។ ការមើលក្រាហ្វអថេរទោលជាមុន ជួយឱ្យយើងដឹងភ្លាមថាត្រូវប្រើបម្លែង $\\log_{10}$ ឬប្រើមេគុណចំណាត់ថ្នាក់ Spearman $\\rho$។',
      },
      thresholdsAndPitfalls: {
        rule: {
          en: 'Skewness Diagnostic Rule: Whenever $|\\bar{X} - \\text{Median}(X)| / s_X > 0.30$, the variable is substantially skewed and requires either $\\log_{10}(X)$ transformation or non-parametric rank statistics.',
          km: 'វិធានវិនិច្ឆ័យភាពពេប (Skewness Rule)៖ រាល់ពេលដែលមធ្យមភាគ $\\bar{X}$ ខុសពីមេដ្យាន (Median) ខ្លាំង ($|\\bar{X} - \\text{Median}| / s_X > 0.30$) មានន័យថាទិន្នន័យមាន Outliers ធំៗ ហើយត្រូវប្រើបម្លែង $\\log_{10}(X)$ ឬស្ថិតិចំណាត់ថ្នាក់ (Rank Statistics)។',
        },
        pitfall: {
          en: 'Common Pitfall: Using the arithmetic mean $\\bar{X}$ alone to summarize multimodal distributions like `lifeExp` (which has two peaks: Africa at ~54 years and Europe/Asia at ~75 years). A Violinplot or KDE is mandatory to see bimodal structure.',
          km: 'កំហុសដែលតែងជួបប្រទះ៖ ការប្រើតែតម្លៃមធ្យមភាគ $\\bar{X}$ មួយមុខដើម្បីតំណាងឱ្យទិន្នន័យដែលមានកំពូលពីរ (Bimodal) ដូចជា `lifeExp` (កំពូលទី១ នៅទ្វីបអាហ្វ្រិក ~54 ឆ្នាំ និងកំពូលទី២ នៅអឺរ៉ុប/អាស៊ី ~75 ឆ្នាំ)។ ត្រូវប្រើ Violinplot ដើម្បីមើលឃើញកំពូលទាំងពីរនេះ។',
        },
      },
      stepByStepWalkthrough: {
        step1: {
          en: 'Step 1 (Classify Variable Types): Identify whether each variable $X$ and $Y$ is Quantitative (continuous/discrete numeric) or Categorical (nominal/ordinal qualitative).',
          km: 'ជំហានទី ១ (កំណត់ប្រភេទអថេរ)៖ បែងចែកឱ្យច្បាស់ថាអថេរ $X$ និង $Y$ ជាអថេរបរិមាណ (Quantitative - តួលេខ) ឬអថេរប្រភេទ/គុណភាព (Categorical/Qualitative)។',
        },
        step2: {
          en: 'Step 2 (Check Marginal Skewness & Outliers): Compare Mean vs. Median (50%) and inspect Boxplot whiskers ($Q_1 - 1.5\\text{IQR}$, $Q_3 + 1.5\\text{IQR}$).',
          km: 'ជំហានទី ២ (ពិនិត្យភាពពេប និង Outliers)៖ ប្រៀបធៀបតម្លៃមធ្យមភាគ (Mean) និងមេដ្យាន (50% Median) ព្រមទាំងពិនិត្យចំណុចដាច់ស្រយាលលើ Boxplot។',
        },
        step3: {
          en: 'Step 3 (Select Bivariate Pair Strategy): Map the pair to Case 1 (Quant × Quant $\\Rightarrow r, \\rho$), Case 2 (Quant × Qual $\\Rightarrow \\eta^2$), or Case 3 (Qual × Qual $\\Rightarrow \\chi^2, V$).',
          km: 'ជំហានទី ៣ (ជ្រើសរើសវិធីសាស្ត្រទ្វេអថេរ)៖ បើ បរិមាណ×បរិមាណ ប្រើ $(r, \\rho)$ បើ បរិមាណ×ប្រភេទ ប្រើ $(\\eta^2)$ និងបើ ប្រភេទ×ប្រភេទ ប្រើ $(\\chi^2, V)$។',
        },
      },
      examVivaQA: [
        {
          question: {
            en: 'Q1: In Gapminder 2007, why is the mean population (44.02M) more than 4 times larger than the median population (10.52M)?',
            km: 'សំណួរទី ១៖ នៅក្នុងទិន្នន័យ Gapminder ឆ្នាំ ២០០៧ ហេតុអ្វីបានជាមធ្យមភាគចំនួនប្រជាជន (44.02M) ធំជាងមេដ្យាន (10.52M) ដល់ទៅជាង ៤ ដង?',
          },
          answer: {
            en: 'Because the population distribution is heavily right-skewed: extreme upper outliers like China (1.32B) and India (1.11B) pull the arithmetic mean upward, whereas the median (the 71st/72nd country in sorted order) is unaffected by extreme values.',
            km: 'ពីព្រោះរបាយចំនួនប្រជាជនពេបទៅខាងស្តាំយ៉ាងខ្លាំង (Right-skewed)៖ ប្រទេសដែលមានប្រជាជនច្រើនដាច់គេដូចជា ចិន (1.32B) និងឥណ្ឌា (1.11B) បានទាញតម្លៃមធ្យមភាគឱ្យកើនឡើងខ្ពស់ ខណៈដែលតម្លៃមេដ្យាន (តម្លៃកណ្តាលទី ៧១–៧២) មិនទទួលរងឥទ្ធិពលពីតម្លៃ Outliers ទាំងនោះឡើយ។',
          },
        },
        {
          question: {
            en: 'Q2: What structural feature of `lifeExp` in 2007 is visible on the Violinplot (Slide 6) that would be invisible on a standard Boxplot?',
            km: 'សំណួរទី ២៖ តើលក្ខណៈសម្បត្តិអ្វីនៃអាយុរំពឹងរស់ (`lifeExp`) ក្នុងឆ្នាំ ២០០៧ ដែលយើងអាចមើលឃើញលើក្រាហ្វ Violinplot (ស្លាយទី ៦) ប៉ុន្តែមើលមិនឃើញលើក្រាហ្វ Boxplot ធម្មតា?',
          },
          answer: {
            en: 'Bimodality (two distinct density peaks): a lower mode around 48–55 years (representing Sub-Saharan African nations) and a primary mode around 72–80 years (representing Europe, Americas, Asia, and Oceania).',
            km: 'គឺទម្រង់កំពូលពីរ (Bimodality)៖ ក្រាហ្វ Violinplot បង្ហាញឱ្យឃើញដង់ស៊ីតេប៉ោងនៅពីរកន្លែង គឺកំពូលទីមួយនៅចន្លោះ ៤៨–៥៥ ឆ្នាំ (ប្រទេសនៅអាហ្វ្រិក) និងកំពូលទីពីរនៅចន្លោះ ៧២–៨០ ឆ្នាំ (ប្រទេសនៅអឺរ៉ុប អាមេរិក និងអាស៊ី)។',
          },
        },
      ],
      pythonCodeSnippet: `import pandas as pd
import plotly.express as px

# 1. Filter Gapminder for year 2007 (n = 142 countries)
data2007 = gapminder.query("year == 2007")

# 2. Compare Mean vs. Median (50%) to diagnose skewness
summary = data2007[["pop", "lifeExp", "gdpPercap"]].describe()
print(summary.loc[["mean", "std", "50%", "min", "max"]])

# 3. Interactive Plotly Univariate Diagnostics
fig_box = px.box(data2007, y="pop", log_y=True, hover_name="country", title="Log-Scale Boxplot of Population")
fig_violin = px.violin(data2007, y="lifeExp", box=True, points="all", hover_name="country")`,
      pythonCodeExplanation: {
        en: 'This Python snippet reproduces the exact Gapminder 2007 univariate inspection and upgrades static matplotlib plots into interactive Plotly figures (`hover_name="country"`).',
        km: 'កូដ Python នេះគណនាតារាងស្ថិតិពិពណ៌នា `describe()` សម្រាប់ឆ្នាំ ២០០៧ និងបង្កើតក្រាហ្វ Plotly អន្តរកម្មដែលអាចដាក់ Mouse មើលឈ្មោះប្រទេសនីមួយៗបាន (`hover_name="country"`)។',
      },
    };
  }

  // 2. Quantitative × Quantitative: Covariance, Pearson r, Spearman rho, Log Scale (Slides 8–21)
  if (p >= 8 && p <= 21) {
    return {
      slideSpecificLectureNote: customNote,
      mathematicalDerivation: {
        title: {
          en: 'Mathematical Proof & Algebraic Foundation: Cauchy-Schwarz Bound (-1 ≤ r ≤ 1) & Spearman Rank Formula',
          km: 'សម្រាយបញ្ជាក់គណិតវិទ្យា៖ វិសមភាព Cauchy-Schwarz (-1 ≤ r ≤ 1) និងរូបមន្តផលបូកការ៉េនៃគម្លាតចំណាត់ថ្នាក់ Spearman',
        },
        proofSteps: [
          {
            en: '1. Proof that $-1 \\le r_{X,Y} \\le +1$ via Cauchy-Schwarz Inequality: Define centered vectors $\\mathbf{u} = (x_1 - \\bar{x}, \\dots, x_n - \\bar{x})$ and $\\mathbf{v} = (y_1 - \\bar{y}, \\dots, y_n - \\bar{y})$. By the Cauchy-Schwarz inequality, $|\\langle \\mathbf{u}, \\mathbf{v} \\rangle| \\le \\|\\mathbf{u}\\|_2 \\|\\mathbf{v}\\|_2$. Dividing both sides by $(n - 1) s_X s_Y = \\|\\mathbf{u}\\|_2 \\|\\mathbf{v}\\|_2$ immediately proves $|r_{X,Y}| = |\\cos\\theta| \\le 1$, with equality $r = \\pm 1$ if and only if $\\mathbf{v} = a\\mathbf{u}$ ($y_i = ax_i + b$ with $a \\neq 0$).',
            km: '១. សម្រាយបញ្ជាក់ថា $-1 \\le r_{X,Y} \\le +1$ តាមវិសមភាព Cauchy-Schwarz៖ តាងវ៉ិចទ័រគម្លាតពីមធ្យមភាគ $\\mathbf{u} = (x_1 - \\bar{x}, \\dots, x_n - \\bar{x})$ និង $\\mathbf{v} = (y_1 - \\bar{y}, \\dots, y_n - \\bar{y})$។ តាមវិសមភាព Cauchy-Schwarz យើងមាន $|\\langle \\mathbf{u}, \\mathbf{v} \\rangle| \\le \\|\\mathbf{u}\\|_2 \\|\\mathbf{v}\\|_2$។ នៅពេលចែកអង្គទាំងពីរនឹង $(n - 1)s_X s_Y = \\|\\mathbf{u}\\|_2 \\|\\mathbf{v}\\|_2$ យើងទទួលបាន $|r_{X,Y}| = |\\cos\\theta| \\le 1$ ជានិច្ច ហើយវាស្មើ $\\pm 1$ លុះត្រាតែចំណុចទាំងអស់ស្ថិតនៅលើបន្ទាត់ត្រង់តែមួយ $Y = aX + b$ ($a \\neq 0$)។',
          },
          {
            en: '2. Derivation of Spearman’s Shortcut Formula $\\rho = 1 - \\frac{6\\sum d_i^2}{n(n^2 - 1)}$: When there are no ties, the ranks $R[X]$ and $R[Y]$ are permutations of $\\{1, 2, \\dots, n\\}$, which have exact mean $\\frac{n+1}{2}$ and variance $\\frac{n^2 - 1}{12}$. Expanding $\\sum d_i^2 = \\sum (R[x_i] - R[y_i])^2 = \\sum (R[x_i] - \\bar{R})^2 + \\sum (R[y_i] - \\bar{R})^2 - 2\\sum (R[x_i] - \\bar{R})(R[y_i] - \\bar{R})$ yields $\\rho = 1 - \\frac{6\\sum d_i^2}{n(n^2 - 1)}$!',
            km: '២. សម្រាយបញ្ជាក់រូបមន្តកាត់របស់ Spearman $\\rho = 1 - \\frac{6\\sum d_i^2}{n(n^2 - 1)}$៖ នៅពេលគ្មានតម្លៃស្មើគ្នា (No ties) ចំណាត់ថ្នាក់ $R[X]$ និង $R[Y]$ គឺជាបណ្តុំនៃលេខ $\\{1, 2, \\dots, n\\}$ ដែលមានមធ្យមភាគស្មើ $\\frac{n+1}{2}$ និងវ៉ារ្យង់ស្មើ $\\frac{n^2 - 1}{12}$ ជានិច្ច។ តាមរយៈការពន្លាត $\\sum d_i^2 = \\sum (R[x_i] - R[y_i])^2$ យើងទាញបានរូបមន្ត $\\rho = 1 - \\frac{6\\sum d_i^2}{n(n^2 - 1)}$ ដោយផ្ទាល់។',
          },
        ],
      },
      intuitionTitle: {
        en: 'Core Statistical Intuition (Beyond the Slide): Geometry of Covariance, Pearson r & Spearman ρ',
        km: 'ខ្លឹមសារស៊ីជម្រៅក្រៅពីស្លាយ៖ អត្ថន័យធរណីមាត្រនៃកូវ៉ារ្យង់ (Covariance), មេគុណ Pearson r និង Spearman ρ',
      },
      intuitionBody: {
        en: 'While the slide states the formulas for $\\text{Cov}(X,Y)$, $r_{X,Y}$, and $\\rho_{X,Y}$, here is the deeper mathematical intuition: Covariance divides the plane into 4 quadrants centered at the centroid $(\\bar{X}, \\bar{Y})$. Points in Quadrants I and III contribute positive products $(x_i - \\bar{X})(y_i - \\bar{Y}) > 0$, while Quadrants II and IV contribute negative products. Pearson $r$ normalizes this by $s_X s_Y$, making it the cosine of the angle between centered vectors $\\vec{z}_X$ and $\\vec{z}_Y$ ($r = \\cos\\theta \\in [-1, 1]$). However, because $s_Y$ squares deviations, a single outlier ($Y_4 = 1000$) explodes the denominator and crushes $r$ from $0.99$ down to $0.506$. Spearman $\\rho$ replaces raw values with ranks $R[x_i] \\in \\{1, \\dots, n\\}$, bounding the maximum possible deviation and making $\\rho = 1.00$ completely invariant to any strictly increasing monotonic transformation (such as $\\log_{10}(x)$).',
        km: 'ក្រៅពីរូបមន្តនៅលើស្លាយ អត្ថន័យពិតប្រាកដនៃកូវ៉ារ្យង់ $\\text{Cov}(X,Y)$ គឺការបែងចែកផ្ទៃក្រាហ្វជា ៤ កាត្រង់ (Quadrants) ជុំវិញចំណុចកណ្ដាល $(\\bar{X}, \\bar{Y})$។ ចំណុចនៅកាត្រង់ទី I និងទី III ឱ្យផលគុណវិជ្ជមាន រីឯកាត្រង់ទី II និងទី IV ឱ្យផលគុណអវិជ្ជមាន។ មេគុណ Pearson $r$ គឺជាតម្លៃកូស៊ីនុសនៃមុំរវាងវ៉ិចទ័រទិន្នន័យពីរ ($r = \\cos\\theta \\in [-1, 1]$)។ ប៉ុន្តែដោយសារភាគបែង $s_X s_Y$ លើកគម្លាតជាការ៉េ គ្រាន់តែមានតម្លៃដាច់ស្រយាល (Outlier) តែមួយគត់ដូចជា $Y_4 = 1000$ វានឹងទាញទម្លាក់ Pearson $r$ ពី $0.99$ មកនៅត្រឹម $0.506$ ភ្លាម! ផ្ទុយទៅវិញ មេគុណ Spearman $\\rho$ បម្លែងតម្លៃទិន្នន័យទៅជាលេខរៀងចំណាត់ថ្នាក់ $R[x_i] \\in \\{1, \\dots, n\\}$ ធ្វើឱ្យវាមានភាពធន់ ១០០% នឹង Outliers ហើយឱ្យតម្លៃ $\\rho = 1.00$ ដដែល ទោះបីទិន្នន័យមានរាងកោងលោការីត $\\log_{10}(X)$ ក៏ដោយ។',
      },
      thresholdsAndPitfalls: {
        rule: {
          en: 'Interpretation Thresholds for $|r|$ and $|\\rho|$: $0.00\\text{–}0.19$ (Negligible), $0.20\\text{–}0.39$ (Weak), $0.40\\text{–}0.69$ (Moderate), $0.70\\text{–}0.89$ (Strong), $0.90\\text{–}1.00$ (Very Strong). Always compare $\\Delta = |\\rho| - |r|$: if $|\\rho| > |r|$ by more than $0.10$ (like Gapminder GDP vs. LifeExp: $\\rho = 0.857$ vs. $r = 0.679$), the relationship is non-linear monotonic!',
          km: 'កម្រិតវាយតម្លៃតម្លៃ $|r|$ និង $|\\rho|$៖ $0.00\\text{–}0.19$ (ខ្សោយបំផុត/គ្មាន), $0.20\\text{–}0.39$ (ខ្សោយ), $0.40\\text{–}0.69$ (មធ្យម), $0.70\\text{–}0.89$ (ខ្លាំង), $0.90\\text{–}1.00$ (ខ្លាំងបំផុត)។ ចំណុចគន្លឹះ៖ បើតម្លៃ $|\\rho|$ ធំជាង $|r|$ លើសពី $0.10$ (ដូចជា GDP និង LifeExp ដែលមាន $\\rho = 0.857 > r = 0.679$) វាបញ្ជាក់ថាទំនាក់ទំនងនោះមានរាងកោងមិនលីនេអ៊ែរ (ដូចជាខ្សែកោងលោការីត)។',
        },
        pitfall: {
          en: 'Critical Pitfall ($r = 0 \\not\\Rightarrow$ Independence): A Pearson correlation of $r = 0$ ONLY means zero LINEAR correlation. A perfect parabola $Y = X^2$ on $[-1, 1]$ or a circle $X^2 + Y^2 = 1$ has $r = 0$ even though $Y$ is 100% determined by $X$!',
          km: 'ការប្រុងប្រយ័ត្នខ្ពស់ ($r = 0$ មិនមែនមានន័យថាអថេរទាំងពីរឯករាជ្យពីគ្នាទេ)៖ $r = 0$ គ្រាន់តែបញ្ជាក់ថាគ្មានទំនាក់ទំនងជាបន្ទាត់ត្រង់ (Linear) ប៉ុណ្ណោះ។ ខ្សែកោងប៉ារ៉ាបូល $Y = X^2$ ឬរង្វង់មូលមាន $r = 0$ ទោះបីជា $X$ និង $Y$ ទាក់ទងគ្នា ១០០% ក៏ដោយ!',
        },
      },
      stepByStepWalkthrough: {
        step1: {
          en: 'Step 1 (Standardize Deviations): Center both variables around their means $(x_i - \\bar{X})$ and $(y_i - \\bar{Y})$ and divide by sample standard deviations $s_X, s_Y$.',
          km: 'ជំហានទី ១ (ធ្វើស្តង់ដារកម្មទិន្នន័យ)៖ គណនាគម្លាតពីមធ្យមភាគ $(x_i - \\bar{X})$ និង $(y_i - \\bar{Y})$ រួចចែកនឹងគម្លាតស្តង់ដារគំរូ $s_X, s_Y$។',
        },
        step2: {
          en: 'Step 2 (Compare Linear vs. Rank Correlation): Compute both `df.corr(method="pearson")` and `df.corr(method="spearman")` side by side.',
          km: 'ជំហានទី ២ (ប្រៀបធៀប Pearson និង Spearman)៖ គណនាទាំងមេគុណលីនេអ៊ែរ `pearson` និងមេគុណចំណាត់ថ្នាក់ `spearman` ដើម្បីរកមើលភាពកោង ឬផលប៉ះពាល់នៃ Outliers។',
        },
        step3: {
          en: 'Step 3 (Apply Log-Scale Linearization): When $X$ spans multiple orders of magnitude (e.g., GDP from $277 to $49,357), plot $\\log_{10}(X)$ vs. $Y$ to unclutter crushed points.',
          km: 'ជំហានទី ៣ (ប្រើមាត្រដ្ឋានលោការីត $\\log_{10}$)៖ នៅពេលអថេរ $X$ មានគម្លាតធំខ្លាំង (ដូចជា GDP ពី $277 ដល់ $49,357) ត្រូវប្រើអ័ក្ស $\\log_{10}(X)$ ដើម្បីពន្លាតចំណុចដែលប្រមូលផ្តុំគ្នាឱ្យឃើញទំនោរលីនេអ៊ែរច្បាស់។',
        },
      },
      examVivaQA: [
        {
          question: {
            en: 'Q1: Why can’t we use Covariance alone to compare the strength of association across different pairs of variables (e.g., Tip vs. Bill in USD vs. Riels)?',
            km: 'សំណួរទី ១៖ ហេតុអ្វីយើងមិនអាចប្រើតម្លៃកូវ៉ារ្យង់ $\\text{Cov}(X, Y)$ តែមួយមុខ ដើម្បីប្រៀបធៀបកម្រិតខ្លាំងខ្សោយនៃទំនាក់ទំនងរវាងអថេរដែលមានឯកតាខុសគ្នា (ឧទាហរណ៍៖ គិតជាដុល្លារ ធៀបនឹង គិតជារៀល)?',
          },
          answer: {
            en: 'Because Covariance is scale-dependent: $\\text{Cov}(aX, bY) = ab\\,\\text{Cov}(X, Y)$. Converting USD to Riels ($\\times 4,000$) multiplies the Covariance by $16,000,000$ without changing the underlying relationship! Dividing by $s_X s_Y$ gives the dimensionless Pearson $r \\in [-1, 1]$.',
            km: 'ពីព្រោះកូវ៉ារ្យង់អាស្រ័យលើខ្នាតរង្វាស់៖ $\\text{Cov}(aX, bY) = ab\\,\\text{Cov}(X, Y)$។ ប្រសិនបើយើងប្តូរខ្នាតពីដុល្លារទៅជារៀល ($\\times 4,000$) តម្លៃកូវ៉ារ្យង់នឹងកើនឡើង $16,000,000$ ដង ទោះបីជាទំនាក់ទំនងពិតប្រាកដមិនប្រែប្រួលក៏ដោយ! ហេតុនេះទើបយើងត្រូវចែកនឹង $s_X s_Y$ ដើម្បីទទួលបានមេគុណ Pearson $r \\in [-1, 1]$ ដែលគ្មានខ្នាត។',
          },
        },
        {
          question: {
            en: 'Q2: On Slide 16 & Slide 19, why does Spearman’s ρ between `gdpPercap` and `lifeExp` stay exactly 0.856590 whether we use raw GDP or log₁₀(GDP), whereas Pearson’s r jumps from 0.679 to 0.809?',
            km: 'សំណួរទី ២៖ នៅស្លាយទី ១៦ និងទី ១៩ ហេតុអ្វីបានជាមេគុណ Spearman $\\rho$ រវាង `gdpPercap` និង `lifeExp` រក្សាតម្លៃ $0.856590$ ដដែល ទោះបីប្រើ GDP ដើម ឬ $\\log_{10}(\\text{GDP})$ ខណៈដែល Pearson $r$ លោតពី $0.679$ ទៅ $0.809$?',
          },
          answer: {
            en: 'Because $f(x) = \\log_{10}(x)$ is a strictly increasing function for $x > 0$, so the rank order of countries from poorest to richest is 100% identical before and after taking the logarithm ($R[\\log_{10}(X)] \\equiv R[X]$). Pearson $r$, however, measures straight-line linearity, which improves dramatically once $\\log_{10}$ straightens the concave Preston curve!',
            km: 'ពីព្រោះអនុគមន៍ $f(x) = \\log_{10}(x)$ គឺជាអនុគមន៍កើនឡើងដាច់ខាតសម្រាប់ $x > 0$ ដែលធ្វើឱ្យលំដាប់ចំណាត់ថ្នាក់នៃប្រទេសពីក្រីក្របំផុតទៅមានបំផុត មិនប្រែប្រួលសូម្បីតែមួយប្រទេសឡើយ ($R[\\log_{10}(X)] \\equiv R[X]$)។ រីឯមេគុណ Pearson $r$ វាស់ភាពត្រង់នៃបន្ទាត់ ដូច្នេះនៅពេល $\\log_{10}$ ពន្លាតខ្សែកោងឱ្យទៅជាបន្ទាត់ត្រង់ តម្លៃ $r$ ក៏កើនឡើងពី $0.679$ ទៅ $0.809$ ភ្លាម។',
          },
        },
      ],
      pythonCodeSnippet: `import numpy as np
import scipy.stats as stats
import plotly.express as px

# 1. Compute Covariance, Pearson r, and Spearman rho on Gapminder 2007
cov_matrix = data2007[["lifeExp", "gdpPercap", "pop"]].cov()
pearson_r = data2007[["lifeExp", "gdpPercap", "pop"]].corr(method="pearson")
spearman_rho = data2007[["lifeExp", "gdpPercap", "pop"]].corr(method="spearman")

# 2. Log10 Transformation increases Linear Pearson r from 0.679 -> 0.809!
r_log, p_val = stats.pearsonr(np.log10(data2007["gdpPercap"]), data2007["lifeExp"])

# 3. Interactive Plotly Scatter with Log-X Axis & OLS Trendline
fig = px.scatter(
    data2007, x="gdpPercap", y="lifeExp", log_x=True,
    color="continent", hover_name="country", trendline="ols"
)`,
      pythonCodeExplanation: {
        en: 'Applying `np.log10(data2007["gdpPercap"])` boosts the linear Pearson correlation with `lifeExp` from $r = 0.679$ up to $r = 0.809$, matching the visual linearization seen on Slide 19.',
        km: 'ការប្រើបម្លែងលោការីត `np.log10(data2007["gdpPercap"])` ជួយបង្កើនមេគុណសហសម្ព័ន្ធលីនេអ៊ែរ Pearson $r$ ពី $0.679$ ឡើងដល់ $0.809$ ដែលស្របគ្នាទៅនឹងបន្ទាត់ត្រង់លើក្រាហ្វក្នុងស្លាយទី ១៩។',
      },
    };
  }

  // 3. Quantitative × Categorical: Eta-Squared (ANOVA), Boxplots, Violins & KDE (Slides 22–27)
  if (p >= 22 && p <= 27) {
    return {
      slideSpecificLectureNote: customNote,
      mathematicalDerivation: {
        title: {
          en: 'Mathematical Proof & Algebraic Foundation: Huygens’ Orthogonal Variance Decomposition (TSS = BSS + WSS)',
          km: 'សម្រាយបញ្ជាក់គណិតវិទ្យា៖ ទ្រឹស្តីបទ Huygens នៃការបំបែកផលបូកការ៉េសរុប (TSS = BSS + WSS)',
        },
        proofSteps: [
          {
            en: '1. Add and Subtract the Group Mean $\\bar{x}_g$: Write each observation’s deviation from the global mean as $(x_i - \\bar{x}) = (x_i - \\bar{x}_g) + (\\bar{x}_g - \\bar{x})$. Squaring and summing over all groups $g = 1,\\dots,G$ and members $i \\in g$ gives $\\text{TSS} = \\sum_{g=1}^G \\sum_{i \\in g} (x_i - \\bar{x}_g)^2 + \\sum_{g=1}^G n_g (\\bar{x}_g - \\bar{x})^2 + 2\\sum_{g=1}^G (\\bar{x}_g - \\bar{x}) \\sum_{i \\in g} (x_i - \\bar{x}_g)$.',
            km: '១. បូក និងដកមធ្យមភាគតាមក្រុម $\\bar{x}_g$៖ បំបែកគម្លាត $(x_i - \\bar{x}) = (x_i - \\bar{x}_g) + (\\bar{x}_g - \\bar{x})$។ នៅពេលលើកជាការ៉េ និងបូកសរុបតាមគ្រប់ក្រុម $g = 1,\\dots,G$ យើងទទួលបាន $\\text{TSS} = \\text{WSS} + \\text{BSS} + 2\\sum_{g=1}^G (\\bar{x}_g - \\bar{x}) \\sum_{i \\in g} (x_i - \\bar{x}_g)$។',
          },
          {
            en: '2. Cross-Term Vanishes Identically: Because $\\bar{x}_g = \\frac{1}{n_g}\\sum_{i \\in g} x_i$, the inner sum of deviations around the group mean is identically zero: $\\sum_{i \\in g} (x_i - \\bar{x}_g) = 0$ for every group $g$! Therefore, $\\text{TSS} = \\text{BSS} + \\text{WSS}$ with $\\text{BSS} \\ge 0$ and $\\text{WSS} \\ge 0$, which proves $0 \\le \\eta^2 = \\frac{\\text{BSS}}{\\text{TSS}} = 1 - \\frac{\\text{WSS}}{\\text{TSS}} \\le 1$.',
            km: '២. តួផលគុណខ្វែងស្មើសូន្យជានិច្ច៖ ដោយសារ $\\bar{x}_g = \\frac{1}{n_g}\\sum_{i \\in g} x_i$ នោះផលបូកគម្លាតក្នុងក្រុមនីមួយៗ $\\sum_{i \\in g} (x_i - \\bar{x}_g) = 0$ ជានិច្ច! ហេតុនេះ $\\text{TSS} = \\text{BSS} + \\text{WSS}$ ដែលទាំង $\\text{BSS} \\ge 0$ និង $\\text{WSS} \\ge 0$ នាំឱ្យយើងស្រាយបញ្ជាក់បានថា $0 \\le \\eta^2 = \\frac{\\text{BSS}}{\\text{TSS}} \\le 1$ ជានិច្ច។',
          },
        ],
      },
      intuitionTitle: {
        en: 'Core Statistical Intuition (Beyond the Slide): Variance Decomposition & ANOVA Eta-Squared (η²)',
        km: 'ខ្លឹមសារស៊ីជម្រៅក្រៅពីស្លាយ៖ ការបំបែកវ៉ារ្យង់សរុប (Variance Decomposition) និងអត្ថន័យនៃមេគុណ Eta-Squared (η²)',
      },
      intuitionBody: {
        en: 'Why can’t we use Pearson $r$ when one variable is Categorical (like `continent` = Africa, Asia, Europe...)? Because categorical labels have no numeric distance! Instead, Huygens’ / ANOVA Total Sum of Squares Decomposition splits the total variance of $Y$ ($\\text{TSS}$) into two orthogonal parts: $\\text{TSS} = \\text{BSS} + \\text{WSS}$. Here, $\\text{BSS}$ (Between-Group Sum of Squares) measures how far each continent’s mean $\\bar{x}_g$ is from the global mean $\\bar{x}$, weighted by group size $n_g$. $\\text{WSS}$ (Within-Group Sum of Squares) measures how spread out countries are inside their own continent. The correlation ratio $\\eta^2 = \\text{BSS}/\\text{TSS} \\in [0, 1]$ tells us the exact percentage of total variance in $X$ explained by group membership $G$!',
        km: 'ហេតុអ្វីយើងមិនអាចប្រើមេគុណ Pearson $r$ នៅពេលអថេរមួយជាប្រភេទ (ដូចជាឈ្មោះទ្វីប `continent`)? ព្រោះឈ្មោះទ្វីបមិនមែនជាតួលេខដែលអាចដកមធ្យមភាគបានទេ! ដូច្នេះ គេប្រើទ្រឹស្ដីបទបំបែកវ៉ារ្យង់សរុប (ANOVA Decomposition)៖ $\\text{TSS} = \\text{BSS} + \\text{WSS}$។ $\\text{BSS}$ គឺជាវ៉ារ្យង់រវាងក្រុម (Between-Group Variation — គម្លាតរវាងមធ្យមភាគនៃទ្វីបនីមួយៗ $\\bar{x}_g$ ធៀបនឹងមធ្យមភាគពិភពលោក $\\bar{x}$) រីឯ $\\text{WSS}$ គឺជាវ៉ារ្យង់ក្នុងក្រុម (Within-Group Variation — គម្លាតរវាងប្រទេសក្នុងទ្វីបតែមួយ)។ ផលធៀប $\\eta^2 = \\text{BSS} / \\text{TSS} \\in [0, 1]$ បង្ហាញពីភាគរយនៃវ៉ារ្យង់សរុបរបស់ $X$ ដែលអាចពន្យល់បានដោយអថេរក្រុម $G$ (ឧទាហរណ៍៖ ទ្វីបពន្យល់បាន $63.5\\%$ នៃអាយុរំពឹងរស់ និង $42.4\\%$ នៃចំណូល GDP)។',
      },
      thresholdsAndPitfalls: {
        rule: {
          en: 'Cohen’s Benchmark Thresholds for $\\eta^2$: $\\eta^2 < 0.01$ (Negligible), $\\eta^2 \\approx 0.01\\text{–}0.05$ (Small effect), $\\eta^2 \\approx 0.06\\text{–}0.13$ (Medium effect), $\\eta^2 \\ge 0.14$ (Large effect). Thus, $\\eta^2 = 0.635$ for Continent × LifeExp is an exceptionally strong structural effect!',
          km: 'កម្រិតវាយតម្លៃមេគុណ $\\eta^2$ (តាមស្តង់ដារ Cohen)៖ $\\eta^2 < 0.01$ (ឥទ្ធិពលតិចតួចបំផុត), $0.01\\text{–}0.05$ (ឥទ្ធិពលតូច), $0.06\\text{–}0.13$ (ឥទ្ធិពលមធ្យម), និង $\\eta^2 \\ge 0.14$ (ឥទ្ធិពលធំខ្លាំង)។ ដូច្នេះ តម្លៃ $\\eta^2 = 0.635$ រវាងទ្វីប និងអាយុរំពឹងរស់ គឺជាទំនាក់ទំនងកម្រិតខ្ពស់បំផុត!',
        },
        pitfall: {
          en: 'Visual Pitfall: Comparing Kernel Density Estimates (KDE) across groups with very different sample sizes (e.g., Oceania has only $n_g = 2$ countries while Africa has $n_g = 52$). Always pair KDE/Violin plots with Boxplots or explicit sample counts $n_g$.',
          km: 'ចំណុចប្រុងប្រយ័ត្ន៖ ការមើលតែខ្សែកោងសន្ទស្សន៍ដង់ស៊ីតេ (KDE) ដោយភ្លេចមើលចំនួនគំរូ $n_g$ ក្នុងក្រុមនីមួយៗ (ឧទាហរណ៍៖ ទ្វីបអូសេអានីមានតែ $n_g = 2$ ប្រទេសប៉ុណ្ណោះ ខណៈអាហ្វ្រិកមានដល់ទៅ $n_g = 52$ ប្រទេស)។',
        },
      },
      stepByStepWalkthrough: {
        step1: {
          en: 'Step 1 (Group Means & Counts): For each category $g \\in \\{1, \\dots, G\\}$, compute group count $n_g$ and group mean $\\bar{x}_g$.',
          km: 'ជំហានទី ១ (គណនាតាមក្រុម)៖ រកចំនួនធាតុ $n_g$ និងមធ្យមភាគ $\\bar{x}_g$ សម្រាប់ក្រុម/ទ្វីបនីមួយៗ $g \\in \\{1, \\dots, G\\}$។',
        },
        step2: {
          en: 'Step 2 (Compute BSS & TSS): Sum weighted squared group-mean shifts $\\text{BSS} = \\sum n_g(\\bar{x}_g - \\bar{x})^2$ and total sum of squares $\\text{TSS} = \\sum_i (x_i - \\bar{x})^2$.',
          km: 'ជំហានទី ២ (គណនា BSS និង TSS)៖ គណនាផលបូកការ៉េរវាងក្រុម $\\text{BSS} = \\sum n_g(\\bar{x}_g - \\bar{x})^2$ និងផលបូកការ៉េសរុប $\\text{TSS}$។',
        },
        step3: {
          en: 'Step 3 (Compute Ratio & Plot Boxplots): Evaluate $\\eta^2 = \\text{BSS}/\\text{TSS}$ and plot parallel Boxplots/Violins ordered by group median.',
          km: 'ជំហានទី ៣ (គណនា $\\eta^2$ និងគូស Boxplot)៖ គណនា $\\eta^2 = \\text{BSS}/\\text{TSS}$ រួចគូសក្រាហ្វ Boxplot/Violin ប្រៀបធៀបគ្រប់ក្រុម។',
        },
      },
      examVivaQA: [
        {
          question: {
            en: 'Q1: Why is η²(Continent, LifeExp) = 0.635 higher than η²(Continent, gdpPercap) = 0.424 in Gapminder 2007?',
            km: 'សំណួរទី ១៖ ហេតុអ្វីបានជាមេគុណ $\\eta^2(\\text{Continent}, \\text{LifeExp}) = 0.635$ ខ្ពស់ជាង $\\eta^2(\\text{Continent}, \\text{gdpPercap}) = 0.424$ នៅក្នុងទិន្នន័យ Gapminder ឆ្នាំ ២០០៧?',
          },
          answer: {
            en: 'Because on the Boxplots (Slide 26), Life Expectancy boxes are compact within each continent and well separated vertically across continents (small WSS, large BSS). For GDP per capita, Asia alone spans from $431 (Myanmar/Afghanistan) to $47,143 (Kuwait/Singapore), creating massive within-continent variance (WSS) that lowers $\\eta^2 = \\text{BSS}/(\\text{BSS}+\\text{WSS})$.',
            km: 'ពីព្រោះនៅលើក្រាហ្វ Boxplot (ស្លាយទី ២៦) ប្រអប់អាយុរំពឹងរស់នៃទ្វីបនីមួយៗមានទំហំតូចល្មម និងដាច់ពីគ្នាជារាងកាំជណ្តើរយ៉ាងច្បាស់ (WSS តូច, BSS ធំ)។ ផ្ទុយទៅវិញ សម្រាប់ GDP នៅក្នុងទ្វីបអាស៊ីតែមួយ មានទាំងប្រទេសក្រីក្រ ($431) និងប្រទេសអ្នកមានខ្លាំង ($47,143) ដែលធ្វើឱ្យវ៉ារ្យង់ក្នុងក្រុម (WSS) ធំខ្លាំង នាំឱ្យផលធៀប $\\eta^2 = \\text{BSS}/(\\text{BSS}+\\text{WSS})$ ថយចុះមកត្រឹម $0.424$។',
          },
        },
        {
          question: {
            en: 'Q2: Is Eta-Squared (η²) robust to extreme outliers, or sensitive like Pearson’s r?',
            km: 'សំណួរទី ២៖ តើមេគុណ Eta-Squared ($\\eta^2$) ធន់នឹងតម្លៃ Outliers ឬក៏រសើបនឹង Outliers ដូចមេគុណ Pearson $r$ ដែរ?',
          },
          answer: {
            en: 'It is sensitive to outliers just like Pearson’s $r$, because both $\\text{BSS}$ and $\\text{TSS}$ rely on arithmetic means ($\\bar{x}_g, \\bar{x}$) and squared deviations $(x_i - \\bar{x})^2$. When severe outliers exist within categories, analysts should inspect conditional medians/IQRs via Boxplots alongside $\\eta^2$.',
            km: 'វារសើបនឹងតម្លៃ Outliers ដូចគ្នានឹងមេគុណ Pearson $r$ ដែរ ពីព្រោះទាំង $\\text{BSS}$ និង $\\text{TSS}$ សុទ្ធតែប្រើមធ្យមភាគនព្វន្ធ ($\\bar{x}_g, \\bar{x}$) និងការលើកគម្លាតជាការ៉េ $(x_i - \\bar{x})^2$។ ហេតុនេះ យើងចាំបាច់ត្រូវគូសក្រាហ្វ Boxplot ដើម្បីពិនិត្យមើលមេដ្យាន និង IQR តាមក្រុមបន្ថែមលើតម្លៃ $\\eta^2$។',
          },
        },
      ],
      pythonCodeSnippet: `import numpy as np
import plotly.express as px

def eta_squared(df, cat_col, num_col):
    y = df[num_col].dropna()
    global_mean = y.mean()
    tss = ((y - global_mean) ** 2).sum()
    bss = sum(
        len(grp) * ((grp[num_col].mean() - global_mean) ** 2)
        for _, grp in df.groupby(cat_col)
    )
    return bss / tss

eta2_life = eta_squared(data2007, "continent", "lifeExp")   # 0.6355 (63.5%)
eta2_gdp  = eta_squared(data2007, "continent", "gdpPercap") # 0.4243 (42.4%)

fig = px.box(data2007, x="continent", y="lifeExp", color="continent", points="all", hover_name="country")`,
      pythonCodeExplanation: {
        en: 'This function implements the exact Huygens ANOVA decomposition $\\eta^2 = \\text{BSS}/\\text{TSS}$ from Slide 22 and produces the interactive continent Boxplot from Slide 26.',
        km: 'អនុគមន៍ Python នេះគណនារូបមន្ត $\\eta^2 = \\text{BSS}/\\text{TSS}$ តាមស្លាយទី ២២ ដោយផ្ទាល់ និងគូសក្រាហ្វ Boxplot អន្តរកម្មតាមទ្វីបដូចក្នុងស្លាយទី ២៦។',
      },
    };
  }

  // 4. Categorical × Categorical: Contingency Tables, Chi-Square & Cramér's V (Slides 28–33)
  if (p >= 28 && p <= 33) {
    return {
      slideSpecificLectureNote: customNote,
      mathematicalDerivation: {
        title: {
          en: 'Mathematical Proof & Algebraic Foundation: Why Contingency Degrees of Freedom = (I - 1)(J - 1) & Cramér’s V Bound',
          km: 'សម្រាយបញ្ជាក់គណិតវិទ្យា៖ ហេតុអ្វីដឺក្រេសេរីភាព $\\text{df} = (I - 1)(J - 1)$ និងដែនកំណត់អតិបរមានៃ Cramér’s V',
        },
        proofSteps: [
          {
            en: '1. Proof of $\\text{df} = (I - 1)(J - 1)$: An $I \\times J$ contingency table has $I \\cdot J$ cells, but under the null hypothesis of independence $H_0: P_{i,j} = P_{i,\\cdot}P_{\\cdot,j}$, the row totals $(n_{1,\\cdot}, \\dots, n_{I,\\cdot})$ and column totals $(n_{\\cdot,1}, \\dots, n_{\\cdot,J})$ are fixed constraints. Once you fill any $(I - 1)$ rows and $(J - 1)$ columns, the last cell in every row and every column is 100% determined by subtraction from the marginal totals! Thus, exactly $(I - 1)(J - 1)$ cells are free to vary.',
            km: '១. សម្រាយបញ្ជាក់ថា $\\text{df} = (I - 1)(J - 1)$៖ តារាងខ្វែងទំហំ $I \\times J$ មានប្រអប់សរុប $I \\cdot J$ ប៉ុន្តែផលបូកតាមជួរដេកទាំង $I$ និងផលបូកតាមជួរឈរទាំង $J$ គឺជាតម្លៃថេរ។ នៅពេលយើងដឹងតម្លៃក្នុងប្រអប់ចំនួន $(I - 1)$ ជួរដេក និង $(J - 1)$ ជួរឈរ នោះប្រអប់ចុងក្រោយនៃគ្រប់ជួរដេក និងគ្រប់ជួរឈរ ត្រូវបានកំណត់ដោយស្វ័យប្រវត្តិតាមរយៈការដកពីផលបូកសរុប! ហេតុនេះ ចំនួនប្រអប់ដែលមានសេរីភាពប្រែប្រួលពិតប្រាកដគឺ $\\text{df} = (I - 1)(J - 1)$។',
          },
          {
            en: '2. Maximum Attainable Value of $\\chi^2$: When one categorical variable completely determines the other (perfect association), $\\chi^2$ attains its theoretical upper bound $\\chi^2_{\\max} = N \\times \\min(I - 1, J - 1)$. Dividing $\\chi^2$ by $N \\times \\min(I - 1, J - 1)$ and taking the square root yields Cramér’s $V = \\sqrt{\\frac{\\chi^2 / N}{\\min(I - 1, J - 1)}} \\in [0, 1]$!',
            km: '២. តម្លៃអតិបរមានៃ $\\chi^2$ និងរូបមន្ត Cramér’s $V$៖ នៅពេលអថេរគុណភាពមួយកំណត់អថេរមួយទៀតបាន ១០០% តម្លៃស្ថិតិ $\\chi^2$ នឹងឈានដល់តម្លៃអតិបរមាទ្រឹស្តីគឺ $\\chi^2_{\\max} = N \\times \\min(I - 1, J - 1)$។ ដូច្នេះ ការចែក $\\chi^2$ នឹង $N \\times \\min(I - 1, J - 1)$ រួចបញ្ចេញពីរ៉ាឌីកាល់ ធ្វើឱ្យមេគុណ Cramér’s $V$ ស្ថិតក្នុងចន្លោះ $[0, 1]$ ជានិច្ច។',
          },
        ],
      },
      intuitionTitle: {
        en: 'Core Statistical Intuition (Beyond the Slide): Why Chi-Square (χ²) Grows with Sample Size N & How Cramér’s V Fixes It',
        km: 'ខ្លឹមសារស៊ីជម្រៅក្រៅពីស្លាយ៖ ហេតុអ្វីតម្លៃ Chi-Square (χ²) កើនឡើងតាមទំហំគំរូ N និងរបៀបដែល Cramér’s V កែតម្រូវបញ្ហានេះ',
      },
      intuitionBody: {
        en: 'In the 2021 French Covid-19 vaccine survey ($N = 85,855$ respondents across 7 job categories × 4 vaccine favorability levels), the observed $\\chi^2 \\approx 3,298$ dwarfs the critical value $C_{0.01} = 34.81$ ($\\text{df} = 18$). Why is $\\chi^2$ so huge? Because under independence, expected cell counts are $E_{ij} = \\frac{n_{i\\cdot} n_{\\cdot j}}{N}$. If you multiply every cell in a contingency table by 10, $\\chi^2$ also multiplies by 10 even though the relative proportions haven’t changed at all! That is why $\\chi^2$ only tests *whether* an association exists ($H_0$: Independence), whereas bias-corrected **Cramér’s $\\tilde{V} \\in [0, 1]$** divides $\\chi^2$ by $N \\times \\min(I-1, J-1)$ to measure the true *effect size / strength* of the association ($\\tilde{V} = 0.113$, a modest practical difference across professions).',
        km: 'នៅក្នុងទិន្នន័យស្ទង់មតិវ៉ាក់សាំង Covid-19 នៅប្រទេសបារាំងឆ្នាំ ២០២១ ($N = 85,855$ នាក់) តម្លៃ $\\chi^2 \\approx 3,298$ គឺធំជាងតម្លៃកំណត់ $C_{0.01} = 34.81$ ($\\text{df} = 18$) យ៉ាងខ្លាំង។ ហេតុអ្វីបានជា $\\chi^2$ ធំម្ល៉េះ? ព្រោះតម្លៃ $\\chi^2$ កើនឡើងសមាមាត្រទៅនឹងចំនួនគំរូសរុប $N$! ប្រសិនបើយើងគុណចំនួនមនុស្សក្នុងតារាងនឹង ១០ នោះតម្លៃ $\\chi^2$ ក៏កើនឡើង ១០ ដងដែរ ទោះបីជាភាគរយនៃអ្នកយល់ព្រមចាក់វ៉ាក់សាំងមិនប្រែប្រួលក៏ដោយ។ ហេតុនេះហើយបានជាគេមិនអាចប្រើ $\\chi^2$ តែមួយមុខដើម្បីវាស់កម្រិតខ្លាំងខ្សោយបានទេ គឺត្រូវប្រើមេគុណ **Cramér’s $\\tilde{V} \\in [0, 1]$** ដែលចែកបំបាត់ឥទ្ធិពលនៃ $N$ និងទំហំតារាង $(I, J)$ ទើបដឹងថាកម្រិតទំនាក់ទំនងពិតប្រាកដគឺ $\\tilde{V} = 0.113$ (កម្រិតទំនាក់ទំនងតិចតួចទៅមធ្យម)។',
      },
      thresholdsAndPitfalls: {
        rule: {
          en: 'Cochran’s Validity Rule for $\\chi^2$: All expected cell frequencies must satisfy $E_{ij} \\ge 1$, and at least $80\\%$ of cells must have $E_{ij} \\ge 5$. For Cramér’s $\\tilde{V}$: $<0.10$ (Negligible), $0.10\\text{–}0.29$ (Weak/Modest), $0.30\\text{–}0.49$ (Moderate), $\\ge 0.50$ (Strong).',
          km: 'លក្ខខណ្ឌត្រឹមត្រូវនៃតេស្ត $\\chi^2$ (Cochran’s Rule)៖ ប្រេកង់រំពឹងទុក $E_{ij} = \\frac{n_{i\\cdot}n_{\\cdot j}}{N}$ ក្នុងគ្រប់ប្រអប់ទាំងអស់ត្រូវតែ $\\ge 1$ ហើយយ៉ាងហោចណាស់ $80\\%$ នៃប្រអប់ត្រូវមាន $E_{ij} \\ge 5$។ សម្រាប់ Cramér’s $\\tilde{V}$៖ $<0.10$ (ខ្សោយបំផុត), $0.10\\text{–}0.29$ (ខ្សោយទៅមធ្យម), $0.30\\text{–}0.49$ (មធ្យម), $\\ge 0.50$ (ខ្លាំង)។',
        },
        pitfall: {
          en: 'Common Visualization Mistake: Plotting raw headcounts in a stacked bar chart when category totals differ wildly (e.g., Retired = 26,500 vs. Farmers = 1,200). Always normalize rows/columns to **100% Stacked Bar Charts** (`normalize="index"`) to compare conditional probabilities fairly!',
          km: 'កំហុសក្នុងការគូសក្រាហ្វ៖ ការគូសក្រាហ្វរបារតាមចំនួនមនុស្សផ្ទាល់នៅពេលក្រុមនីមួយៗមានចំនួនមនុស្សខុសគ្នាខ្លាំង។ ត្រូវបម្លែងទៅជា **ក្រាហ្វរបារជាន់គ្នា ១០០% (100% Stacked Barplot)** ទើបអាចប្រៀបធៀបសមាមាត្រភាគរយរវាងក្រុមនីមួយៗបានត្រឹមត្រូវ!',
        },
      },
      stepByStepWalkthrough: {
        step1: {
          en: 'Step 1 (Cross-Tabulate Observed Counts $n_{ij}$): Build the $I \\times J$ contingency table using `pd.crosstab(X, Y)` and compute row/column marginals $n_{i\\cdot}, n_{\\cdot j}$.',
          km: 'ជំហានទី ១ (បង្កើតតារាងខ្វែង $n_{ij}$)៖ បង្កើតតារាងខ្វែង $I \\times J$ ដោយប្រើ `pd.crosstab(X, Y)` និងគណនាផលបូកតាមជួរដេក $n_{i\\cdot}$ និងជួរឈរ $n_{\\cdot j}$។',
        },
        step2: {
          en: 'Step 2 (Compute Expected Counts & $\\chi^2$): Calculate $E_{ij} = \\frac{n_{i\\cdot}n_{\\cdot j}}{N}$ and sum $\\chi^2 = \\sum \\frac{(n_{ij} - E_{ij})^2}{E_{ij}}$ with $\\text{df} = (I-1)(J-1)$.',
          km: 'ជំហានទី ២ (គណនា $E_{ij}$ និង $\\chi^2$)៖ គណនាតម្លៃរំពឹងទុក $E_{ij} = \\frac{n_{i\\cdot}n_{\\cdot j}}{N}$ និងបូកសរុប $\\chi^2 = \\sum \\frac{(n_{ij} - E_{ij})^2}{E_{ij}}$ ដែលមាន $\\text{df} = (I-1)(J-1)$។',
        },
        step3: {
          en: 'Step 3 (Compute Bias-Corrected Cramér’s $\\tilde{V}$): Apply Bergsma (2013) finite-sample bias correction $\\tilde{\\phi}^2 = \\max(0, \\frac{\\chi^2}{N} - \\frac{(I-1)(J-1)}{N-1})$ to get $\\tilde{V} \\in [0, 1]$.',
          km: 'ជំហានទី ៣ (គណនា Cramér’s $\\tilde{V}$ កែលម្អៀង)៖ គណនាមេគុណ $\\tilde{V} \\in [0, 1]$ តាមរូបមន្តកែលម្អៀងរបស់ Bergsma (2013) ដើម្បីវាស់កម្រិតខ្លាំងខ្សោយនៃទំនាក់ទំនង។',
        },
      },
      examVivaQA: [
        {
          question: {
            en: 'Q1: In the Covid-19 vaccine survey (Slide 32), χ² ≈ 3,298 gives a p-value ≈ 0 (rejecting independence), yet Cramér’s V is only 0.113 on Slide 33. How can both be true at the same time?',
            km: 'សំណួរទី ១៖ នៅក្នុងការស្ទង់មតិវ៉ាក់សាំង Covid-19 (ស្លាយទី ៣២) តម្លៃ $\\chi^2 \\approx 3,298$ ផ្តល់ $p\\text{-value} \\approx 0$ (បដិសេធសម្មតិកម្មឯករាជ្យ) ប៉ុន្តែនៅស្លាយទី ៣៣ តម្លៃ Cramér’s $V$ មានត្រឹមតែ $0.113$ ប៉ុណ្ណោះ។ ហេតុអ្វីបានជាលទ្ធផលទាំងពីរនេះកើតឡើងក្នុងពេលតែមួយ?',
          },
          answer: {
            en: 'Because statistical significance ($p\\text{-value}$) is driven by sample size $N = 85,855$: with nearly 86,000 people, even a small difference in vaccine acceptance across jobs is 100% real (not random noise). Cramér’s $V = 0.113$, by contrast, measures practical effect size—showing that while job category has a statistically real effect, its magnitude is relatively weak compared to Continent vs. GDP ($V = 0.504$).',
            km: 'ពីព្រោះភាពមានន័យស្ថិតិ ($p\\text{-value}$) អាស្រ័យលើទំហំគំរូដ៏ធំ $N = 85,855$ នាក់៖ នៅពេលមានមនុស្សជិត ៨៦,០០០ នាក់ សូម្បីតែភាពខុសគ្នាបន្តិចបន្តួចរវាងមុខរបរក៏ត្រូវបានតេស្ត $\\chi^2$ ចាប់បានថាពិតជាមានមែន (មិនមែនកើតឡើងដោយចៃដន្យទេ)។ ចំណែកឯ Cramér’s $V = 0.113$ វាស់កម្រិតខ្លាំងខ្សោយជាក់ស្តែង (Effect Size) ដែលបញ្ជាក់ថា ទំនាក់ទំនងរវាងមុខរបរ និងការយល់ព្រមចាក់វ៉ាក់សាំងមានកម្រិតខ្សោយទៅមធ្យមប៉ុណ្ណោះ បើធៀបនឹងទ្វីប និងចំណាត់ថ្នាក់ GDP ($V = 0.504$)។',
          },
        },
        {
          question: {
            en: 'Q2: Why did Bergsma (2013) introduce the bias-corrected Cramér’s Ṽ on Slide 33 instead of using standard V?',
            km: 'សំណួរទី ២៖ ហេតុអ្វីបានជាលោក Bergsma (2013) បង្កើតរូបមន្តកែលម្អៀង Cramér’s $\\tilde{V}$ នៅលើស្លាយទី ៣៣ ជំនួសឱ្យការប្រើរូបមន្ត $V$ ធម្មតា?',
          },
          answer: {
            en: 'Because under the null hypothesis of independence, the expected value of $\\chi^2$ is $\\mathbb{E}[\\chi^2] = \\text{df} = (I-1)(J-1) > 0$, not zero! Consequently, standard $V$ has a positive upward bias in finite samples (especially when $I, J$ are large or $n$ is small). Subtracting $\\frac{\\text{df}}{n-1}$ inside $\\tilde{\\phi}^2$ removes this finite-sample inflation.',
            km: 'ពីព្រោះនៅក្រោមសម្មតិកម្មឯករាជ្យ $H_0$ តម្លៃរំពឹងទុករបស់ $\\chi^2$ គឺ $\\mathbb{E}[\\chi^2] = \\text{df} = (I-1)(J-1) > 0$ មិនមែនស្មើសូន្យឡើយ! ហេតុនេះ រូបមន្ត $V$ ធម្មតាតែងតែផ្តល់តម្លៃខ្ពស់ហួសការពិត (Upward bias) នៅពេលចំនួនគំរូ $n$ តូច ឬចំនួនក្រុម $(I, J)$ ច្រើន។ ការដកចេញនូវតួ $\\frac{\\text{df}}{n-1}$ ក្នុងរូបមន្ត $\\tilde{V}$ ជួយលុបបំបាត់ភាពលម្អៀងនេះ។',
          },
        },
      ],
      pythonCodeSnippet: `import numpy as np
import pandas as pd
import scipy.stats as stats

# 1. Build Contingency Table & Run Chi-Square Test
ct = pd.crosstab(df["profession"], df["vaccine_favor"])
chi2, p_val, dof, expected = stats.chi2_contingency(ct)

# 2. Compute Bias-Corrected Cramér's V (Bergsma 2013 — Slide 33)
n = ct.to_numpy().sum()
r, c = ct.shape
phi2_corr = max(0, (chi2 / n) - ((c - 1) * (r - 1)) / (n - 1))
r_corr = r - ((r - 1) ** 2) / (n - 1)
c_corr = c - ((c - 1) ** 2) / (n - 1)
cramers_v_tilde = np.sqrt(phi2_corr / min(r_corr - 1, c_corr - 1))`,
      pythonCodeExplanation: {
        en: 'This code computes both the classic $\\chi^2$ test (`scipy.stats.chi2_contingency`) and the exact bias-corrected Cramér’s $\\tilde{V}$ formula shown on Slide 33.',
        km: 'កូដនេះគណនាទាំងតេស្ត $\\chi^2$ (`scipy.stats.chi2_contingency`) និងរូបមន្ត Cramér’s $\\tilde{V}$ ដែលកែលម្អៀងរួចតាមស្លាយទី ៣៣ យ៉ាងត្រឹមត្រូវ។',
      },
    };
  }

  // 5. Multivariate Extensions, Time Series, Animated Plotly & Golden Rule Conclusion (Slides 34–41)
  return {
    slideSpecificLectureNote: customNote,
    mathematicalDerivation: {
      title: {
        en: 'Mathematical Proof & Algebraic Foundation: Area-Proportional Bubble Scaling & Combinatorial Complexity O(p²)',
        km: 'សម្រាយបញ្ជាក់គណិតវិទ្យា៖ ការកំណត់កាំរង្វង់តាមក្រឡាផ្ទៃពពុះ និងចំនួនគូបន្សំទ្វេអថេរ O(p²)',
      },
      proofSteps: [
        {
          en: '1. Perceptual Area Scaling ($r_i \\propto \\sqrt{\\text{pop}_i}$): Human vision perceives the 2D **area** $A_i = \\pi r_i^2$ of a circle, not its radius $r_i$. To ensure $\\frac{A_i}{A_{\\max}} = \\frac{\\text{pop}_i}{\\text{pop}_{\\max}}$, we must set $\\pi r_i^2 = \\pi r_{\\max}^2 \\left(\\frac{\\text{pop}_i}{\\text{pop}_{\\max}}\\right) \\implies r_i = r_{\\max}\\sqrt{\\frac{\\text{pop}_i}{\\text{pop}_{\\max}}}$. If an analyst mistakenly sets $r_i \\propto \\text{pop}_i$, a country with $10\\times$ the population gets $100\\times$ the screen area!',
          km: '១. ការធ្វើមាត្រដ្ឋានកាំរង្វង់តាមក្រឡាផ្ទៃ ($r_i \\propto \\sqrt{\\text{pop}_i}$)៖ ភ្នែកមនុស្សវាយតម្លៃទំហំពពុះតាមរយៈ **ក្រឡាផ្ទៃ** $A_i = \\pi r_i^2$ មិនមែនតាមកាំរង្វង់ $r_i$ ឡើយ។ ដើម្បីឱ្យផលធៀបក្រឡាផ្ទៃ $\\frac{A_i}{A_{\\max}} = \\frac{\\text{pop}_i}{\\text{pop}_{\\max}}$ យើងត្រូវកំណត់កាំរង្វង់ $r_i = r_{\\max}\\sqrt{\\frac{\\text{pop}_i}{\\text{pop}_{\\max}}}$។ ប្រសិនបើយើងយកកាំរង្វង់សមាមាត្រនឹងចំនួនប្រជាជនផ្ទាល់ ប្រទេសដែលមានប្រជាជនច្រើនជាងគេ ១០ ដង នឹងមានពពុះធំជាងគេដល់ទៅ ១០០ ដង!',
        },
        {
          en: '2. Combinatorial Explosion of Bivariate Pairs $\\binom{p}{2} = \\frac{p(p-1)}{2}$: In a table with $p$ columns, choosing any 2 distinct columns without regard to order yields $\\binom{p}{2} = \\frac{p(p-1)}{2}$ pairs. For $p = 5$ (Gapminder), $\\binom{5}{2} = 10$ pairs; for $p = 50$, $\\binom{50}{2} = 1,225$ pairs; for $p = 200$, $\\binom{200}{2} = 19,900$ pairs—proving why statistical screening ($r, \\rho, \\eta^2, \\tilde{V}$) must precede visualization!',
          km: '២. កំណើនទ្វេគុណនៃចំនួនគូអថេរ $\\binom{p}{2} = \\frac{p(p-1)}{2}$៖ នៅក្នុងតារាងទិន្នន័យដែលមាន $p$ ជួរឈរ ចំនួនគូទ្វេអថេរសរុបគឺ $\\binom{p}{2} = \\frac{p(p-1)}{2}$។ សម្រាប់ $p = 5$ មានតែ $10$ គូប៉ុណ្ណោះ ប៉ុន្តែសម្រាប់ $p = 50$ មានដល់ទៅ $1,225$ គូ ហើយបើ $p = 200$ មានរហូតដល់ $19,900$ គូ! នេះគឺជាមូលហេតុគណិតវិទ្យាដែលបញ្ជាក់ថា យើងត្រូវតែគណនាសូចនាករស្ថិតិ ($r, \\rho, \\eta^2, \\tilde{V}$) ដើម្បីចម្រាញ់រកគូសំខាន់ៗជាមុនសិន មុននឹងគូសក្រាហ្វ។',
        },
      ],
    },
    intuitionTitle: {
      en: 'Core Statistical Intuition (Beyond the Slide): Visual Channel Hierarchy, Plotly Animation & The Combinatorial Golden Rule',
      km: 'ខ្លឹមសារស៊ីជម្រៅក្រៅពីស្លាយ៖ ឋានានុក្រមនៃឆានែលគំនូសក្រាហ្វពហុអថេរ ចលនា Plotly និងវិធានមាសនៃការវិភាគទិន្នន័យ',
    },
    intuitionBody: {
      en: 'In the final section of Chapter II (Slides 34–41), we extend 2D scatterplots into 4D/5D Multivariate visualizations using pre-attentive visual channels: Position $(X, Y)$, Color Hue/Luminance ($Z_1$), Marker Shape ($Z_2$), Bubble Area Size ($Z_3 = \\text{pop}$), and Animation Frame ($T = \\text{year } 1952\\dots 2007$). Beyond the slide: according to Cleveland & McGill’s perceptual hierarchy, human eyes judge planar position $(X,Y)$ most accurately, followed by length/area, then color hue, and finally marker shape (which fails if categories $> 6$). Finally, why does Slide 40 warn against plotting everything first? Because for a dataset with $p$ columns, there are $\\binom{p}{2} = \\frac{p(p-1)}{2} = O(p^2)$ bivariate pairs! With $p = 100$ features, that is $4,950$ charts—making automated statistical screening ($r, \\rho, \\eta^2, \\tilde{V}$) mandatory before plotting.',
      km: 'នៅក្នុងផ្នែកចុងក្រោយនៃជំពូកទី ២ (ស្លាយទី ៣៤–៤១) យើងពង្រីកក្រាហ្វពី ២ អថេរ $(X, Y)$ ទៅជាក្រាហ្វពហុអថេរ (4D/5D Multivariate) ដោយបន្ថែម៖ ពណ៌ (Color), រូបរាងចំណុច (Shape), ទំហំពពុះ (Bubble Size = ចំនួនប្រជាជន) និងចលនាតាមពេលវេលា (Animation Frame = ឆ្នាំ ១៩៥២–២០០៧ ក្នុង Plotly)។ ចំណុចសំខាន់ក្រៅពីស្លាយ៖ ភ្នែកមនុស្សអាចមើលទីតាំង $(X, Y)$ និងទំហំពពុះបានច្បាស់ជាងការមើលរូបរាងចំណុច (Shape មិនគួរប្រើលើសពី ៥–៦ ក្រុមឡើយ)។ ជាចុងក្រោយ ហេតុអ្វីស្លាយទី ៤០ ហាមមិនឱ្យគូសក្រាហ្វគ្រប់គូទាំងអស់មុននឹងគណនាសូចនាករស្ថិតិ? ព្រោះបើទិន្នន័យមាន $p$ អថេរ ចំនួនគូក្រាហ្វសរុបគឺ $\\binom{p}{2} = \\frac{p(p-1)}{2}$! បើ $p = 100$ អថេរ នោះមានដល់ទៅ $4,950$ ក្រាហ្វឯណោះ—ដូច្នេះ ត្រូវគណនាម៉ាទ្រីសសូចនាករ $(r, \\rho, \\eta^2, \\tilde{V})$ ជាមុនសិន ដើម្បីចម្រាញ់យកតែគូណាដែលមានតម្លៃខ្ពស់មកគូសក្រាហ្វប៉ុណ្ណោះ។',
    },
    thresholdsAndPitfalls: {
      rule: {
        en: 'Golden Rule Screening Workflow: 1) Compute the $p \\times p$ indicator matrix ($|\\rho|$ for Quant×Quant, $\\eta^2$ for Quant×Qual, $\\tilde{V}$ for Qual×Qual). 2) Filter pairs exceeding significance thresholds ($|\\rho| > 0.50$, $\\eta^2 > 0.14$, $\\tilde{V} > 0.25$). 3) Build rich interactive Plotly charts for those top pairs.',
        km: 'លំហូរការងារតាមវិធានមាស (Golden Rule Workflow)៖ ១) គណនាម៉ាទ្រីសសូចនាករស្ថិតិទាំងអស់ជាមុន ($|\\rho|, \\eta^2, \\tilde{V}$)។ ២) ចម្រាញ់យកតែគូអថេរដែលមានតម្លៃសូចនាករខ្ពស់ ($|\\rho| > 0.50$, $\\eta^2 > 0.14$, $\\tilde{V} > 0.25$)។ ៣) គូសក្រាហ្វអន្តរកម្ម Plotly ឱ្យលម្អិតសម្រាប់គូសំខាន់ៗទាំងនោះ។',
      },
      pitfall: {
        en: 'Bubble Chart perceptual trap: Never map variable values to bubble *radius* ($r \\propto Z$), because circle area grows quadratically ($A = \\pi r^2$), making a country with $2\\times$ population look $4\\times$ larger! Always scale bubble *area* ($r \\propto \\sqrt{Z}$), which `px.scatter(..., size="pop")` handles automatically.',
        km: 'កំហុសក្នុងការគូសក្រាហ្វពពុះ (Bubble Size Trap)៖ ហាមយកតម្លៃទិន្នន័យទៅដាក់ជាកាំរង្វង់ ($r \\propto Z$) ដោយផ្ទាល់ ព្រោះក្រឡាផ្ទៃរង្វង់កើនឡើងជាការ៉េ ($A = \\pi r^2$) ដែលធ្វើឱ្យទំហំពពុះមើលទៅធំហួសការពិត! ត្រូវឱ្យក្រឡាផ្ទៃសមាមាត្រនឹងតម្លៃទិន្នន័យ ($r \\propto \\sqrt{Z}$) ដូចដែល `px.scatter(..., size="pop")` ធ្វើដោយស្វ័យប្រវត្តិ។',
      },
    },
    stepByStepWalkthrough: {
      step1: {
        en: 'Step 1 (Bind Primary Planar Axes $X, Y$): Assign the two strongest quantitative variables to $X$ (`gdpPercap` on $\\log_{10}$ scale) and $Y$ (`lifeExp`).',
        km: 'ជំហានទី ១ (កំណត់អ័ក្សគោល $X, Y$)៖ ដាក់អថេរបរិមាណសំខាន់ពីរនៅលើអ័ក្ស $X$ (`gdpPercap` មាត្រដ្ឋាន $\\log_{10}$) និងអ័ក្ស $Y$ (`lifeExp`)។',
      },
      step2: {
        en: 'Step 2 (Layer Visual Channels): Map Categorical grouping (`continent`) to `color`, third numeric metric (`pop`) to bubble `size`, and `country` to `hover_name`.',
        km: 'ជំហានទី ២ (បន្ថែមឆានែលពហុអថេរ)៖ ភ្ជាប់អថេរ `continent` ទៅនឹងពណ៌ (`color`), ចំនួនប្រជាជន `pop` ទៅនឹងទំហំពពុះ (`size`) និងឈ្មោះប្រទេសទៅនឹង `hover_name`។',
      },
      step3: {
        en: 'Step 3 (Bind Temporal Animation Frame): Pass `animation_frame="year"` and `animation_group="country"` in `plotly.express` with fixed axis bounds (`range_x`, `range_y`).',
        km: 'ជំហានទី ៣ (បង្កើតចលនាតាមពេលវេលា)៖ បន្ថែម `animation_frame="year"` និងកំណត់ដែនអ័ក្ស (`range_x`, `range_y`) ឱ្យថេរដើម្បីមើលចលនាវិវត្តពីឆ្នាំ ១៩៥២ ដល់ ២០០៧។',
      },
    },
    examVivaQA: [
      {
        question: {
          en: 'Q1: On Slide 35 vs. Slide 36, why does encoding `pop` as Bubble Size (Slide 36) work much better than encoding `gdp_category` as Marker Shape (Slide 35)?',
          km: 'សំណួរទី ១៖ រវាងស្លាយទី ៣៥ និងស្លាយទី ៣៦ ហេតុអ្វីបានជាការតាងចំនួនប្រជាជន `pop` ជាទំហំពពុះ (Bubble Size) មើលងាយយល់ជាងការតាង `gdp_category` ជារូបរាងចំណុច (Marker Shape)?',
        },
        answer: {
          en: 'Because Color Hue and Marker Shape interfere perceptually when tiny markers overlap (conjunctive search requires slow serial scanning), whereas Color Hue and Circle Area are pre-attentively separable channels that also preserve the full continuous precision of `pop`!',
          km: 'ពីព្រោះនៅពេលចំណុចតូចៗជាន់គ្នា ភ្នែកមនុស្សពិបាកបែងចែករូបរាងចំណុច (មូល ការ៉េ ពេជ្រ) ក្នុងពេលជាមួយគ្នានឹងការមើលពណ៌ណាស់។ ផ្ទុយទៅវិញ ពណ៌ (Color) និងទំហំក្រឡាផ្ទៃពពុះ (Bubble Size) គឺជាឆានែលដាច់ដោយឡែកដែលខួរក្បាលអាចមើលយល់ភ្លាមៗ ហើយថែមទាំងរក្សាតម្លៃលេខពិតប្រាកដរបស់ `pop` ដោយមិនបាច់បំបែកជាក្រុមទៀតផង។',
        },
      },
      {
        question: {
          en: 'Q2: Why is it critical to fix `range_x=[100, 100000]` and `range_y=[25, 90]` when creating an animated Plotly Bubble Chart across 1952–2007 (Slide 39)?',
          km: 'សំណួរទី ២៖ ហេតុអ្វីបានជាយើងចាំបាច់ត្រូវកំណត់ដែនអ័ក្សឱ្យថេរ (`range_x=[100, 100000]` និង `range_y=[25, 90]`) នៅពេលបង្កើតក្រាហ្វចលនា Plotly ពីឆ្នាំ ១៩៥២ ដល់ ២០០៧ (ស្លាយទី ៣៩)?',
        },
        answer: {
          en: 'If axis limits are not fixed, Plotly auto-rescales the axes on every animation frame, causing the coordinate grid to jump and making it impossible to judge true country trajectories over time!',
          km: 'ប្រសិនបើយើងមិនកំណត់ដែនអ័ក្សឱ្យថេរទេ អ័ក្សក្រាហ្វនឹងលោតផ្លាស់ប្តូរមាត្រដ្ឋានគ្រប់ឆ្នាំទាំងអស់ ដែលធ្វើឱ្យអ្នកមើលវង្វេង និងមិនអាចមើលឃើញគន្លងនៃការរីកចម្រើនពិតប្រាកដរបស់ប្រទេសនីមួយៗធៀបនឹងពេលវេលាឡើយ។',
        },
      },
    ],
    pythonCodeSnippet: `import plotly.express as px

# Exact Plotly Animated 5D Bubble Chart from Slide 39 (1952 -> 2007)
fig = px.scatter(
    gapminder,
    x="gdpPercap",
    y="lifeExp",
    animation_frame="year",
    animation_group="country",
    size="pop",
    color="continent",
    hover_name="country",
    log_x=True,
    size_max=55,
    range_x=[100, 100000],
    range_y=[25, 90],
    title="The Evolution of the World: GDP vs. Life Expectancy (1952–2007)"
)
fig.show()`,
    pythonCodeExplanation: {
      en: 'This single `px.scatter` call encodes 5 dimensions simultaneously ($X$: GDP, $Y$: LifeExp, Size: Population, Color: Continent, Time Frame: Year 1952–2007) with full interactive touch/hover.',
      km: 'កូដ `px.scatter` នេះបង្ហាញវិមាត្រទិន្នន័យទាំង ៥ ក្នុងពេលតែមួយ (អ័ក្ស $X$: GDP, អ័ក្ស $Y$: អាយុរំពឹងរស់, ទំហំពពុះ: ចំនួនប្រជាជន, ពណ៌: ទ្វីប, និងចលនាពេលវេលា: ឆ្នាំ ១៩៥២–២០០៧)។',
    },
  };
}
