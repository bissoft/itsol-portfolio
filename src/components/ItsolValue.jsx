import React from 'react';
import { motion } from 'framer-motion';
import { Check, Shield, Clock, Zap, Layers, User } from 'lucide-react';

const values = [
    {
        icon: Shield,
        title: "100% IP Rights Transfer",
        description: "You own every line of code. We transfer all intellectual property rights to you immediately upon delivery."
    },
    {
        icon: Clock,
        title: "Timezone Overlap",
        description: "We align our working hours with yours to ensure seamless communication and real-time collaboration."
    },
    {
        icon: Zap,
        title: "Strict NDA & Security",
        description: "Your secrets are safe with us. We sign NDA before initial discussion and adhere to strict security protocols."
    },
    {
        icon: Layers,
        title: "Agile Process",
        description: "Development in two-week sprints gives you visibility and control over progress, priorities, and budget."
    },
    {
        icon: User,
        title: "Free Project Manager",
        description: "Get a dedicated Project Manager at no extra cost to handle logistics, reporting, and team coordination."
    },
    {
        icon: Layers, // Changed icon to avoid duplicate Use imports if needed, Layers is fine for DevOps
        title: "DevOps & QA Included",
        description: "We don't just code; we ensure quality and deployment readiness with integrated QA and DevOps practices."
    }
];

const ItsolValue = () => {
    return (
        <section className="py-24 bg-white relative">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight">
                            With ITSOL You Get <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">
                                More Than Just Code
                            </span>
                        </h2>
                        <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                            We provide a comprehensive ecosystem of services and guarantees to ensure your project's success. No hidden clauses, no surprises—just transparent, high-quality partnership.
                        </p>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.98 }}
                            className="px-8 py-4 bg-blue-600 text-white rounded-xl font-semibold text-lg shadow-lg hover:bg-blue-700 transition-all cursor-pointer"
                            onClick={() => window.open("https://calendly.com/etechnocrat/saas-app", "_blank")}
                        >
                            Start Your Project
                        </motion.button>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {values.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:bg-blue-50 hover:border-blue-200 transition-all duration-300 group"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="shrink-0 w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                        <item.icon size={20} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors">{item.title}</h3>
                                        <p className="text-sm text-gray-600 leading-relaxed">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ItsolValue;
