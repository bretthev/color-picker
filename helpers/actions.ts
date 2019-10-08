import axios from "axios";
import { ColorType, PaletteType } from "./types";

// current colors
export const fetchCurrentColors = async () => {
  const currentColors = await axios
    .get("http://localhost:3000/api/currentColors")
    .then(res => res.data);
  return currentColors as ColorType[];
};

export const updateCurrentColors = async (currentColors: ColorType[]) => {
  const updatedColors = await axios
    .post("http://localhost:3000/api/currentColors", {
      selected: currentColors
    })
    .then(res => res.data);
  return updatedColors as ColorType[];
};

// colors
export const getColors = async (offset: number = 0): Promise<ColorType[]> => {
  return axios
    .get("http://localhost:3000/api/colors", {
      params: {
        offset
      }
    })
    .then(res => res.data as ColorType[]);
};

// palettes

interface UpdatedPalettes {
  updatedPalettes: PaletteType[];
  selected: ColorType[];
}

export const fetchSavedPalettes = async () => {
  const palettes = await axios
    .get("http://localhost:3000/api/palettes")
    .then(res => res.data);
  return palettes as PaletteType[];
};

export const savePalette = async (palette: PaletteType) => {
  return axios
    .post("http://localhost:3000/api/palettes", { palette })
    .then(res => {
      const { updatedPalettes, selected } = res.data as UpdatedPalettes;
      return { updatedPalettes, selected };
    });
};

export const deletePaletteById = async (paletteId: string) => {
  return axios
    .delete("http://localhost:3000/api/palettes", {
      data: { paletteId }
    })
    .then(res => res.data);
};
