import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check, FileText } from "lucide-react";

const LeadMagnet = () => {
    const [email, setEmail] = useState("");
    const [subscribed, setSubscribed] = useState(false);

    const handleSubscribe = (e) => {
        e.preventDefault();
        if (email) {
            setSubscribed(true);
            setTimeout(() => {
                setSubscribed(false);
                setEmail("");
            }, 3000);
        }
    };

    return (
        <section className="bg-gray-900 border-t border-gray-800 overflow-hidden">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row min-h-[500px]">

                {/* Left Content Area */}
                <div className="flex-1 p-10 md:p-16 flex flex-col justify-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="text-blue-400 font-bold tracking-wider uppercase text-sm mb-4 block">
                            Free Whitepaper
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                            The Enterprise Digital <br /> Transformation Roadmap 2026
                        </h2>
                        <p className="text-gray-400 text-lg mb-8 leading-relaxed max-w-md">
                            A practical framework for C-Suite executives to modernize infrastructure, optimize workflows, and drive measurable ROI in 90 days.
                        </p>

                        <form onSubmit={handleSubscribe} className="max-w-md space-y-4">
                            <div className="relative">
                                <input
                                    type="email"
                                    placeholder="Work email address *"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full bg-gray-800 border border-gray-700 text-white rounded-lg px-6 py-4 focus:outline-none focus:border-blue-500 transition-colors"
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full md:w-auto px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                            >
                                {subscribed ? (
                                    <>
                                        <Check size={20} /> Success!
                                    </>
                                ) : (
                                    <>
                                        Download Guide <ArrowRight size={20} />
                                    </>
                                )}
                            </button>
                            <p className="text-xs text-gray-500 mt-4">
                                Join 5,000+ executives who read our insights. Unsubscribe appropriately.
                            </p>
                        </form>
                    </motion.div>
                </div>

                {/* Right Visual Area */}
                <div className="flex-1 bg-blue-600 relative overflow-hidden flex items-center justify-center p-10">
                    {/* Abstract Shapes */}
                    <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-blue-400/30 to-transparent pointer-events-none" />
                    <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-blue-500 rounded-full blur-[80px] pointer-events-none" />

                    {/* Book/Guide Mockup */}
                    <motion.div
                        className="relative z-10 w-[300px] h-[400px] bg-white rounded-r-xl rounded-l-sm shadow-2xl shadow-blue-900/50 flex flex-col p-8 transform rotate-y-12 rotate-3"
                        initial={{ opacity: 0, y: 40, rotate: 6 }}
                        whileInView={{ opacity: 1, y: 0, rotate: 3 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        style={{ perspective: "1000px" }}
                    >
                        {/* Book Spine Effect */}
                        <div className="absolute left-0 top-0 bottom-0 w-3 bg-gradient-to-r from-gray-300 to-white rounded-l-sm" />

                        <div className="ml-2 h-full flex flex-col relative overflow-hidden">
                            {/* Abstract Cover Art */}
                            <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-600 rounded-full blur-[40px] opacity-20" />

                            <div className="flex-1 mt-8">
                                <span className="text-xs font-bold text-gray-400 uppercase tracking-widest border-b border-gray-200 pb-2 mb-4 block w-fit">
                                    Whitepaper
                                </span>
                                <h3 className="text-3xl font-extrabold text-gray-900 leading-tight mb-2">
                                    Strategic Playbook <br /> for Software Modernization
                                </h3>
                                <p className="text-sm text-gray-500 font-medium">A Practical Framework in 2026</p>
                            </div>

                            <div className="mt-auto pt-8 border-t border-gray-100 flex items-center justify-between">
                                <div className="flex -space-x-2">
                                    <div className="w-8 h-8 bg-blue-100 rounded-full border-2 border-white" />
                                    <div className="w-8 h-8 bg-gray-100 rounded-full border-2 border-white" />
                                </div>
                                <FileText size={24} className="text-blue-600" />
                            </div>
                        </div>
                    </motion.div>
                </div>

            </div>
        </section>
    );
};

export default LeadMagnet;
