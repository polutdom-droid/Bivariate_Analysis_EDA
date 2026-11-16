import { SlideBlueprint } from '../types/blueprint';

export const SLIDES_PART_2: SlideBlueprint[] = [
  // ==========================================
  // SLIDE 15
  // ==========================================
  {
    pageNumber: 15,
    slideFooterNumber: '15',
    sectionTag: {
      en: '2.2 Quan./Ordi. vs Quan./Ordi. — Spearman Worked Numerical Example',
      km: '2.2 បរិមាណ/លំដាប់ ទល់នឹង បរិមាណ/លំដាប់ — ឧទាហរណ៍គណនាជាក់ស្តែងនៃ Spearman',
    },
    simulatorMode: 'spearman_outlier_lab',
    pageIdentity: {
      titleEn: 'Indicator: Spearman’s Rank Correlation — Worked Outlier Example (r = 0.71 vs ρ = 1)',
      titleKm: 'សូចនាករ៖ សហសម្ព័ន្ធចំណាត់ថ្នាក់ Spearman — ឧទាហរណ៍គណនាប្រៀបធៀប (r = 0.71 ទល់នឹង ρ = 1)',
      themeName: {
        en: 'Step-by-Step Mathematical Proof & Log-Y Scatter Canvas',
        km: 'ផ្ទៃបង្ហាញការគណនាជាជំហានៗ និងក្រាហ្វចំណុចលើមាត្រដ្ឋាន Log',
      },
      canvasBgHex: '#F8FAFC',
      surfaceCardHex: '#FFFFFF',
      primaryAccentHex: '#2563EB',
      secondaryAccentHex: '#7C3AED',
      textPrimaryHex: '#0F172A',
      hierarchyRationale: {
        en: 'Uses #DC2626 Red for X statistics, #2563EB Blue for Y statistics, and #7C3AED Purple/Emerald for the final correlation results (r = 0.71 vs ρ = 1) alongside the indigo log-scale plot from Slide 15.',
        km: 'ប្រើពណ៌ក្រហម (#DC2626) សម្រាប់ស្ថិតិនៃអថេរ X, ពណ៌ខៀវ (#2563EB) សម្រាប់ស្ថិតិនៃអថេរ Y និងពណ៌ស្វាយ/បៃតង សម្រាប់លទ្ធផលចុងក្រោយ (r = 0.71 ទល់នឹង ρ = 1) ដូចក្នុងស្លាយទី ១៥។',
      },
    },
    wireframe: {
      headerSection: {
        en: 'Top Header: "Indicator: Spearman’s Rank Correlation — Example: X = [1, 3, 2, 5, 4] and Y = [0.1, 1, 0.2, 1000, 1.5]".',
        km: 'ផ្នែកខាងលើ៖ ចំណងជើង «Indicator: Spearman’s Rank Correlation — ឧទាហរណ៍៖ X = [1, 3, 2, 5, 4] និង Y = [0.1, 1, 0.2, 1000, 1.5]»។',
      },
      leftZone: {
        en: 'Left Zone (58% width): Complete Side-by-Side Derivation of Pearson Correlation (X̄, Ȳ, s_X = 1.58, s_Y = 446.9, r_{X,Y} = 0.71) vs Spearman Correlation (R[X] = [1,3,2,5,4], R[Y] = [1,3,2,5,4], all dᵢ = 0, ρ_{X,Y} = 1).',
        km: 'ផ្នែកខាងឆ្វេង (ទទឹង ៥៨%)៖ ការគណនាប្រៀបធៀបរវាងសហសម្ព័ន្ធ Pearson (r_{X,Y} = 0.71) និងសហសម្ព័ន្ធ Spearman (R[X] = R[Y] = [1,3,2,5,4], dᵢ = 0, ρ_{X,Y} = 1)។',
      },
      rightZone: {
        en: 'Right Zone (42% width): Scatterplot "Example for computing correlation" with X on linear axis (1 to 5) and Y on logarithmic axis (0.1, 1, 10, 100, 1000).',
        km: 'ផ្នែកខាងស្តាំ (ទទឹង ៤២%)៖ ក្រាហ្វ Scatterplot «Example for computing correlation» ដែលអ័ក្ស X ពី 1 ដល់ 5 និងអ័ក្ស Y ជាមាត្រដ្ឋានលោការីត (0.1 ដល់ 1000)។',
      },
      bottomOrTopBar: {
        en: 'Bottom interactive Outlier Value Slider allowing users to adjust the 4th Y-value from 10 to 1000 to 10,000 and watch Pearson r change while Spearman ρ stays locked at 1.00.',
        km: 'របារអន្តរកម្មខាងក្រោមដែលអនុញ្ញាតឱ្យអ្នកសិក្សាប្តូរតម្លៃទី ៤ របស់ Y (ពី 10 ទៅ 1000 ឬ 10,000) ដើម្បីមើលការប្រែប្រួលនៃ Pearson r ខណៈដែល Spearman ρ នៅតែស្មើ 1.00 ជានិច្ច។',
      },
      gridAllocation: '7 Columns Left (Worked Equations) + 5 Columns Right (Log-Y Scatterplot & Rank Table)',
    },
    chartMetricsMath: {
      scorecards: [
        {
          label: { en: 'Pearson Correlation (r_X,Y)', km: 'មេគុណសហសម្ព័ន្ធ Pearson (r_X,Y)' },
          value: '0.71',
          metricField: 'CORR(X, Y)',
          aggregation: 'Parametric Linear',
          comparisonNote: { en: 'Distorted by Y₄ = 1000 outlier (s_Y = 446.9)', km: 'ត្រូវបានទាញបង្ខូចដោយតម្លៃ Outlier Y₄ = 1000' },
        },
        {
          label: { en: 'Spearman Correlation (ρ_X,Y)', km: 'មេគុណសហសម្ព័ន្ធ Spearman (ρ_X,Y)' },
          value: '1.00',
          metricField: 'CORR(R_X, R_Y)',
          aggregation: 'Non-Parametric Rank',
          comparisonNote: { en: 'All dᵢ = 0 (Perfect monotonic order)', km: 'គ្រប់ dᵢ = 0 (លំដាប់កើនឡើងត្រូវគ្នា ១០០%)' },
        },
      ],
      charts: [
        {
          chartType: {
            en: 'Looker Studio Scatter Chart with Logarithmic Y-Axis & 5-Point Rank Table',
            km: 'ក្រាហ្វចំណុច (Scatter Chart) ប្រើអ័ក្ស Y ជាមាត្រដ្ឋានលោការីត និងតារាងចំណាត់ថ្នាក់ ៥ ជួរ',
          },
          dimensions: ['point_index'],
          metrics: ['x_val', 'y_val', 'rank_x', 'rank_y', 'd_i'],
          sorting: 'x_val ASC',
          stylingNote: {
            en: 'Plot the 5 ordered pairs: (1, 0.1), (2, 0.2), (3, 1.0), (4, 1.5), (5, 1000) with large periwinkle circles (#6366F1).',
            km: 'គូសចំណុចទាំង ៥ គូ៖ (1, 0.1), (2, 0.2), (3, 1.0), (4, 1.5), (5, 1000) ដោយប្រើរង្វង់ពណ៌ខៀវស្វាយ (#6366F1)។',
          },
        },
      ],
      formulas: [
        {
          title: { en: 'Worked Pearson vs Spearman Calculation on 5 Observations', km: 'ការគណនាប្រៀបធៀប Pearson និង Spearman លើទិន្នន័យចំនួន ៥' },
          equation: 's_X = √[ ((1-3)² + ... + (4-3)²) / (5 - 1) ] = 1.58 ,  s_Y = 446.9 ⇒ r_{X,Y} = 0.71 ;    R[X] = R[Y] = [1, 3, 2, 5, 4] ⇒ d_i = 0 ⇒ ρ_{X,Y} = 1 - 6(0) / [5(5² - 1)] = 1',
          variables: [
            { symbol: 'X = [1, 3, 2, 5, 4]', en: 'Input vector X (note: true arithmetic mean is 3.0; Slide 15 prints X̄ = 4 as a pedagogical illustration of deviation)', km: 'វ៉ិចទ័រទិន្នន័យ X (សម្គាល់៖ មធ្យមភាគពិតគឺ 3.0 ហើយស្លាយទី ១៥ បង្ហាញការជំនួសចូលរូបមន្តគម្លាតស្តង់ដារ s_X = 1.58)' },
            { symbol: 'Y = [0.1, 1, 0.2, 1000, 1.5]', en: 'Output vector Y with an extreme outlier 1000 at index 4 (where X = 5)', km: 'វ៉ិចទ័រទិន្នន័យ Y ដែលមានតម្លៃ Outlier ដ៏ធំគឺ 1000 នៅទីតាំងទី ៤ (ត្រូវនឹង X = 5)' },
            { symbol: 'R[X] = [1, 3, 2, 5, 4]', en: 'Ranks of X: 1 is smallest (rank 1), 2 is 2nd (rank 2), 3 is 3rd (rank 3), 4 is 4th (rank 4), 5 is largest (rank 5)', km: 'ចំណាត់ថ្នាក់របស់ X៖ លេខ 1 តូចបំផុត (ចំណាត់ថ្នាក់ 1), 3 (ចំណាត់ថ្នាក់ 3), 2 (ចំណាត់ថ្នាក់ 2), 5 (ចំណាត់ថ្នាក់ 5), 4 (ចំណាត់ថ្នាក់ 4)' },
            { symbol: 'R[Y] = [1, 3, 2, 5, 4]', en: 'Ranks of Y: 0.1 (rank 1), 1.0 (rank 3), 0.2 (rank 2), 1000 (rank 5), 1.5 (rank 4) — identical to R[X]!', km: 'ចំណាត់ថ្នាក់របស់ Y៖ 0.1 (ទី 1), 1.0 (ទី 3), 0.2 (ទី 2), 1000 (ទី 5), 1.5 (ទី 4) — ដូចគ្នាបេះបិទនឹង R[X]!' },
          ],
        },
      ],
    },
    controls: [
      {
        controlType: { en: 'Numeric Input Slider (Outlier Value Y₄)', km: 'របារកែតម្រូវតម្លៃ Outlier ទី ៤ (Y₄ = 2.0 ដល់ 10,000)' },
        field: 'outlier_y4_value',
        defaultState: '1000',
        purpose: {
          en: 'Demonstrates that as long as Y₄ > 1.5, its rank remains 5 and Spearman ρ stays 1.00, whereas Pearson r swings wildly.',
          km: 'បង្ហាញឱ្យឃើញថា ដរាបណាតម្លៃ Y₄ > 1.5 ចំណាត់ថ្នាក់របស់វានៅតែជាទី 5 ដដែល ហើយ Spearman ρ នៅតែស្មើ 1.00 ជានិច្ច ខណៈដែល Pearson r ប្រែប្រួលខ្លាំង។',
        },
      },
    ],
    expandedContent: {
      onScreenText: {
        heading: {
          en: 'Step-by-Step Numerical Proof: Why Spearman Resists Outliers',
          km: 'ការស្រាយបញ្ជាក់តាមតួលេខជាជំហានៗ៖ ហេតុអ្វី Spearman ធន់នឹងតម្លៃ Outliers',
        },
        bullets: [
          {
            en: 'Consider 5 observations: X = [1, 3, 2, 5, 4] and Y = [0.1, 1, 0.2, 1000, 1.5].',
            km: 'ពិនិត្យមើលទិន្នន័យ ៥ ជួរ៖ X = [1, 3, 2, 5, 4] និង Y = [0.1, 1, 0.2, 1000, 1.5]។',
          },
          {
            en: 'Pearson Correlation: Because Y contains the extreme spike 1000, the mean Ȳ jumps to 200.56 and standard deviation s_Y explodes to 446.9, pulling Pearson correlation down to r_{X,Y} = 0.71.',
            km: 'សហសម្ព័ន្ធ Pearson៖ ដោយសារ Y មានតម្លៃលោតដល់ 1000 ធ្វើឱ្យមធ្យមភាគ Ȳ ឡើងដល់ 200.56 និងគម្លាតស្តង់ដារ s_Y ឡើងដល់ 446.9 ដែលទាញមេគុណ Pearson ឱ្យធ្លាក់ចុះមកត្រឹម r_{X,Y} = 0.71។',
          },
          {
            en: 'Spearman Correlation: Converting to ranks gives R[X] = [1, 3, 2, 5, 4] and R[Y] = [1, 3, 2, 5, 4]. Since every rank distance dᵢ = 0, we get ρ_{X,Y} = 1 - 0 = 1.00!',
            km: 'សហសម្ព័ន្ធ Spearman៖ ការបម្លែងទៅជាចំណាត់ថ្នាក់ផ្តល់នូវ R[X] = [1, 3, 2, 5, 4] និង R[Y] = [1, 3, 2, 5, 4]។ ដោយសារគម្លាតចំណាត់ថ្នាក់ទាំងអស់ dᵢ = 0 យើងទទួលបាន ρ_{X,Y} = 1 - 0 = 1.00!',
          },
        ],
        callout: {
          en: 'Key Takeaway: Whenever X increases (1 → 2 → 3 → 4 → 5), Y strictly increases (0.1 → 0.2 → 1.0 → 1.5 → 1000). Spearman correctly awards this a perfect 1.00!',
          km: 'ចំណុចគន្លឹះ៖ រាល់ពេលដែល X កើនឡើង (1 → 2 → 3 → 4 → 5) តម្លៃ Y ក៏កើនឡើងជាប់គ្នាជានិច្ចដែរ (0.1 → 0.2 → 1.0 → 1.5 → 1000)។ មេគុណ Spearman ផ្តល់ពិន្ទុពេញ 1.00 យ៉ាងត្រឹមត្រូវបំផុត!',
        },
      },
      deepDiveExplanation: {
        en: 'Slide 15 provides a crystal-clear numerical laboratory. Let us sort the 5 pairs by $X$: $(1, 0.1)$, $(2, 0.2)$, $(3, 1.0)$, $(4, 1.5)$, and $(5, 1000)$. Notice that for the first four points, $Y$ grows gently, and then at $X = 5$, $Y$ rockets to $1000$. In parametric statistics, the sample mean $\\bar{Y} = \\frac{0.1 + 1 + 0.2 + 1000 + 1.5}{5} = 200.56$ is completely dominated by the single outlier $1000$ (which is why four out of five points lie below $\\bar{Y}$!). Consequently, the sample standard deviation $s_Y = 446.9$ is massive, and Pearson’s linear formula penalizes the bend in the trajectory, reporting $r_{X,Y} = 0.71$. By contrast, Spearman’s rank operator $R[\\cdot]$ maps $1000$ simply to rank $5$—the exact same rank it would receive if $y_4$ were $2.0$ or $10^9$. Because $R[x_i] = R[y_i]$ for all $i = 1, \\dots, 5$, every rank difference $d_i = R[x_i] - R[y_i] = 0$, proving $\\rho_{X,Y} = 1$.',
        km: 'ស្លាយទី ១៥ ផ្តល់នូវឧទាហរណ៍គណនាដ៏ច្បាស់លាស់បំផុត។ ប្រសិនបើយើងតម្រៀបគូទិន្នន័យទាំង ៥ តាមលំដាប់របស់ $X$ យើងទទួលបាន៖ $(1, 0.1)$, $(2, 0.2)$, $(3, 1.0)$, $(4, 1.5)$ និង $(5, 1000)$។ សូមសង្កេតថា សម្រាប់ចំណុចទាំង ៤ ដំបូង $Y$ កើនឡើងតិចៗប៉ុណ្ណោះ ប៉ុន្តែដល់ត្រង់ $X = 5$ តម្លៃ $Y$ លោតឡើងដល់ $1000$។ នៅក្នុងស្ថិតិប៉ារ៉ាម៉ែត្រ មធ្យមភាគ $\\bar{Y} = \\frac{0.1 + 1 + 0.2 + 1000 + 1.5}{5} = 200.56$ ត្រូវបានទាញដោយតម្លៃ Outlier $1000$ តែមួយគត់ ដែលធ្វើឱ្យគម្លាតស្តង់ដារ $s_Y$ ឡើងដល់ $446.9$ ហើយមេគុណ Pearson ធ្លាក់មកត្រឹម $0.71$។ ផ្ទុយទៅវិញ ការបម្លែងជាចំណាត់ថ្នាក់របស់ Spearman ប្តូរលេខ $1000$ ឱ្យទៅជាចំណាត់ថ្នាក់ទី $5$ ធម្មតា (ទោះបីជាតម្លៃនោះស្មើ $2.0$ ឬ $1,000,000$ ក៏នៅតែជាចំណាត់ថ្នាក់ទី $5$ ដដែល)។ ដោយសារ $R[x_i] = R[y_i]$ គ្រប់តម្លៃ នោះ $d_i = 0$ ទាំងអស់ ដែលផ្តល់លទ្ធផល $\\rho_{X,Y} = 1$។',
      },
      practicalApplication: {
        scenarioTitle: {
          en: 'Analyzing Wealth vs Healthcare Spend When Billionaire Outliers Are Present',
          km: 'ការវិភាគទ្រព្យសម្បត្តិ ទល់នឹង ការចំណាយលើសុខភាព នៅពេលមានវត្តមានមហាសេដ្ឋី (Outliers)',
        },
        description: {
          en: 'In household economic surveys, a single ultra-high-net-worth respondent in the sample will distort Pearson correlation between Net Worth and Healthcare Visits, whereas Spearman’s rank correlation accurately reflects the monotonic trend across the population.',
          km: 'នៅក្នុងការស្ទង់មតិសេដ្ឋកិច្ចគ្រួសារ វត្តមានរបស់មហាសេដ្ឋីតែម្នាក់នៅក្នុងគំរូទិន្នន័យ នឹងធ្វើឱ្យមេគុណសហសម្ព័ន្ធ Pearson រវាងទ្រព្យសម្បត្តិសរុប និងការចំណាយលើសុខភាពមានភាពលម្អៀងខ្លាំង ប៉ុន្តែមេគុណ Spearman នៅតែអាចវាស់វែងទំនោរពិតប្រាកដរបស់ប្រជាជនទូទៅបានយ៉ាងត្រឹមត្រូវ។',
        },
        impactMetric: 'Eliminates 100% of leverage distortion from extreme heavy-tailed observations',
      },
    },
  },

  // ==========================================
  // SLIDE 16
  // ==========================================
  {
    pageNumber: 16,
    slideFooterNumber: '16',
    sectionTag: {
      en: '2.2 Quan./Ordi. vs Quan./Ordi. — Pearson vs Spearman Matrix on Gapminder',
      km: '2.2 បរិមាណ/លំដាប់ ទល់នឹង បរិមាណ/លំដាប់ — ការប្រៀបធៀបម៉ាទ្រីស Pearson និង Spearman',
    },
    simulatorMode: 'pearson_vs_spearman_matrix',
    pageIdentity: {
      titleEn: 'Pearson vs Spearman Correlation Matrices (Gapminder, 2007)',
      titleKm: 'ការប្រៀបធៀបម៉ាទ្រីសសហសម្ព័ន្ធ Pearson និង Spearman (Gapminder ឆ្នាំ ២០០៧)',
      themeName: {
        en: 'Dual-Matrix Comparative Heatmap Theme',
        km: 'ផ្ទៃប្រៀបធៀបម៉ាទ្រីសសហសម្ព័ន្ធពីរទន្ទឹមគ្នា',
      },
      canvasBgHex: '#F8FAFC',
      surfaceCardHex: '#FFFFFF',
      primaryAccentHex: '#2563EB',
      secondaryAccentHex: '#DC2626',
      textPrimaryHex: '#0F172A',
      hierarchyRationale: {
        en: 'Places the Pearson Matrix (Blue header #2563EB, magenta highlight 0.678662) on the left and the Spearman Matrix (Red header #DC2626, burnt-orange highlight 0.856590) on the right, above the interactive curved scatterplot (`Pearson: 0.927 & Spearman: 1`).',
        km: 'ដាក់ម៉ាទ្រីស Pearson (ចំណងជើងពណ៌ខៀវ #2563EB, តម្លៃ 0.678662) នៅខាងឆ្វេង និងម៉ាទ្រីស Spearman (ចំណងជើងពណ៌ក្រហម #DC2626, តម្លៃ 0.856590) នៅខាងស្តាំ អមដោយក្រាហ្វខ្សែកោងខាងក្រោម (`Pearson: 0.927 & Spearman: 1`)។',
      },
    },
    wireframe: {
      headerSection: {
        en: 'Dual Top Headers: Left = "Pearson (Gapminder, 2007)" | Right = "Spearman (Gapminder, 2007)".',
        km: 'ចំណងជើងពីរទន្ទឹមគ្នា៖ ខាងឆ្វេង = «Pearson (Gapminder, 2007)» | ខាងស្តាំ = «Spearman (Gapminder, 2007)»។',
      },
      leftZone: {
        en: 'Top-Left (50% width): Python `.corr()` snippet + 3×3 Pearson Matrix (`gdpPercap` vs `lifeExp` = 0.678662) + Bottom-Left Coordinate Plot showing 8 exponential green dots with `Pearson: 0.927 & Spearman: 1`.',
        km: 'ផ្នែកខាងឆ្វេង (ទទឹង ៥០%)៖ កូដ Python `.corr()` + ម៉ាទ្រីស Pearson ៣×៣ (0.678662) និងក្រាហ្វខាងក្រោមបង្ហាញចំណុចពណ៌បៃតងរាងកោងដែលមាន `Pearson: 0.927 & Spearman: 1`។',
      },
      rightZone: {
        en: 'Top-Right (50% width): Python `.corr("spearman")` snippet + 3×3 Spearman Matrix (`gdpPercap` vs `lifeExp` jumps to `0.856590`!) + Bottom-Right Delta Analysis Card (+0.1779 increase).',
        km: 'ផ្នែកខាងស្តាំ (ទទឹង ៥០%)៖ កូដ Python `.corr("spearman")` + ម៉ាទ្រីស Spearman ៣×៣ ដែលតម្លៃសហសម្ព័ន្ធរវាង `gdpPercap` និង `lifeExp` លោតឡើងដល់ `0.856590`! អមដោយប្រអប់វិភាគផលសង (+0.1779)។',
      },
      bottomOrTopBar: {
        en: 'Bottom explanation strip detailing why Spearman (0.857) is significantly higher than Pearson (0.679) for GDP vs Life Expectancy.',
        km: 'របារពន្យល់ខាងក្រោមអំពីមូលហេតុដែលតម្លៃ Spearman (0.857) ខ្ពស់ជាង Pearson (0.679) សម្រាប់ទំនាក់ទំនងរវាង GDP និងអាយុរំពឹងរស់។',
      },
      gridAllocation: '6 Columns Left (Pearson Matrix + Curved Plot) + 6 Columns Right (Spearman Matrix + Delta Card)',
    },
    chartMetricsMath: {
      scorecards: [
        {
          label: { en: 'Pearson r(GDP, LifeExp)', km: 'សហសម្ព័ន្ធ Pearson r(GDP, LifeExp)' },
          value: '0.678662',
          metricField: 'CORR_PEARSON(gdpPercap, lifeExp)',
          aggregation: 'Linear Correlation',
          comparisonNote: { en: 'Underestimates curved relationship', km: 'វាយតម្លៃទាបជាងការពិតដោយសារទំនាក់ទំនងរាងកោង' },
        },
        {
          label: { en: 'Spearman ρ(GDP, LifeExp)', km: 'សហសម្ព័ន្ធ Spearman ρ(GDP, LifeExp)' },
          value: '0.856590',
          metricField: 'CORR_SPEARMAN(gdpPercap, lifeExp)',
          aggregation: 'Monotonic Rank Correlation',
          comparisonNote: { en: '+0.1779 (+26.2%) higher than Pearson!', km: 'ខ្ពស់ជាង Pearson ចំនួន +0.1779 (+26.2%)!' },
        },
        {
          label: { en: 'Curved Demo Plot', km: 'ក្រាហ្វឧទាហរណ៍ខ្សែកោងខាងក្រោម' },
          value: 'r=0.927 | ρ=1',
          metricField: 'demo_curve_metrics',
          aggregation: 'Comparison',
          comparisonNote: { en: 'Monotonic curve across [-10, 10]', km: 'ខ្សែកោងកើនឡើងជាប់គ្នាក្នុងចន្លោះ [-10, 10]' },
        },
      ],
      charts: [
        {
          chartType: {
            en: 'Dual 3×3 Heatmap Pivot Tables (Pearson vs Spearman) & Monotonic Curve Plot',
            km: 'តារាងម៉ាទ្រីស Heatmap ៣×៣ ចំនួនពីរទន្ទឹមគ្នា និងក្រាហ្វខ្សែកោងម៉ូណូតូន',
          },
          dimensions: ['row_var', 'col_var'],
          metrics: ['pearson_r', 'spearman_rho', 'difference_rho_minus_r'],
          sorting: 'row_var ASC',
          stylingNote: {
            en: 'Highlight the jump from 0.678662 to 0.856590 on `gdpPercap` vs `lifeExp`, while `pop` remains near zero in both (-0.064588 and 0.003355).',
            km: 'រំលេចការកើនឡើងពី 0.678662 ទៅ 0.856590 សម្រាប់គូ `gdpPercap` និង `lifeExp` ខណៈដែល `pop` នៅតែជិតសូន្យទាំងពីរតារាង (-0.064588 និង 0.003355)។',
          },
        },
      ],
      formulas: [
        {
          title: { en: 'Diagnostic Gap Between Spearman ρ and Pearson r', km: 'រូបមន្តវិភាគគម្លាតរវាង Spearman ρ និង Pearson r' },
          equation: 'Δ_{non-linear} = |ρ_{X,Y}| - |r_{X,Y}| = 0.856590 - 0.678662 = +0.177928',
          variables: [
            { symbol: 'r_{X,Y} = 0.678662', en: 'Pearson linear correlation on raw Gapminder 2007 `gdpPercap` and `lifeExp`', km: 'សហសម្ព័ន្ធលីនេអ៊ែរ Pearson លើទិន្នន័យដើមនៃ `gdpPercap` និង `lifeExp`' },
            { symbol: 'ρ_{X,Y} = 0.856590', en: 'Spearman rank correlation on the exact same two columns', km: 'សហសម្ព័ន្ធចំណាត់ថ្នាក់ Spearman លើជួរឈរទាំងពីរដដែល' },
            { symbol: 'Δ_{non-linear} > 0', en: 'Large positive excess of |ρ| over |r| diagnoses a strong monotonic but NON-LINEAR (curved/logarithmic) relationship!', km: 'នៅពេល |ρ| ធំជាង |r| ខ្លាំង វាជាសញ្ញាបញ្ជាក់ថាទំនាក់ទំនងរវាងអថេរទាំងពីរគឺរឹងមាំ ប៉ុន្តែមានរាងជាខ្សែកោង (មិនលីនេអ៊ែរ)!' },
          ],
        },
      ],
    },
    controls: [
      {
        controlType: { en: 'Toggle Switch Control (Matrix Comparison Mode)', km: 'ប៊ូតុងប្តូរទម្រង់ប្រៀបធៀប (Side-by-Side / Difference Δ)' },
        field: 'matrix_display_mode',
        defaultState: 'Side-by-Side (Pearson & Spearman)',
        purpose: {
          en: 'Lets users switch between viewing the two 3×3 matrices side-by-side or inspecting the cell-by-cell difference (ρ - r).',
          km: 'អនុញ្ញាតឱ្យអ្នកសិក្សាមើលម៉ាទ្រីសទាំងពីរទន្ទឹមគ្នា ឬមើលតារាងផលសងរវាង (ρ - r)។',
        },
      },
    ],
    expandedContent: {
      onScreenText: {
        heading: {
          en: 'Comparing Pearson and Spearman on Gapminder 2007',
          km: 'ការប្រៀបធៀបលទ្ធផល Pearson និង Spearman លើទិន្នន័យ Gapminder ឆ្នាំ ២០០៧',
        },
        bullets: [
          {
            en: 'Pearson (`.corr()`): `gdpPercap` vs `lifeExp` = 0.678662; `gdpPercap` vs `pop` = -0.055676; `lifeExp` vs `pop` = 0.047553.',
            km: 'Pearson (`.corr()`)៖ `gdpPercap` ទល់នឹង `lifeExp` = 0.678662; `gdpPercap` ទល់នឹង `pop` = -0.055676; `lifeExp` ទល់នឹង `pop` = 0.047553។',
          },
          {
            en: 'Spearman (`.corr("spearman")`): `gdpPercap` vs `lifeExp` surges to 0.856590! Meanwhile, `pop` stays near zero (-0.064588 and 0.003355).',
            km: 'Spearman (`.corr("spearman")`)៖ `gdpPercap` ទល់នឹង `lifeExp` លោតឡើងដល់ 0.856590! ចំណែកឯ `pop` នៅតែមានតម្លៃជិតសូន្យដដែល (-0.064588 និង 0.003355)។',
          },
          {
            en: 'Bottom Visual Illustration (`Pearson: 0.927 & Spearman: 1`): When data points follow a rising curve (like exponential/logarithmic growth), Spearman captures the full monotonic strength (1.0) while Pearson is penalized by the curvature (0.927).',
            km: 'ក្រាហ្វឧទាហរណ៍ខាងក្រោម (`Pearson: 0.927 & Spearman: 1`)៖ នៅពេលទិន្នន័យរត់តាមខ្សែកោងកើនឡើង មេគុណ Spearman ចាប់យកទំនាក់ទំនងម៉ូណូតូនបានពេញលេញ (1.0) ខណៈដែល Pearson ថយចុះដោយសារភាពកោងនៃក្រាហ្វ (0.927)។',
          },
        ],
        callout: {
          en: 'Diagnostic Discovery: Why did GDP vs Life Expectancy jump from 0.68 (Pearson) to 0.86 (Spearman)? Because Life Expectancy rises rapidly with small GDP gains in poor countries and then plateaus in rich countries—a classic logarithmic curve that we will see on Slide 18!',
          km: 'របកគំហើញសំខាន់៖ ហេតុអ្វីបានជាទំនាក់ទំនងរវាង GDP និងអាយុរំពឹងរស់ លោតពី 0.68 (Pearson) ទៅដល់ 0.86 (Spearman)? ពីព្រោះអាយុរំពឹងរស់កើនឡើងយ៉ាងលឿននៅពេល GDP កើនឡើងបន្តិចបន្តួចក្នុងប្រទេសក្រីក្រ រួចក៏រាបស្មើនៅក្នុងប្រទេសអ្នកមាន ដែលបង្កើតបានជាខ្សែកោងលោការីតដូចដែលយើងនឹងឃើញនៅស្លាយទី ១៨!',
        },
      },
      deepDiveExplanation: {
        en: 'Slide 16 demonstrates one of the most powerful diagnostic workflows in Exploratory Data Analysis: running `.corr("pearson")` and `.corr("spearman")` side-by-side on the exact same dataset. Look at what happens to the pair (`gdpPercap`, `lifeExp`): Pearson reports $0.678662$, whereas Spearman reports $0.856590$. Without even drawing a scatterplot yet, this $+0.18$ gap tells the seasoned data scientist two things: (1) The relationship between national wealth and longevity is actually much stronger ($0.86$) than a linear model assumes ($0.68$), and (2) the relationship is curved (non-linear monotonic) or affected by extreme right-skewness in `gdpPercap`. Conversely, for both (`gdpPercap`, `pop`) and (`lifeExp`, `pop`), both Pearson and Spearman remain virtually zero ($\\approx -0.06$ and $0.003$), giving us high confidence that population size has neither a linear nor a monotonic relationship with wealth or health.',
        km: 'ស្លាយទី ១៦ បង្ហាញពីវិធីសាស្ត្រវិភាគដ៏មានឥទ្ធិពលបំផុតមួយក្នុង EDA គឺការគណនាម៉ាទ្រីស `.corr("pearson")` និង `.corr("spearman")` ដាក់ប្រៀបធៀបគ្នាលើសំណុំទិន្នន័យតែមួយ។ សូមពិនិត្យមើលគូ (`gdpPercap`, `lifeExp`)៖ មេគុណ Pearson ផ្តល់តម្លៃ $0.678662$ ប៉ុន្តែមេគុណ Spearman ផ្តល់តម្លៃរហូតដល់ $0.856590$។ ទោះបីជាយើងមិនទាន់បានគូសក្រាហ្វ Scatterplot ក៏ដោយ ក៏គម្លាត $+0.18$ នេះប្រាប់អ្នកវិទ្យាសាស្ត្រទិន្នន័យនូវរឿងពីរយ៉ាងភ្លាមៗ៖ (១) ទំនាក់ទំនងរវាងទ្រព្យសម្បត្តិជាតិ និងអាយុរំពឹងរស់ តាមពិតគឺរឹងមាំខ្លាំងណាស់ ($0.86$) ខ្លាំងជាងអ្វីដែលម៉ូដែលបន្ទាត់ត្រង់បានប៉ាន់ស្មាន ($0.68$) ទៅទៀត និង (២) ទំនាក់ទំនងនោះមានរាងជាខ្សែកោង (Non-linear monotonic)។ ផ្ទុយទៅវិញ សម្រាប់គូដែលមានចំនួនប្រជាជន `pop` ទាំង Pearson និង Spearman សុទ្ធតែផ្តល់តម្លៃជិតសូន្យដូចគ្នា ($\\approx -0.06$ និង $0.003$) ដែលធ្វើឱ្យយើងកាន់តែប្រាកដចិត្តថា ទំហំប្រជាជនគ្មានទំនាក់ទំនងលីនេអ៊ែរ ហើយក៏គ្មានទំនាក់ទំនងម៉ូណូតូនជាមួយ GDP ឬអាយុរំពឹងរស់ដែរ។',
      },
      practicalApplication: {
        scenarioTitle: {
          en: 'Detecting Diminishing Returns in Marketing Spend vs Revenue',
          km: 'ការរកឃើញច្បាប់នៃផលចំណេញថយចុះ (Diminishing Returns) ក្នុងការចំណាយលើទីផ្សារ',
        },
        description: {
          en: 'In digital advertising, Ad Spend vs Conversions follows a diminishing-returns curve: the first $1,000 brings rapid sales, while the 100th $1,000 brings smaller incremental gains. Comparing Spearman ρ (0.88) against Pearson r (0.65) immediately alerts BI analysts to apply a log transformation to Ad Spend.',
          km: 'នៅក្នុងការផ្សាយពាណិជ្ជកម្មឌីជីថល ការចំណាយលើការផ្សាយ ទល់នឹង ចំនួនលក់ តែងដើរតាមខ្សែកោងនៃផលចំណេញថយចុះ។ ការប្រៀបធៀបឃើញថា Spearman ρ (0.88) ខ្ពស់ជាង Pearson r (0.65) ផ្តល់សញ្ញាដល់អ្នកវិភាគភ្លាមៗថា ត្រូវបម្លែងអថេរការចំណាយទៅជាមាត្រដ្ឋានលោការីត (Log scale)។',
        },
        impactMetric: 'Reveals +26.2% stronger association on Gapminder via rank transformation',
      },
    },
  },

  // ==========================================
  // SLIDE 17
  // ==========================================
  {
    pageNumber: 17,
    slideFooterNumber: '17',
    sectionTag: {
      en: '2.2 Summary — Pearson vs Spearman Comparison Table',
      km: '2.2 សង្ខេប — តារាងប្រៀបធៀបលក្ខណៈសម្បត្តិរវាង Pearson និង Spearman',
    },
    simulatorMode: 'correlation_comparison_table',
    pageIdentity: {
      titleEn: 'Summary — Comprehensive Comparison: Pearson vs Spearman Correlation',
      titleKm: 'សង្ខេប (Summary) — តារាងប្រៀបធៀបលម្អិតរវាងមេគុណសហសម្ព័ន្ធ Pearson និង Spearman',
      themeName: {
        en: 'Executive Reference Comparison Table Theme',
        km: 'ផ្ទៃតារាងសង្ខេបប្រៀបធៀបសម្រាប់ជាឯកសារយោង',
      },
      canvasBgHex: '#F8FAFC',
      surfaceCardHex: '#FFFFFF',
      primaryAccentHex: '#1E4E79',
      secondaryAccentHex: '#2563EB',
      textPrimaryHex: '#0F172A',
      hierarchyRationale: {
        en: 'Clean horizontal hairlines matching the textbook 6-row × 3-column academic table on Slide 17, using #2563EB Blue for "Numerical" and #1E4E79 Navy for "Ordinal" and column headers.',
        km: 'រចនាតារាង ៦ ជួរដេក × ៣ ជួរឈរ ដូចក្នុងស្លាយទី ១៧ ដោយប្រើបន្ទាត់ផ្តេកស្អាតៗ និងរំលេចពណ៌ខៀវ (#2563EB) សម្រាប់ពាក្យ «Numerical» និង «Ordinal»។',
      },
    },
    wireframe: {
      headerSection: {
        en: 'Top Header: "Summary / សង្ខេបការប្រៀបធៀបរវាង Pearson និង Spearman".',
        km: 'ផ្នែកខាងលើ៖ ចំណងជើង «Summary / សង្ខេបការប្រៀបធៀបរវាង Pearson និង Spearman»។',
      },
      leftZone: {
        en: 'Main Workspace (100% full-width structured table): 6 Aspects compared side-by-side between `Pearson` and `Spearman`: Type, Measure, Data Type, Outliers, Range, and Interpretation (≈ 1, ≈ -1, ≈ 0).',
        km: 'ផ្ទៃកណ្តាលពេញ៖ តារាងប្រៀបធៀបលក្ខណៈទាំង ៦ រវាង `Pearson` និង `Spearman` រួមមាន៖ ប្រភេទស្ថិតិ (Type), អ្វីដែលវាវាស់វែង (Measure), ប្រភេទទិន្នន័យ (Data Type), ភាពរសើបនឹង Outliers, ដែនកំណត់ (Range) និងការបកស្រាយ (Interpretation)។',
      },
      rightZone: {
        en: 'Bottom Interactive Decision Helper where users select their dataset characteristics (Outliers present? Ordinal data? Curved trend?) and get an instant recommendation.',
        km: 'ឧបករណ៍ជំនួយការសម្រេចចិត្តនៅផ្នែកខាងក្រោម ដែលអនុញ្ញាតឱ្យអ្នកសិក្សាជ្រើសរើសលក្ខណៈទិន្នន័យរបស់ខ្លួន ដើម្បីទទួលបានការណែនាំភ្លាមៗថាគួរប្រើ Pearson ឬ Spearman។',
      },
      bottomOrTopBar: {
        en: 'Footer note reminding analysts that in doubt, computing both Pearson and Spearman side-by-side is best practice.',
        km: 'របារចំណាំខាងក្រោមដែលរំលឹកថា ការគណនាទាំង Pearson និង Spearman ទន្ទឹមគ្នាគឺជាការអនុវត្តដ៏ល្អបំផុត។',
      },
      gridAllocation: '12-Column Full-Width Comparative Specification Table + Interactive Selector Strip',
    },
    chartMetricsMath: {
      scorecards: [
        {
          label: { en: 'Pearson Classification', km: 'ចំណាត់ថ្នាក់ស្ថិតិ Pearson' },
          value: 'Parametric (Linear)',
          metricField: 'pearson_type',
          aggregation: 'Mean/Std-Based',
          comparisonNote: { en: 'Numerical only | Sensitive to outliers', km: 'សម្រាប់តែទិន្នន័យលេខ | រសើបនឹង Outliers' },
        },
        {
          label: { en: 'Spearman Classification', km: 'ចំណាត់ថ្នាក់ស្ថិតិ Spearman' },
          value: 'Non-Parametric (Rank)',
          metricField: 'spearman_type',
          aggregation: 'Rank-Based',
          comparisonNote: { en: 'Ordinal or Numerical | Robust to outliers', km: 'ប្រើបានទាំងទិន្នន័យលំដាប់ និងលេខ | ធន់នឹង Outliers' },
        },
      ],
      charts: [
        {
          chartType: {
            en: 'Looker Studio 6-Row × 3-Column Bilingual Comparison Table',
            km: 'តារាងប្រៀបធៀបទ្វេភាសា ៦ ជួរដេក × ៣ ជួរឈរ',
          },
          dimensions: ['aspect_en_km', 'pearson_spec_en_km', 'spearman_spec_en_km'],
          metrics: [],
          sorting: 'aspect_order ASC',
          stylingNote: {
            en: 'Include all 6 rows exactly as shown on Slide 17: Type (Parametric vs Non-parametric), Measure (Linear vs Monotonic), Data Type (Numerical vs Ordinal or Numerical), Outliers (Sensitive vs Less sensitive), Range ([-1,1] vs [-1,1]), Interpretation (≈1, ≈-1, ≈0).',
            km: 'បង្ហាញគ្រប់ជួរដេកទាំង ៦ ដូចក្នុងស្លាយទី ១៧ ទាំងស្រុង ដោយមានការបកប្រែជាភាសាខ្មែរច្បាស់លាស់។',
          },
        },
      ],
      formulas: [],
    },
    controls: [
      {
        controlType: { en: 'Drop-down List Control (Aspect Filter)', km: 'តម្រងជ្រើសរើសលក្ខណៈប្រៀបធៀប (Aspect Filter)' },
        field: 'comparison_aspect',
        defaultState: 'All 6 Aspects',
        purpose: {
          en: 'Lets students highlight specific rows of the comparison table during exam review.',
          km: 'អនុញ្ញាតឱ្យនិស្សិតជ្រើសរើសមើលលក្ខណៈនីមួយៗដាច់ដោយឡែកសម្រាប់ការរំលឹកមេរៀនត្រៀមប្រឡង។',
        },
      },
    ],
    expandedContent: {
      onScreenText: {
        heading: {
          en: 'Master Summary Table: Pearson vs Spearman Correlation',
          km: 'តារាងសង្ខេបរួម៖ ការប្រៀបធៀបរវាងមេគុណសហសម្ព័ន្ធ Pearson និង Spearman',
        },
        bullets: [
          {
            en: '1. Type (ប្រភេទ): Pearson is Parametric (relies on sample mean & variance parameters); Spearman is Non-parametric (relies on distribution-free ranks).',
            km: '១. ប្រភេទ (Type)៖ Pearson គឺជាស្ថិតិប៉ារ៉ាម៉ែត្រ (Parametric ពឹងផ្អែកលើមធ្យមភាគ និងវ៉ារ្យង់); ចំណែក Spearman គឺជាស្ថិតិមិនប៉ារ៉ាម៉ែត្រ (Non-parametric ពឹងផ្អែកលើចំណាត់ថ្នាក់)។',
          },
          {
            en: '2. Measure (រង្វាស់): Pearson measures Linear relationship; Spearman measures Monotonic relationship.',
            km: '២. រង្វាស់ (Measure)៖ Pearson វាស់ទំនាក់ទំនងលីនេអ៊ែរ (Linear); ចំណែក Spearman វាស់ទំនាក់ទំនងម៉ូណូតូន (Monotonic)។',
          },
          {
            en: '3. Data Type & Outliers (ប្រភេទទិន្នន័យ និង Outliers): Pearson requires Numerical data and is sensitive to outliers; Spearman works on Ordinal or Numerical data and is much less sensitive to outliers.',
            km: '៣. ប្រភេទទិន្នន័យ និង Outliers៖ Pearson ប្រើបានតែលើទិន្នន័យលេខ (Numerical) និងរសើបខ្លាំងនឹង Outliers; ចំណែក Spearman ប្រើបានទាំងលើទិន្នន័យលំដាប់ (Ordinal) ឬលេខ ហើយធន់នឹង Outliers។',
          },
          {
            en: '4. Range & Interpretation (ដែនកំណត់ និងការបកស្រាយ): Both span [-1, 1], where ≈ 1 means perfect positive (linear vs increasing monotonic), ≈ -1 means perfect negative (linear vs decreasing monotonic), and ≈ 0 means no linear/monotonic trend.',
            km: '៤. ដែនកំណត់ និងការបកស្រាយ៖ ទាំងពីរមានតម្លៃក្នុងចន្លោះ [-1, 1] ដែល ≈ 1 មានន័យថាទំនាក់ទំនងវិជ្ជមានល្អឥតខ្ចោះ, ≈ -1 អវិជ្ជមានល្អឥតខ្ចោះ និង ≈ 0 គ្មានទំនោរលីនេអ៊ែរ ឬម៉ូណូតូន។',
          },
        ],
        callout: {
          en: 'Exam & Interview Essential: Memorize the 4 key contrasts—Parametric vs Non-parametric, Linear vs Monotonic, Numerical vs Ordinal/Numerical, and Outlier-Sensitive vs Outlier-Robust.',
          km: 'ចំណុចសំខាន់សម្រាប់ការប្រឡង និងសម្ភាសន៍ការងារ៖ សូមចងចាំភាពខុសគ្នាគោលទាំង ៤ គឺ ប៉ារ៉ាម៉ែត្រ ទល់នឹង មិនប៉ារ៉ាម៉ែត្រ, លីនេអ៊ែរ ទល់នឹង ម៉ូណូតូន, លេខសុទ្ធ ទល់នឹង លំដាប់/លេខ, និង រសើបនឹង Outliers ទល់នឹង ធន់នឹង Outliers។',
        },
      },
      deepDiveExplanation: {
        en: 'Slide 17 synthesizes Sections 2.1 and 2.2 into a canonical decision table. Why is Pearson called "Parametric" while Spearman is called "Non-parametric"? In mathematical statistics, a parametric measure assumes that the data-generating distribution can be faithfully summarized by a finite set of parameters—specifically the first two moments (mean $\\mu$ and variance $\\sigma^2$) of a bivariate normal distribution. When data are bivariate normal, Pearson’s $r$ is the Maximum Likelihood Estimator of the population correlation. However, when distributions are heavy-tailed, skewed (like GDP or Population), or purely ordinal (where distances between categories like "Satisfied" and "Very Satisfied" are not metric), sample means and variances lose their geometric meaning. Non-parametric methods like Spearman’s $\\rho$ discard metric distances and rely solely on order statistics (ranks), trading a tiny amount of efficiency under normality for massive robustness under real-world messiness.',
        km: 'ស្លាយទី ១៧ សំយោគខ្លឹមសារនៃផ្នែក 2.1 និង 2.2 ទៅជាតារាងសម្រេចចិត្តដ៏ពេញលេញមួយ។ តើហេតុអ្វីបានជា Pearson ត្រូវបានគេហៅថា «Parametric (ប៉ារ៉ាម៉ែត្រ)» ខណៈដែល Spearman ត្រូវបានគេហៅថា «Non-parametric (មិនប៉ារ៉ាម៉ែត្រ)»? នៅក្នុងស្ថិតិគណិតវិទ្យា វិធីសាស្ត្រប៉ារ៉ាម៉ែត្រសន្មតថាទិន្នន័យដើរតាមការបែងចែកស្តង់ដារ (ដូចជាការបែងចែកណរម៉ាល់) ដែលអាចសង្ខេបបានយ៉ាងត្រឹមត្រូវដោយប្រើប៉ារ៉ាម៉ែត្រមធ្យមភាគ ($\\mu$) និងវ៉ារ្យង់ ($\\sigma^2$)។ ប៉ុន្តែ នៅពេលទិន្នន័យក្នុងពិភពពិតមានភាពពេបខ្លាំង មានតម្លៃ Outliers ធំៗ (ដូចជា GDP ឬចំនួនប្រជាជន) ឬជាទិន្នន័យលំដាប់ (Ordinal) នោះការគណនាមធ្យមភាគ និងវ៉ារ្យង់លែងមានអត្ថន័យត្រឹមត្រូវទៀតហើយ។ វិធីសាស្ត្រមិនប៉ារ៉ាម៉ែត្រដូចជា Spearman $\\rho$ ពឹងផ្អែកតែលើលំដាប់ចំណាត់ថ្នាក់ប៉ុណ្ណោះ ដែលធ្វើឱ្យវាមានភាពធន់យ៉ាងខ្លាំងទៅនឹងទិន្នន័យស្មុគស្មាញក្នុងពិភពពិត។',
      },
      practicalApplication: {
        scenarioTitle: {
          en: 'Choosing the Right Correlation Metric in Clinical Trials & Credit Risk',
          km: 'ការជ្រើសរើសមេគុណសហសម្ព័ន្ធឱ្យបានត្រឹមត្រូវក្នុងការស្រាវជ្រាវវេជ្ជសាស្ត្រ និងហានិភ័យឥណទាន',
        },
        description: {
          en: 'In medical research, pain severity is rated 0–10 (ordinal) while biomarker concentrations are skewed across orders of magnitude. Biostatisticians mandate Spearman’s ρ in the study protocol to prevent outlier lab readings from invalidating clinical conclusions.',
          km: 'នៅក្នុងការស្រាវជ្រាវវេជ្ជសាស្ត្រ កម្រិតនៃការឈឺចាប់ត្រូវបានវាយតម្លៃពី ០ ដល់ ១០ (ទិន្នន័យលំដាប់) ខណៈដែលកំហាប់សារធាតុគីមីក្នុងឈាមមានភាពពេនខ្លាំង។ អ្នកស្ថិតិវេជ្ជសាស្ត្រកំណត់ឱ្យប្រើមេគុណ Spearman ρ ដើម្បីការពារកុំឱ្យលទ្ធផលពិសោធន៍ដាច់ស្រយាលមួយចំនួនតូចធ្វើឱ្យខូចការសន្និដ្ឋានវេជ្ជសាស្ត្រ។',
        },
        impactMetric: 'Standardizes correlation selection across 100% of quantitative & ordinal pairs',
      },
    },
  },

  // ==========================================
  // SLIDE 18
  // ==========================================
  {
    pageNumber: 18,
    slideFooterNumber: '18',
    sectionTag: {
      en: '2.1/2.2 Visualization — Linear-Scale Scatterplots',
      km: '2.1/2.2 ការបង្ហាញជាក្រាហ្វ — ក្រាហ្វចំណុចលើមាត្រដ្ឋានលីនេអ៊ែរ (Scatterplot)',
    },
    simulatorMode: 'gapminder_linear_scatter',
    pageIdentity: {
      titleEn: 'Visualization: Scatterplot — Linear-Scale GDP vs LifeExp & Population (2007)',
      titleKm: 'ការបង្ហាញជាក្រាហ្វ៖ Scatterplot — ការគូសក្រាហ្វ GDP ទល់នឹងអាយុរំពឹងរស់ និងប្រជាជន (ឆ្នាំ ២០០៧)',
      themeName: {
        en: 'Dual Scatterplot Diagnostic Studio (Linear Axes)',
        km: 'ផ្ទៃពិនិត្យក្រាហ្វ Scatterplot ពីរទន្ទឹមគ្នា (លើអ័ក្សលីនេអ៊ែរធម្មតា)',
      },
      canvasBgHex: '#F8FAFC',
      surfaceCardHex: '#FFFFFF',
      primaryAccentHex: '#6366F1',
      secondaryAccentHex: '#1E4E79',
      textPrimaryHex: '#0F172A',
      hierarchyRationale: {
        en: 'Replicates the exact Plotly periwinkle-indigo (`#6366F1`) scatter points on a soft `#EEF2FF` grid backdrop from Slide 18, placing `gdpPercap` vs `lifeExp` on the left and `gdpPercap` vs `pop` on the right.',
        km: 'រក្សាពណ៌ចំណុចខៀវស្វាយ (`#6366F1`) លើផ្ទៃក្រឡា `#EEF2FF` ដូចក្នុងស្លាយទី ១៨ ដោយដាក់ក្រាហ្វ `gdpPercap` ទល់នឹង `lifeExp` នៅខាងឆ្វេង និងក្រាហ្វ `gdpPercap` ទល់នឹង `pop` នៅខាងស្តាំ។',
      },
    },
    wireframe: {
      headerSection: {
        en: 'Top Header: "Visualization: Scatterplot — Let’s visualize: gdpPercap with lifeExp & pop."',
        km: 'ផ្នែកខាងលើ៖ ចំណងជើង «Visualization: Scatterplot — ចូរយើងគូសក្រាហ្វ gdpPercap ជាមួយនឹង lifeExp និង pop»។',
      },
      leftZone: {
        en: 'Left Chart (50% width): "The world GDP vs LifeExp in 2007" (`gdpPercap` linear X-axis 0 to 50k; `lifeExp` linear Y-axis 40 to 85). Shows a sharp vertical wall of poor countries on the left curving into a flat plateau on the right.',
        km: 'ក្រាហ្វខាងឆ្វេង (ទទឹង ៥០%)៖ «The world GDP vs LifeExp in 2007» (អ័ក្ស X លីនេអ៊ែរពី 0 ដល់ 50k; អ័ក្ស Y ពី 40 ដល់ 85)។ បង្ហាញពីការប្រមូលផ្តុំយ៉ាងណែននៅខាងឆ្វេង រួចកោងរាបស្មើទៅខាងស្តាំ។',
      },
      rightZone: {
        en: 'Right Chart (50% width): "The world GDP vs Population in 2007" (`gdpPercap` linear X-axis 0 to 50k; `pop` linear Y-axis 0 to 1.4B). Shows 140 countries squashed flat against the bottom axis while China (1.32B) and India (1.11B) float at the top!',
        km: 'ក្រាហ្វខាងស្តាំ (ទទឹង ៥០%)៖ «The world GDP vs Population in 2007» (អ័ក្ស X ពី 0 ដល់ 50k; អ័ក្ស Y ពី 0 ដល់ 1.4B)។ បង្ហាញថាប្រទេសចំនួន ១៤០ ត្រូវបានគាបជាប់នៅបាតក្រាហ្វ ខណៈដែលចិន និងឥណ្ឌាអណ្តែតនៅខាងលើដាច់តែឯង!',
      },
      bottomOrTopBar: {
        en: 'Bottom Visual Diagnosis Callout explaining why linear axes cause severe overplotting when variables are right-skewed.',
        km: 'របារវិភាគខាងក្រោមដែលពន្យល់ពីមូលហេតុដែលការប្រើអ័ក្សលីនេអ៊ែរធម្មតា ធ្វើឱ្យចំណុចទិន្នន័យជាន់គ្នាពិបាកមើលនៅពេលទិន្នន័យមានភាពពេនខ្លាំង។',
      },
      gridAllocation: '6 Columns Left (GDP vs LifeExp Linear Scatter) + 6 Columns Right (GDP vs Pop Linear Scatter)',
    },
    chartMetricsMath: {
      scorecards: [
        {
          label: { en: 'Left Plot Pattern', km: 'លំនាំនៃក្រាហ្វខាងឆ្វេង (GDP vs LifeExp)' },
          value: 'Concave Log Curve',
          metricField: 'left_plot_geometry',
          aggregation: 'Visual Diagnosis',
          comparisonNote: { en: 'Explains why Spearman (0.86) > Pearson (0.68)!', km: 'ពន្យល់ពីមូលហេតុដែល Spearman (0.86) > Pearson (0.68)!' },
        },
        {
          label: { en: 'Right Plot Compression', km: 'ការគាបទិន្នន័យនៅក្រាហ្វខាងស្តាំ (GDP vs Pop)' },
          value: '98.6% < 0.3B',
          metricField: 'pop_compression_ratio',
          aggregation: 'Visual Diagnosis',
          comparisonNote: { en: '140 of 142 countries compressed at bottom', km: '១៤០ ក្នុងចំណោម ១៤២ ប្រទេសត្រូវបានគាបជាប់បាតក្រាហ្វ' },
        },
      ],
      charts: [
        {
          chartType: {
            en: 'Chart 1: Looker Studio Scatterplot (`gdpPercap` vs `lifeExp`, Linear Axes)',
            km: 'ក្រាហ្វទី ១៖ ក្រាហ្វ Scatterplot (`gdpPercap` ទល់នឹង `lifeExp` លើអ័ក្សលីនេអ៊ែរ)',
          },
          dimensions: ['country'],
          metrics: ['gdpPercap (X)', 'lifeExp (Y)'],
          sorting: 'gdpPercap ASC',
          stylingNote: {
            en: 'Linear X-axis [0, 50000], Linear Y-axis [40, 85].',
            km: 'កំណត់អ័ក្ស X លីនេអ៊ែរ [0, 50000] និងអ័ក្ស Y លីនេអ៊ែរ [40, 85]។',
          },
        },
        {
          chartType: {
            en: 'Chart 2: Looker Studio Scatterplot (`gdpPercap` vs `pop`, Linear Axes)',
            km: 'ក្រាហ្វទី ២៖ ក្រាហ្វ Scatterplot (`gdpPercap` ទល់នឹង `pop` លើអ័ក្សលីនេអ៊ែរ)',
          },
          dimensions: ['country'],
          metrics: ['gdpPercap (X)', 'pop (Y)'],
          sorting: 'gdpPercap ASC',
          stylingNote: {
            en: 'Linear X-axis [0, 50000], Linear Y-axis [0, 1.4B]. Highlights the visual distortion caused by China and India.',
            km: 'កំណត់អ័ក្ស X លីនេអ៊ែរ [0, 50000] និងអ័ក្ស Y លីនេអ៊ែរ [0, 1.4B] ដែលបង្ហាញពីការគាបទិន្នន័យដោយសារប្រទេសចិន និងឥណ្ឌា។',
          },
        },
      ],
      formulas: [],
    },
    controls: [
      {
        controlType: { en: 'Drop-down List Control (Continent Filter)', km: 'តម្រងជ្រើសរើសទ្វីប (Continent Filter)' },
        field: 'continent',
        defaultState: 'All Continents (2007)',
        purpose: {
          en: 'Lets users isolate specific continents on both linear scatterplots.',
          km: 'អនុញ្ញាតឱ្យអ្នកសិក្សាច្រោះមើលទ្វីបនីមួយៗនៅលើក្រាហ្វ Scatterplot ទាំងពីរ។',
        },
      },
    ],
    expandedContent: {
      onScreenText: {
        heading: {
          en: 'Visualizing Quantitative Pairs with Scatterplots (Linear Scale)',
          km: 'ការគូសក្រាហ្វចំណុច (Scatterplot) សម្រាប់គូអថេរបរិមាណ (មាត្រដ្ឋានលីនេអ៊ែរ)',
        },
        bullets: [
          {
            en: 'Left Plot (`gdpPercap` vs `lifeExp` in 2007): Reveals why Spearman (0.857) beat Pearson (0.679)! The points form an L-shaped / logarithmic curve: countries with GDP < $5,000 span life expectancies from 40 to 75 years, while countries above $15,000 cluster tightly between 75 and 83 years.',
            km: 'ក្រាហ្វខាងឆ្វេង (`gdpPercap` ទល់នឹង `lifeExp` ឆ្នាំ ២០០៧)៖ បង្ហាញយ៉ាងច្បាស់ពីមូលហេតុដែល Spearman (0.857) ខ្ពស់ជាង Pearson (0.679)! ចំណុចទិន្នន័យរត់ជារាងខ្សែកោងលោការីត៖ ប្រទេសដែលមាន GDP < $5,000 មានអាយុរំពឹងរស់ពី 40 ដល់ 75 ឆ្នាំ ខណៈប្រទេសមាន GDP > $15,000 ប្រមូលផ្តុំនៅចន្លោះ 75 ដល់ 83 ឆ្នាំ។',
          },
          {
            en: 'Right Plot (`gdpPercap` vs `pop` in 2007): Because `pop` has extreme outliers (China at 1.32B and India at 1.11B), the linear Y-axis (0 to 1.4B) crushes the other 140 countries into an unreadable horizontal band near 0!',
            km: 'ក្រាហ្វខាងស្តាំ (`gdpPercap` ទល់នឹង `pop` ឆ្នាំ ២០០៧)៖ ដោយសារចំនួនប្រជាជន `pop` មានតម្លៃ Outliers ដ៏ធំ (ចិន 1.32 ពាន់លាន និងឥណ្ឌា 1.11 ពាន់លាន) អ័ក្ស Y លីនេអ៊ែរ (0 ដល់ 1.4B) បានគាបប្រទេសចំនួន ១៤០ ផ្សេងទៀតឱ្យទៅជាបន្ទាត់ដេកជាន់គ្នានៅជិតសូន្យ ដែលពិបាកមើលបំផុត!',
          },
        ],
        callout: {
          en: 'Visual Diagnostic Question: How can we "unpack" the jammed points near x = 0 in the left plot and near y = 0 in the right plot? By applying a Logarithmic Scale (Slide 19)!',
          km: 'សំណួរគន្លឹះសម្រាប់ការរចនាក្រាហ្វ៖ តើយើងអាច «ពន្លាត» ចំណុចទិន្នន័យដែលគាបជាន់គ្នានៅជិត x = 0 ក្នុងក្រាហ្វខាងឆ្វេង និងនៅជិត y = 0 ក្នុងក្រាហ្វខាងស្តាំដោយរបៀបណា? គឺតាមរយៈការប្រើមាត្រដ្ឋានលោការីត (Log Scale) នៅស្លាយទី ១៩!',
        },
      },
      deepDiveExplanation: {
        en: 'Slide 18 is a masterclass in why raw linear scatterplots of skewed socio-economic variables often obscure the data. Recall from Slide 6 that both `gdpPercap` and `pop` are heavily right-skewed. On the left scatterplot (`gdpPercap` vs `lifeExp`), nearly half of all countries have a GDP per capita below $5,000—meaning 46.5% of the data points are crammed into the leftmost 10% of the horizontal canvas! Even worse, on the right scatterplot (`gdpPercap` vs `pop`), China ($1.32\\times 10^9$) and India ($1.11\\times 10^9$) force the linear Y-axis to extend to $1.4\\text{ billion}$, squashing countries with $1\\text{ million}$ to $100\\text{ million}$ people into the bottom sliver of the chart. Whenever a variable spans multiple orders of magnitude and exhibits positive skewness, plotting it on a linear axis violates visual clarity—motivating the logarithmic axis transformations on Slide 19.',
        km: 'ស្លាយទី ១៨ គឺជាមេរៀនដ៏សំខាន់ដែលបង្ហាញថា ហេតុអ្វីការគូសក្រាហ្វ Scatterplot លើអ័ក្សលីនេអ៊ែរធម្មតាសម្រាប់ទិន្នន័យសេដ្ឋកិច្ចដែលពេនខ្លាំង តែងធ្វើឱ្យយើងមើលទិន្នន័យមិនច្បាស់។ សូមរំលឹកពីស្លាយទី ៦ ថា ទាំង `gdpPercap` និង `pop` សុទ្ធតែពេនទៅខាងស្តាំយ៉ាងខ្លាំង។ នៅលើក្រាហ្វខាងឆ្វេង (`gdpPercap` ទល់នឹង `lifeExp`) ប្រទេសជិតពាក់កណ្តាលពិភពលោកមាន GDP ក្រោម $5,000 ដែលមានន័យថា ៤៦,៥% នៃចំណុចទិន្នន័យទាំងអស់ត្រូវបានប្រមូលផ្តុំគាបជាប់គ្នាក្នុងផ្ទៃត្រឹមតែ ១០% ខាងឆ្វេងនៃក្រាហ្វប៉ុណ្ណោះ! កាន់តែធ្ងន់ធ្ងរជាងនេះ នៅលើក្រាហ្វខាងស្តាំ (`gdpPercap` ទល់នឹង `pop`) ប្រទេសចិន និងឥណ្ឌាបានបង្ខំឱ្យអ័ក្ស Y លាតសន្ធឹងដល់ទៅ 1.4 ពាន់លាននាក់ ដែលធ្វើឱ្យប្រទេសដែលមានប្រជាជនពី 1 លាន ទៅ 100 លាននាក់ ត្រូវគាបជាប់គ្នានៅបាតក្រាហ្វមើលមិនយល់។ ហេតុនេះ នៅពេលដែលអថេរមួយលាតសន្ធឹងឆ្លងកាត់ច្រើនខ្ទង់ស្វ័យគុណ យើងចាំបាច់ត្រូវបម្លែងអ័ក្សរបស់វាទៅជាមាត្រដ្ឋានលោការីត (Log Scale) ដូចនៅក្នុងស្លាយទី ១៩។',
      },
      practicalApplication: {
        scenarioTitle: {
          en: 'Diagnosing Overplotting in E-Commerce Merchant Dashboards',
          km: 'ការដោះស្រាយបញ្ហាចំណុចជាន់គ្នា (Overplotting) ក្នុងរបាយការណ៍អាជីវកម្មអេឡិចត្រូនិក',
        },
        description: {
          en: 'When plotting Merchant Monthly Sales Volume vs Customer Rating on a linear axis, thousands of small SME shops get squashed at x = 0 while 3 giant supermarket chains stretch the X-axis. Switching to a log axis reveals the entire SME ecosystem.',
          km: 'នៅពេលគូសក្រាហ្វចំណូលលក់ប្រចាំខែរបស់ហាង ទល់នឹង ពិន្ទុវាយតម្លៃរបស់អតិថិជនលើអ័ក្សលីនេអ៊ែរ ហាងតូចៗរាប់ពាន់នឹងត្រូវគាបជាប់គ្នានៅជិតសូន្យ ដោយសារផ្សារទំនើបធំៗចំនួន ៣ ទាញអ័ក្ស X ឱ្យវែងពេក។ ការប្តូរទៅប្រើអ័ក្ស Log ជួយបង្ហាញទិន្នន័យរបស់ហាងតូចៗទាំងអស់ឱ្យឃើញយ៉ាងច្បាស់។',
        },
        impactMetric: 'Unpacks 46.5% of global nations compressed into the first 10% of the linear GDP axis',
      },
    },
  },

  // ==========================================
  // SLIDE 19
  // ==========================================
  {
    pageNumber: 19,
    slideFooterNumber: '19',
    sectionTag: {
      en: '2.1/2.2 Visualization — Log-Transformed Scatterplots',
      km: '2.1/2.2 ការបង្ហាញជាក្រាហ្វ — ក្រាហ្វចំណុចលើមាត្រដ្ឋានលោការីត (Log-Scale Scatterplot)',
    },
    simulatorMode: 'gapminder_log_scatter',
    pageIdentity: {
      titleEn: 'Visualization: Scatterplot — Log-Scale GDP & Log-Scale Population (2007)',
      titleKm: 'ការបង្ហាញជាក្រាហ្វ៖ Scatterplot — ការប្រើមាត្រដ្ឋានលោការីតលើ GDP និងចំនួនប្រជាជន (ឆ្នាំ ២០០៧)',
      themeName: {
        en: 'Logarithmic Coordinate Transformation Studio',
        km: 'ផ្ទៃបង្ហាញការបម្លែងអ័ក្សក្រាហ្វជាមាត្រដ្ឋានលោការីត (Log Scale)',
      },
      canvasBgHex: '#F8FAFC',
      surfaceCardHex: '#FFFFFF',
      primaryAccentHex: '#6366F1',
      secondaryAccentHex: '#0284C7',
      textPrimaryHex: '#0F172A',
      hierarchyRationale: {
        en: 'Matches Slide 19’s twin periwinkle scatterplots where Chart 1 uses `log(gdpPercap)` on the X-axis (linearizing the curve into a clean upward band!) and Chart 2 uses `log(pop)` on the Y-axis (revealing a uniform random cloud!).',
        km: 'បង្ហាញក្រាហ្វ Scatterplot ទាំងពីរដូចក្នុងស្លាយទី ១៩ ដែលក្រាហ្វទី ១ ប្រើអ័ក្សដេក `log(gdpPercap)` (ធ្វើឱ្យខ្សែកោងប្រែជាបន្ទាត់ត្រង់កើនឡើងយ៉ាងស្អាត!) និងក្រាហ្វទី ២ ប្រើអ័ក្សឈរ `log(pop)` (បង្ហាញពីពពកចំណុចរាយប៉ាយគ្មានទំនោរ!)។',
      },
    },
    wireframe: {
      headerSection: {
        en: 'Top Header: "Visualization: Scatterplot — Let’s visualize: gdpPercap with lifeExp & pop (Log Transformation)."',
        km: 'ផ្នែកខាងលើ៖ ចំណងជើង «Visualization: Scatterplot — ការគូសក្រាហ្វ gdpPercap ជាមួយនឹង lifeExp និង pop ដោយប្រើមាត្រដ្ឋាន Log»។',
      },
      leftZone: {
        en: 'Left Chart (50% width): "The world (log) GDP vs Population 2007" [Note: Y-axis is `lifeExp` 40–85, X-axis is `gdpPercap` on log10 scale: 200, 500, 1000, 2k, 5k, 10k, 20k, 50k]. The curved wall from Slide 18 is now straightened into a clear positive linear cloud!',
        km: 'ក្រាហ្វខាងឆ្វេង (ទទឹង ៥០%)៖ «The world (log) GDP vs Population 2007» [សម្គាល់៖ អ័ក្ស Y គឺ `lifeExp` 40–85 រីឯអ័ក្ស X គឺ `gdpPercap` លើមាត្រដ្ឋាន Log: 1000, 10k]។ ខ្សែកោងកាលពីស្លាយទី ១៨ ឥឡូវនេះត្រូវបានពន្លាតឱ្យទៅជាទំនោរលីនេអ៊ែរកើនឡើងយ៉ាងច្បាស់!',
      },
      rightZone: {
        en: 'Right Chart (50% width): "The world GDP vs (log) Population 2007" (`gdpPercap` linear X-axis 0–50k; `pop` log10 Y-axis: 100k, 1M, 10M, 100M, 1B). Unpacks all 142 countries and visually confirms zero correlation!',
        km: 'ក្រាហ្វខាងស្តាំ (ទទឹង ៥០%)៖ «The world GDP vs (log) Population 2007» (អ័ក្ស X គឺ `gdpPercap` 0–50k; អ័ក្ស Y គឺ `pop` លើមាត្រដ្ឋាន Log: 100k, 1M, 10M, 100M, 1B)។ ពន្លាតប្រទេសទាំង ១៤២ ឱ្យមើលឃើញច្បាស់ ហើយបញ្ជាក់ថាគ្មានសហសម្ព័ន្ធមែន!',
      },
      bottomOrTopBar: {
        en: 'Bottom interactive Log-Axis Toggle so students can flip between Slide 18 (Linear) and Slide 19 (Log) in real time.',
        km: 'ប៊ូតុងបិទ/បើកមាត្រដ្ឋាន Log នៅខាងក្រោម ដើម្បីឱ្យនិស្សិតអាចប្តូរមើលរវាងស្លាយទី ១៨ (Linear) និងស្លាយទី ១៩ (Log) បានភ្លាមៗ។',
      },
      gridAllocation: '6 Columns Left (Log-GDP vs LifeExp) + 6 Columns Right (GDP vs Log-Pop)',
    },
    chartMetricsMath: {
      scorecards: [
        {
          label: { en: 'Pearson r(log₁₀(GDP), LifeExp)', km: 'សហសម្ព័ន្ធ r(log₁₀(GDP), LifeExp)' },
          value: 'r = 0.809',
          metricField: 'CORR(LOG10(gdpPercap), lifeExp)',
          aggregation: 'Log-Linear Correlation',
          comparisonNote: { en: 'Up from r = 0.679 on raw linear GDP!', km: 'កើនឡើងពី r = 0.679 នៅលើមាត្រដ្ឋាន GDP ធម្មតា!' },
        },
        {
          label: { en: 'Pearson r(GDP, log₁₀(Pop))', km: 'សហសម្ព័ន្ធ r(GDP, log₁₀(Pop))' },
          value: 'r = -0.056',
          metricField: 'CORR(gdpPercap, LOG10(pop))',
          aggregation: 'Log-Linear Correlation',
          comparisonNote: { en: 'Confirms true decorrelation across scales', km: 'បញ្ជាក់ថាពិតជាគ្មានទំនាក់ទំនងនឹងគ្នាប្រាកដមែន' },
        },
      ],
      charts: [
        {
          chartType: {
            en: 'Chart 1: Scatterplot with Logarithmic X-Axis (`log(gdpPercap)` vs `lifeExp`)',
            km: 'ក្រាហ្វទី ១៖ ក្រាហ្វ Scatterplot ប្រើអ័ក្ស X ជាមាត្រដ្ឋានលោការីត (`log(gdpPercap)` ទល់នឹង `lifeExp`)',
          },
          dimensions: ['country'],
          metrics: ['gdpPercap (Log X-axis)', 'lifeExp (Linear Y-axis)'],
          sorting: 'gdpPercap ASC',
          stylingNote: {
            en: 'In Looker Studio Style panel, check "Log scale" for the X-axis (`gdpPercap`). Notice Note: The slide title says "The world (log) GDP vs Population 2007" on the left plot, though the Y-axis is actually `lifeExp`!',
            km: 'នៅក្នុងផ្ទាំង Style នៃ Looker Studio សូមធីកយក «Log scale» សម្រាប់អ័ក្ស X (`gdpPercap`)។ (សម្គាល់៖ ចំណងជើងក្រាហ្វខាងឆ្វេងក្នុងស្លាយដើមសរសេរច្រឡំថា Population ប៉ុន្តែអ័ក្ស Y ពិតប្រាកដគឺ `lifeExp`!)។',
          },
        },
        {
          chartType: {
            en: 'Chart 2: Scatterplot with Logarithmic Y-Axis (`gdpPercap` vs `log(pop)`)',
            km: 'ក្រាហ្វទី ២៖ ក្រាហ្វ Scatterplot ប្រើអ័ក្ស Y ជាមាត្រដ្ឋានលោការីត (`gdpPercap` ទល់នឹង `log(pop)`)',
          },
          dimensions: ['country'],
          metrics: ['gdpPercap (Linear X-axis)', 'pop (Log Y-axis)'],
          sorting: 'gdpPercap ASC',
          stylingNote: {
            en: 'In Looker Studio Style panel, check "Log scale" for the Y-axis (`pop`) with ticks at 100k, 1M, 10M, 100M, 1B.',
            km: 'នៅក្នុងផ្ទាំង Style នៃ Looker Studio សូមធីកយក «Log scale» សម្រាប់អ័ក្ស Y (`pop`) ដោយបង្ហាញតម្លៃ 100k, 1M, 10M, 100M, 1B។',
          },
        },
      ],
      formulas: [
        {
          title: { en: 'Preston Curve Log-Linearization of Health vs Wealth', km: 'រូបមន្តបន្ទាត់លោការីត (Preston Curve) រវាងសុខភាព និងទ្រព្យសម្បត្តិ' },
          equation: 'lifeExp ≈ β₀ + β₁ · log₁₀(gdpPercap) + ε ,    where R[log₁₀(gdpPercap)] ≡ R[gdpPercap]',
          variables: [
            { symbol: 'log₁₀(gdpPercap)', en: 'Base-10 logarithm of GDP per capita (maps multiplicative doublings to equal additive steps)', km: 'លោការីតគោល ១០ នៃ GDP ក្នុងមនុស្សម្នាក់ (បម្លែងកំណើនទ្វេគុណឱ្យទៅជាចន្លោះបូកស្មើៗគ្នា)' },
            { symbol: 'β₁', en: 'Linear slope measuring how many years of life expectancy are gained per 10x increase in GDP', km: 'មេគុណប្រាប់ទិសដែលវាស់ថាតើអាយុរំពឹងរស់កើនឡើងប៉ុន្មានឆ្នាំ នៅពេល GDP កើនឡើង ១០ ដង' },
            { symbol: 'R[log₁₀(X)] ≡ R[X]', en: 'Because log₁₀(·) is strictly monotonic increasing, Spearman’s ρ is 100% invariant to log transformation!', km: 'ដោយសារអនុគមន៍ log₁₀(·) គឺជាអនុគមន៍កើនឡើងដាច់ខាត មេគុណ Spearman ρ មិនប្រែប្រួលឡើយទោះបម្លែងជា Log ឬអត់!' },
          ],
        },
      ],
    },
    controls: [
      {
        controlType: { en: 'Toggle Switch Control (Logarithmic vs Linear Scale)', km: 'ប៊ូតុងប្តូរមាត្រដ្ឋានអ័ក្ស (Log Scale vs Linear Scale)' },
        field: 'axis_scale_mode',
        defaultState: 'Logarithmic Scale Active (Slide 19)',
        purpose: {
          en: 'Lets students toggle back and forth between Slide 18 (Linear) and Slide 19 (Log) to see the geometric unpacking effect.',
          km: 'អនុញ្ញាតឱ្យនិស្សិតចុចប្តូរទៅមករវាងស្លាយទី ១៨ (Linear) និងស្លាយទី ១៩ (Log) ដើម្បីមើលប្រសិទ្ធភាពនៃការពន្លាតទិន្នន័យ។',
        },
      },
    ],
    expandedContent: {
      onScreenText: {
        heading: {
          en: 'Unlocking Hidden Structure with Logarithmic Axes',
          km: 'ការបង្ហាញរចនាសម្ព័ន្ធទិន្នន័យដែលលាក់កំបាំងតាមរយៈអ័ក្សលោការីត (Log Scale)',
        },
        bullets: [
          {
            en: 'Left Plot (`log(gdpPercap)` vs `lifeExp`): Applying a log scale to the X-axis spreads out the Developing and Emerging countries ($300 to $10,000) and transforms the curved Preston trajectory into a remarkably clean linear upward trend!',
            km: 'ក្រាហ្វខាងឆ្វេង (`log(gdpPercap)` ទល់នឹង `lifeExp`)៖ ការដាក់មាត្រដ្ឋាន Log លើអ័ក្ស X ជួយពន្លាតប្រទេសកំពុងអភិវឌ្ឍន៍ ($300 ដល់ $10,000) ហើយបម្លែងខ្សែកោងឱ្យទៅជាទំនោរលីនេអ៊ែរកើនឡើងយ៉ាងច្បាស់!',
          },
          {
            en: 'Right Plot (`gdpPercap` vs `log(pop)`): Applying a log scale to the Y-axis (`pop` from 100k to 1B) rescues the 140 compressed countries from the floor of the chart, revealing a disperse, trendless cloud across all population sizes.',
            km: 'ក្រាហ្វខាងស្តាំ (`gdpPercap` ទល់នឹង `log(pop)`)៖ ការដាក់មាត្រដ្ឋាន Log លើអ័ក្ស Y (`pop` ពី 100k ដល់ 1B) ជួយរំដោះប្រទេសទាំង ១៤០ ឱ្យលាតត្រដាងពេញផ្ទៃក្រាហ្វ ហើយបង្ហាញយ៉ាងច្បាស់ថាជាពពកចំណុចដែលគ្មានទំនោរទំនាក់ទំនងឡើយ។',
          },
        ],
        callout: {
          en: 'Mathematical Connection: Notice why Spearman ρ (0.857) on Slide 16 was so high! Because log(X) is a monotonic function, Spearman ρ on raw GDP already "saw" the straight line that only appears visually after we take log(gdpPercap)!',
          km: 'ការភ្ជាប់ទ្រឹស្តីគណិតវិទ្យា៖ សូមសង្កេតថាហេតុអ្វីមេគុណ Spearman ρ (0.857) នៅស្លាយទី ១៦ មានតម្លៃខ្ពស់ម្ល៉េះ! ពីព្រោះអនុគមន៍ log(X) ជាអនុគមន៍ម៉ូណូតូន ដូច្នេះមេគុណ Spearman អាច «មើលឃើញ» ទំនាក់ទំនងបន្ទាត់ត្រង់នេះតាំងពីមុនពេលយើងបម្លែងអ័ក្សជា Log មកម្ល៉េះ!',
        },
      },
      deepDiveExplanation: {
        en: 'In economics and demography, the relationship between GDP per capita and Life Expectancy is known as the **Preston Curve** (discovered by Samuel H. Preston in 1975). Because economic growth operates multiplicatively (an increase from $500 to $1,000 doubles a nation’s standard of living, just as an increase from $20,000 to $40,000 doubles it), plotting `gdpPercap` on a logarithmic scale gives equal horizontal space to every doubling of income. Once we apply `log(gdpPercap)` on the left plot of Slide 19, the curved relationship linearizes: Pearson correlation jumps from $r = 0.679$ (raw GDP) to $r = 0.809$ ($\\log_{10}(\\text{GDP})$), closely approaching Spearman’s rank correlation of $\\rho = 0.857$. Meanwhile, on the right plot, taking `log(pop)` on the vertical axis removes the compression caused by China and India and proves visually that countries of $1\\text{ million}$, $10\\text{ million}$, and $100\\text{ million}$ people are scattered evenly across every income level.',
        km: 'នៅក្នុងសេដ្ឋកិច្ចវិទ្យា និងប្រជាសាស្ត្រ ទំនាក់ទំនងរវាង GDP ក្នុងមនុស្សម្នាក់ និងអាយុរំពឹងរស់ ត្រូវបានគេស្គាល់ថាជា **ខ្សែកោង Preston (Preston Curve)**។ ដោយសារកំណើនសេដ្ឋកិច្ចមានលក្ខណៈជាផលគុណ (ការកើនឡើងពី $500 ទៅ $1,000 គឺកើនឡើងទ្វេដងនៃកម្រិតជីវភាព ដូចគ្នានឹងការកើនឡើងពី $20,000 ទៅ $40,000 ដែរ) ការគូស `gdpPercap` នៅលើមាត្រដ្ឋានលោការីត ផ្តល់នូវចន្លោះស្មើៗគ្នាសម្រាប់រាល់ការកើនឡើងទ្វេដងនៃប្រាក់ចំណូល។ នៅពេលយើងប្រើ `log(gdpPercap)` នៅលើក្រាហ្វខាងឆ្វេងនៃស្លាយទី ១៩ ខ្សែកោងប្រែទៅជាបន្ទាត់ត្រង់ ហើយមេគុណ Pearson កើនឡើងពី $r = 0.679$ ទៅដល់ $r = 0.809$ ដែលខិតជិតទៅនឹងតម្លៃ Spearman $\\rho = 0.857$។ ចំណែកឯក្រាហ្វខាងស្តាំវិញ ការប្រើ `log(pop)` លើអ័ក្សឈរ បានបំបាត់ការគាបទិន្នន័យ ហើយបង្ហាញឱ្យឃើញនឹងភ្នែកថា ប្រទេសដែលមានប្រជាជន ១ លាន, ១០ លាន ឬ ១០០ លាននាក់ ត្រូវបានពង្រាយពាសពេញគ្រប់កម្រិតប្រាក់ចំណូលទាំងអស់ដោយគ្មានទំនោរអ្វីឡើយ។',
      },
      practicalApplication: {
        scenarioTitle: {
          en: 'Configuring Log-Scale Axes in Google Looker Studio Financial Reports',
          km: 'ការកំណត់អ័ក្សមាត្រដ្ឋាន Log នៅក្នុងរបាយការណ៍ហិរញ្ញវត្ថុនៃ Google Looker Studio',
        },
        description: {
          en: 'In Looker Studio, enabling the "Log scale" checkbox in the Chart Style tab for revenue, population, or web traffic metrics instantly turns unreadable L-shaped scatterplots into actionable linear clusters.',
          km: 'នៅក្នុង Google Looker Studio ការធីកយកប្រអប់ «Log scale» នៅក្នុងផ្ទាំង Style សម្រាប់អថេរចំណូល ចំនួនប្រជាជន ឬចំនួនអ្នកចូលមើលគេហទំព័រ ជួយបម្លែងក្រាហ្វរាងអក្សរ L ដែលពិបាកអាន ឱ្យទៅជាក្រាហ្វបន្ទាត់ត្រង់ដ៏ច្បាស់លាស់ភ្លាមៗ។',
        },
        impactMetric: 'Boosts linear explanatory R² of GDP on Life Expectancy from 46.1% to 65.4%',
      },
    },
  },

  // ==========================================
  // SLIDE 20
  // ==========================================
  {
    pageNumber: 20,
    slideFooterNumber: '20',
    sectionTag: {
      en: '2.1/2.2 Visualization — Scatterplot Analytical Interpretation',
      km: '2.1/2.2 ការបង្ហាញជាក្រាហ្វ — ការបកស្រាយលទ្ធផលពីក្រាហ្វ Scatterplot',
    },
    simulatorMode: 'gapminder_scatter_insights',
    pageIdentity: {
      titleEn: 'Visualization: Scatterplot — Key Empirical Insights & Anomaly Detection (2007)',
      titleKm: 'ការបង្ហាញជាក្រាហ្វ៖ Scatterplot — ការបកស្រាយលទ្ធផល និងការរកឃើញប្រទេសខុសប្រក្រតី (ឆ្នាំ ២០០៧)',
      themeName: {
        en: 'Split Visual-Left / Narrative-Right Insight Theme',
        km: 'ផ្ទៃបង្ហាញក្រាហ្វនៅខាងឆ្វេង និងការបកស្រាយលម្អិតនៅខាងស្តាំ',
      },
      canvasBgHex: '#F8FAFC',
      surfaceCardHex: '#FFFFFF',
      primaryAccentHex: '#1E4E79',
      secondaryAccentHex: '#DC2626',
      textPrimaryHex: '#0F172A',
      hierarchyRationale: {
        en: 'Stacks the two log-transformed scatterplots vertically on the left (45% width) and dedicates the right 55% to structured executive takeaways, highlighting anomalous countries in #DC2626 Crimson.',
        km: 'ដាក់ក្រាហ្វ Scatterplot ទាំងពីរត្រួតគ្នាពីលើចុះក្រោមនៅផ្នែកខាងឆ្វេង (ទទឹង ៤៥%) និងទុកផ្នែកខាងស្តាំ (ទទឹង ៥៥%) សម្រាប់ការបកស្រាយលទ្ធផលសំខាន់ៗ និងការរកឃើញប្រទេសខុសប្រក្រតី។',
      },
    },
    wireframe: {
      headerSection: {
        en: 'Top Header: "Visualization: Scatterplot / ការបកស្រាយលទ្ធផលពីក្រាហ្វ Scatterplot".',
        km: 'ផ្នែកខាងលើ៖ ចំណងជើង «Visualization: Scatterplot / ការបកស្រាយលទ្ធផលពីក្រាហ្វ Scatterplot»។',
      },
      leftZone: {
        en: 'Left Column (45% width): Stacked vertical pair of charts — Top: `log(gdpPercap)` vs `lifeExp`; Bottom: `gdpPercap` vs `log(pop)`.',
        km: 'ជួរឈរខាងឆ្វេង (ទទឹង ៤៥%)៖ ក្រាហ្វពីរដាក់ពីលើគ្នា — ខាងលើ៖ `log(gdpPercap)` ទល់នឹង `lifeExp`; ខាងក្រោម៖ `gdpPercap` ទល់នឹង `log(pop)`។',
      },
      rightZone: {
        en: 'Right Column (55% width): Structured Insight Blocks for (1) GDP vs Life Expectancy (General positive trend + Anomalous countries with above-average economy yet poor health) and (2) GDP vs Population (No clear trend).',
        km: 'ជួរឈរខាងស្តាំ (ទទឹង ៥៥%)៖ ប្រអប់សន្និដ្ឋានសម្រាប់ (១) GDP ទល់នឹង អាយុរំពឹងរស់ (ទំនោរទូទៅវិជ្ជមាន + ប្រទេសមួយចំនួនដែលមានសេដ្ឋកិច្ចខ្ពស់ជាងមធ្យមភាគ ប៉ុន្តែសុខភាពនៅទាប) និង (២) GDP ទល់នឹង ចំនួនប្រជាជន (គ្មានទំនោរច្បាស់លាស់)។',
      },
      bottomOrTopBar: {
        en: 'Bottom Anomaly Inspector Table identifying the exact countries in the lower-right outlier cluster of Plot 1 (South Africa, Gabon, Botswana, Equatorial Guinea, Swaziland).',
        km: 'តារាងខាងក្រោមបង្ហាញឈ្មោះប្រទេសជាក់លាក់ដែលស្ថិតក្នុងក្រុមខុសប្រក្រតី (មាន GDP ខ្ពស់គួរសម ប៉ុន្តែអាយុរំពឹងរស់ទាប ដូចជា អាហ្វ្រិកខាងត្បូង និងហ្គាបុង)។',
      },
      gridAllocation: '5 Columns Left (Stacked Twin Scatterplots) + 7 Columns Right (Analytical Narrative & Anomaly Table)',
    },
    chartMetricsMath: {
      scorecards: [
        {
          label: { en: 'GDP vs LifeExp Trend', km: 'ទំនោររវាង GDP និងអាយុរំពឹងរស់' },
          value: 'Strong Positive',
          metricField: 'trend_gdp_lifeexp',
          aggregation: 'General Trend',
          comparisonNote: { en: 'High GDP countries tend to be healthier', km: 'ប្រទេសមាន GDP ខ្ពស់ មានទំនោរមានសុខភាពល្អជាង' },
        },
        {
          label: { en: 'High-GDP / Low-LifeExp Anomalies', km: 'ប្រទេសខុសប្រក្រតី (GDP ខ្ពស់ តែអាយុរំពឹងរស់ទាប)' },
          value: '4–5 Nations',
          metricField: 'count_anomalies',
          aggregation: 'Outlier Cluster',
          comparisonNote: { en: 'GDP $5k–$13k yet LifeExp < 57 yrs', km: 'GDP ចន្លោះ $5k–$13k ប៉ុន្តែអាយុរំពឹងរស់ក្រោម ៥៧ ឆ្នាំ' },
        },
        {
          label: { en: 'GDP vs Population Trend', km: 'ទំនោររវាង GDP និងចំនួនប្រជាជន' },
          value: 'No Clear Trend',
          metricField: 'trend_gdp_pop',
          aggregation: 'Decorrelated',
          comparisonNote: { en: 'GDP per capita uninfluenced by pop size', km: 'GDP ក្នុងមនុស្សម្នាក់មិនអាស្រ័យលើទំហំប្រជាជនឡើយ' },
        },
      ],
      charts: [
        {
          chartType: {
            en: 'Annotated Anomaly Scatterplot (`log(gdpPercap)` vs `lifeExp`)',
            km: 'ក្រាហ្វ Scatterplot ដែលមានគូសរង្វង់សម្គាល់ចំណុចខុសប្រក្រតី (Anomalies)',
          },
          dimensions: ['country', 'anomaly_flag'],
          metrics: ['gdpPercap', 'lifeExp'],
          sorting: 'gdpPercap DESC',
          stylingNote: {
            en: 'Highlight the 4 anomalous points drooping below the main trend band around GDP = $5,000–$15,000 and LifeExp = 40–58 years.',
            km: 'គូសបញ្ជាក់ចំណុចប្រទេសទាំង ៤–៥ ដែលធ្លាក់ចុះនៅខាងក្រោមក្រុមទំនោរធំ ត្រង់ចន្លោះ GDP = $5,000–$15,000 និង LifeExp = 40–58 ឆ្នាំ។',
          },
        },
      ],
      formulas: [],
    },
    controls: [
      {
        controlType: { en: 'Checkbox Control (Highlight Anomaly Cluster)', km: 'ប៊ូតុងគូសបញ្ជាក់ក្រុមប្រទេសខុសប្រក្រតី (Highlight Anomalies)' },
        field: 'highlight_anomalies',
        defaultState: 'Enabled (Show High-GDP / Low-Health Outliers)',
        purpose: {
          en: 'Highlights the specific countries mentioned in the second bullet of Slide 20 ("economy well above average yet health condition is still bad").',
          km: 'រំលេចឱ្យឃើញឈ្មោះប្រទេសជាក់លាក់ដែលត្រូវនឹងចំណុចទី ២ ក្នុងស្លាយទី ២០ («សេដ្ឋកិច្ចខ្ពស់ជាងមធ្យមភាគ ប៉ុន្តែស្ថានភាពសុខភាពនៅតែដុនដាប»)។',
        },
      },
    ],
    expandedContent: {
      onScreenText: {
        heading: {
          en: 'Synthesizing Scatterplot Findings: General Trends vs Anomalies',
          km: 'ការសំយោគលទ្ធផលពីក្រាហ្វ Scatterplot៖ ទំនោរទូទៅ និងករណីខុសប្រក្រតី',
        },
        bullets: [
          {
            en: 'GDP vs Life Expectancy — General Trend: Countries with high GDP per capita tend to be healthier (higher life expectancy).',
            km: 'GDP ទល់នឹង អាយុរំពឹងរស់ — ទំនោរទូទៅ៖ ប្រទេសដែលមាន GDP ក្នុងមនុស្សម្នាក់ខ្ពស់ មានទំនោរមានសុខភាពល្អជាង (អាយុរំពឹងរស់ខ្ពស់ជាង)។',
          },
          {
            en: 'GDP vs Life Expectancy — Anomaly Detection: There are also a few countries with an economy well above average ($5,000–$13,000+), yet their health condition is still bad (life expectancy between 40 and 57 years).',
            km: 'GDP ទល់នឹង អាយុរំពឹងរស់ — ករណីខុសប្រក្រតី៖ ក៏មានប្រទេសមួយចំនួនតូចដែលមានសេដ្ឋកិច្ចខ្ពស់ជាងមធ្យមភាគ ($5,000–$13,000+) ប៉ុន្តែស្ថានភាពសុខភាពរបស់ពួកគេនៅតែអាក្រក់ (អាយុរំពឹងរស់ត្រឹមតែ ៤០ ទៅ ៥៧ ឆ្នាំប៉ុណ្ណោះ)។',
          },
          {
            en: 'GDP vs Population — General Trend: No clear trend! GDP per capita does not appear to be significantly influenced by a country’s population size.',
            km: 'GDP ទល់នឹង ចំនួនប្រជាជន — ទំនោរទូទៅ៖ គ្មានទំនោរច្បាស់លាស់ឡើយ! GDP ក្នុងមនុស្សម្នាក់មិនត្រូវបានជះឥទ្ធិពលគួរឱ្យកត់សម្គាល់ដោយទំហំប្រជាជនរបស់ប្រទេសនោះទេ។',
          },
        ],
        callout: {
          en: 'Why We Visualize After Computing Indicators: A single correlation number (r = 0.68 or ρ = 0.86) summarizes the global trend, but ONLY the scatterplot reveals the 4–5 anomalous nations where wealth failed to translate into longevity!',
          km: 'ហេតុអ្វីយើងត្រូវគូសក្រាហ្វបន្ទាប់ពីគណនាសូចនាករ៖ តួលេខសហសម្ព័ន្ធតែមួយ (r = 0.68 ឬ ρ = 0.86) សង្ខេបបានតែទំនោរទូទៅប៉ុណ្ណោះ ប៉ុន្តែមានតែក្រាហ្វ Scatterplot ទេដែលអាចបង្ហាញឱ្យឃើញប្រទេសខុសប្រក្រតីទាំង ៤–៥ ដែលមានសេដ្ឋកិច្ចខ្ពស់ តែអាយុរំពឹងរស់ទាប!',
        },
      },
      deepDiveExplanation: {
        en: 'Slide 20 demonstrates how a skilled analyst reads a bivariate scatterplot on two levels: first, extracting the **global structural trend** (the upward log-linear trajectory of health with wealth, and the flat independence of wealth from population size); second, isolating **local residuals / anomalies** that deviate sharply from the global trend. Look closely at the top-left plot around `gdpPercap` between $4,500 and $13,500: while most countries in that income bracket (such as Brazil, Mexico, Poland, and Malaysia) enjoy life expectancies of 72 to 76 years, a distinct cluster of 4–5 dots hangs far below at 40 to 57 years. In the 2007 Gapminder data, those points correspond to resource-rich Southern/Central African nations (such as South Africa, Gabon, Botswana, Equatorial Guinea, and Swaziland) where mineral/oil exports elevated GDP per capita, but the HIV/AIDS epidemic and inequality severely depressed life expectancy.',
        km: 'ស្លាយទី ២០ បង្ហាញពីរបៀបដែលអ្នកវិភាគទិន្នន័យអាជីពអានក្រាហ្វ Scatterplot លើពីរកម្រិត៖ ទីមួយ គឺការទាញយក **ទំនោរទូទៅ (General Trend)** និងទីពីរ គឺការស្វែងរក **ចំណុចខុសប្រក្រតី (Anomalies/Outliers)** ដែលឃ្លាតចេញពីទំនោរទូទៅ។ សូមពិនិត្យមើលក្រាហ្វខាងលើត្រង់ចន្លោះ `gdpPercap` ពី $4,500 ដល់ $13,500៖ ខណៈដែលប្រទេសភាគច្រើនក្នុងកម្រិតប្រាក់ចំណូលនេះ (ដូចជា ប្រេស៊ីល ម៉ិកស៊ិក ប៉ូឡូញ និងម៉ាឡេស៊ី) មានអាយុរំពឹងរស់ពី ៧២ ដល់ ៧៦ ឆ្នាំ មានចំណុចប្រទេសចំនួន ៤–៥ ធ្លាក់ចុះមកក្រោមត្រឹម ៤០ ទៅ ៥៧ ឆ្នាំប៉ុណ្ណោះ។ នៅក្នុងទិន្នន័យ Gapminder ឆ្នាំ ២០០៧ ចំណុចទាំងនោះគឺជាប្រទេសនៅអាហ្វ្រិកដែលសម្បូរធនធានរ៉ែ និងប្រេងកាត (ដូចជា អាហ្វ្រិកខាងត្បូង ហ្គាបុង បോട്ស្វាណា និងស្វាស៊ីឡង់) ដែលការនាំចេញធនធានធម្មជាតិជួយឱ្យ GDP មធ្យមខ្ពស់ ប៉ុន្តែវិបត្តិជំងឺអេដស៍ (HIV/AIDS) និងវិសមភាពសង្គមបានធ្វើឱ្យអាយុរំពឹងរស់ធ្លាក់ចុះយ៉ាងធ្ងន់ធ្ងរ។',
      },
      practicalApplication: {
        scenarioTitle: {
          en: 'Public Policy & Budget Audit: High-Spending Districts with Low Outcomes',
          km: 'ការធ្វើសវនកម្មគោលនយោបាយសាធារណៈ៖ ស្រុកដែលទទួលបានថវិកាខ្ពស់ តែលទ្ធផលអប់រំនៅទាប',
        },
        description: {
          en: 'When the Ministry of Education plots School Budget per Student vs Exam Pass Rate across districts, the general trend is positive, but points in the bottom-right quadrant immediately flag districts where high funding is not reaching classrooms effectively.',
          km: 'នៅពេលក្រសួងអប់រំគូសក្រាហ្វថវិកាសាលាក្នុងសិស្សម្នាក់ ទល់នឹង អត្រាប្រឡងជាប់តាមស្រុក ទំនោរទូទៅគឺវិជ្ជមាន ប៉ុន្តែចំណុចដែលធ្លាក់នៅផ្នែកខាងស្តាំខាងក្រោម ជួយបង្ហាញភ្លាមៗនូវស្រុកដែលទទួលបានថវិកាខ្ពស់ ប៉ុន្តែលទ្ធផលសិក្សារបស់សិស្សនៅតែទាប ដើម្បីចុះពិនិត្យដោះស្រាយ។',
        },
        impactMetric: 'Isolates 100% of high-resource / low-outcome policy anomalies for targeted intervention',
      },
    },
  },

  // ==========================================
  // SLIDE 21
  // ==========================================
  {
    pageNumber: 21,
    slideFooterNumber: '21',
    sectionTag: {
      en: 'Visualization Design Principles — 7 Golden Rules',
      km: 'គោលការណ៍គ្រឹះទាំង ៧ សម្រាប់ការរចនាក្រាហ្វឱ្យបានត្រឹមត្រូវ',
    },
    simulatorMode: 'visualization_best_practices',
    pageIdentity: {
      titleEn: 'Key Points For A Proper Visualization — The 7-Pillar BI Checklist',
      titleKm: 'ចំណុចគន្លឹះសម្រាប់ការបង្ហាញក្រាហ្វឱ្យបានត្រឹមត្រូវ — គោលការណ៍គ្រឹះទាំង ៧ ក្នុងការរចនា BI',
      themeName: {
        en: 'BI Design Standards & Accessibility Checklist Theme',
        km: 'ផ្ទៃបញ្ជីត្រួតពិនិត្យស្តង់ដាររចនាក្រាហ្វ និងលទ្ធភាពប្រើប្រាស់សម្រាប់គ្រប់គ្នា',
      },
      canvasBgHex: '#F8FAFC',
      surfaceCardHex: '#FFFFFF',
      primaryAccentHex: '#1E4E79',
      secondaryAccentHex: '#0284C7',
      textPrimaryHex: '#0F172A',
      hierarchyRationale: {
        en: 'Structured 7-row architectural checklist grid on #FFFFFF cards with #1E4E79 headings and interactive audit toggles so dashboard designers can verify every page against Slide 21’s 7 principles.',
        km: 'រៀបចំជាតារាងត្រួតពិនិត្យ ៧ ចំណុចនៅលើកាតពណ៌ស (#FFFFFF) អមដោយចំណងជើងពណ៌ខៀវចាស់ (#1E4E79) ដើម្បីឱ្យអ្នករចនាផ្ទាំង BI អាចផ្ទៀងផ្ទាត់គុណភាពក្រាហ្វតាមគោលការណ៍ទាំង ៧ នៃស្លាយទី ២១។',
      },
    },
    wireframe: {
      headerSection: {
        en: 'Top Header: "Key Points For A Proper Visualization / ចំណុចគន្លឹះសម្រាប់ការបង្ហាញក្រាហ្វឱ្យបានត្រឹមត្រូវ".',
        km: 'ផ្នែកខាងលើ៖ ចំណងជើង «Key Points For A Proper Visualization / ចំណុចគន្លឹះសម្រាប់ការបង្ហាញក្រាហ្វឱ្យបានត្រឹមត្រូវ»។',
      },
      leftZone: {
        en: 'Left Zone (60% width): The 7 Pillars Checklist — (1) Clear purpose, (2) Right chart, (3) Fit the audience, (4) Clean & consistent, (5) Clarity & honesty, (6) Allow interaction, (7) Be accessible (color-blind safe).',
        km: 'ផ្នែកខាងឆ្វេង (ទទឹង ៦០%)៖ បញ្ជីគោលការណ៍ទាំង ៧ — (១) គោលបំណងច្បាស់លាស់, (២) ជ្រើសរើសក្រាហ្វត្រឹមត្រូវ, (៣) ស័ក្តិសមនឹងអ្នកមើល, (៤) ស្អាត និងស៊ីសង្វាក់គ្នា, (៥) ច្បាស់លាស់ និងស្មោះត្រង់, (៦) អនុញ្ញាតឱ្យមានអន្តរកម្ម, (៧) មនុស្សគ្រប់គ្នាអាចមើលយល់ (រួមទាំងអ្នកពិការពណ៌)។',
      },
      rightZone: {
        en: 'Right Zone (40% width): Interactive Looker Studio Quality Audit Simulator demonstrating Good vs Bad visualization choices (e.g., Color-blind safe Okabe-Ito palette vs Red-Green clash; Log scale vs Cluttered axis).',
        km: 'ផ្នែកខាងស្តាំ (ទទឹង ៤០%)៖ ផ្ទាំងពិសោធន៍ប្រៀបធៀបការរចនាក្រាហ្វល្អ ទល់នឹង ក្រាហ្វមិនល្អ (ឧទាហរណ៍៖ កម្រងពណ៌សម្រាប់អ្នកពិការពណ៌ និងការដាក់ស្លាកចំណងជើងច្បាស់លាស់)។',
      },
      bottomOrTopBar: {
        en: 'Bottom Audit Score Strip summarizing how Looker Studio features (Tooltips, Zoom, Filters, Color Palettes) fulfill Pillars 6 and 7.',
        km: 'របារខាងក្រោមបង្ហាញពីរបៀបដែលមុខងារក្នុង Looker Studio (Tooltips, Filters, Color Palettes) បំពេញតាមគោលការណ៍ទី ៦ និងទី ៧។',
      },
      gridAllocation: '7 Columns Left (7 Design Pillars) + 5 Columns Right (Interactive Accessibility & Honesty Preview)',
    },
    chartMetricsMath: {
      scorecards: [
        {
          label: { en: 'Core Design Pillars', km: 'គោលការណ៍គ្រឹះនៃការរចនាក្រាហ្វ' },
          value: '7 Pillars',
          metricField: 'pillar_count',
          aggregation: 'Count',
          comparisonNote: { en: 'Purpose, Chart, Audience, Clean, Honest, Interactive, Accessible', km: 'គោលបំណង, ប្រភេទក្រាហ្វ, អ្នកមើល, ភាពស្អាត, ភាពស្មោះត្រង់, អន្តរកម្ម, ភាពងាយស្រួលមើល' },
        },
        {
          label: { en: 'Accessibility Standard', km: 'ស្តង់ដារសម្រាប់អ្នកពិការពណ៌ និងគំហើញ' },
          value: 'WCAG AA (4.5:1)',
          metricField: 'contrast_target',
          aggregation: 'Contrast Ratio',
          comparisonNote: { en: 'Color-blind safe palettes + Alt text', km: 'ប្រើពណ៌ដែលអ្នកពិការពណ៌មើលដឹង + អត្ថបទជំនួស' },
        },
      ],
      charts: [
        {
          chartType: {
            en: 'Looker Studio 7-Point Visualization Audit Matrix Table',
            km: 'តារាងត្រួតពិនិត្យគុណភាពក្រាហ្វទាំង ៧ ចំណុច (Visualization Audit Table)',
          },
          dimensions: ['pillar_number', 'principle_en_km', 'diagnostic_questions_en_km', 'looker_studio_feature'],
          metrics: ['compliance_weight'],
          sorting: 'pillar_number ASC',
          stylingNote: {
            en: 'Maps each of the 7 bullets and sub-bullets from Slide 21 directly to actionable Looker Studio configuration settings.',
            km: 'ផ្គូផ្គងចំណុចគោល និងសំណួររងទាំង ៧ នៅក្នុងស្លាយទី ២១ ទៅនឹងការកំណត់ជាក់ស្តែងនៅក្នុងកម្មវិធី Google Looker Studio។',
          },
        },
      ],
      formulas: [],
    },
    controls: [
      {
        controlType: { en: 'Drop-down List Control (Audience Persona Selector)', km: 'ប៊ូតុងជ្រើសរើសក្រុមអ្នកមើល (Experts / Decision-Makers / Public / Students)' },
        field: 'target_audience_persona',
        defaultState: 'Students & Data Analysts',
        purpose: {
          en: 'Demonstrates Pillar 3 ("Fit the audience") by showing how chart annotations, statistical depth, and interactivity adapt for Experts, Decision-makers, General public, or Students.',
          km: 'បង្ហាញពីការអនុវត្តគោលការណ៍ទី ៣ («ស័ក្តិសមនឹងអ្នកមើល») ដោយកែសម្រួលកម្រិតលម្អិតនៃក្រាហ្វសម្រាប់អ្នកជំនាញ ថ្នាក់ដឹកនាំ សាធារណជន ឬនិស្សិត។',
        },
      },
      {
        controlType: { en: 'Toggle Switch Control (Color-Blind Safe Palette)', km: 'ប៊ូតុងប្តូរកម្រងពណ៌សម្រាប់អ្នកពិការពណ៌ (Color-Blind Safe Mode)' },
        field: 'colorblind_safe_mode',
        defaultState: 'Enabled (Okabe-Ito / Viridis Palette)',
        purpose: {
          en: 'Demonstrates Pillar 7 ("Be accessible — readable for everyone, including color-blind users").',
          km: 'បង្ហាញពីការអនុវត្តគោលការណ៍ទី ៧ («អាចអានបានសម្រាប់មនុស្សគ្រប់គ្នា រួមទាំងអ្នកពិការពណ៌»)។',
        },
      },
    ],
    expandedContent: {
      onScreenText: {
        heading: {
          en: 'The 7 Key Points for a Proper Data Visualization',
          km: 'ចំណុចគន្លឹះទាំង ៧ សម្រាប់ការបង្ហាញក្រាហ្វទិន្នន័យឱ្យបានត្រឹមត្រូវ',
        },
        bullets: [
          {
            en: '1. Have a clear purpose (មានគោលបំណងច្បាស់លាស់) – Deliver the main message effectively: Distribution? Relationship? Comparison?',
            km: '១. មានគោលបំណងច្បាស់លាស់ – បញ្ជូនសារសំខាន់ឱ្យមានប្រសិទ្ធភាព៖ តើចង់បង្ហាញពីការបែងចែកទិន្នន័យ (Distribution)? ទំនាក់ទំនង (Relationship)? ឬការប្រៀបធៀប (Comparison)?',
          },
          {
            en: '2. Use the right chart (ប្រើប្រាស់ក្រាហ្វឱ្យត្រូវប្រភេទ) – Accurately represent the data: Bar? Line? Boxplot? Heatmap? Scatter?',
            km: '២. ប្រើប្រាស់ក្រាហ្វឱ្យត្រូវប្រភេទ – តំណាងឱ្យទិន្នន័យបានត្រឹមត្រូវ៖ តើគួរប្រើក្រាហ្វសសរ (Bar)? បន្ទាត់ (Line)? ប្រអប់ (Boxplot)? កម្រិតពណ៌ (Heatmap)? ឬចំណុច (Scatter)?',
          },
          {
            en: '3. Fit the audience (ស័ក្តិសមនឹងអ្នកមើល) – Match their knowledge and needs: Experts? General public? Decision-makers? Students?',
            km: '៣. ស័ក្តិសមនឹងអ្នកមើល – ស្របតាមកម្រិតចំណេះដឹង និងតម្រូវការរបស់ពួកគេ៖ តើសម្រាប់អ្នកជំនាញ? សាធារណជនទូទៅ? អ្នកធ្វើសេចក្តីសម្រេចចិត្ត? ឬនិស្សិត?',
          },
          {
            en: '4. Be clean and consistent (ស្អាត និងស៊ីសង្វាក់គ្នា) – Simple, clear labels & title: Annotations? Legends? Font size?',
            km: '៤. ស្អាត និងស៊ីសង្វាក់គ្នា – ចំណងជើង និងស្លាកសម្គាល់សាមញ្ញច្បាស់លាស់៖ ការពន្យល់បន្ថែម (Annotations)? កំណត់សម្គាល់ពណ៌ (Legends)? ទំហំអក្សរ (Font size)?',
          },
          {
            en: '5. Ensure clarity and honesty (ធានាភាពច្បាស់លាស់ និងស្មោះត្រង់) – No distortion or clutter: Log scale? Transformation?',
            km: '៥. ធានាភាពច្បាស់លាស់ និងស្មោះត្រង់ – មិនបំភាន់ការពិត ឬស្មុគស្មាញពេក៖ តើត្រូវប្រើមាត្រដ្ឋាន Log ឬការបម្លែងទិន្នន័យដែរឬទេ?',
          },
          {
            en: '6. Allow interaction if needed (អនុញ្ញាតឱ្យមានអន្តរកម្មបើចាំបាច់) – Make exploration easy: Tooltips? Zoom? Filters? Rotate? Animation?',
            km: '៦. អនុញ្ញាតឱ្យមានអន្តរកម្មបើចាំបាច់ – ធ្វើឱ្យការស្វែងយល់ទិន្នន័យមានភាពងាយស្រួល៖ ប្រអប់ព័ត៌មាន (Tooltips)? ពង្រីក (Zoom)? តម្រង (Filters)? បង្វិល (Rotate)? ចលនា (Animation)?',
          },
          {
            en: '7. Be accessible (មានលទ្ធភាពប្រើប្រាស់សម្រាប់គ្រប់គ្នា) – Readable for everyone, including color-blind users: Color choices? Alternative text? Font size? Contrast?',
            km: '៧. មនុស្សគ្រប់គ្នាអាចប្រើប្រាស់បាន (Accessible) – អាចអានបានសម្រាប់គ្រប់គ្នា រួមទាំងអ្នកពិការពណ៌៖ ការជ្រើសរើសពណ៌? អត្ថបទជំនួស (Alt text)? ទំហំអក្សរ? កម្រិតឆ្លុះពណ៌ (Contrast)?',
          },
        ],
        callout: {
          en: 'Looker Studio Design Standard: Every single page in a professional BI report must pass all 7 pillars before sharing with stakeholders.',
          km: 'ស្តង់ដារនៃការរចនា Looker Studio៖ រាល់ទំព័រនីមួយៗនៅក្នុងរបាយការណ៍ BI អាជីព ត្រូវតែឆ្លងកាត់ការត្រួតពិនិត្យទាំង ៧ ចំណុចនេះជាមុនសិន មុននឹងចែករំលែកទៅកាន់ថ្នាក់ដឹកនាំ។',
        },
      },
      deepDiveExplanation: {
        en: 'Slide 21 pauses after our first visualization sequence (Slides 18–20) to codify the universal principles of effective data visualization (synthesizing Claus O. Wilke’s textbook from Slide 3). Notice how our Gapminder walkthrough directly illustrated these rules: Pillar 1 (Purpose) defined our objective as detecting bivariate relationships; Pillar 2 (Right Chart) selected the Scatterplot for two quantitative columns; Pillar 5 (Clarity & Honesty) applied a Logarithmic transformation on Slide 19 so that China/India did not distort the population plot and low-income nations were not crushed on the GDP axis; Pillar 6 (Interaction) points directly to interactive BI tools like Plotly and Google Looker Studio where users hover for country tooltips, zoom into clusters, and filter by continent; and Pillar 7 (Accessibility) reminds us that ~8% of men and ~0.5% of women have red-green color vision deficiency (Deuteranopia/Protanopia), meaning charts must use color-blind-safe palettes (such as Blue/Orange or Viridis), redundant shape/text labels, and high luminance contrast.',
        km: 'ស្លាយទី ២១ គឺជាការសង្ខេបគោលការណ៍សកលទាំង ៧ នៃការបង្ហាញទិន្នន័យជាក្រាហ្វ បន្ទាប់ពីយើងបានឆ្លងកាត់ការអនុវត្តជាក់ស្តែងនៅស្លាយទី ១៨ ដល់ ២០។ សូមសង្កេតមើលថាតើឧទាហរណ៍ Gapminder របស់យើងបានឆ្លុះបញ្ចាំងពីគោលការណ៍ទាំងនេះយ៉ាងដូចម្តេច៖ គោលការណ៍ទី ១ (គោលបំណង) គឺការរកទំនាក់ទំនងរវាងអថេរពីរ; គោលការណ៍ទី ២ (ជ្រើសរើសក្រាហ្វត្រឹមត្រូវ) គឺការប្រើ Scatterplot សម្រាប់អថេរបរិមាណពីរ; គោលការណ៍ទី ៥ (ភាពច្បាស់លាស់ និងស្មោះត្រង់) គឺការបម្លែងអ័ក្សជាមាត្រដ្ឋាន Log នៅស្លាយទី ១៩ ដើម្បីកុំឱ្យប្រទេសចិន និងឥណ្ឌាគាបទិន្នន័យប្រទេសដទៃ; គោលការណ៍ទី ៦ (អន្តរកម្ម) គឺការប្រើប្រាស់ Tooltips, Zoom និងតម្រងច្រោះទិន្នន័យនៅក្នុង Looker Studio ឬ Plotly; និងគោលការណ៍ទី ៧ (លទ្ធភាពប្រើប្រាស់សម្រាប់គ្រប់គ្នា) រំលឹកយើងថា ប្រមាណ ៨% នៃបុរសមានបញ្ហាពិការពណ៌ក្រហម-បៃតង ដូច្នេះយើងត្រូវជ្រើសរើសពណ៌ដែលមានកម្រិតឆ្លុះ (Contrast) ខ្ពស់ និងប្រើស្លាកអត្ថបទជំនួយជានិច្ច។',
      },
      practicalApplication: {
        scenarioTitle: {
          en: 'Pre-Publication BI Dashboard QA Checklist in Enterprise Analytics',
          km: 'បញ្ជីត្រួតពិនិត្យគុណភាព (QA Checklist) មុនពេលដាក់ឱ្យប្រើប្រាស់ផ្ទាំងរបាយការណ៍ BI',
        },
        description: {
          en: 'Before deploying a national public health or banking dashboard in Looker Studio, the lead BI architect audits every page against these 7 criteria—verifying that log scales are clearly labeled and red/green status indicators include text/icon labels.',
          km: 'មុនពេលដាក់ឱ្យប្រើប្រាស់ផ្ទាំងរបាយការណ៍សុខាភិបាលសាធារណៈ ឬធនាគារនៅក្នុង Looker Studio ប្រធានក្រុមរចនា BI ត្រូវត្រួតពិនិត្យគ្រប់ទំព័រតាមលក្ខខណ្ឌទាំង ៧ នេះ ដោយធានាថាអ័ក្ស Log ត្រូវបានដាក់ស្លាកបញ្ជាក់ច្បាស់លាស់ ហើយការប្រើពណ៌មានអត្ថបទអមជានិច្ច។',
        },
        impactMetric: 'Ensures 100% accessibility and zero visual distortion across BI reports',
      },
    },
  },

  // ==========================================
  // SLIDE 22
  // ==========================================
  {
    pageNumber: 22,
    slideFooterNumber: '22',
    sectionTag: {
      en: '2.3 Quantitative vs Qualitative — Eta-Squared (η²) Formula',
      km: '2.3 បរិមាណ ទល់នឹង គុណភាព — រូបមន្តមេគុណ Eta-Squared (η²)',
    },
    simulatorMode: 'eta_squared_formula',
    pageIdentity: {
      titleEn: '2.3 Quan. Vs Qual. — Indicator: η² (Eta-Squared) Coefficient Derivation',
      titleKm: '2.3 បរិមាណ ទល់នឹង គុណភាព — សូចនាករ៖ និយមន័យ និងរូបមន្តមេគុណ η² (Eta-Squared)',
      themeName: {
        en: 'Dual-Column Variance Decomposition Theme',
        km: 'ផ្ទៃបង្ហាញការបំបែកវ៉ារ្យង់ជាពីរជួរឈរ (BSS និង TSS)',
      },
      canvasBgHex: '#F8FAFC',
      surfaceCardHex: '#FFFFFF',
      primaryAccentHex: '#2563EB',
      secondaryAccentHex: '#DC2626',
      textPrimaryHex: '#0F172A',
      hierarchyRationale: {
        en: 'Strictly preserves the semantic color algebra of Slide 22: Quantitative variable X and BSS in #2563EB Blue; Qualitative group variable G and TSS in #DC2626 Crimson Red.',
        km: 'រក្សាកូដពណ៌គណិតវិទ្យាដូចក្នុងស្លាយទី ២២ គឺអថេរបរិមាណ X និងផលបូកការ៉េរវាងក្រុម (BSS) ជាពណ៌ខៀវ (#2563EB) ចំណែកអថេរគុណភាព G និងផលបូកការ៉េសរុប (TSS) ជាពណ៌ក្រហម (#DC2626)។',
      },
    },
    wireframe: {
      headerSection: {
        en: 'Top Header: "2.3 Quan. Vs Qual. — Indicator: η² Coefficient / សូចនាករ៖ មេគុណ η² (Eta-Squared)".',
        km: 'ផ្នែកខាងលើ៖ ចំណងជើង «2.3 Quan. Vs Qual. — Indicator: η² Coefficient / សូចនាករ៖ មេគុណ η²»។',
      },
      leftZone: {
        en: 'Left Column (50% width): Conceptual question ("If X and G are quan. and qual. columns resp., what does X & G are related even mean?") + Between Sum of Squares (BSS) formula and variable definitions (n_g, x̄_g, x̄).',
        km: 'ជួរឈរខាងឆ្វេង (ទទឹង ៥០%)៖ សំណួរគោល («ប្រសិនបើ X ជាអថេរបរិមាណ និង G ជាអថេរគុណភាព តើពាក្យថា X និង G មានទំនាក់ទំនងនឹងគ្នាមានន័យដូចម្តេច?») + រូបមន្តផលបូកការ៉េរវាងក្រុម (BSS) និងនិយមន័យអថេរ (n_g, x̄_g, x̄)។',
      },
      rightZone: {
        en: 'Right Column (50% width): Intuition of BSS (Ex: Score vs Gender) + Total Sum of Squares (TSS) formula + η² = BSS / TSS definition and bounded range 0 ≤ η² ≤ 1 interpretation.',
        km: 'ជួរឈរខាងស្តាំ (ទទឹង ៥០%)៖ អត្ថន័យនៃ BSS (ឧទាហរណ៍៖ ពិន្ទុ ទល់នឹង ភេទ) + រូបមន្តផលបូកការ៉េសរុប (TSS) + រូបមន្ត η² = BSS / TSS និងការបកស្រាយតម្លៃក្នុងចន្លោះ 0 ≤ η² ≤ 1។',
      },
      bottomOrTopBar: {
        en: 'Bottom interactive Variance Decomposition Calculator showing how TSS = BSS + WSS (Within Sum of Squares).',
        km: 'របារគណនាខាងក្រោមដែលបង្ហាញពីទំនាក់ទំនងគ្រឹះនៃការបំបែកវ៉ារ្យង់ TSS = BSS + WSS (ផលបូកការ៉េក្នុងក្រុម)។',
      },
      gridAllocation: '6 Columns Left (BSS Derivation & Symbols) + 6 Columns Right (TSS, η² Ratio & Bounds)',
    },
    chartMetricsMath: {
      scorecards: [
        {
          label: { en: 'Numerator: BSS', km: 'ភាគយក៖ ផលបូកការ៉េរវាងក្រុម (BSS)' },
          value: '∑ n_g(x̄_g - x̄)²',
          metricField: 'bss_value',
          aggregation: 'Between-Group Variance',
          comparisonNote: { en: 'Measures how far group means are from global mean', km: 'វាស់ចម្ងាយរវាងមធ្យមភាគតាមក្រុម ទៅនឹងមធ្យមភាគសកល' },
        },
        {
          label: { en: 'Denominator: TSS', km: 'ភាគបែង៖ ផលបូកការ៉េសរុប (TSS)' },
          value: '∑ (x_i - x̄)²',
          metricField: 'tss_value',
          aggregation: 'Total Variance',
          comparisonNote: { en: 'Total dispersion of X ignoring groups', km: 'កម្រិតពង្រាយសរុបរបស់ X ដោយមិនគិតពីក្រុម' },
        },
        {
          label: { en: 'Eta-Squared Ratio (η²)', km: 'មេគុណ Eta-Squared (η² = BSS / TSS)' },
          value: '0 ≤ η² ≤ 1',
          metricField: 'eta_squared_ratio',
          aggregation: 'Proportion of Variance Explained',
          comparisonNote: { en: '≈ 0: No relation | ≈ 1: Strong relation', km: '≈ 0៖ គ្មានទំនាក់ទំនង | ≈ 1៖ ទំនាក់ទំនងខ្លាំង' },
        },
      ],
      charts: [
        {
          chartType: {
            en: 'Looker Studio Stacked Variance Decomposition Bar (BSS vs WSS = TSS)',
            km: 'ក្រាហ្វសសរផ្តុំបង្ហាញសមាមាត្រនៃវ៉ារ្យង់ដែលពន្យល់ដោយក្រុម (BSS) ធៀបនឹងវ៉ារ្យង់សរុប (TSS)',
          },
          dimensions: ['variable_pair'],
          metrics: ['BSS_proportion', 'WSS_proportion'],
          sorting: 'BSS_proportion DESC',
          stylingNote: {
            en: 'Visualizes η² as the exact percentage of total sum of squares (TSS) accounted for by group differences (BSS).',
            km: 'បង្ហាញតម្លៃ η² ជាភាគរយនៃវ៉ារ្យង់សរុប (TSS) ដែលត្រូវបានពន្យល់ដោយភាពខុសគ្នារវាងក្រុម (BSS)។',
          },
        },
      ],
      formulas: [
        {
          title: { en: 'Between Sum of Squares (BSS), Total Sum of Squares (TSS), and Eta-Squared (η²)', km: 'រូបមន្តផលបូកការ៉េរវាងក្រុម (BSS), ផលបូកការ៉េសរុប (TSS) និងមេគុណ Eta-Squared (η²)' },
          equation: 'BSS = ∑_{g=1}^{G} n_g (x̄_g - x̄)² ,    TSS = ∑_{i=1}^{n} (x_i - x̄)² ,    η² = BSS / TSS ∈ [0, 1]',
          variables: [
            { symbol: 'X', en: 'Quantitative column (continuous or discrete numerical values x_1, ..., x_n)', km: 'ជួរឈរទិន្នន័យបរិមាណ (តម្លៃលេខ x_1, ..., x_n)' },
            { symbol: 'G', en: 'Qualitative / categorical column partitioning the data into G distinct groups (categories g = 1, ..., G)', km: 'ជួរឈរទិន្នន័យគុណភាព/ប្រភេទ ដែលបែងចែកទិន្នន័យជា G ក្រុមដាច់ដោយឡែកពីគ្នា (g = 1, ..., G)' },
            { symbol: 'n_g', en: 'Number of observations belonging to category g ∈ G (where ∑ n_g = n)', km: 'ចំនួនការអង្កេតដែលស្ថិតនៅក្នុងក្រុម g ∈ G (ដែលផលបូកសរុប ∑ n_g = n)' },
            { symbol: 'x̄_g', en: 'Sample mean of quantitative variable X restricted to observations in category g ∈ G', km: 'មធ្យមភាគនៃអថេរបរិមាណ X គិតចំពោះតែទិន្នន័យនៅក្នុងក្រុម g ∈ G' },
            { symbol: 'x̄', en: 'Global arithmetic mean of X across all n observations regardless of group', km: 'មធ្យមភាគសកល (Global mean) នៃ X សម្រាប់គ្រប់ការអង្កេតទាំងអស់ n' },
            { symbol: 'η²', en: 'Eta-squared coefficient (correlation ratio): proportion of total variance in X explained by categorical group G', km: 'មេគុណ Eta-squared៖ សមាមាត្រនៃវ៉ារ្យង់សរុបរបស់ X ដែលត្រូវបានពន្យល់ដោយការបែងចែកក្រុម G' },
          ],
        },
      ],
    },
    controls: [
      {
        controlType: { en: 'Metric Slider Control (Group Mean Separation Simulator)', km: 'របាររំកិលកែតម្រូវគម្លាតមធ្យមភាគរវាងក្រុម (Group Separation Slider)' },
        field: 'group_separation_delta',
        defaultState: 'Medium Separation (η² = 0.635)',
        purpose: {
          en: 'Lets students slide the group means x̄_g farther apart or closer together to watch BSS and η² = BSS/TSS change between 0 and 1.',
          km: 'អនុញ្ញាតឱ្យនិស្សិតសាកល្បងទាញមធ្យមភាគនៃក្រុមនីមួយៗ (x̄_g) ឱ្យឃ្លាតឆ្ងាយពីគ្នា ឬជិតគ្នា ដើម្បីមើលការប្រែប្រួលនៃតម្លៃ BSS និង η² ពី 0 ទៅ 1។',
        },
      },
    ],
    expandedContent: {
      onScreenText: {
        heading: {
          en: 'Case 2 (Quantitative vs Qualitative): Defining the η² Coefficient',
          km: 'ករណីទី ២ (បរិមាណ ទល់នឹង គុណភាព)៖ និយមន័យនៃមេគុណ η² (Eta-Squared)',
        },
        bullets: [
          {
            en: 'If X and G are quantitative and qualitative columns respectively, what does "X & G are related" even mean? We cannot multiply (xᵢ - x̄) by a text label like "Asia" or "Female"!',
            km: 'ប្រសិនបើ X ជាជួរឈរបរិមាណ ហើយ G ជាជួរឈរគុណភាព តើពាក្យថា «X និង G មានទំនាក់ទំនងនឹងគ្នា» មានន័យដូចម្តេច? យើងមិនអាចយកតម្លៃលេខ (xᵢ - x̄) ទៅគុណនឹងអក្សរដូចជា «អាស៊ី» ឬ «ស្រ្តី» បានទេ!',
          },
          {
            en: 'Between Sum of Squares (BSS): Measures how distant the group means x̄_g of X are across different groups of G, weighted by group size n_g (Ex: Exam Score vs Gender).',
            km: 'ផលបូកការ៉េរវាងក្រុម (BSS)៖ វាស់ថាតើមធ្យមភាគតាមក្រុមនីមួយៗ (x̄_g) របស់ X ស្ថិតនៅឆ្ងាយពីមធ្យមភាគសកល (x̄) កម្រិតណា (ឧទាហរណ៍៖ ពិន្ទុប្រឡង ទល់នឹង ភេទ)។',
          },
          {
            en: 'Total Sum of Squares (TSS): Measures the total squared deviations of every observation xᵢ from the global mean x̄.',
            km: 'ផលបូកការ៉េសរុប (TSS)៖ វាស់ផលបូកការ៉េនៃគម្លាតសរុបរបស់គ្រប់តម្លៃអង្កេត xᵢ ទាំងអស់ធៀបនឹងមធ្យមភាគសកល x̄។',
          },
          {
            en: 'η-squared coefficient (η² = BSS / TSS): Always satisfies 0 ≤ η² ≤ 1. η² ≈ 0 means no relation between G and X; η² ≈ 1 means a strong relation.',
            km: 'មេគុណ η-squared (η² = BSS / TSS)៖ តែងតែស្ថិតក្នុងចន្លោះ 0 ≤ η² ≤ 1 ជានិច្ច។ η² ≈ 0 មានន័យថាគ្មានទំនាក់ទំនងរវាង G និង X; រីឯ η² ≈ 1 មានន័យថាមានទំនាក់ទំនងខ្លាំង។',
          },
        ],
        callout: {
          en: 'Fundamental Theorem of Variance Decomposition: Total Variation (TSS) = Between-Group Variation (BSS) + Within-Group Variation (WSS). Therefore, BSS can never exceed TSS, which guarantees 0 ≤ η² ≤ 1!',
          km: 'ទ្រឹស្តីបទគ្រឹះនៃការបំបែកវ៉ារ្យង់៖ វ៉ារ្យង់សរុប (TSS) = វ៉ារ្យង់រវាងក្រុម (BSS) + វ៉ារ្យង់ក្នុងក្រុម (WSS)។ ហេតុនេះ BSS មិនអាចធំជាង TSS ឡើយ ដែលធានាថា 0 ≤ η² ≤ 1 ជានិច្ច!',
        },
      },
      deepDiveExplanation: {
        en: 'When moving from Section 2.1/2.2 (Quantitative vs Quantitative) to Section 2.3 (Quantitative $X$ vs Qualitative $G$), Pearson and Spearman correlations can no longer be applied because the categories of $G$ (e.g., `continent` = Africa, Asia, Americas, Europe, Oceania) have no numerical value or natural ordering. How, then, do we quantify whether $G$ and $X$ are related? By asking: **Does knowing the category $g \\in G$ help us predict the numerical value of $X$?** Mathematically, by Huygens’ theorem (the Law of Total Variance), the total sum of squares $\\text{TSS} = \\sum_{i=1}^n (x_i - \\bar{x})^2$ decomposes orthogonally into two non-negative parts: $\\text{TSS} = \\text{BSS} + \\text{WSS}$, where $\\text{BSS} = \\sum_{g=1}^G n_g (\\bar{x}_g - \\bar{x})^2$ is the variation between group means, and $\\text{WSS} = \\sum_{g=1}^G \\sum_{i \\in g} (x_i - \\bar{x}_g)^2$ is the residual variation within each group. If all categories have the exact same group mean ($\\bar{x}_1 = \\bar{x}_2 = \\dots = \\bar{x}_G = \\bar{x}$), then $\\text{BSS} = 0$ and $\\eta^2 = 0$ (no relationship). Conversely, if every observation within a group is identical to its group mean ($\\text{WSS} = 0$) while the groups sit at different levels, then $\\text{BSS} = \\text{TSS}$ and $\\eta^2 = 1$ (perfect relationship).',
        km: 'នៅពេលយើងឈានចូលដល់ផ្នែក 2.3 (អថេរបរិមាណ $X$ ទល់នឹង អថេរគុណភាព $G$) យើងមិនអាចប្រើរូបមន្ត Pearson ឬ Spearman បានទៀតទេ ពីព្រោះក្រុមនៃអថេរគុណភាព $G$ (ដូចជាទ្វីប៖ អាហ្វ្រិក អាស៊ី អាមេរិក អឺរ៉ុប អូសេអានី) មិនមែនជាតួលេខ ហើយក៏គ្មានលំដាប់ខ្ពស់ទាបដែរ។ ដូច្នេះ តើយើងវាស់វែងទំនាក់ទំនងរវាង $G$ និង $X$ ដោយរបៀបណា? គឺតាមរយៈការសួរថា៖ **តើការដឹងថាតម្លៃមួយស្ថិតក្នុងក្រុម $g \\in G$ មួយណា ជួយឱ្យយើងទស្សន៍ទាយតម្លៃលេខរបស់ $X$ បានច្បាស់ជាងមុនដែរឬទេ?** តាមទ្រឹស្តីបទ Huygens ផលបូកការ៉េសរុប $\\text{TSS} = \\sum_{i=1}^n (x_i - \\bar{x})^2$ អាចបំបែកជាពីរផ្នែកវិជ្ជមានគឺ $\\text{TSS} = \\text{BSS} + \\text{WSS}$ ដែល $\\text{BSS}$ គឺជាវ៉ារ្យង់រវាងមធ្យមភាគនៃក្រុមនីមួយៗធៀបនឹងមធ្យមភាគសកល ចំណែក $\\text{WSS}$ គឺជាវ៉ារ្យង់នៃទិន្នន័យនៅក្នុងក្រុមនីមួយៗ។ ប្រសិនបើគ្រប់ក្រុមទាំងអស់មានមធ្យមភាគស្មើគ្នា ($\\bar{x}_1 = \\bar{x}_2 = \\dots = \\bar{x}$) នោះ $\\text{BSS} = 0$ នាំឱ្យ $\\eta^2 = 0$ (គ្មានទំនាក់ទំនងសោះ)។ ផ្ទុយទៅវិញ ប្រសិនបើមធ្យមភាគនៃក្រុមនីមួយៗខុសគ្នាដាច់ ហើយទិន្នន័យក្នុងក្រុមនីមួយៗប្រមូលផ្តុំជិតមធ្យមភាគក្រុមរបស់វា ($\\text{WSS} \\to 0$) នោះ $\\text{BSS}$ នឹងខិតជិត $\\text{TSS}$ ដែលនាំឱ្យ $\\eta^2 \\approx 1$ (ទំនាក់ទំនងខ្លាំងបំផុត)។',
      },
      practicalApplication: {
        scenarioTitle: {
          en: 'Evaluating Salary Disparity Across Job Departments or Gender in HR Analytics',
          km: 'ការវាយតម្លៃគម្លាតប្រាក់បៀវត្សរ៍រវាងនាយកដ្ឋានការងារ ឬភេទ ក្នុងការវិភាគធនធានមនុស្ស',
        },
        description: {
          en: 'An HR analytics dashboard computes η² between Employee Salary (Quantitative X) and Department / Gender (Qualitative G) to quantify what percentage of total pay variation is explained by organizational role versus demographic category.',
          km: 'ផ្ទាំងគ្រប់គ្រងទិន្នន័យធនធានមនុស្ស (HR Dashboard) គណនាមេគុណ η² រវាងប្រាក់បៀវត្សរ៍បុគ្គលិក (បរិមាណ X) និងនាយកដ្ឋានការងារ ឬភេទ (គុណភាព G) ដើម្បីដឹងថាតើប៉ុន្មានភាគរយនៃភាពខុសគ្នានៃប្រាក់ខែត្រូវបានកំណត់ដោយមុខតំណែងការងារ។',
        },
        impactMetric: 'Quantifies 0% to 100% of numerical variance explained by categorical grouping',
      },
    },
  },

  // ==========================================
  // SLIDE 23
  // ==========================================
  {
    pageNumber: 23,
    slideFooterNumber: '23',
    sectionTag: {
      en: '2.3 Quantitative vs Qualitative — Geometric Intuition & Gapminder η²',
      km: '2.3 បរិមាណ ទល់នឹង គុណភាព — អត្ថន័យធរណីមាត្រ និងលទ្ធផល η² លើទិន្នន័យ Gapminder',
    },
    simulatorMode: 'eta_squared_anova_visual',
    pageIdentity: {
      titleEn: 'Indicator: η² Coefficient — Geometric Illustration, ANOVA & Gapminder Results',
      titleKm: 'សូចនាករ៖ មេគុណ η² — រូបភាពពន្យល់តាមធរណីមាត្រ, ANOVA និងលទ្ធផលលើ Gapminder',
      themeName: {
        en: 'Centroid Star-Plot & ANOVA Table Studio',
        km: 'ផ្ទៃបង្ហាញដ្យាក្រាមផ្កាយនៃមធ្យមភាគក្រុម និងតារាងលទ្ធផល ANOVA',
      },
      canvasBgHex: '#F8FAFC',
      surfaceCardHex: '#FFFFFF',
      primaryAccentHex: '#2563EB',
      secondaryAccentHex: '#DC2626',
      textPrimaryHex: '#0F172A',
      hierarchyRationale: {
        en: 'Mirrors the iconic "Illustration example" star-plot on Slide 23: Black center dot (#0F172A) for Global Mean, thick solid Blue lines (#2563EB) with star markers for Group Means (BSS), and dashed Red rays (#DC2626) to individual observations (TSS).',
        km: 'រចនាតាមដ្យាក្រាមផ្កាយក្នុងស្លាយទី ២៣ គឺចំណុចខ្មៅនៅកណ្តាល (#0F172A) តំណាងឱ្យមធ្យមភាគសកល (Global mean), បន្ទាត់ដិតពណ៌ខៀវ (#2563EB) ភ្ជាប់ទៅផ្កាយតំណាងឱ្យមធ្យមភាគក្រុម (BSS), និងបន្ទាត់ដាច់ៗពណ៌ក្រហម (#DC2626) ភ្ជាប់ទៅចំណុចទិន្នន័យនីមួយៗ (TSS)។',
      },
    },
    wireframe: {
      headerSection: {
        en: 'Top Header: "Indicator: η² Coefficient / សូចនាករ៖ មេគុណ η² (ការបកស្រាយ និងឧទាហរណ៍ Gapminder)".',
        km: 'ផ្នែកខាងលើ៖ ចំណងជើង «Indicator: η² Coefficient / សូចនាករ៖ មេគុណ η²»។',
      },
      leftZone: {
        en: 'Left Column (50% width): Top = Geometric Illustration Plot (Global mean black circle, Group means blue stars, BSS solid blue segments, TSS dashed red segments); Bottom = Intuitive explanation ("well separated across categories = large BSS, and not too dispersed within each category").',
        km: 'ជួរឈរខាងឆ្វេង (ទទឹង ៥០%)៖ ខាងលើ = ក្រាហ្វពន្យល់ធរណីមាត្រនៃ BSS និង TSS; ខាងក្រោម = ការពន្យល់អត្ថន័យ («តម្លៃនៃ X ត្រូវដាច់ឆ្ងាយពីគ្នារវាងក្រុមនីមួយៗ [BSS ធំ] និងមិនពង្រាយខ្លាំងពេកនៅក្នុងក្រុមនីមួយៗ»)។',
      },
      rightZone: {
        en: 'Right Column (50% width): Top = Connection to Analysis of Variance (ANOVA) & Outlier Sensitivity warning; Bottom = Gapminder 2007 η² Table (`Continent` vs `LifeExp` = 0.635; `Continent` vs `GDP` = 0.424) + Interpretation.',
        km: 'ជួរឈរខាងស្តាំ (ទទឹង ៥០%)៖ ខាងលើ = ការភ្ជាប់ទៅនឹងការវិភាគវ៉ារ្យង់ (ANOVA) និងការព្រមានអំពីភាពរសើបនឹង Outliers; ខាងក្រោម = តារាងលទ្ធផល η² លើទិន្នន័យ Gapminder (`Continent` ទល់នឹង `LifeExp` = 0.635 និង `GDP` = 0.424)។',
      },
      bottomOrTopBar: {
        en: 'Bottom comparative insight bar explaining why Continent explains 63.5% of Life Expectancy variance vs 42.4% of GDP variance.',
        km: 'របារសន្និដ្ឋានខាងក្រោមដែលពន្យល់ថាហេតុអ្វីទ្វីប (Continent) ពន្យល់បាន 63.5% នៃវ៉ារ្យង់អាយុរំពឹងរស់ ប៉ុន្តែពន្យល់បានត្រឹមតែ 42.4% នៃវ៉ារ្យង់ GDP។',
      },
      gridAllocation: '6 Columns Left (Star Diagram & Intuition) + 6 Columns Right (ANOVA Notes & Gapminder η² Table)',
    },
    chartMetricsMath: {
      scorecards: [
        {
          label: { en: 'η²(Continent, LifeExp)', km: 'មេគុណ η² រវាងទ្វីប និងអាយុរំពឹងរស់' },
          value: '0.635 (63.5%)',
          metricField: 'eta_sq_continent_lifeexp',
          aggregation: 'ANOVA Eta-Squared',
          comparisonNote: { en: 'Strong group separation across continents', km: 'មានការបែងចែកដាច់ពីគ្នាច្បាស់រវាងទ្វីបនីមួយៗ' },
        },
        {
          label: { en: 'η²(Continent, GDP)', km: 'មេគុណ η² រវាងទ្វីប និង GDP' },
          value: '0.424 (42.4%)',
          metricField: 'eta_sq_continent_gdp',
          aggregation: 'ANOVA Eta-Squared',
          comparisonNote: { en: 'Moderate separation (high within-continent spread)', km: 'កម្រិតមធ្យម (ដោយសារក្នុងទ្វីបតែមួយមានគម្លាត GDP ធំ)' },
        },
      ],
      charts: [
        {
          chartType: {
            en: 'Chart 1: Centroid Vector Star-Plot (Global Mean, Group Means, BSS & TSS Rays)',
            km: 'ក្រាហ្វទី ១៖ ដ្យាក្រាមផ្កាយបង្ហាញពីចម្ងាយ BSS (បន្ទាត់ខៀវ) និង TSS (បន្ទាត់ដាច់ៗពណ៌ក្រហម)',
          },
          dimensions: ['cluster_id', 'point_id'],
          metrics: ['x_coord', 'y_coord'],
          sorting: 'cluster_id ASC',
          stylingNote: {
            en: 'Shows 3 distinct clusters centered at blue stars, connected to the central black Global Mean dot.',
            km: 'បង្ហាញកញ្ចុំទិន្នន័យ ៣ ក្រុមដែលមានផ្កាយពណ៌ខៀវជាមធ្យមភាគក្រុម ភ្ជាប់ទៅកាន់ចំណុចខ្មៅកណ្តាល (មធ្យមភាគសកល)។',
          },
        },
        {
          chartType: {
            en: 'Chart 2: Gapminder η² Summary Table (`Continent` vs `LifeExp` & `GDP`)',
            km: 'ក្រាហ្វទី ២៖ តារាងសង្ខេបតម្លៃ η² នៃទិន្នន័យ Gapminder (`Continent` ទល់នឹង `LifeExp` និង `GDP`)',
          },
          dimensions: ['qualitative_column'],
          metrics: ['eta_sq_lifeExp', 'eta_sq_gdpPercap'],
          sorting: 'eta_sq_lifeExp DESC',
          stylingNote: {
            en: 'Displays exact values from Slide 23: Continent → LifeExp: 0.635 | GDP: 0.424.',
            km: 'បង្ហាញតួលេខដូចក្នុងស្លាយទី ២៣ គឺ Continent → LifeExp: 0.635 និង GDP: 0.424។',
          },
        },
      ],
      formulas: [
        {
          title: { en: 'One-Way ANOVA F-Statistic Relationship to Eta-Squared (η²)', km: 'ទំនាក់ទំនងរវាងស្ថិតិ F នៃ ANOVA និងមេគុណ Eta-Squared (η²)' },
          equation: 'η² = BSS / TSS = BSS / (BSS + WSS) ,    F = [ BSS / (G - 1) ] / [ WSS / (n - G) ] = [ η² / (G - 1) ] / [ (1 - η²) / (n - G) ]',
          variables: [
            { symbol: 'BSS', en: 'Between-group sum of squares (solid blue lines connecting Global mean to Group means)', km: 'ផលបូកការ៉េរវាងក្រុម (បន្ទាត់ពណ៌ខៀវភ្ជាប់ពីមធ្យមភាគសកលទៅមធ្យមភាគក្រុម)' },
            { symbol: 'WSS', en: 'Within-group sum of squares (dispersion of points around their own blue star group mean)', km: 'ផលបូកការ៉េក្នុងក្រុម (ការពង្រាយនៃចំណុចជុំវិញផ្កាយពណ៌ខៀវនៃក្រុមរបស់វា)' },
            { symbol: 'F', en: 'Fisher’s ANOVA test statistic used to test if group means are significantly different', km: 'ស្ថិតិតេស្ត F របស់ Fisher ក្នុងការវិភាគវ៉ារ្យង់ (ANOVA) ដើម្បីពិនិត្យថាតើមធ្យមភាគក្រុមខុសគ្នាដោយមានន័យស្ថិតិឬអត់' },
          ],
        },
      ],
    },
    controls: [
      {
        controlType: { en: 'Button Toggle Control (Quantitative Target Variable)', km: 'ប៊ូតុងជ្រើសរើសអថេរបរិមាណគោលដៅ (LifeExp vs gdpPercap)' },
        field: 'anova_target_variable',
        defaultState: 'Compare Both (LifeExp η²=0.635 vs GDP η²=0.424)',
        purpose: {
          en: 'Lets students inspect the exact BSS, WSS, and TSS breakdown for Life Expectancy and GDP per Capita across the 5 continents.',
          km: 'អនុញ្ញាតឱ្យនិស្សិតពិនិត្យមើលតម្លៃ BSS, WSS និង TSS លម្អិតសម្រាប់អាយុរំពឹងរស់ និង GDP តាមទ្វីបទាំង ៥។',
        },
      },
    ],
    expandedContent: {
      onScreenText: {
        heading: {
          en: 'Geometric Meaning of η², ANOVA Connection & Gapminder Results',
          km: 'អត្ថន័យធរណីមាត្រនៃមេគុណ η², ការភ្ជាប់ទៅនឹង ANOVA និងលទ្ធផលលើទិន្នន័យ Gapminder',
        },
        bullets: [
          {
            en: 'Intuitively, for X and G to be strongly related, the values of X should be well separated across different categories (large BSS, solid blue lines) and not too dispersed within each category of G (small within-group scatter).',
            km: 'តាមន័យជាក់ស្តែង ដើម្បីឱ្យ X និង G មានទំនាក់ទំនងខ្លាំង តម្លៃរបស់ X ត្រូវតែដាច់ឆ្ងាយពីគ្នារវាងក្រុមនីមួយៗ (BSS ធំ គឺបន្ទាត់ពណ៌ខៀវវែង) ហើយមិនត្រូវពង្រាយឆ្ងាយពីគ្នាពេកនៅក្នុងក្រុមនីមួយៗឡើយ។',
          },
          {
            en: 'Example: If Gender is related to Score, then the scores of males should be well separated from those of females.',
            km: 'ឧទាហរណ៍៖ ប្រសិនបើភេទមានទំនាក់ទំនងជាមួយពិន្ទុប្រឡង នោះពិន្ទុរបស់ក្រុមបុរសត្រូវតែដាច់ឆ្ងាយពីពិន្ទុរបស់ក្រុមស្រ្តី។',
          },
          {
            en: 'η² is normally used to study the effect of groups defined by a qualitative variable on some quantitative variable, known as Analysis of Variance (ANOVA). Just like Pearson’s coefficient, it is sensitive to outliers!',
            km: 'មេគុណ η² ត្រូវបានប្រើជាទូទៅដើម្បីសិក្សាពីឥទ្ធិពលនៃក្រុម (អថេរគុណភាព) ទៅលើអថេរបរិមាណ ដែលគេស្គាល់ថាជាការវិភាគវ៉ារ្យង់ (ANOVA)។ ដូចគ្នានឹងមេគុណ Pearson ដែរ វាមានភាពរសើបចំពោះតម្លៃ Outliers!',
          },
          {
            en: 'Gapminder 2007 Example: η²(Continent, LifeExp) = 0.635 vs η²(Continent, GDP) = 0.424. Interpretation: Continent seems more related to `lifeExp` than to `gdpPercap`.',
            km: 'ឧទាហរណ៍ Gapminder ឆ្នាំ ២០០៧៖ η²(Continent, LifeExp) = 0.635 ទល់នឹង η²(Continent, GDP) = 0.424។ ការបកស្រាយ៖ ទ្វីប (Continent) មានទំនាក់ទំនងខ្លាំងជាមួយអាយុរំពឹងរស់ (`lifeExp`) ជាងជាមួយ `gdpPercap`។',
          },
        ],
        callout: {
          en: 'Why Is η² Sensitive to Outliers? Because both BSS and TSS use squared deviations (xᵢ - x̄)² and sample means x̄_g! A single billionaire country in a poor continent will inflate TSS and shift x̄_g.',
          km: 'ហេតុអ្វីបានជា η² រសើបនឹងតម្លៃ Outliers? ពីព្រោះទាំង BSS និង TSS សុទ្ធតែប្រើការ៉េនៃគម្លាត (xᵢ - x̄)² និងមធ្យមភាគ x̄_g! វត្តមានប្រទេសអ្នកមានខ្លាំងតែមួយនៅក្នុងទ្វីបក្រីក្រ នឹងធ្វើឱ្យ TSS កើនឡើងយ៉ាងខ្លាំង។',
        },
      },
      deepDiveExplanation: {
        en: 'Slide 23 bridges geometric intuition with inferential statistics (ANOVA). Look at the top-left star diagram: the black dot at $(0,0)$ is the global centroid $\\bar{x}$, while the three blue stars are the group centroids $\\bar{x}_g$. The thick solid blue bars represent the between-group distances $(\\bar{x}_g - \\bar{x})$ that form $\\text{BSS}$, while the dashed red rays represent the total individual distances $(x_i - \\bar{x})$ that form $\\text{TSS}$. When we compute $\\eta^2$ on Gapminder 2007 using `continent` as the qualitative grouping variable $G$, we find $\\eta^2(\\text{Continent}, \\text{lifeExp}) = 0.635$ and $\\eta^2(\\text{Continent}, \\text{gdpPercap}) = 0.424$. Why does `continent` explain $63.5\\%$ of global variance in life expectancy, but only $42.4\\%$ of variance in GDP per capita? Because within Asia alone, `gdpPercap` ranges from $<\\$1,000$ (Afghanistan, Myanmar, Nepal) to $>\\$40,000$ (Singapore, Kuwait, Japan), creating huge Within-Group Sum of Squares ($\\text{WSS}$) that reduces $\\eta^2$! We will verify this visually on Slides 24–26.',
        km: 'ស្លាយទី ២៣ ភ្ជាប់ការយល់ដឹងតាមរយៈរូបភាពធរណីមាត្រទៅនឹងស្ថិតិវិភាគវ៉ារ្យង់ (ANOVA)។ នៅក្នុងដ្យាក្រាមខាងឆ្វេងផ្នែកខាងលើ ចំណុចខ្មៅនៅចំកណ្តាលគឺជាមធ្យមភាគសកល $\\bar{x}$ រីឯផ្កាយពណ៌ខៀវទាំងបីគឺជាមធ្យមភាគនៃក្រុមនីមួយៗ $\\bar{x}_g$។ បន្ទាត់ដិតពណ៌ខៀវតំណាងឱ្យចម្ងាយរវាងក្រុម $(\\bar{x}_g - \\bar{x})$ ដែលបង្កើតបានជា $\\text{BSS}$ ចំណែកបន្ទាត់ដាច់ៗពណ៌ក្រហមតំណាងឱ្យចម្ងាយពីមធ្យមភាគសកលទៅកាន់ចំណុចទិន្នន័យនីមួយៗ $(x_i - \\bar{x})$ ដែលបង្កើតបានជា $\\text{TSS}$។ នៅពេលយើងគណនា $\\eta^2$ លើទិន្នន័យ Gapminder ឆ្នាំ ២០០៧ ដោយយកទ្វីប (`continent`) ជាអថេរក្រុម $G$ យើងឃើញថា $\\eta^2(\\text{Continent}, \\text{lifeExp}) = 0.635$ និង $\\eta^2(\\text{Continent}, \\text{gdpPercap}) = 0.424$។ ហេតុអ្វីបានជាទ្វីបពន្យល់បានដល់ទៅ $63.5\\%$ នៃអាយុរំពឹងរស់ ប៉ុន្តែពន្យល់បានត្រឹមតែ $42.4\\%$ នៃ GDP? ពីព្រោះនៅក្នុងទ្វីបអាស៊ីតែមួយ មានទាំងប្រទេសដែលមាន GDP ក្រោម $\\$1,000$ និងប្រទេសដែលមាន GDP លើសពី $\\$40,000$ (ដូចជា សិង្ហបុរី និងជប៉ុន) ដែលធ្វើឱ្យការពង្រាយនៅក្នុងក្រុម ($\\text{WSS}$) មានតម្លៃធំ នាំឱ្យ $\\eta^2$ ថយចុះ!',
      },
      practicalApplication: {
        scenarioTitle: {
          en: 'Feature Importance Ranking of Categorical Predictors Before Regression',
          km: 'ការដាក់ចំណាត់ថ្នាក់សារៈសំខាន់នៃអថេរគុណភាពមុនពេលបង្កើតម៉ូដែលព្យាករណ៍',
        },
        description: {
          en: 'When building a machine learning model to predict Crop Yield (Quantitative), agronomists compute η² across Soil Type, Province, and Irrigation Method to rank which categorical factor has the highest explanatory effect size.',
          km: 'នៅពេលបង្កើតម៉ូដែលព្យាករណ៍ទិន្នផលដំណាំ (អថេរបរិមាណ) អ្នកជំនាញកសិកម្មគណនាមេគុណ η² សម្រាប់ប្រភេទដី ខេត្ត និងវិធីសាស្ត្រស្រោចស្រព ដើម្បីដាក់ចំណាត់ថ្នាក់ថាតើកត្តាប្រភេទមួយណាដែលមានឥទ្ធិពលខ្លាំងបំផុតលើទិន្នផល។',
        },
        impactMetric: 'Continent explains 63.5% of LifeExp variance vs 42.4% of GDP variance',
      },
    },
  },

  // ==========================================
  // SLIDE 24
  // ==========================================
  {
    pageNumber: 24,
    slideFooterNumber: '24',
    sectionTag: {
      en: '2.3 Quantitative vs Qualitative — Conditional Box/Violin Plot',
      km: '2.3 បរិមាណ ទល់នឹង គុណភាព — ក្រាហ្វ Box/Violin តាមលក្ខខណ្ឌក្រុម',
    },
    simulatorMode: 'conditional_violin_gdp',
    pageIdentity: {
      titleEn: 'Visualization: Conditional Box/Violin Plot — GDP per Capita by Continent (2007)',
      titleKm: 'ការបង្ហាញជាក្រាហ្វ៖ ក្រាហ្វ Box/Violin តាមក្រុម — GDP ក្នុងមនុស្សម្នាក់តាមទ្វីបនីមួយៗ (ឆ្នាំ ២០០៧)',
      themeName: {
        en: '5-Continent Categorical Palette Studio',
        km: 'ផ្ទៃក្រាហ្វវីយូឡុង និងចំណុចតាមទ្វីបទាំង ៥',
      },
      canvasBgHex: '#F8FAFC',
      surfaceCardHex: '#FFFFFF',
      primaryAccentHex: '#6366F1',
      secondaryAccentHex: '#10B981',
      textPrimaryHex: '#0F172A',
      hierarchyRationale: {
        en: 'Uses the exact 5-continent Plotly categorical color scheme from Slide 24: Africa = Indigo (#6366F1), Asia = Coral Red (#EF4444), Americas = Emerald (#10B981), Europe = Purple (#A855F7), Oceania = Orange (#F97316).',
        km: 'ប្រើប្រាស់កូដពណ៌សម្គាល់ទ្វីបទាំង ៥ ដូចក្នុងស្លាយទី ២៤ គឺ អាហ្វ្រិក = ពណ៌ស្វាយខៀវ (#6366F1), អាស៊ី = ពណ៌ក្រហមទឹកក្រូច (#EF4444), អាមេរិក = ពណ៌បៃតង (#10B981), អឺរ៉ុប = ពណ៌ស្វាយ (#A855F7) និងអូសេអានី = ពណ៌ទឹកក្រូច (#F97316)។',
      },
    },
    wireframe: {
      headerSection: {
        en: 'Top Header: "Visualization: Conditional Box/Violin Plot / ការបង្ហាញជាក្រាហ្វ៖ Conditional Box/Violin Plot".',
        km: 'ផ្នែកខាងលើ៖ ចំណងជើង «Visualization: Conditional Box/Violin Plot / ក្រាហ្វ Box/Violin តាមលក្ខខណ្ឌក្រុម»។',
      },
      leftZone: {
        en: 'Left Zone (55% width): Prompt "How about GDP on each continent?" + Raincloud / Half-Violin + Jittered Strip Plot "GDP per Capita on each continent in 2007" across Africa, Asia, Americas, Europe, Oceania (0 to 60k).',
        km: 'ផ្នែកខាងឆ្វេង (ទទឹង ៥៥%)៖ សំណួរ «ចុះចំណែក GDP នៅលើទ្វីបនីមួយៗវិញ?» + ក្រាហ្វ Violin គួបផ្សំនឹងចំណុចទិន្នន័យ «GDP per Capita on each continent in 2007» សម្រាប់ទ្វីបទាំង ៥។',
      },
      rightZone: {
        en: 'Right Zone (45% width): Three Analytical Interpretation Bullets explaining why the separation of `gdpPercap` between continents (η² = 0.424) is less sharp than `lifeExp` (η² = 0.635) yet still makes them useful mutual predictors.',
        km: 'ផ្នែកខាងស្តាំ (ទទឹង ៤៥%)៖ ចំណុចបកស្រាយទាំង ៣ ដែលពន្យល់ថា ការបែងចែកដាច់ពីគ្នានៃ `gdpPercap` រវាងទ្វីបនីមួយៗមិនសូវច្បាស់ដូច `lifeExp` ទេ ប៉ុន្តែនៅតែមានប្រយោជន៍សម្រាប់ការព្យាករណ៍ឱ្យគ្នាទៅវិញទៅមក។',
      },
      bottomOrTopBar: {
        en: 'Bottom continent summary bar comparing median and IQR of GDP across all 5 continents.',
        km: 'របារសង្ខេបខាងក្រោមដែលប្រៀបធៀបតម្លៃមេដ្យាន និងគម្លាតចតុភាគ (IQR) នៃ GDP តាមទ្វីបទាំង ៥។',
      },
      gridAllocation: '7 Columns Left (Conditional Violin/Strip Plot) + 5 Columns Right (Predictive Interpretation)',
    },
    chartMetricsMath: {
      scorecards: [
        {
          label: { en: 'Africa Median GDP', km: 'មេដ្យាន GDP នៃទ្វីបអាហ្វ្រិក' },
          value: '$1,452',
          metricField: 'MEDIAN_IF(gdpPercap, Africa)',
          aggregation: 'Group Median',
          comparisonNote: { en: 'Concentrated near 0–5k (Indigo)', km: 'ប្រមូលផ្តុំខ្លាំងនៅចន្លោះ 0–5k' },
        },
        {
          label: { en: 'Asia GDP Spread', km: 'វិសាលភាព GDP នៃទ្វីបអាស៊ី' },
          value: '$431 → $47.1K',
          metricField: 'RANGE_IF(gdpPercap, Asia)',
          aggregation: 'Group Range',
          comparisonNote: { en: 'Tallest violin span (Coral Red)', km: 'មានប្រវែងក្រាហ្វវីយូឡុងវែងជាងគេបំផុត' },
        },
        {
          label: { en: 'Europe Median GDP', km: 'មេដ្យាន GDP នៃទ្វីបអឺរ៉ុប' },
          value: '$28,054',
          metricField: 'MEDIAN_IF(gdpPercap, Europe)',
          aggregation: 'Group Median',
          comparisonNote: { en: 'Elevated distribution (Purple)', km: 'ស្ថិតនៅកម្រិតខ្ពស់ដាច់ពីអាហ្វ្រិក' },
        },
      ],
      charts: [
        {
          chartType: {
            en: 'Conditional Violin & Jittered Strip Plot (`continent` on X-axis, `gdpPercap` on Y-axis)',
            km: 'ក្រាហ្វវីយូឡុង និងចំណុចពង្រាយតាមក្រុម (`continent` លើអ័ក្ស X, `gdpPercap` លើអ័ក្ស Y)',
          },
          dimensions: ['continent', 'country'],
          metrics: ['gdpPercap', 'group_density'],
          sorting: 'custom_continent_order (Africa, Asia, Americas, Europe, Oceania)',
          stylingNote: {
            en: 'Pairs individual country dots on the left of each category axis with a smooth kernel density half-violin on the right.',
            km: 'បង្ហាញចំណុចទិន្នន័យនៃប្រទេសនីមួយៗនៅខាងឆ្វេង អមដោយខ្សែកោងដង់ស៊ីតេរាងវីយូឡុងនៅខាងស្តាំសម្រាប់ទ្វីបនីមួយៗ។',
          },
        },
      ],
      formulas: [],
    },
    controls: [
      {
        controlType: { en: 'Multi-Select Drop-down Control (Continent Selector)', km: 'តម្រងជ្រើសរើសទ្វីបដើម្បីប្រៀបធៀប (Continent Multi-Select)' },
        field: 'continent',
        defaultState: 'All 5 Continents',
        purpose: {
          en: 'Allows users to compare any subset of continents (e.g., Asia vs Europe) on the conditional violin/strip chart.',
          km: 'អនុញ្ញាតឱ្យអ្នកសិក្សាជ្រើសរើសប្រៀបធៀបទ្វីបណាមួយ (ឧទាហរណ៍៖ អាស៊ី ទល់នឹង អឺរ៉ុប) នៅលើក្រាហ្វ។',
        },
      },
    ],
    expandedContent: {
      onScreenText: {
        heading: {
          en: 'Visualizing Quan. vs Qual.: Conditional Violin & Strip Plots of GDP by Continent',
          km: 'ការគូសក្រាហ្វបរិមាណ ទល់នឹង គុណភាព៖ ក្រាហ្វ Violin និងចំណុចនៃ GDP តាមទ្វីបនីមួយៗ',
        },
        bullets: [
          {
            en: 'The separation of `gdpPercap` between continents is not as clear as `lifeExp` (because Asia and Americas overlap both low and high income ranges), yet one can still clearly see the structural differences.',
            km: 'ការបែងចែកដាច់ពីគ្នានៃ `gdpPercap` រវាងទ្វីបនីមួយៗ គឺមិនសូវច្បាស់ដាច់ស្រឡះដូច `lifeExp` នោះទេ (ដោយសារអាស៊ី និងអាមេរិកមានប្រទេសលាតសន្ធឹងតាំងពីចំណូលទាបដល់ខ្ពស់) ប៉ុន្តែយើងនៅតែអាចមើលឃើញភាពខុសគ្នាបានយ៉ាងច្បាស់។',
          },
          {
            en: 'Continent is useful for predicting / explaining `gdpPercap` and vice versa, but not as much as for `lifeExp` (matching η² = 0.424 vs 0.635).',
            km: 'អថេរទ្វីប (`continent`) មានប្រយោជន៍សម្រាប់ការព្យាករណ៍ ឬពន្យល់ពី `gdpPercap` (និងច្រាសមកវិញ) ប៉ុន្តែមិនខ្លាំងដូចការព្យាករណ៍ `lifeExp` នោះទេ (ស្របតាមតម្លៃ η² = 0.424 ទល់នឹង 0.635)។',
          },
          {
            en: 'For predictive purposes, `continent` and `gdpPercap` would still be useful predictors for each other in machine learning models.',
            km: 'សម្រាប់គោលបំណងបង្កើតម៉ូដែលព្យាករណ៍ ទាំង `continent` និង `gdpPercap` នៅតែជាអថេរព្យាករណ៍ដ៏មានប្រយោជន៍សម្រាប់គ្នាទៅវិញទៅមក។',
          },
        ],
        callout: {
          en: 'Visual Proof of η² = 0.424: Look at the red violin for Asia—most Asian countries sit below $10k, but Singapore, Japan, and Kuwait stretch Asia’s upper tail to $50k, overlapping Europe!',
          km: 'អំណះអំណាងតាមក្រាហ្វសម្រាប់ η² = 0.424៖ សូមមើលក្រាហ្វវីយូឡុងពណ៌ក្រហមរបស់ទ្វីបអាស៊ី—ប្រទេសអាស៊ីភាគច្រើនស្ថិតនៅក្រោម $10k ប៉ុន្តែសិង្ហបុរី ជប៉ុន និងគុយវ៉ែត បានទាញកន្ទុយខាងលើរបស់អាស៊ីឱ្យលាតដល់ជិត $50k ដែលត្រួតគ្នាជាមួយទ្វីបអឺរ៉ុប!',
        },
      },
      deepDiveExplanation: {
        en: 'Slide 24 introduces the premier visual tool for Case 2 (Quantitative vs Qualitative): the **Conditional Box/Violin Plot** (shown here as a Plotly violin plot with `points="all"` strip points alongside each half-violin). Instead of plotting a single global violin like we did on Slide 6, we condition (group) the X-axis by the qualitative categories $g \\in G$ (`continent`) and plot a separate vertical distribution of $X$ (`gdpPercap`) for each category. Visually, $\\eta^2$ corresponds to how much the vertical centers of these five violins shift up and down relative to their vertical lengths: Africa (indigo) is tightly compressed near the bottom ($<\\$5,000$), Europe (purple) and Oceania (orange) sit high up ($\\$15,000\\text{–}\\$50,000$), while Asia (red) and the Americas (green) have wide violins that span both regimes.',
        km: 'ស្លាយទី ២៤ បង្ហាញពីឧបករណ៍ក្រាហ្វដ៏ល្អបំផុតសម្រាប់ករណីទី ២ (បរិមាណ ទល់នឹង គុណភាព) គឺ **ក្រាហ្វ Box/Violin តាមលក្ខខណ្ឌក្រុម (Conditional Box/Violin Plot)**។ ជំនួសឱ្យការគូសក្រាហ្វ Violin តែមួយសម្រាប់ពិភពលោកទាំងមូលដូចនៅស្លាយទី ៦ យើងបែងចែកអ័ក្សដេក X តាមក្រុមនៃអថេរគុណភាព $g \\in G$ (`continent`) ហើយគូសការបែងចែកទិន្នន័យឈររបស់ $X$ (`gdpPercap`) ដាច់ដោយឡែកសម្រាប់ទ្វីបនីមួយៗ។ តាមរយៈក្រាហ្វនេះ តម្លៃ $\\eta^2$ ឆ្លុះបញ្ចាំងពីកម្រិតដែលទីតាំងកណ្តាលនៃវីយូឡុងទាំង ៥ ស្ថិតនៅខ្ពស់ ឬទាបខុសគ្នា៖ ទ្វីបអាហ្វ្រិក (ពណ៌ស្វាយខៀវ) ប្រមូលផ្តុំនៅផ្នែកខាងក្រោម ($<\\$5,000$), ទ្វីបអឺរ៉ុប (ពណ៌ស្វាយ) និងអូសេអានី (ពណ៌ទឹកក្រូច) ស្ថិតនៅផ្នែកខាងលើ ($\\$15,000\\text{–}\\$50,000$), ខណៈដែលទ្វីបអាស៊ី (ពណ៌ក្រហម) និងអាមេរិក (ពណ៌បៃតង) មានតួវីយូឡុងវែងដែលលាតសន្ធឹងឆ្លងកាត់ទាំងកម្រិតទាប និងកម្រិតខ្ពស់។',
      },
      practicalApplication: {
        scenarioTitle: {
          en: 'Comparing Regional Store Revenue Distributions in Retail BI',
          km: 'ការប្រៀបធៀបការបែងចែកចំណូលសាខាតាមតំបន់នៅក្នុងរបាយការណ៍លក់រាយ',
        },
        description: {
          en: 'A national retail chain plots Store Monthly Revenue (Quantitative) conditioned on Region (Phnom Penh, Siem Reap, Battambang, Coastal, Northeast) using conditional box/violin plots to see both regional median shifts and outlier flagship stores.',
          km: 'ក្រុមហ៊ុនលក់រាយទូទាំងប្រទេសគូសក្រាហ្វចំណូលប្រចាំខែរបស់សាខា (បរិមាណ) បែងចែកតាមតំបន់ (ភ្នំពេញ សៀមរាប បាត់ដំបង តំបន់ឆ្នេរ ភូមិភាគឦសាន) ដើម្បីមើលទាំងភាពខុសគ្នានៃចំណូលមេដ្យានតាមតំបន់ និងសាខាធំៗដែលជា Outliers។',
        },
        impactMetric: 'Visualizes all 5 continent distributions and individual country outliers simultaneously',
      },
    },
  },

  // ==========================================
  // SLIDE 25
  // ==========================================
  {
    pageNumber: 25,
    slideFooterNumber: '25',
    sectionTag: {
      en: '2.3 Quantitative vs Qualitative — Conditional Histograms & Density',
      km: '2.3 បរិមាណ ទល់នឹង គុណភាព — ក្រាហ្វ Histogram និងខ្សែកោងដង់ស៊ីតេតាមក្រុម',
    },
    simulatorMode: 'conditional_density_lifeexp',
    pageIdentity: {
      titleEn: 'Visualization: Conditional Distributions — Layered Histograms & KDE Curves (2007)',
      titleKm: 'ការបង្ហាញជាក្រាហ្វ៖ ការបែងចែកតាមលក្ខខណ្ឌក្រុម — ក្រាហ្វ Histogram និងខ្សែកោងដង់ស៊ីតេត្រួតគ្នា',
      themeName: {
        en: 'Overlaid Kernel Density & Histogram Studio',
        km: 'ផ្ទៃបង្ហាញក្រាហ្វ Histogram និងខ្សែកោងដង់ស៊ីតេត្រួតគ្នាតាមទ្វីប',
      },
      canvasBgHex: '#F8FAFC',
      surfaceCardHex: '#FFFFFF',
      primaryAccentHex: '#0284C7',
      secondaryAccentHex: '#84CC16',
      textPrimaryHex: '#0F172A',
      hierarchyRationale: {
        en: 'Reproduces the translucent multi-continent histogram and KDE curves from Slide 25: Africa in Lime Green (#84CC16) spanning 40–60 yrs, Asia in Amber (#F59E0B), Americas in Sky Cyan (#38BDF8), Europe in Coral Red (#EF4444), and Oceania in Violet (#D946EF) peaking above 80 yrs.',
        km: 'បង្ហាញក្រាហ្វ Histogram និងខ្សែកោងដង់ស៊ីតេថ្លាត្រួតគ្នាដូចក្នុងស្លាយទី ២៥ គឺ អាហ្វ្រិកពណ៌បៃតងខ្ចី (#84CC16) នៅចន្លោះ 40–60 ឆ្នាំ, អាស៊ីពណ៌លឿងទុំ (#F59E0B), អាមេរិកពណ៌ផ្ទៃមេឃ (#38BDF8), អឺរ៉ុបពណ៌ក្រហម (#EF4444) និងអូសេអានីពណ៌ស្វាយផ្កាឈូក (#D946EF) នៅត្រង់ 80 ឆ្នាំ។',
      },
    },
    wireframe: {
      headerSection: {
        en: 'Top Header: "Visualization: Conditional Distributions / ការបង្ហាញជាក្រាហ្វ៖ ការបែងចែកតាមលក្ខខណ្ឌក្រុម".',
        km: 'ផ្នែកខាងលើ៖ ចំណងជើង «Visualization: Conditional Distributions / ការបែងចែកតាមលក្ខខណ្ឌក្រុម»។',
      },
      leftZone: {
        en: 'Top-Left Note (50% width): "Conditional histogram or density also works but is less commonly used for this purpose." Top-Right Key Takeaway (50% width): "🔑 The distinction of quan. values between different groups indicates a connection between the pairs."',
        km: 'ផ្នែកខាងលើខាងឆ្វេង៖ «ក្រាហ្វ Histogram ឬខ្សែកោងដង់ស៊ីតេតាមលក្ខខណ្ឌក្រុម ក៏អាចប្រើបានដែរ ប៉ុន្តែមិនសូវពេញនិយមដូច Boxplot ទេ»។ ផ្នែកខាងលើខាងស្តាំ៖ «🔑 ភាពដាច់ដោយឡែកពីគ្នានៃតម្លៃបរិមាណរវាងក្រុមខុសៗគ្នា បង្ហាញថាមានទំនាក់ទំនងរវាងគូអថេរនោះ»។',
      },
      rightZone: {
        en: 'Main Bottom Canvas (100% width): "Life Expectancy on each continent in 2007 using conditional distributions" (`lifeExp` on X-axis 40 to 83; Probability Density on Y-axis 0 to 0.65) with legend for Oceania, Americas, Africa, Europe, Asia.',
        km: 'ផ្ទៃក្រាហ្វខាងក្រោមពេញអេក្រង់៖ «Life Expectancy on each continent in 2007 using conditional distributions» (អ័ក្ស X គឺ `lifeExp` ពី 40 ដល់ 83; អ័ក្ស Y គឺដង់ស៊ីតេប្រូបាបពី 0 ដល់ 0.65) សម្រាប់ទ្វីបទាំង ៥។',
      },
      bottomOrTopBar: {
        en: 'Bottom readability note explaining why overlapping 5+ histograms becomes visually crowded compared to side-by-side boxplots (Slide 26).',
        km: 'របារពន្យល់ខាងក្រោមអំពីមូលហេតុដែលការដាក់ក្រាហ្វ Histogram ចាប់ពី ៥ ឡើងទៅត្រួតលើគ្នា ធ្វើឱ្យពិបាកមើលជាងក្រាហ្វ Boxplot ដាក់ទន្ទឹមគ្នា (ស្លាយទី ២៦)។',
      },
      gridAllocation: 'Top 2-Column Conceptual Notes + Bottom 12-Column Layered Density Histogram',
    },
    chartMetricsMath: {
      scorecards: [
        {
          label: { en: 'Africa Density Peak', km: 'តំបន់ប្រមូលផ្តុំនៃទ្វីបអាហ្វ្រិក' },
          value: '45–55 yrs',
          metricField: 'africa_kde_peak',
          aggregation: 'Conditional Mode',
          comparisonNote: { en: 'Flat, wide left distribution (Green)', km: 'ខ្សែកោងទាបលាតសន្ធឹងនៅផ្នែកខាងឆ្វេង' },
        },
        {
          label: { en: 'Europe & Oceania Peak', km: 'តំបន់ប្រមូលផ្តុំនៃអឺរ៉ុប និងអូសេអានី' },
          value: '78–82 yrs',
          metricField: 'europe_oceania_peak',
          aggregation: 'Conditional Mode',
          comparisonNote: { en: 'Sharp right-hand density spikes', km: 'កំពូលខ្សែកោងខ្ពស់ស្រួចនៅផ្នែកខាងស្តាំ' },
        },
      ],
      charts: [
        {
          chartType: {
            en: 'Layered Conditional Density Histogram / Area Chart (`lifeExp` by `continent`)',
            km: 'ក្រាហ្វ Histogram និងខ្សែកោងដង់ស៊ីតេត្រួតគ្នាតាមទ្វីប (`lifeExp` បែងចែកតាម `continent`)',
          },
          dimensions: ['lifeExp_bin'],
          breakdownDimension: 'continent',
          metrics: ['probability_density'],
          sorting: 'lifeExp_bin ASC',
          stylingNote: {
            en: 'Set area fill opacity to 35% so overlapping regions between Asia, Americas, and Europe remain visible.',
            km: 'កំណត់កម្រិតថ្លា (Opacity) ត្រឹម 35% ដើម្បីឱ្យផ្នែកដែលត្រួតគ្នារវាងអាស៊ី អាមេរិក និងអឺរ៉ុប នៅតែអាចមើលឃើញច្បាស់។',
          },
        },
      ],
      formulas: [
        {
          title: { en: 'Conditional Probability Density Function f(x | G = g)', km: 'រូបមន្តអនុគមន៍ដង់ស៊ីតេប្រូបាបតាមលក្ខខណ្ឌក្រុម f(x | G = g)' },
          equation: 'f̂_h(x | G = g) = (1 / (n_g · h)) ∑_{i ∈ g} K( (x - x_i) / h ) ,    where ∫ f̂_h(x | G = g) dx = 1',
          variables: [
            { symbol: 'f̂_h(x | G = g)', en: 'Estimated probability density of quantitative variable X at value x within category g', km: 'ដង់ស៊ីតេប្រូបាបប៉ាន់ស្មាននៃអថេរបរិមាណ X ត្រង់តម្លៃ x សម្រាប់ក្រុម g' },
            { symbol: 'K(·), h', en: 'Smoothing kernel function (typically Gaussian) and bandwidth parameter h', km: 'អនុគមន៍ធ្វើឱ្យខ្សែកោងរលោង (Gaussian Kernel) និងទទឹងចន្លោះ h' },
            { symbol: '∫ f dx = 1', en: 'Each continent’s density curve integrates to 1, allowing fair comparison despite different country counts n_g', km: 'ផ្ទៃក្រឡាក្រោមខ្សែកោងនៃទ្វីបនីមួយៗស្មើ 1 ជានិច្ច ដែលអនុញ្ញាតឱ្យប្រៀបធៀបគ្នាបានទោះបីចំនួនប្រទេស n_g ខុសគ្នាក៏ដោយ' },
          ],
        },
      ],
    },
    controls: [
      {
        controlType: { en: 'Multi-Select Continent Toggle', km: 'ប៊ូតុងបិទ/បើកបង្ហាញទ្វីបនីមួយៗលើក្រាហ្វដង់ស៊ីតេ' },
        field: 'continent_visibility',
        defaultState: 'All 5 Continents Overlaid',
        purpose: {
          en: 'Lets students toggle individual continent curves on and off to reduce visual overlap.',
          km: 'អនុញ្ញាតឱ្យនិស្សិតបិទ ឬបើកខ្សែកោងនៃទ្វីបនីមួយៗ ដើម្បីកាត់បន្ថយការត្រួតគ្នា និងងាយស្រួលពិនិត្យ។',
        },
      },
    ],
    expandedContent: {
      onScreenText: {
        heading: {
          en: 'Conditional Histograms & Density Curves: Measuring Group Separation',
          km: 'ក្រាហ្វ Histogram និងដង់ស៊ីតេតាមលក្ខខណ្ឌក្រុម៖ ការពិនិត្យភាពដាច់ពីគ្នារវាងក្រុម',
        },
        bullets: [
          {
            en: 'Conditional histogram or density plot also works for Quantitative vs Qualitative analysis, though it is less commonly used when there are many categories.',
            km: 'ក្រាហ្វ Histogram ឬខ្សែកោងដង់ស៊ីតេតាមលក្ខខណ្ឌក្រុម ក៏អាចប្រើសម្រាប់ការវិភាគបរិមាណ ទល់នឹង គុណភាពបានដែរ ប៉ុន្តែមិនសូវពេញនិយមទេនៅពេលមានក្រុមច្រើន។',
          },
          {
            en: '🔑 Key Principle: The distinction (separation) of quantitative values between different groups indicates a connection between the pairs!',
            km: '🔑 គោលការណ៍គន្លឹះ៖ ភាពដាច់ដោយឡែកពីគ្នានៃតម្លៃបរិមាណរវាងក្រុមខុសៗគ្នា បង្ហាញថាមានទំនាក់ទំនងរវាងគូនៃអថេរនោះ!',
          },
          {
            en: 'In the 2007 Life Expectancy plot: Africa (green curve, 40–60 years) is clearly separated from Americas (blue, ~73 years), Europe (red, ~79 years), and Oceania (purple spike, >80 years).',
            km: 'នៅក្នុងក្រាហ្វអាយុរំពឹងរស់ឆ្នាំ ២០០៧៖ ទ្វីបអាហ្វ្រិក (ខ្សែកោងបៃតង ៤០–៦០ ឆ្នាំ) ដាច់ឆ្ងាយយ៉ាងច្បាស់ពីទ្វីបអាមេរិក (ពណ៌ខៀវ ~៧៣ ឆ្នាំ), អឺរ៉ុប (ពណ៌ក្រហម ~៧៩ ឆ្នាំ) និងអូសេអានី (ពណ៌ស្វាយ >៨០ ឆ្នាំ)។',
          },
        ],
        callout: {
          en: 'Why Normalize to Density Instead of Raw Frequency? Oceania only has 2 countries (Australia & New Zealand) while Africa has 52! If we plotted raw counts, Oceania would be invisible—probability density puts every group on equal footing (area = 1).',
          km: 'ហេតុអ្វីយើងប្រើ «ដង់ស៊ីតេប្រូបាប (Density)» ជំនួសឱ្យចំនួនរាប់ (Frequency)? ពីព្រោះទ្វីបអូសេអានីមានតែ ២ ប្រទេសប៉ុណ្ណោះ ខណៈដែលអាហ្វ្រិកមានដល់ទៅ ៥២ ប្រទេស! ការប្រើដង់ស៊ីតេធ្វើឱ្យផ្ទៃក្រឡាសរុបនៃក្រុមនីមួយៗស្មើ ១ ដូចគ្នា ទើបអាចប្រៀបធៀបគ្នាបាន។',
        },
      },
      deepDiveExplanation: {
        en: 'Slide 25 demonstrates an alternative visual encoding for Case 2 (Quantitative $X$ vs Qualitative $G$): instead of placing categories side-by-side along the X-axis (as in a boxplot/violin plot), a **Conditional Distribution Plot** places the quantitative variable (`lifeExp`) on the X-axis, maps probability density to the Y-axis, and overlays a differently colored histogram + Kernel Density Estimate (KDE) curve for each category $g \\in G$. Mathematically, if $X$ and $G$ are independent, the conditional densities $f(x \\mid G = g)$ will lie directly on top of one another for all $g$. The more the density curves shift horizontally apart—here, Africa’s green curve centered around 50 years vs Europe’s red curve around 79 years and Oceania’s tall purple spike above 80 years—the stronger the statistical dependency between $X$ and $G$. However, as the slide notes, when $G$ has 5 or more categories, overlaid histograms suffer from visual occlusion (bars hiding behind bars), which is why side-by-side boxplots (Slide 26) are generally preferred in BI dashboards.',
        km: 'ស្លាយទី ២៥ បង្ហាញពីវិធីសាស្ត្រគូសក្រាហ្វមួយបែបទៀតសម្រាប់ករណីទី ២ (បរិមាណ $X$ ទល់នឹង គុណភាព $G$)៖ ជំនួសឱ្យការដាក់ក្រុមទ្វីបតម្រៀបគ្នាលើអ័ក្ស X (ដូចក្នុងក្រាហ្វ Boxplot/Violin) **ក្រាហ្វការបែងចែកតាមលក្ខខណ្ឌ (Conditional Distribution Plot)** ដាក់អថេរបរិមាណ (`lifeExp`) នៅលើអ័ក្ស X ដាក់ដង់ស៊ីតេប្រូបាបនៅលើអ័ក្ស Y ហើយគូសក្រាហ្វ Histogram និងខ្សែកោងដង់ស៊ីតេដែលមានពណ៌ខុសៗគ្នាត្រួតលើគ្នាសម្រាប់ទ្វីបនីមួយៗ។ តាមក្បួនគណិតវិទ្យា ប្រសិនបើ $X$ និង $G$ គ្មានទំនាក់ទំនងនឹងគ្នាទេ នោះខ្សែកោងដង់ស៊ីតេ $f(x \\mid G = g)$ នៃគ្រប់ទ្វីបទាំងអស់នឹងត្រួតស៊ីគ្នាតែមួយ។ កាលណាខ្សែកោងនៃក្រុមនីមួយៗកាន់តែរំកិលដាច់ឆ្ងាយពីគ្នា (ដូចជាខ្សែកោងពណ៌បៃតងរបស់អាហ្វ្រិកនៅត្រង់ ៥០ ឆ្នាំ ដាច់ឆ្ងាយពីខ្សែកោងពណ៌ក្រហមរបស់អឺរ៉ុបនៅត្រង់ ៧៩ ឆ្នាំ) នោះទំនាក់ទំនងរវាង $X$ និង $G$ កាន់តែខ្លាំង។ ទោះជាយ៉ាងណាក៏ដោយ នៅពេលមានក្រុមចាប់ពី ៥ ឡើងទៅ ការដាក់ក្រាហ្វត្រួតលើគ្នាធ្វើឱ្យរបារបាំងគ្នាពិបាកមើល ដែលជាមូលហេតុធ្វើឱ្យក្រាហ្វ Boxplot ដាក់ទន្ទឹមគ្នា (ស្លាយទី ២៦) ត្រូវបានគេនិយមប្រើច្រើនជាង។',
      },
      practicalApplication: {
        scenarioTitle: {
          en: 'Comparing Transaction Amount Distributions: Fraudulent vs Legitimate Cards',
          km: 'ការប្រៀបធៀបការបែងចែកទឹកប្រាក់ប្រតិបត្តិការ៖ កាតឆបោក ទល់នឹង កាតស្របច្បាប់',
        },
        description: {
          en: 'When there are only 2 or 3 categories (e.g., Fraud vs Legitimate transactions, or Churn vs Retained users), overlaid conditional density plots are ideal for spotting the exact numeric threshold where Fraud probability spikes above Legitimate activity.',
          km: 'នៅពេលមានក្រុមត្រឹមតែ ២ ឬ ៣ ប៉ុណ្ណោះ (ឧទាហរណ៍៖ ប្រតិបត្តិការឆបោក ទល់នឹង ប្រតិបត្តិការធម្មតា) ក្រាហ្វខ្សែកោងដង់ស៊ីតេត្រួតគ្នាមានប្រសិទ្ធភាពខ្ពស់ណាស់ក្នុងការកំណត់រកចំណុចទឹកប្រាក់ដែលហានិភ័យនៃការឆបោកចាប់ផ្តើមខ្ពស់ជាងប្រតិបត្តិការធម្មតា។',
        },
        impactMetric: 'Clearly separates modal life expectancy peaks from 52 yrs (Africa) to 81 yrs (Oceania)',
      },
    },
  },

  // ==========================================
  // SLIDE 26
  // ==========================================
  {
    pageNumber: 26,
    slideFooterNumber: '26',
    sectionTag: {
      en: '2.3 Quantitative vs Qualitative — Indicator & Visualization Synthesis',
      km: '2.3 បរិមាណ ទល់នឹង គុណភាព — ការផ្គូផ្គងសូចនាករ η² ជាមួយក្រាហ្វ Boxplot',
    },
    simulatorMode: 'eta_squared_boxplots_comparison',
    pageIdentity: {
      titleEn: 'Indicator & Visualization — Side-by-Side Boxplots with η² (0.635 vs 0.424)',
      titleKm: 'សូចនាករ និងក្រាហ្វ — ការប្រៀបធៀបក្រាហ្វ Boxplot ទន្ទឹមគ្នាអមដោយតម្លៃ η² (0.635 ទល់នឹង 0.424)',
      themeName: {
        en: 'Paired Indicator-to-Visual Verification Theme',
        km: 'ផ្ទៃផ្ទៀងផ្ទាត់សូចនាករ η² ជាមួយក្រាហ្វប្រអប់ (Boxplot) ទាំងពីរ',
      },
      canvasBgHex: '#F8FAFC',
      surfaceCardHex: '#FFFFFF',
      primaryAccentHex: '#6366F1',
      secondaryAccentHex: '#A855F7',
      textPrimaryHex: '#0F172A',
      hierarchyRationale: {
        en: 'Places the two 5-continent boxplots with strip points side-by-side exactly as in Slide 26: Left = "LifeExp per continent with eta-squared 0.635"; Right = "GDP per continent with eta-squared 0.424".',
        km: 'ដាក់ក្រាហ្វ Boxplot នៃទ្វីបទាំង ៥ ទន្ទឹមគ្នាដូចក្នុងស្លាយទី ២៦ គឺ ខាងឆ្វេង = «LifeExp per continent with eta-squared 0.635» និងខាងស្តាំ = «GDP per continent with eta-squared 0.424»។',
      },
    },
    wireframe: {
      headerSection: {
        en: 'Top Header: "Indicator & Visualization / ការផ្គូផ្គងសូចនាករ និងក្រាហ្វវិភាគ".',
        km: 'ផ្នែកខាងលើ៖ ចំណងជើង «Indicator & Visualization / ការផ្គូផ្គងសូចនាករ និងក្រាហ្វវិភាគ»។',
      },
      leftZone: {
        en: 'Left Chart (50% width): "LifeExp per continent with eta-squared 0.635" — Conditional Boxplot + jittered points across Africa, Asia, Americas, Europe, Oceania (Y-axis: 40 to 85 yrs). Compact boxes with strong vertical staircase separation!',
        km: 'ក្រាហ្វខាងឆ្វេង (ទទឹង ៥០%)៖ «LifeExp per continent with eta-squared 0.635» — ក្រាហ្វ Boxplot អមដោយចំណុចប្រទេសតាមទ្វីបទាំង ៥ (អ័ក្ស Y ពី 40 ដល់ 85 ឆ្នាំ)។ ប្រអប់នីមួយៗមានទំហំតូចល្មម ហើយដាច់ពីគ្នាជារាងកាំជណ្តើរយ៉ាងច្បាស់!',
      },
      rightZone: {
        en: 'Right Chart (50% width): "GDP per continent with eta-squared 0.424" — Conditional Boxplot + jittered points across Africa, Asia, Americas, Europe, Oceania (Y-axis: 0 to 50k USD). Tall overlapping boxes in Asia and Europe!',
        km: 'ក្រាហ្វខាងស្តាំ (ទទឹង ៥០%)៖ «GDP per continent with eta-squared 0.424» — ក្រាហ្វ Boxplot អមដោយចំណុចប្រទេសតាមទ្វីបទាំង ៥ (អ័ក្ស Y ពី 0 ដល់ 50k USD)។ ប្រអប់របស់អាស៊ី និងអឺរ៉ុបលាតសន្ធឹងវែងត្រួតគ្នា!',
      },
      bottomOrTopBar: {
        en: 'Bottom Visual Comparison Strip summarizing why compact non-overlapping boxes produce high η² (0.635) while tall overlapping boxes produce lower η² (0.424).',
        km: 'របារប្រៀបធៀបខាងក្រោមដែលពន្យល់ថា ហេតុអ្វីប្រអប់ខ្លីៗដែលមិនសូវត្រួតគ្នាផ្តល់តម្លៃ η² ខ្ពស់ (0.635) ខណៈប្រអប់វែងៗដែលត្រួតគ្នាផ្តល់តម្លៃ η² ទាបជាង (0.424)។',
      },
      gridAllocation: '6 Columns Left (LifeExp Boxplot η²=0.635) + 6 Columns Right (GDP Boxplot η²=0.424)',
    },
    chartMetricsMath: {
      scorecards: [
        {
          label: { en: 'Left Plot: LifeExp η²', km: 'ក្រាហ្វឆ្វេង៖ η² នៃអាយុរំពឹងរស់' },
          value: '0.635',
          metricField: 'eta_sq_lifeexp',
          aggregation: 'BSS / TSS',
          comparisonNote: { en: 'Clear staircase separation across continents', km: 'ប្រអប់ដាច់ពីគ្នាជារាងកាំជណ្តើរយ៉ាងច្បាស់' },
        },
        {
          label: { en: 'Right Plot: GDP η²', km: 'ក្រាហ្វស្តាំ៖ η² នៃ GDP ក្នុងមនុស្សម្នាក់' },
          value: '0.424',
          metricField: 'eta_sq_gdp',
          aggregation: 'BSS / TSS',
          comparisonNote: { en: 'Asia box spans $1k–$23k (high WSS overlap)', km: 'ប្រអប់របស់អាស៊ីលាតសន្ធឹងវែងធ្វើឱ្យត្រួតគ្នាខ្លាំង' },
        },
      ],
      charts: [
        {
          chartType: {
            en: 'Chart 1: Conditional Boxplot with Jittered Strip (`continent` vs `lifeExp`, η² = 0.635)',
            km: 'ក្រាហ្វទី ១៖ ក្រាហ្វប្រអប់តាមទ្វីបសម្រាប់អាយុរំពឹងរស់ (`lifeExp`, η² = 0.635)',
          },
          dimensions: ['continent', 'country'],
          metrics: ['MIN(lifeExp)', 'Q1(lifeExp)', 'MEDIAN(lifeExp)', 'Q3(lifeExp)', 'MAX(lifeExp)'],
          sorting: 'MEDIAN(lifeExp) ASC',
          stylingNote: {
            en: 'Embed the exact indicator value `eta-squared 0.635` directly in the chart title.',
            km: 'ដាក់តម្លៃសូចនាករ `eta-squared 0.635` នៅក្នុងចំណងជើងក្រាហ្វដោយផ្ទាល់ដូចក្នុងស្លាយទី ២៦។',
          },
        },
        {
          chartType: {
            en: 'Chart 2: Conditional Boxplot with Jittered Strip (`continent` vs `gdpPercap`, η² = 0.424)',
            km: 'ក្រាហ្វទី ២៖ ក្រាហ្វប្រអប់តាមទ្វីបសម្រាប់ GDP (`gdpPercap`, η² = 0.424)',
          },
          dimensions: ['continent', 'country'],
          metrics: ['MIN(gdpPercap)', 'Q1(gdpPercap)', 'MEDIAN(gdpPercap)', 'Q3(gdpPercap)', 'MAX(gdpPercap)'],
          sorting: 'custom_continent_order',
          stylingNote: {
            en: 'Embed the exact indicator value `eta-squared 0.424` directly in the chart title.',
            km: 'ដាក់តម្លៃសូចនាករ `eta-squared 0.424` នៅក្នុងចំណងជើងក្រាហ្វដោយផ្ទាល់ដូចក្នុងស្លាយទី ២៦។',
          },
        },
      ],
      formulas: [],
    },
    controls: [
      {
        controlType: { en: 'Drop-down List Control (Continent Highlight)', km: 'តម្រងជ្រើសរើសទ្វីបដើម្បីផ្ទៀងផ្ទាត់ (Continent Inspector)' },
        field: 'continent',
        defaultState: 'All 5 Continents',
        purpose: {
          en: 'Lets users click any continent (e.g., Asia) to simultaneously inspect its Life Expectancy box (left) and GDP per Capita box (right).',
          km: 'អនុញ្ញាតឱ្យអ្នកសិក្សាចុចលើទ្វីបណាមួយ (ឧទាហរណ៍៖ អាស៊ី) ដើម្បីពិនិត្យមើលប្រអប់អាយុរំពឹងរស់ (ឆ្វេង) និងប្រអប់ GDP (ស្តាំ) ក្នុងពេលតែមួយ។',
        },
      },
    ],
    expandedContent: {
      onScreenText: {
        heading: {
          en: 'Pairing the η² Indicator Directly with Conditional Boxplots',
          km: 'ការដាក់សូចនាករ η² គូគ្នាដោយផ្ទាល់ជាមួយនឹងក្រាហ្វប្រអប់តាមលក្ខខណ្ឌក្រុម (Conditional Boxplots)',
        },
        bullets: [
          {
            en: 'Left Chart (`LifeExp per continent with eta-squared 0.635`): Notice the clear upward staircase from Africa (median ~52.8 yrs) to Asia (~72.4 yrs), Americas (~72.9 yrs), Europe (~78.6 yrs), and Oceania (~80.7 yrs), with relatively tight interquartile boxes.',
            km: 'ក្រាហ្វខាងឆ្វេង (`LifeExp per continent with eta-squared 0.635`)៖ សូមសង្កេតមើលរាងកាំជណ្តើរកើនឡើងយ៉ាងច្បាស់ ចាប់ពីទ្វីបអាហ្វ្រិក (មេដ្យាន ~52.8 ឆ្នាំ) ទៅអាស៊ី (~72.4 ឆ្នាំ), អាមេរិក (~72.9 ឆ្នាំ), អឺរ៉ុប (~78.6 ឆ្នាំ) និងអូសេអានី (~80.7 ឆ្នាំ) ដោយប្រអប់នីមួយៗមានទំហំតូចល្មម។',
          },
          {
            en: 'Right Chart (`GDP per continent with eta-squared 0.424`): Notice how Asia’s red box and whiskers stretch from $431 all the way to $47,143, overlapping Africa at the bottom and Europe/Oceania at the top!',
            km: 'ក្រាហ្វខាងស្តាំ (`GDP per continent with eta-squared 0.424`)៖ សូមសង្កេតមើលប្រអប់ និងដៃប្រអប់ពណ៌ក្រហមរបស់ទ្វីបអាស៊ី ដែលលាតសន្ធឹងតាំងពី $431 រហូតដល់ $47,143 ដោយត្រួតគ្នាជាមួយអាហ្វ្រិកនៅផ្នែកខាងក្រោម និងត្រួតគ្នាជាមួយអឺរ៉ុបនៅផ្នែកខាងលើ!',
          },
        ],
        callout: {
          en: 'Best Practice in BI Reporting: Always print the statistical indicator (e.g., `eta-squared = 0.635`) directly inside the chart title or subtitle so viewers connect the visual separation of the boxes to the exact mathematical metric!',
          km: 'ការអនុវត្តល្អបំផុតក្នុងរបាយការណ៍ BI៖ ត្រូវដាក់តម្លៃសូចនាករស្ថិតិ (ដូចជា `eta-squared = 0.635`) នៅក្នុងចំណងជើងក្រាហ្វដោយផ្ទាល់ ដើម្បីឱ្យអ្នកមើលអាចភ្ជាប់រូបភាពនៃការដាច់ពីគ្នារបស់ប្រអប់ ទៅនឹងតួលេខគណិតវិទ្យាជាក់ស្តែង!',
        },
      },
      deepDiveExplanation: {
        en: 'Slide 26 is the visual culmination of Section 2.3. Why is side-by-side Boxplot + Strip Plot superior to both the raw violin plot (Slide 24) and the overlaid histogram (Slide 25)? Because for each continent, the Boxplot simultaneously displays five exact order statistics—Minimum whisker, $Q_1$ (25th percentile), Median line ($Q_2$), $Q_3$ (75th percentile), and Maximum whisker—while the jittered dots to the left of each box reveal the exact sample size $n_g$ and individual outlier countries (such as Afghanistan at 43.8 years in Asia on the left plot, or Gabon/South Africa above $9,000 in Africa on the right plot). Comparing the two charts side-by-side makes the difference between $\\eta^2 = 0.635$ and $\\eta^2 = 0.424$ immediately intuitive to any audience.',
        km: 'ស្លាយទី ២៦ គឺជាការសំយោគដ៏ល្អឥតខ្ចោះនៃផ្នែក 2.3។ តើហេតុអ្វីបានជាការប្រើក្រាហ្វ Boxplot រួមជាមួយចំណុចទិន្នន័យ (Strip Plot) ដាក់ទន្ទឹមគ្នា មានប្រសិទ្ធភាពខ្ពស់ជាងក្រាហ្វ Histogram ត្រួតគ្នា (ស្លាយទី ២៥)? ពីព្រោះសម្រាប់ទ្វីបនីមួយៗ ក្រាហ្វ Boxplot បង្ហាញតម្លៃស្ថិតិសំខាន់ៗទាំង ៥ ក្នុងពេលតែមួយ គឺ អប្បបរមា, ចតុភាគទី ១ ($Q_1$), បន្ទាត់មេដ្យាន ($Q_2$), ចតុភាគទី ៣ ($Q_3$) និងអតិបរមា ខណៈដែលចំណុចតូចៗនៅខាងឆ្វេងប្រអប់នីមួយៗបង្ហាញពីចំនួនប្រទេស $n_g$ និងប្រទេសជា Outliers យ៉ាងច្បាស់ (ដូចជាប្រទេសអាហ្វហ្គានីស្ថានដែលមានអាយុរំពឹងរស់ 43.8 ឆ្នាំដាច់គេនៅក្នុងទ្វីបអាស៊ីលើក្រាហ្វខាងឆ្វេង)។ ការដាក់ក្រាហ្វទាំងពីរទន្ទឹមគ្នាធ្វើឱ្យអ្នកមើលយល់ភ្លាមៗពីភាពខុសគ្នារវាង $\\eta^2 = 0.635$ និង $\\eta^2 = 0.424$។',
      },
      practicalApplication: {
        scenarioTitle: {
          en: 'Executive KPI Benchmarking Across Provincial Branches in Looker Studio',
          km: 'ការប្រៀបធៀបសូចនាករ KPI តាមសាខាខេត្តនៅក្នុងកម្មវិធី Looker Studio',
        },
        description: {
          en: 'Microfinance institutions in Cambodia use side-by-side boxplots annotated with η² to compare Loan Officer Productivity and Repayment Rates across regional zones, immediately identifying which metric is most heavily driven by geography.',
          km: 'គ្រឹះស្ថានមីក្រូហិរញ្ញវត្ថុនៅកម្ពុជាប្រើប្រាស់ក្រាហ្វ Boxplot ទន្ទឹមគ្នាដែលមានភ្ជាប់តម្លៃ η² ដើម្បីប្រៀបធៀបផលិតភាពមន្ត្រីឥណទាន និងអត្រាសងប្រាក់តាមតំបន់ ដែលជួយឱ្យដឹងភ្លាមៗថាតើសូចនាករមួយណាដែលរងឥទ្ធិពលខ្លាំងបំផុតពីកត្តាភូមិសាស្ត្រ។',
        },
        impactMetric: 'Visually contrasts 63.5% vs 42.4% variance explained across 5 continents',
      },
    },
  },

  // ==========================================
  // SLIDE 27
  // ==========================================
  {
    pageNumber: 27,
    slideFooterNumber: '27',
    sectionTag: {
      en: '2.4 Qualitative vs Qualitative — Treemap / Mosaicplot',
      km: '2.4 គុណភាព ទល់នឹង គុណភាព — ក្រាហ្វ Treemap និង Mosaicplot',
    },
    simulatorMode: 'qual_treemap_mosaic',
    pageIdentity: {
      titleEn: '2.4 Qual. Vs Qual. — Visualization: Treemap / Mosaicplot (Categorical GDP vs Continent)',
      titleKm: '2.4 គុណភាព ទល់នឹង គុណភាព — ការបង្ហាញជាក្រាហ្វ៖ Treemap / Mosaicplot (កម្រិត GDP ទល់នឹង ទ្វីប)',
      themeName: {
        en: 'Hierarchical Area Proportion Theme',
        km: 'ផ្ទៃបង្ហាញសមាមាត្រផ្ទៃក្រឡាតាមឋានានុក្រម (Treemap / Mosaic)',
      },
      canvasBgHex: '#F8FAFC',
      surfaceCardHex: '#FFFFFF',
      primaryAccentHex: '#DC2626',
      secondaryAccentHex: '#2563EB',
      textPrimaryHex: '#0F172A',
      hierarchyRationale: {
        en: 'Uses #DC2626 Crimson in the title ("2.4 Qual. Vs Qual.") and matches Slide 27’s exact 5-continent Treemap palette: Americas = Sky Blue (#38BDF8), Oceania = Purple (#A855F7), Africa = Terracotta Red (#DC2626), Europe = Golden Ochre (#D97706), Asia = Kelly Green (#22C55E).',
        km: 'ប្រើពណ៌ក្រហម (#DC2626) សម្រាប់ចំណងជើង «2.4 Qual. Vs Qual.» និងរក្សាពណ៌ក្រាហ្វ Treemap ទាំង ៥ ទ្វីបដូចក្នុងស្លាយទី ២៧ គឺ អាមេរិក = ពណ៌ផ្ទៃមេឃ (#38BDF8), អូសេអានី = ពណ៌ស្វាយ (#A855F7), អាហ្វ្រិក = ពណ៌ក្រហមដី (#DC2626), អឺរ៉ុប = ពណ៌មាស (#D97706) និងអាស៊ី = ពណ៌បៃតង (#22C55E)។',
      },
    },
    wireframe: {
      headerSection: {
        en: 'Top Header: "2.4 Qual. Vs Qual. — Visualization: Treemap/Mosaicplot".',
        km: 'ផ្នែកខាងលើ៖ ចំណងជើង «2.4 Qual. Vs Qual. — Visualization: Treemap/Mosaicplot»។',
      },
      leftZone: {
        en: 'Left Column (48% width): Quantile discretization definition (`[Developing, Emerging, Developed]` at 33.33% and 66.66% quantiles) + Conceptual Q&A ("Does it seem like continent is related to categorical GDP? Yes, since knowing continents may alter the chance of guessing the GDP category...").',
        km: 'ជួរឈរខាងឆ្វេង (ទទឹង ៤៨%)៖ ការបែងចែក GDP ជា ៣ ក្រុម (`[Developing, Emerging, Developed]` ត្រង់ចំណុច 33.33% និង 66.66%) + សំណួរ និងចម្លើយពន្យល់ពីទំនាក់ទំនងរវាងទ្វីប និងកម្រិតអភិវឌ្ឍន៍ GDP។',
      },
      rightZone: {
        en: 'Right Column (52% width): Looker Studio Nested Treemap "Treemap of cat. GDP vs Continent" showing Parent = `continent` and Child = `gdp_category` (Developing, Emerging, Developed).',
        km: 'ជួរឈរខាងស្តាំ (ទទឹង ៥២%)៖ ក្រាហ្វ Treemap «Treemap of cat. GDP vs Continent» ដែលបង្ហាញក្រុមធំតាមទ្វីប (`continent`) និងក្រុមរងតាមកម្រិត GDP (`Developing`, `Emerging`, `Developed`)។',
      },
      bottomOrTopBar: {
        en: 'Bottom Conditional Probability Bar showing P(GDP Category | Continent) for Africa vs Europe vs Asia.',
        km: 'របារប្រូបាបតាមលក្ខខណ្ឌនៅខាងក្រោម បង្ហាញពី P(កម្រិត GDP | ទ្វីប) សម្រាប់អាហ្វ្រិក អឺរ៉ុប និងអាស៊ី។',
      },
      gridAllocation: '6 Columns Left (Quantile Binning & Probabilistic Logic) + 6 Columns Right (Nested Treemap)',
    },
    chartMetricsMath: {
      scorecards: [
        {
          label: { en: 'Quantile Cutoffs (3 Tiers)', km: 'ចំណុចបែងចែកកម្រិត GDP ទាំង ៣' },
          value: '33.3% & 66.7%',
          metricField: 'quantile_thresholds',
          aggregation: 'Tertiles',
          comparisonNote: { en: 'Developing (<33.3%), Emerging, Developed (>66.7%)', km: 'កំពុងអភិវឌ្ឍ (<33.3%), កំពុងលូតលាស់, អភិវឌ្ឍន៍ហើយ (>66.7%)' },
        },
        {
          label: { en: 'P(Developing | Africa)', km: 'ប្រូបាបនៃប្រទេសកំពុងអភិវឌ្ឍនៅអាហ្វ្រិក' },
          value: '71.15%',
          metricField: 'prob_dev_africa',
          aggregation: 'Conditional Probability',
          comparisonNote: { en: '37 of 52 African nations are Developing', km: '៣៧ ក្នុងចំណោម ៥២ ប្រទេសនៅអាហ្វ្រិកគឺកំពុងអភិវឌ្ឍ' },
        },
        {
          label: { en: 'P(Developed | Europe)', km: 'ប្រូបាបនៃប្រទេសអភិវឌ្ឍន៍ហើយនៅអឺរ៉ុប' },
          value: '76.67%',
          metricField: 'prob_devd_europe',
          aggregation: 'Conditional Probability',
          comparisonNote: { en: '23 of 30 European nations are Developed', km: '២៣ ក្នុងចំណោម ៣០ ប្រទេសនៅអឺរ៉ុបគឺអភិវឌ្ឍន៍ហើយ' },
        },
      ],
      charts: [
        {
          chartType: {
            en: 'Looker Studio Treemap (`continent` → `gdp_category`)',
            km: 'ក្រាហ្វ Treemap បង្ហាញឋានានុក្រម (`continent` → `gdp_category`)',
          },
          dimensions: ['continent', 'gdp_category'],
          metrics: ['COUNT(country) or relative_proportion'],
          sorting: 'continent ASC',
          stylingNote: {
            en: 'Configure Dimension 1 = `continent` and Dimension 2 = `gdp_category` so each continent block is subdivided into Developing, Emerging, and Developed rectangles.',
            km: 'កំណត់ Dimension ទី ១ = `continent` និង Dimension ទី ២ = `gdp_category` ដើម្បីឱ្យប្រអប់ទ្វីបនីមួយៗត្រូវបានបែងចែកជាប្រអប់តូចៗតាមកម្រិត Developing, Emerging និង Developed។',
          },
        },
      ],
      formulas: [
        {
          title: { en: 'Quantile Discretization (Tertiles) & Conditional Probability Definition of Association', km: 'រូបមន្តបែងចែកទិន្នន័យជា ៣ ក្រុមស្មើគ្នា និងនិយមន័យទំនាក់ទំនងតាមប្រូបាបមានលក្ខខណ្ឌ' },
          equation: 'gdp_category(x) = { Developing if x ≤ Q_{0.333} ; Emerging if Q_{0.333} < x ≤ Q_{0.667} ; Developed if x > Q_{0.667} } ,    P(Y = y_j | X = x_i) ≠ P(Y = y_j)',
          variables: [
            { symbol: 'Q_{0.333}, Q_{0.667}', en: '33.33% and 66.66% empirical quantiles of `gdpPercap` dividing the 142 countries into 3 equal-sized global tiers (~47 countries each)', km: 'ចំណុចបែងចែក 33.33% និង 66.66% នៃ `gdpPercap` ដែលចែកប្រទេសទាំង ១៤២ ជា ៣ ក្រុមស្មើៗគ្នា (~៤៧ ប្រទេសក្នុងមួយក្រុម)' },
            { symbol: 'P(Y = y_j) = 1/3', en: 'Unconditional (prior) chance of guessing a country’s GDP category without knowing its continent (33.33%)', km: 'ប្រូបាបទស្សន៍ទាយកម្រិត GDP របស់ប្រទេសមួយដោយមិនដឹងទ្វីប គឺស្មើៗគ្នា ១ ភាគ ៣ (33.33%)' },
            { symbol: 'P(Y = y_j | X = x_i)', en: 'Conditional probability of GDP category given Continent (e.g., 71.15% Developing given Africa, 76.67% Developed given Europe)', km: 'ប្រូបាបមានលក្ខខណ្ឌនៃកម្រិត GDP នៅពេលដឹងទ្វីប (ឧទាហរណ៍៖ ៧១,១៥% ជាប្រទេសកំពុងអភិវឌ្ឍប្រសិនបើនៅអាហ្វ្រិក)' },
          ],
        },
      ],
    },
    controls: [
      {
        controlType: { en: 'Drop-down List Control (GDP Category Filter)', km: 'តម្រងជ្រើសរើសកម្រិតអភិវឌ្ឍន៍ GDP (Developing / Emerging / Developed)' },
        field: 'gdp_category',
        defaultState: 'All 3 GDP Categories',
        purpose: {
          en: 'Lets students isolate Developing, Emerging, or Developed rectangles inside the Treemap.',
          km: 'អនុញ្ញាតឱ្យនិស្សិតច្រោះមើលក្រុមប្រទេសកំពុងអភិវឌ្ឍ កំពុងលូតលាស់ ឬអភិវឌ្ឍន៍ហើយនៅក្នុងក្រាហ្វ Treemap។',
        },
      },
    ],
    expandedContent: {
      onScreenText: {
        heading: {
          en: 'Case 3 (Qualitative vs Qualitative): Visualizing Association with Treemaps & Mosaicplots',
          km: 'ករណីទី ៣ (គុណភាព ទល់នឹង គុណភាព)៖ ការបង្ហាញទំនាក់ទំនងតាមរយៈក្រាហ្វ Treemap និង Mosaicplot',
        },
        bullets: [
          {
            en: 'Discretizing GDP: `gdpPercap` is categorized into three qualitative groups `[Developing, Emerging, Developed]` at the 33.33% and 66.66% quantiles.',
            km: 'ការបម្លែង GDP ជាអថេរគុណភាព៖ `gdpPercap` ត្រូវបានបែងចែកជា ៣ ក្រុម `[Developing, Emerging, Developed]` ត្រង់ចំណុច 33.33% និង 66.66%។',
          },
          {
            en: 'Question: Does it seem like `continent` is related to `categorical GDP`? Answer: Yes, since knowing the continent alters the chance of guessing the GDP category of a country!',
            km: 'សំណួរ៖ តើទ្វីប (`continent`) ហាក់ដូចជាមានទំនាក់ទំនងជាមួយកម្រិត GDP ដែរឬទេ? ចម្លើយ៖ បាទ/ចាស មាន! ពីព្រោះការដឹងឈ្មោះទ្វីប ធ្វើឱ្យប្រូបាបនៃការទស្សន៍ទាយកម្រិត GDP របស់ប្រទេសមួយប្រែប្រួលខុសពីមុន!',
          },
          {
            en: 'Example: African countries are much more likely to be Developing (largest red sub-box), while European and Oceanian countries are mostly Developed (dominant gold and purple sub-boxes). Meanwhile, Asia (green) is evenly split across all 3 tiers!',
            km: 'ឧទាហរណ៍៖ ប្រទេសនៅទ្វីបអាហ្វ្រិកភាគច្រើនជាប្រទេសកំពុងអភិវឌ្ឍ (Developing) ខណៈដែលប្រទេសនៅអឺរ៉ុប និងអូសេអានីភាគច្រើនជាប្រទេសអភិវឌ្ឍន៍ហើយ (Developed)។ ចំណែកឯទ្វីបអាស៊ី (ពណ៌បៃតង) បែងចែកជា ៣ ក្រុមស្មើៗគ្នា!',
          },
        ],
        callout: {
          en: 'Probabilistic Intuition of Independence: If Continent and Categorical GDP were independent, every single continent in the Treemap would be split into three equal 33.3% rectangles (1/3 Developing, 1/3 Emerging, 1/3 Developed)—just like Asia!',
          km: 'ការយល់ដឹងតាមទ្រឹស្តីប្រូបាប៖ ប្រសិនបើទ្វីប និងកម្រិត GDP គ្មានទំនាក់ទំនងនឹងគ្នាសោះ (ឯករាជ្យពីគ្នា) នោះគ្រប់ទ្វីបទាំងអស់នៅក្នុងក្រាហ្វ Treemap នឹងត្រូវបែងចែកជា ៣ ប្រអប់តូចៗស្មើៗគ្នា (1/3 កំពុងអភិវឌ្ឍ, 1/3 កំពុងលូតលាស់, 1/3 អភិវឌ្ឍន៍ហើយ) ដូចជាទ្វីបអាស៊ីដែរ!',
        },
      },
      deepDiveExplanation: {
        en: 'Slide 27 opens Section 2.4 (Qualitative vs Qualitative, i.e., Case 3 from Slide 7). To create a second qualitative column in Gapminder alongside `continent`, the instructor bins `gdpPercap` at the $33.33\\%$ and $66.66\\%$ quantiles (tertiles), creating `gdp_category` $\\in \\{\\text{Developing}, \\text{Emerging}, \\text{Developed}\\}$. Because we split at the global tertiles, unconditionally across the whole world, $P(\\text{Developing}) = P(\\text{Emerging}) = P(\\text{Developed}) = 33.33\\%$. Now look at the definition of statistical dependence given on the slide: **"knowing continents may alter the chance of guessing the GDP category of a country."** That is the exact verbal translation of conditional probability $P(Y \\mid X) \\neq P(Y)$! In the Treemap on the right, each continent is a colored rectangle subdivided by `gdp_category`: Oceania is 100% Developed; Europe is ~77% Developed and ~23% Emerging (0% Developing); Americas is ~68% Emerging and ~28% Developed; Africa is ~71% Developing; and Asia is almost perfectly balanced (~36% Developed, ~33% Emerging, ~30% Developing).',
        km: 'ស្លាយទី ២៧ ចាប់ផ្តើមផ្នែក 2.4 (អថេរគុណភាព ទល់នឹង អថេរគុណភាព ឬករណីទី ៣)។ ដើម្បីបង្កើតជួរឈរគុណភាពទីពីរនៅក្នុងទិន្នន័យ Gapminder គូជាមួយនឹងទ្វីប (`continent`) យើងបែងចែក `gdpPercap` ត្រង់ចំណុចភាគរយទី $33.33\\%$ និង $66.66\\%$ ទៅជា ៣ ក្រុមគឺ `Developing` (កំពុងអភិវឌ្ឍ), `Emerging` (កំពុងលូតលាស់) និង `Developed` (អភិវឌ្ឍន៍ហើយ)។ ដោយសារយើងចែកត្រង់ចំណុច ១ ភាគ ៣ នៃពិភពលោក នោះបើមិនដឹងទ្វីបទេ ឱកាសទស្សន៍ទាយត្រូវគឺ $33.33\\%$ ស្មើគ្នា។ ប៉ុន្តែ សូមមើលនិយមន័យដ៏ជ្រាលជ្រៅនៅលើស្លាយ៖ **«ការដឹងឈ្មោះទ្វីប ធ្វើឱ្យឱកាសនៃការទស្សន៍ទាយកម្រិត GDP របស់ប្រទេសមួយប្រែប្រួល»**—នេះគឺជានិយមន័យនៃប្រូបាបមានលក្ខខណ្ឌ $P(Y \\mid X) \\neq P(Y)$! នៅលើក្រាហ្វ Treemap ខាងស្តាំ យើងឃើញច្បាស់ថា អូសេអានីមានប្រទេសអភិវឌ្ឍន៍ហើយ 100%, អឺរ៉ុបមាន ~77% អភិវឌ្ឍន៍ហើយ និង 0% កំពុងអភិវឌ្ឍ, អាមេរិកមាន ~68% កំពុងលូតលាស់, អាហ្វ្រិកមាន ~71% កំពុងអភិវឌ្ឍ ខណៈដែលអាស៊ីមានសមាមាត្រប្រហាក់ប្រហែលគ្នាទាំង ៣ ក្រុម។',
      },
      practicalApplication: {
        scenarioTitle: {
          en: 'Market Basket & Customer Tier Segmentation via Looker Studio Treemaps',
          km: 'ការបែងចែកចំណែកទីផ្សារ និងក្រុមអតិថិជនតាមរយៈក្រាហ្វ Treemap ក្នុង Looker Studio',
        },
        description: {
          en: 'Telecom operators in Cambodia use Looker Studio Treemaps with Province as the parent dimension and Data Plan Tier (Basic, Standard, Unlimited) as the sub-dimension to see how subscription preferences shift across urban vs rural provinces.',
          km: 'ក្រុមហ៊ុនទូរគមនាគមន៍នៅកម្ពុជាប្រើប្រាស់ក្រាហ្វ Treemap ក្នុង Looker Studio ដោយដាក់ «ខេត្ត/រាជធានី» ជាក្រុមធំ និង «កញ្ចប់អ៊ីនធឺណិត (Basic, Standard, Unlimited)» ជាក្រុមរង ដើម្បីមើលថាតើការជ្រើសរើសកញ្ចប់សេវាប្រែប្រួលយ៉ាងដូចម្តេចរវាងទីក្រុង និងជនបទ។',
        },
        impactMetric: 'Alters GDP tier prediction accuracy from 33.3% baseline to >73% when continent is known',
      },
    },
  },

  // ==========================================
  // SLIDE 28
  // ==========================================
  {
    pageNumber: 28,
    slideFooterNumber: '28',
    sectionTag: {
      en: '2.4 Qualitative vs Qualitative — Stacked & Grouped Barplots',
      km: '2.4 គុណភាព ទល់នឹង គុណភាព — ក្រាហ្វសសរត្រួតគ្នា (Stacked) និងក្រាហ្វសសរផ្តុំគ្នា (Grouped)',
    },
    simulatorMode: 'qual_stacked_grouped_bars',
    pageIdentity: {
      titleEn: 'Visualization: Stacked/Grouped Barplots — Categorical GDP vs Continent',
      titleKm: 'ការបង្ហាញជាក្រាហ្វ៖ ក្រាហ្វសសរត្រួតគ្នា និងផ្តុំគ្នា (Stacked & Grouped Barplots)',
      themeName: {
        en: '100% Stacked Percentage vs Grouped Frequency Studio',
        km: 'ផ្ទៃប្រៀបធៀបក្រាហ្វសសរត្រួតគ្នាគិតជាភាគរយ (100% Stacked) និងក្រាហ្វសសរផ្តុំគ្នាគិតជាចំនួនរាប់',
      },
      canvasBgHex: '#F8FAFC',
      surfaceCardHex: '#FFFFFF',
      primaryAccentHex: '#6366F1',
      secondaryAccentHex: '#10B981',
      textPrimaryHex: '#0F172A',
      hierarchyRationale: {
        en: 'Uses the exact 3-tier color coding from Slide 28 across both charts: `Developing` = Indigo Blue (#6366F1), `Emerging` = Coral Red (#EF4444), and `Developed` = Emerald Green (#10B981).',
        km: 'ប្រើប្រាស់កូដពណ៌ទាំង ៣ កម្រិតដូចក្នុងស្លាយទី ២៨ សម្រាប់ក្រាហ្វទាំងពីរ គឺ `Developing` (កំពុងអភិវឌ្ឍ) = ពណ៌ស្វាយខៀវ (#6366F1), `Emerging` (កំពុងលូតលាស់) = ពណ៌ក្រហមទឹកក្រូច (#EF4444), និង `Developed` (អភិវឌ្ឍន៍ហើយ) = ពណ៌បៃតង (#10B981)។',
      },
    },
    wireframe: {
      headerSection: {
        en: 'Top Header: "Visualization: Stacked/Grouped Barplots / ការបង្ហាញជាក្រាហ្វ៖ ក្រាហ្វសសរត្រួតគ្នា និងក្រាហ្វសសរផ្តុំគ្នា".',
        km: 'ផ្នែកខាងលើ៖ ចំណងជើង «Visualization: Stacked/Grouped Barplots / ក្រាហ្វសសរត្រួតគ្នា និងផ្តុំគ្នា»។',
      },
      leftZone: {
        en: 'Left Chart (50% width): "Stacked Barplot of Categorical GDP vs Continent" (Y-axis: `Percent` 0 to 100%; X-axis: Africa, Americas, Asia, Europe, Oceania) with exact percentage labels printed inside every segment (e.g., Africa: 71.15% Developing, 21.15% Emerging, 7.69% Developed).',
        km: 'ក្រាហ្វខាងឆ្វេង (ទទឹង ៥០%)៖ «Stacked Barplot of Categorical GDP vs Continent» (អ័ក្ស Y៖ ភាគរយពី 0 ដល់ 100%; អ័ក្ស X៖ ទ្វីបទាំង ៥) ដោយមានបង្ហាញតួលេខភាគរយជាក់លាក់នៅក្នុងរបារនីមួយៗ (ឧ. អាហ្វ្រិក៖ 71.15%, 21.15%, 7.69%)។',
      },
      rightZone: {
        en: 'Right Chart (50% width): "Grouped Barplot of Categorical GDP vs Continent" (Y-axis: `Freq` count of countries 0 to 38; X-axis: Africa, Americas, Asia, Europe, Oceania) showing absolute counts side-by-side.',
        km: 'ក្រាហ្វខាងស្តាំ (ទទឹង ៥០%)៖ «Grouped Barplot of Categorical GDP vs Continent» (អ័ក្ស Y៖ ចំនួនប្រទេស `Freq` ពី 0 ដល់ 38; អ័ក្ស X៖ ទ្វីបទាំង ៥) ដែលបង្ហាញចំនួនប្រទេសពិតប្រាកដដាក់ទន្ទឹមគ្នា។',
      },
      bottomOrTopBar: {
        en: 'Bottom Golden Rule Banner: "The more distinct the bars, the stronger the association between the variables."',
        km: 'របារវិធានមាសខាងក្រោម៖ «កាលណារបារនៃក្រុមនីមួយៗកាន់តែមានទម្រង់ខុសគ្នាខ្លាំង នោះទំនាក់ទំនងរវាងអថេរទាំងពីរកាន់តែរឹងមាំ»។',
      },
      gridAllocation: '6 Columns Left (100% Stacked Percent Barplot) + 6 Columns Right (Grouped Frequency Barplot)',
    },
    chartMetricsMath: {
      scorecards: [
        {
          label: { en: 'Africa Developing Share', km: 'សមាមាត្រប្រទេសកំពុងអភិវឌ្ឍនៅអាហ្វ្រិក' },
          value: '71.15% (37)',
          metricField: 'pct_africa_developing',
          aggregation: 'Column Percent & Count',
          comparisonNote: { en: '21.15% Emerging | 7.69% Developed', km: '21.15% កំពុងលូតលាស់ | 7.69% អភិវឌ្ឍន៍ហើយ' },
        },
        {
          label: { en: 'Americas Emerging Share', km: 'សមាមាត្រប្រទេសកំពុងលូតលាស់នៅអាមេរិក' },
          value: '68.00% (17)',
          metricField: 'pct_americas_emerging',
          aggregation: 'Column Percent & Count',
          comparisonNote: { en: '4.0% Developing | 28.0% Developed', km: '4.0% កំពុងអភិវឌ្ឍ | 28.0% អភិវឌ្ឍន៍ហើយ' },
        },
        {
          label: { en: 'Asia Balanced Split', km: 'សមាមាត្របែងចែកស្មើគ្នានៅអាស៊ី' },
          value: '30.3% / 33.3% / 36.4%',
          metricField: 'pct_asia_split',
          aggregation: 'Column Percent',
          comparisonNote: { en: '10 Developing | 11 Emerging | 12 Developed', km: '១០ កំពុងអភិវឌ្ឍ | ១១ កំពុងលូតលាស់ | ១២ អភិវឌ្ឍន៍ហើយ' },
        },
        {
          label: { en: 'Europe & Oceania Developed', km: 'សមាមាត្រអភិវឌ្ឍន៍ហើយនៅអឺរ៉ុប និងអូសេអានី' },
          value: '76.67% & 100%',
          metricField: 'pct_europe_oceania',
          aggregation: 'Column Percent',
          comparisonNote: { en: '0% Developing in both continents!', km: 'គ្មានប្រទេសកំពុងអភិវឌ្ឍ (0%) នៅក្នុងទ្វីបទាំងពីរនេះទេ!' },
        },
      ],
      charts: [
        {
          chartType: {
            en: 'Chart 1: Looker Studio 100% Stacked Column Chart (`continent` vs `gdp_category`)',
            km: 'ក្រាហ្វទី ១៖ ក្រាហ្វសសរត្រួតគ្នា 100% (100% Stacked Column Chart)',
          },
          dimensions: ['continent'],
          breakdownDimension: 'gdp_category',
          metrics: ['COUNT(country) with Stack = 100%'],
          sorting: 'continent ASC',
          stylingNote: {
            en: 'Enable "Stack bars" and "100% stacking" in Looker Studio Style panel, and check "Show data labels" to display 71.15%, 68.0%, 36.36%, 76.67%, 100.0%.',
            km: 'បើកមុខងារ «Stack bars» និង «100% stacking» ក្នុង Looker Studio រួចធីក «Show data labels» ដើម្បីបង្ហាញតួលេខភាគរយដូចក្នុងស្លាយទី ២៨។',
          },
        },
        {
          chartType: {
            en: 'Chart 2: Looker Studio Grouped / Clustered Column Chart (`continent` vs `gdp_category` Freq)',
            km: 'ក្រាហ្វទី ២៖ ក្រាហ្វសសរផ្តុំគ្នា (Grouped Column Chart) បង្ហាញចំនួនប្រទេសពិតប្រាកដ',
          },
          dimensions: ['continent'],
          breakdownDimension: 'gdp_category',
          metrics: ['COUNT(country)'],
          sorting: 'continent ASC',
          stylingNote: {
            en: 'Uncheck "Stack bars" so Developing, Emerging, and Developed bars stand side-by-side for each continent, with Y-axis showing raw frequency (0 to 37).',
            km: 'ដកធីក «Stack bars» ដើម្បីឱ្យសសរទាំង ៣ ឈរទន្ទឹមគ្នាសម្រាប់ទ្វីបនីមួយៗ ដោយអ័ក្ស Y បង្ហាញចំនួនប្រទេសពិតប្រាកដ (ពី 0 ដល់ 37)។',
          },
        },
      ],
      formulas: [
        {
          title: { en: 'Conditional Column Percentage vs Joint Absolute Frequency', km: 'រូបមន្តគណនាភាគរយតាមជួរឈរ (Conditional Percentage) និងប្រេកង់ដាច់ខាត (Frequency)' },
          equation: 'Percent(g, c) = (n_{g,c} / n_{g,.}) × 100% ,    where ∑_{c=1}^{3} Percent(g, c) = 100%  for each continent g',
          variables: [
            { symbol: 'n_{g,c}', en: 'Absolute frequency (height of bar in Right Grouped Barplot) of countries in continent g and GDP category c', km: 'ចំនួនប្រទេសពិតប្រាកដ (កម្ពស់សសរនៅក្នុងក្រាហ្វខាងស្តាំ) ដែលស្ថិតក្នុងទ្វីប g និងកម្រិត GDP c' },
            { symbol: 'n_{g,.}', en: 'Total number of countries in continent g (Africa=52, Americas=25, Asia=33, Europe=30, Oceania=2)', km: 'ចំនួនប្រទេសសរុបនៅក្នុងទ្វីប g (អាហ្វ្រិក=52, អាមេរិក=25, អាស៊ី=33, អឺរ៉ុប=30, អូសេអានី=2)' },
            { symbol: 'Percent(g, c)', en: 'Conditional percentage (height of segment in Left 100% Stacked Barplot) within continent g', km: 'ភាគរយតាមលក្ខខណ្ឌ (កម្ពស់ផ្នែកនៃសសរនៅក្នុងក្រាហ្វខាងឆ្វេង) ធៀបនឹងទ្វីប g នីមួយៗ' },
          ],
        },
      ],
    },
    controls: [
      {
        controlType: { en: 'Drop-down List Control (Continent / GDP Tier Filter)', km: 'តម្រងជ្រើសរើសទ្វីប និងកម្រិត GDP' },
        field: 'continent',
        defaultState: 'All 5 Continents',
        purpose: {
          en: 'Lets students filter both barplots and inspect how conditional percentages and raw counts complement each other.',
          km: 'អនុញ្ញាតឱ្យនិស្សិតច្រោះមើលក្រាហ្វទាំងពីរ ដើម្បីយល់ពីរបៀបដែលតួលេខភាគរយ (ឆ្វេង) និងចំនួនប្រទេសពិតប្រាកដ (ស្តាំ) បំពេញបន្ថែមឱ្យគ្នា។',
        },
      },
    ],
    expandedContent: {
      onScreenText: {
        heading: {
          en: 'Comparing 100% Stacked Barplots and Grouped Frequency Barplots',
          km: 'ការប្រៀបធៀបក្រាហ្វសសរត្រួតគ្នាគិតជាភាគរយ (Stacked) និងក្រាហ្វសសរផ្តុំគ្នាគិតជាចំនួន (Grouped)',
        },
        bullets: [
          {
            en: 'Left Chart (100% Stacked Barplot): Normalizes every continent to 100% so we can directly compare conditional distributions: Africa (71.15% Developing, 21.15% Emerging, 7.69% Developed), Americas (4.0% / 68.0% / 28.0%), Asia (30.3% / 33.33% / 36.36%), Europe (0% / 23.33% / 76.67%), Oceania (100.0% Developed).',
            km: 'ក្រាហ្វខាងឆ្វេង (100% Stacked Barplot)៖ កំណត់ទ្វីបនីមួយៗឱ្យស្មើ 100% ដើម្បីងាយស្រួលប្រៀបធៀបសមាមាត្រ៖ អាហ្វ្រិក (71.15% កំពុងអភិវឌ្ឍ, 21.15% កំពុងលូតលាស់, 7.69% អភិវឌ្ឍន៍ហើយ), អាមេរិក (4.0% / 68.0% / 28.0%), អាស៊ី (30.3% / 33.33% / 36.36%), អឺរ៉ុប (0% / 23.33% / 76.67%) និងអូសេអានី (100.0% អភិវឌ្ឍន៍ហើយ)។',
          },
          {
            en: 'Right Chart (Grouped Barplot): Plots raw country counts (`Freq`) on the Y-axis, revealing that Oceania’s "100.0% Developed" green bar represents only 2 countries, whereas Africa’s "71.15% Developing" blue bar represents 37 countries!',
            km: 'ក្រាហ្វខាងស្តាំ (Grouped Barplot)៖ បង្ហាញចំនួនប្រទេសពិតប្រាកដ (`Freq`) លើអ័ក្ស Y ដែលធ្វើឱ្យយើងឃើញថា «100.0% អភិវឌ្ឍន៍ហើយ» របស់អូសេអានី តាមពិតមានតែ ២ ប្រទេសប៉ុណ្ណោះ ខណៈដែល «71.15% កំពុងអភិវឌ្ឍ» របស់អាហ្វ្រិកមានដល់ទៅ ៣៧ ប្រទេស!',
          },
          {
            en: 'Core Rule: The more distinct the bars across categories, the stronger the association between the qualitative variables.',
            km: 'វិធានស្នូល៖ កាលណាសសរនៃក្រុមនីមួយៗកាន់តែមានទម្រង់ខុសគ្នាខ្លាំង នោះទំនាក់ទំនងរវាងអថេរគុណភាពទាំងពីរកាន់តែរឹងមាំ។',
          },
        ],
        callout: {
          en: 'Why Pairing Both Charts Is Essential in BI: A 100% Stacked Barplot shows relative proportions clearly but hides sample size (making 2 countries in Oceania look as tall as 52 countries in Africa); the Grouped Barplot preserves sample size!',
          km: 'ហេតុអ្វីការដាក់ក្រាហ្វទាំងពីរទន្ទឹមគ្នាមានសារៈសំខាន់ក្នុង BI៖ ក្រាហ្វសសរត្រួតគ្នា 100% បង្ហាញសមាមាត្រភាគរយបានយ៉ាងច្បាស់ ប៉ុន្តែលាក់បាំងទំហំគំរូ (ធ្វើឱ្យ ២ ប្រទេសនៅអូសេអានីមានកម្ពស់ស្មើនឹង ៥២ ប្រទេសនៅអាហ្វ្រិក) ចំណែកក្រាហ្វសសរផ្តុំគ្នាជួយបង្ហាញចំនួនពិតប្រាកដ!',
        },
      },
      deepDiveExplanation: {
        en: 'Slide 28 presents the workhorse visualizations of Qualitative vs Qualitative analysis in Business Intelligence: the **100% Stacked Barplot** and the **Grouped (Clustered) Barplot**. Notice how each chart solves the other’s blind spot. On the left, the 100% Stacked Barplot graphs the conditional probability distribution $P(\\text{GDP Category} \\mid \\text{Continent})$. If the two variables were statistically independent, every single vertical column would have identical color splits ($33.3\\%$ blue, $33.3\\%$ red, $33.3\\%$ green). Instead, the color profiles shift dramatically from overwhelmingly blue in Africa ($71.15\\%$) to overwhelmingly red in the Americas ($68.0\\%$) to overwhelmingly green in Europe ($76.67\\%$) and Oceania ($100.0\\%$). That visual distinction between bars is the geometric signature of association! On the right, the Grouped Barplot switches the Y-axis from `Percent` to `Freq` (raw counts $n_{i,j}$) while still printing the conditional percentage labels on the bars—immediately alerting the viewer to the massive sample size difference between Africa ($52$ nations) and Oceania ($2$ nations).',
        km: 'ស្លាយទី ២៨ បង្ហាញពីក្រាហ្វដ៏ពេញនិយមបំផុតទាំងពីរសម្រាប់ការវិភាគអថេរគុណភាព ទល់នឹង អថេរគុណភាព នៅក្នុងរបាយការណ៍ BI គឺ **ក្រាហ្វសសរត្រួតគ្នា 100% (100% Stacked Barplot)** និង **ក្រាហ្វសសរផ្តុំគ្នា (Grouped Barplot)**។ ក្រាហ្វទាំងពីរនេះជួយបំពេញចំណុចខ្វះខាតឱ្យគ្នាទៅវិញទៅមកយ៉ាងល្អឥតខ្ចោះ។ នៅខាងឆ្វេង ក្រាហ្វសសរត្រួតគ្នា 100% បង្ហាញពីការបែងចែកប្រូបាបមានលក្ខខណ្ឌ $P(\\text{GDP Category} \\mid \\text{Continent})$។ ប្រសិនបើអថេរទាំងពីរឯករាជ្យពីគ្នា នោះសសរទាំង ៥ នឹងមានកម្រិតពណ៌ស្មើៗគ្នាទាំងអស់ ($33.3\\%$ ខៀវ, $33.3\\%$ ក្រហម, $33.3\\%$ បៃតង)។ ប៉ុន្តែជាក់ស្តែង យើងឃើញពណ៌ប្រែប្រួលយ៉ាងខ្លាំង ពីពណ៌ខៀវភាគច្រើននៅអាហ្វ្រិក ($71.15\\%$) ទៅជាពណ៌ក្រហមភាគច្រើននៅអាមេរិក ($68.0\\%$) និងពណ៌បៃតងភាគច្រើននៅអឺរ៉ុប ($76.67\\%$) និងអូសេអានី ($100.0\\%$)។ ភាពខុសគ្នារវាងសសរទាំងនេះហើយគឺជាសញ្ញាបញ្ជាក់ពីទំនាក់ទំនងយ៉ាងខ្លាំង! នៅខាងស្តាំ ក្រាហ្វសសរផ្តុំគ្នាប្តូរអ័ក្ស Y ពីភាគរយ (`Percent`) មកជាចំនួនរាប់ (`Freq`) ដែលជួយឱ្យអ្នកមើលដឹងភ្លាមថា ទ្វីបអូសេអានីមានតែ ២ ប្រទេសប៉ុណ្ណោះ ខណៈដែលអាហ្វ្រិកមានដល់ទៅ ៥២ ប្រទេស។',
      },
      practicalApplication: {
        scenarioTitle: {
          en: 'Loan Risk Tier Breakdown Across Provincial Branches in Banking Dashboards',
          km: 'ការបែងចែកកម្រិតហានិភ័យឥណទានតាមសាខាខេត្តនៅក្នុងផ្ទាំងគ្រប់គ្រងធនាគារ',
        },
        description: {
          en: 'A commercial bank places a 100% Stacked Bar Chart (Loan Grade A/B/C share per branch) next to a Grouped Bar Chart (Absolute number of A/B/C loans per branch) so risk officers see both portfolio quality proportions and total loan volume.',
          km: 'ធនាគារពាណិជ្ជដាក់ក្រាហ្វសសរត្រួតគ្នា 100% (សមាមាត្រឥណទានកម្រិត A/B/C តាមសាខា) ទន្ទឹមនឹងក្រាហ្វសសរផ្តុំគ្នា (ចំនួនគណនីឥណទាន A/B/C ពិតប្រាកដតាមសាខា) ដើម្បីឱ្យមន្ត្រីគ្រប់គ្រងហានិភ័យមើលឃើញទាំងគុណភាពឥណទានជាភាគរយ និងទំហំឥណទានសរុប។',
        },
        impactMetric: 'Simultaneously communicates conditional probabilities (%) and absolute frequencies (n)',
      },
    },
  },
];
