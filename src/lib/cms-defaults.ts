import type { IHeroContent } from "@/lib/models/Hero";
import type { ICompanyStatsContent } from "@/lib/models/CompanyStats";
import type { IServicesContent } from "@/lib/models/Services";
import type { IProjectsContent } from "@/lib/models/Projects";
import type { IConversationsContent } from "@/lib/models/Conversations";
import type { IPartnersContent } from "@/lib/models/Partners";
import type { IWhyChooseUsContent } from "@/lib/models/WhyChooseUs";
import type { IIndustriesContent } from "@/lib/models/Industries";
import type { ITeamContent } from "@/lib/models/Team";
import type { IBlogsContent } from "@/lib/models/Blogs";
import type { IFaqsContent } from "@/lib/models/Faqs";
import type { IAboutContent } from "@/lib/models/About";
import type { IAwardsContent } from "@/lib/models/Awards";
import type { ILeadMagnetContent } from "@/lib/models/LeadMagnet";
import type { ICareersContent } from "@/lib/models/Careers";

// --- HERO SECTION ---
export interface HeroData extends Omit<
  IHeroContent,
  "_id" | "createdAt" | "updatedAt" | "__v"
> {
  _id?: string;
}

export const defaultHeroData: HeroData = {
  badgeText: "Empowering Digital Evolution",
  headlineLine1: "End-to-End Digital Solutions",
  headlineLine2: "in One Place",
  subtext:
    "We architect robust digital solutions that scale. From AI-driven platforms to enterprise ecosystems, we turn complex challenges into elegant software.",
  button1Text: "Get Started",
  button1Link: "#",
  button2Text: "Let's Talk",
  button2Link: "https://calendly.com/etechnocrat/saas-app",
  leadMagnetTitle: "Strategic Playbook",
  leadMagnetSubtitle: "Modernization",
  leadMagnetTag: "2026 Edition",
  backgroundImage:
    "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1000&auto=format&fit=crop",
};

// --- COMPANY STATS SECTION ---
export interface CompanyStatsData extends Omit<
  ICompanyStatsContent,
  "_id" | "createdAt" | "updatedAt" | "__v"
> {
  _id?: string;
}

export const defaultStatsData: CompanyStatsData = {
  heading: "Partnering for Digital Excellence & Growth.",
  subheading:
    "Delivering enterprise-grade software solutions that drive efficiency, scalability, and long-term success.",
  stats: [
    { value: "17+", label: "YEARS ON MARKET" },
    { value: "800+", label: "PROFESSIONALS ON BOARD" },
    { value: "73%", label: "OF CLIENTS RETURN FOR LONG-TERM PARTNERSHIPS" },
    { value: "4", label: "GLOBAL OFFICES" },
  ],
  clients: [
    {
      name: "ConDoor Solutions",
      logo: "https://ilt-sa.com/assets/img/partners/gp07.jpg",
    },
    {
      name: "Superema",
      logo: "https://ilt-sa.com/assets/img/partners/gp02.jpg",
    },
    { name: "FAAC", logo: "https://ilt-sa.com/assets/img/partners/gp03.jpg" },
    { name: "CAME", logo: "https://ilt-sa.com/assets/img/partners/gp04.jpg" },
    {
      name: "Dormakaba",
      logo: "https://ilt-sa.com/assets/img/partners/gp05.jpg",
    },
    {
      name: "High Speed Door",
      logo: "https://ilt-sa.com/assets/img/partners/gp06.jpg",
    },
  ],
};

// --- SERVICES SECTION ---
export interface ServicesData extends Omit<
  IServicesContent,
  "_id" | "createdAt" | "updatedAt" | "__v"
> {
  _id?: string;
}

