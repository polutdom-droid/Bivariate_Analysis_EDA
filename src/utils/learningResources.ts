export type ResourceLinkType = 'youtube' | 'website';

export interface LearningResourceLink {
  id: string;
  type: ResourceLinkType;
  sourceName: string;
  badgeLabel: { en: string; km: string };
  title: { en: string; km: string };
  description: { en: string; km: string };
  url: string;
}

export interface SlideResourceBundle {
  topicLabel: { en: string; km: string };
  links: LearningResourceLink[];
}

const LINKS: Record<string, LearningResourceLink> = {
  // === Websites & Interactive Documentation (all HTTP 200 verified) ===
  wilke_book: {
    id: 'wilke_book',
    type: 'website',
    sourceName: 'Claus Wilke · DataViz Book',
    badgeLabel: { en: 'Free Textbook', km: 'សៀវភៅអនឡាញឥតគិតថ្លៃ' },
    title: {
      en: 'Fundamentals of Data Visualization (Complete Online Book)',
      km: 'សៀវភៅ Fundamentals of Data Visualization របស់ Claus O. Wilke',
    },
    description: {
      en: 'Read the full theoretical reference cited in Slides 1–4 covering visual perception, palettes, and chart design.',
      km: 'អានឯកសារគោលដែលត្រូវបានដកស្រង់ក្នុងស្លាយទី ១–៤ អំពីគោលការណ៍រចនាក្រាហ្វ ការជ្រើសរើសពណ៌ និងការយល់ដឹងតាមភ្នែក។',
    },
    url: 'https://clauswilke.com/dataviz/',
  },
  wilke_directory: {
    id: 'wilke_directory',
    type: 'website',
    sourceName: 'Claus Wilke · Chapter 5',
    badgeLabel: { en: 'Visual Reference', km: 'មគ្គុទ្ទេសក៍ជ្រើសក្រាហ្វ' },
    title: {
      en: 'Directory of Visualizations: Choosing the Right Plot Type',
      km: 'តារាងណែនាំវិធីជ្រើសរើសប្រភេទក្រាហ្វឱ្យត្រូវតាមប្រភេទទិន្នន័យ',
    },
    description: {
      en: 'Quickly match Univariate, Bivariate Quant×Quant, Quant×Qual, and Qual×Qual pairs to the correct graphic family.',
      km: 'ផ្គូផ្គងទម្រង់ទិន្នន័យបរិមាណ និងគុណភាព ទៅនឹងប្រភេទក្រាហ្វត្រឹមត្រូវបំផុតតាមទ្រឹស្តីស្ថិតិ។',
    },
    url: 'https://clauswilke.com/dataviz/directory-of-visualizations.html',
  },
  wilke_boxplots: {
    id: 'wilke_boxplots',
    type: 'website',
    sourceName: 'Claus Wilke · Chapter 9',
    badgeLabel: { en: 'Visual Theory', km: 'ទ្រឹស្តីរបាយទិន្នន័យ' },
    title: {
      en: 'Visualizing Many Distributions at Once (Boxplots & Violins)',
      km: 'ការប្រៀបធៀបរបាយទិន្នន័យច្រើនក្រុមដោយប្រើ Boxplot និង Violinplot',
    },
    description: {
      en: 'Explains Tukey quartiles, whisker fences, why boxplots conceal bimodal peaks, and how violin/KDE plots expose shape.',
      km: 'ពន្យល់ពី Q₁, Q₂, Q₃ និងមូលហេតុដែល Violinplot អាចបង្ហាញកំពូលពីរ (Bimodal) ដែល Boxplot លាក់បាំង។',
    },
    url: 'https://clauswilke.com/dataviz/boxplots-violins.html',
  },
  seaborn_boxplot: {
    id: 'seaborn_boxplot',
    type: 'website',
    sourceName: 'Seaborn · Python Docs',
    badgeLabel: { en: 'Python API Docs', km: 'ឯកសារកូដ Python' },
    title: {
      en: 'seaborn.boxplot() — Parameters, IQR Whiskers & Outliers',
      km: 'ឯកសារផ្លូវការ seaborn.boxplot() សម្រាប់គូរ Boxplot និងចាប់ Outliers',
    },
    description: {
      en: 'Reference parameters like whis=1.5, hue, and orient to build grouped boxplots exactly like the lecture code.',
      km: 'សិក្សាប៉ារ៉ាម៉ែត្រសំខាន់ៗដូចជា whis=1.5, hue និង x/y សម្រាប់គូរ Boxplot តាមក្រុមក្នុង Python។',
    },
    url: 'https://seaborn.pydata.org/generated/seaborn.boxplot.html',
  },
  seaborn_violinplot: {
    id: 'seaborn_violinplot',
    type: 'website',
    sourceName: 'Seaborn · Python Docs',
    badgeLabel: { en: 'Python API Docs', km: 'ឯកសារកូដ Python' },
    title: {
      en: 'seaborn.violinplot() — Kernel Density & Split Comparison',
      km: 'ឯកសារផ្លូវការ seaborn.violinplot() សម្រាប់វិភាគដង់ស៊ីតេ KDE',
    },
    description: {
      en: 'Learn how bw_method, cut, and split=True control kernel density curves inside grouped ANOVA/distribution visuals.',
      km: 'មើលរបៀបប្រើ split=True និងការលៃតម្រូវខ្សែកោងដង់ស៊ីតេ KDE ដើម្បីប្រៀបធៀបរបាយពីរក្រុម។',
    },
    url: 'https://seaborn.pydata.org/generated/seaborn.violinplot.html',
  },
  wilke_associations: {
    id: 'wilke_associations',
    type: 'website',
    sourceName: 'Claus Wilke · Chapter 12',
    badgeLabel: { en: 'Visual Theory', km: 'ទ្រឹស្តីទំនាក់ទំនង 2D/PCA' },
    title: {
      en: 'Visualizing Associations Among Two or More Quantitative Variables',
      km: 'ការបង្ហាញទំនាក់ទំនងរវាងអថេរបរិមាណ ២ ឬច្រើន (Scatter, Bubble, PCA)',
    },
    description: {
      en: 'Covers scatterplots, correlation matrices, bubble sizing, and PCA dimension reduction for high-dimensional data.',
      km: 'សិក្សាពី Scatterplot, Correlogram, Bubble Chart និងវិធីកាត់បន្ថយវិមាត្រ PCA សម្រាប់ទិន្នន័យច្រើនអថេរ។',
    },
    url: 'https://clauswilke.com/dataviz/visualizing-associations.html',
  },
  scipy_pearsonr: {
    id: 'scipy_pearsonr',
    type: 'website',
    sourceName: 'SciPy · Statistical Docs',
    badgeLabel: { en: 'SciPy Reference', km: 'ឯកសារគណនាស្ថិតិ' },
    title: {
      en: 'scipy.stats.pearsonr — Linear Correlation & p-Value Documentation',
      km: 'ឯកសារ scipy.stats.pearsonr សម្រាប់គណនាមេគុណរឹសុង r និង p-value',
    },
    description: {
      en: 'Official formula notes, alternative hypotheses, confidence intervals, and exact Python usage for Pearson r.',
      km: 'រូបមន្តផ្លូវការ ការធ្វើតេស្តសម្មតិកម្ម p-value និងកូដគំរូ Python សម្រាប់មេគុណទំនាក់ទំនងលីនេអ៊ែរ r។',
    },
    url: 'https://docs.scipy.org/doc/scipy/reference/generated/scipy.stats.pearsonr.html',
  },
  scipy_spearmanr: {
    id: 'scipy_spearmanr',
    type: 'website',
    sourceName: 'SciPy · Statistical Docs',
    badgeLabel: { en: 'SciPy Reference', km: 'ឯកសារគណនាស្ថិតិ' },
    title: {
      en: 'scipy.stats.spearmanr — Monotonic Rank Correlation Documentation',
      km: 'ឯកសារ scipy.stats.spearmanr សម្រាប់គណនាមេគុណលំដាប់ Spearman ρ',
    },
    description: {
      en: 'Deep dive into rank tie-handling, monotonic sensitivity, and computing robust ρ when extreme outliers distort Pearson r.',
      km: 'ស្វែងយល់ពីការបម្លែងតម្លៃទៅជាចំណាត់ថ្នាក់ (Rank) និងភាពធន់នឹង Outliers ធៀបនឹងរូបមន្ត Pearson r។',
    },
    url: 'https://docs.scipy.org/doc/scipy/reference/generated/scipy.stats.spearmanr.html',
  },
  wilke_logscales: {
    id: 'wilke_logscales',
    type: 'website',
    sourceName: 'Claus Wilke · Chapter 3',
    badgeLabel: { en: 'Coordinate Systems', km: 'មាត្រដ្ឋានលោការីត' },
    title: {
      en: 'Coordinate Systems & Axes: Linear vs. Logarithmic Scales',
      km: 'ប្រព័ន្ធអ័ក្ស និងភាពខុសគ្នារវាងមាត្រដ្ឋានលីនេអ៊ែរ និងលោការីត Log₁₀',
    },
    description: {
      en: 'Understand why log₁₀ spacing makes multiplicative ratios equidistant and unpacks right-skewed GDP/income data.',
      km: 'យល់ច្បាស់ថាហេតុអ្វីអ័ក្ស Log₁₀ ធ្វើឱ្យគម្លាតគុណ (១០×) មានចម្ងាយស្មើគ្នា និងជួយបន្លាតទិន្នន័យ GDP ដែលកកស្ទះ។',
    },
    url: 'https://clauswilke.com/dataviz/coordinate-systems-axes.html',
  },
  wiki_anscombe: {
    id: 'wiki_anscombe',
    type: 'website',
    sourceName: 'Wikipedia · Classic Case',
    badgeLabel: { en: 'Dataset Proof', km: 'ទិន្នន័យបញ្ជាក់ការពិត' },
    title: {
      en: "Anscombe's Quartet — Identical Summary Stats, 4 Different Plots",
      km: "សំណុំទិន្នន័យ Anscombe's Quartet៖ មធ្យម និង r ដូចគ្នា តែរូបរាងក្រាហ្វខុសគ្នាទាំង ៤",
    },
    description: {
      en: 'Inspect the exact numerical coordinates (x, y) and why plotting scatter diagrams must always precede fitting regression lines.',
      km: 'ពិនិត្យតួលេខទាំង ៤ ក្រុមរបស់ Anscombe ដែលមានមធ្យម វ៉ារ្យង់ និង r ≈ 0.816 ស្មើគ្នា ប៉ុន្តែរូបរាងពិតខុសគ្នាដាច់។',
    },
    url: 'https://en.wikipedia.org/wiki/Anscombe%27s_quartet',
  },
  wilke_overplotting: {
    id: 'wilke_overplotting',
    type: 'website',
    sourceName: 'Claus Wilke · Chapter 18',
    badgeLabel: { en: 'Scatter Clarity', km: 'ដំណោះស្រាយចំណុចត្រួតគ្នា' },
    title: {
      en: 'Handling Overlapping Points: Transparency, Jitter & 2D Density',
      km: 'វិធីដោះស្រាយបញ្ហាចំណុច Scatter ត្រួតលើគ្នា (Alpha, Jitter & Density)',
    },
    description: {
      en: 'Essential techniques for dense bivariate scatterplots when raw markers overlap and hide concentration patterns.',
      km: 'បច្ចេកទេសកែសម្រួលក្រាហ្វពេលចំណុចទិន្នន័យកកស្ទះត្រួតលើគ្នា ដូចជាការបន្ថយកម្រិតថ្លា Alpha និងការប្រើ Log Scale។',
    },
    url: 'https://clauswilke.com/dataviz/overlapping-points.html',
  },
  scipy_anova: {
    id: 'scipy_anova',
    type: 'website',
    sourceName: 'SciPy · Statistical Docs',
    badgeLabel: { en: 'One-Way ANOVA', km: 'តេស្ត ANOVA ផ្លូវការ' },
    title: {
      en: 'scipy.stats.f_oneway — Computing the ANOVA F-Statistic & p-Value',
      km: 'ឯកសារ scipy.stats.f_oneway សម្រាប់វិភាគវ៉ារ្យង់ F-test និងកម្រិត p-value',
    },
    description: {
      en: 'Official Python implementation details, normality/homoscedasticity assumptions, and Welch/Kruskal alternatives.',
      km: 'រូបមន្តគណនាប្រៀបធៀបវ៉ារ្យង់រវាងក្រុម (BSS) និងក្នុងក្រុម (WSS) ព្រមទាំងលក្ខខណ្ឌតម្រូវមុនប្រើប្រាស់។',
    },
    url: 'https://docs.scipy.org/doc/scipy/reference/generated/scipy.stats.f_oneway.html',
  },
  scipy_chi2: {
    id: 'scipy_chi2',
    type: 'website',
    sourceName: 'SciPy · Statistical Docs',
    badgeLabel: { en: 'Chi-Square Docs', km: 'តេស្ត Chi-Square χ²' },
    title: {
      en: 'scipy.stats.chi2_contingency — Contingency Table & Expected Counts',
      km: 'ឯកសារ scipy.stats.chi2_contingency សម្រាប់តារាងតភ្ជាប់ និងតម្លៃរំពឹងទុក E_ij',
    },
    description: {
      en: 'Shows how expected frequencies E_ij, Yates continuity correction, and degrees of freedom df = (r-1)(c-1) are computed.',
      km: 'មើលរបៀបគណនាតារាងតម្លៃរំពឹងទុក E_ij, ដឺក្រេសេរី df = (r-1)(c-1) និងតម្លៃ χ² ក្នុង Python។',
    },
    url: 'https://docs.scipy.org/doc/scipy/reference/generated/scipy.stats.chi2_contingency.html',
  },
  wiki_cramers_v: {
    id: 'wiki_cramers_v',
    type: 'website',
    sourceName: 'Wikipedia · Effect Size',
    badgeLabel: { en: 'Effect Size Proof', km: 'រូបមន្ត Cramér V & Ṽ' },
    title: {
      en: "Cramér's V & Bergsma Bias Correction (Ṽ) for Categorical Tables",
      km: "រូបមន្តមេគុណ Cramér's V និងទម្រង់កែលំអៀង Ṽ (Bias-Corrected)",
    },
    description: {
      en: 'Explains normalization from raw χ² into [0, 1] and why larger tables need Bergsma (2013) bias correction Ṽ.',
      km: 'សិក្សាពីមូលហេតុដែល χ² ត្រូវចែកបម្លែងឱ្យនៅចន្លោះ [0, 1] និងរូបមន្តកាត់បន្ថយលំអៀង Ṽ សម្រាប់តារាងធំ។',
    },
    url: 'https://en.wikipedia.org/wiki/Cram%C3%A9r%27s_V',
  },
  seaborn_heatmap: {
    id: 'seaborn_heatmap',
    type: 'website',
    sourceName: 'Seaborn · Python Docs',
    badgeLabel: { en: 'Matrix Visuals', km: 'ក្រាហ្វ Heatmap' },
    title: {
      en: 'seaborn.heatmap() — Annotating Contingency & Correlation Matrices',
      km: 'ឯកសារ seaborn.heatmap() សម្រាប់បង្ហាញតារាង O_ij, E_ij និងម៉ាទ្រីសទំនាក់ទំនង',
    },
    description: {
      en: 'Configure annot=True, fmt, cmap, and center to visualize categorical residuals and correlation grids clearly.',
      km: 'របៀបប្រើ annot=True និងពណ៌ cmap ដើម្បីឱ្យឃើញភាពខុសគ្នារវាងតម្លៃពិត O_ij និងតម្លៃរំពឹងទុក E_ij ច្បាស់លាស់។',
    },
    url: 'https://seaborn.pydata.org/generated/seaborn.heatmap.html',
  },
  wilke_proportions: {
    id: 'wilke_proportions',
    type: 'website',
    sourceName: 'Claus Wilke · Chapters 10–11',
    badgeLabel: { en: 'Part-to-Whole', km: 'សមាមាត្រ និង Treemap' },
    title: {
      en: 'Visualizing Proportions: Stacked Bars, Mosaic Plots & Nested Treemaps',
      km: 'ការបង្ហាញសមាមាត្រភាគរយ៖ 100% Stacked Bar, Mosaic និង Treemap',
    },
    description: {
      en: 'Detailed comparison of grouped bars vs. 100% stacked bars and hierarchical nested proportions (Continent → Region).',
      km: 'ការប្រៀបធៀបរវាងក្រាហ្វសសរដាក់តម្រួត ១០០% និងក្រាហ្វប្រអប់ថ្នាក់ក្រោម Treemap សម្រាប់ទិន្នន័យគុណភាពច្រើន។',
    },
    url: 'https://clauswilke.com/dataviz/visualizing-proportions.html',
  },
  plotly_treemaps: {
    id: 'plotly_treemaps',
    type: 'website',
    sourceName: 'Plotly · Python Express',
    badgeLabel: { en: 'Interactive Treemaps', km: 'Treemap អន្តរកម្ម' },
    title: {
      en: 'plotly.express.treemap — Interactive Hierarchical Rectangles',
      km: 'ឯកសារ Plotly Treemap សម្រាប់បង្ហាញសមាមាត្រឋានានុក្រម Continent → Category',
    },
    description: {
      en: 'Official Plotly Express gallery showing path hierarchies, area weighting, and hover tooltips for categorical proportions.',
      km: 'ឧទាហរណ៍កូដ px.treemap() ដោយប្រើ path=[continent, gdp_cat] និងទំហំប្រអប់តាមចំនួនប្រទេស។',
    },
    url: 'https://plotly.com/python/treemaps/',
  },
  swd_spaghetti: {
    id: 'swd_spaghetti',
    type: 'website',
    sourceName: 'Storytelling with Data',
    badgeLabel: { en: 'Design Critique', km: 'វិធីកែ Spaghetti Plot' },
    title: {
      en: 'Avoiding the Spaghetti Graph — Focus+Context & Small Multiples',
      km: 'វិធីសាស្ត្រជៀសវាង Spaghetti Plot ដោយបន្លិចខ្សែសំខាន់ និងបំបែកក្រាហ្វតូចៗ',
    },
    description: {
      en: 'Step-by-step design case study showing how greyed context lines + a highlighted focal path eliminate visual noise.',
      km: 'មេរៀនរចនាក្រាហ្វជាក់ស្តែងអំពីការប្តូរពណ៌ខ្សែផ្សេងទៀតទៅជាប្រផេះ និងបន្លិចខ្សែគោលដៅ (Focus+Context) ឬ Small Multiples។',
    },
    url: 'https://www.storytellingwithdata.com/blog/2013/03/avoiding-spaghetti-graph',
  },
  seaborn_pairplot: {
    id: 'seaborn_pairplot',
    type: 'website',
    sourceName: 'Seaborn · Python Docs',
    badgeLabel: { en: 'Matrix Plot Docs', km: 'ក្រាហ្វ Pairplot' },
    title: {
      en: 'seaborn.pairplot() — Pairwise Scatter Matrix & Diagonal KDEs',
      km: 'ឯកសារ seaborn.pairplot() សម្រាប់គូរក្រឡាទំនាក់ទំនងគ្រប់គូរអថេរ',
    },
    description: {
      en: 'Explore hue grouping, corner=True (removing duplicate upper triangle), and why p variables generate p² panels.',
      km: 'សិក្សាពី corner=True ដើម្បីកាត់បន្ថយក្រឡាស្ទួនពាក់កណ្តាល និងយល់ពីកំណើន O(p²) នៅពេលមានច្រើនអថេរ។',
    },
    url: 'https://seaborn.pydata.org/generated/seaborn.pairplot.html',
  },
  wiki_curse_dim: {
    id: 'wiki_curse_dim',
    type: 'website',
    sourceName: 'Wikipedia · High Dimensions',
    badgeLabel: { en: 'Geometry Proof', km: 'ទ្រឹស្តីវិមាត្រខ្ពស់' },
    title: {
      en: 'Curse of Dimensionality — Distance Concentration & Sparsity',
      km: 'បញ្ហាវិមាត្រខ្ពស់ (Curse of Dimensionality) និងភាពរង្វើលនៃទិន្នន័យ',
    },
    description: {
      en: 'Mathematical intuition explaining why high-dimensional volume explodes exponentially and why PCA is required.',
      km: 'ការពន្យល់គណិតវិទ្យាថាហេតុអ្វីពេលចំនួនអថេរ p កើនឡើង លំហទិន្នន័យរីកធំពេករហូតទាល់តែត្រូវប្រើ PCA ដើម្បីបង្រួម។',
    },
    url: 'https://en.wikipedia.org/wiki/Curse_of_dimensionality',
  },
  gapminder_tools: {
    id: 'gapminder_tools',
    type: 'website',
    sourceName: 'Gapminder Foundation',
    badgeLabel: { en: 'Live Interactive Web', km: 'កម្មវិធី Gapminder ផ្ទាល់' },
    title: {
      en: 'Gapminder Tools — Interactive 5D World Development Bubble Chart',
      km: 'គេហទំព័រ Gapminder Tools ផ្ទាល់៖ សាកល្បងក្រាហ្វ Bubble ៥ វិមាត្រតាមឆ្នាំ',
    },
    description: {
      en: 'Interact directly with Hans Rosling’s global dataset (GDP per capita, Life Expectancy, Population, Continent & Time).',
      km: 'ចូលលេងក្រាហ្វអន្តរកម្មពិតៗរបស់ Gapminder ដើម្បីតាមដានបម្រែបម្រួល GDP អាយុរំពឹងរស់ និងចំនួនប្រជាជនគ្រប់ប្រទេស។',
    },
    url: 'https://www.gapminder.org/tools/',
  },
  plotly_bubbles: {
    id: 'plotly_bubbles',
    type: 'website',
    sourceName: 'Plotly · Python Express',
    badgeLabel: { en: '5D Bubble Docs', km: 'ឯកសារ Plotly Bubble' },
    title: {
      en: 'plotly.express.scatter — Multi-Dimensional Bubble Charts & Animation',
      km: 'ឯកសារ Plotly Bubble Chart សម្រាប់ផ្ទុកវិមាត្រទំហំ ពណ៌ និងចលនាឆ្នាំ',
    },
    description: {
      en: 'Shows exact parameters size, size_max, log_x=True, animation_frame, and area-scaling rules.',
      km: 'ស្វែងយល់ពីការកំណត់ size_max, log_x=True និង animation_frame ដើម្បីបង្កើតក្រាហ្វមានចលនាដូចក្នុងមេរៀន។',
    },
    url: 'https://plotly.com/python/bubble-charts/',
  },
  sklearn_pca: {
    id: 'sklearn_pca',
    type: 'website',
    sourceName: 'scikit-learn · ML Docs',
    badgeLabel: { en: 'PCA API Docs', km: 'ឯកសារកូដ PCA' },
    title: {
      en: 'sklearn.decomposition.PCA — Explained Variance & StandardScaler',
      km: 'ឯកសារ scikit-learn PCA៖ ការរៀនគំរូ ការធ្វើ Standardize និង Explained Variance',
    },
    description: {
      en: 'Official reference covering SVD projection, components_, explained_variance_ratio_, and mandatory Z-score scaling.',
      km: 'ពិនិត្យមើលវិធីប្រើ fit_transform(), explained_variance_ratio_ និងមូលហេតុដែលត្រូវបំប្លែង Z-score មុនធ្វើ PCA។',
    },
    url: 'https://scikit-learn.org/stable/modules/generated/sklearn.decomposition.PCA.html',
  },

  // === YouTube Educational Videos (ALL verified via YouTube oEmbed) ===
  yt_statquest_hist: {
    id: 'yt_statquest_hist',
    type: 'youtube',
    sourceName: 'StatQuest · YouTube',
    badgeLabel: { en: 'YouTube · Concept', km: 'វីដេអូ YouTube · មូលដ្ឋាន' },
    title: {
      en: 'StatQuest: Histograms & Probability Distributions, Clearly Explained',
      km: 'វីដេអូ StatQuest៖ ការពន្យល់យ៉ាងច្បាស់ពី Histogram និងរបាយប្រូបាប៊ីលីតេ',
    },
    description: {
      en: 'Visual intuition of bin width, distribution shape, and why univariate summaries start the exploratory pipeline.',
      km: 'យល់ដឹងពីការចាប់ផ្តើមវិភាគអថេរទោល Histogram និងរបៀបអានទម្រង់របាយទិន្នន័យមុនឈានទៅទ្វេអថេរ។',
    },
    url: 'https://www.youtube.com/watch?v=qBigTkBLU6g',
  },
  yt_statquest_boxplot: {
    id: 'yt_statquest_boxplot',
    type: 'youtube',
    sourceName: 'StatQuest · YouTube',
    badgeLabel: { en: 'YouTube · 6 Min', km: 'វីដេអូ YouTube · ស៊ីជម្រៅ' },
    title: {
      en: 'StatQuest: Boxplots are Awesome!!! (Quartiles, Median & Outliers)',
      km: 'វីដេអូ StatQuest៖ Boxplots — មេដ្យាន ក្វាទីល Q₁/Q₃ និងការចាប់ Outliers',
    },
    description: {
      en: 'Josh Starmer explains quartiles, interquartile range (IQR), whiskers, and how outliers appear beyond 1.5×IQR.',
      km: 'ពន្យល់ពីអត្ថន័យនៃប្រអប់ ក្វាទីល មេដ្យាន និងរបៀបសម្គាល់តម្លៃ Outliers លើសពីរបង 1.5×IQR យ៉ាងងាយយល់។',
    },
    url: 'https://www.youtube.com/watch?v=fHLhBnmwUM0',
  },
  yt_khan_boxplot: {
    id: 'yt_khan_boxplot',
    type: 'youtube',
    sourceName: 'Khan Academy · YouTube',
    badgeLabel: { en: 'YouTube · Worked Example', km: 'វីដេអូ YouTube · គណនាផ្ទាល់' },
    title: {
      en: 'Khan Academy: Reading & Constructing Box-and-Whisker Plots',
      km: 'វីដេអូ Khan Academy៖ របៀបអាន និងសង់ក្រាហ្វ Box-and-Whisker ជាជំហានៗ',
    },
    description: {
      en: 'Step-by-step numerical walkthrough finding Q₁, Q₂ (Median), Q₃, and IQR from a real sorted dataset.',
      km: 'បង្ហាញជំហានគណនាដោយដៃក្នុងការរក Q₁, មេដ្យាន Q₂ និង Q₃ ពីតួលេខគំរូជាក់ស្តែង។',
    },
    url: 'https://www.youtube.com/watch?v=b2C9I8HuCe4',
  },
  yt_statquest_cov: {
    id: 'yt_statquest_cov',
    type: 'youtube',
    sourceName: 'StatQuest · YouTube',
    badgeLabel: { en: 'YouTube · Visual Math', km: 'វីដេអូ YouTube · គណិតវិទ្យា' },
    title: {
      en: 'StatQuest: Covariance, Clearly Explained!!!',
      km: 'វីដេអូ StatQuest៖ ការពន្យល់ពី Covariance ឱ្យច្បាស់លាស់ទាំងវិជ្ជមាន អវិជ្ជមាន និងសូន្យ',
    },
    description: {
      en: 'Reveals why positive/negative covariance shows direction and why raw units make covariance scale-dependent.',
      km: 'បកស្រាយពីវិធីវាស់ទិសដៅរួមរវាង X និង Y និងមូលហេតុដែល Covariance ប្រែប្រួលតាមខ្នាតរង្វាស់។',
    },
    url: 'https://www.youtube.com/watch?v=qtaqvPAeEJY',
  },
  yt_statquest_pearson: {
    id: 'yt_statquest_pearson',
    type: 'youtube',
    sourceName: 'StatQuest · YouTube',
    badgeLabel: { en: 'YouTube · Must Watch', km: 'វីដេអូ YouTube · សំខាន់បំផុត' },
    title: {
      en: "StatQuest: Pearson's Correlation r, Clearly Explained!!!",
      km: 'វីដេអូ StatQuest៖ មេគុណទំនាក់ទំនងលីនេអ៊ែរ Pearson r និងភាពរសើបនឹង Outliers',
    },
    description: {
      en: 'Demonstrates normalizing covariance into r ∈ [-1, 1], p-values, and why slope sensitivity matters.',
      km: 'មើលពីរបៀបចែកនឹងគម្លាតស្តង់ដារ s_X·s_Y ដើម្បីឱ្យរូបមន្ត r នៅចន្លោះ [-1, +1] និងឥទ្ធិពលនៃជម្រាលទំនាក់ទំនង។',
    },
    url: 'https://www.youtube.com/watch?v=xZ_z8KWkhXE',
  },
  yt_statquest_linreg: {
    id: 'yt_statquest_linreg',
    type: 'youtube',
    sourceName: 'StatQuest · YouTube',
    badgeLabel: { en: 'YouTube · OLS & R²', km: 'វីដេអូ YouTube · ខ្សែតម្រែតម្រង់' },
    title: {
      en: 'StatQuest: Linear Regression & Variance Explained, Clearly Explained',
      km: 'វីដេអូ StatQuest៖ ខ្សែបន្ទាត់ Linear Regression និងអត្ថន័យនៃ R²',
    },
    description: {
      en: 'Connects Pearson r directly to least-squares regression fitting and percentage of explained variance R².',
      km: 'ភ្ជាប់មេគុណ Pearson r ទៅនឹងការគូរខ្សែបន្ទាត់ប្រមាណ OLS និងភាគរយនៃភាពប្រែប្រួល R²។',
    },
    url: 'https://www.youtube.com/watch?v=nk2CQITm_eo',
  },
  yt_spearman_tut: {
    id: 'yt_spearman_tut',
    type: 'youtube',
    sourceName: 'Organic Chemistry Tutor · YouTube',
    badgeLabel: { en: 'YouTube · Formula', km: 'វីដេអូ YouTube · រូបមន្តគណនា' },
    title: {
      en: "How to Calculate Spearman's Rank Correlation Coefficient ρ (Full Walkthrough)",
      km: 'វីដេអូគណនាមេគុណ Spearman ρ ជាជំហានៗ (ការដាក់ចំណាត់ថ្នាក់ Rank)',
    },
    description: {
      en: 'Step-by-step ranking procedure computing rank differences d_i and applying ρ = 1 - 6Σd_i² / n(n²-1).',
      km: 'រៀនគណនាពីតួលេខដើម → បំប្លែងជាចំណាត់ថ្នាក់ Rank → រកគម្លាត d_i → គណនារូបមន្ត Spearman ρ ដោយដៃ។',
    },
    url: 'https://www.youtube.com/watch?v=sbiyaV646jE',
  },
  yt_spearman_simple: {
    id: 'yt_spearman_simple',
    type: 'youtube',
    sourceName: 'ritvikmath · YouTube',
    badgeLabel: { en: 'YouTube · Intuition', km: 'វីដេអូ YouTube · គោលគំនិត' },
    title: {
      en: 'Spearman Correlation — Monotonic Relationships & Outlier Immunity Explained',
      km: 'វីដេអូ Spearman Correlation៖ ទំនាក់ទំនង Monotonic និងភាពធន់នឹងតម្លៃ Outlier',
    },
    description: {
      en: 'Concise visual contrast showing when Spearman ρ = 1.0 even on curved monotonic trajectories where Pearson drops.',
      km: 'ប្រៀបធៀបយ៉ាងច្បាស់រវាងទំនាក់ទំនង Monotonic កោង និងលីនេអ៊ែរ ព្រមទាំងមូលហេតុដែល Outlier មិនបំផ្លាញ ρ។',
    },
    url: 'https://www.youtube.com/watch?v=APlQV0b8TjM',
  },
  yt_khan_logscale: {
    id: 'yt_khan_logscale',
    type: 'youtube',
    sourceName: 'Khan Academy · YouTube',
    badgeLabel: { en: 'YouTube · Log₁₀ Axis', km: 'វីដេអូ YouTube · អ័ក្ស Log₁₀' },
    title: {
      en: 'Logarithmic Scale Visually Explained (Powers of 10 on Axes)',
      km: 'វីដេអូ Khan Academy៖ ការយល់ដឹងពីមាត្រដ្ឋានលោការីត Log₁₀ លើអ័ក្សក្រាហ្វ',
    },
    description: {
      en: 'Shows how powers of 10 (10², 10³, 10⁴) compress multi-order-of-magnitude data cleanly without crushing small values.',
      km: 'មើលរបៀបប្រើគោលដប់ 10², 10³, 10⁴ ដើម្បីពន្លាតតម្លៃតូចៗដែលកកស្ទះ ដូចជាចំណូល GDP ប្រទេសក្រីក្រ និងអ្នកមាន។',
    },
    url: 'https://www.youtube.com/watch?v=sBhEi4L91Sg',
  },
  yt_anscombe_datasaurus: {
    id: 'yt_anscombe_datasaurus',
    type: 'youtube',
    sourceName: 'Autodesk CHI 2017 · YouTube',
    badgeLabel: { en: 'YouTube · Famous Proof', km: 'វីដេអូ YouTube · ភស្តុតាងល្បី' },
    title: {
      en: 'Same Stats, Different Graphs: Anscombe Quartet to Datasaurus Dozen',
      km: 'វីដេអូ Same Stats, Different Graphs៖ ស្ថិតិតួលេខដូចគ្នា តែរូបរាងក្រាហ្វខុសគ្នាដាច់',
    },
    description: {
      en: 'Eye-opening animation proving 12+ wildly different shapes (even a dinosaur) share identical means, SDs, and Pearson r.',
      km: 'វីដេអូបង្ហាញថាទោះមធ្យម វ៉ារ្យង់ និង r ដូចគ្នាបេះបិទក៏ដោយ បើមិនគូរក្រាហ្វមើលទេ យើងនឹងត្រូវបោកបញ្ឆោតដោយស្ថិតិសង្ខេប។',
    },
    url: 'https://www.youtube.com/watch?v=DbJyPELmhJc',
  },
  yt_anscombe_overview: {
    id: 'yt_anscombe_overview',
    type: 'youtube',
    sourceName: 'Stats & DataViz · YouTube',
    badgeLabel: { en: 'YouTube · Case Study', km: 'វីដេអូ YouTube · ករណីសិក្សា' },
    title: {
      en: "Why Summary Statistics Need a Visual Plot (Anscombe's Quartet)",
      km: "ហេតុអ្វីត្រូវប្រើក្រាហ្វជានិច្ចមុនសន្និដ្ឋានស្ថិតិ (Anscombe's Quartet)",
    },
    description: {
      en: 'Breaks down all 4 classic Anscombe datasets (Linear, Quadratic Curve, Outlier Slope Pull, Vertical Leverage).',
      km: 'បកស្រាយករណីទាំង ៤ របស់ Anscombe មួយម្តងៗ ពីខ្សែលីនេអ៊ែរ ខ្សែកោងប៉ារ៉ាបូល រហូតដល់ចំណុច Outlier បង្វែរខ្សែបន្ទាត់។',
    },
    url: 'https://www.youtube.com/watch?v=RbHCeANCbW0',
  },
  yt_khan_anova_sst: {
    id: 'yt_khan_anova_sst',
    type: 'youtube',
    sourceName: 'Khan Academy · YouTube',
    badgeLabel: { en: 'YouTube · TSS=BSS+WSS', km: 'វីដេអូ YouTube · បំបែកវ៉ារ្យង់' },
    title: {
      en: 'ANOVA Part 1: Variance Decomposition (SST / TSS Total Sum of Squares)',
      km: 'វីដេអូ Khan Academy៖ ការបំបែកវ៉ារ្យង់ ANOVA (TSS = BSS + WSS)',
    },
    description: {
      en: 'Walks through total variation around the grand mean vs. group means — the exact math behind η² = BSS / TSS.',
      km: 'ពន្យល់ពីការបំបែកគម្លាតសរុប TSS ទៅជាគម្លាតរវាងក្រុម BSS និងក្នុងក្រុម WSS ដែលជាមូលដ្ឋាននៃរូបមន្ត η²។',
    },
    url: 'https://www.youtube.com/watch?v=EFdlFoHI_0I',
  },
  yt_khan_anova_f: {
    id: 'yt_khan_anova_f',
    type: 'youtube',
    sourceName: 'Khan Academy · YouTube',
    badgeLabel: { en: 'YouTube · F-Test', km: 'វីដេអូ YouTube · តេស្ត F-Statistic' },
    title: {
      en: 'ANOVA Part 3: Hypothesis Testing with the F-Statistic & Between/Within Ratio',
      km: 'វីដេអូ Khan Academy៖ ការធ្វើតេស្តសម្មតិកម្ម ANOVA ដោយប្រើប្រភាគ F-Statistic',
    },
    description: {
      en: 'Explains how degrees of freedom weight BSS and WSS to form the F-ratio and decide significance across groups.',
      km: 'បង្ហាញពីវិធីចែកដឺក្រេសេរី និងការសម្រេចចិត្តថាអថេរគុណភាពពិតជាបំបែកមធ្យមភាគក្រុមខុសគ្នាឬអត់។',
    },
    url: 'https://www.youtube.com/watch?v=Xg8_iSkJpAE',
  },
  yt_khan_chi2_table: {
    id: 'yt_khan_chi2_table',
    type: 'youtube',
    sourceName: 'Khan Academy · YouTube',
    badgeLabel: { en: 'YouTube · O_ij vs E_ij', km: 'វីដេអូ YouTube · តារាង Chi-Square' },
    title: {
      en: 'Contingency Table Chi-Square Test of Independence (Worked Example)',
      km: 'វីដេអូ Khan Academy៖ តេស្តឯករាជ្យភាព Chi-Square លើតារាងតភ្ជាប់ O_ij និង E_ij',
    },
    description: {
      en: 'Computes expected counts (Row Total × Col Total) / n and sums (O - E)² / E across contingency cells step-by-step.',
      km: 'គណនាតម្លៃរំពឹងទុក E_ij = (សរុបជួរដេក × សរុបជួរឈរ)/n និងផលបូក χ² = Σ(O - E)²/E យ៉ាងលម្អិត។',
    },
    url: 'https://www.youtube.com/watch?v=hpWdDmgsIRE',
  },
  yt_khan_chi2_stat: {
    id: 'yt_khan_chi2_stat',
    type: 'youtube',
    sourceName: 'Khan Academy · YouTube',
    badgeLabel: { en: 'YouTube · p-Value Test', km: 'វីដេអូ YouTube · កម្រិត p-Value' },
    title: {
      en: 'Chi-Square Statistic & Degrees of Freedom for Hypothesis Testing',
      km: 'វីដេអូ Khan Academy៖ ការបកស្រាយស្ថិតិ χ² និងដឺក្រេសេរី df',
    },
    description: {
      en: 'Visualizes the skewed χ² sampling distribution and shows how extreme test statistics reject the independence H₀.',
      km: 'បកស្រាយរបៀបប្រៀបធៀបតម្លៃ χ² និង df = (r-1)(c-1) ដើម្បីច្រានចោលសម្មតិកម្ម H₀ (អថេរពឹងផ្អែកគ្នា)។',
    },
    url: 'https://www.youtube.com/watch?v=jABsbNBPXIk',
  },
  yt_small_multiples: {
    id: 'yt_small_multiples',
    type: 'youtube',
    sourceName: 'DataViz Tutorial · YouTube',
    badgeLabel: { en: 'YouTube · Fix Spaghetti', km: 'វីដេអូ YouTube · កែក្រាហ្វរញ៉េរញ៉ៃ' },
    title: {
      en: 'How to Fix a Spaghetti Chart Using Small Multiples (Facet Panels)',
      km: 'វីដេអូបង្រៀនកែ Spaghetti Chart រញ៉េរញ៉ៃ ទៅជា Small Multiples ដាក់តាមផ្ទាំង',
    },
    description: {
      en: 'Shows step-by-step why splitting dense multi-line charts into aligned facet panels makes temporal trends legible.',
      km: 'បង្ហាញពីវិធីបំបែកខ្សែក្រាហ្វពេលវេលាច្រើនជាន់លើគ្នា ទៅជាក្រាហ្វតូចៗដាច់ដោយឡែកតាមតំបន់ ឬប្រភេទ។',
    },
    url: 'https://www.youtube.com/watch?v=Ry1YdJfN__g',
  },
  yt_curse_dim: {
    id: 'yt_curse_dim',
    type: 'youtube',
    sourceName: 'ML Explained · YouTube',
    badgeLabel: { en: 'YouTube · High-D Math', km: 'វីដេអូ YouTube · បញ្ហាវិមាត្រខ្ពស់' },
    title: {
      en: 'The Curse of Dimensionality Clearly Explained (1D → 2D → High-D)',
      km: 'វីដេអូពន្យល់ពីបញ្ហាវិមាត្រខ្ពស់ Curse of Dimensionality ពី 1D ដល់ពហុវិមាត្រ',
    },
    description: {
      en: 'Visualizes how pairplots and sample sparsity blow up as columns p increase, motivating PCA dimensionality reduction.',
      km: 'យល់ដឹងពីមូលហេតុដែលចំនួនក្រឡា Pairplot កើនឡើង O(p²) និងទិន្នន័យរង្វើលខ្លាំងពេលមានអថេរច្រើន។',
    },
    url: 'https://www.youtube.com/watch?v=9Tf-_mJhOkU',
  },
  yt_hans_rosling: {
    id: 'yt_hans_rosling',
    type: 'youtube',
    sourceName: 'BBC · Hans Rosling',
    badgeLabel: { en: 'YouTube · Iconic 5D Talk', km: 'វីដេអូ YouTube · Hans Rosling' },
    title: {
      en: "Hans Rosling's 200 Countries, 200 Years in 4 Minutes (The Joy of Stats)",
      km: 'វីដេអូ BBC ល្បីបំផុត៖ លោក Hans Rosling បង្ហាញក្រាហ្វ Gapminder ៥ វិមាត្រ',
    },
    description: {
      en: 'The iconic BBC animation demonstrating the exact 5D Gapminder Bubble Chart (X=Log GDP, Y=LifeExp, Size=Pop, Color=Region, Time).',
      km: 'ទស្សនាការបកស្រាយផ្ទាល់របស់សាស្ត្រាចារ្យ Hans Rosling លើក្រាហ្វ ៥ វិមាត្រដែលជាគំរូដើមនៃស្លាយទី ៣៩។',
    },
    url: 'https://www.youtube.com/watch?v=jbkSRLYSojo',
  },
  yt_statquest_pca: {
    id: 'yt_statquest_pca',
    type: 'youtube',
    sourceName: 'StatQuest · YouTube',
    badgeLabel: { en: 'YouTube · Step-by-Step PCA', km: 'វីដេអូ YouTube · មេរៀន PCA លម្អិត' },
    title: {
      en: 'StatQuest: Principal Component Analysis (PCA), Step-by-Step',
      km: 'វីដេអូ StatQuest៖ ការពន្យល់លម្អិតជាជំហានពី PCA (PC₁, PC₂ និង Scree Plot)',
    },
    description: {
      en: 'Covers centering, orthogonal PC₁/PC₂ rotation, eigenvalues, loading vectors (biplot arrows), and variance explained.',
      km: 'ពន្យល់ពីការរំកិលចំណុចកណ្តាល ការបង្វិលអ័ក្សកែង PC₁ ⊥ PC₂ និងការអានព្រួញ Loadings ក្នុង Biplot។',
    },
    url: 'https://www.youtube.com/watch?v=FgakZw6K1QQ',
  },
};

