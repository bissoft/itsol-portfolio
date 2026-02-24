import type { Metadata } from "next";
import { getAboutData } from "@/lib/cms";
import AboutUsClient from "./AboutUsClient";

export const metadata: Metadata = {
  title: "About Us - ITSOL",
  description: "Learn about our journey, mission, and values at ITSOL.",
};

export default async function AboutUsPage() {
  const data = await getAboutData();
  return <AboutUsClient data={data} />;
}
