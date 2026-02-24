import { getBlogsData } from "@/lib/cms";
import InsightsList from "./InsightsList";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Insights & Resources - ITSOL",
  description:
    "Explore our latest articles, whitepapers, and webinars on digital transformation and AI.",
};

export default async function InsightsPage() {
  const data = await getBlogsData();

  return (
    <main className="pt-20">
      <InsightsList initialData={data} />
    </main>
  );
}
