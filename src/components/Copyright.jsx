import { useThemeContext } from "../context/ThemeContext.jsx";
import "../styles/footer.css";


function Copyright() {
    const { contextTheme } = useThemeContext();
    
    return ( 
        <div className={`footer-copyright ${contextTheme}`}>
        <p>Copyright @ 2024 Ibarra. All rights reserved</p>
      </div>
     );
}

export default Copyright;