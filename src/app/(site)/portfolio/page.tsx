import type { Metadata } from "next";
import { getProjectsData } from "@/lib/cms";
import PortfolioClient from "./PortfolioClient";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export const metadata: Metadata = {
  title: "Portfolio - ITSOL",
  description: "Explore our diverse portfolio of digital excellence.",
};

export default async function PortfolioPage() {
  const data = await getProjectsData();
  return <PortfolioClient data={data} />;
}
