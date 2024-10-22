"use client";

import { useState } from "react";

export default function Home() {
  const [showGif, setShowGif] = useState(false);

  const handleClick = async () => {
    setShowGif(true);
    // 調用 API 更新計數器
    await fetch("/api/updateCounter", { method: "POST" });
  };

  return (
    <div>
      <h1>痛扁聖誕老人</h1>
      <button onClick={handleClick}>扁聖誕老人</button>
      {showGif && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src="my-oogie-boogie-project/src/app/pages/assets/kid-beating-santa.gif"
          alt="Oogie Boogie beating Santa Claus"
        />
      )}
    </div>
  );
}
