import { NextPage } from "next";
import { useState } from "react";
import { ColorType, PaletteType } from "../helpers/types";
import Button from "../components/Button";
import { Heading, Copy } from "../components/Typography";
import {
  fetchCurrentColors,
  updateCurrentColors,
  savePalette,
  fetchSavedPalettes,
  deletePaletteById
} from "../helpers/actions";
import ColorList from "../components/ColorList";
import Form from "../components/Form";

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
    <>
      <div>
        <Heading text={"Your selected colors"} />
        <ColorList
          hideActive
          selectColor={removeColorFromPalette}
          colorList={activeColors}
        />
        <Form
          submit={submitPalette}
          inputChange={handleInput}
          inputValue={paletteName}
        />
        <Heading text={"Previously saved color palettes"} />
        {totalPalettes.map(palette => (
          <section
            className="saved-palette"
            key={`${Date.now()}` + `${palette.name}`}
          >
            <Copy text={`${palette.name} - ${palette.colors.length} colors`} />
            <ColorList
              colorList={palette.colors}
              deletePalette={(e: any) => deletePalette(palette.id || "")}
              savedPalette
              hideActive
            />
          </section>
        ))}
      </div>
      <style jsx>{`
        padding-left: 40px;
        padding-right: 20px;
        .saved-palette {
          padding-left: 0;
        }
      `}</style>
    </>
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
