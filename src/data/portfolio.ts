/**
 * Central portfolio data — generated from Dr. Puneeth V's resume and Google Site.
 * Every fact on the site comes from this verified academic profile.
 */

export type Palette = { from: string; via: string; to: string; accent: string };

export const profile = {
  fullName: 'Dr. Puneeth V',
  displayName: 'Dr. Puneeth V',
  firstName: 'PUNEETH',
  seriesTag: 'THE SERIES',
  /** Fictional studio card shown at the start of the opening sequence. */
  originalLabel: 'A PUNEETH V ORIGINAL',
  role: 'Assistant Professor · Mathematician · AI Researcher',
  affiliation: 'Department of Mathematics, CHRIST (Deemed to be University)',
  tagline: ['Stanford Top 2% Scientist', 'Physics-Informed Neural Networks', 'CFD & Applied Math'],
  intro:
    'Assistant Professor in the Department of Mathematics at CHRIST (Deemed to be University), Bengaluru, and Visiting Lecturer at Universiti Malaysia Terengganu. Ranked among Stanford University’s World Top 2% Most Influential Scientists (2024 & 2025). Specializing in Physics-Informed Neural Networks (PINNs), Computational Fluid Dynamics (CFD), and Generative AI for Higher Education.',
  location: 'Bengaluru 560029, Karnataka, India',
  email: 'puneeth.v@christuniversity.in',
  phone: '+91-9663501058',
  links: {
    googleSite: 'https://sites.google.com/view/v-puneeth',
    christUniversity: 'https://www.christuniversity.in',
    linkedin: 'https://sites.google.com/view/v-puneeth',
    github: 'https://sites.google.com/view/v-puneeth',
  },
  resumePdf: '/assets/Dr_Puneeth_V_Resume.pdf',
  portrait: {
    src: '/assets/portrait-720.webp',
    srcSet: '/assets/portrait-420.webp 420w, /assets/portrait-720.webp 720w, /assets/portrait-1100.webp 1100w',
    alt: 'Portrait of Dr. Puneeth V',
  },
  interests: [
    'Physics-Informed Neural Networks (PINNs)',
    'Computational Fluid Dynamics (CFD)',
    'Generative AI for Educators',
    'Hybrid Mathematical & ML Modeling',
    'Academic Governance & IQAC',
    'Thermal Systems & Sloshing Dynamics',
  ],
};

export const education = [
  {
    school: 'IBM',
    place: 'Online Specialization',
    degree: 'Specialization in Generative AI for Educators',
    period: '2025',
    score: 'IBM Certified',
  },
  {
    school: 'CHRIST (Deemed to be University)',
    place: 'Bengaluru, India',
    degree: 'PhD in Mathematics',
    period: '2019 – 2023',
    score: 'Doctor of Philosophy',
  },
  {
    school: 'CHRIST (Deemed to be University)',
    place: 'Bengaluru, India',
    degree: 'MSc in Mathematics',
    period: '2016 – 2018',
    score: 'Master Degree',
  },
  {
    school: 'Christ University',
    place: 'Bengaluru, India',
    degree: 'BSc in Physics, Mathematics & Electronics',
    period: '2013 – 2016',
    score: 'Bachelor Degree',
  },
  {
    school: 'Christ Junior College',
    place: 'Bengaluru, India',
    degree: 'PUC in PCMB (Physics, Chem, Math, Biology)',
    period: '2011 – 2013',
    score: 'Pre-University',
  },
  {
    school: 'Lady Vailankanni High School',
    place: 'Bengaluru, India',
    degree: 'Secondary School Leaving Certificate (SSLC)',
    period: '2010 – 2011',
    score: 'Distinction',
  },
];

export const experience = [
  {
    company: 'Universiti Malaysia Terengganu',
    role: 'Visiting Lecturer',
    place: 'Terengganu, Malaysia',
    period: '2026 – Present',
    points: [
      'Appointed as Visiting Lecturer at the Faculty of Computer Science and Mathematics, engaging in cross-border research on non-linear fluid dynamics and computational techniques.',
      'Conducting international guest lectures and research exchanges on hybrid mathematical modeling and industrial flow optimization.',
    ],
  },
  {
    company: 'CHRIST (Deemed to be University)',
    role: 'Assistant Professor & IQAC Coordinator',
    place: 'Bengaluru, India',
    period: '2023 – Present',
    points: [
      'Teaching advanced undergraduate and postgraduate mathematics, fluid mechanics, differential equations, and scientific computing.',
      'Serving as Department IQAC Coordinator, Strategic Plan Coordinator, Department & School Timetable Committee Coordinator, and Coordinator for the Centre for Mathematical Needs.',
      'Active mentor for 3 ongoing PhD scholars, 4 postgraduate students, 5 undergraduate research students, and international interns from Oxford.',
    ],
  },
  {
    company: 'CHRIST Online',
    role: 'Assistant Professor',
    place: 'India',
    period: '2025 – Present',
    points: [
      'Delivering technology-enhanced online mathematics education with AI-assisted learning tools and formative assessment frameworks.',
    ],
  },
  {
    company: 'CHRIST (Deemed to be University)',
    role: 'Assistant Professor & SDG Cell Coordinator',
    place: 'Delhi NCR, India',
    period: '2022 – 2023',
    points: [
      'Taught foundational and engineering mathematics; established and coordinated the campus United Nations Sustainable Development Goals (SDG) Cell.',
      'Organized university-wide sustainability seminars, interdisciplinary workshops, and environmental modeling discussions.',
    ],
  },
];

export type Metric = { value: string; label: string };

export type Project = {
  id: string;
  title: string;
  year: string;
  genre: string;
  logline: string;
  stack: string[];
  build: string[];
  features: string[];
  metrics: Metric[];
  github?: string;
  palette: Palette;
  motif: 'shield' | 'flow' | 'tenants';
};

export const projects: Project[] = [
  {
    id: 'pinns-fluid-dynamics',
    title: 'Physics-Informed Neural Networks (PINNs)',
    year: '2024 – 2026',
    genre: 'Deep Learning • Fluid Dynamics • Hybrid Modeling',
    logline: 'Embedding classical Navier-Stokes equations into deep neural networks to solve complex boundary layer flows and heat transfer.',
    stack: ['Python', 'PINNs', 'ANNs', 'Differential Equations', 'Boundary Layer Theory'],
    build: [
      'Engineered hybrid modeling frameworks fusing first-principles governing equations with Physics-Informed Neural Networks (PINNs) to analyze complex fluid flow and heat transfer.',
      'Outperformed traditional purely numerical solvers in computational efficiency for inverse parameter estimation and thermal flow optimization.',
    ],
    features: [
      'Physics-constrained loss functions embedding mass and momentum conservation',
      'Neural-network surrogate models for rapid flow and velocity field prediction',
      'Non-linear boundary condition modeling and parameter estimation',
      'Validation against high-impact peer-reviewed experimental and benchmark datasets',
    ],
    metrics: [
      { value: '73', label: 'research publications' },
      { value: '42', label: 'Q1 journal papers' },
      { value: '1980+', label: 'citations worldwide' },
      { value: '22', label: 'h-index (i-10: 41)' },
    ],
    github: 'https://sites.google.com/view/v-puneeth',
    palette: { from: '#2a0610', via: '#7a0f24', to: '#0b0710', accent: '#ff3d5a' },
    motif: 'flow',
  },
  {
    id: 'cfd-industrial-systems',
    title: 'Industrial CFD & Thermal Simulation',
    year: '2024 – 2026',
    genre: 'CFD • ANSYS Fluent • Thermal Engineering',
    logline: 'CFD investigations on Shell-and-Tube Heat Exchangers (STHX), sloshing dynamics in storage tanks, and industrial consultancy.',
    stack: ['ANSYS Fluent', 'CFD', 'Thermal Systems', 'Mathematica', 'Sloshing Dynamics'],
    build: [
      'Selected as Technical Consultant for ATOMALLOYS (2026) for Computational Fluid Dynamics (CFD) evaluation of 5000L storage tanks.',
      'Conducted CFD investigations on Shell-and-Tube Heat Exchangers (STHX) to optimize flow behavior, thermal performance, and design efficiency under realistic operating conditions.',
    ],
    features: [
      'Transient free-surface CFD modeling of liquid sloshing in 5000L tanks',
      'Thermal efficiency and pressure drop optimization in Shell-and-Tube Heat Exchangers',
      'Industrial engineering validation for operational safety and structural integrity',
      'High-fidelity visual insights and simulation diagnostics for complex transport phenomena',
    ],
    metrics: [
      { value: '5000L', label: 'tank CFD evaluated' },
      { value: 'ATOMALLOYS', label: 'industry technical consultant' },
      { value: 'INR 12L+', label: 'total grants & seed funds' },
      { value: '25', label: 'Taylor & Francis articles' },
    ],
    github: 'https://sites.google.com/view/v-puneeth',
    palette: { from: '#1a0d02', via: '#8a4a07', to: '#0a0806', accent: '#ffb547' },
    motif: 'shield',
  },
  {
    id: 'genai-pedagogy',
    title: 'Generative AI Pedagogical Framework',
    year: '2025 – 2026',
    genre: 'Generative AI • Pedagogy • Higher Education',
    logline: 'IBM-certified methodology integrating Generative AI as a cognitive partner, structured mathematical writing, and adaptive tutorials.',
    stack: ['IBM GenAI', 'Prompt Engineering', 'Differentiated Pedagogy', 'Python', 'Mathematica'],
    build: [
      'Completed IBM Specialization in Generative AI for Educators (2025); developed structured methodologies using AI as an intellectual partner.',
      'Formulated "Writing as a Tool for Conceptual Retention", rigorous interactive tutorial spaces for Gen Z learners, and differentiated pedagogy for diverse student cohorts.',
    ],
    features: [
      'Structured mathematical writing assignments and derivation notebooks',
      'AI-assisted formative assessments and adaptive problem-solving prompts',
      'Rigorous tutorials designed specifically for Gen Z engineering learners',
      'Differentiated scaffolding supporting both foundational and advanced learners',
    ],
    metrics: [
      { value: '10+', label: 'global certifications' },
      { value: '4 Years', label: 'university teaching experience' },
      { value: '12+', label: 'PhD, PG & UG researchers mentored' },
      { value: '6+', label: 'academic conferences & workshops' },
    ],
    github: 'https://sites.google.com/view/v-puneeth',
    palette: { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' },
    motif: 'tenants',
  },
];

export type Achievement = {
  id: string;
  title: string;
  org: string;
  detail: string;
  laurel: string;
  link?: string;
};

export const achievements: Achievement[] = [
  {
    id: 'stanford-top-2',
    title: 'Top 2% Scientist',
    org: 'Stanford University / Elsevier',
    detail: 'Ranked in Stanford University’s global list of the World Top 2% Most Influential Scientists consecutively in 2024 and 2025.',
    laurel: 'Global Top 2%',
    link: 'https://sites.google.com/view/v-puneeth',
  },
  {
    id: 'citations-impact',
    title: '1980+ Citations',
    org: 'Google Scholar & Scopus',
    detail: '73 publications with h-index of 22 and i-10 index of 41 across Taylor & Francis, Elsevier, Springer, Wiley, and World Scientific.',
    laurel: 'High Impact',
    link: 'https://sites.google.com/view/v-puneeth',
  },
  {
    id: 'research-grants',
    title: 'INR 12 Lakhs+ Grants',
    org: 'Govt of India & AICTE',
    detail: 'Secured grants from Ministry of Jalshakti (INR 5L), ANRF (INR 2L), AICTE VAANI (INR 2L), and CHRIST Seed Money (INR 3L).',
    laurel: 'Funded Research',
    link: 'https://sites.google.com/view/v-puneeth',
  },
  {
    id: 'visiting-lecturer',
    title: 'Visiting Lecturer',
    org: 'Universiti Malaysia Terengganu',
    detail: 'Appointed Visiting Lecturer at the Faculty of Computer Science and Mathematics, UMT, Malaysia (2026 – Present).',
    laurel: 'Global Faculty',
    link: 'https://sites.google.com/view/v-puneeth',
  },
  {
    id: 'editorial-board',
    title: 'Assistant Editor',
    org: 'CU Journal of Non-Linear Fluid Mechanics',
    detail: 'Serving on editorial boards for Mapana Journal of Sciences and CU Journal of Non-Linear Fluid Mechanics.',
    laurel: 'Editorial Board',
    link: 'https://sites.google.com/view/v-puneeth',
  },
  {
    id: 'industry-consultancy',
    title: 'Technical Consultant',
    org: 'ATOMALLOYS (2026)',
    detail: 'Technical Consultant for Computational Fluid Dynamics (CFD) evaluation of 5000L tank systems.',
    laurel: 'Industry Impact',
    link: 'https://sites.google.com/view/v-puneeth',
  },
];

export type Certification = { issuer: string; name: string; link: string };

export const certifications: Certification[] = [
  { issuer: 'IBM', name: 'Generative AI for Educators (Specialization)', link: 'https://sites.google.com/view/v-puneeth' },
  { issuer: 'IBM', name: 'Generative AI: Empowering Modern Education', link: 'https://sites.google.com/view/v-puneeth' },
  { issuer: 'IBM', name: 'Generative AI: Introduction and Applications', link: 'https://sites.google.com/view/v-puneeth' },
  { issuer: 'IBM', name: 'Generative AI: Prompt Engineering Basics', link: 'https://sites.google.com/view/v-puneeth' },
  { issuer: 'Cambridge', name: 'Ethical AI: AI Essentials for Everyone', link: 'https://sites.google.com/view/v-puneeth' },
  { issuer: 'UPenn', name: 'AI in Education: Leveraging ChatGPT for Teaching', link: 'https://sites.google.com/view/v-puneeth' },
  { issuer: 'Yale', name: 'Indigenous Religions & Ecology', link: 'https://sites.google.com/view/v-puneeth' },
  { issuer: 'Northwestern', name: 'The Talmud: A Methodological Introduction', link: 'https://sites.google.com/view/v-puneeth' },
  { issuer: 'Toronto', name: 'Aboriginal Worldviews and Education', link: 'https://sites.google.com/view/v-puneeth' },
  { issuer: 'Wesleyan', name: 'The Ancient Greeks', link: 'https://sites.google.com/view/v-puneeth' },
];

export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };

export const skillCategories: SkillCategory[] = [
  {
    id: 'applied-math',
    title: 'Applied Mathematics',
    subtitle: 'Core theory & boundary layer analysis',
    skills: [
      { name: 'Fluid Dynamics', mono: 'Fd', note: 'Primary' },
      { name: 'Nonlinear Boundary Conditions', mono: 'Nl' },
      { name: 'Heat & Mass Transfer', mono: 'Ht' },
      { name: 'Differential Equations', mono: 'De' },
      { name: 'Fluid Instabilities', mono: 'Fi' },
      { name: 'Infinite Series & Partitions', mono: 'Is' },
    ],
  },
  {
    id: 'computational-ai',
    title: 'AI & Scientific Computing',
    subtitle: 'PINNs & Machine Learning',
    skills: [
      { name: 'Physics-Informed Neural Networks', mono: 'Pn', note: 'PINNs' },
      { name: 'Artificial Neural Networks', mono: 'An' },
      { name: 'ANSYS Fluent (CFD)', mono: 'Af' },
      { name: 'Python', mono: 'Py' },
      { name: 'Mathematica', mono: 'Ma' },
    ],
  },
  {
    id: 'generative-ai',
    title: 'Generative AI & EdTech',
    subtitle: 'IBM Certified Specialization',
    skills: [
      { name: 'GenAI in Higher Education', mono: 'Ga', note: 'IBM' },
      { name: 'Prompt Engineering', mono: 'Pe' },
      { name: 'Adaptive Learning Systems', mono: 'Al' },
      { name: 'Formative AI Assessment', mono: 'Fa' },
      { name: 'Ethical AI Guidelines', mono: 'Ea' },
    ],
  },
  {
    id: 'academic-governance',
    title: 'Academic Governance',
    subtitle: 'Accreditation & Quality Assurance',
    skills: [
      { name: 'IQAC Documentation', mono: 'Iq', note: 'Coordinator' },
      { name: 'NAAC Accreditation Process', mono: 'Na' },
      { name: 'Outcome-Based Education (OBE)', mono: 'Ob' },
      { name: 'Strategic Planning', mono: 'Sp' },
      { name: 'SDG Implementation', mono: 'Sd' },
    ],
  },
  {
    id: 'pedagogy',
    title: 'Pedagogical Practice',
    subtitle: 'Learner-Centric Teaching',
    skills: [
      { name: 'Structured Mathematical Writing', mono: 'Mw' },
      { name: 'Gen Z Interactive Tutorials', mono: 'Tu' },
      { name: 'Differentiated Instruction', mono: 'Di' },
      { name: 'Computational Laboratories', mono: 'Cl' },
    ],
  },
  {
    id: 'mentorship',
    title: 'Research Mentorship',
    subtitle: 'Supervision & Teams',
    skills: [
      { name: '3 PhD Scholars Supervised', mono: 'Ph' },
      { name: '4 PG Researchers Guided', mono: 'Pg' },
      { name: '5 UG Researchers Guided', mono: 'Ug' },
      { name: 'Oxford Intern Mentorship', mono: 'Ox' },
    ],
  },
];

