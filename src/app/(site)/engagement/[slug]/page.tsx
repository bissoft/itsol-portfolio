import { getEngagementPageData } from "@/lib/cms";
import DynamicEngagementClient from "@/components/DynamicEngagementClient";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { getEngagementDefaults } from "@/lib/engagement-defaults";

export const dynamic = "force-dynamic";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const data =
    (await getEngagementPageData(slug)) || getEngagementDefaults(slug);

  if (!data) return { title: "Engagement Model" };

  return {
    title: `${data.heroTitle} | ITSOL Engagement Models`,
    description: data.heroDescription,
  };
}

export default async function EngagementPage({ params }: Props) {
  const { slug } = await params;
  const data =
    (await getEngagementPageData(slug)) || getEngagementDefaults(slug);

  if (!data) {
    notFound();
  }

  return <DynamicEngagementClient initialData={data} slug={slug} />;
}
