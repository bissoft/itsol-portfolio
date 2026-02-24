import type { Metadata } from "next";
import Client from "./Client";

export const metadata: Metadata = {
  title: "Healthcare Software Development - ITL SOLUTIONS",
  description:
    "Empowering the future of healthcare with secure, scalable, and innovative software solutions designed for modern medical institutions.",
};

export default function HealthcareSoftwarePage() {
  return <Client />;
}
