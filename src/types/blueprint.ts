export interface BilingualText {
  en: string;
  km: string;
}

export interface MathVariable {
  symbol: string;
  en: string;
  km: string;
}

export interface MathFormulaBlock {
  title: BilingualText;
  equation: string;
  variables: MathVariable[];
}

export interface ScorecardSpec {
  label: BilingualText;
  value: string;
  metricField: string;
  aggregation: string;
  comparisonNote: BilingualText;
}

export interface ChartConfigSpec {
  chartType: BilingualText;
  dimensions: string[];
  breakdownDimension?: string;
  metrics: string[];
  sorting: string;
  stylingNote: BilingualText;
}

export interface PageControlSpec {
  controlType: BilingualText;
  field: string;
  defaultState: string;
  purpose: BilingualText;
}

export type SimulatorVisualMode =
  | 'cover_hero'
  | 'agenda_navigation'
  | 'resource_cards'
  | 'section_divider'
  | 'gapminder_summary_table'
  | 'gapminder_univariate_trio'
  | 'bivariate_decision_matrix'
  | 'tips_covariance_scatter'
  | 'pearson_correlation_tips'
  | 'pearson_pattern_gallery'
  | 'gapminder_pearson_matrix'
  | 'spearman_rank_concept'
  | 'spearman_outlier_lab'
  | 'pearson_vs_spearman_matrix'
  | 'correlation_comparison_table'
  | 'gapminder_linear_scatter'
  | 'gapminder_log_scatter'
  | 'gapminder_scatter_insights'
  | 'visualization_best_practices'
  | 'eta_squared_formula'
  | 'eta_squared_anova_visual'
  | 'conditional_violin_gdp'
  | 'conditional_density_lifeexp'
  | 'eta_squared_boxplots_comparison'
  | 'qual_treemap_mosaic'
  | 'qual_stacked_grouped_bars'
  | 'chi_square_contingency_theory'
  | 'chi_square_distributions_summary'
  | 'covid_survey_chi_square'
  | 'cramers_v_bias_correction'
  | 'reflective_pause_canvas'
  | 'multivariate_color_encoding'
  | 'multivariate_shape_encoding'
  | 'multivariate_bubble_size'
  | 'timeseries_oceania_lines'
  | 'timeseries_asia_stacked_bars'
  | 'animated_plotly_bubble'
  | 'golden_rule_takeaway'
  | 'course_completion_celebration';

export interface SlideBlueprint {
  pageNumber: number; // 1 to 41 (PDF page index)
  slideFooterNumber: string; // Slide number printed on slide (1 to 40, with 32a/32b for blank slide 33)
  sectionTag: BilingualText;
  simulatorMode: SimulatorVisualMode;

  // 1. Page Identity & Theme
  pageIdentity: {
    titleEn: string;
    titleKm: string;
    themeName: BilingualText;
    canvasBgHex: string;
    surfaceCardHex: string;
    primaryAccentHex: string;
    secondaryAccentHex: string;
    textPrimaryHex: string;
    hierarchyRationale: BilingualText;
  };

  // 2. Visual Wireframe & Layout Grid
  wireframe: {
    headerSection: BilingualText;
    leftZone: BilingualText;
    rightZone: BilingualText;
    bottomOrTopBar: BilingualText;
    gridAllocation: string;
  };

  // 3. Chart, Metrics & Math Mapping
  chartMetricsMath: {
    scorecards: ScorecardSpec[];
    charts: ChartConfigSpec[];
    formulas: MathFormulaBlock[];
  };

  // 4. Page Controls & Interactive Filters
  controls: PageControlSpec[];

  // 5. Expanded Bilingual Content & In-Depth Explanation
  expandedContent: {
    onScreenText: {
      heading: BilingualText;
      bullets: BilingualText[];
      callout: BilingualText;
    };
    deepDiveExplanation: BilingualText;
    practicalApplication: {
      scenarioTitle: BilingualText;
      description: BilingualText;
      impactMetric: string;
    };
  };
}
