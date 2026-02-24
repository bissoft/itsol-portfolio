import React, { useRef } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";

const insights = [
    {
        type: "Whitepaper",
        title: "An Executive Guide to Cloud Cost Optimization for Businesses",
        category: "Cloud Computing",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
    },
    {
        type: "Webinar",
        title: "How Agentic AI Is Changing Business Workflows",
        category: "Artificial Intelligence",
        image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2000&auto=format&fit=crop",
    },
    {
        type: "Article",
        title: "The Ultimate Guide To Performance Optimization in 2026",
        category: "Engineering",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    },
    {
        type: "Whitepaper",
        title: "C-Suite Guide to AI for Businesses in 2026",
        category: "Strategy",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
    },
    {
        type: "Webinar",
        title: "Proven Framework for Business Control & Spending",
        category: "Finance",
        image: "https://images.unsplash.com/photo-1554224155-9736b5cb7a55?q=80&w=2072&auto=format&fit=crop",
    }
];

const Insights = () => {
    const scrollRef = useRef(null);

    const scroll = (direction) => {
        if (scrollRef.current) {
            const { current } = scrollRef;
            const scrollAmount = 400;
            if (direction === "left") {
                current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
            } else {
                current.scrollBy({ left: scrollAmount, behavior: "smooth" });
            }
        }
    }

    return (
        <section className="py-24 bg-white border-t border-gray-100">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="text-3xl md:text-5xl font-bold text-gray-900 mb-4"
                        >
                            Latest insights & resources
                        </motion.h2>
                        <div className="w-20 h-1 bg-blue-600 rounded-full"></div>
                    </div>

                    <div className="flex gap-3">
                        <button className="hidden md:flex items-center gap-2 px-6 py-3 border border-gray-200 rounded-full text-sm font-semibold hover:bg-gray-50 transition-colors mr-4">
                            View All Insights <ArrowUpRight size={16} />
                        </button>
                        <button onClick={() => scroll('left')} className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors group">
                            <ArrowLeft size={20} className="text-gray-600 group-hover:text-blue-600" />
                        </button>
                        <button onClick={() => scroll('right')} className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors group">
                            <ArrowRight size={20} className="text-gray-600 group-hover:text-blue-600" />
                        </button>
                    </div>
                </div>

                <div
                    ref={scrollRef}
                    className="flex gap-8 overflow-x-auto pb-8 snap-x"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {insights.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="min-w-[320px] md:min-w-[400px] snap-start group cursor-pointer"
                        >
                            <div className="relative h-64 mb-6 overflow-hidden rounded-2xl bg-gray-100">
                                <div className="absolute inset-0 bg-blue-900/10 group-hover:bg-blue-900/0 transition-colors z-10" />
                                {/* Image */}
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />

                                {/* Overlay with type */}
                                <div className="absolute top-4 left-4 z-20">
                                    <span className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm ${item.type === 'Whitepaper' ? 'bg-white text-gray-900' :
                                            item.type === 'Webinar' ? 'bg-red-500 text-white' :
                                                'bg-blue-600 text-white'
                                        }`}>
                                        {item.type}
                                    </span>
                                </div>
                            </div>

                            <div className="pr-4">
                                <div className="flex items-center gap-2 mb-3">
                                    <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                                    <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">{item.category}</span>
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors leading-snug">
                                    {item.title}
                                </h3>
                                <div className="mt-4 flex items-center gap-2 text-blue-600 font-medium opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                                    Read Now <ArrowRight size={16} />
                                </div>
                            </div>
                        </motion.div>
                    ))}

                    {/* Spacer for right padding */}
                    <div className="min-w-[20px]"></div>
                </div>

                <div className="mt-6 text-center md:hidden">
                    <button className="px-6 py-3 border border-gray-200 text-gray-600 font-semibold rounded-lg hover:bg-gray-50 w-full">
                        View All Insights
                    </button>
                </div>

            </div>
        </section>
    );
};

export default Insights;
