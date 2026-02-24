import { Metadata } from "next";
import { getHireDevPageData } from "@/lib/cms";
import { getHireDevDefaults } from "@/lib/hire-dev-defaults";
import DynamicHireDevClient from "@/components/DynamicHireDevClient";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const data = await getHireDevPageData(slug);
  const defaults = getHireDevDefaults(slug);

  const title = data?.heroTitle || defaults.heroTitle;
  const description = data?.heroDescription || defaults.heroDescription;

  return {
    title: `${title} | ITSOL - Solution`,
    description: description,
  };
}

export default async function HireDevPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const normalizedSlug = slug.toLowerCase();

  const data = await getHireDevPageData(normalizedSlug);
  const defaults = getHireDevDefaults(normalizedSlug);

  // If no data and no defaults (unlikely with our setup), 404
  if (!data && !defaults) {
    notFound();
  }

  const mergedData = data ? { ...defaults, ...data } : defaults;

  return (
    <DynamicHireDevClient initialData={mergedData} slug={normalizedSlug} />
  );
}
