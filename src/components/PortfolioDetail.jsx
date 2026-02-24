import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Calendar, User, Code2, Layers, CheckCircle2, ArrowRight } from "lucide-react";

// Mock Data (in a real app, this would come from a context or API)
const projects = [
    {
        id: 1,
        title: "Amelia.ai",
        category: "Artificial Intelligence",
        client: "ILT Solutions",
        year: "2023",
        website: "https://amelia.ai",
        description: "An AI-powered virtual assistant transforming customer experience with advanced artificial intelligence for efficient and personalized support.",
        challenge: "Customer support teams were overwhelmed with repetitive queries, leading to long wait times and decreased customer satisfaction. The client needed a scalable solution to handle high volumes of interactions without compromising quality.",
        solution: "We developed a sophisticated NLP model capable of understanding context and sentiment. Integrated with the client's existing CRM, Amelia.ai can resolve 80% of common queries autonomously while seamlessly handing over complex issues to human agents.",
        technologies: ["Python", "TensorFlow", "React", "AWS", "Node.js"],
        results: [
            { label: "Response Time", value: "-90%" },
            { label: "Cost Savings", value: "40%" },
            { label: "CSAT Score", value: "4.8/5" }
        ],
        images: [
            "https://ilt-sa.com/assets/img/new/600x600_AgenticAI.jpg",
            "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        ]
    },
    // Fallback for other IDs just to show the layout
    {
        id: "default",
        title: "Project Showcase",
        category: "Web Development",
        client: "Global Tech",
        year: "2024",
        website: "#",
        description: "A transformative digital solution designed to optimize workflows and enhance user engagement through modern web technologies.",
        challenge: "The client struggled with legacy systems that were slow, non-responsive, and difficult to maintain. They needed a complete digital overhaul to remain competitive in a fast-paced market.",
        solution: "We re-architected the entire platform using a modern MERN stack, implementing a headless CMS for easy content management and a design system that ensures consistency across all digital touchpoints.",
        technologies: ["React", "Typescript", "Next.js", "Tailwind"],
        results: [
            { label: "Performance", value: "2x Faster" },
            { label: "User Growth", value: "+150%" },
            { label: "Retention", value: "85%" }
        ],
        images: [
            "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
            "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        ]
    }
];

const PortfolioDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    // Find project or use default
    const project = projects.find(p => p.id === Number(id)) || projects[1];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-white">
            {/* Navigation */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 h-20 flex items-center">
                <div className="max-w-7xl mx-auto px-6 w-full flex justify-between items-center">
                    <button
                        onClick={() => navigate(-1)}
                        className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors group"
                    >
                        <div className="p-2 rounded-full bg-gray-50 group-hover:bg-blue-50 transition-colors">
                            <ArrowLeft size={20} />
                        </div>
                        <span className="font-medium">Back to Portfolio</span>
                    </button>

                    <button className="bg-blue-600 text-white px-6 py-2.5 rounded-full text-sm font-semibold shadow-lg shadow-blue-500/30 hover:bg-blue-700 transition-all">
                        Start Your Project
                    </button>
                </div>
            </nav>

            {/* Hero Header */}
            <header className="pt-32 pb-20 px-6 bg-gradient-to-b from-gray-50 to-white">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-4xl"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-bold tracking-wide uppercase">
                                {project.category}
                            </span>
                            <span className="text-gray-400">•</span>
                            <span className="text-gray-600 font-medium">{project.year}</span>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-black text-gray-900 mb-8 leading-tight">
                            {project.title}
                        </h1>

                        <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl">
                            {project.description}
                        </p>
                    </motion.div>
                </div>
            </header>

            {/* Main Image */}
            <section className="px-6 -mt-10">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="max-w-7xl mx-auto rounded-3xl overflow-hidden shadow-2xl border border-gray-100 aspect-video relative group"
                >
                    <img
                        src={project.images[0]}
                        alt={project.title}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />
                </motion.div>
            </section>

            {/* Content Grid */}
            <section className="py-24 px-6">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">

                    {/* Sidebar / Info */}
                    <div className="lg:col-span-4 space-y-8">
                        <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                            <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
                                <Layers className="w-5 h-5 text-blue-600" /> Project Details
                            </h3>

                            <div className="space-y-6">
                                <div>
                                    <p className="text-sm text-gray-500 mb-1">Client</p>
                                    <p className="font-semibold text-gray-900 text-lg">{project.client}</p>
                                </div>
                                <div className="h-px bg-gray-200" />
                                <div>
                                    <p className="text-sm text-gray-500 mb-1">Timeline</p>
                                    <p className="font-semibold text-gray-900 text-lg">{project.year}</p>
                                </div>
                                <div className="h-px bg-gray-200" />
                                <div>
                                    <p className="text-sm text-gray-500 mb-1">Services</p>
                                    <p className="font-semibold text-gray-900 text-lg">{project.category}</p>
                                </div>
                            </div>

                            <a
                                href={project.website}
                                target="_blank"
                                rel="noreferrer"
                                className="mt-8 flex items-center justify-center gap-2 w-full bg-gray-900 text-white py-3 rounded-xl font-semibold hover:bg-gray-800 transition-all"
                            >
                                Visit Live Site <ExternalLink size={16} />
                            </a>
                        </div>

                        <div>
                            <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                                <Code2 className="w-5 h-5 text-blue-600" /> Tech Stack
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {project.technologies.map((tech, i) => (
                                    <span key={i} className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-600 hover:border-blue-400 hover:text-blue-600 transition-colors cursor-default">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="lg:col-span-8 space-y-16">

                        {/* Challenge */}
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">The Challenge</h2>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                {project.challenge}
                            </p>
                        </div>

                        {/* Solution */}
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Solution</h2>
                            <p className="text-lg text-gray-600 leading-relaxed mb-8">
                                {project.solution}
                            </p>
                            {/* Middle Image - Full Width of Col */}
                            <div className="rounded-2xl overflow-hidden shadow-lg mb-8">
                                <img src={project.images[1] || project.images[0]} alt="Solution Preview" className="w-full h-auto object-cover" />
                            </div>
                        </div>

                        {/* Results Stats */}
                        <div className="bg-blue-600 rounded-3xl p-10 text-white relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16" />

                            <h2 className="text-2xl font-bold mb-8 relative z-10 flex items-center gap-2">
                                <CheckCircle2 className="w-6 h-6 text-blue-200" /> Key Results
                            </h2>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
                                {project.results.map((res, i) => (
                                    <div key={i} className="border-l border-blue-400/50 pl-6">
                                        <p className="text-4xl md:text-5xl font-black mb-2">{res.value}</p>
                                        <p className="text-blue-100 font-medium">{res.label}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Next Project CTA */}
            <section className="bg-gray-50 border-t border-gray-200 py-24 px-6 text-center">
                <div className="max-w-2xl mx-auto">
                    <p className="text-gray-500 font-medium mb-4">Next Case Study</p>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 cursor-pointer hover:text-blue-600 transition-colors" onClick={() => navigate('/case-study/2')}>
                        Thomas Platform
                    </h2>
                    <button
                        onClick={() => navigate('/case-study/2')}
                        className="inline-flex items-center gap-2 text-blue-600 font-bold text-lg hover:gap-4 transition-all"
                    >
                        View Project <ArrowRight size={20} />
                    </button>
                </div>
            </section>

        </div>
    );
};

export default PortfolioDetail;
