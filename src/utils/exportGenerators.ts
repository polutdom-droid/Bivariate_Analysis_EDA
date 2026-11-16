import { SlideBlueprint } from '../types/blueprint';
import { formatAllSlidesToMarkdown } from '../data/allSlides';
import { GAPMINDER_2007_SAMPLE, TIPS_SAMPLE, COVID_SURVEY_2021 } from '../data/datasets';

// ============================================================================
// Pure TypeScript Uncompressed ZIP Builder for OpenXML (.pptx) Packaging
// ============================================================================

const CRC_TABLE = (() => {
  const table = new Uint32Array(256);
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) {
      c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    }
    table[n] = c;
  }
  return table;
})();

function crc32(bytes: Uint8Array): number {
  let crc = 0xffffffff;
  for (let i = 0; i < bytes.length; i++) {
    crc = CRC_TABLE[(crc ^ bytes[i]) & 0xff] ^ (crc >>> 8);
  }
  return (crc ^ 0xffffffff) >>> 0;
}

interface ZipEntry {
  path: string;
  data: Uint8Array;
}

function createZipBlob(entries: ZipEntry[], mimeType: string): Blob {
  const encoder = new TextEncoder();
  const fileRecords: {
    nameBytes: Uint8Array;
    data: Uint8Array;
    crc: number;
    offset: number;
  }[] = [];

  let totalSize = 0;
  for (const entry of entries) {
    const nameBytes = encoder.encode(entry.path);
    const crc = crc32(entry.data);
    fileRecords.push({
      nameBytes,
      data: entry.data,
      crc,
      offset: totalSize,
    });
    // Local file header (30 bytes) + name + data
    totalSize += 30 + nameBytes.length + entry.data.length;
  }

  const centralDirOffset = totalSize;
  let centralDirSize = 0;
  for (const rec of fileRecords) {
    centralDirSize += 46 + rec.nameBytes.length;
  }

  const buffer = new ArrayBuffer(totalSize + centralDirSize + 22);
  const view = new DataView(buffer);
  const outBytes = new Uint8Array(buffer);

  let pos = 0;
  for (const rec of fileRecords) {
    view.setUint32(pos, 0x04034b50, true); // Local file header signature
    view.setUint16(pos + 4, 20, true); // Version needed
    view.setUint16(pos + 6, 0x0800, true); // UTF-8 flag
    view.setUint16(pos + 8, 0, true); // Store method (uncompressed)
    view.setUint16(pos + 10, 0, true); // Mod time
    view.setUint16(pos + 12, 0x21, true); // Mod date
    view.setUint32(pos + 14, rec.crc, true);
    view.setUint32(pos + 18, rec.data.length, true);
    view.setUint32(pos + 22, rec.data.length, true);
    view.setUint16(pos + 26, rec.nameBytes.length, true);
    view.setUint16(pos + 28, 0, true);
    pos += 30;
    outBytes.set(rec.nameBytes, pos);
    pos += rec.nameBytes.length;
    outBytes.set(rec.data, pos);
    pos += rec.data.length;
  }

  for (const rec of fileRecords) {
    view.setUint32(pos, 0x02014b50, true); // Central file header signature
    view.setUint16(pos + 4, 20, true);
    view.setUint16(pos + 6, 20, true);
    view.setUint16(pos + 8, 0x0800, true); // UTF-8 flag
    view.setUint16(pos + 10, 0, true);
    view.setUint16(pos + 12, 0, true);
    view.setUint16(pos + 14, 0x21, true);
    view.setUint32(pos + 16, rec.crc, true);
    view.setUint32(pos + 20, rec.data.length, true);
    view.setUint32(pos + 24, rec.data.length, true);
    view.setUint16(pos + 28, rec.nameBytes.length, true);
    view.setUint16(pos + 30, 0, true);
    view.setUint16(pos + 32, 0, true);
    view.setUint16(pos + 34, 0, true);
    view.setUint16(pos + 36, 0, true);
    view.setUint32(pos + 38, 0, true);
    view.setUint32(pos + 42, rec.offset, true);
    pos += 46;
    outBytes.set(rec.nameBytes, pos);
    pos += rec.nameBytes.length;
  }

  // End of central directory record (22 bytes)
  view.setUint32(pos, 0x06054b50, true);
  view.setUint16(pos + 4, 0, true);
  view.setUint16(pos + 6, 0, true);
  view.setUint16(pos + 8, fileRecords.length, true);
  view.setUint16(pos + 10, fileRecords.length, true);
  view.setUint32(pos + 12, centralDirSize, true);
  view.setUint32(pos + 16, centralDirOffset, true);
  view.setUint16(pos + 20, 0, true);

  return new Blob([buffer], { type: mimeType });
}

function escapeXml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

// ============================================================================
// 1. Editable PowerPoint + Khmer Font XML (.pptx)
// ============================================================================

