"use client";

import { motion } from "framer-motion";
import {
  Users,
  Award,
  Globe,
  Clock,
  Mail,
  Linkedin,
  Github,
  Twitter,
  ArrowLeft,
  ChevronRight,
} from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

import { TeamData } from "@/lib/cms-defaults";

const Team = ({ data }: { data: TeamData }) => {
  const router = useRouter();
  const [activeDepartment, setActiveDepartment] = useState("all");
  const [hoveredMember, setHoveredMember] = useState<string | null>(null);

  const departments = [
    { id: "all", label: "All Team" },
    { id: "leadership", label: "Leadership" },
    { id: "engineering", label: "Engineering" },
    { id: "design", label: "Design" },
    { id: "product", label: "Product" },
  ];

  const team = data.members;

  return (
    <div className="min-h-screen bg-gray-50">
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
            backgroundColor: "rgba(59, 130, 246, 0.1)",
          }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-1 sm:gap-2 bg-white/80 backdrop-blur-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-gray-200 shadow-md hover:shadow-lg transition-all cursor-pointer"
        >
          <ArrowLeft className="text-blue-500 w-4 h-4 sm:w-5 sm:h-5" />
          <span className="text-xs sm:text-sm font-medium text-gray-700">
            Back
          </span>
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
            Team
          </motion.div>
        </div>
      </motion.div>

      {/* Hero Section */}
      <section className="bg-white py-20 lg:py-32 text-center px-4 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-50 skew-x-12 opacity-50"></div>
          <div className="absolute bottom-0 left-0 w-1/4 h-2/3 bg-blue-50 -skew-x-12 opacity-50"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 max-w-4xl mx-auto"
        >
          <span className="text-blue-600 font-semibold tracking-wider uppercase mb-4 block">
            Our People
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
            {data.heading}
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {data.subheading}
          </p>
        </motion.div>
      </section>

      {/* Team Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {departments.map((dept) => (
            <button
              key={dept.id}
              onClick={() => setActiveDepartment(dept.id)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                activeDepartment === dept.id
                  ? "bg-blue-600 text-white shadow-lg scale-105"
                  : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
              }`}
            >
              {dept.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {team
            .filter(
              (member) =>
                activeDepartment === "all" ||
                member.department === activeDepartment,
            )
            .map((member, index) => (
              <motion.div
                key={member.name + index}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                onHoverStart={() => setHoveredMember(member.name)}
                onHoverEnd={() => setHoveredMember(null)}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className="aspect-[4/5] relative overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <p className="text-white/90 mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      {member.bio}
                    </p>
                    <div className="flex gap-4">
                      {Object.entries(member.socials || {}).map(
                        ([platform, link]) => (
                          <a
                            key={platform}
                            href={link}
                            className="text-white/80 hover:text-white bg-white/20 hover:bg-white/30 p-2 rounded-full backdrop-blur-sm transition-colors"
                          >
                            {platform === "linkedin" && <Linkedin size={18} />}
                            {platform === "twitter" && <Twitter size={18} />}
                            {platform === "github" && <Github size={18} />}
                          </a>
                        ),
                      )}
                    </div>
                  </div>
                </div>

                <div className="p-6 border-t border-gray-100 relative bg-white z-10">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 font-medium text-sm">
                    {member.role}
                  </p>
                </div>
              </motion.div>
            ))}
        </div>
      </section>

      {/* Values CTA */}
      <section className="py-20 bg-blue-900 text-white text-center px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Want to Join the Team?</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            We&apos;re always looking for talented individuals to join our
            mission. Check out our open positions.
          </p>
          <button
            onClick={() => router.push("/careers")}
            className="bg-white text-blue-900 px-8 py-3 rounded-full font-bold hover:bg-blue-50 transition-colors shadow-lg"
          >
            View Openings
          </button>
        </div>
      </section>
    </div>
  );
};

export default Team;
