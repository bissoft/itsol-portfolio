export const getHireDevDefaults = (slug: string) => {
  const defaults: Record<string, any> = {
    "backend-specialists": {
      heroTitle: "Expert Backend Specialists",
      heroDescription:
        "Power your application with robust, scalable server-side logic and high-performance database management built by our senior engineers.",
      heroBadge: "Server-Side Excellence",
      stats: [
        { value: "500+", label: "Vetted Developers", iconName: "Users" },
        { value: "48h", label: "Average Onboarding", iconName: "Timer" },
      ],
    },
    "frontend-specialists": {
      heroTitle: "Elite Frontend Specialists",
      heroDescription:
        "Create stunning, highly-responsive user interfaces that captivate your customers using the latest React, Angular, and Vue.js frameworks.",
      heroBadge: "UI/UX & Frontend Mastery",
      stats: [
        {
          value: "100%",
          label: "Responsive Design",
          iconName: "MonitorSmartphone",
        },
        { value: "Fast", label: "Page Performance", iconName: "Zap" },
      ],
    },
    "mobile-experts": {
      heroTitle: "Native & Cross-Platform Mobile Experts",
      heroDescription:
        "Reach your users on any device with high-quality iOS and Android applications developed for performance and engagement.",
      heroBadge: "Mobile-First Solutions",
      stats: [
        { value: "iOS", label: "Specialists", iconName: "Smartphone" },
        { value: "Android", label: "Specialists", iconName: "Smartphone" },
      ],
    },
  };

  const name = slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());

  return (
    defaults[slug] || {
      heroTitle: name,
      heroDescription: `Hire top-tier ${name} to scale your project and accelerate your delivery.`,
      heroBadge: "Specialized Talent",
      stats: [
        { value: "48h", label: "Talent Matching", iconName: "Clock" },
        { value: "100%", label: "Vetted Experts", iconName: "ShieldCheck" },
      ],
      process: [],
      benefits: [],
      features: [],
      techStack: [],
      projects: [],
    }
  );
};
