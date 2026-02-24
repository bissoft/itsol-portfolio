import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./Layout/Navbar";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Hero from "./Layout/Hero";
import ClientsSection from "./components/ClientSection";
import ServicesSection from "./components/ServicesSection";
import Projects from "./components/Projects";
import WhyChooseUs from "./components/WhyChooseUs";
import ItsolValue from "./components/ItsolValue";
import CompanyStats from "./components/CompanyStats";
import Awards from "./components/Awards";
import Partners from "./components/Partners";
import LeadMagnet from "./components/LeadMagnet";
import Insights from "./components/Insights";
import ClientConversations from "./components/ClientConversations";

import TechStack from "./components/TechStack";
import TeamSection from "./components/TeamSection";
import HireTeam from "./components/HireTeam.jsx";
import EngagementModels from "./components/EngagementModels";
import IndustriesSection from "./components/IndustriesSection";
import Expertise from "./components/Expertise";
import Testimonials from "./components/Testimonials";
import FaqSection from "./components/FaqSection";

import { Toaster } from "react-hot-toast";
import {
  database,
  ref,
  onDisconnect,
  onValue,
  set,
  serverTimestamp,
} from "./Firebase";

//What We Do Pages
import ProductEngineering from "./pages/ProductEngineering";
import WebAppDevelopment from "./pages/WebAppDevelopment";
import CustomSoftwareDevelopment from "./pages/CustomSoftwareDevelopment";
import MobileAppDevelopment from "./pages/MobileAppDevelopment";
import DataAndAi from "./pages/DataAndAi";
import DevOpsAndCloud from "./pages/DevOpsAndCloud";
import EmergingTechnologies from "./pages/EmergingTechnologies";
import BlockChainAndWeb3 from "./pages/BlockChainAndWeb3";

//Who We Serve Pages
import StartUp from "./pages/whoWeServe/StartUp";
import Enterprises from "./pages/whoWeServe/Enterprises";
import RescueProjects from "./pages/whoWeServe/RescueProjects";

//How We Engage Pages
import ProductDevelopment from "./pages/howWeEngage/ProductDevelopment";
import ManagedItSystems from "./pages/howWeEngage/ManagedItSystems";
import TeamAugmentation from "./pages/howWeEngage/TeamAugmentation";

//Hire Dev Pages
import DedicatedDevelopers from "./pages/hireDev/DedicatedDevelopers";
import RemoteTeams from "./pages/hireDev/RemoteTeams";
import StaffAugmentation from "./pages/hireDev/StaffAugmentation";

//Company Pages
import AboutUs from "./pages/company/AboutUs";
import Portfolio from "./pages/company/Portfolio";
import Careers from "./pages/company/Careers";
import Team from "./pages/company/Team";

