import IndustryPage from "./models/IndustryPage";
import dbConnect from "./db";

export const seedIndustryPages = async () => {
  await dbConnect();

  const sectors = [
    {
      slug: "healthcare-services",
      heroTitle: "Healthcare Technology Solutions",
      heroDescription:
        "Transform patient care with secure, interoperable digital health platforms.",
      heroBadge: "HIPAA Compliant Solutions",
      stats: [
        { value: "200+", label: "Healthcare Clients", iconName: "HeartPulse" },
        { value: "40%", label: "Cost Reduction", iconName: "Shield" },
        { value: "99.9%", label: "System Uptime", iconName: "Activity" },
        { value: "24/7", label: "Support", iconName: "Clock" },
      ],
      solutions: [
        {
          title: "Telehealth Platforms",
          description: "Secure video consultation systems with EHR integration",
          iconName: "HeartPulse",
        },
        {
          title: "EHR/EMR Systems",
          description: "Custom electronic health record solutions",
          iconName: "Clipboard",
        },
        {
          title: "Healthcare Security",
          description: "HIPAA-compliant data protection",
          iconName: "Shield",
        },
        {
          title: "Patient Portals",
          description: "Engaging patient experience platforms",
          iconName: "Users",
        },
      ],
      features: [
        {
          title: "Interoperability",
          description: "Seamless integration with existing healthcare systems",
          iconName: "Activity",
        },
        {
          title: "AI Diagnostics",
          description: "Machine learning for preliminary diagnosis",
          iconName: "HeartPulse",
        },
        {
          title: "Remote Monitoring",
          description: "IoT-enabled patient monitoring solutions",
          iconName: "Shield",
        },
        {
          title: "Analytics Dashboard",
          description: "Real-time healthcare analytics",
          iconName: "Clipboard",
        },
      ],
      caseStudies: [
        {
          title: "Telemedicine Platform",
          challenge: "Needed to launch telehealth services in 3 months",
          solution: "Developed custom platform with 50+ integrations",
          results: [
            "Launched in 11 weeks",
            "300+ providers onboarded",
            "40% cost savings",
          ],
        },
      ],
      testimonials: [
        {
          quote:
            "Their healthcare platform reduced our patient no-show rate by 35%.",
          author: "Dr. Sarah Johnson",
          role: "CMO, Regional Hospital",
          rating: 5,
        },
      ],
      whyChooseUs: [
        {
          title: "Healthcare Specialists",
          description: "Developers with 10+ years in healthcare IT",
          iconName: "Code",
        },
        {
          title: "Security First",
          description: "HIPAA compliance built into every solution",
          iconName: "Lock",
        },
      ],
      projects: [
        {
          title: "Virtual Care Platform",
          description: "End-to-end telehealth solution",
          tags: ["Telehealth", "Mobile"],
          image: "",
        },
      ],
    },
    {
      slug: "healthcare-software",
      heroTitle: "Medical Software Engineering",
      heroDescription:
        "Advanced EHR, EMR, and clinical workflow management software.",
      heroBadge: "Medical Tech",
      stats: [{ value: "100%", label: "Accuracy", iconName: "CheckCircle2" }],
      solutions: [
        {
          title: "EHR Systems",
          description: "Cloud-based records",
          iconName: "Database",
        },
      ],
      features: [],
      caseStudies: [],
      testimonials: [],
      whyChooseUs: [],
      projects: [],
    },
    {
      slug: "healthcare-apps",
      heroTitle: "Patient-Centric Health Apps",
      heroDescription: "Engaging mHealth applications for Android and iOS.",
      heroBadge: "mHealth Innovation",
      stats: [{ value: "500k+", label: "App Users", iconName: "Smartphone" }],
      solutions: [
        {
          title: "Patient Portals",
          description: "Mobile engagement",
          iconName: "Smartphone",
        },
      ],
      features: [],
      caseStudies: [],
      testimonials: [],
      whyChooseUs: [],
      projects: [],
    },
    {
      slug: "finance-technology",
      heroTitle: "Fintech Innovation & Security",
      heroDescription:
        "Transforming financial services with cutting-edge technology and bank-grade security.",
      heroBadge: "Enterprise Fintech Solutions",
      stats: [
        { value: "$3.5B+", label: "Transactions", iconName: "BarChart3" },
        { value: "150+", label: "Fintech Solutions", iconName: "Rocket" },
        { value: "99.99%", label: "Uptime", iconName: "ShieldCheck" },
      ],
      solutions: [
        {
          title: "Digital Payments",
          description: "Secure and seamless payment processing",
          iconName: "Zap",
        },
        {
          title: "Fraud Prevention",
          description: "AI-powered fraud detection",
          iconName: "Lock",
        },
        {
          title: "Open Banking",
          description: "API solutions for financial data sharing",
          iconName: "Globe",
        },
      ],
      features: [
        {
          title: "Real-time Processing",
          description: "Instant clearing and settlement",
          iconName: "Zap",
        },
        {
          title: "Multi-currency",
          description: "Global financial support",
          iconName: "Globe",
        },
      ],
      caseStudies: [],
      testimonials: [],
      whyChooseUs: [],
      projects: [],
    },
    {
      slug: "property-management",
      heroTitle: "Real Estate Digital Ecosystems",
      heroDescription:
        "Scale your property business with advanced listing platforms and management tools.",
      heroBadge: "PropTech Innovation",
      stats: [
        { value: "500+", label: "Properties Managed", iconName: "Building2" },
      ],
      solutions: [
        {
          title: "Property Portals",
          description: "Custom marketplace solutions",
          iconName: "Building2",
        },
      ],
      features: [],
      caseStudies: [],
      testimonials: [],
      whyChooseUs: [],
      projects: [],
    },
    {
      slug: "edtech-solutions",
      heroTitle: "EdTech & Learning Platforms",
      heroDescription:
        "Revolutionizing education with interactive LMS and remote learning solutions.",
      heroBadge: "Digital Learning",
      stats: [
        { value: "1M+", label: "Students Reached", iconName: "GraduationCap" },
      ],
      solutions: [
        {
          title: "LMS Systems",
          description: "Scalable learning management",
          iconName: "GraduationCap",
        },
      ],
      features: [],
      caseStudies: [],
      testimonials: [],
      whyChooseUs: [],
      projects: [],
    },
    {
      slug: "food-retail",
      heroTitle: "Food & Retail Digital Solutions",
      heroDescription:
        "Streamline your supply chain and customer experience in the food industry.",
      heroBadge: "Retail Innovation",
      stats: [
        { value: "10k+", label: "Daily Orders", iconName: "ShoppingCart" },
      ],
      solutions: [
        {
          title: "Delivery Apps",
          description: "Real-time tracking and logistics",
          iconName: "ShoppingCart",
        },
      ],
      features: [],
      caseStudies: [],
      testimonials: [],
      whyChooseUs: [],
      projects: [],
    },
    {
      slug: "on-demand-platforms",
      heroTitle: "On-Demand Platform Development",
      heroDescription:
        "Build the next generation of service platforms with real-time matching and logistics.",
      heroBadge: "On-Demand Innovation",
      stats: [{ value: "24/7", label: "Availability", iconName: "Clock" }],
      solutions: [
        {
          title: "Service Marketplaces",
          description: "Connect users with providers instantly",
          iconName: "Zap",
        },
      ],
      features: [],
      caseStudies: [],
      testimonials: [],
      whyChooseUs: [],
      projects: [],
    },
    {
      slug: "ecommerce",
      heroTitle: "Next-Gen E-commerce Solutions",
      heroDescription:
        "Scale your retail business with high-performance marketplace and social commerce platforms.",
      heroBadge: "Digital Commerce",
      stats: [
        { value: "500+", label: "Stores Launched", iconName: "ShoppingCart" },
      ],
      solutions: [
        {
          title: "Marketplace Platforms",
          description: "Multi-vendor ecosystem development",
          iconName: "ShoppingBag",
        },
      ],
      features: [],
      caseStudies: [],
      testimonials: [],
      whyChooseUs: [],
      projects: [],
    },
    {
      slug: "logistics",
      heroTitle: "Smart Logistics & Supply Chain",
      heroDescription:
        "Optimize your operations with real-time tracking and automated warehouse management.",
      heroBadge: "Logistics Tech",
      stats: [
        { value: "99.9%", label: "Delivery Accuracy", iconName: "Truck" },
      ],
      solutions: [
        {
          title: "Fleet Management",
          description: "Real-time assets tracking",
          iconName: "MapPin",
        },
      ],
      features: [],
      caseStudies: [],
      testimonials: [],
      whyChooseUs: [],
      projects: [],
    },
    {
      slug: "ai-ml",
      heroTitle: "AI & Machine Learning Innovation",
      heroDescription:
        "Power your business with predictive analytics and intelligent automation.",
      heroBadge: "Artificial Intelligence",
      stats: [{ value: "85%", label: "Efficiency Gain", iconName: "Cpu" }],
      solutions: [
        {
          title: "Predictive Analytics",
          description: "Data-driven forecasting",
          iconName: "BarChart",
        },
      ],
      features: [],
      caseStudies: [],
      testimonials: [],
      whyChooseUs: [],
      projects: [],
    },
    {
      slug: "travel-tourism",
      heroTitle: "Travel & Hospitality Technology",
      heroDescription:
        "Deliver seamless booking experiences and efficient property management software.",
      heroBadge: "Travel Tech",
      stats: [{ value: "250+", label: "Booking Systems", iconName: "Plane" }],
      solutions: [
        {
          title: "Booking Engines",
          description: "High-conversion reservation systems",
          iconName: "Calendar",
        },
      ],
      features: [],
      caseStudies: [],
      testimonials: [],
      whyChooseUs: [],
      projects: [],
    },
    {
      slug: "sectors",
      heroTitle: "Industry Sectors We Serve",
      heroDescription:
        "Tailored technology solutions across diverse global markets.",
      heroBadge: "Industry Expertise",
      stats: [{ value: "15+", label: "Industries Covered", iconName: "Globe" }],
      solutions: [
        {
          title: "Cross-Industry Apps",
          description: "Scalable solutions for any sector",
          iconName: "Layers",
        },
      ],
      features: [],
      caseStudies: [],
      testimonials: [],
      whyChooseUs: [],
      projects: [],
    },
    {
      slug: "startups",
      heroTitle: "Accelerate Your Startup Journey",
      heroDescription:
        "Go from MVP to Scale with our specialized startup engineering teams.",
      heroBadge: "Startup Catalyst",
      stats: [{ value: "50+", label: "Successful MVPs", iconName: "Rocket" }],
      solutions: [
        {
          title: "MVP Development",
          description: "Fast-to-market lean products",
          iconName: "Zap",
        },
      ],
      features: [],
      caseStudies: [],
      testimonials: [],
      whyChooseUs: [],
      projects: [],
    },
    {
      slug: "enterprises",
      heroTitle: "Enterprise Modernization",
      heroDescription:
        "Scale your legacy systems into modern cloud-native ecosystems.",
      heroBadge: "Enterprise Excellence",
      stats: [{ value: "100%", label: "System Security", iconName: "Shield" }],
      solutions: [
        {
          title: "Legacy Migration",
          description: "Modernize without disruption",
          iconName: "Server",
        },
      ],
      features: [],
      caseStudies: [],
      testimonials: [],
      whyChooseUs: [],
      projects: [],
    },
    {
      slug: "rescue-projects",
      heroTitle: "Project Rescue & Recovery",
      heroDescription:
        "Getting your stalled or problematic projects back on track.",
      heroBadge: "Recovery Experts",
      stats: [{ value: "100%", label: "Rescue Success", iconName: "LifeBuoy" }],
      solutions: [
        {
          title: "Technical Audit",
          description: "Identify and fix core issues",
          iconName: "Search",
        },
      ],
      features: [],
      caseStudies: [],
      testimonials: [],
      whyChooseUs: [],
      projects: [],
    },
  ];

  for (const sector of sectors) {
    await IndustryPage.findOneAndUpdate({ slug: sector.slug }, sector, {
      upsert: true,
      new: true,
    });
  }

  console.log("Industry pages seeded successfully");
};
