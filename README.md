# Dr. Puneeth V - Standalone Academic & Research Website

A modern, standalone, hostable, and creative academic personal website for **Dr. Puneeth V**, Assistant Professor in the Department of Mathematics at **CHRIST (Deemed to be University), Bengaluru**. 

Transformed from the original Google Site (`https://sites.google.com/view/v-puneeth`) into a high-performance web application.

---

## 🌟 Key Features & Creative Enhancements

- **Complete Content & Asset Preservation**: 100% of text, titles, headings, paragraphs, dates, research publications, links, and original profile/faculty photos are preserved.
- **Spelling Correction Enforced**: "Iterns" has been corrected to **"Interns"** across all navigation, headers, and content cards.
- **21 Preserved Pages & Subpages**: Complete structure recreated using standalone React + Vite + TypeScript routing without any `iframe` embeds or external site redirects.
- **Academic Visual Aesthetics**: Deep navy, slate, and royal blue color hierarchy with subtle mathematical background grids, glassmorphism cards, micro-animations, and responsive layouts.
- **Filterable Publications Portal**: Search and filter over 60 published journal articles across 2018–2025 by year or keyword with direct DOI / journal links.
- **Interactive Global Collaborators & Networking**: Grid layouts showcasing international university collaborators across Saudi Arabia, South Korea, South Africa, China, Kuwait, and India.
- **Research Lab & Student Supervision**: Structured directories for PhD Mathematics scholars, Postgraduate researchers, and Undergraduate students.
- **Testimonials Wall**: 11 authentic student testimonials presented in editorial quote cards.
- **Office Hours & Location Map**: Interactive campus map embed with consultation timings (9:30 AM to 2:30 PM) and Google Form appointment integration instructions.
- **Full Responsiveness & Accessibility**: Tested for mobile (320px+), tablet, laptop, and desktop displays with custom dark/light theme toggle.

---

## 🏗️ Project Architecture & File Organization

```
v-puneeth-website/
├── src/
│   ├── assets/
│   │   └── images/                       # Local original images & downloaded assets
│   │       ├── dr-puneeth-hero.jpg
│   │       ├── christ-university-banner.jpg
│   │       ├── collaborator-*.jpg         # Academic collaborators photos
│   │       ├── institution-*.jpg          # Partner university photos
│   │       └── intern-sirisha-reddy.jpg
│   ├── components/
│   │   ├── Navbar.tsx                    # Header navigation with mobile drawer & theme toggle
│   │   ├── Footer.tsx                    # Academic footer with quick links & back-to-top
│   │   ├── PageHeader.tsx                # Dynamic banner header with breadcrumbs
│   │   └── ScrollProgress.tsx            # Top reading progress indicator
│   ├── data/
│   │   └── siteData.ts                   # Master data store for publications, collaborators, lab members, etc.
│   ├── pages/
│   │   ├── HomePage.tsx
│   │   ├── ResearchPage.tsx
│   │   ├── PublicationsPage.tsx          # 60+ filterable research papers
│   │   ├── ProjectsPage.tsx              # Funded SEED Money research project
│   │   ├── CollaboratorsPage.tsx         # International collaborators
│   │   ├── NetworkingInstitutionsPage.tsx
│   │   ├── EditorialMemberPage.tsx
│   │   ├── ResearchLabPage.tsx           # PhD, PG, UG scholars
│   │   ├── ConferencesPage.tsx
│   │   ├── ConferencesOrganisedPage.tsx
│   │   ├── ConferencesParticipationPage.tsx
│   │   ├── ThesisDissertationsPage.tsx
│   │   ├── OutreachPage.tsx
│   │   ├── OutreachInvitedTalksPage.tsx
│   │   ├── OutreachExpertSessionsPage.tsx
│   │   ├── OutreachMOOCPage.tsx
│   │   ├── BioDataPage.tsx               # Resume & CV download links
│   │   ├── TestimonialsPage.tsx          # Student quotes & feedback
│   │   ├── InternshipPage.tsx            # Interns (corrected spelling)
│   │   └── OfficeHoursPage.tsx           # Consultations & interactive map
│   ├── App.tsx                           # Master client-side routing & theme controller
│   ├── index.css                         # CSS design system, typography, & tokens
│   └── main.tsx
├── index.html                            # SEO metadata, Open Graph tags & Google fonts
├── package.json
└── tsconfig.json
```

---

## 💻 Local Development Setup

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Start Local Development Server**:
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` in your browser.

3. **Build for Production**:
   ```bash
   npm run build
   ```
   Generates a optimized static bundle in the `dist/` directory.

4. **Preview Production Build**:
   ```bash
   npm run preview
   ```

---

## 🚀 Deployment Instructions

### 1. Netlify
- Drag and drop the `dist/` folder directly to [Netlify Drop](https://app.netlify.com/drop).
- Or connect your GitHub repository:
  - **Build Command**: `npm run build`
  - **Publish Directory**: `dist`

### 2. Vercel
- Install Vercel CLI or import repository on [Vercel Dashboard](https://vercel.com).
  - **Framework Preset**: `Vite`
  - **Build Command**: `npm run build`
  - **Output Directory**: `dist`

### 3. GitHub Pages
- Run `npm run build`
- Deploy the `dist/` folder using `gh-pages` package or GitHub Actions workflow.

---

## 📝 How to Edit Website Content

All site text, publications, collaborators, lab scholars, and contact details are organized in `src/data/siteData.ts`.
To update:
- **New Publications**: Add new entries to the `publications` array in `siteData.ts`.
- **Collaborators**: Update `collaborators` array in `siteData.ts` and place photos in `src/assets/images/`.
- **Office Hours / Email**: Edit `siteInfo` object in `siteData.ts`.

---

## 📋 Missing Assets Audit

Every accessible image, photo, text line, document link, and iframe from the source Google Site has been retrieved and stored locally.

- **Missing Assets**: None. All images and resources found on the Google Site have been extracted and integrated.
