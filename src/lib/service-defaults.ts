export function getServiceDefaults(slug: string) {
  // Convert slug to title case (e.g. "product-development" -> "Product Development")
  const title = slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  if (slug === "custom-software-development") {
    return {
      slug,
      heroTitle: "Bespoke Software Solutions (Dynamic System)",
      heroDescription:
        "We engineer custom software that aligns perfectly with your operational needs, giving you a competitive edge through technology innovation.",
      heroBadge: "Custom Software Development",
      stats: [
        { value: "35%", label: "Cost Reduction", iconName: "TrendingDown" },
        { value: "42%", label: "Efficiency Boost", iconName: "Zap" },
        { value: "99.9%", label: "System Uptime", iconName: "Activity" },
      ],
      process: [
        {
          title: "Discovery",
          description:
            "Comprehensive requirement analysis, Feasibility study & ROI projection, Technology stack selection",
          iconName: "Layers",
        },
        {
          title: "Design",
          description:
            "System architecture planning, UI/UX prototyping, Database schema design",
          iconName: "BarChart2",
        },
        {
          title: "Development",
          description:
            "Agile sprint development, Peer code reviews, Continuous integration",
          iconName: "Code",
        },
        {
          title: "Deployment",
          description:
            "Staging environment testing, Load & performance testing, Phased production rollout",
          iconName: "Rocket",
        },
        {
          title: "Maintenance",
          description:
            "24/7 performance monitoring, Feature updates & enhancements, Security patches & upgrades",
          iconName: "Shield",
        },
      ],
      features: [
        {
          title: "Tailored Solutions",
          description:
            "Custom-built software designed specifically for your unique business processes and workflows",
          iconName: "Puzzle",
        },
        {
          title: "Process Automation",
          description:
            "Intelligent automation of repetitive tasks to boost efficiency and reduce errors",
          iconName: "Settings",
        },
        {
          title: "Data Management",
          description:
            "Custom databases and analytics systems to turn data into actionable insights",
          iconName: "Database",
        },
        {
          title: "Integration Ready",
          description:
            "Seamless connectivity with your existing tools and enterprise systems",
          iconName: "GitBranch",
        },
        {
          title: "Enterprise Security",
          description:
            "Bank-level security protocols and compliance-ready architectures",
          iconName: "Shield",
        },
        {
          title: "Scalable Architecture",
          description:
            "Future-proof systems designed to grow with your business needs",
          iconName: "Server",
        },
      ],
      techStack: [
        {
          category: "Languages",
          items: [
            {
              name: "TypeScript",
              description: "Statically typed JavaScript for large-scale apps",
              iconName: "FileCode",
            },
            {
              name: "Python",
              description: "Versatile language for data and backend services",
              iconName: "FileCode",
            },
            {
              name: "Java",
              description: "Enterprise-grade applications",
              iconName: "Coffee",
            },
            {
              name: "C#",
              description: ".NET ecosystem for Windows applications",
              iconName: "Hash",
            },
          ],
        },
        {
          category: "Frameworks",
          items: [
            {
              name: "React/Next.js",
              description: "Modern frontend development",
              iconName: "Atom",
            },
            {
              name: "Node.js",
              description: "JavaScript runtime for backend",
              iconName: "Server",
            },
            {
              name: "Spring Boot",
              description: "Enterprise Java framework",
              iconName: "Leaf",
            },
            {
              name: "Django",
              description: "Python web framework",
              iconName: "Box",
            },
          ],
        },
        {
          category: "Databases",
          items: [
            {
              name: "PostgreSQL",
              description: "Relational database",
              iconName: "Database",
            },
            {
              name: "MongoDB",
              description: "NoSQL document database",
              iconName: "Database",
            },
            {
              name: "Redis",
              description: "In-memory data store",
              iconName: "Zap",
            },
            {
              name: "Elasticsearch",
              description: "Search & analytics engine",
              iconName: "Search",
            },
          ],
        },
      ],
      projects: [
        {
          title: "Manufacturing ERP",
          description:
            "Custom enterprise resource planning system for industrial equipment manufacturer",
          tags: ["C#", ".NET", "SQL Server"],
          image: "",
        },
        {
          title: "Healthcare Analytics",
          description: "Patient data analysis platform for hospital network",
          tags: ["Python", "Django", "PostgreSQL"],
          image: "",
        },
        {
          title: "Logistics Automation",
          description: "Custom fleet management and routing system",
          tags: ["Java", "Spring", "MongoDB"],
          image: "",
        },
      ],
      customSections: [],
      benefits: [],
    };
  }

  return {
    slug,
    heroTitle: title,
    heroDescription: `Professional ${title} services tailored to your business needs.`,
    heroBadge: "Service Excellence",
    stats: [
      { value: "100%", label: "Client Satisfaction", iconName: "HeartPulse" },
      { value: "24/7", label: "Support Available", iconName: "Clock" },
    ],
    process: [
      {
        title: "Discovery",
        description: "We analyze your requirements and business goals.",
        iconName: "Search",
      },
      {
        title: "Strategy",
        description: "Developing a tailored roadmap for your success.",
        iconName: "Map",
      },
      {
        title: "Execution",
        description: "Implementing solutions with best practices.",
        iconName: "Zap",
      },
    ],
    benefits: [
      {
        title: "Expert Team",
        description: "Access to highly skilled professionals.",
        iconName: "Users",
      },
      {
        title: "Scalable Solutions",
        description: "Built to grow with your business.",
        iconName: "TrendingUp",
      },
    ],
    features: [],
    techStack: [],
    projects: [],
    customSections: [],
  };
}
