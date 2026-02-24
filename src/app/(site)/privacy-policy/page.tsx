"use client";

import { motion } from "framer-motion";
import {
    Shield,
    Lock,
    Eye,
    FileText,
    Server,
    Globe,
    Bell,
    UserCheck,
    AlertTriangle,
    Mail,
    ChevronRight,
    ArrowLeft,
    Calendar,
} from "lucide-react";
import { useRouter } from "next/navigation";

const PrivacyPolicy = () => {
    const router = useRouter();

    const sections = [
        {
            title: "1. Information We Collect",
            icon: <Eye className="text-blue-500" />,
            content:
                "We collect information you provide directly to us, such as when you create an account, subscribe to our newsletter, request customer support, or otherwise communicate with us. This may include your name, email address, phone number, company name, and payment information.",
        },
        {
            title: "2. How We Use Your Information",
            icon: <FileText className="text-blue-500" />,
            content:
                "We use the information we collect to provide, maintain, and improve our services, process transactions, send you technical notices and support messages, and communicate with you about products, services, offers, and events.",
        },
        {
            title: "3. Information Sharing",
            icon: <Globe className="text-blue-500" />,
            content:
                "We do not share your personal information with third parties except as described in this policy, such as with vendors, consultants, and other service providers who need access to such information to carry out work on our behalf.",
        },
        {
            title: "4. Data Security",
            icon: <Lock className="text-blue-500" />,
            content:
                "We take reasonable measures to help protect information about you from loss, theft, misuse and unauthorized access, disclosure, alteration and destruction.",
        },
        {
            title: "5. Cookies and Tracking",
            icon: <Server className="text-blue-500" />,
            content:
                "We use cookies and similar tracking technologies to track the activity on our service and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.",
        },
        {
            title: "6. Your Rights",
            icon: <UserCheck className="text-blue-500" />,
            content:
                "Depending on your location, you may have rights regarding your personal information, including the right to access, correct, delete, or restrict use of your personal data.",
        },
        {
            title: "7. Changes to This Policy",
            icon: <Bell className="text-blue-500" />,
            content:
                "We may update this privacy policy from time to time. If we make changes, we will notify you by revising the date at the top of the policy and, in some cases, providing you with additional notice.",
        },
        {
            title: "8. Contact Us",
            icon: <Mail className="text-blue-500" />,
            content:
                "If you have any questions about this privacy policy, please contact us at privacy@itsolz.tech.",
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
                        Privacy Policy
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
                        Privacy{" "}
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
                            Policy
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
                    >
                        We are committed to protecting your privacy and ensuring you understand how your information is used.
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
                    This privacy policy is effectively a contract between you and ITSOL.
                    By using our services, you agree to the terms herein.
                </p>
            </section>
        </div>
    );
};

export default PrivacyPolicy;
