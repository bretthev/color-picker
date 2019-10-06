import React, { useState } from "react";
import { ColorPageProps } from "./_app";
import { NextPage, NextPageContext } from "next";
import axios from "axios";
import { ColorType } from "../helpers/types";
import ColorList from "../components/ColorList";

interface HomeProps {
  firstColors: ColorType[];
  selectColors: (colors: ColorType[]) => void;
}

const getColors = (offset: number = 0): Promise<ColorType[]> => {
  return axios
    .get("http://localhost:3000/api/colors", {
      params: {
        offset
      }
    })
    .then(res => res.data);
};

const Home: NextPage<HomeProps> = ({ firstColors, selectColors }) => {
  const [colors, setColors] = useState<ColorType[]>(firstColors);
  const fetchMoreColors = async () => {
    const newColors = await getColors(colors.length);
    setColors(colors.concat(newColors));
  };

  const toggleActive = (colorToSetActive: ColorType): void => {
    const newColors = [...colors];
    const colorToToggleIndex = newColors.findIndex(
      color => color.hex === colorToSetActive.hex
    );
    newColors[colorToToggleIndex].active = !newColors[colorToToggleIndex]
      .active;
    setColors(newColors);
    selectColors(newColors.filter(color => color.active));
  };

  return (
    <>
      <main className="color-list">
        <ColorList colorList={colors} selectColor={toggleActive} />
        <button onClick={fetchMoreColors}>Load More</button>
      </main>
    </>
  );
};

Home.getInitialProps = async (props: ColorPageProps & NextPageContext) => {
  const firstColors = await getColors();
  const { selectColors } = props;
  return { firstColors, selectColors };
};

export default Home;