//Contact Pages
import GetInTouch from "./pages/contact/GetInTouch";
import Sales from "./pages/contact/Sales";
import Support from "./pages/contact/Support";
import Location from "./pages/contact/Location";
import ScheduleDemo from "./pages/contact/ScheduleDemo";
import Feedback from "./pages/contact/Feedback";
import PrivacyPolicy from "./pages/contact/PrivacyPolicy";
import TermCondition from "./pages/contact/TermCondition";
import SoftwareQualityAssurance from "./pages/SoftwareQualityAssurance";
import TestingApproach from "./pages/TestingApproach";
import ApplicationModernization from "./pages/ApplicationModernization";
import CustomerExperienceOptimizationServices from "./pages/CustomerExperienceOptimizationServices";
import EcommerceDigitalCommerceSolution from "./pages/EcommerceDigitalCommerceSolution";
import ContainerizationServices from "./pages/ContainerizationServices";
import MonitoringLoggingServices from "./pages/MonitoringLoggingServices";
import CyberSecurityServices from "./pages/CyberSecurityServices.jsx";
import Fintech from "./pages/whoWeServe/Fintech.jsx";
import RealEstate from "./pages/whoWeServe/RealEstate.jsx";
import Healthcare from "./pages/whoWeServe/HealthCare.jsx";
import FoodGroceries from "./pages/whoWeServe/FoodGroceries.jsx";
import EducationTechnology from "./pages/whoWeServe/EducationTechnology.jsx";
import SupplyChainLogistics from "./pages/whoWeServe/SupplyChainLogistics.jsx";
import TravelTourism from "./pages/whoWeServe/TravelTourism.jsx";
import DedicatedTeam from "./pages/howWeEngage/DedicatedTeam.jsx";
import TechnicalSupportServices from "./pages/howWeEngage/TechnicalSupportServices.jsx";
import FixedPrice from "./pages/howWeEngage/FixedPrice.jsx";
import HireElixirDevelopers from "./pages/hireDev/HireElixirDevelopers.jsx";
import HireRorDevelopers from "./pages/hireDev/HireRorDevelopers.jsx";
import HirePythonDevelopers from "./pages/hireDev/HirePythonDevelopers.jsx";
import HireDjangoDevelopers from "./pages/hireDev/HireDjangoDevelopers.jsx";
import HireNodeJsDevelopers from "./pages/hireDev/HireNodejsDevelopers.jsx";
import JavaScriptDevelopmentCompany from "./pages/hireDev/JavascriptDevelopmentCompany.jsx";
import HireReactJsDevelopers from "./pages/hireDev/HireReactJsDevelopers.jsx";
import HireGolangDevelopers from "./pages/hireDev/HireGolangDevelopers.jsx";
import HireAngularDevelopers from "./pages/hireDev/HireAngularDevelopers.jsx";
import HireTypeScriptDevelopers from "./pages/hireDev/HireTypescriptDevelopers.jsx";
import HireFlutterDevelopers from "./pages/hireDev/HireFlutterDevelopers.jsx";
import HireAndroidDevelopers from "./pages/hireDev/HireAndroidDevelopers.jsx";
import HireIosDevelopers from "./pages/hireDev/HireIosDevelopers.jsx";
import HireProductManager from "./pages/hireDev/HireProductManager.jsx";
import HireSaaSDevelopers from "./pages/hireDev/HireSaasDeveloper.jsx";
import HireMERNStackDevelopers from "./pages/hireDev/HireMernStackDevelopers.jsx";
import HireCTO from "./pages/hireDev/HireCTO.jsx";
import CaseStudies from "./pages/company/CaseStudies.jsx";
import ScrollToTop from "./Layout/ScrollToTop.jsx";
import ScrollToTopButton from "./Layout/ScrollToTopButton.jsx";
import ChatBot from "./components/ChatBot.jsx";
import CaseStudyDetail from "./pages/company/CaseStudyDetail.jsx";
import PlatformConsulting from "./pages/PlatformConsulting.jsx";
import UiUxDesign from "./pages/UiUxDesign.jsx";

