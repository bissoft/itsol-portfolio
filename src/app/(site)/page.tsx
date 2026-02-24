import Hero from "@/Layout/Hero";
import CompanyStats from "@/components/CompanyStats";
import ServicesSection from "@/components/ServicesSection";
import Projects from "@/components/Projects";
import ClientConversations from "@/components/ClientConversations";
import Partners from "@/components/Partners";
import WhyChooseUs from "@/components/WhyChooseUs";
import Awards from "@/components/Awards";
import ItsolValue from "@/components/ItsolValue";
import IndustriesSection from "@/components/IndustriesSection";
import EngagementModels from "@/components/EngagementModels";
import LeadMagnet from "@/components/LeadMagnet";
import Testimonials from "@/components/Testimonials";
import TechStack from "@/components/TechStack";
import TeamSection from "@/components/TeamSection";
import Insights from "@/components/Insights";
import FaqSection from "@/components/FaqSection";
export const dynamic = "force-dynamic";

import {
  getHeroData,
  getStatsData,
  getServicesData,
  getProjectsData,
  getConversationsData,
  getPartnersData,
  getWhyChooseUsData,
} from "@/lib/cms";

export default async function Home() {
  const heroData = await getHeroData();
  const statsData = await getStatsData();
  const servicesData = await getServicesData();
  const projectsData = await getProjectsData();
  const conversationsData = await getConversationsData();
  const partnersData = await getPartnersData();
  const whyChooseUsData = await getWhyChooseUsData();

  return (
    <>
      <Hero data={heroData} />
      <CompanyStats data={statsData} />
      <ServicesSection data={servicesData} />
      <Projects data={projectsData} />
      <ClientConversations data={conversationsData} />
      <Partners data={partnersData} />
      <WhyChooseUs data={whyChooseUsData} />
      <Awards />
      <ItsolValue />
      <IndustriesSection />
      <EngagementModels />
      <LeadMagnet />
      <Testimonials data={projectsData?.testimonials} />
      {/* <HireTeam /> */}
      <TechStack />
      <TeamSection />
      <Insights />
      <FaqSection />
    </>
  );
}
