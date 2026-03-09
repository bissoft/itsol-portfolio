import Hero from "@/Layout/Hero";
import CompanyStats from "@/components/CompanyStats";
import nextDynamic from "next/dynamic";

const ServicesSection = nextDynamic(
  () => import("@/components/ServicesSection"),
);
const Projects = nextDynamic(() => import("@/components/Projects"));
const ClientConversations = nextDynamic(
  () => import("@/components/ClientConversations"),
);
const Partners = nextDynamic(() => import("@/components/Partners"));
const WhyChooseUs = nextDynamic(() => import("@/components/WhyChooseUs"));
const Awards = nextDynamic(() => import("@/components/Awards"));
const ItsolValue = nextDynamic(() => import("@/components/ItsolValue"));
const IndustriesSection = nextDynamic(
  () => import("@/components/IndustriesSection"),
);
const EngagementModels = nextDynamic(
  () => import("@/components/EngagementModels"),
);
const LeadMagnet = nextDynamic(() => import("@/components/LeadMagnet"));
const Testimonials = nextDynamic(() => import("@/components/Testimonials"));
const TechStack = nextDynamic(() => import("@/components/TechStack"));
const TeamSection = nextDynamic(() => import("@/components/TeamSection"));
const Insights = nextDynamic(() => import("@/components/Insights"));
const FaqSection = nextDynamic(() => import("@/components/FaqSection"));
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
  const [
    heroData,
    statsData,
    servicesData,
    projectsData,
    conversationsData,
    partnersData,
    whyChooseUsData,
  ] = await Promise.all([
    getHeroData(),
    getStatsData(),
    getServicesData(),
    getProjectsData(),
    getConversationsData(),
    getPartnersData(),
    getWhyChooseUsData(),
  ]);

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