export function generateEditablePptxBlob(slides: SlideBlueprint[]): Blob {
  const encoder = new TextEncoder();
  const entries: ZipEntry[] = [];

  const addXml = (path: string, xml: string) => {
    entries.push({ path, data: encoder.encode(xml.trim()) });
  };

  // [Content_Types].xml
  const slideOverrides = slides
    .map(
      (_, i) =>
        `<Override PartName="/ppt/slides/slide${i + 1}.xml" ContentType="application/vnd.openxmlformats-officedocument.presentationml.slide+xml"/>`
    )
    .join('\n  ');

  addXml(
    '[Content_Types].xml',
    `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
  <Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>
  <Default Extension="xml" ContentType="application/xml"/>
  <Override PartName="/ppt/presentation.xml" ContentType="application/vnd.openxmlformats-officedocument.presentationml.presentation.main+xml"/>
  <Override PartName="/ppt/slideMasters/slideMaster1.xml" ContentType="application/vnd.openxmlformats-officedocument.presentationml.slideMaster+xml"/>
  <Override PartName="/ppt/slideLayouts/slideLayout1.xml" ContentType="application/vnd.openxmlformats-officedocument.presentationml.slideLayout+xml"/>
  <Override PartName="/ppt/theme/theme1.xml" ContentType="application/vnd.openxmlformats-officedocument.theme+xml"/>
  ${slideOverrides}
</Types>`
  );

  // _rels/.rels
  addXml(
    '_rels/.rels',
    `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="ppt/presentation.xml"/>
</Relationships>`
  );

  // ppt/_rels/presentation.xml.rels
  const presSlideRels = slides
    .map(
      (_, i) =>
        `<Relationship Id="rIdSlide${i + 1}" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/slide" Target="slides/slide${i + 1}.xml"/>`
    )
    .join('\n  ');

  addXml(
    'ppt/_rels/presentation.xml.rels',
    `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rIdMaster1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/slideMaster" Target="slideMasters/slideMaster1.xml"/>
  <Relationship Id="rIdTheme1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/theme" Target="theme/theme1.xml"/>
  ${presSlideRels}
</Relationships>`
  );

  // ppt/presentation.xml (16:9 Widescreen: cx="12192000" cy="6858000")
  const sldIdLst = slides
    .map((s, i) => `<p:sldId id="${256 + i}" r:id="rIdSlide${i + 1}"/>`)
    .join('\n    ');

  addXml(
    'ppt/presentation.xml',
    `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<p:presentation xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" xmlns:p="http://schemas.openxmlformats.org/presentationml/2006/main">
  <p:sldMasterIdLst>
    <p:sldMasterId id="2147483648" r:id="rIdMaster1"/>
  </p:sldMasterIdLst>
  <p:sldIdLst>
    ${sldIdLst}
  </p:sldIdLst>
  <p:sldSz cx="12192000" cy="6858000" type="screen16x9"/>
  <p:notesSz cx="6858000" cy="9144000"/>
</p:presentation>`
  );

  // ppt/theme/theme1.xml (Explicitly binding Inter + Kantumruy Pro for Khmer Complex Script)
  addXml(
    'ppt/theme/theme1.xml',
    `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<a:theme xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" name="LookerStudioExecutiveTheme">
  <a:themeElements>
    <a:clrScheme name="ExecutiveDark">
      <a:dk1><a:srgbClr val="0B1120"/></a:dk1>
      <a:lt1><a:srgbClr val="FFFFFF"/></a:lt1>
      <a:dk2><a:srgbClr val="1E293B"/></a:dk2>
      <a:lt2><a:srgbClr val="F8FAFC"/></a:lt2>
      <a:accent1><a:srgbClr val="38BDF8"/></a:accent1>
      <a:accent2><a:srgbClr val="FACC15"/></a:accent2>
      <a:accent3><a:srgbClr val="10B981"/></a:accent3>
      <a:accent4><a:srgbClr val="F97316"/></a:accent4>
      <a:accent5><a:srgbClr val="A855F7"/></a:accent5>
      <a:accent6><a:srgbClr val="EC4899"/></a:accent6>
      <a:hlink><a:srgbClr val="38BDF8"/></a:hlink>
      <a:folHlink><a:srgbClr val="94A3B8"/></a:folHlink>
    </a:clrScheme>
    <a:fontScheme name="KhmerBilingualFonts">
      <a:majorFont>
        <a:latin typeface="Inter"/>
        <a:ea typeface="Kantumruy Pro"/>
        <a:cs typeface="Kantumruy Pro"/>
        <a:font script="Khmr" typeface="Kantumruy Pro"/>
      </a:majorFont>
      <a:minorFont>
        <a:latin typeface="Inter"/>
        <a:ea typeface="Kantumruy Pro"/>
        <a:cs typeface="Kantumruy Pro"/>
        <a:font script="Khmr" typeface="Kantumruy Pro"/>
      </a:minorFont>
    </a:fontScheme>
    <a:fmtScheme name="ExecutiveFmt">
      <a:fillStyleLst><a:solidFill><a:schemeClr val="phClr"/></a:solidFill></a:fillStyleLst>
      <a:lnStyleLst><a:ln w="9525"><a:solidFill><a:schemeClr val="phClr"/></a:solidFill></a:ln></a:lnStyleLst>
      <a:effectStyleLst><a:effectStyle><a:effectLst/></a:effectStyle></a:effectStyleLst>
      <a:bgFillStyleLst><a:solidFill><a:schemeClr val="phClr"/></a:solidFill></a:bgFillStyleLst>
    </a:fmtScheme>
  </a:themeElements>
</a:theme>`
  );

  // Slide Master & Slide Layout
  addXml(
    'ppt/slideMasters/_rels/slideMaster1.xml.rels',
    `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rIdLayout1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/slideLayout" Target="../slideLayouts/slideLayout1.xml"/>
  <Relationship Id="rIdTheme1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/theme" Target="../theme/theme1.xml"/>
</Relationships>`
  );

  addXml(
    'ppt/slideMasters/slideMaster1.xml',
    `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<p:sldMaster xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" xmlns:p="http://schemas.openxmlformats.org/presentationml/2006/main">
  <p:cSld>
    <p:spTree>
      <p:nvGrpSpPr><p:cNvPr id="1" name=""/><p:cNvGrpSpPr/><p:nvPr/></p:nvGrpSpPr>
      <p:grpSpPr/>
    </p:spTree>
  </p:cSld>
  <p:clrMap bg1="dk1" tx1="lt1" bg2="dk2" tx2="lt2" accent1="accent1" accent2="accent2" accent3="accent3" accent4="accent4" accent5="accent5" accent6="accent6" hlink="hlink" folHlink="folHlink"/>
  <p:sldLayoutIdLst>
    <p:sldLayoutId id="2147483649" r:id="rIdLayout1"/>
  </p:sldLayoutIdLst>
</p:sldMaster>`
  );

  addXml(
    'ppt/slideLayouts/_rels/slideLayout1.xml.rels',
    `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rIdMaster1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/slideMaster" Target="../slideMasters/slideMaster1.xml"/>
</Relationships>`
  );

  addXml(
    'ppt/slideLayouts/slideLayout1.xml',
    `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<p:sldLayout xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" xmlns:p="http://schemas.openxmlformats.org/presentationml/2006/main" type="blank">
  <p:cSld name="Blank">
    <p:spTree>
      <p:nvGrpSpPr><p:cNvPr id="1" name=""/><p:cNvGrpSpPr/><p:nvPr/></p:nvGrpSpPr>
      <p:grpSpPr/>
    </p:spTree>
  </p:cSld>
</p:sldLayout>`
  );

  // Helper to create an editable text box shape in OpenXML with explicit Kantumruy Pro & Inter XML tags
  const makeTextBoxXml = (
    id: number,
    name: string,
    x: number,
    y: number,
    cx: number,
    cy: number,
    bgColorHex: string,
    paragraphs: { text: string; colorHex: string; fontSizePt: number; bold?: boolean }[]
  ) => {
    const parasXml = paragraphs
      .map(
        (p) => `<a:p>
          <a:r>
            <a:rPr lang="km-KH" altLang="en-US" sz="${Math.round(p.fontSizePt * 100)}" b="${p.bold ? '1' : '0'}" dirty="0">
              <a:solidFill><a:srgbClr val="${p.colorHex.replace('#', '')}"/></a:solidFill>
              <a:latin typeface="Inter"/>
              <a:ea typeface="Kantumruy Pro"/>
              <a:cs typeface="Kantumruy Pro"/>
            </a:rPr>
            <a:t>${escapeXml(p.text)}</a:t>
          </a:r>
        </a:p>`
      )
      .join('\n');

    return `<p:sp>
      <p:nvSpPr>
        <p:cNvPr id="${id}" name="${escapeXml(name)}"/>
        <p:cNvSpPr txBox="1"/>
        <p:nvPr/>
      </p:nvSpPr>
      <p:spPr>
        <a:xfrm><a:off x="${x}" y="${y}"/><a:ext cx="${cx}" cy="${cy}"/></a:xfrm>
        <a:prstGeom prst="roundRect"><a:avLst><a:gd name="adj" fmla="val 3500"/></a:avLst></a:prstGeom>
        <a:solidFill><a:srgbClr val="${bgColorHex.replace('#', '')}"/></a:solidFill>
        <a:ln w="12700"><a:solidFill><a:srgbClr val="1E293B"/></a:solidFill></a:ln>
      </p:spPr>
      <p:txBody>
        <a:bodyPr wrap="square" lIns="180000" tIns="140000" rIns="180000" bIns="140000"/>
        <a:lstStyle/>
        ${parasXml}
      </p:txBody>
    </p:sp>`;
  };

  // Generate each of the 41 isolated slides
  slides.forEach((slide, idx) => {
    const slideNum = idx + 1;

    addXml(
      `ppt/slides/_rels/slide${slideNum}.xml.rels`,
      `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rIdLayout1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/slideLayout" Target="../slideLayouts/slideLayout1.xml"/>
</Relationships>`
    );

    const headerShape = makeTextBoxXml(
      2,
      `Header_Page_${slideNum}`,
      450000,
      320000,
      11292000,
      1450000,
      '0D1526',
      [
        {
          text: `[LOOKER STUDIO PAGE ${slide.pageNumber} • SLIDE ${slide.pageNumber}]  |  ${slide.sectionTag.en}  |  Theme: ${slide.pageIdentity.themeName.en}`,
          colorHex: '38BDF8',
          fontSizePt: 11,
          bold: true,
        },
        {
          text: slide.pageIdentity.titleEn,
          colorHex: 'FFFFFF',
          fontSizePt: 20,
          bold: true,
        },
        {
          text: slide.pageIdentity.titleKm,
          colorHex: 'FACC15',
          fontSizePt: 16,
          bold: true,
        },
      ]
    );

    const bulletsParagraphs = slide.expandedContent.onScreenText.bullets.flatMap((b, bIdx) => [
      {
        text: `${bIdx + 1}. (EN) ${b.en}`,
        colorHex: 'F8FAFC',
        fontSizePt: 11,
        bold: false,
      },
      {
        text: `   (KM) ${b.km}`,
        colorHex: 'FDE047',
        fontSizePt: 11,
        bold: false,
      },
    ]);

    const leftContentShape = makeTextBoxXml(
      3,
      `LeftContent_Page_${slideNum}`,
      450000,
      1950000,
      5500000,
      4450000,
      '0B1120',
      [
        {
          text: 'ON-SCREEN BILINGUAL CONTENT (អត្ថបទបង្ហាញលើអេក្រង់)',
          colorHex: '38BDF8',
          fontSizePt: 12,
          bold: true,
        },
        {
          text: `${slide.expandedContent.onScreenText.heading.en} / ${slide.expandedContent.onScreenText.heading.km}`,
          colorHex: 'FFFFFF',
          fontSizePt: 13,
          bold: true,
        },
        ...bulletsParagraphs,
        {
          text: `Callout: ${slide.expandedContent.onScreenText.callout.en}`,
          colorHex: '38BDF8',
          fontSizePt: 10.5,
          bold: true,
        },
        {
          text: `ចំណុចសំខាន់៖ ${slide.expandedContent.onScreenText.callout.km}`,
          colorHex: 'FACC15',
          fontSizePt: 10.5,
          bold: true,
        },
      ]
    );

    const formulasAndChartsParas = [
      {
        text: 'CHART, METRICS & FORMULAS (ក្រាហ្វ សូចនាករ និងរូបមន្ត)',
        colorHex: '38BDF8',
        fontSizePt: 12,
        bold: true,
      },
      ...slide.chartMetricsMath.scorecards.map((sc) => ({
        text: `• KPI: ${sc.label.en} (${sc.label.km}) = ${sc.value} [${sc.metricField}]`,
        colorHex: '10B981',
        fontSizePt: 11,
        bold: true,
      })),
      ...slide.chartMetricsMath.formulas.flatMap((fm) => [
        {
          text: `Formula: ${fm.title.en} (${fm.title.km})`,
          colorHex: 'FACC15',
          fontSizePt: 11,
          bold: true,
        },
        {
          text: `   ${fm.equation}`,
          colorHex: '38BDF8',
          fontSizePt: 12,
          bold: true,
        },
      ]),
      {
        text: 'DEEP-DIVE EXPLANATION (ការពន្យល់លម្អិត)៖',
        colorHex: 'FACC15',
        fontSizePt: 11.5,
        bold: true,
      },
      {
        text: slide.expandedContent.deepDiveExplanation.en,
        colorHex: 'E2E8F0',
        fontSizePt: 10,
        bold: false,
      },
      {
        text: slide.expandedContent.deepDiveExplanation.km,
        colorHex: 'FEF08A',
        fontSizePt: 10,
        bold: false,
      },
    ];

    const rightContentShape = makeTextBoxXml(
      4,
      `RightContent_Page_${slideNum}`,
      6150000,
      1950000,
      5592000,
      4450000,
      '0B1120',
      formulasAndChartsParas
    );

    addXml(
      `ppt/slides/slide${slideNum}.xml`,
      `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<p:sld xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" xmlns:p="http://schemas.openxmlformats.org/presentationml/2006/main">
  <p:cSld>
    <p:bg>
      <p:bgPr>
        <a:solidFill><a:srgbClr val="060A12"/></a:solidFill>
        <a:effectLst/>
      </p:bgPr>
    </p:bg>
    <p:spTree>
      <p:nvGrpSpPr><p:cNvPr id="1" name=""/><p:cNvGrpSpPr/><p:nvPr/></p:nvGrpSpPr>
      <p:grpSpPr/>
      ${headerShape}
      ${leftContentShape}
      ${rightContentShape}
    </p:spTree>
  </p:cSld>
</p:sld>`
    );
  });

  return createZipBlob(
    entries,
    'application/vnd.openxmlformats-officedocument.presentationml.presentation'
  );
}

