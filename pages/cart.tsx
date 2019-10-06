import { NextPage, NextPageContext } from "next";
import { ColorType } from "../helpers/types";
import ColorList from "../components/ColorList";

interface CartProps {
  selectedColors: ColorType[];
  selectColors: (colors: ColorType[]) => void;
}

const Cart: NextPage<CartProps> = ({ selectedColors, selectColors }) => {
  console.log(selectedColors);
  const removeSelected = (colorToRemove: ColorType) => {
    selectColors(
      selectedColors.filter(color => color.hex !== colorToRemove.hex)
    );
  };
  return (
    <div>
      <h1>Your Selected Colors</h1>
      <ColorList colorList={selectedColors} selectColor={removeSelected} />
    </div>
  );
};

export default Cart;
