import type { Metadata } from "next";
import Client from "./Client";

export const metadata: Metadata = {
  title: "Healthcare App Development - ITL SOLUTIONS",
  description:
    "Building patient-centric mobile health applications that enhance engagement, streamline workflows, and improve outcomes.",
};

export default function HealthcareAppPage() {
  return <Client />;
}
