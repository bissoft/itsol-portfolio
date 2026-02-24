import { getIndustryPageData } from "@/lib/cms";
import DynamicIndustryClient from "@/components/DynamicIndustryClient";
import { notFound } from "next/navigation";
import { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const data = await getIndustryPageData(slug);
  if (!data) return { title: "Industry" };

  return {
    title: `${data.heroTitle} | ITSOL`,
    description: data.heroDescription,
  };
}

export default async function IndustryPage({ params }: Props) {
  const { slug } = await params;
  const data = await getIndustryPageData(slug);

  if (!data) {
    // If no data exists yet, we provide a default structure
    // so the page doesn't 404. The user can then edit this from Admin.
    const defaultData = {
      slug,
      heroTitle: slug
        .split("-")
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(" "),
      heroDescription:
        "Advanced technology solutions tailored for your industry sector.",
      heroBadge: "Industry Solutions",
      stats: [
        { value: "100+", label: "Successful Projects", iconName: "Rocket" },
      ],
      solutions: [
        {
          title: "Custom Development",
          description: "Tailored software built for your specific needs.",
          iconName: "Code",
        },
      ],
      features: [
        {
          title: "Scalability",
          description: "Systems that grow with your business.",
          iconName: "Zap",
        },
      ],
      caseStudies: [],
      projects: [],
    };
    return <DynamicIndustryClient initialData={defaultData} slug={slug} />;
  }

  return <DynamicIndustryClient initialData={data} slug={slug} />;
}
