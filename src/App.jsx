import "./App.css";
import Header from "./components/Header";
import { useThemeContext } from "./context/ThemeContext";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Page from "./components/Page";
import ProjectDetail from "./components/ProjectDetail";

function App() {
  const { contextTheme } = useThemeContext();

  return (
    <BrowserRouter>
      <div className={`app-container ${contextTheme}`}>
        <Header />
        <div className="body">
          <Routes>
            <Route path="/" element={<Page />} />
            <Route path="/projects/:slug" element={<ProjectDetail />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
