import { motion } from "framer-motion";
import {
  ShieldCheck,
  Lock,
  Globe,
  UserCheck,
  FileText,
  Eye,
  Clock,
  AlertCircle,
  Baby,
  RefreshCcw,
  Mail,
} from "lucide-react";

const PrivacyPolicy = () => {
  const sections = [
    {
      icon: <ShieldCheck className="text-blue-500" size={28} />,
      title: "1. Information We Collect",
      content:
        "We collect personal data that you voluntarily provide to us, such as your name, email address, and payment information. We may also collect technical data like IP address, browser type, device information, and usage activity automatically when you use our platform.",
    },
    {
      icon: <Lock className="text-blue-500" size={28} />,
      title: "2. How We Use Your Data",
      content:
        "We use the information we collect to deliver, improve, and personalize our services. This includes processing transactions, responding to support requests, sending notifications, and analyzing how users interact with the platform.",
    },
    {
      icon: <UserCheck className="text-blue-500" size={28} />,
      title: "3. Sharing Your Information",
      content:
        "We do not sell your personal data. We only share it with trusted third-party service providers under contractual obligations to protect your data and use it solely for providing services on our behalf.",
    },
    {
      icon: <Globe className="text-blue-500" size={28} />,
      title: "4. International Transfers",
      content:
        "Your data may be transferred and stored in countries outside of your own. In such cases, we ensure that adequate data protection and legal safeguards are in place to maintain your privacy.",
    },
    {
      icon: <Eye className="text-blue-500" size={28} />,
      title: "5. Cookies & Tracking Technologies",
      content:
        "We use cookies and similar tracking technologies to analyze usage patterns, remember preferences, and enhance your user experience. You can control cookie settings through your browser preferences.",
    },
    {
      icon: <Clock className="text-blue-500" size={28} />,
      title: "6. Data Retention",
      content:
        "We retain your data only as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required by law or for legal obligations.",
    },
    {
      icon: <FileText className="text-blue-500" size={28} />,
      title: "7. Your Rights & Choices",
      content:
        "You have the right to access, update, delete, or restrict the processing of your personal data. You may also opt out of marketing communications or object to how we use your data.",
    },
    {
      icon: <AlertCircle className="text-blue-500" size={28} />,
      title: "8. Security Measures",
      content:
        "We implement industry-standard security measures, including encryption, access controls, and secure storage to protect your information. However, no system is 100% secure, and we cannot guarantee absolute protection.",
    },
    {
      icon: <Baby className="text-blue-500" size={28} />,
      title: "9. Children’s Privacy",
      content:
        "Our services are not intended for children under 13. We do not knowingly collect data from minors. If we become aware of such collection, we take steps to delete the information immediately.",
    },
    {
      icon: <RefreshCcw className="text-blue-500" size={28} />,
      title: "10. Changes to This Policy",
      content:
        "We may update this Privacy Policy periodically to reflect changes in our practices. We’ll notify you via email or prominent notice on our platform when changes are significant.",
    },
    {
      icon: <Mail className="text-blue-500" size={28} />,
      title: "11. Contact Us",
      content:
        "If you have any questions, concerns, or requests related to your personal data or this Privacy Policy, please contact us at privacy@yourcompany.com.",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Hero */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center relative overflow-hidden"
      >
        {/* Decorative Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-blue-100 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-100 rounded-full filter blur-3xl"></div>
        </div>

        <div className="relative z-10">
          <motion.div
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-6 inline-block bg-gradient-to-r from-blue-100 to-blue-200 px-6 py-2 rounded-full backdrop-blur-sm border border-blue-200"
          >
            <p className="text-sm font-medium text-blue-600">Privacy Commitment</p>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
          >
            Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">Privacy Policy</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Transparency and protection of your personal information is our top priority.
          </motion.p>
        </div>
      </motion.section>

      {/* Policy Sections */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-16">
        {sections.map((section, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08 }}
            className="bg-blue-50 p-6 md:p-8 rounded-xl border border-blue-100 shadow-sm"
          >
            <div className="flex items-start gap-4 mb-4">
              <div>{section.icon}</div>
              <h2 className="text-xl md:text-2xl font-semibold text-blue-600">{section.title}</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">{section.content}</p>
          </motion.div>
        ))}
      </section>

    </div>
  );
};

export default PrivacyPolicy;