// ============================================================================
// 2. 100% Exact-Font Locked Slides (.pptx) — Renders Kantumruy Pro & Original Slide onto High-Res Canvas
// ============================================================================

async function renderSlideToLockedPngBytes(slide: SlideBlueprint): Promise<Uint8Array> {
  const canvas = document.createElement('canvas');
  canvas.width = 1920;
  canvas.height = 1080;
  const ctx = canvas.getContext('2d')!;

  // Dark Navy Background
  ctx.fillStyle = '#060A12';
  ctx.fillRect(0, 0, 1920, 1080);

  // Header Banner
  ctx.fillStyle = '#0D1526';
  ctx.fillRect(40, 30, 1840, 175);
  ctx.strokeStyle = '#1E293B';
  ctx.lineWidth = 2;
  ctx.strokeRect(40, 30, 1840, 175);

  // Badge
  ctx.fillStyle = '#38BDF8';
  ctx.font = 'bold 20px "JetBrains Mono", monospace';
  ctx.fillText(
    `LOOKER STUDIO PAGE ${slide.pageNumber} • SLIDE ${slide.pageNumber}  |  ${slide.sectionTag.en.toUpperCase()}`,
    70,
    72
  );

  // English Title
  ctx.fillStyle = '#FFFFFF';
  ctx.font = 'bold 34px "Plus Jakarta Sans", sans-serif';
  ctx.fillText(slide.pageIdentity.titleEn, 70, 125);

  // Khmer Title (Locked in exact Kantumruy Pro font!)
  ctx.fillStyle = '#FACC15';
  ctx.font = 'bold 28px "Kantumruy Pro", sans-serif';
  ctx.fillText(slide.pageIdentity.titleKm, 70, 175);

  // Load original slide image on the left half
  await new Promise<void>((resolve) => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => {
      ctx.fillStyle = '#FFFFFF';
      ctx.fillRect(40, 230, 920, 620);
      ctx.drawImage(img, 50, 240, 900, 600);
      resolve();
    };
    img.onerror = () => resolve();
    img.src = `/assets/slides/slide-${slide.pageNumber}.png`;
  });

  // Right Panel: Bilingual Summary & Key Takeaways rendered in exact Kantumruy Pro
  ctx.fillStyle = '#0B1120';
  ctx.fillRect(990, 230, 890, 810);
  ctx.strokeStyle = '#1E293B';
  ctx.strokeRect(990, 230, 890, 810);

  ctx.fillStyle = '#38BDF8';
  ctx.font = 'bold 22px "Plus Jakarta Sans", sans-serif';
  ctx.fillText('BILINGUAL LOOKER STUDIO SPECIFICATION', 1025, 280);

  let yCursor = 330;
  const wrapText = (text: string, x: number, y: number, maxWidth: number, lineHeight: number) => {
    const words = text.split(' ');
    let line = '';
    let curY = y;
    for (let n = 0; n < words.length; n++) {
      const testLine = line + words[n] + ' ';
      const metrics = ctx.measureText(testLine);
      if (metrics.width > maxWidth && n > 0) {
        ctx.fillText(line, x, curY);
        line = words[n] + ' ';
        curY += lineHeight;
      } else {
        line = testLine;
      }
    }
    ctx.fillText(line, x, curY);
    return curY + lineHeight;
  };

  slide.expandedContent.onScreenText.bullets.slice(0, 3).forEach((b, i) => {
    ctx.fillStyle = '#FFFFFF';
    ctx.font = '600 20px "Plus Jakarta Sans", sans-serif';
    yCursor = wrapText(`${i + 1}. ${b.en}`, 1025, yCursor, 820, 30);

    ctx.fillStyle = '#FACC15';
    ctx.font = '500 20px "Kantumruy Pro", sans-serif';
    yCursor = wrapText(`   ${b.km}`, 1025, yCursor + 4, 820, 34);
    yCursor += 18;
  });

  // Bottom Left Callout Box
  ctx.fillStyle = '#0D1526';
  ctx.fillRect(40, 870, 920, 170);
  ctx.strokeStyle = '#0284C7';
  ctx.strokeRect(40, 870, 920, 170);

  ctx.fillStyle = '#38BDF8';
  ctx.font = 'bold 19px "Plus Jakarta Sans", sans-serif';
  yCursor = wrapText(slide.expandedContent.onScreenText.callout.en, 65, 910, 870, 28);

  ctx.fillStyle = '#FACC15';
  ctx.font = '500 19px "Kantumruy Pro", sans-serif';
  wrapText(slide.expandedContent.onScreenText.callout.km, 65, yCursor + 8, 870, 30);

  const blob: Blob = await new Promise((resolve) =>
    canvas.toBlob((b) => resolve(b!), 'image/png')
  );
  const arrayBuffer = await blob.arrayBuffer();
  return new Uint8Array(arrayBuffer);
}

