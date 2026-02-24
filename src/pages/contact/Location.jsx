import { motion } from "framer-motion";
import {
  MapPin,
  Globe,
  Phone,
  Mail,
  Clock,
  ChevronDown,
  CheckCircle,
  ArrowLeft,
  ChevronRight,
} from "lucide-react";
import { useState } from "react";

const Location = () => {
  const [activeLocation, setActiveLocation] = useState(1);
  const [expandedRegion, setExpandedRegion] = useState("americas");

  const regions = {
    americas: {
      name: "Americas",
      locations: [
        {
          id: 1,
          city: "San Francisco",
          country: "United States",
          address: "123 Tech Boulevard, Suite 100",
          postal: "94107",
          phone: "+1 (415) 555-0199",
          email: "sf@example.com",
          hours: "Mon-Fri: 9AM - 6PM PST",
          coordinates: [37.7749, -122.4194],
        },
        {
          id: 2,
          city: "New York",
          country: "United States",
          address: "456 Innovation Avenue",
          postal: "10001",
          phone: "+1 (212) 555-0199",
          email: "ny@example.com",
          hours: "Mon-Fri: 9AM - 6PM EST",
          coordinates: [40.7128, -74.006],
        },
        {
          id: 3,
          city: "Toronto",
          country: "Canada",
          address: "789 Digital Lane",
          postal: "M5V 2H1",
          phone: "+1 (416) 555-0199",
          email: "toronto@example.com",
          hours: "Mon-Fri: 9AM - 6PM EST",
          coordinates: [43.6532, -79.3832],
        },
      ],
    },
    emea: {
      name: "EMEA",
      locations: [
        {
          id: 4,
          city: "London",
          country: "United Kingdom",
          address: "101 Tech Square",
          postal: "EC2A 1AB",
          phone: "+44 20 5555 0199",
          email: "london@example.com",
          hours: "Mon-Fri: 9AM - 6PM GMT",
          coordinates: [51.5074, -0.1278],
        },
        {
          id: 5,
          city: "Berlin",
          country: "Germany",
          address: "200 Innovation Strasse",
          postal: "10178",
          phone: "+49 30 5555 0199",
          email: "berlin@example.com",
          hours: "Mon-Fri: 9AM - 6PM CET",
          coordinates: [52.52, 13.405],
        },
      ],
    },
    apac: {
      name: "APAC",
      locations: [
        {
          id: 6,
          city: "Singapore",
          country: "Singapore",
          address: "30 Future Street",
          postal: "038987",
          phone: "+65 6555 0199",
          email: "singapore@example.com",
          hours: "Mon-Fri: 9AM - 6PM SGT",
          coordinates: [1.3521, 103.8198],
        },
        {
          id: 7,
          city: "Sydney",
          country: "Australia",
          address: "400 Tech Parade",
          postal: "2000",
          phone: "+61 2 5555 0199",
          email: "sydney@example.com",
          hours: "Mon-Fri: 9AM - 6PM AEST",
          coordinates: [-33.8688, 151.2093],
        },
      ],
    },
  };

  const toggleRegion = (region) => {
    setExpandedRegion(expandedRegion === region ? null : region);
  };

  const selectedLocation = Object.values(regions)
    .flatMap((region) => region.locations)
    .find((loc) => loc.id === activeLocation);

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
                                                                    
                                                                            {/* Current Page Indicator - Horizontal on desktop, vertical on mobile */}
                                                                            <div className="flex items-center gap-1 sm:gap-2">
                                                                              <ChevronRight className="text-gray-400 w-4 h-4 hidden sm:block" />
                                                                              
                                                                              <motion.div
                                                                                initial={{ opacity: 0 }}
                                                                                animate={{ opacity: 1 }}
                                                                                transition={{ delay: 0.8 }}
                                                                                className="bg-blue-50 text-blue-600 px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium border border-blue-100 shadow-sm whitespace-nowrap overflow-hidden text-ellipsis max-w-[120px] sm:max-w-none"
                                                                              >
                                                                      Location
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
          <p className="text-sm font-medium text-blue-600">Global Presence</p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">Our Worldwide</span> Locations
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
        >
          We're building a global network of innovation hubs to serve our customers worldwide.
        </motion.p>

        </motion.div>

      </motion.section>

      {/* Main Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Locations List */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/3"
          >
            <div className="bg-blue-50 rounded-xl border border-blue-100 overflow-hidden shadow-sm">
              {Object.entries(regions).map(([key, region]) => (
                <div
                  key={key}
                  className="border-b border-blue-100 last:border-b-0"
                >
                  <button
                    onClick={() => toggleRegion(key)}
                    className="w-full text-left p-6 hover:bg-blue-100/50 transition-colors flex justify-between items-center"
                  >
                    <div className="flex items-center gap-3">
                      <Globe className="text-blue-500" />
                      <h3 className="text-lg font-semibold">{region.name}</h3>
                      <span className="bg-blue-100 text-blue-600 text-xs px-2 py-1 rounded-full">
                        {region.locations.length}
                      </span>
                    </div>
                    <ChevronDown
                      className={`text-blue-500 transform transition-transform ${
                        expandedRegion === key ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {expandedRegion === key && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="divide-y divide-blue-100"
                    >
                      {region.locations.map((location) => (
                        <motion.button
                          key={location.id}
                          onClick={() => setActiveLocation(location.id)}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.2 }}
                          className={`w-full text-left p-6 hover:bg-blue-100/50 transition-colors flex items-start gap-4 ${
                            activeLocation === location.id
                              ? "bg-blue-100"
                              : ""
                          }`}
                        >
                          <MapPin
                            className={`mt-1 flex-shrink-0 ${
                              activeLocation === location.id
                                ? "text-blue-500"
                                : "text-blue-400"
                            }`}
                          />
                          <div>
                            <h4 className="font-medium">{location.city}</h4>
                            <p className="text-sm text-gray-600">
                              {location.country}
                            </p>
                          </div>
                        </motion.button>
                      ))}
                    </motion.div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Location Details & Map */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-2/3"
          >
            {selectedLocation && (
              <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
                {/* Map Placeholder - Replace with actual map component */}
                <div className="h-80 bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="w-12 h-12 mx-auto text-blue-500 mb-4" />
                      <p className="text-gray-800 font-medium">
                        {selectedLocation.city}, {selectedLocation.country}
                      </p>
                      <p className="text-gray-600 text-sm">
                        {selectedLocation.coordinates[0].toFixed(4)},{" "}
                        {selectedLocation.coordinates[1].toFixed(4)}
                      </p>
                    </div>
                  </div>
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="absolute bottom-4 right-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium shadow-sm cursor-pointer"
                  >
                    View on Map
                  </motion.button>
                </div>

                <div className="p-8">
                  <h2 className="text-3xl font-bold mb-6">
                    {selectedLocation.city} Office
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-semibold mb-4">Address</h3>
                      <div className="space-y-4">
                        <div className="flex items-start gap-4">
                          <MapPin className="text-blue-500 mt-1 flex-shrink-0" />
                          <div>
                            <p>{selectedLocation.address}</p>
                            <p className="text-gray-600">
                              {selectedLocation.city}, {selectedLocation.postal}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-4">
                          <Phone className="text-blue-500 mt-1 flex-shrink-0" />
                          <div>
                            <p className="text-gray-600">Phone</p>
                            <p>{selectedLocation.phone}</p>
                          </div>
                        </div>

                        <div className="flex items-start gap-4">
                          <Mail className="text-blue-500 mt-1 flex-shrink-0" />
                          <div>
                            <p className="text-gray-600">Email</p>
                            <p>{selectedLocation.email}</p>
                          </div>
                        </div>

                        <div className="flex items-start gap-4">
                          <Clock className="text-blue-500 mt-1 flex-shrink-0" />
                          <div>
                            <p className="text-gray-600">Hours</p>
                            <p>{selectedLocation.hours}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-4">
                        Office Highlights
                      </h3>
                      <ul className="space-y-3 text-gray-600">
                        <li className="flex items-start gap-2">
                          <CheckCircle
                            className="text-green-500 mt-0.5 flex-shrink-0"
                            size={16}
                          />
                          <span>Dedicated customer meeting rooms</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle
                            className="text-green-500 mt-0.5 flex-shrink-0"
                            size={16}
                          />
                          <span>Secure access with 24/7 availability</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle
                            className="text-green-500 mt-0.5 flex-shrink-0"
                            size={16}
                          />
                          <span>Local support team</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle
                            className="text-green-500 mt-0.5 flex-shrink-0"
                            size={16}
                          />
                          <span>Accessible location</span>
                        </li>
                      </ul>

                      <motion.button
                        whileHover={{ scale: 1.05, boxShadow: "0 0 10px rgba(59, 130, 246, 0.3)" }}
                        whileTap={{ scale: 0.97 }}
                        className="mt-8 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium py-3 px-6 rounded-lg shadow-sm hover:shadow-md transition-all cursor-pointer"
                      >
                        Get Directions
                      </motion.button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Visit Us CTA */}
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
            Plan Your Visit
          </h2>
          <p className="text-blue-100 max-w-2xl mx-auto mb-8 relative z-10">
            Our doors are open. Schedule a visit to any of our global offices to
            meet the team and see our spaces.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(255, 255, 255, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg shadow-lg cursor-pointer"
            onClick={()=>navigate('/get-in-touch')}

            >
              Schedule a Tour
            </motion.button>
            {/* <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg"
            >
              Contact Local Team
            </motion.button> */}
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Location;