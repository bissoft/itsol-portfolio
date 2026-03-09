"use client";

import dynamic from "next/dynamic";

const ScrollToTopButton = dynamic(() => import("@/Layout/ScrollToTopButton"), {
  ssr: false,
});
const ChatBot = dynamic(() => import("@/components/ChatBot"), { ssr: false });
const OnlineStatus = dynamic(() => import("@/components/OnlineStatus"), {
  ssr: false,
});
const PageTracker = dynamic(() => import("@/components/PageTracker"), {
  ssr: false,
});

export default function ClientOnlyUtilities() {
  return (
    <>
      <PageTracker />
      <ScrollToTopButton />
      <ChatBot />
      <OnlineStatus />
    </>
  );
}