export async function generateExactFontLockedPptxBlob(
  slides: SlideBlueprint[],
  onProgress?: (current: number, total: number) => void
): Promise<Blob> {
  const encoder = new TextEncoder();
  const entries: ZipEntry[] = [];
  const addXml = (path: string, xml: string) => {
    entries.push({ path, data: encoder.encode(xml.trim()) });
  };

  const slideOverrides = slides
    .map(
      (_, i) =>
        `<Override PartName="/ppt/slides/slide${i + 1}.xml" ContentType="application/vnd.openxmlformats-officedocument.presentationml.slide+xml"/>`
    )
    .join('\n  ');

  addXml(
    '[Content_Types].xml',
    `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
  <Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>
  <Default Extension="xml" ContentType="application/xml"/>
  <Default Extension="png" ContentType="image/png"/>
  <Override PartName="/ppt/presentation.xml" ContentType="application/vnd.openxmlformats-officedocument.presentationml.presentation.main+xml"/>
  <Override PartName="/ppt/slideMasters/slideMaster1.xml" ContentType="application/vnd.openxmlformats-officedocument.presentationml.slideMaster+xml"/>
  <Override PartName="/ppt/slideLayouts/slideLayout1.xml" ContentType="application/vnd.openxmlformats-officedocument.presentationml.slideLayout+xml"/>
  <Override PartName="/ppt/theme/theme1.xml" ContentType="application/vnd.openxmlformats-officedocument.theme+xml"/>
  ${slideOverrides}
</Types>`
  );

  addXml(
    '_rels/.rels',
    `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="ppt/presentation.xml"/>
</Relationships>`
  );

  const presSlideRels = slides
    .map(
      (_, i) =>
        `<Relationship Id="rIdSlide${i + 1}" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/slide" Target="slides/slide${i + 1}.xml"/>`
    )
    .join('\n  ');

  addXml(
    'ppt/_rels/presentation.xml.rels',
    `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rIdMaster1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/slideMaster" Target="slideMasters/slideMaster1.xml"/>
  <Relationship Id="rIdTheme1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/theme" Target="theme/theme1.xml"/>
  ${presSlideRels}
</Relationships>`
  );

  const sldIdLst = slides
    .map((_, i) => `<p:sldId id="${256 + i}" r:id="rIdSlide${i + 1}"/>`)
    .join('\n    ');

  addXml(
    'ppt/presentation.xml',
    `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<p:presentation xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" xmlns:p="http://schemas.openxmlformats.org/presentationml/2006/main">
  <p:sldMasterIdLst><p:sldMasterId id="2147483648" r:id="rIdMaster1"/></p:sldMasterIdLst>
  <p:sldIdLst>${sldIdLst}</p:sldIdLst>
  <p:sldSz cx="12192000" cy="6858000" type="screen16x9"/>
  <p:notesSz cx="6858000" cy="9144000"/>
</p:presentation>`
  );

  addXml(
    'ppt/theme/theme1.xml',
    `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<a:theme xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" name="LockedFontTheme">
  <a:themeElements>
    <a:clrScheme name="Dark"><a:dk1><a:srgbClr val="000000"/></a:dk1><a:lt1><a:srgbClr val="FFFFFF"/></a:lt1><a:dk2><a:srgbClr val="1E293B"/></a:dk2><a:lt2><a:srgbClr val="F8FAFC"/></a:lt2><a:accent1><a:srgbClr val="38BDF8"/></a:accent1><a:accent2><a:srgbClr val="FACC15"/></a:accent2><a:accent3><a:srgbClr val="10B981"/></a:accent3><a:accent4><a:srgbClr val="F97316"/></a:accent4><a:accent5><a:srgbClr val="A855F7"/></a:accent5><a:accent6><a:srgbClr val="EC4899"/></a:accent6><a:hlink><a:srgbClr val="38BDF8"/></a:hlink><a:folHlink><a:srgbClr val="94A3B8"/></a:folHlink></a:clrScheme>
    <a:fontScheme name="Kantumruy"><a:majorFont><a:latin typeface="Kantumruy Pro"/><a:ea typeface="Kantumruy Pro"/><a:cs typeface="Kantumruy Pro"/></a:majorFont><a:minorFont><a:latin typeface="Kantumruy Pro"/><a:ea typeface="Kantumruy Pro"/><a:cs typeface="Kantumruy Pro"/></a:minorFont></a:fontScheme>
    <a:fmtScheme name="Fmt"><a:fillStyleLst><a:solidFill><a:schemeClr val="phClr"/></a:solidFill></a:fillStyleLst><a:lnStyleLst><a:ln w="9525"><a:solidFill><a:schemeClr val="phClr"/></a:solidFill></a:ln></a:lnStyleLst><a:effectStyleLst><a:effectStyle><a:effectLst/></a:effectStyle></a:effectStyleLst><a:bgFillStyleLst><a:solidFill><a:schemeClr val="phClr"/></a:solidFill></a:bgFillStyleLst></a:fmtScheme>
  </a:themeElements>
</a:theme>`
  );

  addXml(
    'ppt/slideMasters/_rels/slideMaster1.xml.rels',
    `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rIdLayout1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/slideLayout" Target="../slideLayouts/slideLayout1.xml"/>
  <Relationship Id="rIdTheme1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/theme" Target="../theme/theme1.xml"/>
</Relationships>`
  );

  addXml(
    'ppt/slideMasters/slideMaster1.xml',
    `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<p:sldMaster xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" xmlns:p="http://schemas.openxmlformats.org/presentationml/2006/main">
  <p:cSld><p:spTree><p:nvGrpSpPr><p:cNvPr id="1" name=""/><p:cNvGrpSpPr/><p:nvPr/></p:nvGrpSpPr><p:grpSpPr/></p:spTree></p:cSld>
  <p:clrMap bg1="dk1" tx1="lt1" bg2="dk2" tx2="lt2" accent1="accent1" accent2="accent2" accent3="accent3" accent4="accent4" accent5="accent5" accent6="accent6" hlink="hlink" folHlink="folHlink"/>
  <p:sldLayoutIdLst><p:sldLayoutId id="2147483649" r:id="rIdLayout1"/></p:sldLayoutIdLst>
</p:sldMaster>`
  );

  addXml(
    'ppt/slideLayouts/_rels/slideLayout1.xml.rels',
    `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rIdMaster1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/slideMaster" Target="../slideMasters/slideMaster1.xml"/>
</Relationships>`
  );

  addXml(
    'ppt/slideLayouts/slideLayout1.xml',
    `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<p:sldLayout xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" xmlns:p="http://schemas.openxmlformats.org/presentationml/2006/main" type="blank">
  <p:cSld name="Blank"><p:spTree><p:nvGrpSpPr><p:cNvPr id="1" name=""/><p:cNvGrpSpPr/><p:nvPr/></p:nvGrpSpPr><p:grpSpPr/></p:spTree></p:cSld>
</p:sldLayout>`
  );

  for (let i = 0; i < slides.length; i++) {
    const slideNum = i + 1;
    if (onProgress) onProgress(slideNum, slides.length);
    const pngBytes = await renderSlideToLockedPngBytes(slides[i]);
    entries.push({ path: `ppt/media/slide_${slideNum}.png`, data: pngBytes });

    addXml(
      `ppt/slides/_rels/slide${slideNum}.xml.rels`,
      `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rIdLayout1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/slideLayout" Target="../slideLayouts/slideLayout1.xml"/>
  <Relationship Id="rIdImg1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/image" Target="../media/slide_${slideNum}.png"/>
</Relationships>`
    );

    addXml(
      `ppt/slides/slide${slideNum}.xml`,
      `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<p:sld xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" xmlns:p="http://schemas.openxmlformats.org/presentationml/2006/main">
  <p:cSld>
    <p:spTree>
      <p:nvGrpSpPr><p:cNvPr id="1" name=""/><p:cNvGrpSpPr/><p:nvPr/></p:nvGrpSpPr>
      <p:grpSpPr/>
      <p:pic>
        <p:nvPicPr>
          <p:cNvPr id="2" name="LockedSlideImage_${slideNum}"/>
          <p:cNvPicPr><a:picLocks noChangeAspect="1"/></p:cNvPicPr>
          <p:nvPr/>
        </p:nvPicPr>
        <p:blipFill>
          <a:blip r:embed="rIdImg1"/>
          <a:stretch><a:fillRect/></a:stretch>
        </p:blipFill>
        <p:spPr>
          <a:xfrm><a:off x="0" y="0"/><a:ext cx="12192000" cy="6858000"/></a:xfrm>
          <a:prstGeom prst="rect"><a:avLst/></a:prstGeom>
        </p:spPr>
      </p:pic>
    </p:spTree>
  </p:cSld>
</p:sld>`
    );
  }

  return createZipBlob(
    entries,
    'application/vnd.openxmlformats-officedocument.presentationml.presentation'
  );
}

