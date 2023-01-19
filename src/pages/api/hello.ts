// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export type Data = {
  name: string;
  key: number;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data[]>
) {
  res.status(200).json([
    { name: "John Doe", key: 0 },
    { name: "Barbek Luis", key: 1 },
    { name: "Van Greq", key: 2 },
    { name: "Luis Monro", key: 3 },
  ]);
}
