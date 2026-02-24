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

    const userId = `user_${Date.now()}`;
    const userRef = ref(database, `onlineUsers/${userId}`);

    set(userRef, {
      online: true,
      timestamp: serverTimestamp(),
    });

    onDisconnect(userRef).remove();

    const allUsersRef = ref(database, "onlineUsers");

    onValue(allUsersRef, (snapshot) => {
      const users = snapshot.val();
      const activeUsersCount = users ? Object.keys(users).length : 0;
      setOnlineCount(activeUsersCount);
    });

    return () => {
      set(userRef, null);
    };
  }, []);

  return (
    <div className="text-center mt-4">
      <h1 className="text-2xl sm:text-md">
        👀 {onlineCount} {onlineCount === 1 ? "person is" : "people are"}{" "}
        viewing this site right now
      </h1>
    </div>
  );
}
