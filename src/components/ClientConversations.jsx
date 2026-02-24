import React from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import ItsolLogo from "../assets/unnamed__1_background.png"; // Correct logo from Navbar

const podcasts = [
    {
        title: "Scaling Global Commerce Architecture",
        partner: "Shopify",
        partnerLogo: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Shopify_logo_2018.svg",
        speakers: [
            { name: "Jessica Williams", role: "Shopify" },
            { name: "Daniel Reed", role: "Itsol" }
        ],
        // Using reliable placeholder with dark theme
        image: "https://placehold.co/600x800/111827/ffffff?text=Shopify+Talk",
    },
    {
        title: "Next-Gen Fintech Security Standards",
        partner: "Stripe",
        partnerLogo: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg",
        speakers: [
            { name: "Marcus Thorne", role: "Stripe" },
            { name: "Sophia Chen", role: "Itsol" }
        ],
        image: "https://placehold.co/600x800/111827/ffffff?text=Stripe+Talk",
    },
    {
        title: "Collaborative Workflows in the Cloud",
        partner: "Dropbox",
        partnerLogo: "https://upload.wikimedia.org/wikipedia/commons/7/78/Dropbox_Icon.svg",
        speakers: [
            { name: "Emily Blunt", role: "Dropbox" },
            { name: "Ryan Maxwell", role: "Itsol" }
        ],
        image: "https://placehold.co/600x800/111827/ffffff?text=Dropbox+Talk",
    },
    {
        title: "Asynchronous Communication at Scale",
        partner: "Slack",
        partnerLogo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Slack_icon_2019.svg",
        speakers: [
            { name: "Kevin Hart", role: "Slack" },
            { name: "Lisa Wong", role: "Itsol" }
        ],
        image: "https://placehold.co/600x800/111827/ffffff?text=Slack+Talk",
    }
];

const ClientConversations = () => {
    return (
        <section className="py-24 bg-white border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-6">

                <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                    <div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="text-3xl md:text-5xl font-bold text-gray-900 mb-6"
                        >
                            Conversations that <br /> go beyond the code
                        </motion.h2>
                        <div className="w-20 h-1 bg-blue-600 rounded-full"></div>
                    </div>
                    <button className="hidden md:flex items-center px-6 py-3 border border-gray-200 rounded-lg text-sm font-semibold hover:bg-gray-50 transition-colors">
                        View All Podcasts
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {podcasts.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="bg-gray-900 rounded-2xl overflow-hidden relative group cursor-pointer h-[400px] flex flex-col hover:shadow-2xl transition-shadow duration-300"
                        >
                            {/* Card Header */}
                            <div className="p-6 flex justify-between items-start z-10 relative">
                                <div className="flex items-center gap-3">
                                    {/* Partner Logo */}
                                    <img src={item.partnerLogo} alt={item.partner} className="h-6 w-auto brightness-0 invert" />
                                    <div className="h-4 w-[1px] bg-white/40"></div>

                                    {/* Itsol Logo - Fixed import matches Navbar */}
                                    <img src={ItsolLogo} alt="Itsol" className="h-6 w-auto brightness-0 invert object-contain" />

                                </div>
                                <span className="px-2 py-1 bg-white/20 backdrop-blur-sm rounded text-[10px] font-bold text-white uppercase tracking-wider">
                                    Podcast
                                </span>
                            </div>

                            {/* Speakers Visual */}
                            <div className="absolute inset-x-0 bottom-0 h-4/5 z-0">
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent z-10" />
                                <img
                                    src={item.image}
                                    alt="Speakers"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80"
                                />
                            </div>

                            {/* Content */}
                            <div className="mt-auto p-6 z-20 relative">
                                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mb-6 text-gray-900 shadow-lg group-hover:scale-110 transition-transform duration-300">
                                    <Play size={26} fill="currentColor" className="ml-1" />
                                </div>

                                <h3 className="text-xl font-bold text-white mb-2 leading-tight">
                                    {item.title}
                                </h3>

                                <div className="flex gap-2 text-blue-200 text-xs font-medium">
                                    <span>{item.speakers[0].name}</span>
                                    <span className="text-blue-400">|</span>
                                    <span>{item.speakers[1].name}</span>
                                </div>
                            </div>

                        </motion.div>
                    ))}
                </div>

                <div className="mt-8 text-center md:hidden">
                    <button className="px-6 py-3 border border-gray-200 text-gray-600 font-semibold rounded-lg hover:bg-gray-50 w-full">
                        View All Podcasts
                    </button>
                </div>

            </div>
        </section>
    );
};

export default ClientConversations;
