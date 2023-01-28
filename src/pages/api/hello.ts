// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { User } from "@/db/models/user";
import type { NextApiRequest, NextApiResponse } from "next";

function delay(time: number) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse<User[]>
) {
  User.findAll({ raw: true }).then((data) => {
    //await delay(3000);
    return res.status(200).json(data);
  });
}
