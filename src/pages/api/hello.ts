// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { UserSchema } from "@/databese/models/user.model";
import type { NextApiRequest, NextApiResponse } from "next";

function delay(time: number) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse<UserSchema[]>
) {
  UserSchema.findAll({ raw: true }).then((data) => {
    //await delay(3000);
    return res.status(200).json(data);
  });
}
