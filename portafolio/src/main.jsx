import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemeContextProvider } from './context/ThemeContext.jsx'
import { LanguageContextProvider } from './context/LanguageContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <LanguageContextProvider>
  <ThemeContextProvider>
    <App />
    </ThemeContextProvider>
    </LanguageContextProvider>,
)
