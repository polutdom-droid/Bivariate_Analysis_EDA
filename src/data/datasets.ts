export interface GapminderRow {
  country: string;
  continent: 'Asia' | 'Europe' | 'Africa' | 'Americas' | 'Oceania';
  year: number;
  lifeExp: number;
  pop: number;
  gdpPercap: number;
  gdpCategory: 'Developing' | 'Emerging' | 'Developed';
}

export const GAPMINDER_2007_SAMPLE: GapminderRow[] = [
  { country: 'Cambodia', continent: 'Asia', year: 2007, lifeExp: 59.72, pop: 14131858, gdpPercap: 1713.78, gdpCategory: 'Developing' },
  { country: 'Japan', continent: 'Asia', year: 2007, lifeExp: 82.60, pop: 127467972, gdpPercap: 31656.07, gdpCategory: 'Developed' },
  { country: 'Singapore', continent: 'Asia', year: 2007, lifeExp: 79.97, pop: 4553009, gdpPercap: 47143.18, gdpCategory: 'Developed' },
  { country: 'China', continent: 'Asia', year: 2007, lifeExp: 72.96, pop: 1318683096, gdpPercap: 4959.11, gdpCategory: 'Emerging' },
  { country: 'India', continent: 'Asia', year: 2007, lifeExp: 64.70, pop: 1110396331, gdpPercap: 2452.21, gdpCategory: 'Developing' },
  { country: 'Vietnam', continent: 'Asia', year: 2007, lifeExp: 74.25, pop: 85262356, gdpPercap: 2441.58, gdpCategory: 'Developing' },
  { country: 'Thailand', continent: 'Asia', year: 2007, lifeExp: 70.62, pop: 65068149, gdpPercap: 7458.40, gdpCategory: 'Emerging' },
  { country: 'South Korea', continent: 'Asia', year: 2007, lifeExp: 78.62, pop: 49044790, gdpPercap: 23348.14, gdpCategory: 'Developed' },
  { country: 'Malaysia', continent: 'Asia', year: 2007, lifeExp: 74.24, pop: 24821286, gdpPercap: 12451.66, gdpCategory: 'Developed' },
  { country: 'Indonesia', continent: 'Asia', year: 2007, lifeExp: 70.65, pop: 223547000, gdpPercap: 3540.65, gdpCategory: 'Emerging' },
  { country: 'France', continent: 'Europe', year: 2007, lifeExp: 80.66, pop: 61083916, gdpPercap: 30470.02, gdpCategory: 'Developed' },
  { country: 'Germany', continent: 'Europe', year: 2007, lifeExp: 79.41, pop: 82400996, gdpPercap: 32170.37, gdpCategory: 'Developed' },
  { country: 'Norway', continent: 'Europe', year: 2007, lifeExp: 80.20, pop: 4627926, gdpPercap: 49357.19, gdpCategory: 'Developed' },
  { country: 'Spain', continent: 'Europe', year: 2007, lifeExp: 80.94, pop: 40448191, gdpPercap: 28821.06, gdpCategory: 'Developed' },
  { country: 'Poland', continent: 'Europe', year: 2007, lifeExp: 75.56, pop: 38518241, gdpPercap: 15389.92, gdpCategory: 'Developed' },
  { country: 'Romania', continent: 'Europe', year: 2007, lifeExp: 72.48, pop: 22276056, gdpPercap: 10808.48, gdpCategory: 'Emerging' },
  { country: 'United States', continent: 'Americas', year: 2007, lifeExp: 78.24, pop: 301139947, gdpPercap: 42951.65, gdpCategory: 'Developed' },
  { country: 'Canada', continent: 'Americas', year: 2007, lifeExp: 80.65, pop: 33390141, gdpPercap: 36319.24, gdpCategory: 'Developed' },
  { country: 'Brazil', continent: 'Americas', year: 2007, lifeExp: 72.39, pop: 190010647, gdpPercap: 9065.80, gdpCategory: 'Emerging' },
  { country: 'Mexico', continent: 'Americas', year: 2007, lifeExp: 76.19, pop: 108700891, gdpPercap: 11977.57, gdpCategory: 'Developed' },
  { country: 'Chile', continent: 'Americas', year: 2007, lifeExp: 78.55, pop: 16284741, gdpPercap: 13171.64, gdpCategory: 'Developed' },
  { country: 'Bolivia', continent: 'Americas', year: 2007, lifeExp: 65.55, pop: 9119152, gdpPercap: 3822.14, gdpCategory: 'Emerging' },
  { country: 'Haiti', continent: 'Americas', year: 2007, lifeExp: 60.92, pop: 8502814, gdpPercap: 1201.64, gdpCategory: 'Developing' },
  { country: 'Nigeria', continent: 'Africa', year: 2007, lifeExp: 46.86, pop: 135031164, gdpPercap: 2013.98, gdpCategory: 'Developing' },
  { country: 'Egypt', continent: 'Africa', year: 2007, lifeExp: 71.34, pop: 80264543, gdpPercap: 5581.18, gdpCategory: 'Emerging' },
  { country: 'South Africa', continent: 'Africa', year: 2007, lifeExp: 49.34, pop: 43997828, gdpPercap: 9269.66, gdpCategory: 'Emerging' },
  { country: 'Gabon', continent: 'Africa', year: 2007, lifeExp: 56.73, pop: 1454867, gdpPercap: 13206.48, gdpCategory: 'Developed' },
  { country: 'Kenya', continent: 'Africa', year: 2007, lifeExp: 54.11, pop: 35610177, gdpPercap: 1463.25, gdpCategory: 'Developing' },
  { country: 'DR Congo', continent: 'Africa', year: 2007, lifeExp: 46.46, pop: 64606759, gdpPercap: 277.55, gdpCategory: 'Developing' },
  { country: 'Swaziland', continent: 'Africa', year: 2007, lifeExp: 39.61, pop: 1133066, gdpPercap: 4513.48, gdpCategory: 'Emerging' },
  { country: 'Australia', continent: 'Oceania', year: 2007, lifeExp: 81.24, pop: 20434176, gdpPercap: 34435.37, gdpCategory: 'Developed' },
  { country: 'New Zealand', continent: 'Oceania', year: 2007, lifeExp: 80.20, pop: 4115771, gdpPercap: 25185.01, gdpCategory: 'Developed' },
];

