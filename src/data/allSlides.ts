import { SlideBlueprint } from '../types/blueprint';
import { SLIDES_PART_1 } from './slidesPart1';
import { SLIDES_PART_2 } from './slidesPart2';
import { SLIDES_PART_3 } from './slidesPart3';

export const ALL_41_SLIDES: SlideBlueprint[] = [
  ...SLIDES_PART_1,
  ...SLIDES_PART_2,
  ...SLIDES_PART_3,
];

export function formatSlideBlueprintToMarkdown(slide: SlideBlueprint): string {
  const { pageNumber, pageIdentity, wireframe, chartMetricsMath, controls, expandedContent } = slide;

  const scorecardsText =
    chartMetricsMath.scorecards.length === 0
      ? '- None (Conceptual / Section Divider Page) / គ្មាន (ទំព័រផ្តើមជំពូក ឬទ្រឹស្តី)'
      : chartMetricsMath.scorecards
          .map(
            (sc, idx) =>
              `  ${idx + 1}. **${sc.label.en} / ${sc.label.km}**: \`${sc.value}\` (Field: \`${sc.metricField}\`, Aggregation: ${sc.aggregation})\n     - Context (EN): ${sc.comparisonNote.en}\n     - បរិបទ (KM): ${sc.comparisonNote.km}`
          )
          .join('\n');

  const chartsText =
    chartMetricsMath.charts.length === 0
      ? '- None (Typography / Layout Anchor Page) / គ្មាន (ទំព័រផ្តោតលើចំណងជើង និងអត្ថបទ)'
      : chartMetricsMath.charts
          .map(
            (ch, idx) =>
              `  ${idx + 1}. **${ch.chartType.en}**\n     **${ch.chartType.km}**\n     - Dimensions: \`${ch.dimensions.join(', ')}\`${ch.breakdownDimension ? ` | Breakdown Dimension: \`${ch.breakdownDimension}\`` : ''}\n     - Metrics: \`${ch.metrics.join(', ') || 'None'}\` | Sorting: \`${ch.sorting}\`\n     - Styling (EN): ${ch.stylingNote.en}\n     - ការតុបតែង (KM): ${ch.stylingNote.km}`
          )
          .join('\n');

  const formulasText =
    chartMetricsMath.formulas.length === 0
      ? '- No mathematical equations on this specific slide / គ្មានរូបមន្តគណិតវិទ្យាលើស្លាយនេះទេ។'
      : chartMetricsMath.formulas
          .map((fm) => {
            const vars = fm.variables
              .map((v) => `     - \`${v.symbol}\`: ${v.en} / ${v.km}`)
              .join('\n');
            return `  - **${fm.title.en} / ${fm.title.km}**\n    Equation: \`${fm.equation}\`\n${vars}`;
          })
          .join('\n\n');

  const controlsText = controls
    .map(
      (ctrl, idx) =>
        `  ${idx + 1}. **${ctrl.controlType.en} / ${ctrl.controlType.km}**\n     - Control Field: \`${ctrl.field}\` | Default State: \`${ctrl.defaultState}\`\n     - Purpose (EN): ${ctrl.purpose.en}\n     - គោលបំណង (KM): ${ctrl.purpose.km}`
    )
    .join('\n');

  const bulletsText = expandedContent.onScreenText.bullets
    .map((b, idx) => `  ${idx + 1}. **EN:** ${b.en}\n     **KM:** ${b.km}`)
    .join('\n');

  return `[LOOKER STUDIO PAGE ${pageNumber}: CORRESPONDING TO SLIDE ${pageNumber}]

1. Page Identity & Theme (អត្តសញ្ញាណទំព័រ និងពណ៌)
- Bilingual Page Title: ${pageIdentity.titleEn} / ${pageIdentity.titleKm}
- Canvas Setup:
  - Recommended Theme: ${pageIdentity.themeName.en} / ${pageIdentity.themeName.km}
  - Canvas Background Hex: ${pageIdentity.canvasBgHex} | Card Surface Hex: ${pageIdentity.surfaceCardHex}
  - Primary Accent Hex: ${pageIdentity.primaryAccentHex} | Secondary Accent Hex: ${pageIdentity.secondaryAccentHex} | Primary Text Hex: ${pageIdentity.textPrimaryHex}
  - Visual Hierarchy Rationale (EN): ${pageIdentity.hierarchyRationale.en}
  - មូលហេតុនៃការជ្រើសរើសពណ៌ (KM): ${pageIdentity.hierarchyRationale.km}

2. Visual Wireframe & Layout Grid (ប្លង់រៀបចំសមាសភាគលើទំព័រ)
- Grid Allocation (16:9 Canvas): ${wireframe.gridAllocation}
- Header Section:
  - EN: ${wireframe.headerSection.en}
  - KM: ${wireframe.headerSection.km}
- Main Workspace Canvas — Left/Top Zone:
  - EN: ${wireframe.leftZone.en}
  - KM: ${wireframe.leftZone.km}
- Main Workspace Canvas — Right/Bottom Zone:
  - EN: ${wireframe.rightZone.en}
  - KM: ${wireframe.rightZone.km}
- Footer / Navigation Strip:
  - EN: ${wireframe.bottomOrTopBar.en}
  - KM: ${wireframe.bottomOrTopBar.km}

3. Chart, Metrics & Math Mapping (ការរៀបចំក្រាហ្វ ទិន្នន័យ និងរូបមន្ត)
- Metric Scorecards (សូចនាករគន្លឹះ):
${scorecardsText}
- Interactive Chart Setup (ការកំណត់ទម្រង់ក្រាហ្វ):
${chartsText}
- Mathematical Formulas (រូបមន្តគណិតវិទ្យា):
${formulasText}

4. Page Controls & Interactive Filters (ប៊ូតុងបញ្ជា និងតម្រងទិន្នន័យ)
${controlsText}

5. Expanded Bilingual Content & In-Depth Explanation (អត្ថបទពន្យល់លម្អិតបន្ថែមជាពីរភាសា)
- On-Screen Text (អត្ថបទបង្ហាញលើអេក្រង់):
  Heading: ${expandedContent.onScreenText.heading.en} / ${expandedContent.onScreenText.heading.km}
${bulletsText}
  Callout (EN): ${expandedContent.onScreenText.callout.en}
  ចំណុចសង្កត់សំខាន់ (KM): ${expandedContent.onScreenText.callout.km}
- Deep-Dive Lesson Explanation (ការពន្យល់ពង្រីកសេចក្តីលម្អិត):
  - EN: ${expandedContent.deepDiveExplanation.en}
  - KM: ${expandedContent.deepDiveExplanation.km}
- Practical Application/Example (ឧទាហរណ៍ជាក់ស្តែង):
  - Scenario Title: ${expandedContent.practicalApplication.scenarioTitle.en} / ${expandedContent.practicalApplication.scenarioTitle.km}
  - EN: ${expandedContent.practicalApplication.description.en}
  - KM: ${expandedContent.practicalApplication.description.km}
  - Target Impact Metric: ${expandedContent.practicalApplication.impactMetric}
`;
}

export function formatAllSlidesToMarkdown(): string {
  return ALL_41_SLIDES.map((s) => formatSlideBlueprintToMarkdown(s)).join('\n\n' + '='.repeat(80) + '\n\n');
}
