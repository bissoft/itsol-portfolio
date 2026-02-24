import type { Metadata } from "next";
import { getTeamData } from "@/lib/cms";
import TeamClient from "./TeamClient";

export const metadata: Metadata = {
  title: "Our Team - ITSOL",
  description: "Meet the innovators and experts behind ITSOL.",
};

export default async function TeamPage() {
  const data = await getTeamData();
  return <TeamClient data={data} />;
}
