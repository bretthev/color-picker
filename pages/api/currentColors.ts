import { NextApiRequest, NextApiResponse } from "next";
import { database } from '../../helpers/firebaseConfig'
import { ColorType } from "../../helpers/types";

interface SelectedColorsDoc {
    selected: ColorType[];
    }

const getCurrentColors = async () => {
    // get current colors from FB
    const selectedColorsDocument = await database.colors.doc('selectedColors').get()
    const selectedColors = selectedColorsDocument.data() as SelectedColorsDoc
    // if none, send empty array
    return selectedColors ? selectedColors.selected : []
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'GET') {
        const colors = await getCurrentColors()
        res.send(colors)
    }

    if (req.method === 'POST') {
        const { selected } = req.body
        // update or set colors
        await database.colors.doc('selectedColors').set({
            selected
        }).then(async () => {
            // send back updated list
            const updatedColors = await getCurrentColors()
            res.send(updatedColors)
        })
    }
};
