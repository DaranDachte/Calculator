import "./Logo.style.css";
import { ReactComponent as LogoImg } from "../../assets/img/LogoImg.svg";

export const Logo = () => {
  return (
    <div className="logoWrapper">
      <LogoImg />
    </div>
  );
};
