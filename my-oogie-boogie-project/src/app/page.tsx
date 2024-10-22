"use client";

import { useState } from "react";

export default function Home() {
  const [showGif, setShowGif] = useState(false);

  const handleClick = async () => {
    console.log("Button clicked");
    setShowGif(true);
    console.log("showGif state:", showGif);
    // 調用 API 更新計數器
    try {
      const response = await fetch("/api/updateCounter", { method: "POST" });
      console.log("API response:", response);
    } catch (error) {
      console.error("API error:", error);
    }
  };

  return (
    <div>
      <h1>痛扁聖誕老人</h1>
      <button onClick={handleClick}>扁聖誕老人</button>
      {showGif && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src="/assets/kid-beating-santa.gif"
          alt="Oogie Boogie beating Santa Claus"
        />
      )}
    </div>
  );
}
