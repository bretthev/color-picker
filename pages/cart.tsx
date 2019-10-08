import { NextPage } from "next";
import { useState } from "react";
import { ColorType, PaletteType } from "../helpers/types";
import Button from "../components/Button";
import {
  fetchCurrentColors,
  updateCurrentColors,
  savePalette,
  fetchSavedPalettes,
  deletePaletteById
} from "../helpers/actions";
import ColorList from "../components/ColorList";

interface CartProps {
  selectedColors: ColorType[];
  savedPalettes: PaletteType[];
}

const Cart: NextPage<CartProps> = ({ selectedColors, savedPalettes }) => {
  const [paletteName, setPaletteName] = useState<string>();
  const [activeColors, setActiveColors] = useState<ColorType[]>(selectedColors);
  const [totalPalettes, setTotalPalettes] = useState<PaletteType[]>(
    savedPalettes
  );

  // submit and update saved palettes
  const submitPalette = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const palette = {
      name: paletteName || "unnamed palette",
      colors: selectedColors
    };
    await savePalette(palette).then(res => {
      setTotalPalettes(res.updatedPalettes);
      setActiveColors(res.selected);
      setPaletteName("");
    });
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setPaletteName(e.currentTarget.value);
  };

  const removeColorFromPalette = async (colorToDelete: ColorType) => {
    const newColors = activeColors.filter(
      color => color.hex !== colorToDelete.hex
    );
    setActiveColors(newColors);
    await updateCurrentColors(newColors);
  };

  // update state, erase from db
  const deletePalette = async (paletteId: string) => {
    const newPalettes = totalPalettes.filter(
      palette => palette.id !== paletteId
    );
    setTotalPalettes(newPalettes);
    await deletePaletteById(paletteId);
  };

  return (
    <div>
      <h1>Your Selected Colors</h1>
      <ColorList
        hideActive
        selectColor={removeColorFromPalette}
        colorList={activeColors}
      />
      <form onSubmit={submitPalette}>
        <p>Name and save your color palette</p>
        <input
          type="text"
          placeholder="Color palette name"
          value={paletteName}
          onChange={handleInput}
        />
        <Button label="Submit" action={submitPalette} />
      </form>
      <h2>Previously saved color palettes</h2>
      {totalPalettes.map(palette => (
        <section key={`${Date.now()}` + `${palette.name}`}>
          <h3>
            {palette.name} - {palette.colors.length} colors
          </h3>
          <ColorList
            colorList={palette.colors}
            deletePalette={(e: any) => deletePalette(palette.id || "")}
            savedPalette
            hideActive
          />
        </section>
      ))}
    </div>
  );
};

Cart.getInitialProps = async () => {
  const selectedColors = await fetchCurrentColors();
  const savedPalettes = await fetchSavedPalettes();
  return {
    selectedColors,
    savedPalettes
  };
};

export default Cart;
