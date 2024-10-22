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
      <h1>Oogie Boogie 痛扁聖誕老人</h1>
      <button onClick={handleClick}>扁聖誕老人</button>
      {showGif && (
        <img
          src="/path/to/oogie_boogie.gif"
          alt="Oogie Boogie beating Santa Claus"
        />
      )}
    </div>
  );
}
