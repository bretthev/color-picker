import Icon from "./Icon";
import { globalColors } from "../helpers/styleUtils";

const Header: React.FC = () => (
  <>
    <header className="header">
      <Icon iconType="logo" className="header-logo" />
      <Icon iconType="cart" className="header- cart" />
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

export default Header;
