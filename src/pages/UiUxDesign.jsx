import { motion } from "framer-motion";
import {
    Palette, Layout, MousePointer, Smartphone, Zap, Users, Eye,
    ArrowRight, PenTool, Lightbulb, Monitor, Layers, Clock, Shield,
    ChevronRight, ArrowLeft
} from "lucide-react";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

const UiUxDesign = () => {
    const [activeTab, setActiveTab] = useState("tools");
    const [hoveredFeature, setHoveredFeature] = useState(null);
    const containerRef = useRef(null);
    const navigate = useNavigate();

    const features = [
        {
            icon: Layout,
            title: "User Interface Design",
            description: "Visually stunning interfaces that align with your brand identity",
            color: "from-blue-400 to-blue-600",
            path: "/web-app-development"
        },
        {
            icon: Users,
            title: "User Experience Research",
            description: "Deep insights into user behavior and needs through comprehensive research",
            color: "from-blue-400 to-blue-600",
            path: "/data-&-ai"
        },
        {
            icon: Smartphone,
            title: "Mobile-First Design",
            description: "Responsive designs optimized for all screen sizes and devices",
            color: "from-blue-400 to-blue-600",
            path: "/mobile-app-development"
        },
        {
            icon: PenTool,
            title: "Wireframing & Prototyping",
            description: "Rapid iteration and validation of design concepts",
            color: "from-blue-400 to-blue-600",
            path: "/product-engineering"
        },
        {
            icon: Eye,
            title: "Usability Testing",
            description: " rigorous testing to ensure intuitive experiences",
            color: "from-blue-400 to-blue-600",
            path: "/testing-approach"
        },
        {
            icon: Zap,
            title: "Design Systems",
            description: "Scalable component libraries for consistent product development",
            color: "from-blue-400 to-blue-600",
            path: "/web-app-development"
        }
    ];

    const tools = {
        tools: ["Figma", "Adobe XD", "Sketch", "InVision", "Zeplin", "Principle"],
        methodologies: ["Design Thinking", "Agile UX", "Lean UX", "Double Diamond", "User-Centered Design", "Atomic Design"],
        outputs: ["User Personas", "Journey Maps", "Wireframes", "Interactive Prototypes", "Design Specs", "Style Guides"]
    };

    const processSteps = [
        { title: "Empathize", description: "Understand user needs", icon: Users },
        { title: "Define", description: "State the problem", icon: Lightbulb },
        { title: "Ideate", description: "Generate solutions", icon: PenTool },
        { title: "Prototype", description: "Create mockups", icon: Layout },
        { title: "Test", description: "Validate with users", icon: Eye },
        { title: "Iterate", description: "Refine design", icon: Clock }
    ];

    const caseStudies = [
        {
            title: "Fintech App Redesign",
            description: "Improved user retention by 40% through intuitive navigation",
            impact: "40% Higher Retention",
            tags: ["Mobile App", "Figma", "User Research"],
            icon: Smartphone,
            color: "blue-400"
        },
        {
            title: "SaaS Dashboard",
            description: "Simplified complex data visualization for enterprise users",
            impact: "2x User Efficiency",
            tags: ["Web App", "Design System", "Data Viz"],
            icon: Monitor,
            color: "blue-500"
        },
        {
            title: "E-commerce Platform",
            description: "Optimized checkout flow reducing cart abandonment",
            impact: "25% More Sales",
            tags: ["UX Audit", "Prototyping", "A/B Testing"],
            icon: Palette,
            color: "blue-600"
        }
    ];

    return (
        <div className="min-h-screen bg-white text-gray-800 relative overflow-hidden pt-10">
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
                        UI/UX Design
                    </motion.div>
                </div>
            </motion.div>

            {/* Hero Section */}
            <section className="relative py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center overflow-hidden">
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-100 rounded-full filter blur-3xl"></div>
                    <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-blue-100 rounded-full filter blur-3xl"></div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative z-10"
                >
                    <motion.div
                        initial={{ y: -20 }}
                        animate={{ y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="mb-6 inline-block bg-gradient-to-r from-blue-100 to-blue-200 px-6 py-2 rounded-full backdrop-blur-sm border border-blue-200"
                    >
                        <p className="text-sm font-medium text-blue-600">Design Excellence</p>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
                    >
                        Crafting <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">User-Centric</span> Digital Experiences
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
                    >
                        We combine aesthetics with usability to create intuitive, engaging interfaces that users love and businesses rely on.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                        className="mt-12 flex justify-center gap-4"
                    >
                        <motion.button
                            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(59, 130, 246, 0.3)" }}
                            whileTap={{ scale: 0.98 }}
                            className="px-8 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 font-semibold shadow-lg flex items-center gap-2 text-white cursor-pointer"
                            onClick={() => navigate('/get-in-touch')}
                        >
                            Start Design Project <ArrowRight size={18} />
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.98 }}
                            className="px-8 py-3 rounded-xl border-blue-300 text-blue-500 border-2 font-semibold hover:bg-blue-50 flex items-center gap-2 cursor-pointer"
                            onClick={() => navigate('/case-studies')}
                        >
                            View Portfolio <ArrowRight size={18} />
                        </motion.button>
                    </motion.div>
                </motion.div>
            </section>

            {/* Interactive Features Grid */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Design Capabilities</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                        From research to prototype, we cover the entire design spectrum
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 * index }}
                            viewport={{ once: true }}
                            whileHover={{ y: -10 }}
                            onHoverStart={() => setHoveredFeature(index)}
                            onHoverEnd={() => setHoveredFeature(null)}
                            className="bg-white cursor-pointer p-8 rounded-2xl border border-gray-200 hover:border-blue-300 transition-all shadow-sm hover:shadow-md relative overflow-hidden group"
                        >
                            <div className="absolute inset-0 overflow-hidden">
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-r from-blue-50 to-blue-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                    initial={{ x: "-100%" }}
                                    whileHover={{ x: "100%" }}
                                    transition={{ duration: 1.5 }}
                                />
                            </div>

                            <div className="relative z-10">
                                <div className={`bg-gradient-to-r ${feature.color} p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-6`}>
                                    <motion.div whileHover={{ rotate: 10, scale: 1.1 }}>
                                        <feature.icon size={24} className="text-white" />
                                    </motion.div>
                                </div>
                                <h3 className="text-xl font-semibold mb-3 text-gray-800">{feature.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{feature.description}</p>

                                <motion.div
                                    className="mt-4"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: hoveredFeature === index ? 1 : 0 }}
                                >
                                    <div onClick={() => navigate(feature.path)} className="text-blue-600 text-sm font-medium flex items-center gap-1 cursor-pointer hover:underline">
                                        Learn more <ArrowRight size={14} />
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Design Tools & Methods */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-blue-50 rounded-3xl">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Tools & Methodologies</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                        We use industry-standard tools and proven methodologies
                    </p>
                </motion.div>

                <div className="max-w-4xl mx-auto">
                    <div className="flex justify-center mb-10 gap-2 flex-wrap">
                        {Object.keys(tools).map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`px-6 py-2 rounded-xl text-sm font-semibold capitalize transition-all cursor-pointer ${activeTab === tab ? "bg-blue-600 text-white shadow-md" : "bg-white text-gray-600 hover:bg-gray-100"
                                    }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>

                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className="grid grid-cols-2 md:grid-cols-3 gap-6"
                    >
                        {tools[activeTab].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.05 }}
                                className="bg-white p-4 rounded-lg border border-gray-200 text-center font-medium text-gray-700 shadow-sm"
                            >
                                {item}
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Design Process */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Design Process</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                        A structured approach to solving complex design challenges
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {processSteps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white p-6 rounded-xl border border-gray-200 hover:border-blue-300 transition-all text-center group"
                        >
                            <div className="w-16 h-16 mx-auto bg-blue-50 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                <step.icon size={28} className="text-blue-600" />
                            </div>
                            <div className="text-4xl font-bold text-gray-100 mb-2">0{index + 1}</div>
                            <h3 className="text-xl font-bold mb-2 text-gray-800">{step.title}</h3>
                            <p className="text-gray-600">{step.description}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Case Studies */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Work</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                        See how good design transforms business metrics
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {caseStudies.map((study, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-blue-300 transition-all shadow-sm group"
                        >
                            <div className={`h-48 bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center relative`}>
                                <study.icon size={48} className={`text-${study.color} opacity-80`} />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-2 text-gray-800">{study.title}</h3>
                                <p className="text-gray-600 mb-4">{study.description}</p>
                                <div className="flex items-center gap-2 mb-4 text-sm font-semibold text-blue-600">
                                    <Zap size={16} /> {study.impact}
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {study.tags.map((tag, i) => (
                                        <span key={i} className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <motion.div
                    initial={{ scale: 0.9 }}
                    whileInView={{ scale: 1 }}
                    transition={{ type: "spring" }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-3xl p-12 text-center relative overflow-hidden"
                >
                    {/* ...particles (reusing form other pages)... */}
                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Need a Design Refresh?</h2>
                        <p className="text-blue-100 max-w-2xl mx-auto mb-8 text-lg">
                            Let's create an interface that delights your users and drives conversions.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.98 }}
                                className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold hover:bg-blue-50 flex items-center justify-center gap-2 cursor-pointer"
                                onClick={() => navigate('/get-in-touch')}
                            >
                                Book a Design Audit <ArrowRight size={18} />
                            </motion.button>
                        </div>
                    </div>
                </motion.div>
            </section>
        </div>
    );
};

export default UiUxDesign;
