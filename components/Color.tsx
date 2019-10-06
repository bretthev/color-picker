import { ColorType } from "../helpers/types";

interface ColorProps extends React.HTMLAttributes<HTMLElement> {
  colorProp: ColorType;
  selectColor: (color: ColorType) => void;
}

const ColorCard: React.FC<ColorProps> = ({ colorProp, selectColor }) => {
  const borderColor = colorProp.active ? "black" : colorProp.hex;
  return (
    <>
      <div className="color-card" onClick={e => selectColor(colorProp)}>
        <p className="color-label">{colorProp.hex}</p>
      </div>
      <style jsx>{`
        background-color: ${colorProp.hex};
        .color-label {
          color: #ffffff;
        }

        height: 125px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 6px;

        .color-card {
          border: 15px solid ${borderColor};
        }
      `}</style>
    </>
  );
};

export default ColorCard;
