import React from "react";
import { motion } from "framer-motion";
import { Linkedin, Twitter, Mail, Github } from "lucide-react";

const teamMembers = [
  {
    name: "Alex Morgan",
    role: "CEO & Founder",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400",
    bio: "Ex-Google tech lead with 15+ years of experience in distributed systems and AI.",
  },
  {
    name: "Sarah Chen",
    role: "CTO",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400",
    bio: "Full-stack architect specializing in scalable cloud infrastructure and microservices.",
  },
  {
    name: "James Wilson",
    role: "Head of Design",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400",
    bio: "Award-winning designer with a passion for creating intuitive and beautiful user experiences.",
  },
  {
    name: "Maria Garcia",
    role: "Lead Developer",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400",
    bio: "Expert in React and Node.js ecosystems, leading our frontend engineering initiatives.",
  },
];

const TeamSection = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-50/50 rounded-full blur-3xl opacity-50 pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-purple-50/50 rounded-full blur-3xl opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            Meet Our <span className="text-blue-600">Experts</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A diverse team of passionate technologists dedicated to building the future of software.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity" />
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Social Overlay */}
                <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-4 z-20 translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <a href="#" className="p-2 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-blue-600 hover:text-white transition-colors">
                    <Linkedin size={18} />
                  </a>
                  <a href="#" className="p-2 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-blue-400 hover:text-white transition-colors">
                    <Twitter size={18} />
                  </a>
                  <a href="#" className="p-2 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-gray-800 hover:text-white transition-colors">
                    <Github size={18} />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-4">{member.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {member.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </div>


        <div className="mt-16 text-center">
        </div>
      </div>

      {/* Global Team Gallery Section */}
      <div className="mt-24 py-24 bg-gray-900 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-white mb-6"
          >
            We're a <span className="text-lime-400">global team</span> of innovators
          </motion.h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Navigate complex digital initiatives with confidence, propelling your journey towards innovation and growth.
          </p>
        </div>

        {/* Draggable/Overflow Image Gallery */}
        <div className="flex gap-6 overflow-x-auto pb-8 snap-x no-scrollbar pl-4 md:pl-[calc(50vw-42rem)] pr-4">
          {[
            "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=800"
          ].map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="min-w-[300px] md:min-w-[400px] h-[300px] rounded-2xl overflow-hidden shadow-2xl relative snap-center"
            >
              <img src={img} alt="Team culture" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;