export const defaultServicesData: ServicesData = {
  heading: "Our Expertise",
  subheading:
    "Comprehensive software engineering services for digital transformation. We build the systems that power modern enterprises.",
  services: [
    {
      id: "software",
      name: "Software Development",
      iconName: "Code",
      description:
        "We believe traditional software development has often failed to meet evolving business demands. As a modern software development company, we adopt an industry-agnostic approach and leverage AI capabilities to build custom enterprise software solutions that cater to businesses of all sizes' unique needs.",
      features: [
        "Custom Software Development",
        "Product Development",
        "Software Consulting",
        "Enterprise Development",
        "Offshore Software Development",
      ],
      tech: [
        { iconName: "Cpu", name: "TensorFlow" },
        { iconName: "Database", name: "PyTorch" },
        { iconName: "Server", name: "OpenCV" },
      ],
      path: "/services/custom-software-development",
    },
    {
      id: "application",
      name: "Application Development",
      iconName: "MonitorSmartphone",
      description:
        "ITL delivers a comprehensive range of application services, encompassing development, migration, modernization, testing, and more. We empower enterprises to align applications with evolving business needs. Our expertise extends to crafting various complex web, mobile, and cloud applications, streamlining internal operations, facilitating business transactions, and digitizing customer-oriented services across diverse industries.",
      features: [
        "Custom Application Development",
        "Application Migration",
        "Application Integration",
        "Application Modernization",
        "Application Management",
      ],
      tech: [
        { iconName: "Cpu", name: "TensorFlow" },
        { iconName: "Database", name: "PyTorch" },
        { iconName: "Server", name: "OpenCV" },
      ],
      path: "/services/web-app-development",
    },
    {
      id: "ai",
      name: "AI Development",
      iconName: "BrainCircuit",
      description:
        "Catalyze transformative growth with ITL's AI & ML implementation and development services engineered to enhance operational flexibility, revolutionize customer engagement, and generate new revenue streams.",
      features: [
        "AI Strategy and Consulting",
        "AI Model Development and Customization",
        "Advanced Machine Learning Solutions",
        "Generative AI and NLP Solutions",
        "Data Analytics and Visualization",
      ],
      tech: [
        { iconName: "Cpu", name: "TensorFlow" },
        { iconName: "Database", name: "PyTorch" },
        { iconName: "Server", name: "OpenCV" },
      ],
      path: "/services/data-and-ai",
    },
    {
      id: "cloud",
      name: "Cloud Computing",
      iconName: "Cloud",
      description:
        "Embark on a cloud-first journey tailored to your business needs. We help enterprises scale and adapt to evolving needs within a secure hybrid or pure cloud environment by leveraging our end-to-end and outcome-based cloud development services. We engineer custom solutions tailored to business needs, featuring integrated security and connectivity for seamless deployment and customization. We navigate integration challenges, ensuring barrier-free data exchange and flawless ecosystem performance.",
      features: [
        "Cloud Strategy & Consulting",
        "Cloud App Modernization",
        "Comprehensive DevOps",
        "Cloud Managed Services (Azure)",
        "Cyber Security",
        "Cloud Infrastructure",
        "Cloud Migration",
        "IAAS, SAAS & PAAS Services",
      ],
      tech: [
        { iconName: "Cloud", name: "AWS" },
        { iconName: "Cloud", name: "Azure" },
        { iconName: "Cloud", name: "GCP" },
      ],
      path: "/services/devops-and-cloud",
    },
    {
      id: "testing",
      name: "Software Testing and QA",
      iconName: "ClipboardCheck",
      description:
        "We provide comprehensive quality assurance services, thoroughly examining software from end to end or focusing on critical aspects. Our testing specialists, well-versed in the latest best practices, ensure successful software development. Outsourcing QA and testing to our top engineers yields reduced overhead, faster release cycles, and access to specialized experts and tools. ITL's flexible engagement models guarantee a seamless partnership, whether you require a few QA engineers or an entire automation team.",
      features: [
        "Testing and QA outsourcing",
        "Functional Testing",
        "Usability Testing",
        "Performance Testing",
      ],
      tech: [
        { iconName: "Cloud", name: "AWS" },
        { iconName: "Cloud", name: "Azure" },
        { iconName: "Cloud", name: "GCP" },
      ],
      path: "/services/software-quality-assurance",
    },
    {
      id: "ITservices",
      name: "Managed IT Services",
      iconName: "Settings",
      description:
        "ITL, a leading managed IT services provider, elevates businesses by expertly managing IT environments. We assume the entire scope of managed IT services, alleviating our clients' management workload. Our specialists seamlessly integrate into in-house IT teams, optimizing processes and implementing relevant methodologies. We ensure high-performance, secure, and user-friendly software, enhancing its functional capabilities. By guaranteeing the stability and protection of IT infrastructures, we empower businesses with resilient and secure processes.",
      features: ["IT Consulting", "IT Outsourcing", "IT Infrastructure"],
      tech: [
        { iconName: "CpuIcon", name: "Ethereum" },
        { iconName: "Database", name: "Hyperledger" },
        { iconName: "Lock", name: "Solidity" },
      ],
      path: "/engagement/managed-it-systems",
    },
    {
      id: "platform",
      name: "Platform Consulting",
      iconName: "LayoutDashboard",
      description:
        "ITL is your ally across cutting-edge platforms. From unlocking Microsoft's cloud potential with Azure Consulting to optimizing performance via AWS Consulting. We elevate customer relationships with Salesforce and transform digital experiences through Adobe Consulting. Our Microsoft Consulting seamlessly integrates technologies for your business to thrive digitally. Partner with us to harness these platforms, propelling your business towards unparalleled success.",
      features: ["Azure Consulting", "AWS Consulting", "Salesforce Consulting"],
      tech: [
        { iconName: "Code", name: "React" },
        { iconName: "Server", name: "Node.js" },
        { iconName: "Database", name: "GraphQL" },
      ],
      path: "/services/platform-consulting",
    },
    {
      id: "emerging",
      name: "Emerging Innovations",
      iconName: "Network",
      description:
        "ITL propels businesses into the future by seamlessly integrating emerging technologies like Blockchain, Data Science, and IoT. Our Managed IT services allow organizations to delegate IT needs, freeing resources for core operations. Elevating software development, we harness emerging tools and technologies to enhance design, code generation, and testing. Join us for cutting-edge solutions that transform industries, ensuring your sustained competitive edge.",
      features: ["Data Science", "Big Data", "Blockchain"],
      tech: [
        { iconName: "Cloud", name: "Kubernetes" },
        { iconName: "Github", name: "Docker" },
        { iconName: "Server", name: "Terraform" },
      ],
      path: "/services/emerging-technologies",
    },
    {
      id: "augmentation",
      name: "Staff Augmentation",
      iconName: "Users",
      description:
        "Scale your technical teams rapidly with ITL's expert staff augmentation services. We provide top-tier developers, engineers, and architects who integrate seamlessly with your in-house teams to accelerate project delivery and close skill gaps.",
      features: [
        "Dedicated Developers",
        "Team Extension",
        "Skill-Specific Hiring",
        "Rapid Onboarding",
        "Managed Integration",
      ],
      tech: [
        { iconName: "Users", name: "Full Teams" },
        { iconName: "Code", name: "Developers" },
        { iconName: "ArrowRight", name: "Scaling" },
      ],
      path: "/services/staff-augmentation-services",
    },
    {
      id: "blockchain",
      name: "Blockchain & Web3",
      iconName: "Lock",
      description:
        "Build secure, decentralized systems and transparent digital ecosystems with our expert Blockchain and Web3 development services.",
      features: [
        "Smart Contract Development",
        "DApp Development",
        "Tokenomics Consulting",
        "Enterprise Blockchain Solutions",
        "Web3 Integration",
      ],
      tech: [
        { iconName: "Cpu", name: "Solidity" },
        { iconName: "Database", name: "Ethereum" },
        { iconName: "Server", name: "Hyperledger" },
      ],
      path: "/services/blockchain-and-web3",
    },
  ],
};

// --- PROJECTS SECTION ---
export interface ProjectsData extends Omit<
  IProjectsContent,
  "_id" | "createdAt" | "updatedAt" | "__v"
> {
  _id?: string;
}

