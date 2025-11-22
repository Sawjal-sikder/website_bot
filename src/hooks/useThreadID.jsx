import { useEffect, useState } from "react";

export default function useThreadID() {
  const [threadID, setThreadID] = useState("");
  const [isReady, setIsReady] = useState(false);

  const ONE_DAY = 24 * 60 * 60 * 1000; // milliseconds

  useEffect(() => {
    const saved = localStorage.getItem("thread_id");
    const savedTime = localStorage.getItem("thread_id_created_at");

    const now = Date.now();

    // If saved and not expired
    if (saved && savedTime && now - parseInt(savedTime) < ONE_DAY) {
      setThreadID(saved);
      setIsReady(true);
      return;
    }

    // Else generate new UUID
    const newUUID = crypto.randomUUID();
    localStorage.setItem("thread_id", newUUID);
    localStorage.setItem("thread_id_created_at", now.toString());

    setThreadID(newUUID);
    setIsReady(true);
  }, []);

  return { threadID, isReady };
}
