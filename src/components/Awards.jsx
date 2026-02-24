import React from "react";
import { motion } from "framer-motion";
import { Award, ShieldCheck, Star, Zap } from "lucide-react";

const awards = [
    {
        title: "Top AI Innovator",
        organization: "Tech Excellence Awards",
        icon: Zap,
        color: "text-blue-600",
    },
    {
        title: "Best Software Agency",
        organization: "Clutch Global Leaders",
        icon: Star,
        color: "text-blue-600",
    },
    {
        title: "Fastest Growing Tech",
        organization: "Deloitte Fast 500",
        icon: Award,
        color: "text-blue-600",
    },
    {
        title: "Great Place to Work",
        organization: "Certified 2024-2025",
        icon: ShieldCheck,
        color: "text-blue-600",
    },
];

const certifications = [
    { name: "ISO 27001 Certified", desc: "Information Security Management" },
    { name: "ISO 9001 Certified", desc: "Quality Management Systems" },
    { name: "CMMI Level 3", desc: "Capability Maturity Model Integration" },
    { name: "GDPR Compliant", desc: "General Data Protection Regulation" },
];

const Awards = () => {
    return (
        <section className="py-24 bg-white border-b border-gray-100 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">

                {/* Header */}
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-3xl md:text-5xl font-bold text-gray-900 mb-6"
                    >
                        We’ve been recognized by <br className="hidden md:block" /> the best, year after year.
                    </motion.h2>
                    <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
                </div>

                {/* Awards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-gray-100 border-t border-b border-gray-100">
                    {awards.map((award, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="p-10 flex flex-col items-center text-center group hover:bg-gray-50 transition-colors duration-300"
                        >
                            <div className={`w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center mb-6 border border-blue-100 group-hover:border-blue-200 group-hover:scale-110 transition-all duration-300 ${award.color}`}>
                                <award.icon size={32} className={award.color} />
                            </div>
                            <h3 className="text-sm font-bold tracking-widest text-gray-400 uppercase mb-2">
                                {award.organization}
                            </h3>
                            <p className="text-xl font-bold text-gray-900 leading-tight">
                                {award.title}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Certifications Row */}
                <div className="mt-4 flex flex-wrap justify-center gap-x-12 gap-y-8">
                    {certifications.map((cert, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 + (index * 0.1), duration: 0.6 }}
                            className="flex items-center gap-3 opacity-60 hover:opacity-100 transition-opacity duration-300"
                        >
                            <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                            <div className="text-left">
                                <p className="text-sm font-bold text-gray-900 uppercase tracking-wider">{cert.name}</p>
                                <p className="text-xs text-gray-500 hidden sm:block">{cert.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Awards;
