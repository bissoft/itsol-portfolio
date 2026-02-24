import { motion } from "framer-motion";

const clients = [
  { name: "ConDoor Solutions", logo: "https://ilt-sa.com/assets/img/partners/gp07.jpg" },
  { name: "Superema", logo: "https://ilt-sa.com/assets/img/partners/gp02.jpg" },
  { name: "FAAC", logo: "https://ilt-sa.com/assets/img/partners/gp03.jpg" },
  { name: "CAME", logo: "https://ilt-sa.com/assets/img/partners/gp04.jpg" },
  { name: "Dormakaba", logo: "https://ilt-sa.com/assets/img/partners/gp05.jpg" },
  { name: "High Speed Door", logo: "https://ilt-sa.com/assets/img/partners/gp06.jpg" },
  { name: "Partner 7", logo: "https://ilt-sa.com/assets/img/partners/gp08.jpg" },
  { name: "Partner 8", logo: "https://ilt-sa.com/assets/img/partners/gp01.jpg" },
];

// Fallback to duplicating known good ones if we want a longer list for smooth scrolling (4 sets)
const marqueeClients = [...clients, ...clients, ...clients, ...clients];

const ClientsSection = () => {
  return (
    <section className="py-10 bg-white overflow-hidden relative border-b border-gray-100">

      <div className="max-w-7xl mx-auto px-6 mb-8 text-center">
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 tracking-tight mb-4">
          Trusted by Industry Leaders
        </h2>
        <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full"></div>
      </div>

      <div className="relative flex overflow-x-hidden group">

        {/* Gradient Masks for smooth fade out at edges */}
        <div className="absolute inset-y-0 left-0 w-32 md:w-64 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-32 md:w-64 bg-gradient-to-l from-white to-transparent z-10" />

        <motion.div
          className="flex gap-16 md:gap-24 items-center whitespace-nowrap py-4"
          animate={{ x: ["0%", "-25%"] }} // Scroll 1/4th (one full set) then reset
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {marqueeClients.map((client, index) => (
            <div
              key={index}
              className="flex-shrink-0 relative w-32 h-16 md:w-40 md:h-20 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="w-full h-full object-contain"
                onError={(e) => {
                  e.target.style.display = 'none'; // Hide if broken
                }}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ClientsSection;