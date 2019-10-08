import ColorCard from "./ColorCard";
import { ColorType } from "../helpers/types";
import EraseCard from "./ErasePaletteCard";

interface ColorListProps {
  colorList: ColorType[];
  selectColor?: (color: ColorType) => void;
  hideActive?: boolean;
  savedPalette?: boolean;
  deletePalette?: (e: any) => void;
}

const ColorList: React.FC<ColorListProps> = ({
  colorList,
  selectColor,
  hideActive,
  deletePalette
}) => {
  return (
    <>
      <div className="color-list">
        {colorList.map(color => (
          <ColorCard
            hideActive={hideActive}
            colorProp={color}
            selectColor={selectColor}
            key={color.hex}
          />
        ))}
        {deletePalette && <EraseCard action={deletePalette} />}
      </div>
      <style jsx>{`
        display: grid;
        grid-template-columns: repeat(auto-fit, 100px);
        grid-gap: 25px;
        padding: 10px 0;

        @media (min-width: 600px) {
          grid-template-columns: repeat(auto-fit, 155px);
        }
      `}</style>
    </>
  );
};

export default ColorList;
