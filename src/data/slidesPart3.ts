import { SlideBlueprint } from '../types/blueprint';

export const SLIDES_PART_3: SlideBlueprint[] = [
  // ==========================================
  // SLIDE 29
  // ==========================================
  {
    pageNumber: 29,
    slideFooterNumber: '29',
    sectionTag: {
      en: '2.4 Qualitative vs Qualitative — Chi-Square (χ²) Test Theory',
      km: '2.4 គុណភាព ទល់នឹង គុណភាព — ទ្រឹស្តីនៃតេស្ត Chi-Square (χ² Test)',
    },
    simulatorMode: 'chi_square_contingency_theory',
    pageIdentity: {
      titleEn: 'Indicator: χ² Test — Contingency Table, Observed vs Expected & Hypothesis Testing',
      titleKm: 'សូចនាករ៖ តេស្ត χ² (Chi-Square) — តារាងខ្វែង ប្រេកង់អង្កេតធៀបនឹងប្រេកង់រំពឹងទុក និងការធ្វើតេស្តសម្មតិកម្ម',
      themeName: {
        en: 'Contingency Algebra & Hypothesis Testing Theme',
        km: 'ផ្ទៃបង្ហាញពីជគណិតនៃតារាងខ្វែង និងការធ្វើតេស្តសម្មតិកម្មស្ថិតិ',
      },
      canvasBgHex: '#F8FAFC',
      surfaceCardHex: '#FFFFFF',
      primaryAccentHex: '#2563EB',
      secondaryAccentHex: '#DC2626',
      textPrimaryHex: '#0F172A',
      hierarchyRationale: {
        en: 'Preserves Slide 29’s color-coded contingency notation: Row variable X and row marginals n_{i,.} / O_{i,.} in #2563EB Blue; Column variable Y and column marginals n_{.,j} / O_{.,j} in #DC2626 Crimson Red; and green callout box for the χ²(df) asymptotic distribution.',
        km: 'រក្សាកូដពណ៌គណិតវិទ្យាដូចក្នុងស្លាយទី ២៩ គឺអថេរជួរដេក X និងផលបូកជួរដេក n_{i,.} / O_{i,.} ជាពណ៌ខៀវ (#2563EB), អថេរជួរឈរ Y និងផលបូកជួរឈរ n_{.,j} / O_{.,j} ជាពណ៌ក្រហម (#DC2626), និងប្រអប់ពណ៌បៃតងសម្រាប់ការបែងចែក χ²(df)។',
      },
    },
    wireframe: {
      headerSection: {
        en: 'Top Header: "Indicator: χ² Test / សូចនាករ៖ តេស្ត χ² (Chi-Square Test)".',
        km: 'ផ្នែកខាងលើ៖ ចំណងជើង «Indicator: χ² Test / សូចនាករ៖ តេស្ត χ² (Chi-Square Test)»។',
      },
      leftZone: {
        en: 'Left Column (50% width): Two-way Contingency Table of nominal variables X (rows X₁..X_I) and Y (columns Y₁..Y_J) with joint frequencies n_{i,j}, row totals n_{i,.}, column totals n_{.,j}, grand total N, plus Observed relative frequency O_{i,j} and Expected relative frequency E_{i,j}.',
        km: 'ជួរឈរខាងឆ្វេង (ទទឹង ៥០%)៖ តារាងខ្វែង (Contingency Table) នៃអថេរគុណភាព X (ជួរដេក X₁..X_I) និង Y (ជួរឈរ Y₁..Y_J) រួមជាមួយប្រេកង់ n_{i,j}, ប្រេកង់ធៀបអង្កេត O_{i,j} និងប្រេកង់ធៀបរំពឹងទុក E_{i,j}។',
      },
      rightZone: {
        en: 'Right Column (50% width): χ² Hypothesis Test formulation (H₀: X is independent of Y vs H₁: X is NOT independent of Y), χ²-distance equation, Degrees of Freedom df = (I - 1)(J - 1), and p-value rejection rule (p < 0.05 ⇒ reject H₀).',
        km: 'ជួរឈរខាងស្តាំ (ទទឹង ៥០%)៖ សម្មតិកម្មតេស្ត χ² (H₀: X ឯករាជ្យពី Y ទល់នឹង H₁: X មិនឯករាជ្យពី Y), រូបមន្តចម្ងាយ χ², កម្រិតសេរីភាព df = (I - 1)(J - 1) និងវិធានបដិសេធ H₀ នៅពេល p-value < 0.05។',
      },
      bottomOrTopBar: {
        en: 'Bottom interactive 2×2 / 5×3 Contingency Cell Inspector showing how (O_{i,j} - E_{i,j})² / E_{i,j} measures departure from independence.',
        km: 'របារគណនាខាងក្រោមដែលបង្ហាញពីរបៀបគណនា (O_{i,j} - E_{i,j})² / E_{i,j} សម្រាប់ក្រឡានីមួយៗនៃតារាងខ្វែង។',
      },
      gridAllocation: '6 Columns Left (Contingency Table & O_ij / E_ij) + 6 Columns Right (Hypotheses, χ² Formula & p-value Rule)',
    },
    chartMetricsMath: {
      scorecards: [
        {
          label: { en: 'Null Hypothesis (H₀)', km: 'សម្មតិកម្មសូន្យ (H₀)' },
          value: 'O_{i,j} ≈ E_{i,j}',
          metricField: 'null_hypothesis_condition',
          aggregation: 'Independence',
          comparisonNote: { en: 'X is independent of Y', km: 'អថេរ X ឯករាជ្យពីអថេរ Y (គ្មានទំនាក់ទំនង)' },
        },
        {
          label: { en: 'Degrees of Freedom (df)', km: 'កម្រិតសេរីភាព (Degrees of Freedom)' },
          value: '(I - 1)(J - 1)',
          metricField: 'chi_sq_df',
          aggregation: 'Grid Dimension Formula',
          comparisonNote: { en: 'I = rows of X, J = columns of Y', km: 'I = ចំនួនជួរដេក X, J = ចំនួនជួរឈរ Y' },
        },
        {
          label: { en: 'Decision Threshold', km: 'កម្រិតសម្រេចចិត្តបដិសេធ H₀' },
          value: 'p-value < 0.05',
          metricField: 'alpha_threshold',
          aggregation: 'Significance Level α',
          comparisonNote: { en: 'Small p-value ⇒ Reject H₀ (Dependent!)', km: 'p-value តូច (< 0.05) ⇒ បដិសេធ H₀ (មានទំនាក់ទំនង!)' },
        },
      ],
      charts: [
        {
          chartType: {
            en: 'Looker Studio Pivot Contingency Table (Observed vs Expected Frequencies)',
            km: 'តារាងខ្វែង Pivot Table បង្ហាញការប្រៀបធៀបរវាងតម្លៃអង្កេត (Observed) និងតម្លៃរំពឹងទុក (Expected)',
          },
          dimensions: ['row_category_X_i', 'col_category_Y_j'],
          metrics: ['n_ij', 'O_ij', 'E_ij', 'cell_chi_square_contribution'],
          sorting: 'row_category_X_i ASC',
          stylingNote: {
            en: 'Displays the symbolic contingency structure alongside empirical Gapminder Continent × GDP Category counts.',
            km: 'បង្ហាញទាំងទម្រង់តារាងនិមិត្តសញ្ញាគណិតវិទ្យា និងតួលេខជាក់ស្តែងនៃទ្វីប × កម្រិត GDP។',
          },
        },
      ],
      formulas: [
        {
          title: { en: 'Observed vs Expected Relative Frequencies & Chi-Square Distance', km: 'រូបមន្តប្រេកង់ធៀបអង្កេត ប្រេកង់ធៀបរំពឹងទុក និងចម្ងាយ Chi-Square' },
          equation: 'O_{i,j} = n_{i,j} / N ,    E_{i,j} = O_{i,.} × O_{.,j} = (n_{i,.} · n_{.,j}) / N² ,    χ²(X, Y) = ∑_{i,j} (O_{i,j} - E_{i,j})² / E_{i,j}  [or N ∑ (O_{i,j} - E_{i,j})² / E_{i,j}]',
          variables: [
            { symbol: 'n_{i,j}', en: 'Observed joint frequency (count) of records having X = X_i and Y = Y_j', km: 'ចំនួនរាប់ (ប្រេកង់) នៃទិន្នន័យដែលស្ថិតក្នុងជួរដេក X_i និងជួរឈរ Y_j រួមគ្នា' },
            { symbol: 'n_{i,.} , n_{.,j} , N', en: 'Row marginal total for X_i, column marginal total for Y_j, and grand total sample size N', km: 'ផលបូកសរុបតាមជួរដេក X_i, ផលបូកសរុបតាមជួរឈរ Y_j និងទំហំគំរូសរុប N' },
            { symbol: 'O_{i,j}', en: 'Observed relative frequency (empirical joint probability P̂(X = X_i, Y = Y_j) = n_{i,j} / N)', km: 'ប្រេកង់ធៀបអង្កេត (ប្រូបាបរួមជាក់ស្តែង n_{i,j} / N)' },
            { symbol: 'E_{i,j}', en: 'Expected relative frequency under independence H₀: P(X=X_i) × P(Y=Y_j) = O_{i,.} × O_{.,j}', km: 'ប្រេកង់ធៀបរំពឹងទុកក្រោមសម្មតិកម្មឯករាជ្យ H₀ គឺ O_{i,.} × O_{.,j}' },
            { symbol: 'df = (I - 1)(J - 1)', en: 'Degrees of freedom of the asymptotic χ² distribution under H₀', km: 'កម្រិតសេរីភាពនៃការបែងចែក χ² ក្រោមសម្មតិកម្ម H₀' },
            { symbol: 'p-value', en: 'Probability P(χ²(df) ≥ χ²(X,Y)) of observing a discrepancy at least as large by random chance under H₀', km: 'ប្រូបាប P(χ²(df) ≥ χ²(X,Y)) នៃការជួបប្រទះគម្លាតធំបែបនេះដោយចៃដន្យប្រសិនបើ H₀ ពិត' },
          ],
        },
      ],
    },
    controls: [
      {
        controlType: { en: 'Drop-down List Control (Significance Level α)', km: 'ប៊ូតុងជ្រើសរើសកម្រិតសារៈសំខាន់ α (0.05 / 0.01 / 0.001)' },
        field: 'alpha_level',
        defaultState: 'α = 0.05 (Standard 95% Confidence)',
        purpose: {
          en: 'Lets students test the rejection rule (p-value < α ⇒ reject H₀) at different confidence levels.',
          km: 'អនុញ្ញាតឱ្យនិស្សិតសាកល្បងវិធានបដិសេធសម្មតិកម្ម H₀ នៅតាមកម្រិតជឿជាក់ផ្សេងៗគ្នា។',
        },
      },
    ],
    expandedContent: {
      onScreenText: {
        heading: {
          en: 'Testing Qualitative Independence with the Chi-Square (χ²) Test',
          km: 'ការពិនិត្យភាពឯករាជ្យរវាងអថេរគុណភាពដោយប្រើតេស្ត Chi-Square (χ² Test)',
        },
        bullets: [
          {
            en: 'Contingency Table: Summarizes two nominal/qualitative variables X (with I categories) and Y (with J categories) via cell frequencies n_{i,j}, row totals n_{i,.}, column totals n_{.,j}, and grand total N.',
            km: 'តារាងខ្វែង (Contingency Table)៖ សង្ខេបអថេរគុណភាពពីរ X (មាន I ក្រុម) និង Y (មាន J ក្រុម) តាមរយៈប្រេកង់ក្នុងក្រឡានីមួយៗ n_{i,j}, ផលបូកជួរដេក n_{i,.}, ផលបូកជួរឈរ n_{.,j} និងចំនួនសរុប N។',
          },
          {
            en: 'Observed vs Expected Relative Frequency: O_{i,j} = n_{i,j}/N is what we actually observe; E_{i,j} = O_{i,.} × O_{.,j} is what we expect if X and Y are completely independent!',
            km: 'ប្រេកង់ធៀបអង្កេត ទល់នឹង រំពឹងទុក៖ O_{i,j} = n_{i,j}/N គឺជាអ្វីដែលយើងរាប់ឃើញជាក់ស្តែង ចំណែក E_{i,j} = O_{i,.} × O_{.,j} គឺជាអ្វីដែលយើងរំពឹងទុកប្រសិនបើ X និង Y ឯករាជ្យពីគ្នាទាំងស្រុង!',
          },
          {
            en: 'χ² Hypothesis Test: H₀: X is independent of Y (O_{i,j} ≈ E_{i,j}) vs H₁: X is NOT independent of Y.',
            km: 'សម្មតិកម្មនៃតេស្ត χ²៖ H₀: X ឯករាជ្យពី Y (O_{i,j} ≈ E_{i,j}) ទល់នឹង H₁: X មិនឯករាជ្យពី Y (មានទំនាក់ទំនងនឹងគ្នា)។',
          },
          {
            en: 'In practice: Under H₀, χ²(X,Y) ~ χ²(df) with df = (I - 1)(J - 1). We compute p-value = P(χ²(df) ≥ χ²(X,Y)). A small p-value (< 0.05) ⇒ reject H₀!',
            km: 'ក្នុងការអនុវត្តជាក់ស្តែង៖ ក្រោមសម្មតិកម្ម H₀ តម្លៃ χ²(X,Y) ដើរតាមការបែងចែក χ²(df) ដែលមាន df = (I - 1)(J - 1)។ ប្រសិនបើ p-value តូច (< 0.05) ⇒ យើងបដិសេធ H₀ (សន្និដ្ឋានថាមានទំនាក់ទំនងយ៉ាងពិតប្រាកដ)!',
          },
        ],
        callout: {
          en: 'Important Formula Note: In standard statistical software (like `scipy.stats.chi2_contingency`), the test statistic that follows χ²(df) uses raw counts N·O_{i,j} and N·E_{i,j} (so χ²_stat = N × ∑ (O_{i,j} - E_{i,j})² / E_{i,j}).',
          km: 'ចំណាំសំខាន់លើរូបមន្ត៖ នៅក្នុងកម្មវិធីស្ថិតិស្តង់ដារ (ដូចជា `scipy.stats.chi2_contingency`) តម្លៃស្ថិតិ χ² ដែលដើរតាមការបែងចែក χ²(df) ប្រើចំនួនរាប់ពិត (គុណនឹងទំហំគំរូ N) ដូចដែលយើងនឹងឃើញនៅក្នុងឧទាហរណ៍កូវីដ-១៩ នៅស្លាយទី ៣១ (χ² ≈ 3298)។',
        },
      },
      deepDiveExplanation: {
        en: 'Slide 29 introduces Karl Pearson’s 1900 **Chi-Square ($\\chi^2$) Test of Independence**, the foundational inferential tool for Case 3 (Qualitative vs Qualitative). Recall from basic probability theory that two events $A$ and $B$ are independent if and only if $P(A \\cap B) = P(A) \\times P(B)$. In a contingency table with $I$ rows and $J$ columns, the marginal probability of row $i$ is estimated by $O_{i,\\cdot} = n_{i,\\cdot}/N$, and the marginal probability of column $j$ is estimated by $O_{\\cdot,j} = n_{\\cdot,j}/N$. Therefore, if the Null Hypothesis $H_0$ (independence) is true, the expected joint proportion in cell $(i,j)$ must be the product $E_{i,j} = O_{i,\\cdot} \\times O_{\\cdot,j} = \\frac{n_{i,\\cdot} n_{\\cdot,j}}{N^2}$ (or in raw count scale, $e_{i,j} = N E_{i,j} = \\frac{n_{i,\\cdot} n_{\\cdot,j}}{N}$). The $\\chi^2$-distance sums the squared discrepancies $(O_{i,j} - E_{i,j})^2$ relative to $E_{i,j}$ across all $I \\times J$ cells. Why are the degrees of freedom $\\text{df} = (I - 1)(J - 1)$? Because once you fill in $(I - 1)$ rows and $(J - 1)$ columns of a table with fixed row and column totals, the remaining last row and last column are completely determined by subtraction!',
        km: 'ស្លាយទី ២៩ បង្ហាញពី **តេស្តឯករាជ្យភាព Chi-Square ($\\chi^2$ Test of Independence)** របស់លោក Karl Pearson (១៩០០) ដែលជាឧបករណ៍ស្នូលសម្រាប់ករណីទី ៣ (គុណភាព ទល់នឹង គុណភាព)។ សូមរំលឹកពីទ្រឹស្តីប្រូបាបមូលដ្ឋានថា ព្រឹត្តិការណ៍ពីរ $A$ និង $B$ ឯករាជ្យពីគ្នា លុះត្រាតែ $P(A \\cap B) = P(A) \\times P(B)$។ នៅក្នុងតារាងខ្វែងដែលមាន $I$ ជួរដេក និង $J$ ជួរឈរ ប្រូបាបតាមជួរដេកទី $i$ គឺ $O_{i,\\cdot} = n_{i,\\cdot}/N$ ហើយប្រូបាបតាមជួរឈរទី $j$ គឺ $O_{\\cdot,j} = n_{\\cdot,j}/N$។ ដូច្នេះ ប្រសិនបើសម្មតិកម្មសូន្យ $H_0$ (អថេរទាំងពីរឯករាជ្យពីគ្នា) គឺជាការពិត នោះប្រេកង់ធៀបរំពឹងទុកនៅក្នុងក្រឡា $(i,j)$ ត្រូវតែស្មើនឹងផលគុណ $E_{i,j} = O_{i,\\cdot} \\times O_{\\cdot,j} = \\frac{n_{i,\\cdot} n_{\\cdot,j}}{N^2}$។ ចម្ងាយ $\\chi^2$ បូកសរុបការ៉េនៃគម្លាតរវាងតម្លៃអង្កេត និងតម្លៃរំពឹងទុក $(O_{i,j} - E_{i,j})^2 / E_{i,j}$ លើគ្រប់ក្រឡាទាំងអស់។ តើហេតុអ្វីបានជាកម្រិតសេរីភាពស្មើនឹង $\\text{df} = (I - 1)(J - 1)$? ពីព្រោះនៅពេលដែលផលបូកតាមជួរដេក និងជួរឈរត្រូវបានកំណត់ថេរ គ្រាន់តែយើងដឹងតម្លៃចំនួន $(I - 1)$ ជួរដេក និង $(J - 1)$ ជួរឈរ នោះតម្លៃនៅជួរចុងក្រោយអាចគណនាឃើញដោយស្វ័យប្រវត្តិ!',
      },
      practicalApplication: {
        scenarioTitle: {
          en: 'A/B Testing Website Checkout Conversion Across Payment Methods',
          km: 'ការធ្វើតេស្ត A/B Testing លើអត្រាទិញទំនិញតាមប្រភេទមធ្យោបាយទូទាត់ប្រាក់',
        },
        description: {
          en: 'An e-commerce team constructs a contingency table of Checkout Design (Version A vs Version B) against Outcome (Purchased vs Abandoned) and runs a χ² test to verify that the higher purchase rate is statistically significant (p < 0.05) and not random noise.',
          km: 'ក្រុមការងារពាណិជ្ជកម្មអេឡិចត្រូនិកបង្កើតតារាងខ្វែងរវាងទម្រង់ទំព័រទូទាត់ប្រាក់ (ទម្រង់ A ទល់នឹង ទម្រង់ B) និងលទ្ធផល (បានទិញ ទល់នឹង បោះបង់ចោល) រួចធ្វើតេស្ត χ² ដើម្បីផ្ទៀងផ្ទាត់ថាការកើនឡើងនៃការទិញគឺពិតជាមានន័យស្ថិតិ (p < 0.05) មិនមែនកើតឡើងដោយចៃដន្យឡើយ។',
        },
        impactMetric: 'Provides exact p-value probability for rejecting categorical independence H₀',
      },
    },
  },

  // ==========================================
  // SLIDE 30
  // ==========================================
  {
    pageNumber: 30,
    slideFooterNumber: '30',
    sectionTag: {
      en: '2.4 Qualitative vs Qualitative — Chi-Square (χ²) Test Summary & Distributions',
      km: '2.4 គុណភាព ទល់នឹង គុណភាព — សង្ខេបតេស្ត χ² និងខ្សែកោងការបែងចែកតាមកម្រិតសេរីភាព (df)',
    },
    simulatorMode: 'chi_square_distributions_summary',
    pageIdentity: {
      titleEn: 'Indicator: χ² Test (Summary) — Observed vs Expected Tables & χ²(df) Density Curves',
      titleKm: 'សូចនាករ៖ តេស្ត χ² (សង្ខេប) — តារាងប្រេកង់អង្កេត ធៀបនឹង រំពឹងទុក និងខ្សែកោងដង់ស៊ីតេ χ²(df)',
      themeName: {
        en: 'Probability Density Family & Two-Way Table Studio',
        km: 'ផ្ទៃបង្ហាញគ្រួសារខ្សែកោងដង់ស៊ីតេប្រូបាប χ²(df) និងតារាងប្រៀបធៀប',
      },
      canvasBgHex: '#F8FAFC',
      surfaceCardHex: '#FFFFFF',
      primaryAccentHex: '#2563EB',
      secondaryAccentHex: '#DC2626',
      textPrimaryHex: '#0F172A',
      hierarchyRationale: {
        en: 'Pairs the Observed vs Expected relative frequency tables on the left with the 6-curve family of χ²(df) distributions (df = 1, 5, 10, 15, 20, 30) on the right.',
        km: 'ដាក់តារាងប្រេកង់ធៀបអង្កេត និងតារាងរំពឹងទុកនៅខាងឆ្វេង គូគ្នាជាមួយក្រាហ្វខ្សែកោងការបែងចែក χ²(df) ទាំង ៦ (df = 1, 5, 10, 15, 20, 30) នៅខាងស្តាំដូចក្នុងស្លាយទី ៣០។',
      },
    },
    wireframe: {
      headerSection: {
        en: 'Top Header: "Indicator: χ² Test (Summary) / សូចនាករ៖ តេស្ត χ² (សង្ខេប)".',
        km: 'ផ្នែកខាងលើ៖ ចំណងជើង «Indicator: χ² Test (Summary) / សូចនាករ៖ តេស្ត χ² (សង្ខេប)»។',
      },
      leftZone: {
        en: 'Left Column (48% width): Top = Observed two-way relative freq. table (O_{1,1}..O_{I,J}, row totals O_{i,.}, col totals O_{.,j}, grand total 1); Bottom = Expected two-way relative freq. table (O_{.,1}O_{1,.} .. O_{.,J}O_{I,.}) + "χ² measures how different they are!"',
        km: 'ជួរឈរខាងឆ្វេង (ទទឹង ៤៨%)៖ ខាងលើ = តារាងប្រេកង់ធៀបអង្កេត (Observed table); ខាងក្រោម = តារាងប្រេកង់ធៀបរំពឹងទុក (Expected table) + ចំណុចសង្កត់ «χ² វាស់ថាតើតារាងទាំងពីរនេះខុសគ្នាកម្រិតណា!»។',
      },
      rightZone: {
        en: 'Right Column (52% width): Top = Line chart "Different distributions of χ²(df)" for df = 1, 5, 10, 15, 20, 30 (X-axis: 0 to 48; Y-axis: Density 0 to 0.45); Bottom = Practical workflow box (compute χ²(X,Y) and df, compute p-value, small p-value < 0.05 ⇒ reject H₀).',
        km: 'ជួរឈរខាងស្តាំ (ទទឹង ៥២%)៖ ខាងលើ = ក្រាហ្វខ្សែកោង «Different distributions of χ²(df)» សម្រាប់ df = 1, 5, 10, 15, 20, 30; ខាងក្រោម = ប្រអប់សង្ខេបជំហានអនុវត្តជាក់ស្តែង។',
      },
      bottomOrTopBar: {
        en: 'Bottom interactive Degrees of Freedom (df) Slider allowing students to see how the χ²(df) curve shifts rightward with mean = df and variance = 2·df.',
        km: 'របាររំកិលកែតម្រូវតម្លៃ df នៅខាងក្រោម ដើម្បីឱ្យនិស្សិតមើលឃើញពីរបៀបដែលខ្សែកោង χ²(df) រំកិលទៅស្តាំ ដោយមានមធ្យមភាគស្មើ df និងវ៉ារ្យង់ស្មើ 2·df។',
      },
      gridAllocation: '6 Columns Left (Observed vs Expected Matrix Tables) + 6 Columns Right (χ²(df) Density Curves & Workflow)',
    },
    chartMetricsMath: {
      scorecards: [
        {
          label: { en: 'Mean of χ²(df)', km: 'មធ្យមភាគនៃការបែងចែក χ²(df)' },
          value: 'E[χ²] = df',
          metricField: 'chi_sq_mean',
          aggregation: 'Theoretical Expectation',
          comparisonNote: { en: 'Peak of curve sits near df - 2 (for df ≥ 2)', km: 'កំពូលខ្សែកោងស្ថិតនៅត្រង់ df - 2 (សម្រាប់ df ≥ 2)' },
        },
        {
          label: { en: 'Variance of χ²(df)', km: 'វ៉ារ្យង់នៃការបែងចែក χ²(df)' },
          value: 'V[χ²] = 2·df',
          metricField: 'chi_sq_variance',
          aggregation: 'Theoretical Variance',
          comparisonNote: { en: 'Curve widens and flattens as df grows', km: 'ខ្សែកោងកាន់តែរីកធំ និងទាបទៅៗនៅពេល df កើនឡើង' },
        },
      ],
      charts: [
        {
          chartType: {
            en: 'Multi-Series Probability Density Line Chart (`Different distributions of χ²(df)`)',
            km: 'ក្រាហ្វខ្សែកោងដង់ស៊ីតេប្រូបាបនៃការបែងចែក χ²(df) សម្រាប់ df = 1, 5, 10, 15, 20, 30',
          },
          dimensions: ['x_value'],
          breakdownDimension: 'degrees_of_freedom_df',
          metrics: ['chi_square_pdf_density'],
          sorting: 'x_value ASC',
          stylingNote: {
            en: 'Plot 6 smooth curves matching Slide 30: df=1 (Indigo), df=5 (Red-Orange), df=10 (Emerald), df=15 (Purple), df=20 (Amber), df=30 (Cyan).',
            km: 'គូសខ្សែកោងទាំង ៦ ដូចក្នុងស្លាយទី ៣០៖ df=1 (ពណ៌ស្វាយខៀវ), df=5 (ពណ៌ក្រហមទឹកក្រូច), df=10 (ពណ៌បៃតង), df=15 (ពណ៌ស្វាយ), df=20 (ពណ៌លឿងទុំ), df=30 (ពណ៌ផ្ទៃមេឃ)។',
          },
        },
      ],
      formulas: [
        {
          title: { en: 'Chi-Square Probability Density Function & Tail p-value Integral', km: 'រូបមន្តអនុគមន៍ដង់ស៊ីតេប្រូបាប Chi-Square និងអាំងតេក្រាលគណនា p-value' },
          equation: 'f(x; k) = [ x^{(k/2) - 1} · e^{-x/2} ] / [ 2^{k/2} · Γ(k/2) ]  (for x > 0) ,    p-value = P(χ²(df) ≥ χ²_{obs}) = ∫_{χ²_{obs}}^{∞} f(x; df) dx',
          variables: [
            { symbol: 'k = df = (I - 1)(J - 1)', en: 'Degrees of freedom parameter governing the shape and center of the χ² distribution', km: 'ប៉ារ៉ាម៉ែត្រកម្រិតសេរីភាព ដែលកំណត់រូបរាង និងទីតាំងកណ្តាលនៃការបែងចែក χ²' },
            { symbol: 'Γ(k/2)', en: 'Euler Gamma function generalizing the factorial function', km: 'អនុគមន៍ហ្គាម៉ា (Gamma function) ដែលជាទម្រង់ទូទៅនៃហ្វាក់តូរ្យែល' },
            { symbol: 'p-value', en: 'Right-tail area under the χ²(df) curve to the right of the observed test statistic χ²(X,Y)', km: 'ផ្ទៃក្រឡាផ្នែកកន្ទុយខាងស្តាំក្រោមខ្សែកោង χ²(df) ចាប់ពីតម្លៃ χ²(X,Y) ដែលគណនាឃើញទៅដល់អនន្ត' },
          ],
        },
      ],
    },
    controls: [
      {
        controlType: { en: 'Metric Slider Control (Degrees of Freedom `df` Explorer)', km: 'របាររំកិលជ្រើសរើសកម្រិតសេរីភាព (df = 1 ដល់ 30)' },
        field: 'selected_df',
        defaultState: 'All 6 Curves (Highlight df = 10)',
        purpose: {
          en: 'Lets students highlight any specific df curve and see its 95% critical value cutoff C_{0.05}.',
          km: 'អនុញ្ញាតឱ្យនិស្សិតជ្រើសរើសមើលខ្សែកោង df ណាមួយ និងមើលតម្លៃព្រំដែនសម្រេចចិត្តត្រង់កម្រិត 95%។',
        },
      },
    ],
    expandedContent: {
      onScreenText: {
        heading: {
          en: 'Visualizing Observed vs Expected Tables & the χ²(df) Distribution Family',
          km: 'ការប្រៀបធៀបតារាងអង្កេត ទល់នឹង តារាងរំពឹងទុក និងគ្រួសារខ្សែកោង χ²(df)',
        },
        bullets: [
          {
            en: 'Observed Two-Way Relative Freq. Table: Contains the empirical cell proportions O_{i,j} that sum to row totals O_{i,.}, column totals O_{.,j}, and grand total 1.',
            km: 'តារាងប្រេកង់ធៀបអង្កេត (Observed Table)៖ ផ្ទុកសមាមាត្រជាក់ស្តែង O_{i,j} ដែលបូកសរុបតាមជួរដេកបាន O_{i,.}, តាមជួរឈរបាន O_{.,j} និងសរុបរួមស្មើ 1។',
          },
          {
            en: 'Expected Two-Way Relative Freq. Table: Constructed solely from the outer marginals via multiplication O_{.,j} × O_{i,.}. χ² measures how different these two tables are!',
            km: 'តារាងប្រេកង់ធៀបរំពឹងទុក (Expected Table)៖ ត្រូវបានបង្កើតឡើងដោយគ្រាន់តែយកផលបូកជួរឈរគុណនឹងផលបូកជួរដេក O_{.,j} × O_{i,.}។ តម្លៃ χ² វាស់ថាតើតារាងទាំងពីរនេះខុសគ្នាកម្រិតណា!',
          },
          {
            en: 'Different Distributions of χ²(df): As degrees of freedom df = (I - 1)(J - 1) increase from 1 to 30, the χ² density curve shifts rightward and becomes more symmetric (approaching a normal bell curve by the Central Limit Theorem).',
            km: 'ការបែងចែកផ្សេងៗនៃ χ²(df)៖ នៅពេលកម្រិតសេរីភាព df = (I - 1)(J - 1) កើនឡើងពី 1 ដល់ 30 ខ្សែកោងដង់ស៊ីតេ χ² រំកិលទៅខាងស្តាំ ហើយកាន់តែមានរាងឆ្លុះដូចជួង។',
          },
        ],
        callout: {
          en: 'Why Does the χ² Curve Shift Right as df Grows? Because a larger table (more rows I and columns J) has more cells (i,j) contributing positive squared noise terms to the sum ∑ (O_{i,j} - E_{i,j})² / E_{i,j}!',
          km: 'ហេតុអ្វីបានជាខ្សែកោង χ² រំកិលទៅស្តាំនៅពេល df កើនឡើង? ពីព្រោះតារាងកាន់តែធំ (មានជួរដេក I និងជួរឈរ J កាន់តែច្រើន) មានចំនួនក្រឡា (i,j) កាន់តែច្រើនដែលត្រូវបូកបញ្ចូលគ្នា ធ្វើឱ្យផលបូក χ² ធម្មតាមានតម្លៃកាន់តែធំ!',
        },
      },
      deepDiveExplanation: {
        en: 'Slide 30 provides a visual mental model of the entire Chi-Square test. Look at the two tables on the left: the top table holds the actual data $O_{i,j}$, while the bottom table holds the theoretical "independence world" $E_{i,j} = O_{\\cdot,j} O_{i,\\cdot}$. If $X$ and $Y$ are truly independent in the population, the sample table $O_{i,j}$ will still differ slightly from $E_{i,j}$ due to random sampling fluctuations. How much random fluctuation is normal? The answer depends on the size of the grid, measured by $\\text{df} = (I - 1)(J - 1)$! Mathematically, a $\\chi^2(\\text{df})$ random variable is defined as the sum of $\\text{df}$ independent squared standard normal variables: $\\chi^2(\\text{df}) = \\sum_{m=1}^{\\text{df}} Z_m^2$, where $Z_m \\sim \\mathcal{N}(0,1)$. Since each $Z_m^2$ has mean $1$ and variance $2$, a $\\chi^2(\\text{df})$ distribution has mean $\\text{df}$ and variance $2\\,\\text{df}$. Consequently, for a $2 \\times 2$ table ($\\text{df} = 1$), a $\\chi^2$ value of $10$ is huge (far out in the right tail, $p = 0.0016$), whereas for a $6 \\times 7$ table ($\\text{df} = 30$), a $\\chi^2$ value of $10$ is actually smaller than the expected random noise mean of $30$!',
        km: 'ស្លាយទី ៣០ ផ្តល់នូវរូបភាពដ៏ច្បាស់លាស់នៃដំណើរការតេស្ត Chi-Square ទាំងមូល។ សូមមើលតារាងទាំងពីរនៅខាងឆ្វេង៖ តារាងខាងលើគឺជាទិន្នន័យពិត $O_{i,j}$ រីឯតារាងខាងក្រោមគឺជា «ពិភពសម្មតិកម្មដែលគ្មានទំនាក់ទំនង» $E_{i,j} = O_{\\cdot,j} O_{i,\\cdot}$។ ទោះបីជាអថេរ $X$ និង $Y$ ឯករាជ្យពីគ្នាក្នុងពិភពពិតក៏ដោយ ក៏ទិន្នន័យគំរូ $O_{i,j}$ នៅតែអាចខុសពី $E_{i,j}$ បន្តិចបន្តួចដោយសារភាពចៃដន្យនៃការជ្រើសរើសគំរូ។ ដូច្នេះ តើគម្លាតប៉ុណ្ណាទើបហៅថាធំហួសពីភាពចៃដន្យ? ចម្លើយគឺអាស្រ័យលើទំហំតារាង ដែលកំណត់ដោយកម្រិតសេរីភាព $\\text{df} = (I - 1)(J - 1)$! តាមទ្រឹស្តីគណិតវិទ្យា អថេរចៃដន្យ $\\chi^2(\\text{df})$ គឺជាផលបូកនៃការ៉េរបស់អថេរណរម៉ាល់ស្តង់ដារចំនួន $\\text{df}$ គឺ $\\chi^2(\\text{df}) = \\sum_{m=1}^{\\text{df}} Z_m^2$។ ហេតុនេះ ការបែងចែក $\\chi^2(\\text{df})$ មានមធ្យមភាគស្មើនឹង $\\text{df}$ និងវ៉ារ្យង់ស្មើនឹង $2\\,\\text{df}$។ ឧទាហរណ៍៖ សម្រាប់តារាងទំហំ $2 \\times 2$ ($\\text{df} = 1$) តម្លៃ $\\chi^2 = 10$ គឺធំខ្លាំងណាស់ ($p = 0.0016$) ប៉ុន្តែសម្រាប់តារាងទំហំ $6 \\times 7$ ($\\text{df} = 30$) តម្លៃ $\\chi^2 = 10$ គឺតូចជាងមធ្យមភាគនៃភាពចៃដន្យ ($30$) ទៅទៀត!',
      },
      practicalApplication: {
        scenarioTitle: {
          en: 'Adjusting Critical Thresholds Automatically by Table Size in BI Audits',
          km: 'ការកែតម្រូវតម្លៃព្រំដែនសម្រេចចិត្តដោយស្វ័យប្រវត្តិតាមទំហំតារាងក្នុងរបាយការណ៍ BI',
        },
        description: {
          en: 'When comparing Customer Satisfaction (4 levels) across 25 Provinces (df = 3 × 24 = 72) versus across 2 Genders (df = 3 × 1 = 3), analysts use the χ²(df) distribution curve so they never misinterpret raw χ² sums without accounting for degrees of freedom.',
          km: 'នៅពេលប្រៀបធៀបកម្រិតពេញចិត្តរបស់អតិថិជន (៤ កម្រិត) ឆ្លងកាត់ ២៥ ខេត្ត-រាជធានី (df = 3 × 24 = 72) ធៀបនឹងការបែងចែកតាមភេទទាំង ២ (df = 3 × 1 = 3) អ្នកវិភាគប្រើប្រាស់ខ្សែកោង χ²(df) ដើម្បីកុំឱ្យមានការបកស្រាយតម្លៃ χ² ខុសដោយភ្លេចគិតពីទំហំតារាង។',
        },
        impactMetric: 'Calibrates statistical significance thresholds across any I × J contingency table',
      },
    },
  },

  // ==========================================
  // SLIDE 31
  // ==========================================
  {
    pageNumber: 31,
    slideFooterNumber: '31',
    sectionTag: {
      en: '2.4 Qualitative vs Qualitative — Chi-Square Real-World Case Study (Covid Survey)',
      km: '2.4 គុណភាព ទល់នឹង គុណភាព — ករណីសិក្សាជាក់ស្តែងនៃតេស្ត χ² (ការស្ទង់មតិវ៉ាក់សាំងកូវីដ-១៩)',
    },
    simulatorMode: 'covid_survey_chi_square',
    pageIdentity: {
      titleEn: 'Indicator: χ² Test (Example) — 2021 French Covid-19 Vaccine Survey (85,855 People)',
      titleKm: 'សូចនាករ៖ ឧទាហរណ៍នៃតេស្ត χ² — ការស្ទង់មតិវ៉ាក់សាំងកូវីដ-១៩ នៅបារាំងឆ្នាំ ២០២១ (មនុស្ស ៨៥.៨៥៥ នាក់)',
      themeName: {
        en: 'Public Health Survey Contingency & Hypothesis Test Studio',
        km: 'ផ្ទៃវិភាគទិន្នន័យស្ទង់មតិសុខាភិបាលសាធារណៈ និងលទ្ធផលតេស្ត χ²',
      },
      canvasBgHex: '#F8FAFC',
      surfaceCardHex: '#FFFFFF',
      primaryAccentHex: '#1E4E79',
      secondaryAccentHex: '#DC2626',
      textPrimaryHex: '#0F172A',
      hierarchyRationale: {
        en: 'Combines the 4×7 Contingency Table on the left with the 4-color 100% Stacked Barplot (`Vaccine Favor` 0=Indigo, 1=Red, 2=Emerald, 3=Purple) and the χ²(18) Critical Rejection Region plot (`C = 34.805` at α = 0.01) on the right.',
        km: 'ដាក់តារាងខ្វែងទំហំ ៤×៧ នៅខាងឆ្វេង គូជាមួយក្រាហ្វសសរត្រួតគ្នា 100% តាមកម្រិតគាំទ្រវ៉ាក់សាំង (0=ស្វាយខៀវ, 1=ក្រហម, 2=បៃតង, 3=ស្វាយ) និងក្រាហ្វតំបន់បដិសេធ χ²(18) (`C = 34.805` ត្រង់ α = 0.01) នៅខាងស្តាំ។',
      },
    },
    wireframe: {
      headerSection: {
        en: 'Top Header: "Indicator: χ² Test (Example) / ឧទាហរណ៍ជាក់ស្តែងនៃតេស្ត χ² (ការស្ទង់មតិកូវីដ-១៩)".',
        km: 'ផ្នែកខាងលើ៖ ចំណងជើង «Indicator: χ² Test (Example) / ឧទាហរណ៍ជាក់ស្តែងនៃតេស្ត χ²»។',
      },
      leftZone: {
        en: 'Left Column (48% width): "🇫🇷 Covid Survey in 2021 of 85,855 ppl." + 4×7 Contingency Table (Rows: Vaccine Favor 3, 2, 1, 0; Columns: Job categories F, SE, SEP, MEP, E, MW, NW) + Complete Legend of Job Abbreviations.',
        km: 'ជួរឈរខាងឆ្វេង (ទទឹង ៤៨%)៖ «🇫🇷 ការស្ទង់មតិកូវីដនៅបារាំងឆ្នាំ ២០២១ លើមនុស្ស ៨៥.៨៥៥ នាក់» + តារាងខ្វែង ៤×៧ (ជួរដេក៖ កម្រិតគាំទ្រវ៉ាក់សាំង 3, 2, 1, 0; ជួរឈរ៖ មុខរបរ F, SE, SEP, MEP, E, MW, NW) និងការពន្យល់អក្សរកាត់នៃមុខរបរទាំង ៧។',
      },
      rightZone: {
        en: 'Right Column (52% width): Top = 100% Stacked Barplot "Job vs Vaccine Favor"; Bottom = Result `df = 18 and χ²(18) ≈ 3298` + Density curve "χ²(18) and critical value at α = 0.01" (`C = 34.805`, red shaded Rejection Region RR).',
        km: 'ជួរឈរខាងស្តាំ (ទទឹង ៥២%)៖ ខាងលើ = ក្រាហ្វសសរត្រួតគ្នា «Stacked Barplot of Job vs Vaccine Favor»; ខាងក្រោម = លទ្ធផលគណនា `df = 18 និង χ²(18) ≈ 3298` រួមជាមួយក្រាហ្វតំបន់បដិសេធត្រង់ `α = 0.01 (C = 34.805)`។',
      },
      bottomOrTopBar: {
        en: 'Bottom interactive Job Category Inspector showing observed vs expected vaccine favorability for Senior Executives (SEP: 35.4% strong favor) vs Manual Workers (MW: 15.98% strong favor).',
        km: 'របារពិនិត្យលម្អិតខាងក្រោមដែលប្រៀបធៀបកម្រិតគាំទ្រវ៉ាក់សាំងរវាងអ្នកជំនាញជាន់ខ្ពស់ (SEP៖ គាំទ្រខ្លាំង 35.4%) និងកម្មករប្រើកម្លាំងពលកម្ម (MW៖ គាំទ្រខ្លាំងត្រឹមតែ 15.98%)។',
      },
      gridAllocation: '6 Columns Left (4x7 Contingency Table & Job Key) + 6 Columns Right (Stacked Barplot & χ²(18) Test Plot)',
    },
    chartMetricsMath: {
      scorecards: [
        {
          label: { en: 'Total Survey Sample (N)', km: 'ចំនួនអ្នកចូលរួមស្ទង់មតិសរុប (N)' },
          value: '85,855 ppl',
          metricField: 'SUM(survey_count)',
          aggregation: 'Sum',
          comparisonNote: { en: '2021 French National Covid-19 Survey', km: 'ការស្ទង់មតិថ្នាក់ជាតិនៅប្រទេសបារាំងឆ្នាំ ២០២១' },
        },
        {
          label: { en: 'Degrees of Freedom (df)', km: 'កម្រិតសេរីភាព (df = (4-1)×(7-1))' },
          value: 'df = 18',
          metricField: 'covid_df',
          aggregation: '(I - 1)(J - 1)',
          comparisonNote: { en: '4 Opinion Tiers × 7 Job Categories', km: '៤ កម្រិតមតិ × ៧ ប្រភេទមុខរបរ' },
        },
        {
          label: { en: 'Observed χ²(18) Statistic', km: 'តម្លៃស្ថិតិ χ²(18) ដែលគណនាឃើញ' },
          value: '≈ 3,298',
          metricField: 'chi_sq_observed',
          aggregation: 'Chi-Square Statistic',
          comparisonNote: { en: 'Critical value C = 34.805 (α=0.01) ⇒ Reject H₀!', km: 'ធំជាងតម្លៃព្រំដែន C = 34.805 ដាច់ឆ្ងាយ ⇒ បដិសេធ H₀!' },
        },
      ],
      charts: [
        {
          chartType: {
            en: 'Chart 1: 100% Stacked Barplot (`Job` vs `Vaccine Favor` 0, 1, 2, 3)',
            km: 'ក្រាហ្វទី ១៖ ក្រាហ្វសសរត្រួតគ្នា 100% រវាងមុខរបរ (`Job`) និងកម្រិតគាំទ្រវ៉ាក់សាំង (`Vaccine Favor`)',
          },
          dimensions: ['job_code'],
          breakdownDimension: 'vaccine_favor_level',
          metrics: ['respondent_percentage'],
          sorting: 'job_code ASC (E, F, MEP, MW, NW, SE, SEP)',
          stylingNote: {
            en: 'Displays exact segment percentages from Slide 31 (e.g., SEP has 35.4% in level 3 and only 5.08% in level 0; MW has 15.98% in level 3 and 15.78% in level 0).',
            km: 'បង្ហាញតួលេខភាគរយជាក់លាក់ដូចក្នុងស្លាយទី ៣១ (ឧ. ក្រុម SEP មានអ្នកគាំទ្រខ្លាំងកម្រិត 3 ដល់ទៅ 35.4% ខណៈក្រុម MW មានត្រឹមតែ 15.98%)។',
          },
        },
        {
          chartType: {
            en: 'Chart 2: χ²(df = 18) Density Curve with Critical Value Cutoff (`C = 34.805` at α = 0.01)',
            km: 'ក្រាហ្វទី ២៖ ខ្សែកោងដង់ស៊ីតេ χ²(df = 18) អមដោយបន្ទាត់តម្លៃព្រំដែន C = 34.805 ត្រង់ α = 0.01',
          },
          dimensions: ['x_chi_sq'],
          metrics: ['density_df18'],
          sorting: 'x_chi_sq ASC',
          stylingNote: {
            en: 'Plot blue density curve peaking at x = 16 (df - 2), red dashed vertical line at C = 34.805, and pink shaded rejection region RR (α = 0.01) for x ≥ 34.805.',
            km: 'គូសខ្សែកោងពណ៌ខៀវ បន្ទាត់ឈរដាច់ៗពណ៌ក្រហមត្រង់ C = 34.805 និងផាត់ពណ៌ផ្កាឈូកលើតំបន់បដិសេធ RR (α = 0.01)។',
          },
        },
      ],
      formulas: [
        {
          title: { en: 'Covid-19 Survey Chi-Square Calculation & Critical Rejection Rule', km: 'ការគណនាតេស្ត Chi-Square សម្រាប់ការស្ទង់មតិកូវីដ-១៩ និងវិធានតំបន់បដិសេធ' },
          equation: 'df = (I - 1)(J - 1) = (4 - 1)(7 - 1) = 3 × 6 = 18 ,    χ²_{obs} ≈ 3298 ≫ C_{0.01} = 34.805  ⇒  p-value ≈ 0 < 0.01  (Reject H₀)',
          variables: [
            { symbol: 'I = 4', en: '4 ordinal/qualitative levels of Vaccine Favor: 0 (strong opposition) to 3 (strong favor)', km: '៤ កម្រិតនៃការគាំទ្រវ៉ាក់សាំង៖ ពីកម្រិត 0 (មិនគាំទ្រខ្លាំង) ដល់កម្រិត 3 (គាំទ្រខ្លាំង)' },
            { symbol: 'J = 7', en: '7 occupational categories: F (Farmer), SE (Self-employed), SEP (Senior exec), MEP (Middle exec), E (Employees), MW (Manual workers), NW (Never worked)', km: '៧ ប្រភេទមុខរបរ៖ F (កសិករ), SE (អាជីវករ/សហគ្រិន), SEP (អ្នកជំនាញជាន់ខ្ពស់), MEP (អ្នកជំនាញមធ្យម), E (បុគ្គលិក), MW (កម្មករ), NW (មិនធ្លាប់ធ្វើការ)' },
            { symbol: 'C = 34.805', en: '99th percentile critical threshold of χ²(18) where right-tail area α = 0.01', km: 'តម្លៃព្រំដែនត្រង់កម្រិត α = 0.01 នៃការបែងចែក χ²(18)' },
            { symbol: 'χ²_{obs} ≈ 3298', en: 'Empirical Chi-square statistic from the 85,855 respondents—nearly 95 times larger than the critical threshold!', km: 'តម្លៃស្ថិតិ χ² គណនាឃើញពីមនុស្ស ៨៥.៨៥៥ នាក់ ដែលធំជាងតម្លៃព្រំដែនជិត ៩៥ ដង!' },
          ],
        },
      ],
    },
    controls: [
      {
        controlType: { en: 'Multi-Select Drop-down Control (Job Category Filter)', km: 'តម្រងជ្រើសរើសប្រភេទមុខរបរ (F, SE, SEP, MEP, E, MW, NW)' },
        field: 'job_code',
        defaultState: 'All 7 Job Categories',
        purpose: {
          en: 'Lets users filter the 85,855 respondents by occupation to inspect specific rows/columns of the contingency table and stacked barplot.',
          km: 'អនុញ្ញាតឱ្យអ្នកសិក្សាច្រោះមើលទិន្នន័យតាមប្រភេទមុខរបរទាំង ៧ នៅលើតារាងខ្វែង និងក្រាហ្វសសរត្រួតគ្នា។',
        },
      },
    ],
    expandedContent: {
      onScreenText: {
        heading: {
          en: 'Real-World Case Study: 2021 French Covid-19 Vaccine Survey (N = 85,855)',
          km: 'ករណីសិក្សាជាក់ស្តែង៖ ការស្ទង់មតិវ៉ាក់សាំងកូវីដ-១៩ នៅប្រទេសបារាំងឆ្នាំ ២០២១ (N = ៨៥.៨៥៥ នាក់)',
        },
        bullets: [
          {
            en: 'Dataset: 2021 Covid-19 Vaccine Attitude Survey in France across 85,855 respondents.',
            km: 'សំណុំទិន្នន័យ៖ ការស្ទង់មតិពីឥរិយាបថចំពោះវ៉ាក់សាំងកូវីដ-១៩ នៅប្រទេសបារាំងក្នុងឆ្នាំ ២០២១ លើប្រជាជនចំនួន ៨៥.៨៥៥ នាក់។',
          },
          {
            en: 'Variables: `Vaccine Favor` rated 0 to 3 (less to strong favor in vaccine) vs `Job` across 7 categories: F (Farmer), SE (Self-employed & entrepreneurs), SEP (Senior executive professionals), MEP (Middle executive professionals), E (Employees), MW (Manual workers), NW (Never worked & others).',
            km: 'អថេរសិក្សា៖ កម្រិតគាំទ្រវ៉ាក់សាំង (`0-3`៖ ពីមិនសូវគាំទ្រ ដល់គាំទ្រខ្លាំង) ទល់នឹង មុខរបរ (`Job`) ចំនួន ៧ ក្រុម គឺ កសិករ (F), អាជីវករ/សហគ្រិន (SE), អ្នកជំនាញជាន់ខ្ពស់ (SEP), អ្នកជំនាញមធ្យម (MEP), បុគ្គលិក (E), កម្មករពលកម្ម (MW) និងអ្នកមិនធ្លាប់ធ្វើការ (NW)។',
          },
          {
            en: 'Chi-Square Test Result: With I = 4 rows and J = 7 columns, we have df = (4-1)(7-1) = 18 and χ²(18) ≈ 3,298! Since 3,298 far exceeds the α = 0.01 critical value C = 34.805, we overwhelmingly reject H₀: vaccine attitude is significantly associated with job category.',
            km: 'លទ្ធផលតេស្ត Chi-Square៖ ដោយមាន 4 ជួរដេក និង 7 ជួរឈរ យើងទទួលបាន df = (4-1)(7-1) = 18 និងតម្លៃ χ²(18) ≈ 3,298! ដោយសារ 3,298 ធំជាងតម្លៃព្រំដែន C = 34.805 (ត្រង់ α = 0.01) ដាច់ឆ្ងាយ យើងបដិសេធ H₀ យ៉ាងដាច់ខាត៖ ឥរិយាបថចំពោះវ៉ាក់សាំងពិតជាមានទំនាក់ទំនងជាមួយប្រភេទមុខរបរ។',
          },
        ],
        callout: {
          en: 'Subtle Analytical Question: Does a massive χ² ≈ 3,298 mean the association between Job and Vaccine Favor is near-perfect, OR is χ² huge partly because the sample size N = 85,855 is huge? That exact question motivates Cramér’s V on Slide 32!',
          km: 'សំណួរវិភាគស៊ីជម្រៅ៖ តើតម្លៃ χ² ≈ 3,298 ដ៏ធំសម្បើមនេះ មានន័យថាទំនាក់ទំនងរវាងមុខរបរ និងការគាំទ្រវ៉ាក់សាំងខ្លាំងជិត ១០០% មែនទេ ឬមួយមកពីទំហំគំរូ N = 85,855 ធំពេក? សំណួរនេះហើយដែលនាំយើងទៅកាន់មេគុណ Cramér’s V នៅស្លាយទី ៣២!',
        },
      },
      deepDiveExplanation: {
        en: 'Slide 31 brings together everything from Section 2.4 in a landmark real-world epidemiology study. First, inspect the 100% Stacked Barplot on the top right: across all 7 occupational groups, the orange segment (Level 2 = Moderate favor) is relatively stable around $46\\%\\text{–}50\\%$. However, look at the bottom blue segment (Level 3 = Strong favor) and top indigo segment (Level 0 = Strong refusal): among Senior Executive Professionals (`SEP`), $35.4\\%$ strongly favor the vaccine and only $5.08\\%$ strongly refuse; whereas among Manual Workers (`MW`), only $15.98\\%$ strongly favor the vaccine and $15.78\\%$ strongly refuse! With $I = 4$ rows and $J = 7$ columns, $\\text{df} = (4-1)(7-1) = 18$. At significance level $\\alpha = 0.01$, the critical value is $C = 34.805$ (meaning if $H_0$ were true, there is only a $1\\%$ chance that $\\chi^2(18)$ would exceed $34.805$). Our observed test statistic is $\\chi^2(18) \\approx 3,298$, which lies so far inside the red rejection region $RR$ that the $p\\text{-value} < 10^{-300}$. However, notice that raw $\\chi^2$ scales linearly with sample size $N = 85,855$—to know the true effect size on a $[0, 1]$ scale, we need Cramér’s $V$ (Slide 32)!',
        km: 'ស្លាយទី ៣១ បញ្ចូលគ្នានូវគ្រប់ចំណេះដឹងទាំងអស់នៃផ្នែក 2.4 មកអនុវត្តលើទិន្នន័យសុខាភិបាលសាធារណៈពិតប្រាកដ។ ដំបូង សូមពិនិត្យមើលក្រាហ្វសសរត្រួតគ្នា 100% នៅខាងលើខាងស្តាំ៖ នៅក្នុងក្រុមអ្នកជំនាញជាន់ខ្ពស់ (`SEP`) អ្នកគាំទ្រវ៉ាក់សាំងខ្លាំង (កម្រិត 3 ពណ៌ខៀវខាងក្រោម) មានដល់ទៅ $35.4\\%$ ហើយអ្នកប្រឆាំងខ្លាំង (កម្រិត 0 ពណ៌ស្វាយខាងលើ) មានត្រឹមតែ $5.08\\%$ ប៉ុណ្ណោះ។ ផ្ទុយទៅវិញ នៅក្នុងក្រុមកម្មករប្រើកម្លាំងពលកម្ម (`MW`) អ្នកគាំទ្រខ្លាំងមានត្រឹមតែ $15.98\\%$ ចំណែកអ្នកប្រឆាំងខ្លាំងមានដល់ទៅ $15.78\\%$! ដោយសារតារាងមាន $I = 4$ ជួរដេក និង $J = 7$ ជួរឈរ កម្រិតសេរីភាពគឺ $\\text{df} = (4-1)(7-1) = 18$។ ត្រង់កម្រិតហានិភ័យ $\\alpha = 0.01$ តម្លៃព្រំដែនគឺ $C = 34.805$ ប៉ុន្តែតម្លៃ $\\chi^2$ ដែលគណនាឃើញគឺរហូតដល់ទៅ $3,298$ ដែលធ្លាក់ចូលក្នុងតំបន់បដិសេធ $RR$ យ៉ាងជ្រៅ ($p\\text{-value} \\approx 0$)។ ទោះជាយ៉ាងណាក៏ដោយ តម្លៃ $\\chi^2$ ធំបែបនេះ មួយផ្នែកគឺដោយសារចំនួនមនុស្ស $N = 85,855$ នាក់ធំខ្លាំង។ ដើម្បីដឹងពីកម្រិតខ្លាំងខ្សោយពិតប្រាកដនៅលើមាត្រដ្ឋាន $[0, 1]$ យើងត្រូវគណនាមេគុណ Cramér’s $V$ នៅស្លាយទី ៣២!',
      },
      practicalApplication: {
        scenarioTitle: {
          en: 'Targeting Public Health Vaccination Campaigns by Occupational Segment',
          km: 'ការរៀបចំយុទ្ធនាការអប់រំសុខាភិបាលសាធារណៈឱ្យចំគោលដៅតាមក្រុមមុខរបរ',
        },
        description: {
          en: 'Ministry of Health epidemiologists use contingency tables and 100% stacked barplots in Looker Studio to identify which occupational groups exhibit the highest vaccine hesitancy (MW and E), directing mobile clinic outreach and tailored communication to those exact workplaces.',
          km: 'អ្នកជំនាញរោគរាតត្បាតនៃក្រសួងសុខាភិបាលប្រើប្រាស់តារាងខ្វែង និងក្រាហ្វសសរត្រួតគ្នា 100% ក្នុង Looker Studio ដើម្បីកំណត់រកក្រុមមុខរបរណាដែលមានភាពស្ទាក់ស្ទើរខ្ពស់បំផុតក្នុងការចាក់វ៉ាក់សាំង ដើម្បីរៀបចំយុទ្ធនាការផ្សព្វផ្សាយ និងបញ្ជូនក្រុមគ្រូពេទ្យចល័តទៅកាន់កន្លែងធ្វើការទាំងនោះដោយផ្ទាល់។',
        },
        impactMetric: 'χ²(18) = 3,298 (p < 0.0001) confirms occupational disparity in vaccine uptake',
      },
    },
  },

  // ==========================================
  // SLIDE 32
  // ==========================================
  {
    pageNumber: 32,
    slideFooterNumber: '32',
    sectionTag: {
      en: '2.4 Qualitative vs Qualitative — Cramér’s V & Bias Correction',
      km: '2.4 គុណភាព ទល់នឹង គុណភាព — មេគុណ Cramér’s V និងរូបមន្តកែតម្រូវភាពលម្អៀង (Bias Correction)',
    },
    simulatorMode: 'cramers_v_bias_correction',
    pageIdentity: {
      titleEn: 'Indicator: Cramér’s V — Normalized Association Strength & Bias-Corrected Ṽ',
      titleKm: 'សូចនាករ៖ មេគុណ Cramér’s V — រង្វាស់កម្រិតទំនាក់ទំនងស្តង់ដារ [0, 1] និងរូបមន្តកែតម្រូវភាពលម្អៀង Ṽ',
      themeName: {
        en: 'Mathematical Effect-Size & Bias-Correction Studio',
        km: 'ផ្ទៃបង្ហាញរូបមន្តមេគុណ Cramér’s V និងការកែតម្រូវភាពលម្អៀង',
      },
      canvasBgHex: '#F8FAFC',
      surfaceCardHex: '#FFFFFF',
      primaryAccentHex: '#2563EB',
      secondaryAccentHex: '#D97706',
      textPrimaryHex: '#0F172A',
      hierarchyRationale: {
        en: 'Highlights "Cramér’s V" in #2563EB Royal Blue, frames the Property callout box in #15803D Emerald Green, and emphasizes the "Biasness" warning in #D97706 Amber/Orange and "qualitative" in #DC2626 Crimson.',
        km: 'រំលេចពាក្យ «Cramér’s V» ដោយពណ៌ខៀវ (#2563EB), ប្រអប់លក្ខណៈសម្បត្តិ (Property) ដោយស៊ុមពណ៌បៃតង (#15803D), និងការព្រមានអំពីភាពលម្អៀង («Biasness») ដោយពណ៌ទឹកក្រូចមាស (#D97706) ដូចក្នុងស្លាយទី ៣២។',
      },
    },
    wireframe: {
      headerSection: {
        en: 'Top Header: "Indicator: Cramér’s V / សូចនាករ៖ មេគុណ Cramér’s V (Harald Cramér, 1946)".',
        km: 'ផ្នែកខាងលើ៖ ចំណងជើង «Indicator: Cramér’s V / សូចនាករ៖ មេគុណ Cramér’s V (Harald Cramér, 1946)»។',
      },
      leftZone: {
        en: 'Top & Middle Zone (60% width): Standard Cramér’s V formula V = √[ (χ²/n) / min(I-1, J-1) ] + Green Property Box (V ∈ [0,1] with V ≈ 1 indicating strong association; Biasness warning that V is a biased estimator that can heavily overestimate association strength) + Bias-corrected Ṽ equation.',
        km: 'ផ្នែកខាងឆ្វេង (ទទឹង ៦០%)៖ រូបមន្តស្តង់ដារនៃ Cramér’s V + ប្រអប់ពណ៌បៃតងបង្ហាញពីលក្ខណៈសម្បត្តិ (V ∈ [0,1] និងការព្រមានអំពីភាពលម្អៀងដែលអាចប៉ាន់ស្មានកម្រិតទំនាក់ទំនងខ្ពស់ហួសការពិត) + រូបមន្តកែតម្រូវភាពលម្អៀង Ṽ (Bias correction)។',
      },
      rightZone: {
        en: 'Right Analytical Panel (40% width): Interactive Calculator applying Cramér’s V and Bias-Corrected Ṽ to both the Gapminder Continent×GDP table (n=142) and the French Covid Survey (n=85,855, χ²=3298 ⇒ V = 0.113!).',
        km: 'ផ្នែកខាងស្តាំ (ទទឹង ៤០%)៖ ម៉ាស៊ីនគណនាអន្តរកម្មដែលគណនាប្រៀបធៀបតម្លៃ V និង Ṽ ទៅលើទិន្នន័យ Gapminder (n=142) និងទិន្នន័យស្ទង់មតិកូវីដ-១៩ (n=85,855, χ²=3298 ⇒ V = 0.113!)។',
      },
      bottomOrTopBar: {
        en: 'Bottom insight bar explaining how Cramér’s V resolves the sample-size inflation of raw χ².',
        km: 'របារពន្យល់ខាងក្រោមអំពីរបៀបដែលមេគុណ Cramér’s V ដោះស្រាយបញ្ហានៃការកើនឡើងតម្លៃ χ² ដោយសារទំហំគំរូធំ។',
      },
      gridAllocation: '7 Columns Left (Cramér’s V, Property Box & Bias-Corrected Ṽ) + 5 Columns Right (Interactive V vs Ṽ Calculator)',
    },
    chartMetricsMath: {
      scorecards: [
        {
          label: { en: 'Gapminder V (Continent × GDP)', km: 'មេគុណ V លើទិន្នន័យ Gapminder' },
          value: 'V = 0.504',
          metricField: 'cramers_v_gapminder',
          aggregation: 'Cramér’s V',
          comparisonNote: { en: 'Bias-corrected Ṽ = 0.491 (Strong association)', km: 'ក្រោយកែតម្រូវភាពលម្អៀង Ṽ = 0.491 (ទំនាក់ទំនងខ្លាំង)' },
        },
        {
          label: { en: 'Covid Survey V (Job × Vaccine)', km: 'មេគុណ V លើការស្ទង់មតិកូវីដ-១៩' },
          value: 'V = 0.113',
          metricField: 'cramers_v_covid',
          aggregation: 'Cramér’s V',
          comparisonNote: { en: 'χ²=3,298 was huge mainly due to n=85,855!', km: 'បង្ហាញថាតម្លៃ χ²=3,298 ធំ គឺដោយសារ n=85,855 ធំ!' },
        },
      ],
      charts: [
        {
          chartType: {
            en: 'Looker Studio Bias-Correction Comparison Curve (Standard V vs Corrected Ṽ across Sample Size n)',
            km: 'ក្រាហ្វប្រៀបធៀបរវាងមេគុណ V ស្តង់ដារ និងមេគុណកែតម្រូវភាពលម្អៀង Ṽ ទៅតាមទំហំគំរូ n',
          },
          dimensions: ['sample_size_n'],
          metrics: ['standard_cramers_v', 'bias_corrected_v_tilde'],
          sorting: 'sample_size_n ASC',
          stylingNote: {
            en: 'Shows how standard V overestimates association when sample size n is small relative to table dimensions I × J.',
            km: 'បង្ហាញពីរបៀបដែលមេគុណ V ធម្មតាប៉ាន់ស្មានតម្លៃខ្ពស់ហួសការពិត នៅពេលទំហំគំរូ n តូចធៀបនឹងទំហំតារាង I × J។',
          },
        },
      ],
      formulas: [
        {
          title: { en: 'Standard Cramér’s V (Harald Cramér, 1946)', km: 'រូបមន្តមេគុណ Cramér’s V ស្តង់ដារ (Harald Cramér, 1946)' },
          equation: 'V = √[ (χ² / n) / min(I - 1, J - 1) ] ∈ [0, 1]',
          variables: [
            { symbol: 'χ²', en: 'Pearson’s Chi-squared test statistic computed on the I × J contingency table of counts', km: 'តម្លៃស្ថិតិតេស្ត Chi-squared របស់ Pearson ដែលគណនាលើតារាងខ្វែងទំហំ I × J' },
            { symbol: 'n', en: 'Total number of observations in the contingency table (grand total N)', km: 'ចំនួនការអង្កេតសរុបនៅក្នុងតារាងខ្វែង (ទំហំគំរូសរុប)' },
            { symbol: 'min(I - 1, J - 1)', en: 'Theoretical maximum of χ²/n (attained when one variable completely determines the other)', km: 'តម្លៃអតិបរមាតាមទ្រឹស្តីនៃផលចែក χ²/n (កើតឡើងនៅពេលអថេរមួយកំណត់អថេរមួយទៀតបានទាំងស្រុង)' },
          ],
        },
        {
          title: { en: 'Bergsma (2013) Bias-Corrected Cramér’s V (Ṽ)', km: 'រូបមន្តកែតម្រូវភាពលម្អៀងរបស់ Cramér’s V (Ṽ)' },
          equation: 'Ṽ = √[ φ̃² / min(Ĩ - 1, J̃ - 1) ] ,  where  φ̃² = max(0, χ²/n - df/(n - 1)) ,  Ĩ = I - (I - 1)²/(n - 1) ,  J̃ = J - (J - 1)²/(n - 1)',
          variables: [
            { symbol: 'φ̃²', en: 'Bias-corrected phi-squared statistic subtracting the expected noise mean df/(n-1)', km: 'តម្លៃ phi-squared ដែលបានដកចេញនូវមធ្យមភាគនៃភាពចៃដន្យ df/(n-1)' },
            { symbol: 'df = (I - 1)(J - 1)', en: 'Degrees of freedom of the contingency table', km: 'កម្រិតសេរីភាពនៃតារាងខ្វែង' },
            { symbol: 'Ĩ , J̃', en: 'Finite-sample corrected row and column dimensions', km: 'ចំនួនជួរដេក និងជួរឈរដែលបានកែតម្រូវតាមទំហំគំរូ n' },
            { symbol: 'Ṽ', en: 'Debiased Cramér’s V estimator that prevents upward bias in large tables or small samples', km: 'មេគុណ Cramér’s V ដែលបានកែតម្រូវភាពលម្អៀងរួចរាល់' },
          ],
        },
      ],
    },
    controls: [
      {
        controlType: { en: 'Dataset Preset Selector (Covid Survey vs Gapminder vs Custom)', km: 'ប៊ូតុងជ្រើសរើសសំណុំទិន្នន័យដើម្បីគណនា V និង Ṽ' },
        field: 'cramers_dataset_preset',
        defaultState: 'Compare Both (Covid Survey n=85,855 & Gapminder n=142)',
        purpose: {
          en: 'Lets students compare V and Ṽ across both course datasets and adjust n, I, J, and χ² interactively.',
          km: 'អនុញ្ញាតឱ្យនិស្សិតប្រៀបធៀបតម្លៃ V និង Ṽ លើសំណុំទិន្នន័យទាំងពីរ និងសាកល្បងកែប្រែតម្លៃ n, I, J និង χ² ដោយផ្ទាល់។',
        },
      },
    ],
    expandedContent: {
      onScreenText: {
        heading: {
          en: 'Normalizing Chi-Square into [0, 1]: Cramér’s V & Bias Correction',
          km: 'ការបម្លែងតម្លៃ Chi-Square ឱ្យស្ថិតក្នុងចន្លោះ [0, 1]៖ មេគុណ Cramér’s V និងការកែតម្រូវភាពលម្អៀង',
        },
        bullets: [
          {
            en: 'Based on Pearson’s Chi-squared statistic (Harald Cramér, 1946): V = √[ (χ²/n) / min(I-1, J-1) ].',
            km: 'ផ្អែកលើស្ថិតិ Chi-squared របស់ Pearson (បង្កើតដោយលោក Harald Cramér ឆ្នាំ ១៩៤៦)៖ V = √[ (χ²/n) / min(I-1, J-1) ]។',
          },
          {
            en: 'Property 1: V ∈ [0, 1], with V ≈ 1 indicating strong association and V ≈ 0 indicating independence.',
            km: 'លក្ខណៈសម្បត្តិទី ១៖ V ស្ថិតក្នុងចន្លោះ [0, 1] ជានិច្ច ដែល V ≈ 1 បង្ហាញពីទំនាក់ទំនងខ្លាំង និង V ≈ 0 បង្ហាញពីភាពឯករាជ្យគ្មានទំនាក់ទំនង។',
          },
          {
            en: 'Property 2 (Biasness Warning): Theoretically, standard Cramér’s V is a BIASED estimator of the association strength between two qualitative variables—it can heavily overestimate the true association strength when I, J are large or n is small!',
            km: 'លក្ខណៈសម្បត្តិទី ២ (ការព្រមានអំពីភាពលម្អៀង)៖ តាមទ្រឹស្តី មេគុណ Cramér’s V ស្តង់ដារគឺជាតម្លៃប៉ាន់ស្មានដែលមានភាពលម្អៀង (Biased estimator) ពោលគឺវាអាចប៉ាន់ស្មានកម្រិតទំនាក់ទំនងខ្ពស់ហួសការពិត នៅពេលតារាងមានជួរច្រើន ឬទំហំគំរូ n តូច!',
          },
          {
            en: 'Solution — Bias Correction of Cramér’s V (Ṽ): Subtracts df/(n-1) from χ²/n and adjusts row/column dimensions to Ĩ and J̃.',
            km: 'ដំណោះស្រាយ — រូបមន្តកែតម្រូវភាពលម្អៀង (Ṽ)៖ ដកតម្លៃមធ្យមភាគនៃភាពចៃដន្យ df/(n-1) ចេញពី χ²/n និងកែតម្រូវចំនួនជួរដេក/ជួរឈរមកជា Ĩ និង J̃។',
          },
        ],
        callout: {
          en: 'Look What Happens on the Covid-19 Survey (Slide 31): Even though χ² ≈ 3,298 looked gigantic, plugging χ² = 3298, n = 85855, I = 4, J = 7 into Cramér’s V gives V = √[ (3298 / 85855) / 3 ] = 0.113! So the statistical significance is 100% certain, while the practical effect size is modest (11.3%).',
          km: 'សូមមើលលទ្ធផលលើការស្ទង់មតិកូវីដ-១៩ (ស្លាយទី ៣១)៖ ទោះបីជាតម្លៃ χ² ≈ 3,298 មើលទៅធំសម្បើមក៏ដោយ ប៉ុន្តែនៅពេលយើងជំនួស χ² = 3298, n = 85855, I = 4, J = 7 ចូលក្នុងរូបមន្ត Cramér’s V យើងទទួលបាន V = √[ (3298 / 85855) / 3 ] = 0.113 ប៉ុណ្ណោះ! នេះបង្ហាញថាទំនាក់ទំនងគឺពិតជាមានមែន (មិនមែនចៃដន្យទេ) ប៉ុន្តែកម្រិតខ្លាំងខ្សោយរបស់វាស្ថិតក្នុងកម្រិតមធ្យមទាប (11.3%)។',
        },
      },
      deepDiveExplanation: {
        en: 'Slide 32 completes the Qualitative vs Qualitative toolkit by answering two crucial questions: (1) Why do we need Cramér’s $V$ after running a $\\chi^2$ test? Because $\\chi^2$ has no upper bound—it grows linearly with sample size $n$ and table size $\\min(I-1, J-1)$ (just like Covariance grew with measurement units on Slide 10!). Since the mathematical maximum possible value of $\\chi^2$ for an $I \\times J$ table of $n$ observations is $n \\times \\min(I-1, J-1)$, Harald Cramér (1946) divided $\\chi^2$ by $n \\min(I-1, J-1)$ and took the square root to create a universal $[0, 1]$ indicator analogous to $|r|$ and $\\eta$. (2) Why is standard $V$ biased upward? Recall from Slide 30 that even when $X$ and $Y$ are 100% independent ($H_0$ true), the expected value of $\\chi^2$ is $\\text{df} = (I-1)(J-1) > 0$, NOT zero! Therefore, $\\mathbb{E}[\\chi^2/n] \\approx \\frac{\\text{df}}{n-1} > 0$, which forces standard $V$ to be strictly positive even on pure random noise! Wicher Bergsma’s (2013) bias-corrected formula $\\tilde{V}$ subtracts $\\frac{\\text{df}}{n-1}$ inside $\\tilde{\\phi}^2 = \\max\\!\\left(0, \\frac{\\chi^2}{n} - \\frac{\\text{df}}{n-1}\\right)$ and applies finite-sample corrections $\\tilde{I}$ and $\\tilde{J}$, eliminating the upward bias.',
        km: 'ស្លាយទី ៣២ បំពេញបន្ថែមប្រអប់ឧបករណ៍វិភាគអថេរគុណភាព ទល់នឹង គុណភាព ដោយឆ្លើយតបនឹងសំណួរដ៏សំខាន់ពីរ៖ (១) ហេតុអ្វីយើងត្រូវការមេគុណ Cramér’s $V$ បន្ទាប់ពីធ្វើតេស្ត $\\chi^2$ រួចហើយ? ពីព្រោះតម្លៃ $\\chi^2$ គ្មានដែនកំណត់អតិបរមាទេ គឺវាកើនឡើងតាមទំហំគំរូ $n$ និងទំហំតារាង (ដូចគ្នានឹងកូវ៉ារ្យង់ដែលប្រែប្រួលតាមខ្នាតរង្វាស់នៅស្លាយទី ១០ ដែរ!)។ ដោយសារតម្លៃអតិបរមាតាមទ្រឹស្តីរបស់ $\\chi^2$ គឺ $n \\times \\min(I-1, J-1)$ លោក Harald Cramér (១៩៤៦) បានយក $\\chi^2$ មកចែកនឹងតម្លៃអតិបរមានេះ រួចបំពាក់ឫសការ៉េ ដើម្បីបង្កើតបានជាសូចនាករស្តង់ដារក្នុងចន្លោះ $[0, 1]$។ (២) ហេតុអ្វីបានជាមេគុណ $V$ ស្តង់ដារមានភាពលម្អៀង (Biased)? សូមរំលឹកពីស្លាយទី ៣០ ថា ទោះបីជា $X$ និង $Y$ គ្មានទំនាក់ទំនងនឹងគ្នាសោះក៏ដោយ ក៏តម្លៃមធ្យមភាគនៃ $\\chi^2$ ស្មើនឹង $\\text{df} = (I-1)(J-1) > 0$ ដែរ (មិនមែនស្មើសូន្យទេ)! ហេតុនេះ មេគុណ $V$ ស្តង់ដារតែងតែផ្តល់តម្លៃវិជ្ជមានធំជាងសូន្យជានិច្ច ទោះបីជាទិន្នន័យកើតឡើងដោយចៃដន្យសុទ្ធសាធក៏ដោយ។ រូបមន្តកែតម្រូវភាពលម្អៀង $\\tilde{V}$ ដោះស្រាយបញ្ហានេះដោយដក $\\frac{\\text{df}}{n-1}$ ចេញពី $\\frac{\\chi^2}{n}$ ជាមុនសិន!',
      },
      practicalApplication: {
        scenarioTitle: {
          en: 'Ranking Categorical Feature Associations in High-Cardinality BI Datasets',
          km: 'ការដាក់ចំណាត់ថ្នាក់កម្រិតទំនាក់ទំនងនៃអថេរគុណភាពក្នុងទិន្នន័យដែលមានក្រុមច្រើន',
        },
        description: {
          en: 'When comparing Product Category (20 items) across 25 Provinces in a sample of n = 500 orders, standard Cramér’s V artificially inflates to ~0.35 even on random data because df = 19 × 24 = 456! Using Bias-Corrected Ṽ correctly resets noise to 0.00.',
          km: 'នៅពេលប្រៀបធៀបប្រភេទទំនិញ (២០ មុខ) ឆ្លងកាត់ ២៥ ខេត្ត-រាជធានី លើគំរូការបញ្ជាទិញចំនួន n = 500 នោះមេគុណ Cramér’s V ធម្មតានឹងលោតឡើងដល់ ~0.35 ទោះបីជាទិន្នន័យចៃដន្យក៏ដោយ ព្រោះ df = 19 × 24 = 456 ធំពេក! ការប្រើប្រាស់រូបមន្តកែតម្រូវភាពលម្អៀង Ṽ ជួយទាញតម្លៃលម្អៀងនោះឱ្យត្រឡប់មករក 0.00 វិញយ៉ាងត្រឹមត្រូវ។',
        },
        impactMetric: 'Corrects upward finite-sample bias across all I × J qualitative contingency tables',
      },
    },
  },

  // ==========================================
  // SLIDE 33 (PDF Page 33 — Blank Transition Slide numbered 32)
  // ==========================================
  {
    pageNumber: 33,
    slideFooterNumber: '32 (Transition)',
    sectionTag: {
      en: '2.4 → 2.5 Pedagogical Transition & Synthesis Canvas',
      km: 'ទំព័រអន្តរកាល និងសំយោគចំណេះដឹង មុនឈានចូលផ្នែក 2.5 (ពហុព័ត៌មាន)',
    },
    simulatorMode: 'reflective_pause_canvas',
    pageIdentity: {
      titleEn: 'Synthesis & Pause Canvas — Bridging Bivariate Pairs (2.1–2.4) to Multivariate Encoding (2.5)',
      titleKm: 'ទំព័រសម្រាក និងសំយោគរួម — ការភ្ជាប់ពីការវិភាគទ្វេអថេរ (2.1–2.4) ទៅកាន់ការបង្ហាញពហុព័ត៌មាន (2.5)',
      themeName: {
        en: 'Minimalist White Architectural Pause Canvas',
        km: 'ផ្ទៃពណ៌សតិចតួចបំផុត (Minimalist White Canvas) សម្រាប់ការសំយោគមេរៀន',
      },
      canvasBgHex: '#FFFFFF',
      surfaceCardHex: '#F8FAFC',
      primaryAccentHex: '#1E4E79',
      secondaryAccentHex: '#9B1B30',
      textPrimaryHex: '#0F172A',
      hierarchyRationale: {
        en: 'Honors the exact clean white canvas (#FFFFFF) of PDF Page 33 (which displays only the top-right AMS logo and bottom-right slide number 32 as an intentional classroom whiteboard / pause slide) while turning it into an interactive Master Cheat-Sheet & Whiteboard in Looker Studio.',
        km: 'រក្សាទម្រង់ផ្ទៃពណ៌សស្អាត (#FFFFFF) នៃទំព័រទី ៣៣ ក្នុងឯកសារ PDF (ដែលមានតែនិមិត្តសញ្ញា AMS និងលេខស្លាយ 32 សម្រាប់ជាក្តារខៀនសង្ខេបក្នុងថ្នាក់រៀន) ដោយរៀបចំវាជាផ្ទាំងក្តារខៀនសង្ខេបរូបមន្តទាំង ៣ ករណីមុននឹងឈានចូលផ្នែក 2.5។',
      },
    },
    wireframe: {
      headerSection: {
        en: 'Top-right AMS institutional emblem on a pure minimalist white (#FFFFFF) canvas.',
        km: 'និមិត្តសញ្ញាដេប៉ាតឺម៉ង់ AMS នៅជ្រុងលើខាងស្តាំលើផ្ទៃពណ៌សស្អាត (#FFFFFF)។',
      },
      leftZone: {
        en: 'Center Minimalist Whiteboard Grid: Complete 3-Case Bivariate Mastery Summary (2.1/2.2 Quan–Quan: Cov, r, ρ, Scatterplot; 2.3 Quan–Qual: η², Box/Violin/Density; 2.4 Qual–Qual: χ², Cramér’s V, Ṽ, Treemap/Stacked Bar).',
        km: 'ផ្ទាំងក្តារខៀនសង្ខេបនៅកណ្តាល៖ តារាងសំយោគរួមនៃករណីទាំង ៣ ដែលទើបបានសិក្សាចប់ (2.1/2.2 បរិមាណ-បរិមាណ, 2.3 បរិមាណ-គុណភាព, និង 2.4 គុណភាព-គុណភាព)។',
      },
      rightZone: {
        en: 'Right Bridge Card: Preview of how Sections 2.5–2.8 combine 3, 4, or 5 variables onto a single 2D canvas using Color, Shape, Size, Time, and Animation.',
        km: 'ប្រអប់តភ្ជាប់នៅខាងស្តាំ៖ បង្ហាញពីរបៀបដែលផ្នែក 2.5 ដល់ 2.8 នឹងបញ្ចូលអថេរចំនួន ៣, ៤ ឬ ៥ ទៅក្នុងក្រាហ្វតែមួយ តាមរយៈការប្រើពណ៌ រូបរាង ទំហំ និងពេលវេលា។',
      },
      bottomOrTopBar: {
        en: 'Bottom-right slide footer "32" (PDF Page 33 of 41).',
        km: 'លេខសម្គាល់ទំព័រ «32» នៅជ្រុងក្រោមខាងស្តាំ (ទំព័រទី ៣៣ នៃ ៤១ ក្នុង PDF)។',
      },
      gridAllocation: 'Minimalist Open Whiteboard Layout (8 Columns Summary Matrix + 4 Columns Next-Stage Bridge)',
    },
    chartMetricsMath: {
      scorecards: [
        {
          label: { en: 'Completed Bivariate Cases', km: 'ករណីទ្វេអថេរដែលបានសិក្សាចប់' },
          value: '3 / 3 Cases',
          metricField: 'completed_cases',
          aggregation: 'Milestone',
          comparisonNote: { en: 'Sections 2.1, 2.2, 2.3, and 2.4 complete', km: 'បានបញ្ចប់ផ្នែក 2.1, 2.2, 2.3 និង 2.4 ទាំងស្រុង' },
        },
        {
          label: { en: 'Next Phase (Slides 34–39)', km: 'ដំណាក់កាលបន្ទាប់ (ស្លាយទី ៣៤–៣៩)' },
          value: 'Multivariate & Time',
          metricField: 'next_phase',
          aggregation: 'Milestone',
          comparisonNote: { en: 'Color, Shape, Bubble Size, Line & Animation', km: 'ពណ៌ រូបរាង ទំហំពពុះ ក្រាហ្វបន្ទាត់ និងចលនា' },
        },
      ],
      charts: [
        {
          chartType: {
            en: 'Looker Studio Master Bivariate Formula & Chart Cheat-Sheet Table',
            km: 'តារាងសង្ខេបរូបមន្តសូចនាករ និងក្រាហ្វទាំងអស់នៃការវិភាគទ្វេអថេរ (Master Cheat-Sheet)',
          },
          dimensions: ['section_code', 'variable_pair_type', 'indicator_formulas', 'primary_charts'],
          metrics: ['bounded_range'],
          sorting: 'section_code ASC',
          stylingNote: {
            en: 'Serves as an interactive study checkpoint on the intentional pause slide before entering Section 2.5.',
            km: 'ដើរតួជាតារាងត្រួតពិនិត្យចំណេះដឹងនៅលើទំព័រអន្តរកាល មុនពេលចូលដល់ផ្នែក 2.5។',
          },
        },
      ],
      formulas: [],
    },
    controls: [
      {
        controlType: { en: 'Interactive Self-Check Quiz / Case Filter', km: 'ប៊ូតុងសាកល្បងចំណេះដឹងរហ័សលើករណីទាំង ៣' },
        field: 'review_case_filter',
        defaultState: 'Show Complete 2.1–2.4 Synthesis',
        purpose: {
          en: 'Allows instructors to use this blank whiteboard slide as an interactive classroom review station.',
          km: 'អនុញ្ញាតឱ្យគ្រូឧទ្ទេសប្រើប្រាស់ទំព័រក្តារខៀនទំនេរនេះ សម្រាប់សួរសំណួររំលឹកមេរៀនដល់និស្សិតក្នុងថ្នាក់។',
        },
      },
    ],
    expandedContent: {
      onScreenText: {
        heading: {
          en: 'Classroom Whiteboard Checkpoint: From 2 Variables to Multiple Information',
          km: 'ចំណុចសំយោគមេរៀនលើក្តារខៀន៖ ពីអថេរចំនួន ២ ឆ្ពោះទៅកាន់ការបង្ហាញពហុព័ត៌មាន',
        },
        bullets: [
          {
            en: 'Why PDF Page 33 Is a Blank Canvas (Numbered 32): In the lecture deck, this page serves as an intentional pause after completing all three bivariate indicator families (Pearson/Spearman, Eta-squared, Chi-square/Cramér’s V) before moving to visual encodings of 3+ variables.',
            km: 'ហេតុអ្វីទំព័រទី ៣៣ ក្នុង PDF ជាទំព័រទំនេរ (លេខស្លាយ 32)៖ នៅក្នុងបទបង្ហាញមេរៀន ទំព័រនេះត្រូវបានទុកសម្រាប់ជាចំណុចសំយោគ និងសម្រាកបន្ទាប់ពីបញ្ចប់ការគណនាសូចនាករទាំង ៣ ករណី មុននឹងឈានចូលដល់ការបង្ហាញអថេរចាប់ពី ៣ ឡើងទៅនៅលើក្រាហ្វតែមួយ។',
          },
          {
            en: 'Recap of 2.1–2.4: Two Quantitative columns → r or ρ + Scatterplot; Quantitative vs Qualitative → η² + Conditional Box/Violin; Two Qualitative columns → χ² & Cramér’s Ṽ + Treemap/Stacked Barplot.',
            km: 'សង្ខេបផ្នែក 2.1–2.4៖ បរិមាណ និង បរិមាណ → r ឬ ρ + Scatterplot; បរិមាណ និង គុណភាព → η² + Box/Violin; គុណភាព និង គុណភាព → χ² និង Cramér’s Ṽ + Treemap/Stacked Barplot។',
          },
        ],
        callout: {
          en: 'Transition Question for Students: A computer screen only has 2 spatial dimensions (X-axis and Y-axis). How can we plot a 3rd, 4th, or 5th variable on the same graph? Through Color, Shape, Size, and Time (Sections 2.5–2.8)!',
          km: 'សំណួរឆ្ពោះទៅមេរៀនបន្ទាប់៖ អេក្រង់កុំព្យូទ័រមានអ័ក្សតែ ២ ប៉ុណ្ណោះ (អ័ក្សដេក X និងអ័ក្សឈរ Y)។ តើយើងអាចបង្ហាញអថេរទី ៣ ទី ៤ ឬទី ៥ នៅលើក្រាហ្វតែមួយបានដោយរបៀបណា? គឺតាមរយៈការប្រើប្រាស់ ពណ៌ រូបរាង ទំហំ និងពេលវេលា (ផ្នែក 2.5–2.8)!',
        },
      },
      deepDiveExplanation: {
        en: 'In LaTeX Beamer / academic slide decks, a blank frame immediately following a dense mathematical derivation (like Bergsma’s bias-corrected Cramér’s $\\tilde{V}$ on Slide 32) gives the lecturer a clean whiteboard space to summarize the 3-Case taxonomy before shifting gears from mathematical test statistics to multidimensional visual channels. In Google Looker Studio, rather than leaving Page 33 empty, we transform it into a **Minimalist Executive Reference & Checkpoint Page** that consolidates all six mathematical indicators ($\\text{Cov}(X,Y), r, \\rho, \\eta^2, \\chi^2, \\tilde{V}$) side-by-side and prepares the viewer for Jacques Bertin’s retinal visual variables (Color Hue, Color Gradient, Shape, Size, and Motion) in Sections 2.5–2.8.',
        km: 'នៅក្នុងស្លាយបង្រៀនកម្រិតសាកលវិទ្យាល័យ ទំព័រទំនេរដែលស្ថិតនៅបន្ទាប់ពីរូបមន្តគណិតវិទ្យាដ៏ស្មុគស្មាញ (ដូចជារូបមន្តកែតម្រូវភាពលម្អៀងរបស់ Cramér’s $\\tilde{V}$ នៅស្លាយទី ៣២) ត្រូវបានប្រើប្រាស់ជាក្តារខៀនសម្រាប់សង្ខេបរូបមន្តទាំងអស់នៃករណីទាំង ៣ មុននឹងប្តូរប្រធានបទទៅកាន់ការរចនាក្រាហ្វពហុអថេរ។ នៅក្នុងកម្មវិធី Google Looker Studio ជំនួសឱ្យការទុកទំព័រទី ៣៣ ឱ្យទទេស្អាត យើងរៀបចំវាជា **ទំព័រសំយោគរូបមន្ត និងត្រួតពិនិត្យចំណេះដឹង (Master Checkpoint)** ដែលប្រមូលផ្តុំសូចនាករទាំង ៦ ($\\text{Cov}(X,Y), r, \\rho, \\eta^2, \\chi^2, \\tilde{V}$) មកដាក់ក្នុងតារាងតែមួយ មុននឹងឈានចូលដល់ការប្រើប្រាស់ ពណ៌ រូបរាង ទំហំ និងចលនា នៅក្នុងផ្នែក 2.5 ដល់ 2.8។',
      },
      practicalApplication: {
        scenarioTitle: {
          en: 'Embedding a Methodology Glossary Page Inside Enterprise Looker Studio Reports',
          km: 'ការដាក់ទំព័រសទ្ទានុក្រមរូបមន្តវិភាគ (Methodology Glossary) នៅក្នុងរបាយការណ៍ BI',
        },
        description: {
          en: 'Professional BI dashboards include a clean reference page between the statistical summary section and the deep-dive visual exploration section so executives can verify formula definitions at any time.',
          km: 'ផ្ទាំងរបាយការណ៍ BI អាជីពតែងតែដាក់ទំព័រសង្ខេបរូបមន្តមួយនៅចន្លោះផ្នែកស្ថិតិ និងផ្នែកក្រាហ្វពហុអថេរ ដើម្បីឱ្យថ្នាក់ដឹកនាំអាចផ្ទៀងផ្ទាត់និយមន័យនៃសូចនាករនីមួយៗបានគ្រប់ពេល។',
        },
        impactMetric: 'Unifies all 6 bivariate indicators into a single one-page reference checkpoint',
      },
    },
  },

  // ==========================================
  // SLIDE 34 (PDF Page 34 — Slide Footer 33)
  // ==========================================
  {
    pageNumber: 34,
    slideFooterNumber: '33',
    sectionTag: {
      en: '2.5 Multiple Information — Using Color (Quantitative & Qualitative)',
      km: '2.5 ការបង្ហាញពហុព័ត៌មាន — ការប្រើប្រាស់ពណ៌សម្រាប់ទិន្នន័យបរិមាណ និងគុណភាព',
    },
    simulatorMode: 'multivariate_color_encoding',
    pageIdentity: {
      titleEn: '2.5 Multiple Information — Using Color: Quantitative Gradient & Qualitative Palette',
      titleKm: '2.5 ការបង្ហាញពហុព័ត៌មាន — ការប្រើប្រាស់ពណ៌៖ សម្រាប់អថេរបរិមាណ និងអថេរគុណភាព',
      themeName: {
        en: 'Chromatic Visual Encoding Studio',
        km: 'ផ្ទៃបង្ហាញការប្រើប្រាស់កូដពណ៌នៅលើក្រាហ្វ Scatterplot',
      },
      canvasBgHex: '#F8FAFC',
      surfaceCardHex: '#FFFFFF',
      primaryAccentHex: '#2563EB',
      secondaryAccentHex: '#DC2626',
      textPrimaryHex: '#0F172A',
      hierarchyRationale: {
        en: 'Uses #2563EB Blue for "Quantitative (in form of gradient)" and #DC2626 Red for "Qualitative data (discrete color)", paired with the Gapminder 2007 log-GDP vs LifeExp scatterplot.',
        km: 'ប្រើពណ៌ខៀវ (#2563EB) សម្រាប់ពាក្យ «Quantitative (ជាទម្រង់ពណ៌ដេញកម្រិត/Gradient)» និងពណ៌ក្រហម (#DC2626) សម្រាប់ «Qualitative (ជាពណ៌ដាច់ៗពីគ្នា)» អមដោយក្រាហ្វ Scatterplot នៃទិន្នន័យឆ្នាំ ២០០៧។',
      },
    },
    wireframe: {
      headerSection: {
        en: 'Top Header: "2.5 Multiple Information — Using Color: Quantitative & Qualitative".',
        km: 'ផ្នែកខាងលើ៖ ចំណងជើង «2.5 Multiple Information — Using Color: Quantitative & Qualitative»។',
      },
      leftZone: {
        en: 'Left Column (45% width): Two chromatic encoding rules — Color can represent: (1) qualitative data (discrete color palette), or (2) quantitative data (continuous color gradient) + Example: `Color = log_pop` (quantitative) or `Color = continent` (qualitative).',
        km: 'ជួរឈរខាងឆ្វេង (ទទឹង ៤៥%)៖ វិធាននៃការប្រើពណ៌ទាំងពីរ — ពណ៌អាចតំណាងឱ្យ៖ (១) ទិន្នន័យគុណភាព (ពណ៌ដាច់ៗពីគ្នា) ឬ (២) ទិន្នន័យបរិមាណ (ពណ៌ដេញកម្រិតពីខ្ចីទៅចាស់) + ឧទាហរណ៍៖ `Color = log_pop` (បរិមាណ)។',
      },
      rightZone: {
        en: 'Right Column (55% width): Interactive Scatterplot "Life Expectancy vs GDP per Capita & Continent" (`gdpPercap` log X-axis 200 to 50k; `lifeExp` Y-axis 40 to 85) where users can switch the 3rd variable mapped to Color between `Data 2007 (Baseline)`, `log_pop (Quantitative Gradient)`, and `continent (Discrete Qualitative)`.',
        km: 'ជួរឈរខាងស្តាំ (ទទឹង ៥៥%)៖ ក្រាហ្វ Scatterplot «Life Expectancy vs GDP per Capita & Continent» ដែលអនុញ្ញាតឱ្យប្តូរអថេរទី ៣ ដែលតំណាងដោយពណ៌ រវាងពណ៌មូលដ្ឋាន, ពណ៌ដេញកម្រិតតាម `log_pop` និងពណ៌ដាច់ៗតាមទ្វីប `continent`។',
      },
      bottomOrTopBar: {
        en: 'Bottom Color Perception Guide contrasting Sequential/Viridis gradients (for quantitative numbers) vs Distinct Categorical hues (for qualitative groups).',
        km: 'របារណែនាំខាងក្រោមដែលប្រៀបធៀបរវាងការប្រើពណ៌ដេញកម្រិត (Sequential Gradient សម្រាប់តួលេខ) និងពណ៌ដាច់ៗពីគ្នា (Categorical Hues សម្រាប់ក្រុមគុណភាព)។',
      },
      gridAllocation: '5 Columns Left (Color Encoding Rules) + 7 Columns Right (3-Variable Chromatic Scatterplot)',
    },
    chartMetricsMath: {
      scorecards: [
        {
          label: { en: 'Spatial Axes (X & Y)', km: 'អ័ក្សលំហទាំងពីរ (អ័ក្ស X និង Y)' },
          value: '2 Variables',
          metricField: 'spatial_vars',
          aggregation: 'Position Channel',
          comparisonNote: { en: 'X = log(gdpPercap), Y = lifeExp', km: 'អ័ក្ស X = log(gdpPercap), អ័ក្ស Y = lifeExp' },
        },
        {
          label: { en: 'Color Channel (3rd Var)', km: 'ប៉ុស្តិ៍ពណ៌ (អថេរទី ៣)' },
          value: '+1 Variable',
          metricField: 'color_channel_var',
          aggregation: 'Retinal Hue / Luminance',
          comparisonNote: { en: 'Discrete (Continent) or Gradient (log_pop)', km: 'ពណ៌ដាច់ៗ (ទ្វីប) ឬពណ៌ដេញកម្រិត (log_pop)' },
        },
      ],
      charts: [
        {
          chartType: {
            en: 'Looker Studio 3-Variable Scatterplot (`gdpPercap` X, `lifeExp` Y, `Color` = 3rd Variable)',
            km: 'ក្រាហ្វ Scatterplot បង្ហាញអថេរ ៣ ក្នុងពេលតែមួយ (X = `gdpPercap`, Y = `lifeExp`, ពណ៌ = អថេរទី ៣)',
          },
          dimensions: ['country'],
          breakdownDimension: 'continent (or log_pop color metric)',
          metrics: ['gdpPercap', 'lifeExp', 'log_pop'],
          sorting: 'gdpPercap ASC',
          stylingNote: {
            en: 'In Looker Studio, use "Color by dimension" for qualitative `continent` or "Color by metric (Sequential gradient)" for quantitative `log_pop`.',
            km: 'នៅក្នុង Looker Studio សូមជ្រើសរើសការដាក់ពណ៌តាម Dimension សម្រាប់អថេរគុណភាព `continent` ឬតាម Metric (ពណ៌ដេញកម្រិត) សម្រាប់អថេរបរិមាណ `log_pop`។',
          },
        },
      ],
      formulas: [],
    },
    controls: [
      {
        controlType: { en: 'Segmented Button Control (Color Encoding Mode)', km: 'ប៊ូតុងជ្រើសរើសប្រភេទពណ៌ (Discrete Continent vs Gradient log_pop vs Single Color)' },
        field: 'color_encoding_mode',
        defaultState: 'Quantitative Gradient (`Color = log_pop`)',
        purpose: {
          en: 'Lets students toggle the exact scatterplot on Slide 34 between uncolored baseline (`Data 2007`), quantitative gradient (`log_pop`), and qualitative discrete colors (`continent`).',
          km: 'អនុញ្ញាតឱ្យនិស្សិតសាកល្បងប្តូរពណ៌លើក្រាហ្វ Scatterplot នៃស្លាយទី ៣៤ រវាងពណ៌ធម្មតា (`Data 2007`), ពណ៌ដេញកម្រិត (`log_pop`) និងពណ៌តាមទ្វីប (`continent`)។',
        },
      },
    ],
    expandedContent: {
      onScreenText: {
        heading: {
          en: '2.5 Multiple Information: Encoding a 3rd Variable Using Color',
          km: '2.5 ការបង្ហាញពហុព័ត៌មាន៖ ការបញ្ចូលអថេរទី ៣ ទៅក្នុងក្រាហ្វតាមរយៈការប្រើប្រាស់ពណ៌',
        },
        bullets: [
          {
            en: 'Once X and Y occupy the horizontal and vertical axes of a scatterplot, Color can represent a third variable!',
            km: 'នៅពេលអថេរ X និង Y ត្រូវបានដាក់នៅលើអ័ក្សដេក និងអ័ក្សឈរនៃក្រាហ្វ Scatterplot រួចហើយ យើងអាចប្រើប្រាស់ «ពណ៌ (Color)» ដើម្បីតំណាងឱ្យអថេរទី ៣ បាន!',
          },
          {
            en: 'Qualitative Data → Discrete Color Palette: Assign distinct hues (e.g., Blue, Red, Green, Purple, Orange) to unordered categories like `continent`.',
            km: 'ទិន្នន័យគុណភាព (Qualitative) → ពណ៌ដាច់ៗពីគ្នា (Discrete Color)៖ កំណត់ពណ៌ខុសៗគ្នាសម្រាប់ក្រុមនីមួយៗ ដូចជាទ្វីបទាំង ៥ (`continent`)។',
          },
          {
            en: 'Quantitative Data → Continuous Color Gradient: Map numerical magnitude (such as `Color = log_pop`) to a smooth sequential luminance/color ramp (e.g., dark purple to bright yellow).',
            km: 'ទិន្នន័យបរិមាណ (Quantitative) → ពណ៌ដេញកម្រិត (Gradient)៖ តំណាងតម្លៃលេខតិចឬច្រើន (ដូចជា `Color = log_pop`) ដោយប្រើកម្រិតពណ៌ដេញពីខ្ចីទៅចាស់ ឬពីងងឹតទៅភ្លឺ។',
          },
        ],
        callout: {
          en: 'Visual Design Rule: Never use a rainbow discrete palette for a quantitative number, and never use a light-to-dark monochrome gradient for 10 unordered nominal categories!',
          km: 'វិធាននៃការរចនាក្រាហ្វ៖ កុំប្រើពណ៌ឥន្ទធនូដាច់ៗសម្រាប់តួលេខបរិមាណ ហើយក៏កុំប្រើពណ៌ដេញកម្រិតពីខ្ចីទៅចាស់សម្រាប់អថេរគុណភាពដែលគ្មានលំដាប់ខ្ពស់ទាបដែរ!',
        },
      },
      deepDiveExplanation: {
        en: 'Slide 34 (numbered 33 on the slide footer) launches Section 2.5 ("Multiple Information"), which extends Bivariate Analysis into **Multivariate Visualization**. How do we project a 3-dimensional or 4-dimensional dataset onto a flat 2D screen? French cartographer Jacques Bertin (1967) classified visual channels into *Planar Position* ($X$ and $Y$ axes) and *Retinal Variables* (Color Hue, Color Value/Luminance, Shape, Size, Orientation, Texture). Color is unique because it has two distinct perceptual dimensions: **Hue** (red vs blue vs green, which the human eye perceives as unordered categories—ideal for Qualitative data like `continent`) and **Luminance / Saturation Gradient** (light to dark or cool to warm, which the human eye perceives as ordered magnitude—ideal for Quantitative data like `log_pop`). Notice that when we map raw `pop` to a color gradient, China and India hog the top end of the colorbar while 140 countries look uniformly dark; taking `Color = log_pop` distributes the color gradient evenly across all 142 nations!',
        km: 'ស្លាយទី ៣៤ (លេខស្លាយ 33) ចាប់ផ្តើមផ្នែក 2.5 («ការបង្ហាញពហុព័ត៌មាន / Multiple Information») ដែលពង្រីកការវិភាគទ្វេអថេរទៅជាការបង្ហាញអថេរច្រើនក្នុងពេលតែមួយ។ តើយើងអាចបង្ហាញទិន្នន័យដែលមាន ៣ ឬ ៤ អថេរនៅលើអេក្រង់រាបស្មើ 2D ដោយរបៀបណា? គឺតាមរយៈការប្រើអ័ក្សទីតាំងទាំងពីរ ($X$ និង $Y$) រួមជាមួយនឹងធាតុមើលឃើញបន្ថែម ដូចជា ពណ៌ (Color), រូបរាង (Shape) និងទំហំ (Size)។ «ពណ៌» មានលក្ខណៈពិសេសត្រង់ថាវាអាចប្រើបានទាំងពីរទម្រង់៖ ទីមួយគឺ **ប្រភេទពណ៌ខុសៗគ្នា (Discrete Hue)** ដូចជា ខៀវ ក្រហម បៃតង ដែលភ្នែកមនុស្សមើលឃើញថាជាក្រុមដាច់ៗពីគ្នា (ស័ក្តិសមបំផុតសម្រាប់ទិន្នន័យគុណភាពដូចជា `continent`) និងទីពីរគឺ **កម្រិតពណ៌ដេញពីខ្ចីទៅចាស់ (Continuous Gradient)** ដែលភ្នែកមនុស្សមើលឃើញថាជាកម្រិតតិចទៅច្រើន (ស័ក្តិសមបំផុតសម្រាប់ទិន្នន័យបរិមាណដូចជា `log_pop`)។',
      },
      practicalApplication: {
        scenarioTitle: {
          en: '3D Store Performance Mapping in Looker Studio (Traffic × Conversion × Basket Size)',
          km: 'ការបង្ហាញប្រសិទ្ធភាពសាខាលើទិដ្ឋភាព ៣ ក្នុងពេលតែមួយនៅក្នុង Looker Studio',
        },
        description: {
          en: 'A retail BI dashboard plots Store Foot Traffic on the X-axis, Conversion Rate on the Y-axis, and maps Average Order Value (Quantitative) to a continuous Viridis color gradient so executives can spot high-traffic, high-conversion, high-basket stores in one glance.',
          km: 'ផ្ទាំងគ្រប់គ្រងការលក់រាយដាក់ «ចំនួនភ្ញៀវចូលហាង» លើអ័ក្ស X, «អត្រាទិញទំនិញ» លើអ័ក្ស Y និងកំណត់ «ទឹកប្រាក់ទិញមធ្យម» (បរិមាណ) ទៅជាពណ៌ដេញកម្រិត (Color Gradient) ដើម្បីឱ្យថ្នាក់ដឹកនាំមើលឃើញសាខាឆ្នើមទាំង ៣ លក្ខខណ្ឌក្នុងក្រាហ្វតែមួយ។',
        },
        impactMetric: 'Encodes 3 simultaneous variables on a single 2D coordinate plane',
      },
    },
  },

  // ==========================================
  // SLIDE 35 (PDF Page 35 — Slide Footer 34)
  // ==========================================
  {
    pageNumber: 35,
    slideFooterNumber: '34',
    sectionTag: {
      en: '2.5 Multiple Information — Shape/Symbol for Qualitative Data',
      km: '2.5 ការបង្ហាញពហុព័ត៌មាន — ការប្រើប្រាស់រូបរាងនិមិត្តសញ្ញា (Shape/Symbol) សម្រាប់ទិន្នន័យគុណភាព',
    },
    simulatorMode: 'multivariate_shape_encoding',
    pageIdentity: {
      titleEn: 'Shape/Symbol: Qualitative — Encoding a 4th Variable & Visual Complexity Warning',
      titleKm: 'រូបរាងនិមិត្តសញ្ញា (Shape/Symbol)៖ សម្រាប់ទិន្នន័យគុណភាព និងការព្រមានអំពីភាពស្មុគស្មាញនៃក្រាហ្វ',
      themeName: {
        en: 'Multi-Channel Symbol & Hue Diagnostic Studio',
        km: 'ផ្ទៃបង្ហាញការប្រើប្រាស់រូបរាងនិមិត្តសញ្ញា (Symbol) គួបផ្សំនឹងពណ៌ (Color)',
      },
      canvasBgHex: '#F8FAFC',
      surfaceCardHex: '#FFFFFF',
      primaryAccentHex: '#DC2626',
      secondaryAccentHex: '#1E4E79',
      textPrimaryHex: '#0F172A',
      hierarchyRationale: {
        en: 'Highlights "Qualitative" in #DC2626 Crimson, renders the 12-item combined legend (`continent, gdp_category` with Circle = Developing, Diamond = Emerging, Square = Developed), and features amber warning badges for cognitive overload.',
        km: 'រំលេចពាក្យ «Qualitative» ដោយពណ៌ក្រហម (#DC2626) និងបង្ហាញក្រាហ្វដែលរួមបញ្ចូលទាំងពណ៌តាមទ្វីប និងរូបរាងតាមកម្រិត GDP (រង្វង់ = Developing, ពេជ្រ = Emerging, ការ៉េ = Developed) អមដោយសញ្ញាព្រមានពណ៌លឿងទុំ។',
      },
    },
    wireframe: {
      headerSection: {
        en: 'Top Header: "Shape/Symbol: Qualitative / ការប្រើប្រាស់រូបរាងនិមិត្តសញ្ញាសម្រាប់ទិន្នន័យគុណភាព".',
        km: 'ផ្នែកខាងលើ៖ ចំណងជើង «Shape/Symbol: Qualitative / រូបរាងនិមិត្តសញ្ញាសម្រាប់ទិន្នន័យគុណភាព»។',
      },
      leftZone: {
        en: 'Left Column (42% width): Definition ("Shape for representing qualitative data") + Example (`Symbol = gdp_category`, `Color = continent`) + Two Caution Warnings ("⚠️ Combining numerous colors and symbols can complicate a graph. ⚠️ Use them carefully and only when appropriate.").',
        km: 'ជួរឈរខាងឆ្វេង (ទទឹង ៤២%)៖ និយមន័យ («រូបរាងនិមិត្តសញ្ញាសម្រាប់តំណាងទិន្នន័យគុណភាព») + ឧទាហរណ៍ (`Symbol = gdp_category`, `Color = continent`) + ការព្រមានចំនួនពីរអំពីការប្រើពណ៌ និងរូបរាងច្រើនពេកដែលធ្វើឱ្យក្រាហ្វស្មុគស្មាញពិបាកមើល។',
      },
      rightZone: {
        en: 'Right Column (58% width): 4-Variable Scatterplot "Life Expectancy vs GDP per Capita & Continent" (X = `log(gdpPercap)`, Y = `lifeExp`, Color = `continent`, Shape = `gdp_category` resulting in 12 legend combinations!).',
        km: 'ជួរឈរខាងស្តាំ (ទទឹង ៥៨%)៖ ក្រាហ្វ Scatterplot បង្ហាញអថេរ ៤ ក្នុងពេលតែមួយ (X = `log(gdpPercap)`, Y = `lifeExp`, ពណ៌ = `continent`, រូបរាង = `gdp_category`) ដែលបង្កើតបានជាកំណត់សម្គាល់ (Legend) រហូតដល់ ១២ ក្រុម!',
      },
      bottomOrTopBar: {
        en: 'Bottom Perceptual Psychology Note explaining why human pre-attentive vision struggles when 5 colors × 3 shapes = 12–15 conjunction targets are mixed.',
        km: 'របារពន្យល់ខាងក្រោមអំពីមូលហេតុដែលភ្នែកមនុស្សពិបាកបែងចែកនៅពេលយើងលាយបញ្ចូលគ្នារវាងពណ៌ ៥ ប្រភេទ និងរូបរាង ៣ ប្រភេទ (បង្កើតបានជា ១២–១៥ ក្រុម)។',
      },
      gridAllocation: '5 Columns Left (Symbol Rules & Overload Warnings) + 7 Columns Right (4-Variable Symbol+Color Plot)',
    },
    chartMetricsMath: {
      scorecards: [
        {
          label: { en: 'Symbol Shapes Used', km: 'រូបរាងនិមិត្តសញ្ញាដែលប្រើ (Shapes)' },
          value: '3 Shapes (● ◆ ■)',
          metricField: 'symbol_count',
          aggregation: 'Shape Channel',
          comparisonNote: { en: '● Developing | ◆ Emerging | ■ Developed', km: '● កំពុងអភិវឌ្ឍ | ◆ កំពុងលូតលាស់ | ■ អភិវឌ្ឍន៍ហើយ' },
        },
        {
          label: { en: 'Combined Legend Items', km: 'ចំនួនក្រុមសរុបក្នុងប្រអប់ Legend' },
          value: '12 Combinations',
          metricField: 'legend_cardinality',
          aggregation: 'Continent × GDP Tier',
          comparisonNote: { en: 'Demonstrates visual conjunction complexity!', km: 'បង្ហាញពីភាពស្មុគស្មាញនៅពេលលាយពណ៌ និងរូបរាងច្រើនពេក!' },
        },
      ],
      charts: [
        {
          chartType: {
            en: '4-Variable Scatterplot (`gdpPercap` X, `lifeExp` Y, `continent` Color, `gdp_category` Shape)',
            km: 'ក្រាហ្វ Scatterplot បង្ហាញអថេរ ៤ (X = `gdpPercap`, Y = `lifeExp`, ពណ៌ = `continent`, រូបរាង = `gdp_category`)',
          },
          dimensions: ['country', 'continent', 'gdp_category'],
          metrics: ['gdpPercap', 'lifeExp'],
          sorting: 'continent ASC, gdp_category ASC',
          stylingNote: {
            en: 'Replicates Slide 35’s exact Plotly marker shapes: Circle (●) for Developing, Diamond (◆) for Emerging, Square (■) for Developed.',
            km: 'ប្រើរូបរាងចំណុចដូចក្នុងស្លាយទី ៣៥៖ រង្វង់ (●) សម្រាប់ Developing, រាងពេជ្រ (◆) សម្រាប់ Emerging, និងការ៉េ (■) សម្រាប់ Developed។',
          },
        },
      ],
      formulas: [],
    },
    controls: [
      {
        controlType: { en: 'Drop-down List Control (Shape / Continent Simplifier)', km: 'ប៊ូតុងកាត់បន្ថយភាពស្មុគស្មាញនៃក្រាហ្វ (Filter by Continent or Shape)' },
        field: 'continent',
        defaultState: 'All 12 Combinations (Full Slide 35 View)',
        purpose: {
          en: 'Lets students experience how filtering down to 1 or 2 continents immediately restores visual readability to the symbol+color plot.',
          km: 'អនុញ្ញាតឱ្យនិស្សិតពិសោធមើលថា ការច្រោះយកតែ ១ ឬ ២ ទ្វីប ជួយឱ្យក្រាហ្វដែលមានទាំងពណ៌ និងរូបរាងនេះ ប្រែជាងាយស្រួលមើលឡើងវិញភ្លាមៗ។',
        },
      },
    ],
    expandedContent: {
      onScreenText: {
        heading: {
          en: 'Using Shape/Symbol for Qualitative Data & Avoiding Visual Clutter',
          km: 'ការប្រើប្រាស់រូបរាងនិមិត្តសញ្ញា (Shape/Symbol) សម្រាប់ទិន្នន័យគុណភាព និងការជៀសវាងភាពស្មុគស្មាញ',
        },
        bullets: [
          {
            en: 'Shape / Symbol is strictly used for representing qualitative (categorical) data with a small number of categories (ideally 2 to 4 shapes).',
            km: 'រូបរាងនិមិត្តសញ្ញា (Shape/Symbol) ត្រូវបានប្រើសម្រាប់តែទិន្នន័យគុណភាព (ប្រភេទ) ដែលមានចំនួនក្រុមតិចប៉ុណ្ណោះ (ល្អបំផុតគឺពី ២ ទៅ ៤ រូបរាង)។',
          },
          {
            en: 'Example on Gapminder 2007: `Symbol = gdp_category` (● Developing, ◆ Emerging, ■ Developed) and `Color = continent`.',
            km: 'ឧទាហរណ៍លើទិន្នន័យ Gapminder ឆ្នាំ ២០០៧៖ `Symbol = gdp_category` (● កំពុងអភិវឌ្ឍ, ◆ កំពុងលូតលាស់, ■ អភិវឌ្ឍន៍ហើយ) និង `Color = continent` (ពណ៌តាមទ្វីប)។',
          },
          {
            en: '⚠️ Warning 1: Combining numerous colors and symbols can complicate a graph (creating a 12-item legend that forces slow serial scanning).',
            km: '⚠️ ការព្រមានទី ១៖ ការដាក់បញ្ចូលគ្នានូវពណ៌ និងរូបរាងជាច្រើន អាចធ្វើឱ្យក្រាហ្វមានភាពស្មុគស្មាញពិបាកមើល (បង្កើតជាប្រអប់កំណត់សម្គាល់ដល់ទៅ ១២ ក្រុម)។',
          },
          {
            en: '⚠️ Warning 2: Use them carefully and only when appropriate!',
            km: '⚠️ ការព្រមានទី ២៖ សូមប្រើប្រាស់វាដោយប្រុងប្រយ័ត្ន និងតែនៅពេលណាដែលសមស្របប៉ុណ្ណោះ!',
          },
        ],
        callout: {
          en: 'Why Is `Symbol = gdp_category` Redundant Here? Because `gdp_category` was defined directly from `gdpPercap` (the X-axis)! Every circle ● is on the left, every diamond ◆ is in the middle, and every square ■ is on the right!',
          km: 'ហេតុអ្វីបានជាការដាក់ `Symbol = gdp_category` នៅទីនេះមិនសូវចាំបាច់? ពីព្រោះ `gdp_category` ត្រូវបានបែងចែកចេញពី `gdpPercap` (ដែលនៅលើអ័ក្ស X រួចទៅហើយ)! ដូច្នេះ រង្វង់ ● ទាំងអស់នៅខាងឆ្វេង ពេជ្រ ◆ នៅកណ្តាល និងការ៉េ ■ នៅខាងស្តាំស្រាប់!',
        },
      },
      deepDiveExplanation: {
        en: 'Slide 35 (footer 34) teaches both the mechanics of **Shape Encoding** and a profound lesson in cognitive psychology known as **Conjunction Search Interference** (Anne Treisman’s Feature Integration Theory). First, why can Shape only represent *qualitative* data? Because geometric shapes (circle $\\bullet$, diamond $\\blacklozenge$, square $\\blacksquare$, triangle $\\blacktriangle$) have no natural quantitative ordering—a square is not "twice as large" as a circle. Second, look at what happens in the Plotly chart on the right when we assign `Color = continent` (5 categories) and `Symbol = gdp_category` (3 categories): the legend explodes into 12 combined pairs (`Asia, Developing`, `Asia, Emerging`, ..., `Oceania, Developed`), and the human eye can no longer isolate a single continent or a single shape at a glance! Worse still, because `gdp_category` is merely a discretized version of the X-axis (`gdpPercap`), using shape for `gdp_category` adds visual clutter without adding new independent information. This sets up Slide 36, where replacing redundant Shape with quantitative **Size (`pop`)** creates the world-famous Bubble Chart!',
        km: 'ស្លាយទី ៣៥ (លេខស្លាយ 34) បង្រៀនយើងទាំងពីរបៀបប្រើប្រាស់ **រូបរាងនិមិត្តសញ្ញា (Shape Encoding)** និងមេរៀនចិត្តវិទ្យានៃការមើលឃើញដ៏សំខាន់មួយ។ ទីមួយ ហេតុអ្វីបានជារូបរាង (Shape) អាចតំណាងឱ្យតែទិន្នន័យគុណភាពប៉ុណ្ណោះ? ពីព្រោះរូបរាងធរណីមាត្រ (រង្វង់ $\\bullet$, ពេជ្រ $\\blacklozenge$, ការ៉េ $\\blacksquare$) គ្មានលំដាប់តិចច្រើនពីធម្មជាតិទេ—រូបការ៉េមិនមែន «ធំជាងពីរដង» នៃរូបរង្វង់ឡើយ។ ទីពីរ សូមមើលអ្វីដែលកើតឡើងនៅលើក្រាហ្វខាងស្តាំ នៅពេលយើងដាក់ `Color = continent` (៥ ទ្វីប) គួបផ្សំនឹង `Symbol = gdp_category` (៣ កម្រិត)៖ ប្រអប់កំណត់សម្គាល់ (Legend) រីកធំរហូតដល់ទៅ ១២ ក្រុម ហើយភ្នែករបស់យើងពិបាកញែកឱ្យដាច់ភ្លាមៗណាស់! លើសពីនេះ ដោយសារ `gdp_category` គឺគ្រាន់តែជាការបែងចែកអ័ក្សដេក `gdpPercap` ជា ៣ ចំណែកប៉ុណ្ណោះ ការបន្ថែមរូបរាងនេះមិនបានផ្តល់ព័ត៌មានថ្មីឡើយ។ មេរៀននេះហើយដែលនាំយើងទៅកាន់ស្លាយទី ៣៦ ដែលជំនួសរូបរាងដោយ **ទំហំ (`Size = pop`)** បង្កើតបានជាក្រាហ្វពពុះ (Bubble Chart) ដ៏ល្បីល្បាញ!',
      },
      practicalApplication: {
        scenarioTitle: {
          en: 'When to Use Dual Shape + Color Encoding in Engineering & Geospatial BI',
          km: 'ករណីដែលគួរប្រើរូបរាង គួបផ្សំនឹងពណ៌ នៅក្នុងរបាយការណ៍វិស្វកម្ម និងផែនទីភូមិសាស្ត្រ',
        },
        description: {
          en: 'Shape + Color works well ONLY when both dimensions have very low cardinality (e.g., 2 Shapes: Urban vs Rural clinic × 3 Colors: Operational Status) or when Shape redundantly reinforces Color for color-blind accessibility (Pillar 7).',
          km: 'ការប្រើរូបរាង គួបផ្សំនឹងពណ៌ មានប្រសិទ្ធភាពល្អ លុះត្រាតែអថេរទាំងពីរមានចំនួនក្រុមតិចបំផុត (ឧទាហរណ៍៖ រូបរាង ២ ប្រភេទ គឺគ្លីនិកទីក្រុង ទល់នឹង ជនបទ × ពណ៌ ៣ ប្រភេទតាមស្ថានភាពដំណើរការ) ឬនៅពេលប្រើរូបរាងដើម្បីជួយដល់អ្នកពិការពណ៌ (គោលការណ៍ទី ៧)។',
        },
        impactMetric: 'Caps recommended shape cardinality at ≤ 4 distinct symbols to prevent clutter',
      },
    },
  },

  // ==========================================
  // SLIDE 36 (PDF Page 36 — Slide Footer 35)
  // ==========================================
  {
    pageNumber: 36,
    slideFooterNumber: '35',
    sectionTag: {
      en: '2.5 Multiple Information — Size for Quantitative Data (Bubble Chart)',
      km: '2.5 ការបង្ហាញពហុព័ត៌មាន — ការប្រើប្រាស់ទំហំ (Size) សម្រាប់ទិន្នន័យបរិមាណ (ក្រាហ្វពពុះ / Bubble Chart)',
    },
    simulatorMode: 'multivariate_bubble_size',
    pageIdentity: {
      titleEn: 'Size: Quantitative — The 4-Variable Gapminder Bubble Chart (2007)',
      titleKm: 'ទំហំ (Size)៖ សម្រាប់ទិន្នន័យបរិមាណ — ក្រាហ្វពពុះ (Bubble Chart) បង្ហាញអថេរទាំង ៤ នៃ Gapminder',
      themeName: {
        en: 'Hans Rosling 4-Dimensional Bubble Chart Studio',
        km: 'ផ្ទៃបង្ហាញក្រាហ្វពពុះ (Bubble Chart) ៤ អថេរតាមរចនាបថ Hans Rosling',
      },
      canvasBgHex: '#F8FAFC',
      surfaceCardHex: '#FFFFFF',
      primaryAccentHex: '#2563EB',
      secondaryAccentHex: '#DC2626',
      textPrimaryHex: '#0F172A',
      hierarchyRationale: {
        en: 'Highlights "Quantitative" in #2563EB Blue and "Bubble chart" in #DC2626 Crimson, paired with the iconic 2007 Gapminder Bubble Chart (`X = log(gdpPercap)`, `Y = lifeExp`, `Size = pop`, `Color = continent`).',
        km: 'រំលេចពាក្យ «Quantitative» ដោយពណ៌ខៀវ (#2563EB) និងពាក្យ «Bubble chart» ដោយពណ៌ក្រហម (#DC2626) អមដោយក្រាហ្វពពុះដ៏ល្បីល្បាញនៃទិន្នន័យ Gapminder ឆ្នាំ ២០០៧។',
      },
    },
    wireframe: {
      headerSection: {
        en: 'Top Header: "Size: Quantitative / ការប្រើប្រាស់ទំហំសម្រាប់ទិន្នន័យបរិមាណ (Bubble Chart)".',
        km: 'ផ្នែកខាងលើ៖ ចំណងជើង «Size: Quantitative / ការប្រើប្រាស់ទំហំសម្រាប់ទិន្នន័យបរិមាណ»។',
      },
      leftZone: {
        en: 'Left Column (42% width): Definition ("Size for representing quantitative data") + Example (`Size = pop`, `Color = continent`) + Two Key Notes ("⚠️ Colors and size are common, and the resulting graphs are often called Bubble chart. ⚠️ One should choose suitable max size to have a nice graph.").',
        km: 'ជួរឈរខាងឆ្វេង (ទទឹង ៤២%)៖ និយមន័យ («ទំហំសម្រាប់តំណាងទិន្នន័យបរិមាណ») + ឧទាហរណ៍ (`Size = pop`, `Color = continent`) + ចំណាំសំខាន់ពីរ («⚠️ ការប្រើពណ៌ និងទំហំរួមគ្នាគឺពេញនិយមណាស់ ដែលគេហៅថាក្រាហ្វពពុះ (Bubble chart)។ ⚠️ យើងត្រូវជ្រើសរើសទំហំអតិបរមា (max size) ឱ្យសមស្របដើម្បីទទួលបានក្រាហ្វស្អាត»។)',
      },
      rightZone: {
        en: 'Right Column (58% width): 4-Variable Bubble Chart "Life Expectancy, GDP, Population & Continent" (`gdpPercap` log X-axis, `lifeExp` Y-axis, Bubble Area = `pop`, Bubble Color = `continent` across Asia, Europe, Africa, Americas, Oceania).',
        km: 'ជួរឈរខាងស្តាំ (ទទឹង ៥៨%)៖ ក្រាហ្វពពុះ «Life Expectancy, GDP, Population & Continent» ដែលបង្ហាញអថេរទាំង ៤ យ៉ាងច្បាស់លាស់ (អ័ក្ស X = `log(gdpPercap)`, អ័ក្ស Y = `lifeExp`, ទំហំពពុះ = `pop`, ពណ៌ = `continent`)។',
      },
      bottomOrTopBar: {
        en: 'Bottom Interactive Max-Bubble-Size Slider (`size_max`) demonstrating how too-small or too-large bubbles hurt readability.',
        km: 'របាររំកិលកែតម្រូវទំហំអតិបរមានៃពពុះ (`size_max`) នៅខាងក្រោម ដើម្បីឱ្យនិស្សិតមើលឃើញពីសារៈសំខាន់នៃការកំណត់ទំហំពពុះឱ្យសមស្រប។',
      },
      gridAllocation: '5 Columns Left (Bubble Chart Rules & Max-Size Tip) + 7 Columns Right (4D Gapminder Bubble Chart)',
    },
    chartMetricsMath: {
      scorecards: [
        {
          label: { en: 'Variables Encoded Simultaneously', km: 'ចំនួនអថេរដែលបង្ហាញក្នុងពេលតែមួយ' },
          value: '4 Variables',
          metricField: 'encoded_vars_count',
          aggregation: 'Multivariate Capacity',
          comparisonNote: { en: 'X=GDP, Y=LifeExp, Size=Pop, Color=Continent', km: 'X=GDP, Y=LifeExp, ទំហំ=ប្រជាជន, ពណ៌=ទ្វីប' },
        },
        {
          label: { en: 'Largest Bubbles (Asia)', km: 'ពពុះធំបំផុតទាំងពីរ (ទ្វីបអាស៊ី)' },
          value: 'China & India',
          metricField: 'max_bubble_countries',
          aggregation: 'Max Population',
          comparisonNote: { en: '1.32B & 1.11B in middle-income cluster', km: '1.32 ពាន់លាន និង 1.11 ពាន់លាននាក់នៅចំកណ្តាលក្រាហ្វ' },
        },
      ],
      charts: [
        {
          chartType: {
            en: 'Looker Studio Bubble Chart (Scatter Chart with Bubble Size Metric)',
            km: 'ក្រាហ្វពពុះក្នុង Looker Studio (Scatter Chart ដែលមានកំណត់ Bubble Size Metric)',
          },
          dimensions: ['country'],
          breakdownDimension: 'continent',
          metrics: ['gdpPercap (X-axis, Log)', 'lifeExp (Y-axis)', 'pop (Bubble Size)'],
          sorting: 'pop DESC',
          stylingNote: {
            en: 'Set bubble fill opacity to 65% with a thin white border stroke so smaller countries sitting inside China or India’s bubble remain completely visible!',
            km: 'កំណត់កម្រិតថ្លា (Opacity) នៃពពុះត្រឹម 65% អមដោយស៊ុមពណ៌សស្តើង ដើម្បីឱ្យពពុះតូចៗដែលស្ថិតនៅជាន់លើពពុះរបស់ប្រទេសចិន និងឥណ្ឌា នៅតែអាចមើលឃើញច្បាស់!',
          },
        },
      ],
      formulas: [
        {
          title: { en: 'Proportional Bubble Area Scaling Formula (Avoiding Radius Distortion)', km: 'រូបមន្តគណនាទំហំផ្ទៃក្រឡាពពុះឱ្យសមាមាត្រនឹងទិន្នន័យ (Area Scaling)' },
          equation: 'Area_i = π · r_i² ∝ pop_i   ⇒   r_i = r_{max} · √( pop_i / pop_{max} )',
          variables: [
            { symbol: 'pop_i', en: 'Quantitative value (population) of country i', km: 'តម្លៃបរិមាណ (ចំនួនប្រជាជន) នៃប្រទេសទី i' },
            { symbol: 'pop_{max}', en: 'Maximum population in the dataset (China = 1.318 billion)', km: 'ចំនួនប្រជាជនអតិបរមាក្នុងសំណុំទិន្នន័យ (ប្រទេសចិន = 1.318 ពាន់លាននាក់)' },
            { symbol: 'r_{max}', en: 'Chosen maximum bubble radius (`size_max` parameter in Plotly, e.g., 45–60px)', km: 'កាំអតិបរមានៃពពុះដែលយើងជ្រើសរើស (`size_max` ក្នុងកូដ Plotly)' },
            { symbol: 'r_i ∝ √pop_i', en: 'Radius must scale with the SQUARE ROOT of the metric so human eyes perceive area proportionally!', km: 'កាំនៃរង្វង់ត្រូវតែសមាមាត្រនឹង «ឫសការ៉េ» នៃតួលេខ ដើម្បីឱ្យផ្ទៃក្រឡារង្វង់សមាមាត្រនឹងទំហំទិន្នន័យពិត!' },
          ],
        },
      ],
    },
    controls: [
      {
        controlType: { en: 'Metric Slider Control (Max Bubble Size `size_max`)', km: 'របាររំកិលកែតម្រូវទំហំអតិបរមានៃពពុះ (Max Bubble Size Slider)' },
        field: 'bubble_max_radius',
        defaultState: '28px (Balanced Readability)',
        purpose: {
          en: 'Lets students test the second warning on Slide 36 ("One should choose suitable max size to have a nice graph") by dragging max bubble size from 10px to 55px.',
          km: 'អនុញ្ញាតឱ្យនិស្សិតអនុវត្តចំណុចព្រមានទី ២ ក្នុងស្លាយទី ៣៦ («គួរជ្រើសរើសទំហំអតិបរមាឱ្យសមស្របដើម្បីបានក្រាហ្វស្អាត») ដោយសាកល្បងអូសប្តូរទំហំពពុះ។',
        },
      },
    ],
    expandedContent: {
      onScreenText: {
        heading: {
          en: 'Encoding Quantitative Magnitude with Size: The Bubble Chart',
          km: 'ការបង្ហាញតម្លៃបរិមាណតាមរយៈទំហំ (Size)៖ ក្រាហ្វពពុះ (Bubble Chart)',
        },
        bullets: [
          {
            en: 'Size is designed for representing strictly non-negative quantitative data (such as Population, Revenue, or Headcount).',
            km: 'ទំហំ (Size) ត្រូវបានប្រើសម្រាប់តំណាងឱ្យទិន្នន័យបរិមាណវិជ្ជមាន (ដូចជា ចំនួនប្រជាជន ចំណូល ឬចំនួនបុគ្គលិក)។',
          },
          {
            en: 'Example on Gapminder 2007: `Size = pop` (quantitative) and `Color = continent` (qualitative) on top of `X = gdpPercap` and `Y = lifeExp`.',
            km: 'ឧទាហរណ៍លើទិន្នន័យ Gapminder ឆ្នាំ ២០០៧៖ `Size = pop` (បរិមាណ) និង `Color = continent` (គុណភាព) បន្ថែមពីលើអ័ក្ស `X = gdpPercap` និង `Y = lifeExp`។',
          },
          {
            en: '⚠️ Note 1: Combining Colors and Size on a scatterplot is very common, and the resulting graphs are called Bubble Charts.',
            km: '⚠️ ចំណាំទី ១៖ ការរួមបញ្ចូលគ្នារវាងពណ៌ និងទំហំនៅលើក្រាហ្វចំណុច គឺជារឿងពេញនិយមបំផុត ហើយក្រាហ្វដែលទទួលបានត្រូវបានគេហៅថា «ក្រាហ្វពពុះ (Bubble chart)»។',
          },
          {
            en: '⚠️ Note 2: One should choose a suitable `max size` (`size_max` in Plotly) and semi-transparent fill opacity to have a clean, readable graph.',
            km: '⚠️ ចំណាំទី ២៖ យើងគួរជ្រើសរើសទំហំអតិបរមា (`max size`) និងកម្រិតថ្លាឱ្យបានសមស្រប ដើម្បីទទួលបានក្រាហ្វដែលស្អាត និងងាយស្រួលអាន។',
          },
        ],
        callout: {
          en: 'Fulfilling Slide 6’s Promise: Remember on Slide 6 when we had three separate univariate plots (Boxplot of Pop, Violin of LifeExp, Histogram of GDP) and a link to Hans Rosling? This Bubble Chart unites all three variables plus Continent into ONE single frame!',
          km: 'ការសម្រេចគោលដៅពីស្លាយទី ៦៖ សូមរំលឹកកាលពីស្លាយទី ៦ ដែលយើងមានក្រាហ្វអថេរទោល ៣ ដាច់ពីគ្នា និងតំណភ្ជាប់ទៅវីដេអូរបស់លោក Hans Rosling! ឥឡូវនេះ ក្រាហ្វពពុះ (Bubble Chart) នេះបានបង្រួមអថេរទាំង ៣ បូករួមទាំងទ្វីប ឱ្យមកស្ថិតក្នុងផ្ទាំងក្រាហ្វតែមួយគត់!',
        },
      },
      deepDiveExplanation: {
        en: 'Slide 36 (footer 35) achieves the synthesis that motivated the entire presentation on Slide 6. By mapping `gdpPercap` to horizontal position (log scale), `lifeExp` to vertical position, `pop` to circle area (`Size`), and `continent` to circle hue (`Color`), we display **four variables simultaneously** with zero visual clutter! Why is this 4-variable Bubble Chart so much cleaner than Slide 35’s 4-variable Shape Chart? Because Size (area) and Color (hue) are **separable perceptual channels**: the human visual cortex processes color hue and geometric area in parallel without interference. Notice the two technical best practices when configuring Bubble Charts in Plotly (`px.scatter(..., size="pop", color="continent", size_max=60)`) or Google Looker Studio: (1) Scale circle **area** (not radius!) proportionally to the metric ($r_i \\propto \\sqrt{\\text{pop}_i}$), because doubling the radius quadruples the visual area; and (2) Tune `size_max` and add a white stroke / $60\\%$ alpha transparency so giant bubbles like China ($1.32\\text{B}$ at $73\\text{ yrs}, \\$4,959$) and India ($1.11\\text{B}$ at $64.7\\text{ yrs}, \\$2,452$) do not occlude neighboring Asian countries.',
        km: 'ស្លាយទី ៣៦ (លេខស្លាយ 35) សម្រេចបាននូវគោលដៅធំដែលបានដាក់ចេញតាំងពីស្លាយទី ៦។ តាមរយៈការដាក់ `gdpPercap` លើអ័ក្សដេក (មាត្រដ្ឋាន Log), `lifeExp` លើអ័ក្សឈរ, `pop` ជាទំហំរង្វង់ (`Size`) និង `continent` ជាពណ៌រង្វង់ (`Color`) យើងអាចបង្ហាញ **អថេរចំនួន ៤ ក្នុងពេលតែមួយ** យ៉ាងស្អាត និងងាយយល់បំផុត! តើហេតុអ្វីបានជាក្រាហ្វពពុះ ៤ អថេរនេះ មើលទៅស្រឡះស្អាតជាងក្រាហ្វរូបរាង (Shape) កាលពីស្លាយទី ៣៥ ខ្លាំងម្ល៉េះ? ពីព្រោះ «ទំហំ» និង «ពណ៌» គឺជាប៉ុស្តិ៍មើលឃើញពីរដាច់ដោយឡែកពីគ្នា ដែលខួរក្បាលមនុស្សអាចបកស្រាយក្នុងពេលតែមួយដោយមិនច្រឡំគ្នាឡើយ។ នៅក្នុងការកំណត់ក្រាហ្វពពុះក្នុង Plotly (`size_max=60`) ឬក្នុង Looker Studio យើងត្រូវចងចាំចំណុចបច្ចេកទេសពីរ៖ ទីមួយ ត្រូវឱ្យ «ផ្ទៃក្រឡារង្វង់» សមាមាត្រនឹងតម្លៃទិន្នន័យ ($r_i \\propto \\sqrt{\\text{pop}_i}$) មិនមែនកាំរង្វង់ទេ; និងទីពីរ ត្រូវកំណត់ទំហំអតិបរមា (`size_max`) និងដាក់កម្រិតថ្លា ដើម្បីកុំឱ្យពពុះធំៗរបស់ចិន និងឥណ្ឌា បាំងប្រទេសតូចៗដែលនៅជិតនោះ។',
      },
      practicalApplication: {
        scenarioTitle: {
          en: '4D Product Portfolio Matrix in Looker Studio (Price × Margin × Volume × Category)',
          km: 'ការវិភាគផលប័ត្រទំនិញទាំង ៤ ទិដ្ឋភាពក្នុង Looker Studio (តម្លៃ × អត្រាចំណេញ × បរិមាណលក់ × ប្រភេទ)',
        },
        description: {
          en: 'Strategic merchandising teams build Looker Studio Bubble Charts with Unit Price on X, Profit Margin % on Y, Total Revenue as Bubble Size, and Product Line as Bubble Color to identify high-margin, high-volume cash cows instantly.',
          km: 'ក្រុមការងារយុទ្ធសាស្ត្រទីផ្សារបង្កើតក្រាហ្វពពុះក្នុង Looker Studio ដោយដាក់ «តម្លៃលក់» លើអ័ក្ស X, «អត្រាប្រាក់ចំណេញ (%)» លើអ័ក្ស Y, «ចំណូលសរុប» ជាទំហំពពុះ និង «ប្រភេទទំនិញ» ជាពណ៌ពពុះ ដើម្បីមើលឃើញទំនិញដែលផ្តល់ចំណូល និងប្រាក់ចំណេញខ្ពស់បំផុតភ្លាមៗ។',
        },
        impactMetric: 'Unites all 4 core Gapminder dimensions into a single high-clarity visual canvas',
      },
    },
  },

  // ==========================================
  // SLIDE 37 (PDF Page 37 — Slide Footer 36)
  // ==========================================
  {
    pageNumber: 37,
    slideFooterNumber: '36',
    sectionTag: {
      en: '2.6 Time Series Data — Quantitative Lineplots',
      km: '2.6 ទិន្នន័យតាមពេលវេលា (Time Series) — ក្រាហ្វបន្ទាត់សម្រាប់អថេរបរិមាណ (Lineplot)',
    },
    simulatorMode: 'timeseries_oceania_lines',
    pageIdentity: {
      titleEn: '2.6 Time Series Data — Quantitative: Lineplot (Oceania Evolution 1952–2007)',
      titleKm: '2.6 ទិន្នន័យតាមពេលវេលា — អថេរបរិមាណ៖ ក្រាហ្វបន្ទាត់ (ការវិវត្តន៍នៃទ្វីបអូសេអានី ១៩៥២–២០០៧)',
      themeName: {
        en: '3-Panel Longitudinal Time-Series Triptych',
        km: 'ផ្ទៃបង្ហាញក្រាហ្វបន្ទាត់តាមពេលវេលាទាំង ៣ ទន្ទឹមគ្នា (១៩៥២–២០០៧)',
      },
      canvasBgHex: '#F8FAFC',
      surfaceCardHex: '#FFFFFF',
      primaryAccentHex: '#4F46E5',
      secondaryAccentHex: '#EF4444',
      textPrimaryHex: '#0F172A',
      hierarchyRationale: {
        en: 'Matches Slide 37’s three side-by-side Plotly line charts comparing Australia (Indigo/Blue line with circle markers #4F46E5) and New Zealand (Red/Coral line with diamond markers #EF4444) from 1952 to 2007.',
        km: 'រក្សាទម្រង់ក្រាហ្វបន្ទាត់ទាំង ៣ ដាក់ទន្ទឹមគ្នាដូចក្នុងស្លាយទី ៣៧ ដោយប្រៀបធៀបប្រទេសអូស្ត្រាលី (បន្ទាត់ពណ៌ខៀវស្វាយ #4F46E5) និងនូវែលសេឡង់ (បន្ទាត់ពណ៌ក្រហមទឹកក្រូច #EF4444) ពីឆ្នាំ ១៩៥២ ដល់ ២០០៧។',
      },
    },
    wireframe: {
      headerSection: {
        en: 'Top Header: "2.6 Time Series Data — Quantitative: Lineplot — Let’s take a look at Oceania from 1952 to 2007."',
        km: 'ផ្នែកខាងលើ៖ ចំណងជើង «2.6 Time Series Data — Quantitative: Lineplot — ចូរពិនិត្យមើលទ្វីបអូសេអានីពីឆ្នាំ ១៩៥២ ដល់ ២០០៧»។',
      },
      leftZone: {
        en: 'Three Equal-Width Time-Series Line Charts across the 16:9 workspace (4 columns each): Left = "Evolution of Life Expectancy" (`year` 1952–2007 vs `lifeExp` 69–82 yrs); Center = "Evolution of Population" (`year` vs `pop` 2M–20.5M); Right = "Evolution of GDP per Capita" (`year` vs `gdpPercap` 10k–35k).',
        km: 'ក្រាហ្វបន្ទាត់ចំនួន ៣ ដាក់ទន្ទឹមគ្នា៖ ខាងឆ្វេង = «Evolution of Life Expectancy» (អាយុរំពឹងរស់ 69–82 ឆ្នាំ), កណ្តាល = «Evolution of Population» (ចំនួនប្រជាជន 2M–20.5M), ខាងស្តាំ = «Evolution of GDP per Capita» (GDP ពី 10k ដល់ 35k)។',
      },
      rightZone: {
        en: 'Bottom Interactive Prompt: "Is there any other country’s evolution you would like to see?" wired to a live Country Multi-Select Filter.',
        km: 'សំណួរអន្តរកម្មខាងក្រោម៖ «តើមានប្រទេសផ្សេងទៀតណាដែលអ្នកចង់មើលការវិវត្តន៍របស់វាដែរឬទេ?» ភ្ជាប់ជាមួយតម្រងជ្រើសរើសប្រទេស។',
      },
      bottomOrTopBar: {
        en: 'Bottom Longitudinal Comparison Strip contrasting Australia vs New Zealand divergence in GDP after 1977.',
        km: 'របារប្រៀបធៀបខាងក្រោមដែលបង្ហាញពីការឃ្លាតឆ្ងាយគ្នានៃ GDP រវាងអូស្ត្រាលី និងនូវែលសេឡង់ ចាប់ពីក្រោយឆ្នាំ ១៩៧៧។',
      },
      gridAllocation: '3 × 4-Column Time-Series Lineplot Triptych + Bottom Interactive Country Selector',
    },
    chartMetricsMath: {
      scorecards: [
        {
          label: { en: 'Australia LifeExp Gain', km: 'កំណើនអាយុរំពឹងរស់របស់អូស្ត្រាលី' },
          value: '69.1 → 81.2 yrs',
          metricField: 'aus_lifeexp_delta',
          aggregation: '1952 to 2007 Gain',
          comparisonNote: { en: '+12.12 years over 55 years', km: 'កើនឡើង +12.12 ឆ្នាំ ក្នុងរយៈពេល ៥៥ ឆ្នាំ' },
        },
        {
          label: { en: 'Australia Population Growth', km: 'កំណើនប្រជាជនអូស្ត្រាលី (១៩៥២–២០០៧)' },
          value: '8.69M → 20.43M',
          metricField: 'aus_pop_delta',
          aggregation: '1952 to 2007 Growth',
          comparisonNote: { en: 'NZ grew more gently: 1.99M → 4.12M', km: 'នូវែលសេឡង់កើនឡើងយឺតជាង៖ 1.99M → 4.12M' },
        },
        {
          label: { en: '2007 GDP Gap (Aus vs NZ)', km: 'គម្លាត GDP ក្នុងឆ្នាំ ២០០៧ (Aus ទល់នឹង NZ)' },
          value: '$34.4K vs $25.2K',
          metricField: 'oceania_gdp_gap',
          aggregation: '2007 Endpoint Comparison',
          comparisonNote: { en: 'Started nearly equal in 1952 (~$10k)!', km: 'ផ្តើមចេញប្រហាក់ប្រហែលគ្នាក្នុងឆ្នាំ ១៩៥២ (~$10k)!' },
        },
      ],
      charts: [
        {
          chartType: {
            en: 'Three Looker Studio Time-Series Line Charts (`year` on X-axis, `country` as Breakdown Dimension)',
            km: 'ក្រាហ្វបន្ទាត់តាមពេលវេលាចំនួន ៣ ក្នុង Looker Studio (`year` លើអ័ក្ស X, បែងចែកបន្ទាត់តាម `country`)',
          },
          dimensions: ['year'],
          breakdownDimension: 'country',
          metrics: ['lifeExp (Chart 1)', 'pop (Chart 2)', 'gdpPercap (Chart 3)'],
          sorting: 'year ASC',
          stylingNote: {
            en: 'Enable point markers on the lines (12 observations per country at 5-year intervals: 1952, 1957, ..., 2007).',
            km: 'បង្ហាញចំណុចសម្គាល់នៅលើបន្ទាត់ត្រង់រាល់ចន្លោះ ៥ ឆ្នាំម្តង (១៩៥២, ១៩៥៧, ..., ២០០៧)។',
          },
        },
      ],
      formulas: [
        {
          title: { en: 'Compound Annual Growth Rate (CAGR) & Average Decadal Rate of Change', km: 'រូបមន្តអត្រាកំណើនប្រចាំឆ្នាំសមាស (CAGR) និងល្បឿនកំណើនមធ្យមតាមពេលវេលា' },
          equation: 'Slope_{[t_1, t_2]} = (Y_{t_2} - Y_{t_1}) / (t_2 - t_1) ,    CAGR = (Y_{2007} / Y_{1952})^{1 / (2007 - 1952)} - 1',
          variables: [
            { symbol: 't ∈ {1952, ..., 2007}', en: 'Ordered discrete time variable on the horizontal X-axis', km: 'អថេរពេលវេលាតាមលំដាប់ឆ្នាំនៅលើអ័ក្សដេក X' },
            { symbol: 'Y_t', en: 'Quantitative metric (`lifeExp`, `pop`, or `gdpPercap`) observed at year t', km: 'តម្លៃអថេរបរិមាណ (`lifeExp`, `pop` ឬ `gdpPercap`) នៅត្រង់ឆ្នាំ t' },
            { symbol: 'Slope_{[t_1, t_2]}', en: 'Visual steepness of the line segment connecting year t₁ to year t₂', km: 'កម្រិតចោតនៃអង្កត់បន្ទាត់ដែលភ្ជាប់ពីឆ្នាំ t₁ ទៅឆ្នាំ t₂' },
          ],
        },
      ],
    },
    controls: [
      {
        controlType: { en: 'Date / Year Range Slider Control (1952–2007)', km: 'របាររំកិលជ្រើសរើសចន្លោះឆ្នាំ (Year Range: 1952–2007)' },
        field: 'year',
        defaultState: '1952 – 2007 (Full 55-Year Span)',
        purpose: {
          en: 'Allows users to zoom into specific historical eras (e.g., 1970–2000) across all three line charts.',
          km: 'អនុញ្ញាតឱ្យអ្នកសិក្សាពង្រីកមើលចន្លោះឆ្នាំជាក់លាក់ណាមួយនៅលើក្រាហ្វបន្ទាត់ទាំងបីក្នុងពេលតែមួយ។',
        },
      },
      {
        controlType: { en: 'Drop-down List Control (Country Comparison Preset)', km: 'តម្រងជ្រើសរើសគូប្រទេសដើម្បីប្រៀបធៀបការវិវត្តន៍' },
        field: 'country_pair',
        defaultState: 'Oceania (Australia & New Zealand)',
        purpose: {
          en: 'Directly answers the slide’s bottom question ("Is there any other country’s evolution you would like to see?") by letting users also inspect Cambodia, Japan, China, or France!',
          km: 'ឆ្លើយតបដោយផ្ទាល់ទៅនឹងសំណួរនៅបាតស្លាយទី ៣៧ ដោយអនុញ្ញាតឱ្យអ្នកសិក្សាជ្រើសរើសមើលការវិវត្តន៍របស់ប្រទេសផ្សេងទៀត (ដូចជា កម្ពុជា ជប៉ុន ចិន ឬបារាំង)។',
        },
      },
    ],
    expandedContent: {
      onScreenText: {
        heading: {
          en: '2.6 Time Series Data: Tracking Quantitative Evolution with Lineplots',
          km: '2.6 ទិន្នន័យតាមពេលវេលា៖ ការតាមដានការវិវត្តន៍នៃអថេរបរិមាណដោយប្រើក្រាហ្វបន្ទាត់ (Lineplot)',
        },
        bullets: [
          {
            en: 'When one variable is Time (`year` from 1952 to 2007) and the other is Quantitative (`lifeExp`, `pop`, `gdpPercap`), the canonical visualization is a Lineplot.',
            km: 'នៅពេលអថេរមួយគឺជាពេលវេលា (`year` ពីឆ្នាំ ១៩៥២ ដល់ ២០០៧) ហើយអថេរមួយទៀតជាបរិមាណ (`lifeExp`, `pop`, `gdpPercap`) ក្រាហ្វដែលត្រឹមត្រូវបំផុតគឺ «ក្រាហ្វបន្ទាត់ (Lineplot)»។',
          },
          {
            en: 'Oceania Case Study (Australia vs New Zealand): (1) Life Expectancy rose in tandem from ~69.2 yrs to >80 yrs, with Australia overtaking NZ after 1972; (2) Australia’s population more than doubled (8.7M → 20.4M) while NZ grew modestly (2.0M → 4.1M); (3) Both started around $10,000 GDP per capita in 1952, but Australia accelerated faster after 1977 ($34.4k vs $25.2k).',
            km: 'ករណីសិក្សាទ្វីបអូសេអានី (អូស្ត្រាលី ទល់នឹង នូវែលសេឡង់)៖ (១) អាយុរំពឹងរស់កើនឡើងទន្ទឹមគ្នាពី ~69.2 ឆ្នាំ ទៅលើស 80 ឆ្នាំ; (២) ប្រជាជនអូស្ត្រាលីកើនឡើងជាងទ្វេដង (8.7M → 20.4M) ខណៈនូវែលសេឡង់កើនឡើងតិចតួច (2.0M → 4.1M); (៣) ប្រទេសទាំងពីរចាប់ផ្តើមពី GDP ~$10,000 ដូចគ្នាក្នុងឆ្នាំ ១៩៥២ ប៉ុន្តែអូស្ត្រាលីស្ទុះឡើងលឿនជាងក្រោយឆ្នាំ ១៩៧៧ ($34.4k ទល់នឹង $25.2k)។',
          },
          {
            en: 'Interactive Exploration Prompt: "Is there any other country’s evolution you would like to see?"',
            km: 'សំណួរសម្រាប់ការស្វែងយល់បន្ថែម៖ «តើមានប្រទេសផ្សេងទៀតណាដែលអ្នកចង់មើលការវិវត្តន៍របស់វាដែរឬទេ?»',
          },
        ],
        callout: {
          en: 'Why Connect Points with Lines Only for Time Series? Connecting discrete points with a line segment implies continuous interpolation between observations—which is physically meaningful across sequential years (1952 → 1957 → 1962), but meaningless across unordered categories!',
          km: 'ហេតុអ្វីយើងគូសបន្ទាត់ភ្ជាប់ចំណុចសម្រាប់តែទិន្នន័យតាមពេលវេលា? ពីព្រោះការគូសបន្ទាត់ភ្ជាប់ពីចំណុចមួយទៅចំណុចមួយ បង្ហាញពីការផ្លាស់ប្តូរជាប់គ្នាតាមលំដាប់ពេលវេលា (១៩៥២ → ១៩៥៧ → ១៩៦២) ដែលមិនអាចប្រើសម្រាប់ក្រុមគ្មានលំដាប់បានឡើយ!',
        },
      },
      deepDiveExplanation: {
        en: 'Slide 37 (footer 36) re-introduces the longitudinal dimension of the Gapminder dataset that we set aside on Slide 5 when we filtered to `year == 2007`. Recall that the full dataset has $1,704$ rows ($142\\text{ countries} \\times 12\\text{ timestamps}$). Why did the instructor choose `continent == "Oceania"` for this lineplot? Because Oceania contains only **two countries** (Australia and New Zealand)! If you plot all 142 countries on a single line chart, you get an unreadable "spaghetti plot" of 142 tangled lines. By conditioning on a small subset (2 countries) and using `country` as the color/marker breakdown dimension, the three side-by-side lineplots tell a crystal-clear comparative history: in 1952, New Zealand actually had a slightly higher life expectancy ($69.39$ vs $69.12$) and higher GDP per capita ($\\$10,557$ vs $\\$10,040$) than Australia, before Australia’s resource and service boom created a widening gap from the late 1970s through 2007.',
        km: 'ស្លាយទី ៣៧ (លេខស្លាយ 36) នាំយើងត្រឡប់មកមើលទិដ្ឋភាពពេលវេលា (ពីឆ្នាំ ១៩៥២ ដល់ ២០០៧) នៃទិន្នន័យ Gapminder ដែលយើងបានទុកមួយឡែកកាលពីស្លាយទី ៥ (ពេលយើងច្រោះយកតែឆ្នាំ ២០០៧)។ តើហេតុអ្វីបានជាស្លាយនេះជ្រើសរើសយកទ្វីបអូសេអានី (`Oceania`) មកគូសក្រាហ្វបន្ទាត់? ពីព្រោះទ្វីបអូសេអានីមានតែ **២ ប្រទេសប៉ុណ្ណោះ** (អូស្ត្រាលី និងនូវែលសេឡង់)! ប្រសិនបើយើងគូសបន្ទាត់សម្រាប់ប្រទេសទាំង ១៤២ នៅលើក្រាហ្វតែមួយ បន្ទាត់ទាំង ១៤២ នឹងជំពាក់វាក់វិនគ្នាដូចសរសៃមីមើលមិនយល់ឡើយ (Spaghetti plot)។ ការជ្រើសរើសប្រទេសចំនួនតិច (២ ទៅ ៥ ប្រទេស) មកដាក់លើក្រាហ្វបន្ទាត់ អនុញ្ញាតឱ្យយើងមើលឃើញប្រវត្តិនៃការវិវត្តន៍យ៉ាងច្បាស់៖ កាលពីឆ្នាំ ១៩៥២ នូវែលសេឡង់មានអាយុរំពឹងរស់ និង GDP ខ្ពស់ជាងអូស្ត្រាលីបន្តិចបន្តួច ប៉ុន្តែចាប់ពីទសវត្សរ៍ឆ្នាំ ១៩៧០ មក សេដ្ឋកិច្ចអូស្ត្រាលីបានស្ទុះឡើងវ៉ាដាច់នូវែលសេឡង់យ៉ាងច្បាស់។',
      },
      practicalApplication: {
        scenarioTitle: {
          en: 'Multi-KPI Executive Time-Series Benchmarking in Looker Studio',
          km: 'ការប្រៀបធៀបនិន្នាការ KPI សំខាន់ៗតាមពេលវេលារវាងសាខា ឬប្រទេសក្នុង Looker Studio',
        },
        description: {
          en: 'In ASEAN economic dashboards, placing three synchronized Time Series Line Charts (Life Expectancy, Population, GDP per Capita) with a Country Multi-Select filter lets policymakers compare Cambodia, Vietnam, and Thailand across 50 years.',
          km: 'នៅក្នុងផ្ទាំងរបាយការណ៍សេដ្ឋកិច្ចអាស៊ាន ការដាក់ក្រាហ្វបន្ទាត់ទាំង ៣ ទន្ទឹមគ្នា អមដោយប៊ូតុងជ្រើសរើសប្រទេស អនុញ្ញាតឱ្យអ្នករៀបចំគោលនយោបាយប្រៀបធៀបការវិវត្តន៍រវាងកម្ពុជា វៀតណាម និងថៃ ក្នុងរយៈពេល ៥០ ឆ្នាំបានយ៉ាងងាយស្រួល។',
        },
        impactMetric: 'Tracks 3 quantitative trajectories across 12 five-year intervals (1952–2007)',
      },
    },
  },

  // ==========================================
  // SLIDE 38 (PDF Page 38 — Slide Footer 37)
  // ==========================================
  {
    pageNumber: 38,
    slideFooterNumber: '37',
    sectionTag: {
      en: '2.7 Qualitative Time Series — Evolutional Barplots',
      km: '2.7 ទិន្នន័យគុណភាពតាមពេលវេលា — ក្រាហ្វសសរត្រួតគ្នាតាមការវិវត្តន៍នៃឆ្នាំ (Evolutional Barplots)',
    },
    simulatorMode: 'timeseries_asia_stacked_bars',
    pageIdentity: {
      titleEn: '2.7 Qualitative: Evolutional Barplots — Asian Countries’ GDP Categories (1952–2007)',
      titleKm: '2.7 អថេរគុណភាព៖ ក្រាហ្វសសរវិវត្តន៍តាមពេលវេលា — កម្រិត GDP នៃប្រទេសនៅអាស៊ី (១៩៥២–២០០៧)',
      themeName: {
        en: 'Longitudinal Stacked Bar Evolution Studio',
        km: 'ផ្ទៃបង្ហាញការវិវត្តន៍នៃក្រុមគុណភាពតាមរយៈក្រាហ្វសសរត្រួតគ្នាពីឆ្នាំ ១៩៥២ ដល់ ២០០៧',
      },
      canvasBgHex: '#F8FAFC',
      surfaceCardHex: '#FFFFFF',
      primaryAccentHex: '#DC2626',
      secondaryAccentHex: '#10B981',
      textPrimaryHex: '#0F172A',
      hierarchyRationale: {
        en: 'Highlights "Qualitative" in #DC2626 Crimson in the title and preserves the 3-tier color coding across all 12 five-year bars (1952 to 2007): `Developing` = Indigo Blue (#6366F1), `Emerging` = Coral Red (#EF4444), `Developed` = Emerald Green (#10B981).',
        km: 'រំលេចពាក្យ «Qualitative» ដោយពណ៌ក្រហម (#DC2626) និងប្រើពណ៌ទាំង ៣ កម្រិតដូចគ្នាសម្រាប់សសរទាំង ១២ ចន្លោះឆ្នាំ (១៩៥២ ដល់ ២០០៧) គឺ `Developing` = ស្វាយខៀវ (#6366F1), `Emerging` = ក្រហមទឹកក្រូច (#EF4444) និង `Developed` = បៃតង (#10B981)។',
      },
    },
    wireframe: {
      headerSection: {
        en: 'Top Header: "2.7 Qualitative: Evolutional Barplots — Let’s take a look at the evolution of GDP per capita categories for Asian countries over time."',
        km: 'ផ្នែកខាងលើ៖ ចំណងជើង «2.7 Qualitative: Evolutional Barplots — ការពិនិត្យមើលការវិវត្តន៍នៃកម្រិត GDP សម្រាប់ប្រទេសនៅទ្វីបអាស៊ីតាមពេលវេលា»។',
      },
      leftZone: {
        en: 'Main Workspace Chart (100% width): Stacked Barplot "Evolution of Asian Countries’ GDP Categories from 1952 to 2007" (`Year` on X-axis: 1952, 1957, ..., 2007; `Number of Countries` on Y-axis: 0 to 33; stacked by `GDP_Category`: Developing, Emerging, Developed).',
        km: 'ផ្ទៃក្រាហ្វកណ្តាលពេញអេក្រង់៖ ក្រាហ្វសសរត្រួតគ្នា «Evolution of Asian Countries’ GDP Categories from 1952 to 2007» (អ័ក្ស X = ឆ្នាំពី 1952 ដល់ 2007; អ័ក្ស Y = ចំនួនប្រទេសពី 0 ដល់ 33; បែងចែកពណ៌តាមកម្រិត GDP ទាំង ៣)។',
      },
      rightZone: {
        en: 'Bottom Structural Shift Summary showing how Asia’s Developing countries shrank from 16 (1952) to 10 (2007) while Developed Asian countries grew from 7 (1952) to 12 (2007).',
        km: 'របារសង្ខេបខាងក្រោមដែលបង្ហាញពីការផ្លាស់ប្តូររចនាសម្ព័ន្ធសេដ្ឋកិច្ចអាស៊ី៖ ប្រទេសកំពុងអភិវឌ្ឍថយចុះពី ១៦ (ឆ្នាំ ១៩៥២) មកត្រឹម ១០ (ឆ្នាំ ២០០៧) ខណៈប្រទេសអភិវឌ្ឍន៍ហើយកើនឡើងពី ៧ ទៅ ១២ ប្រទេស។',
      },
      bottomOrTopBar: {
        en: 'Footer note explaining how Evolutional Stacked Barplots track qualitative composition over time.',
        km: 'របារពន្យល់ខាងក្រោមអំពីតួនាទីនៃក្រាហ្វសសរត្រួតគ្នាតាមពេលវេលាក្នុងការតាមដានការផ្លាស់ប្តូរសមាសភាពក្រុម។',
      },
      gridAllocation: '12-Column Longitudinal Stacked Column Chart (12 Five-Year Bars × 3 Tiers)',
    },
    chartMetricsMath: {
      scorecards: [
        {
          label: { en: 'Total Asian Countries Tracked', km: 'ចំនួនប្រទេសនៅអាស៊ីសរុប' },
          value: '33 Countries',
          metricField: 'COUNT_IF(country, Asia)',
          aggregation: 'Constant Panel Size',
          comparisonNote: { en: 'Every bar sums to exactly 33 countries', km: 'សសរនីមួយៗមានកម្ពស់សរុបស្មើ ៣៣ ប្រទេសថេរ' },
        },
        {
          label: { en: 'Asian Developing Countries', km: 'ប្រទេសកំពុងអភិវឌ្ឍនៅអាស៊ី (ពណ៌ខៀវ)' },
          value: '16 (1952) → 10 (2007)',
          metricField: 'asia_developing_shift',
          aggregation: '1952 vs 2007 Count',
          comparisonNote: { en: '6 Asian nations graduated out of poverty tier', km: '៦ ប្រទេសបានចាកចេញពីក្រុមចំណូលទាបបំផុត' },
        },
        {
          label: { en: 'Asian Developed Countries', km: 'ប្រទេសអភិវឌ្ឍន៍ហើយនៅអាស៊ី (ពណ៌បៃតង)' },
          value: '7 (1952) → 12 (2007)',
          metricField: 'asia_developed_shift',
          aggregation: '1952 vs 2007 Count',
          comparisonNote: { en: 'Rise of Asian Tigers & East Asian economies', km: 'ការរីកចម្រើននៃប្រទេសសេដ្ឋកិច្ចខ្លាអាស៊ី' },
        },
      ],
      charts: [
        {
          chartType: {
            en: 'Looker Studio Stacked Column Time-Series Chart (`Year` X-axis, `Number of Countries` Y-axis, `GDP_Category` Breakdown)',
            km: 'ក្រាហ្វសសរត្រួតគ្នាតាមពេលវេលា (អ័ក្ស X = ឆ្នាំ, អ័ក្ស Y = ចំនួនប្រទេស, បែងចែកតាម `GDP_Category`)',
          },
          dimensions: ['year'],
          breakdownDimension: 'GDP_Category',
          metrics: ['COUNT(country)'],
          sorting: 'year ASC',
          stylingNote: {
            en: 'Keep Y-axis in absolute counts (0 to 33) since total Asian countries in the balanced panel is constant (n_Asia = 33) at every timestamp.',
            km: 'កំណត់អ័ក្ស Y ជាចំនួនប្រទេសពិតប្រាកដ (ពី 0 ដល់ 33) ព្រោះចំនួនប្រទេសសរុបនៅអាស៊ីគឺថេរ (៣៣ ប្រទេស) គ្រប់ឆ្នាំទាំងអស់។',
          },
        },
      ],
      formulas: [],
    },
    controls: [
      {
        controlType: { en: 'Drop-down List Control (Continent Selector)', km: 'តម្រងជ្រើសរើសទ្វីបដើម្បីមើលការវិវត្តន៍ពី ១៩៥២–២០០៧' },
        field: 'continent',
        defaultState: 'Asia (33 Countries)',
        purpose: {
          en: 'Lets students inspect Asia’s 1952–2007 category evolution (Slide 38) or switch to Europe, Americas, or Africa to compare historical trajectories.',
          km: 'អនុញ្ញាតឱ្យនិស្សិតពិនិត្យមើលការវិវត្តន៍នៃទ្វីបអាស៊ី (ដូចក្នុងស្លាយទី ៣៨) ឬប្តូរទៅមើលទ្វីបអឺរ៉ុប អាមេរិក និងអាហ្វ្រិក។',
        },
      },
    ],
    expandedContent: {
      onScreenText: {
        heading: {
          en: '2.7 Qualitative Time Series: Evolutional Barplots of Asian GDP Categories',
          km: '2.7 ទិន្នន័យគុណភាពតាមពេលវេលា៖ ក្រាហ្វសសរវិវត្តន៍នៃកម្រិត GDP របស់ប្រទេសនៅអាស៊ី',
        },
        bullets: [
          {
            en: 'When tracking how a qualitative variable (`GDP_Category`: Developing, Emerging, Developed) evolves over discrete time steps (`Year` 1952 to 2007), use an Evolutional Stacked Barplot.',
            km: 'នៅពេលតាមដានថាតើអថេរគុណភាពមួយ (`GDP_Category`៖ កំពុងអភិវឌ្ឍ កំពុងលូតលាស់ អភិវឌ្ឍន៍ហើយ) ផ្លាស់ប្តូរយ៉ាងដូចម្តេចតាមពេលវេលា (`Year` ពីឆ្នាំ ១៩៥២ ដល់ ២០០៧) យើងប្រើក្រាហ្វសសរត្រួតគ្នាតាមពេលវេលា (Evolutional Barplot)។',
          },
          {
            en: 'In 1952: Out of 33 Asian countries, 16 were Developing (blue bottom segment), 10 were Emerging (red middle segment), and only 7 were Developed (green top segment).',
            km: 'នៅឆ្នាំ ១៩៥២៖ ក្នុងចំណោមប្រទេសអាស៊ីទាំង ៣៣ មាន ១៦ ប្រទេសជាប្រទេសកំពុងអភិវឌ្ឍ (ផ្នែកពណ៌ខៀវខាងក្រោម), ១០ ប្រទេសកំពុងលូតលាស់ (ពណ៌ក្រហមកណ្តាល) និងមានតែ ៧ ប្រទេសប៉ុណ្ណោះដែលអភិវឌ្ឍន៍ហើយ (ពណ៌បៃតងខាងលើ)។',
          },
          {
            en: 'By 1992–2007: The blue Developing base steadily shrank down to 9–10 countries, while the green Developed top segment expanded to 12–13 countries—resulting in the balanced 1/3 split we observed in 2007 on Slide 28!',
            km: 'មកដល់ឆ្នាំ ១៩៩២–២០០៧៖ ផ្នែកពណ៌ខៀវ (កំពុងអភិវឌ្ឍ) បានថយចុះមកនៅត្រឹម ៩–១០ ប្រទេស ខណៈដែលផ្នែកពណ៌បៃតង (អភិវឌ្ឍន៍ហើយ) បានរីកធំដល់ ១២–១៣ ប្រទេស ដែលបង្កើតបានជាសមាមាត្រស្មើគ្នា ១ ភាគ ៣ ដូចដែលយើងបានឃើញនៅស្លាយទី ២៨!',
          },
        ],
        callout: {
          en: 'Historical Economics in One Chart: The shrinking blue bars and expanding green bars from 1952 to 2007 visually capture the East & Southeast Asian Economic Miracle (South Korea, Taiwan, Singapore, Malaysia, Thailand moving upward across tiers)!',
          km: 'ប្រវត្តិសាស្ត្រសេដ្ឋកិច្ចក្នុងក្រាហ្វតែមួយ៖ ការរួមតូចនៃរបារពណ៌ខៀវ និងការរីកធំនៃរបារពណ៌បៃតងពីឆ្នាំ ១៩៥២ ដល់ ២០០៧ បង្ហាញយ៉ាងច្បាស់ពីអច្ឆរិយភាពសេដ្ឋកិច្ចអាស៊ី (កូរ៉េខាងត្បូង សិង្ហបុរី តៃវ៉ាន់ ម៉ាឡេស៊ី និងថៃ ដែលបានផ្លាស់ប្តូរឡើងទៅកាន់កម្រិតខ្ពស់)!',
        },
      },
      deepDiveExplanation: {
        en: 'Slide 38 (footer 37) answers the natural counterpart to Slide 37: what if we want to visualize the time evolution of a **Qualitative** variable (`GDP_Category`) rather than a continuous quantitative metric? Since a qualitative variable has no numeric mean to plot as a single line, we plot a sequence of vertical stacked bars—one bar per timestamp $t \\in \\{1952, 1957, \\dots, 2007\\}$—where the height of each colored sub-segment represents the count (or proportion) of countries in that category at year $t$. Notice that in this balanced panel of $33$ Asian countries, the total height of every bar is fixed at $33$, so absolute counts on the Y-axis are simultaneously proportional to percentages! Tracking the boundary lines between the blue (`Developing`), red (`Emerging`), and green (`Developed`) segments over the 55-year horizon reveals the upward structural mobility of Asia.',
        km: 'ស្លាយទី ៣៨ (លេខស្លាយ 37) បង្ហាញពីដំណោះស្រាយនៅពេលដែលយើងចង់មើលការវិវត្តន៍តាមពេលវេលារបស់ **អថេរគុណភាព** (`GDP_Category`) ជំនួសឱ្យអថេរបរិមាណ។ ដោយសារអថេរគុណភាពមិនអាចគណនាមធ្យមភាគដើម្បីគូសជាបន្ទាត់តែមួយបាន យើងប្រើក្រាហ្វសសរត្រួតគ្នាតម្រៀបតាមលំដាប់ឆ្នាំ (ពីឆ្នាំ ១៩៥២ ដល់ ២០០៧) ដែលផ្នែកពណ៌នីមួយៗនៃសសរតំណាងឱ្យចំនួនប្រទេសនៅក្នុងកម្រិតអភិវឌ្ឍន៍នោះនាឆ្នាំនីមួយៗ។ សូមសង្កេតថា ដោយសារចំនួនប្រទេសនៅទ្វីបអាស៊ីក្នុងសំណុំទិន្នន័យនេះមានចំនួនថេរ (៣៣ ប្រទេសគ្រប់ឆ្នាំ) កម្ពស់សរុបនៃសសរទាំង ១២ គឺស្មើនឹង ៣៣ ដូចគ្នាទាំងអស់។ ការពិនិត្យមើលបន្ទាត់ព្រំដែនរវាងពណ៌ខៀវ (`Developing`), ពណ៌ក្រហម (`Emerging`) និងពណ៌បៃតង (`Developed`) ពីឆ្វេងទៅស្តាំ ធ្វើឱ្យយើងមើលឃើញពីការរីកចម្រើនផ្នែកសេដ្ឋកិច្ចរបស់ទ្វីបអាស៊ីក្នុងរយៈពេល ៥៥ ឆ្នាំបានយ៉ាងច្បាស់។',
      },
      practicalApplication: {
        scenarioTitle: {
          en: 'Tracking Customer Subscription Tier Migration Over Monthly Cohorts',
          km: 'ការតាមដានការផ្លាស់ប្តូរកម្រិតសមាជិកភាពរបស់អតិថិជនតាមខែនីមួយៗ',
        },
        description: {
          en: 'SaaS and telecom companies use Evolutional Stacked Barplots in Looker Studio to track how their customer base shifts from Free/Basic tiers (blue) to Premium/Enterprise tiers (green) quarter by quarter.',
          km: 'ក្រុមហ៊ុនបច្ចេកវិទ្យា និងទូរគមនាគមន៍ប្រើប្រាស់ក្រាហ្វសសរត្រួតគ្នាតាមពេលវេលាក្នុង Looker Studio ដើម្បីតាមដានថាតើអតិថិជនរបស់ពួកគេផ្លាស់ប្តូរពីកញ្ចប់ធម្មតា (ពណ៌ខៀវ) ឡើងទៅកាន់កញ្ចប់ពិសេស Premium (ពណ៌បៃតង) កើនឡើងកម្រិតណាពីមួយត្រីមាសទៅមួយត្រីមាស។',
        },
        impactMetric: 'Reveals +71.4% growth in Developed Asian economies (from 7 to 12 nations) between 1952 and 2007',
      },
    },
  },

  // ==========================================
  // SLIDE 39 (PDF Page 39 — Slide Footer 38)
  // ==========================================
  {
    pageNumber: 39,
    slideFooterNumber: '38',
    sectionTag: {
      en: '2.8 Animated Graphs — Plotly 5-Dimensional Bubble Animation',
      km: '2.8 ក្រាហ្វមានចលនា (Animated Graphs) — ការបង្ហាញចលនាទិន្នន័យ ៥ អថេរដោយប្រើ Plotly',
    },
    simulatorMode: 'animated_plotly_bubble',
    pageIdentity: {
      titleEn: '2.8 Animated Graphs — Animation With Plotly: The Evolution of the World in a Single Graph',
      titleKm: '2.8 ក្រាហ្វមានចលនា — ការបង្កើតចលនាជាមួយ Plotly៖ ការវិវត្តន៍នៃពិភពលោកនៅក្នុងក្រាហ្វតែមួយ',
      themeName: {
        en: 'Interactive Temporal Playback Bubble Studio',
        km: 'ផ្ទៃបង្ហាញក្រាហ្វពពុះមានចលនាតាមពេលវេលា (១៩៥២–២០០៧)',
      },
      canvasBgHex: '#F8FAFC',
      surfaceCardHex: '#FFFFFF',
      primaryAccentHex: '#1E4E79',
      secondaryAccentHex: '#6366F1',
      textPrimaryHex: '#0F172A',
      hierarchyRationale: {
        en: 'Replicates Slide 39’s exact Plotly animated bubble chart interface ("The Evolution of the World in a Single Graph") complete with Play (▶) and Stop (◼) buttons, interactive timeline scrubber (`year=1952` through `2007`), logarithmic X-axis (100 to 100k), and 5-continent color legend.',
        km: 'រចនាតាមទម្រង់ក្រាហ្វមានចលនារបស់ Plotly ក្នុងស្លាយទី ៣៩ («The Evolution of the World in a Single Graph») ដែលមានប៊ូតុងចាក់ (▶) និងបញ្ឈប់ (◼), របាររំកិលឆ្នាំ (`year=1952` ដល់ `2007`), អ័ក្ស X ជាមាត្រដ្ឋាន Log (100 ដល់ 100k) និងពណ៌តាមទ្វីបទាំង ៥។',
      },
    },
    wireframe: {
      headerSection: {
        en: 'Top Header: "2.8 🎬 Animated Graphs — Animation With Plotly [plotly logo]".',
        km: 'ផ្នែកខាងលើ៖ ចំណងជើង «2.8 🎬 Animated Graphs — Animation With Plotly»។',
      },
      leftZone: {
        en: 'Main Interactive Canvas (100% width): "The Evolution of the World in a Single Graph" — 5-Variable Animated Bubble Chart (`X = log(gdpPercap)` 100 to 100k, `Y = lifeExp` 30 to 85, `Size = pop`, `Color = continent`, `Animation Frame = year`).',
        km: 'ផ្ទៃក្រាហ្វកណ្តាលពេញអេក្រង់៖ «The Evolution of the World in a Single Graph» — ក្រាហ្វពពុះមានចលនាបង្ហាញអថេរ ៥ ក្នុងពេលតែមួយ (X = `log(gdpPercap)`, Y = `lifeExp`, ទំហំ = `pop`, ពណ៌ = `continent`, ចលនាតាមឆ្នាំ = `year`)។',
      },
      rightZone: {
        en: 'Bottom Playback Controller Bar: Play Button (▶), Pause/Stop Button (◼), and 12-Tick Year Scrubber (`1952, 1957, 1962, 1967, 1972, 1977, 1982, 1987, 1992, 1997, 2002, 2007`).',
        km: 'របារបញ្ជាចលនានៅខាងក្រោម៖ ប៊ូតុង Play (▶), ប៊ូតុង Stop (◼) និងរបាររំកិលឆ្នាំទាំង ១២ ចន្លោះ (ពីឆ្នាំ ១៩៥២ ដល់ ២០០៧)។',
      },
      bottomOrTopBar: {
        en: 'Footer note explaining how Plotly `animation_frame="year"` and `animation_group="country"` encode the 5th variable (Time).',
        km: 'របារពន្យល់ខាងក្រោមអំពីការប្រើប៉ារ៉ាម៉ែត្រ `animation_frame="year"` និង `animation_group="country"` ក្នុងកូដ Plotly ដើម្បីបង្ហាញអថេរទី ៥ (ពេលវេលា)។',
      },
      gridAllocation: '12-Column Interactive Animated Bubble Viewport + Timeline Playback Scrubber',
    },
    chartMetricsMath: {
      scorecards: [
        {
          label: { en: 'Total Variables in Single Graph', km: 'ចំនួនអថេរសរុបនៅក្នុងក្រាហ្វតែមួយ' },
          value: '5 Dimensions',
          metricField: 'five_d_encoding',
          aggregation: 'X, Y, Size, Color, Time',
          comparisonNote: { en: 'GDP, LifeExp, Pop, Continent, Year', km: 'GDP, អាយុរំពឹងរស់, ប្រជាជន, ទ្វីប និងឆ្នាំ' },
        },
        {
          label: { en: '1952 Global Baseline', km: 'ស្ថានភាពពិភពលោកនៅឆ្នាំ ១៩៥២' },
          value: 'LifeExp: 48.9 yrs',
          metricField: 'mean_lifeexp_1952',
          aggregation: '1952 Snapshot',
          comparisonNote: { en: 'Asian & African bubbles clustered bottom-left', km: 'ពពុះអាស៊ី និងអាហ្វ្រិកប្រមូលផ្តុំនៅជ្រុងក្រោមខាងឆ្វេង' },
        },
        {
          label: { en: '2007 Global Endpoint', km: 'ស្ថានភាពពិភពលោកនៅឆ្នាំ ២០០៧' },
          value: 'LifeExp: 67.0 yrs',
          metricField: 'mean_lifeexp_2007',
          aggregation: '2007 Snapshot',
          comparisonNote: { en: 'Massive diagonal migration toward top-right!', km: 'ពពុះធ្វើចលនាឡើងទៅជ្រុងលើខាងស្តាំយ៉ាងខ្លាំង!' },
        },
      ],
      charts: [
        {
          chartType: {
            en: 'Animated 5D Bubble Chart (`px.scatter` with `animation_frame="year"` / Looker Studio Year Slider)',
            km: 'ក្រាហ្វពពុះមានចលនា 5D (`px.scatter` ជាមួយ `animation_frame="year"` ឬរបាររំកិលឆ្នាំក្នុង Looker Studio)',
          },
          dimensions: ['country', 'year'],
          breakdownDimension: 'continent',
          metrics: ['gdpPercap (Log X)', 'lifeExp (Y)', 'pop (Size)'],
          sorting: 'year ASC, pop DESC',
          stylingNote: {
            en: 'Fix axis ranges across all frames (`range_x=[100, 100000]`, `range_y=[25, 90]`) so the coordinate grid never jumps while bubbles animate from 1952 to 2007!',
            km: 'ត្រូវកំណត់ដែនអ័ក្ស X និង Y ឱ្យថេរគ្រប់ឆ្នាំ (`range_x=[100, 100000]`, `range_y=[25, 90]`) ដើម្បីកុំឱ្យផ្ទៃក្រាហ្វលោតរង្គើនៅពេលពពុះធ្វើចលនាពីឆ្នាំ ១៩៥២ ដល់ ២០០៧!',
          },
        },
      ],
      formulas: [],
    },
    controls: [
      {
        controlType: { en: 'Interactive Play/Pause & Year Timeline Scrubber (1952–2007)', km: 'ប៊ូតុងចាក់/បញ្ឈប់ចលនា និងរបាររំកិលឆ្នាំ (១៩៥២–២០០៧)' },
        field: 'animation_year',
        defaultState: '1952 (Ready to Play ▶ to 2007)',
        purpose: {
          en: 'Lets users click Play (▶) or drag the timeline slider from 1952 to 2007 to watch the countries of the world grow healthier, wealthier, and more populous in real time!',
          km: 'អនុញ្ញាតឱ្យអ្នកសិក្សាចុចប៊ូតុង Play (▶) ឬអូសរបារពេលវេលាពីឆ្នាំ ១៩៥២ ដល់ ២០០៧ ដើម្បីមើលចលនារបស់ប្រទេសទាំងអស់លើពិភពលោកកាន់តែមានសុខភាពល្អ និងសេដ្ឋកិច្ចរីកចម្រើន!',
        },
      },
    ],
    expandedContent: {
      onScreenText: {
        heading: {
          en: '2.8 Animated Graphs: The Evolution of the World in a Single Graph (Plotly)',
          km: '2.8 ក្រាហ្វមានចលនា៖ ការវិវត្តន៍នៃពិភពលោកទាំងមូលនៅក្នុងក្រាហ្វតែមួយ (Plotly)',
        },
        bullets: [
          {
            en: 'By mapping `year` (1952 to 2007) to an Animation Timeline Slider (`animation_frame="year"` in Plotly), we add a 5th dimension to our 4-variable Bubble Chart!',
            km: 'តាមរយៈការភ្ជាប់អថេរឆ្នាំ (`year` ពី ១៩៥២ ដល់ ២០០៧) ទៅនឹងរបាររំកិលចលនា (`animation_frame="year"` ក្នុង Plotly) យើងអាចបន្ថែមវិមាត្រទី ៥ ទៅក្នុងក្រាហ្វពពុះរបស់យើង!',
          },
          {
            en: 'In 1952 (`year=1952` shown on slide): Giant blue bubbles (China and India) sit in the bottom-left corner (GDP < $600, Life Expectancy ~37–44 years), while red/orange European bubbles sit in the upper-middle.',
            km: 'នៅឆ្នាំ ១៩៥២ (`year=1952` ដូចបង្ហាញលើស្លាយ)៖ ពពុះពណ៌ខៀវធំៗទាំងពីរ (ចិន និងឥណ្ឌា) ស្ថិតនៅជ្រុងក្រោមខាងឆ្វេង (GDP < $600, អាយុរំពឹងរស់ត្រឹម ~៣៧–៤៤ ឆ្នាំ) ខណៈពពុះពណ៌ទឹកក្រូចនៃទ្វីបអឺរ៉ុបស្ថិតនៅផ្នែកខាងលើ។',
          },
          {
            en: 'Pressing Play (▶) from 1952 to 2007 recreates Hans Rosling’s famous "200 Countries, 200 Years in 4 Minutes" demonstration: Asian bubbles surge diagonally upward and rightward into the middle- and high-income health bracket!',
            km: 'នៅពេលចុចប៊ូតុង Play (▶) ពីឆ្នាំ ១៩៥២ ដល់ ២០០៧ យើងនឹងឃើញបទបង្ហាញដ៏ល្បីល្បាញរបស់លោក Hans Rosling ផ្ទាល់ភ្នែក៖ ពពុះនៃទ្វីបអាស៊ីហោះឡើងលើ និងទៅស្តាំយ៉ាងលឿនឆ្ពោះទៅរកកម្រិតសុខភាព និងសេដ្ឋកិច្ចខ្ពស់!',
          },
        ],
        callout: {
          en: 'Critical Technical Rule for Animated Charts: Always lock `range_x` and `range_y` to the global minimum and maximum across ALL years (1952–2007) so the axes do not rescale on every frame!',
          km: 'វិធានបច្ចេកទេសដ៏សំខាន់សម្រាប់ក្រាហ្វមានចលនា៖ ត្រូវចាក់សោដែនកំណត់អ័ក្ស `range_x` និង `range_y` ឱ្យគ្របដណ្តប់គ្រប់ឆ្នាំទាំងអស់ (១៩៥២–២០០៧) ដើម្បីឱ្យយើងមើលឃើញពពុះធ្វើដំណើរឆ្លងកាត់ផ្ទៃក្រាហ្វដោយអ័ក្សមិនលោតប្រែប្រួល!',
        },
      },
      deepDiveExplanation: {
        en: 'Slide 39 (footer 38) is the grand finale of the Gapminder journey that began on Slide 5. In Python’s `plotly.express` library, a single declarative command—`px.scatter(gapminder, x="gdpPercap", y="lifeExp", size="pop", color="continent", hover_name="country", log_x=True, size_max=55, range_x=[100, 100000], range_y=[25, 90], animation_frame="year", animation_group="country")`—generates an HTML5 interactive widget encoding **five distinct columns** (`gdpPercap`, `lifeExp`, `pop`, `continent`, `year`) plus `country` on hover! Watching the trajectory from $1952$ to $2007$ reveals dynamic phenomena that no static table could ever show: for instance, China’s steep vertical climb in life expectancy during the 1960s–1970s followed by its rapid horizontal sprint in GDP per capita after 1978, or the tragic temporary drop in life expectancy in Southern Africa during the 1990s.',
        km: 'ស្លាយទី ៣៩ (លេខស្លាយ 38) គឺជាចំណុចកំពូលនៃការសិក្សាសំណុំទិន្នន័យ Gapminder ដែលបានចាប់ផ្តើមតាំងពីស្លាយទី ៥ មក។ នៅក្នុងបណ្ណាល័យ `plotly.express` នៃភាសា Python គ្រាន់តែប្រើកូដមួយបន្ទាត់ដោយបន្ថែម `animation_frame="year"` និង `animation_group="country"` យើងអាចបង្កើតក្រាហ្វអន្តរកម្មដែលផ្ទុកព័ត៌មានរហូតដល់ទៅ **៥ អថេរក្នុងពេលតែមួយ** (`gdpPercap`, `lifeExp`, `pop`, `continent`, `year`) រួមទាំងឈ្មោះប្រទេស (`country`) នៅពេលដាក់ព្រួញម៉ៅស៍ពីលើ! ការមើលចលនាពីឆ្នាំ ១៩៥២ ដល់ ២០០៧ ធ្វើឱ្យយើងមើលឃើញព្រឹត្តិការណ៍ប្រវត្តិសាស្ត្រដ៏រស់រវើក ដែលតារាងតួលេខធម្មតាមិនអាចបង្ហាញបាន ដូចជាការកើនឡើងអាយុរំពឹងរស់យ៉ាងលឿនរបស់ប្រទេសចិនក្នុងទសវត្សរ៍ឆ្នាំ ១៩៦០–១៩៧០ មុននឹងស្ទុះឡើងផ្នែកសេដ្ឋកិច្ច (GDP) ក្រោយកំណែទម្រង់ឆ្នាំ ១៩៧៨។',
      },
      practicalApplication: {
        scenarioTitle: {
          en: 'Interactive Year-Slider Bubble Charts in Google Looker Studio Presentations',
          km: 'ការបង្កើតក្រាហ្វពពុះភ្ជាប់ជាមួយរបាររំកិលឆ្នាំនៅក្នុងបទបង្ហាញ Google Looker Studio',
        },
        description: {
          en: 'In Looker Studio, embedding a Plotly community visualization or pairing a Bubble Chart with a Year Slider control allows board members to scrub across 10+ years of provincial economic and health development during live strategy meetings.',
          km: 'នៅក្នុង Google Looker Studio ការភ្ជាប់ក្រាហ្វពពុះ (Bubble Chart) ជាមួយនឹងរបាររំកិលជ្រើសរើសឆ្នាំ (Year Slider) អនុញ្ញាតឱ្យអ្នកធ្វើបទបង្ហាញអូសបង្ហាញការវិវត្តន៍សេដ្ឋកិច្ច និងសុខាភិបាលតាមខេត្តក្នុងរយៈពេល ១០ ទៅ ៥០ ឆ្នាំយ៉ាងរស់រវើក។',
        },
        impactMetric: 'Encodes all 1,704 rows × 5 dimensions of Gapminder into one interactive frame',
      },
    },
  },

  // ==========================================
  // SLIDE 40 (PDF Page 40 — Slide Footer 39)
  // ==========================================
  {
    pageNumber: 40,
    slideFooterNumber: '39',
    sectionTag: {
      en: 'Course Golden Rule & Methodology Conclusion',
      km: 'វិធានមាសនៃការវិភាគទិន្នន័យ និងសេចក្តីសន្និដ្ឋានរួមនៃមេរៀន',
    },
    simulatorMode: 'golden_rule_takeaway',
    pageIdentity: {
      titleEn: 'Conclusion — Begin the Analysis with Indicators, Then Visualize the Ones with Potential Impact',
      titleKm: 'សេចក្តីសន្និដ្ឋាន — ចាប់ផ្តើមការវិភាគដោយប្រើសូចនាករ រួចទើបគូសក្រាហ្វសម្រាប់គូណាដែលមានសក្តានុពល',
      themeName: {
        en: 'High-Contrast Executive Maxim Theme',
        km: 'ផ្ទៃរំលេចទស្សនៈគោលដ៏សំខាន់បំផុតនៃមេរៀន (Executive Maxim)',
      },
      canvasBgHex: '#FFFFFF',
      surfaceCardHex: '#F8FAFC',
      primaryAccentHex: '#1E4E79',
      secondaryAccentHex: '#2563EB',
      textPrimaryHex: '#0F172A',
      hierarchyRationale: {
        en: 'Matches Slide 40’s clean white canvas (#FFFFFF) and bold serif typography in #1E4E79 Navy with the keyword "indicators" highlighted in vivid #2563EB Royal Blue.',
        km: 'រចនាតាមផ្ទៃពណ៌សស្អាត (#FFFFFF) នៃស្លាយទី ៤០ ដោយប្រើអក្សរធំដិតពណ៌ខៀវចាស់ (#1E4E79) និងរំលេចពាក្យគន្លឹះ «indicators / សូចនាករ» ដោយពណ៌ខៀវភ្លឺ (#2563EB)។',
      },
    },
    wireframe: {
      headerSection: {
        en: 'Top-right AMS emblem on a pure minimalist white (#FFFFFF) canvas.',
        km: 'និមិត្តសញ្ញាដេប៉ាតឺម៉ង់ AMS នៅជ្រុងលើខាងស្តាំលើផ្ទៃពណ៌សស្អាត (#FFFFFF)។',
      },
      leftZone: {
        en: 'Center Focal Maxim Banner: "Begin the analysis with indicators, then visualize the ones with potential impact. / ចូរចាប់ផ្តើមការវិភាគដោយគណនាសូចនាករជាមុនសិន បន្ទាប់មកទើបគូសក្រាហ្វសម្រាប់គូអថេរណាដែលមានសក្តានុពល។"',
        km: 'ប្រយោគមាសនៅចំកណ្តាលទំព័រ៖ «Begin the analysis with indicators, then visualize the ones with potential impact. / ចូរចាប់ផ្តើមការវិភាគដោយគណនាសូចនាករជាមុនសិន បន្ទាប់មកទើបគូសក្រាហ្វសម្រាប់គូអថេរណាដែលមានសក្តានុពល»។',
      },
      rightZone: {
        en: 'Bottom 2-Stage Workflow Diagram showing Stage 1: Automated Indicator Screening across p(p-1)/2 pairs (r, ρ, η², χ², Ṽ) → Stage 2: Deep Visual Exploration of high-impact pairs (Scatterplot, Boxplot, Stacked Bar, Bubble Chart).',
        km: 'ដ្យាក្រាមលំហូរការងារ ២ ដំណាក់កាលនៅខាងក្រោម៖ ដំណាក់កាលទី ១ (ការគណនាសូចនាករស្ថិតិដើម្បីច្រោះរកគូសំខាន់ៗ) → ដំណាក់កាលទី ២ (ការគូសក្រាហ្វពិនិត្យលម្អិតលើគូអថេរដែលមានឥទ្ធិពលខ្ពស់)។',
      },
      bottomOrTopBar: {
        en: 'Bottom-right slide footer "39" (PDF Page 40 of 41).',
        km: 'លេខសម្គាល់ទំព័រ «39» នៅជ្រុងក្រោមខាងស្តាំ (ទំព័រទី ៤០ នៃ ៤១ ក្នុង PDF)។',
      },
      gridAllocation: '12-Column Centered Maxim Banner + 2-Stage Analytical Funnel Diagram',
    },
    chartMetricsMath: {
      scorecards: [
        {
          label: { en: 'For p = 50 Columns', km: 'ប្រសិនបើមានជួរឈរចំនួន p = 50' },
          value: '1,225 Pairs',
          metricField: 'pair_combinatorics',
          aggregation: 'p(p - 1) / 2',
          comparisonNote: { en: 'Impossible to inspect 1,225 charts manually!', km: 'មិនអាចគូសក្រាហ្វទាំង ១.២២៥ មើលដោយភ្នែកម្តងមួយៗបានទេ!' },
        },
        {
          label: { en: 'Step 1: Indicator Screen', km: 'ជំហានទី ១៖ ច្រោះដោយប្រើសូចនាករ' },
          value: 'r, ρ, η², χ², Ṽ',
          metricField: 'indicator_screen',
          aggregation: 'Automated Matrix',
          comparisonNote: { en: 'Ranks all 1,225 pairs in < 1 second', km: 'ដាក់ចំណាត់ថ្នាក់គូទាំង ១.២២៥ ក្នុងពេលតែ ១ វិនាទី' },
        },
        {
          label: { en: 'Step 2: Visual Deep-Dive', km: 'ជំហានទី ២៖ គូសក្រាហ្វលើគូសំខាន់ៗ' },
          value: 'Top 5–10 Pairs',
          metricField: 'visual_deep_dive',
          aggregation: 'Targeted Charts',
          comparisonNote: { en: 'Plot only pairs with high potential impact', km: 'គូសក្រាហ្វចំពោះតែគូណាដែលមានសូចនាករខ្ពស់ប៉ុណ្ណោះ' },
        },
      ],
      charts: [
        {
          chartType: {
            en: 'Looker Studio 2-Stage Bivariate Screening Funnel (All Pairs → Indicator Threshold → Impact Visualizations)',
            km: 'ដ្យាក្រាមជីឡៅ (Funnel) បង្ហាញពីការច្រោះគូអថេរតាមរយៈសូចនាករ មុននឹងគូសក្រាហ្វ',
          },
          dimensions: ['workflow_stage_en_km'],
          metrics: ['candidate_pairs_count'],
          sorting: 'candidate_pairs_count DESC',
          stylingNote: {
            en: 'Illustrates how indicators reduce 1,225 candidate pairs (for 50 columns) down to the top 10 impactful pairs worthy of dashboard canvas space.',
            km: 'បង្ហាញពីរបៀបដែលសូចនាករជួយបង្រួមគូអថេរពី ១.២២៥ គូ មកនៅត្រឹម ១០ គូសំខាន់បំផុតសម្រាប់ដាក់បង្ហាញលើផ្ទាំង Dashboard។',
          },
        },
      ],
      formulas: [
        {
          title: { en: 'Combinatorial Explosion of Bivariate Pairs in High-Dimensional Datasets', km: 'រូបមន្តចំនួនគូអថេរសរុបនៅក្នុងសំណុំទិន្នន័យដែលមានជួរឈរច្រើន' },
          equation: 'Total Bivariate Pairs = (p choose 2) = p(p - 1) / 2',
          variables: [
            { symbol: 'p', en: 'Total number of columns (features) in the dataset', km: 'ចំនួនជួរឈរ (អថេរ) សរុបនៅក្នុងសំណុំទិន្នន័យ' },
            { symbol: 'p(p - 1) / 2', en: 'Number of distinct unordered pairs of columns (e.g., p=3 ⇒ 3 pairs; p=20 ⇒ 190 pairs; p=100 ⇒ 4,950 pairs!)', km: 'ចំនួនគូអថេរខុសៗគ្នាសរុប (ឧទាហរណ៍៖ បើ p=3 មាន 3 គូ; បើ p=20 មាន 190 គូ; តែបើ p=100 មានរហូតដល់ 4,950 គូ!)' },
          ],
        },
      ],
    },
    controls: [
      {
        controlType: { en: 'Metric Slider Control (Dataset Column Count `p` Simulator)', km: 'របាររំកិលសាកល្បងចំនួនជួរឈរ p (ពី 3 ដល់ 100 ជួរឈរ)' },
        field: 'column_count_p',
        defaultState: 'p = 20 Columns (190 Bivariate Pairs)',
        purpose: {
          en: 'Lets students slide `p` from 3 to 100 and see why plotting p(p-1)/2 charts without first screening via indicators is impossible in real-world data science.',
          km: 'អនុញ្ញាតឱ្យនិស្សិតសាកល្បងប្តូរចំនួនជួរឈរ p ពី 3 ដល់ 100 ដើម្បីឃើញច្បាស់ថាហេតុអ្វីយើងមិនអាចគូសក្រាហ្វគ្រប់គូទាំងអស់ដោយមិនប្រើសូចនាករច្រោះជាមុនបានឡើយ។',
        },
      },
    ],
    expandedContent: {
      onScreenText: {
        heading: {
          en: 'The Golden Rule of Bivariate EDA: Indicators First, Targeted Visualization Second',
          km: 'វិធានមាសនៃការវិភាគទិន្នន័យទ្វេអថេរ៖ គណនាសូចនាករជាមុន គូសក្រាហ្វដែលមានសក្តានុពលតាមក្រោយ',
        },
        bullets: [
          {
            en: '"Begin the analysis with indicators, then visualize the ones with potential impact."',
            km: '«ចូរចាប់ផ្តើមការវិភាគដោយប្រើសូចនាករ (Indicators) ជាមុនសិន បន្ទាប់មកទើបគូសក្រាហ្វសម្រាប់គូណាដែលមានសក្តានុពលផ្តល់ផលប៉ះពាល់សំខាន់ៗ»។',
          },
          {
            en: 'Step 1 (Broad Mathematical Screening): Compute correlation matrices (Pearson r, Spearman ρ), ANOVA η² tables, and Cramér’s Ṽ matrices across all column pairs automatically.',
            km: 'ជំហានទី ១ (ការច្រោះទិន្នន័យទ្រង់ទ្រាយធំតាមគណិតវិទ្យា)៖ គណនាម៉ាទ្រីសសហសម្ព័ន្ធ (Pearson r, Spearman ρ), តារាង η² និងម៉ាទ្រីស Cramér’s Ṽ លើគ្រប់គូនៃជួរឈរទាំងអស់ដោយស្វ័យប្រវត្តិ។',
          },
          {
            en: 'Step 2 (Focused Visual Verification): Select the pairs with strong indicator values (or suspicious gaps between r and ρ) and build high-clarity Scatterplots, Boxplots, Stacked Barplots, or Bubble Charts to uncover trends, clusters, and anomalies.',
            km: 'ជំហានទី ២ (ការគូសក្រាហ្វផ្ទៀងផ្ទាត់ស៊ីជម្រៅ)៖ ជ្រើសរើសគូអថេរណាដែលមានតម្លៃសូចនាករខ្ពស់ (ឬមានគម្លាតខុសគ្នាខ្លាំងរវាង r និង ρ) មកគូសជាក្រាហ្វ Scatterplot, Boxplot, Stacked Barplot ឬ Bubble Chart ដើម្បីស្វែងរកទំនោរ និងចំណុចខុសប្រក្រតី។',
          },
        ],
        callout: {
          en: 'Why This Two-Step Workflow Wins: Indicators alone can be fooled by outliers or non-linear curves (Slide 12 & 20); Visualizations alone cannot scale to 1,000+ column pairs. Together, they are unstoppable!',
          km: 'ហេតុអ្វីលំហូរការងារ ២ ជំហាននេះមានប្រសិទ្ធភាពខ្ពស់បំផុត៖ បើប្រើតែសូចនាករតួលេខ យើងអាចចាញ់បោកតម្លៃ Outliers ឬខ្សែកោង (ស្លាយទី ១២ និង ២០) តែបើគូសក្រាហ្វគ្រប់គូដោយមិនច្រោះជាមុន យើងនឹងលង់ក្នុងក្រាហ្វរាប់ពាន់! ការប្រើទាំងពីររួមគ្នាគឺជាវិធីសាស្ត្រដ៏ល្អឥតខ្ចោះ!',
        },
      },
      deepDiveExplanation: {
        en: 'Slide 40 (footer 39) distills the entire 40-slide lecture into a single, unforgettable methodological maxim: **"Begin the analysis with indicators, then visualize the ones with potential impact."** In real-world Business Intelligence and Machine Learning projects, a dataset rarely has just 3 columns like Gapminder—a telecom customer table or hospital electronic health record often has $p = 50$ to $200$ columns, generating $\\frac{p(p-1)}{2} = 1,225$ to $19,900$ bivariate pairs! Plotting and visually inspecting $19,900$ charts is humanly impossible. Instead, the professional data scientist runs an automated indicator pass—computing Spearman’s $\\rho$ and Pearson’s $r$ for all Quantitative–Quantitative pairs, $\\eta^2$ for all Quantitative–Qualitative pairs, and bias-corrected Cramér’s $\\tilde{V}$ (plus $\\chi^2$ $p$-values) for all Qualitative–Qualitative pairs. This mathematical sieve immediately highlights the top pairs with high potential impact, which are then elevated to the Looker Studio dashboard for rich visual storytelling.',
        km: 'ស្លាយទី ៤០ (លេខស្លាយ 39) បង្រួមខ្លឹមសារនៃមេរៀនទាំងមូលឱ្យទៅជាវិធានមាសតែមួយប្រយោគដ៏មានអត្ថន័យ៖ **«ចូរចាប់ផ្តើមការវិភាគដោយប្រើសូចនាករជាមុនសិន បន្ទាប់មកទើបគូសក្រាហ្វសម្រាប់គូណាដែលមានសក្តានុពល»**។ នៅក្នុងគម្រោងវិភាគទិន្នន័យជាក់ស្តែងតាមក្រុមហ៊ុន ធនាគារ ឬមន្ទីរពេទ្យ សំណុំទិន្នន័យកម្រមានត្រឹមតែ ៣ ជួរឈរដូចទិន្នន័យ Gapminder ណាស់ គឺវាតែងមានចាប់ពី $p = 50$ ទៅ $200$ ជួរឈរ ដែលបង្កើតបានជាគូអថេរចំនួន $\\frac{p(p-1)}{2} = 1,225$ ទៅដល់ $19,900$ គូ! ការគូសក្រាហ្វទាំង $19,900$ មកពិនិត្យមើលម្តងមួយៗដោយភ្នែក គឺជារឿងមិនអាចទៅរួចឡើយ។ ហេតុនេះ អ្នកវិទ្យាសាស្ត្រទិន្នន័យអាជីពប្រើប្រាស់កូដគណនាសូចនាករស្ថិតិដោយស្វ័យប្រវត្តិជាមុន (Pearson $r$, Spearman $\\rho$, មេគុណ $\\eta^2$ និង Cramér’s $\\tilde{V}$) ដើម្បីច្រោះយកតែគូអថេរណាដែលមានទំនាក់ទំនងខ្លាំងបំផុត មកគូសជាក្រាហ្វដាក់បង្ហាញនៅលើផ្ទាំង Google Looker Studio។',
      },
      practicalApplication: {
        scenarioTitle: {
          en: 'Automated Feature-Pair Discovery Pipeline for Executive Looker Studio Reports',
          km: 'ការរៀបចំប្រព័ន្ធច្រោះរកគូអថេរសំខាន់ៗដោយស្វ័យប្រវត្តិសម្រាប់របាយការណ៍ថ្នាក់ដឹកនាំ',
        },
        description: {
          en: 'Data engineering teams run a nightly Python script that computes r, ρ, η², and Cramér’s Ṽ across their BigQuery warehouse tables, exporting only the top 15 highest-scoring bivariate relationships to the executive Looker Studio dashboard.',
          km: 'ក្រុមវិស្វករទិន្នន័យប្រើប្រាស់កូដ Python គណនាតម្លៃ r, ρ, η² និង Cramér’s Ṽ នៅលើមូលដ្ឋានទិន្នន័យ BigQuery ជារៀងរាល់យប់ ហើយបញ្ជូនតែគូអថេរចំនួន ១៥ ដែលមានពិន្ទុទំនាក់ទំនងខ្ពស់បំផុតទៅបង្ហាញជាក្រាហ្វនៅលើផ្ទាំង Looker Studio សម្រាប់ថ្នាក់ដឹកនាំ។',
        },
        impactMetric: 'Reduces manual visual inspection workload by >95% in wide tabular datasets',
      },
    },
  },

  // ==========================================
  // SLIDE 41 (PDF Page 41 — Slide Footer 40)
  // ==========================================
  {
    pageNumber: 41,
    slideFooterNumber: '40',
    sectionTag: {
      en: 'Course Finale & Student Celebration',
      km: 'ទំព័របញ្ចប់មេរៀន និងការអបអរសាទរការបញ្ចប់ជំពូកទី ២',
    },
    simulatorMode: 'course_completion_celebration',
    pageIdentity: {
      titleEn: 'Yeahhhh…. Party time… — Chapter II Mastery & Lab Readiness Celebration',
      titleKm: 'អបអរសាទរការបញ្ចប់ជំពូកទី ២ (Yeahhhh…. Party time…) — ការត្រៀមខ្លួនសម្រាប់ការអនុវត្តផ្ទាល់',
      themeName: {
        en: 'Warm Academic Celebration & Course Wrap-Up Theme',
        km: 'ផ្ទៃអបអរសាទរការបញ្ចប់មេរៀន និងបូកសរុបសមិទ្ធផលសិក្សា',
      },
      canvasBgHex: '#F8FAFC',
      surfaceCardHex: '#FFFFFF',
      primaryAccentHex: '#1E4E79',
      secondaryAccentHex: '#D97706',
      textPrimaryHex: '#0F172A',
      hierarchyRationale: {
        en: 'Mirrors Slide 41’s celebratory closing frame ("🥳 Yeahhhh…. Party time… 🥂") with the top #1E4E79 navy rule, AMS logo, and an interactive Chapter II Mastery Certificate & Export Hub.',
        km: 'រចនាតាមទំព័របញ្ចប់ដ៏រីករាយនៃស្លាយទី ៤១ («🥳 Yeahhhh…. Party time… 🥂») អមដោយបន្ទាត់ពណ៌ខៀវចាស់ (#1E4E79) និមិត្តសញ្ញា AMS និងផ្ទាំងបូកសរុបជំនាញដែលសម្រេចបានទាំងអស់ក្នុងជំពូកទី ២។',
      },
    },
    wireframe: {
      headerSection: {
        en: 'Top Header: "🥳 Yeahhhh…. / អបអរសាទរការបញ្ចប់ជំពូកទី ២!" above a full-width #1E4E79 horizontal rule and AMS emblem.',
        km: 'ផ្នែកខាងលើ៖ ចំណងជើង «🥳 Yeahhhh…. / អបអរសាទរការបញ្ចប់ជំពូកទី ២!» អមដោយបន្ទាត់ផ្តេកពណ៌ខៀវចាស់ (#1E4E79) និងនិមិត្តសញ្ញា AMS។',
      },
      leftZone: {
        en: 'Left Zone (50% width): "Party time… 🥂" Celebration Hero Card + Complete Chapter II Mastery Checklist (All 41 slides completed across Motivation, Quan-Quan, Quan-Qual, Qual-Qual, Multivariate, Time Series, and Plotly Animation).',
        km: 'ផ្នែកខាងឆ្វេង (ទទឹង ៥០%)៖ ផ្ទាំងអបអរសាទរ «Party time… 🥂» និងតារាងបូកសរុបជំនាញទាំងអស់ដែលនិស្សិតទទួលបានពីស្លាយទាំង ៤១។',
      },
      rightZone: {
        en: 'Right Zone (50% width): Looker Studio Implementation & Python Lab Action Plan showing how to export and build this 41-page bilingual report in Google Looker Studio or Jupyter Notebook.',
        km: 'ផ្នែកខាងស្តាំ (ទទឹង ៥០%)៖ ផែនការអនុវត្តបន្តសម្រាប់ការយកគំរូប្លង់ទាំង ៤១ ទំព័រនេះទៅបង្កើតជារបាយការណ៍ក្នុង Google Looker Studio និងអនុវត្តកូដ Python ក្នុងម៉ោងពិសោធន៍ (Lab)។',
      },
      bottomOrTopBar: {
        en: 'Bottom-right slide footer "40" (PDF Page 41 of 41) + One-Click Export Complete 41-Page Bilingual Blueprint button.',
        km: 'លេខសម្គាល់ទំព័រ «40» នៅជ្រុងក្រោមខាងស្តាំ (ទំព័រទី ៤១ នៃ ៤១ ក្នុង PDF) រួមជាមួយប៊ូតុងទាញយកឯកសារប្លង់មេរៀនទាំង ៤១ ទំព័រ។',
      },
      gridAllocation: '6 Columns Left (Celebration Banner & Mastery Summary) + 6 Columns Right (Looker Studio & Lab Next Steps)',
    },
    chartMetricsMath: {
      scorecards: [
        {
          label: { en: 'Slides Processed Independently', km: 'ចំនួនស្លាយដែលបានបំបែកដាច់ដោយឡែក' },
          value: '41 / 41 (100%)',
          metricField: 'slides_completed',
          aggregation: 'Zero Merging / Zero Skipping',
          comparisonNote: { en: 'Every PDF page mapped to its own Looker page', km: 'គ្រប់ទំព័រ PDF ទាំង ៤១ ត្រូវបានរៀបចំដាច់ដោយឡែកពីគ្នា' },
        },
        {
          label: { en: 'Bilingual Coverage', km: 'ការបកប្រែ និងពន្យល់ជាពីរភាសា' },
          value: 'EN + KH (100%)',
          metricField: 'bilingual_coverage',
          aggregation: 'Side-by-Side Bilingual',
          comparisonNote: { en: 'Titles, metrics, math variables & deep dives', km: 'ចំណងជើង ក្រាហ្វ រូបមន្តគណិតវិទ្យា និងការពន្យល់ស៊ីជម្រៅ' },
        },
      ],
      charts: [
        {
          chartType: {
            en: 'Looker Studio Course Completion & Skill Mastery Summary Table',
            km: 'តារាងបូកសរុបការសម្រេចបាននូវជំនាញវិភាគទិន្នន័យទ្វេអថេរទាំងមូល',
          },
          dimensions: ['module_section', 'core_competency_en_km', 'readiness_status'],
          metrics: ['slides_mastered'],
          sorting: 'module_section ASC',
          stylingNote: {
            en: 'Summarizes the student’s complete journey from Slide 1 to Slide 41.',
            km: 'សង្ខេបដំណើរសិក្សារបស់និស្សិតចាប់ពីស្លាយទី ១ រហូតដល់ស្លាយទី ៤១។',
          },
        },
      ],
      formulas: [],
    },
    controls: [
      {
        controlType: { en: 'Action Button Control (Restart Tour / Download Full Blueprint)', km: 'ប៊ូតុងត្រឡប់ទៅទំព័រទី ១ ឬទាញយកឯកសារប្លង់ទាំង ៤១ ទំព័រ' },
        field: 'completion_action',
        defaultState: 'Chapter II Complete (41/41 Pages)',
        purpose: {
          en: 'Lets students and educators export the entire 41-page bilingual blueprint or jump back to any slide for review.',
          km: 'អនុញ្ញាតឱ្យគ្រូឧទ្ទេស និងនិស្សិតទាញយកប្លង់មេរៀនទ្វេភាសាទាំង ៤១ ទំព័រ ឬត្រឡប់ទៅមើលស្លាយណាមួយឡើងវិញ។',
        },
      },
    ],
    expandedContent: {
      onScreenText: {
        heading: {
          en: 'Congratulations! You Have Mastered Chapter II: Bivariate Analysis! 🥳🥂',
          km: 'សូមអបអរសាទរ! អ្នកបានបញ្ចប់ការសិក្សាជំពូកទី ២៖ ការវិភាគទ្វេអថេរ ដោយជោគជ័យ! 🥳🥂',
        },
        bullets: [
          {
            en: 'Yeahhhh…. Party time… 🥂 — You have completed the theoretical, mathematical, and visual foundations of Bivariate Exploratory Data Analysis!',
            km: 'Yeahhhh…. Party time… 🥂 — អ្នកបានបញ្ចប់មូលដ្ឋានគ្រឹះទាំងផ្នែកទ្រឹស្តី រូបមន្តគណិតវិទ្យា និងការបង្ហាញក្រាហ្វនៃការវិភាគទិន្នន័យទ្វេអថេរ (Bivariate EDA)!',
          },
          {
            en: 'You are now ready to apply these indicators (Cov, Pearson r, Spearman ρ, ANOVA η², Chi-square χ², Cramér’s Ṽ) and visualizations (Scatterplots, Box/Violin plots, Treemaps, Stacked/Grouped Barplots, Bubble Charts, Time-Series Lineplots, and Plotly Animations) in your Python Labs and Looker Studio BI Dashboards.',
            km: 'ឥឡូវនេះ អ្នកមានសមត្ថភាពពេញលេញក្នុងការយកសូចនាករស្ថិតិ និងក្រាហ្វទាំងអស់នេះ ទៅអនុវត្តផ្ទាល់នៅក្នុងម៉ោងពិសោធន៍កូដ Python (Lab) ក៏ដូចជាការបង្កើតផ្ទាំងរបាយការណ៍អាជីវកម្ម (BI Dashboard) នៅក្នុងកម្មវិធី Google Looker Studio។',
          },
        ],
        callout: {
          en: 'Next Step: Head into the hands-on laboratory session and test every indicator-to-visualization workflow on your own real-world datasets!',
          km: 'ជំហានបន្ទាប់៖ ចូលទៅកាន់ម៉ោងអនុវត្តផ្ទាល់ (Lab Session) ហើយសាកល្បងអនុវត្តលំហូរការងារ «គណនាសូចនាករជាមុន គូសក្រាហ្វតាមក្រោយ» ទៅលើសំណុំទិន្នន័យជាក់ស្តែងរបស់អ្នក!',
        },
      },
      deepDiveExplanation: {
        en: 'Slide 41 (footer 40) brings the lecture presentation to a warm, motivating close. In university pedagogy (especially after covering dense statistical derivations from Covariance and Spearman Ranks to ANOVA Eta-Squared, Chi-Square Contingency Tests, and Bergsma’s Bias-Corrected Cramér’s $V$), ending with a celebratory slide lowers cognitive tension and transitions students into the collaborative, hands-on coding laboratory ("Party time" with real datasets in Python and Looker Studio!). In our Looker Studio multi-page presentation, Page 41 acts as the **Executive Wrap-Up & Export Hub**, allowing learners to review their mastery across all 8 sub-modules and download the complete 41-page Bilingual Design Blueprint.',
        km: 'ស្លាយទី ៤១ (លេខស្លាយ 40) គឺជាទំព័របញ្ចប់បទបង្ហាញប្រកបដោយភាពរីករាយ និងការលើកទឹកចិត្ត។ នៅក្នុងគរុកោសល្យថ្នាក់ឧត្តមសិក្សា បន្ទាប់ពីនិស្សិតបានប្រឹងប្រែងសិក្សាលើរូបមន្តស្ថិតិ និងគណិតវិទ្យាដ៏ស៊ីជម្រៅជាច្រើនទំព័រ (ចាប់ពី Covariance, Pearson, Spearman រហូតដល់ ANOVA Eta-Squared, តេស្ត Chi-Square និង Cramér’s $V$) ការបញ្ចប់ដោយស្លាយអបអរសាទរជួយបន្ធូរភាពតានតឹង និងបង្កើតបរិយាកាសរីករាយមុននឹងឈានចូលដល់ការអនុវត្តកូដផ្ទាល់នៅក្នុងម៉ោងពិសោធន៍ (Lab)។ នៅក្នុងកម្មវិធី Google Looker Studio ទំព័រទី ៤១ នេះដើរតួនាទីជា **ទំព័របូកសរុបសមិទ្ធផល និងទាញយកឯកសារប្លង់មេរៀនទាំងមូល**។',
      },
      practicalApplication: {
        scenarioTitle: {
          en: 'Capstone BI Portfolio Presentation & Team Debrief Page',
          km: 'ទំព័របញ្ចប់បទបង្ហាញគម្រោងវិភាគទិន្នន័យ (Capstone Project) និងការពិភាក្សាក្រុម',
        },
        description: {
          en: 'When students present their final Looker Studio Bivariate Analysis project at ITC, ending with a structured wrap-up slide that links to their reproducible Python notebook and data sources leaves a memorable, professional impression.',
          km: 'នៅពេលនិស្សិតធ្វើបទបង្ហាញគម្រោងវិភាគទិន្នន័យបញ្ចប់មុខវិជ្ជានៅវិទ្យាស្ថានបច្ចេកវិទ្យាកម្ពុជា (ITC) ការបញ្ចប់ដោយទំព័រសង្ខេបសមិទ្ធផលដែលភ្ជាប់ទៅកាន់កូដ Python និងប្រភពទិន្នន័យ ជួយបង្កើតចំណាប់អារម្មណ៍ប្រកបដោយវិជ្ជាជីវៈខ្ពស់។',
        },
        impactMetric: '100% completion of all 41 isolated Looker Studio page blueprints in English & Khmer',
      },
    },
  },
];
