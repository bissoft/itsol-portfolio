import React from "react";
import { motion } from "framer-motion";

const stats = [
    { value: "17+", label: "YEARS ON MARKET" },
    { value: "800+", label: "PROFESSIONALS ON BOARD" },
    { value: "73%", label: "OF CLIENTS RETURN FOR LONG-TERM PARTNERSHIPS" },
    { value: "4", label: "GLOBAL OFFICES" },
];

const clients = [
    { name: "ConDoor Solutions", logo: "https://ilt-sa.com/assets/img/partners/gp07.jpg" },
    { name: "Superema", logo: "https://ilt-sa.com/assets/img/partners/gp02.jpg" },
    { name: "FAAC", logo: "https://ilt-sa.com/assets/img/partners/gp03.jpg" },
    { name: "CAME", logo: "https://ilt-sa.com/assets/img/partners/gp04.jpg" },
    { name: "Dormakaba", logo: "https://ilt-sa.com/assets/img/partners/gp05.jpg" },
    { name: "High Speed Door", logo: "https://ilt-sa.com/assets/img/partners/gp06.jpg" },
];

const CompanyStats = () => {
    return (
        <section className="relative bg-white text-gray-900 py-24 overflow-hidden border-b border-gray-100">

            {/* Subtle Grid Pattern - adjusted for white background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-50 pointer-events-none" />

            <div className="relative max-w-7xl mx-auto px-6 z-10">
                {/* Header Section */}
                <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10 mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-5xl font-bold leading-tight max-w-3xl text-gray-900"
                    >
                        Partnering for Digital Excellence & Growth.
                    </motion.h2>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="flex flex-col items-start lg:items-end gap-2"
                    >
                        <p className="text-gray-600 max-w-xs lg:text-right">
                            Delivering enterprise-grade software solutions that drive efficiency, scalability, and long-term success.
                        </p>
                        <button
                            onClick={() => window.location.href = '/get-in-touch'}
                            className="mt-4 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2 group cursor-pointer shadow-lg shadow-blue-600/20"
                        >
                            Work with us
                            <svg
                                className="w-4 h-4 transition-transform group-hover:translate-x-1"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </button>
                    </motion.div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 border-t border-gray-100 pt-16">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="flex flex-col gap-2"
                        >
                            <h3 className="text-5xl md:text-6xl font-bold text-blue-600">{stat.value}</h3>
                            <p className="text-sm font-semibold tracking-widest text-gray-500 uppercase max-w-[150px]">
                                {stat.label}
                            </p>
                        </motion.div>
                    ))}
                </div>
                {/* Client Logos */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    className="mt-20 flex flex-wrap justify-between items-center gap-8 opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                >
                    {clients.map((client, index) => (
                        <div key={index} className="w-32 h-16 flex items-center justify-center">
                            <img
                                src={client.logo}
                                alt={client.name}
                                className="w-full h-full object-contain opacity-80 hover:opacity-100 transition-opacity" // Removed brightness-0 invert
                                onError={(e) => e.target.style.display = 'none'}
                            />
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default CompanyStats;
