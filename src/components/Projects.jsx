import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const projectsData = [
  {
    title: "Automating 80% of Customer Interactions with Intelligent AI Agents",
    category: "Artificial Intelligence",
    tags: ["NLP", "Customer Experience", "Automation"],
    stats: "80% Automation Rate",
    quote: "Amelia transformed our customer service operations, handling complex queries instantly and freeing up human agents for high-value interactions.",
    author: "CTO, Leading Enterprise",
    imageUrl: "https://ilt-sa.com/assets/img/new/600x600_AgenticAI.jpg",
    id: 1,
  },
  {
    title: "Processing $1B+ in Supplier Transactions with Real-Time Analytics",
    category: "FinTech",
    tags: ["Financial Ops", "Data Visualization", "Security"],
    stats: "$1B+ Transacted Securely",
    quote: "The Thomas Platform gives us unprecedented visibility into our financial flows, reducing reconciliation time by over 90%.",
    author: "CFO, Thomas International",
    imageUrl: "https://ilt-sa.com/assets/img/new-portfolio/thomas-platform.webp",
    id: 2,
  },
  {
    title: "Scaling Corporate Service Delivery & EV Charging Infrastructure",
    category: "CleanTech / SaaS",
    tags: ["IoT Integration", "Service Management"],
    stats: "200% User Growth",
    quote: "A robust platform that allowed us to scale our charging infrastructure and corporate service delivery effortlessly across multiple regions.",
    author: "Product Director, Implement Plus",
    imageUrl: "https://ilt-sa.com/assets/img/new-portfolio/implement.webp",
    id: 3,
  },
  {
    title: "Boosting Workforce Productivity by 40% with Intelligent Scheduling",
    category: "SaaS / Efficiency",
    tags: ["Automation", "Resource Planning", "Workflow"],
    stats: "40% Efficiency Gain",
    quote: "TekTIME replaced three separate tools, unifying our scheduling, collaboration, and reporting into one seamless, automated workflow.",
    author: "Founder, TekTIME",
    imageUrl: "https://ilt-sa.com/assets/img/portfolio-pages/tektime.png",
    id: 4,
  },
];

const Projects = () => {
  const targetRef = useRef(null);
  const navigate = useNavigate();
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-80%"]);

  return (
    <section ref={targetRef} className="relative h-[400vh] bg-white">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden w-full">

        {/* LEFT COLUMN: Sticky Header (Static) */}
        <div className="w-[30%] h-full flex flex-col justify-center pl-8 md:pl-20 pr-4 shrink-0 relative z-20 bg-white">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-12 h-1 bg-blue-600 rounded-full"></div>
            <span className="text-blue-600 font-semibold tracking-wider uppercase">Success Stories</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            Featured <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-500">Growth Stories</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-sm mt-8 hidden md:block">
            See how we help businesses scale, optimize, and transform. Real results, real growth.
          </p>
          <button
            onClick={() => navigate('/portfolio')}
            className="mt-8 px-6 py-3 bg-gray-900 text-white rounded-full font-medium w-fit hover:bg-gray-800 transition-colors flex items-center gap-2 shadow-lg cursor-pointer hidden md:flex"
          >
            View Case Studies <ArrowRight size={20} />
          </button>
        </div>

        {/* RIGHT COLUMN: Horizontal Scroll Mask (Overflow Hidden) */}
        <div className="w-[70%] h-full overflow-hidden flex items-center relative z-10 bg-gray-50/50">
          {/* Mask Gradient on Left edge */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-20 pointer-events-none"></div>

          <motion.div style={{ x }} className="flex gap-8 pl-10 pr-20 items-center h-full">
            {projectsData.map((project) => (
              <div
                key={project.id}
                className="group relative h-[60vh] md:h-[70vh] w-[80vw] md:w-[45vw] overflow-hidden rounded-3xl bg-white border border-gray-200 shadow-xl shrink-0 cursor-pointer flex flex-col hover:shadow-2xl transition-all duration-300"
                onClick={() => navigate(`/case-study/${project.id}`)}
              >
                {/* Background with Overlay - subtly visible */}
                <div
                  style={{
                    backgroundImage: `url(${project.imageUrl})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                  className="absolute inset-0 transition-transform duration-700 group-hover:scale-110 opacity-20"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-white via-white/80 to-transparent" />

                {/* Content Container */}
                <div className="relative z-10 h-full p-8 flex flex-col justify-between">

                  {/* Top: Tags & Title */}
                  <div>
                    <div className="flex flex-wrap gap-2 mb-6">
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full border border-blue-200">
                        {project.category}
                      </span>
                      {project.tags.slice(0, 2).map((tag, idx) => (
                        <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full border border-gray-200">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 leading-tight">
                      {project.title}
                    </h3>
                    {project.stats && (
                      <p className="text-xl font-bold text-blue-600 mt-2">{project.stats}</p>
                    )}
                  </div>

                  {/* Bottom: Testimonial */}
                  <div className="border-t border-gray-200 pt-4 mt-4">
                    <div className="flex gap-4">
                      <div className="w-1 h-full bg-blue-500 rounded-full min-h-[40px]"></div>
                      <div>
                        <p className="text-gray-700 text-base italic mb-1 line-clamp-3">"{project.quote}"</p>
                        <p className="text-gray-500 font-medium text-xs">— {project.author}</p>
                      </div>
                    </div>
                  </div>

                  {/* Hover Arrow */}
                  <div className="absolute top-6 right-6 hidden md:flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 text-blue-600 transition-transform duration-300 group-hover:rotate-45 group-hover:bg-blue-600 group-hover:text-white">
                    <ArrowUpRight size={20} />
                  </div>

                </div>
              </div>
            ))}

            {/* End Card - More Prominent */}
            <div className="w-[80vw] md:w-[35vw] shrink-0 flex flex-col items-center justify-center bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl h-[60vh] md:h-[70vh] shadow-2xl text-white relative overflow-hidden group cursor-pointer" onClick={() => navigate('/portfolio')}>
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
              <div className="relative z-10 text-center px-8">
                <h3 className="text-3xl md:text-5xl font-bold mb-6">Want to see more?</h3>
                <p className="text-blue-100 text-lg mb-8 max-w-md mx-auto">Explore our full portfolio.</p>
                <button
                  className="h-20 w-20 rounded-full bg-white text-blue-600 flex items-center justify-center hover:scale-110 transition-all shadow-xl mx-auto"
                >
                  <ArrowRight size={32} />
                </button>
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects;