import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import { database } from "../../helpers/firebaseConfig";
import { PaletteType } from "../../helpers/types";
import { APP_ROOT } from "../../config";

const getSavedPalettes = async () => {
  const paletteCollection = await database.palettes.get();
  return paletteCollection.docs.map(paletteDoc => {
    return {
      id: paletteDoc.id,
      colors: paletteDoc.data().palette.colors,
      name: paletteDoc.data().palette.name
    } as PaletteType;
  });
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    const palettes = await getSavedPalettes();
    res.send(palettes);
  }

  if (req.method === "POST") {
    const { palette } = req.body;
    // update or set colors
    await database.palettes.add({ palette }).then(async () => {
      // send back updated list of palettes
      const updatedPalettes = await getSavedPalettes();
      // clear selected colors after palette saves
      axios
        .post(`${APP_ROOT}/api/currentColors`, {
          selected: []
        })
        .then(() => res.send({ updatedPalettes, selected: [] }));
    });
  }

  if (req.method === "DELETE") {
    const { paletteId } = req.body;
    await database.palettes
      .doc(paletteId)
      .delete()
      .then(() => {
        res.send("Deletion successful.");
      });
  }
};