export interface TipsRow {
  id: number;
  tip: number;
  totalBill: number;
  sex: 'Female' | 'Male';
}

export const TIPS_SAMPLE: TipsRow[] = [
  { id: 0, tip: 1.01, totalBill: 16.99, sex: 'Female' },
  { id: 1, tip: 1.66, totalBill: 10.34, sex: 'Male' },
  { id: 2, tip: 3.50, totalBill: 21.01, sex: 'Male' },
  { id: 3, tip: 3.31, totalBill: 23.68, sex: 'Male' },
  { id: 4, tip: 3.61, totalBill: 24.59, sex: 'Female' },
  { id: 5, tip: 4.71, totalBill: 25.29, sex: 'Male' },
  { id: 6, tip: 2.00, totalBill: 8.77, sex: 'Male' },
  { id: 7, tip: 3.12, totalBill: 26.88, sex: 'Male' },
  { id: 8, tip: 1.96, totalBill: 15.04, sex: 'Male' },
  { id: 9, tip: 3.23, totalBill: 14.78, sex: 'Male' },
  { id: 10, tip: 5.00, totalBill: 35.26, sex: 'Female' },
  { id: 11, tip: 6.73, totalBill: 48.27, sex: 'Male' },
  { id: 12, tip: 2.50, totalBill: 17.92, sex: 'Female' },
  { id: 13, tip: 4.08, totalBill: 20.65, sex: 'Female' },
  { id: 14, tip: 9.00, totalBill: 48.33, sex: 'Male' },
  { id: 15, tip: 5.14, totalBill: 29.85, sex: 'Female' },
  { id: 16, tip: 3.00, totalBill: 18.69, sex: 'Female' },
  { id: 17, tip: 7.58, totalBill: 39.42, sex: 'Male' },
];

export interface OceaniaTimeSeriesRow {
  year: number;
  australiaLifeExp: number;
  nzLifeExp: number;
  australiaPopM: number;
  nzPopM: number;
  australiaGdp: number;
  nzGdp: number;
}

export const OCEANIA_TIMESERIES: OceaniaTimeSeriesRow[] = [
  { year: 1952, australiaLifeExp: 69.12, nzLifeExp: 69.39, australiaPopM: 8.69, nzPopM: 1.99, australiaGdp: 10040, nzGdp: 10557 },
  { year: 1957, australiaLifeExp: 70.33, nzLifeExp: 70.26, australiaPopM: 9.71, nzPopM: 2.23, australiaGdp: 10950, nzGdp: 12247 },
  { year: 1962, australiaLifeExp: 70.93, nzLifeExp: 71.24, australiaPopM: 10.79, nzPopM: 2.49, australiaGdp: 12217, nzGdp: 13176 },
  { year: 1967, australiaLifeExp: 71.10, nzLifeExp: 71.52, australiaPopM: 11.87, nzPopM: 2.73, australiaGdp: 14526, nzGdp: 14464 },
  { year: 1972, australiaLifeExp: 71.93, nzLifeExp: 71.89, australiaPopM: 13.18, nzPopM: 2.93, australiaGdp: 16789, nzGdp: 16046 },
  { year: 1977, australiaLifeExp: 73.49, nzLifeExp: 72.22, australiaPopM: 14.07, nzPopM: 3.16, australiaGdp: 18334, nzGdp: 16234 },
  { year: 1982, australiaLifeExp: 74.74, nzLifeExp: 73.84, australiaPopM: 15.18, nzPopM: 3.21, australiaGdp: 19477, nzGdp: 17632 },
  { year: 1987, australiaLifeExp: 76.32, nzLifeExp: 74.32, australiaPopM: 16.26, nzPopM: 3.32, australiaGdp: 21889, nzGdp: 19007 },
  { year: 1992, australiaLifeExp: 77.56, nzLifeExp: 76.33, australiaPopM: 17.48, nzPopM: 3.44, australiaGdp: 23425, nzGdp: 18363 },
  { year: 1997, australiaLifeExp: 78.83, nzLifeExp: 77.55, australiaPopM: 18.57, nzPopM: 3.68, australiaGdp: 26998, nzGdp: 21050 },
  { year: 2002, australiaLifeExp: 80.37, nzLifeExp: 79.11, australiaPopM: 19.54, nzPopM: 3.91, australiaGdp: 30688, nzGdp: 23190 },
  { year: 2007, australiaLifeExp: 81.24, nzLifeExp: 80.20, australiaPopM: 20.43, nzPopM: 4.12, australiaGdp: 34435, nzGdp: 25185 },
];

