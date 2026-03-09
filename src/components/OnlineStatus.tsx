"use client";

import { useState, useEffect } from "react";
import {
  database,
  ref,
  onDisconnect,
  onValue,
  set,
  serverTimestamp,
} from "../Firebase";

export default function OnlineStatus() {
  const [onlineCount, setOnlineCount] = useState(0);

  useEffect(() => {
    if (!database) return;

    let isSubscribed = true;
    const userId = `user_${Date.now()}`;
    const userRef = ref(database, `onlineUsers/${userId}`);
    const allUsersRef = ref(database, "onlineUsers");

    const setupTracking = async () => {
      try {
        await set(userRef, {
          online: true,
          timestamp: serverTimestamp(),
        });

        if (isSubscribed) {
          onDisconnect(userRef)
            .remove()
            .catch(() => {});

          onValue(
            allUsersRef,
            (snapshot) => {
              if (!isSubscribed) return;
              const users = snapshot.val();
              const activeUsersCount = users ? Object.keys(users).length : 0;
              setOnlineCount(activeUsersCount);
            },
            (error) => {
              console.warn("Firebase onValue error:", error.message);
            },
          );
        }
      } catch (err: any) {
        console.warn("Firebase tracking initialization failed:", err.message);
      }
    };

    setupTracking();

    return () => {
      isSubscribed = false;
      set(userRef, null).catch(() => {});
    };
  }, []);

  return (
    <div className="fixed bottom-6 left-6 z-50 pointer-events-none">
      <div className="bg-white/80 backdrop-blur-md border border-blue-100 px-4 py-2 rounded-full shadow-lg flex items-center gap-2 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="flex h-2 w-2 relative">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
        </div>
        <p className="text-xs font-semibold text-gray-700 whitespace-nowrap">
          {onlineCount} {onlineCount === 1 ? "visitor" : "visitors"} online
        </p>
      </div>
    </div>
  );
}
