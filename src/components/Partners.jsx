import React from "react";
import { motion } from "framer-motion";

const partners = [
    {
        name: "Microsoft Solutions Partner",
        logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
        width: "w-32",
    },
    {
        name: "Google Cloud Partner",
        logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg",
        width: "w-40",
    },
    {
        name: "Salesforce Partner",
        logo: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg",
        width: "w-28",
    },
    {
        name: "AWS Partner Network",
        logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
        width: "w-24",
    },
];

const Partners = () => {
    return (
        <section className="py-20 bg-blue-600 text-white relative overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-500" />

            {/* Decorative Blur Circles */}
            <div className="absolute -top-20 -left-20 w-80 h-80 bg-blue-400 rounded-full blur-[100px] opacity-30 pointer-events-none" />
            <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-blue-300 rounded-full blur-[100px] opacity-30 pointer-events-none" />


            <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl md:text-4xl font-bold mb-12"
                >
                    Our partnerships with <br /> industry leaders
                </motion.h2>

                <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20">
                    {partners.map((partner, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="bg-white backdrop-blur-sm p-6 rounded-xl border border-white/10  transition-all duration-300 cursor-pointer flex items-center justify-center"
                            title={partner.name}
                        >
                            {/* Force white logo for blue background consistency - using filters since these are SVGs */}
                            <img
                                src={partner.logo}
                                alt={partner.name}
                                className={`h-10 object-contain hover:opacity-100 transition-opacity ${partner.width}`}
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Partners;