export interface AsiaCategoryEvolutionRow {
  year: number;
  developing: number;
  emerging: number;
  developed: number;
}

export const ASIA_CATEGORY_EVOLUTION: AsiaCategoryEvolutionRow[] = [
  { year: 1952, developing: 16, emerging: 10, developed: 7 },
  { year: 1957, developing: 14, emerging: 12, developed: 7 },
  { year: 1962, developing: 14, emerging: 11, developed: 8 },
  { year: 1967, developing: 14, emerging: 10, developed: 9 },
  { year: 1972, developing: 14, emerging: 8, developed: 11 },
  { year: 1977, developing: 13, emerging: 9, developed: 11 },
  { year: 1982, developing: 12, emerging: 12, developed: 9 },
  { year: 1987, developing: 11, emerging: 11, developed: 11 },
  { year: 1992, developing: 9, emerging: 14, developed: 10 },
  { year: 1997, developing: 9, emerging: 12, developed: 12 },
  { year: 2002, developing: 9, emerging: 11, developed: 13 },
  { year: 2007, developing: 10, emerging: 11, developed: 12 },
];

export interface CovidJobRow {
  jobCode: string;
  jobTitleEn: string;
  jobTitleKm: string;
  favor0: number;
  favor1: number;
  favor2: number;
  favor3: number;
}

export const COVID_SURVEY_2021: CovidJobRow[] = [
  { jobCode: 'F', jobTitleEn: 'Farmer', jobTitleKm: 'កសិករ', favor3: 263, favor2: 616, favor1: 222, favor0: 126 },
  { jobCode: 'SE', jobTitleEn: 'Self-employed & Entrepreneurs', jobTitleKm: 'អ្នកប្រកបរបរផ្ទាល់ខ្លួន និងសហគ្រិន', favor3: 1085, favor2: 2265, favor1: 950, favor0: 562 },
  { jobCode: 'SEP', jobTitleEn: 'Senior Executive Professionals', jobTitleKm: 'អ្នកជំនាញជាន់ខ្ពស់', favor3: 7704, favor2: 10088, favor1: 2864, favor0: 1105 },
  { jobCode: 'MEP', jobTitleEn: 'Middle Executive Professionals', jobTitleKm: 'អ្នកជំនាញកម្រិតមធ្យម', favor3: 4346, favor2: 8889, favor1: 3238, favor0: 1420 },
  { jobCode: 'E', jobTitleEn: 'Employees', jobTitleKm: 'បុគ្គលិកក្រុមហ៊ុន/ស្ថាប័ន', favor3: 4052, favor2: 11264, favor1: 4517, favor0: 2596 },
  { jobCode: 'MW', jobTitleEn: 'Manual Workers', jobTitleKm: 'កម្មករប្រើកម្លាំងពលកម្ម', favor3: 1551, favor2: 4713, favor1: 1910, favor0: 1531 },
  { jobCode: 'NW', jobTitleEn: 'Never Worked & Others', jobTitleKm: 'អ្នកមិនធ្លាប់ធ្វើការ និងផ្សេងៗ', favor3: 2319, favor2: 3892, favor1: 1145, favor0: 622 },
];

export const CONTINENT_GDP_CAT_PERCENT = [
  { continent: 'Africa', continentKm: 'ទ្វីបអាហ្វ្រិក', developing: 71.15, emerging: 21.15, developed: 7.69, totalCountries: 52 },
  { continent: 'Americas', continentKm: 'ទ្វីបអាមេរិក', developing: 4.00, emerging: 68.00, developed: 28.00, totalCountries: 25 },
  { continent: 'Asia', continentKm: 'ទ្វីបអាស៊ី', developing: 30.30, emerging: 33.33, developed: 36.36, totalCountries: 33 },
  { continent: 'Europe', continentKm: 'ទ្វីបអឺរ៉ុប', developing: 0.00, emerging: 23.33, developed: 76.67, totalCountries: 30 },
  { continent: 'Oceania', continentKm: 'ទ្វីបអូសេអានី', developing: 0.00, emerging: 0.00, developed: 100.00, totalCountries: 2 },
];