export function getSlideLearningResources(pageNumber: number): SlideResourceBundle {
  // Slide-specific overrides where an iconic artifact exists (e.g. Slide 20 Anscombe, Slide 39 Gapminder)
  if (pageNumber === 20) {
    return {
      topicLabel: {
        en: "Anscombe's Quartet & Visual Verification",
        km: "សំណុំទិន្នន័យ Anscombe's Quartet និងការផ្ទៀងផ្ទាត់ដោយក្រាហ្វ",
      },
      links: [
        LINKS.yt_anscombe_datasaurus,
        LINKS.yt_anscombe_overview,
        LINKS.wiki_anscombe,
        LINKS.wilke_overplotting,
      ],
    };
  }

  if (pageNumber === 39) {
    return {
      topicLabel: {
        en: '5D Animated Bubble Chart (Hans Rosling · Gapminder)',
        km: 'ក្រាហ្វ ៥ វិមាត្រ Gapminder Bubble Chart (Hans Rosling)',
      },
      links: [
        LINKS.yt_hans_rosling,
        LINKS.gapminder_tools,
        LINKS.plotly_bubbles,
        LINKS.wilke_associations,
      ],
    };
  }

  if (pageNumber <= 4) {
    return {
      topicLabel: {
        en: 'EDA & Bivariate Taxonomy (3 Regimes · Wilke)',
        km: 'មូលដ្ឋាន EDA និងករណីទាំង ៣ នៃការវិភាគទ្វេអថេរ',
      },
      links: [
        LINKS.wilke_book,
        LINKS.wilke_directory,
        LINKS.yt_statquest_hist,
        LINKS.yt_statquest_cov,
      ],
    };
  }

  if (pageNumber <= 7) {
    return {
      topicLabel: {
        en: 'Skewness, IQR Boxplots, Outliers & Violin KDE',
        km: 'ភាពពេបទិន្នន័យ ក្រាហ្វ Boxplot (IQR), Outliers និង Violinplot KDE',
      },
      links: [
        LINKS.yt_statquest_boxplot,
        LINKS.yt_khan_boxplot,
        LINKS.wilke_boxplots,
        LINKS.seaborn_violinplot,
      ],
    };
  }

  if (pageNumber <= 11) {
    return {
      topicLabel: {
        en: 'Covariance, Pearson Correlation r & Scatterplots',
        km: 'Covariance និងមេគុណទំនាក់ទំនងលីនេអ៊ែរ Pearson r',
      },
      links: [
        LINKS.yt_statquest_pearson,
        LINKS.yt_statquest_cov,
        LINKS.scipy_pearsonr,
        LINKS.yt_statquest_linreg,
      ],
    };
  }

  if (pageNumber <= 15) {
    return {
      topicLabel: {
        en: 'Spearman Rank Correlation ρ & Outlier Robustness',
        km: 'មេគុណលំដាប់ Spearman ρ និងភាពធន់នឹងតម្លៃ Outlier',
      },
      links: [
        LINKS.yt_spearman_simple,
        LINKS.yt_spearman_tut,
        LINKS.scipy_spearmanr,
        LINKS.wilke_associations,
      ],
    };
  }

  if (pageNumber <= 20) {
    return {
      topicLabel: {
        en: 'Log₁₀ Scale Transformation & Overplotting Fixes',
        km: 'ការបម្លែងអ័ក្ស Log₁₀ និងដំណោះស្រាយចំណុចត្រួតគ្នា',
      },
      links: [
        LINKS.yt_khan_logscale,
        LINKS.wilke_logscales,
        LINKS.wilke_overplotting,
        LINKS.yt_anscombe_datasaurus,
      ],
    };
  }

  if (pageNumber <= 27) {
    return {
      topicLabel: {
        en: 'One-Way ANOVA (TSS = BSS + WSS) & Correlation Ratio η²',
        km: 'ការវិភាគវ៉ារ្យង់ ANOVA និងសមាមាត្រពន្យល់ η²',
      },
      links: [
        LINKS.yt_khan_anova_sst,
        LINKS.yt_khan_anova_f,
        LINKS.scipy_anova,
        LINKS.seaborn_boxplot,
      ],
    };
  }

  if (pageNumber <= 31) {
    return {
      topicLabel: {
        en: "Contingency Tables, Chi-Square Test χ² & Cramér's V / Ṽ",
        km: "តារាងតភ្ជាប់ តេស្ត Chi-Square χ² និងមេគុណ Cramér's V / Ṽ",
      },
      links: [
        LINKS.yt_khan_chi2_table,
        LINKS.yt_khan_chi2_stat,
        LINKS.scipy_chi2,
        LINKS.wiki_cramers_v,
      ],
    };
  }

  if (pageNumber <= 35) {
    return {
      topicLabel: {
        en: 'Stacked Bars, Treemaps & Fixing Spaghetti Plots',
        km: 'ក្រាហ្វសមាមាត្រ Stacked Bar, Treemap និងការកែ Spaghetti Plot',
      },
      links: [
        LINKS.swd_spaghetti,
        LINKS.yt_small_multiples,
        LINKS.wilke_proportions,
        LINKS.plotly_treemaps,
      ],
    };
  }

  if (pageNumber <= 38) {
    return {
      topicLabel: {
        en: 'Pairplot O(p²) Matrix & Curse of Dimensionality',
        km: 'ក្រាហ្វ Pairplot O(p²) និងបញ្ហាវិមាត្រខ្ពស់',
      },
      links: [
        LINKS.yt_curse_dim,
        LINKS.wiki_curse_dim,
        LINKS.seaborn_pairplot,
        LINKS.seaborn_heatmap,
      ],
    };
  }

  // Slides 40–41: PCA & Biplot Interpretation
  return {
    topicLabel: {
      en: 'Principal Component Analysis (PCA) & Orthogonal Biplot',
      km: 'ការបង្រួមវិមាត្រ PCA (PC₁ ⊥ PC₂) និងការអានព្រួញ Biplot',
    },
    links: [
      LINKS.yt_statquest_pca,
      LINKS.sklearn_pca,
      LINKS.wilke_associations,
      LINKS.yt_hans_rosling,
    ],
  };
}
