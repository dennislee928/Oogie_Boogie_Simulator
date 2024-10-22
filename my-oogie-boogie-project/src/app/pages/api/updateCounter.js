export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      // 調用 Cloudflare Worker 來更新計數器
      const response = await fetch(
        "https://oogieboogie.twister5-partner-demo-account5604.workers.dev/",
        {
          method: "POST",
        }
      );

      if (response.ok) {
        const data = await response.json();
        res.status(200).json(data);
      } else {
        res.status(500).json({ message: "Failed to update counter" });
      }
    } catch (error) {
      console.error("Error updating counter:", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
