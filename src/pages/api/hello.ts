// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export type Data = {
  name: string;
  key: number;
};

function delay(time: number) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse<Data[]>
) {
  await delay(3000);
  res.status(200).json([
    { name: "John Doe", key: 0 },
    { name: "Barbek Luis", key: 1 },
    { name: "Van Greq", key: 2 },
    { name: "Luis Monro", key: 3 },
    { name: "Vahe Mikayelyan", key: 4 },
  ]);
}
