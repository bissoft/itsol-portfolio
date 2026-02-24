"use client";

import { motion } from "framer-motion";
import { HeartPulse, Stethoscope, Shield, Activity, Clock, Users, ArrowRight, ChevronDown, Check, Star, Award, Clipboard, Phone, Mail, MessageSquare, Code, Cloud, Lock, ChevronRight, ArrowLeft } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";

const Healthcare = () => {
    const [expandedFeature, setExpandedFeature] = useState<number | null>(null);
    const [hoveredProject, setHoveredProject] = useState<number | null>(null);
    const router = useRouter();

    // Stats Data
    const stats = [
        { value: "200+", label: "Healthcare Clients", icon: <HeartPulse className="text-blue-500" /> },
        { value: "40%", label: "Cost Reduction", icon: <Shield className="text-blue-500" /> },
        { value: "99.9%", label: "System Uptime", icon: <Activity className="text-blue-500" /> },
        { value: "24/7", label: "Support", icon: <Clock className="text-blue-500" /> }
    ];

    // Solutions Data
    const solutions = [
        {
            icon: <HeartPulse className="text-blue-500" />,
            title: "Telehealth Platforms",
            description: "Secure video consultation systems with EHR integration"
        },
        {
            icon: <Clipboard className="text-blue-500" />,
            title: "EHR/EMR Systems",
            description: "Custom electronic health record solutions"
        },
        {
            icon: <Shield className="text-blue-500" />,
            title: "Healthcare Security",
            description: "HIPAA-compliant data protection"
        },
        {
            icon: <Users className="text-blue-500" />,
            title: "Patient Portals",
            description: "Engaging patient experience platforms"
        }
    ];

    // Features Data
    const features = [
        {
            title: "Interoperability",
            description: "Seamless integration with existing healthcare systems",
            icon: <Activity className="text-blue-500" />
        },
        {
            title: "AI Diagnostics",
            description: "Machine learning for preliminary diagnosis",
            icon: <HeartPulse className="text-blue-500" />
        },
        {
            title: "Remote Monitoring",
            description: "IoT-enabled patient monitoring solutions",
            icon: <Shield className="text-blue-500" />
        },
        {
            title: "Analytics Dashboard",
            description: "Real-time healthcare analytics",
            icon: <Clipboard className="text-blue-500" />
        }
    ];

    // Case Studies Data
    const caseStudies = [
        {
            id: 1,
            title: "Telemedicine Platform",
            challenge: "Needed to launch telehealth services in 3 months",
            solution: "Developed custom platform with 50+ integrations",
            results: [
                "Launched in 11 weeks",
                "300+ providers onboarded",
                "40% cost savings"
            ]
        },
        {
            id: 2,
            title: "Hospital EHR System",
            challenge: "Legacy system causing inefficiencies",
            solution: "Modern cloud-based EHR with AI features",
            results: [
                "75% faster charting",
                "100% HIPAA compliance",
                "$2M annual savings"
            ]
        }
    ];

    // Testimonials Data
    const testimonials = [
        {
            quote: "Their healthcare platform reduced our patient no-show rate by 35% through automated reminders.",
            author: "Dr. Sarah Johnson",
            role: "CMO, Regional Hospital",
            rating: 5
        },
        {
            quote: "The custom EHR system has transformed how our providers work, saving hours each day.",
            author: "Michael Chen",
            role: "CIO, Healthcare Network",
            rating: 5
        }
    ];

    // Why Choose Us Data
    const whyChooseUs = [
        {
            icon: <Code className="text-blue-500" />,
            title: "Healthcare Specialists",
            description: "Developers with 10+ years in healthcare IT"
        },
        {
            icon: <Cloud className="text-blue-500" />,
            title: "Cloud-Native Solutions",
            description: "Scalable infrastructure for growing practices"
        },
        {
            icon: <Lock className="text-blue-500" />,
            title: "Security First",
            description: "HIPAA compliance built into every solution"
        },
        {
            icon: <Activity className="text-blue-500" />,
            title: "Proven Methodologies",
            description: "Agile development with healthcare best practices"
        }
    ];

    // Projects Data
    const projects = [
        {
            id: 1,
            title: "Virtual Care Platform",
            description: "End-to-end telehealth solution for multi-specialty clinics",
            tags: ["Telehealth", "EHR Integration", "Mobile App"],
            image: "/virtual-care.jpg"
        },
        {
            id: 2,
            title: "AI Diagnostic Assistant",
            description: "Machine learning platform for radiology image analysis",
            tags: ["AI/ML", "Radiology", "DICOM"],
            image: "/ai-diagnostic.jpg"
        },
        {
            id: 3,
            title: "Patient Engagement Portal",
            description: "Comprehensive patient communication and education system",
            tags: ["Patient Portal", "Mobile", "Education"],
            image: "/patient-portal.jpg"
        }
    ];

    return (
        <div className="min-h-screen bg-white text-gray-800">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="relative top-25 sm:top-25 z-1 flex items-center gap-2 sm:gap-4 ml-8 pt-10"
            >
                {/* Back Button */}
                <motion.button
                    onClick={() => router.back()}
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

                {/* Current Page Indicator - Horizontal on desktop, vertical on mobile */}
                <div className="flex items-center gap-1 sm:gap-2">
                    <ChevronRight className="text-gray-400 w-4 h-4 hidden sm:block" />

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                        className="bg-blue-50 text-blue-600 px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium border border-blue-100 shadow-sm whitespace-nowrap overflow-hidden text-ellipsis max-w-[120px] sm:max-w-none"
                    >
                        Healthcare
                    </motion.div>
                </div>
            </motion.div>
            {/* Hero Section */}
            <motion.section
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center relative overflow-hidden"
            >
                {/* Animated background elements */}
                <div className="absolute inset-0 overflow-hidden">
                    <motion.div
                        animate={{
                            x: [0, 100, 0],
                            y: [0, 50, 0],
                            transition: { duration: 20, repeat: Infinity, ease: "linear" }
                        }}
                        className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-100 rounded-full filter blur-3xl"
                    ></motion.div>
                    <motion.div
                        animate={{
                            x: [0, -100, 0],
                            y: [0, -50, 0],
                            transition: { duration: 25, repeat: Infinity, ease: "linear" }
                        }}
                        className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-blue-100 rounded-full filter blur-3xl"
                    ></motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="relative z-10"
                >
                    <motion.div
                        initial={{ y: -20 }}
                        animate={{ y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="mb-6 inline-block bg-gradient-to-r from-blue-100 to-blue-200 px-4 py-2 rounded-full backdrop-blur-sm border border-blue-200"
                    >
                        <p className="text-sm font-medium text-blue-600">HIPAA Compliant Solutions</p>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="text-4xl md:text-6xl font-bold mb-6"
                    >
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
                            Healthcare
                        </span> Technology Solutions
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        className="text-xl text-gray-600 max-w-3xl mx-auto mb-10"
                    >
                        Transform patient care with secure, interoperable digital health platforms
                    </motion.p>

                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <motion.button
                            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(59, 130, 246, 0.3)" }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-3 rounded-xl font-semibold text-lg flex items-center gap-2 shadow-lg cursor-pointer"
                            onClick={() => router.push('/portfolio')}
                        >
                            Explore Solutions <ArrowRight size={20} />
                        </motion.button>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-white border-2 border-blue-300 hover:border-blue-400 text-blue-500 px-8 py-3 rounded-xl cursor-pointer font-semibold text-lg hover:bg-blue-50"
                            onClick={() => router.push('/contact')}
                        >
                            Contact Experts
                        </motion.button>
                    </div>
                </motion.div>
            </motion.section>

            {/* Stats Section */}
            <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
            >
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 text-center hover:shadow-md transition-all"
                        >
                            <div className="flex justify-center mb-4">
                                <motion.div
                                    whileHover={{ scale: 1.1, rotate: 10 }}
                                    className="bg-blue-100 p-3 rounded-full"
                                >
                                    {stat.icon}
                                </motion.div>
                            </div>
                            <motion.p
                                initial={{ scale: 0.9 }}
                                whileInView={{ scale: 1 }}
                                viewport={{ once: true }}
                                className="text-3xl font-bold text-blue-600 mb-2"
                            >
                                {stat.value}
                            </motion.p>
                            <p className="text-gray-600">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>
            </motion.section>

            {/* Why Choose Us Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-gray-50">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl font-bold mb-4"
                    >
                        Why Choose ITSOL for Healthcare Development
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-gray-600 max-w-3xl mx-auto"
                    >
                        Specialized expertise to build secure, scalable healthcare solutions
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {whyChooseUs.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="bg-white p-8 rounded-xl border border-gray-200 hover:shadow-md transition-all"
                        >
                            <div className="bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                            <p className="text-gray-600">{item.description}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Solutions Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-white">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl font-bold mb-4"
                    >
                        Healthcare Solutions
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-gray-600 max-w-3xl mx-auto"
                    >
                        Custom digital health platforms designed for better patient outcomes
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {solutions.map((solution, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ scale: 1.02 }}
                            className="bg-gray-50 p-8 rounded-xl border border-gray-200 hover:shadow-md transition-all"
                        >
                            <div className="bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                                <motion.div
                                    whileHover={{ scale: 1.2, rotate: 15 }}
                                >
                                    {solution.icon}
                                </motion.div>
                            </div>
                            <h3 className="text-xl font-semibold mb-3">{solution.title}</h3>
                            <p className="text-gray-600">{solution.description}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Projects Showcase */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-gray-50">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl font-bold mb-4"
                    >
                        Our Healthcare Projects
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-gray-600 max-w-3xl mx-auto"
                    >
                        Innovative solutions transforming healthcare delivery
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.03 }}
                            onHoverStart={() => setHoveredProject(project.id)}
                            onHoverEnd={() => setHoveredProject(null)}
                            className="relative overflow-hidden rounded-xl shadow-md bg-white group"
                        >
                            {/* Project Image/Icon Area */}
                            <div className="h-64 bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center">
                                <div className="text-center p-6">
                                    {project.id === 1 && (
                                        <HeartPulse className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                                    )}
                                    {project.id === 2 && (
                                        <Activity className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                                    )}
                                    {project.id === 3 && (
                                        <Users className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                                    )}
                                    <h3 className="text-xl font-bold text-blue-800">{project.title}</h3>
                                </div>
                            </div>

                            {/* Hover Overlay */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: hoveredProject === project.id ? 1 : 0 }}
                                className="absolute inset-0 bg-gradient-to-br from-blue-700/90 to-blue-900/90 flex flex-col justify-end p-6 transition-opacity duration-300"
                            >
                                <div className="mb-4">
                                    <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                                    <p className="text-blue-100 mb-4">{project.description}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.map((tag, i) => (
                                            <span
                                                key={i}
                                                className="bg-blue-600/70 text-white px-3 py-1 rounded-full text-sm hover:bg-blue-500 transition-colors"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="mt-4 bg-white text-blue-700 px-4 py-2 rounded-lg font-medium flex items-center justify-center gap-2 cursor-pointer"
                                    onClick={() => router.push('/portfolio')}
                                >
                                    View Details <ArrowRight size={16} />
                                </motion.button>
                            </motion.div>

                            {/* Default Content */}
                            <div className="bg-white p-6 group-hover:invisible">
                                <div className="flex items-center gap-3 mb-3">
                                    {project.id === 1 && <HeartPulse className="text-blue-500" />}
                                    {project.id === 2 && <Activity className="text-blue-500" />}
                                    {project.id === 3 && <Users className="text-blue-500" />}
                                    <h3 className="text-xl font-semibold">{project.title}</h3>
                                </div>
                                <p className="text-gray-600 mb-4">{project.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag, i) => (
                                        <span
                                            key={i}
                                            className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-white">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl font-bold mb-4"
                    >
                        Key Features
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-gray-600 max-w-3xl mx-auto"
                    >
                        Advanced capabilities for modern healthcare delivery
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ scale: 1.02 }}
                            className="bg-white p-8 rounded-xl border border-gray-200 hover:shadow-md transition-all"
                        >
                            <div className="flex items-start gap-6">
                                <motion.div
                                    whileHover={{ scale: 1.1 }}
                                    className="bg-blue-100 p-3 rounded-lg"
                                >
                                    {feature.icon}
                                </motion.div>
                                <div>
                                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                                    <p className="text-gray-600">{feature.description}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Case Studies Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-gray-50">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl font-bold mb-4"
                    >
                        Healthcare Success Stories
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-gray-600 max-w-3xl mx-auto"
                    >
                        Proven results delivering transformative healthcare solutions
                    </motion.p>
                </div>

                <div className="space-y-6">
                    {caseStudies.map((caseStudy) => (
                        <motion.div
                            key={caseStudy.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-md transition-all"
                        >
                            <button
                                onClick={() => setExpandedFeature(expandedFeature === caseStudy.id ? null : caseStudy.id)}
                                className="w-full text-left p-8 hover:bg-blue-50 transition-colors flex justify-between items-center"
                            >
                                <div>
                                    <h3 className="text-xl font-bold mb-1">{caseStudy.title}</h3>
                                    <p className="text-gray-600">{caseStudy.challenge}</p>
                                </div>
                                <motion.div
                                    animate={{ rotate: expandedFeature === caseStudy.id ? 180 : 0 }}
                                >
                                    <ChevronDown className="text-blue-500" />
                                </motion.div>
                            </button>

                            {expandedFeature === caseStudy.id && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    exit={{ opacity: 0, height: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="px-8 pb-8"
                                >
                                    <div className="mb-6">
                                        <h4 className="font-semibold mb-2">Our Solution</h4>
                                        <p className="text-gray-600">{caseStudy.solution}</p>
                                    </div>

                                    <div>
                                        <h4 className="font-semibold mb-2">Results Achieved</h4>
                                        <ul className="space-y-3 text-gray-600">
                                            {caseStudy.results.map((result, i) => (
                                                <motion.li
                                                    key={i}
                                                    initial={{ opacity: 0, x: -20 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: i * 0.1 }}
                                                    className="flex items-start gap-2"
                                                >
                                                    <Check className="text-blue-500 mt-0.5 flex-shrink-0" size={16} />
                                                    <span>{result}</span>
                                                </motion.li>
                                            ))}
                                        </ul>
                                    </div>
                                </motion.div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-white">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl font-bold mb-4"
                    >
                        What Our Clients Say
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-gray-600 max-w-3xl mx-auto"
                    >
                        Trusted by healthcare organizations nationwide
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="bg-gray-50 p-8 rounded-xl border border-gray-200 hover:shadow-md transition-all"
                        >
                            <div className="flex mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <Star
                                        key={i}
                                        className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
                                            }`}
                                    />
                                ))}
                            </div>
                            <blockquote className="text-gray-600 italic mb-6">
                                "{testimonial.quote}"
                            </blockquote>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                                    <Users className="text-blue-500" />
                                </div>
                                <div>
                                    <h4 className="font-semibold">{testimonial.author}</h4>
                                    <p className="text-gray-500 text-sm">{testimonial.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <motion.div
                    initial={{ scale: 0.95 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-12 text-center relative overflow-hidden"
                >
                    {/* Animated background elements */}
                    <motion.div
                        animate={{
                            x: [0, 100, 0],
                            y: [0, 50, 0],
                            transition: { duration: 15, repeat: Infinity, ease: "linear" }
                        }}
                        className="absolute top-0 left-0 w-64 h-64 bg-blue-500/20 rounded-full filter blur-3xl"
                    ></motion.div>
                    <motion.div
                        animate={{
                            x: [0, -100, 0],
                            y: [0, -50, 0],
                            transition: { duration: 20, repeat: Infinity, ease: "linear" }
                        }}
                        className="absolute bottom-0 right-0 w-80 h-80 bg-blue-500/20 rounded-full filter blur-3xl"
                    ></motion.div>

                    <h2 className="text-3xl font-bold mb-4 text-white">Ready to Transform Healthcare Delivery?</h2>
                    <p className="text-blue-100 max-w-2xl mx-auto mb-8">
                        Our team specializes in building secure, scalable digital health solutions
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <motion.button
                            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(255, 255, 255, 0.3)" }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-white text-blue-700 px-8 py-4 rounded-lg font-semibold cursor-pointer"
                            onClick={() => router.push('/contact')}
                        >
                            Get Started
                        </motion.button>
                    </div>
                </motion.div>
            </section>
        </div>
    );
};

export default Healthcare;