export const defaultProjectsData: ProjectsData = {
  heading: "Featured Growth Stories",
  subheading:
    "See how we help businesses scale, optimize, and transform. Real results, real growth.",
  ctaHeading: "Ready to Build Something Great?",
  ctaButtonText: "Start Your Project",
  projects: [
    {
      id: "1",
      title: "Amelia.ai",
      category: "ai",
      client: "ILT Solutions",
      year: "2023",
      description:
        "Amelia.ai is a multi-faceted AI ecosystem designed to revolutionize global customer support. By implementing advanced conversational neural networks and Large Language Models (LLMs), we created a system capable of resolving complex user queries in over 40 languages with human-like empathy and precision. This platform serves as a 24/7 digital workforce, handling everything from technical troubleshooting to complex account management without human intervention, effectively reshaping the future of enterprise communication.",
      technologies: [
        "Node.js",
        "React.js",
        "TensorFlow",
        "Python",
        "AWS SageMaker",
        "MongoDB",
        "GraphQL",
        "Docker",
      ],
      results: [
        { metric: "85%", label: "First-Contact Resolution" },
        { metric: "60%", label: "Operational Cost Savings" },
        { metric: "24/7", label: "Autonomous Support" },
        { metric: "4.8/5", label: "Average User CSAT" },
        { metric: "1.2M", label: "Queries Processed Monthly" },
        { metric: "99%", label: "Intent Recognition Accuracy" },
      ],
      challenge:
        "The client faced overwhelming support ticket volumes, with average response times exceeding 24 hours during peak periods. Manual classification of intents was prone to significant human error, leading to high churn rates and customer frustration. Furthermore, scaling their support team across multiple time zones and languages was becoming financially unsustainable and operationally complex. They needed a solution that could not only automate simple tasks but also understand complex, multi-turn conversations and provide accurate technical guidance.",
      solution:
        "We architected a scalable microservices-based AI engine that integrates directly with existing CRM systems and knowledge bases. The solution includes an autonomous self-learning feedback loop, real-time sentiment analysis to detect frustrated users, and a seamless 'human-in-the-loop' handoff mechanism for cases requiring specialized human intervention. By leveraging RAG (Retrieval-Augmented Generation) and fine-tuned neural models, Amelia provides accurate, context-aware answers based on the company's internal documentation while maintaining a consistent and professional brand voice across all digital channels.",
      process: [
        {
          phase: "Phase 1: Discovery & Data Audit",
          description:
            "Conducted a deep audit of 500,000+ legacy support logs to identify core intents, recurring pain points, and linguistic nuances across different regions.",
          duration: "2 Weeks",
        },
        {
          phase: "Phase 2: Strategic Architecture",
          description:
            "Designed a robust microservices architecture using AWS SageMaker for model hosting and a secure GraphQL layer for data orchestration.",
          duration: "3 Weeks",
        },
        {
          phase: "Phase 3: Model Training & RAG",
          description:
            "Fine-tuned LLM models on proprietary data and implemented a high-performance vector database for real-time document retrieval.",
          duration: "8 Weeks",
        },
        {
          phase: "Phase 4: UI/UX & API Integration",
          description:
            "Developed an intuitive chat interface and integrated it seamlessly with the client's existing web and mobile platforms via customized SDKs.",
          duration: "4 Weeks",
        },
        {
          phase: "Phase 5: Testing & QA Optimization",
          description:
            "Executed rigorous adversarial testing and automated regression suites to ensure system safety, reliability, and accuracy under heavy load.",
          duration: "4 Weeks",
        },
      ],
      testimonial: {
        quote:
          "Amelia didn't just automate our support; it transformed how we interact with our customers. The ROI was evident within the first quarter of deployment, and the system continues to learn and improve every single day.",
        author: "Marcus Thorne",
        role: "Chief Technology Officer, ILT",
      },
      imageUrl: "https://ilt-sa.com/assets/img/new/600x600_AgenticAI.jpg",
      images: [
        "https://ilt-sa.com/assets/img/new/600x600_AgenticAI.jpg",
        "https://images.unsplash.com/photo-1531746790731-6c087fecd05a?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1535378917042-10a22c95931a?q=80&w=1200&auto=format&fit=crop",
      ],
      tags: ["AI Ecosystem", "Enterprise Automation", "NLP", "LLM Integration"],
      bgColor: "from-blue-600 to-indigo-700",
      location: "Frankfurt, Germany",
      date: "October 13th, 2023",
      website: "https://amelia.ai",
      stats: "85% Precision",
    },
    {
      id: "2",
      title: "Thomas Platform",
      category: "web",
      client: "Thomas Global Inc.",
      year: "2023",
      description:
        "The Thomas Platform is an enterprise-grade financial hub designed for global supplier ecosystems. It orchestrates high-frequency financial data, handling billions in annual transaction volume with military-grade security. The platform provides a unified interface for complex reconciliation, predictive liquidity mapping, and automated compliance auditing across decentralized business units, empowering finance teams with actionable insights and unparalleled control over their capital flow.",
      technologies: [
        "React.js",
        "Go",
        "PostgreSQL",
        "Redis",
        "Docker",
        "Kubernetes",
        "Azure Finance",
        "TypeScript",
        "Terraform",
      ],
      results: [
        { metric: "98%", label: "Manual Data Entry Reduction" },
        { metric: "$12M", label: "Identified Annual Savings" },
        { metric: "10x", label: "Faster Monthly Closing" },
        { metric: "Real-time", label: "Global Liquidity View" },
        { metric: "95%", label: "Audit Compliance Score" },
        { metric: "<1s", label: "Transaction Processing Time" },
      ],
      challenge:
        "Legacy fragmentation led to massive data silos across global offices. Thomas Global struggled with manual, spreadsheet-based tracking of over $1.5 Billion in annual supplier transactions. This fragmentation resulted in delayed payments, high audit risks, and multi-million dollar losses due to data entry errors and a complete lack of real-time visibility into their global cash position and liquidity risks.",
      solution:
        "We developed a cloud-native financial powerhouse featuring a proprietary high-throughput processing engine. The system includes automated invoice matching using advanced machine vision, predictive cash flow forecasting based on deep historical trends, and a custom-built executive dashboard that provides 360-degree visibility into global liquidity and risk exposure. The platform also features automated tax reconciliation and multi-currency support to handle their diverse global operations.",
      process: [
        {
          phase: "Current State Analysis",
          description:
            "In-depth consultations with CFOs and controllers to map legacy financial cycles and identify critical data bottlenecks.",
          duration: "2 Weeks",
        },
        {
          phase: "Technical Blueprinting",
          description:
            "Designing a high-performance database schema and secure microservices architecture capable of handling sub-second financial queries.",
          duration: "4 Weeks",
        },
        {
          phase: "Core Engine Construction",
          description:
            "Developing the transaction processing unit, automated reconciliation logic, and integration adapters for multiple legacy ERP systems.",
          duration: "16 Weeks",
        },
        {
          phase: "Security Hardening",
          description:
            "Implementing bank-grade encryption at rest and in transit, multi-factor authentication, and comprehensive audit logging.",
          duration: "4 Weeks",
        },
        {
          phase: "System-Wide Migration",
          description:
            "Executing a zero-loss, phased migration of ten years of historical financial records with real-time verification at every step.",
          duration: "6 Weeks",
        },
      ],
      testimonial: {
        quote:
          "The Thomas Platform gave us visibility we never thought possible. We can now close our monthly books in hours instead of weeks, with complete confidence in our data and our global financial standing.",
        author: "Sarah J. Miller",
        role: "CFO, Thomas Global",
      },
      imageUrl:
        "https://ilt-sa.com/assets/img/new-portfolio/thomas-platform.webp",
      images: [
        "https://ilt-sa.com/assets/img/new-portfolio/thomas-platform.webp",
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1589758438368-2151a2a8c55b?q=80&w=1200&auto=format&fit=crop",
      ],
      tags: [
        "Fintech",
        "Enterprise SaaS",
        "Financial Intelligence",
        "Cloud Native",
      ],
      bgColor: "from-blue-600 to-sky-700",
      location: "New York, USA",
      date: "August 24th, 2023",
      website: "https://thomas.com",
      stats: "10x Faster",
    },
    {
      id: "3",
      title: "Implement Plus",
      category: "web",
      client: "Positive Implementation Co.",
      year: "2023",
      description:
        "Implement Plus is a futuristic IoT-enabled platform designed to manage European EV charging infrastructure at scale. It bridges the gap between hardware sensors and cloud-based management tools, providing city planners and infrastructure operators with the data they need to build sustainable, high-availability charging networks. The platform ensures seamless energy distribution, real-time station monitoring, and an optimized charging experience for the next generation of electric vehicle users.",
      technologies: [
        "Next.js",
        "Python",
        "MQTT",
        "AWS IoT Core",
        "PostGIS",
        "GraphQL",
        "React Native",
        "Node.js",
      ],
      results: [
        { metric: "99.99%", label: "Network Uptime" },
        { metric: "400%", label: "Active User Growth" },
        { metric: "ROI < 1yr", label: "Equipment Longevity" },
        { metric: "OTA", label: "Seamless Asset Updates" },
        { metric: "30%", label: "Energy Efficiency Gain" },
        { metric: "<2s", label: "IoT Data Latency" },
      ],
      challenge:
        "The client’s existing network suffered from frequent hardware downtime and a disjointed user experience. Without automated maintenance alerts or real-time load balancing, scaling the network beyond a few hundred stations was operationally impossible. Users frequently encountered offline or broken chargers, leading to significant brand damage and loss of revenue in a highly competitive market.",
      solution:
        "We built a robust IoT gateway that communicates with diverse charging station hardware in real-time using low-latency protocols. The platform utilizes predictive maintenance algorithms to identify failing components before they lead to service outages. Additionally, we developed a high-performance mobile app with real-time station availability and a sophisticated GIS-based command center that allows operators to manage thousands of assets from a single interface.",
      process: [
        {
          phase: "Hardware R&D",
          description:
            "Technical validation of low-latency hardware-to-cloud communication protocols across multiple charger brands and environmental conditions.",
          duration: "4 Weeks",
        },
        {
          phase: "Cloud Infrastructure",
          description:
            "Architecting a multi-region, auto-scaling AWS environment designed for the high-frequency ingest of IoT telemetry data.",
          duration: "3 Weeks",
        },
        {
          phase: "Platform Construction",
          description:
            "Parallel development of the GIS command center, mobile applications for iOS/Android, and the secure administrative backend.",
          duration: "14 Weeks",
        },
        {
          phase: "Field Integrity Testing",
          description:
            "End-to-end stress testing with physical hardware deployed across 10 major city centers to ensure real-world reliability.",
          duration: "5 Weeks",
        },
        {
          phase: "Global Rollout",
          description:
            "Phased deployment across multiple European markets with automated monitoring and localized support system integration.",
          duration: "4 Weeks",
        },
      ],
      testimonial: {
        quote:
          "Implement Plus has completely redefined how we manage our physical assets. The predictive maintenance alerts alone have saved us thousands in emergency repair costs and improved our brand trust significantly.",
        author: "David V. Richardson",
        role: "Head of Infrastructure, Positive Co.",
      },
      imageUrl: "https://ilt-sa.com/assets/img/new-portfolio/implement.webp",
      images: [
        "https://ilt-sa.com/assets/img/new-portfolio/implement.webp",
        "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1594818379496-da1e345b0ded?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1506619216599-9d16d0903dfd?q=80&w=1200&auto=format&fit=crop",
      ],
      tags: ["IoT", "CleanTech", "Smart Infrastructure", "EV Solutions"],
      bgColor: "from-blue-600 to-teal-700",
      location: "London, UK",
      date: "June 15th, 2023",
      website: "https://implementplus.com",
      stats: "99.9% Uptime",
    },
  ],
  testimonials: [
    {
      id: "1",
      name: "Michael Chen",
      role: "CTO, FinTech Solutions",
      content:
        "Working with ITSOL was transformative for our platform. Their understanding of complex financial architectures and ability to deliver scalable solutions is unmatched.",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200",
    },
    {
      id: "2",
      name: "Sarah Johnson",
      role: "Director of Product, EdTech Co",
      content:
        "The team's dedication to quality and user experience helped us launch our learning platform 2 months ahead of schedule. Exceptional communication throughout.",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200",
    },
    {
      id: "3",
      name: "David Miller",
      role: "Founder, HealthAI",
      content:
        "We needed a partner who understood both medical compliance and modern AI tech. ITSOL delivered a secure, HIPAA-compliant solution that serves thousands of patients.",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200",
    },
    {
      id: "4",
      name: "Emily Davis",
      role: "VP Marketing, RetailGiant",
      content:
        "The e-commerce revamp increased our conversion rates by 40%. The attention to detail in the UI/UX design was exactly what we needed to stand out.",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200",
    },
  ],
};

