

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import {
  Code,
  MonitorSmartphone,
  Rocket,
  Globe,
  ArrowRight,
  ChevronDown,
  CheckCircle,
  LayoutGrid,
  Cpu,
  Smartphone,
  Cloud,
  Users,
  Lightbulb,
  ArrowLeft,
  Palette,
  ChevronRight,
  Link as LinkIcon,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const CaseStudies = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [expandedProject, setExpandedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState({});
  const navigate = useNavigate();
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -200]);

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.5 },
        scale: { duration: 0.5 },
      },
    },
    exit: (direction) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.95,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.5 },
        scale: { duration: 0.5 },
      },
    }),
  };


  // Case study data
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
      bgColor: "from-indigo-500 to-blue-600",
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
      projectCategory: ["Web App Development", "Web Design", "Software Development"],
      servicesProvided: ["UX Design", "Web App Consultation", "Web App Development"],
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
      servicesProvided: ["UI/UX Design", "Web Development", "Database Integration"],
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
      bgColor: "from-purple-500 to-indigo-600",
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
      projectCategory: ["Web App Development", "Web Design", "Software Development"],
      servicesProvided: ["UX Design", "Web App Consultation", "Web App Development"],
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
      projectCategory: ["Web App Development", "Web Design", "Software Development"],
      servicesProvided: ["UX Design", "Web App Consultation", "Web App Development"],
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
      servicesProvided: ["UI/UX Design", "Web Development", "Content Management"],
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
      servicesProvided: ["UI/UX Design", "Web Development", "Community Features"],
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
      bgColor: "from-blue-500 to-indigo-600",
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
      servicesProvided: ["UI/UX Design", "Web Development", "E-Signature Integration"],
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
      projectCategory: ["Web App Development", "Web Design", "Software Development"],
      servicesProvided: ["UX Design", "Web App Consultation", "Web App Development"],
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
      servicesProvided: ["Custom Software Development", "Web & Mobile Development", "API Integration", "Cloud Management"],
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
      projectCategory: ["Web App Development", "Web Design", "Software Development"],
      servicesProvided: ["UX Design", "Web App Consultation", "Web App Development"],
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
      technologies: ["Php", "React.js", "Amazon Web Services (AWS)", "Blockchain"],
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
      projectCategory: ["Web App Development", "Web Design", "Software Development"],
      servicesProvided: ["UX Design", "Web App Consultation", "Web App Development"],
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
      projectCategory: ["Web App Development", "Web Design", "Software Development"],
      servicesProvided: ["UX Design", "Web App Consultation", "Web App Development"],
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
      projectCategory: ["Web App Development", "Web Design", "Software Development"],
      servicesProvided: ["UX Design", "Web App Consultation", "Web App Development"],
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
      bgColor: "from-blue-500 to-indigo-600",
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
      projectCategory: ["Web App Development", "Web Design", "Software Development"],
      servicesProvided: ["UX Design", "Web App Consultation", "Web App Development"],
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

  const filteredCaseStudies =
    activeCategory === "all"
      ? caseStudies
      : caseStudies.filter((study) => study.category === activeCategory);

  const categories = [
    { id: "all", name: "All Industries", icon: <LayoutGrid /> },
    { id: "ai", name: "AI Solutions", icon: <Cpu /> },
    { id: "web", name: "Web Platforms", icon: <MonitorSmartphone /> },
  ];

  const stats = [
    { value: "140+", label: "Projects Completed", icon: <CheckCircle /> },
    { value: "98%", label: "Client Satisfaction", icon: <CheckCircle /> },
    { value: "30+", label: "Industries Served", icon: <Globe /> },
    { value: "20M+", label: "Users Impacted", icon: <Users /> },
  ];


  const toggleProject = (id) => {
    setExpandedProject(expandedProject === id ? null : id);
    if (!currentImageIndex[id]) {
      setCurrentImageIndex(prev => ({ ...prev, [id]: 0 }));
    }
  };

  const handleImageNext = (id) => {
    const images = filteredCaseStudies.find(s => s.id === id)?.images || [];
    setCurrentImageIndex(prev => ({
      ...prev,
      [id]: (prev[id] || 0) === images.length - 1 ? 0 : (prev[id] || 0) + 1
    }));
  };

  const handleImagePrev = (id) => {
    const images = filteredCaseStudies.find(s => s.id === id)?.images || [];
    setCurrentImageIndex(prev => ({
      ...prev,
      [id]: (prev[id] || 0) === 0 ? images.length - 1 : (prev[id] || 0) - 1
    }));
  };

  const placeholderImage = "https://via.placeholder.com/600x400.png?text=Project+Image";

  return (
    <div className="min-h-screen bg-white text-gray-800" ref={containerRef}>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="relative top-25 sm:top-25 z-1 flex items-center gap-2 sm:gap-4 ml-8 pt-10"
      >
        <motion.button
          onClick={() => navigate(-1)}
          whileHover={{
            x: -3,
            backgroundColor: "rgba(59, 130, 246, 0.1)"
          }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-1 sm:gap-2 bg-white/80 backdrop-blur-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-gray-200 shadow-md hover:shadow-lg transition-all cursor-pointer"
        >
          <ArrowLeft className="text-blue-500 w-4 h-4 sm:w-5 sm:h-5" />
          <span className="text-xs sm:text-sm font-medium text-gray-700">Back</span>
        </motion.button>

        <div className="flex items-center gap-1 sm:gap-2">
          <ChevronRight className="text-gray-400 w-4 h-4 hidden sm:block" />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="bg-blue-50 text-blue-600 px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium border border-blue-100 shadow-sm whitespace-nowrap overflow-hidden text-ellipsis max-w-[120px] sm:max-w-none"
          >
            Case Studies
          </motion.div>
        </div>
      </motion.div>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 to-white">
        <motion.div
          style={{ y: y1 }}
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-100 rounded-full filter blur-3xl opacity-70"
        />
        <motion.div
          style={{ y: y2 }}
          className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-blue-100 rounded-full filter blur-3xl opacity-70"
        />

        <div className="relative z-10 max-w-7xl mx-auto px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-8"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center bg-gradient-to-r from-blue-100 to-blue-200 px-6 py-2 rounded-full backdrop-blur-sm border border-blue-200"
            >
              <Rocket className="mr-2 text-blue-600" size={18} />
              <p className="text-sm font-medium text-blue-600">Case Studies</p>
            </motion.div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"

          >
            <span className="inline-block">
              <motion.span
                className="inline-block"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                Transformative
              </motion.span>
            </span>{" "}
            <motion.span
              className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              Success Stories
            </motion.span>
          </motion.h1>


          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-10"
          >
            Explore our portfolio of impactful digital transformations across industries. Each case study demonstrates our approach to solving complex challenges with innovative technology solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="flex justify-center gap-4"
          >
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 25px -10px rgba(59, 130, 246, 0.5)"
              }}
              whileTap={{ scale: 0.98 }}
              className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg flex items-center gap-2 shadow-xl cursor-pointer"
              onClick={() => window.scrollTo({ top: 800, behavior: 'smooth' })}
            >
              View Case Studies <ArrowRight size={20} />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-28 relative">
        <div className="max-w-7xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              <span className="text-gray-800">Featured </span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
                Case Studies
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Dive into our most impactful projects and the transformative results we’ve delivered for our clients.
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${activeCategory === category.id
                    ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg"
                    : "bg-white text-gray-700 hover:bg-blue-50 border border-gray-200"
                  }`}
              >
                {category.icon}
                {category.name}
              </motion.button>
            ))}
          </motion.div>

          {/* Case Studies Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredCaseStudies.map((study) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6 }}
                className="group bg-white/80 backdrop-blur-md rounded-2xl overflow-hidden border border-gray-200/50 relative"
                whileHover={{ scale: 1.03, boxShadow: "0 0 25px rgba(59, 130, 246, 0.35)" }}
              // Remove onClick from card → let button handle expand
              >
                {/* IMAGE + OVERLAY + TEXT */}
                <div
                  className="relative h-80 md:h-96 overflow-hidden cursor-pointer"
                  onClick={() => navigate(`/case-study/${study.id}`)} // Only image navigates
                >
                  <img
                    src={study.images[0] || placeholderImage}
                    alt={study.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  {/* DARK OVERLAY */}
                  <div className="absolute inset-0 bg-black/75" />

                  {/* TEXT */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-end text-white z-10">
                    <h3 className="text-2xl md:text-3xl font-extrabold mb-2 drop-shadow-2xl leading-tight">
                      {study.title}
                    </h3>
                    <p className="text-base md:text-lg font-medium text-white/95 drop-shadow-lg line-clamp-3">
                      {study.description.substring(0, 150)}...
                    </p>
                  </div>

                  <button className="absolute top-4 right-4 bg-white/20 backdrop-blur-md p-2.5 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white/30 z-20">
                    <LinkIcon className="w-5 h-5 text-white" />
                  </button>
                </div>

                {/* EXPANDED CONTENT */}
                <AnimatePresence>
                  {expandedProject === study.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                      className="p-8 bg-white/95 backdrop-blur-md border-t border-gray-200/50"
                      onClick={(e) => e.stopPropagation()} // Prevent close on content click
                    >
                      {/* IMAGE CAROUSEL */}
                      {study.images.length > 0 && (
                        <div className="relative h-64 mb-8 overflow-hidden rounded-xl bg-gray-100">
                          <AnimatePresence initial={false}>
                            <motion.img
                              key={currentImageIndex[study.id] || 0}
                              src={study.images[currentImageIndex[study.id] || 0]}
                              alt={`${study.title} screenshot`}
                              className="absolute inset-0 w-full h-full object-cover rounded-xl"
                              initial={{ x: 300, opacity: 0 }}
                              animate={{ x: 0, opacity: 1 }}
                              exit={{ x: -300, opacity: 0 }}
                              transition={{ duration: 0.5 }}
                              onError={(e) => { e.target.src = placeholderImage; }}
                            />
                          </AnimatePresence>

                          {study.images.length > 1 && (
                            <>
                              <motion.button
                                onClick={(e) => { e.stopPropagation(); handleImagePrev(study.id); }}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg z-10"
                              >
                                <ArrowLeft className="text-blue-600" size={18} />
                              </motion.button>

                              <motion.button
                                onClick={(e) => { e.stopPropagation(); handleImageNext(study.id); }}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg z-10"
                              >
                                <ChevronRight className="text-blue-600" size={18} />
                              </motion.button>

                              <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
                                {study.images.map((_, index) => (
                                  <motion.button
                                    key={index}
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      setCurrentImageIndex(prev => ({ ...prev, [study.id]: index }));
                                    }}
                                    className={`w-3 h-3 rounded-full transition-all ${index === (currentImageIndex[study.id] || 0)
                                        ? 'bg-blue-600 w-8'
                                        : 'bg-white/60'
                                      }`}
                                    whileHover={{ scale: 1.4 }}
                                  />
                                ))}
                              </div>
                            </>
                          )}
                        </div>
                      )}

                      {/* CONTENT GRID */}
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div>
                          <h4 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-blue-200 pb-2">The Challenge</h4>
                          <p className="text-gray-700 leading-relaxed">{study.challenge}</p>

                          <h4 className="text-2xl font-bold text-gray-800 mt-6 mb-4 border-b-2 border-blue-200 pb-2">Our Solution</h4>
                          <p className="text-gray-700 leading-relaxed">{study.solution}</p>

                          <h4 className="text-2xl font-bold text-gray-800 mt-6 mb-4 border-b-2 border-blue-200 pb-2">Technologies Used</h4>
                          <div className="flex flex-wrap gap-3">
                            {study.technologies.map((tech, i) => (
                              <span key={i} className="bg-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-sm font-semibold shadow-sm">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h4 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-blue-200 pb-2">Key Results</h4>
                          <div className="grid grid-cols-2 gap-4">
                            {study.results.map((result, i) => (
                              <div key={i} className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-xl shadow-sm">
                                <p className="font-bold text-blue-700 text-xl">{result.metric}</p>
                                <p className="text-gray-600 text-sm">{result.label}</p>
                              </div>
                            ))}
                          </div>

                          <h4 className="text-2xl font-bold text-gray-800 mt-6 mb-4 border-b-2 border-blue-200 pb-2">Client Testimonial</h4>
                          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-5 rounded-xl shadow-sm">
                            <p className="italic text-gray-700 leading-relaxed">"{study.testimonial.quote}"</p>
                            <p className="font-bold text-blue-700 mt-3">{study.testimonial.author}</p>
                            <p className="text-gray-600">{study.testimonial.role}</p>
                          </div>
                        </div>
                      </div>

                      {/* CLOSE BUTTON */}
                      <div className="mt-8 text-center">
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="bg-red-600 hover:bg-red-700 text-white py-3 px-8 rounded-xl font-bold shadow-lg"
                          onClick={(e) => {
                            e.stopPropagation();
                            setExpandedProject(null);
                          }}
                        >
                          Close
                        </motion.button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-28 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-blue-100 rounded-full filter blur-3xl opacity-20"></div>
          <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-blue-100 rounded-full filter blur-3xl opacity-20"></div>
        </div>

        <div className="max-w-7xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              <span className="text-gray-800">Our </span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
                Methodology
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven approach that delivers exceptional results at every stage of your digital transformation.
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 h-full w-0.5 bg-gradient-to-b from-blue-500 to-blue-300 transform -translate-x-1/2 hidden lg:block"></div>

            {/* Process steps */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {[
                {
                  title: "Discovery & Strategy",
                  description: "We conduct in-depth research to understand your business objectives, user needs, and technical requirements. Our team delivers a comprehensive roadmap with clear milestones, KPIs, and success metrics.",
                  icon: <Lightbulb className="text-blue-500" />,
                  side: "left",
                  features: [
                    "Stakeholder interviews",
                    "Competitive analysis",
                    "Technical audit",
                    "Roadmap development"
                  ]
                },
                {
                  title: "Design & Prototyping",
                  description: "Our designers craft intuitive user experiences with pixel-perfect interfaces. We create interactive prototypes for user testing and validation before development begins.",
                  icon: <Palette className="text-blue-500" />,
                  side: "right",
                  features: [
                    "User journey mapping",
                    "Wireframing",
                    "High-fidelity designs",
                    "Interactive prototypes"
                  ]
                },
                {
                  title: "Development & Testing",
                  description: "Our engineers implement solutions using agile methodologies with continuous integration and quality assurance. We maintain transparent communication throughout the development process.",
                  icon: <Code className="text-blue-500" />,
                  side: "left",
                  features: [
                    "Agile sprints",
                    "Code reviews",
                    "Automated testing",
                    "Performance optimization"
                  ]
                },
                {
                  title: "Launch & Optimization",
                  description: "We deploy solutions with comprehensive monitoring and analytics. Post-launch, we provide iterative improvements based on user feedback and data-driven insights.",
                  icon: <Rocket className="text-blue-500" />,
                  side: "right",
                  features: [
                    "Phased rollout",
                    "Real-time monitoring",
                    "Performance tuning",
                    "Continuous improvement"
                  ]
                }
              ].map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: step.side === "left" ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className={`relative ${step.side === "left" ? "lg:pr-8" : "lg:pl-8"}`}
                >
                  <div className={`absolute top-6 ${step.side === "left" ? "lg:-right-1" : "lg:-left-1"} hidden lg:block`}>
                    <div className="w-4 h-4 bg-blue-500 rounded-full border-4 border-white"></div>
                  </div>
                  <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-lg hover:shadow-xl transition-all h-full">
                    <div className={`flex ${step.side === "left" ? "lg:justify-end" : ""} mb-6`}>
                      <div className="bg-blue-100 p-4 rounded-full">
                        {step.icon}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                    <p className="text-gray-600 mb-6">{step.description}</p>
                    <div className="space-y-3">
                      {step.features.map((feature, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <CheckCircle className="text-blue-500 mt-0.5 flex-shrink-0" size={16} />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-20">
        <motion.div
          initial={{ scale: 0.95 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-3xl p-12 text-center relative overflow-hidden max-w-7xl mx-auto"
        >
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              className="absolute -top-32 -left-32 w-64 h-64 bg-blue-400/20 rounded-full filter blur-3xl"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              className="absolute -bottom-32 -right-32 w-80 h-80 bg-blue-400/20 rounded-full filter blur-3xl"
            />
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-6 relative z-10 text-white"

          >
            Ready to Start Your Digital Transformation?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-blue-100 text-xl max-w-3xl mx-auto mb-8 relative z-10"

          >
            Let’s collaborate to achieve transformative results tailored to your vision.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row justify-center gap-4 relative z-10"
          >
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 25px -10px rgba(255, 255, 255, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg shadow-xl cursor-pointer"
              onClick={() => navigate("/get-in-touch")}
            >
              Get a Free Consultation
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.2)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg cursor-pointer"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              Explore More Case Studies
            </motion.button>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

export default CaseStudies;