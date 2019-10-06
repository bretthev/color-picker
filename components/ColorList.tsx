import ColorCard from "./Color";
import { ColorType } from "../helpers/types";

interface ColorListProps {
  colorList: ColorType[];
  selectColor: (color: ColorType) => void;
}

const ColorList: React.FC<ColorListProps> = ({ colorList, selectColor }) => {
  return (
    <>
      <div className="color-list">
        {colorList.map(color => (
          <ColorCard
            colorProp={color}
            selectColor={selectColor}
            key={color.hex}
          />
        ))}
      </div>
      <style jsx>{`
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-gap: 25px;
        padding: 10px;
      `}</style>
    </>
  );
};

export default ColorList;
