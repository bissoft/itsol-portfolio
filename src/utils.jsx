import {
  Code,
  MonitorSmartphone,
  Database,
  Cloud,
  Users,
  LayoutDashboard,
  FileText,
  Rocket,
  BriefcaseBusiness,
  MessageCircle,
  ShieldCheck,
  BookOpenText,
  Phone,
  Lightbulb,
  UserPlus,
  Globe,
  Server,
  Cpu,
  BarChart2,
  Settings,
  ClipboardCheck,
} from "lucide-react";

export const Menus = [
  {
    name: "Services",
    subMenu: [
      {
        name: "Software Development",
        desc: "Complete software creation lifecycle support",
        icon: Code,
        featured: true,
        links: [
          { title: "Requirement Analysis", path: "/product-engineering" },
          { title: "Frontend/Backend Development", path: "/web-app-development" },
          { title: "Mobile Applications", path: "/mobile-app-development" },
          {
            title: "QA & Testing",
            path: "/software-quality-accurance",
          },
          {
            title: "Tailor-Made Software",
            path: "/custom-software-development",
          },
        ],
      },
      {
        name: "IT Strategy Consulting",
        desc: "Strategic digital services to drive growth",
        icon: MonitorSmartphone,
        featured: true,
        links: [
          { title: "Agile at Scale", path: "/platform-consulting" },
          { title: "Digital Roadmapping", path: "/platform-consulting" },
          {
            title: "Commerce Platforms",
            path: "/ecommerce-digital-commerce-solution",
          },
          {
            title: "Legacy System Upgrades",
            path: "/application-modernization",
          },
          {
            title: "Experience Optimization",
            path: "/cx-optimization-services",
          },
        ],
      },
      {
        name: "AI & Data Solutions",
        desc: "Smarter insights through AI-driven analytics",
        icon: BarChart2,
        featured: true,
        links: [
          { title: "Virtual Agents", path: "/data-&-ai" },
          { title: "AI Implementation", path: "/data-&-ai" },
          { title: "Custom ML Applications", path: "/data-&-ai" },
          { title: "Strategic AI Planning", path: "/data-&-ai" },
          { title: "ML Model Deployment", path: "/data-&-ai" },
          { title: "Natural Language Systems", path: "/data-&-ai" },
        ],
      },
      {
        name: "DevOps & Cloud",
        desc: "Automated deployment and infrastructure solutions",
        icon: Cloud,
        featured: true,
        links: [
          { title: "CI/CD Pipeline Services", path: "/devops-&-cloud" },
          {
            title: "Kubernetes & Docker",
            path: "/containerization-and-orchestration-services",
          },
          { title: "System Monitoring", path: "/monitoring-and-logging" },
          { title: "IaC (Infrastructure as Code)", path: "/devops-&-cloud" },
          { title: "Cloud Advisory", path: "/devops-&-cloud" },
          { title: "Security Compliance", path: "/cyber-security-services" },
        ],
      },
      {
        name: "Next-Gen Innovation",
        desc: "Solutions using the latest technological trends",
        icon: Rocket,
        featured: true,
        links: [
          { title: "Virtual Worlds (Metaverse)", path: "/emerging-technologies" },
          { title: "Augmented/Virtual Reality", path: "/emerging-technologies" },
          { title: "Vision Pro Integration", path: "/emerging-technologies" },
          {
            title: "Cyber Protection",
            path: "/cyber-security-services",
          },
        ],
      },
      {
        name: "Blockchain & Web3",
        desc: "Trustless systems and decentralized apps",
        icon: Cpu,
        featured: true,
        links: [
          { title: "Smart Contracts", path: "/blockchain-&-web3.0" },
          { title: "Enterprise Blockchain", path: "/blockchain-&-web3.0" },
          { title: "Token Solutions", path: "/blockchain-&-web3.0" },
          { title: "Blockchain Advice", path: "/blockchain-&-web3.0" },
          { title: "DApp Creation", path: "/blockchain-&-web3.0" },
        ],
      },
    ],
  },

  {
    name: "Industries We Serve",
    subMenu: [
      {
        name: "Sectors",
        desc: "Serving key industries across markets",
        icon: Rocket,
        featured: true,
        links: [
          { title: "Finance Technology", path: "/Fintech" },
          { title: "Property Management", path: "/real-estate" },
          { title: "Healthcare Services", path: "/healthcare" },
          { title: "Food & Retail", path: "/food-groceries" },
          { title: "On-Demand Platforms", path: "/mobile-app-development" },
          { title: "EdTech Solutions", path: "/education-technology" },
        ],
      },
      {
        name: "Startups",
        desc: "Helping new ventures scale fast",
        icon: Rocket,
        path: "/startups",
        featured: true,
      },
      {
        name: "Enterprises",
        desc: "Robust digital platforms for big businesses",
        icon: BriefcaseBusiness,
        path: "/enterprises",
        featured: true,
      },
      {
        name: "Project Rescue",
        desc: "Turnaround support for struggling projects",
        icon: ShieldCheck,
        path: "/rescue-projects",
        featured: true,
      },
    ],
  },
  {
    name: "Engagement Models",
    subMenu: [
      {
        name: "Collaborative Development",
        desc: "Agile development with your team",
        icon: LayoutDashboard,
        featured: true,
        links: [
          { title: "Staff Augmentation", path: "/team-augmentation" },
          { title: "Full Teams on Demand", path: "/dedicated-team" },
        ],
      },
      {
        name: "Scope-Driven Projects",
        desc: "Fixed-price and project-based engagement",
        icon: Server,
        path: "/managed-it-systems",
        featured: true,
        links: [
          { title: "Defined Product Goals", path: "/product-development" },
          { title: "Set Deliverables", path: "/fixed-price" },
        ],
      },
      {
        name: "Support & Monitoring",
        desc: "Round-the-clock technical assistance",
        icon: Server,
        path: "/managed-it-systems",
        featured: true,
        links: [
          { title: "Real-Time Monitoring", path: "/monitoring-and-logging" },
          { title: "24x7 Tech Support", path: "/technical-support-services" },
        ],
      },
    ],
  },


  {
    name: "Hire Dev",
    subMenu: [
      {
        name: "Backend Specialists",
        desc: "Expert server-side developers",
        icon: UserPlus,
        links: [
          { title: "Elixir Experts", path: "/hire-elixir-developers" },
          { title: "Ruby on Rails Developers", path: "/hire-ror-developers" },
          { title: "Python Programmers", path: "/hire-python-developers" },
          { title: "Django Developers", path: "/hire-django-developers" },
          { title: "Node.js Engineers", path: "/hire-nodejs-developers" },
          { title: "Golang Developers", path: "/hire-golang-developers" },
        ],
      },
      {
        name: "Frontend Specialists",
        desc: "Client-side development experts",
        icon: UserPlus,
        links: [
          { title: "JavaScript Developers", path: "/hire-javascript-developers" },
          { title: "React Specialists", path: "/hire-reactjs-developers" },
          { title: "Angular Developers", path: "/hire-angular-developers" },
          { title: "TypeScript Engineers", path: "/hire-typescript-developers" },
        ],
      },
      {
        name: "Mobile Experts",
        desc: "Cross-platform app developers",
        icon: UserPlus,
        links: [
          { title: "Flutter Developers", path: "/hire-flutter-developers" },
          { title: "Android Specialists", path: "/hire-android-developers" },
          { title: "iOS Developers", path: "/hire-iOS-developers" },
        ],
      },
      {
        name: "Role-Based Hiring",
        desc: "Specialized technical roles",
        icon: UserPlus,
        links: [
          { title: "Product Leadership", path: "/hire-product-manager" },
          { title: "Technical Leadership", path: "/hire-cto" },
          { title: "SaaS Specialists", path: "/hire-saas-developers" },
          { title: "Full Stack MERN Developers", path: "/hire-mern-stack-developers" },
        ],
      },
      {
        name: "Committed Developers",
        desc: "Dedicated technical resources",
        icon: UserPlus,
        path: "/dedicated-developers",
      },
      {
        name: "Distributed Teams",
        desc: "Geographically dispersed talent",
        icon: Globe,
        path: "/remote-teams",
      }
    ],
  },
  {
    name: "Organization",
    subMenu: [
      {
        name: "Corporate Profile",
        desc: "Our mission, vision, and values",
        icon: LayoutDashboard,
        path: "/about-us",
      },
      {
        name: "Project Showcase",
        desc: "Our successful implementations",
        icon: ClipboardCheck,
        path: "/portfolio",
      },
      {
        name: "Employment Opportunities",
        desc: "Join our growing team",
        icon: BriefcaseBusiness,
        path: "/careers",
      },
      {
        name: "Technical Team",
        desc: "Meet our development experts",
        icon: Users,
        path: "/team",
      },
    ],
  }
  // {
  //   name: "Connect",
  //   subMenu: [
  //     {
  //       name: "General Inquiries",
  //       desc: "Contact our support team",
  //       icon: Phone,
  //       path: "/get-in-touch",
  //     },
  //     {
  //       name: "Business Proposals",
  //       desc: "Discuss potential collaborations",
  //       icon: BriefcaseBusiness,
  //       path: "/sales",
  //     },
  //     {
  //       name: "Technical Assistance",
  //       desc: "Get product support",
  //       icon: Server,
  //       path: "/support",
  //     },
  //     {
  //       name: "Global Presence",
  //       desc: "Our worldwide locations",
  //       icon: Globe,
  //       path: "/locations",
  //     },
  //     {
  //       name: "Solution Demonstrations",
  //       desc: "Schedule a product walkthrough",
  //       icon: Rocket,
  //       path: "/schedule-demo",
  //     },
  //     {
  //       name: "Client Feedback",
  //       desc: "Share your experience with us",
  //       icon: MessageCircle,
  //       path: "/feedback",
  //     },
  //   ],
  // },
];


