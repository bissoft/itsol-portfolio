"use client";

import { motion } from "framer-motion";
import { Rocket, Zap, BarChart2, Shield, Users, Clock, ArrowRight, ChevronDown, Check, Star, Award, Code, Cloud, Lock, MessageSquare, Mail, Phone, ChevronRight, ArrowLeft } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";

const Fintech = () => {
    const [activeTab, setActiveTab] = useState('features');
    const [expandedCase, setExpandedCase] = useState<number | null>(null);
    const [activeFaq, setActiveFaq] = useState<number | null>(null);
    const [email, setEmail] = useState('');
    const router = useRouter();


    const stats = [
        { value: "150+", label: "Fintech Solutions", icon: <Rocket className="text-blue-500" /> },
        { value: "$3.5B+", label: "Transactions Processed", icon: <BarChart2 className="text-blue-500" /> },
        { value: "99.9%", label: "Uptime", icon: <Shield className="text-blue-500" /> },
        { value: "24/7", label: "Support", icon: <Clock className="text-blue-500" /> }
    ];

    const features = [
        {
            icon: <Zap className="text-blue-500" />,
            title: "Digital Payments",
            description: "Secure and seamless payment processing solutions"
        },
        {
            icon: <Lock className="text-blue-500" />,
            title: "Fraud Prevention",
            description: "Advanced AI-powered fraud detection systems"
        },
        {
            icon: <Cloud className="text-blue-500" />,
            title: "Cloud Banking",
            description: "Modern cloud infrastructure for financial institutions"
        },
        {
            icon: <Users className="text-blue-500" />,
            title: "Open Banking",
            description: "API solutions for financial data sharing"
        }
    ];

    const solutions = [
        {
            title: "Mobile Banking",
            description: "Custom mobile banking applications with advanced security features",
            icon: <Phone className="text-blue-500" />
        },
        {
            title: "Blockchain",
            description: "Blockchain solutions for secure and transparent transactions",
            icon: <Lock className="text-blue-500" />
        },
        {
            title: "AI Analytics",
            description: "Predictive analytics for financial decision making",
            icon: <BarChart2 className="text-blue-500" />
        },
        {
            title: "RegTech",
            description: "Compliance automation for financial regulations",
            icon: <Shield className="text-blue-500" />
        }
    ];

    const successStories = [
        {
            id: 1,
            name: "PayTech Solutions",
            challenge: "Needed to modernize legacy payment infrastructure",
            solution: "Implemented cloud-native payment processing platform",
            results: [
                "Reduced processing time by 70%",
                "Handled 3x transaction volume",
                "Achieved PCI DSS Level 1 compliance"
            ]
        },
        {
            id: 2,
            name: "WealthFront",
            challenge: "Required scalable investment platform",
            solution: "Built AI-driven robo-advisory system",
            results: [
                "Grew AUM by 500% in 12 months",
                "Reduced operational costs by 40%",
                "Improved customer satisfaction by 35%"
            ]
        },
        {
            id: 3,
            name: "NEO Bank",
            challenge: "Launching digital-first banking services",
            solution: "End-to-end digital banking platform",
            results: [
                "Launched in 4 months",
                "Acquired 100K customers in first year",
                "Achieved profitability in 18 months"
            ]
        }
    ];

    const testimonials = [
        {
            quote: "Their fintech expertise helped us transform our payment infrastructure ahead of schedule and under budget.",
            author: "Michael Chen",
            role: "CTO, PayTech Solutions",
            rating: 5
        },
        {
            quote: "The AI solutions we implemented together have given us a significant competitive advantage in wealth management.",
            author: "Sarah Johnson",
            role: "CEO, WealthFront",
            rating: 5
        },
        {
            quote: "From regulatory compliance to customer experience, they delivered on every aspect of our digital bank launch.",
            author: "David Rodriguez",
            role: "Founder, NEO Bank",
            rating: 5
        }
    ];

    const pricingPlans = [
        {
            name: "Starter",
            price: "$499",
            period: "/month",
            description: "For early-stage fintech startups",
            features: [
                "Basic API access",
                "Standard security",
                "Email support",
                "Monthly reports"
            ],
            cta: "Get Started"
        },
        {
            name: "Enterprise",
            price: "$1,999",
            period: "/month",
            description: "For established financial institutions",
            features: [
                "Premium API access",
                "Advanced security",
                "24/7 support",
                "Custom integrations",
                "Dedicated account manager"
            ],
            cta: "Contact Sales",
            popular: true
        },
        {
            name: "Custom",
            price: "Custom",
            period: "",
            description: "Tailored solutions for unique needs",
            features: [
                "White-label solutions",
                "Custom development",
                "Enterprise security",
                "Regulatory compliance",
                "SLA guarantees"
            ],
            cta: "Request Demo"
        }
    ];

    const faqs = [
        {
            question: "How secure are your fintech solutions?",
            answer: "We implement bank-grade security including AES-256 encryption, multi-factor authentication, and regular penetration testing to ensure your data and transactions are protected."
        },
        {
            question: "Do you support regulatory compliance?",
            answer: "Yes, our solutions are designed to help you comply with financial regulations including PCI DSS, GDPR, PSD2, and local financial authority requirements."
        },
        {
            question: "Can we integrate with existing banking systems?",
            answer: "Absolutely. Our solutions are designed for seamless integration with core banking systems, payment processors, and other financial infrastructure."
        },
        {
            question: "What industries do you specialize in?",
            answer: "We serve a wide range of financial sectors including banking, payments, lending, wealth management, insurance, and blockchain applications."
        }
    ];

    const toggleCase = (caseId: number) => {
        setExpandedCase(expandedCase === caseId ? null : caseId);
    };

    const toggleFaq = (index: number) => {
        setActiveFaq(activeFaq === index ? null : index);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission
        alert(`Thank you! We'll contact you at ${email}`);
        setEmail('');
    };

    return (
        <div className="min-h-screen bg-white text-gray-800">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="relative top-25 sm:top-25 z-1 flex items-center gap-2 sm:gap-4 ml-8 pt-10"
            >
                {/* Back Button */}
                <motion.button
                    onClick={() => router.back()}
                    whileHover={{
                        x: -3,
                        backgroundColor: "rgba(59, 130, 246, 0.1)"
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-1 sm:gap-2 bg-white/80 backdrop-blur-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-gray-200 shadow-md hover:shadow-lg transition-all cursor-pointer"
                >
                    <ArrowLeft className="text-blue-500 w-4 h-4 sm:w-5 sm:h-5" />
                    <span className="text-xs sm:text-sm font-medium text-gray-700">Back</span>
                </motion.button>

                {/* Current Page Indicator - Horizontal on desktop, vertical on mobile */}
                <div className="flex items-center gap-1 sm:gap-2">
                    <ChevronRight className="text-gray-400 w-4 h-4 hidden sm:block" />

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                        className="bg-blue-50 text-blue-600 px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium border border-blue-100 shadow-sm whitespace-nowrap overflow-hidden text-ellipsis max-w-[120px] sm:max-w-none"
                    >
                        Fintech
                    </motion.div>
                </div>
            </motion.div>
            {/* Hero Section */}
            <motion.section
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center relative overflow-hidden"
            >
                {/* Animated background elements */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-100 rounded-full filter blur-3xl"></div>
                    <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-blue-100 rounded-full filter blur-3xl"></div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative z-10"
                >
                    <motion.div
                        initial={{ y: -20 }}
                        animate={{ y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="mb-6 inline-block bg-gradient-to-r from-blue-100 to-blue-200 px-4 py-2 rounded-full backdrop-blur-sm border border-blue-200"
                    >
                        <p className="text-sm font-medium text-blue-600">Innovating Financial Technology</p>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="text-4xl md:text-6xl font-bold mb-6"
                    >
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">Fintech</span> Solutions
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        className="text-xl text-gray-600 max-w-3xl mx-auto mb-10"
                    >
                        Transforming financial services with cutting-edge technology, security, and innovation.
                    </motion.p>

                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <motion.button
                            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(59, 130, 246, 0.3)" }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-3 rounded-xl font-semibold text-lg flex items-center gap-2 shadow-lg cursor-pointer"
                            onClick={() => router.push('/portfolio')}

                        >
                            Explore Solutions <ArrowRight size={20} />
                        </motion.button>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-white border-2 border-blue-300 hover:border-blue-400 text-blue-500 px-8 py-3 rounded-xl cursor-pointer font-semibold text-lg hover:bg-blue-50"
                            onClick={() => router.push('/contact')}

                        >
                            Speak to an Expert
                        </motion.button>
                    </div>
                </motion.div>
            </motion.section>

            {/* Stats Section */}
            <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
            >
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm text-center hover:shadow-md transition-all"
                        >
                            <div className="flex justify-center mb-4">
                                <motion.div
                                    whileHover={{ scale: 1.1 }}
                                    className="bg-blue-100 p-3 rounded-full"
                                >
                                    {stat.icon}
                                </motion.div>
                            </div>
                            <motion.p
                                initial={{ scale: 0.9 }}
                                whileInView={{ scale: 1 }}
                                viewport={{ once: true }}
                                className="text-3xl font-bold mb-2 text-blue-600"
                            >
                                {stat.value}
                            </motion.p>
                            <p className="text-gray-600">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>
            </motion.section>

            {/* Features Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-white">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl font-bold mb-4"
                    >
                        Fintech Capabilities
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-gray-600 max-w-3xl mx-auto"
                    >
                        Comprehensive solutions designed to power the future of finance
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all"
                        >
                            <div className="mb-4">
                                <motion.div
                                    whileHover={{ rotate: 10, scale: 1.1 }}
                                    className="inline-block"
                                >
                                    {feature.icon}
                                </motion.div>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                            <p className="text-gray-600">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Solutions Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-gray-50">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl font-bold mb-4"
                    >
                        Our Fintech Solutions
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-gray-600 max-w-3xl mx-auto"
                    >
                        Tailored technology solutions for every financial service need
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {solutions.map((solution, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all"
                        >
                            <div className="bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                                {solution.icon}
                            </div>
                            <h3 className="text-xl font-semibold mb-3">{solution.title}</h3>
                            <p className="text-gray-600">{solution.description}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Tabs Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-white">
                <div className="flex justify-center mb-12">
                    <div className="inline-flex bg-blue-50 rounded-lg p-1 border border-blue-100">
                        {[
                            { id: 'features', label: 'Features' },
                            { id: 'cases', label: 'Case Studies' },
                            { id: 'pricing', label: 'Pricing' }
                        ].map((tab) => (
                            <motion.button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`px-6 py-3 rounded-md text-sm font-medium transition-all ${activeTab === tab.id
                                        ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white'
                                        : 'text-blue-600 hover:text-blue-800'
                                    }`}
                                whileHover={{ scale: activeTab === tab.id ? 1 : 1.05 }}
                            >
                                {tab.label}
                            </motion.button>
                        ))}
                    </div>
                </div>

                <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
                    {activeTab === 'features' && (
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3 }}
                            className="p-8"
                        >
                            <h2 className="text-2xl font-bold mb-8">Fintech Platform Features</h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                                <div>
                                    <h3 className="text-xl font-semibold mb-4">Core Banking</h3>
                                    <ul className="space-y-4">
                                        {[
                                            "Multi-currency accounts",
                                            "Real-time transaction processing",
                                            "Interest calculation engine",
                                            "Customer management system"
                                        ].map((item, index) => (
                                            <li key={index} className="flex items-start gap-3">
                                                <Check className="text-blue-500 mt-0.5 flex-shrink-0" />
                                                <span className="text-gray-700">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="text-xl font-semibold mb-4">Security & Compliance</h3>
                                    <ul className="space-y-4">
                                        {[
                                            "End-to-end encryption",
                                            "Multi-factor authentication",
                                            "Fraud detection algorithms",
                                            "Regulatory reporting tools"
                                        ].map((item, index) => (
                                            <li key={index} className="flex items-start gap-3">
                                                <Check className="text-blue-500 mt-0.5 flex-shrink-0" />
                                                <span className="text-gray-700">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            <div className="bg-blue-50 border border-blue-200 rounded-xl p-8">
                                <h3 className="text-xl font-semibold mb-4">Specialized Financial APIs</h3>
                                <p className="text-gray-700 mb-6">
                                    Our platform offers a comprehensive suite of APIs for payments, identity verification,
                                    risk assessment, and more - all with bank-grade security and 99.99% uptime.
                                </p>
                                <motion.button
                                    whileHover={{ scale: 1.03, boxShadow: "0 0 20px rgba(79, 70, 229, 0.3)" }}
                                    whileTap={{ scale: 0.97 }}
                                    className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-6 py-3 rounded-lg font-medium shadow-lg"
                                >
                                    Explore API Documentation
                                </motion.button>
                            </div>
                        </motion.div>
                    )}

                    {activeTab === 'cases' && (
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3 }}
                            className="p-8"
                        >
                            <h2 className="text-2xl font-bold mb-8">Fintech Success Stories</h2>

                            <div className="space-y-6">
                                {successStories.map((caseStudy) => (
                                    <motion.div
                                        key={caseStudy.id}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md overflow-hidden"
                                    >
                                        <button
                                            onClick={() => toggleCase(caseStudy.id)}
                                            className="w-full text-left p-6 hover:bg-blue-50 transition-colors flex justify-between items-center"
                                        >
                                            <div>
                                                <h3 className="text-xl font-bold mb-1">{caseStudy.name}</h3>
                                                <p className="text-gray-600">{caseStudy.challenge}</p>
                                            </div>
                                            <ChevronDown
                                                className={`transform transition-transform text-blue-500 ${expandedCase === caseStudy.id ? 'rotate-180' : ''
                                                    }`}
                                            />
                                        </button>

                                        {expandedCase === caseStudy.id && (
                                            <motion.div
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: 'auto' }}
                                                exit={{ opacity: 0, height: 0 }}
                                                transition={{ duration: 0.3 }}
                                                className="px-6 pb-6"
                                            >
                                                <div className="mb-6">
                                                    <h4 className="font-semibold mb-2">Our Solution</h4>
                                                    <p className="text-gray-600">{caseStudy.solution}</p>
                                                </div>

                                                <div>
                                                    <h4 className="font-semibold mb-2">Results Achieved</h4>
                                                    <ul className="space-y-3 text-gray-600">
                                                        {caseStudy.results.map((result, i) => (
                                                            <li key={i} className="flex items-start gap-2">
                                                                <Check className="text-blue-500 mt-0.5 flex-shrink-0" size={16} />
                                                                <span>{result}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </motion.div>
                                        )}
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    )}

                    {activeTab === 'pricing' && (
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3 }}
                            className="p-8"
                        >
                            <h2 className="text-2xl font-bold mb-8">Flexible Pricing Plans</h2>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                {pricingPlans.map((plan, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className={`relative rounded-xl border ${plan.popular
                                                ? 'border-blue-300 shadow-lg'
                                                : 'border-gray-200 shadow-sm'
                                            } overflow-hidden`}
                                    >
                                        {plan.popular && (
                                            <div className="absolute top-0 right-0 bg-blue-500 text-white text-xs font-bold px-4 py-1 rounded-bl-lg">
                                                MOST POPULAR
                                            </div>
                                        )}
                                        <div className="p-8">
                                            <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                                            <div className="flex items-end mb-4">
                                                <span className="text-4xl font-bold">{plan.price}</span>
                                                <span className="text-gray-500 ml-1">{plan.period}</span>
                                            </div>
                                            <p className="text-gray-600 mb-6">{plan.description}</p>
                                            <ul className="space-y-3 mb-8">
                                                {plan.features.map((feature, i) => (
                                                    <li key={i} className="flex items-start gap-2">
                                                        <Check className="text-blue-500 mt-0.5 flex-shrink-0" size={16} />
                                                        <span>{feature}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                            <motion.button
                                                whileHover={{ scale: 1.03 }}
                                                whileTap={{ scale: 0.97 }}
                                                className={`w-full py-3 rounded-lg font-medium ${plan.popular
                                                        ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg'
                                                        : 'bg-blue-50 text-blue-600 border border-blue-200'
                                                    }`}
                                            >
                                                {plan.cta}
                                            </motion.button>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-blue-50">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl font-bold mb-4"
                    >
                        Trusted by Financial Leaders
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-gray-600 max-w-3xl mx-auto"
                    >
                        Hear from financial institutions that have transformed their operations with our solutions
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all"
                        >
                            <div className="flex mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <Star
                                        key={i}
                                        className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
                                            }`}
                                    />
                                ))}
                            </div>
                            <blockquote className="text-gray-600 italic mb-6">
                                "{testimonial.quote}"
                            </blockquote>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                                    <Users className="text-blue-500" />
                                </div>
                                <div>
                                    <h4 className="font-semibold">{testimonial.author}</h4>
                                    <p className="text-gray-500 text-sm">{testimonial.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Awards & Recognition */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-white">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl font-bold mb-4"
                    >
                        Industry Recognition
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-gray-600 max-w-3xl mx-auto"
                    >
                        Our commitment to financial technology innovation has earned us prestigious awards
                    </motion.p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {[
                        { name: "Best Fintech Platform 2023", icon: <Award className="text-blue-500" /> },
                        { name: "Top Payment Solution", icon: <Zap className="text-blue-500" /> },
                        { name: "Security Excellence", icon: <Shield className="text-blue-500" /> },
                        { name: "Innovation Award", icon: <Rocket className="text-blue-500" /> }
                    ].map((award, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-gray-50 p-6 rounded-xl border border-gray-200 shadow-sm text-center hover:shadow-md transition-all"
                        >
                            <div className="flex justify-center mb-4">
                                <motion.div
                                    whileHover={{ scale: 1.1 }}
                                    className="bg-blue-100 p-3 rounded-full"
                                >
                                    {award.icon}
                                </motion.div>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-800">{award.name}</h3>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto bg-gray-50">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl font-bold mb-4"
                    >
                        Frequently Asked Questions
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-gray-600"
                    >
                        Everything you need to know about our fintech solutions
                    </motion.p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="border border-gray-200 rounded-xl overflow-hidden bg-white"
                        >
                            <button
                                onClick={() => toggleFaq(index)}
                                className="w-full text-left p-6 hover:bg-blue-50 transition-colors flex justify-between items-center"
                            >
                                <span className="font-semibold text-lg">{faq.question}</span>
                                <ChevronDown
                                    className={`min-w-5 h-5 transition-transform ${activeFaq === index ? 'rotate-180 text-blue-500' : 'text-gray-400'
                                        }`}
                                />
                            </button>

                            {activeFaq === index && (
                                <div className="px-6 pb-6 text-gray-600 border-t border-gray-100">
                                    {faq.answer}
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <motion.div
                    initial={{ scale: 0.95 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-12 text-center relative overflow-hidden"
                >
                    {/* Animated background elements */}
                    <motion.div
                        animate={{
                            x: [0, 100, 0],
                            y: [0, 50, 0],
                            transition: { duration: 15, repeat: Infinity, ease: "linear" }
                        }}
                        className="absolute top-0 left-0 w-64 h-64 bg-blue-500/20 rounded-full filter blur-3xl"
                    ></motion.div>
                    <motion.div
                        animate={{
                            x: [0, -100, 0],
                            y: [0, -50, 0],
                            transition: { duration: 20, repeat: Infinity, ease: "linear" }
                        }}
                        className="absolute bottom-0 right-0 w-80 h-80 bg-blue-500/20 rounded-full filter blur-3xl"
                    ></motion.div>

                    <h2 className="text-3xl font-bold mb-4 text-white">Ready to Launch Your Fintech Solution?</h2>
                    <p className="text-blue-100 max-w-2xl mx-auto mb-8">
                        Partner with us to build secure, scalable, and compliant financial technology
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <motion.button
                            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(255, 255, 255, 0.3)" }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-white text-blue-700 px-8 py-4 rounded-lg font-semibold cursor-pointer shadow-lg"
                            onClick={() => router.push('/contact')}

                        >
                            Start Your Project
                        </motion.button>
                    </div>
                </motion.div>
            </section>
        </div>
    );
};

export default Fintech;
