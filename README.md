# Looker Studio BI Blueprints · II. Bivariate Analysis (EN / ខ្មែរ)

Interactive 41-slide bilingual teaching studio combining live Plotly-style visualizations, KaTeX mathematical proofs, 10 animated mini-video explainers with Khmer/English voice narration, original PDF slide comparison, and curated Website & YouTube study resources.

---

## Quick Deploy to GitHub + Vercel

### 1. Push Code to GitHub
After downloading and extracting this project folder, open your terminal inside the project directory and run:

```bash
git init
git add .
git commit -m "Initial commit: Looker Studio Bivariate Analysis Studio"
git branch -M main
git remote add origin https://github.com/<YOUR_USERNAME>/<YOUR_REPO_NAME>.git
git push -u origin main
```

### 2. Deploy on Vercel
1. Open [vercel.com/new](https://vercel.com/new) and import your GitHub repository.
2. Vercel automatically detects `vercel.json` and configures:
   - **Framework Preset:** `Vite`
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Serverless API Route:** `/api/tts` (`api/tts.ts`)
3. *(Optional)* Under **Settings → Environment Variables**, add:
   - `GEMINI_API_KEY` = your Google AI Studio API key (if omitted or quota-exhausted, the continuous Khmer/English TTS engine in `/api/tts.ts` still provides uninterrupted voice narration).
4. Click **Deploy**.

---

## Local Development

```bash
npm install
cp .env.example .env
# Optionally set GEMINI_API_KEY in .env
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## របៀបប្រើជាមួយ GitHub និង Vercel (ជាភាសាខ្មែរ)

1. ទាញយក (Download) និងពន្លា (Unzip) កញ្ចប់កូដនេះទុកលើកុំព្យូទ័រ។
2. បង្កើត Repository ថ្មីមួយនៅលើ **GitHub** រួច Push កូដទាំងអស់ឡើងទៅ GitHub។
3. ចូលទៅ **Vercel** → ចុច **Add New Project** → ភ្ជាប់ GitHub Repository របស់អ្នក (Vercel នឹងស្គាល់ `vercel.json` ដោយស្វ័យប្រវត្តិ) → ចុច **Deploy**។
4. *(បន្ថែម)* បើអ្នកចង់ប្រើសំឡេង Gemini 3.8 TTS សូមបញ្ចូល `GEMINI_API_KEY` នៅក្នុង **Environment Variables** របស់ Vercel (បើទោះបីជាមិនដាក់ Key ក៏ប្រព័ន្ធសំឡេងខ្មែរ/អង់គ្លេសបម្រុងនៅតែដំណើរការជាធម្មតា)។
