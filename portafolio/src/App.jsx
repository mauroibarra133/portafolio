import "./App.css";
import Nav from "./components/Nav";
import { useThemeContext } from "./context/ThemeContext";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Page from "./components/Page";
function App() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const { contextTheme } = useThemeContext();

  const switchNav = () => {
    setIsNavOpen(!isNavOpen);
  };


  useEffect(() => {
    // Función para manejar el evento de cambio de tamaño de la ventana
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsNavOpen(false); // Cierra la navegación si el ancho es mayor a 767px
      }
    };

    // Agrega el event listener para el evento de cambio de tamaño
    window.addEventListener("resize", handleResize);

    // Limpia el event listener cuando el componente se desmonta
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }); // La dependencia vacía asegura que el efecto solo se ejecute una vez al montar el componente

  return (
    <BrowserRouter>
      <div className={`app-container ${contextTheme}`}>
        <Nav switchNav={switchNav} isNavOpen={isNavOpen} />
        {/* <Overlay closeNav={closeNav} isNavOpen={isNavOpen}> */}
        <div className="body">
          <Routes>
            <Route path="/" element={<Page />} />
          </Routes>
        </div>
        {/* </Overlay> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