function App() {
  const [onlineCount, setOnlineCount] = useState(0);

  useEffect(() => {
    const userId = `user_${Date.now()}`;
    const userRef = ref(database, `onlineUsers/${userId}`);

    set(userRef, {
      online: true,
      timestamp: serverTimestamp(),
    });

    onDisconnect(userRef).remove();

    const allUsersRef = ref(database, "onlineUsers");

    onValue(allUsersRef, (snapshot) => {
      const users = snapshot.val();
      const activeUsersCount = users ? Object.keys(users).length : 0;
      setOnlineCount(activeUsersCount);
    });

    return () => {
      set(userRef, null);
    };
  }, []);

  return (
    <Router>
      {/* Global Components */}
      <ScrollToTop />

      <Navbar />
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <CompanyStats />
                <ServicesSection />
                <Projects />
                <ClientConversations />
                <Partners />

                <WhyChooseUs />

                <Awards />
                <ItsolValue />
                <IndustriesSection />
                <EngagementModels />
                <LeadMagnet />

                <Testimonials />
                {/* <HireTeam /> */}
                <TechStack />
                <TeamSection />
                <Insights />
                <FaqSection />
              </>
            }
          />
          {/* What We Do Pages */}
          <Route path="/product-engineering" element={<ProductEngineering />} />
          <Route path="/web-app-development" element={<WebAppDevelopment />} />
          <Route
            path="/custom-software-development"
            element={<CustomSoftwareDevelopment />}
          />
          <Route
            path="/mobile-app-development"
            element={<MobileAppDevelopment />}
          />
          <Route path="/data-&-ai" element={<DataAndAi />} />
          <Route path="/devops-&-cloud" element={<DevOpsAndCloud />} />
          <Route
            path="/emerging-technologies"
            element={<EmergingTechnologies />}
          />
          <Route
            path="/software-quality-accurance"
            element={<SoftwareQualityAssurance />}
          />
          <Route path="/testing-approach" element={<TestingApproach />} />
          <Route path="/blockchain-&-web3.0" element={<BlockChainAndWeb3 />} />
          <Route
            path="/ecommerce-digital-commerce-solution"
            element={<EcommerceDigitalCommerceSolution />}
          />

          <Route
            path="/application-modernization"
            element={<ApplicationModernization />}
          />

          <Route
            path="/cx-optimization-services"
            element={<CustomerExperienceOptimizationServices />}
          />
          <Route
            path="/containerization-and-orchestration-services"
            element={<ContainerizationServices />}
          />
          <Route
            path="/monitoring-and-logging"
            element={<MonitoringLoggingServices />}
          />
          <Route
            path="/cyber-security-services"
            element={<CyberSecurityServices />}
          />
          <Route
            path="/platform-consulting"
            element={<PlatformConsulting />}
          />
          <Route path="/ui-ux-design" element={<UiUxDesign />} />

          {/* Who We Serve Pages */}
          <Route path="/startups" element={<StartUp />} />
          <Route path="/enterprises" element={<Enterprises />} />
          <Route path="/rescue-projects" element={<RescueProjects />} />
          <Route path="/fintech" element={<Fintech />} />
          <Route path="/real-estate" element={<RealEstate />} />
          <Route path="/healthcare" element={<Healthcare />} />
          <Route path="/food-groceries" element={<FoodGroceries />} />
          <Route
            path="/education-technology"
            element={<EducationTechnology />}
          />
          <Route
            path="/supply-chain-logistics"
            element={<SupplyChainLogistics />}
          />
          <Route
            path="/travel-tourism"
            element={<TravelTourism />}
          />

          {/* How We Engage Pages */}
          <Route path="/product-development" element={<ProductDevelopment />} />
          <Route path="/managed-it-systems" element={<ManagedItSystems />} />
          <Route path="/team-augmentation" element={<TeamAugmentation />} />
          <Route path="/dedicated-team" element={<DedicatedTeam />} />
          <Route
            path="/technical-support-services"
            element={<TechnicalSupportServices />}
          />
          <Route path="/fixed-price" element={<FixedPrice />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/case-study/:id" element={<CaseStudyDetail />} />

          {/* Hire Dev Pages */}
          <Route
            path="/dedicated-developers"
            element={<DedicatedDevelopers />}
          />
          <Route
            path="/hire-elixir-developers"
            element={<HireElixirDevelopers />}
          />
          <Route path="/hire-ror-developers" element={<HireRorDevelopers />} />
          <Route
            path="/hire-python-developers"
            element={<HirePythonDevelopers />}
          />
          <Route
            path="/hire-django-developers"
            element={<HireDjangoDevelopers />}
          />
          <Route
            path="/hire-nodejs-developers"
            element={<HireNodeJsDevelopers />}
          />
          <Route
            path="/hire-golang-developers"
            element={<HireGolangDevelopers />}
          />
          <Route
            path="/hire-javascript-developers"
            element={<JavaScriptDevelopmentCompany />}
          />
          <Route
            path="/hire-reactjs-developers"
            element={<HireReactJsDevelopers />}
          />
          <Route
            path="/hire-angular-developers"
            element={<HireAngularDevelopers />}
          />
          <Route
            path="/hire-typescript-developers"
            element={<HireTypeScriptDevelopers />}
          />
          <Route
            path="/hire-flutter-developers"
            element={<HireFlutterDevelopers />}
          />
          <Route
            path="/hire-android-developers"
            element={<HireAndroidDevelopers />}
          />
          <Route path="/hire-iOS-developers" element={<HireIosDevelopers />} />
          <Route
            path="/hire-product-manager"
            element={<HireProductManager />}
          />
          <Route path="/hire-cto" element={<HireCTO />} />
          <Route
            path="/hire-saas-developers"
            element={<HireSaaSDevelopers />}
          />
          <Route
            path="/hire-mern-stack-developers"
            element={<HireMERNStackDevelopers />}
          />
          <Route path="/remote-teams" element={<RemoteTeams />} />
          <Route path="/staff-augmentation" element={<StaffAugmentation />} />

          {/* Company Pages */}
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/team" element={<Team />} />

          {/* Contact Pages */}
          <Route path="/get-in-touch" element={<GetInTouch />} />
          <Route path="/sales" element={<Sales />} />
          <Route path="/support" element={<Support />} />
          <Route path="/locations" element={<Location />} />
          <Route path="/schedule-demo" element={<ScheduleDemo />} />
          <Route path="/feedback" element={<Feedback />} />

          {/* Privacy Pages */}
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-conditions" element={<TermCondition />} />

          {/* 404 Fallback */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      {/* Always Visible Components */}
      <Contact />
      <Footer />
      <ScrollToTopButton />
      <ChatBot />


      <Toaster position="top-right" reverseOrder={false} />

      <div className="text-center mt-4">
        <h1 className="text-2xl sm:text-md">
          👀 {onlineCount} {onlineCount === 1 ? "person is" : "people are"}{" "}
          viewing this site right now
        </h1>
      </div>
    </Router>
  );
}

// 404 Page Component
function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh]">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-lg text-gray-600">
        Sorry, the page you are looking for does not exist.
      </p>
    </div>
  );
}

export default App;
