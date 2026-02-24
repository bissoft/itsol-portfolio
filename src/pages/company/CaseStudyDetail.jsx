import { motion } from "framer-motion";
import { ArrowRight, Check, BarChart3, Users, Zap, TrendingUp, Link as LinkIcon,Lightbulb, Search, Palette, Code, Shield, Rocket, RefreshCw, Headphones,FileText ,TestTube ,MessageCircle,Route, ChevronRight, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import ServicesSection from "../../components/ServicesSection";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const CaseStudyDetail = () => {
  const navigate = useNavigate();
  const [selectedService, setSelectedService] = useState("Web App Development");
  const [activeStep, setActiveStep] = useState(0);
  const sectionRef = useRef(null);
  const containerRef = useRef(null);

    const services = [
    {
      title: "Web App Development",
      description:
        "Get a scalable, secure web app designed to meet your unique business needs and drive performance.",
      features: [
        "Fast, secure performance",
        "Seamless cross-device experience",
        "Scalable for future growth",
        "Customizable features",
      ],
    },
    {
      title: "Mobile App Development",
      description:
        "Cross-platform mobile applications with native-like performance and user experience.",
      features: [
        "iOS & Android development",
        "Native-like performance",
        "Offline functionality",
        "App store deployment",
      ],
    },
    {
      title: "API Development",
      description:
        "Robust and secure API solutions to power your applications and integrations.",
      features: [
        "RESTful API design",
        "GraphQL endpoints",
        "API documentation",
        "Security & authentication",
      ],
    },
    {
      title: "Enterprise Data Solutions",
      description:
        "Comprehensive data management and analytics solutions for enterprise needs.",
      features: [
        "Data warehousing",
        "Business intelligence",
        "Real-time analytics",
        "Data migration",
      ],
    },
    {
      title: "Cloud Services",
      description:
        "End-to-end cloud solutions including migration, management, and optimization.",
      features: [
        "Cloud migration",
        "Infrastructure setup",
        "Cost optimization",
        "24/7 monitoring",
      ],
    },
    {
      title: "System Integrations",
      description:
        "Seamlessly connect your existing systems with modern applications and services.",
      features: [
        "Legacy system integration",
        "Third-party API integration",
        "Data synchronization",
        "Custom connectors",
      ],
    },
    {
      title: "Real-Time Application Development",
      description:
        "Build responsive real-time applications with live updates and collaboration features.",
      features: [
        "WebSocket integration",
        "Live notifications",
        "Real-time collaboration",
        "Instant updates",
      ],
    },
    {
      title: "Launch Ready",
      description:
        "End-to-end development ensuring your product is market-ready and scalable.",
      features: [
        "Production deployment",
        "Performance optimization",
        "Security hardening",
        "Go-to-market strategy",
      ],
    },
  ];


  const processes = [
    {
      step: "01",
      title: "Creative Brainstorming",
      description:
        "We start with proper brainstorming sessions. This helps you refine your ideas and add value to your product plan, we start with ideation and concept generation.",
      duration: "2-4 weeks",
      icon: Lightbulb,
      color: "from-purple-500 to-pink-500",
    },
    {
      step: "02",
      title: "Market Research",
      description:
        "Our team works hard and do thorough market research before validating your idea. This helps us know the competency of your product plan.",
      duration: "3-5 weeks",
      icon: Search,
      color: "from-blue-500 to-cyan-500",
    },
    {
      step: "03",
      title: "Product Roadmap Creation",
      description:
        "Now, it's the time to come up with the right product strategy or even a whole roadmap of the product, from very start till the final flourish.",
      duration: "2-3 weeks",
      icon: Route,
      color: "from-green-500 to-emerald-500",
    },
    {
      step: "04",
      title: "Team Assembly",
      description:
        "We assemble the perfect team of experts tailored to your project needs, ensuring the right skills and experience for success.",
      duration: "1-2 weeks",
      icon: Users,
      color: "from-orange-500 to-red-500",
    },
    {
      step: "05",
      title: "Design & Prototyping",
      description:
        "Create intuitive user interfaces and interactive prototypes to visualize the final product and gather early feedback.",
      duration: "4-6 weeks",
      icon: FileText,
      color: "from-blue-500 to-purple-500",
    },
    {
      step: "06",
      title: "Development & Iteration",
      description:
        "Agile development process with continuous iterations, regular demos, and feedback incorporation to ensure we're building the right product.",
      duration: "8-12 weeks",
      icon: Code,
      color: "from-yellow-500 to-amber-500",
    },
    {
      step: "07",
      title: "Quality Assurance",
      description:
        "Comprehensive testing across all platforms and devices to ensure bug-free, performant, and secure application delivery.",
      duration: "2-4 weeks",
      icon: TestTube,
      color: "from-red-500 to-pink-500",
    },
    {
      step: "08",
      title: "Launch & Deployment",
      description:
        "Seamless deployment to production environments with proper monitoring, analytics, and performance tracking setup.",
      duration: "1-2 weeks",
      icon: Rocket,
      color: "from-teal-500 to-blue-500",
    },
    {
      step: "09",
      title: "Post-Launch Support",
      description:
        "Ongoing maintenance, updates, and feature enhancements based on user feedback and evolving business needs.",
      duration: "Ongoing",
      icon: MessageCircle,
      color: "from-gray-500 to-slate-500",
    },
  ];

  const caseStudies = [
    {
      id: 1,
      title: "Amelia.ai Virtual Assistant Implementation",
      category: "ai",
      year: "2025",
      description:
        "A sophisticated AI-powered virtual assistant designed to transform customer experience with advanced artificial intelligence, offering personalized support across retail, healthcare, finance, and more.",
      challenge:
        "ILT aimed to enhance customer support efficiency for businesses with high interaction volumes, facing challenges with slow response times and inconsistent query handling across multiple platforms.",
      solution:
        "We implemented Amelia.ai with seamless integration into websites, mobile apps, and social media platforms, leveraging her natural language processing (NLP) capabilities to handle complex queries and automate routine tasks. Our team provided end-to-end setup, configuration, and optimization.",
      technologies: ["Php", "React.js", "Amazon Web Services (AWS)"],
      results: [
        { metric: "40%", label: "Increase in customer satisfaction" },
        { metric: "30%", label: "Reduction in response time" },
        { metric: "25%", label: "Decrease in operational costs" },
        { metric: "99%", label: "Query resolution accuracy" },
      ],
      bgColor: "from-blue-500 to-blue-600",
      testimonial: {
        quote:
          "Amelia.ai transformed our customer support, reducing response times by 30% and improving satisfaction significantly. ILT's implementation was seamless and effective.",
        author: "Jane Doe",
        role: "Head of Customer Experience, ILT",
      },
      process: [
        {
          phase: "Discovery",
          description:
            "Conducted stakeholder interviews and system audits to understand integration needs and customer interaction patterns.",
          duration: "4 weeks",
        },
        {
          phase: "Integration Design",
          description:
            "Developed a tailored integration plan for Amelia.ai across client platforms, including UX design for seamless user flows.",
          duration: "6 weeks",
        },
        {
          phase: "Development & Deployment",
          description:
            "Implemented Amelia.ai with React.js frontends and AWS backend, ensuring compatibility with existing systems.",
          duration: "8 weeks",
        },
        {
          phase: "Optimization & Support",
          description:
            "Provided ongoing tuning of NLP models and performance monitoring to maximize efficiency and user satisfaction.",
          duration: "Ongoing",
        },
      ],
      date: "13th Feb, 2025",
      location: "5/3/77 Innovation Road, City Center, UK",
      website: "www.amelia.ai",
      projectCategory: [
        "Web App Development",
        "Web Design",
        "Software Development",
      ],
      servicesProvided: [
        "UX Design",
        "Web App Consultation",
        "Web App Development",
      ],
      skillsExpertise: {
        websiteTypes: ["SAAS", "Online Communities"],
        softwareFrameworks: ["Php", "React.js"],
        cloudProviders: ["Amazon Web Services (AWS)"],
        backendProgrammingLanguages: ["Php"],
      },
      images: ["https://ilt-sa.com/assets/img/new/amelia-portfolio.png"],
    },
    {
      id: 2,
      title: "Supplier Financial Management System (Thomas)",
      category: "web",
      client: "Thomas Inc.",
      year: "2025",
      description:
        "A robust web application designed to streamline financial transactions between businesses and suppliers, featuring an intuitive dashboard for real-time tracking of transactions, pending payments, and payment history.",
      challenge:
        "Businesses struggled with inefficient supplier payment processes, lacking transparency and real-time insights, leading to delayed payments and financial discrepancies.",
      solution:
        "We developed a Laravel-based web application with a Bootstrap-powered responsive dashboard, incorporating automated payment reminders and secure transaction tracking to enhance transparency and efficiency.",
      technologies: ["Laravel", "Bootstrap", "PHP", "MySQL"],
      results: [
        { metric: "50%", label: "Increase in payment processing efficiency" },
        { metric: "35%", label: "Reduction in payment delays" },
        { metric: "95%", label: "Financial data accuracy" },
        { metric: "100%", label: "Device compatibility" },
      ],
      bgColor: "from-green-500 to-teal-600",
      testimonial: {
        quote:
          "The Thomas platform revolutionized our supplier payments, cutting delays by 35% and providing crystal-clear financial insights. The dashboard is a game-changer.",
        author: "Michael Brown",
        role: "Finance Director, Thomas Inc.",
      },
      process: [
        {
          phase: "Requirement Analysis",
          description:
            "Engaged with stakeholders to identify key financial pain points and define dashboard requirements.",
          duration: "3 weeks",
        },
        {
          phase: "UI/UX Design",
          description:
            "Crafted responsive dashboard designs using Bootstrap, with user testing to ensure intuitive navigation.",
          duration: "5 weeks",
        },
        {
          phase: "Development",
          description:
            "Built the application with Laravel and MySQL, implementing secure APIs and automated reminder systems.",
          duration: "10 weeks",
        },
        {
          phase: "Testing & Deployment",
          description:
            "Conducted rigorous testing for security and scalability, followed by a phased rollout with real-time monitoring.",
          duration: "4 weeks",
        },
      ],
      date: "1st Oct, 2025",
      location: "Innovation Hub, London, UK",
      website: "www.thomas-platform.com",
      projectCategory: ["Web App Development", "UI/UX Design"],
      servicesProvided: [
        "UI/UX Design",
        "Web Development",
        "Database Integration",
      ],
      skillsExpertise: {
        websiteTypes: ["SAAS", "Financial Platforms"],
        softwareFrameworks: ["Laravel", "Bootstrap"],
        cloudProviders: [],
        backendProgrammingLanguages: ["PHP"],
      },
      images: [
        "https://ilt-sa.com/assets/img/new-portfolio/thomas-platform.webp",
        "https://ilt-sa.com/assets/img/new-portfolio/thomas-landingpage.webp",
        "https://ilt-sa.com/assets/img/new-portfolio/dasboard.webp",
        "https://ilt-sa.com/assets/img/new-portfolio/thomas3.webp",
        "https://ilt-sa.com/assets/img/new-portfolio/thomas2.webp",
      ],
    },
    {
      id: 3,
      title: "Implement Plus: Mobile & Electronic Charging Solutions Website",
      category: "web",
      client: "Positive Implementation Company",
      year: "2025",
      description:
        "A professional website showcasing mobile and electronic charging solutions, featuring a modern design, service highlights, dynamic blog, and SEO-friendly structure to enhance online presence and client engagement.",
      challenge:
        "Positive Implementation Company needed a robust online platform to showcase their charging solutions and partnerships, with limited digital presence hindering client outreach and engagement.",
      solution:
        "We developed a responsive website using HTML, CSS, Bootstrap, and Laravel, incorporating a dynamic blog, SEO optimization, and an intuitive contact form to drive business growth and visibility.",
      technologies: ["HTML", "CSS", "Bootstrap", "Laravel", "PHP"],
      results: [
        { metric: "60%", label: "Increase in website traffic" },
        { metric: "45%", label: "Improvement in search rankings" },
        { metric: "30%", label: "Rise in client inquiries" },
        { metric: "100%", label: "Device compatibility" },
      ],
      bgColor: "from-blue-500 to-cyan-600",
      testimonial: {
        quote:
          "The new website significantly boosted our online visibility and client engagement. The SEO-friendly design and intuitive layout exceeded our expectations.",
        author: "Sarah Al-Faisal",
        role: "Marketing Director, Positive Implementation Company",
      },
      process: [
        {
          phase: "Discovery",
          description:
            "Conducted stakeholder interviews to understand branding and service showcase requirements.",
          duration: "3 weeks",
        },
        {
          phase: "Design",
          description:
            "Created responsive designs with Bootstrap, focusing on user-friendly navigation and visual appeal.",
          duration: "4 weeks",
        },
        {
          phase: "Development",
          description:
            "Built the website with Laravel, integrating a dynamic blog and SEO-friendly structure.",
          duration: "8 weeks",
        },
        {
          phase: "Launch & Optimization",
          description:
            "Deployed the site with SEO monitoring and iterative improvements based on user feedback.",
          duration: "3 weeks",
        },
      ],
      date: "15th Sep, 2025",
      location: "Riyadh, Saudi Arabia",
      website: "www.implementplus.com",
      projectCategory: ["Web Design", "Web Development"],
      servicesProvided: ["UI/UX Design", "Web Development", "SEO Optimization"],
      skillsExpertise: {
        websiteTypes: ["Corporate", "Service Showcase"],
        softwareFrameworks: ["Bootstrap", "Laravel"],
        cloudProviders: [],
        backendProgrammingLanguages: ["PHP"],
      },
      images: ["https://ilt-sa.com/assets/img/new-portfolio/implement-3.webp"],
    },
    {
      id: 4,
      title: "TypingFlow: AI-Powered Content Solutions",
      category: "ai",
      client: "TypingFlow Inc.",
      year: "2025",
      description:
        "An AI-driven content platform delivering SEO-optimized, high-quality content for e-commerce, digital marketing, and lifestyle sectors, enhancing brand visibility and audience engagement.",
      challenge:
        "Businesses struggled to produce scalable, high-quality content that maintained brand voice while improving SEO and conversions, leading to missed digital marketing opportunities.",
      solution:
        "We developed TypingFlow using advanced AI algorithms to generate dynamic, SEO-friendly content, including product descriptions and blog posts, with scalable automation for diverse industries.",
      technologies: ["Python", "TensorFlow", "AWS", "Node.js"],
      results: [
        { metric: "55%", label: "Increase in organic traffic" },
        { metric: "40%", label: "Improvement in conversion rates" },
        { metric: "70%", label: "Reduction in content production time" },
        { metric: "90%", label: "SEO compliance rate" },
      ],
      bgColor: "from-purple-500 to-blue-600",
      testimonial: {
        quote:
          "TypingFlow transformed our content strategy, doubling our organic traffic and cutting production time significantly. It's a must-have for digital marketing.",
        author: "Emily Carter",
        role: "CMO, TypingFlow Inc.",
      },
      process: [
        {
          phase: "Research & Planning",
          description:
            "Analyzed client content needs and industry-specific SEO requirements to define AI model objectives.",
          duration: "5 weeks",
        },
        {
          phase: "AI Model Development",
          description:
            "Built and trained AI models using TensorFlow for content generation with high SEO compliance.",
          duration: "8 weeks",
        },
        {
          phase: "Platform Development",
          description:
            "Developed a scalable platform with Node.js and AWS for content delivery and management.",
          duration: "10 weeks",
        },
        {
          phase: "Testing & Optimization",
          description:
            "Tested content output for quality and SEO performance, with iterative refinements.",
          duration: "4 weeks",
        },
      ],
      date: "10th Aug, 2025",
      location: "Tech Park, London, UK",
      website: "www.typingflow.com",
      projectCategory: ["Content Management", "AI Development"],
      servicesProvided: ["AI Content Generation", "SEO Optimization"],
      skillsExpertise: {
        websiteTypes: ["SAAS", "Content Platforms"],
        softwareFrameworks: ["TensorFlow", "Node.js"],
        cloudProviders: ["Amazon Web Services (AWS)"],
        backendProgrammingLanguages: ["Python"],
      },
      images: ["https://ilt-sa.com/assets/img/new/typingflow.png"],
    },
    {
      id: 5,
      title: "Tektime: Meeting & Productivity Platform",
      category: "web",
      client: "Calvin Carlo",
      year: "2021",
      description:
        "A comprehensive web platform for scheduling, conducting, and managing meetings, featuring collaboration tools, task management, and advanced analytics for improved productivity.",
      challenge:
        "Businesses faced inefficiencies in meeting management, lacking real-time tracking and analytics, which hindered productivity and collaboration.",
      solution:
        "We developed Tektime using React.js and PHP on AWS, integrating real-time updates, task assignments, and automated reporting to streamline meeting workflows and enhance productivity.",
      technologies: ["Php", "React.js", "Amazon Web Services (AWS)"],
      results: [
        { metric: "45%", label: "Increase in meeting efficiency" },
        { metric: "60%", label: "Reduction in task management time" },
        { metric: "80%", label: "User adoption rate" },
        { metric: "95%", label: "Analytics accuracy" },
      ],
      bgColor: "from-orange-500 to-red-600",
      testimonial: {
        quote:
          "Tektime streamlined our meeting processes, saving hours weekly and boosting team productivity. The analytics features are incredibly insightful.",
        author: "David Lee",
        role: "Operations Manager, Calvin Carlo",
      },
      process: [
        {
          phase: "Discovery",
          description:
            "Conducted user research to identify pain points in meeting and task management workflows.",
          duration: "4 weeks",
        },
        {
          phase: "Design",
          description:
            "Created intuitive UI/UX designs with React.js, focusing on seamless collaboration features.",
          duration: "6 weeks",
        },
        {
          phase: "Development",
          description:
            "Built the platform with PHP and AWS, integrating real-time updates and analytics.",
          duration: "12 weeks",
        },
        {
          phase: "Launch & Support",
          description:
            "Deployed with comprehensive monitoring and provided ongoing support for optimization.",
          duration: "4 weeks",
        },
      ],
      date: "26th Oct, 2021",
      location: "3/2/64 Mongus Street, UK",
      website: "www.yourdomain.com",
      projectCategory: [
        "Web App Development",
        "Web Design",
        "Software Development",
      ],
      servicesProvided: [
        "UX Design",
        "Web App Consultation",
        "Web App Development",
      ],
      skillsExpertise: {
        websiteTypes: ["SAAS", "Online Communities"],
        softwareFrameworks: ["Php", "React.js"],
        cloudProviders: ["Amazon Web Services (AWS)"],
        backendProgrammingLanguages: ["Php"],
      },
      images: [
        "https://ilt-sa.com/assets/img/portfolio-pages/tektim1.png",
        "https://ilt-sa.com/assets/img/portfolio-pages/tektime2.png",
      ],
    },
    {
      id: 6,
      title: "Real Estate Platform",
      category: "web",
      client: "ILT Realty",
      year: "2025",
      description:
        "A robust platform designed to streamline property management, enhance buyer-seller interactions, and simplify real estate transactions with tools for listings, CRM integration, and secure payments.",
      challenge:
        "Real estate professionals faced inefficiencies in managing listings, client interactions, and transactions, leading to delays and reduced transparency.",
      solution:
        "We developed a responsive web platform with React.js and Node.js on AWS, featuring advanced search, CRM integration, online scheduling, and secure payment processing to improve efficiency and transparency.",
      technologies: ["React.js", "Node.js", "AWS", "MongoDB"],
      results: [
        { metric: "$130M", label: "Tax collected" },
        { metric: "400,000", label: "Parcels processed" },
        { metric: "40", label: "Parishes served" },
        { metric: "85%", label: "Increase in transaction efficiency" },
      ],
      bgColor: "from-teal-500 to-cyan-600",
      testimonial: {
        quote:
          "The Real Estate Platform transformed our operations, streamlining transactions and boosting client satisfaction. The CRM integration is a game-changer.",
        author: "Ahmed Khan",
        role: "CEO, ILT Realty",
      },
      process: [
        {
          phase: "Discovery",
          description:
            "Analyzed real estate workflows to identify key pain points in property management and transactions.",
          duration: "4 weeks",
        },
        {
          phase: "Design",
          description:
            "Crafted intuitive UI/UX designs with React.js, focusing on seamless navigation and advanced search features.",
          duration: "6 weeks",
        },
        {
          phase: "Development",
          description:
            "Built the platform with Node.js and MongoDB on AWS, integrating CRM and payment systems.",
          duration: "10 weeks",
        },
        {
          phase: "Launch & Optimization",
          description:
            "Deployed with real-time monitoring and optimized based on user feedback and analytics.",
          duration: "4 weeks",
        },
      ],
      date: "1st Jul, 2025",
      location: "Dubai, UAE",
      website: "www.iltrealty.com",
      projectCategory: ["Web App Development", "Web Design"],
      servicesProvided: ["UI/UX Design", "Web Development", "CRM Integration"],
      skillsExpertise: {
        websiteTypes: ["SAAS", "Real Estate Platforms"],
        softwareFrameworks: ["React.js", "Node.js"],
        cloudProviders: ["Amazon Web Services (AWS)"],
        backendProgrammingLanguages: ["JavaScript"],
      },
      images: ["https://via.placeholder.com/600x400.png?text=Real+Estate"],
    },
    {
      id: 7,
      title: "Product and Inventory Management",
      category: "web",
      client: "Calvin Carlo",
      year: "2021",
      description:
        "A comprehensive e-commerce platform for managing products, inventory, and customer interactions, featuring real-time tracking, personalized experiences, and robust analytics.",
      challenge:
        "Businesses struggled with inefficient inventory management and poor customer engagement, leading to stock issues and low conversion rates.",
      solution:
        "We developed a React.js and PHP-based platform on AWS, integrating real-time inventory tracking, personalized customer accounts, and a streamlined checkout process to enhance operations and sales.",
      technologies: ["Php", "React.js", "Amazon Web Services (AWS)", "MySQL"],
      results: [
        { metric: "50%", label: "Reduction in stock-outs" },
        { metric: "40%", label: "Increase in conversion rates" },
        { metric: "60%", label: "Improvement in customer retention" },
        { metric: "90%", label: "Accuracy in inventory tracking" },
      ],
      bgColor: "from-red-500 to-pink-600",
      testimonial: {
        quote:
          "The platform revolutionized our inventory management and customer engagement, driving significant sales growth and operational efficiency.",
        author: "Laura Smith",
        role: "Operations Manager, Calvin Carlo",
      },
      process: [
        {
          phase: "Discovery",
          description:
            "Conducted research to understand inventory and customer engagement challenges.",
          duration: "3 weeks",
        },
        {
          phase: "Design",
          description:
            "Created responsive designs with React.js, focusing on intuitive cart and account features.",
          duration: "5 weeks",
        },
        {
          phase: "Development",
          description:
            "Built the platform with PHP and MySQL on AWS, integrating analytics and payment gateways.",
          duration: "10 weeks",
        },
        {
          phase: "Launch & Support",
          description:
            "Deployed with monitoring and provided ongoing support for optimization.",
          duration: "4 weeks",
        },
      ],
      date: "26th Oct, 2021",
      location: "3/2/64 Mongus Street, UK",
      website: "www.yourdomain.com",
      projectCategory: [
        "Web App Development",
        "Web Design",
        "Software Development",
      ],
      servicesProvided: [
        "UX Design",
        "Web App Consultation",
        "Web App Development",
      ],
      skillsExpertise: {
        websiteTypes: ["SAAS", "E-Commerce"],
        softwareFrameworks: ["Php", "React.js"],
        cloudProviders: ["Amazon Web Services (AWS)"],
        backendProgrammingLanguages: ["Php"],
      },
      images: [
        "https://ilt-sa.com/assets/img/portfolio-pages/sale.png",
        "https://ilt-sa.com/assets/img/portfolio-pages/sale1.png",
      ],
    },
    {
      id: 8,
      title: "E Learning Platform",
      category: "web",
      client: "EduLearn Inc.",
      year: "2025",
      description:
        "An innovative e-learning platform fostering skill-building and personal development with educational resources, personalized recommendations, and an interactive community.",
      challenge:
        "Learners and educators needed a platform to deliver engaging, accessible content that supports continuous learning and community interaction.",
      solution:
        "We developed a React.js-based platform on AWS, integrating content libraries, personalized recommendations, and community features to create an immersive learning experience.",
      technologies: ["React.js", "Node.js", "AWS", "MongoDB"],
      results: [
        { metric: "70%", label: "Increase in user engagement" },
        { metric: "50%", label: "Growth in course completion rates" },
        { metric: "85%", label: "User satisfaction rate" },
        { metric: "60%", label: "Increase in community participation" },
      ],
      bgColor: "from-green-500 to-emerald-600",
      testimonial: {
        quote:
          "The E Learning Platform has transformed how we deliver education, making learning engaging and accessible for all our users.",
        author: "Dr. Maria Gonzalez",
        role: "Director, EduLearn Inc.",
      },
      process: [
        {
          phase: "Discovery",
          description:
            "Analyzed educational needs and user preferences to define platform features.",
          duration: "4 weeks",
        },
        {
          phase: "Design",
          description:
            "Crafted intuitive designs with React.js, focusing on user-friendly content access.",
          duration: "6 weeks",
        },
        {
          phase: "Development",
          description:
            "Built the platform with Node.js and MongoDB on AWS, integrating community and recommendation systems.",
          duration: "12 weeks",
        },
        {
          phase: "Launch & Optimization",
          description:
            "Deployed with monitoring and optimized based on user engagement data.",
          duration: "4 weeks",
        },
      ],
      date: "20th Jun, 2025",
      location: "London, UK",
      website: "www.edulearn.com",
      projectCategory: ["Web App Development", "E-Learning"],
      servicesProvided: [
        "UI/UX Design",
        "Web Development",
        "Content Management",
      ],
      skillsExpertise: {
        websiteTypes: ["SAAS", "E-Learning Platforms"],
        softwareFrameworks: ["React.js", "Node.js"],
        cloudProviders: ["Amazon Web Services (AWS)"],
        backendProgrammingLanguages: ["JavaScript"],
      },
      images: [
        "https://ilt-sa.com/assets/img/portfolio-pages/e-learnig.png",
        "https://ilt-sa.com/assets/img/portfolio-pages/e-learning-1.png",
      ],
    },
    {
      id: 9,
      title: "EntreSuite CRM",
      category: "web",
      client: "EntreSuite Solutions",
      year: "2025",
      description:
        "A CRM platform empowering businesses with customer insights, learning-oriented lead nurturing, and community tools to foster engagement and growth.",
      challenge:
        "Businesses needed a CRM that goes beyond traditional management to support customer education and community building.",
      solution:
        "We developed EntreSuite CRM using React.js and Node.js on AWS, integrating analytics, automated workflows, and community features to enhance customer relationships and learning.",
      technologies: ["React.js", "Node.js", "AWS", "MongoDB"],
      results: [
        { metric: "65%", label: "Increase in lead engagement" },
        { metric: "50%", label: "Improvement in customer retention" },
        { metric: "70%", label: "Growth in community interactions" },
        { metric: "90%", label: "Accuracy in analytics" },
      ],
      bgColor: "from-purple-500 to-blue-600",
      testimonial: {
        quote:
          "EntreSuite CRM revolutionized our customer engagement, making every interaction an opportunity for growth and learning.",
        author: "James Patel",
        role: "CEO, EntreSuite Solutions",
      },
      process: [
        {
          phase: "Discovery",
          description:
            "Analyzed business needs for advanced CRM features and community integration.",
          duration: "4 weeks",
        },
        {
          phase: "Design",
          description:
            "Created responsive designs with React.js, focusing on intuitive workflows and community features.",
          duration: "6 weeks",
        },
        {
          phase: "Development",
          description:
            "Built the platform with Node.js and MongoDB on AWS, integrating analytics and automation.",
          duration: "12 weeks",
        },
        {
          phase: "Launch & Support",
          description:
            "Deployed with monitoring and provided ongoing support for optimization.",
          duration: "4 weeks",
        },
      ],
      date: "15th May, 2025",
      location: "New York, USA",
      website: "www.entresuite.com",
      projectCategory: ["Web App Development", "CRM Development"],
      servicesProvided: [
        "UI/UX Design",
        "Web Development",
        "Community Features",
      ],
      skillsExpertise: {
        websiteTypes: ["SAAS", "CRM Platforms"],
        softwareFrameworks: ["React.js", "Node.js"],
        cloudProviders: ["Amazon Web Services (AWS)"],
        backendProgrammingLanguages: ["JavaScript"],
      },
      images: [
        "https://ilt-sa.com/assets/img/portfolio-pages/entre-suit.png",
        "https://ilt-sa.com/assets/img/portfolio-pages/entre-suit2.png",
        "https://ilt-sa.com/assets/img/portfolio-pages/entre-suit3.png",
        "https://ilt-sa.com/assets/img/portfolio-pages/entre-suit4.png",
        "https://ilt-sa.com/assets/img/portfolio-pages/entre-suit5.png",
      ],
    },
    {
      id: 10,
      title: "Law Trolley: Self Service Contracts System",
      category: "web",
      client: "LawTrolley Inc.",
      year: "2025",
      description:
        "A platform empowering sales teams with quick contract creation, automated approvals, e-signatures, and secure document management to streamline contract workflows.",
      challenge:
        "Sales teams faced delays and inefficiencies in contract management, relying heavily on legal teams and manual processes.",
      solution:
        "We developed Law Trolley using React.js and Node.js on AWS, integrating customizable templates, e-signature workflows, and compliance checks to enhance efficiency and independence.",
      technologies: ["React.js", "Node.js", "AWS", "MongoDB"],
      results: [
        { metric: "60%", label: "Reduction in contract processing time" },
        { metric: "75%", label: "Increase in sales team efficiency" },
        { metric: "95%", label: "Compliance accuracy" },
        { metric: "80%", label: "Improvement in client satisfaction" },
      ],
      bgColor: "from-blue-500 to-blue-600",
      testimonial: {
        quote:
          "Law Trolley empowered our sales team to manage contracts independently, cutting delays and boosting efficiency significantly.",
        author: "Rachel Lee",
        role: "Sales Director, LawTrolley Inc.",
      },
      process: [
        {
          phase: "Discovery",
          description:
            "Analyzed contract management workflows to identify inefficiencies and requirements.",
          duration: "4 weeks",
        },
        {
          phase: "Design",
          description:
            "Crafted intuitive designs with React.js, focusing on seamless contract creation and approval.",
          duration: "6 weeks",
        },
        {
          phase: "Development",
          description:
            "Built the platform with Node.js and MongoDB on AWS, integrating e-signatures and compliance tools.",
          duration: "12 weeks",
        },
        {
          phase: "Launch & Optimization",
          description:
            "Deployed with monitoring and optimized based on user feedback and performance data.",
          duration: "4 weeks",
        },
      ],
      date: "10th Apr, 2025",
      location: "London, UK",
      website: "www.lawtrolley.com",
      projectCategory: ["Web App Development", "Contract Management"],
      servicesProvided: [
        "UI/UX Design",
        "Web Development",
        "E-Signature Integration",
      ],
      skillsExpertise: {
        websiteTypes: ["SAAS", "Legal Tech"],
        softwareFrameworks: ["React.js", "Node.js"],
        cloudProviders: ["Amazon Web Services (AWS)"],
        backendProgrammingLanguages: ["JavaScript"],
      },
      images: [
        "https://ilt-sa.com/assets/img/portfolio-pages/lawtrolly.png",
        "https://ilt-sa.com/assets/img/portfolio-pages/law-trolly-1.png",
        "https://ilt-sa.com/assets/img/portfolio-pages/law-trolly-2.png",
        "https://ilt-sa.com/assets/img/portfolio-pages/law-trolly-3.png",
        "https://ilt-sa.com/assets/img/portfolio-pages/law-trolly-4.png",
        "https://ilt-sa.com/assets/img/portfolio-pages/law-trolly-6.png",
      ],
    },
    {
      id: 11,
      title: "Videotoon: Animation Platform",
      category: "web",
      client: "Videotoon Creators",
      year: "2025",
      description:
        "A user-friendly platform for creating professional animated videos, enabling businesses, educators, and creators to produce engaging content with customizable templates and tools.",
      challenge:
        "Creating professional animations was complex and inaccessible for users without advanced skills, limiting content creation for businesses and educators.",
      solution:
        "We developed Videotoon using React.js and Node.js on AWS, providing a library of templates, advanced editing tools, and an intuitive interface to democratize animation creation.",
      technologies: ["React.js", "Node.js", "AWS", "MongoDB"],
      results: [
        { metric: "80%", label: "Increase in user-generated content" },
        { metric: "60%", label: "Reduction in production time" },
        { metric: "70%", label: "Growth in user engagement" },
        { metric: "90%", label: "User satisfaction rate" },
      ],
      bgColor: "from-yellow-500 to-orange-600",
      testimonial: {
        quote:
          "Videotoon made animation accessible for our team, enabling us to create engaging content quickly and effectively.",
        author: "Sophie Turner",
        role: "Marketing Lead, Videotoon Creators",
      },
      process: [
        {
          phase: "Discovery",
          description:
            "Analyzed user needs for animation tools and content creation workflows.",
          duration: "4 weeks",
        },
        {
          phase: "Design",
          description:
            "Crafted intuitive designs with React.js, focusing on ease of use and template accessibility.",
          duration: "6 weeks",
        },
        {
          phase: "Development",
          description:
            "Built the platform with Node.js and MongoDB on AWS, integrating editing tools and templates.",
          duration: "12 weeks",
        },
        {
          phase: "Launch & Optimization",
          description:
            "Deployed with monitoring and optimized based on user feedback and engagement data.",
          duration: "4 weeks",
        },
      ],
      date: "5th Mar, 2025",
      location: "San Francisco, USA",
      website: "www.videotoon.com",
      projectCategory: ["Web App Development", "Animation Platform"],
      servicesProvided: ["UI/UX Design", "Web Development", "Animation Tools"],
      skillsExpertise: {
        websiteTypes: ["SAAS", "Content Creation"],
        softwareFrameworks: ["React.js", "Node.js"],
        cloudProviders: ["Amazon Web Services (AWS)"],
        backendProgrammingLanguages: ["JavaScript"],
      },
      images: [
        "https://ilt-sa.com/assets/img/portfolio-pages/videotoon.png",
        "https://ilt-sa.com/assets/img/portfolio-pages/videotoon-1.png",
        "https://ilt-sa.com/assets/img/portfolio-pages/videotoon-2.png",
        "https://ilt-sa.com/assets/img/portfolio-pages/videotoon-3.png",
        "https://ilt-sa.com/assets/img/portfolio-pages/videotoon-4.png",
        "https://ilt-sa.com/assets/img/portfolio-pages/videotoon-5.png",
        "https://ilt-sa.com/assets/img/portfolio-pages/videotoon-6.png",
        "https://ilt-sa.com/assets/img/portfolio-pages/videotoon-7.png",
        "https://ilt-sa.com/assets/img/portfolio-pages/videotoon-8.png",
      ],
    },
    {
      id: 12,
      title: "TikTok Marketing Partner",
      category: "web",
      client: "Calvin Carlo",
      year: "2021",
      description:
        "A platform leveraging TikTok's advertising ecosystem to create engaging, platform-optimized animations and campaigns, enhancing brand visibility and audience interaction.",
      challenge:
        "Businesses struggled to create TikTok-optimized content that aligns with platform trends and maximizes engagement.",
      solution:
        "We developed a React.js and PHP-based platform on AWS, integrating TikTok analytics and tools to create high-impact animations and ad campaigns tailored to TikTok's audience.",
      technologies: ["Php", "React.js", "Amazon Web Services (AWS)"],
      results: [
        { metric: "70%", label: "Increase in campaign engagement" },
        { metric: "55%", label: "Improvement in brand recall" },
        { metric: "60%", label: "Growth in ad reach" },
        { metric: "85%", label: "Alignment with TikTok trends" },
      ],
      bgColor: "from-pink-500 to-purple-600",
      testimonial: {
        quote:
          "The TikTok Marketing Partner platform amplified our brand presence, delivering campaigns that resonate with TikTok's audience.",
        author: "Mark Wilson",
        role: "Marketing Director, Calvin Carlo",
      },
      process: [
        {
          phase: "Discovery",
          description:
            "Analyzed TikTok's advertising ecosystem and client campaign needs.",
          duration: "3 weeks",
        },
        {
          phase: "Design",
          description:
            "Created responsive designs with React.js, focusing on TikTok-optimized content creation.",
          duration: "5 weeks",
        },
        {
          phase: "Development",
          description:
            "Built the platform with PHP on AWS, integrating TikTok analytics and ad tools.",
          duration: "10 weeks",
        },
        {
          phase: "Launch & Support",
          description:
            "Deployed with monitoring and provided ongoing support for campaign optimization.",
          duration: "4 weeks",
        },
      ],
      date: "26th Oct, 2021",
      location: "3/2/64 Mongus Street, UK",
      website: "www.yourdomain.com",
      projectCategory: [
        "Web App Development",
        "Web Design",
        "Software Development",
      ],
      servicesProvided: [
        "UX Design",
        "Web App Consultation",
        "Web App Development",
      ],
      skillsExpertise: {
        websiteTypes: ["SAAS", "Marketing Platforms"],
        softwareFrameworks: ["Php", "React.js"],
        cloudProviders: ["Amazon Web Services (AWS)"],
        backendProgrammingLanguages: ["Php"],
      },
      images: [
        "https://ilt-sa.com/assets/img/portfolio-pages/tiktok-banner.png",
        "https://ilt-sa.com/assets/img/portfolio-pages/tiktok.png",
        "https://ilt-sa.com/assets/img/portfolio-pages/tiktok1.png",
        "https://ilt-sa.com/assets/img/portfolio-pages/tiktok2.png",
        "https://ilt-sa.com/assets/img/portfolio-pages/tiktok4.png",
      ],
    },
    {
      id: 13,
      title: "Basafa Digital Solutions",
      category: "web",
      client: "Basafa Digital Company",
      year: "2025",
      description:
        "A suite of software solutions and digital services designed to streamline Basafa's operations and support their clients' digital transformation with CRM, ERP, and analytics tools.",
      challenge:
        "Basafa needed scalable, user-friendly solutions to automate operations, enhance client experiences, and support data-driven decision-making across diverse industries.",
      solution:
        "We developed a comprehensive platform using React.js and Node.js on AWS, integrating CRM, ERP, APIs, and analytics dashboards to optimize workflows and client interactions.",
      technologies: ["React.js", "Node.js", "AWS", "MongoDB"],
      results: [
        { metric: "60%", label: "Increase in workflow efficiency" },
        { metric: "45%", label: "Improvement in client satisfaction" },
        { metric: "70%", label: "Reduction in manual processes" },
        { metric: "90%", label: "Accuracy in analytics" },
      ],
      bgColor: "from-blue-500 to-teal-600",
      testimonial: {
        quote:
          "The Basafa platform streamlined our operations and empowered our clients with actionable insights, significantly enhancing our service delivery.",
        author: "Fatima Al-Zahrani",
        role: "CEO, Basafa Digital Company",
      },
      process: [
        {
          phase: "Discovery",
          description:
            "Analyzed Basafa’s operational needs and client requirements to define solution scope.",
          duration: "4 weeks",
        },
        {
          phase: "Design",
          description:
            "Created responsive designs with React.js, focusing on intuitive interfaces for CRM and ERP.",
          duration: "6 weeks",
        },
        {
          phase: "Development",
          description:
            "Built the platform with Node.js and MongoDB on AWS, integrating APIs and analytics.",
          duration: "12 weeks",
        },
        {
          phase: "Launch & Optimization",
          description:
            "Deployed with monitoring and optimized based on performance and client feedback.",
          duration: "4 weeks",
        },
      ],
      date: "1st Feb, 2025",
      location: "Riyadh, Saudi Arabia",
      website: "www.basafadigital.com",
      projectCategory: ["Web App Development", "Software Development"],
      servicesProvided: [
        "Custom Software Development",
        "Web & Mobile Development",
        "API Integration",
        "Cloud Management",
      ],
      skillsExpertise: {
        websiteTypes: ["SAAS", "Digital Services"],
        softwareFrameworks: ["React.js", "Node.js"],
        cloudProviders: ["Amazon Web Services (AWS)"],
        backendProgrammingLanguages: ["JavaScript"],
      },
      images: [
        "https://ilt-sa.com/assets/img/portfolio-pages/basafa-digital.png",
        "https://ilt-sa.com/assets/img/portfolio-pages/basafa-digital-1.png",
        "https://ilt-sa.com/assets/img/portfolio-pages/basafa-digital-land.png",
      ],
    },
    {
      id: 14,
      title: "Noticer Email Campaign Dashboard",
      category: "web",
      client: "Calvin Carlo",
      year: "2021",
      description:
        "A comprehensive dashboard for managing email marketing campaigns with personalized content, A/B testing, real-time analytics, and CRM integrations to optimize engagement.",
      challenge:
        "Marketers needed a powerful, user-friendly tool to create, manage, and analyze email campaigns to drive engagement and conversions.",
      solution:
        "We developed a React.js and PHP-based dashboard on AWS, integrating segmentation, A/B testing, automation workflows, and real-time analytics to enhance campaign performance.",
      technologies: ["Php", "React.js", "Amazon Web Services (AWS)", "MySQL"],
      results: [
        { metric: "50%", label: "Increase in open rates" },
        { metric: "40%", label: "Improvement in click-through rates" },
        { metric: "65%", label: "Growth in conversions" },
        { metric: "90%", label: "Accuracy in analytics" },
      ],
      bgColor: "from-purple-500 to-pink-600",
      testimonial: {
        quote:
          "The Noticer dashboard transformed our email marketing, providing deep insights and automation that boosted our campaign performance significantly.",
        author: "Emma Davis",
        role: "Marketing Manager, Calvin Carlo",
      },
      process: [
        {
          phase: "Discovery",
          description:
            "Analyzed marketing needs and campaign workflows to define dashboard features.",
          duration: "3 weeks",
        },
        {
          phase: "Design",
          description:
            "Created responsive designs with React.js, focusing on intuitive campaign management.",
          duration: "5 weeks",
        },
        {
          phase: "Development",
          description:
            "Built the platform with PHP and MySQL on AWS, integrating analytics and automation.",
          duration: "10 weeks",
        },
        {
          phase: "Launch & Support",
          description:
            "Deployed with monitoring and provided ongoing support for optimization.",
          duration: "4 weeks",
        },
      ],
      date: "26th Oct, 2021",
      location: "3/2/64 Mongus Street, UK",
      website: "www.yourdomain.com",
      projectCategory: [
        "Web App Development",
        "Web Design",
        "Software Development",
      ],
      servicesProvided: [
        "UX Design",
        "Web App Consultation",
        "Web App Development",
      ],
      skillsExpertise: {
        websiteTypes: ["SAAS", "Marketing Platforms"],
        softwareFrameworks: ["Php", "React.js"],
        cloudProviders: ["Amazon Web Services (AWS)"],
        backendProgrammingLanguages: ["Php"],
      },
      images: [
        "https://ilt-sa.com/assets/img/portfolio-pages/noticer.png",
        "https://ilt-sa.com/assets/img/portfolio-pages/noticer1.png",
        "https://ilt-sa.com/assets/img/portfolio-pages/noticer2.png",
        "https://ilt-sa.com/assets/img/portfolio-pages/noticer3.png",
        "https://ilt-sa.com/assets/img/portfolio-pages/noticer4.png",
        "https://ilt-sa.com/assets/img/portfolio-pages/noticer5.png",
        "https://ilt-sa.com/assets/img/portfolio-pages/noticer6.png",
      ],
    },
    {
      id: 15,
      title: "Documint: NFT Platform",
      category: "web",
      client: "Calvin Carlo",
      year: "2021",
      description:
        "A platform for minting, managing, and trading secure, verifiable NFTs, with wallet integration, smart contracts, and analytics for creators and collectors.",
      challenge:
        "Creators and brands needed a secure, user-friendly platform to mint and manage NFTs with verified authenticity and seamless marketplace integration.",
      solution:
        "We developed Documint using React.js and PHP on AWS, integrating blockchain technology, wallet support, and analytics to create a trusted NFT ecosystem.",
      technologies: [
        "Php",
        "React.js",
        "Amazon Web Services (AWS)",
        "Blockchain",
      ],
      results: [
        { metric: "70%", label: "Increase in NFT minting efficiency" },
        { metric: "80%", label: "Improvement in user trust" },
        { metric: "60%", label: "Growth in marketplace engagement" },
        { metric: "95%", label: "Authenticity verification rate" },
      ],
      bgColor: "from-blue-500 to-purple-600",
      testimonial: {
        quote:
          "Documint made NFT creation and management seamless, providing a secure platform that our creators and collectors trust completely.",
        author: "Lucas Brown",
        role: "Founder, Calvin Carlo",
      },
      process: [
        {
          phase: "Discovery",
          description:
            "Analyzed NFT market needs and user requirements for minting and trading.",
          duration: "4 weeks",
        },
        {
          phase: "Design",
          description:
            "Created responsive designs with React.js, focusing on intuitive NFT management.",
          duration: "6 weeks",
        },
        {
          phase: "Development",
          description:
            "Built the platform with PHP and blockchain on AWS, integrating wallets and analytics.",
          duration: "12 weeks",
        },
        {
          phase: "Launch & Support",
          description:
            "Deployed with monitoring and provided ongoing support for optimization.",
          duration: "4 weeks",
        },
      ],
      date: "26th Oct, 2021",
      location: "3/2/64 Mongus Street, UK",
      website: "www.yourdomain.com",
      projectCategory: [
        "Web App Development",
        "Web Design",
        "Software Development",
      ],
      servicesProvided: [
        "UX Design",
        "Web App Consultation",
        "Web App Development",
      ],
      skillsExpertise: {
        websiteTypes: ["SAAS", "NFT Platforms"],
        softwareFrameworks: ["Php", "React.js"],
        cloudProviders: ["Amazon Web Services (AWS)"],
        backendProgrammingLanguages: ["Php"],
      },
      images: [
        "https://ilt-sa.com/assets/img/portfolio-pages/documint.png",
        "https://ilt-sa.com/assets/img/portfolio-pages/documint1.png",
        "https://ilt-sa.com/assets/img/portfolio-pages/documint2.png",
      ],
    },
    {
      id: 16,
      title: "YouTube Ads Promotion Platform",
      category: "web",
      client: "Calvin Carlo",
      year: "2021",
      description:
        "A platform for creating and managing YouTube advertising campaigns, featuring custom video strategies, SEO optimization, audience targeting, and performance analytics to boost brand visibility.",
      challenge:
        "Businesses struggled to leverage YouTube’s vast audience for effective advertising, needing tailored video content and data-driven targeting to maximize engagement.",
      solution:
        "We developed a React.js and PHP-based platform on AWS, integrating video production tools, SEO optimization, audience targeting, and real-time analytics to enhance campaign performance.",
      technologies: ["Php", "React.js", "Amazon Web Services (AWS)"],
      results: [
        { metric: "65%", label: "Increase in video engagement" },
        { metric: "50%", label: "Improvement in ad reach" },
        { metric: "45%", label: "Growth in subscriber count" },
        { metric: "90%", label: "SEO optimization rate" },
      ],
      bgColor: "from-red-500 to-orange-600",
      testimonial: {
        quote:
          "The YouTube Ads platform transformed our video marketing, driving significant engagement and brand visibility with tailored campaigns.",
        author: "Sophie Evans",
        role: "Marketing Director, Calvin Carlo",
      },
      process: [
        {
          phase: "Discovery",
          description:
            "Analyzed YouTube’s advertising ecosystem and client marketing goals.",
          duration: "3 weeks",
        },
        {
          phase: "Design",
          description:
            "Created responsive designs with React.js, focusing on intuitive campaign management and video production tools.",
          duration: "5 weeks",
        },
        {
          phase: "Development",
          description:
            "Built the platform with PHP on AWS, integrating analytics and targeting tools.",
          duration: "10 weeks",
        },
        {
          phase: "Launch & Support",
          description:
            "Deployed with monitoring and provided ongoing support for campaign optimization.",
          duration: "4 weeks",
        },
      ],
      date: "26th Oct, 2021",
      location: "3/2/64 Mongus Street, UK",
      website: "www.yourdomain.com",
      projectCategory: [
        "Web App Development",
        "Web Design",
        "Software Development",
      ],
      servicesProvided: [
        "UX Design",
        "Web App Consultation",
        "Web App Development",
      ],
      skillsExpertise: {
        websiteTypes: ["SAAS", "Marketing Platforms"],
        softwareFrameworks: ["Php", "React.js"],
        cloudProviders: ["Amazon Web Services (AWS)"],
        backendProgrammingLanguages: ["Php"],
      },
      images: [
        "https://ilt-sa.com/assets/img/portfolio-pages/add.png",
        "https://ilt-sa.com/assets/img/portfolio-pages/add1.png",
        "https://ilt-sa.com/assets/img/portfolio-pages/add2.png",
        "https://ilt-sa.com/assets/img/portfolio-pages/add3.png",
        "https://ilt-sa.com/assets/img/portfolio-pages/add4.png",
        "https://ilt-sa.com/assets/img/portfolio-pages/add5.png",
        "https://ilt-sa.com/assets/img/portfolio-pages/add6.png",
        "https://ilt-sa.com/assets/img/portfolio-pages/add7.png",
      ],
    },
    {
      id: 17,
      title: "Repair Shop Platform",
      category: "web",
      client: "Calvin Carlo",
      year: "2021",
      description:
        "A responsive web platform for a mobile repair shop, featuring intuitive navigation, service booking forms, and real-time updates, built with Bootstrap and Laravel for a seamless user experience.",
      challenge:
        "Repair shops needed an efficient platform to manage bookings, customer interactions, and service updates, with a user-friendly interface accessible across devices.",
      solution:
        "We developed a Bootstrap and Laravel-based platform on AWS, integrating appointment scheduling, service management, and customer interaction tools to streamline operations.",
      technologies: ["Laravel", "Bootstrap", "PHP", "AWS"],
      results: [
        { metric: "60%", label: "Increase in booking efficiency" },
        { metric: "50%", label: "Improvement in customer satisfaction" },
        { metric: "70%", label: "Reduction in manual processes" },
        { metric: "100%", label: "Device compatibility" },
      ],
      bgColor: "from-green-500 to-blue-600",
      testimonial: {
        quote:
          "The Repair Shop platform streamlined our booking and service processes, making it easier for customers to engage with us across devices.",
        author: "Michael Harris",
        role: "Owner, Calvin Carlo",
      },
      process: [
        {
          phase: "Discovery",
          description:
            "Analyzed repair shop workflows and customer needs to define platform requirements.",
          duration: "3 weeks",
        },
        {
          phase: "Design",
          description:
            "Created responsive designs with Bootstrap, focusing on intuitive navigation and booking forms.",
          duration: "5 weeks",
        },
        {
          phase: "Development",
          description:
            "Built the platform with Laravel on AWS, integrating scheduling and customer management tools.",
          duration: "10 weeks",
        },
        {
          phase: "Launch & Support",
          description:
            "Deployed with monitoring and provided ongoing support for optimization.",
          duration: "4 weeks",
        },
      ],
      date: "26th Oct, 2021",
      location: "3/2/64 Mongus Street, UK",
      website: "www.yourdomain.com",
      projectCategory: [
        "Web App Development",
        "Web Design",
        "Software Development",
      ],
      servicesProvided: [
        "UX Design",
        "Web App Consultation",
        "Web App Development",
      ],
      skillsExpertise: {
        websiteTypes: ["SAAS", "Service Platforms"],
        softwareFrameworks: ["Laravel", "Bootstrap"],
        cloudProviders: ["Amazon Web Services (AWS)"],
        backendProgrammingLanguages: ["Php"],
      },
      images: [
        "https://ilt-sa.com/assets/img/portfolio-pages/repair-shop.png",
        "https://ilt-sa.com/assets/img/portfolio-pages/repairshop2.png",
        "https://ilt-sa.com/assets/img/portfolio-pages/repairshop4.png",
      ],
    },
    {
      id: 18,
      title: "Organ AI Healthcare Platform",
      category: "ai",
      client: "Calvin Carlo",
      year: "2021",
      description:
        "A groundbreaking AI platform for diagnosing and treating organ-related diseases, using medical imaging, patient data, and genetic information to provide accurate, real-time insights for healthcare professionals.",
      challenge:
        "Healthcare providers needed faster, more accurate tools for diagnosing organ-related diseases, facing challenges with manual analysis and delayed insights.",
      solution:
        "We developed Organ AI using Python, TensorFlow, and React.js on AWS, integrating advanced algorithms for imaging analysis, predictive monitoring, and personalized treatment recommendations.",
      technologies: ["Python", "TensorFlow", "React.js", "AWS"],
      results: [
        { metric: "70%", label: "Improvement in diagnostic accuracy" },
        { metric: "50%", label: "Reduction in diagnosis time" },
        { metric: "65%", label: "Increase in treatment personalization" },
        { metric: "95%", label: "Data processing accuracy" },
      ],
      bgColor: "from-blue-500 to-blue-600",
      testimonial: {
        quote:
          "Organ AI revolutionized our diagnostic process, enabling faster and more accurate treatment plans that significantly improved patient outcomes.",
        author: "Dr. Sarah Patel",
        role: "Chief Medical Officer, Calvin Carlo",
      },
      process: [
        {
          phase: "Discovery",
          description:
            "Analyzed healthcare needs and data requirements for organ disease diagnostics.",
          duration: "4 weeks",
        },
        {
          phase: "Design",
          description:
            "Created responsive designs with React.js, focusing on intuitive interfaces for clinicians.",
          duration: "6 weeks",
        },
        {
          phase: "Development",
          description:
            "Built the platform with Python and TensorFlow on AWS, integrating AI models and data processing.",
          duration: "12 weeks",
        },
        {
          phase: "Launch & Support",
          description:
            "Deployed with monitoring and provided ongoing support for optimization and compliance.",
          duration: "4 weeks",
        },
      ],
      date: "26th Oct, 2021",
      location: "3/2/64 Mongus Street, UK",
      website: "www.yourdomain.com",
      projectCategory: [
        "Web App Development",
        "Web Design",
        "Software Development",
      ],
      servicesProvided: [
        "UX Design",
        "Web App Consultation",
        "Web App Development",
      ],
      skillsExpertise: {
        websiteTypes: ["SAAS", "Healthcare Platforms"],
        softwareFrameworks: ["React.js", "TensorFlow"],
        cloudProviders: ["Amazon Web Services (AWS)"],
        backendProgrammingLanguages: ["Python"],
      },
      images: [
        "https://ilt-sa.com/assets/img/portfolio-pages/organ-1.png",
        "https://ilt-sa.com/assets/img/portfolio-pages/organ-2.png",
        "https://ilt-sa.com/assets/img/portfolio-pages/organ3.png",
        "https://ilt-sa.com/assets/img/portfolio-pages/organ4.png",
        "https://ilt-sa.com/assets/img/portfolio-pages/organ5.png",
        "https://ilt-sa.com/assets/img/portfolio-pages/organ6.png",
      ],
    },
  ];

  // Scroll handler for process section
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const progress = Math.max(0, Math.min(1, -rect.top / (rect.height - window.innerHeight)));
      const step = Math.floor(progress * processes.length);
      setActiveStep(step);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">

         <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="relative top-25 sm:top-25 z-1 flex items-center gap-2 sm:gap-4 ml-8 pt-10"
              >
                {/* Back Button */}
                <motion.button
                  onClick={() => navigate(-1)}
                  whileHover={{
                    x: -3,
                    backgroundColor: "rgba(59, 130, 246, 0.1)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-1 sm:gap-2 bg-white/80 backdrop-blur-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-gray-200 shadow-md hover:shadow-lg transition-all cursor-pointer"
                >
                  <ArrowLeft className="text-blue-500 w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="text-xs sm:text-sm font-medium text-gray-700">
                    Back
                  </span>
                </motion.button>
      
                {/* Current Page Indicator - Horizontal on desktop, vertical on mobile */}
                <div className="flex items-center gap-1 sm:gap-2">
                  <ChevronRight className="text-gray-400 w-4 h-4 hidden sm:block" />
      
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="bg-blue-50 text-blue-600 px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium border border-blue-100 shadow-sm whitespace-nowrap overflow-hidden text-ellipsis max-w-[120px] sm:max-w-none"
                  >
                    Case Study
                  </motion.div>
                </div>
              </motion.div>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-gray-50">
        <div 
          className="absolute inset-0 bg-cover bg-right bg-no-repeat "
          style={{
            backgroundImage: `url('https://invozone.com/static/product-eng-e45b4ac4f238c1334d58c816bc5c43f7.png')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-6 md:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl py-24 md:py-32"
          >
            <span className="inline-block px-4 py-2 text-sm font-semibold text-blue-600 bg-blue-100 rounded-full mb-6">
              Product Engineering Services
            </span>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 leading-tight mb-6">
              Engineering Products &<br />
              <span className="bg-gradient-to-r from-blue-600 to-blue-600 bg-clip-text text-transparent">
                Experiences
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mb-10 leading-relaxed">
              Got a product idea that excites you? We bring your vision to life, helping you realize its full market potential — no matter your budget or timeline.
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => navigate("/get-in-touch")}
              className="group inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-blue-600 text-white font-semibold text-lg px-8 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all cursor-pointer"
            >
              Speak To Us
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>
        </div>

        {/* Curved Bottom */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-20 md:h-32">
            <path d="M0,0 L300,60 C600,100 900,60 1200,30 L1200,120 L0,120 Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* SERVICES SECTION */}
      {/* <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div variants={fadeIn} initial="initial" whileInView="animate" viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              What's In It For You With <span className="text-blue-600">Dedicated Software</span> Teams?
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            <div className="space-y-3">
              {services.map((service) => (
                <motion.div
                  key={service.title}
                  whileHover={{ x: 8 }}
                  onClick={() => setSelectedService(service.title)}
                  className={`p-4 rounded-xl cursor-pointer transition-all ${
                    selectedService === service.title
                      ? "bg-blue-600 text-white shadow-lg"
                      : "bg-white text-gray-500 hover:text-blue-600 hover:shadow-md"
                  }`}
                >
                  <span className="font-bold text-lg">{service.title}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              key={selectedService}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white p-6 md:p-8 rounded-2xl shadow-lg"
            >
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{selectedService}</h3>
              <p className="text-gray-600 text-lg mb-6">
                {services.find(s => s.title === selectedService)?.description}
              </p>
              <ul className="space-y-3">
                {services.find(s => s.title === selectedService)?.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full" />
                    <span className="text-gray-700 font-medium">{f}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section> */}
      <ServicesSection/>

      {/* PROCESS SECTION */}
      <section ref={sectionRef} className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-4 py-2 text-sm font-semibold text-gray-700 bg-gray-100 rounded-full mb-4">
                Our Process
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                From Idea To Impact<br />
                <span className="text-blue-600">- Our Process</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                A comprehensive 9-step journey that transforms your vision into a successful, market-ready product.
              </p>

              <div className="flex items-center gap-4">
                <span className="text-sm font-bold text-gray-700">Step {Math.min(activeStep + 1, 9)} of 9</span>
                <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-blue-500 to-blue-600"
                    style={{ width: `${((activeStep + 1) / 9) * 100}%` }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </div>
            </motion.div>

            {/* Right: Animated Cards */}
            <div className="relative h-96 md:h-[500px] overflow-hidden">
              {processes.map((p, i) => {
                const Icon = p.icon;
                const isActive = activeStep === i;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.9, y: 50 }}
                    animate={{
                      opacity: isActive ? 1 : 0,
                      scale: isActive ? 1 : 0.85,
                      y: isActive ? 0 : 50,
                      zIndex: isActive ? 10 : 1
                    }}
                    className="absolute inset-0 p-6 md:p-8 bg-white rounded-2xl shadow-xl border-2 border-blue-500"
                    style={{ display: isActive ? 'block' : 'none' }}
                  >
                    <div className="flex gap-6 h-full">
                      <div className="flex-shrink-0">
                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${p.color} flex items-center justify-center`}>
                          <Icon className="text-white" />
                        </div>
                        <p className="text-2xl font-bold text-gray-900 mt-3">{p.step}</p>
                      </div>
                      <div>
                        <div className="flex justify-between items-start mb-3">
                          <h3 className="text-2xl font-bold text-gray-900">{p.title}</h3>
                          <span className="text-sm bg-gray-100 text-gray-600 px-3 py-1 rounded-full">{p.duration}</span>
                        </div>
                        <p className="text-gray-600 text-lg">{p.description}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Choose ITSOL As Your Product Engineering Company?
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-12" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: BarChart3, title: "300+ Products From Scratch", color: "blue" },
              { icon: Users, title: "Vetted Team Of Developers", color: "green" },
              { icon: Zap, title: "Project Rescue At All Stages", color: "orange" },
              { icon: TrendingUp, title: "Security Compliance", color: "purple" },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -8 }}
                className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all"
              >
                <div className={`w-16 h-16 bg-${item.color}-100 rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <item.icon className={`w-8 h-8 text-${item.color}-600`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {i === 0 && "Clients come to us with raw ideas and we give them a deliverable shape."}
                  {i === 1 && "Our developers pass rigorous screening to ensure quality."}
                  {i === 2 && "We fix buggy software and rescue failing projects."}
                  {i === 3 && "We adhere to strict security and compliance standards."}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => navigate("/get-in-touch")}
            className="mt-12 bg-gradient-to-r from-blue-600 to-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg"
          >
            Start Your Project Today
          </motion.button>
        </div>
      </section>

      {/* PROMISE */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              ITSOL's <span className="text-blue-600">Promise</span>
            </h2>
            <p className="text-lg text-gray-600">
              Our commitment is to deliver scalable, innovative, and future-ready solutions that empower your business.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {[
              "Continuously develop new products",
              "Advanced technological solutions",
              "Cost-efficient maintenance",
              "Effective portfolio management",
              "Feature optimization",
              "Regional adaptation",
            ].map((text, i) => (
              <div key={i} className="flex items-start gap-3 group">
                <div className="w-8 h-8 rounded-full bg-blue-100 border border-blue-200 flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                  <Check className="w-4 h-4 text-blue-600 group-hover:text-white" />
                </div>
                <p className="text-gray-700 font-medium">{text}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseStudies.map((study) => (
        <motion.div
  key={study.id}
  whileHover={{ scale: 1.03 }}
  onClick={() => navigate(`/case-study/${study.id}`)}
  className="group relative rounded-2xl overflow-hidden shadow-xl cursor-pointer h-80 bg-gray-900"
>
  {/* Image */}
  <img 
    src={study.images[0]} 
    alt={study.title} 
    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
  />

  {/* SOLID DARK OVERLAY */}
  <div className="absolute inset-0 bg-black/80" />

  {/* TEXT CONTENT (ON TOP) */}
  <div className="relative z-10 p-6 flex flex-col justify-end h-full text-white">
    <h3 className="text-2xl md:text-3xl font-bold mb-2 drop-shadow-2xl leading-tight">
      {study.title}
    </h3>
    <p className="text-sm md:text-base font-medium opacity-95 drop-shadow-lg line-clamp-2">
      {study.description}
    </p>
  </div>

  {/* HOVER ICON */}
  <button className="absolute top-4 right-4 bg-white/20 backdrop-blur-md p-2.5 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white/30 z-20">
    <LinkIcon className="w-5 h-5 text-white" />
  </button>
</motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Frequently <span className="text-blue-600">Asked</span> Questions
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto" />
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-6 rounded-2xl shadow-md"
              >
                <div className="flex gap-4">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg ${
                    i === 0 ? 'bg-blue-600' : i === 1 ? 'bg-green-600' : i === 2 ? 'bg-purple-600' : i === 3 ? 'bg-orange-600' : 'bg-teal-600'
                  }`}>
                    0{i + 1}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">FAQ Question {i + 1}</h3>
                    <p className="text-gray-600">Detailed answer goes here...</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudyDetail;