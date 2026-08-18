/**
 * Portfolio Data for Fharza Yusuf
 * Senior Mobile & Full-Stack Engineer
 */

const PORTFOLIO_DATA = {
  profile: {
    name: "Fharza Yusuf",
    alias: "Muhammad Yusuf Al-Ashyi",
    role: "Senior Mobile & Full-Stack Engineer",
    tagline: "Specializing in High-Performance Flutter Apps & Scalable Laravel Systems",
    location: "Indonesia",
    availability: "Available for new projects & full-time roles",
    linkedin: "https://www.linkedin.com/in/fharza-yusuf-8330aa151/",
    github: "https://github.com/yusuffharza",
    email: "yusuffharza@gmail.com",
    phone: "+62 812-3456-7890",
    bio: "Passionate software engineer with 5+ years of dedicated expertise in architecting cross-platform mobile solutions using Flutter/Dart and enterprise-grade backend applications using Laravel/PHP. Known for building high-quality developer packages like dynamic form builders, publishing in-depth technical guides, and mentoring developers.",
    stats: [
      { label: "Years Experience", value: "5+", icon: "code" },
      { label: "Production Apps", value: "24+", icon: "layers" },
      { label: "Active App Users", value: "150K+", icon: "users" },
      { label: "Crash-Free Rate", value: "99.9%", icon: "shield-check" }
    ]
  },

  skills: [
    {
      category: "Mobile Development",
      description: "Building fluid, pixel-perfect, native-speed apps for iOS & Android.",
      items: [
        { name: "Flutter", level: "Expert", years: "5 yrs", icon: "flutter" },
        { name: "Dart", level: "Expert", years: "5 yrs", icon: "dart" },
        { name: "Bloc & Cubit", level: "Advanced", years: "4 yrs", icon: "cpu" },
        { name: "Riverpod / Provider", level: "Advanced", years: "4 yrs", icon: "zap" },
        { name: "Offline-First / SQLite / Hive", level: "Advanced", years: "4 yrs", icon: "database" },
        { name: "Platform Channels / Native Interop", level: "Proficient", years: "3 yrs", icon: "smartphone" }
      ]
    },
    {
      category: "Backend & Web Architecture",
      description: "Robust REST & GraphQL APIs, microservices, and database optimization.",
      items: [
        { name: "Laravel", level: "Expert", years: "5 yrs", icon: "server" },
        { name: "PHP 8.x", level: "Expert", years: "5 yrs", icon: "code" },
        { name: "RESTful API Design", level: "Expert", years: "5 yrs", icon: "network" },
        { name: "MySQL / PostgreSQL", level: "Advanced", years: "5 yrs", icon: "database" },
        { name: "Redis / Caching Queues", level: "Advanced", years: "4 yrs", icon: "flame" },
        { name: "Node.js & JavaScript/TS", level: "Proficient", years: "3 yrs", icon: "code" }
      ]
    },
    {
      category: "DevOps & Tooling",
      description: "Automated pipelines, containerization, and cloud deployment.",
      items: [
        { name: "Docker & Docker Compose", level: "Advanced", years: "3 yrs", icon: "box" },
        { name: "CI/CD (GitHub Actions / Fastlane)", level: "Advanced", years: "4 yrs", icon: "git-merge" },
        { name: "Google Cloud (GCP) / AWS", level: "Proficient", years: "3 yrs", icon: "cloud" },
        { name: "Git & Trunk-Based Dev", level: "Expert", years: "5 yrs", icon: "git-branch" },
        { name: "Firebase (Auth, FCM, Firestore)", level: "Advanced", years: "5 yrs", icon: "flame" }
      ]
    },
    {
      category: "Engineering Practices",
      description: "Quality assurance, clean architecture, and team leadership.",
      items: [
        { name: "Clean Architecture & SOLID", level: "Expert", years: "5 yrs", icon: "check-circle" },
        { name: "Unit & Integration Testing", level: "Advanced", years: "4 yrs", icon: "check-square" },
        { name: "Performance Optimization", level: "Advanced", years: "5 yrs", icon: "activity" },
        { name: "Technical Writing & Mentorship", level: "Advanced", years: "4 yrs", icon: "book-open" }
      ]
    }
  ],

  projects: [
    {
      id: "dinamis-form-package",
      title: "Flutter Dynamic Form Engine",
      subtitle: "Open Source Dynamic Schema-Driven Form Generator",
      category: "opensource",
      categoryLabel: "Open Source Package",
      featured: true,
      image: "assets/images/project-flutter.jpg",
      summary: "A modular, plug-and-play Flutter package (dinamis_text_form_field) that streamlines complex nested forms, instant validation rules, and dynamic JSON schema renders.",
      tags: ["Flutter", "Dart", "Package Dev", "Open Source", "State Management"],
      githubUrl: "https://github.com/yusuffharza",
      liveUrl: "https://pub.dev",
      metrics: "5,000+ Downloads | 99% Pub Score",
      description: "Built to solve repetitive boilerplate in enterprise mobile workflows where forms change dynamically according to remote backend configs. Enables engineers to render dynamic multi-type fields (Text, Select, DateTime, Validated Regex) with zero overhead.",
      features: [
        "Dynamic JSON-to-Form UI generation in real time",
        "Built-in debounce validation and async backend checks",
        "Customizable theming, error hints, and responsive layouts",
        "Seamless integration with Bloc, Riverpod, and FormKey controllers"
      ]
    },
    {
      id: "enterprise-saas-core",
      title: "Enterprise SaaS & Telemetry Dashboard",
      subtitle: "Full-Stack Laravel & Real-Time Monitoring Portal",
      category: "fullstack",
      categoryLabel: "Full-Stack System",
      featured: true,
      image: "assets/images/project-laravel.jpg",
      summary: "High-throughput enterprise management suite handling multi-tenant billing, inventory tracking, role-based ACL, and live analytics streams.",
      tags: ["Laravel 11", "PHP 8.3", "PostgreSQL", "Redis", "TailwindCSS", "REST API"],
      githubUrl: "https://github.com/yusuffharza",
      liveUrl: "#",
      metrics: "50k+ Daily API Requests | <85ms Response Time",
      description: "A centralized operational hub built for multi-branch organizations. Features asynchronous queuing for report generation, real-time alert notifications via WebSockets, and seamless integration with Flutter mobile client apps.",
      features: [
        "Multi-tenant data isolation with granular role permission hierarchies",
        "Background worker queue processing with Redis for heavy CSV/PDF exports",
        "Automated audit logging and compliance monitoring",
        "SweetAlert & flash message integration system for interactive UX"
      ]
    },
    {
      id: "omnichannel-pos-flutter",
      title: "OmniChannel Retail POS & Mobile Store",
      subtitle: "Cross-Platform Flutter Point-of-Sale Solution",
      category: "mobile",
      categoryLabel: "Mobile Application",
      featured: true,
      image: "assets/images/project-flutter.jpg",
      summary: "High-performance POS and customer ordering app featuring offline SQLite synchronization, Bluetooth thermal printing, and barcode scanner integration.",
      tags: ["Flutter", "Dart", "SQLite", "Bluetooth BLE", "Bloc", "Clean Architecture"],
      githubUrl: "https://github.com/yusuffharza",
      liveUrl: "#",
      metrics: "100+ Active Store Deployments | 0 Downtime Offline Mode",
      description: "Engineered for retail and F&B businesses operating in low-connectivity environments. Transactions are cached locally and synchronized with Laravel backend APIs when internet connectivity is re-established.",
      features: [
        "Offline-first transaction caching and automatic conflict resolution",
        "Fast ESC/POS Bluetooth receipt and label printer integration",
        "Biometric cashier login and cash drawer kick trigger",
        "Real-time inventory decrement with optimistic UI updates"
      ]
    },
    {
      id: "daengweb-articles",
      title: "Technical Guides & Open Tutorials",
      subtitle: "DaengWeb Community Technical Contributions",
      category: "opensource",
      categoryLabel: "Community & Education",
      featured: false,
      image: "assets/images/project-laravel.jpg",
      summary: "Comprehensive technical guides for developers covering modern Laravel techniques, flash messaging, SweetAlert integrations, and Flutter speed coding.",
      tags: ["Laravel", "PHP", "Flutter", "DaengWeb", "Tutorials"],
      githubUrl: "https://github.com/yusuffharza",
      liveUrl: "https://daengweb.id",
      metrics: "40k+ Reader Views | Community Cited",
      description: "Authored practical tutorials helping Indonesian and international software developers solve real-world problems in web and mobile app architecture.",
      features: [
        "Step-by-step implementation of seamless session flash messages in Laravel",
        "Clean architecture practices in Flutter applications",
        "Best practices for mobile REST client error handling and retry policies"
      ]
    }
  ],

  experience: [
    {
      role: "Lead Mobile & Full-Stack Engineer",
      company: "Tech Solutions & Digital Enterprise",
      period: "2022 - Present",
      location: "Indonesia",
      type: "Full-Time",
      description: "Spearheading mobile application architecture with Flutter and engineering robust API systems with Laravel for enterprise clients across fintech, logistics, and retail.",
      highlights: [
        "Architected and deployed 10+ mission-critical Flutter apps with 99.9% crash-free sessions across Android & iOS.",
        "Refactored legacy backend monoliths into scalable Laravel micro-services with Redis caching and queue workers.",
        "Created shared internal Dart and Flutter component libraries, cutting feature delivery cycles by 35%."
      ],
      skills: ["Flutter", "Dart", "Laravel", "PostgreSQL", "Docker", "CI/CD", "Bloc"]
    },
    {
      role: "Senior Mobile Application Developer",
      company: "Digital Studio & Innovation Lab",
      period: "2020 - 2022",
      location: "Indonesia",
      type: "Full-Time",
      description: "Designed and implemented mobile applications from zero to Play Store / App Store release. Collaborated closely with UI/UX designers and product managers.",
      highlights: [
        "Built offline-first synchronization engine using SQLite and background work managers.",
        "Implemented real-time geolocation tracking and push notification flows with Firebase Cloud Messaging.",
        "Mentored junior and mid-level developers in state management best practices and clean code."
      ],
      skills: ["Flutter", "Dart", "Firebase", "REST APIs", "Riverpod", "Git"]
    },
    {
      role: "Full-Stack Web Developer",
      company: "Software House & IT Consulting",
      period: "2019 - 2020",
      location: "Indonesia",
      type: "Full-Time",
      description: "Developed custom web portals, CMS platforms, and ERP modules using Laravel, MySQL, and modern JavaScript.",
      highlights: [
        "Engineered 15+ custom client web systems with automated PDF invoices and reporting.",
        "Integrated payment gateways (Midtrans, Xendit) and third-party logistics APIs.",
        "Authored technical blogs on DaengWeb and developer forums on Laravel ecosystem integrations."
      ],
      skills: ["Laravel", "PHP", "MySQL", "JavaScript", "REST APIs", "Bootstrap/Tailwind"]
    }
  ],

  education: [
    {
      degree: "Bachelor of Computer Science / Information Technology",
      institution: "Universitas / Institute of Technology",
      year: "2015 - 2019",
      notes: "Focused on Software Engineering, Mobile Computing, and Distributed Systems."
    }
  ]
};
