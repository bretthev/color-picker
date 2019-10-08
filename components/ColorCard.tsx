import { ColorType } from "../helpers/types";

interface ColorProps extends React.HTMLAttributes<HTMLElement> {
  colorProp: ColorType;
  selectColor?: (color: ColorType) => void;
  hideActive?: boolean;
}

const ColorCard: React.FC<ColorProps> = ({
  colorProp,
  selectColor,
  hideActive,
}) => {
  const borderColor = colorProp.active && !hideActive ? "black" : colorProp.hex;
  return (
    <>
      <div className="color-card" onClick={selectColor && (e => selectColor(colorProp))}>
        <p className="color-label">{colorProp.hex}</p>
      </div>
      <style jsx>{`
        background-color: ${colorProp.hex};
        .color-label {
          color: #fff;
          font-size: 1.4rem;
          text-align: center;
        }

        .color-card {
          height: 125px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 6px;
          border: 15px solid ${borderColor};
        }

        :hover {
          cursor: pointer;
        }
      `}</style>
    </>
  );
};

export default ColorCard;
