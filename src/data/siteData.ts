export interface Publication {
  title: string;
  url: string;
  year: number;
  authors?: string;
  journal?: string;
}

export interface Collaborator {
  name: string;
  role?: string;
  department: string;
  institution: string;
  location?: string;
  country: string;
  specialization: string;
  image?: string;
}

export interface NetworkingInstitution {
  name: string;
  location: string;
  homeUrl: string;
  image?: string;
}

export interface EditorialRole {
  journal: string;
  role: string;
  url: string;
}

export interface Project {
  title: string;
  type: string;
  code: string;
  funding: string;
  duration: string;
}

export interface LabMember {
  name: string;
  role: string;
  period: string;
  degreeLevel: 'phd' | 'postgraduate' | 'undergraduate';
}

export interface OutreachItem {
  title: string;
  subtitle?: string;
  location?: string;
  description?: string;
  category: 'invited-talk' | 'expert-session' | 'mooc';
  year?: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  degree: string;
}

export interface Intern {
  name: string;
  role: string;
  period: string;
  image?: string;
}

export const siteInfo = {
  name: "Dr Puneeth V",
  title: "Assistant Professor",
  department: "Department of Mathematics",
  university: "CHRIST (Deemed to be University)",
  location: "Bengaluru, India",
  email: "puneeth.v@christuniversity.in",
  office: "#518, Centre for Mathematical Needs, Ground floor, Block 2, CHRIST (Deemed to be University), Central Campus, Bengaluru 560029",
  officeHoursText: "9:30 AM to 2:30 PM",
  metaDescription: "Welcome to the official website of Dr Puneeth V, Assistant Professor in the Department of Mathematics at CHRIST (Deemed to be University), Bengaluru. Insights into academic journey, research, publications, teaching, and collaborations.",
  homeBioHeading: "Welcome to the official website of Dr Puneeth V, Assistant Professor in the Department of Mathematics at CHRIST (Deemed to be University), Bengaluru. This website offers insights into Dr Puneeth’s academic journey, current research endeavors, teaching contributions, and scholarly publications. Whether you're a fellow researcher, student, or simply curious about the fascinating world of applied mathematics and theoretical physics, you’ll find something of value here.",
  homeBioFull: "Dr Puneeth V is an Assistant Professor with a dedicated focus on research and teaching in the fields of Fluid Dynamics, Aerodynamics, Boundary Layer Theory, and Number Theory. With a deep-rooted passion for applied mathematics and theoretical insights, his academic journey is driven by a commitment to advancing knowledge and mentoring the next generation of scholars. He has authored over 60 research articles in reputed journals, establishing a strong presence in the international research community. His work has attracted global collaborations and contributed significantly to the understanding of complex flow phenomena and mathematical structures. As an educator and researcher, Dr Puneeth continues to inspire academic excellence and innovation, fostering a learning environment that values curiosity, precision, and impact."
};

export const researchOverviewText = `Welcome to the research section of my academic website. This space brings together the core of my scholarly work, offering a window into the questions that drive my research, the methods I employ, and the communities with whom I collaborate. My primary areas of research lie in Boundary Layer Theory, Nanofluid Dynamics, and Stability Analysis of Complex Flows, with a strong emphasis on both theoretical modelling and computational simulations. The broader applications of this work extend into aerospace engineering, heat and mass transfer, and advanced fluid systems.

This section presents a curated collection of my research articles, highlighting key contributions to the field over the years. It also showcases the academic and research institutions with which I have built meaningful and sustained collaborations. You will find an overview of ongoing and completed projects many of which are supported by national funding agencies and updates on our lab activities and capabilities. My involvement as an editorial board member in several reputed journals is also featured here, reflecting a commitment to academic service and peer review.

Whether you are a fellow researcher, student, or prospective collaborator, I hope this section provides valuable insights into the scope, depth, and collaborative spirit of my research journey.`;

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

export const projects: Project[] = [
  {
    title: "The study of Newtonian fluid flows subject to non linear boundary conditions",
    type: "Funded Research Project",
    code: "SEED MONEY - CU-ORS-SM-24/54",
    funding: "INR 3,00,000",
    duration: "12 Months"
  }
];

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

export const conferencesOverviewText = `This section highlights my active engagement in academic conferences, both as a participant and an organizer. Conferences form an integral part of academic life, providing platforms to exchange ideas, present research findings, foster collaborations, and stay updated with the latest developments in the field. Over the years, I have participated in numerous national and international conferences, delivering talks, presenting papers, and engaging in meaningful discussions with fellow researchers and scholars. These experiences have enriched my academic perspective and have often led to long-standing professional associations.

Equally significant is my role in organizing academic events. I have been involved in the planning and execution of several conferences, workshops, and symposiums, some of which were supported by prominent funding agencies and academic societies. These events aim to bring together researchers, educators, and students, creating opportunities for dialogue and collective learning. Through the sub-sections under this page, you will find a record of the conferences I have helped organize and those I have actively participated in, reflecting my continued commitment to academic engagement and community-building.`;

export const outreachOverviewText = `This section reflects my ongoing efforts to contribute to the broader academic and professional community beyond conventional classroom and research settings. Outreach is a vital extension of academic work, allowing for the dissemination of knowledge, capacity-building, and engagement with diverse audiences across institutions and disciplines.

Through Massive Open Online Courses (MOOCs), I aim to make specialized knowledge accessible to a wider audience, fostering self-paced learning and academic inclusivity. My involvement in expert sessions ranges from delivering technical workshops to participating in interdisciplinary panels, providing insights on both foundational and emerging topics. Additionally, invited talks delivered at universities, conferences, and professional forums have offered opportunities to share research findings, pedagogical approaches, and domain expertise with scholars, students, and practitioners alike.

This section documents these outreach activities, showcasing a commitment to academic dialogue, knowledge transfer, and community engagement at local, national, and international levels.`;

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

export const moocYears = ["2025", "2024", "2023", "2022", "2021", "2020"];

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

