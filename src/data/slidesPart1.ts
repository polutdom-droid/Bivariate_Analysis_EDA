import { SlideBlueprint } from '../types/blueprint';

export const SLIDES_PART_1: SlideBlueprint[] = [
  // ==========================================
  // SLIDE 1
  // ==========================================
  {
    pageNumber: 1,
    slideFooterNumber: '1',
    sectionTag: {
      en: 'Cover & Course Identity',
      km: 'ទំព័រក្រប និងអត្តសញ្ញាណមុខវិជ្ជា',
    },
    simulatorMode: 'cover_hero',
    pageIdentity: {
      titleEn: 'II. Bivariate Analysis — Exploratory Data Analysis & Unsupervised Learning',
      titleKm: 'II. ការវិភាគទ្វេអថេរ (Bivariate Analysis) — ការវិភាគទិន្នន័យបែបស្វែងរក និងការរៀនគ្មានការត្រួតពិនិត្យ',
      themeName: {
        en: 'Light Academic Institutional (ITC / AMS Official Theme)',
        km: 'ផ្ទៃភ្លឺបែបស្ថាប័នសិក្សាជាន់ខ្ពស់ (រចនាបថផ្លូវការ ITC / AMS)',
      },
      canvasBgHex: '#F8FAFC',
      surfaceCardHex: '#FFFFFF',
      primaryAccentHex: '#1E4E79',
      secondaryAccentHex: '#9B1B30',
      textPrimaryHex: '#0F172A',
      hierarchyRationale: {
        en: 'Uses the official Institute of Technology of Cambodia (ITC) Navy Blue (#1E4E79) for primary academic authority and the Department of Applied Mathematics and Statistics (AMS) Crimson (#9B1B30) for focal accents on a crisp #F8FAFC canvas.',
        km: 'ប្រើប្រាស់ពណ៌ខៀវចាស់ផ្លូវការរបស់វិទ្យាស្ថានបច្ចេកវិទ្យាកម្ពុជា (ITC #1E4E79) សម្រាប់ចំណងជើងគោល និងពណ៌ក្រហមក្រមៅរបស់ដេប៉ាតឺម៉ង់គណិតវិទ្យាអនុវត្ត និងស្ថិតិ (AMS #9B1B30) សម្រាប់ចំណុចសង្កត់សំខាន់ៗនៅលើផ្ទៃពណ៌សភ្លឺ (#F8FAFC)។',
      },
    },
    wireframe: {
      headerSection: {
        en: 'Top-right institutional badge (AMS logo) with a full-width 2px navy rule (#1E4E79) across the top margin (Y: 24px).',
        km: 'និមិត្តសញ្ញាដេប៉ាតឺម៉ង់ AMS នៅជ្រុងលើខាងស្តាំ អមដោយបន្ទាត់ផ្តេកពណ៌ខៀវចាស់កម្រាស់ 2px (#1E4E79) កាត់ទទឹងផ្នែកខាងលើ។',
      },
      leftZone: {
        en: 'Centered Hero Title Banner (X: 120px to 1320px, Y: 180px to 440px) containing the Bilingual Course Title, Subtitle, and Module Overview KPI strip.',
        km: 'ផ្ទាំងចំណងជើងធំនៅចំកណ្តាលទំព័រ ដែលរួមមានចំណងជើងមេរៀនជាពីរភាសា ចំណងជើងរង និងរបារសូចនាករសង្ខេបនៃមេរៀនទាំងមូល។',
      },
      rightZone: {
        en: 'Bottom Institutional Seal Strip (Y: 500px to 720px) displaying the ITC seal on the left, AMS emblem on the right, and Quick-Start Module Navigation buttons.',
        km: 'ផ្នែកខាងក្រោមបង្ហាញត្រាផ្លូវការរបស់ ITC នៅខាងឆ្វេង និមិត្តសញ្ញា AMS នៅខាងស្តាំ និងប៊ូតុងចូលទៅកាន់ជំពូកនីមួយៗដោយផ្ទាល់។',
      },
      bottomOrTopBar: {
        en: 'Footer bar with Slide Page Counter (Page 1 / 41) and Language Display Toggle.',
        km: 'របារខាងក្រោមបង្ហាញលេខទំព័រ (ទំព័រទី ១ នៃ ៤១) និងប៊ូតុងប្តូរទម្រង់ភាសា។',
      },
      gridAllocation: '12-Column Centered Hero Grid (Full-Width 16:9 Presentation Cover)',
    },
    chartMetricsMath: {
      scorecards: [
        {
          label: { en: 'Total Lesson Pages', km: 'ចំនួនទំព័រមេរៀនសរុប' },
          value: '41',
          metricField: 'COUNT_DISTINCT(page_id)',
          aggregation: 'Count Distinct',
          comparisonNote: { en: '100% Isolated Slide Mapping', km: 'បំបែកដាច់ដោយឡែកគ្រប់ស្លាយទាំង ៤១' },
        },
        {
          label: { en: 'Core Analytical Cases', km: 'ករណីវិភាគស្នូលទាំង ៣' },
          value: '3',
          metricField: 'COUNT_DISTINCT(variable_pair_type)',
          aggregation: 'Count Distinct',
          comparisonNote: { en: 'Quan-Quan, Quan-Qual, Qual-Qual', km: 'បរិមាណ-បរិមាណ, បរិមាណ-គុណភាព, គុណភាព-គុណភាព' },
        },
        {
          label: { en: 'Primary Benchmark Datasets', km: 'សំណុំទិន្នន័យគោលសម្រាប់អនុវត្ត' },
          value: '3',
          metricField: 'COUNT_DISTINCT(dataset_name)',
          aggregation: 'Count Distinct',
          comparisonNote: { en: 'Gapminder, Restaurant Tips, Covid-19 Survey', km: 'Gapminder, ទិន្នន័យប្រាក់ធីប និងការស្ទង់មតិកូវីដ-១៩' },
        },
      ],
      charts: [
        {
          chartType: {
            en: 'Looker Studio KPI Summary Grid & Interactive Module Launcher',
            km: 'ផ្ទាំងសូចនាករសង្ខេប និងតារាងចូលទៅកាន់ផ្នែកនីមួយៗនៃមេរៀន',
          },
          dimensions: ['module_number', 'module_title_bilingual', 'analytical_scope'],
          metrics: ['slide_count', 'indicator_count'],
          sorting: 'module_number ASC',
          stylingNote: {
            en: 'Clean unbordered summary table with clickable page-link rows to jump directly to Section 1 (Motivation) or Section 2 (Bivariate Analysis).',
            km: 'តារាងសង្ខេបគ្មានស៊ុមស្មុគស្មាញ ដែលអនុញ្ញាតឱ្យអ្នកសិក្សាចុចចូលទៅកាន់ផ្នែកទី ១ ឬផ្នែកទី ២ បានភ្លាមៗ។',
          },
        },
      ],
      formulas: [],
    },
    controls: [
      {
        controlType: { en: 'Drop-down List Control (Language Mode)', km: 'ប៊ូតុងជ្រើសរើសទម្រង់ភាសា (Dropdown List)' },
        field: 'display_language_mode',
        defaultState: 'Bilingual (English + Khmer)',
        purpose: {
          en: 'Allows instructors and students to view English and Khmer side-by-side across the report.',
          km: 'អនុញ្ញាតឱ្យគ្រូឧទ្ទេស និងនិស្សិតមើលអត្ថបទជាភាសាអង់គ្លេស និងភាសាខ្មែរទន្ទឹមគ្នា។',
        },
      },
    ],
    expandedContent: {
      onScreenText: {
        heading: {
          en: 'Chapter II: Bivariate Analysis in Exploratory Data Analysis (EDA) & Unsupervised Learning',
          km: 'ជំពូកទី ២៖ ការវិភាគទ្វេអថេរ (Bivariate Analysis) ក្នុងការវិភាគទិន្នន័យបែបស្វែងរក និងការរៀនគ្មានការត្រួតពិនិត្យ',
        },
        bullets: [
          {
            en: 'Institute of Technology of Cambodia (ITC) — Department of Applied Mathematics and Statistics (AMS).',
            km: 'វិទ្យាស្ថានបច្ចេកវិទ្យាកម្ពុជា (ITC) — ដេប៉ាតឺម៉ង់គណិតវិទ្យាអនុវត្ត និងស្ថិតិ (AMS)។',
          },
          {
            en: 'Moving beyond single-variable summaries to uncover statistical relationships, dependencies, and structural patterns between pairs of variables.',
            km: 'ការឈានចេញពីការសង្ខេបអថេរទោល ឆ្ពោះទៅរកការស្វែងរកទំនាក់ទំនងស្ថិតិ ភាពអាស្រ័យគ្នា និងលំនាំរចនាសម្ព័ន្ធរវាងគូនៃអថេរ។',
          },
        ],
        callout: {
          en: 'Course Foundation: Every machine learning or business intelligence model begins with understanding how pairs of features interact.',
          km: 'មូលដ្ឋានគ្រឹះនៃមុខវិជ្ជា៖ រាល់ម៉ូដែល Machine Learning ឬផ្ទាំងវិភាគអាជីវកម្ម (BI) ទាំងអស់ ចាប់ផ្តើមចេញពីការយល់ដឹងអំពីអន្តរកម្មរវាងគូនៃអថេរ។',
        },
      },
      deepDiveExplanation: {
        en: 'Univariate analysis examines one variable in isolation (such as computing average income or plotting a single histogram). However, real-world decision-making and Unsupervised Learning require Bivariate Analysis—the systematic study of two variables simultaneously ($X$ and $Y$) to determine whether changes in one variable are associated with changes in another. In Exploratory Data Analysis (EDA), bivariate techniques serve two crucial purposes: (1) Feature Selection for predictive modeling (identifying which inputs $X$ strongly explain a target $Y$, and which inputs are redundant with each other), and (2) Pattern Discovery in unsupervised settings (discovering natural clusters, socio-economic regimes, or anomalies across multi-dimensional spaces).',
        km: 'ការវិភាគអថេរទោល (Univariate Analysis) ពិនិត្យមើលតែអថេរមួយដាច់ដោយឡែកប៉ុណ្ណោះ (ដូចជាការគណនាចំណូលមធ្យម ឬការគូសក្រាហ្វ Histogram តែមួយ)។ ប៉ុន្តែ ការសម្រេចចិត្តក្នុងពិភពពិត និងការរៀនគ្មានការត្រួតពិនិត្យ (Unsupervised Learning) ទាមទារឱ្យមានការវិភាគទ្វេអថេរ (Bivariate Analysis) ដែលជាការសិក្សាជាប្រព័ន្ធលើអថេរពីរក្នុងពេលតែមួយ ($X$ និង $Y$) ដើម្បីកំណត់ថាតើការប្រែប្រួលនៃអថេរមួយមានទំនាក់ទំនងជាមួយការប្រែប្រួលនៃអថេរមួយទៀតដែរឬទេ។ នៅក្នុង EDA បច្ចេកទេសទ្វេអថេរមានគោលបំណងសំខាន់ពីរគឺ៖ (១) ការជ្រើសរើសអថេរ (Feature Selection) សម្រាប់ម៉ូដែលព្យាករណ៍ និង (២) ការរកឃើញលំនាំទិន្នន័យ (Pattern Discovery) ដូចជាការបែងចែកក្រុមប្រទេស ឬការរកឃើញទិន្នន័យខុសប្រក្រតី។',
      },
      practicalApplication: {
        scenarioTitle: {
          en: 'National Socio-Economic Planning & Telecom Customer Analytics in Cambodia',
          km: 'ការរៀបចំផែនការសេដ្ឋកិច្ចសង្គមជាតិ និងការវិភាគអតិថិជនទូរគមនាគមន៍នៅកម្ពុជា',
        },
        description: {
          en: 'Before the Ministry of Planning or a Cambodian commercial bank builds a complex credit-scoring algorithm, analysts perform bivariate screening on pairs of variables—such as Household Income vs. Loan Default Rate, or Provincial GDP per Capita vs. High School Completion Rate—to establish clear empirical baselines.',
          km: 'មុនពេលក្រសួងផែនការ ឬធនាគារពាណិជ្ជនៅកម្ពុជាបង្កើតម៉ូដែលវាយតម្លៃឥណទានដ៏ស្មុគស្មាញ អ្នកវិភាគត្រូវធ្វើការពិនិត្យទ្វេអថេរជាមុនសិន ដូចជាការប្រៀបធៀប «ប្រាក់ចំណូលគ្រួសារ ទល់នឹង អត្រាខកខានសងប្រាក់» ឬ «ផលិតផលក្នុងស្រុកសរុបតាមខេត្ត ទល់នឹង អត្រាបញ្ចប់ការសិក្សា» ដើម្បីបង្កើតមូលដ្ឋានទិន្នន័យដ៏ច្បាស់លាស់។',
        },
        impactMetric: 'Reduces downstream modeling features by 40–60% while improving interpretability',
      },
    },
  },

  // ==========================================
  // SLIDE 2
  // ==========================================
  {
    pageNumber: 2,
    slideFooterNumber: '2',
    sectionTag: {
      en: 'Table of Contents & Roadmap',
      km: 'មាតិកាមេរៀន និងផែនទីបង្ហាញផ្លូវ',
    },
    simulatorMode: 'agenda_navigation',
    pageIdentity: {
      titleEn: 'Content — Course Structure & Analytical Roadmap',
      titleKm: 'មាតិកា (Content) — រចនាសម្ព័ន្ធមេរៀន និងផែនទីនៃការវិភាគ',
      themeName: {
        en: 'Light Academic Navigation Hub',
        km: 'ផ្ទៃភ្លឺសម្រាប់មជ្ឈមណ្ឌលមាតិកានិងការរុករក',
      },
      canvasBgHex: '#F8FAFC',
      surfaceCardHex: '#FFFFFF',
      primaryAccentHex: '#2B5B84',
      secondaryAccentHex: '#0284C7',
      textPrimaryHex: '#0F172A',
      hierarchyRationale: {
        en: 'Clean white architectural cards on a soft slate canvas (#F8FAFC) with #2B5B84 structural headings to visually separate Pillar 1 (Motivation) from Pillar 2 (Bivariate Analysis).',
        km: 'ប្រើប្រាស់ផ្ទាំងកាតពណ៌សស្អាតនៅលើផ្ទៃ #F8FAFC អមដោយពណ៌ខៀវ #2B5B84 សម្រាប់ចំណងជើង ដើម្បីញែកឱ្យដាច់រវាងផ្នែកទី ១ (មូលហេតុជំរុញ) និងផ្នែកទី ២ (ការវិភាគទ្វេអថេរ)។',
      },
    },
    wireframe: {
      headerSection: {
        en: 'Left-aligned map-pin icon + Bilingual Header "Content / មាតិកាមេរៀន", right-aligned AMS logo.',
        km: 'រូបតំណាងផែនទី និងចំណងជើងទ្វេភាសា «Content / មាតិកាមេរៀន» នៅខាងឆ្វេង និងនិមិត្តសញ្ញា AMS នៅខាងស្តាំ។',
      },
      leftZone: {
        en: 'Left Column (45% width): Interactive Section Roadmap Cards for "1. Motivation" and "2. Bivariate Analysis" with sub-topic breakdown.',
        km: 'ផ្នែកខាងឆ្វេង (ទទឹង ៤៥%)៖ ផ្ទាំងមាតិកាអន្តរកម្មសម្រាប់ «១. មូលហេតុជំរុញ (Motivation)» និង «២. ការវិភាគទ្វេអថេរ (Bivariate Analysis)»។',
      },
      rightZone: {
        en: 'Right Column (55% width): Looker Studio Treemap / Sunburst breakdown showing the 8 sub-modules (2.1 to 2.8) and their variable types.',
        km: 'ផ្នែកខាងស្តាំ (ទទឹង ៥៥%)៖ តារាងបែងចែកជំពូករងទាំង ៨ (ពី 2.1 ដល់ 2.8) និងប្រភេទអថេរដែលត្រូវសិក្សា។',
      },
      bottomOrTopBar: {
        en: 'Bottom progress strip showing Slide 2 of 41.',
        km: 'របារខាងក្រោមបង្ហាញទំព័រទី ២ នៃ ៤១។',
      },
      gridAllocation: '5 Columns Left (Agenda List) + 7 Columns Right (Sub-module Matrix)',
    },
    chartMetricsMath: {
      scorecards: [
        {
          label: { en: 'Part 1: Motivation', km: 'ផ្នែកទី ១៖ មូលហេតុជំរុញ' },
          value: 'Slides 4–7',
          metricField: 'section_1_range',
          aggregation: 'None (Dimension Label)',
          comparisonNote: { en: 'Univariate Limits & Objective', km: 'ដែនកំណត់នៃអថេរទោល និងគោលបំណង' },
        },
        {
          label: { en: 'Part 2: Bivariate Analysis', km: 'ផ្នែកទី ២៖ ការវិភាគទ្វេអថេរ' },
          value: 'Slides 8–40',
          metricField: 'section_2_range',
          aggregation: 'None (Dimension Label)',
          comparisonNote: { en: '8 Sub-modules (2.1 to 2.8)', km: 'មាន ៨ ផ្នែករង (ពី 2.1 ដល់ 2.8)' },
        },
      ],
      charts: [
        {
          chartType: {
            en: 'Cross-Tab Curriculum Matrix Table',
            km: 'តារាងម៉ាទ្រីសកម្មវិធីសិក្សា (Cross-Tab Table)',
          },
          dimensions: ['section_id', 'submodule_name_en_km', 'variable_pairing', 'key_indicators', 'key_visualizations'],
          metrics: ['total_slides_allocated'],
          sorting: 'section_id ASC',
          stylingNote: {
            en: 'Displays how each chapter maps to Quantitative vs Quantitative, Quantitative vs Qualitative, Qualitative vs Qualitative, Multivariate, and Time Series.',
            km: 'បង្ហាញពីការផ្គូផ្គងជំពូករងនីមួយៗទៅនឹងប្រភេទទិន្នន័យ សូចនាករស្ថិតិ និងប្រភេទក្រាហ្វ។',
          },
        },
      ],
      formulas: [],
    },
    controls: [
      {
        controlType: { en: 'Drop-down List Filter (Sub-Module Selector)', km: 'តម្រងជ្រើសរើសជំពូករង (Sub-Module Filter)' },
        field: 'submodule_category',
        defaultState: 'All Modules (1 & 2)',
        purpose: {
          en: 'Filters the curriculum matrix by data type pairing (Quantitative, Qualitative, Temporal).',
          km: 'ច្រោះមើលមាតិកាមេរៀនតាមប្រភេទគូនៃទិន្នន័យ (បរិមាណ គុណភាព ឬពេលវេលា)។',
        },
      },
    ],
    expandedContent: {
      onScreenText: {
        heading: {
          en: 'Course Roadmap: From Motivation to Multivariate & Temporal Visualization',
          km: 'ផែនទីមេរៀន៖ ចាប់ពីមូលហេតុជំរុញ រហូតដល់ការវិភាគពហុអថេរ និងទិន្នន័យតាមពេលវេលា',
        },
        bullets: [
          {
            en: '1. Motivation (មូលហេតុជំរុញ): Exploring the Gapminder dataset (1952–2007) and identifying why univariate charts alone cannot reveal relationships.',
            km: '១. មូលហេតុជំរុញ (Motivation)៖ ការស្វែងយល់ពីសំណុំទិន្នន័យ Gapminder (1952–2007) និងការកំណត់ថាតើហេតុអ្វីបានជាក្រាហ្វអថេរទោលមិនអាចបង្ហាញពីទំនាក់ទំនងរវាងអថេរបាន។',
          },
          {
            en: '2. Bivariate Analysis (ការវិភាគទ្វេអថេរ): Mastering statistical indicators (Covariance, Pearson r, Spearman ρ, Eta-squared η², Chi-square χ², Cramér’s V) and their paired visualizations.',
            km: '២. ការវិភាគទ្វេអថេរ (Bivariate Analysis)៖ ការសិក្សាស៊ីជម្រៅលើសូចនាករស្ថិតិ (Covariance, Pearson r, Spearman ρ, Eta-squared η², Chi-square χ², Cramér’s V) និងក្រាហ្វគូរបស់វា។',
          },
        ],
        callout: {
          en: 'Pedagogical Design: Every statistical indicator in this course is paired with its exact visual counterpart so you never rely on numbers without visual verification, nor visuals without mathematical rigor.',
          km: 'គោលការណ៍គរុកោសល្យ៖ រាល់សូចនាករស្ថិតិទាំងអស់ក្នុងមេរៀននេះ ត្រូវបានផ្គូផ្គងជាមួយក្រាហ្វជាក់លាក់របស់វា ដើម្បីកុំឱ្យយើងពឹងផ្អែកតែលើតួលេខដោយគ្មានការផ្ទៀងផ្ទាត់ដោយភ្នែក ឬមើលតែក្រាហ្វដោយគ្មានអំណះអំណាងគណិតវិទ្យា។',
        },
      },
      deepDiveExplanation: {
        en: 'A well-architected Business Intelligence presentation or data science workflow follows a deliberate cognitive sequence. Section 1 ("Motivation") establishes the problem statement: when we inspect a dataset column by column, we understand marginal distributions (e.g., how GDP is distributed globally, or how life expectancy is distributed), but we remain blind to joint distributions (whether rich countries actually live longer). Section 2 ("Bivariate Analysis") systematically resolves this across all possible data-type combinations: Quantitative vs. Quantitative (2.1–2.2), Quantitative vs. Qualitative (2.3), Qualitative vs. Qualitative (2.4), before extending into Multivariate visual encodings via color/shape/size (2.5), Time Series lines and evolutionary bars (2.6–2.7), and Animated multidimensional storytelling (2.8).',
        km: 'ការរៀបចំរបាយការណ៍វិភាគទិន្នន័យ ឬលំហូរការងារវិទ្យាសាស្ត្រទិន្នន័យដ៏ល្អមួយ ត្រូវដើរតាមលំដាប់លំដោយនៃការគិតយ៉ាងច្បាស់លាស់។ ផ្នែកទី ១ («មូលហេតុជំរុញ») បង្ហាញពីបញ្ហា៖ នៅពេលយើងពិនិត្យមើលទិន្នន័យម្តងមួយជួរឈរ យើងយល់តែពីការបែងចែកដាច់ដោយឡែកប៉ុណ្ណោះ ប៉ុន្តែយើងមើលមិនឃើញពីទំនាក់ទំនងរួមគ្នាឡើយ (ឧទាហរណ៍ តើប្រទេសអ្នកមានពិតជាមានអាយុរំពឹងរស់ខ្ពស់ជាងមែនឬទេ?)។ ផ្នែកទី ២ («ការវិភាគទ្វេអថេរ») ដោះស្រាយបញ្ហានេះជាប្រព័ន្ធទៅតាមគ្រប់ប្រភេទទិន្នន័យទាំងអស់៖ បរិមាណទល់នឹងបរិមាណ (2.1–2.2), បរិមាណទល់នឹងគុណភាព (2.3), គុណភាពទល់នឹងគុណភាព (2.4) មុននឹងឈានទៅដល់ការបង្ហាញព័ត៌មានច្រើនតាមរយៈពណ៌ រូបរាង និងទំហំ (2.5) ទិន្នន័យតាមពេលវេលា (2.6–2.7) និងក្រាហ្វមានចលនា (2.8)។',
      },
      practicalApplication: {
        scenarioTitle: {
          en: 'Executive BI Dashboard Information Architecture',
          km: 'ការរៀបចំរចនាសម្ព័ន្ធផ្ទាំងគ្រប់គ្រងទិន្នន័យ (BI Dashboard) សម្រាប់ថ្នាក់ដឹកនាំ',
        },
        description: {
          en: 'In Google Looker Studio, enterprise reports use an Agenda/Index page on Page 2 so executives can immediately jump to Financial Correlations (Quantitative), Customer Segment Comparisons (Quan vs Qual), or Survey Cross-Tabulations (Qual vs Qual).',
          km: 'នៅក្នុង Google Looker Studio របាយការណ៍កម្រិតស្ថាប័នតែងតែប្រើទំព័រមាតិកានៅទំព័រទី ២ ដើម្បីឱ្យថ្នាក់ដឹកនាំអាចចុចចូលទៅកាន់ទំព័រសហសម្ព័ន្ធហិរញ្ញវត្ថុ ការប្រៀបធៀបក្រុមអតិថិជន ឬតារាងស្ទង់មតិបានយ៉ាងរហ័ស។',
        },
        impactMetric: '100% structured navigation across 8 analytical paradigms',
      },
    },
  },

  // ==========================================
  // SLIDE 3
  // ==========================================
  {
    pageNumber: 3,
    slideFooterNumber: '3',
    sectionTag: {
      en: 'Reference Literature & Tooling',
      km: 'ឯកសារយោង និងធនធានសិក្សាបន្ថែម',
    },
    simulatorMode: 'resource_cards',
    pageIdentity: {
      titleEn: 'Helpful Resources — Foundational Literature & Python EDA Guides',
      titleKm: 'ធនធានសិក្សាដ៏មានប្រយោជន៍ — សៀវភៅគោល និងមគ្គុទ្ទេសក៍អនុវត្ត Python EDA',
      themeName: {
        en: 'Editorial Reference Library Theme',
        km: 'រចនាបថបណ្ណាល័យឯកសារយោងបែបសិក្សា',
      },
      canvasBgHex: '#F8FAFC',
      surfaceCardHex: '#FFFFFF',
      primaryAccentHex: '#1E4E79',
      secondaryAccentHex: '#0F766E',
      textPrimaryHex: '#0F172A',
      hierarchyRationale: {
        en: 'Two balanced comparison cards with #1E4E79 headers and #0F766E hyperlink highlights to showcase theoretical visualization principles alongside practical Python implementation.',
        km: 'ផ្ទាំងកាតពីរទន្ទឹមគ្នាដោយប្រើពណ៌ខៀវ #1E4E79 និងពណ៌បៃតងចាស់ #0F766E សម្រាប់តំណភ្ជាប់ ដើម្បីបង្ហាញទាំងទ្រឹស្តីនៃការគូសក្រាហ្វ និងការអនុវត្តកូដ Python។',
      },
    },
    wireframe: {
      headerSection: {
        en: 'Top Header: "Helpful Resources / ធនធានសិក្សាដ៏មានប្រយោជន៍" on the left; AMS logo on the right.',
        km: 'ផ្នែកខាងលើ៖ ចំណងជើង «Helpful Resources / ធនធានសិក្សាដ៏មានប្រយោជន៍» នៅខាងឆ្វេង និងនិមិត្តសញ្ញា AMS នៅខាងស្តាំ។',
      },
      leftZone: {
        en: 'Left Card (50% width): "Fundamentals of Data Visualization" by Claus O. Wilke (O’Reilly) — URL: https://clauswilke.com/dataviz/ with visual preview and core chapters.',
        km: 'កាតខាងឆ្វេង (ទទឹង ៥០%)៖ សៀវភៅ «Fundamentals of Data Visualization» និពន្ធដោយ Claus O. Wilke (O’Reilly) — តំណភ្ជាប់ https://clauswilke.com/dataviz/ ។',
      },
      rightZone: {
        en: 'Right Card (50% width): "The Examples Book — Python Exploratory Data Analysis" (Purdue University Data Mine) — URL: https://the-examples-book.com/tools/python/eda.',
        km: 'កាតខាងស្តាំ (ទទឹង ៥០%)៖ គេហទំព័រ «The Examples Book — Python EDA» (សាកលវិទ្យាល័យ Purdue) — តំណភ្ជាប់ https://the-examples-book.com/tools/python/eda ។',
      },
      bottomOrTopBar: {
        en: 'Bottom Resource Quick-Comparison Table mapping textbook theory to Python code libraries (Matplotlib, Seaborn, Plotly, Pandas).',
        km: 'តារាងប្រៀបធៀបខាងក្រោមដែលភ្ជាប់ទ្រឹស្តីក្នុងសៀវភៅទៅនឹងបណ្ណាល័យកូដ Python (Pandas, Seaborn, Plotly)។',
      },
      gridAllocation: '6 Columns Left (Theory Resource) + 6 Columns Right (Coding Resource)',
    },
    chartMetricsMath: {
      scorecards: [
        {
          label: { en: 'Primary Visualization Textbook', km: 'សៀវភៅគោលផ្នែក Data Visualization' },
          value: 'Claus O. Wilke',
          metricField: 'author_primary',
          aggregation: 'None',
          comparisonNote: { en: 'O’Reilly Media (Open Access Online)', km: 'បោះពុម្ពដោយ O’Reilly (អានដោយឥតគិតថ្លៃលើអ៊ីនធឺណិត)' },
        },
        {
          label: { en: 'Primary Coding Handbook', km: 'សៀវភៅណែនាំការសរសេរកូដ Python EDA' },
          value: 'The Examples Book',
          metricField: 'coding_guide',
          aggregation: 'None',
          comparisonNote: { en: 'Purdue University Data Mine', km: 'មជ្ឈមណ្ឌលទិន្នន័យនៃសាកលវិទ្យាល័យ Purdue' },
        },
      ],
      charts: [
        {
          chartType: {
            en: 'Looker Studio Embedded Resource Directory Table with Hyperlink Fields',
            km: 'តារាងបញ្ជីឯកសារយោងភ្ជាប់ជាមួយតំណភ្ជាប់ (HYPERLINK Fields)',
          },
          dimensions: ['resource_title', 'author_institution', 'focus_area_en_km', 'direct_url'],
          metrics: ['recommended_chapters_count'],
          sorting: 'resource_title ASC',
          stylingNote: {
            en: 'Use Looker Studio HYPERLINK(url, label) calculated fields so students can launch external documentation directly from the dashboard.',
            km: 'ប្រើអនុគមន៍គណនា HYPERLINK(url, label) ក្នុង Looker Studio ដើម្បីឱ្យនិស្សិតអាចចុចបើកគេហទំព័រឯកសារយោងបានផ្ទាល់។',
          },
        },
      ],
      formulas: [],
    },
    controls: [
      {
        controlType: { en: 'Drop-down List Filter (Resource Type)', km: 'តម្រងប្រភេទឯកសារយោង (Resource Type)' },
        field: 'resource_category',
        defaultState: 'All Resources (Visual Design Theory & Python Code)',
        purpose: {
          en: 'Filters the reference guide table between Visual Perception Theory (Wilke) and Hands-on Python Implementation (The Examples Book).',
          km: 'ច្រោះមើលរវាងទ្រឹស្តីនៃការរចនាក្រាហ្វ (Wilke) និងការអនុវត្តកូដ Python ជាក់ស្តែង (The Examples Book)។',
        },
      },
    ],
    expandedContent: {
      onScreenText: {
        heading: {
          en: 'Essential Reading & Practical Laboratories',
          km: 'ឯកសារអានសំខាន់ៗ និងមគ្គុទ្ទេសក៍អនុវត្តជាក់ស្តែង',
        },
        bullets: [
          {
            en: '1. Fundamentals of Data Visualization (Claus O. Wilke): https://clauswilke.com/dataviz/ — Master the grammar of graphics, color scales, directory of visualizations, and honest visual design.',
            km: '១. Fundamentals of Data Visualization (Claus O. Wilke)៖ https://clauswilke.com/dataviz/ — សិក្សាពីគោលការណ៍គ្រឹះនៃក្រាហ្វ ការប្រើប្រាស់មាត្រដ្ឋានពណ៌ បញ្ជីប្រភេទក្រាហ្វ និងការរចនាប្រកបដោយភាពស្មោះត្រង់។',
          },
          {
            en: '2. The Examples Book — Python EDA: https://the-examples-book.com/tools/python/eda — Step-by-step Python workflows for Pandas data profiling, Seaborn statistical plots, and Plotly interactive charts.',
            km: '២. The Examples Book — Python EDA៖ https://the-examples-book.com/tools/python/eda — មគ្គុទ្ទេសក៍អនុវត្តជាជំហានៗសម្រាប់ការវិភាគទិន្នន័យដោយប្រើ Pandas និងការគូសក្រាហ្វដោយប្រើ Seaborn និង Plotly។',
          },
        ],
        callout: {
          en: 'Why Both Resources Matter: Wilke teaches you WHICH chart to choose and WHY; The Examples Book teaches you HOW to code it cleanly in Python.',
          km: 'ហេតុអ្វីធនធានទាំងពីរនេះសំខាន់៖ សៀវភៅរបស់ Wilke បង្រៀនអ្នកថាតើត្រូវជ្រើសរើសក្រាហ្វមួយណា និងហេតុអ្វី ចំណែកឯ The Examples Book បង្រៀនអ្នកពីរបៀបសរសេរកូដ Python ដើម្បីបង្កើតវា។',
        },
      },
      deepDiveExplanation: {
        en: 'Data visualization is both a rigorous scientific discipline and a software engineering skill. Claus O. Wilke’s "Fundamentals of Data Visualization" (published by O’Reilly) focuses on human visual perception, teaching analysts how the human eye decodes position, length, area, color hue, and luminance, and why certain chart choices distort reality (for example, using linear axes on heavily skewed exponential data). Complementing this theoretical foundation, Purdue University’s "The Examples Book" provides executable Python patterns using `pandas`, `seaborn`, and `plotly.express`, bridging the gap between statistical theory and reproducible Jupyter notebooks.',
        km: 'ការបង្ហាញទិន្នន័យជាក្រាហ្វ (Data Visualization) គឺជាវិទ្យាសាស្ត្រដ៏ច្បាស់លាស់ផង និងជាជំនាញវិស្វកម្មកូដផង។ សៀវភៅ «Fundamentals of Data Visualization» របស់លោក Claus O. Wilke ផ្តោតសំខាន់លើចិត្តវិទ្យានៃការមើលឃើញរបស់មនុស្ស ដោយពន្យល់ពីរបៀបដែលភ្នែកមនុស្សបកស្រាយទីតាំង ប្រវែង ផ្ទៃក្រឡា និងពណ៌ ព្រមទាំងមូលហេតុដែលការជ្រើសរើសក្រាហ្វខុសអាចបំភាន់ការពិត។ ទន្ទឹមនឹងនេះ គេហទំព័រ «The Examples Book» របស់សាកលវិទ្យាល័យ Purdue ផ្តល់នូវគំរូកូដ Python ជាក់ស្តែងដោយប្រើបណ្ណាល័យ `pandas`, `seaborn` និង `plotly.express` ដែលជួយភ្ជាប់ទ្រឹស្តីស្ថិតិទៅនឹងការអនុវត្តជាក់ស្តែង។',
      },
      practicalApplication: {
        scenarioTitle: {
          en: 'Building a Standardized Analytics Style Guide for a University or BI Team',
          km: 'ការបង្កើតស្តង់ដាររចនាក្រាហ្វសម្រាប់ក្រុមការងារវិភាគទិន្នន័យ ឬសាកលវិទ្យាល័យ',
        },
        description: {
          en: 'Data teams embed links to Wilke’s Directory of Visualizations directly inside their Looker Studio documentation page so junior analysts can verify whether a comparison requires a Boxplot, Violin plot, or Mosaic plot before publishing a report.',
          km: 'ក្រុមអ្នកវិភាគទិន្នន័យតែងតែដាក់តំណភ្ជាប់ទៅកាន់បញ្ជីក្រាហ្វរបស់ Wilke នៅក្នុងទំព័រណែនាំនៃ Looker Studio ដើម្បីឱ្យសមាជិកក្រុមអាចផ្ទៀងផ្ទាត់ថាតើទិន្នន័យរបស់ពួកគេគួរប្រើ Boxplot, Violin plot ឬ Mosaic plot មុនពេលចេញផ្សាយរបាយការណ៍។',
        },
        impactMetric: 'Eliminates chart-type selection errors across BI reporting teams',
      },
    },
  },

  // ==========================================
  // SLIDE 4
  // ==========================================
  {
    pageNumber: 4,
    slideFooterNumber: '4',
    sectionTag: {
      en: 'Section 1 Divider: Motivation',
      km: 'ទំព័រផ្តើមជំពូកទី ១៖ មូលហេតុជំរុញ (Motivation)',
    },
    simulatorMode: 'section_divider',
    pageIdentity: {
      titleEn: '1. Motivation — Why Univariate Exploration Is Not Enough',
      titleKm: '១. មូលហេតុជំរុញ (Motivation) — ហេតុអ្វីការវិភាគអថេរទោលមិនគ្រប់គ្រាន់?',
      themeName: {
        en: 'Deep Academic Navy Section Divider',
        km: 'ផ្ទៃពណ៌ខៀវចាស់សម្រាប់ទំព័រផ្តើមជំពូក',
      },
      canvasBgHex: '#2B547E',
      surfaceCardHex: '#1E3F60',
      primaryAccentHex: '#FFFFFF',
      secondaryAccentHex: '#38BDF8',
      textPrimaryHex: '#FFFFFF',
      hierarchyRationale: {
        en: 'Matches the exact full-bleed steel navy (#2B547E) section divider of Slide 4 with high-contrast white display typography (#FFFFFF) to signal a major pedagogical transition.',
        km: 'រក្សាទម្រង់ផ្ទៃពណ៌ខៀវចាស់ពេញអេក្រង់ (#2B547E) ដូចស្លាយដើមទី ៤ ជាមួយនឹងអក្សរពណ៌ស (#FFFFFF) លេចធ្លោ ដើម្បីផ្តល់សញ្ញានៃការចាប់ផ្តើមជំពូកថ្មី។',
      },
    },
    wireframe: {
      headerSection: {
        en: 'Minimalist top-right AMS logo on the #2B547E navy canvas.',
        km: 'និមិត្តសញ្ញា AMS នៅជ្រុងលើខាងស្តាំលើផ្ទៃពណ៌ខៀវចាស់ (#2B547E)។',
      },
      leftZone: {
        en: 'Left-Center Focal Anchor (X: 80px to 900px, Y: 320px to 520px): Giant bold title "1 Motivation / ១. មូលហេតុជំរុញនៃការសិក្សា" with bilingual chapter objectives.',
        km: 'ចំណុចកណ្តាលខាងឆ្វេង៖ ចំណងជើងធំដិត «1 Motivation / ១. មូលហេតុជំរុញនៃការសិក្សា» អមដោយគោលបំណងសំខាន់ៗនៃជំពូកទី ១។',
      },
      rightZone: {
        en: 'Right Preview Panel (X: 940px to 1360px): Preview KPI cards of the Gapminder dataset (1,704 rows, 5 variables, 1952–2007) introduced in this section.',
        km: 'ផ្ទាំងខាងស្តាំ៖ កាតសង្ខេបទិន្នន័យ Gapminder (១.៧០៤ ជួរដេក, ៥ អថេរ, ឆ្នាំ ១៩៥២–២០០៧) ដែលនឹងត្រូវយកមកសិក្សាក្នុងជំពូកនេះ។',
      },
      bottomOrTopBar: {
        en: 'Bottom right slide indicator "4".',
        km: 'លេខសម្គាល់ទំព័រ «4» នៅជ្រុងក្រោមខាងស្តាំ។',
      },
      gridAllocation: 'Full-Bleed Dark Navy Section Divider Canvas (7 Columns Title + 5 Columns Preview)',
    },
    chartMetricsMath: {
      scorecards: [
        {
          label: { en: 'Chapter 1 Focus', km: 'ចំណុចផ្តោតនៃជំពូកទី ១' },
          value: 'Univariate → Bivariate',
          metricField: 'transition_stage',
          aggregation: 'None',
          comparisonNote: { en: 'Bridging 1D distributions to 2D relationships', km: 'ការភ្ជាប់ពីការបែងចែក 1D ទៅកាន់ទំនាក់ទំនង 2D' },
        },
      ],
      charts: [],
      formulas: [],
    },
    controls: [
      {
        controlType: { en: 'Navigation Button Control', km: 'ប៊ូតុងបញ្ជារុករកទំព័រ (Navigation Button)' },
        field: 'page_navigation',
        defaultState: 'Proceed to Slide 5 (1.1 Gapminder Dataset)',
        purpose: {
          en: 'Guides report viewers smoothly from the chapter title screen into the empirical Gapminder dataset table.',
          km: 'នាំអ្នកមើលរបាយការណ៍ពីទំព័រចំណងជើងជំពូក ទៅកាន់តារាងទិន្នន័យជាក់ស្តែងនៃ Gapminder នៅទំព័រទី ៥។',
        },
      },
    ],
    expandedContent: {
      onScreenText: {
        heading: {
          en: 'Section 1: Motivation — The Need for Bivariate Analysis',
          km: 'ជំពូកទី ១៖ មូលហេតុជំរុញ — ភាពចាំបាច់នៃការវិភាគទ្វេអថេរ',
        },
        bullets: [
          {
            en: 'Why do we need new indicators and graphs beyond simple averages, standard deviations, and histograms?',
            km: 'តើហេតុអ្វីបានជាយើងត្រូវការសូចនាករ និងក្រាហ្វថ្មីៗ បន្ថែមពីលើមធ្យមភាគ គម្លាតស្តង់ដារ និងក្រាហ្វ Histogram ធម្មតា?',
          },
          {
            en: 'How can we detect whether two columns in a dataset move together, oppose each other, or behave independently?',
            km: 'តើយើងអាចដឹងដោយរបៀបណាថា ជួរឈរពីរនៅក្នុងសំណុំទិន្នន័យកើនឡើងស្របគ្នា បញ្ច្រាសគ្នា ឬឯករាជ្យពីគ្នា?',
          },
        ],
        callout: {
          en: 'Key Question: Looking at Population, Life Expectancy, and GDP per Capita separately tells us where countries stand—but not how wealth drives health.',
          km: 'សំណួរគន្លឹះ៖ ការមើលលើចំនួនប្រជាជន អាយុរំពឹងរស់ និង GDP ដាច់ដោយឡែកពីគ្នា ប្រាប់យើងត្រឹមតែស្ថានភាពទូទៅប៉ុណ្ណោះ ប៉ុន្តែមិនអាចប្រាប់ថាតើសេដ្ឋកិច្ចជះឥទ្ធិពលលើសុខភាពយ៉ាងដូចម្តេចឡើយ។',
        },
      },
      deepDiveExplanation: {
        en: 'In Looker Studio BI design, Section Divider pages act as cognitive anchors that reset audience attention before introducing new empirical data. Pedagogically, Section 1 ("Motivation") sets up a deliberate contrast: first, we will inspect the famous Gapminder global development dataset using standard univariate summary statistics (Slide 5) and univariate plots (Slide 6). By experiencing firsthand what those univariate summaries fail to answer, students naturally grasp why bivariate indicators and bivariate charts (Slide 7 onward) are indispensable.',
        km: 'នៅក្នុងការរចនាផ្ទាំងរបាយការណ៍ Looker Studio ទំព័រផ្តើមជំពូកដើរតួនាទីជាចំណុចសម្រាកភ្នែក និងប្រមូលផ្តុំការយកចិត្តទុកដាក់របស់អ្នកសិក្សា មុនពេលបង្ហាញទិន្នន័យថ្មី។ តាមបែបគរុកោសល្យ ជំពូកទី ១ («មូលហេតុជំរុញ») បង្កើតការប្រៀបធៀបយ៉ាងច្បាស់លាស់៖ ដំបូង យើងពិនិត្យមើលសំណុំទិន្នន័យពិភពលោក Gapminder ដោយប្រើស្ថិតិសង្ខេបអថេរទោល (ស្លាយទី ៥) និងក្រាហ្វអថេរទោល (ស្លាយទី ៦)។ នៅពេលនិស្សិតឃើញផ្ទាល់ភ្នែកនូវអ្វីដែលស្ថិតិអថេរទោលមិនអាចឆ្លើយបាន ពួកគេនឹងយល់យ៉ាងច្បាស់ពីមូលហេតុដែលសូចនាករ និងក្រាហ្វទ្វេអថេរ (ចាប់ពីស្លាយទី ៧ តទៅ) មានសារៈសំខាន់មិនអាចខ្វះបាន។',
      },
      practicalApplication: {
        scenarioTitle: {
          en: 'Structuring Multi-Page Executive Presentations in Looker Studio',
          km: 'ការរៀបចំបទបង្ហាញពហុទំព័រសម្រាប់ថ្នាក់ដឹកនាំក្នុង Looker Studio',
        },
        description: {
          en: 'When presenting a 40-page analytical study to stakeholders, inserting high-contrast section divider pages prevents dashboard fatigue and clearly demarcates exploratory baseline metrics from deep-dive correlation models.',
          km: 'នៅពេលធ្វើបទបង្ហាញរបាយការណ៍វិភាគទិន្នន័យដែលមានចំនួនទំព័រច្រើនដល់ថ្នាក់ដឹកនាំ ការដាក់ទំព័រផ្តើមជំពូកដែលមានពណ៌លេចធ្លោជួយកាត់បន្ថយភាពនឿយហត់នៃភ្នែក និងជួយញែកឱ្យដាច់រវាងទិន្នន័យមូលដ្ឋាន និងការវិភាគស៊ីជម្រៅ។',
        },
        impactMetric: 'Improves audience comprehension and narrative flow in BI storytelling',
      },
    },
  },

  // ==========================================
  // SLIDE 5
  // ==========================================
  {
    pageNumber: 5,
    slideFooterNumber: '5',
    sectionTag: {
      en: '1.1 Motivation — Gapminder Tabular Summary',
      km: '1.1 មូលហេតុជំរុញ — តារាងស្ថិតិសង្ខេបនៃ Gapminder',
    },
    simulatorMode: 'gapminder_summary_table',
    pageIdentity: {
      titleEn: '1.1 Motivation — Gapminder Dataset (1704, 5) Summary Statistics (Year 2007)',
      titleKm: '1.1 មូលហេតុជំរុញ — ស្ថិតិសង្ខេបនៃសំណុំទិន្នន័យ Gapminder (1704, 5) ក្នុងឆ្នាំ ២០០៧',
      themeName: {
        en: 'Light Academic Data Profiling Theme',
        km: 'ផ្ទៃភ្លឺសម្រាប់ការពិនិត្យទម្រង់ទិន្នន័យ (Data Profiling)',
      },
      canvasBgHex: '#F8FAFC',
      surfaceCardHex: '#FFFFFF',
      primaryAccentHex: '#1E4E79',
      secondaryAccentHex: '#2563EB',
      textPrimaryHex: '#0F172A',
      hierarchyRationale: {
        en: 'Uses a crisp white surface card (#FFFFFF) with monospace tabular numerals (#0F172A) and #1E4E79 header bars so scientific notation and decimal precision align vertically.',
        km: 'ប្រើប្រាស់ផ្ទាំងកាតពណ៌ស (#FFFFFF) ជាមួយតួលេខទម្រង់ Tabular Monospace (#0F172A) និងក្បាលតារាងពណ៌ខៀវ (#1E4E79) ដើម្បីឱ្យខ្ទង់ទសភាគ និងស្វ័យគុណតម្រៀបគ្នាត្រង់ជួរឈរយ៉ាងស្អាត។',
      },
    },
    wireframe: {
      headerSection: {
        en: 'Top Header: "1.1 Motivation — Gapminder dataset (1704, 5) / 1.1 មូលហេតុជំរុញ — សំណុំទិន្នន័យ Gapminder" with database icon.',
        km: 'ផ្នែកខាងលើ៖ ចំណងជើង «1.1 Motivation — Gapminder dataset (1704, 5)» អមដោយរូបតំណាងមូលដ្ឋានទិន្នន័យ។',
      },
      leftZone: {
        en: 'Left Zone (40% width): Dataset Context Card explaining the 1,704 observations across 1952–2007, filtering down to 142 countries in Year 2007, plus 4 KPI Scorecards.',
        km: 'ផ្នែកខាងឆ្វេង (ទទឹង ៤០%)៖ កាតពន្យល់ពីទិន្នន័យសរុប ១.៧០៤ ជួរដេក (១៩៥២–២០០៧) និងការច្រោះយកឆ្នាំ ២០០៧ (១៤២ ប្រទេស) អមដោយផ្ទាំង KPI ចំនួន ៤។',
      },
      rightZone: {
        en: 'Right Zone (60% width): Exact 5-row by 3-column Summary Statistics Table (mean, std, min, 50% median, max) for `pop`, `lifeExp`, and `gdpPercap`.',
        km: 'ផ្នែកខាងស្តាំ (ទទឹង ៦០%)៖ តារាងស្ថិតិសង្ខេប ៥ ជួរដេក x ៣ ជួរឈរ (mean, std, min, 50%, max) សម្រាប់អថេរ `pop`, `lifeExp` និង `gdpPercap`។',
      },
      bottomOrTopBar: {
        en: 'Bottom analytical takeaway strip highlighting the massive skewness between Mean and Median (50%) in `pop` and `gdpPercap`.',
        km: 'របារសន្និដ្ឋានខាងក្រោមដែលគូសបញ្ជាក់ពីភាពខុសគ្នាយ៉ាងខ្លាំងរវាងមធ្យមភាគ (Mean) និងមេដ្យាន (50%) នៃអថេរ `pop` និង `gdpPercap`។',
      },
      gridAllocation: '5 Columns Left (Context & KPIs) + 7 Columns Right (5x3 Statistical Summary Table)',
    },
    chartMetricsMath: {
      scorecards: [
        {
          label: { en: 'Dataset Dimensions (1952–2007)', km: 'ទំហំទិន្នន័យសរុប (១៩៥២–២០០៧)' },
          value: '1,704 × 5',
          metricField: 'dataset_shape',
          aggregation: 'Count',
          comparisonNote: { en: '142 Countries × 12 Five-Year Intervals', km: '១៤២ ប្រទេស × ១២ ចន្លោះពេល (រៀងរាល់ ៥ ឆ្នាំម្តង)' },
        },
        {
          label: { en: '2007 Mean Life Expectancy', km: 'អាយុរំពឹងរស់មធ្យម (ឆ្នាំ ២០០៧)' },
          value: '67.01 yrs',
          metricField: 'AVG(lifeExp)',
          aggregation: 'Average',
          comparisonNote: { en: 'Median (50%): 71.94 yrs | Std: 12.07 yrs', km: 'មេដ្យាន (50%)៖ 71.94 ឆ្នាំ | គម្លាតស្តង់ដារ៖ 12.07 ឆ្នាំ' },
        },
        {
          label: { en: '2007 Mean GDP per Capita', km: 'GDP ក្នុងមនុស្សម្នាក់មធ្យម (២០០៧)' },
          value: '$11,680.07',
          metricField: 'AVG(gdpPercap)',
          aggregation: 'Average',
          comparisonNote: { en: 'Median (50%): $6,124.37 (Right-skewed)', km: 'មេដ្យាន (50%)៖ $6,124.37 (ពេនទៅស្តាំខ្លាំង)' },
        },
        {
          label: { en: '2007 Mean Population', km: 'ចំនួនប្រជាជនមធ្យម (២០០៧)' },
          value: '44.02M',
          metricField: 'AVG(pop)',
          aggregation: 'Average',
          comparisonNote: { en: 'Max: 1.318B (China) | Median: 10.52M', km: 'អតិបរមា៖ 1.318 ពាន់លាននាក់ | មេដ្យាន៖ 10.52 លាននាក់' },
        },
      ],
      charts: [
        {
          chartType: {
            en: 'Looker Studio Pivot / Summary Table (pandas .describe() Equivalent)',
            km: 'តារាងសង្ខេបស្ថិតិពិពណ៌នា (ស្មើនឹងអនុគមន៍ pandas .describe())',
          },
          dimensions: ['statistic_metric_name'],
          metrics: ['pop_value', 'lifeExp_value', 'gdpPercap_value'],
          sorting: 'custom_stat_order ASC (mean, std, min, 50%, max)',
          stylingNote: {
            en: 'Display exact values from Slide 5: pop (mean: 4.402122e+07, std: 1.476214e+08, min: 1.995790e+05, 50%: 1.051753e+07, max: 1.318683e+09); lifeExp (mean: 67.007423, std: 12.073021, min: 39.613, 50%: 71.9355, max: 82.603); gdpPercap (mean: 11680.071820, std: 12859.937337, min: 277.551859, 50%: 6124.371108, max: 49357.190170).',
            km: 'បង្ហាញតួលេខពិតប្រាកដដូចក្នុងស្លាយទី ៥ ដោយប្រើទម្រង់អក្សរ Monospace ដើម្បីងាយស្រួលប្រៀបធៀបរវាងតម្លៃមធ្យម គម្លាតស្តង់ដារ តម្លៃអប្បបរមា មេដ្យាន និងតម្លៃអតិបរមា។',
          },
        },
      ],
      formulas: [
        {
          title: { en: 'Sample Mean & Sample Standard Deviation (Univariate Baseline)', km: 'រូបមន្តមធ្យមភាគគំរូ និងគម្លាតស្តង់ដារគំរូ (មូលដ្ឋានអថេរទោល)' },
          equation: 'x̄ = (1 / n) ∑_{i=1}^{n} x_i ,    s_X = √[ (1 / (n - 1)) ∑_{i=1}^{n} (x_i - x̄)² ]',
          variables: [
            { symbol: 'n', en: 'Number of countries observed in 2007 (n = 142)', km: 'ចំនួនប្រទេសសរុបដែលបានអង្កេតក្នុងឆ្នាំ ២០០៧ (n = 142)' },
            { symbol: 'x_i', en: 'Value of variable X (pop, lifeExp, or gdpPercap) for country i', km: 'តម្លៃនៃអថេរ X (ប្រជាជន, អាយុរំពឹងរស់ ឬ GDP) សម្រាប់ប្រទេសទី i' },
            { symbol: 'x̄', en: 'Arithmetic mean across all n observations', km: 'មធ្យមភាគនព្វន្ធនៃការអង្កេតទាំង n' },
            { symbol: 's_X', en: 'Sample standard deviation measuring dispersion around the mean', km: 'គម្លាតស្តង់ដារគំរូ ដែលវាស់កម្រិតនៃការពង្រាយទិន្នន័យជុំវិញមធ្យមភាគ' },
          ],
        },
      ],
    },
    controls: [
      {
        controlType: { en: 'Drop-down List Control (Year Filter)', km: 'តម្រងជ្រើសរើសឆ្នាំ (Year Filter)' },
        field: 'year',
        defaultState: '2007',
        purpose: {
          en: 'Filters the 1,704-row Gapminder table (1952–2007) to the cross-sectional snapshot of Year 2007 (142 rows).',
          km: 'ច្រោះទិន្នន័យ Gapminder ពី ១.៧០៤ ជួរដេក (១៩៥២–២០០៧) មកត្រឹមទិន្នន័យឆ្នាំ ២០០៧ (១៤២ ប្រទេស)។',
        },
      },
      {
        controlType: { en: 'Checkbox / Toggle Control (Number Formatting)', km: 'ប៊ូតុងប្តូរទម្រង់តួលេខ (Scientific vs Readable)' },
        field: 'number_format_mode',
        defaultState: 'Scientific & Standard Side-by-Side',
        purpose: {
          en: 'Lets students compare raw Python scientific notation (4.402122e+07) with human-readable millions (44.02M).',
          km: 'អនុញ្ញាតឱ្យនិស្សិតប្រៀបធៀបរវាងទម្រង់ស្វ័យគុណក្នុង Python (4.402122e+07) និងទម្រង់ងាយអាន (44.02 លាននាក់)។',
        },
      },
    ],
    expandedContent: {
      onScreenText: {
        heading: {
          en: 'Exploring the Gapminder Dataset (1952–2007) — Year 2007 Snapshot',
          km: 'ការស្វែងយល់ពីសំណុំទិន្នន័យ Gapminder (១៩៥២–២០០៧) — ទិដ្ឋភាពទិន្នន័យឆ្នាំ ២០០៧',
        },
        bullets: [
          {
            en: 'This dataset captures the world’s socio-economic evolution from 1952 to 2007 across 1,704 rows and 5 core columns.',
            km: 'សំណុំទិន្នន័យនេះកត់ត្រាពីការវិវត្តន៍សេដ្ឋកិច្ច-សង្គមនៃពិភពលោកពីឆ្នាំ ១៩៥២ ដល់ ២០០៧ ដែលមាន ១.៧០៤ ជួរដេក និង ៥ ជួរឈរសំខាន់ៗ។',
          },
          {
            en: 'In Year 2007: Mean Population is 44.02M (but Median is only 10.52M); Mean Life Expectancy is 67.01 years (min 39.61, max 82.60); Mean GDP per capita is $11,680.07 (Median $6,124.37).',
            km: 'ក្នុងឆ្នាំ ២០០៧៖ ប្រជាជនមធ្យមគឺ 44.02 លាននាក់ (ប៉ុន្តែមេដ្យានមានត្រឹមតែ 10.52 លាននាក់) អាយុរំពឹងរស់មធ្យមគឺ 67.01 ឆ្នាំ និង GDP មធ្យមគឺ $11,680.07 (មេដ្យាន $6,124.37)។',
          },
        ],
        callout: {
          en: 'Critical Observation: Notice how `std` ($12,859.94) is larger than `mean` ($11,680.07) for `gdpPercap`, and `mean` is nearly double the `50%` median ($6,124.37). This signals extreme right-skewness!',
          km: 'ការកត់សម្គាល់សំខាន់៖ សូមសង្កេតថា គម្លាតស្តង់ដារ `std` ($12,859.94) ធំជាងតម្លៃមធ្យម `mean` ($11,680.07) សម្រាប់ `gdpPercap` ហើយតម្លៃមធ្យមគឺជិតទ្វេដងនៃមេដ្យាន `50%` ($6,124.37)។ នេះបញ្ជាក់ថាទិន្នន័យពេបទៅខាងស្តាំយ៉ាងខ្លាំង (Right-skewed)!',
        },
      },
      deepDiveExplanation: {
        en: 'The Gapminder dataset (popularized by Hans Rosling) contains 1,704 rows representing 142 countries measured every 5 years from 1952 to 2007 (12 time points × 142 countries = 1,704 rows) across 5 key columns (`country`, `continent`, `year`, `lifeExp`, `pop`, `gdpPercap`—where `year` or `country` is often indexed). When we isolate the year 2007 and run `data2007[["pop", "lifeExp", "gdpPercap"]].describe()`, we obtain five foundational univariate statistics. Comparing the Mean and the 50% quantile (Median) immediately diagnoses distribution asymmetry: for `pop`, China (1.318 billion) and India (1.110 billion) pull the global mean up to 44.02 million, even though half of the world’s countries have fewer than 10.52 million people. For `lifeExp`, the mean (67.01 years) is lower than the median (71.94 years), indicating a left-skewed distribution pulled downward by countries experiencing severe health crises in 2007 (such as Swaziland at 39.61 years). Yet despite these rich univariate insights, this table cannot tell us whether the countries with high `gdpPercap` are the same countries with high `lifeExp`.',
        km: 'សំណុំទិន្នន័យ Gapminder (ដែលធ្វើឱ្យល្បីល្បាញដោយលោក Hans Rosling) មាន ១.៧០៤ ជួរដេក ដែលតំណាងឱ្យប្រទេសចំនួន ១៤២ ត្រូវបានវាស់វែងរៀងរាល់ ៥ ឆ្នាំម្តង ចាប់ពីឆ្នាំ ១៩៥២ ដល់ ២០០៧ (១២ ចន្លោះពេល × ១៤២ ប្រទេស = ១.៧០៤ ជួរដេក)។ នៅពេលយើងច្រោះយកតែឆ្នាំ ២០០៧ ហើយប្រើប្រាស់អនុគមន៍ `.describe()` ក្នុង Python យើងទទួលបានតារាងស្ថិតិអថេរទោលទាំង ៥ ជួរដេកនេះ។ ការប្រៀបធៀបរវាងមធ្យមភាគ (Mean) និងមេដ្យាន (50%) អាចឱ្យយើងដឹងភ្លាមៗអំពីភាពមិនឆ្លុះនៃទិន្នន័យ៖ ចំពោះចំនួនប្រជាជន (`pop`) ប្រទេសចិន (1.318 ពាន់លាននាក់) និងឥណ្ឌា បានទាញមធ្យមភាគពិភពលោកឱ្យឡើងដល់ 44.02 លាននាក់ ទោះបីជាពាក់កណ្តាលនៃប្រទេសលើពិភពលោកមានប្រជាជនតិចជាង 10.52 លាននាក់ក៏ដោយ។ ចំពោះអាយុរំពឹងរស់ (`lifeExp`) មធ្យមភាគ (67.01 ឆ្នាំ) គឺទាបជាងមេដ្យាន (71.94 ឆ្នាំ) ដែលបង្ហាញថាទិន្នន័យពេនទៅឆ្វេងដោយសារប្រទេសមួយចំនួនមានវិបត្តិសុខភាពធ្ងន់ធ្ងរ (អប្បបរមា 39.61 ឆ្នាំ)។ ទោះជាយ៉ាងណាក៏ដោយ តារាងនេះនៅតែមិនអាចឆ្លើយបានថាតើប្រទេសដែលមាន GDP ខ្ពស់ គឺជាប្រទេសដូចគ្នាដែលមានអាយុរំពឹងរស់ខ្ពស់ដែរឬទេ។',
      },
      practicalApplication: {
        scenarioTitle: {
          en: 'Automated Data Profiling Table in Looker Studio Before Modeling',
          km: 'ការបង្កើតតារាងត្រួតពិនិត្យគុណភាពទិន្នន័យ (Data Profiling) ក្នុង Looker Studio',
        },
        description: {
          en: 'In banking or public health dashboards, placing a 5-stat summary table (Mean, SD, Min, Median, Max) on the introductory data page prevents analysts from blindly using Average KPIs when the underlying metric (like transaction volume or clinic headcount) is heavily skewed.',
          km: 'នៅក្នុងផ្ទាំងរបាយការណ៍ធនាគារ ឬសុខាភិបាលសាធារណៈ ការដាក់តារាងសង្ខេបស្ថិតិទាំង ៥ (មធ្យម គម្លាតស្តង់ដារ អប្បបរមា មេដ្យាន អតិបរមា) ជួយការពារអ្នកវិភាគកុំឱ្យប្រើប្រាស់តែតម្លៃមធ្យមភាគ (Average) ដោយងងឹតងងល់ នៅពេលដែលទិន្នន័យពិតប្រាកដមានភាពពេនខ្លាំង។',
        },
        impactMetric: 'Detects extreme skewness (Mean/Median ratio = 1.91x for GDP, 4.19x for Pop)',
      },
    },
  },

  // ==========================================
  // SLIDE 6
  // ==========================================
  {
    pageNumber: 6,
    slideFooterNumber: '6',
    sectionTag: {
      en: '1.1 Motivation — Univariate Visualizations',
      km: '1.1 មូលហេតុជំរុញ — ក្រាហ្វអថេរទោល (Univariate Plots)',
    },
    simulatorMode: 'gapminder_univariate_trio',
    pageIdentity: {
      titleEn: '1.1 Motivation — Gapminder Dataset (1704, 5) Univariate Visualization (Year 2007)',
      titleKm: '1.1 មូលហេតុជំរុញ — ការបង្ហាញក្រាហ្វអថេរទោលនៃទិន្នន័យ Gapminder ក្នុងឆ្នាំ ២០០៧',
      themeName: {
        en: 'Multi-Chart Univariate Diagnostic Canvas',
        km: 'ផ្ទៃវិភាគក្រាហ្វអថេរទោលទាំង ៣ ទន្ទឹមគ្នា',
      },
      canvasBgHex: '#F8FAFC',
      surfaceCardHex: '#FFFFFF',
      primaryAccentHex: '#6366F1',
      secondaryAccentHex: '#10B981',
      textPrimaryHex: '#0F172A',
      hierarchyRationale: {
        en: 'Replicates the exact 3-color semantic coding from Slide 6: Indigo/Periwinkle (#6366F1) for Population Boxplot, Coral/Salmon (#EF4444) for Life Expectancy Violinplot, and Emerald Green (#10B981) for GDP Per Capita Histogram.',
        km: 'រក្សាពណ៌សម្គាល់ទាំង ៣ ដូចក្នុងស្លាយទី ៦ គឺពណ៌ស្វាយខៀវ (#6366F1) សម្រាប់ក្រាហ្វ Boxplot នៃចំនួនប្រជាជន ពណ៌ទឹកក្រូចក្រហម (#EF4444) សម្រាប់ក្រាហ្វ Violinplot នៃអាយុរំពឹងរស់ និងពណ៌បៃតង (#10B981) សម្រាប់ក្រាហ្វ Histogram នៃ GDP។',
      },
    },
    wireframe: {
      headerSection: {
        en: 'Top Header: "Gapminder dataset (1704, 5) — Year 2007 (visualization)" with bullet summary.',
        km: 'ផ្នែកខាងលើ៖ ចំណងជើង «Gapminder dataset (1704, 5) — ការបង្ហាញជាក្រាហ្វក្នុងឆ្នាំ ២០០៧»។',
      },
      leftZone: {
        en: 'Three Equal-Width Chart Columns across the 16:9 workspace (4 columns each): Left = Boxplot of `pop` (log-scaled Y axis from 200k to 1.3B); Center = Violinplot of `lifeExp` (40 to 82.6 yrs); Right = Histogram of `gdpPercap` (0 to 50k USD).',
        km: 'ក្រាហ្វចំនួន ៣ ដាក់ទន្ទឹមគ្នាពេញអេក្រង់ 16:9៖ ខាងឆ្វេង = Boxplot នៃ `pop` (អ័ក្ស Y ជាមាត្រដ្ឋាន Log), កណ្តាល = Violinplot នៃ `lifeExp` (40 ដល់ 82.6 ឆ្នាំ), ខាងស្តាំ = Histogram នៃ `gdpPercap` (0 ដល់ 50k USD)។',
      },
      rightZone: {
        en: 'Far-Right Legend Box (`pop`, `lifeExp`, `gdpPercap`) + Bottom Video Reference Banner: "Hans Rosling’s 200 Countries, 200 Years in 4 Minutes".',
        km: 'ប្រអប់កំណត់សម្គាល់ពណ៌នៅខាងស្តាំ និងរបារតំណភ្ជាប់វីដេអូខាងក្រោម៖ «Hans Rosling’s 200 Countries, 200 Years in 4 Minutes»។',
      },
      bottomOrTopBar: {
        en: 'Bottom External Media Link Banner with YouTube icon linking to Hans Rosling’s BBC Joy of Stats presentation.',
        km: 'របារខាងក្រោមភ្ជាប់ទៅកាន់វីដេអូដ៏ល្បីល្បាញរបស់លោក Hans Rosling (២០០ ប្រទេស ២០០ ឆ្នាំ ក្នុងរយៈពេល ៤ នាទី)។',
      },
      gridAllocation: '3 × 4-Column Chart Triptych + Bottom Full-Width Reference Strip',
    },
    chartMetricsMath: {
      scorecards: [
        {
          label: { en: 'Population Scale Span', km: 'វិសាលភាពនៃចំនួនប្រជាជន' },
          value: '199.6K → 1.32B',
          metricField: 'MAX(pop) / MIN(pop)',
          aggregation: 'Range',
          comparisonNote: { en: 'Requires Log-10 Axis in Boxplot', km: 'តម្រូវឱ្យប្រើអ័ក្ស Log-10 នៅក្នុងក្រាហ្វ Boxplot' },
        },
        {
          label: { en: 'LifeExp Bimodal Peak', km: 'ចំណុចកំពូលនៃអាយុរំពឹងរស់' },
          value: '~74–78 yrs',
          metricField: 'MODE(lifeExp)',
          aggregation: 'Distribution Density Peak',
          comparisonNote: { en: 'With lower tail extending to 40 yrs', km: 'មានកន្ទុយទិន្នន័យខាងក្រោមអូសបន្លាយដល់ ៤០ ឆ្នាំ' },
        },
        {
          label: { en: 'GDP Concentration (<$5k)', km: 'ប្រទេសដែលមាន GDP ទាបជាង $5,000' },
          value: '66 Countries',
          metricField: 'COUNT(gdpPercap < 5000)',
          aggregation: 'Count',
          comparisonNote: { en: '46.5% of world nations in first bin', km: '៤៦,៥% នៃប្រទេសទាំងអស់ស្ថិតក្នុងរបារទីមួយ' },
        },
      ],
      charts: [
        {
          chartType: {
            en: 'Chart 1: Community Boxplot (or Percentile Candle Chart) for `pop`',
            km: 'ក្រាហ្វទី ១៖ ក្រាហ្វប្រអប់ (Boxplot) សម្រាប់ចំនួនប្រជាជន `pop`',
          },
          dimensions: ['country'],
          metrics: ['MIN(pop)', 'PERCENTILE(pop, 25)', 'MEDIAN(pop)', 'PERCENTILE(pop, 75)', 'MAX(pop)'],
          sorting: 'pop DESC',
          stylingNote: {
            en: 'Set Y-axis to Logarithmic scale (1M, 10M, 100M, 1B) so the interquartile box (3.5M to 40M) is clearly visible alongside upper outliers (China, India).',
            km: 'កំណត់អ័ក្ស Y ជាមាត្រដ្ឋានលោការីត (1M, 10M, 100M, 1B) ដើម្បីឱ្យប្រអប់ទិន្នន័យកណ្តាលមើលឃើញច្បាស់ រួមជាមួយតម្លៃដាច់ស្រយាលខាងលើ (ចិន និងឥណ្ឌា)។',
          },
        },
        {
          chartType: {
            en: 'Chart 2: Violin Plot / Kernel Density Distribution for `lifeExp`',
            km: 'ក្រាហ្វទី ២៖ ក្រាហ្វវីយូឡុង (Violin Plot) សម្រាប់អាយុរំពឹងរស់ `lifeExp`',
          },
          dimensions: ['lifeExp_bin'],
          metrics: ['kernel_density_estimate'],
          sorting: 'lifeExp_bin ASC',
          stylingNote: {
            en: 'Shows the wide upper bulb around 75 years (developed/emerging nations) and a secondary lower bulge around 45–55 years.',
            km: 'បង្ហាញពីផ្នែកប៉ោងធំនៅខាងលើត្រង់ប្រមាណ ៧៥ ឆ្នាំ និងផ្នែកប៉ោងតូចជាងនៅខាងក្រោមចន្លោះពី ៤៥ ទៅ ៥៥ ឆ្នាំ។',
          },
        },
        {
          chartType: {
            en: 'Chart 3: Column Histogram for `gdpPercap`',
            km: 'ក្រាហ្វទី ៣៖ ក្រាហ្វសសរ Histogram សម្រាប់ `gdpPercap`',
          },
          dimensions: ['gdpPercap_bin_5k'],
          metrics: ['COUNT(country)'],
          sorting: 'gdpPercap_bin_5k ASC',
          stylingNote: {
            en: '10 bins of width $5,000 from $0 to $50,000, colored in #10B981 green.',
            km: 'បែងចែកជា ១០ ចន្លោះ (ចន្លោះនីមួយៗស្មើ $5,000) ពី $0 ដល់ $50,000 ដោយប្រើពណ៌បៃតង #10B981។',
          },
        },
      ],
      formulas: [
        {
          title: { en: 'Interquartile Range (IQR) & Boxplot Whisker Boundaries', km: 'រូបមន្តគម្លាតអន្តរចតុភាគ (IQR) និងព្រំដែនដៃនៃក្រាហ្វប្រអប់ (Boxplot)' },
          equation: 'IQR = Q_3 - Q_1 ,    Upper Fence = Q_3 + 1.5 × IQR ,    Lower Fence = Q_1 - 1.5 × IQR',
          variables: [
            { symbol: 'Q_1', en: '25th percentile (first quartile) of the column', km: 'ចតុភាគទី ១ (២៥% នៃទិន្នន័យស្ថិតនៅក្រោមតម្លៃនេះ)' },
            { symbol: 'Q_3', en: '75th percentile (third quartile) of the column', km: 'ចតុភាគទី ៣ (៧៥% នៃទិន្នន័យស្ថិតនៅក្រោមតម្លៃនេះ)' },
            { symbol: 'IQR', en: 'Interquartile range containing the middle 50% of observations', km: 'គម្លាតអន្តរចតុភាគ ដែលផ្ទុកទិន្នន័យ ៥០% នៅចំកណ្តាល' },
          ],
        },
      ],
    },
    controls: [
      {
        controlType: { en: 'Drop-down List Control (Continent Filter)', km: 'តម្រងជ្រើសរើសទ្វីប (Continent Filter)' },
        field: 'continent',
        defaultState: 'All Continents (Global 2007)',
        purpose: {
          en: 'Allows students to filter all three univariate plots by continent to observe how the distributions shift.',
          km: 'អនុញ្ញាតឱ្យនិស្សិតច្រោះមើលក្រាហ្វទាំងបីតាមទ្វីបនីមួយៗ ដើម្បីមើលការផ្លាស់ប្តូររូបរាងនៃការបែងចែកទិន្នន័យ។',
        },
      },
    ],
    expandedContent: {
      onScreenText: {
        heading: {
          en: 'Visualizing Individual Variables (2007) & Hans Rosling’s Vision',
          km: 'ការបង្ហាញក្រាហ្វនៃអថេរនីមួយៗដាច់ដោយឡែក (ឆ្នាំ ២០០៧) និងចក្ខុវិស័យរបស់លោក Hans Rosling',
        },
        bullets: [
          {
            en: 'Boxplot of Population (`pop` on log scale): Median is ~10.5M, with numerous upper outliers exceeding 100M and 1B.',
            km: 'ក្រាហ្វ Boxplot នៃចំនួនប្រជាជន (`pop` លើមាត្រដ្ឋាន Log)៖ មេដ្យានគឺ ~10.5 លាននាក់ ដោយមានប្រទេសជាច្រើនជាតម្លៃដាច់ស្រយាល (Outliers) លើសពី 100 លាន និង 1 ពាន់លាននាក់។',
          },
          {
            en: 'Violinplot of Life Expectancy (`lifeExp`): Concentrates heavily between 70 and 80 years, but exhibits a long lower tail down to 40 years.',
            km: 'ក្រាហ្វ Violinplot នៃអាយុរំពឹងរស់ (`lifeExp`)៖ ប្រមូលផ្តុំខ្លាំងនៅចន្លោះ ៧០ ទៅ ៨០ ឆ្នាំ ប៉ុន្តែមានកន្ទុយទិន្នន័យអូសចុះក្រោមដល់ ៤០ ឆ្នាំ។',
          },
          {
            en: 'Histogram of GDP Per Capita (`gdpPercap`): Heavily right-skewed—over 60 countries have GDP per capita below $5,000.',
            km: 'ក្រាហ្វ Histogram នៃ GDP ក្នុងមនុស្សម្នាក់ (`gdpPercap`)៖ ពេនទៅស្តាំយ៉ាងខ្លាំង ដោយមានប្រទេសជាង ៦០ មាន GDP ក្រោម $5,000។',
          },
          {
            en: 'Video Inspiration: Hans Rosling’s "200 Countries, 200 Years in 4 Minutes" demonstrates how combining these separated variables into one joint canvas transforms our understanding of the world.',
            km: 'វីដេអូបំផុសគំនិត៖ បទបង្ហាញរបស់លោក Hans Rosling «២០០ ប្រទេស ២០០ ឆ្នាំ ក្នុងរយៈពេល ៤ នាទី» បង្ហាញពីរបៀបដែលការបញ្ចូលអថេរដាច់ដោយឡែកទាំងនេះទៅក្នុងក្រាហ្វរួមតែមួយ អាចផ្លាស់ប្តូរការយល់ដឹងរបស់យើងអំពីពិភពលោក។',
          },
        ],
        callout: {
          en: 'Why Three Separate Univariate Plots Fall Short: Even with Boxplots, Violins, and Histograms side-by-side, the records are unlinked—we cannot see where a single country sits across all three charts simultaneously.',
          km: 'ហេតុអ្វីក្រាហ្វអថេរទោលទាំង ៣ ដាច់គ្នានេះនៅតែមិនគ្រប់គ្រាន់៖ ទោះបីជាយើងដាក់ក្រាហ្វទាំង ៣ ទន្ទឹមគ្នាក៏ដោយ ក៏ទិន្នន័យនៃប្រទេសនីមួយៗមិនត្រូវបានភ្ជាប់គ្នាដែរ គឺយើងមិនដឹងថាប្រទេសមួយណាស្ថិតនៅត្រង់ណានៅលើក្រាហ្វទាំង ៣ ក្នុងពេលតែមួយឡើយ។',
        },
      },
      deepDiveExplanation: {
        en: 'Slide 6 translates the numeric summary table from Slide 5 into three distinct univariate visual forms: (1) A Boxplot for `pop` using a logarithmic vertical axis ($10^5$ to $10^9$), which compresses extreme orders of magnitude so we can simultaneously see the median line, the 25th–75th percentile box, the $1.5 \\times \\text{IQR}$ whiskers, and individual outlier points above 100 million; (2) A Violin plot for `lifeExp`, which mirrors a Kernel Density Estimation (KDE) curve on both sides to reveal multimodal density peaks that a plain boxplot hides; and (3) A Histogram for `gdpPercap`, which discretizes continuous income into intervals to display frequency counts. At the bottom of the slide, the reference to Hans Rosling’s legendary BBC video ("200 Countries, 200 Years in 4 Minutes") serves as the intellectual catalyst: Rosling showed that only when we plot Health (`lifeExp`) AGAINST Wealth (`gdpPercap`), sized by Population (`pop`), and colored by `continent`, do we unlock the true story of global development.',
        km: 'ស្លាយទី ៦ បម្លែងតារាងតួលេខពីស្លាយទី ៥ ទៅជាទម្រង់ក្រាហ្វអថេរទោលចំនួន ៣ ខុសៗគ្នា៖ (១) ក្រាហ្វ Boxplot សម្រាប់ចំនួនប្រជាជន `pop` ដោយប្រើអ័ក្សឈរជាមាត្រដ្ឋានលោការីត ($10^5$ ដល់ $10^9$) ដែលជួយបង្រួមតួលេខដ៏ធំសម្បើមឱ្យយើងមើលឃើញទាំងបន្ទាត់មេដ្យាន ប្រអប់ចតុភាគ និងចំណុច Outliers; (២) ក្រាហ្វ Violin plot សម្រាប់អាយុរំពឹងរស់ `lifeExp` ដែលបង្ហាញពីដង់ស៊ីតេនៃទិន្នន័យទាំងសងខាង ធ្វើឱ្យយើងមើលឃើញកន្លែងដែលទិន្នន័យប្រមូលផ្តុំច្រើនបំផុត; និង (៣) ក្រាហ្វ Histogram សម្រាប់ `gdpPercap` ដែលបែងចែកប្រាក់ចំណូលជាចន្លោះៗដើម្បីរាប់ចំនួនប្រទេស។ នៅផ្នែកខាងក្រោមនៃស្លាយ ការយោងទៅកាន់វីដេអូរបស់លោក Hans Rosling គឺជាចំណុចរបត់ដ៏សំខាន់៖ គាត់បានបង្ហាញថា លុះត្រាតែយើងយកសុខភាព (`lifeExp`) មកគូសភ្ជាប់ជាមួយទ្រព្យសម្បត្តិ (`gdpPercap`) ដោយកំណត់ទំហំតាមចំនួនប្រជាជន (`pop`) ទើបយើងអាចមើលឃើញរឿងរ៉ាវពិតនៃការអភិវឌ្ឍពិភពលោក។',
      },
      practicalApplication: {
        scenarioTitle: {
          en: 'Multi-Metric Univariate Diagnostic Row in Looker Studio',
          km: 'ការដាក់ជួរក្រាហ្វត្រួតពិនិត្យការបែងចែកទិន្នន័យក្នុង Looker Studio',
        },
        description: {
          en: 'Before building bivariate regression models in e-commerce (e.g., Customer Order Value vs. Retention Days), BI designers place a top row of univariate histograms/boxplots to check which variables need log-transformation.',
          km: 'មុនពេលបង្កើតម៉ូដែលសហសម្ព័ន្ធទ្វេអថេរនៅក្នុងពាណិជ្ជកម្មអេឡិចត្រូនិក អ្នករចនា BI តែងដាក់ក្រាហ្វ Histogram និង Boxplot នៅជួរខាងលើ ដើម្បីពិនិត្យមើលថាតើអថេរណាខ្លះដែលត្រូវការបម្លែងជាមាត្រដ្ឋានលោការីត (Log-transformation) ជាមុនសិន។',
        },
        impactMetric: 'Identifies log-scaling requirements before bivariate plotting',
      },
    },
  },

  // ==========================================
  // SLIDE 7
  // ==========================================
  {
    pageNumber: 7,
    slideFooterNumber: '7',
    sectionTag: {
      en: 'Course Objective & Analytical Taxonomy',
      km: 'គោលបំណងមេរៀន និងការបែងចែកករណីវិភាគទាំង ៣',
    },
    simulatorMode: 'bivariate_decision_matrix',
    pageIdentity: {
      titleEn: 'Objective — Selecting Indicators & Graphs for Variable Pairs',
      titleKm: 'គោលបំណង (Objective) — ការជ្រើសរើសសូចនាករ និងក្រាហ្វសម្រាប់គូនៃអថេរ',
      themeName: {
        en: 'Color-Coded Analytical Taxonomy Theme',
        km: 'ផ្ទៃបែងចែកប្រភេទការវិភាគដោយប្រើកូដពណ៌សម្គាល់',
      },
      canvasBgHex: '#F8FAFC',
      surfaceCardHex: '#FFFFFF',
      primaryAccentHex: '#2563EB',
      secondaryAccentHex: '#DC2626',
      textPrimaryHex: '#0F172A',
      hierarchyRationale: {
        en: 'Adopts the exact pedagogical color-coding introduced on Slide 7: Royal Blue (#2563EB) for "Quantitative" variables and Crimson Red (#DC2626) for "Categorical/Qualitative" variables.',
        km: 'ប្រើប្រាស់កូដពណ៌គរុកោសល្យដូចក្នុងស្លាយទី ៧ គឺពណ៌ខៀវ (#2563EB) តំណាងឱ្យអថេរបរិមាណ (Quantitative) និងពណ៌ក្រហម (#DC2626) តំណាងឱ្យអថេរគុណភាព/ប្រភេទ (Categorical/Qualitative)។',
      },
    },
    wireframe: {
      headerSection: {
        en: 'Top Header: "Objective / គោលបំណងនៃការសិក្សា" on the left; AMS logo on the right.',
        km: 'ផ្នែកខាងលើ៖ ចំណងជើង «Objective / គោលបំណងនៃការសិក្សា» នៅខាងឆ្វេង និងនិមិត្តសញ្ញា AMS នៅខាងស្តាំ។',
      },
      leftZone: {
        en: 'Top Half (Y: 80px to 380px): Compact reference view of the 3 univariate Gapminder distributions (`pop`, `lifeExp`, `gdpPercap`) showing the starting state.',
        km: 'ផ្នែកខាងលើ៖ បង្ហាញក្រាហ្វអថេរទោលទាំង ៣ (`pop`, `lifeExp`, `gdpPercap`) ជាចំណុចចាប់ផ្តើម។',
      },
      rightZone: {
        en: 'Bottom Half (Y: 400px to 760px): Interactive 3-Case Bivariate Decision Matrix mapping Case 1 (Quantitative vs Quantitative), Case 2 (Quantitative vs Categorical), and Case 3 (Categorical vs Categorical) to their exact indicators and charts.',
        km: 'ផ្នែកខាងក្រោម៖ តារាងម៉ាទ្រីសសម្រេចចិត្តទាំង ៣ ករណី គឺ ករណីទី ១ (បរិមាណ ទល់នឹង បរិមាណ), ករណីទី ២ (បរិមាណ ទល់នឹង ប្រភេទ) និងករណីទី ៣ (ប្រភេទ ទល់នឹង ប្រភេទ)។',
      },
      bottomOrTopBar: {
        en: 'Bottom interactive selector allowing students to click Case 1, Case 2, or Case 3 to preview the exact toolkit.',
        km: 'របារជ្រើសរើសខាងក្រោមដែលអនុញ្ញាតឱ្យនិស្សិតចុចលើករណីទី ១ ទី ២ ឬទី ៣ ដើម្បីមើលឧបករណ៍វិភាគជាក់លាក់។',
      },
      gridAllocation: 'Top Row (Univariate Recap) + Bottom 3-Column Taxonomy Cards (Cases 1, 2, 3)',
    },
    chartMetricsMath: {
      scorecards: [
        {
          label: { en: 'Case 1: Quan vs Quan', km: 'ករណីទី ១៖ បរិមាណ និង បរិមាណ' },
          value: 'Cov, r, ρ + Scatter',
          metricField: 'case_1_toolkit',
          aggregation: 'None',
          comparisonNote: { en: 'Slides 9–20 (Linear & Monotonic)', km: 'ស្លាយទី ៩–២០ (ទំនាក់ទំនងលីនេអ៊ែរ និងម៉ូណូតូន)' },
        },
        {
          label: { en: 'Case 2: Quan vs Cat', km: 'ករណីទី ២៖ បរិមាណ និង ប្រភេទ' },
          value: 'η² + Box/Violin',
          metricField: 'case_2_toolkit',
          aggregation: 'None',
          comparisonNote: { en: 'Slides 22–26 (ANOVA Effect Size)', km: 'ស្លាយទី ២២–២៦ (ទំហំឥទ្ធិពលតាមក្រុម)' },
        },
        {
          label: { en: 'Case 3: Cat vs Cat', km: 'ករណីទី ៣៖ ប្រភេទ និង ប្រភេទ' },
          value: 'χ², V + Mosaic/Bar',
          metricField: 'case_3_toolkit',
          aggregation: 'None',
          comparisonNote: { en: 'Slides 27–32 (Contingency & Independence)', km: 'ស្លាយទី ២៧–៣២ (តារាងខ្វែង និងភាពឯករាជ្យ)' },
        },
      ],
      charts: [
        {
          chartType: {
            en: 'Looker Studio Interactive Decision Matrix Table',
            km: 'តារាងម៉ាទ្រីសជ្រើសរើសសូចនាករ និងក្រាហ្វ (Decision Matrix Table)',
          },
          dimensions: ['case_number', 'column_1_type', 'column_2_type', 'statistical_indicators', 'recommended_graphs'],
          metrics: ['applicable_slides_count'],
          sorting: 'case_number ASC',
          stylingNote: {
            en: 'Color-code "Quantitative" text in #2563EB (blue) and "Categorical" text in #DC2626 (red) to reinforce visual memory throughout the entire 41-page report.',
            km: 'ដាក់ពណ៌អក្សរ «Quantitative/បរិមាណ» ជាពណ៌ខៀវ (#2563EB) និង «Categorical/ប្រភេទ» ជាពណ៌ក្រហម (#DC2626) ដើម្បីជួយឱ្យនិស្សិតចងចាំបានរហ័ស។',
          },
        },
      ],
      formulas: [],
    },
    controls: [
      {
        controlType: { en: 'Button Bar Control (Case Filter)', km: 'ប៊ូតុងច្រោះតាមករណីវិភាគ (Case 1 / Case 2 / Case 3)' },
        field: 'analytical_case',
        defaultState: 'All 3 Cases',
        purpose: {
          en: 'Lets users isolate Case 1 (Quan vs Quan), Case 2 (Quan vs Cat), or Case 3 (Cat vs Cat) and see the matching Gapminder variables.',
          km: 'អនុញ្ញាតឱ្យអ្នកប្រើប្រាស់ជ្រើសរើសមើលករណីទី ១ ទី ២ ឬទី ៣ និងមើលអថេរគំរូក្នុងទិន្នន័យ Gapminder។',
        },
      },
    ],
    expandedContent: {
      onScreenText: {
        heading: {
          en: 'Core Research Question: How Do We Detect Relationships Between Two Columns?',
          km: 'សំណួរស្រាវជ្រាវស្នូល៖ តើយើងត្រូវប្រើសូចនាករ និងក្រាហ្វអ្វីខ្លះដើម្បីរកទំនាក់ទំនងរវាងជួរឈរពីរ?',
        },
        bullets: [
          {
            en: 'What indicators and graphs shall be used to detect relationships between different types of columns?',
            km: 'តើសូចនាករ (Indicators) និងក្រាហ្វ (Graphs) អ្វីខ្លះដែលត្រូវយកមកប្រើប្រាស់ ដើម្បីស្វែងរកទំនាក់ទំនងរវាងជួរឈរដែលមានប្រភេទទិន្នន័យខុសៗគ្នា?',
          },
          {
            en: 'Case 1: Quantitative vs Quantitative (ករណីទី ១៖ អថេរបរិមាណ ទល់នឹង អថេរបរិមាណ) — e.g., GDP per Capita vs Life Expectancy.',
            km: 'ករណីទី ១៖ អថេរបរិមាណ ទល់នឹង អថេរបរិមាណ (Quantitative vs Quantitative) — ឧទាហរណ៍៖ GDP ក្នុងមនុស្សម្នាក់ ទល់នឹង អាយុរំពឹងរស់។',
          },
          {
            en: 'Case 2: Quantitative vs Categorical (ករណីទី ២៖ អថេរបរិមាណ ទល់នឹង អថេរប្រភេទ/គុណភាព) — e.g., Life Expectancy across Continents.',
            km: 'ករណីទី ២៖ អថេរបរិមាណ ទល់នឹង អថេរប្រភេទ/គុណភាព (Quantitative vs Categorical) — ឧទាហរណ៍៖ អាយុរំពឹងរស់ តាមទ្វីបនីមួយៗ។',
          },
          {
            en: 'Case 3: Categorical vs Categorical (ករណីទី ៣៖ អថេរប្រភេទ ទល់នឹង អថេរប្រភេទ) — e.g., Continent vs GDP Development Tier.',
            km: 'ករណីទី ៣៖ អថេរប្រភេទ ទល់នឹង អថេរប្រភេទ (Categorical vs Categorical) — ឧទាហរណ៍៖ ទ្វីប ទល់នឹង កម្រិតអភិវឌ្ឍន៍នៃ GDP។',
          },
        ],
        callout: {
          en: 'Golden Rule of Bivariate EDA: The data type of the two columns strictly dictates both the mathematical formula you are allowed to compute and the geometry of the chart you must draw.',
          km: 'វិធានមាសនៃការវិភាគទ្វេអថេរ៖ ប្រភេទទិន្នន័យនៃជួរឈរទាំងពីរ គឺជាអ្នកកំណត់ដាច់ខាតនូវរូបមន្តគណិតវិទ្យាដែលអ្នកអាចគណនាបាន និងប្រភេទក្រាហ្វដែលអ្នកត្រូវគូស។',
        },
      },
      deepDiveExplanation: {
        en: 'Slide 7 formulates the central architectural framework of the entire course. One of the most common mistakes made by novice analysts is applying a single tool (such as Pearson correlation or a simple bar chart) to every pair of columns regardless of measurement scale. In statistics, variables divide into Quantitative (continuous or discrete numerical measurements where arithmetic differences are meaningful, such as `gdpPercap` or `lifeExp`) and Categorical/Qualitative (nominal unordered categories like `continent`, or ordinal ranked categories like `gdp_category` = Developing, Emerging, Developed). Given two variables $X$ and $Y$, combinatorics yields exactly three unordered pairings: (1) Quantitative–Quantitative, where we measure co-movement in Euclidean or rank space; (2) Quantitative–Categorical, where we measure how strongly category membership partitions numerical variance; and (3) Categorical–Categorical, where we measure departures from probabilistic independence in a two-way contingency table.',
        km: 'ស្លាយទី ៧ បង្កើតក្របខ័ណ្ឌមូលដ្ឋានសម្រាប់មេរៀនទាំងមូល។ កំហុសដ៏សាមញ្ញបំផុតមួយរបស់អ្នកវិភាគទិន្នន័យថ្មីថ្មោង គឺការប្រើប្រាស់ឧបករណ៍តែមួយ (ដូចជាមេគុណសហសម្ព័ន្ធ Pearson ឬក្រាហ្វសសរធម្មតា) ទៅលើគ្រប់គូនៃជួរឈរទាំងអស់ ដោយមិនខ្វល់ពីប្រភេទនៃទិន្នន័យ។ នៅក្នុងស្ថិតិ អថេរត្រូវបានបែងចែកជា អថេរបរិមាណ (Quantitative៖ តួលេខដែលអាចបូកដកគុណចែកបានប្រកបដោយអត្ថន័យ ដូចជា `gdpPercap` ឬ `lifeExp`) និង អថេរប្រភេទ/គុណភាព (Categorical/Qualitative៖ ក្រុមឈ្មោះគ្មានលំដាប់ដូចជា `continent` ឬក្រុមមានលំដាប់ដូចជាកម្រិតសេដ្ឋកិច្ច កំពុងអភិវឌ្ឍ កំពុងលូតលាស់ និងអភិវឌ្ឍន៍ហើយ)។ នៅពេលយើងយកអថេរពីរ $X$ និង $Y$ មកផ្គូផ្គងគ្នា វាបង្កើតបានជាករណីសិក្សា ៣ ដាច់ដោយឡែកពីគ្នា ដែលករណីនីមួយៗទាមទាររូបមន្តសូចនាករ និងក្រាហ្វខុសៗគ្នាទាំងស្រុង។',
      },
      practicalApplication: {
        scenarioTitle: {
          en: 'Automated Feature-Pair Routing in Retail Banking & Telecom BI',
          km: 'ការកំណត់ផ្លូវវិភាគអថេរដោយស្វ័យប្រវត្តិក្នុងប្រព័ន្ធធនាគារ និងទូរគមនាគមន៍',
        },
        description: {
          en: 'When an analyst in Phnom Penh explores a customer churn dataset, they use this 3-Case taxonomy: Age vs Monthly Spend (Case 1: Pearson/Scatter), Monthly Spend vs Churn Status Yes/No (Case 2: Eta-squared/Boxplot), and Payment Method KHQR/Cash vs Churn Status (Case 3: Chi-square/Stacked Bar).',
          km: 'នៅពេលអ្នកវិភាគទិន្នន័យនៅភ្នំពេញសិក្សាពីទិន្នន័យអតិថិជនឈប់ប្រើប្រាស់សេវា (Customer Churn) ពួកគេអនុវត្តច្បាប់ទាំង ៣ ករណីនេះ៖ អាយុ ទល់នឹង ការចំណាយប្រចាំខែ (ករណីទី ១៖ Pearson/Scatter), ការចំណាយប្រចាំខែ ទល់នឹង ស្ថានភាពឈប់ប្រើ សេវា (ករណីទី ២៖ Eta-squared/Boxplot), និង វិធីទូទាត់ប្រាក់ KHQR/សាច់ប្រាក់ ទល់នឹង ស្ថានភាពឈប់ប្រើសេវា (ករណីទី ៣៖ Chi-square/Stacked Bar)។',
        },
        impactMetric: 'Provides 100% coverage of all tabular bivariate column combinations',
      },
    },
  },

  // ==========================================
  // SLIDE 8
  // ==========================================
  {
    pageNumber: 8,
    slideFooterNumber: '8',
    sectionTag: {
      en: 'Section 2 Divider: Bivariate Analysis',
      km: 'ទំព័រផ្តើមជំពូកទី ២៖ ការវិភាគទ្វេអថេរ (Bivariate Analysis)',
    },
    simulatorMode: 'section_divider',
    pageIdentity: {
      titleEn: '2. Bivariate Analysis — Core Statistical Indicators & Visualizations',
      titleKm: '២. ការវិភាគទ្វេអថេរ (Bivariate Analysis) — សូចនាករស្ថិតិ និងក្រាហ្វស្នូល',
      themeName: {
        en: 'Deep Academic Navy Section Divider',
        km: 'ផ្ទៃពណ៌ខៀវចាស់សម្រាប់ទំព័រផ្តើមជំពូកទី ២',
      },
      canvasBgHex: '#2B547E',
      surfaceCardHex: '#1E3F60',
      primaryAccentHex: '#FFFFFF',
      secondaryAccentHex: '#38BDF8',
      textPrimaryHex: '#FFFFFF',
      hierarchyRationale: {
        en: 'Preserves the visual rhythm of the presentation with the signature #2B547E dark steel-blue divider canvas, white bar-chart iconography, and bold serif/display typography.',
        km: 'រក្សាចង្វាក់នៃការរចនាបទបង្ហាញដោយប្រើផ្ទៃពណ៌ខៀវចាស់ (#2B547E) រូបតំណាងក្រាហ្វសសរពណ៌ស និងអក្សរធំច្បាស់សម្រាប់ចំណងជើងជំពូកទី ២។',
      },
    },
    wireframe: {
      headerSection: {
        en: 'Top-right AMS emblem on the #2B547E divider canvas.',
        km: 'និមិត្តសញ្ញា AMS នៅជ្រុងលើខាងស្តាំលើផ្ទៃពណ៌ខៀវចាស់ (#2B547E)។',
      },
      leftZone: {
        en: 'Left-Center Hero Anchor: "2 [Bar Chart Icon] Bivariate Analysis / ២. ការវិភាគទ្វេអថេរ" with sub-chapter index (2.1 through 2.8).',
        km: 'ចំណងជើងធំនៅផ្នែកកណ្តាលខាងឆ្វេង៖ «2 Bivariate Analysis / ២. ការវិភាគទ្វេអថេរ» អមដោយបញ្ជីផ្នែករងពី 2.1 ដល់ 2.8។',
      },
      rightZone: {
        en: 'Right Summary Panel: Quick-jump cards to 2.1–2.2 (Quan vs Quan), 2.3 (Quan vs Qual), 2.4 (Qual vs Qual), 2.5 (Multiple Info), and 2.6–2.8 (Temporal & Animated).',
        km: 'ផ្ទាំងសង្ខេបខាងស្តាំ៖ បង្ហាញផ្លូវកាត់ទៅកាន់ផ្នែករងនីមួយៗនៃជំពូកទី ២។',
      },
      bottomOrTopBar: {
        en: 'Bottom right slide indicator "8".',
        km: 'លេខសម្គាល់ទំព័រ «8» នៅជ្រុងក្រោមខាងស្តាំ។',
      },
      gridAllocation: 'Full-Bleed Dark Navy Section Divider Canvas (7 Columns Title + 5 Columns Sub-module Map)',
    },
    chartMetricsMath: {
      scorecards: [
        {
          label: { en: 'Statistical Indicators Covered', km: 'សូចនាករស្ថិតិសរុបដែលត្រូវសិក្សា' },
          value: '6 Indicators',
          metricField: 'COUNT(indicators)',
          aggregation: 'Count',
          comparisonNote: { en: 'Cov(X,Y), r, ρ, η², χ², Cramér’s V', km: 'Cov(X,Y), r, ρ, η², χ² និង Cramér’s V' },
        },
        {
          label: { en: 'Visual Encodings Covered', km: 'ប្រភេទក្រាហ្វសរុបដែលត្រូវសិក្សា' },
          value: '9 Chart Families',
          metricField: 'COUNT(chart_families)',
          aggregation: 'Count',
          comparisonNote: { en: 'Scatter, Box/Violin, Density, Treemap, Bar, Bubble, Line', km: 'Scatter, Box/Violin, Density, Treemap, Bar, Bubble, Line' },
        },
      ],
      charts: [],
      formulas: [],
    },
    controls: [
      {
        controlType: { en: 'Sub-Chapter Quick Jump Control', km: 'ប៊ូតុងលោតទៅកាន់ផ្នែករង (2.1 – 2.8)' },
        field: 'subchapter_id',
        defaultState: '2.1 Quantitative vs Quantitative (Slide 9)',
        purpose: {
          en: 'Enables direct navigation from the Section 2 cover page to any of the 8 analytical sub-chapters.',
          km: 'អនុញ្ញាតឱ្យអ្នកសិក្សាចុចលោតពីទំព័រផ្តើមជំពូកទី ២ ទៅកាន់ផ្នែករងណាមួយក្នុងចំណោមផ្នែករងទាំង ៨។',
        },
      },
    ],
    expandedContent: {
      onScreenText: {
        heading: {
          en: 'Section 2: Bivariate Analysis — Mathematical Indicators & Visual Proofs',
          km: 'ជំពូកទី ២៖ ការវិភាគទ្វេអថេរ — សូចនាករគណិតវិទ្យា និងអំណះអំណាងតាមរយៈក្រាហ្វ',
        },
        bullets: [
          {
            en: '2.1 Quantitative vs Quantitative: Covariance, Pearson Correlation (r), Correlation Matrix, and Scatterplots.',
            km: '2.1 បរិមាណ ទល់នឹង បរិមាណ៖ កូវ៉ារ្យង់ (Covariance), សហសម្ព័ន្ធ Pearson (r), ម៉ាទ្រីសសហសម្ព័ន្ធ និងក្រាហ្វចំណុច (Scatterplot)។',
          },
          {
            en: '2.2 Quantitative/Ordinal vs Quantitative/Ordinal: Spearman’s Rank Correlation (ρ) for non-linear monotonic trends and outliers.',
            km: '2.2 បរិមាណ/លំដាប់ ទល់នឹង បរិមាណ/លំដាប់៖ សហសម្ព័ន្ធចំណាត់ថ្នាក់ Spearman (ρ) សម្រាប់ទំនាក់ទំនងម៉ូណូតូន និងទិន្នន័យមាន Outliers។',
          },
          {
            en: '2.3 Quantitative vs Qualitative: Eta-squared (η²) ANOVA effect size, Conditional Box/Violin plots, and Density plots.',
            km: '2.3 បរិមាណ ទល់នឹង គុណភាព៖ មេគុណ Eta-squared (η²), ក្រាហ្វ Box/Violin តាមលក្ខខណ្ឌក្រុម និងក្រាហ្វដង់ស៊ីតេ។',
          },
          {
            en: '2.4–2.8 Qualitative Pairs & Multivariate Extensions: Treemaps, Stacked/Grouped Bars, Chi-Square (χ²) Test, Cramér’s V, Color/Shape/Size encodings, Time Series, and Plotly Animations.',
            km: '2.4–2.8 គុណភាពទល់នឹងគុណភាព និងការពង្រីកបន្ថែម៖ ក្រាហ្វ Treemap, ក្រាហ្វសសរត្រួត/ផ្តុំ, តេស្ត Chi-Square (χ²), Cramér’s V, ការប្រើពណ៌/រូបរាង/ទំហំ, ទិន្នន័យតាមពេលវេលា និងក្រាហ្វមានចលនា។',
          },
        ],
        callout: {
          en: 'Structured Progression: We always begin by defining the mathematical indicator, testing its properties on concrete numbers, and then validating the insight visually.',
          km: 'លំដាប់នៃការសិក្សា៖ យើងតែងតែចាប់ផ្តើមដោយឱ្យនិយមន័យរូបមន្តគណិតវិទ្យា គណនាលើតួលេខជាក់ស្តែង រួចផ្ទៀងផ្ទាត់អត្ថន័យរបស់វាតាមរយៈក្រាហ្វ។',
        },
      },
      deepDiveExplanation: {
        en: 'Section 2 constitutes the core analytical body of the presentation (Slides 8 to 40). Rather than presenting charts as purely aesthetic graphics, this curriculum roots every visualization in statistical estimation theory. Each sub-section answers three fundamental questions: (1) How do we summarize the relationship between $X$ and $Y$ into a single mathematical number (an indicator)? (2) What are the boundary conditions, scale sensitivities, and failure modes of that indicator (e.g., unit dependence in covariance, outlier sensitivity in Pearson $r$ and $\\eta^2$, sample-size bias in Cramér’s $V$)? and (3) Which specific visual geometry reveals the exact structure that the indicator summarizes?',
        km: 'ជំពូកទី ២ គឺជាខ្លឹមសារស្នូលនៃបទបង្ហាញទាំងមូល (ចាប់ពីស្លាយទី ៨ ដល់ទី ៤០)។ ជំនួសឱ្យការបង្ហាញក្រាហ្វត្រឹមតែជារូបភាពលម្អ កម្មវិធីសិក្សានេះភ្ជាប់រាល់ក្រាហ្វទាំងអស់ទៅនឹងទ្រឹស្តីស្ថិតិយ៉ាងម៉ត់ចត់។ ផ្នែករងនីមួយៗឆ្លើយតបនឹងសំណួរគ្រឹះចំនួន ៣៖ (១) តើយើងអាចសង្ខេបទំនាក់ទំនងរវាងអថេរ $X$ និង $Y$ ទៅជាតួលេខគណិតវិទ្យាតែមួយ (សូចនាករ/Indicator) ដោយរបៀបណា? (២) តើអ្វីទៅជាដែនកំណត់ និងចំណុចខ្សោយនៃសូចនាករនោះ (ឧទាហរណ៍៖ ភាពអាស្រ័យលើខ្នាតក្នុង Covariance, ភាពរសើបនឹង Outliers ក្នុង Pearson $r$ និង $\\eta^2$, ឬភាពលម្អៀងក្នុង Cramér’s $V$)? និង (៣) តើក្រាហ្វប្រភេទណាដែលបង្ហាញរចនាសម្ព័ន្ធទិន្នន័យបានត្រូវគ្នាបំផុតជាមួយសូចនាករនោះ?',
      },
      practicalApplication: {
        scenarioTitle: {
          en: 'Standardizing BI Report Sections by Statistical Pairing Type',
          km: 'ការរៀបចំផ្នែកនៃរបាយការណ៍ BI តាមប្រភេទនៃការផ្គូផ្គងស្ថិតិ',
        },
        description: {
          en: 'Enterprise data teams organize their Looker Studio report pages following this exact sequence: Continuous KPI Drivers first, Categorical Segment Breakdowns second, Cross-Segment Contingency third, and Longitudinal Time-Series Trends fourth.',
          km: 'ក្រុមអ្នកវិភាគទិន្នន័យអាជីពរៀបចំទំព័ររបាយការណ៍ Looker Studio របស់ពួកគេតាមលំដាប់លំដោយនេះ៖ ទំព័រទី ១ ផ្តោតលើសហសម្ព័ន្ធនៃតួលេខហិរញ្ញវត្ថុ ទំព័រទី ២ ផ្តោតលើការប្រៀបធៀបតាមក្រុមអតិថិជន ទំព័រទី ៣ ផ្តោតលើតារាងខ្វែងរវាងប្រភេទសេវាកម្ម និងទំព័រទី ៤ ផ្តោតលើនិន្នាការតាមពេលវេលា។',
        },
        impactMetric: 'Covers 8 distinct bivariate and multivariate analytical modules',
      },
    },
  },

  // ==========================================
  // SLIDE 9
  // ==========================================
  {
    pageNumber: 9,
    slideFooterNumber: '9',
    sectionTag: {
      en: '2.1 Quantitative vs Quantitative — Covariance Foundation',
      km: '2.1 បរិមាណ ទល់នឹង បរិមាណ — មូលដ្ឋានគ្រឹះនៃកូវ៉ារ្យង់ (Covariance)',
    },
    simulatorMode: 'tips_covariance_scatter',
    pageIdentity: {
      titleEn: '2.1 Quantitative Vs Quantitative — Indicator: Covariance Definition & Formula',
      titleKm: '2.1 បរិមាណ ទល់នឹង បរិមាណ — សូចនាករ៖ និយមន័យ និងរូបមន្តនៃកូវ៉ារ្យង់ (Covariance)',
      themeName: {
        en: 'Mathematical Derivation & Scatterplot Studio',
        km: 'ផ្ទៃបង្ហាញរូបមន្តគណិតវិទ្យា និងក្រាហ្វចំណុច (Scatterplot)',
      },
      canvasBgHex: '#F8FAFC',
      surfaceCardHex: '#FFFFFF',
      primaryAccentHex: '#2563EB',
      secondaryAccentHex: '#DC2626',
      textPrimaryHex: '#0F172A',
      hierarchyRationale: {
        en: 'Uses #2563EB Royal Blue for univariate foundations (Mean, Variance, Std Dev) and highlights the bivariate Covariance formula in #DC2626 Crimson Red exactly as shown on Slide 9.',
        km: 'ប្រើពណ៌ខៀវ (#2563EB) សម្រាប់រូបមន្តមូលដ្ឋានអថេរទោល (មធ្យម វ៉ារ្យង់ គម្លាតស្តង់ដារ) និងគូសបញ្ជាក់រូបមន្តកូវ៉ារ្យង់ទ្វេអថេរដោយពណ៌ក្រហម (#DC2626) ដូចក្នុងស្លាយទី ៩។',
      },
    },
    wireframe: {
      headerSection: {
        en: 'Top Header: "2.1 Quantitative Vs Quantitative — Indicator: Covariance / សូចនាករ៖ កូវ៉ារ្យង់".',
        km: 'ផ្នែកខាងលើ៖ ចំណងជើង «2.1 Quantitative Vs Quantitative — Indicator: Covariance / សូចនាករ៖ កូវ៉ារ្យង់»។',
      },
      leftZone: {
        en: 'Left Column (52% width): Step-by-step mathematical progression from a single quantitative column X = [x₁, ..., xₙ] (Mean x̄, Variance V(X), Std Dev σ̂) to two quantitative columns X and Y: Cov(X,Y).',
        km: 'ផ្នែកខាងឆ្វេង (ទទឹង ៥២%)៖ ការវិវត្តន៍រូបមន្តគណិតវិទ្យាជាជំហានៗ ចាប់ពីជួរឈរបរិមាណតែមួយ X (មធ្យមភាគ x̄, វ៉ារ្យង់ V(X), គម្លាតស្តង់ដារ σ̂) រហូតដល់ជួរឈរបរិមាណពីរ X និង Y គឺ Cov(X,Y)។',
      },
      rightZone: {
        en: 'Right Column (48% width): Top = Scatterplot "Tips vs total bill & gender" (`total_bill` on X-axis 0–50, `tip` on Y-axis 1–10, colored by `sex`); Bottom = 3-row sample data table (rows 0, 1, 2).',
        km: 'ផ្នែកខាងស្តាំ (ទទឹង ៤៨%)៖ ខាងលើ = ក្រាហ្វ Scatterplot «Tips vs total bill & gender» និងខាងក្រោម = តារាងទិន្នន័យគំរូ ៣ ជួរដេកដំបូង (ជួរទី 0, 1, 2)។',
      },
      bottomOrTopBar: {
        en: 'Bottom interactive cross-product inspector showing how (xᵢ - x̄)(yᵢ - ȳ) is computed for each restaurant table.',
        km: 'របារខាងក្រោមបង្ហាញពីការគណនាផលគុណគម្លាត (xᵢ - x̄)(yᵢ - ȳ) សម្រាប់វិក្កយបត្រភោជនីយដ្ឋាននីមួយៗ។',
      },
      gridAllocation: '6 Columns Left (Mathematical Equations) + 6 Columns Right (Scatterplot & Data Sample)',
    },
    chartMetricsMath: {
      scorecards: [
        {
          label: { en: 'Mean Total Bill (x̄)', km: 'មធ្យមភាគនៃវិក្កយបត្រសរុប (x̄)' },
          value: '$19.79',
          metricField: 'AVG(total_bill)',
          aggregation: 'Average',
          comparisonNote: { en: 'Sample size n = 244 restaurant bills', km: 'ទំហំគំរូសរុប n = 244 វិក្កយបត្រ' },
        },
        {
          label: { en: 'Mean Tip Amount (ȳ)', km: 'មធ្យមភាគនៃប្រាក់ធីប (ȳ)' },
          value: '$3.00',
          metricField: 'AVG(tip)',
          aggregation: 'Average',
          comparisonNote: { en: 'Std Dev of Tip: $1.38', km: 'គម្លាតស្តង់ដារនៃប្រាក់ធីប៖ $1.38' },
        },
        {
          label: { en: 'Sample Covariance Cov(bill, tip)', km: 'កូវ៉ារ្យង់គំរូ Cov(bill, tip)' },
          value: '+8.32 ($²)',
          metricField: 'COVAR_SAMP(total_bill, tip)',
          aggregation: 'Sample Covariance',
          comparisonNote: { en: 'Positive upward co-movement', km: 'មានទំនោរកើនឡើងស្របទិសគ្នា (វិជ្ជមាន)' },
        },
      ],
      charts: [
        {
          chartType: {
            en: 'Looker Studio Scatter Chart (Tips vs Total Bill by Sex)',
            km: 'ក្រាហ្វចំណុច (Scatter Chart)៖ ប្រាក់ធីប ទល់នឹង វិក្កយបត្រសរុប បែងចែកតាមភេទ',
          },
          dimensions: ['record_id'],
          breakdownDimension: 'sex',
          metrics: ['total_bill (X-axis)', 'tip (Y-axis)'],
          sorting: 'total_bill ASC',
          stylingNote: {
            en: 'Color points by `sex`: Female = #3B82F6 (Blue), Male = #EF4444 (Red/Coral), matching the exact Plotly legend on Slide 9.',
            km: 'កំណត់ពណ៌ចំណុចតាមភេទ (`sex`)៖ ស្រ្តី (Female) = ពណ៌ខៀវ (#3B82F6), បុរស (Male) = ពណ៌ក្រហមទឹកក្រូច (#EF4444) ដូចក្នុងស្លាយទី ៩។',
          },
        },
        {
          chartType: {
            en: 'Looker Studio Raw Record Preview Table (Rows 0–2)',
            km: 'តារាងបង្ហាញទិន្នន័យដើម (ជួរទី 0 ដល់ទី 2)',
          },
          dimensions: ['row_index', 'sex'],
          metrics: ['tip', 'total_bill'],
          sorting: 'row_index ASC',
          stylingNote: {
            en: 'Row 0: tip=1.01, total_bill=16.99, sex=Female; Row 1: tip=1.66, total_bill=10.34, sex=Male; Row 2: tip=3.50, total_bill=21.01, sex=Male.',
            km: 'បង្ហាញជួរដេកគំរូទាំង ៣ ដូចក្នុងស្លាយទី ៩ ដើម្បីឱ្យនិស្សិតផ្ទៀងផ្ទាត់តួលេខជាក់ស្តែង។',
          },
        },
      ],
      formulas: [
        {
          title: { en: 'Univariate Mean, Variance & Standard Deviation of X', km: 'រូបមន្តមធ្យមភាគ វ៉ារ្យង់ និងគម្លាតស្តង់ដារនៃអថេរ X' },
          equation: 'x̄ = (1 / n) ∑_{i=1}^{n} x_i ,    V(X) = (1 / (n - 1)) ∑_{i=1}^{n} (x_i - x̄)² ,    σ̂ = √V(X)',
          variables: [
            { symbol: 'X = [x₁, x₂, ..., xₙ]', en: 'A quantitative column containing n numerical observations', km: 'ជួរឈរទិន្នន័យបរិមាណដែលមានតម្លៃលេខចំនួន n' },
            { symbol: 'x̄', en: 'Sample arithmetic mean of column X', km: 'មធ្យមភាគគំរូនៃជួរឈរ X' },
            { symbol: 'V(X)', en: 'Unbiased sample variance of X (divided by n - 1 degrees of freedom)', km: 'វ៉ារ្យង់គំរូមិនលម្អៀងនៃ X (ចែកនឹងកម្រិតសេរីភាព n - 1)' },
            { symbol: 'σ̂', en: 'Estimated standard deviation (square root of sample variance)', km: 'គម្លាតស្តង់ដារប៉ាន់ស្មាន (ឫសការ៉េនៃវ៉ារ្យង់គំរូ)' },
          ],
        },
        {
          title: { en: 'Bivariate Sample Covariance Between X and Y', km: 'រូបមន្តកូវ៉ារ្យង់គំរូរវាងអថេរ X និង Y' },
          equation: 'Cov(X, Y) = (1 / (n - 1)) ∑_{i=1}^{n} (x_i - x̄)(y_i - ȳ)',
          variables: [
            { symbol: 'Y = [y₁, y₂, ..., yₙ]', en: 'A second quantitative column paired observation-by-observation with X', km: 'ជួរឈរទិន្នន័យបរិមាណទីពីរ ដែលផ្គូផ្គងតាមជួរដេកនីមួយៗជាមួយ X' },
            { symbol: 'ȳ', en: 'Sample arithmetic mean of column Y', km: 'មធ្យមភាគគំរូនៃជួរឈរ Y' },
            { symbol: '(x_i - x̄)(y_i - ȳ)', en: 'Cross-deviation product for observation i (positive if both are above or both below their means)', km: 'ផលគុណនៃគម្លាតពីមធ្យមភាគសម្រាប់ការអង្កេតទី i (វិជ្ជមានប្រសិនបើទាំងពីរខ្ពស់ជាង ឬទាបជាងមធ្យមភាគដូចគ្នា)' },
            { symbol: 'Cov(X, Y)', en: 'Sample covariance measuring joint linear co-variability in units of (Unit of X × Unit of Y)', km: 'កូវ៉ារ្យង់គំរូ ដែលវាស់វែងការប្រែប្រួលរួមគ្នា គិតជាខ្នាត (ខ្នាត X × ខ្នាត Y)' },
          ],
        },
      ],
    },
    controls: [
      {
        controlType: { en: 'Drop-down List Control (Gender Filter `sex`)', km: 'តម្រងជ្រើសរើសភេទ (`sex`: All / Female / Male)' },
        field: 'sex',
        defaultState: 'All (Female & Male)',
        purpose: {
          en: 'Lets users filter the Tips scatterplot by gender to see whether the positive covariance between bill size and tip holds across both groups.',
          km: 'អនុញ្ញាតឱ្យអ្នកសិក្សាច្រោះមើលក្រាហ្វតាមភេទ ដើម្បីពិនិត្យថាតើកូវ៉ារ្យង់វិជ្ជមានរវាងទឹកប្រាក់វិក្កយបត្រ និងប្រាក់ធីប កើតឡើងលើគ្រប់ក្រុមដែរឬទេ។',
        },
      },
    ],
    expandedContent: {
      onScreenText: {
        heading: {
          en: 'From Univariate Variance V(X) to Bivariate Covariance Cov(X, Y)',
          km: 'ពីវ៉ារ្យង់អថេរទោល V(X) ឆ្ពោះទៅកាន់កូវ៉ារ្យង់ទ្វេអថេរ Cov(X, Y)',
        },
        bullets: [
          {
            en: 'If X = [x₁, x₂, ..., xₙ] is a quantitative column: Mean x̄ measures center; Variance V(X) and Standard Deviation σ̂ measure spread.',
            km: 'ប្រសិនបើ X = [x₁, x₂, ..., xₙ] គឺជាជួរឈរបរិមាណ៖ មធ្យមភាគ x̄ វាស់ទីតាំងកណ្តាល ចំណែកវ៉ារ្យង់ V(X) និងគម្លាតស្តង់ដារ σ̂ វាស់កម្រិតនៃការពង្រាយ។',
          },
          {
            en: 'If Y = [y₁, y₂, ..., yₙ] is another quantitative column, the Covariance replaces (xᵢ - x̄)² with the cross-product (xᵢ - x̄)(yᵢ - ȳ).',
            km: 'ប្រសិនបើ Y = [y₁, y₂, ..., yₙ] គឺជាជួរឈរបរិមាណមួយទៀត នោះរូបមន្តកូវ៉ារ្យង់ជំនួសតួ (xᵢ - x̄)² ដោយផលគុណគម្លាត (xᵢ - x̄)(yᵢ - ȳ)។',
          },
          {
            en: 'Notice that Variance is simply the Covariance of a variable with itself: V(X) = Cov(X, X).',
            km: 'សូមសង្កេតថា វ៉ារ្យង់ V(X) គឺគ្រាន់តែជាកូវ៉ារ្យង់នៃអថេរមួយជាមួយខ្លួនវាប៉ុណ្ណោះ គឺ V(X) = Cov(X, X)។',
          },
        ],
        callout: {
          en: 'Mathematical Intuition: When a customer has an above-average bill (xᵢ > x̄) AND leaves an above-average tip (yᵢ > ȳ), the product (xᵢ - x̄)(yᵢ - ȳ) is positive (+ × + = +). When both are below average, (- × - = +) is ALSO positive!',
          km: 'ការយល់ដឹងផ្នែកគណិតវិទ្យា៖ នៅពេលអតិថិជនម្នាក់មានវិក្កយបត្រខ្ពស់ជាងមធ្យមភាគ (xᵢ > x̄) ហើយឱ្យប្រាក់ធីបខ្ពស់ជាងមធ្យមភាគដែរ (yᵢ > ȳ) ផលគុណ (xᵢ - x̄)(yᵢ - ȳ) គឺវិជ្ជមាន (+ × + = +)។ ហើយនៅពេលទាំងពីរទាបជាងមធ្យមភាគដូចគ្នា ផលគុណ (- × - = +) ក៏នៅតែវិជ្ជមានដែរ!',
        },
      },
      deepDiveExplanation: {
        en: 'Slide 9 builds deep mathematical intuition by deriving Covariance directly from Variance. In univariate statistics, sample variance $V(X) = \\frac{1}{n-1}\\sum_{i=1}^n (x_i - \\bar{x})(x_i - \\bar{x})$ averages the squared deviations of $X$ from its own mean $\\bar{x}$ (using Bessel’s correction $n-1$ so the sample estimator is unbiased for the population variance). When a second quantitative variable $Y$ enters the analysis, we replace the second factor $(x_i - \\bar{x})$ with $(y_i - \\bar{y})$, yielding $\\text{Cov}(X,Y) = \\frac{1}{n-1}\\sum_{i=1}^n (x_i - \\bar{x})(y_i - \\bar{y})$. Geometrically, if we draw a vertical line at $\\bar{x}$ and a horizontal line at $\\bar{y}$ on the scatterplot of `total_bill` vs `tip`, the plane divides into four quadrants: Quadrant I ($x_i > \\bar{x}, y_i > \\bar{y}$, positive product), Quadrant III ($x_i < \\bar{x}, y_i < \\bar{y}$, positive product), and Quadrants II & IV (where one variable is above its mean and the other is below, yielding negative products). Because most restaurant bills lie in Quadrants I and III, the positive products dominate the sum!',
        km: 'ស្លាយទី ៩ កសាងមូលដ្ឋានគណិតវិទ្យាដោយទាញរូបមន្តកូវ៉ារ្យង់ (Covariance) ចេញពីរូបមន្តវ៉ារ្យង់ (Variance) ដោយផ្ទាល់។ នៅក្នុងស្ថិតិអថេរទោល វ៉ារ្យង់គំរូ $V(X) = \\frac{1}{n-1}\\sum_{i=1}^n (x_i - \\bar{x})(x_i - \\bar{x})$ គណនាមធ្យមភាគនៃការ៉េគម្លាតរបស់ $X$ ពីមធ្យមភាគ $\\bar{x}$ របស់វា (ដោយចែកនឹង $n-1$ ដើម្បីឱ្យការប៉ាន់ស្មានមិនលម្អៀង)។ នៅពេលមានអថេរបរិមាណទីពីរ $Y$ ចូលមក យើងជំនួសកត្តាទីពីរ $(x_i - \\bar{x})$ ដោយ $(y_i - \\bar{y})$ ដែលបង្កើតបានជារូបមន្ត $\\text{Cov}(X,Y) = \\frac{1}{n-1}\\sum_{i=1}^n (x_i - \\bar{x})(y_i - \\bar{y})$។ តាមន័យធរណីមាត្រ ប្រសិនបើយើងគូសបន្ទាត់ឈរត្រង់មធ្យមភាគ $\\bar{x}$ និងបន្ទាត់ដេកត្រង់មធ្យមភាគ $\\bar{y}$ នៅលើក្រាហ្វ Scatterplot នៃ `total_bill` និង `tip` ផ្ទៃក្រាហ្វនឹងត្រូវចែកជា ៤ កាត្រង់៖ កាត្រង់ទី I និងទី III ផ្តល់ផលគុណវិជ្ជមាន ចំណែកកាត្រង់ទី II និងទី IV ផ្តល់ផលគុណអវិជ្ជមាន។ ដោយសារទិន្នន័យភោជនីយដ្ឋានភាគច្រើនស្ថិតនៅក្នុងកាត្រង់ទី I និងទី III ផលបូកសរុបទើបមានតម្លៃវិជ្ជមាន!',
      },
      practicalApplication: {
        scenarioTitle: {
          en: 'Hospitality Revenue & Staff Tipping Analytics in Siem Reap & Phnom Penh',
          km: 'ការវិភាគចំណូលភោជនីយដ្ឋាន និងប្រាក់ធីបបុគ្គលិកនៅសៀមរាប និងភ្នំពេញ',
        },
        description: {
          en: 'Restaurant chains use bivariate scatterplots of Total Bill vs Tip broken down by customer or server attributes to forecast staff gratuities and identify high-value dining tables where service quality drives extra tipping.',
          km: 'បណ្តាញភោជនីយដ្ឋានប្រើប្រាស់ក្រាហ្វចំណុចនៃទឹកប្រាក់វិក្កយបត្រសរុប ទល់នឹង ប្រាក់ធីប ដើម្បីព្យាករណ៍ប្រាក់ឧបត្ថម្ភបន្ថែមរបស់បុគ្គលិក និងវាយតម្លៃគុណភាពសេវាកម្មតាមតុនីមួយៗ។',
        },
        impactMetric: 'Cov(total_bill, tip) = +8.32 confirms positive linear co-movement',
      },
    },
  },

  // ==========================================
  // SLIDE 10
  // ==========================================
  {
    pageNumber: 10,
    slideFooterNumber: '10',
    sectionTag: {
      en: '2.1 Quantitative vs Quantitative — Covariance Direction & Sign',
      km: '2.1 បរិមាណ ទល់នឹង បរិមាណ — ទិសដៅ និងសញ្ញានៃកូវ៉ារ្យង់',
    },
    simulatorMode: 'tips_covariance_scatter',
    pageIdentity: {
      titleEn: 'Indicator: Covariance — Direction of Linear Relationship (Cov = 8.32)',
      titleKm: 'សូចនាករ៖ កូវ៉ារ្យង់ — ការកំណត់ទិសដៅនៃទំនាក់ទំនងលីនេអ៊ែរ (Cov = 8.32)',
      themeName: {
        en: 'Interactive Covariance Sign & Slope Explorer',
        km: 'ផ្ទៃពិសោធន៍សញ្ញា និងទិសដៅនៃកូវ៉ារ្យង់',
      },
      canvasBgHex: '#F8FAFC',
      surfaceCardHex: '#FFFFFF',
      primaryAccentHex: '#2563EB',
      secondaryAccentHex: '#DC2626',
      textPrimaryHex: '#0F172A',
      hierarchyRationale: {
        en: 'Highlights "Positive: change in the same direction" in #2563EB Blue and "Negative: change in opposite direction" in #DC2626 Red, annotated directly with `Cov = 8.32` on the Tips scatterplot.',
        km: 'គូសបញ្ជាក់ពាក្យ «Positive / វិជ្ជមាន៖ ប្រែប្រួលក្នុងទិសដៅដូចគ្នា» ដោយពណ៌ខៀវ (#2563EB) និង «Negative / អវិជ្ជមាន៖ ប្រែប្រួលក្នុងទិសដៅផ្ទុយគ្នា» ដោយពណ៌ក្រហម (#DC2626) អមដោយតម្លៃ `Cov = 8.32` នៅលើក្រាហ្វ។',
      },
    },
    wireframe: {
      headerSection: {
        en: 'Top Header: "Indicator: Covariance / សូចនាករ៖ កូវ៉ារ្យង់" with AMS emblem.',
        km: 'ផ្នែកខាងលើ៖ ចំណងជើង «Indicator: Covariance / សូចនាករ៖ កូវ៉ារ្យង់» អមដោយនិមិត្តសញ្ញា AMS។',
      },
      leftZone: {
        en: 'Left Zone (50% width): Covariance Equation + Directionality Rules (Positive vs Negative) + Interactive Coordinate Grid Widget (`Cov: 3.4023434` on [-10, 10] axes) showing how rotating a point cloud changes covariance.',
        km: 'ផ្នែកខាងឆ្វេង (ទទឹង ៥០%)៖ រូបមន្តកូវ៉ារ្យង់ + វិធានទិសដៅ (វិជ្ជមាន និងអវិជ្ជមាន) + ក្រាហ្វអន្តរកម្មខាងក្រោម (`Cov: 3.4023434`) ដែលបង្ហាញពីការប្រែប្រួលកូវ៉ារ្យង់នៅពេលបង្វិលទិសដៅទិន្នន័យ។',
      },
      rightZone: {
        en: 'Right Zone (50% width): Scatterplot "Tips vs total bill & gender" with on-chart callout `Cov = 8.32` + Expanded 5-row data table (rows 0 to 4).',
        km: 'ផ្នែកខាងស្តាំ (ទទឹង ៥០%)៖ ក្រាហ្វ Scatterplot «Tips vs total bill & gender» ដែលមានស្លាក `Cov = 8.32` នៅលើក្រាហ្វ និងតារាងទិន្នន័យពង្រីកដល់ ៥ ជួរដេក (ជួរទី 0 ដល់ទី 4)។',
      },
      bottomOrTopBar: {
        en: 'Bottom limitation note explaining why raw covariance magnitude (8.32 vs 3.40) cannot be compared across different measurement units.',
        km: 'របារពន្យល់ខាងក្រោមអំពីមូលហេតុដែលតម្លៃដាច់ខាតនៃកូវ៉ារ្យង់ (8.32 ទល់នឹង 3.40) មិនអាចយកមកប្រៀបធៀបកម្រិតខ្លាំងខ្សោយឆ្លងខ្នាតរង្វាស់ខុសគ្នាបាន។',
      },
      gridAllocation: '6 Columns Left (Sign Rules & Interactive Grid) + 6 Columns Right (Annotated Tips Scatter & 5-Row Table)',
    },
    chartMetricsMath: {
      scorecards: [
        {
          label: { en: 'Tips Dataset Covariance', km: 'កូវ៉ារ្យង់នៃទិន្នន័យប្រាក់ធីប' },
          value: 'Cov = 8.32',
          metricField: 'COVAR_SAMP(total_bill, tip)',
          aggregation: 'Sample Covariance',
          comparisonNote: { en: 'Positive linear tendency (+)', km: 'ទំនោរលីនេអ៊ែរវិជ្ជមាន (+)' },
        },
        {
          label: { en: 'Interactive Grid Covariance', km: 'កូវ៉ារ្យង់នៃក្រាហ្វពិសោធន៍' },
          value: 'Cov = 3.4023',
          metricField: 'COVAR_SAMP(x_sim, y_sim)',
          aggregation: 'Sample Covariance',
          comparisonNote: { en: 'Upward slope across [-10, 10] domain', km: 'មេគុណប្រាប់ទិសកើនឡើងក្នុងចន្លោះ [-10, 10]' },
        },
      ],
      charts: [
        {
          chartType: {
            en: 'Annotated Scatter Chart with `Cov = 8.32` Overlay & 5-Row Sample Table',
            km: 'ក្រាហ្វចំណុច (Scatter Chart) ភ្ជាប់ជាមួយស្លាក `Cov = 8.32` និងតារាងទិន្នន័យ ៥ ជួរដេក',
          },
          dimensions: ['record_id', 'sex'],
          metrics: ['total_bill', 'tip'],
          sorting: 'record_id ASC',
          stylingNote: {
            en: 'Includes Rows 0 to 4 in the companion table: Row 3 (tip=3.31, total_bill=23.68, Male) and Row 4 (tip=3.61, total_bill=24.59, Female).',
            km: 'បន្ថែមជួរដេកទី 3 (tip=3.31, total_bill=23.68, Male) និងជួរដេកទី 4 (tip=3.61, total_bill=24.59, Female) ទៅក្នុងតារាងដូចក្នុងស្លាយទី ១០។',
          },
        },
      ],
      formulas: [
        {
          title: { en: 'Sign Interpretation & Scale Property of Covariance', km: 'ការបកស្រាយសញ្ញា និងលក្ខណៈខ្នាតនៃកូវ៉ារ្យង់' },
          equation: 'Cov(X, Y) > 0  ⇒  Same Direction (↗) ,    Cov(X, Y) < 0  ⇒  Opposite Direction (↘) ,    Cov(aX, bY) = a · b · Cov(X, Y)',
          variables: [
            { symbol: 'Cov(X, Y) > 0', en: 'Positive covariance: as X increases, Y tends to increase linearly', km: 'កូវ៉ារ្យង់វិជ្ជមាន៖ នៅពេល X កើនឡើង Y មានទំនោរកើនឡើងដែរ' },
            { symbol: 'Cov(X, Y) < 0', en: 'Negative covariance: as X increases, Y tends to decrease linearly', km: 'កូវ៉ារ្យង់អវិជ្ជមាន៖ នៅពេល X កើនឡើង Y មានទំនោរថយចុះទៅវិញ' },
            { symbol: 'a, b', en: 'Unit scaling constants showing why Covariance changes when units change (e.g., USD to KHR)', km: 'មេគុណប្តូរខ្នាត ដែលបង្ហាញថាហេតុអ្វីកូវ៉ារ្យង់ប្រែប្រួលនៅពេលយើងប្តូរខ្នាតរង្វាស់ (ឧ. ពីដុល្លារ ទៅរៀល)' },
          ],
        },
      ],
    },
    controls: [
      {
        controlType: { en: 'Metric Slider Control (Slope / Angle Simulator)', km: 'របាររំកិលកែតម្រូវទិសដៅទិន្នន័យ (Slope Slider)' },
        field: 'simulated_slope',
        defaultState: '+0.35 (Cov = 3.4023434)',
        purpose: {
          en: 'Replicates the interactive bottom-left applet on Slide 10 so students can drag the point cloud slope from positive (+) to zero (0) to negative (-) and watch Cov(X,Y) update live.',
          km: 'ត្រាប់តាមក្រាហ្វអន្តរកម្មនៅផ្នែកខាងឆ្វេងខាងក្រោមនៃស្លាយទី ១០ ដើម្បីឱ្យនិស្សិតអាចអូសប្តូរទិសដៅបន្ទាត់ពីវិជ្ជមាន (+) ទៅសូន្យ (0) និងអវិជ្ជមាន (-) ហើយមើលតម្លៃ Cov(X,Y) ផ្លាស់ប្តូរភ្លាមៗ។',
        },
      },
    ],
    expandedContent: {
      onScreenText: {
        heading: {
          en: 'Interpreting Covariance: Direction of Linear Tendency',
          km: 'ការបកស្រាយតម្លៃកូវ៉ារ្យង់៖ ទិសដៅនៃទំនាក់ទំនងលីនេអ៊ែរ',
        },
        bullets: [
          {
            en: 'Covariance determines the tendency / direction of the linear relationship between quantitative columns X and Y.',
            km: 'កូវ៉ារ្យង់កំណត់នូវទំនោរ ឬទិសដៅនៃទំនាក់ទំនងលីនេអ៊ែររវាងជួរឈរបរិមាណ X និង Y។',
          },
          {
            en: 'Positive (Cov > 0): X and Y change in the same direction (e.g., Tips vs Total Bill has Cov = 8.32).',
            km: 'វិជ្ជមាន (Cov > 0)៖ X និង Y ប្រែប្រួលក្នុងទិសដៅដូចគ្នា (ឧទាហរណ៍៖ ប្រាក់ធីប និងវិក្កយបត្រសរុប មាន Cov = 8.32)។',
          },
          {
            en: 'Negative (Cov < 0): X and Y change in opposite directions (as X rises, Y falls).',
            km: 'អវិជ្ជមាន (Cov < 0)៖ X និង Y ប្រែប្រួលក្នុងទិសដៅផ្ទុយគ្នា (នៅពេល X កើនឡើង Y ថយចុះ)។',
          },
        ],
        callout: {
          en: 'Why Covariance Alone Is Not Enough: In the bottom-left graph, Cov = 3.40 even though the points form a much tighter line than Tips vs Bill (Cov = 8.32)! Why? Because Covariance depends on the scale of X and Y.',
          km: 'ហេតុអ្វីកូវ៉ារ្យង់តែមួយមុខមិនគ្រប់គ្រាន់៖ នៅក្នុងក្រាហ្វខាងឆ្វេងផ្នែកខាងក្រោម តម្លៃ Cov = 3.40 ទោះបីជាចំណុចទិន្នន័យរត់ជិតគ្នាជាបន្ទាត់ត្រង់ជាងក្រាហ្វប្រាក់ធីប (Cov = 8.32) ក៏ដោយ! ហេតុអ្វី? ព្រោះកូវ៉ារ្យង់អាស្រ័យលើទំហំខ្នាតរបស់ X និង Y។',
        },
      },
      deepDiveExplanation: {
        en: 'Slide 10 highlights both the utility and the critical flaw of Covariance. Its sign ($+$ or $-$) reliably tells us the directional slope of a linear trend: $\\text{Cov}(\\text{tip}, \\text{total\\_bill}) = 8.32 > 0$ proves an upward trend. However, compare the two graphs on Slide 10: the bottom-left synthetic cloud has points tightly hugging a straight line, yet its covariance is only $3.4023434$, whereas the noisy restaurant scatterplot on the right has a larger covariance of $8.32$. Furthermore, if we converted `total_bill` and `tip` from US Dollars ($1$) to Cambodian Riels ($4,000\\text{ KHR}$), the covariance would multiply by $4,000 \\times 4,000 = 16,000,000$, jumping from $8.32$ to $133,120,000\\text{ KHR}^2$—even though the underlying relationship has not changed at all! To compare strength of linear association on a universal, unit-free scale, we must normalize $\\text{Cov}(X,Y)$ by dividing by the standard deviations $s_X$ and $s_Y$, leading directly to Slide 11 (Pearson Correlation).',
        km: 'ស្លាយទី ១០ បង្ហាញទាំងអត្ថប្រយោជន៍ និងចំណុចខ្វះខាតដ៏សំខាន់នៃកូវ៉ារ្យង់។ សញ្ញារបស់វា ($+$ ឬ $-$) ប្រាប់យើងយ៉ាងច្បាស់អំពីទិសដៅនៃទំនោរលីនេអ៊ែរ៖ $\\text{Cov}(\\text{tip}, \\text{total\\_bill}) = 8.32 > 0$ បញ្ជាក់ពីទំនោរកើនឡើង។ ប៉ុន្តែ សូមប្រៀបធៀបក្រាហ្វទាំងពីរនៅលើស្លាយទី ១០៖ ក្រាហ្វខាងឆ្វេងផ្នែកខាងក្រោមមានចំណុចរត់ជិតគ្នាជាបន្ទាត់ត្រង់យ៉ាងខ្លាំង ប៉ុន្តែមានកូវ៉ារ្យង់ត្រឹមតែ $3.4023434$ ប៉ុណ្ណោះ ខណៈដែលក្រាហ្វប្រាក់ធីបនៅខាងស្តាំដែលមានចំណុចពង្រាយឆ្ងាយពីគ្នា បែរជាមានកូវ៉ារ្យង់ធំជាងគឺ $8.32$។ លើសពីនេះ ប្រសិនបើយើងប្តូរខ្នាតទឹកប្រាក់វិក្កយបត្រ និងប្រាក់ធីបពីដុល្លារអាមេរិក ($1) ទៅជាប្រាក់រៀលខ្មែរ ($4,000 រៀល) នោះតម្លៃកូវ៉ារ្យង់នឹងត្រូវគុណនឹង $4,000 \\times 4,000 = 16,000,000$ ពោលគឺលោតពី $8.32$ ទៅដល់ $133,120,000\\text{ រៀល}^2$ ទោះបីជាទំនាក់ទំនងពិតប្រាកដមិនប្រែប្រួលសោះក៏ដោយ! ហេតុនេះ ដើម្បីវាស់កម្រិតខ្លាំងខ្សោយនៃទំនាក់ទំនងដោយមិនអាស្រ័យលើខ្នាត យើងត្រូវចែក $\\text{Cov}(X,Y)$ នឹងគម្លាតស្តង់ដារ $s_X s_Y$ ដែលនាំយើងទៅកាន់ស្លាយទី ១១ (មេគុណសហសម្ព័ន្ធ Pearson)។',
      },
      practicalApplication: {
        scenarioTitle: {
          en: 'Portfolio Asset Variance-Covariance Matrix in Quantitative Finance',
          km: 'ការប្រើប្រាស់ម៉ាទ្រីសកូវ៉ារ្យង់ក្នុងការគ្រប់គ្រងហានិភ័យផលប័ត្រវិនិយោគហិរញ្ញវត្ថុ',
        },
        description: {
          en: 'In Markowitz portfolio optimization, financial analysts compute the covariance between pairs of stocks or commodities: assets with negative covariance (Cov < 0) hedge each other and reduce total portfolio volatility.',
          km: 'នៅក្នុងការគ្រប់គ្រងហានិភ័យហិរញ្ញវត្ថុ អ្នកវិភាគគណនាកូវ៉ារ្យង់រវាងគូនៃភាគហ៊ុន ឬទ្រព្យសកម្ម៖ ទ្រព្យសកម្មណាដែលមានកូវ៉ារ្យង់អវិជ្ជមាន (Cov < 0) ជួយទប់លំនឹងគ្នា និងកាត់បន្ថយហានិភ័យសរុបនៃផលប័ត្រវិនិយោគ។',
        },
        impactMetric: 'Identifies directional hedging pairs (Cov < 0) vs pro-cyclical pairs (Cov > 0)',
      },
    },
  },

  // ==========================================
  // SLIDE 11
  // ==========================================
  {
    pageNumber: 11,
    slideFooterNumber: '11',
    sectionTag: {
      en: '2.1 Quantitative vs Quantitative — Pearson Correlation Formula',
      km: '2.1 បរិមាណ ទល់នឹង បរិមាណ — រូបមន្តមេគុណសហសម្ព័ន្ធ Pearson (r)',
    },
    simulatorMode: 'pearson_correlation_tips',
    pageIdentity: {
      titleEn: 'Indicator: Pearson Correlation Coefficient (r) — Formula & Predictive Role',
      titleKm: 'សូចនាករ៖ មេគុណសហសម្ព័ន្ធ Pearson (r) — រូបមន្ត និងតួនាទីក្នុងការវិភាគព្យាករណ៍',
      themeName: {
        en: 'Emerald-Bordered Theoretical Specification Card',
        km: 'ផ្ទៃកាតទ្រឹស្តីគណិតវិទ្យា និងការបកស្រាយមេគុណសហសម្ព័ន្ធ',
      },
      canvasBgHex: '#F8FAFC',
      surfaceCardHex: '#FFFFFF',
      primaryAccentHex: '#15803D',
      secondaryAccentHex: '#DC2626',
      textPrimaryHex: '#0F172A',
      hierarchyRationale: {
        en: 'Reflects the green-framed mathematical definition box on Slide 11 with #2563EB Blue for positive correlation, #DC2626 Crimson for negative correlation and the Causation Warning, and #0F172A for predictive modeling takeaways.',
        km: 'រចនាតាមប្រអប់និយមន័យគណិតវិទ្យាក្នុងស្លាយទី ១១ ដោយប្រើពណ៌ខៀវ (#2563EB) សម្រាប់សហសម្ព័ន្ធវិជ្ជមាន ពណ៌ក្រហម (#DC2626) សម្រាប់សហសម្ព័ន្ធអវិជ្ជមាន និងការព្រមានអំពីទំនាក់ទំនងហេតុ-ផល។',
      },
    },
    wireframe: {
      headerSection: {
        en: 'Top Header: "Indicator: Pearson Correlation Coefficient / សូចនាករ៖ មេគុណសហសម្ព័ន្ធ Pearson".',
        km: 'ផ្នែកខាងលើ៖ ចំណងជើង «Indicator: Pearson Correlation Coefficient / សូចនាករ៖ មេគុណសហសម្ព័ន្ធ Pearson»។',
      },
      leftZone: {
        en: 'Main Theoretical Specification Container (Left 65% width): Standardized Pearson equation r = Cov(X,Y)/(s_X s_Y), bounded range [-1, 1] interpretation rules, Predictive Analysis applications, and Causation Warning.',
        km: 'ផ្នែកខាងឆ្វេង (ទទឹង ៦៥%)៖ រូបមន្តស្តង់ដារ r = Cov(X,Y)/(s_X s_Y), ការបកស្រាយតម្លៃក្នុងចន្លោះ [-1, 1], អត្ថប្រយោជន៍សម្រាប់ការវិភាគព្យាករណ៍ និងការព្រមានថា សហសម្ព័ន្ធមិនមែនជាទំនាក់ទំនងហេតុ-ផលឡើយ។',
      },
      rightZone: {
        en: 'Right Analytical Panel (35% width): KPI Gauge/Scorecard showing `Corr(tip, bill) = 0.676` alongside step-by-step normalization from Cov = 8.32.',
        km: 'ផ្នែកខាងស្តាំ (ទទឹង ៣៥%)៖ ផ្ទាំង KPI បង្ហាញលទ្ធផលគណនា `Corr(tip, bill) = 0.676` អមដោយជំហាននៃការបម្លែងពីតម្លៃ Cov = 8.32។',
      },
      bottomOrTopBar: {
        en: 'Bottom interactive Feature Selection simulator illustrating Informative Inputs (high |r| with target) vs Redundant Inputs (multicollinearity between features).',
        km: 'របារខាងក្រោមបង្ហាញពីការជ្រើសរើសអថេរសម្រាប់ម៉ូដែលព្យាករណ៍៖ អថេរមានប្រយោជន៍ (Informative Inputs) និងអថេរជាន់គ្នា (Redundant Inputs)។',
      },
      gridAllocation: '8 Columns Left (Formula, Rules & Predictive Notes) + 4 Columns Right (Tips r = 0.676 Breakdown)',
    },
    chartMetricsMath: {
      scorecards: [
        {
          label: { en: 'Pearson Corr(tip, bill)', km: 'សហសម្ព័ន្ធ Pearson រវាងប្រាក់ធីប និងវិក្កយបត្រ' },
          value: 'r = 0.676',
          metricField: 'CORR(tip, total_bill)',
          aggregation: 'Pearson Correlation',
          comparisonNote: { en: 'Strong positive linear correlation', km: 'សហសម្ព័ន្ធលីនេអ៊ែរវិជ្ជមានកម្រិតខ្លាំងបង្គួរ' },
        },
        {
          label: { en: 'Universal Bounded Domain', km: 'ដែនកំណត់សកលនៃមេគុណ r' },
          value: '[-1.00, +1.00]',
          metricField: 'r_bounds',
          aggregation: 'Theoretical Bound',
          comparisonNote: { en: 'Dimensionless / Unit-free indicator', km: 'សូចនាករគ្មានខ្នាត (មិនអាស្រ័យលើខ្នាតរង្វាស់)' },
        },
      ],
      charts: [
        {
          chartType: {
            en: 'Looker Studio Bullet / Gauge Bar & Linear Regression Trend Scatterplot',
            km: 'ក្រាហ្វរង្វាស់កម្រិតសហសម្ព័ន្ធក្នុងចន្លោះ [-1, 1] និងក្រាហ្វចំណុចភ្ជាប់បន្ទាត់តម្រង់ទិស',
          },
          dimensions: ['record_id'],
          metrics: ['total_bill', 'tip'],
          sorting: 'total_bill ASC',
          stylingNote: {
            en: 'Enable Looker Studio "Show Trendline: Linear" on the scatterplot to visually represent r = 0.676 (R² = 0.457).',
            km: 'បើកមុខងារ «Show Trendline: Linear» នៅក្នុង Looker Studio ដើម្បីបង្ហាញបន្ទាត់លីនេអ៊ែរដែលតំណាងឱ្យតម្លៃ r = 0.676។',
          },
        },
      ],
      formulas: [
        {
          title: { en: 'Pearson Linear Correlation Coefficient (r)', km: 'រូបមន្តមេគុណសហសម្ព័ន្ធលីនេអ៊ែរ Pearson (r)' },
          equation: 'r = r_{X,Y} = [ ∑_{i=1}^{n} (x_i - x̄)(y_i - ȳ) ] / √[ (∑_{i=1}^{n} (x_i - x̄)²) (∑_{i=1}^{n} (y_i - ȳ)²) ] = Cov(X, Y) / (s_X · s_Y)',
          variables: [
            { symbol: 'r = r_{X,Y}', en: 'Pearson correlation coefficient between quantitative columns X and Y, strictly bounded in [-1, 1]', km: 'មេគុណសហសម្ព័ន្ធ Pearson រវាងជួរឈរបរិមាណ X និង Y ដែលស្ថិតនៅចន្លោះ [-1, 1] ជានិច្ច' },
            { symbol: 'Cov(X, Y)', en: 'Sample covariance between X and Y', km: 'កូវ៉ារ្យង់គំរូរវាង X និង Y' },
            { symbol: 's_X, s_Y', en: 'Sample standard deviations of X and Y respectively (note: Slide 11 has a minor typo writing x_i - ȳ in the second denominator sum; the true term is y_i - ȳ)', km: 'គម្លាតស្តង់ដារគំរូនៃ X និង Y រៀងគ្នា (សម្គាល់៖ ក្នុងស្លាយទី ១១ មានកំហុសវាយអក្សរតូចមួយត្រង់ភាគបែងទីពីរដែលដាក់ x_i - ȳ តែតាមពិតគឺ y_i - ȳ)' },
          ],
        },
      ],
    },
    controls: [
      {
        controlType: { en: 'Numeric Threshold Slider (|r| Filter)', km: 'របារកំណត់កម្រិតសហសម្ព័ន្ធអប្បបរមា (|r| Threshold)' },
        field: 'abs_r_threshold',
        defaultState: '|r| >= 0.50',
        purpose: {
          en: 'Helps analysts filter variable pairs for predictive modeling: keeping informative features and flagging redundant collinear inputs.',
          km: 'ជួយអ្នកវិភាគច្រោះយកគូនៃអថេរសម្រាប់បង្កើតម៉ូដែលព្យាករណ៍៖ រក្សាទុកអថេរដែលមានប្រយោជន៍ និងកំណត់សម្គាល់អថេរដែលជាន់គ្នា។',
        },
      },
    ],
    expandedContent: {
      onScreenText: {
        heading: {
          en: 'Pearson Correlation Coefficient (r): Quantifying Linear Tendency',
          km: 'មេគុណសហសម្ព័ន្ធ Pearson (r)៖ ការវាស់វែងកម្រិតនៃទំនាក់ទំនងលីនេអ៊ែរ',
        },
        bullets: [
          {
            en: 'For any pair X & Y, one always has -1 ≤ r ≤ 1.',
            km: 'សម្រាប់គ្រប់គូនៃអថេរ X និង Y គេតែងតែទទួលបាន -1 ≤ r ≤ 1 ជានិច្ច។',
          },
          {
            en: 'r ≈ 1: X & Y are positively linearly correlated (upward trend). r ≈ -1: negatively linearly correlated (downward trend). r ≈ 0: decorrelated (no linear tendency) OR interrupted by noise.',
            km: 'r ≈ 1៖ X និង Y មានសហសម្ព័ន្ធលីនេអ៊ែរវិជ្ជមាន (ទំនោរកើនឡើង)។ r ≈ -1៖ សហសម្ព័ន្ធលីនេអ៊ែរអវិជ្ជមាន (ទំនោរថយចុះ)។ r ≈ 0៖ គ្មានសហសម្ព័ន្ធលីនេអ៊ែរ ឬត្រូវបានរំខានដោយទិន្នន័យរំខាន (Noise)។',
          },
          {
            en: 'For Predictive Analysis: (1) Helps identify informative/useful inputs for linear models; (2) Helps identify redundant (strongly correlated) inputs.',
            km: 'សម្រាប់ការវិភាគព្យាករណ៍៖ (១) ជួយកំណត់រកអថេរធាតុចូលដែលមានប្រយោជន៍សម្រាប់ម៉ូដែលលីនេអ៊ែរ និង (២) ជួយរកឱ្យឃើញអថេរធាតុចូលដែលជាន់គ្នា (មានសហសម្ព័ន្ធខ្លាំងពេករវាងគ្នា)។',
          },
          {
            en: 'WARNING: Correlation indicates tendency/association, NOT a cause-and-effect link! For the restaurant tip example: Corr(tip, bill) = 0.676.',
            km: 'ការព្រមាន៖ សហសម្ព័ន្ធគ្រាន់តែបង្ហាញពីទំនោរទំនាក់ទំនងប៉ុណ្ណោះ ប៉ុន្តែមិនមែនបញ្ជាក់ពីទំនាក់ទំនងហេតុ-ផល (Cause-and-Effect) ឡើយ! សម្រាប់ឧទាហរណ៍ប្រាក់ធីប៖ Corr(tip, bill) = 0.676។',
          },
        ],
        callout: {
          en: 'Correlation ≠ Causation: Ice cream sales and drowning incidents have a high positive Pearson correlation (r > 0.8), not because ice cream causes drowning, but because Summer Temperature is a hidden confounding variable!',
          km: 'សហសម្ព័ន្ធ ≠ ទំនាក់ទំនងហេតុ-ផល៖ ការលក់ការ៉េម និងករណីលង់ទឹកមានសហសម្ព័ន្ធវិជ្ជមានខ្ពស់ (r > 0.8) មិនមែនមកពីការញ៉ាំការ៉េមធ្វើឱ្យលង់ទឹកនោះទេ ប៉ុន្តែដោយសារ «សីតុណ្ហភាពរដូវក្តៅ» គឺជាអថេរលាក់មុខ (Confounding Variable) ដែលជំរុញឱ្យកើនឡើងទាំងពីរ!',
        },
      },
      deepDiveExplanation: {
        en: 'By dividing the sample covariance $\\text{Cov}(X,Y)$ by the product of the sample standard deviations $s_X s_Y$, Karl Pearson created a dimensionless statistic representing the cosine of the angle between the centered vectors $\\tilde{X} = X - \\bar{x}$ and $\\tilde{Y} = Y - \\bar{y}$ in $n$-dimensional Euclidean space. By the Cauchy–Schwarz inequality, $|\\text{Cov}(X,Y)| \\le s_X s_Y$, guaranteeing $-1 \\le r \\le 1$. For the restaurant dataset, $\\text{Cov}(\\text{tip}, \\text{bill}) = 8.32$, $s_{\\text{bill}} = 8.90$, and $s_{\\text{tip}} = 1.38$, so $r = \\frac{8.32}{8.90 \\times 1.38} = 0.676$. In machine learning and predictive analytics, Pearson $r$ plays a dual role: we want high $|r(X_j, Y)|$ between a predictor $X_j$ and the target $Y$ (informative feature), but we want low $|r(X_j, X_k)|$ between two predictors $X_j$ and $X_k$ to avoid multicollinearity (redundant features that destabilize linear regression weights).',
        km: 'តាមរយៈការចែកកូវ៉ារ្យង់គំរូ $\\text{Cov}(X,Y)$ នឹងផលគុណនៃគម្លាតស្តង់ដារគំរូ $s_X s_Y$ លោក Karl Pearson បានបង្កើតសូចនាករគ្មានខ្នាតមួយ ដែលតាមន័យធរណីមាត្រ គឺជាតម្លៃកូស៊ីនុសនៃមុំរវាងវ៉ិចទ័រទិន្នន័យ $\\tilde{X} = X - \\bar{x}$ និង $\\tilde{Y} = Y - \\bar{y}$។ តាមវិសមភាព Cauchy–Schwarz យើងទទួលបាន $-1 \\le r \\le 1$ ជានិច្ច។ សម្រាប់ទិន្នន័យភោជនីយដ្ឋាន ដោយសារ $\\text{Cov}(\\text{tip}, \\text{bill}) = 8.32$, $s_{\\text{bill}} = 8.90$ និង $s_{\\text{tip}} = 1.38$ យើងគណនាបាន $r = \\frac{8.32}{8.90 \\times 1.38} = 0.676$។ នៅក្នុងការបង្កើតម៉ូដែលព្យាករណ៍ (Predictive Analysis) មេគុណ $r$ មានតួនាទីពីរយ៉ាង៖ ទីមួយ យើងចង់បានអថេរព្យាករណ៍ $X_j$ ណាដែលមានតម្លៃ $|r(X_j, Y)|$ ខ្ពស់ជាមួយអថេរគោលដៅ $Y$ និងទីពីរ យើងចង់ជៀសវាងអថេរព្យាករណ៍ពីរ $X_j, X_k$ ដែលមាន $|r(X_j, X_k)|$ ខ្ពស់ពេករវាងគ្នាឯង (Multicollinearity) ព្រោះវាជាព័ត៌មានជាន់គ្នាដែលធ្វើឱ្យម៉ូដែលលីនេអ៊ែរមិនមានស្ថិរភាព។',
      },
      practicalApplication: {
        scenarioTitle: {
          en: 'Feature Screening & Multicollinearity Pruning in Real Estate Valuation',
          km: 'ការជ្រើសរើសអថេរ និងការដកចេញនូវអថេរជាន់គ្នាក្នុងការវាយតម្លៃតម្លៃអចលនទ្រព្យ',
        },
        description: {
          en: 'When predicting house prices in Phnom Penh, "Floor Area in m²" and "Floor Area in ft²" have r = 1.00 (redundant inputs—drop one!), whereas "Distance to CBD" has r = -0.72 with Price (informative negative predictor—keep!).',
          km: 'នៅពេលព្យាករណ៍តម្លៃផ្ទះនៅភ្នំពេញ អថេរ «ក្រឡាផ្ទៃគិតជាម៉ែត្រការ៉េ» និង «ក្រឡាផ្ទៃគិតជាហ្វីតការ៉េ» មាន r = 1.00 រវាងគ្នា (ជាអថេរជាន់គ្នា ត្រូវដកមួយចេញ!) ចំណែកឯ «ចម្ងាយពីកណ្តាលក្រុង» មាន r = -0.72 ជាមួយតម្លៃផ្ទះ (ជាអថេរព្យាករណ៍ដ៏មានប្រយោជន៍ ត្រូវរក្សាទុក!)។',
        },
        impactMetric: 'Corr(tip, bill) = 0.676 explains R² = 45.7% of linear tip variance',
      },
    },
  },

  // ==========================================
  // SLIDE 12
  // ==========================================
  {
    pageNumber: 12,
    slideFooterNumber: '12',
    sectionTag: {
      en: '2.1 Quantitative vs Quantitative — Visual Patterns of Pearson r',
      km: '2.1 បរិមាណ ទល់នឹង បរិមាណ — រូបរាងក្រាហ្វផ្សេងៗនៃមេគុណសហសម្ព័ន្ធ Pearson',
    },
    simulatorMode: 'pearson_pattern_gallery',
    pageIdentity: {
      titleEn: 'Indicator: Pearson Correlation Coefficient — 21 Canonical Visual Examples',
      titleKm: 'សូចនាករ៖ មេគុណសហសម្ព័ន្ធ Pearson — គំរូក្រាហ្វទាំង ២១ នៃទំនាក់ទំនងរវាងអថេរពីរ',
      themeName: {
        en: 'Small-Multiples Pattern Matrix Studio',
        km: 'ផ្ទៃបង្ហាញកម្រងក្រាហ្វប្រៀបធៀប (Small-Multiples Matrix)',
      },
      canvasBgHex: '#F8FAFC',
      surfaceCardHex: '#FFFFFF',
      primaryAccentHex: '#1D4ED8',
      secondaryAccentHex: '#7C3AED',
      textPrimaryHex: '#0F172A',
      hierarchyRationale: {
        en: 'Clean white grid canvas replicating the famous 3-row × 7-column Wikipedia correlation diagram in deep cobalt blue (#1D4ED8) so students can visually compare noise (Row 1), slope invariance (Row 2), and non-linear r = 0 traps (Row 3).',
        km: 'ផ្ទៃពណ៌សស្អាតដែលបង្ហាញតារាងក្រាហ្វ ៣ ជួរដេក × ៧ ជួរឈរ ពណ៌ខៀវចាស់ (#1D4ED8) ដូចក្នុងស្លាយទី ១២ ដើម្បីឱ្យនិស្សិតអាចប្រៀបធៀបកម្រិតនៃការពង្រាយ (ជួរទី ១) ភាពមិនអាស្រ័យលើមេគុណប្រាប់ទិស (ជួរទី ២) និងអន្ទាក់ទំនាក់ទំនងមិនលីនេអ៊ែរ r = 0 (ជួរទី ៣)។',
      },
    },
    wireframe: {
      headerSection: {
        en: 'Top Header: "Indicator: Pearson Correlation Coefficient — Different examples of correlation between two variables".',
        km: 'ផ្នែកខាងលើ៖ ចំណងជើង «Indicator: Pearson Correlation Coefficient — ឧទាហរណ៍ផ្សេងៗនៃសហសម្ព័ន្ធរវាងអថេរពីរ»។',
      },
      leftZone: {
        en: 'Full-Width 3-Row × 7-Column Interactive Small-Multiples Grid: Row 1 (Noise spectrum: 1, 0.8, 0.4, 0, -0.4, -0.8, -1); Row 2 (Slope invariance: 1, 1, 1, undefined horizontal line, -1, -1, -1); Row 3 (Non-linear geometrical shapes all yielding r = 0: W-wave, tilted square, diamond, parabola, X-cross, circle, 4 clusters).',
        km: 'តារាងក្រាហ្វ ៣ ជួរដេក × ៧ ជួរឈរ៖ ជួរទី ១ (កម្រិតពង្រាយ៖ 1, 0.8, 0.4, 0, -0.4, -0.8, -1), ជួរទី ២ (បន្ទាត់ត្រង់គ្រប់មុំ៖ 1, 1, 1, បន្ទាត់ដេកមិនកំណត់, -1, -1, -1) និងជួរទី ៣ (រូបរាងមិនលីនេអ៊ែរទាំង ៧ ដែលសុទ្ធតែមាន r = 0)។',
      },
      rightZone: {
        en: 'Bottom Caption & Interactive Row Inspector explaining the mathematical lesson of each row.',
        km: 'ប្រអប់ពន្យល់ខាងក្រោមដែលបកស្រាយអត្ថន័យគណិតវិទ្យានៃជួរដេកនីមួយៗ។',
      },
      bottomOrTopBar: {
        en: 'Citation Footer: "Fig 1: Correlation examples. Source: https://en.wikipedia.org/wiki/Correlation."',
        km: 'ប្រភពឯកសារយោងខាងក្រោម៖ «Fig 1: Correlation examples. Source: https://en.wikipedia.org/wiki/Correlation.»',
      },
      gridAllocation: '12-Column Small-Multiples Diagnostic Grid (3 Rows × 7 Columns)',
    },
    chartMetricsMath: {
      scorecards: [
        {
          label: { en: 'Row 1: Noise Sensitivity', km: 'ជួរទី ១៖ ឥទ្ធិពលនៃការពង្រាយទិន្នន័យ' },
          value: '+1 → 0 → -1',
          metricField: 'row_1_pattern',
          aggregation: 'Spread vs |r|',
          comparisonNote: { en: '|r| measures tightness around a line', km: '|r| វាស់កម្រិតនៃការប្រមូលផ្តុំជុំវិញបន្ទាត់ត្រង់' },
        },
        {
          label: { en: 'Row 2: Slope Invariance', km: 'ជួរទី ២៖ ភាពមិនអាស្រ័យលើមុំបន្ទាត់' },
          value: 'r = ±1 (or Undef)',
          metricField: 'row_2_pattern',
          aggregation: 'Slope Independence',
          comparisonNote: { en: 'Any noiseless non-flat line has |r| = 1', km: 'គ្រប់បន្ទាត់ត្រង់មិនដេក សុទ្ធតែមាន |r| = 1' },
        },
        {
          label: { en: 'Row 3: Non-Linear Trap', km: 'ជួរទី ៣៖ អន្ទាក់ទំនាក់ទំនងមិនលីនេអ៊ែរ' },
          value: 'r = 0.00',
          metricField: 'row_3_pattern',
          aggregation: 'Zero Linear Trend',
          comparisonNote: { en: 'Strong non-linear patterns still give r = 0!', km: 'ទំនាក់ទំនងកោងច្បាស់លាស់ ប៉ុន្តែផ្តល់តម្លៃ r = 0!' },
        },
      ],
      charts: [
        {
          chartType: {
            en: '3 × 7 Small-Multiples Scatterplot Matrix',
            km: 'កម្រងក្រាហ្វចំណុច ៣ × ៧ (Small-Multiples Scatterplot Grid)',
          },
          dimensions: ['pattern_row', 'pattern_col', 'point_id'],
          metrics: ['x_coord', 'y_coord', 'pearson_r_label'],
          sorting: 'pattern_row ASC, pattern_col ASC',
          stylingNote: {
            en: 'Click any of the 21 sub-plots to inspect why its formula produces that exact Pearson r value.',
            km: 'អាចចុចលើក្រាហ្វណាមួយក្នុងចំណោមក្រាហ្វទាំង ២១ ដើម្បីមើលការពន្យល់លម្អិតពីមូលហេតុដែលវាមានតម្លៃ r បែបនោះ។',
          },
        },
      ],
      formulas: [
        {
          title: { en: 'Slope Invariance & Undefined Flat-Line Singularity (Row 2)', km: 'ភាពមិនអាស្រ័យលើមេគុណប្រាប់ទិស និងករណីបន្ទាត់ដេកមិនកំណត់ (ជួរទី ២)' },
          equation: 'If Y = aX + b (a ≠ 0), then r_{X,Y} = sign(a) = ±1 ;    If Y = c (constant), then s_Y = 0 ⇒ r_{X,Y} = 0 / 0 (Undefined)',
          variables: [
            { symbol: 'a', en: 'Slope of the exact linear relationship Y = aX + b', km: 'មេគុណប្រាប់ទិសនៃបន្ទាត់ត្រង់ Y = aX + b' },
            { symbol: 'sign(a)', en: '+1 if slope a > 0; -1 if slope a < 0 (regardless of how steep or shallow the angle is)', km: '+1 បើមេគុណប្រាប់ទិស a > 0 និង -1 បើ a < 0 (មិនអាស្រ័យលើថាតើបន្ទាត់ចោតខ្លាំង ឬទេរតិចឡើយ)' },
            { symbol: 's_Y = 0', en: 'Zero standard deviation on the middle horizontal line of Row 2, making division by s_X s_Y undefined', km: 'គម្លាតស្តង់ដារស្មើសូន្យនៅលើបន្ទាត់ដេកកណ្តាលនៃជួរទី ២ ដែលធ្វើឱ្យប្រភាគចែកនឹងសូន្យមិនកំណត់ (Undefined)' },
          ],
        },
      ],
    },
    controls: [
      {
        controlType: { en: 'Segmented Row Filter (Row 1 / Row 2 / Row 3)', km: 'ប៊ូតុងជ្រើសរើសជួរដេកដើម្បីសិក្សាលម្អិត (Row 1 / Row 2 / Row 3)' },
        field: 'diagnostic_row',
        defaultState: 'All 3 Rows (21 Patterns)',
        purpose: {
          en: 'Lets students focus on one diagnostic principle at a time: Row 1 (Dispersion), Row 2 (Slope vs Correlation), or Row 3 (Non-Linear Dependence with r = 0).',
          km: 'អនុញ្ញាតឱ្យនិស្សិតផ្តោតលើគោលការណ៍វិភាគម្តងមួយជួរ៖ ជួរទី ១ (កម្រិតពង្រាយ), ជួរទី ២ (មេគុណប្រាប់ទិស) ឬជួរទី ៣ (ទំនាក់ទំនងមិនលីនេអ៊ែរដែល r = 0)។',
        },
      },
    ],
    expandedContent: {
      onScreenText: {
        heading: {
          en: 'Three Critical Visual Lessons from the 21 Correlation Patterns',
          km: 'មេរៀនសំខាន់ៗទាំង ៣ ពីកម្រងក្រាហ្វសហសម្ព័ន្ធទាំង ២១',
        },
        bullets: [
          {
            en: 'Row 1 (Dispersion / Noise): Pearson r measures how tightly points cluster around a straight line (from +1 through 0 to -1).',
            km: 'ជួរដេកទី ១ (កម្រិតពង្រាយ)៖ មេគុណ Pearson r វាស់កម្រិតនៃការប្រមូលផ្តុំរបស់ចំណុចទិន្នន័យជុំវិញបន្ទាត់ត្រង់ (ពី +1 ឆ្លងកាត់ 0 ទៅ -1)។',
          },
          {
            en: 'Row 2 (Slope Independence): Pearson r does NOT measure the steepness (slope) of a line! Every perfectly straight non-horizontal line has r = +1 or r = -1. A perfectly flat horizontal line has s_Y = 0, so r is undefined (blank label).',
            km: 'ជួរដេកទី ២ (ភាពមិនអាស្រ័យលើចំណោត)៖ មេគុណ r មិនមែនវាស់កម្រិតចោត (Slope) នៃបន្ទាត់ឡើយ! គ្រប់បន្ទាត់ត្រង់ដែលមិនដេក សុទ្ធតែមាន r = +1 ឬ -1។ ចំណែកបន្ទាត់ដេកចំកណ្តាលមាន s_Y = 0 ដូច្នេះ r មិនកំណត់ឡើយ។',
          },
          {
            en: 'Row 3 (The Non-Linearity Trap): All 7 shapes in the bottom row (wave, parabola, circle, X-shape, 4 clusters) have r = 0, even though X and Y are strongly dependent!',
            km: 'ជួរដេកទី ៣ (អន្ទាក់មិនលីនេអ៊ែរ)៖ រូបរាងទាំង ៧ នៅជួរខាងក្រោម (រាងអក្សរ W, ប៉ារ៉ាបូល, រង្វង់, រាងអក្សរ X, កញ្ចុំ ៤) សុទ្ធតែមាន r = 0 ទោះបីជា X និង Y មានទំនាក់ទំនងនឹងគ្នាយ៉ាងខ្លាំងក៏ដោយ!',
          },
        ],
        callout: {
          en: 'Never Trust r = 0 Blindly: A Pearson correlation of r = 0 only means "zero LINEAR trend"—there could still be a perfect parabola (Y = X²) or circular dependency hiding in the data!',
          km: 'កុំជឿលើតម្លៃ r = 0 ដោយមិនបានមើលក្រាហ្វ៖ តម្លៃ r = 0 មានន័យត្រឹមតែថា «គ្មានទំនោរជាបន្ទាត់ត្រង់» ប៉ុណ្ណោះ ប៉ុន្តែទិន្នន័យអាចមានទំនាក់ទំនងជារាងខ្សែកោងប៉ារ៉ាបូល (Y = X²) ឬជារង្វង់យ៉ាងច្បាស់លាស់!',
        },
      },
      deepDiveExplanation: {
        en: 'Slide 12 is one of the most famous pedagogical diagrams in statistics. It dismantles three widespread misconceptions about Pearson’s $r$: First, in Row 1, as random noise increases around a line, $|r|$ decays toward $0$. Second, in Row 2, students often think a line with a $45^\\circ$ slope has a higher correlation than a line with a $10^\\circ$ slope—in reality, if there is zero scatter around the line $Y = aX + b$ ($a > 0$), then $s_Y = a s_X$ and $\\text{Cov}(X,Y) = a s_X^2$, so $r = \\frac{a s_X^2}{s_X (a s_X)} = 1$ for ANY positive slope $a > 0$! Only when $a = 0$ (the middle horizontal line) does $s_Y = 0$, rendering $r = 0/0$ undefined. Third, in Row 3, every symmetric non-linear pattern (such as a parabola $Y = X^2$ on $[-1, 1]$ or a circle $X^2 + Y^2 = 1$) produces positive cross-products on one side that exactly cancel out the negative cross-products on the other side, resulting in $r = 0$ despite strong functional dependence.',
        km: 'ស្លាយទី ១២ គឺជាដ្យាក្រាមគរុកោសល្យដ៏ល្បីល្បាញបំផុតមួយក្នុងផ្នែកស្ថិតិ ដែលជួយបំបាត់ការយល់ច្រឡំធំៗចំនួន ៣ អំពីមេគុណ Pearson $r$៖ ទីមួយ នៅក្នុងជួរទី ១ នៅពេលទិន្នន័យកាន់តែពង្រាយឆ្ងាយពីបន្ទាត់ត្រង់ តម្លៃ $|r|$ កាន់តែថយចុះទៅរក $0$។ ទីពីរ នៅក្នុងជួរទី ២ និស្សិតតែងយល់ច្រឡំថាបន្ទាត់ដែលមានមុំចោត $45^\\circ$ មានសហសម្ព័ន្ធខ្ពស់ជាងបន្ទាត់ដែលមានមុំទាប $10^\\circ$—តាមពិត ប្រសិនបើចំណុចទាំងអស់ស្ថិតនៅលើបន្ទាត់ត្រង់ $Y = aX + b$ ($a > 0$) ដោយគ្មានការពង្រាយ នោះ $r = \\frac{a s_X^2}{s_X (a s_X)} = 1$ ជានិច្ចសម្រាប់គ្រប់តម្លៃ $a > 0$! លើកលែងតែករណី $a = 0$ (បន្ទាត់ដេកនៅចំកណ្តាល) ប៉ុណ្ណោះ ដែលធ្វើឱ្យ $s_Y = 0$ នាំឱ្យ $r = 0/0$ មិនកំណត់។ ទីបី នៅក្នុងជួរទី ៣ រាល់ទំនាក់ទំនងមិនលីនេអ៊ែរដែលមានភាពឆ្លុះ (ដូចជាប៉ារ៉ាបូល $Y = X^2$ ឬរង្វង់ $X^2 + Y^2 = 1$) ធ្វើឱ្យផលគុណវិជ្ជមានម្ខាងស៊ីសងគ្នាអស់ជាមួយផលគុណអវិជ្ជមានម្ខាងទៀត ដែលនាំឱ្យ $r = 0$ ទោះបីជាអថេរទាំងពីរពឹងផ្អែកលើគ្នាយ៉ាងខ្លាំងក៏ដោយ។',
      },
      practicalApplication: {
        scenarioTitle: {
          en: 'Detecting U-Shaped (Parabola) Relationships in Agricultural & Economic Data',
          km: 'ការរកឃើញទំនាក់ទំនងរាងអក្សរ U (ប៉ារ៉ាបូល) ក្នុងទិន្នន័យកសិកម្ម និងសេដ្ឋកិច្ច',
        },
        description: {
          en: 'In agronomy, Fertilizer Amount vs Rice Yield follows an inverted U-shape (too little fertilizer gives low yield; optimal fertilizer gives peak yield; excessive fertilizer burns the crop). Computing Pearson r across the whole range gives r ≈ 0, which is why plotting the scatterplot is mandatory!',
          km: 'នៅក្នុងវិស័យកសិកម្ម បរិមាណជី ទល់នឹង ទិន្នផលស្រូវ មានទំនាក់ទំនងជារាងអក្សរ U ផ្កាប់ (ដាក់ជីតិចពេកទិន្នផលទាប ដាក់ជីល្មមទិន្នផលខ្ពស់បំផុត តែបើដាក់ជីច្រើនហួសកម្រិតធ្វើឱ្យងាប់ស្រូវ)។ ប្រសិនបើយើងគណនាតែមេគុណ Pearson r វានឹងផ្តល់តម្លៃ r ≈ 0 ដែលជាមូលហេតុតម្រូវឱ្យយើងគូសក្រាហ្វ Scatterplot មើលជានិច្ច!',
        },
        impactMetric: 'Prevents false-negative feature dismissal when non-linear relationships exist',
      },
    },
  },

  // ==========================================
  // SLIDE 13
  // ==========================================
  {
    pageNumber: 13,
    slideFooterNumber: '13',
    sectionTag: {
      en: '2.1 Quantitative vs Quantitative — Pearson Correlation Matrix',
      km: '2.1 បរិមាណ ទល់នឹង បរិមាណ — ម៉ាទ្រីសសហសម្ព័ន្ធ Pearson (Correlation Matrix)',
    },
    simulatorMode: 'gapminder_pearson_matrix',
    pageIdentity: {
      titleEn: 'Indicator: Pearson Correlation Matrix — Gapminder 2007 Heatmap',
      titleKm: 'សូចនាករ៖ ម៉ាទ្រីសសហសម្ព័ន្ធ Pearson — តារាងកម្រិតពណ៌នៃទិន្នន័យ Gapminder ឆ្នាំ ២០០៧',
      themeName: {
        en: 'Correlation Matrix Heatmap Studio (`cmap="Accent"`)',
        km: 'ផ្ទៃបង្ហាញតារាងម៉ាទ្រីសសហសម្ព័ន្ធតាមកម្រិតពណ៌ (`cmap="Accent"`)',
      },
      canvasBgHex: '#F8FAFC',
      surfaceCardHex: '#FFFFFF',
      primaryAccentHex: '#E11D48',
      secondaryAccentHex: '#4ADE80',
      textPrimaryHex: '#0F172A',
      hierarchyRationale: {
        en: 'Faithfully reproduces the Pandas `.style.background_gradient(cmap="Accent")` color palette from Slide 13: Charcoal Gray (#6B7280) for diagonal 1.000000, Vivid Magenta (#E11D48) for strong positive `0.678662` (`gdpPercap` vs `lifeExp`), and Mint Green (#74C67A) for near-zero correlations with `pop`.',
        km: 'រក្សាទម្រង់ពណ៌នៃកូដ Pandas `.style.background_gradient(cmap="Accent")` ដូចក្នុងស្លាយទី ១៣ គឺពណ៌ប្រផេះចាស់ (#6B7280) សម្រាប់អង្កត់ទ្រូង 1.000000, ពណ៌ផ្កាឈូកដិត (#E11D48) សម្រាប់សហសម្ព័ន្ធវិជ្ជមាន `0.678662` និងពណ៌បៃតងខ្ចី (#74C67A) សម្រាប់តម្លៃជិតសូន្យជាមួយ `pop`។',
      },
    },
    wireframe: {
      headerSection: {
        en: 'Top Header: "Indicator: Pearson Correlation Matrix / សូចនាករ៖ ម៉ាទ្រីសសហសម្ព័ន្ធ Pearson" + 3 core conceptual bullets.',
        km: 'ផ្នែកខាងលើ៖ ចំណងជើង «Indicator: Pearson Correlation Matrix / សូចនាករ៖ ម៉ាទ្រីសសហសម្ព័ន្ធ Pearson» អមដោយចំណុចគោលទាំង ៣។',
      },
      leftZone: {
        en: 'Bottom-Left Zone (55% width): Python code block (`data2007[["gdpPercap", "lifeExp", "pop"]].corr()`) + 3×3 Heatmap Matrix Table (`gdpPercap`, `lifeExp`, `pop`).',
        km: 'ផ្នែកខាងឆ្វេងខាងក្រោម (ទទឹង ៥៥%)៖ ប្រអប់កូដ Python និងតារាងម៉ាទ្រីសសហសម្ព័ន្ធទំហំ ៣×៣ (`gdpPercap`, `lifeExp`, `pop`)។',
      },
      rightZone: {
        en: 'Bottom-Right Zone (45% width): Analytical Interpretation Callout Cards explaining why `lifeExp` & `gdpPercap` are positively related (0.678662) while `pop` is decorrelated (-0.055676 and 0.047553).',
        km: 'ផ្នែកខាងស្តាំខាងក្រោម (ទទឹង ៤៥%)៖ ប្រអប់បកស្រាយលទ្ធផលដែលពន្យល់ថា `lifeExp` និង `gdpPercap` មានទំនាក់ទំនងវិជ្ជមាន (0.678662) ខណៈដែល `pop` គ្មានទំនាក់ទំនងលីនេអ៊ែរជាមួយអថេរទាំងពីរឡើយ។',
      },
      bottomOrTopBar: {
        en: 'Bottom symmetry note explaining why Corr(X,Y) = Corr(Y,X) and why the diagonal is always 1.000000.',
        km: 'របារពន្យល់ខាងក្រោមអំពីលក្ខណៈឆ្លុះនៃម៉ាទ្រីស Corr(X,Y) = Corr(Y,X) និងមូលហេតុដែលអង្កត់ទ្រូងស្មើ 1.000000 ជានិច្ច។',
      },
      gridAllocation: '7 Columns Left (Python Snippet + 3x3 Heatmap Table) + 5 Columns Right (Key Findings)',
    },
    chartMetricsMath: {
      scorecards: [
        {
          label: { en: 'r(gdpPercap, lifeExp)', km: 'សហសម្ព័ន្ធ r(gdpPercap, lifeExp)' },
          value: '+0.678662',
          metricField: 'CORR(gdpPercap, lifeExp)',
          aggregation: 'Pearson r',
          comparisonNote: { en: 'Strong positive linear tendency', km: 'ទំនាក់ទំនងលីនេអ៊ែរវិជ្ជមានកម្រិតខ្លាំង' },
        },
        {
          label: { en: 'r(gdpPercap, pop)', km: 'សហសម្ព័ន្ធ r(gdpPercap, pop)' },
          value: '-0.055676',
          metricField: 'CORR(gdpPercap, pop)',
          aggregation: 'Pearson r',
          comparisonNote: { en: 'Decorrelated (near 0)', km: 'គ្មានសហសម្ព័ន្ធលីនេអ៊ែរ (ជិតសូន្យ)' },
        },
        {
          label: { en: 'r(lifeExp, pop)', km: 'សហសម្ព័ន្ធ r(lifeExp, pop)' },
          value: '+0.047553',
          metricField: 'CORR(lifeExp, pop)',
          aggregation: 'Pearson r',
          comparisonNote: { en: 'Decorrelated (near 0)', km: 'គ្មានសហសម្ព័ន្ធលីនេអ៊ែរ (ជិតសូន្យ)' },
        },
      ],
      charts: [
        {
          chartType: {
            en: 'Looker Studio Pivot Table with Heatmap Conditional Formatting (3×3 Matrix)',
            km: 'តារាងម៉ាទ្រីស Pivot Table ភ្ជាប់ជាមួយការដាក់ពណ៌តាមលក្ខខណ្ឌតម្លៃ (Heatmap)',
          },
          dimensions: ['row_variable_name', 'column_variable_name'],
          metrics: ['pearson_correlation_value'],
          sorting: 'custom_matrix_order ASC',
          stylingNote: {
            en: 'Format all cells to 6 decimal places (`0.000000`) with conditional background color rules matching Slide 13.',
            km: 'កំណត់ទម្រង់តួលេខឱ្យមាន ៦ ខ្ទង់ក្រោយក្បៀស (`0.000000`) អមដោយការដាក់ពណ៌ផ្ទៃក្រោយតាមកម្រិតតម្លៃដូចក្នុងស្លាយទី ១៣។',
          },
        },
      ],
      formulas: [
        {
          title: { en: 'Symmetric Correlation Matrix R for p Quantitative Variables', km: 'រូបមន្តម៉ាទ្រីសសហសម្ព័ន្ធឆ្លុះ R សម្រាប់អថេរបរិមាណចំនួន p' },
          equation: 'R = [ r_{j,k} ]_{p × p} ,    where r_{j,j} = 1  and  r_{j,k} = r_{k,j} = Cov(X_j, X_k) / (s_{X_j} · s_{X_k})',
          variables: [
            { symbol: 'p', en: 'Number of quantitative columns analyzed simultaneously (here p = 3: gdpPercap, lifeExp, pop)', km: 'ចំនួនជួរឈរបរិមាណដែលត្រូវវិភាគក្នុងពេលតែមួយ (នៅទីនេះ p = 3 គឺ gdpPercap, lifeExp, pop)' },
            { symbol: 'r_{j,j} = 1', en: 'Main diagonal entries (every variable has a perfect correlation of 1.000000 with itself)', km: 'ធាតុនៅលើអង្កត់ទ្រូងមេ (គ្រប់អថេរទាំងអស់មានសហសម្ព័ន្ធស្មើ 1.000000 ជាមួយខ្លួនវាជានិច្ច)' },
            { symbol: 'r_{j,k} = r_{k,j}', en: 'Off-diagonal symmetric entries representing the p(p-1)/2 unique variable pairs', km: 'ធាតុឆ្លុះគ្នាឆ្លងកាត់អង្កត់ទ្រូង ដែលតំណាងឱ្យគូអថេរខុសៗគ្នាចំនួន p(p-1)/2 គូ' },
          ],
        },
      ],
    },
    controls: [
      {
        controlType: { en: 'Drop-down List Control (Continent Filter)', km: 'តម្រងជ្រើសរើសទ្វីប (Continent Filter)' },
        field: 'continent',
        defaultState: 'All Continents (Global 2007)',
        purpose: {
          en: 'Allows students to dynamically recalculate the 3×3 Gapminder Pearson correlation matrix within individual continents.',
          km: 'អនុញ្ញាតឱ្យនិស្សិតគណនាម៉ាទ្រីសសហសម្ព័ន្ធ ៣×៣ ឡើងវិញដោយស្វ័យប្រវត្តិទៅតាមទ្វីបនីមួយៗ។',
        },
      },
    ],
    expandedContent: {
      onScreenText: {
        heading: {
          en: 'Screening Multiple Quantitative Columns with a Pearson Correlation Matrix',
          km: 'ការពិនិត្យជួរឈរបរិមាណច្រើនក្នុងពេលតែមួយដោយប្រើម៉ាទ្រីសសហសម្ព័ន្ធ Pearson',
        },
        bullets: [
          {
            en: 'To detect the tendency of linear relationships between many quantitative columns, the Pearson correlation matrix is a common tool to use.',
            km: 'ដើម្បីស្វែងរកទំនោរនៃទំនាក់ទំនងលីនេអ៊ែររវាងជួរឈរបរិមាណជាច្រើន ម៉ាទ្រីសសហសម្ព័ន្ធ Pearson គឺជាឧបករណ៍ដ៏ពេញនិយមបំផុត។',
          },
          {
            en: 'It highlights the strongly linearly correlated pairs using color gradients (`cor.style.background_gradient(cmap="Accent")`).',
            km: 'វាជួយរំលេចឱ្យឃើញគូនៃអថេរដែលមានសហសម្ព័ន្ធលីនេអ៊ែរខ្លាំងតាមរយៈការដាក់ពណ៌ (`cor.style.background_gradient(cmap="Accent")`)។',
          },
          {
            en: 'Gapminder 2007 Insight 1: `lifeExp` and `gdpPercap` appear to be positively related (r = 0.678662).',
            km: 'លទ្ធផលទី ១ នៃទិន្នន័យ Gapminder ឆ្នាំ ២០០៧៖ អាយុរំពឹងរស់ (`lifeExp`) និង GDP (`gdpPercap`) មានទំនាក់ទំនងវិជ្ជមានជាមួយគ្នា (r = 0.678662)។',
          },
          {
            en: 'Gapminder 2007 Insight 2: `pop` (Population) may be decorrelated with the other two columns (r = -0.055676 and r = 0.047553).',
            km: 'លទ្ធផលទី ២៖ ចំនួនប្រជាជន (`pop`) ទំនងជាគ្មានសហសម្ព័ន្ធលីនេអ៊ែរជាមួយអថេរទាំងពីរទៀតឡើយ (r = -0.055676 និង r = 0.047553)។',
          },
        ],
        callout: {
          en: 'Notice the Cautious Wording ("may be decorrelated"): As we learned on Slide 12, r ≈ 0 only rules out a LINEAR relationship—we must still check non-linear rank correlation and scatterplots before concluding independence!',
          km: 'សូមសង្កេតការប្រើពាក្យយ៉ាងប្រុងប្រយ័ត្ន («ទំនងជាគ្មានសហសម្ព័ន្ធ / may be decorrelated»)៖ ដូចដែលយើងបានរៀននៅស្លាយទី ១២ តម្លៃ r ≈ 0 បញ្ជាក់ត្រឹមតែថាគ្មានទំនាក់ទំនងជាបន្ទាត់ត្រង់ប៉ុណ្ណោះ ដូច្នេះយើងត្រូវពិនិត្យមើលសហសម្ព័ន្ធ Spearman និងក្រាហ្វ Scatterplot បន្ថែមទៀត!',
        },
      },
      deepDiveExplanation: {
        en: 'When a dataset has $p$ quantitative columns, there are $\\frac{p(p-1)}{2}$ distinct pairs to inspect. For Gapminder ($p = 3$), there are $\\frac{3 \\times 2}{2} = 3$ unique pairs; for a 20-column credit dataset, there are $190$ pairs! Rather than plotting 190 scatterplots blindly, analysts compute the $p \\times p$ Pearson Correlation Matrix (`df.corr()`) and apply a heatmap color gradient (`background_gradient`). In our Gapminder 2007 matrix, the magenta cell immediately draws the eye to `gdpPercap` vs `lifeExp` ($r = 0.678662$), confirming that wealthier nations enjoy significantly higher life expectancy. Conversely, `pop` has near-zero correlation with both `gdpPercap` ($r = -0.055676$) and `lifeExp` ($r = 0.047553$), suggesting that whether a country is large (like China or the USA) or small (like Singapore or Swaziland) does not linearly determine its average wealth or longevity.',
        km: 'នៅពេលសំណុំទិន្នន័យមួយមានជួរឈរបរិមាណចំនួន $p$ នោះវាបង្កើតបានជាគូអថេរខុសៗគ្នាចំនួន $\\frac{p(p-1)}{2}$ គូ។ សម្រាប់ទិន្នន័យ Gapminder ($p = 3$) មានចំនួន $\\frac{3 \\times 2}{2} = 3$ គូ ប៉ុន្តែប្រសិនបើទិន្នន័យមាន ២០ ជួរឈរ វានឹងមានរហូតដល់ទៅ ១៩០ គូ! ជំនួសឱ្យការគូសក្រាហ្វ Scatterplot ទាំង ១៩០ ដោយងងឹតងងល់ អ្នកវិភាគគណនាម៉ាទ្រីសសហសម្ព័ន្ធទំហំ $p \\times p$ (`df.corr()`) ហើយដាក់ពណ៌សម្គាល់ (Heatmap)។ នៅក្នុងតារាង Gapminder ឆ្នាំ ២០០៧ នេះ ក្រឡាពណ៌ផ្កាឈូកដិតទាញភ្នែកយើងឱ្យឃើញភ្លាមនូវគូ `gdpPercap` និង `lifeExp` ($r = 0.678662$) ដែលបញ្ជាក់ថាប្រទេសដែលមានសេដ្ឋកិច្ចខ្ពស់ មានអាយុរំពឹងរស់ខ្ពស់ជាង។ ផ្ទុយទៅវិញ ចំនួនប្រជាជន (`pop`) មានតម្លៃសហសម្ព័ន្ធជិតសូន្យជាមួយទាំង `gdpPercap` ($-0.055676$) និង `lifeExp` ($0.047553$) ដែលបង្ហាញថាទំហំប្រជាជនតិច ឬច្រើន មិនមែនជាកត្តាកំណត់ដោយផ្ទាល់លើប្រាក់ចំណូលមធ្យម ឬអាយុរំពឹងរស់នោះទេ។',
      },
      practicalApplication: {
        scenarioTitle: {
          en: 'Macroeconomic Indicator Screening in National Development Dashboards',
          km: 'ការពិនិត្យសូចនាករម៉ាក្រូសេដ្ឋកិច្ចនៅក្នុងផ្ទាំងរបាយការណ៍អភិវឌ្ឍន៍ជាតិ',
        },
        description: {
          en: 'Economic researchers use Looker Studio heatmap pivot tables to screen dozens of World Bank indicators (GDP, Literacy, Infant Mortality, Electricity Access, Population) in seconds to isolate the strongest policy levers.',
          km: 'អ្នកស្រាវជ្រាវសេដ្ឋកិច្ចប្រើប្រាស់តារាង Heatmap ក្នុង Looker Studio ដើម្បីពិនិត្យមើលសូចនាករធនាគារពិភពលោករាប់សិបក្នុងពេលតែប៉ុន្មានវិនាទី ដើម្បីកំណត់រកកត្តាគោលនយោបាយណាដែលមានទំនាក់ទំនងខ្លាំងបំផុត។',
        },
        impactMetric: 'Pinpoints r = 0.678662 (GDP vs LifeExp) across 3 quantitative dimensions instantly',
      },
    },
  },

  // ==========================================
  // SLIDE 14
  // ==========================================
  {
    pageNumber: 14,
    slideFooterNumber: '14',
    sectionTag: {
      en: '2.2 Quan./Ordi. vs Quan./Ordi. — Spearman’s Rank Correlation Theory',
      km: '2.2 បរិមាណ/លំដាប់ ទល់នឹង បរិមាណ/លំដាប់ — ទ្រឹស្តីសហសម្ព័ន្ធចំណាត់ថ្នាក់ Spearman',
    },
    simulatorMode: 'spearman_rank_concept',
    pageIdentity: {
      titleEn: '2.2 Quan./Ordi. Vs Quan./Ordi. — Indicator: Spearman’s Rank Correlation (ρ)',
      titleKm: '2.2 បរិមាណ/លំដាប់ ទល់នឹង បរិមាណ/លំដាប់ — សូចនាករ៖ សហសម្ព័ន្ធចំណាត់ថ្នាក់ Spearman (ρ)',
      themeName: {
        en: 'Non-Parametric Rank Theory & Formula Theme',
        km: 'ផ្ទៃបង្ហាញទ្រឹស្តីចំណាត់ថ្នាក់ (Rank Theory) និងរូបមន្ត Spearman',
      },
      canvasBgHex: '#F8FAFC',
      surfaceCardHex: '#FFFFFF',
      primaryAccentHex: '#2563EB',
      secondaryAccentHex: '#DC2626',
      textPrimaryHex: '#0F172A',
      hierarchyRationale: {
        en: 'Uses #2563EB Blue for "Quantitative / X" and #DC2626 Red for "Ordinal / Y" in the header and formula, visually uniting continuous numerical variables with ordered categorical ranks.',
        km: 'ប្រើពណ៌ខៀវ (#2563EB) សម្រាប់ «Quantitative / X» និងពណ៌ក្រហម (#DC2626) សម្រាប់ «Ordinal / Y» ទាំងនៅលើចំណងជើង និងក្នុងរូបមន្តគណិតវិទ្យាដូចក្នុងស្លាយទី ១៤។',
      },
    },
    wireframe: {
      headerSection: {
        en: 'Top Header: "2.2 Quan./Ordi. Vs Quan./Ordi. — Indicator: Spearman’s Rank Correlation".',
        km: 'ផ្នែកខាងលើ៖ ចំណងជើង «2.2 Quan./Ordi. Vs Quan./Ordi. — Indicator: Spearman’s Rank Correlation»។',
      },
      leftZone: {
        en: 'Top & Left Content Zone (65% width): Three core motivation bullets (Pearson outlier sensitivity, ordinal Likert limitation, monotonic relationship definition) + Exact Spearman equation ρ_{X,Y}.',
        km: 'ផ្នែកខាងឆ្វេង (ទទឹង ៦៥%)៖ ចំណុចមូលហេតុសំខាន់ៗទាំង ៣ (ភាពរសើបនឹង Outliers របស់ Pearson, ដែនកំណត់លើទិន្នន័យលំដាប់ Ordinal, និងការវាស់ទំនាក់ទំនងម៉ូណូតូន) រួមជាមួយរូបមន្តពេញលេញនៃ ρ_{X,Y}។',
      },
      rightZone: {
        en: 'Right Visual Comparison Zone (35% width): Interactive Linear vs Monotonic curve comparison showing why a steep exponential or logarithmic curve has Pearson r < 1 but Spearman ρ = 1.00.',
        km: 'ផ្នែកខាងស្តាំ (ទទឹង ៣៥%)៖ ក្រាហ្វប្រៀបធៀបរវាងទំនាក់ទំនងលីនេអ៊ែរ និងទំនាក់ទំនងម៉ូណូតូន (Monotonic) ដែលបង្ហាញថាហេតុអ្វីខ្សែកោងកើនឡើងមាន Pearson r < 1 ប៉ុន្តែមាន Spearman ρ = 1.00។',
      },
      bottomOrTopBar: {
        en: 'Bottom Rank-Transformation Stepper showing how raw values xᵢ, yᵢ map to ranks R[xᵢ], R[yᵢ] and rank distances dᵢ.',
        km: 'របារខាងក្រោមបង្ហាញពីជំហាននៃការបម្លែងតម្លៃដើម xᵢ, yᵢ ទៅជាចំណាត់ថ្នាក់ R[xᵢ], R[yᵢ] និងគម្លាតចំណាត់ថ្នាក់ dᵢ។',
      },
      gridAllocation: '8 Columns Left (Theory & Equation) + 4 Columns Right (Linear vs Monotonic Visual Proof)',
    },
    chartMetricsMath: {
      scorecards: [
        {
          label: { en: 'Target Relationship Type', km: 'ប្រភេទទំនាក់ទំនងដែលត្រូវវាស់វែង' },
          value: 'Monotonic',
          metricField: 'relationship_class',
          aggregation: 'Non-Parametric',
          comparisonNote: { en: 'Captures both linear & curved monotonic trends', km: 'ចាប់យកទាំងទំនោរត្រង់ និងទំនោរខ្សែកោងដែលកើន/ថយជាប់គ្នា' },
        },
        {
          label: { en: 'Compatible Data Types', km: 'ប្រភេទទិន្នន័យដែលអាចប្រើបាន' },
          value: 'Quan. & Ordinal',
          metricField: 'supported_data_types',
          aggregation: 'Rank-Based',
          comparisonNote: { en: 'Works on Likert scales (1–5) & skewed numbers', km: 'ប្រើបានទាំងលើមាត្រដ្ឋាន Likert (1–5) និងលេខដែលមាន Outliers' },
        },
      ],
      charts: [
        {
          chartType: {
            en: 'Looker Studio Rank-Order Comparison Table & Monotonic Curve Plot',
            km: 'តារាងប្រៀបធៀបចំណាត់ថ្នាក់ (Rank Table) និងក្រាហ្វខ្សែកោងម៉ូណូតូន',
          },
          dimensions: ['observation_id'],
          metrics: ['raw_x', 'raw_y', 'rank_x', 'rank_y', 'rank_diff_d'],
          sorting: 'rank_x ASC',
          stylingNote: {
            en: 'Highlights how transforming raw values to ranks 1..n eliminates the distortion of extreme outliers.',
            km: 'បង្ហាញពីរបៀបដែលការបម្លែងតម្លៃដើមទៅជាចំណាត់ថ្នាក់ពី 1 ដល់ n ជួយលុបបំបាត់ឥទ្ធិពលអាក្រក់នៃតម្លៃ Outliers។',
          },
        },
      ],
      formulas: [
        {
          title: { en: 'Spearman’s Rank Correlation Coefficient (ρ)', km: 'រូបមន្តមេគុណសហសម្ព័ន្ធចំណាត់ថ្នាក់ Spearman (ρ)' },
          equation: 'ρ_{X,Y} = r_{R[X], R[Y]} = Cov(R[X], R[Y]) / (s_{R[X]} · s_{R[Y]}) = 1 - [ 6 ∑_{i=1}^{n} d_i² ] / [ n(n² - 1) ]',
          variables: [
            { symbol: 'ρ_{X,Y}', en: 'Spearman’s rank correlation coefficient, bounded in [-1, 1]', km: 'មេគុណសហសម្ព័ន្ធចំណាត់ថ្នាក់ Spearman ដែលមានតម្លៃក្នុងចន្លោះ [-1, 1]' },
            { symbol: 'R[x_i], R[y_i]', en: 'The ordinal rank (1, 2, ..., n) of observations x_i and y_i within their respective lists', km: 'ចំណាត់ថ្នាក់ (ពីទី 1, 2, ..., n) នៃតម្លៃអង្កេត x_i និង y_i នៅក្នុងបញ្ជីរៀងៗខ្លួនរបស់វា' },
            { symbol: 'd_i = R[x_i] - R[y_i]', en: 'Distance (difference) in rank of the i-th observation between list X and list Y', km: 'ចម្ងាយ (ផលដក) រវាងចំណាត់ថ្នាក់នៃការអង្កេតទី i ក្នុងបញ្ជី X និងបញ្ជី Y' },
            { symbol: 'n', en: 'Total number of paired observations (exact shortcut formula holds when there are no tied ranks)', km: 'ចំនួនគូនៃការអង្កេតសរុប (រូបមន្តកាត់ខាងស្តាំប្រើបាននៅពេលគ្មានចំណាត់ថ្នាក់ស្មើគ្នា)' },
          ],
        },
      ],
    },
    controls: [
      {
        controlType: { en: 'Drop-down List Control (Curve Shape Selector)', km: 'ប៊ូតុងជ្រើសរើសទម្រង់ខ្សែកោង (Exponential / Logarithmic / Likert)' },
        field: 'monotonic_curve_type',
        defaultState: 'Exponential Monotonic Curve (Y = e^X)',
        purpose: {
          en: 'Lets students test different monotonic curves and see how Spearman ρ stays at 1.00 while Pearson r drops.',
          km: 'អនុញ្ញាតឱ្យនិស្សិតសាកល្បងខ្សែកោងម៉ូណូតូនផ្សេងៗ ហើយមើលថាតើហេតុអ្វី Spearman ρ រក្សាតម្លៃ 1.00 ខណៈដែល Pearson r ធ្លាក់ចុះ។',
        },
      },
    ],
    expandedContent: {
      onScreenText: {
        heading: {
          en: 'Overcoming Pearson’s Limitations with Spearman’s Rank Correlation',
          km: 'ការដោះស្រាយដែនកំណត់របស់ Pearson ដោយប្រើសហសម្ព័ន្ធចំណាត់ថ្នាក់ Spearman',
        },
        bullets: [
          {
            en: 'Limitation 1: Pearson correlation is highly sensitive to outliers (as seen in Lab 2) and does not capture non-linear relationships between quantitative columns.',
            km: 'ដែនកំណត់ទី ១៖ សហសម្ព័ន្ធ Pearson មានភាពរសើបខ្លាំងចំពោះតម្លៃដាច់ស្រយាល (Outliers) ហើយមិនអាចចាប់យកទំនាក់ទំនងមិនលីនេអ៊ែររវាងជួរឈរបរិមាណបានទេ។',
          },
          {
            en: 'Limitation 2: Pearson correlation is not suitable for ordinal data (such as a 5-point Likert satisfaction scale: Strongly Disagree to Strongly Agree).',
            km: 'ដែនកំណត់ទី ២៖ សហសម្ព័ន្ធ Pearson មិនស័ក្តិសមសម្រាប់ទិន្នន័យលំដាប់ (Ordinal data) ដូចជាមាត្រដ្ឋានពេញចិត្ត Likert Scale ពីកម្រិត ១ ដល់ ៥ នោះទេ។',
          },
          {
            en: 'Solution: Spearman’s Rank Correlation overcomes these limitations by measuring the strength and direction of the MONOTONIC relationship between two variables, regardless of their distribution or the presence of outliers.',
            km: 'ដំណោះស្រាយ៖ សហសម្ព័ន្ធចំណាត់ថ្នាក់ Spearman ដោះស្រាយបញ្ហាទាំងនេះ ដោយវាស់វែងកម្រិតខ្លាំងខ្សោយ និងទិសដៅនៃទំនាក់ទំនងម៉ូណូតូន (Monotonic relationship) រវាងអថេរពីរ ដោយមិនខ្វល់ពីរូបរាងនៃការបែងចែកទិន្នន័យ ឬវត្តមាននៃតម្លៃ Outliers ឡើយ។',
          },
        ],
        callout: {
          en: 'What Is a Monotonic Relationship? A relationship is monotonic increasing if whenever x_i > x_j, we also have y_i ≥ y_j—even if the curve bends sharply like Y = X³ or Y = log(X)!',
          km: 'តើអ្វីទៅជាទំនាក់ទំនងម៉ូណូតូន (Monotonic Relationship)? គឺជាទំនាក់ទំនងដែលនៅពេល x_i > x_j នោះតម្លៃ y_i ក៏ធំជាង ឬស្មើ y_j ជានិច្ចដែរ ទោះបីជាក្រាហ្វនោះកោងខ្លាំងដូចជា Y = X³ ឬ Y = log(X) ក៏ដោយ!',
        },
      },
      deepDiveExplanation: {
        en: 'Charles Spearman (1904) proposed an elegant non-parametric idea: instead of computing Pearson’s formula on the raw numerical measurements $x_i$ and $y_i$, first sort each column from smallest to largest and replace every value with its integer rank $R[x_i] \\in \\{1, 2, \\dots, n\\}$ and $R[y_i] \\in \\{1, 2, \\dots, n\\}$. Then compute Pearson correlation on the ranks: $\\rho_{X,Y} = r_{R[X], R[Y]}$. Because the ranks of $n$ distinct observations are always the integers $1, 2, \\dots, n$, their mean is always $\\frac{n+1}{2}$ and their variance is always $\\frac{n(n+1)}{12}$. Substituting these exact algebraic identities into the covariance formula simplifies $\\rho_{X,Y}$ to the famous closed-form equation $1 - \\frac{6\\sum_{i=1}^n d_i^2}{n(n^2-1)}$, where $d_i = R[x_i] - R[y_i]$. If $X$ and $Y$ increase in the exact same order, then $R[x_i] = R[y_i]$ for every observation, so $d_i = 0$ and $\\rho_{X,Y} = 1 - 0 = 1$, regardless of whether the largest value in $Y$ is $10$ or $10,000,000$!',
        km: 'លោក Charles Spearman (១៩០៤) បានស្នើឡើងនូវគំនិតមិនប៉ារ៉ាម៉ែត្រ (Non-parametric) ដ៏ឆ្លាតវៃមួយ៖ ជំនួសឱ្យការគណនារូបមន្ត Pearson ទៅលើតម្លៃលេខដើម $x_i$ និង $y_i$ ដោយផ្ទាល់ ដំបូងយើងត្រូវតម្រៀបទិន្នន័យក្នុងជួរឈរនីមួយៗពីតូចទៅធំ រួចជំនួសតម្លៃនីមួយៗដោយលេខចំណាត់ថ្នាក់របស់វា $R[x_i] \\in \\{1, 2, \\dots, n\\}$ និង $R[y_i] \\in \\{1, 2, \\dots, n\\}$។ បន្ទាប់មក ទើបយើងគណនាមេគុណសហសម្ព័ន្ធ Pearson ទៅលើលេខចំណាត់ថ្នាក់ទាំងនោះ គឺ $\\rho_{X,Y} = r_{R[X], R[Y]}$។ ដោយសារចំណាត់ថ្នាក់នៃទិន្នន័យចំនួន $n$ គឺជាលេខគត់ពី $1$ ដល់ $n$ ជានិច្ច នោះមធ្យមភាគនៃចំណាត់ថ្នាក់គឺស្មើនឹង $\\frac{n+1}{2}$ ហើយវ៉ារ្យង់របស់វាគឺស្មើនឹង $\\frac{n(n+1)}{12}$ ជានិច្ច។ ការជំនួសតម្លៃទាំងនេះចូលទៅក្នុងរូបមន្តកូវ៉ារ្យង់ ធ្វើឱ្យរូបមន្តរួមតូចមកត្រឹម $\\rho_{X,Y} = 1 - \\frac{6\\sum_{i=1}^n d_i^2}{n(n^2-1)}$ ដែល $d_i = R[x_i] - R[y_i]$។ ប្រសិនបើ $X$ និង $Y$ កើនឡើងតាមលំដាប់ដូចគ្នាបេះបិទ នោះ $R[x_i] = R[y_i]$ គ្រប់ជួរដេក ធ្វើឱ្យ $d_i = 0$ និង $\\rho_{X,Y} = 1 - 0 = 1$ ទោះបីជាតម្លៃធំបំផុតក្នុងជួរឈរ $Y$ លោតដល់ $1,000,000$ ក៏ដោយ!',
      },
      practicalApplication: {
        scenarioTitle: {
          en: 'Analyzing Customer Satisfaction Surveys (Likert Scale) vs App Usage Tier',
          km: 'ការវិភាគការស្ទង់មតិភាពពេញចិត្តរបស់អតិថិជន (Likert Scale) ទល់នឹងកម្រិតប្រើប្រាស់កម្មវិធី',
        },
        description: {
          en: 'A mobile banking team in Cambodia collects customer ratings on an ordinal scale (1 = Very Poor to 5 = Excellent) and compares them against Transaction Frequency. Because Likert scores are ordinal and transaction counts have extreme VIP outliers, Spearman’s ρ is the statistically valid metric.',
          km: 'ក្រុមការងារធនាគារចល័តនៅកម្ពុជាប្រមូលពិន្ទុវាយតម្លៃពីអតិថិជនលើមាត្រដ្ឋានលំដាប់ (ពី ១ = មិនពេញចិត្តខ្លាំង ដល់ ៥ = ពេញចិត្តខ្លាំងបំផុត) ហើយយកមកប្រៀបធៀបជាមួយចំនួនដងនៃការផ្ទេរប្រាក់។ ដោយសារពិន្ទុស្ទង់មតិជាទិន្នន័យលំដាប់ (Ordinal) ហើយចំនួនប្រតិបត្តិការមានអតិថិជន VIP ជា Outliers ការប្រើប្រាស់មេគុណ Spearman ρ គឺជាជម្រើសដ៏ត្រឹមត្រូវបំផុតតាមក្បួនស្ថិតិ។',
        },
        impactMetric: 'Provides 100% rank-robustness against single extreme outliers',
      },
    },
  },
];
