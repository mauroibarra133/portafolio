/* eslint-disable react/prop-types */
import "../styles/overlay.css";

const Overlay = ({ children, closeNav, isNavOpen }) => {
  return (
    <div className={`overlay ${isNavOpen ? "opened" : ""}`} onClick={closeNav}>
      <div className={`overlay__content`}>{children}</div>
    </div>
  );
};

export default Overlay;
