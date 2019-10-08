import React, { useState } from "react";
import { NextPage, NextPageContext } from "next";
import { ColorType } from "../helpers/types";
import ColorList from "../components/ColorList";
import Button from "../components/Button";
import { ColorPageProps } from "./_app";
import {
  fetchCurrentColors,
  updateCurrentColors,
  getColors
} from "../helpers/actions";

interface HomeProps {
  firstColors: ColorType[];
  updateHeaderColors: (colors: ColorType[]) => void;
}

const Home: NextPage<HomeProps> = ({ firstColors, updateHeaderColors }) => {
  const [colors, setColors] = useState<ColorType[]>(firstColors);

  const fetchMoreColors = async () => {
    const newColors = await getColors(colors.length);
    setColors(colors.concat(newColors));
  };

  const toggleActive = async (colorToSetActive: ColorType) => {
    const newColors = [...colors];
    const colorToToggleIndex = newColors.findIndex(
      color => color.hex === colorToSetActive.hex
    );
    newColors[colorToToggleIndex].active = !newColors[colorToToggleIndex]
      .active;
    setColors(newColors);
    const activeColors = newColors.filter(color => color.active);
    await updateCurrentColors(activeColors);
    updateHeaderColors(activeColors);
  };

  return (
    <>
      <div className="color-list">
        <ColorList colorList={colors} selectColor={toggleActive} />
      </div>
      <div className="button-container">
        <Button
          className="load-more"
          action={fetchMoreColors}
          label={"Load More"}
        />
      </div>
      <style jsx>{`
        .color-list {
          padding-left: 40px;
          padding-right: 20px;
        }

        .button-container {
          margin-top: 30px;
          width: 100%;
          display: flex;
          justify-content: center;
        }
      `}</style>
    </>
  );
};

Home.getInitialProps = async (props: NextPageContext & ColorPageProps) => {
  const firstColors = await getColors();
  const selectedColors = await fetchCurrentColors();
  const { updateHeaderColors } = props;

  // if selected colors, show them
  if (selectedColors.length) {
    const selectedHexes = selectedColors.map(selected => selected.hex);
    const updatedColors = firstColors.map(color => {
      return selectedHexes.includes(color.hex)
        ? { ...color, active: true }
        : color;
    });
    return { firstColors: updatedColors, updateHeaderColors };
  }
  return { firstColors, updateHeaderColors };
};

export default Home;
