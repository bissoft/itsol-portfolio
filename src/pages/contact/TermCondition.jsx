import { motion } from "framer-motion";
import {
  FileText,
  User,
  Lock,
  ShieldCheck,
  AlertTriangle,
  DollarSign,
  Globe,
  Timer,
  RefreshCcw,
  Mail,
} from "lucide-react";

const TermCondition = () => {
  const sections = [
    {
      icon: <FileText className="text-blue-500" size={28} />,
      title: "1. Acceptance of Terms",
      content:
        "By accessing and using this platform, you agree to be bound by these Terms and Conditions and all applicable laws and regulations. If you do not agree, you are prohibited from using or accessing the site.",
    },
    {
      icon: <User className="text-blue-500" size={28} />,
      title: "2. User Responsibilities",
      content:
        "You agree to use our services for lawful purposes only. You are responsible for maintaining the confidentiality of your account and password, and for restricting access to your device.",
    },
    {
      icon: <Lock className="text-blue-500" size={28} />,
      title: "3. Privacy",
      content:
        "Your use of our platform is also governed by our Privacy Policy. By using the platform, you consent to the collection and use of your information in accordance with our Privacy Policy.",
    },
    {
      icon: <ShieldCheck className="text-blue-500" size={28} />,
      title: "4. Intellectual Property",
      content:
        "All content, trademarks, and intellectual property on the platform are owned by us or our licensors. You may not use, reproduce, or distribute any material without our written permission.",
    },
    {
      icon: <AlertTriangle className="text-blue-500" size={28} />,
      title: "5. Prohibited Conduct",
      content:
        "You agree not to misuse the platform in any way, including but not limited to hacking, uploading malicious code, impersonating others, or violating any local, state, national, or international law.",
    },
    {
      icon: <DollarSign className="text-blue-500" size={28} />,
      title: "6. Payment and Billing",
      content:
        "All payments are processed securely through third-party providers. You are responsible for all charges incurred through your account and must provide valid billing information.",
    },
    {
      icon: <Globe className="text-blue-500" size={28} />,
      title: "7. Third-Party Services",
      content:
        "Our platform may include links or integrations to third-party services. We are not responsible for the content or functionality of these third parties and encourage you to review their terms.",
    },
    {
      icon: <Timer className="text-blue-500" size={28} />,
      title: "8. Termination of Use",
      content:
        "We reserve the right to suspend or terminate your access at any time, without notice, for conduct that we believe violates these Terms or is harmful to other users, us, or third parties.",
    },
    {
      icon: <RefreshCcw className="text-blue-500" size={28} />,
      title: "9. Modifications",
      content:
        "We may revise these Terms and Conditions at any time without notice. By using this platform, you agree to be bound by the current version of these terms.",
    },
    {
      icon: <Mail className="text-blue-500" size={28} />,
      title: "10. Contact Us",
      content:
        "If you have any questions or concerns about these Terms, feel free to contact us at support@yourcompany.com.",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Hero Section */}
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
            <p className="text-sm font-medium text-blue-600">Legal Notice</p>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
          >
            Terms & <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">Conditions</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Please read these Terms carefully before using our services.
          </motion.p>
        </div>
      </motion.section>

      {/* Content Sections */}
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

export default TermCondition;
