"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, ArrowRight, Users, Code, Monitor } from 'lucide-react';
import { useRouter } from 'next/navigation';

const EngagementModels = () => {
    const [activeTab, setActiveTab] = useState('dev');
    const router = useRouter();

    const tabs = [
        { id: 'dev', label: 'Product Development', icon: Code },
        { id: 'managed', label: 'Managed IT Systems', icon: Monitor },
        { id: 'team', label: 'Team Augmentation', icon: Users },
    ];

    const content: Record<string, any> = {
        dev: {
            title: "Product Development",
            description: "From validation to MVP and full-scale product development, we build robust software solutions tailored to your business goals.",
            features: [
                "End-to-end product lifecycle management",
                "Agile methodology & rapid prototyping",
                "MVP development & market validation",
                "Scalable architecture design"
            ],
            image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
            link: "/services/custom-software-development"
        },
        managed: {
            title: "Managed IT Systems",
            description: "Focus on your core business while we handle your IT infrastructure, security, and maintenance with our managed services.",
            features: [
                "24/7 System monitoring & support",
                "Cloud infrastructure management",
                "Security audits & compliance",
                "Performance optimization"
            ],
            image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80",
            link: "/engagement/managed-it-systems"
        },
        team: {
            title: "Team Augmentation",
            description: "Upgrade your team with specialized skills & expertise. Scale your development capacity instantly with our vetted engineers.",
            features: [
                "Operational team efficiency is high and nimble",
                "Quick turn-around times",
                "Access to the global talent pool",
                "Collaborate with In-House & Outsourced Teams"
            ],
            image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
            link: "/engagement/team-augmentation" // Assuming this route exists or creates a placeholder
        }
    };

    return (
        <section className="py-24 bg-gradient-to-b from-white to-blue-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Engagement <span className="text-blue-600">Models</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Choose from flexible engagement models tailored to your needs, ensuring seamless collaboration with time & material or dedicated teams.
                    </p>
                </div>

                {/* Tabs */}
                <div className="flex flex-wrap justify-center gap-4 mb-16">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`flex items-center gap-2 px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 ${activeTab === tab.id
                                ? 'bg-blue-600 text-white shadow-lg scale-105'
                                : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200 shadow-sm'
                                }`}
                        >
                            <tab.icon size={20} />
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* Content Area */}
                <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-blue-100">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            className="grid md:grid-cols-2 gap-12 items-center"
                        >
                            <div className="space-y-8">
                                <h3 className="text-3xl font-bold text-gray-900">{content[activeTab].title}</h3>
                                <p className="text-lg text-gray-600 leading-relaxed">
                                    {content[activeTab].description}
                                </p>
                                <div className="space-y-4">
                                    {content[activeTab].features.map((feature: string, idx: number) => (
                                        <div key={idx} className="flex items-center gap-3">
                                            <div className="flex-shrink-0">
                                                <CheckCircle2 className="w-6 h-6 text-blue-500" />
                                            </div>
                                            <span className="text-gray-700 font-medium">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                                <button
                                    onClick={() => router.push(content[activeTab].link)}
                                    className="group mt-6 px-8 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-colors flex items-center gap-2 shadow-lg shadow-blue-600/20"
                                >
                                    View Details
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </div>

                            <div className="relative">
                                {/* Decorative elements */}
                                <div className="absolute -inset-4 bg-gradient-to-r from-blue-100 to-purple-100 rounded-[2rem] transform rotate-3 opacity-60" />
                                <div className="absolute -inset-4 bg-gradient-to-l from-blue-100 to-cyan-100 rounded-[2rem] transform -rotate-3 opacity-60" />

                                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                                    <div className="absolute inset-0 bg-blue-600/10 mix-blend-multiply" />
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img
                                        src={content[activeTab].image}
                                        alt={content[activeTab].title}
                                        className="w-full h-[400px] object-cover"
                                    />
                                </div>

                                {/* Floating badges */}
                                <motion.div
                                    className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-xl flex items-center gap-3 border border-gray-100"
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.2 }}
                                >
                                    <div className="bg-green-100 p-2 rounded-full">
                                        <Users className="w-6 h-6 text-green-600" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500 font-medium">Expert Team</p>
                                        <p className="text-lg font-bold text-gray-900">100+ Devs</p>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

export default EngagementModels;
