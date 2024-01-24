/* eslint-disable react/prop-types */
import "../styles/overlay.css";
import { useThemeContext } from "../context/ThemeContext";

const Overlay = ({ children, closeNav, isNavOpen }) => {
  const { contextTheme } = useThemeContext();

  return (
    <div className={`overlay ${isNavOpen ? "opened" : ""} ${contextTheme}`} onClick={closeNav}>
      <div className={`overlay__content`}>{children}</div>
    </div>
  );
};

export default Overlay;