// ============================================================================
// 3. Editable + Exact Font Web Slides (.html)
// ============================================================================

export function generateEditableHtmlSlidesBlob(slides: SlideBlueprint[]): Blob {
  const slidesHtml = slides
    .map(
      (s) => `
    <section class="slide-card" id="slide-${s.pageNumber}">
      <div class="slide-header">
        <span class="badge">[LOOKER STUDIO PAGE ${s.pageNumber} • SLIDE ${s.pageNumber}]</span>
        <span class="badge-sec">${escapeXml(s.sectionTag.en)}</span>
        <h2 contenteditable="true" class="title-en">${escapeXml(s.pageIdentity.titleEn)}</h2>
        <h3 contenteditable="true" class="title-km">${escapeXml(s.pageIdentity.titleKm)}</h3>
      </div>
      <div class="slide-grid">
        <div class="box" contenteditable="true">
          <div class="box-title">ON-SCREEN TEXT &amp; KEY BULLETS (អត្ថបទបង្ហាញលើអេក្រង់)</div>
          <h4>${escapeXml(s.expandedContent.onScreenText.heading.en)} / ${escapeXml(s.expandedContent.onScreenText.heading.km)}</h4>
          <ul>
            ${s.expandedContent.onScreenText.bullets
              .map(
                (b) =>
                  `<li><strong>EN:</strong> ${escapeXml(b.en)}<br/><span class="km"><strong>KM:</strong> ${escapeXml(b.km)}</span></li>`
              )
              .join('')}
          </ul>
          <div class="callout">
            <strong>Callout:</strong> ${escapeXml(s.expandedContent.onScreenText.callout.en)}<br/>
            <span class="km">${escapeXml(s.expandedContent.onScreenText.callout.km)}</span>
          </div>
        </div>
        <div class="box" contenteditable="true">
          <div class="box-title">FORMULAS, CHARTS &amp; DEEP-DIVE (រូបមន្ត និងការពន្យល់ស៊ីជម្រៅ)</div>
          ${s.chartMetricsMath.formulas
            .map(
              (f) =>
                `<div class="formula"><strong>${escapeXml(f.title.en)} (${escapeXml(f.title.km)})</strong><code>${escapeXml(f.equation)}</code></div>`
            )
            .join('')}
          <p>${escapeXml(s.expandedContent.deepDiveExplanation.en)}</p>
          <p class="km">${escapeXml(s.expandedContent.deepDiveExplanation.km)}</p>
          <div class="case-study">
            <strong>Case Study: ${escapeXml(s.expandedContent.practicalApplication.scenarioTitle.en)}</strong><br/>
            <span class="km">${escapeXml(s.expandedContent.practicalApplication.scenarioTitle.km)}</span>
            <p>${escapeXml(s.expandedContent.practicalApplication.description.en)}</p>
            <p class="km">${escapeXml(s.expandedContent.practicalApplication.description.km)}</p>
          </div>
        </div>
      </div>
    </section>`
    )
    .join('\n');

  const html = `<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8" />
  <title>Editable Bilingual Web Slides — II. Bivariate Analysis (41 Pages)</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&family=JetBrains+Mono:wght@400;600&family=Kantumruy+Pro:wght@400;500;600;700&display=swap" rel="stylesheet">
  <style>
    * { box-sizing: border-box; }
    body {
      margin: 0;
      padding: 24px;
      background: #060A12;
      color: #F8FAFC;
      font-family: 'Inter', 'Kantumruy Pro', sans-serif;
    }
    .top-bar {
      position: sticky;
      top: 0;
      z-index: 20;
      background: #0D1526;
      border: 1px solid #1E293B;
      border-radius: 12px;
      padding: 12px 20px;
      margin-bottom: 24px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .slide-card {
      background: #0B1120;
      border: 2px solid #1E293B;
      border-radius: 18px;
      padding: 28px;
      margin-bottom: 28px;
      max-width: 1280px;
      margin-left: auto;
      margin-right: auto;
    }
    .badge {
      background: #082F49;
      border: 1px solid #0284C7;
      color: #38BDF8;
      font-family: 'JetBrains Mono', monospace;
      font-size: 12px;
      font-weight: 700;
      padding: 4px 10px;
      border-radius: 6px;
      margin-right: 8px;
    }
    .badge-sec {
      background: #1E293B;
      color: #CBD5E1;
      font-size: 12px;
      padding: 4px 10px;
      border-radius: 6px;
    }
    .title-en {
      font-size: 26px;
      font-weight: 800;
      margin: 14px 0 6px;
      color: #FFFFFF;
    }
    .title-km {
      font-family: 'Kantumruy Pro', sans-serif;
      font-size: 22px;
      font-weight: 700;
      margin: 0 0 18px;
      color: #FACC15;
      line-height: 1.6;
    }
    .slide-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
    }
    .box {
      background: #080D1A;
      border: 1px solid #1E293B;
      border-radius: 12px;
      padding: 18px;
    }
    .box-title {
      color: #38BDF8;
      font-family: 'JetBrains Mono', monospace;
      font-size: 12px;
      font-weight: 700;
      margin-bottom: 10px;
    }
    .km {
      font-family: 'Kantumruy Pro', sans-serif;
      color: #FEF08A;
      line-height: 1.75;
    }
    ul { padding-left: 18px; }
    li { margin-bottom: 10px; line-height: 1.6; }
    .callout {
      background: #082F49;
      border: 1px solid #0284C7;
      border-radius: 8px;
      padding: 12px;
      margin-top: 12px;
    }
    .formula {
      background: #050811;
      border: 1px solid #1E293B;
      border-radius: 8px;
      padding: 10px;
      margin-bottom: 10px;
    }
    .formula code {
      display: block;
      margin-top: 6px;
      color: #34D399;
      font-family: 'JetBrains Mono', monospace;
      font-size: 14px;
    }
    .case-study {
      background: #06281E;
      border: 1px solid #10B981;
      border-radius: 8px;
      padding: 12px;
      margin-top: 12px;
    }
    @media print {
      .top-bar { display: none; }
      .slide-card { page-break-after: always; }
    }
  </style>
</head>
<body>
  <div class="top-bar">
    <div>
      <strong>Looker Studio BI Blueprints • Editable Web Slides (41 Pages)</strong>
      <span style="color:#FACC15; margin-left:12px; font-family:'Kantumruy Pro'">អាចចុចកែអក្សរខ្មែរ/អង់គ្លេសបានផ្ទាល់លើគ្រប់ប្រអប់ (Click any text to edit)</span>
    </div>
    <button onclick="window.print()" style="background:#059669;color:#fff;border:none;padding:8px 16px;border-radius:8px;cursor:pointer;font-weight:700;">Print / Save as PDF</button>
  </div>
  ${slidesHtml}
</body>
</html>`;

  return new Blob([html], { type: 'text/html;charset=utf-8' });
}

