export default async function handler(req, res) {
  if (req.method === "POST") {
    // 在這裡更新 Cloudflare R2 中的計數器
    // 這裡假設您已經設置了與 R2 的連接
    // 例如，使用 fetch 或其他 HTTP 客戶端來更新計數器

    // 假設更新成功
    res.status(200).json({ message: "計數器已更新" });
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
