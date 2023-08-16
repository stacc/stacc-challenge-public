// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import providers from "../../data/providers.json";

export default function handler(req, res) {
  res.status(200).json(providers);
}
