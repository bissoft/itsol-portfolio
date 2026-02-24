import { getSmartPath } from "@/utils";

export const getEngagementDefaults = (slug: string) => {
  const defaults: Record<string, any> = {
    "dedicated-team": {
      heroTitle: "Dedicated Development Teams",
      heroDescription:
        "Your own extended team of developers, fully integrated with your workflow and dedicated to your success.",
      heroBadge: "Extended Team Model",
      stats: [
        { value: "100+", label: "Dedicated Teams Deployed", iconName: "Users" },
        { value: "5+", label: "Years Average Engagement", iconName: "Clock" },
        { value: "95%", label: "Client Retention Rate", iconName: "Shield" },
        { value: "24/7", label: "Team Availability", iconName: "Timer" },
      ],
      benefits: [
        {
          title: "Technical Excellence",
          description: "Hand-picked developers with proven expertise",
          iconName: "Code",
        },
        {
          title: "Time Zone Alignment",
          description: "Teams that work in your business hours",
          iconName: "Clock",
        },
      ],
      process: [
        {
          title: "Requirement Analysis",
          description: "We deeply understand your project needs",
          iconName: "Clipboard",
        },
        {
          title: "Team Formation",
          description: "We assemble your ideal developer team",
          iconName: "Users",
        },
      ],
    },
    "collaborative-development": {
      heroTitle: "Collaborative Development",
      heroDescription:
        "Build high-performance software with our elite engineering teams working as an extension of yours.",
      heroBadge: "Strategic Partnership",
      stats: [
        {
          value: "50+",
          label: "Collaborative Projects",
          iconName: "Briefcase",
        },
        { value: "0", label: "Cultural Barriers", iconName: "Globe" },
      ],
    },
    "staff-augmentation": {
      heroTitle: "Staff Augmentation",
      heroDescription:
        "Scale your team quickly with our specialized experts who integrate directly into your existing workforce.",
      heroBadge: "Talent on Demand",
      stats: [
        { value: "48h", label: "Talent Matching", iconName: "Timer" },
        { value: "500+", label: "Vetted Experts", iconName: "Users" },
      ],
    },
    "full-teams-on-demand": {
      heroTitle: "Full Teams on Demand",
      heroDescription:
        "Get a complete, multi-functional squad ready to execute your product roadmap from day one.",
      heroBadge: "Turbocharged Delivery",
      stats: [
        { value: "1wk", label: "Team Deployment", iconName: "Zap" },
        { value: "100%", label: "Process Alignment", iconName: "Target" },
      ],
    },
    "managed-it-systems": {
      heroTitle: "Reliable Managed IT Services",
      heroDescription:
        "Focus on your core business while we handle your technology. We provide proactive monitoring, security, and strategy.",
      heroBadge: "Enterprise-Grade IT Support",
      stats: [
        { value: "99.99%", label: "Uptime Guaranteed", iconName: "Activity" },
        { value: "< 15m", label: "Avg. Response Time", iconName: "Clock" },
      ],
      benefits: [
        {
          title: "Reduced Downtime",
          description: "Proactive AI-driven monitoring prevents issues.",
          iconName: "Zap",
        },
        {
          title: "Expert Team",
          description: "Gain access to a certified team of IT professionals.",
          iconName: "Users",
        },
      ],
    },
    "scope-driven-projects": {
      heroTitle: "Scope-Driven Projects",
      heroDescription:
        "Fixed-price and project-based engagement models for clear deliverables and predictable outcomes.",
      heroBadge: "Outcome-Based Delivery",
      stats: [
        { value: "Fixed", label: "Budget", iconName: "DollarSign" },
        { value: "Clear", label: "Deliverables", iconName: "Target" },
      ],
    },
    "support-monitoring": {
      heroTitle: "Support & Monitoring",
      heroDescription:
        "Round-the-clock technical assistance and proactive system monitoring to ensure business continuity.",
      heroBadge: "24/7 Continuity",
      stats: [
        { value: "24/7", label: "Uptime", iconName: "Activity" },
        { value: "<30m", label: "Response", iconName: "Clock" },
      ],
    },
  };

  return (
    defaults[slug] || {
      heroTitle: slug.replace(/-/g, " ").toUpperCase(),
      heroDescription: "Tailored engagement models for your business growth.",
      heroBadge: "Engagement Model",
      stats: [
        { value: "100%", label: "Commitment", iconName: "CheckCircle" },
        { value: "24/7", label: "Availability", iconName: "Clock" },
      ],
      process: [],
      benefits: [],
      features: [],
      techStack: [],
      projects: [],
    }
  );
};
