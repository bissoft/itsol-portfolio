"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

interface ContactModalProps {
    onClose: () => void;
    isOpen?: boolean; // Added isOpen to props although handled by parent usually
}

const ContactModal = ({ onClose }: ContactModalProps) => {
    const formRef = useRef<HTMLFormElement>(null);
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const isValidEmail = (email: string) => {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}$/;
        return emailRegex.test(email);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const { firstName, lastName, email, phone } = formData;

        if (!firstName || !lastName || !email || !phone) {
            toast.error("Please fill in all required fields.");
            return;
        }

        if (!isValidEmail(email)) {
            toast.error("Please enter a valid email address.");
            return;
        }

        const phoneRegex = /^\+?[0-9\s\-()]{7,}$/;
        if (!phoneRegex.test(phone)) {
            toast.error("Please enter a valid phone number.");
            return;
        }

        toast.loading("Sending...", { id: "email-toast" });

        if (formRef.current) {
            emailjs
                .sendForm("service_qsxpovw", "template_lmyk7m3", formRef.current, {
                    publicKey: "3AuupskVJl-VOMLFd",
                })
                .then((result) => {
                    toast.success("Message sent successfully!", { id: "email-toast" });
                    onClose();
                })
                .catch((error) => {
                    toast.error("Failed to send message. Try again later.", {
                        id: "email-toast",
                    });
                });
        }
    };

    return (
        <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 overflow-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
        >
            <Toaster position="top-center" />
            <motion.div
                className="bg-white rounded-2xl shadow-xl w-full max-w-2xl mx-auto my-8"
                initial={{ scale: 0.95, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 20 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
            >
                <div className="p-6 sm:p-8">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-2xl font-bold text-gray-800">Contact Us</h2>
                        <button
                            onClick={onClose}
                            className="text-gray-500 hover:text-gray-700 focus:outline-none cursor-pointer"
                            aria-label="Close"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                                    First Name <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="firstName"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                                    placeholder="John"
                                    required
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                                    Last Name <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="lastName"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                                    placeholder="Doe"
                                    required
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Email Address <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                                placeholder="you@example.com"
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                                Phone Number <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                                placeholder="(123) 456-7890"
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                                rows={4}
                                placeholder="Type your message here..."
                            />
                        </div>

                        <div className="flex flex-col sm:flex-row justify-end gap-3 pt-4">
                            <motion.button
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.97 }}
                                type="button"
                                onClick={onClose}
                                className="px-6 py-2 bg-gray-200 text-gray-800 rounded-lg font-medium hover:bg-gray-300 transition cursor-pointer"
                            >
                                Cancel
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.97 }}
                                type="submit"
                                className="px-6 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition cursor-pointer"
                            >
                                Submit
                            </motion.button>
                        </div>
                    </form>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default ContactModal;
