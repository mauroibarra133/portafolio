import "../styles/overlay.css";

// eslint-disable-next-line react/prop-types
function Overlay({ isOpen, onClose, children }) {
  return (
    <>
      {isOpen ? (
        <div className="overlay" onClick={onClose}>
          <div className="overlay__background">
            <div className="overlay__container">{children}</div>
          </div>
        </div>
      ) : (
        children
      )}
    </>
  );
}

export default Overlay;