// --- CONVERSATIONS SECTION ---
export interface ConversationsData extends Omit<
  IConversationsContent,
  "_id" | "createdAt" | "updatedAt" | "__v"
> {
  _id?: string;
}

export const defaultConversationsData: ConversationsData = {
  heading: "Conversations that \n go beyond the code",
  conversations: [
    {
      title: "Scaling Global Commerce Architecture",
      partner: "Shopify",
      partnerLogo:
        "https://upload.wikimedia.org/wikipedia/commons/0/0e/Shopify_logo_2018.svg",
      speakers: [
        { name: "Jessica Williams", role: "Shopify" },
        { name: "Daniel Reed", role: "Itsol" },
      ],
      image: "https://placehold.co/600x800/111827/ffffff?text=Shopify+Talk",
      audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    },
    {
      title: "Next-Gen Fintech Security Standards",
      partner: "Stripe",
      partnerLogo:
        "https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg",
      speakers: [
        { name: "Marcus Thorne", role: "Stripe" },
        { name: "Sophia Chen", role: "Itsol" },
      ],
      image: "https://placehold.co/600x800/111827/ffffff?text=Stripe+Talk",
      audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
    },
    {
      title: "Collaborative Workflows in the Cloud",
      partner: "Dropbox",
      partnerLogo:
        "https://upload.wikimedia.org/wikipedia/commons/7/78/Dropbox_Icon.svg",
      speakers: [
        { name: "Emily Blunt", role: "Dropbox" },
        { name: "Ryan Maxwell", role: "Itsol" },
      ],
      image: "https://placehold.co/600x800/111827/ffffff?text=Dropbox+Talk",
      audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
    },
    {
      title: "Asynchronous Communication at Scale",
      partner: "Slack",
      partnerLogo:
        "https://upload.wikimedia.org/wikipedia/commons/d/d5/Slack_icon_2019.svg",
      speakers: [
        { name: "Kevin Hart", role: "Slack" },
        { name: "Lisa Wong", role: "Itsol" },
      ],
      image: "https://placehold.co/600x800/111827/ffffff?text=Slack+Talk",
      audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
    },
  ],
};

// --- PARTNERS SECTION ---
export interface PartnersData extends Omit<
  IPartnersContent,
  "_id" | "createdAt" | "updatedAt" | "__v"
> {
  _id?: string;
}

export const defaultPartnersData: PartnersData = {
  heading: "Our partnerships with \n industry leaders",
  partners: [
    {
      name: "Microsoft Solutions Partner",
      logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
      width: "w-32",
    },
    {
      name: "Google Cloud Partner",
      logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg",
      width: "w-40",
    },
    {
      name: "Salesforce Partner",
      logo: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg",
      width: "w-28",
    },
    {
      name: "AWS Partner Network",
      logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
      width: "w-24",
    },
  ],
};

// --- WHY CHOOSE US SECTION ---
export interface WhyChooseUsData extends Omit<
  IWhyChooseUsContent,
  "_id" | "createdAt" | "updatedAt" | "__v"
> {
  _id?: string;
}

export const defaultWhyChooseUsData: WhyChooseUsData = {
  heading: "We Don't Just Write Code, \n We Engineer Success",
  subheading:
    "Partner with a team that treats your business like their own. We combine technical expertise with business acumen to deliver measurable results.",
  features: [
    {
      iconName: "Zap",
      title: "Rapid Innovation",
      description:
        "We accelerate your digital transformation with cutting-edge technologies and agile methodologies, delivering market-ready solutions faster.",
    },
    {
      iconName: "Users",
      title: "Domain Expertise",
      description:
        "Benefit from our deep industry knowledge and technical proficiency, ensuring solutions that are not just functional but transformative.",
    },
    {
      iconName: "ShieldCheck",
      title: "Enterprise Grade Security",
      description:
        "We prioritize the security of your data and intellectual property with rigorous protection protocols and compliance standards.",
    },
    {
      iconName: "Globe",
      title: "Global Perspective",
      description:
        "Our diverse team brings global insights and varying cultural perspectives to ensure your product resonates with a worldwide audience.",
    },
    {
      iconName: "Rocket",
      title: "Scalable Architecture",
      description:
        "We build systems designed to grow with your business, ensuring performance and reliability even as your user base expands.",
    },
    {
      iconName: "Clock",
      title: "24/7 Support",
      description:
        "Our dedicated support teams operate across time zones to provide round-the-clock assistance and ensure maximum uptime.",
    },
  ],
};

// --- INDUSTRIES SECTION ---
export interface IndustriesData extends Omit<
  IIndustriesContent,
  "_id" | "createdAt" | "updatedAt" | "__v"
> {
  _id?: string;
}