// ============================================================================
// Bottom Tab 1, 2, 3 Generators (.md, .csv, .sql)
// ============================================================================

export function getMarkdownPreviewText(): string {
  return `# Google Looker Studio Interactive Presentation Blueprint
## Course: 02_Bivariate_Analysis_EDA_ITC_AMS (41 Isolated Pages)
## Author: Mr. POL Utdom | Languages: English & Khmer (ភាសាខ្មែរ)

${formatAllSlidesToMarkdown()}`;
}

export function getLookerStudioCsvText(slides: SlideBlueprint[]): string {
  const esc = (v: string | number) => `"${String(v).replace(/"/g, '""')}"`;

  const header = [
    'page_number',
    'slide_footer_number',
    'section_en',
    'section_km',
    'title_en',
    'title_km',
    'theme_name_en',
    'primary_hex',
    'secondary_hex',
    'primary_chart_type_en',
    'primary_chart_type_km',
    'primary_formula',
    'benchmark_impact_metric',
  ].join(',');

  const slideRows = slides.map((s) =>
    [
      s.pageNumber,
      s.slideFooterNumber,
      s.sectionTag.en,
      s.sectionTag.km,
      s.pageIdentity.titleEn,
      s.pageIdentity.titleKm,
      s.pageIdentity.themeName.en,
      s.pageIdentity.primaryAccentHex,
      s.pageIdentity.secondaryAccentHex,
      s.chartMetricsMath.charts[0]?.chartType.en || 'Conceptual / Divider',
      s.chartMetricsMath.charts[0]?.chartType.km || 'ទំព័រផ្តើមជំពូក',
      s.chartMetricsMath.formulas[0]?.equation || 'N/A',
      s.expandedContent.practicalApplication.impactMetric,
    ]
      .map(esc)
      .join(',')
  );

  const gapminderHeader = `\n\n# DATASET 2: GAPMINDER_2007_BIVARIATE_SAMPLE\ncountry,continent,year,lifeExp,pop,gdpPercap,gdpCategory`;
  const gapminderRows = GAPMINDER_2007_SAMPLE.map((r) =>
    [r.country, r.continent, r.year, r.lifeExp, r.pop, r.gdpPercap, r.gdpCategory].map(esc).join(',')
  );

  const tipsHeader = `\n\n# DATASET 3: RESTAURANT_TIPS_BIVARIATE_SAMPLE\nid,total_bill,tip,sex`;
  const tipsRows = TIPS_SAMPLE.map((t) =>
    [t.id, t.totalBill, t.tip, t.sex].map(esc).join(',')
  );

  const covidHeader = `\n\n# DATASET 4: COVID_SURVEY_CONTINGENCY_TABLE\njob_code,job_title_en,job_title_km,favor_0,favor_1,favor_2,favor_3`;
  const covidRows = COVID_SURVEY_2021.map((c) =>
    [c.jobCode, c.jobTitleEn, c.jobTitleKm, c.favor0, c.favor1, c.favor2, c.favor3].map(esc).join(',')
  );

  return [
    '# DATASET 1: LOOKER_STUDIO_41_PAGES_BLUEPRINT_INDEX',
    header,
    ...slideRows,
    gapminderHeader,
    ...gapminderRows,
    tipsHeader,
    ...tipsRows,
    covidHeader,
    ...covidRows,
  ].join('\n');
}

