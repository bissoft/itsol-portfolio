import { motion } from "framer-motion";
import {
    Cloud, Server, Database, Code, Activity, Shield,
    ArrowRight, CheckCircle, Layers, BarChart2, Globe,
    ChevronRight, ArrowLeft, Zap, Monitor, Cpu, Network,
    Lock, GitBranch, Search, Lightbulb
} from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const PlatformConsulting = () => {
    const navigate = useNavigate();
    const [hoveredService, setHoveredService] = useState(null);
    const [activeStrategy, setActiveStrategy] = useState("migration");

    const platforms = [
        {
            id: "azure",
            name: "Microsoft Azure",
            icon: <Cloud className="text-blue-600" size={32} />,
            badge: "Gold Partner",
            description: "Unlock the full potential of Microsoft's cloud ecosystem with our expert Azure consulting services.",
            features: ["Cloud Migration", "Azure DevOps", "Serverless Computing", "Azure AI & ML"],
            path: "/devops-&-cloud"
        },
        {
            id: "aws",
            name: "Amazon Web Services",
            icon: <Server className="text-orange-500" size={32} />,
            badge: "Advanced Tier",
            description: "Optimize your infrastructure and performance with our certified AWS consulting and implementation.",
            features: ["AWS Architecture", "Lambda Functions", "EC2 Scaling", "S3 Storage Solutions"],
            path: "/devops-&-cloud"
        },
        {
            id: "salesforce",
            name: "Salesforce",
            icon: <Database className="text-blue-400" size={32} />,
            badge: "Consulting Partner",
            description: "Elevate customer relationships and sales operations with tailored Salesforce solutions.",
            features: ["CRM Customization", "Sales Cloud", "Service Cloud", "Automation Workflows"],
            path: "/get-in-touch"
        },
        {
            id: "adobe",
            name: "Adobe Experience",
            icon: <Layers className="text-red-500" size={32} />,
            badge: "Solution Partner",
            description: "Transform digital experiences and marketing workflows through Adobe Experience Cloud.",
            features: ["Content Management", "Analytics Integration", "Campaign Management", "Commerce Solutions"],
            path: "/ui-ux-design"
        },
        {
            id: "microsoft",
            name: "Microsoft 365",
            icon: <Monitor className="text-blue-500" size={32} />,
            badge: "Certified",
            description: "Seamlessly integrate productivity tools and collaboration platforms for your enterprise.",
            features: ["Teams Integration", "SharePoint Development", "Power Platform", "Security Compliance"],
            path: "/get-in-touch"
        },
        {
            id: "gcp",
            name: "Google Cloud",
            icon: <Globe className="text-green-500" size={32} />,
            badge: "Cloud Partner",
            description: "Leverage Google's data analytics and machine learning capabilities for business growth.",
            features: ["BigQuery Analytics", "Kubernetes Engine", "App Engine", "Cloud Functions"],
            path: "/devops-&-cloud"
        }
    ];

    const strategies = {
        migration: {
            title: "Cloud Migration",
            description: "Seamlessly move your on-premise infrastructure to the cloud with minimal downtime.",
            steps: ["Assessment", "Planning", "Migration", "Validation"],
            icon: <Cloud size={24} />
        },
        modernization: {
            title: "App Modernization",
            description: "Refactor legacy applications to leverage modern cloud-native architectures.",
            steps: ["Analysis", "Refactoring", "Containerization", "Orchestration"],
            icon: <Cpu size={24} />
        },
        optimization: {
            title: "Cost Optimization",
            description: "Analyze and reduce your cloud spend while improving performance.",
            steps: ["Audit", "Right-sizing", "Reserved Instances", "Monitoring"],
            icon: <BarChart2 size={24} />
        }
    };

    const processSteps = [
        {
            title: "Assessment",
            description: "We analyze your current infrastructure, identifying gaps and opportunities for improvement.",
            icon: Search,
            color: "bg-blue-100 text-blue-600"
        },
        {
            title: "Strategy",
            description: "Our architects design a tailored roadmap aligned with your business objectives.",
            icon: Lightbulb,
            color: "bg-purple-100 text-purple-600"
        },
        {
            title: "Implementation",
            description: "We execute the plan using best practices, ensuring security and scalability.",
            icon: Code,
            color: "bg-green-100 text-green-600"
        },
        {
            title: "Optimization",
            description: "Continuous monitoring and refinement to ensure peak performance and cost-efficiency.",
            icon: Activity,
            color: "bg-orange-100 text-orange-600"
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
                <motion.button
                    onClick={() => navigate(-1)}
                    whileHover={{ x: -3, backgroundColor: "rgba(59, 130, 246, 0.1)" }}
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
                        className="bg-blue-50 text-blue-600 px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium border border-blue-100 shadow-sm"
                    >
                        Platform Consulting
                    </motion.div>
                </div>
            </motion.div>

            {/* Hero Section */}
            <section className="relative py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center overflow-hidden">
                {/* Animated particles */}
                {[...Array(15)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute rounded-full bg-blue-300"
                        style={{
                            width: Math.random() * 10 + 5,
                            height: Math.random() * 10 + 5,
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`
                        }}
                        animate={{
                            y: [0, (Math.random() - 0.5) * 100],
                            x: [0, (Math.random() - 0.5) * 50],
                            opacity: [0.3, 0.8, 0.3],
                            transition: {
                                duration: Math.random() * 10 + 10,
                                repeat: Infinity,
                                repeatType: "reverse"
                            }
                        }}
                    />
                ))}

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
                        <p className="text-sm font-medium text-blue-600">Enterprise Platform Solutions</p>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
                    >
                        Mastering <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-600">Digital Platforms</span> for Business Growth
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
                    >
                        We align powerful enterprise platforms with your business strategy, ensuring seamless integration, optimization, and scalable success.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                        className="mt-12 flex justify-center gap-4"
                    >
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.98 }}
                            className="px-8 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold shadow-lg cursor-pointer flex items-center gap-2"
                            onClick={() => navigate('/get-in-touch')}
                        >
                            Consult an Expert <ArrowRight size={18} />
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.98 }}
                            className="px-8 py-3 rounded-xl bg-white border-2 border-blue-300 text-blue-500 font-semibold hover:bg-blue-50 cursor-pointer"
                            onClick={() => navigate('/case-studies')}
                        >
                            View Success Stories
                        </motion.button>
                    </motion.div>
                </motion.div>
            </section>

            {/* Platforms Grid */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Leading Platforms We Support</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                        Comprehensive consulting across the world's most powerful technology ecosystems
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {platforms.map((platform, index) => (
                        <motion.div
                            key={platform.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -10 }}
                            onHoverStart={() => setHoveredService(index)}
                            onHoverEnd={() => setHoveredService(null)}
                            className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-blue-300 transition-all shadow-sm hover:shadow-md relative overflow-hidden group h-full"
                        >
                            <div className="flex justify-between items-start mb-6">
                                <div className="bg-blue-50 p-4 rounded-xl w-16 h-16 flex items-center justify-center">
                                    {platform.icon}
                                </div>
                                <span className="bg-blue-100 text-blue-700 text-xs font-semibold px-2 py-1 rounded-full h-fit">
                                    {platform.badge}
                                </span>
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-gray-900">{platform.name}</h3>
                            <p className="text-gray-600 mb-6">{platform.description}</p>

                            <div className="space-y-2 mb-6">
                                {platform.features.map((feature, i) => (
                                    <div key={i} className="flex items-center gap-2 text-sm text-gray-500">
                                        <CheckCircle size={14} className="text-blue-500" />
                                        <span>{feature}</span>
                                    </div>
                                ))}
                            </div>

                            <div onClick={() => navigate(platform.path)} className="text-blue-500 text-sm font-medium flex items-center gap-1 cursor-pointer hover:underline">
                                Learn more <ChevronRight size={14} className="mt-0.5" />
                            </div>

                            {/* Hover visual */}
                            <motion.div
                                className="absolute right-4 top-4 opacity-0 group-hover:opacity-100 transition-opacity"
                                animate={{ rotate: hoveredService === index ? 90 : 0 }}
                            >
                                <ChevronRight className="text-blue-400" />
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Strategic Approach Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-slate-50 rounded-3xl my-16">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Strategic Consulting Areas</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Tailored strategies to address your specific infrastructure challenges
                    </p>
                </div>

                <div className="flex flex-col md:flex-row gap-8">
                    <div className="md:w-1/3 space-y-4">
                        {Object.keys(strategies).map((key) => (
                            <button
                                key={key}
                                onClick={() => setActiveStrategy(key)}
                                className={`w-full text-left p-6 rounded-xl transition-all flex items-center gap-4 cursor-pointer ${activeStrategy === key
                                    ? "bg-white shadow-md border-l-4 border-blue-500"
                                    : "bg-transparent hover:bg-white/50"
                                    }`}
                            >
                                <div className={`p-2 rounded-lg ${activeStrategy === key ? "bg-blue-100 text-blue-600" : "bg-gray-100 text-gray-500"}`}>
                                    {strategies[key].icon}
                                </div>
                                <div>
                                    <h3 className={`font-semibold ${activeStrategy === key ? "text-gray-900" : "text-gray-600"}`}>
                                        {strategies[key].title}
                                    </h3>
                                </div>
                            </button>
                        ))}
                    </div>

                    <div className="md:w-2/3">
                        <motion.div
                            key={activeStrategy}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3 }}
                            className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 h-full"
                        >
                            <h3 className="text-2xl font-bold mb-4">{strategies[activeStrategy].title}</h3>
                            <p className="text-gray-600 mb-8 text-lg">{strategies[activeStrategy].description}</p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {strategies[activeStrategy].steps.map((step, index) => (
                                    <div key={index} className="flex items-center gap-3 bg-blue-50 p-4 rounded-lg">
                                        <div className="bg-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">
                                            {index + 1}
                                        </div>
                                        <span className="font-medium text-gray-800">{step}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Consulting Process */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Engagement Model</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                        A proven framework for delivering platform excellence
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {processSteps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15 }}
                            className="relative"
                        >
                            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow relative z-10 h-full">
                                <div className={`w-14 h-14 rounded-2xl ${step.color} flex items-center justify-center mb-6`}>
                                    <step.icon size={28} />
                                </div>
                                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {step.description}
                                </p>
                            </div>

                            {/* Connector Line (Desktop) */}
                            {index < processSteps.length - 1 && (
                                <div className="hidden lg:block absolute top-1/2 left-full w-full h-0.5 bg-gray-200 transform -translate-y-1/2 -z-0">
                                    <div className="absolute right-0 -top-1.5 w-3 h-3 bg-gray-300 rounded-full" />
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Benefits / Why Us */}
            <section className="py-24 bg-gradient-to-br from-gray-900 to-blue-900 text-white rounded-3xl mx-4 sm:mx-6 lg:mx-8 mb-20 overflow-hidden relative">
                <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full filter blur-[100px]"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/20 rounded-full filter blur-[100px]"></div>

                <div className="relative z-10 max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Partner With Us?</h2>
                            <p className="text-blue-100 text-lg mb-8 leading-relaxed">
                                We don't just implement technology; we ensure it drives tangible business value.
                                Our team of certified experts brings deep industry knowledge to every project.
                            </p>

                            <div className="grid grid-cols-2 gap-6">
                                {[
                                    { label: "Certified Experts", value: "50+" },
                                    { label: "Successful Migrations", value: "200+" },
                                    { label: "Cost Savings", value: "30%" },
                                    { label: "Client Satisfaction", value: "98%" }
                                ].map((stat, i) => (
                                    <div key={i} className="border-l-4 border-blue-400 pl-4">
                                        <div className="text-3xl font-bold mb-1">{stat.value}</div>
                                        <div className="text-blue-200 text-sm">{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20">
                            <h3 className="text-xl font-bold mb-6">Our Commitment</h3>
                            <ul className="space-y-4">
                                {[
                                    "Vendor-agnostic recommendations",
                                    "Security-first implementation",
                                    "Knowledge transfer & training",
                                    "24/7 Support availability"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <div className="bg-blue-500 rounded-full p-1">
                                            <CheckCircle size={16} className="text-white" />
                                        </div>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <button
                                className="mt-8 w-full bg-white text-blue-900 py-3 rounded-lg font-bold hover:bg-blue-50 transition-colors cursor-pointer"
                                onClick={() => navigate('/get-in-touch')}
                            >
                                Schedule a Strategy Call
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-6">Ready to Optimize Your Stack?</h2>
                <div className="flex justify-center gap-4">
                    <button
                        onClick={() => navigate('/get-in-touch')}
                        className="text-blue-600 font-semibold hover:text-blue-700 flex items-center gap-2 cursor-pointer"
                    >
                        Contact Sales <ArrowRight size={18} />
                    </button>
                </div>
            </section>
        </div>
    );
};

export default PlatformConsulting;