export const defaultIndustriesData: IndustriesData = {
  heading: "Expertise in Software Development Across Multiple Industries",
  subheading:
    "We deliver tailored software solutions for diverse sectors, driving innovation and growth through technology.",
  industries: [
    {
      title: "E-commerce",
      iconName: "ShoppingCart",
      items: [
        "Social Commerce",
        "Subscription-Based E-commerce",
        "Marketplace Platforms",
        "Digital Goods E-commerce",
      ],
      color: "bg-blue-50 text-blue-600",
      link: "/services/ecommerce-digital-commerce-solution",
    },
    {
      title: "EdTech Solutions",
      iconName: "GraduationCap",
      items: [
        "Learning Management Systems",
        "Online Course Platforms",
        "Massive Open Online Courses",
        "Tutoring and Homework Help Apps",
      ],
      color: "bg-blue-50 text-blue-600",
      link: "/industries/edtech-solutions",
    },
    {
      title: "Travel & Tourism",
      iconName: "Plane",
      items: [
        "Travel Booking Apps",
        "Flight and Hotel Comparison Tools",
        "Trip Planning Apps",
        "Travel Guides and Itinerary Apps",
      ],
      color: "bg-blue-50 text-blue-600",
      link: "/industries/travel-tourism",
    },
    {
      title: "Property Management",
      iconName: "Building2",
      items: [
        "Property Listing Apps",
        "Real Estate Marketplaces",
        "Rental Management Apps",
        "Real Estate Investment Platforms",
      ],
      color: "bg-blue-50 text-blue-600",
      link: "/industries/property-management",
    },
    {
      title: "Finance Technology",
      iconName: "Landmark",
      items: [
        "Digital Banking",
        "Payment Gateways",
        "Investment Platforms",
        "Blockchain Solutions",
      ],
      color: "bg-blue-50 text-blue-600",
      link: "/industries/finance-technology",
    },
    {
      title: "Healthcare Services",
      iconName: "Stethoscope",
      items: [
        "Healthcare Software Development",
        "Healthcare App Development",
        "Telemedicine Apps",
        "Hospital Management",
        "EHR/EMR Systems",
        "Patient Portals",
      ],
      color: "bg-blue-50 text-blue-600",
      link: "/industries/healthcare-services",
    },
    {
      title: "Logistics",
      iconName: "Truck",
      items: [
        "Fleet Management",
        "Supply Chain",
        "Tracking Systems",
        "Inventory Management",
      ],
      color: "bg-blue-50 text-blue-600",
      link: "/industries/supply-chain-logistics",
    },
    {
      title: "AI & ML",
      iconName: "BrainCircuit",
      items: [
        "Predictive Analytics",
        "NLP Solutions",
        "Computer Vision",
        "Process Automation",
      ],
      color: "bg-blue-50 text-blue-600",
      link: "/services/data-and-ai",
    },
  ],
};

// --- TEAM SECTION ---
export interface TeamData extends Omit<
  ITeamContent,
  "_id" | "createdAt" | "updatedAt" | "__v"
> {
  _id?: string;
}

export const defaultTeamData: TeamData = {
  heading: "Meet Our Experts",
  subheading:
    "A diverse team of passionate technologists dedicated to building the future of software.",
  members: [
    {
      name: "Alex Morgan",
      role: "CEO & Founder",
      department: "leadership",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400",
      bio: "Visionary leader with 15+ years in tech...",
      socials: { linkedin: "#", twitter: "#" },
    },
    {
      name: "Sarah Chen",
      role: "CTO",
      department: "leadership",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400",
      bio: "Ex-Google architect, full-stack expert...",
      socials: { linkedin: "#", github: "#" },
    },
  ],
  galleryHeading: "We're a global team of innovators",
  gallerySubheading:
    "Navigate complex digital initiatives with confidence, propelling your journey towards innovation and growth.",
  galleryImages: [
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=800",
  ],
};

// --- BLOGS SECTION ---
export interface BlogsData extends Omit<
  IBlogsContent,
  "_id" | "createdAt" | "updatedAt" | "__v"
> {
  _id?: string;
}

export const defaultBlogsData: BlogsData = {
  heading: "Latest insights & resources",
  blogs: [
    {
      type: "Whitepaper",
      title: "An Executive Guide to Cloud Cost Optimization for Businesses",
      category: "Cloud Computing",
      image:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
      author: "ITSOL Team",
    },
    {
      type: "Webinar",
      title: "How Agentic AI Is Changing Business Workflows",
      category: "Artificial Intelligence",
      image:
        "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2000&auto=format&fit=crop",
      author: "ITSOL Team",
    },
    {
      type: "Article",
      title: "The Ultimate Guide To Performance Optimization in 2026",
      category: "Engineering",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
      author: "ITSOL Team",
    },
  ],
};

// --- FAQS SECTION ---
export interface FaqsData extends Omit<
  IFaqsContent,
  "_id" | "createdAt" | "updatedAt" | "__v"
> {
  _id?: string;
}

export const defaultFaqsData: FaqsData = {
  heading: "Frequently Asked Questions",
  subheading: "Everything you need to know about our process and services.",
  faqs: [
    {
      question: "What is your typical project timeline?",
      answer:
        "Project timelines vary based on complexity and scope. A standard MVP might take 6-10 weeks, while enterprise solutions can take 4-8 months. We provide detailed timeline estimates after our initial discovery phase.",
    },
    {
      question: "Do you provide post-launch support?",
      answer:
        "Yes! We offer comprehensive post-launch support and maintenance packages. This includes bug fixes, security updates, performance monitoring, and feature enhancements to ensure your software remains robust.",
    },
    {
      question: "How do you handle data security?",
      answer:
        "Security is built into our development process. We follow industry best practices including encryption, secure authentication (OAuth/JWT), regular security audits, and compliance with standards like GDPR and HIPAA where applicable.",
    },
  ],
};
// --- ABOUT US SECTION ---
export interface AboutData extends Omit<
  IAboutContent,
  "_id" | "createdAt" | "updatedAt" | "__v"
> {
  _id?: string;
}

export const defaultAboutData: AboutData = {
  heroHeading: "Building the Digital Future",
  heroSubheading: "Our Story",
  heroDescription:
    "We're a passionate team of innovators, creators, and problem-solvers dedicated to transforming businesses through technology.",
  missionHeading: "Our Mission",
  missionDescription:
    "To empower businesses through innovative technology solutions that drive growth, efficiency, and competitive advantage in an increasingly digital world.",
  visionDescription:
    "To be the most trusted technology partner for businesses undergoing digital transformation, recognized for our technical excellence and client-focused approach.",
  approachDescription:
    "We combine deep technical expertise with business acumen to deliver solutions that not only solve technical challenges but also drive measurable business impact.",
  timeline: [
    {
      year: "2018",
      event: "Company Founded",
      description: "Started with a small team of 5 developers",
    },
    {
      year: "2019",
      event: "First Major Client",
      description: "Landed enterprise contract with Fortune 500 company",
    },
  ],
  values: [
    {
      title: "Innovation",
      description: "We push boundaries and explore new possibilities",
      iconName: "Code",
    },
    {
      title: "Integrity",
      description: "Honest and ethical in all our dealings",
      iconName: "Shield",
    },
  ],
  stats: [
    { label: "Team Members", value: "50+", iconName: "Users" },
    { label: "Projects Delivered", value: "150+", iconName: "Rocket" },
    { label: "Countries Served", value: "12+", iconName: "Globe" },
    { label: "Years Experience", value: "5+", iconName: "Clock" },
  ],
  culture: [
    {
      title: "Continuous Learning",
      description:
        "Weekly tech talks, conference sponsorships, and education stipends",
      emoji: "📚",
    },
    {
      title: "Open Collaboration",
      description: "Flat hierarchy where every voice matters",
      emoji: "🤝",
    },
    {
      title: "Work-Life Balance",
      description: "Flexible schedules and unlimited PTO",
      emoji: "⚖️",
    },
    {
      title: "Community Impact",
      description: "Volunteer days and pro-bono tech work for nonprofits",
      emoji: "🌍",
    },
  ],
};

