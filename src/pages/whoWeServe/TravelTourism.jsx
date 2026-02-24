import { motion } from "framer-motion";
import { Plane, Globe, Map, Hotel, Camera, Utensils, ArrowRight, ChevronDown, Check, Star, Award, Clipboard, Phone, Mail, MessageSquare, Code, Cloud, Lock, ChevronRight, ArrowLeft, Calendar, UserCheck, Zap, Activity, Users } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const TravelTourism = () => {
    const [activeTab, setActiveTab] = useState('solutions');
    const [expandedFeature, setExpandedFeature] = useState(null);
    const [hoveredProject, setHoveredProject] = useState(null);
    const navigate = useNavigate();


    // Stats Data
    const stats = [
        { value: "10M+", label: "Bookings Processed", icon: <Calendar className="text-blue-500" /> },
        { value: "50+", label: "Countries Served", icon: <Globe className="text-blue-500" /> },
        { value: "45%", label: "Better Conversion", icon: <Zap className="text-blue-500" /> },
        { value: "24/7", label: "Global Support", icon: <UserCheck className="text-blue-500" /> }
    ];

    // Why Choose Us Data
    const whyChooseUs = [
        {
            icon: <Code className="text-blue-500" />,
            title: "Travel Tech Specialists",
            description: "Dedicated team with deep expertise in GDS and travel API integrations"
        },
        {
            icon: <Cloud className="text-blue-500" />,
            title: "Cloud-Native Scalability",
            description: "Handle seasonal spikes in booking traffic with ease"
        },
        {
            icon: <Lock className="text-blue-500" />,
            title: "Secure Payments",
            description: "PCI-compliant payment processing for global travel transactions"
        },
        {
            icon: <Activity className="text-blue-500" />,
            title: "Performance First",
            description: "Ultra-fast search and booking responses for better conversion"
        }
    ];

    // Projects Data
    const projects = [
        {
            id: 1,
            title: "Global Booking Engine",
            description: "Custom platform for a leading OTA with multi-currency support",
            tags: ["OTA", "Booking Engine", "Global"],
            image: "/travel-engine.jpg"
        },
        {
            id: 2,
            title: "Tourism Guide App",
            description: "Interactive mobile app for city-wide tourism promotion",
            tags: ["Mobile", "AR Maps", "Tourism"],
            image: "/tourism-app.jpg"
        },
        {
            id: 3,
            title: "Hotel PMS",
            description: "Cloud-based property management system for boutique hotels",
            tags: ["PMS", "Hospitality", "Cloud"],
            image: "/hotel-pms.jpg"
        }
    ];

    // Success Stories Accordion Data
    const caseStudies = [
        {
            id: 1,
            title: "OTA Revenue Growth",
            challenge: "High cart abandonment due to slow booking response times",
            solution: "Modernized booking engine with optimized API responses",
            results: [
                "30% reduction in response time",
                "25% increase in conversion rate",
                "50% lower maintenance costs"
            ]
        },
        {
            id: 2,
            title: "City Tourism Engagement",
            challenge: "Difficulty in engaging tourists with local hidden gems",
            solution: "Mobile app with AI-driven personalized itineraries",
            results: [
                "100k+ downloads in first month",
                "4.8/5 average rating",
                "Significant boost to local business traffic"
            ]
        }
    ];

    // Solutions Data
    const solutions = [
        {
            icon: <Plane className="text-blue-500" />,
            title: "Booking Engines",
            description: "Custom flight, hotel, and activity booking platforms with real-time inventory"
        },
        {
            icon: <Hotel className="text-blue-500" />,
            title: "Property Management",
            description: "Integrated systems for hotel and vacation rental management"
        },
        {
            icon: <Map className="text-blue-500" />,
            title: "Itinerary Builders",
            description: "Dynamic and collaborative trip planning tools for travelers"
        },
        {
            icon: <Camera className="text-blue-500" />,
            title: "Destination Marketing",
            description: "Engaging portals and apps for tourism boards and destinations"
        }
    ];

    // Features Data
    const features = [
        {
            title: "GDS Integration",
            description: "Seamless connectivity with Amadeus, Sabre, and Travelport",
            icon: <Globe className="text-blue-500" />
        },
        {
            title: "AI Personalization",
            description: "Smart recommendation engines based on traveler behavior",
            icon: <Zap className="text-blue-500" />
        },
        {
            title: "Mobile Companions",
            description: "Offline maps, real-time alerts, and digital boarding passes",
            icon: <Map className="text-blue-500" />
        },
        {
            title: "Yield Management",
            description: "Dynamic pricing algorithms to maximize revenue per traveler",
            icon: <Calendar className="text-blue-500" />
        }
    ];

    // Testimonials Data
    const testimonials = [
        {
            quote: "The custom booking engine ITSOL built for us significantly reduced our load times and increased conversions by 25%.",
            author: "Alex Thompson",
            role: "CEO, Wanderlust Travels",
            rating: 5
        },
        {
            quote: "Our destination app has become the #1 resource for tourists visiting our city, thanks to the intuitive design.",
            author: "Sofia Rodriguez",
            role: "Marketing Director, City Tourism Board",
            rating: 5
        }
    ];

    return (
        <div className="min-h-screen bg-white text-gray-800">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="relative top-25 z-1 flex items-center gap-2 sm:gap-4 ml-8 pt-10"
            >
                <motion.button
                    onClick={() => navigate(-1)}
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

                <div className="flex items-center gap-1 sm:gap-2">
                    <ChevronRight className="text-gray-400 w-4 h-4 hidden sm:block" />

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                        className="bg-blue-50 text-blue-600 px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium border border-blue-100 shadow-sm whitespace-nowrap overflow-hidden text-ellipsis max-w-[150px] sm:max-w-none"
                    >
                        Travel & Tourism
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
                <div className="absolute inset-0 overflow-hidden">
                    <motion.div
                        animate={{
                            x: [0, 80, 0],
                            y: [0, 40, 0],
                            transition: { duration: 18, repeat: Infinity, ease: "linear" }
                        }}
                        className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-100 rounded-full filter blur-3xl opacity-50"
                    ></motion.div>
                    <motion.div
                        animate={{
                            x: [0, -80, 0],
                            y: [0, -40, 0],
                            transition: { duration: 22, repeat: Infinity, ease: "linear" }
                        }}
                        className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-blue-100 rounded-full filter blur-3xl opacity-50"
                    ></motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="relative z-10"
                >
                    <motion.div
                        initial={{ y: -20 }}
                        animate={{ y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="mb-6 inline-block bg-gradient-to-r from-blue-100 to-blue-200 px-4 py-2 rounded-full backdrop-blur-sm border border-blue-200"
                    >
                        <p className="text-sm font-medium text-blue-600">Travel Technology Experts</p>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="text-4xl md:text-6xl font-bold mb-6"
                    >
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
                            Travel
                        </span> & Tourism Solutions
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        className="text-xl text-gray-600 max-w-3xl mx-auto mb-10"
                    >
                        Empower travelers with seamless digital experiences and robust back-office systems built for the travel industry
                    </motion.p>

                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <motion.button
                            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(59, 130, 246, 0.3)" }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-3 rounded-xl font-semibold text-lg flex items-center gap-2 shadow-lg cursor-pointer"
                            onClick={() => navigate('/case-studies')}
                        >
                            Explore Solutions <ArrowRight size={20} />
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-white border-2 border-blue-300 hover:border-blue-400 text-blue-500 px-8 py-3 rounded-xl cursor-pointer font-semibold text-lg hover:bg-blue-50"
                            onClick={() => navigate('/get-in-touch')}
                        >
                            Contact Experts
                        </motion.button>
                    </div>
                </motion.div>
            </motion.section>

            {/* Stats Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 text-center hover:shadow-md transition-all"
                        >
                            <div className="flex justify-center mb-4">
                                <div className="bg-blue-100 p-3 rounded-full">
                                    {stat.icon}
                                </div>
                            </div>
                            <p className="text-3xl font-bold text-blue-600 mb-2">{stat.value}</p>
                            <p className="text-gray-600">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-gray-50">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold mb-4">Why Choose ITSOL for Travel Tech</h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">Driving innovation in the global travel and tourism sector</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {whyChooseUs.map((item, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ y: -5 }}
                            className="bg-white p-8 rounded-xl border border-gray-200 hover:shadow-md transition-all"
                        >
                            <div className="bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                            <p className="text-gray-600">{item.description}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Solutions Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold mb-4">Travel Solutions</h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">Scalable technology for agencies, operators, and hospitality</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {solutions.map((solution, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.02 }}
                            className="bg-gray-50 p-8 rounded-xl border border-gray-200 hover:shadow-md transition-all"
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

            {/* Projects Showcase */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-gray-50">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold mb-4">Our Travel Projects</h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">Successful digital transformations in tourism</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <motion.div
                            key={project.id}
                            whileHover={{ scale: 1.03 }}
                            onHoverStart={() => setHoveredProject(project.id)}
                            onHoverEnd={() => setHoveredProject(null)}
                            className="relative overflow-hidden rounded-xl shadow-md bg-white"
                        >
                            <div className="h-64 bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center p-6 text-center">
                                <div>
                                    <Plane className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                                    <h3 className="text-xl font-bold text-blue-800">{project.title}</h3>
                                </div>
                            </div>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: hoveredProject === project.id ? 1 : 0 }}
                                className="absolute inset-0 bg-gradient-to-br from-blue-700/90 to-blue-900/90 flex flex-col justify-end p-6"
                            >
                                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                                <p className="text-blue-100 mb-4">{project.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag, i) => (
                                        <span key={i} className="bg-blue-600/70 text-white px-3 py-1 rounded-full text-sm">{tag}</span>
                                    ))}
                                </div>
                                <button onClick={() => navigate('/case-studies')} className="mt-4 bg-white text-blue-700 px-4 py-2 rounded-lg font-medium flex items-center justify-center gap-2 cursor-pointer">
                                    View Details <ArrowRight size={16} />
                                </button>
                            </motion.div>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                                <p className="text-gray-600 mb-4">{project.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag, i) => (
                                        <span key={i} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Key Features Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold mb-4">Key Features</h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">Advanced capabilities for modern travel platforms</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {features.map((feature, index) => (
                        <motion.div key={index} whileHover={{ scale: 1.02 }} className="bg-white p-8 rounded-xl border border-gray-200 hover:shadow-md transition-all flex items-start gap-6">
                            <div className="bg-blue-100 p-3 rounded-lg flex-shrink-0">
                                {feature.icon}
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                                <p className="text-gray-600">{feature.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Success Stories Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-gray-50">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold mb-4">Travel Success Stories</h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">Proven impact in travel and tourism optimization</p>
                </div>
                <div className="space-y-6">
                    {caseStudies.map((caseStudy) => (
                        <div key={caseStudy.id} className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
                            <button
                                onClick={() => setExpandedFeature(expandedFeature === caseStudy.id ? null : caseStudy.id)}
                                className="w-full text-left p-8 hover:bg-blue-50 transition-colors flex justify-between items-center"
                            >
                                <div>
                                    <h3 className="text-xl font-bold mb-1">{caseStudy.title}</h3>
                                    <p className="text-gray-600">{caseStudy.challenge}</p>
                                </div>
                                <motion.div animate={{ rotate: expandedFeature === caseStudy.id ? 180 : 0 }}>
                                    <ChevronDown className="text-blue-500" />
                                </motion.div>
                            </button>
                            {expandedFeature === caseStudy.id && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    className="px-8 pb-8"
                                >
                                    <div className="mb-6">
                                        <h4 className="font-semibold mb-2">Our Solution</h4>
                                        <p className="text-gray-600">{caseStudy.solution}</p>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-2">Results Achieved</h4>
                                        <ul className="space-y-3">
                                            {caseStudy.results.map((result, i) => (
                                                <li key={i} className="flex items-center gap-2 text-gray-600">
                                                    <Check className="text-blue-500 flex-shrink-0" size={16} />
                                                    <span>{result}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </motion.div>
                            )}
                        </div>
                    ))}
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
                    <p className="text-xl text-gray-600">Trusted by travel agencies and tourism boards</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 sm:px-12">
                    {testimonials.map((testimonial, index) => (
                        <motion.div key={index} className="bg-gray-50 p-8 rounded-xl border border-gray-200 flex flex-col justify-between">
                            <div>
                                <div className="flex mb-4">
                                    {[...Array(5)].map((_, i) => <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />)}
                                </div>
                                <p className="text-gray-600 italic mb-6">"{testimonial.quote}"</p>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                                    <Users className="text-blue-500" />
                                </div>
                                <div>
                                    <p className="font-bold text-gray-900">{testimonial.author}</p>
                                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                                </div>
                            </div>
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
                    className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-12 text-center relative overflow-hidden text-white"
                >
                    {/* Animated background elements */}
                    <motion.div animate={{ x: [0, 100, 0], y: [0, 50, 0] }} transition={{ duration: 15, repeat: Infinity, ease: "linear" }} className="absolute top-0 left-0 w-64 h-64 bg-blue-500/20 rounded-full filter blur-3xl"></motion.div>
                    <motion.div animate={{ x: [0, -100, 0], y: [0, -50, 0] }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} className="absolute bottom-0 right-0 w-80 h-80 bg-blue-500/20 rounded-full filter blur-3xl"></motion.div>

                    <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Travel Business?</h2>
                    <p className="text-blue-100 max-w-2xl mx-auto mb-8">
                        Our team specializes in building secure, scalable travel tech solutions
                    </p>
                    <motion.button
                        whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(255, 255, 255, 0.3)" }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-white text-blue-700 px-8 py-4 rounded-lg font-semibold cursor-pointer mx-auto"
                        onClick={() => navigate('/get-in-touch')}
                    >
                        Get Started
                    </motion.button>
                </motion.div>
            </section>
        </div>
    );
};

export default TravelTourism;
