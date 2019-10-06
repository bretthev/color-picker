import Icon from "./Icon";
import { globalColors } from "../helpers/styleUtils";
import { ColorType } from "../helpers/types";

interface HeaderProps {
  selectedColors: ColorType[];
}

const Header: React.FC<HeaderProps> = ({ selectedColors }) => {
  return (
    <>
      <header className="header">
        <Icon iconType="logo" className="header-logo" action="/" />
        <Icon
          iconType="cart"
          className="header- cart"
          action="/cart"
          data-badge={`${selectedColors.length}`}
        />
      </header>
      <style jsx>{`
        .header {
          background: ${globalColors.primary};
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-left: 25px;
          padding-right: 25px;
        }
      `}</style>
    </>
  );
};

export default Header;
