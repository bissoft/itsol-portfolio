import { getServicePageData } from "@/lib/cms";
import DynamicServiceClient from "@/components/DynamicServiceClient";
import { notFound } from "next/navigation";
import { Metadata } from "next";

export const dynamic = "force-dynamic";

interface Props {
  params: Promise<{ slug: string }>;
}

import { getServiceDefaults } from "@/lib/service-defaults";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const data = (await getServicePageData(slug)) || getServiceDefaults(slug);

  if (!data) return { title: "Service" }; // Fallback (shouldn't happen with defaults)

  return {
    title: `${data.heroTitle} | ITSOL Services`,
    description: data.heroDescription,
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const data = (await getServicePageData(slug)) || getServiceDefaults(slug);

  if (!data) {
    // Should be unreachable now
    notFound();
  }

  return <DynamicServiceClient initialData={data} slug={slug} />;
}
