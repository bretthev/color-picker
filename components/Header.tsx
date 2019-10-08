import Icon from "./Icon";
import { globalColors, fontFamily } from "../helpers/styleUtils";

interface HeaderProps {
  colors?: number;
}

const Header: React.FC<HeaderProps> = ({ colors }) => {
  const displayBadge = colors && colors > 0 ? "flex" : "none";
  return (
    <>
      <header className="header">
        <Icon iconType="logo" className="header-logo" action="/" />
        <Icon iconType="cart" className="header- cart" action="/cart" />
        <a className="badge" href="/cart">
          {colors}
        </a>
      </header>
      <style jsx>{`
        position: relative;
        text-decoration: none;
        background: ${globalColors.primary};
        height: 80px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-left: 25px;
        padding-right: 25px;
        .badge {
          display: ${displayBadge};
          justify-content: center;
          padding: 0;
          color: white;
          font-family: ${fontFamily.primary};
          position: absolute;
          top: 4px;
          border: 4px solid ${globalColors.primary};
          text-align: center;
          right: 20px;
          height: 30px;
          width: 30px;
          border-radius: 50%;
          background: red;
        }
      `}</style>
    </>
  );
};

export default Header;
