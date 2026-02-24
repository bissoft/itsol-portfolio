"use client";

import { motion } from "framer-motion";
import {
    FileText,
    UserCheck,
    Shield,
    CreditCard,
    AlertTriangle,
    Gavel,
    Globe,
    Clock,
    Mail,
    Scale,
    ArrowLeft,
    ChevronRight,
} from "lucide-react";
import { useRouter } from "next/navigation";

const TermsConditions = () => {
    const router = useRouter();

    const sections = [
        {
            title: "1. Acceptance of Terms",
            icon: <UserCheck className="text-blue-500" />,
            content:
                "By accessing or using our services, you agree to be bound by these Terms and Conditions. If you disagree with any part of the terms, you may not access the service.",
        },
        {
            title: "2. Use of License",
            icon: <FileText className="text-blue-500" />,
            content:
                "Permission is granted to temporarily download one copy of the materials (information or software) on ITSOL's website for personal, non-commercial transitory viewing only.",
        },
        {
            title: "3. User Responsibilities",
            icon: <Shield className="text-blue-500" />,
            content:
                "You are responsible for maintaining the confidentiality of your account and password and for restricting access to your computer, and you agree to accept responsibility for all activities that occur under your account.",
        },
        {
            title: "4. Payment Terms",
            icon: <CreditCard className="text-blue-500" />,
            content:
                "If you purchase any service, you agree to pay all applicable fees and taxes. We may suspend or terminate your access to the services if your payment is late and/or your offered payment method cannot be processed.",
        },
        {
            title: "5. Intellectual Property",
            icon: <Globe className="text-blue-500" />,
            content:
                "The service and its original content, features, and functionality are and will remain the exclusive property of ITSOL and its licensors.",
        },
        {
            title: "6. Limitation of Liability",
            icon: <AlertTriangle className="text-blue-500" />,
            content:
                "In no event shall ITSOL, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages.",
        },
        {
            title: "7. Termination",
            icon: <Scale className="text-blue-500" />,
            content:
                "We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.",
        },
        {
            title: "8. Governing Law",
            icon: <Gavel className="text-blue-500" />,
            content:
                "These Terms shall be governed and construed in accordance with the laws of Pakistan, without regard to its conflict of law provisions.",
        },
        {
            title: "9. Changes to Terms",
            icon: <Clock className="text-blue-500" />,
            content:
                "We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will act broadly to provide at least 30 days' notice prior to any new terms taking effect.",
        },
        {
            title: "10. Contact Us",
            icon: <Mail className="text-blue-500" />,
            content:
                "If you have any questions about these Terms, please contact us at legal@itsolz.tech.",
        },
    ];

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

                {/* Current Page Indicator */}
                <div className="flex items-center gap-1 sm:gap-2">
                    <ChevronRight className="text-gray-400 w-4 h-4 hidden sm:block" />

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                        className="bg-blue-50 text-blue-600 px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium border border-blue-100 shadow-sm whitespace-nowrap overflow-hidden text-ellipsis max-w-[120px] sm:max-w-none"
                    >
                        Terms & Conditions
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
                        className="mb-6 inline-block bg-gradient-to-r from-blue-100 to-blue-200 px-6 py-2 rounded-full backdrop-blur-sm border border-blue-200"
                    >
                        <p className="text-sm font-medium text-blue-600">
                            Last Updated: October 24, 2023
                        </p>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
                    >
                        Terms &{" "}
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
                            Conditions
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
                    >
                        Please read these terms and conditions carefully before using our
                        service.
                    </motion.p>
                </motion.div>
            </motion.section>

            {/* Content Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
                <div className="space-y-12">
                    {sections.map((section, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white rounded-xl border border-gray-200 p-8 shadow-sm hover:shadow-md transition-all"
                        >
                            <div className="flex items-start gap-4">
                                <div className="bg-blue-50 p-3 rounded-lg flex-shrink-0">
                                    {section.icon}
                                </div>
                                <div>
                                    <h2 className="text-xl font-bold mb-4">{section.title}</h2>
                                    <p className="text-gray-600 leading-relaxed">
                                        {section.content}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Footer Note */}
            <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center border-t border-gray-200 mt-12">
                <p className="text-gray-500 text-sm">
                    If you are using our services on behalf of a business, that business
                    accepts these terms.
                </p>
            </section>
        </div>
    );
};

export default TermsConditions;