// --- LEAD MAGNET SECTION ---
export interface LeadMagnetData extends Omit<
  ILeadMagnetContent,
  "_id" | "createdAt" | "updatedAt" | "__v"
> {
  _id?: string;
}

export const defaultLeadMagnetData: LeadMagnetData = {
  badge: "Free Whitepaper",
  heading: "The Enterprise Digital Transformation Roadmap 2026",
  subheading:
    "A practical framework for C-Suite executives to modernize infrastructure, optimize workflows, and drive measurable ROI in 90 days.",
  buttonText: "Download Guide",
  footerText:
    "Join 5,000+ executives who read our insights. Unsubscribe appropriately.",
  whitepaperTitle: "Strategic Playbook for Software Modernization",
  whitepaperSubtitle: "A Practical Framework in 2026",
  whitepaperTag: "Whitepaper",
  pdfUrl: "",
};

// --- CAREERS SECTION ---
export interface CareersData extends Omit<
  ICareersContent,
  "_id" | "createdAt" | "updatedAt" | "__v"
> {
  _id?: string;
}

export const defaultCareersData: CareersData = {
  heroTitle: "Build the Future With Us",
  heroDescription:
    "Join a team of passionate innovators solving complex challenges at a global scale.",
  departments: [
    { id: "all", label: "All Roles" },
    { id: "engineering", label: "Engineering" },
    { id: "design", label: "Design" },
    { id: "product", label: "Product" },
    { id: "marketing", label: "Marketing" },
  ],
  benefits: [
    {
      iconName: "Globe",
      title: "Remote First",
      description:
        "Work from anywhere in the world. We believe in work-life integration.",
    },
    {
      iconName: "Heart",
      title: "Health & Wellness",
      description:
        "Comprehensive health coverage and wellness stipends for you and your family.",
    },
    {
      iconName: "Zap",
      title: "Growth Budget",
      description:
        "$2,000 annual budget for conferences, courses, and professional development.",
    },
    {
      iconName: "Clock",
      title: "Flexible Hours",
      description: "Set your own schedule. We value output over hours logged.",
    },
  ],
  stats: [
    { label: "Employees", value: "200+" },
    { label: "Nationalities", value: "25+" },
    { label: "Offices", value: "5" },
    { label: "Glassdoor Score", value: "4.9" },
  ],
  jobs: [
    {
      id: 1,
      title: "Senior Full Stack Engineer",
      department: "engineering",
      location: "Remote / Hybrid",
      type: "Full-time",
      salary: "$120k - $160k",
      description:
        "We're looking for an experienced Full Stack Engineer to lead major feature development...",
      requirements: [
        "5+ years of experience with React, TypeScript, and Node.js",
        "Deep understanding of cloud architecture (AWS/GCP)",
        "Experience with microservices and distributed systems",
      ],
      posted: "2 days ago",
    },
  ],
};

// --- NAVBAR MENU SECTION ---
export interface NavbarSubLink {
  title: string;
  path: string;
}

export interface NavbarSubMenuItem {
  name?: string;
  title?: string;
  desc?: string;
  iconName?: string;
  path?: string;
  featured?: boolean;
  links?: NavbarSubLink[];
}

export interface NavbarMenuItem {
  name: string;
  path?: string;
  order: number;
  isVisible: boolean;
  subMenu: NavbarSubMenuItem[];
}

export interface NavbarData {
  menus: NavbarMenuItem[];
}

