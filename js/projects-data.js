/**
 * Portfolio Data for Muhammad Yusuf (Fharza Yusuf)
 * Senior Software Developer | Mobile (Flutter) & Full-Stack (Laravel, Next.js, Vue)
 * Experience: 2016 - 2026 (8+ Years)
 */

const PORTFOLIO_DATA = {
  profile: {
    name: "Muhammad Yusuf",
    alias: "Fharza Yusuf",
    role: "Senior Software Developer",
    tagline: "Specializing in High-Performance Banking Mobile Apps (Flutter) & Scalable Enterprise Web Systems (Next.js, Vue, Laravel)",
    location: "Jagakarsa, Jakarta Selatan, DKI Jakarta, Indonesia",
    phone: "+62 81283719444",
    email: "fharzayusuf@gmail.com",
    linkedin: "https://www.linkedin.com/in/fharza-yusuf-8330aa151/",
    github: "https://github.com/yusuffharza",
    availability: "Available for Senior / Lead Engineering Roles & Consulting",
    bio: "I am an innovative Software Developer with over 8+ years of professional experience building enterprise Web and Mobile applications. Skilled in Flutter (Dart), JavaScript, PHP (Laravel/Lumen), Next.js, Vue.js, Node.js (Express), and Golang. I have architected and delivered mission-critical mobile banking apps (Bank Jatim, Bank Jateng, Bank Aceh) with advanced features including NFC Tap-to-Pay (BCA Flazz), BI-Fast transfers, eKYC onboarding, and QRIS CPM/Tap. My principle: 'Keep learning and practicing to produce the best work.'",
    principle: "Keep learning and practicing to produce the best work.",
    stats: [
      { label: "Years Experience", value: "8+", icon: "code" },
      { label: "Enterprise Projects", value: "30+", icon: "layers" },
      { label: "Mobile Banking Users", value: "1M+", icon: "users" },
      { label: "Huawei Certifications", value: "2", icon: "award" }
    ]
  },

  certifications: [
    {
      title: "General Digital Engine Programming & Orchestration Skill Certificate (Developer Professional)",
      issuer: "PT Huawei Tech Investment",
      certificateId: "090118808431171409",
      department: "Service & Software R&D Mgmt Dept",
      icon: "award"
    },
    {
      title: "General Digital Engine Programming & Orchestration Skill Certificate (Developer Associate)",
      issuer: "PT Huawei Tech Investment",
      certificateId: "09011880843113925940",
      department: "Service & Software R&D Mgmt Dept",
      icon: "award"
    }
  ],

  bestFeatures: [
    { title: "Bank Jatim (Jconnect) Mobile Banking from Zero", desc: "Built end-to-end mobile banking app with Flutter & Hive local storage" },
    { title: "NFC Tap To Pay (BCA Flazz & e-Money)", desc: "Implemented native NFC card reading and instant balance updates" },
    { title: "BI Fast & Real-Time Interbank Transfers", desc: "Seamless integration with national fast payment infrastructure" },
    { title: "eKYC Digital Onboarding", desc: "Automated customer identity verification and biometric onboarding flow" },
    { title: "QRIS CPM & QRIS Tap", desc: "Full merchant and customer-presented QR payment mode implementation" },
    { title: "Deeplink Omni & Cashless Setor Tunai", desc: "Omnichannel cashier & ATM deposit flow with deep linking" },
    { title: "SMS OTP Premium & Security", desc: "High-security two-factor authentication and tokenized sessions" },
    { title: "Enterprise SDK & Framework Upgrades", desc: "Migrating legacy codebases to the latest Flutter & Dart SDK standards" }
  ],

  skills: [
    {
      category: "Mobile Engineering",
      description: "Production mobile banking & consumer apps with Flutter & Native iOS/Android.",
      items: [
        { name: "Flutter", level: "Expert", years: "6+ yrs", icon: "flutter" },
        { name: "Dart", level: "Expert", years: "6+ yrs", icon: "dart" },
        { name: "NFC / Tap-to-Pay (Flazz BCA)", level: "Expert", years: "3 yrs", icon: "wifi" },
        { name: "QRIS CPM & QRIS Tap", level: "Expert", years: "3 yrs", icon: "qr-code" },
        { name: "Hive NoSQL & Offline Storage", level: "Expert", years: "4 yrs", icon: "database" },
        { name: "eKYC Biometric Integration", level: "Advanced", years: "3 yrs", icon: "shield" },
        { name: "Android Studio & Xcode", level: "Expert", years: "6+ yrs", icon: "smartphone" }
      ]
    },
    {
      category: "Backend & Cloud Architecture",
      description: "High-throughput microservices, banking APIs, and distributed systems.",
      items: [
        { name: "PHP (Laravel & Lumen)", level: "Expert", years: "8+ yrs", icon: "server" },
        { name: "Node.js (Express / AdonisJs)", level: "Advanced", years: "5 yrs", icon: "code" },
        { name: "Microservices API Design", level: "Expert", years: "6 yrs", icon: "network" },
        { name: "MySQL & SQL Server", level: "Expert", years: "8+ yrs", icon: "database" },
        { name: "MongoDB", level: "Advanced", years: "4 yrs", icon: "database" },
        { name: "Golang", level: "Proficient", years: "2 yrs", icon: "zap" },
        { name: "Huawei Cloud / OWS Platform", level: "Certified", years: "3 yrs", icon: "cloud" }
      ]
    },
    {
      category: "Web & Frontend Portals",
      description: "Modern web applications, admin configuration dashboards, and merchant portals.",
      items: [
        { name: "Next.js", level: "Advanced", years: "4 yrs", icon: "layout" },
        { name: "Vue.js & Nuxt.js", level: "Expert", years: "5 yrs", icon: "layout" },
        { name: "JavaScript & ES6+", level: "Expert", years: "8+ yrs", icon: "code" },
        { name: "HTML5 / CSS3 / Bootstrap", level: "Expert", years: "8+ yrs", icon: "palette" },
        { name: "TailwindCSS", level: "Advanced", years: "4 yrs", icon: "brush" },
        { name: "Ajax & REST Client", level: "Expert", years: "8+ yrs", icon: "repeat" }
      ]
    },
    {
      category: "DevOps & Developer Tools",
      description: "Containerization, automated build pipelines, and version control.",
      items: [
        { name: "Docker", level: "Advanced", years: "4 yrs", icon: "box" },
        { name: "GitLab & GitHub", level: "Expert", years: "8+ yrs", icon: "git-branch" },
        { name: "Jenkins CI/CD", level: "Advanced", years: "4 yrs", icon: "cpu" },
        { name: "Team Foundation Server (TFS)", level: "Advanced", years: "4 yrs", icon: "server" },
        { name: "CentOS / Linux Server", level: "Advanced", years: "6 yrs", icon: "terminal" },
        { name: "Postman, HeidiSQL, FileZilla", level: "Expert", years: "8+ yrs", icon: "tool" }
      ]
    }
  ],

  projects: [
    {
      id: "bank-jatim-jconnect",
      title: "Bank Jatim Mobile Banking (Jconnect)",
      subtitle: "Enterprise Mobile Banking Android & iOS Application",
      category: "banking",
      categoryLabel: "Mobile Banking (Flutter)",
      featured: true,
      image: "assets/images/project-jconnect-apps.png",
      period: "January 2023 - Present",
      company: "PT Infosys Solusi Terpadu",
      summary: "Developed mobile banking application from scratch for all Bank Jatim account holders. Built responsive UI, microservices API integration, and offline-first Hive storage.",
      tags: ["Flutter", "Dart", "Microservices", "Hive NoSQL", "NFC Flazz BCA", "QRIS CPM/Tap"],
      githubUrl: "",
      liveUrl: "https://www.bankjatim.co.id",
      metrics: "500k+ Active Users | Production Banking App",
      description: "Full end-to-end development of Bank Jatim's flagship mobile banking application (Jconnect). Engineered fluid, secure banking workflows, microservices consumption, and complex financial features.",
      features: [
        "Built responsive mobile banking architecture from scratch with Flutter",
        "NFC e-money integration with BCA Flazz balance check & top-up",
        "Full support for QRIS CPM (Customer-Presented Mode) and QRIS Tap",
        "Offline-first local storage architecture utilizing Hive NoSQL",
        "High-security encrypted authentication and biometric login"
      ]
    },
    {
      id: "bank-aceh-action",
      title: "Bank Aceh Mobile Banking (Action)",
      subtitle: "Full-Featured Islamic Mobile Banking & eKYC App",
      category: "banking",
      categoryLabel: "Mobile Banking (Flutter)",
      featured: true,
      image: "assets/images/project-ekyc-screen.png",
      period: "June 2022 - Dec 2022 & Jan 2026",
      company: "PT Infosys Solusi Terpadu",
      summary: "Developed mobile banking application from scratch with Setor Tunai, Deeplink, BI-Fast transfer, eKYC Onboarding, and NFC e-money integration.",
      tags: ["Flutter", "Dart", "BI-Fast", "eKYC Onboarding", "NFC e-Money", "Deeplink"],
      githubUrl: "",
      liveUrl: "https://www.bankaceh.co.id",
      metrics: "All Bank Aceh Account Holders",
      description: "Comprehensive mobile banking application built with Flutter from the ground up. Enabled digital account opening via eKYC, instant interbank transfers with BI Fast, and cardless cash deposits (Setor Tunai).",
      features: [
        "eKYC (Electronic Know Your Customer) digital customer onboarding",
        "BI Fast national payment infrastructure integration",
        "Cardless cash deposit (Setor Tunai) & ATM Deeplink Omni",
        "NFC e-money balance inquiry and top-up",
        "Continuous maintenance and framework upgrade"
      ]
    },
    {
      id: "bank-jateng-bima",
      title: "Bank JATENG Mobile Banking (BIMA)",
      subtitle: "Core Mobile Banking Application Feature Engineering",
      category: "banking",
      categoryLabel: "Mobile Banking (Flutter)",
      featured: true,
      image: "assets/images/project-mobile-banking-mockups.png",
      period: "September 2024 - Present",
      company: "PT Infosys Solusi Terpadu",
      summary: "Developing and maintaining Bank Jateng mobile banking application (BIMA), integrating microservices, BCA Flazz, QRIS CPM/Tap, and major SDK framework upgrades.",
      tags: ["Flutter", "Dart", "Microservices", "Shared Preferences", "BCA Flazz", "QRIS CPM"],
      githubUrl: "",
      liveUrl: "https://www.bankjateng.co.id",
      metrics: "Enterprise Bank Jateng Client Base",
      description: "Engineered responsive banking UI, robust error handling, bug fixing, and continuous framework SDK version upgrades ensuring compatibility with the latest Android & iOS standards.",
      features: [
        "BCA Flazz NFC integration for fast contactless transactions",
        "QRIS CPM & Tap payment gateway integration",
        "Framework SDK upgrade to latest Dart/Flutter releases",
        "Optimized microservice API communication layer"
      ]
    },
    {
      id: "web-branch-config-portals",
      title: "Bank Admin & Branch Configuration Portals",
      subtitle: "Next.js & Vue.js Microservice Management Portals",
      category: "web",
      categoryLabel: "Web Portal (Next.js / Vue)",
      featured: true,
      image: "assets/images/project-laravel.jpg",
      period: "June 2022 - Present",
      company: "PT Infosys Solusi Terpadu",
      summary: "Suite of administrative and branch configuration web portals for Bank Jatim, Bank Jateng, and Bank Aceh built with Next.js and Vue.js.",
      tags: ["Next.js", "Vue.js", "JavaScript", "Microservices", "Admin Portal", "Bootstrap"],
      githubUrl: "",
      liveUrl: "#",
      metrics: "Internal Admin & Branch Users Across 3 Banks",
      description: "Centralized internal portals for bank branch managers and IT teams to manage mobile banking configurations, branch-level limits, merchant accounts, and feature toggles in real time.",
      features: [
        "Web Portal Branch & Config - Bank Jatim (Built with Next.js)",
        "Web Merchant Portal - Bank Jatim (Built with Vue.js)",
        "Web Branch & Config Portal - Bank Jateng (Built with Vue.js)",
        "Web Config Portal & Branch Portal - Bank Aceh (Built with Vue.js)"
      ]
    },
    {
      id: "huawei-ro-care",
      title: "RO Care - XL Dealer Complaints Mobile & API",
      subtitle: "Huawei Tech Investment Mobile App & Lumen API Backend",
      category: "mobile",
      categoryLabel: "Mobile & Backend",
      featured: false,
      image: "assets/images/project-flutter.jpg",
      period: "February 2020 - September 2020",
      company: "PT Huawei Tech Investment",
      summary: "End-to-end development of XL Dealer complaint handling system with Flutter mobile app and Lumen REST API backend on Huawei OWS Platform.",
      tags: ["Flutter", "Lumen", "Huawei OWS", "REST API", "Android/iOS", "Play Store"],
      githubUrl: "",
      liveUrl: "https://play.google.com/store/apps/details?id=com.rodealer2.ro_dealer2",
      metrics: "1,000+ Active XL Dealers on Play Store",
      description: "Built for PT Huawei Tech Investment to streamline complaint tracking and resolution for XL Axiata network dealers across Indonesia.",
      features: [
        "Full Flutter cross-platform mobile client for Android & iOS",
        "Lumen PHP high-throughput REST API layer",
        "Huawei OWS Platform server & microservices integration",
        "Automated dealer verification and complaint lifecycle tracking"
      ]
    },
    {
      id: "huawei-dashboards",
      title: "Huawei Telecom Dashboards & Automation Suite",
      subtitle: "Analyst, FME, Autohealing & E2E Dashboards",
      category: "web",
      categoryLabel: "Enterprise Dashboards",
      featured: false,
      image: "assets/images/project-laravel.jpg",
      period: "September 2019 - April 2022",
      company: "PT Huawei Tech Investment",
      summary: "Engineered critical telecom vendor dashboards for Huawei including Autohealing, FME, E2E monitoring, Google Maps tracking, and FRS alarm ticketing.",
      tags: ["JavaScript", "Ajax", "Bootstrap", "Huawei Server", "Google Maps API", "REST API"],
      githubUrl: "",
      liveUrl: "#",
      metrics: "Core Systems for Huawei Telecom Vendors",
      description: "Developed UI and API data services from scratch for Huawei internal engineering teams, monitoring network faults, ticket mapping, and vendor workflows.",
      features: [
        "Analyst & Reporting Dashboard for telecom performance metrics",
        "Autohealing Dashboard with automated network recovery triggers",
        "Mateline Google Maps integration for engineer CP/FD GPS positioning",
        "FRS Integration for mapping network alarm impact to tickets"
      ]
    },
    {
      id: "elangsung-club",
      title: "Elangsung Club - Mechanic & Rewards App",
      subtitle: "Flutter Mobile App, Laravel Dashboard & Node.js OTP",
      category: "mobile",
      categoryLabel: "Mobile & Full-Stack",
      featured: false,
      image: "assets/images/project-flutter.jpg",
      period: "2020 - 2025",
      company: "Independent / Client Project",
      summary: "Full ecosystem for motorcycle mechanics: Flutter app, Laravel dashboard, Lumen API, Node.js WhatsApp OTP, Docker, and Xendit digital money/bank disbursement.",
      tags: ["Flutter", "Laravel", "Lumen", "Node.js", "Docker", "Xendit", "MySQL"],
      githubUrl: "",
      liveUrl: "https://play.google.com/store/apps/details?id=com.elangsung.club",
      metrics: "Play Store Published | Automated Xendit Payouts",
      description: "Comprehensive loyalty and payout system for mechanics and motorcycle workshops across Indonesia, featuring barcode scanning and digital wallet cashouts.",
      features: [
        "Invite mechanic and store partner onboarding with verification",
        "Barcode QR scanning on spare parts for instant rewards",
        "Automated payout to digital money wallets or bank accounts via Xendit",
        "Node.js WhatsApp OTP service for instant verification",
        "Dockerized server deployment"
      ]
    },
    {
      id: "kepoo-retail-deposit",
      title: "Kepoo PPOB Retail Platform & Deposit Web",
      subtitle: "High-Volume PPOB Transaction & Top-up Engine",
      category: "fullstack",
      categoryLabel: "PPOB & FinTech",
      featured: false,
      image: "assets/images/project-laravel.jpg",
      period: "August 2018 - September 2019",
      company: "PT Kepoo Solusi Indonesia",
      summary: "Engineered PPOB retail payment APIs, top-up deposit web, and operational dashboards serving 30,000+ users with MySQL replication.",
      tags: ["PHP 7", "Laravel", "Lumen", "MySQL Replicated", "CentOS 7", "Bimasakti", "Finnet", "OVO"],
      githubUrl: "",
      liveUrl: "https://play.google.com/store/apps/details?id=retail.kepoo.com.kepooretail",
      metrics: "30,000+ Users | 10,000+ App Accounts",
      description: "Developed the core backend RESTful APIs integrating multi-vendor payment providers (Bimasakti, Finnet, OVO) for electricity, telco, BPJS, and financial transactions.",
      features: [
        "Deposit Web handling balance top-up for 30,000+ active users",
        "Retail Android API backend supporting 10,000+ mobile accounts",
        "Multi-vendor integration with Bimasakti, Finnet, and OVO",
        "High-availability MySQL replicated database on CentOS 7 Apache"
      ]
    },
    {
      id: "siakad-campus-system",
      title: "Sistem Kampus SIAKAD",
      subtitle: "Academic Information & Administration System",
      category: "fullstack",
      categoryLabel: "Enterprise Web",
      featured: false,
      image: "assets/images/project-laravel.jpg",
      period: "2020 - 2025",
      company: "Independent Project",
      summary: "Academic Information System managing grades, KRS study cards, schedules, tuition billing, and communications for 2,000+ university users.",
      tags: ["Laravel", "Lumen", "JavaScript", "MySQL Workbench", "ERP"],
      githubUrl: "",
      liveUrl: "#",
      metrics: "2,000+ Active Students & Lecturers",
      description: "Digital academic portal streamlining administrative workflows, grade submissions, KRS curriculum enrollment, and financial reports with high precision.",
      features: [
        "KRS study planning and automated quota validation",
        "Grade ledger and student academic transcript generation",
        "Tuition payment recording and financial reconciliation",
        "Role-based access control for students, lecturers, and academic deans"
      ]
    }
  ],

  experience: [
    {
      role: "IT Staff (Senior Frontend & Mobile Developer)",
      company: "PT Infosys Solusi Terpadu",
      period: "June 2022 - Present (3+ Years)",
      location: "Jakarta, Indonesia",
      type: "Full-Time",
      description: "Leading mobile banking development with Flutter and managing web portals with Next.js/Vue.js for major regional development banks across Indonesia.",
      highlights: [
        "Architected Bank Jatim Mobile Banking (Jconnect) from scratch with Flutter, Hive NoSQL, and microservices.",
        "Engineered NFC Tap-to-Pay (BCA Flazz) balance check and top-up directly through mobile devices.",
        "Implemented BI Fast real-time interbank transfer, eKYC digital onboarding, and cardless Setor Tunai for Bank Aceh.",
        "Integrated QRIS CPM (Customer-Presented) and QRIS Tap payment flows for Bank Jateng and Bank Jatim.",
        "Built administrative and branch configuration web portals using Next.js and Vue.js."
      ],
      skills: ["Flutter", "Dart", "Next.js", "Vue.js", "Hive NoSQL", "Microservices", "NFC Flazz BCA", "QRIS CPM", "BI-Fast"]
    },
    {
      role: "IT Staff (Senior Backend and Frontend Developer)",
      company: "PT Huawei Tech Investment",
      period: "September 2019 - April 2022 (2 Years 8 Months)",
      location: "Jakarta, Indonesia",
      type: "Full-Time",
      description: "Developed enterprise telecom management portals, mobile apps, and microservices for PT Huawei Tech Investment and telecom operators (XL Axiata).",
      highlights: [
        "Earned Huawei General Digital Engine Developer Professional and Associate Certifications.",
        "Developed RO Care mobile app (Flutter) and REST API backend (Lumen) for XL Dealer complaint operations.",
        "Engineered internal telecom dashboards: Analyst Reporting, FME, Autohealing, and E2E Monitoring.",
        "Integrated Google Maps tracking with Huawei OWS platform for field workforce dispatch.",
        "Designed FRS ticket alarm correlation services handling high-frequency network events."
      ],
      skills: ["Flutter", "Lumen", "PHP 7", "JavaScript", "Huawei OWS", "REST API", "Bootstrap", "Google Maps API"]
    },
    {
      role: "IT Staff (Backend and Frontend Web Developer)",
      company: "PT Kepoo Solusi Indonesia",
      period: "August 2018 - September 2019 (1 Year 2 Months)",
      location: "Jakarta, Indonesia",
      type: "Full-Time",
      description: "Engineered scalable PPOB payment infrastructure, operational dashboards, and transaction APIs serving tens of thousands of users.",
      highlights: [
        "Developed Deposit Web handling balance top-ups for over 30,000 active PPOB users.",
        "Built backend APIs for Kepoo Retail mobile app supporting 10,000+ user accounts.",
        "Integrated multi-vendor payment aggregators including Bimasakti, Finnet, and OVO.",
        "Configured and maintained high-availability replicated MySQL databases on CentOS 7 Apache servers."
      ],
      skills: ["PHP 7", "Laravel", "Lumen", "MySQL Replicated", "CentOS 7", "Apache", "RESTful API", "Bootstrap 3"]
    },
    {
      role: "IT Staff (Web Developer)",
      company: "PT Amanah Karya Indonesia",
      period: "November 2016 - April 2018 (1 Year 6 Months)",
      location: "Jakarta, Indonesia",
      type: "Full-Time",
      description: "Developed online booking engines, enterprise bank monitoring tools, and web applications using Laravel, MySQL, and SQL Server.",
      highlights: [
        "Built online airline ticketing and hotel booking engine (Hobbytravel, Web Bisatopup).",
        "Developed Early Warning System (EWS) for Bank Syariah Mandiri (BSM).",
        "Created admin portal for Nguberjek (on-demand motorcycle ride hailing).",
        "Implemented sales statistics and store analytics modules for Bisa Jualan."
      ],
      skills: ["PHP 7", "Laravel", "Lumen", "MySQL", "SQLServer", "CentOS 7", "REST API"]
    }
  ],

  education: [
    {
      degree: "Bachelor's Degree in Information Technology (Teknologi Informasi)",
      institution: "Universitas Al-Azhar Indonesia",
      year: "2010 - 2015",
      notes: "Comprehensive study in Software Engineering, Database Systems, Computer Networks, and Mobile Computing."
    },
    {
      degree: "Senior High School (SMA)",
      institution: "SMA Pambudi Luhur",
      year: "2007 - 2010",
      notes: "Natural Sciences (IPA)"
    },
    {
      degree: "Junior High School (SMP)",
      institution: "SMP M 6 Lhokseumawe",
      year: "2004 - 2007",
      notes: "Lhokseumawe, Aceh"
    }
  ]
};
