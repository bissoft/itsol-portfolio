import { Metadata } from "next";
import { getCareersData } from "@/lib/cms";
import CareersClient from "./CareersClient";

export const metadata: Metadata = {
  title: "Careers",
  description: "Join our team of innovators and help build the future.",
};

export default async function Page() {
  const data = await getCareersData();
  return <CareersClient data={data} />;
}
