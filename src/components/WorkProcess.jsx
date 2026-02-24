import { motion } from "framer-motion";
import { Search, PenTool, Code, Rocket } from "lucide-react";

const steps = [
    {
        num: "01",
        title: "Discovery & Strategy",
        description: "We dive deep into your goals, user needs, and market landscape to build a solid foundation.",
        icon: Search,
    },
    {
        num: "02",
        title: "Design & UX/UI",
        description: "We craft intuitive, engaging interfaces that look beautiful and work seamlessly.",
        icon: PenTool,
    },
    {
        num: "03",
        title: "Development",
        description: "Our experts write clean, scalable, and secure code to bring the designs to life.",
        icon: Code,
    },
    {
        num: "04",
        title: "Launch & Growth",
        description: "We deploy with confidence and provide ongoing support to ensure continued success.",
        icon: Rocket,
    },
];

const WorkProcess = () => {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-blue-600 font-semibold tracking-wider text-sm uppercase">How We Work</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
                        Our Proven <span className="text-blue-600">Process</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-gray-100 z-0" />

                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="relative z-10 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all group"
                        >
                            <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 text-xl font-bold group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                                <step.icon size={24} />
                            </div>

                            <div className="absolute top-6 right-6 text-4xl font-black text-gray-50 opacity-50 select-none group-hover:opacity-20 transition-opacity">
                                {step.num}
                            </div>

                            <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                {step.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WorkProcess;