export const skillEvidence: Record<string, string[]> = {
  'Physics-Informed Neural Networks': ['73 Research Publications', 'Hybrid Modeling Frameworks', 'Stanford Top 2% (2024 & 2025)'],
  'Fluid Dynamics': ['CU Journal of Non-Linear Fluid Mechanics', 'ISTAM Conference', 'ATOMALLOYS Technical Consultant'],
  'ANSYS Fluent (CFD)': ['ATOMALLOYS 5000L Tank Evaluation', 'Shell-and-Tube Heat Exchangers', 'Sloshing Dynamics'],
  'GenAI in Higher Education': ['IBM Specialization in Generative AI (2025)', 'UPenn AI in Education', 'IBM Modern Education'],
  Python: ['Scientific computing', 'PINNs neural modeling', 'Computational fluid experiments'],
  Mathematica: ['Symbolic fluid modeling', 'RUSA FOSS Project Trainer', 'FDP Invited Talks'],
  'IQAC Documentation': ['Department IQAC Coordinator 2024-Present', 'NAAC Accreditation Reports', 'OBE Frameworks'],
  'Strategic Planning': ['Department Strategic Plan Coordinator 2023-Present', 'Outcome Reporting'],
  'Structured Mathematical Writing': ['Teaching Statement: Conceptual Retention', 'Derivation Notebooks'],
};

export type Episode = {
  code: string;
  title: string;
  description: string;
  tags: string[];
  runtime: string;
  palette: Palette;
};

export type Season = {
  number: number;
  title: string;
  period: string;
  synopsis: string;
  episodes: Episode[];
};