export const defaultNavbarData: NavbarData = {
  menus: [
    {
      name: "Services",
      order: 0,
      isVisible: true,
      subMenu: [
        /*
        {
          name: "Software Development",
          desc: "Complete software creation lifecycle support",
          iconName: "Code",
          featured: true,
          path: "/services/custom-software-development",
          links: [
            {
              title: "Requirement Analysis",
              path: "/services/product-engineering",
            },
            {
              title: "Frontend/Backend Development",
              path: "/services/web-app-development",
            },
            {
              title: "Mobile Applications",
              path: "/services/mobile-app-development",
            },
            {
              title: "QA & Testing",
              path: "/services/software-quality-assurance",
            },
            {
              title: "Tailor-Made Software",
              path: "/services/custom-software-development",
            },
          ],
        },
        {
          name: "IT Strategy Consulting",
          desc: "Strategic digital services to drive growth",
          iconName: "MonitorSmartphone",
          featured: true,
          links: [
            { title: "Agile at Scale", path: "/services/platform-consulting" },
            {
              title: "Digital Roadmapping",
              path: "/services/platform-consulting",
            },
            {
              title: "Commerce Platforms",
              path: "/services/ecommerce-digital-commerce-solution",
            },
            {
              title: "Legacy System Upgrades",
              path: "/services/application-modernization",
            },
            {
              title: "Experience Optimization",
              path: "/services/customer-experience-optimization-services",
            },
          ],
        },
        {
          name: "AI & Data Solutions",
          desc: "Smarter insights through AI-driven analytics",
          iconName: "BarChart2",
          featured: true,
          links: [
            { title: "Virtual Agents", path: "/services/data-and-ai" },
            { title: "AI Implementation", path: "/services/data-and-ai" },
            { title: "Custom ML Applications", path: "/services/data-and-ai" },
            { title: "Strategic AI Planning", path: "/services/data-and-ai" },
            { title: "ML Model Deployment", path: "/services/data-and-ai" },
            {
              title: "Natural Language Systems",
              path: "/services/data-and-ai",
            },
          ],
        },
        {
          name: "DevOps & Cloud",
          desc: "Automated deployment and infrastructure solutions",
          iconName: "Cloud",
          featured: true,
          links: [
            {
              title: "CI/CD Pipeline Services",
              path: "/services/devops-and-cloud",
            },
            {
              title: "Kubernetes & Docker",
              path: "/services/containerization-services",
            },
            {
              title: "System Monitoring",
              path: "/services/monitoring-logging-services",
            },
            {
              title: "IaC (Infrastructure as Code)",
              path: "/services/devops-and-cloud",
            },
            { title: "Cloud Advisory", path: "/services/devops-and-cloud" },
            {
              title: "Security Compliance",
              path: "/services/cyber-security-services",
            },
          ],
        },
        {
          name: "Next-Gen Innovation",
          desc: "Solutions using the latest technological trends",
          iconName: "Rocket",
          featured: true,
          links: [
            {
              title: "Virtual Worlds (Metaverse)",
              path: "/services/emerging-technologies",
            },
            {
              title: "Augmented/Virtual Reality",
              path: "/services/emerging-technologies",
            },
            {
              title: "Vision Pro Integration",
              path: "/services/emerging-technologies",
            },
            {
              title: "Cyber Protection",
              path: "/services/cyber-security-services",
            },
          ],
        },
        {
          name: "Blockchain & Web3",
          desc: "Trustless systems and decentralized apps",
          iconName: "Cpu",
          featured: true,
          links: [
            { title: "Smart Contracts", path: "/services/blockchain-and-web3" },
            {
              title: "Enterprise Blockchain",
              path: "/services/blockchain-and-web3",
            },
            { title: "Token Solutions", path: "/services/blockchain-and-web3" },
            {
              title: "Blockchain Advice",
              path: "/services/blockchain-and-web3",
            },
            { title: "DApp Creation", path: "/services/blockchain-and-web3" },
          ],
        },
        {
          name: "Staff Augmentation",
          desc: "Scale your teams with elite technical talent",
          iconName: "Users",
          featured: true,
          path: "/services/staff-augmentation-services",
          links: [
            {
              title: "Dedicated Developers",
              path: "/services/dedicated-developers",
            },
            {
              title: "Team Extension",
              path: "/services/staff-augmentation-services",
            },
            {
              title: "Managed Services",
              path: "/engagement/managed-it-systems",
            },
          ],
        },
        */
        {
          name: "Software Development",
          desc: "We build custom enterprise software solutions that cater to businesses of all sizes' unique needs.",
          iconName: "BrainCircuit",
          featured: true,
          path: "/services/custom-software-development",
          links: [
            {
              title: "Custom Software Development",
              path: "/services/custom-software-development",
            },
            {
              title: "Product Development",
              path: "/services/product-development",
            },
            {
              title: "Software Consulting",
              path: "/services/software-consulting",
            },
            {
              title: "Enterprise Development",
              path: "/services/enterprise-development",
            },
            {
              title: "Offshore Software Development",
              path: "/services/offshore-software-development",
            },
          ],
        },
        {
          name: "Application Development",
          desc: "ITL delivers a comprehensive range of application services, encompassing development, migration, modernization, testing, and more.",
          iconName: "MonitorSmartphone",
          featured: true,
          path: "/services/web-app-development",
          links: [
            {
              title: "Custom Application Development",
              path: "/services/custom-application-development",
            },
            {
              title: "Application Migration",
              path: "/services/application-migration",
            },
            {
              title: "Application Integration",
              path: "/services/application-integration",
            },
            {
              title: "Application Modernization",
              path: "/services/application-modernization",
            },
            {
              title: "Application Management",
              path: "/services/application-management",
            },
          ],
        },
        {
          name: "AI Development",
          desc: "AI & ML implementation and development services engineered to enhance operational flexibility.",
          iconName: "BrainCircuit",
          featured: true,
          path: "/services/data-and-ai",
          links: [
            {
              title: "AI Strategy and Consulting",
              path: "/services/data-and-ai",
            },
            { title: "Model Development", path: "/services/data-and-ai" },
            {
              title: "Machine Learning Solutions",
              path: "/services/data-and-ai",
            },
            { title: "Generative AI and NLP", path: "/services/data-and-ai" },
            { title: "Data Analytics", path: "/services/data-and-ai" },
          ],
        },
        {
          name: "Cloud Computing",
          desc: "Scale and adapt to evolving needs within a secure hybrid or pure cloud environment.",
          iconName: "Cloud",
          featured: true,
          path: "/services/devops-and-cloud",
          links: [
            { title: "Cloud Strategy", path: "/services/devops-and-cloud" },
            { title: "App Modernization", path: "/services/devops-and-cloud" },
            { title: "DevOps Services", path: "/services/devops-and-cloud" },
            {
              title: "Cloud Managed Services",
              path: "/services/devops-and-cloud",
            },
            {
              title: "Cloud Infrastructure",
              path: "/services/devops-and-cloud",
            },
          ],
        },
        {
          name: "Software Testing and QA",
          desc: "Comprehensive quality assurance services, thoroughly examining software from end to end.",
          iconName: "ClipboardCheck",
          featured: true,
          path: "/services/software-quality-assurance",
          links: [
            {
              title: "Testing Outsourcing",
              path: "/services/software-quality-assurance",
            },
            {
              title: "Functional Testing",
              path: "/services/software-quality-assurance",
            },
            {
              title: "Usability Testing",
              path: "/services/software-quality-assurance",
            },
            {
              title: "Performance Testing",
              path: "/services/software-quality-assurance",
            },
          ],
        },
        {
          name: "Managed IT Services",
          desc: "Elevating businesses by expertly managing IT environments and assuming the entire scope of managed services.",
          iconName: "Settings",
          featured: true,
          path: "/engagement/managed-it-systems",
          links: [
            { title: "IT Consulting", path: "/engagement/managed-it-systems" },
            { title: "IT Outsourcing", path: "/engagement/managed-it-systems" },
            {
              title: "IT Infrastructure",
              path: "/engagement/managed-it-systems",
            },
          ],
        },
        {
          name: "Platform Consulting",
          desc: "Unlocking Microsoft's cloud potential with Azure Consulting to optimizing performance via AWS Consulting.",
          iconName: "LayoutDashboard",
          featured: true,
          path: "/services/platform-consulting",
          links: [
            {
              title: "Azure Consulting",
              path: "/services/platform-consulting",
            },
            { title: "AWS Consulting", path: "/services/platform-consulting" },
            {
              title: "Salesforce Consulting",
              path: "/services/platform-consulting",
            },
            {
              title: "Adobe Consulting",
              path: "/services/platform-consulting",
            },
          ],
        },
        {
          name: "Emerging Innovations",
          desc: "Integrating emerging technologies like Blockchain, Data Science, and IoT into your business workflows.",
          iconName: "Network",
          featured: true,
          path: "/services/emerging-technologies",
          links: [
            { title: "Data Science", path: "/services/emerging-technologies" },
            {
              title: "Big Data Solutions",
              path: "/services/emerging-technologies",
            },
            {
              title: "Blockchain Tech",
              path: "/services/emerging-technologies",
            },
            {
              title: "IoT Integration",
              path: "/services/emerging-technologies",
            },
          ],
        },
        {
          name: "Staff Augmentation",
          desc: "Scale your technical teams rapidly with ITL's expert designers, developers and engineers.",
          iconName: "Users",
          featured: true,
          path: "/services/staff-augmentation-services",
          links: [
            {
              title: "Dedicated Developers",
              path: "/services/dedicated-developers",
            },
            {
              title: "Team Extension",
              path: "/services/staff-augmentation-services",
            },
            {
              title: "Skill-Specific Hiring",
              path: "/services/staff-augmentation-services",
            },
          ],
        },
        {
          name: "Blockchain & Web3",
          desc: "Trustless systems, decentralized apps, and secure digital asset management.",
          iconName: "Lock",
          featured: true,
          path: "/services/blockchain-and-web3",
          links: [
            { title: "Smart Contracts", path: "/services/blockchain-and-web3" },
            {
              title: "Enterprise Blockchain",
              path: "/services/blockchain-and-web3",
            },
            {
              title: "DApp Development",
              path: "/services/blockchain-and-web3",
            },
            { title: "Token Solutions", path: "/services/blockchain-and-web3" },
          ],
        },
      ],
    },
    {
      name: "Industries We Serve",
      order: 1,
      isVisible: true,
      subMenu: [
        {
          name: "Sectors",
          desc: "Serving key industries across markets",
          iconName: "Rocket",
          featured: true,
          links: [
            {
              title: "Finance Technology",
              path: "/industries/finance-technology",
            },
            {
              title: "Property Management",
              path: "/industries/property-management",
            },
            {
              title: "Healthcare Services",
              path: "/industries/healthcare-services",
            },
            {
              title: "Healthcare Software",
              path: "/industries/healthcare-software",
            },
            {
              title: "Healthcare Apps",
              path: "/industries/healthcare-apps",
            },
            { title: "Food & Retail", path: "/industries/food-retail" },
            {
              title: "On-Demand Platforms",
              path: "/industries/on-demand-platforms",
            },
            {
              title: "EdTech Solutions",
              path: "/industries/edtech-solutions",
            },
          ],
        },
        {
          name: "Startups",
          desc: "Helping new ventures scale fast",
          iconName: "Rocket",
          path: "/industries/startups",
          featured: true,
        },
        {
          name: "Enterprises",
          desc: "Robust digital platforms for big businesses",
          iconName: "BriefcaseBusiness",
          path: "/industries/enterprises",
          featured: true,
        },
        {
          name: "Project Rescue",
          desc: "Turnaround support for struggling projects",
          iconName: "ShieldCheck",
          path: "/industries/rescue-projects",
          featured: true,
        },
      ],
    },
    {
      name: "Engagement Models",
      order: 2,
      isVisible: true,
      subMenu: [
        {
          name: "Collaborative Development",
          desc: "Agile development with your team",
          iconName: "LayoutDashboard",
          path: "/engagement/collaborative-development",
          featured: true,
          links: [
            {
              title: "Staff Augmentation",
              path: "/engagement/staff-augmentation",
            },
            {
              title: "Full Teams on Demand",
              path: "/engagement/full-teams-on-demand",
            },
            {
              title: "Team Scaling",
              path: "/engagement/dedicated-team",
            },
            {
              title: "Joint Venturing",
              path: "/engagement/team-augmentation",
            },
          ],
        },
        {
          name: "Scope-Driven Projects",
          desc: "Fixed-price and project-based engagement",
          iconName: "Server",
          path: "/engagement/scope-driven-projects",
          featured: true,
          links: [
            {
              title: "Defined Product Goals",
              path: "/engagement/product-development",
            },
            { title: "Set Deliverables", path: "/engagement/fixed-price" },
          ],
        },
        {
          name: "Support & Monitoring",
          desc: "Round-the-clock technical assistance",
          iconName: "Server",
          path: "/engagement/support-monitoring",
          featured: true,
          links: [
            {
              title: "Real-Time Monitoring",
              path: "/services/monitoring-logging-services",
            },
            {
              title: "24x7 Tech Support",
              path: "/engagement/technical-support-services",
            },
          ],
        },
      ],
    },
    {
      name: "Hire Dev",
      order: 3,
      isVisible: true,
      subMenu: [
        {
          name: "Backend Specialists",
          desc: "Expert server-side developers",
          iconName: "UserPlus",
          path: "/hire-dev/backend-specialists",
          links: [
            {
              title: "Elixir Experts",
              path: "/hire-dev/hire-elixir-developers",
            },
            {
              title: "Ruby on Rails Developers",
              path: "/hire-dev/hire-ror-developers",
            },
            {
              title: "Python Programmers",
              path: "/hire-dev/hire-python-developers",
            },
            {
              title: "Django Developers",
              path: "/hire-dev/hire-django-developers",
            },
            {
              title: "Node.js Engineers",
              path: "/hire-dev/hire-nodejs-developers",
            },
            {
              title: "Golang Developers",
              path: "/hire-dev/hire-golang-developers",
            },
          ],
        },
        {
          name: "Frontend Specialists",
          desc: "Client-side development experts",
          path: "/hire-dev/frontend-specialists",
          iconName: "UserPlus",
          links: [
            {
              title: "JavaScript Developers",
              path: "/hire-dev/javascript-development-company",
            },
            {
              title: "React Specialists",
              path: "/hire-dev/hire-reactjs-developers",
            },
            {
              title: "Angular Developers",
              path: "/hire-dev/hire-angular-developers",
            },
            {
              title: "TypeScript Engineers",
              path: "/hire-dev/hire-typescript-developers",
            },
          ],
        },
        {
          name: "Mobile Experts",
          desc: "Cross-platform app developers",
          path: "/hire-dev/mobile-experts",
          iconName: "UserPlus",
          links: [
            {
              title: "Flutter Developers",
              path: "/hire-dev/hire-flutter-developers",
            },
            {
              title: "Android Specialists",
              path: "/hire-dev/hire-android-developers",
            },
            { title: "iOS Developers", path: "/hire-dev/hire-ios-developers" },
          ],
        },
        {
          name: "Role-Based Hiring",
          desc: "Specialized technical roles",
          path: "/hire-dev/role-based-hiring",
          iconName: "UserPlus",
          links: [
            {
              title: "Product Leadership",
              path: "/hire-dev/hire-product-manager",
            },
            { title: "Technical Leadership", path: "/hire-dev/hire-cto" },
            {
              title: "SaaS Specialists",
              path: "/hire-dev/hire-saas-developers",
            },
            {
              title: "Full Stack MERN Developers",
              path: "/hire-dev/hire-mern-stack-developers",
            },
          ],
        },
        {
          name: "Committed Developers",
          desc: "Dedicated technical resources",
          iconName: "UserPlus",
          path: "/hire-dev/dedicated-developers",
        },
        {
          name: "Distributed Teams",
          desc: "Geographically dispersed talent",
          iconName: "Globe",
          path: "/hire-dev/remote-teams",
        },
      ],
    },
    {
      name: "Organization",
      order: 4,
      isVisible: true,
      subMenu: [
        {
          name: "Corporate Profile",
          desc: "Our mission, vision, and values",
          iconName: "LayoutDashboard",
          path: "/about-us",
        },
        {
          name: "Project Showcase",
          desc: "Our successful implementations",
          iconName: "ClipboardCheck",
          path: "/portfolio",
        },
        {
          name: "Employment Opportunities",
          desc: "Join our growing team",
          iconName: "BriefcaseBusiness",
          path: "/careers",
        },
        {
          name: "Technical Team",
          desc: "Meet our development experts",
          iconName: "Users",
          path: "/team",
        },
        {
          name: "Insights",
          desc: "Latest news and expert perspectives",
          iconName: "FileText",
          path: "/insights",
        },
        {
          name: "Podcasts",
          desc: "Conversations beyond the code",
          iconName: "MessageCircle",
          path: "/podcasts",
        },
      ],
    },
  ],
};

