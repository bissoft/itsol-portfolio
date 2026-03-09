"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { database, ref, update, increment } from "../Firebase";

export default function PageTracker() {
  const pathname = usePathname();

  useEffect(() => {
    // Prevent tracking admin pages or API routes
    if (pathname.startsWith("/admin") || pathname.startsWith("/api")) {
      return;
    }

    const trackView = async () => {
      if (!database) return;

      try {
        // Increment global views
        const statsRef = ref(database, "siteStats");

        // Use increment(1) for real-time atomic updates
        // We catch locally to avoid blocking other analytics
        update(statsRef, {
          totalViews: increment(1),
        }).catch(() => {});

        // Also track per-page views (sanitizing path for Firebase keys)
        const safePath = pathname.replace(/\//g, "_") || "home";
        const pageRef = ref(database, `siteStats/pageViews`);
        update(pageRef, {
          [safePath]: increment(1),
        }).catch(() => {});

        // Fallback to MongoDB for persistence (optional, but keep for now)
        fetch("/api/analytics/hit", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ path: pathname }),
        }).catch(() => {});
      } catch (err: any) {
        console.warn("Firebase tracking failed:", err.message);
      }
    };

    trackView();
  }, [pathname]);

  return null;
}
