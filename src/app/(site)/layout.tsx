import { ReactNode } from "react";
import Navbar from "@/Layout/Navbar";
import Footer from "@/components/Footer";
import ConditionalContact from "@/components/ConditionalContact";
import ScrollToTopButton from "@/Layout/ScrollToTopButton";
import ChatBot from "@/components/ChatBot";
import OnlineStatus from "@/components/OnlineStatus";
import PageTracker from "@/components/PageTracker";

export default function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <PageTracker />
      <Navbar />
      <main>{children}</main>
      <ConditionalContact />
      <Footer />
      <ScrollToTopButton />
      <ChatBot />
      <OnlineStatus />
    </>
  );
}
