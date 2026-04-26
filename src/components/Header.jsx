import { useState, useEffect } from "react";
import { Menu, X, Moon, Sun, Code2, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import { useThemeContext } from "../context/ThemeContext";
import { useLanguageContext } from "../context/LanguageContext";
import Button from "./ui/Button";
import "../styles/header.css";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { contextTheme, toggleTheme } = useThemeContext();
  const { language, toggleLanguage, texts } = useLanguageContext();
  const isDark = contextTheme === "dark";

  const navItems = [
    { href: "/", label: texts.navItemHome },
    { href: "#aboutme", label: texts.navItemAbout },
    { href: "#projects", label: texts.navItemProjects },
    { href: "#skills", label: texts.navItemSkills },
    { href: "#footer", label: texts.navItemContact },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    const handleNavClick = (href) => {
      // Close mobile menu if open
      setIsMobileMenuOpen(false);
      
      // Smooth scroll to section if it has hash
      if (href.includes('#')) {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`site-header ${isScrolled ? "scrolled" : ""} ${isDark ? "dark" : "light"}`}
    >
      <div className="header-container">
        <div className="header-content">
          {/* Logo */}
          <Link to="/" className="header-logo">
            <div className="header-logo-icon">
              <Code2 className="h-5 w-5" />
            </div>
            <span className="header-logo-text">
              Mauro Ibarra
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="header-nav">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="header-nav-link"
                onClick={() => handleNavClick(item.href)}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right side actions */}
          <div className="header-actions">
            {/* Language toggle */}
            <button
              onClick={toggleLanguage}
              className="header-language-toggle"
            >
              <Globe className="h-4 w-4" />
              <span className="uppercase">{language}</span>
            </button>

            {/* Theme toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="header-theme-toggle"
            >
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              <span className="sr-only">Cambiar tema</span>
            </Button>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="header-mobile-toggle"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
              <span className="sr-only">Menu</span>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="header-mobile-nav">
            <div className="header-mobile-nav-content">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className="header-mobile-nav-link"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
