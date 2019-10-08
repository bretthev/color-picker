import { NextApiRequest, NextApiResponse } from "next";

// get a big list of colors
import namedColors from "color-name-list";

export default (req: NextApiRequest, res: NextApiResponse) => {
  const offset =
    typeof req.query.offset === "string" ? parseInt(req.query.offset) : 0;
  const colorsToSend = namedColors.slice(offset, offset + 14);
  res.send(colorsToSend);
};
