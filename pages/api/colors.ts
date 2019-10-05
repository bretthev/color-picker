import { NextApiRequest, NextApiResponse } from "next";

import { database } from "../../helpers";

export default (req: NextApiRequest, res: NextApiResponse) => {
  res.send("Hi from the server.");
};
