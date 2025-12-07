export default function handler(req, res) {
  return res.status(200).json({
    status: "OK",
    message: "Opik-X-Forex Licensing API Active",
    server: "vercel",
    version: "1.0"
  });
}