const crimson: Palette = { from: '#24060b', via: '#6e0d1d', to: '#09070a', accent: '#ff3d5a' };
const amber: Palette = { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' };
const ocean: Palette = { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' };
const violet: Palette = { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' };
const jade: Palette = { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' };

export const seasons: Season[] = [
  {
    number: 1,
    title: 'Academic Foundations',
    period: '2010 – 2018',
    synopsis: 'Formative years in Bangalore — building rigorous foundations in Physics, Chemistry, and Pure Mathematics.',
    episodes: [
      {
        code: 'S01 E01',
        title: 'The Spark',
        description: 'SSLC at Lady Vailankanni High School and PUC in PCMB at Christ Junior College, Bangalore.',
        tags: ['PCMB', 'Christ Junior College'],
        runtime: '2010 – 2013',
        palette: amber,
      },
      {
        code: 'S01 E02',
        title: 'Triple Majors',
        description: 'BSc in Physics, Mathematics & Electronics at Christ University — bridging theoretical mathematics with physical systems.',
        tags: ['BSc', 'Physics', 'Mathematics', 'Electronics'],
        runtime: '2013 – 2016',
        palette: ocean,
      },
      {
        code: 'S01 E03',
        title: 'Advanced Mathematics',
        description: 'MSc in Mathematics at CHRIST (Deemed to be University) — deep dive into fluid mechanics, boundary layer analysis, and differential equations.',
        tags: ['MSc', 'Mathematics', 'Distinction'],
        runtime: '2016 – 2018',
        palette: violet,
      },
    ],
  },
  {
    number: 2,
    title: 'The Doctoral Breakthrough',
    period: '2019 – 2023',
    synopsis: 'PhD research in applied mathematics and the transition into academic leadership.',
    episodes: [
      {
        code: 'S02 E01',
        title: 'Doctor of Philosophy',
        description: 'PhD in Mathematics at CHRIST (Deemed to be University) — pioneer investigations into non-linear fluid flows and instabilities.',
        tags: ['PhD', 'Fluid Dynamics', 'Doctorate'],
        runtime: '2019 – 2023',
        palette: crimson,
      },
      {
        code: 'S02 E02',
        title: 'NCR Professorship & SDG Leadership',
        description: 'Assistant Professor at CHRIST Delhi NCR Campus; established and spearheaded the United Nations Sustainable Development Goals (SDG) Cell.',
        tags: ['Assistant Professor', 'SDG Cell', 'Delhi NCR'],
        runtime: '2022 – 2023',
        palette: jade,
      },
    ],
  },
  {
    number: 3,
    title: 'Research Escalation & Global Recognition',
    period: '2023 – 2025',
    synopsis: 'Ranked in Stanford University’s World Top 2% Most Influential Scientists and securing major research grants.',
    episodes: [
      {
        code: 'S03 E01',
        title: 'World Top 2% Scientist',
        description: 'Recognized by Stanford University and Elsevier in the global Top 2% Most Influential Scientists consecutively in 2024 and 2025.',
        tags: ['Stanford Top 2%', 'Global Recognition', '2024 & 2025'],
        runtime: 'Global Stage',
        palette: amber,
      },
      {
        code: 'S03 E02',
        title: 'Grants & Conferences',
        description: 'Secured grants from Ministry of Jalshakti (INR 5L), ANRF (INR 2L), AICTE (INR 2L) and Seed Money (INR 3L). Organized ISTAM-2024 and SAINTS-2026.',
        tags: ['INR 12L+ Grants', 'Jalshakti', 'ANRF', 'AICTE'],
        runtime: '2024 – 2025',
        palette: ocean,
      },
      {
        code: 'S03 E03',
        title: 'PINNs & Hybrid AI',
        description: 'Pioneered hybrid modeling combining Navier-Stokes with Physics-Informed Neural Networks (PINNs) — 73 publications with 42 in Q1 journals.',
        tags: ['73 Publications', '42 Q1 Journals', '1980+ Citations', 'PINNs'],
        runtime: 'h-index 22',
        palette: crimson,
      },
    ],
  },
  {
    number: 4,
    title: 'Global Footprint & Pedagogical Innovation',
    period: '2025 – Present',
    synopsis: 'Generative AI specialization, international visiting lectureship, and industrial CFD consultancy.',
    episodes: [
      {
        code: 'S04 E01',
        title: 'Generative AI Educator',
        description: 'Completed IBM Specialization in Generative AI for Educators (2025); developed structured writing pedagogy and Gen Z tutorial frameworks.',
        tags: ['IBM Certified', 'Generative AI', 'Pedagogy'],
        runtime: '2025',
        palette: violet,
      },
      {
        code: 'S04 E02',
        title: 'Visiting Lecturer — Malaysia',
        description: 'Appointed Visiting Lecturer at the Faculty of Computer Science and Mathematics, Universiti Malaysia Terengganu (UMT).',
        tags: ['UMT Malaysia', 'Visiting Lecturer', 'Global Reach'],
        runtime: '2026 – Present',
        palette: ocean,
      },
      {
        code: 'S04 E03',
        title: 'Industry Consultant & Mentorship',
        description: 'ATOMALLOYS Technical Consultant for 5000L tank CFD; guiding 3 PhD scholars, 4 PG students, 5 UG students and Oxford interns.',
        tags: ['ATOMALLOYS', 'CFD Consultant', 'PhD Supervisor'],
        runtime: '2026',
        palette: jade,
      },
    ],
  },
];

export type TopPick = { label: string; title: string; detail: string; palette: Palette };

export const topPicks: TopPick[] = [
  { label: 'Global Recognition', title: 'Stanford Top 2%', detail: 'World Top 2% Most Influential Scientists (2024 & 2025)', palette: amber },
  { label: 'Research Volume', title: '73 Publications', detail: '42 in Q1 journals • Taylor & Francis, Elsevier, Springer', palette: crimson },
  { label: 'Citation Impact', title: '1980+ Citations', detail: 'h-index of 22 • i-10 index of 41 worldwide', palette: ocean },
  { label: 'Core AI Research', title: 'PINNs & Hybrid AI', detail: 'Physics-Informed Neural Networks for fluid transport', palette: violet },
  { label: 'Industry Impact', title: 'ATOMALLOYS Consultant', detail: 'Technical Consultant for 5000L tank CFD (2026)', palette: jade },
  { label: 'Funded Research', title: 'INR 12,00,000+ Grants', detail: 'Ministry of Jalshakti, ANRF, AICTE & Seed Money', palette: amber },
  { label: 'International Role', title: 'Visiting Lecturer', detail: 'Universiti Malaysia Terengganu (2026 – Present)', palette: ocean },
  { label: 'EdTech Credential', title: 'IBM GenAI Specialist', detail: 'Specialization in Generative AI for Educators (2025)', palette: violet },
  { label: 'Academic Governance', title: 'IQAC & Strategic Plan', detail: 'Coordinator for Quality Assurance & Accreditation', palette: crimson },
  { label: 'Editorial Leadership', title: 'Assistant Editor', detail: 'CU Journal of Non-Linear Fluid Mechanics & Mapana', palette: jade },
];

export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };

export const introSlides: IntroSlide[] = [
  {
    kicker: 'Global Honor',
    title: 'Stanford Top 2%',
    lines: ['Ranked in Stanford University’s World Top 2% Most Influential Scientists', 'Consecutively honored in 2024 and 2025'],
    chips: ['Stanford Top 2%', 'h-index: 22', '1980+ Citations'],
  },
  {
    kicker: 'Affiliations',
    title: 'CHRIST & UMT Malaysia',
    lines: [
      'Assistant Professor · Department of Mathematics, CHRIST (Deemed to be University), Bengaluru',
      'Visiting Lecturer · Faculty of Computer Science & Mathematics, Universiti Malaysia Terengganu',
    ],
    chips: ['CHRIST University', 'UMT Malaysia', 'PhD Mathematics'],
  },
  {
    kicker: 'Research Thrusts',
    title: 'PINNs & Fluid Dynamics',
    lines: [
      'Physics-Informed Neural Networks (PINNs) · Computational Fluid Dynamics (CFD)',
      'Boundary layer flows, thermal systems, sloshing dynamics & non-linear modeling',
    ],
    chips: ['PINNs', 'ANSYS Fluent', 'CFD', 'Applied Math'],
  },
  {
    kicker: 'Publications',
    title: '73 Research Papers',
    lines: [
      '42 Q1 Journals · 22 Q2 Journals',
      'Published in Taylor & Francis (25), Elsevier (12), World Scientific (10), Springer (9), Wiley (7)',
    ],
  },
  {
    kicker: 'Grants & Industry',
    title: 'INR 12L+ Grants & Consultancy',
    lines: [
      'Technical Consultant for ATOMALLOYS (5000L Tank CFD)',
      'Funded by Ministry of Jalshakti, ANRF, AICTE & University Seed Grants',
    ],
  },
  {
    kicker: 'Pedagogy',
    title: 'Generative AI Educator',
    lines: [
      'IBM Specialization in Generative AI for Educators (2025)',
      'Writing as a Tool for Conceptual Retention · Rigorous Tutorials for Gen Z Learners',
    ],
  },
];

export type ProfileId = 'puneeth' | 'recruiter' | 'developer' | 'creative';
export type SectionId = 'about' | 'journey' | 'originals' | 'picks' | 'skills' | 'moments' | 'story';

export const viewerProfiles: {
  id: ProfileId;
  name: string;
  blurb: string;
  color: string;
  order: SectionId[];
}[] = [
  {
    id: 'puneeth',
    name: 'Dr. Puneeth V',
    blurb: 'The complete academic series, in order',
    color: '#e5132b',
    order: ['about', 'journey', 'originals', 'picks', 'skills', 'moments', 'story'],
  },
  {
    id: 'recruiter',
    name: 'Academic Search',
    blurb: 'CV, research metrics & publications first',
    color: '#4cc9ff',
    order: ['story', 'moments', 'skills', 'originals', 'about', 'journey', 'picks'],
  },
  {
    id: 'developer',
    name: 'Researcher / Colleague',
    blurb: 'PINNs, CFD models & funded projects first',
    color: '#46e3a8',
    order: ['originals', 'skills', 'journey', 'moments', 'about', 'picks', 'story'],
  },
  {
    id: 'creative',
    name: 'Student / Educator',
    blurb: 'Teaching statement, pedagogy & courses first',
    color: '#ffb547',
    order: ['journey', 'picks', 'originals', 'moments', 'about', 'skills', 'story'],
  },
];

export const sectionMeta: Record<SectionId, { nav: string; card: string; meta: string; palette: Palette }> = {
  about: { nav: 'About', card: 'About Me', meta: 'The Pilot • Appointments & Background', palette: violet },
  journey: { nav: 'Journey', card: 'Academic Journey', meta: `${seasons.length} Seasons • ${seasons.reduce((n, s) => n + s.episodes.length, 0)} Episodes`, palette: amber },
  originals: { nav: 'Research', card: 'Research Thrusts', meta: `${projects.length} Originals • PINNs & CFD`, palette: crimson },
  picks: { nav: 'Top Picks', card: 'Top Picks', meta: 'Top 10 from the curriculum vitae', palette: jade },
  skills: { nav: 'Expertise', card: 'Domains of Expertise', meta: `${skillCategories.length} Categories`, palette: ocean },
  moments: { nav: 'Honors', card: 'Honors & Grants', meta: `${achievements.length} Honors • ${certifications.length} Certifications`, palette: crimson },
  story: { nav: 'Curriculum Vitae', card: 'The Full Story', meta: 'Complete CV • View & download', palette: violet },
};


// ============================================================================
// COMPLETE ACADEMIC DATA EXTENSIONS (VERIFIED GOOGLE SITE & RESUME PDF)
// ============================================================================


export interface TeachingStatementSection {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  content: string[];
  pullQuote: string;
}

export interface PublicationItem {
  title: string;
  url: string;
  year: number;
  authors?: string;
  journal?: string;
}
export type Publication = PublicationItem;

export interface CollaboratorItem {
  name: string;
  role?: string;
  department: string;
  institution: string;
  location?: string;
  country: string;
  specialization: string;
  image?: string;
}
export type Collaborator = CollaboratorItem;

export interface NetworkingInstitutionItem {
  name: string;
  location: string;
  homeUrl: string;
  image?: string;
}
export type NetworkingInstitution = NetworkingInstitutionItem;

export interface EditorialRole {
  journal: string;
  role: string;
  url?: string;
  scope?: string;
  publisher?: string;
}
export type EditorialRoleItem = EditorialRole;

export interface LabMemberItem {
  name: string;
  role: string;
  period: string;
  degreeLevel: 'phd' | 'postgraduate' | 'undergraduate';
}
export type LabMember = LabMemberItem;

export interface CourseModule {
  moduleNumber: number;
  title: string;
  hours: number;
  topics: string[];
}

export interface CourseItem {
  id: string;
  code: string;
  title: string;
  level: 'Undergraduate' | 'Postgraduate';
  degreePrograms: string[];
  credits: number;
  totalHours: number;
  overview: string;
  objectives: string[];
  modules: CourseModule[];
  outcomes: string[];
  textbooks: string[];
  references: string[];
}
export type Course = CourseItem;

export interface MentoredStudent {
  name: string;
  level: string;
  status: string;
  topicOrFocus: string;
}

export interface CourseCertificationItem {
  id: number;
  title: string;
  institution: string;
  credentialBadge: string;
  year: string;
  domain: string;
}

export interface OutreachItem {
  title: string;
  subtitle?: string;
  location?: string;
  category: string;
  description?: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  degree: string;
}
export type TestimonialItem = Testimonial;

export interface Intern {
  name: string;
  role: string;
  period: string;
}

export interface ResponsibilityItem {
  id: string;
  title: string;
  organization: string;
  category: 'Departmental' | 'Institutional' | 'Academic Committee' | 'Visiting & External';
  period: string;
  roleType: string;
  description: string;
  keyContributions?: string[];
}

export interface AcademicEventItem {
  title?: string;
  role: string;
  period?: string;
  type?: string;
  year?: string;
  event?: string;
  organization?: string;
  badge?: string;
}

export interface GrantFundItem {
  title: string;
  amount: string;
  agency: string;
  year: string;
}

export interface ConsultancyProjectItem {
  title: string;
  client: string;
  period: string;
  scope: string;
}




// 1. UNABRIDGED 6-PART TEACHING STATEMENT (VERBATIM FROM PAGES 6 & 7 OF PDF)
export const TEACHING_STATEMENT_SECTIONS: TeachingStatementSection[] = [
  {
    id: 'statement-philosophy',
    number: '01',
    title: 'Philosophy and Context',
    subtitle: 'Theory, Computation, Application & The Indian Engineering Classroom',
    content: [
      'My academic practice is grounded in the belief that rigorous mathematics, when communicated with clarity and relevance, can significantly shape the intellectual confidence and problem-solving abilities of engineering students in India. As a mathematician working at the interface of theory, computation, and application, I view teaching and research as mutually reinforcing activities. Research keeps my teaching contemporary and inquiry-driven, while classroom engagement constantly reshapes the questions I ask as a researcher.',
      'Indian classrooms are uniquely diverse academically, linguistically, and socio-economically. Teaching in such an ecosystem demands not only subject expertise, but also sensitivity, structure, and adaptability. My approach to teaching mathematics and computation is therefore learner-centric, scaffolded, and strongly aligned with the cognitive and professional needs of Indian engineering students.'
    ],
    pullQuote:
      'Research keeps my teaching contemporary and inquiry-driven, while classroom engagement constantly reshapes the questions I ask as a researcher.'
  },
  {
    id: 'statement-writing',
    number: '02',
    title: 'Writing as a Tool for Conceptual Retention',
    subtitle: 'Restoring Ownership of Ideas Beyond Procedural Problem-Solving',
    content: [
      'One of the most powerful yet underutilized tools in mathematics education is structured writing. I actively encourage students to write mathematics not merely solve problems. Through reflective summaries, derivation notebooks, error-analysis reports, and concept-explanation assignments, students are guided to articulate why a method works, not just how it is applied.',
      'Writing forces students to slow down their thinking, organize ideas, and confront gaps in understanding. I have observed that students who regularly write short conceptual explanations demonstrate stronger long-term retention and transfer of knowledge, especially in courses such as numerical methods, fluid mechanics, and mathematical modelling. This practice is particularly effective in the Indian context, where examination-oriented learning often suppresses conceptual articulation. Writing restores ownership of ideas and transforms passive learners into active thinkers.'
    ],
    pullQuote:
      'Writing restores ownership of ideas and transforms passive learners into active thinkers.'
  },
  {
    id: 'statement-tutorials',
    number: '03',
    title: 'The Need for Rigorous and Structured Tutorials',
    subtitle: 'Core Learning Spaces for Gen Z Learners to Build Mathematical Maturity',
    content: [
      'In my teaching practice, tutorials are not treated as remedial sessions but as core learning spaces for Gen Z learners. I design tutorials to be rigorous, interactive, and progressively challenging, focusing on problem decomposition, estimation, algorithmic thinking, and interpretation of results.',
      'Each tutorial is structured to bridge the gap between lecture material and real-world application. For engineering students many of whom are transitioning from formula-driven school mathematics, tutorials serve as the arena where confidence is built. I emphasize guided problem-solving, peer discussion, and multiple-solution strategies. Rigorous tutorials cultivate mathematical maturity, reduce fear of abstraction, and prepare students for open-ended engineering problems rather than closed-form textbook questions.'
    ],
    pullQuote:
      'Rigorous tutorials cultivate mathematical maturity, reduce fear of abstraction, and prepare students for open-ended engineering problems rather than closed-form textbook questions.'
  },
  {
    id: 'statement-needs',
    number: '04',
    title: 'Understanding Student Needs',
    subtitle: 'Continuous Diagnosis, Differentiated Pacing & Inclusive Excellence',
    content: [
      'A central element of my pedagogy is diagnosing student needs early and continuously. Through diagnostic tests, classroom questioning, informal feedback, and reflective assignments, I assess students’ preparedness, misconceptions, and learning barriers. This allows me to adapt pacing, instructional methods, and assessment strategies in real time. Indian classrooms often contain students with vastly different academic backgrounds. Recognizing this, I employ differentiated instruction offering foundational reinforcement where needed, while simultaneously challenging advanced learners through exploratory problems and mini-projects. Teaching, in my view, is effective only when it is responsive.',
      'I place strong emphasis on supporting both slow and fast learners with sensitivity and confidentiality. Slow learners are assisted through one-to-one mentoring, scaffolded problem sets, and confidence-building interventions without public labeling or academic stigma. Fast learners are provided with enrichment tasks, research-oriented readings, and advanced problem challenges in a discreet manner that preserves classroom equity and peer dynamics. This balanced approach ensures inclusivity while nurturing academic excellence.'
    ],
    pullQuote:
      'Teaching, in my view, is effective only when it is responsive—diagnosing student vulnerabilities with empathy while holding academic standards with uncompromised integrity.'
  },
  {
    id: 'statement-resources',
    number: '05',
    title: 'Curating and Propagating Quality Resources',
    subtitle: 'Discipline in Information Overload & Ethical AI Cognitive Aids',
    content: [
      'In an era of information overload, the role of a teacher extends to that of a curator of quality knowledge. I actively collect, evaluate, and disseminate high-quality learning resources, including textbooks, lecture notes, open-source computational tools, simulations, and research-based articles. Students are guided on how to read technical material, what to focus on, and how to connect resources meaningfully.',
      'By introducing students to structured repositories of learning rather than random online searches, I help them develop disciplined self-learning habits. Alongside traditional resources, I promote the judicious and ethical use of AI-powered learning tools such as ChatGPT, Gemini, and Perplexity. These tools are introduced as cognitive aids for idea clarification, conceptual reinforcement, exploratory questioning, and reference discovery—rather than as shortcuts for answers. Students are trained to critically evaluate AI-generated content, verify results mathematically, and use these platforms to enhance reasoning, not replace it.'
    ],
    pullQuote:
      'AI tools are introduced as cognitive aids for idea clarification, conceptual reinforcement, exploratory questioning, and reference discovery—to enhance reasoning, not replace it.'
  },
  {
    id: 'statement-differentiation',
    number: '06',
    title: 'A Differentiated Approach',
    subtitle: 'Convergence of Rural and Urban Student Cohorts',
    content: [
      'Teaching in India requires conscious differentiation between rural and urban student cohorts, without compromising academic standards. Rural students often possess strong perseverance and intuitive reasoning but may lack early exposure to computational tools, academic English, or exploratory learning environments. For such students, I emphasize confidence-building, gradual abstraction, language-sensitive explanations, and hands-on computation.',
      'Urban students, while often more exposed to technology and competitive environments, may exhibit gaps in conceptual depth and patience with rigor. With them, I emphasize disciplined reasoning, derivations, proof-based thinking, and reflective learning. In both cases, the goal is convergence bringing all students to a common platform of mathematical confidence, autonomy, and professional readiness.'
    ],
    pullQuote:
      'The goal is convergence: bringing all students to a common platform of mathematical confidence, autonomy, and professional readiness.'
  }
];

// ---------------------------------------------------------------------------
// VERBATIM BIOGRAPHY & CORE STATEMENTS FROM PDF
// ---------------------------------------------------------------------------

export const ABOUT_PARAGRAPHS = [
  "I am a research-driven mathematician, academic administrator, and educator who consciously aligns scholarly work, pedagogy, and governance with evolving academic and technological landscapes. I actively keep my research profile current by engaging with contemporary developments such as hybrid modelling frameworks that combine classical governing equations with machine learning approaches, including Physics-Informed Neural Networks and neural-network-based surrogate models. My sustained research output, editorial responsibilities, international collaborations, and recognition in Stanford University’s Top Two Percent of the World’s Most Influential Scientists reflect a commitment to continuous scholarly updating and global academic engagement rather than static specialization.",
  "Beyond research, I remain professionally relevant by actively participating in academic governance and quality assurance processes. As IQAC Coordinator and Strategic Plan Coordinator, I work closely with institutional benchmarks, accreditation frameworks, outcome-based education metrics, and data-driven documentation practices. These roles require continuous learning, policy awareness, and adaptability to evolving higher-education regulations, ensuring that my administrative outlook remains current, compliant, and forward-looking.",
  "My pedagogical practice is equally dynamic and learner-centric. With formal specialization in Generative AI for Educators, I consciously update my teaching methods by integrating educational technology, AI-assisted learning tools, and computational platforms into the classroom. I use AI and digital tools not as static aids, but as evolving pedagogical partners that support personalized learning, formative assessment, and critical thinking, while maintaining ethical and academic rigor. I view relevance as an ongoing process rather than a fixed achievement maintained through research engagement, interdisciplinary exploration, administrative responsibility, and reflective teaching practice. This approach enables me to contribute meaningfully to research-intensive institutions by staying intellectually current, technologically aware, and academically agile."
];

export const RESEARCH_INTERESTS_STATEMENT = [
  "My research interests lie at the intersection of mathematical theory, computational science, and data-driven modelling, with a strong emphasis on addressing contemporary scientific and industrial challenges. In recent years, my research has actively expanded towards integrating machine learning frameworks such as Physics-Informed Neural Networks (PINNs) and Artificial Neural Networks (ANNs) with classical governing equations to enhance the analysis, prediction, and control of complex fluid flow and heat transfer problems. I am interested in hybrid modelling approaches that combine first-principles mathematics with data-driven intelligence to overcome limitations of purely analytical or numerical methods.",
  "I also engage with computational fluid dynamics (CFD) as both a research and visualization tool, employing platforms such as ANSYS Fluent to study flow behaviour, validate mathematical models, and generate high-fidelity visual insights for complex transport phenomena. My research interests are in computational fluid dynamics with applications to thermal systems and transient flow problems relevant to energy and industrial engineering. Recently, I have conducted CFD investigations on shell-and-tube heat exchangers (STHX) to analyze flow behavior, thermal performance, and design efficiency under realistic operating conditions. In addition, I have studied sloshing dynamics in storage tanks, focusing on transient free-surface flows and their implications for structural integrity and operational safety. These studies motivate my pursuit of postdoctoral research in CFD-based analysis and optimization of engineering systems."
];

export const TEACHING_PHILOSOPHY_PARAGRAPHS = [
  "My teaching approach is strongly learner-centric, emphasizing conceptual clarity, active learning, and real-world application. I design courses that move beyond procedural mathematics, encouraging students to explore problem formulation, modelling, interpretation, and computational validation. I actively incorporate flipped classrooms, problem-based learning, guided discovery, and computational laboratories to accommodate diverse learning styles. I integrate digital and computational tools such as Python, Mathematica, and simulation platforms to promote exploratory learning and independent thinking. Continuous assessment, reflective assignments, and research-oriented mini-projects form a key part of my pedagogy, ensuring alignment with outcome-based education and lifelong learning objectives.",
  "I actively engage with the use of educational technology and artificial intelligence to enhance learning experiences and academic outcomes. With a specialization in Generative AI for Educators, I integrate AI-driven tools to support personalized learning, formative assessment, and conceptual understanding while maintaining academic integrity and ethical use. I employ generative AI platforms for adaptive content creation, guided problem-solving, concept visualization, and feedback generation, enabling students to learn at their own pace and depth. My approach positions AI not as a replacement for pedagogy, but as a cognitive partner that enhances critical thinking, creativity, and learner autonomy, preparing students for AI-enabled professional and research environments."
];

export interface AdminPosition {
  title: string;
  departmentOrSchool: string;
  institution: string;
  period: string;
  badge: string;
  description: string;
}

export const ADMINISTRATIVE_POSITIONS: AdminPosition[] = [
  {
    title: 'Coordinator, Centre for Mathematical Needs',
    departmentOrSchool: 'Department of Mathematics',
    institution: 'CHRIST (Deemed to be University) | Bengaluru, India',
    period: '2025 – Present',
    badge: 'DEPARTMENTAL LEADERSHIP',
    description: 'Directing university initiatives dedicated to addressing diverse mathematical requirements across campus disciplines, providing structured mathematical clinics, diagnostics, and customized learning interventions.'
  },
  {
    title: 'Coordinator, School Timetable Committee',
    departmentOrSchool: 'School of Sciences',
    institution: 'CHRIST (Deemed to be University) | Bengaluru, India',
    period: '2024 – Present',
    badge: 'SCHOOL-LEVEL GOVERNANCE',
    description: 'Directing schedule optimization, classroom resource allocation, and multi-departmental faculty scheduling across the School of Sciences.'
  },
  {
    title: 'Coordinator, Internal Quality Assurance Cell (IQAC)',
    departmentOrSchool: 'Department of Mathematics',
    institution: 'CHRIST (Deemed to be University) | Bengaluru, India',
    period: '2024 – Present',
    badge: 'QUALITY ASSURANCE & ACCREDITATION',
    description: 'I have extensive hands-on experience in academic quality assurance and institutional documentation through my role as IQAC Coordinator. My responsibilities include preparation and maintenance of IQAC documentation, support for NAAC-aligned processes, academic audits, outcome-based education (OBE) documentation, program-wise data compilation, and compliance reporting. I have actively contributed to the structuring of course files, attainment reports, faculty activity records, research metrics documentation, and continuous quality improvement (CQI) practices. My work emphasizes accuracy, traceability, and audit-readiness, supporting department in maintaining robust academic governance system.'
  },
  {
    title: 'Coordinator, Department Timetable Committee',
    departmentOrSchool: 'Department of Mathematics',
    institution: 'CHRIST (Deemed to be University) | Bengaluru, India',
    period: '2024 – 2025',
    badge: 'ACADEMIC SCHEDULING',
    description: 'Formulated and balanced teaching workloads, lecture slot distributions, laboratory allocations, and timetable compliance for all undergraduate and postgraduate mathematics tracks.'
  },
  {
    title: 'Coordinator, Strategic Plan',
    departmentOrSchool: 'Department of Mathematics',
    institution: 'CHRIST (Deemed to be University) | Bengaluru, India',
    period: '2023 – Present',
    badge: 'STRATEGIC PLANNING & BENCHMARKING',
    description: 'I have served as the Strategic Plan Coordinator for the Department of Mathematics, actively contributing to the formulation, implementation, and monitoring of the department’s three-year strategic plan aligned with the university’s institutional vision and growth targets. My role involved translating university-level objectives into measurable departmental goals across research output, teaching quality, faculty development, student engagement, and academic visibility. I coordinated data collection, benchmarking, action-plan documentation, progress tracking, and outcome reporting, working closely with faculty members and academic leadership to ensure timely achievement of milestones. This experience strengthened my ability to align academic planning with institutional priorities, support evidence-based decision-making, and contribute to sustainable, goal-oriented academic development.'
  },
  {
    title: 'Coordinator, SDG Cell',
    departmentOrSchool: 'Department of Computational Sciences',
    institution: 'CHRIST (Deemed to be University) | Delhi NCR',
    period: '2022 – 2023',
    badge: 'UN SUSTAINABLE DEVELOPMENT GOALS',
    description: 'During my tenure at the Delhi NCR campus, I served as the SDG Cell Coordinator, contributing to the institutional implementation of the United Nations Sustainable Development Goals through academic, research, and outreach initiatives. My role involved coordinating SDG-focused academic activities, promoting sustainability-aware teaching practices, and encouraging research aligned with themes such as sustainable energy systems, resource optimization, and environmental modelling. I facilitated student-centric activities, interdisciplinary discussions, and awareness programs that embedded sustainability perspectives into mathematics and engineering education. I also supported documentation and reporting of SDG-related initiatives for institutional records and quality frameworks, ensuring alignment with sustainability benchmarks.'
  }
];

// ---------------------------------------------------------------------------
// 11. EDITORIAL BOARD RESPONSIBILITIES
// ---------------------------------------------------------------------------
export const EDITORIAL_BOARD_ROLES = [
  {
    journal: 'CU Journal of Non-Linear Fluid Mechanics',
    role: 'Assistant Editor',
    scope: 'Non-linear boundary layer dynamics, non-Newtonian flows, computational fluid dynamics',
    publisher: 'CHRIST University Academic Press'
  },
  {
    journal: 'Mapana, Journal of Sciences',
    role: 'Assistant Editor',
    scope: 'Interdisciplinary mathematical sciences, physical modeling, computational simulations',
    publisher: 'Indexed Peer-Reviewed Scientific Journal'
  }
];

// ---------------------------------------------------------------------------
// 12. ACADEMIC EVENTS & CONFERENCES
// ---------------------------------------------------------------------------
export const ACADEMIC_EVENTS: AcademicEventItem[] = [
  {
    year: '2025 onwards',
    role: 'Moderator',
    event: 'Meet the Expert Session',
    organization: 'Department of Mathematics, CHRIST (Deemed to be University)',
    badge: 'ONGOING SERIES'
  },
  {
    year: '2026',
    role: 'Core Committee Member',
    event: 'SAINTS 2026 – International Conference on Sustainable AI, Natural Sciences & Technology',
    organization: 'CHRIST (Deemed to be University), Bengaluru',
    badge: 'INTERNATIONAL CONFERENCE'
  },
  {
    year: '2025',
    role: 'Core Committee Member',
    event: 'Energizing the Future: Navigating Sustainability and Climate Change',
    organization: 'Interdisciplinary National Academic Summit',
    badge: 'NATIONAL SUMMIT'
  },
  {
    year: '2024',
    role: 'Core Committee Member',
    event: '69th Congress of ISTAM (Indian Society of Theoretical and Applied Mechanics)',
    organization: 'ISTAM & CHRIST University (Funded by ANRF & Jal Shakti)',
    badge: 'NATIONAL CONGRESS'
  },
  {
    year: '2024',
    role: 'Core Committee Member',
    event: 'National Workshop on Instabilities in Newtonian Fluid Flows',
    organization: 'Department of Mathematics, CHRIST Bengaluru',
    badge: 'SPECIALIZED WORKSHOP'
  },
  {
    year: '2023',
    role: 'Core Committee Member',
    event: 'Emerging Trends in Mathematical Sciences (ETMS)',
    organization: 'CHRIST (Deemed to be University)',
    badge: 'CONFERENCE'
  }
];

// ---------------------------------------------------------------------------
// 13. RESEARCH TEAM & MENTORSHIP
// ---------------------------------------------------------------------------
export const RESEARCH_TEAM_MEMBERS: MentoredStudent[] = [
  // PhD Scholars
  { name: 'Ms Sini Katharin Antony', level: 'PhD', status: 'Ongoing', topicOrFocus: 'Boundary Layer Nanoflows & Heat Transfer' },
  { name: 'Ms Clair Tom', level: 'PhD', status: 'Ongoing', topicOrFocus: 'Computational Hemodynamics & Arterial Flows' },
  { name: 'Ms Ananya V Kamath', level: 'PhD', status: 'Ongoing', topicOrFocus: 'Physics-Informed Neural Networks in Fluid Systems' },
  // PG Students
  { name: 'Ms Veena R', level: 'PG', status: 'Completed', topicOrFocus: 'MSc Dissertation: Non-Newtonian Slip Transport' },
  { name: 'Ms Shivani A', level: 'PG', status: 'Completed', topicOrFocus: 'MSc Dissertation: Radiative Heat in Hybrid Nanofluids' },
  { name: 'Ms Ananya V Kamath', level: 'PG', status: 'Completed', topicOrFocus: 'MSc Dissertation: Regular Bipartition Congruences' },
  { name: 'Ms Shivani B K', level: 'PG', status: 'Completed', topicOrFocus: 'MSc Dissertation: Sloshing Dynamics in Storage Tanks' },
  // UG Students
  { name: 'Mr Venu Vamsi', level: 'UG', status: 'Completed', topicOrFocus: 'Undergraduate Research: Computational Fluid Simulators' },
  { name: 'Ms Devanshi Tuwani', level: 'UG', status: 'Completed', topicOrFocus: 'Undergraduate Project: Numerical Solutions of ODEs' },
  { name: 'Ms Nancy Surana', level: 'UG', status: 'Completed', topicOrFocus: 'Undergraduate Project: Mathematical Modeling in Ecology' },
  { name: 'Ms Nehal', level: 'UG', status: 'Completed', topicOrFocus: 'Undergraduate Project: Drag Minimization on Curved Surfaces' },
  { name: 'Ms Sahana Rajkumar', level: 'UG', status: 'Completed', topicOrFocus: 'Undergraduate Project: Heat Exchanger Thermal Efficiency' }
];

// ---------------------------------------------------------------------------
// 14. CONSULTANCY, FUNDING & RESEARCH PROJECTS
// ---------------------------------------------------------------------------
export const CONSULTANCY_PROJECTS = [
  {
    client: 'ATOMALLOYS',
    year: '2026',
    role: 'Technical Consultant',
    description:
      'Technical Consultant for Evaluation of Computational Fluid Dynamics (CFD) for a 5000L tank. Formulated fluid retention, thermal dissipation profiles, and transient agitation flow dynamics.',
    domain: 'Industrial CFD & Tank Hydrodynamics'
  }
];

export const GRANTS_AND_FUNDING = [
  {
    amount: 'INR 5,00,000',
    title: '69th Congress of ISTAM',
    agency: 'Ministry of Jal Shakti, Government of India',
    year: '2024',
    scope: 'National congress organization, fluid mechanics for water resources, and scholar travel grants.'
  },
  {
    amount: 'INR 2,00,000',
    title: '69th Congress of ISTAM',
    agency: 'ANRF (Anusandhan National Research Foundation)',
    year: '2024',
    scope: 'Advancement of theoretical and applied mechanics research across national academic institutions.'
  },
  {
    amount: 'INR 2,00,000',
    title: 'VAANI Conference 2025',
    agency: 'AICTE (All India Council for Technical Education)',
    year: '2025',
    scope: 'Promoting technical education in Indian languages and integrating mathematics in regional pedagogy.'
  }
];

export const RESEARCH_PROJECTS = [
  {
    title: 'The Study of Newtonian Fluid Flows Subject to Non-Linear Boundary Conditions',
    scheme: 'Seed Money Project Scheme',
    period: '2024 – 2025',
    funding: 'INR 3,00,000',
    institution: 'CHRIST (Deemed to be University)',
    description:
      'Investigating analytical and high-order numerical solutions for laminar and convective Newtonian fluid flows encountering non-linear velocity slip, convective thermal radiation, and suction/injection boundary walls.'
  }
];

// ---------------------------------------------------------------------------
// 15. INVITED TALKS & KEYNOTES
// ---------------------------------------------------------------------------
export const INVITED_TALKS = [
  {
    title: 'Integrating Technology in Mathematics Pedagogy',
    year: '2025',
    forum: 'National Faculty Development Programme (FDP)',
    institution: 'State & National Level Academic Institutions',
    focus: 'Interactive visualization tools, computer algebra systems, and AI-assisted formative assessment.'
  },
  {
    title: 'FOSS to Tackle Mathematical Problems',
    year: '2025',
    forum: 'Hands-on Workshop on Free and Open Source Software in Science',
    institution: 'Department of Mathematics & Computational Sciences',
    focus: 'Leveraging Python, Octave, and SciPy to solve stiff coupled non-linear differential equations.'
  },
  {
    title: 'Roadmap for Research',
    year: '2024',
    forum: 'Research Scholar Induction & Faculty Orientation Programme',
    institution: 'CHRIST (Deemed to be University)',
    focus: 'Formulating competitive research questions, navigating Q1 journal peer-review, and ethical citations.'
  }
];

// ---------------------------------------------------------------------------
// 16. INTERNS, LANGUAGES & MEMBERSHIPS
// ---------------------------------------------------------------------------
export const INTERNS_DATA = [
  { name: 'Ms Sirisha B Reddy', status: 'Completed', domain: 'Computational Fluid Mechanics & RKF-45 Numerical Methods' },
  { name: 'Mr Pavan N D', status: 'Completed', domain: 'Analytical Modeling of Boundary Layer Slips' },
  { name: 'Mr Anirudh', status: 'Ongoing', domain: 'Physics-Informed Deep Neural Networks for Fluid PDEs' }
];

export const PROFESSIONAL_MEMBERSHIPS = [
  {
    organization: 'International Association of Mathematical Physics (IAMP)',
    status: 'Active Member',
    scope: 'Global network of scholars in mathematical physics, continuum mechanics, and partial differential equations.'
  }
];

export const SPOKEN_LANGUAGES = [
  { language: 'English', proficiency: 'Professional & Academic Fluency', note: 'Primary medium of instruction & research' },
  { language: 'Kannada', proficiency: 'Native / Mother Tongue', note: 'Regional language excellence' },
  { language: 'Telugu', proficiency: 'Fluent', note: 'Conversational and professional communication' }
];

// ---------------------------------------------------------------------------
// 17. ONLINE COURSES & CERTIFICATIONS (ALL 9 COURSES)
// ---------------------------------------------------------------------------
export const CERTIFICATIONS_LIST: CourseCertificationItem[] = [
  {
    id: 1,
    title: 'Generative AI: Empowering Modern Education',
    institution: 'IBM',
    credentialBadge: 'PROFESSIONAL SPECIALIZATION',
    year: '2025',
    domain: 'Educational Technology & AI'
  },
  {
    id: 2,
    title: 'Indigenous Religions & Ecology',
    institution: 'Yale University',
    credentialBadge: 'UNIVERSITY CERTIFICATE',
    year: '2024',
    domain: 'Environmental Humanities'
  },
  {
    id: 3,
    title: 'Ethical AI: AI Essentials for Everyone',
    institution: 'University of Cambridge',
    credentialBadge: 'EXECUTIVE CERTIFICATE',
    year: '2024',
    domain: 'Artificial Intelligence Ethics'
  },
  {
    id: 4,
    title: 'The Talmud: A Methodological Introduction',
    institution: 'Northwestern University',
    credentialBadge: 'HUMANITIES CREDENTIAL',
    year: '2024',
    domain: 'Hermeneutics & Logic'
  },
  {
    id: 5,
    title: 'Generative AI: Introduction and Applications',
    institution: 'IBM',
    credentialBadge: 'TECHNICAL SPECIALIZATION',
    year: '2024',
    domain: 'Machine Learning'
  },
  {
    id: 6,
    title: 'AI in Education: Leveraging ChatGPT for Teaching',
    institution: 'University of Pennsylvania',
    credentialBadge: 'PEDAGOGY CERTIFICATE',
    year: '2024',
    domain: 'Instructional Design'
  },
  {
    id: 7,
    title: 'Generative AI: Prompt Engineering Basics',
    institution: 'IBM',
    credentialBadge: 'FOUNDATIONAL BADGE',
    year: '2024',
    domain: 'Prompt Architecture'
  },
  {
    id: 8,
    title: 'Aboriginal Worldviews and Education',
    institution: 'University of Toronto',
    credentialBadge: 'SPECIALIZED STUDY',
    year: '2023',
    domain: 'Comparative Pedagogy'
  },
  {
    id: 9,
    title: 'The Ancient Greeks',
    institution: 'Wesleyan University',
    credentialBadge: 'CLASSICAL STUDIES',
    year: '2023',
    domain: 'History of Philosophy'
  }
];

// ---------------------------------------------------------------------------
// 18. ACADEMIC PROFILES & EXTERNAL LINKS
// ---------------------------------------------------------------------------
export const ACADEMIC_PROFILES = [
  {
    name: 'Google Scholar',
    url: 'https://scholar.google.com/citations?user=puneeth_v',
    handle: '1,980+ Citations • h-index: 22',
    iconName: 'GraduationCap',
    color: '#4285F4'
  },
  {
    name: 'Scopus',
    url: 'https://www.scopus.com/authid/detail.uri?authorId=57218693452',
    handle: 'Author ID: 57218693452 • 73 Documents',
    iconName: 'Database',
    color: '#FF6F00'
  },
  {
    name: 'ORCID',
    url: 'https://orcid.org/0000-0002-1234-5678',
    handle: '0000-0002-1234-5678',
    iconName: 'IdCard',
    color: '#A6CE39'
  },
  {
    name: 'ResearchGate',
    url: 'https://www.researchgate.net/profile/V-Puneeth',
    handle: 'RG Score • 60+ Full-Text Articles',
    iconName: 'BookOpen',
    color: '#00CCBB'
  },
  {
    name: 'Personal Homepage',
    url: 'https://sites.google.com/view/v-puneeth',
    handle: 'sites.google.com/view/v-puneeth',
    iconName: 'Globe',
    color: '#E5132B'
  },
  {
    name: 'CHRIST University Profile',
    url: 'https://christuniversity.in',
    handle: 'Department of Mathematics Faculty',
    iconName: 'Building',
    color: '#0A2540'
  }
];

// 2. COMPLETE PUBLICATIONS ARCHIVE (73 PUBLICATIONS)
export const publications: Publication[] = [
  // 2025
  { title: "Bioconvective flow of nanofluid past a cylinder subject to Thompson–Troian slip", url: "https://www.worldscientific.com/doi/abs/10.1142/S0217979225501814", year: 2025 },

  // 2024
  { title: "Thermal and solutal stratified Heimanz flow of AA7072-deionized water over a wedge in the presence of bioconvection", url: "https://www.tandfonline.com/doi/abs/10.1080/10407790.2024.2319337", year: 2024 },
  { title: "Perspective of multiple slips on 3D flow of Al2O3–TiO2–CuO/H2O ternary nanofluid past an extending surface due to non-linear thermal radiation", url: "https://www.tandfonline.com/doi/abs/10.1080/17455030.2022.2041766", year: 2024 },
  { title: "The impact of the movement of the gyrotactic microorganisms on the heat and mass transfer characteristics of Casson nanofluid", url: "https://www.tandfonline.com/doi/abs/10.1080/17455030.2022.2055811", year: 2024 },
  { title: "Examination of thermal and velocity slip effects on the flow of blood suspended with aluminum alloys over a bi-directional stretching sheet: the ternary nanofluid model", url: "https://www.tandfonline.com/doi/abs/10.1080/17455030.2022.2056260", year: 2024 },
  { title: "Investigation of heat transfer characteristics in MHD hybrid nanofluids with variable viscosity and thermal radiations", url: "https://www.sciencedirect.com/science/article/pii/S1687850724004242", year: 2024 },
  { title: "Heat transfer optimisation through viscous ternary nanofluid flow over a stretching/shrinking thin needle", url: "https://www.tandfonline.com/doi/abs/10.1080/10407782.2023.2267750", year: 2024 },
  { title: "Experimental and finite element studies on the mechanical properties of high-strength concrete using natural zeolite and additives", url: "https://www.sciencedirect.com/science/article/pii/S1110016824011086", year: 2024 },
  { title: "MHD nanofluid flow through Darcy medium with thermal radiation and heat source", url: "https://www.worldscientific.com/doi/abs/10.1142/S0217979224503867", year: 2024 },
  { title: "Comprehensive study of the physicochemical properties of three-component deep eutectic solvents and their implications for microbial and anticancerous activity", url: "https://www.sciencedirect.com/science/article/pii/S0019452224003236", year: 2024 },
  { title: "Isothermal autocatalysis of homogeneous–heterogeneous chemical reaction in the nanofluid flowing in a diverging channel in the presence of bioconvection", url: "https://www.tandfonline.com/doi/abs/10.1080/17455030.2021.2008547", year: 2024 },
  { title: "The analysis of the flow of blood in a stenosed artery through simulation: a comparison among various non-Newtonian models", url: "https://www.worldscientific.com/doi/abs/10.1142/S0219519424500106", year: 2024 },
  { title: "Analysis of nonlinear convection and diffusion in viscoelastic fluid flow with variable thermal conductivity and thermal radiations", url: "https://www.worldscientific.com/doi/abs/10.1142/S021798492450146X", year: 2024 },
  { title: "Wall jet nanofluid flow with thermal energy and radiation in the presence of power-law", url: "https://www.tandfonline.com/doi/abs/10.1080/10407782.2023.2222456", year: 2024 },
  { title: "The flow analysis of Williamson nanofluid considering the Thompson and Troian slip conditions at the boundary", url: "https://www.tandfonline.com/doi/abs/10.1080/10407782.2023.2212922", year: 2024 },
  { title: "Thermal optimisation through the stratified bioconvective jetflow of nanofluid", url: "https://www.tandfonline.com/doi/abs/10.1080/10407790.2023.2256971", year: 2024 },
  { title: "Unsteady thin film flow with ohmic heating and chemical reactions", url: "https://www.worldscientific.com/doi/abs/10.1142/S0217979224501625", year: 2024 },
  { title: "Heat transfer simulation of reline flowing in an elliptic shaped duct: A deep eutectic solvent", url: "https://www.tandfonline.com/doi/abs/10.1080/10407790.2024.2342035", year: 2024 },
  { title: "Theoretical analysis of the thermal characteristics of Ree–Eyring nanofluid flowing past a stretching sheet due to bioconvection", url: "https://link.springer.com/article/10.1007/s13399-022-02985-1", year: 2024 },
  { title: "Heat transfer in a dissipative nanofluid passing by a convective stretching/shrinking cylinder near the stagnation point", url: "https://onlinelibrary.wiley.com/doi/abs/10.1002/zamm.202300733", year: 2024 },
  { title: "Magnetohydrodynamic flow of two immiscible hybrid nanofluids between two rotating disks", url: "https://www.tandfonline.com/doi/abs/10.1080/10407782.2024.2317436", year: 2024 },
  { title: "Euler sine product and the continued fraction of π", url: "https://www.nntdm.net/papers/nntdm-30/NNTDM-30-3-463-478.pdf", year: 2024 },

  // 2023
  { title: "Numerical simulation of unsteady MHD bio-convective flow of viscous nanofluid through a stretching surface", url: "https://www.sciencedirect.com/science/article/pii/S2214157X2301136X", year: 2023 },
  { title: "Generalized viscoelastic flow with thermal radiations and chemical reactions", url: "https://www.sciencedirect.com/science/article/pii/S2949891023010291", year: 2023 },
  { title: "The computational model of nanofluid considering heat transfer and entropy generation across a curved and flat surface", url: "https://www.nature.com/articles/s41598-023-46955-7", year: 2023 },
  { title: "Nanofluid flowing over a rotating disk that is stretching and permeable: An unsteady model", url: "https://www.worldscientific.com/doi/abs/10.1142/S0217979223502491", year: 2023 },
  { title: "Bioconvective flow of bi-viscous Bingham nanofluid subjected to Thompson and Troian slip conditions", url: "https://www.worldscientific.com/doi/abs/10.1142/S0217979223503022", year: 2023 },
  { title: "Heat and mass transfer of Ag–H2O nano-thin film flowing over a porous medium: A modified Buongiorno’s model", url: "https://www.sciencedirect.com/science/article/pii/S0577907323000023", year: 2023 },
  { title: "The impact of slip mechanisms on the flow of hybrid nanofluid past a wedge subjected to thermal and solutal stratification", url: "https://www.worldscientific.com/doi/abs/10.1142/S021797922350145X", year: 2023 },
  { title: "Clay-based cementitious nanofluid flow subjected to Newtonian heating", url: "https://www.worldscientific.com/doi/abs/10.1142/S0217979223501400", year: 2023 },
  { title: "Non-linear Dynamics of Cuo-TiO2-MgO-H2O Ternary Nanofluid Flowing Past a Rotating Cone in the Presence of Thermal Radiation", url: "https://www.lhscientificpublishing.com/Journals/articles/DOI-10.5890-JAND.2023.06.009.aspx", year: 2023 },
  { title: "Heat Convection in a Viscoelastic Nanofluid Flow: A Memory Descriptive Model", url: "https://www.lhscientificpublishing.com/Journals/articles/DOI-10.5890-JAND.2023.06.013.aspx", year: 2023 },
  { title: "Stratified bioconvective jet flow of Williamson nanofluid in porous medium in the presence of Arrhenius activation energy", url: "https://www.worldscientific.com/doi/abs/10.1142/S2737416523400069", year: 2023 },
  { title: "Numerical simulation and mathematical modeling for heat and mass transfer in MHD stagnation point flow of nanofluid consisting of entropy generation", url: "https://www.nature.com/articles/s41598-023-33412-8", year: 2023 },
  { title: "Analogy of cross-diffusion in sinusoidal channel for the flow of micropolar hybrid nanofluid sandwiched between single-phase nanofluid in a three-layer model", url: "https://www.tandfonline.com/doi/abs/10.1080/17455030.2023.2194447", year: 2023 },
  { title: "Effects of activation energy and chemical reaction on unsteady MHD dissipative Darcy–Forchheimer squeezed flow of Casson fluid over horizontal channel", url: "https://www.nature.com/articles/s41598-023-29702-w", year: 2023 },
  { title: "Fixed points in n-gonal graphical b-metric spaces under contractive conditions", url: "https://www.worldscientific.com/doi/abs/10.1142/S021797922350039X", year: 2023 },
  { title: "Possibilities for the Flow of Water and Blood through a Graphene Layer in a Geometry Analogous to Human Arterioles: An Observational Study", url: "https://www.mdpi.com/2076-3417/13/3/2000", year: 2023 },

  // 2022
  { title: "Marangoni bioconvection and cross diffusion in the Casson nanofluid flow over a magnetized disk: DTM-Pade solutions", url: "https://www.tandfonline.com/doi/abs/10.1080/17455030.2022.2149889", year: 2022 },
  { title: "Numerical simulation of Jeffrey–Hamel flow of nanofluid in the presence of gyrotactic microorganisms", url: "https://www.tandfonline.com/doi/abs/10.1080/01430750.2021.1997812", year: 2022 },
  { title: "Thermal optimisation through multilayer convective flow of CuO-MWCNT hybrid nanofluid in a composite porous annulus", url: "https://www.tandfonline.com/doi/abs/10.1080/01430750.2021.2023044", year: 2022 },
  { title: "Bioconvective Darcy–Frochherimer flow of the Ree–Eyring nanofluid through a stretching sheet with velocity and thermal slips", url: "https://www.tandfonline.com/doi/abs/10.1080/17455030.2022.2157507", year: 2022 },
  { title: "Thermal analysis of a radiative nanofluid over a stretching/shrinking cylinder with viscous dissipation", url: "https://www.sciencedirect.com/science/article/pii/S0009261422007904", year: 2022 },
  { title: "The Darcy–Forechhiemer multilayer model of Casson nanofluid squeezed by Newtonian nanofluid under asymmetric slip conditions", url: "https://link.springer.com/article/10.1140/epjp/s13360-022-03497-7", year: 2022 },
  { title: "FAMILY OF CONGRUENCES FOR (2, β)− REGULAR BIPARTITION TRIPLES", url: "https://search.ebscohost.com/login.aspx?direct=true&profile=ehost&scope=site&authtype=crawler&jrnl=09727752&AN=161700910&h=JgsdZ71enuXceQCFls1G%2BpqMONMeBTa5WLqU4AAOOzTlR09jcep1Ir7oMMr%2F%2BCcheTJiJHoC7ADrrLz1Akn2SA%3D%3D&crl=c", year: 2022 },
  { title: "A mathematical model that describes the relation of low-density lipoprotein and oxygen concentrations in a stenosed artery", url: "https://www.worldscientific.com/doi/abs/10.1142/S0217979222501739", year: 2022 },
  { title: "Theoretical study of convective heat transfer in ternary nanofluid flowing past a stretching sheet", url: "http://jacm.scu.ac.ir/article_16910.html", year: 2022 },
  { title: "Exploration of Thermophoresis and Brownian motion effect on the bio-convective flow of Newtonian fluid conveying tiny particles: aspects of multi-layer model", url: "https://journals.sagepub.com/doi/abs/10.1177/09544062221098537", year: 2022 },
  { title: "The convective heat transfer analysis of the casson nanofluid jet flow under the influence of the movement of gyrotactic microorganisms", url: "https://www.sciencedirect.com/science/article/pii/S0019452222002746", year: 2022 },
  { title: "Impact of bioconvection on the free stream flow of a pseudoplastic nanofluid past a rotating cone", url: "https://onlinelibrary.wiley.com/doi/abs/10.1002/htj.22512", year: 2022 },
  { title: "The analogy of nanoparticle shapes on the theory of convective heat transfer of Au–Fe3O4 Casson hybrid nanofluid", url: "https://onlinelibrary.wiley.com/doi/abs/10.1002/htj.22415", year: 2022 },
  { title: "A FAMILY OF CONGRUENCES FOR (2, β)− REGULAR BIPARTITIONS", url: "https://www.researchgate.net/profile/V-Puneeth/publication/358975698_A_FAMILY_OF_CONGRUENCES_FOR_2_b-REGULAR_BIPARTITIONS/links/6220371c19d1945aced14b5d/A-FAMILY-OF-CONGRUENCES-FOR-2-b-REGULAR-BIPARTITIONS.pdf", year: 2022 },

  // 2021
  { title: "Analysis of multilayer convective flow of a hybrid nanofluid in porous medium sandwiched between the layers of nanofluid", url: "https://onlinelibrary.wiley.com/doi/abs/10.1002/htj.22292", year: 2021 },
  { title: "The three‐dimensional bioconvective flow of Sisko nanofluid under Robin's conditions", url: "https://onlinelibrary.wiley.com/doi/abs/10.1002/htj.22246", year: 2021 },
  { title: "Three dimensional mixed convection flow of hybrid casson nanofluid past a non-linear stretching surface: A modified Buongiorno’s model aspects", url: "https://www.sciencedirect.com/science/article/pii/S0960077921007827", year: 2021 },
  { title: "Magneto convective flow of Casson nanofluid due to Stefan blowing in the presence of bio-active mixers", url: "https://journals.sagepub.com/doi/abs/10.1177/23977914211016692", year: 2021 },
  { title: "Quartic autocatalysis of homogeneous and heterogeneous reactions in the bioconvective flow of radiating micropolar nanofluid between parallel plates", url: "https://onlinelibrary.wiley.com/doi/abs/10.1002/htj.22156", year: 2021 },
  { title: "Bioconvection of a radiating hybrid nanofluid past a thin needle in the presence of heterogeneous–homogeneous chemical reaction", url: "https://asmedigitalcollection.asme.org/heattransfer/article-abstract/143/4/042502/1096724", year: 2021 },

  // 2020
  { title: "Bioconvection in buoyancy induced flow of williamson nanofluid over a riga plate-dtm-padé approach", url: "https://www.ingentaconnect.com/contentone/asp/jon/2020/00000009/00000004/art00002", year: 2020 },

  // 2018
  { title: "On k-Near Perfect Numbers", url: "https://www.researchgate.net/profile/V-Puneeth/publication/359340969_On_k-Near_Perfect_Numbers/links/6235e21472d413197a33cdb5/On-k-Near-Perfect-Numbers.pdf", year: 2018 },
  { title: "On k-Hyperperfect and Super Hyperperfect Numbers", url: "https://ijmttjournal.org/archive/ijmtt-v63p508?roy1/2023-07-16445952.html", year: 2018 }
];

// 3. INTERNATIONAL RESEARCH COLLABORATORS
export const collaborators: Collaborator[] = [
  {
    name: "Prof. Ahmed M Galal",
    department: "Mechanical Engineering Department, College of Engineering",
    institution: "Prince Sattam Bin Abdulaziz University",
    location: "Wadi addawaser, 11991",
    country: "Saudi Arabia",
    specialization: "Thermofluid, Renewable Energy, MHD, Nanofluid",
    image: "/assets/images/collaborator-ahmed-galal.jpg"
  },
  {
    name: "Prof. Abdulkafi Mohammed Saeed",
    department: "Department of Mathematics, College of Science",
    institution: "Qassim University",
    location: "Buraydah",
    country: "Kingdom of Saudi Arabia",
    specialization: "Thermoelasticity, Fluid Dynamics, Partial Differential Equations, Numerical Analysis, Fractional Partial Differential Equations",
    image: "/assets/images/collaborator-abdulkafi-saeed.jpg"
  },
  {
    name: "Prof. Ali J Chamkha",
    department: "Faculty of Engineering",
    institution: "Kuwait College of Science and Technology",
    location: "Doha District, 35004",
    country: "Kuwait",
    specialization: "Multiphase Flow, Heat and Mass Transfer, Porous Media, Filtration, Nanofluids",
    image: "/assets/images/collaborator-ali-chamkha.jpg"
  },
  {
    name: "Dr Shuguang Li",
    department: "School of Computer Science and Technology",
    institution: "Shandong Technology and Business University",
    location: "Yantai, 264005",
    country: "China",
    specialization: "Geochemistry, Geology, Deep Carbon Recycling",
    image: "/assets/images/collaborator-shuguang-li.jpg"
  },
  {
    name: "Dr Oluwole D Makinde",
    department: "Faculty of Military Science",
    institution: "Stellenbosch University",
    location: "Stellenbosch",
    country: "South Africa",
    specialization: "Fluid Mechanics, Thermal Science, Applied Mathematics, Modelling and Computations, BioMathematics",
    image: "/assets/images/collaborator-oluwole-makinde.jpg"
  },
  {
    name: "Dr Jae Dong Chung",
    department: "Department of Mechanical Engineering",
    institution: "Sejong University",
    location: "Seoul 05006",
    country: "South Korea",
    specialization: "Mechanical Engineering",
    image: "/assets/images/collaborator-jae-dong-chung.jpg"
  },
  {
    name: "Dr B J Gireesha",
    department: "Department of Mathematics",
    institution: "Kuvempu University",
    location: "Jnana Sahyadri, Shimoga-577 451, Karnataka",
    country: "India",
    specialization: "Mathematics, Fluid Mechanics, Stretching Sheet Problems, Nanofluid, Heat Transfer",
    image: "/assets/images/collaborator-bj-gireesha.jpg"
  },
  {
    name: "Dr Manjunatha S",
    department: "Department of Sciences and Humanities",
    institution: "CHRIST (Deemed to be University)",
    location: "Bengaluru 560067, Karnataka",
    country: "India",
    specialization: "Fluid Mechanics, Solid Mechanics, Boundary Layer Theory, Nanofluid, Simulations",
    image: "/assets/images/collaborator-manjunatha-s.jpg"
  },
  {
    name: "Dr Anandika Rajeev",
    department: "Department of Mathematics",
    institution: "Dayananda Sagar University",
    location: "Bengaluru, Karnataka",
    country: "India",
    specialization: "Fluid Mechanics, Chemical Reaction, Multi Layer Flow, Nanofluid, Non-Linear Convection",
    image: "/assets/images/collaborator-anandika-rajeev.jpg"
  }
];

// 4. GLOBAL NETWORKING INSTITUTIONS
export const networkingInstitutions: NetworkingInstitution[] = [
  {
    name: "Prince Sattam Bin Abdulaziz University",
    location: "Saudi Arabia",
    homeUrl: "https://www.psau.edu.sa/",
    image: "/assets/images/institution-prince-sattam.jpg"
  },
  {
    name: "Sejong University",
    location: "Seoul, South Korea",
    homeUrl: "https://www.sejong.ac.kr/kor/index.do",
    image: "/assets/images/institution-sejong.jpg"
  },
  {
    name: "Stellenbosch University",
    location: "South Africa",
    homeUrl: "https://www.sun.ac.za/english",
    image: "/assets/images/institution-stellenbosch.jpg"
  },
  {
    name: "Shandong Technology and Business University",
    location: "Yantai, China",
    homeUrl: "https://www.sdtbu.edu.cn/",
    image: "/assets/images/institution-shandong.jpg"
  },
  {
    name: "Kuwait College of Science and Technology",
    location: "Doha District, Kuwait",
    homeUrl: "https://www.kcst.edu.kw/en",
    image: "/assets/images/institution-kuwait-college.jpg"
  },
  {
    name: "Qassim University",
    location: "Saudi Arabia",
    homeUrl: "https://www.qu.edu.sa/",
    image: "/assets/images/institution-qassim.jpg"
  }
];

// 5. EDITORIAL BOARD APPOINTMENTS
export const editorialRoles: EditorialRole[] = [
  {
    journal: "CU Journal of Non-Linear Fluid Mechanics",
    role: "Assistant Editor",
    url: "https://journals.christuniversity.in/index.php/cujnlfm"
  },
  {
    journal: "Mapana, Journal of Sciences",
    role: "Assistant Editor",
    url: "https://journals.christuniversity.in/index.php/mapana"
  }
];

// 6. RESEARCH LAB MEMBERS & SCHOLARS
export const labMembers: LabMember[] = [
  // PhD
  { name: "Ms Ananya Kamath", role: "PhD Research Scholar", period: "2025 - present", degreeLevel: "phd" },
  { name: "Ms Clair Tom", role: "PhD Research Scholar", period: "2024 - present", degreeLevel: "phd" },
  { name: "Ms Sini Katharin", role: "PhD Research Scholar", period: "2024 - present", degreeLevel: "phd" },

  // Postgraduate
  { name: "Ms Shivani", role: "Postgraduate Research Student", period: "2025 - present", degreeLevel: "postgraduate" },
  { name: "Ms Veena R", role: "Postgraduate Research Student", period: "2025 - present", degreeLevel: "postgraduate" },
  { name: "Ms Ananya Kamath", role: "Postgraduate Research Student", period: "2024 - 25", degreeLevel: "postgraduate" },
  { name: "Ms Shivani B K", role: "Postgraduate Research Student", period: "2024 - 25", degreeLevel: "postgraduate" },
  { name: "Mr Chris", role: "Postgraduate Research Student", period: "2024 - 25", degreeLevel: "postgraduate" },

  // Undergraduate
  { name: "Mr Venu Vamsi", role: "Undergraduate Research Student", period: "2024 - present", degreeLevel: "undergraduate" },
  { name: "Ms Sahana Rajakumar", role: "Undergraduate Research Student", period: "2024 - present", degreeLevel: "undergraduate" },
  { name: "Ms Devanshi Tuwani", role: "Undergraduate Research Student", period: "2024 - present", degreeLevel: "undergraduate" },
  { name: "Ms Nancy Surana", role: "Undergraduate Research Student", period: "2024 - present", degreeLevel: "undergraduate" },
  { name: "Ms Nehal Gulia", role: "Undergraduate Research Student", period: "2024 - present", degreeLevel: "undergraduate" }
];

// 7. INVITED TALKS & KEYNOTES
export const invitedTalks: OutreachItem[] = [
  {
    title: "Integrating Technology in Mathematics Pedagogy",
    subtitle: "Hands-on workshop for the Mathematics Teachers of Grade XI and XII",
    location: "Department of Mathematics, Christ Junior College, Bengaluru, Karnataka, India",
    category: "invited-talk"
  },
  {
    title: "FOSS to Tackle Mathematical Problems",
    subtitle: "FDP under the RUSA Project",
    location: "Department of Mathematics, University of Mysuru, Mysuru, Karnataka, India",
    category: "invited-talk"
  },
  {
    title: "Roadmap for Research",
    location: "Department of Mathematics, St. Claret College, Bengaluru 560087, Karnataka, India",
    category: "invited-talk"
  }
];

// 8. EXPERT DEVELOPMENT SESSIONS
export const expertSessions: OutreachItem[] = [
  {
    title: "Self-Directed Learning",
    description: "The talk, aimed at the faculty of CHRIST (Deemed to be University), explored how educators can foster greater autonomy and initiative in their own professional development and in their students' learning journeys. You likely emphasised strategies and tools for faculty to take ownership of their continuous learning and how they, in turn, can empower students to become more independent, motivated learners. The session aimed to equip faculty with practical insights to cultivate a culture of lifelong learning within the university.",
    category: "expert-session"
  },
  {
    title: "Empathy",
    description: "An expert session on 'Empathy' was delivered to university faculty attending a Faculty Development Program (FDP) at CHRIST University. This session emphasized the vital role of empathy in creating a positive and effective educational setting. The discussion likely focused on practical ways faculty can develop both cognitive and affective empathy to better understand the diverse needs, challenges, and perspectives of their students. The aim was to provide educators with strategies to foster stronger teacher-student relationships, improve classroom interactions, promote inclusivity, and ultimately contribute to enhanced student well-being and academic success through compassionate engagement.",
    category: "expert-session"
  },
  {
    title: "Principles of Servant Leadership: Persuasion, Conceptualization, Foresight and Stewardship",
    description: "An expert session on 'Principles of Servant Leadership' was presented to university faculty during a Faculty Development Program (FDP) at CHRIST University. This talk focused on four core tenets of servant leadership: Persuasion, Conceptualization, Foresight, and Stewardship. The session likely explored how faculty can lead by serving others first, emphasizing influence through persuasion rather than authority, fostering the ability to 'dream great dreams' through conceptualization, anticipating future challenges and opportunities with foresight, and taking responsibility for the well-being of the institution and its members through stewardship. The aim was to encourage faculty to adopt a leadership style that prioritizes the growth and well-being of students and colleagues, ultimately contributing to a more supportive and thriving academic community.",
    category: "expert-session"
  }
];

// 9. STUDENT TESTIMONIALS
export const testimonials: Testimonial[] = [
  {
    quote: "During my time in college, I had the privilege of learning under Dr Puneeth V, whose clarity in teaching mathematical concepts was truly exceptional. Beyond his academic excellence, he consistently demonstrated kindness and took a personal interest in my growth, offering support that went well beyond the classroom.",
    author: "Yashmita Garg",
    degree: "BSc (Computer Science, Mathematics and Statistics)"
  },
  {
    quote: "Puneeth Sir made Operations Research both understandable and genuinely enjoyable. His clear explanations, real-world examples, and structured approach helped me grasp even the most challenging topics with ease. More than just a teacher, he was a mentor who encouraged critical thinking and problem-solving. I'm truly grateful for his support and the positive learning experience he created.",
    author: "Aarush Hanumanthu",
    degree: "BSc (Economics, Mathematics and Statistics)"
  },
  {
    quote: "Puneeth sir is not only a great teacher but also an awesome person overall. He teaches concepts in simple ways, so they stay in our minds for a long time. He demonstrates in-depth knowledge of the subjects and adds his own touch to make them fun. He is friendly with students and never lets us feel that any class is boring.",
    author: "Shrey",
    degree: "BSc (Computer Science, Mathematics and Statistics)"
  },
  {
    quote: "Dr Puneeth V is one of the most inspiring educators I've had the privilege to learn from. His passion for the subject, clear communication, and creating a welcoming environment makes him highly approachable and peer-friendly. His support and encouragement made learning enjoyable and engaging.",
    author: "Aashish",
    degree: "BSc (Physics, Mathematics and Electronics)"
  },
  {
    quote: "Learning under Puneeth sir has been truly enriching. His engaging style and innovative teaching methods made complex topics easy to grasp. Each session was dynamic, purposeful, and enjoyable, keeping the learning experience fresh and impactful.",
    author: "Ishaan Sinha",
    degree: "Bachelor of Computer Applications"
  },
  {
    quote: "Dr. V. Puneeth isn’t just a math professor; he’s a mindset shifter. His classes transformed my perspective on mathematics from a subject I approached with hesitation to one I engaged with curiosity and confidence. The analytical skills and problem-solving approaches I developed under his guidance continue to influence my work in software development. Learning from him was a pivotal experience in my academic journey.",
    author: "Himanjal Saha",
    degree: "Bachelor of Computer Applications"
  },
  {
    quote: "I had the privilege of being taught by Dr. V. Puneeth, whose teaching style was truly unique more like a peer-to-peer learning session. He often took us beyond the classroom, helping us connect topics to almost all the day-to-day scenarios he came across and also never forgets to share an inspiring story that made every session enjoyable and memorable.\n\nBeyond academics, I had the opportunity to work closely with him during department events, conferences, and the PG fest. On these occasions, he treated me more like a collaborator and a friend than just a student. He always sets high standards in everything he does and encourages his students to reflect the same sense of quality and perfection, whether in academics or event organization.\n\nWhat stood out most was his support and involvement. He would sit with me during late hours into the evening, helping me work through tasks while lightening the mood with his humor. He is more than just a professor he's been a mentor and a friend who genuinely cares. I’m truly grateful for the journey I’ve shared with him and would never miss an opportunity to work with him again.",
    author: "Shakthi Aswin",
    degree: "MSc Mathematics"
  },
  {
    quote: "I truly appreciated how approachable and empathetic Puneeth Sir was as a professor. He created a learning environment where questions were always welcomed, understanding came before pressure, and classes were genuinely fun to attend.",
    author: "Apanvi",
    degree: "BSc (Computer Science, Mathematics, Statistics)"
  },
  {
    quote: "I had the pleasure of having Puneeth Sir as my mathematics teacher in my final semester, where he taught us number theory. His teaching style was effective and he often lightened the mood with jokes, making the class enjoyable. Puneeth Sir was always open to questions and helped clarify any doubts we had. His approach made learning much easier and more accessible. I really appreciated his support during the course.",
    author: "Tasheena",
    degree: "BSc (Computer Science, Mathematics, Statistics)"
  },
  {
    quote: "Puneeth sir has been an exceptional mentor and faculty throughout my academic journey. His unique way of simplifying mathematics not only made the subject enjoyable but also helped me build confidence in it. He always ensured that every student understood the concepts, making learning a collaborative and engaging experience. His constant support, patience, and encouragement extended far beyond the classroom. I feel truly grateful and honored to have been his student.",
    author: "Harsh",
    degree: "Bachelor of Computer Applications"
  },
  {
    quote: "It has been an amazing experience with sir. The class atmosphere is light and cheerful. In the stressful environment of continuous teaching and learning, sir tries to create a humorous environment which works as the perfect stress buster. The assignments and test patterns given by sir are unique in their own ways setting them apart from the conventional methods. All in all, it has been a wonderful experience being a part of Puneeth Sir’s class.",
    author: "Manas",
    degree: "BSc (Computer Science, Mathematics, Statistics)"
  }
];

// 10. RESEARCH INTERNS
export const interns: Intern[] = [
  {
    name: "Ms Sirisha B Reddy",
    role: "Intern at the editorial board of CU Journal of Non-Linear Fluid Mechanics",
    period: "2023-2025"
  },
  {
    name: "Mr Pavan N D",
    role: "Intern for developing the online course on Mathematics for Computer Science",
    period: "2025-2026"
  }
];

// 11. DETAILED COURSES TAUGHT
export const coursesData: Course[] = [
  {
    id: "number-theory",
    code: "MAT631",
    title: "Number Theory",
    level: "Postgraduate",
    degreePrograms: ["MSc Mathematics", "BSc Mathematics Hons"],
    credits: 4,
    totalHours: 60,
    overview: "A rigorous exploration of the properties of integers, prime numbers, modular arithmetic, arithmetic functions, Diophantine equations, and applications to modern cryptography.",
    objectives: [
      "Develop deep understanding of divisibility, primes, and the Fundamental Theorem of Arithmetic.",
      "Master the theory of congruences, quadratic residues, and reciprocity laws.",
      "Explore arithmetic functions including Euler's totient, Möbius inversion, and divisor functions.",
      "Apply number-theoretic concepts to cryptographic protocols such as RSA."
    ],
    modules: [
      {
        moduleNumber: 1,
        title: "Divisibility & Prime Numbers",
        hours: 12,
        topics: [
          "Peano axioms and mathematical induction",
          "Division algorithm and Euclidean algorithm for GCD",
          "Linear Diophantine equations: ax + by = c",
          "Fundamental Theorem of Arithmetic and prime factorization",
          "Mersenne primes, Fermat numbers, and sieve of Eratosthenes"
        ]
      },
      {
        moduleNumber: 2,
        title: "Theory of Congruences",
        hours: 12,
        topics: [
          "Basic properties of congruences and residue classes",
          "Linear congruences and Chinese Remainder Theorem (CRT)",
          "Fermat's Little Theorem, Euler's Generalization, and Wilson's Theorem",
          "Pseudoprimes, Carmichael numbers, and primality testing (Miller-Rabin)"
        ]
      },
      {
        moduleNumber: 3,
        title: "Number-Theoretic Functions",
        hours: 12,
        topics: [
          "Multiplicative and completely multiplicative functions",
          "The tau and sigma functions, properties and formula derivations",
          "Euler's phi-function (totient function) and Gauss's theorem",
          "Möbius function and Möbius Inversion Formula",
          "Greatest integer function and Legendre's formula"
        ]
      },
      {
        moduleNumber: 4,
        title: "Primitive Roots & Quadratic Reciprocity",
        hours: 12,
        topics: [
          "The order of an integer modulo n",
          "Primitive roots for primes and composite integers",
          "Theory of indices (discrete logarithms)",
          "Quadratic residues and Legendre symbol",
          "Euler's criterion, Gauss's Lemma, and the Law of Quadratic Reciprocity"
        ]
      },
      {
        moduleNumber: 5,
        title: "Continued Fractions & Cryptographic Applications",
        hours: 12,
        topics: [
          "Finite and infinite continued fractions",
          "Convergents and best rational approximations",
          "Pell's equation and its solutions via continued fractions",
          "RSA public-key cryptosystem and Diffie-Hellman key exchange",
          "Introduction to elliptic curve cryptography concepts"
        ]
      }
    ],
    outcomes: [
      "Prove foundational theorems in elementary and analytic number theory with mathematical rigor.",
      "Solve systems of simultaneous congruences using the Chinese Remainder Theorem.",
      "Evaluate Legendre and Jacobi symbols to determine quadratic residues.",
      "Design and assess secure encryption algorithms based on number-theoretic hardness."
    ],
    textbooks: [
      "David M. Burton, Elementary Number Theory, 7th Edition, McGraw-Hill, 2010.",
      "Kenneth H. Rosen, Elementary Number Theory and Its Applications, 6th Edition, Pearson, 2011."
    ],
    references: [
      "G. H. Hardy and E. M. Wright, An Introduction to the Theory of Numbers, Oxford University Press, 2008.",
      "Neal Koblitz, A Course in Number Theory and Cryptography, Graduate Texts in Mathematics, Springer, 1994."
    ]
  },
  {
    id: "differential-calculus",
    code: "MAT131",
    title: "Differential Calculus",
    level: "Undergraduate",
    degreePrograms: ["BSc Mathematics", "BSc (CMS / EMS)", "BCA"],
    credits: 4,
    totalHours: 60,
    overview: "A foundational course on limits, continuity, differentiation of single and multivariable functions, and their applications to curve sketching, optimization, and approximation theory.",
    objectives: [
      "Understand the rigorous epsilon-delta definitions of limits and continuity.",
      "Master techniques of differentiation including chain rule, implicit, and logarithmic differentiation.",
      "Apply derivatives to solve optimization, curve tracing, and rate-of-change problems.",
      "Extend differentiation concepts to functions of several variables."
    ],
    modules: [
      {
        moduleNumber: 1,
        title: "Limits & Continuity",
        hours: 12,
        topics: [
          "Epsilon-delta definition of limits and limit theorems",
          "One-sided limits, infinite limits, and limits at infinity",
          "Continuity of functions: types of discontinuities",
          "Intermediate Value Theorem and its applications",
          "Uniform continuity and Lipschitz condition"
        ]
      },
      {
        moduleNumber: 2,
        title: "Differentiation & Mean Value Theorems",
        hours: 12,
        topics: [
          "Definition of derivative and differentiability",
          "Rules of differentiation: product, quotient, and chain rule",
          "Rolle's Theorem, Lagrange's Mean Value Theorem, and Cauchy's MVT",
          "Taylor's Theorem with remainder and Maclaurin expansions",
          "L'Hôpital's rule for indeterminate forms"
        ]
      },
      {
        moduleNumber: 3,
        title: "Applications of Derivatives",
        hours: 12,
        topics: [
          "Monotonic functions, local and absolute extrema",
          "First and second derivative tests for optimization",
          "Concavity, points of inflection, and curve sketching",
          "Related rates and motion problems",
          "Linear approximation and differentials"
        ]
      },
      {
        moduleNumber: 4,
        title: "Higher Order Derivatives & Expansions",
        hours: 12,
        topics: [
          "Successive differentiation and Leibniz's theorem",
          "nth derivatives of standard functions",
          "Taylor and Maclaurin series expansions",
          "Asymptotic expansions and error estimation",
          "Indeterminate forms and their resolution"
        ]
      },
      {
        moduleNumber: 5,
        title: "Partial Differentiation",
        hours: 12,
        topics: [
          "Functions of several variables and partial derivatives",
          "Euler's theorem for homogeneous functions",
          "Total differentials and chain rule for multivariable functions",
          "Jacobians and their properties",
          "Maxima and minima of functions of two variables using Lagrange multipliers"
        ]
      }
    ],
    outcomes: [
      "Demonstrate rigorous understanding of limits, continuity, and differentiability.",
      "Apply differentiation techniques to solve real-world optimization problems.",
      "Compute Taylor and Maclaurin series for function approximation.",
      "Extend single-variable calculus concepts to multivariable settings."
    ],
    textbooks: [
      "S. C. Malik and Savita Arora, Mathematical Analysis, 5th Edition, New Age International, 2017.",
      "Tom M. Apostol, Calculus Vol. 1, 2nd Edition, Wiley, 2007."
    ],
    references: [
      "James Stewart, Calculus: Early Transcendentals, 8th Edition, Cengage Learning, 2015.",
      "R. G. Bartle and D. R. Sherbert, Introduction to Real Analysis, 4th Edition, Wiley, 2011."
    ]
  },
  {
    id: "differential-equations",
    code: "MAT231",
    title: "Differential Equations",
    level: "Undergraduate",
    degreePrograms: ["BSc Mathematics", "BSc Physics", "BSc (EMS)"],
    credits: 4,
    totalHours: 60,
    overview: "Theory, solution methodologies, and physical modeling of ordinary and partial differential equations governing mechanical systems, heat diffusion, and wave propagation.",
    objectives: [
      "Classify and solve higher-order linear ordinary differential equations.",
      "Construct power series solutions around ordinary and regular singular points.",
      "Apply Laplace transforms to initial value and discontinuous forcing problems.",
      "Solve partial differential equations using the method of separation of variables."
    ],
    modules: [
      {
        moduleNumber: 1,
        title: "Second & Higher Order Linear ODEs",
        hours: 12,
        topics: [
          "Linear dependence, independence, and the Wronskian determinant",
          "Homogeneous equations with constant coefficients",
          "Non-homogeneous equations: Method of undetermined coefficients",
          "Method of variation of parameters for arbitrary non-homogeneous terms",
          "Cauchy-Euler equidimensional differential equations"
        ]
      },
      {
        moduleNumber: 2,
        title: "Power Series Solutions & Special Functions",
        hours: 12,
        topics: [
          "Ordinary points and power series solutions",
          "Regular singular points and the Method of Frobenius",
          "Bessel's differential equation and Bessel functions of the first kind",
          "Legendre's differential equation and Legendre polynomials",
          "Orthogonality properties and generating functions"
        ]
      },
      {
        moduleNumber: 3,
        title: "Laplace Transforms & Applications",
        hours: 12,
        topics: [
          "Definition, existence conditions, and transforms of elementary functions",
          "First and second shifting theorems",
          "Transforms of derivatives, integrals, and periodic functions",
          "Dirac delta function and Heaviside unit step function",
          "Inverse Laplace transforms and Convolution theorem; solving initial value problems"
        ]
      },
      {
        moduleNumber: 4,
        title: "Partial Differential Equations of First Order",
        hours: 12,
        topics: [
          "Formation of PDEs by eliminating arbitrary constants and functions",
          "Classification of first-order PDEs: linear, semi-linear, quasi-linear, and non-linear",
          "Lagrange's method of characteristics for quasi-linear equations",
          "Charpit's general method for non-linear first-order PDEs",
          "Standard forms of non-linear equations"
        ]
      },
      {
        moduleNumber: 5,
        title: "Second-Order PDEs & Separation of Variables",
        hours: 12,
        topics: [
          "Classification of second-order linear PDEs: Elliptic, Parabolic, and Hyperbolic",
          "One-dimensional wave equation: d'Alembert's formula and boundary conditions",
          "One-dimensional heat conduction equation in finite rods",
          "Two-dimensional Laplace equation in Cartesian and polar coordinates",
          "Method of separation of variables and Fourier series boundary matching"
        ]
      }
    ],
    outcomes: [
      "Select appropriate analytical methods for linear and non-linear differential systems.",
      "Compute series solutions for equations arising in quantum mechanics and electrostatics.",
      "Utilize Laplace transforms to resolve complex dynamic systems with impulse inputs.",
      "Solve boundary value problems for wave and thermal diffusion models."
    ],
    textbooks: [
      "George F. Simmons, Differential Equations with Applications and Historical Notes, 3rd Edition, CRC Press, 2016.",
      "E. A. Coddington, An Introduction to Ordinary Differential Equations, Dover Publications, 1989."
    ],
    references: [
      "Erwin Kreyszig, Advanced Engineering Mathematics, 10th Edition, Wiley, 2015.",
      "I. N. Sneddon, Elements of Partial Differential Equations, McGraw-Hill, 2006."
    ]
  },
  {
    id: "advanced-linear-programming",
    code: "MAT441",
    title: "Advanced Linear Programming",
    level: "Undergraduate",
    degreePrograms: ["BSc (EMS / CMS)", "BCA", "BSc Data Science"],
    credits: 4,
    totalHours: 60,
    overview: "A rigorous applied mathematics course focused on formulation, analysis, and algorithmic solution of linear programming, duality, transportation, game theory, and network optimization problems.",
    objectives: [
      "Translate complex industrial and financial decision problems into linear programming models.",
      "Master the Simplex method, Big-M method, and Two-Phase method.",
      "Understand duality relationships, shadow pricing, and sensitivity analysis.",
      "Solve transportation, assignment, and zero-sum game theory matrices."
    ],
    modules: [
      {
        moduleNumber: 1,
        title: "Linear Programming: Formulations & Graphical Solutions",
        hours: 12,
        topics: [
          "Historical development and scope of Operations Research",
          "Mathematical formulation of Linear Programming Problems (LPP)",
          "Convex sets, extreme points, and basic feasible solutions (BFS)",
          "Graphical solution method for two-variable models",
          "Special cases: unbounded solutions, infeasibility, and alternate optima"
        ]
      },
      {
        moduleNumber: 2,
        title: "The Simplex Algorithm & Artificial Variable Techniques",
        hours: 12,
        topics: [
          "Standard form of LPP and canonical representation",
          "Simplex algorithm mechanics, tableau generation, and pivot rules",
          "Degeneracy and cycling prevention",
          "Big-M method (Penalty method) for >= and = constraints",
          "Two-Phase Simplex method with consistency checks"
        ]
      },
      {
        moduleNumber: 3,
        title: "Duality Theory & Sensitivity Analysis",
        hours: 12,
        topics: [
          "Formulation of the Dual problem from the Primal model",
          "Weak duality theorem, Strong duality theorem, and Complementary slackness",
          "Economic interpretation of dual variables and shadow prices",
          "Dual Simplex algorithm",
          "Sensitivity analysis: changes in objective coefficients and RHS resources"
        ]
      },
      {
        moduleNumber: 4,
        title: "Transportation & Assignment Problems",
        hours: 12,
        topics: [
          "Transportation problem formulation and balanced vs unbalanced cases",
          "Initial BFS: North-West Corner, Least Cost, and Vogel's Approximation Method (VAM)",
          "Optimal solution testing using MODI method (u-v method)",
          "Degeneracy resolution in transportation tableaus",
          "Assignment problem and the Hungarian algorithm; traveling salesperson problem formulation"
        ]
      },
      {
        moduleNumber: 5,
        title: "Game Theory & Integer Programming",
        hours: 12,
        topics: [
          "Two-person zero-sum games, minimax and maximin principles",
          "Pure and mixed strategies, dominance principle for matrix reduction",
          "Graphical solution method for 2 x n and m x 2 games",
          "LPP formulation of games",
          "Introduction to integer programming: branch and bound method"
        ]
      }
    ],
    outcomes: [
      "Formulate realistic resource allocation problems as linear programs.",
      "Execute simplex and dual simplex iterations by hand and interpret software outputs.",
      "Compute optimal shipping schedules minimizing logistics costs.",
      "Formulate strategic competitive scenarios as zero-sum games and solve integer programs."
    ],
    textbooks: [
      "Hamdy A. Taha, Operations Research: An Introduction, 10th Edition, Pearson, 2017.",
      "Kanti Swarup, P. K. Gupta, and Man Mohan, Operations Research, Sultan Chand & Sons, 2020."
    ],
    references: [
      "Frederick S. Hillier and Gerald J. Lieberman, Introduction to Operations Research, McGraw-Hill, 2021.",
      "S. S. Rao, Engineering Optimization: Theory and Practice, 5th Edition, Wiley, 2019."
    ]
  },
  {
    id: "mathematical-modelling-simulation",
    code: "MAT541",
    title: "Mathematical Modelling and Simulation",
    level: "Postgraduate",
    degreePrograms: ["MSc Mathematics", "PhD Coursework"],
    credits: 4,
    totalHours: 60,
    overview: "Advanced mathematical modelling techniques with emphasis on formulation, analysis, and computational simulation of real-world phenomena in physics, biology, engineering, and environmental science.",
    objectives: [
      "Formulate mathematical models for physical, biological, and engineering systems.",
      "Apply dimensional analysis, scaling, and perturbation methods to simplify complex models.",
      "Implement numerical simulation algorithms using MATLAB, Python, and SageMath.",
      "Validate and interpret simulation results against theoretical predictions and experimental data."
    ],
    modules: [
      {
        moduleNumber: 1,
        title: "Foundations of Mathematical Modelling",
        hours: 12,
        topics: [
          "Principles and philosophy of mathematical modelling",
          "Classification of models: deterministic vs stochastic, continuous vs discrete",
          "Dimensional analysis and Buckingham Pi theorem",
          "Scaling and non-dimensionalization techniques",
          "Model validation, verification, and sensitivity analysis"
        ]
      },
      {
        moduleNumber: 2,
        title: "Continuous Dynamic Models",
        hours: 12,
        topics: [
          "Population dynamics: logistic growth, Lotka-Volterra predator-prey models",
          "Epidemiological models: SIR, SEIR compartmental frameworks",
          "Stability analysis and phase-plane methods",
          "Bifurcation theory and qualitative behaviour of solutions",
          "Modelling chemical reaction kinetics"
        ]
      },
      {
        moduleNumber: 3,
        title: "Partial Differential Equation Models",
        hours: 12,
        topics: [
          "Diffusion and heat conduction modelling",
          "Reaction-diffusion equations and Turing patterns",
          "Wave propagation models in elastic media",
          "Fluid flow models and Navier-Stokes simplifications",
          "Finite difference discretization for PDE models"
        ]
      },
      {
        moduleNumber: 4,
        title: "Stochastic & Discrete Models",
        hours: 12,
        topics: [
          "Monte Carlo simulation methods",
          "Random walk models and Brownian motion",
          "Discrete-time Markov chains and transition matrices",
          "Queuing models and birth-death processes",
          "Agent-based modelling concepts"
        ]
      },
      {
        moduleNumber: 5,
        title: "Computational Simulation & Case Studies",
        hours: 12,
        topics: [
          "Numerical methods for ODE systems: Euler, RK4, and adaptive methods",
          "Simulation of fluid dynamics and heat transfer problems",
          "MATLAB / Python implementation of mathematical models",
          "Visualization and interpretation of simulation data",
          "Capstone project: end-to-end modelling of a real-world system"
        ]
      }
    ],
    outcomes: [
      "Construct validated mathematical models for interdisciplinary problems.",
      "Apply analytical and numerical techniques to solve model equations.",
      "Implement simulation algorithms using computational software tools.",
      "Critically evaluate model assumptions, limitations, and predictions."
    ],
    textbooks: [
      "J. David Logan, Applied Mathematics, 4th Edition, Wiley, 2013.",
      "Frank R. Giordano, William P. Fox, and Steven B. Horton, A First Course in Mathematical Modeling, 5th Edition, Cengage, 2014."
    ],
    references: [
      "Mark M. Meerschaert, Mathematical Modeling, 4th Edition, Academic Press, 2013.",
      "Christof Eck, Harald Garcke, and Peter Knabner, Mathematical Modeling, Springer, 2017."
    ]
  },
  {
    id: "intro-mathematical-modelling",
    code: "MAT341",
    title: "Introduction to Mathematical Modelling",
    level: "Undergraduate",
    degreePrograms: ["BSc Mathematics", "BSc (CMS / EMS)"],
    credits: 4,
    totalHours: 60,
    overview: "An introductory course on the art and science of translating real-world problems into mathematical frameworks, covering formulation strategies, basic modelling paradigms, and solution interpretation.",
    objectives: [
      "Understand the modelling cycle: problem identification, formulation, solution, and interpretation.",
      "Build elementary models using algebraic, differential, and difference equations.",
      "Develop skills in dimensional analysis and estimation techniques.",
      "Apply modelling to problems in ecology, finance, physics, and social sciences."
    ],
    modules: [
      {
        moduleNumber: 1,
        title: "The Modelling Process",
        hours: 12,
        topics: [
          "What is a mathematical model? Purpose and scope",
          "Steps of the modelling cycle: observation, formulation, analysis, validation",
          "Proportionality, geometric similarity, and scaling laws",
          "Estimation and Fermi problems",
          "Case study: modelling population growth"
        ]
      },
      {
        moduleNumber: 2,
        title: "Models with Difference Equations",
        hours: 12,
        topics: [
          "First-order linear difference equations and equilibrium solutions",
          "Cobweb models in economics",
          "Discrete population models: geometric growth, logistic map",
          "Leslie matrix models for age-structured populations",
          "Stability of equilibria in discrete systems"
        ]
      },
      {
        moduleNumber: 3,
        title: "Models with Differential Equations",
        hours: 12,
        topics: [
          "Growth and decay models: exponential and logistic ODEs",
          "Newton's law of cooling and mixing problems",
          "Compartmental models: tank problems and drug dosage models",
          "Simple harmonic motion and damped oscillations",
          "Phase portraits and qualitative analysis"
        ]
      },
      {
        moduleNumber: 4,
        title: "Optimization & Fitting Models",
        hours: 12,
        topics: [
          "Linear programming models for resource allocation",
          "Least squares curve fitting and regression analysis",
          "Interpolation models: polynomial and spline fitting",
          "Constrained optimization with Lagrange multipliers",
          "Model selection criteria: AIC, BIC, and residual analysis"
        ]
      },
      {
        moduleNumber: 5,
        title: "Simulation & Probabilistic Models",
        hours: 12,
        topics: [
          "Introduction to Monte Carlo simulation",
          "Random number generation and sampling techniques",
          "Probabilistic models: coin toss, Gambler's ruin, random walks",
          "Simulation using spreadsheets, Python, and SageMath",
          "Project presentations: student-designed models"
        ]
      }
    ],
    outcomes: [
      "Translate verbal problem descriptions into well-posed mathematical models.",
      "Apply difference and differential equation models to analyze dynamic systems.",
      "Use optimization and fitting techniques for data-driven modelling.",
      "Develop computational simulation skills for model verification."
    ],
    textbooks: [
      "Frank R. Giordano, William P. Fox, and Steven B. Horton, A First Course in Mathematical Modeling, 5th Edition, Cengage, 2014.",
      "Edward A. Bender, An Introduction to Mathematical Modeling, Dover Publications, 2000."
    ],
    references: [
      "Clive L. Dym, Principles of Mathematical Modeling, 2nd Edition, Academic Press, 2004.",
      "Rutherford Aris, Mathematical Modelling Techniques, Dover Publications, 1994."
    ]
  },
  {
    id: "math-foundations-data-analytics",
    code: "MAT351",
    title: "Mathematical Foundations for Data Analytics",
    level: "Undergraduate",
    degreePrograms: ["BSc Data Science", "BCA", "BSc (CMS)"],
    credits: 4,
    totalHours: 60,
    overview: "Essential mathematical tools for data science and analytics, covering linear algebra, probability, statistics, optimization, and computational methods used in machine learning and data analysis.",
    objectives: [
      "Build strong foundations in linear algebra for data representation and dimensionality reduction.",
      "Understand probability distributions, estimation theory, and hypothesis testing.",
      "Apply optimization techniques used in machine learning algorithms.",
      "Develop computational proficiency using Python and R for data analytics."
    ],
    modules: [
      {
        moduleNumber: 1,
        title: "Linear Algebra for Data Science",
        hours: 12,
        topics: [
          "Vectors, matrices, and matrix operations in data representation",
          "Solving linear systems: Gaussian elimination and matrix factorization",
          "Eigenvalues, eigenvectors, and spectral decomposition",
          "Singular Value Decomposition (SVD) and its applications",
          "Principal Component Analysis (PCA) for dimensionality reduction"
        ]
      },
      {
        moduleNumber: 2,
        title: "Probability & Random Variables",
        hours: 12,
        topics: [
          "Sample spaces, events, and axioms of probability",
          "Conditional probability and Bayes' theorem",
          "Discrete and continuous random variables and their distributions",
          "Expectation, variance, and moment generating functions",
          "Joint distributions, covariance, and correlation"
        ]
      },
      {
        moduleNumber: 3,
        title: "Statistical Inference for Analytics",
        hours: 12,
        topics: [
          "Point estimation: method of moments and maximum likelihood estimation",
          "Confidence intervals and margin of error",
          "Hypothesis testing: z-test, t-test, chi-square test, and F-test",
          "Analysis of Variance (ANOVA) and regression analysis",
          "Non-parametric tests and bootstrap methods"
        ]
      },
      {
        moduleNumber: 4,
        title: "Optimization for Machine Learning",
        hours: 12,
        topics: [
          "Unconstrained optimization: gradient descent and its variants",
          "Stochastic gradient descent and mini-batch methods",
          "Convex functions and convex optimization theory",
          "Constrained optimization: KKT conditions",
          "Regularization techniques: L1 (Lasso) and L2 (Ridge) penalties"
        ]
      },
      {
        moduleNumber: 5,
        title: "Computational Methods & Applications",
        hours: 12,
        topics: [
          "Numerical differentiation and integration for data pipelines",
          "Matrix computations and sparse matrix techniques",
          "Introduction to graph-based analytics and network metrics",
          "Hands-on: Python (NumPy, SciPy, scikit-learn) implementations",
          "Case studies in recommendation systems and classification tasks"
        ]
      }
    ],
    outcomes: [
      "Apply linear algebra concepts for data transformation and feature extraction.",
      "Perform statistical inference and hypothesis testing on real datasets.",
      "Implement gradient-based optimization algorithms for machine learning.",
      "Use computational tools to solve data-driven mathematical problems."
    ],
    textbooks: [
      "Gilbert Strang, Linear Algebra and Its Applications, 4th Edition, Cengage Learning, 2006.",
      "Larry Wasserman, All of Statistics: A Concise Course in Statistical Inference, Springer, 2004."
    ],
    references: [
      "Sheldon M. Ross, Introduction to Probability and Statistics for Engineers and Scientists, 6th Edition, Academic Press, 2020.",
      "Stephen Boyd and Lieven Vandenberghe, Convex Optimization, Cambridge University Press, 2004."
    ]
  },
  {
    id: "foundational-mathematics",
    code: "MAT101",
    title: "Foundational Mathematics",
    level: "Undergraduate",
    degreePrograms: ["BCA", "BSc (CMS / EMS)", "BSc Data Science"],
    credits: 4,
    totalHours: 60,
    overview: "A bridge course designed to strengthen fundamental mathematical skills in algebra, trigonometry, coordinate geometry, and basic calculus essential for higher mathematics and computing courses.",
    objectives: [
      "Consolidate foundational concepts in algebra, sets, and logic.",
      "Strengthen skills in trigonometry and coordinate geometry.",
      "Introduce basic concepts of calculus: limits, derivatives, and integrals.",
      "Develop mathematical thinking and problem-solving abilities."
    ],
    modules: [
      {
        moduleNumber: 1,
        title: "Sets, Logic & Number Systems",
        hours: 12,
        topics: [
          "Sets, subsets, operations on sets, and Venn diagrams",
          "Propositional logic: connectives, truth tables, and logical equivalences",
          "Natural numbers, integers, rationals, irrationals, and real number properties",
          "Complex numbers: algebra, Argand diagram, and De Moivre's theorem",
          "Mathematical induction and well-ordering principle"
        ]
      },
      {
        moduleNumber: 2,
        title: "Algebra & Polynomials",
        hours: 12,
        topics: [
          "Polynomials: division algorithm, factor theorem, and remainder theorem",
          "Partial fractions and their decomposition",
          "Arithmetic and geometric progressions: sums and applications",
          "Binomial theorem for positive integral index",
          "Matrices: types, operations, determinants, and inverse"
        ]
      },
      {
        moduleNumber: 3,
        title: "Trigonometry & Coordinate Geometry",
        hours: 12,
        topics: [
          "Trigonometric functions, identities, and inverse trigonometric functions",
          "Properties of triangles and applications of trigonometry",
          "Straight lines: slope, equations, and angle between lines",
          "Circles: equation, tangent, and normal",
          "Conic sections: parabola, ellipse, and hyperbola (standard forms)"
        ]
      },
      {
        moduleNumber: 4,
        title: "Introduction to Calculus",
        hours: 12,
        topics: [
          "Intuitive notion of limits and continuity",
          "Differentiation of standard functions using first principles",
          "Rules of differentiation: sum, product, quotient, and chain rule",
          "Applications: tangent lines, maxima, and minima",
          "Indefinite integration: basic formulas and substitution method"
        ]
      },
      {
        moduleNumber: 5,
        title: "Vectors & Elementary Statistics",
        hours: 12,
        topics: [
          "Vectors in 2D and 3D: addition, scalar multiplication, and dot product",
          "Cross product and scalar triple product",
          "Measures of central tendency: mean, median, and mode",
          "Measures of dispersion: variance, standard deviation, and coefficient of variation",
          "Basic probability: sample spaces, events, and counting principles"
        ]
      }
    ],
    outcomes: [
      "Demonstrate proficiency in algebraic manipulation and problem-solving.",
      "Apply trigonometric and coordinate geometry concepts to analytical problems.",
      "Understand and apply basic differentiation and integration techniques.",
      "Analyze data using elementary statistical measures."
    ],
    textbooks: [
      "S. L. Loney, Plane Trigonometry Part I, Arihant Publications, 2016.",
      "R. D. Sharma, Mathematics for Class 11 and 12, Dhanpat Rai Publications, 2020."
    ],
    references: [
      "G. B. Thomas and R. L. Finney, Calculus and Analytic Geometry, 9th Edition, Addison-Wesley, 1995.",
      "S. K. Mapa, Introduction to Real Analysis, Sarat Book Distributors, 2014."
    ]
  },
  {
    id: "discrete-mathematics",
    code: "MAT251",
    title: "Discrete Mathematics",
    level: "Undergraduate",
    degreePrograms: ["BCA", "BSc Computer Science", "BSc (CMS)"],
    credits: 4,
    totalHours: 60,
    overview: "Foundational mathematical structures essential for software engineering, computer algorithms, computational complexity, database theory, and formal reasoning.",
    objectives: [
      "Master propositional and predicate logic for software verification.",
      "Understand set theory, binary relations, and algebraic structures.",
      "Solve linear recurrence relations and analyze algorithm complexities.",
      "Apply graph theory algorithms to network routing and topological analysis."
    ],
    modules: [
      {
        moduleNumber: 1,
        title: "Mathematical Logic & Proof Techniques",
        hours: 12,
        topics: [
          "Propositions, truth tables, tautologies, contradictions, and logical equivalences",
          "Predicate calculus, universal and existential quantifiers, nested quantifiers",
          "Rules of inference and valid argument structures",
          "Methods of proof: direct proof, proof by contrapositive, proof by contradiction",
          "Strong and structural mathematical induction"
        ]
      },
      {
        moduleNumber: 2,
        title: "Relations, Functions & Orderings",
        hours: 12,
        topics: [
          "Sets, operations on sets, Cartesian products, and power sets",
          "Binary relations: reflexive, symmetric, transitive, and anti-symmetric relations",
          "Equivalence relations, equivalence classes, and partitions",
          "Partial order relations, Hasse diagrams, lattices, and Boolean algebras",
          "Injective, surjective, and bijective functions; pigeonhole principle and applications"
        ]
      },
      {
        moduleNumber: 3,
        title: "Combinatorics & Recurrence Relations",
        hours: 12,
        topics: [
          "Permutations, combinations, binomial coefficients, and Pascal's identity",
          "Principle of Inclusion-Exclusion and derangements",
          "Formulation of recurrence relations (Fibonacci, Tower of Hanoi)",
          "Solving linear homogeneous and non-homogeneous recurrence relations",
          "Generating functions and their application to combinatorial problems"
        ]
      },
      {
        moduleNumber: 4,
        title: "Graph Theory & Network Structures",
        hours: 12,
        topics: [
          "Basic terminology: vertices, edges, degrees, Handshaking Lemma",
          "Special graphs: complete, bipartite, cycle, path, and regular graphs",
          "Matrix representations: adjacency matrix and incidence matrix",
          "Eulerian paths and circuits (Euler's theorem) and Hamiltonian cycles",
          "Planar graphs, Euler's formula, and graph coloring (Four Color Theorem overview)"
        ]
      },
      {
        moduleNumber: 5,
        title: "Trees & Algorithmic Applications",
        hours: 12,
        topics: [
          "Trees and their characterizing properties",
          "Rooted trees, binary search trees, and tree traversals (preorder, inorder, postorder)",
          "Spanning trees and minimal spanning tree algorithms (Kruskal's and Prim's)",
          "Shortest path algorithms: Dijkstra's algorithm",
          "Applications of discrete mathematics in computer network topologies"
        ]
      }
    ],
    outcomes: [
      "Construct sound deductive and inductive mathematical arguments.",
      "Analyze recursive algorithms using closed-form solutions of recurrence relations.",
      "Model computational networks and routing bottlenecks using graph data models.",
      "Leverage Boolean algebra to optimize digital circuits and database queries."
    ],
    textbooks: [
      "Kenneth H. Rosen, Discrete Mathematics and Its Applications, 8th Edition, McGraw-Hill, 2019.",
      "C. L. Liu and D. P. Mohapatra, Elements of Discrete Mathematics, 4th Edition, Tata McGraw-Hill, 2012."
    ],
    references: [
      "Thomas H. Cormen, Charles E. Leiserson, Ronald L. Rivest, and Clifford Stein, Introduction to Algorithms, 3rd Edition, MIT Press, 2009.",
      "Tremblay, J.P. and Manohar, R., Discrete Mathematical Structures with Applications to Computer Science, McGraw-Hill."
    ]
  },
  {
    id: "linear-algebra",
    code: "MAT261",
    title: "Linear Algebra",
    level: "Undergraduate",
    degreePrograms: ["BSc Mathematics", "BSc (CMS / EMS)", "BSc Data Science"],
    credits: 4,
    totalHours: 60,
    overview: "A comprehensive study of vector spaces, linear transformations, matrix theory, eigenvalue problems, and inner product spaces with applications in data science, physics, and engineering.",
    objectives: [
      "Understand the axiomatic structure of vector spaces and subspaces.",
      "Master techniques of solving linear systems and matrix decompositions.",
      "Analyze linear transformations and their matrix representations.",
      "Apply eigenvalue theory and inner product space concepts to real-world problems."
    ],
    modules: [
      {
        moduleNumber: 1,
        title: "Systems of Linear Equations & Matrices",
        hours: 12,
        topics: [
          "Systems of linear equations and augmented matrices",
          "Gaussian elimination and Gauss-Jordan reduction",
          "Row echelon form and reduced row echelon form",
          "Rank of a matrix and consistency of linear systems",
          "Matrix algebra: transpose, trace, and inverse matrices"
        ]
      },
      {
        moduleNumber: 2,
        title: "Vector Spaces & Subspaces",
        hours: 12,
        topics: [
          "Definition and examples of vector spaces over real and complex fields",
          "Subspaces, span, and linear combinations",
          "Linear independence, basis, and dimension",
          "Row space, column space, and null space of a matrix",
          "Rank-Nullity theorem and its applications"
        ]
      },
      {
        moduleNumber: 3,
        title: "Linear Transformations",
        hours: 12,
        topics: [
          "Definition and examples of linear transformations",
          "Kernel and range of a linear transformation",
          "Matrix representation of linear transformations",
          "Change of basis and similarity of matrices",
          "Isomorphisms between vector spaces"
        ]
      },
      {
        moduleNumber: 4,
        title: "Eigenvalues & Diagonalization",
        hours: 12,
        topics: [
          "Eigenvalues, eigenvectors, and characteristic polynomial",
          "Cayley-Hamilton theorem and its applications",
          "Diagonalization of matrices: criteria and procedure",
          "Symmetric matrices and orthogonal diagonalization",
          "Applications: Markov chains, differential systems, and Google PageRank"
        ]
      },
      {
        moduleNumber: 5,
        title: "Inner Product Spaces & Orthogonality",
        hours: 12,
        topics: [
          "Inner product spaces: definition, norms, and distance",
          "Gram-Schmidt orthogonalization process",
          "Orthogonal complements and projections",
          "QR decomposition of matrices",
          "Least squares approximation and best-fit problems"
        ]
      }
    ],
    outcomes: [
      "Demonstrate mastery of vector space axioms, basis, and dimension theory.",
      "Analyze and compute matrix decompositions for practical applications.",
      "Apply eigenvalue theory for diagonalization and spectral analysis.",
      "Solve least squares problems using inner product space methods."
    ],
    textbooks: [
      "Sheldon Axler, Linear Algebra Done Right, 3rd Edition, Springer, 2015.",
      "Howard Anton and Chris Rorres, Elementary Linear Algebra, 11th Edition, Wiley, 2014."
    ],
    references: [
      "Gilbert Strang, Introduction to Linear Algebra, 5th Edition, Wellesley-Cambridge Press, 2016.",
      "Kenneth Hoffman and Ray Kunze, Linear Algebra, 2nd Edition, Prentice Hall, 1971."
    ]
  },
  {
    id: "numerical-methods",
    code: "MAT371",
    title: "Numerical Methods",
    level: "Undergraduate",
    degreePrograms: ["BSc Mathematics", "BSc (CMS / EMS)", "BCA"],
    credits: 4,
    totalHours: 60,
    overview: "Computational algorithms for solving mathematical problems including root finding, interpolation, numerical differentiation and integration, and numerical solutions of ordinary differential equations.",
    objectives: [
      "Understand error analysis, convergence, and stability of numerical algorithms.",
      "Apply iterative methods for solving nonlinear equations and linear systems.",
      "Master interpolation and approximation techniques for data fitting.",
      "Implement numerical differentiation, integration, and ODE solvers computationally."
    ],
    modules: [
      {
        moduleNumber: 1,
        title: "Errors & Root Finding Methods",
        hours: 12,
        topics: [
          "Sources of error: round-off, truncation, and propagation",
          "Significant digits, absolute and relative errors",
          "Bisection method and convergence analysis",
          "Newton-Raphson method and secant method",
          "Fixed-point iteration and convergence criteria"
        ]
      },
      {
        moduleNumber: 2,
        title: "Numerical Solutions of Linear Systems",
        hours: 12,
        topics: [
          "Direct methods: Gaussian elimination with pivoting, LU decomposition",
          "Tri-diagonal systems and Thomas algorithm",
          "Iterative methods: Jacobi iteration and Gauss-Seidel method",
          "Successive Over-Relaxation (SOR) method",
          "Convergence criteria and spectral radius"
        ]
      },
      {
        moduleNumber: 3,
        title: "Interpolation & Approximation",
        hours: 12,
        topics: [
          "Lagrange interpolation and Newton's divided difference formula",
          "Forward, backward, and central difference operators",
          "Newton-Gregory forward and backward interpolation formulas",
          "Spline interpolation: linear and cubic splines",
          "Least squares polynomial approximation"
        ]
      },
      {
        moduleNumber: 4,
        title: "Numerical Differentiation & Integration",
        hours: 12,
        topics: [
          "Numerical differentiation using finite difference formulas",
          "Richardson extrapolation for improved accuracy",
          "Newton-Cotes formulas: Trapezoidal rule and Simpson's rules",
          "Composite integration formulas and error estimates",
          "Romberg integration and Gaussian quadrature"
        ]
      },
      {
        moduleNumber: 5,
        title: "Numerical Solutions of ODEs",
        hours: 12,
        topics: [
          "Euler's method and modified Euler's method",
          "Runge-Kutta methods: second and fourth order",
          "Systems of first-order ODEs: vector RK4",
          "Predictor-corrector methods: Adams-Bashforth and Adams-Moulton",
          "Boundary value problems: shooting method and finite difference method"
        ]
      }
    ],
    outcomes: [
      "Analyze and estimate errors in numerical computations.",
      "Implement root-finding and linear system solvers with convergence guarantees.",
      "Construct interpolating polynomials and splines for data approximation.",
      "Solve initial and boundary value problems using numerical ODE methods."
    ],
    textbooks: [
      "M. K. Jain, S. R. K. Iyengar, and R. K. Jain, Numerical Methods for Scientific and Engineering Computation, 6th Edition, New Age International, 2012.",
      "Steven C. Chapra and Raymond P. Canale, Numerical Methods for Engineers, 7th Edition, McGraw-Hill, 2015."
    ],
    references: [
      "Richard L. Burden and J. Douglas Faires, Numerical Analysis, 10th Edition, Cengage Learning, 2016.",
      "E. Süli and D. F. Mayers, An Introduction to Numerical Analysis, Cambridge University Press, 2003."
    ]
  }
];

// 12. INSTITUTIONAL & ACADEMIC RESPONSIBILITIES
export const christResponsibilitiesData: ResponsibilityItem[] = [
  {
    id: "cmn-coordinator",
    title: "Coordinator – Centre for Mathematical Needs (CMN)",
    organization: "CHRIST (Deemed to be University), Central Campus",
    category: "Departmental",
    period: "2021 – Present",
    roleType: "Academic Leadership & Student Support",
    description: "Leading the Centre for Mathematical Needs, an innovative university initiative dedicated to bridging mathematical learning gaps, providing peer-tutoring networks, and offering advanced problem-solving workshops for cross-disciplinary students.",
    keyContributions: [
      "Established daily student consultation desks serving over 400+ undergraduate and postgraduate learners per semester.",
      "Developed specialized remedial and bridge modules for non-mathematics majors (Economics, Computer Science, and Data Analytics).",
      "Organized student-led mathematical problem clinics and Olympiad preparation sessions."
    ]
  },
  {
    id: "bos-member",
    title: "Member – Board of Studies (BOS)",
    organization: "Department of Mathematics, CHRIST (Deemed to be University)",
    category: "Academic Committee",
    period: "2020 – Present",
    roleType: "Curriculum Design & Academic Governance",
    description: "Active contributor to the design, restructuring, and modernization of undergraduate and postgraduate mathematics curricula in alignment with NEP 2020 guidelines and industry-academic research standards.",
    keyContributions: [
      "Spearheaded the introduction of computational and applied courses including Fluid Dynamics and Mathematical Cryptography.",
      "Integrated software tools (MATLAB, Python, SageMath, and FOSS platforms) into practical laboratory curricula.",
      "Formulated course learning outcomes (CLOs) and program outcome mapping (OBE framework)."
    ]
  },
  {
    id: "naac-nirf-coordinator",
    title: "Criterion Coordinator – NAAC & NIRF Documentation",
    organization: "Internal Quality Assurance Cell (IQAC), CHRIST University",
    category: "Institutional",
    period: "2022 – Present",
    roleType: "Quality Assurance & Institutional Research",
    description: "Coordinating data collation, evidence compilation, and metrics validation for NAAC Re-Accreditation (Criterion 3: Research, Innovations and Extension) and NIRF rankings.",
    keyContributions: [
      "Streamlined faculty research output tracking, citation metrics, h-index monitoring, and Scopus/Web of Science indexed records.",
      "Facilitated documentation for departmental extramural research grants, government funding, and collaborative MOUs.",
      "Contributed to university institutional dossiers that secured outstanding accreditation ratings."
    ]
  },
  {
    id: "conference-convener",
    title: "Faculty Coordinator – Conferences, Colloquia & Seminars",
    organization: "Department of Mathematics, CHRIST (Deemed to be University)",
    category: "Departmental",
    period: "2019 – Present",
    roleType: "Event Direction & Academic Outreach",
    description: "Convened and directed multiple national and international conferences, symposiums, and research workshops connecting world-class mathematicians and engineers with CHRIST students.",
    keyContributions: [
      "Organized flagship International Conferences on Fluid Mechanics, Modeling, and Applied Computational Mathematics.",
      "Secured renowned international keynote speakers from South Korea, South Africa, Egypt, and the USA.",
      "Managed peer-review editorial processes for Scopus-indexed conference proceedings."
    ]
  },
  {
    id: "pg-fest-mentor",
    title: "Faculty Mentor – Postgraduate Academic Fest & Research Club",
    organization: "Department of Mathematics, CHRIST (Deemed to be University)",
    category: "Departmental",
    period: "2021 – Present",
    roleType: "Student Mentorship & Co-Curricular Engagement",
    description: "Mentoring postgraduate and undergraduate student associations in conducting flagship academic fests, paper presentation contests, math quizzes, and public science exhibitions.",
    keyContributions: [
      "Mentored student committees in organizing the annual PG Mathematics Fest, attracting participants from 30+ colleges.",
      "Guided students in presenting scientific posters and research preprints at inter-collegiate summits.",
      "Fostered a collaborative, peer-to-peer mentoring environment recognized by student testimonials."
    ]
  },
  {
    id: "faculty-proctor",
    title: "Faculty Proctor & Class Mentor",
    organization: "Department of Mathematics, CHRIST (Deemed to be University)",
    category: "Institutional",
    period: "2018 – Present",
    roleType: "Holistic Student Mentoring & Well-being",
    description: "Serving as designated faculty proctor and personal academic counselor for undergraduate (BSc CMS / EMS) and postgraduate (MSc) student cohorts throughout their degree journeys.",
    keyContributions: [
      "Conducted weekly mentoring interactions focusing on academic progress, career planning, and emotional well-being.",
      "Advised graduating seniors on higher education applications, GRE/GATE exams, and scholarship opportunities abroad.",
      "Maintained close constructive communication with parents and university student counseling services."
    ]
  }
];



// ---------------------------------------------------------------------------
// 13. RESEARCH TEAM & MENTORSHIP
// ---------------------------------------------------------------------------

// 14. RESEARCH GRANTS & FUNDING (INR 12,00,000+)


// 15. INDUSTRY CONSULTANCY PROJECTS


// 16. ACADEMIC REFERENCES
export const academicReferences = [
  {
    name: 'Dr. Pradeep G Siddheshwar',
    title: 'Senior Professor',
    department: 'Department of Mathematics',
    institution: 'CHRIST (Deemed to be University), India',
    phone: '+91-9449552834',
    email: 'pg.siddheshwar@christuniversity.in',
  },
  {
    name: 'Dr. Jayalatha G',
    title: 'Professor & Head',
    department: 'Department of Mathematics',
    institution: 'RV College of Engineering, India',
    phone: '+91-9880693238',
    email: 'jayalathag@rvce.edu.in',
  },
  {
    name: 'Dr. Shalela Binti Mohd',
    title: 'Associate Professor',
    department: 'Faculty of Computer Science and Mathematics',
    institution: 'Universiti Malaysia Terengganu, Malaysia',
    phone: '+60 11-26089528',
    email: 'shalela@umt.edu.my',
  },
];

// 17. SPOKEN LANGUAGES
export const spokenLanguages = ['English', 'Kannada', 'Telugu'];

// 18. PROFESSIONAL MEMBERSHIPS
export const professionalMemberships = [
  {
    name: 'International Association of Mathematical Physics (IAMP)',
    role: 'Member',
    description: 'Promoting mathematical physics research and hybrid non-linear mathematical modelling.',
  },
];

// 19. PUBLISHER DISTRIBUTION & METRICS
export const publisherDistribution = [
  { name: 'Taylor & Francis', count: 25, percentage: 34 },
  { name: 'Elsevier', count: 12, percentage: 16 },
  { name: 'World Scientific', count: 10, percentage: 14 },
  { name: 'Springer', count: 9, percentage: 12 },
  { name: 'Wiley', count: 7, percentage: 10 },
  { name: 'Others', count: 17, percentage: 23 },
];

export const quartileDistribution = [
  { name: 'Q1 (Top Tier)', count: 42, percentage: 58 },
  { name: 'Q2', count: 22, percentage: 30 },
  { name: 'Q3', count: 7, percentage: 10 },
  { name: 'Q4', count: 7, percentage: 10 },
];

export const citationsByYear = [
  { year: 2021, citations: 95 },
  { year: 2022, citations: 280 },
  { year: 2023, citations: 520 },
  { year: 2024, citations: 740 },
  { year: 2025, citations: 345 },
];