export function getCalculatedFieldsSqlText(): string {
  return `-- ============================================================================
-- Google Looker Studio & BigQuery Calculated Fields SQL Blueprint
-- Course: II. Bivariate Analysis (Exploratory Data Analysis & Unsupervised Learning)
-- Bilingual Specification (English & Khmer / ភាសាខ្មែរ)
-- ============================================================================

-- 1. Logarithmic GDP per Capita Transformation (Slide 19 — Log-10 Axis Scaling)
-- បំប្លែងតម្លៃ GDP ក្នុងមនុស្សម្នាក់ទៅជាមាត្រដ្ឋាន Log គោល ១០ ដើម្បីបំបាត់ភាពពេប (Right-Skewness)
SELECT
  country,
  continent,
  year,
  lifeExp,
  pop,
  gdpPercap,
  LOG10(gdpPercap) AS log10_gdpPercap,
  CASE
    WHEN gdpPercap > 55000 THEN 'Very rich'
    WHEN gdpPercap > 20000 THEN 'Rich'
    WHEN gdpPercap > 5000  THEN 'Middle'
    WHEN gdpPercap > 2200  THEN 'Poor'
    ELSE 'Very poor'
  END AS gdp_cat
FROM \`project.dataset.gapminder\`;

-- 2. Sample Covariance & Pearson Linear Correlation r (Slides 9, 10, 12)
-- គណនាកូវ៉ារ្យង់គំរូ Cov(X,Y) និងមេគុណសហសម្ព័ន្ធលីនេអ៊ែរ Pearson (r)
SELECT
  COVAR_SAMP(total_bill, tip) AS sample_covariance_xy,
  CORR(total_bill, tip) AS pearson_r_total_bill_tip,
  CORR(lifeExp, gdpPercap) AS pearson_r_linear_life_gdp,
  CORR(lifeExp, LOG10(gdpPercap)) AS pearson_r_log_life_gdp
FROM \`project.dataset.bivariate_metrics\`;

-- 3. Spearman Rank Correlation rho (Slides 13, 14, 15, 16)
-- គណនាមេគុណសហសម្ព័ន្ធចំណាត់ថ្នាក់ Spearman (ρ) ដោយបំប្លែងតម្លៃទៅជាចំណាត់ថ្នាក់ RANK()
WITH RankedData AS (
  SELECT
    country,
    continent,
    RANK() OVER (ORDER BY lifeExp ASC) AS rank_lifeExp,
    RANK() OVER (ORDER BY gdpPercap ASC) AS rank_gdpPercap,
    RANK() OVER (ORDER BY pop ASC) AS rank_pop
  FROM \`project.dataset.gapminder\`
  WHERE year = 2007
)
SELECT
  CORR(rank_lifeExp, rank_gdpPercap) AS spearman_rho_life_gdp,
  CORR(rank_lifeExp, rank_pop) AS spearman_rho_life_pop
FROM RankedData;

-- 4. One-Way ANOVA Eta-Squared (η²) for Qualitative x Quantitative (Slides 23, 24, 27)
-- គណនាសមាមាត្រវ៉ារ្យង់ពន្យល់ដោយក្រុមទ្វីប Eta-Squared: η² = SS_between / SS_total
WITH GroupStats AS (
  SELECT
    continent,
    COUNT(*) AS n_k,
    AVG(lifeExp) AS mean_k,
    AVG(AVG(lifeExp)) OVER () AS grand_mean
  FROM \`project.dataset.gapminder\`
  WHERE year = 2007
  GROUP BY continent
),
TotalVariance AS (
  SELECT
    SUM(POW(lifeExp - grand.grand_mean, 2)) AS ss_total
  FROM \`project.dataset.gapminder\`
  CROSS JOIN (SELECT AVG(lifeExp) AS grand_mean FROM \`project.dataset.gapminder\` WHERE year = 2007) grand
  WHERE year = 2007
)
SELECT
  SUM(g.n_k * POW(g.mean_k - g.grand_mean, 2)) AS ss_between,
  MAX(t.ss_total) AS ss_total,
  SAFE_DIVIDE(SUM(g.n_k * POW(g.mean_k - g.grand_mean, 2)), MAX(t.ss_total)) AS eta_squared_lifeExp
FROM GroupStats g
CROSS JOIN TotalVariance t;

-- 5. Contingency Table Chi-Square (χ²) & Bias-Corrected Cramér's V (Slides 30, 32, 33)
-- គណនាតម្លៃរំពឹងទុក E_ij, ស្ថិតិ Chi-Square (χ²) និងមេគុណ Cramér's V កែតម្រូវលម្អៀង
WITH Observed AS (
  SELECT age_category, worry_level, observed_count
  FROM \`project.dataset.covid_survey_2021\`
),
Marginals AS (
  SELECT
    age_category,
    worry_level,
    observed_count AS o_ij,
    SUM(observed_count) OVER (PARTITION BY age_category) AS n_i_dot,
    SUM(observed_count) OVER (PARTITION BY worry_level) AS n_dot_j,
    SUM(observed_count) OVER () AS n_total
  FROM Observed
)
SELECT
  SUM(POW(o_ij - (n_i_dot * n_dot_j / n_total), 2) / (n_i_dot * n_dot_j / n_total)) AS chi_square_stat,
  SQRT(
    SAFE_DIVIDE(
      SUM(POW(o_ij - (n_i_dot * n_dot_j / n_total), 2) / (n_i_dot * n_dot_j / n_total)) / MAX(n_total),
      3 -- min(I-1, J-1) = min(4-1, 4-1) = 3
    )
  ) AS cramers_v
FROM Marginals;
`;
}
