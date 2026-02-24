import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, GraduationCap, Plane, Building2, Stethoscope, Landmark, Truck, BrainCircuit } from 'lucide-react';

import { useNavigate } from 'react-router-dom';

const IndustriesSection = () => {
    const navigate = useNavigate();

    const industries = [
        {
            title: "E-commerce",
            icon: ShoppingCart,
            items: ["Social Commerce", "Subscription-Based E-commerce", "Marketplace Platforms", "Digital Goods E-commerce"],
            color: "bg-blue-50 text-blue-600",
            link: "/ecommerce-digital-commerce-solution"
        },
        {
            title: "Education",
            icon: GraduationCap,
            items: ["Learning Management Systems", "Online Course Platforms", "Massive Open Online Courses", "Tutoring and Homework Help Apps"],
            color: "bg-blue-50 text-blue-600",
            link: "/education-technology"
        },
        {
            title: "Travel & Tourism",
            icon: Plane,
            items: ["Travel Booking Apps", "Flight and Hotel Comparison Tools", "Trip Planning Apps", "Travel Guides and Itinerary Apps"],
            color: "bg-blue-50 text-blue-600",
            link: "/travel-tourism"
        },
        {
            title: "Real Estate",
            icon: Building2,
            items: ["Property Listing Apps", "Real Estate Marketplaces", "Rental Management Apps", "Real Estate Investment Platforms"],
            color: "bg-blue-50 text-blue-600",
            link: "/real-estate"
        },
        {
            title: "Fintech",
            icon: Landmark,
            items: ["Digital Banking", "Payment Gateways", "Investment Platforms", "Blockchain Solutions"],
            color: "bg-blue-50 text-blue-600",
            link: "/fintech"
        },
        {
            title: "Healthcare",
            icon: Stethoscope,
            items: ["Telemedicine Apps", "Hospital Management", "Health Tracking", "E-Prescriptions"],
            color: "bg-blue-50 text-blue-600",
            link: "/healthcare"
        },
        {
            title: "Logistics",
            icon: Truck,
            items: ["Fleet Management", "Supply Chain", "Tracking Systems", "Inventory Management"],
            color: "bg-blue-50 text-blue-600",
            link: "/supply-chain-logistics" // Assuming link based on pattern, or fallback
        },
        {
            title: "AI & ML",
            icon: BrainCircuit,
            items: ["Predictive Analytics", "NLP Solutions", "Computer Vision", "Process Automation"],
            color: "bg-blue-50 text-blue-600",
            link: "/data-&-ai"
        }
    ];

    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute -top-[20%] -right-[10%] w-[1000px] h-[1000px] bg-blue-50/50 rounded-full blur-[120px]" />
                <div className="absolute -bottom-[20%] -left-[10%] w-[1000px] h-[1000px] bg-sky-50/50 rounded-full blur-[120px]" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Expertise in Software Development <br />
                        Across Multiple <span className="text-blue-600">Industries</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        We deliver tailored software solutions for diverse sectors, driving innovation and growth through technology.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {industries.map((industry, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -5 }}
                            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group cursor-pointer"
                            onClick={() => navigate(industry.link)}
                        >
                            <div className={`w-14 h-14 rounded-xl ${industry.color} flex items-center justify-center mb-6 border border-blue-100 group-hover:border-blue-200 group-hover:scale-110 transition-all duration-300`}>
                                <industry.icon size={28} />
                            </div>

                            <h3 className="text-2xl font-bold text-gray-900 mb-4">{industry.title}</h3>

                            <ul className="space-y-3 mb-8">
                                {industry.items.map((item, idx) => (
                                    <li key={idx} className="flex items-start text-sm text-gray-600">
                                        <span className="w-1.5 h-1.5 rounded-full bg-gray-300 mt-2 mr-2 flex-shrink-0 group-hover:bg-blue-400 transition-colors" />
                                        {item}
                                    </li>
                                ))}
                            </ul>

                            <button className="flex items-center text-blue-600 font-semibold group-hover:gap-2 transition-all duration-300">
                                Explore More
                                <div className={`ml-2 w-8 h-8 rounded-full ${industry.color} border border-blue-100 group-hover:border-blue-200 flex items-center justify-center transition-all duration-300`}>
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </div>
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default IndustriesSection;