// --- AWARDS SECTION ---
export interface AwardsData extends Omit<
  IAwardsContent,
  "_id" | "createdAt" | "updatedAt" | "__v"
> {
  _id?: string;
}

export const defaultAwardsData: AwardsData = {
  heading: "We’ve been recognized by \\n the best, year after year.",
  awards: [
    {
      title: "Top AI Innovator",
      organization: "Tech Excellence Awards",
      iconName: "Zap",
      color: "text-blue-600",
    },
    {
      title: "Best Software Agency",
      organization: "Clutch Global Leaders",
      iconName: "Star",
      color: "text-blue-600",
    },
    {
      title: "Fastest Growing Tech",
      organization: "Deloitte Fast 500",
      iconName: "Award",
      color: "text-blue-600",
    },
    {
      title: "Great Place to Work",
      organization: "Certified 2024-2025",
      iconName: "ShieldCheck",
      color: "text-blue-600",
    },
  ],
  certifications: [
    { name: "ISO 27001 CERTIFIED", desc: "Information Security Management" },
    { name: "ISO 9001 CERTIFIED", desc: "Quality Management Systems" },
    { name: "CMMI LEVEL 3", desc: "Capability Maturity Model Integration" },
    { name: "GDPR COMPLIANT", desc: "General Data Protection Regulation" },
  ],
};
