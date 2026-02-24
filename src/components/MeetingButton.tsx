"use client";

import { motion } from "framer-motion";

interface MeetingButtonProps {
    setIsModalOpen: (isOpen: boolean) => void;
    isModalOpen: boolean;
}

const MeetingButton = ({ setIsModalOpen, isModalOpen }: MeetingButtonProps) => {
    return (
        <>
            {/* Improved Animated Button */}
            <motion.button
                whileHover={{
                    scale: 1.05,
                    boxShadow: "0 0 15px rgba(59, 130, 246, 0.5)"
                }}
                whileTap={{ scale: 0.98 }}
                transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 17
                }}
                className="relative bg-gradient-to-r  from-blue-600 to-blue-500 text-white px-5 py-3 rounded-lg font-semibold text-lg flex items-center gap-2 overflow-hidden group cursor-pointer"
                onClick={() => window.open('https://calendly.com/etechnocrat/saas-app')}
            >
                {/* Animated background effect */}
                <motion.span
                    className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isModalOpen ? 0 : 1 }}
                />

                {/* Button content with animation */}
                <motion.div className="relative z-10 flex items-center gap-2">
                    <motion.span
                        animate={{
                            x: [0, 5, 0],
                            transition: {
                                repeat: Infinity,
                                repeatType: "mirror",
                                duration: 2
                            }
                        }}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                            <line x1="16" y1="2" x2="16" y2="6"></line>
                            <line x1="8" y1="2" x2="8" y2="6"></line>
                            <line x1="3" y1="10" x2="21" y2="10"></line>
                        </svg>
                    </motion.span>
                    Let's Work
                </motion.div>
            </motion.button>
        </>
    );
};

export default MeetingButton;
