import AppLogo from "../assets/AppLogo.png";
import "./Header.css";

export const Header = () => {
  return (
    <header>
      <div className="logo">
        <img src={AppLogo} alt="Taskmate logo" />
        <span>Taskmate</span>
      </div>
      <div className="themeSelector">
        <span className="light "></span>
        <span className="medium "></span>
        <span className="dark "></span>
        <span className="gradientOne "></span>
        <span className="gradientTwo "></span>
        <span className="gradientThree "></span>
      </div>
    </header>
  );
};
