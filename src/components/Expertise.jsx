import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ArrowRight, X } from "lucide-react";

const expertiseData = [
  {
    title: "UI/UX Design",
    description: "Crafting intuitive and accessible user interfaces that drive engagement and conversions.",
    details: [
      "User Research & Personas",
      "Wireframing & Prototyping",
      "Design Systems",
      "Interaction Design"
    ],
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Web Development",
    description: "Building robust, scalable, and high-performance web applications using modern technologies.",
    details: [
      "React, Vue, Angular",
      "Node.js & Python",
      "PWA Development",
      "E-commerce Solutions"
    ],
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Mobile Apps",
    description: "Developing native and cross-platform mobile applications for iOS and Android.",
    details: [
      "React Native & Flutter",
      "iOS (Swift) & Android (Kotlin)",
      "App Store Optimization",
      "Mobile Strategy"
    ],
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Cloud Solutions",
    description: "Architecting secure and scalable cloud infrastructure for your digital products.",
    details: [
      "AWS & Azure",
      "DevOps & CI/CD",
      "Microservices",
      "Serverless Architecture"
    ],
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "AI & ML",
    description: "Leveraging artificial intelligence to automate processes and gain data-driven insights.",
    details: [
      "Predictive Analytics",
      "Natural Language Processing",
      "Computer Vision",
      "Recommendation Engines"
    ],
    image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?auto=format&fit=crop&q=80&w=800"
  }
];

const Expertise = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-65%"]);
  const [selectedExpertise, setSelectedExpertise] = useState(null);

  return (
    <section ref={targetRef} className="h-[300vh] bg-white relative">
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 w-full mb-12">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-blue-600 font-bold tracking-widest uppercase mb-2">Our Capabilities</h2>
              <h3 className="text-4xl md:text-5xl font-bold text-gray-900">Areas of Expertise</h3>
            </div>
            <div className="hidden md:flex gap-4">
              <div className="p-3 bg-gray-100 rounded-full text-gray-500">
                <ArrowRight size={24} className="rotate-180" />
              </div>
              <div className="p-3 bg-blue-600 rounded-full text-white animate-pulse">
                <ArrowRight size={24} />
              </div>
            </div>
          </div>
        </div>

        <motion.div style={{ x }} className="flex gap-8 px-4 md:px-20">
          {expertiseData.map((item, index) => (
            <div
              key={index}
              className="group relative h-[450px] w-[350px] md:w-[450px] flex-shrink-0 bg-white rounded-3xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-100"
              onClick={() => setSelectedExpertise(item)}
            >
              <div className="absolute inset-0">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-80 group-hover:opacity-70 transition-opacity" />
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-gray-200 line-clamp-2 mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  {item.description}
                </p>
                <button className="flex items-center gap-2 text-white font-semibold group-hover:gap-4 transition-all">
                  Learn More <ArrowRight size={18} />
                </button>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Modal for Details */}
      <AnimatePresence>
        {selectedExpertise && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
            onClick={() => setSelectedExpertise(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedExpertise(null)}
                className="absolute top-6 right-6 p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors z-10"
              >
                <X size={24} className="text-gray-600" />
              </button>

              <div className="grid md:grid-cols-2">
                <div className="h-64 md:h-auto relative">
                  <img src={selectedExpertise.image} alt={selectedExpertise.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-blue-600/20 mix-blend-multiply" />
                </div>
                <div className="p-8 md:p-12">
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">{selectedExpertise.title}</h3>
                  <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                    {selectedExpertise.description}
                  </p>

                  <h4 className="font-semibold text-gray-900 mb-4 uppercase tracking-wider text-sm">What We Deliver</h4>
                  <ul className="space-y-3">
                    {selectedExpertise.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-gray-700 p-3 bg-gray-50 rounded-xl">
                        <div className="w-2 h-2 rounded-full bg-blue-500" />
                        {detail}
                      </li>
                    ))}
                  </ul>

                  <button className="mt-8 w-full py-4 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/30">
                    Start Project
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Expertise;