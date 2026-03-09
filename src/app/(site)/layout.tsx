import { ReactNode } from "react";
import dynamic from "next/dynamic";
import Navbar from "@/Layout/Navbar";

const Footer = dynamic(() => import("@/components/Footer"));
const ConditionalContact = dynamic(
  () => import("@/components/ConditionalContact"),
);
import ClientOnlyUtilities from "@/components/ClientOnlyUtilities";

export default function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <ClientOnlyUtilities />
      <Navbar />
      <main>{children}</main>
      <ConditionalContact />
      <Footer />
    </>
  );
}
