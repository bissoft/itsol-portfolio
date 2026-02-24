"use client";

import { motion } from "framer-motion";
import {
    MessageSquare,
    ThumbsUp,
    ThumbsDown,
    Star,
    Check,
    ChevronDown,
    ArrowRight,
    ChevronRight,
    ArrowLeft,
} from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";

const Feedback = () => {
    const [feedbackType, setFeedbackType] = useState<string | null>(null);
    const [rating, setRating] = useState(0);
    const [hoverRating, setHoverRating] = useState(0);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const router = useRouter();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSubmitted(true);
        }, 1500);
    };

    const feedbackOptions = [
        {
            type: "positive",
            icon: <ThumbsUp className="text-green-500" />,
            title: "Positive Feedback",
            description: "What did we do well?",
        },
        {
            type: "negative",
            icon: <ThumbsDown className="text-red-500" />,
            title: "Constructive Criticism",
            description: "What can we improve?",
        },
        {
            type: "suggestion",
            icon: <MessageSquare className="text-blue-500" />,
            title: "Feature Request",
            description: "What should we build next?",
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
                        Feedback
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
                            We value your opinion
                        </p>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
                    >
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
                            Share Your
                        </span>{" "}
                        Feedback
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
                    >
                        Help us improve by sharing your thoughts, suggestions, or concerns.
                    </motion.p>
                </motion.div>
            </motion.section>

            {/* Feedback Content */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
                {!isSubmitted ? (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-white rounded-xl border border-gray-200 p-8 shadow-sm"
                    >
                        {feedbackType === null ? (
                            <div>
                                <h2 className="text-2xl font-bold mb-8">
                                    What type of feedback do you have?
                                </h2>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    {feedbackOptions.map((option, index) => (
                                        <motion.button
                                            key={index}
                                            onClick={() => setFeedbackType(option.type)}
                                            whileHover={{ y: -5 }}
                                            whileTap={{ scale: 0.98 }}
                                            className="bg-blue-50 hover:bg-blue-100 p-6 rounded-lg border border-blue-100 text-center transition-all"
                                        >
                                            <div className="mb-4">
                                                <motion.div
                                                    whileHover={{ scale: 1.1 }}
                                                    className="inline-block"
                                                >
                                                    {option.icon}
                                                </motion.div>
                                            </div>
                                            <h3 className="text-xl font-semibold mb-2">
                                                {option.title}
                                            </h3>
                                            <p className="text-gray-600">{option.description}</p>
                                        </motion.button>
                                    ))}
                                </div>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit}>
                                <div className="mb-8">
                                    <button
                                        type="button"
                                        onClick={() => setFeedbackType(null)}
                                        className="flex items-center gap-2 text-gray-500 hover:text-gray-700 mb-6 cursor-pointer"
                                    >
                                        <ChevronDown
                                            className="transform rotate-90 text-blue-500"
                                            size={16}
                                        />
                                        Back to feedback types
                                    </button>

                                    <h2 className="text-2xl font-bold mb-6">
                                        {feedbackOptions.find((o) => o.type === feedbackType)?.title}
                                    </h2>

                                    {feedbackType !== "suggestion" && (
                                        <div className="mb-8">
                                            <p className="text-gray-600 mb-4">
                                                How would you rate your experience?
                                            </p>
                                            <div className="flex justify-center gap-2">
                                                {[1, 2, 3, 4, 5].map((star) => (
                                                    <button
                                                        key={star}
                                                        type="button"
                                                        onClick={() => setRating(star)}
                                                        onMouseEnter={() => setHoverRating(star)}
                                                        onMouseLeave={() => setHoverRating(0)}
                                                        className="text-2xl focus:outline-none"
                                                    >
                                                        <Star
                                                            className={`${(hoverRating || rating) >= star
                                                                ? "text-yellow-400 fill-yellow-400"
                                                                : "text-gray-300"
                                                                }`}
                                                        />
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    <div className="space-y-6">
                                        <div>
                                            <label
                                                htmlFor="message"
                                                className="block text-gray-600 mb-2"
                                            >
                                                Your{" "}
                                                {feedbackType === "suggestion"
                                                    ? "suggestion"
                                                    : "feedback"}
                                            </label>
                                            <textarea
                                                id="message"
                                                name="message"
                                                rows={5}
                                                value={formData.message}
                                                onChange={handleChange}
                                                required
                                                className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                placeholder={
                                                    feedbackType === "positive"
                                                        ? "What did you like about our product/service?"
                                                        : feedbackType === "negative"
                                                            ? "What could we improve about your experience?"
                                                            : "What feature would you like to see added or improved?"
                                                }
                                            ></textarea>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div>
                                                <label
                                                    htmlFor="name"
                                                    className="block text-gray-600 mb-2"
                                                >
                                                    Your Name (Optional)
                                                </label>
                                                <input
                                                    type="text"
                                                    id="name"
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                />
                                            </div>

                                            <div>
                                                <label
                                                    htmlFor="email"
                                                    className="block text-gray-600 mb-2"
                                                >
                                                    Email (Optional)
                                                </label>
                                                <input
                                                    type="email"
                                                    id="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <motion.button
                                    type="submit"
                                    disabled={isSubmitting}
                                    whileHover={{
                                        scale: 1.03,
                                        boxShadow: "0 0 10px rgba(59, 130, 246, 0.3)",
                                    }}
                                    whileTap={{ scale: 0.97 }}
                                    className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium py-3 px-6 rounded-lg shadow-sm hover:shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <svg
                                                className="animate-spin -ml-1 mr-2 h-5 w-5 text-white"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                            >
                                                <circle
                                                    className="opacity-25"
                                                    cx="12"
                                                    cy="12"
                                                    r="10"
                                                    stroke="currentColor"
                                                    strokeWidth="4"
                                                ></circle>
                                                <path
                                                    className="opacity-75"
                                                    fill="currentColor"
                                                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                                ></path>
                                            </svg>
                                            Submitting...
                                        </>
                                    ) : (
                                        "Submit Feedback"
                                    )}
                                </motion.button>
                            </form>
                        )}
                    </motion.div>
                ) : (
                    /* Thank You Message */
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-white rounded-xl border border-gray-200 p-12 text-center shadow-sm"
                    >
                        <div className="bg-green-100 border border-green-200 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                            <Check className="w-10 h-10 text-green-500" />
                        </div>

                        <h2 className="text-2xl font-bold mb-4">
                            Thank You for Your Feedback!
                        </h2>
                        <p className="text-gray-600 mb-6">
                            We appreciate you taking the time to share your thoughts with us.
                            Your feedback helps us improve our products and services.
                        </p>

                        {formData.email && (
                            <p className="text-gray-500 mb-8">
                                We've sent a confirmation to{" "}
                                <span className="text-blue-500">{formData.email}</span>
                            </p>
                        )}

                        <motion.button
                            whileHover={{
                                scale: 1.05,
                                boxShadow: "0 0 10px rgba(59, 130, 246, 0.3)",
                            }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => {
                                setIsSubmitted(false);
                                setFeedbackType(null);
                                setFormData({ name: "", email: "", message: "" });
                                setRating(0);
                            }}
                            className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-lg font-medium shadow-sm hover:shadow-md cursor-pointer"
                        >
                            Submit More Feedback
                        </motion.button>
                    </motion.div>
                )}
            </section>

            {/* Additional Feedback Options */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl font-bold mb-4"
                    >
                        Other Ways to Share Feedback
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-gray-600 max-w-3xl mx-auto"
                    >
                        We're always listening and want to hear from you
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        {
                            title: "Community Forum",
                            description: "Join discussions with other users and our team",
                            icon: (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="text-blue-500"
                                >
                                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                                </svg>
                            ),
                            action: "Visit Forum",
                        },
                        {
                            title: "Social Media",
                            description: "Connect with us on Twitter, LinkedIn, and Facebook",
                            icon: (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="text-blue-500"
                                >
                                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                                </svg>
                            ),
                            action: "Follow Us",
                        },
                        {
                            title: "Support Ticket",
                            description: "Get help and share feedback with our support team",
                            icon: (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="text-blue-500"
                                >
                                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                    <polyline points="22,6 12,13 2,6"></polyline>
                                </svg>
                            ),
                            action: "Contact Support",
                        },
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="bg-blue-50 p-6 rounded-xl border border-blue-100"
                        >
                            <div className="mb-4">
                                <div className="bg-blue-100 p-3 rounded-full w-12 h-12 flex items-center justify-center">
                                    {item.icon}
                                </div>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                            <p className="text-gray-600 mb-4">{item.description}</p>
                            <motion.button
                                whileHover={{ x: 5 }}
                                className="text-blue-500 font-medium flex items-center gap-1"
                            >
                                {item.action} <ArrowRight size={16} />
                            </motion.button>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <motion.div
                    initial={{ scale: 0.95 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl p-12 text-center relative overflow-hidden"
                >
                    {/* Decorative elements */}
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-400/20 rounded-full filter blur-3xl"></div>
                        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-blue-400/20 rounded-full filter blur-3xl"></div>
                    </div>

                    <h2 className="text-3xl font-bold mb-4 relative z-10 text-white">
                        Have more to share?
                    </h2>
                    <p className="text-blue-100 max-w-2xl mx-auto mb-8 relative z-10">
                        We're always looking for ways to improve. Reach out anytime with
                        your feedback.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
                        <motion.button
                            whileHover={{
                                scale: 1.05,
                                boxShadow: "0 0 20px rgba(255, 255, 255, 0.3)",
                            }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg shadow-lg cursor-pointer"
                            onClick={() => router.push('/contact')}
                        >
                            Contact Us
                        </motion.button>
                    </div>
                </motion.div>
            </section>
        </div>
    );
};

export default Feedback;
