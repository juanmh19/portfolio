import "./header.css";
import { useState, useEffect } from "react";
import { useTheme } from "../../App";

const Header = ({ activeSection, onSectionClick }) => {
  // Acceder al contexto de tema
  const { darkMode, toggleDarkMode } = useTheme();
  
  // Estado para controlar qué botón está en hover
  const [hoveredIndex, setHoveredIndex] = useState(null);
  
  // Efecto para aplicar la clase dark-mode al body
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);
  
  // Objeto con las rutas de las imágenes y sus versiones hover
  const navItems = [
    {
      defaultSrc: "/img/header/icons8-web-25.png",
      hoverSrc: "/img/header/icons8-web-25 (1).png",
    },
    {
      defaultSrc: "/img/header/icons8-moon-25.png",
      hoverSrc: "/img/header/icons8-moon-25 (1).png",
      text: "Cambiar tema",
      isThemeToggle: true
    },
    {
      defaultSrc: "/img/header/icons8-resume-25.png",
      hoverSrc: "/img/header/icons8-resume-25 (1).png",
      text: "Resumen",
      section: "resumen"
    },
    {
      defaultSrc: "/img/header/icons8-male-user-25.png",
      hoverSrc: "/img/header/icons8-male-user-25 (1).png",
      text: "Sobre mí",
      section: "about"
    },
    {
      defaultSrc: "/img/header/icons8-business-25.png",
      hoverSrc: "/img/header/icons8-business-25 (1).png",
      text: "Trabajos",
      section: "experiencia"
    },
    {
      defaultSrc: "/img/header/icons8-office-25.png",
      hoverSrc: "/img/header/icons8-office-25 (1).png",
      text: "Proyectos",
      section: "projects"
    },
    {
      defaultSrc: "/img/header/icons8-study-25.png",
      hoverSrc: "/img/header/icons8-study-25 (1).png",
      text: "Estudios",
      section: "study"
    },
  ];

  const handleNavClick = (section, isThemeToggle) => {
    if (isThemeToggle) {
      toggleDarkMode();
    } else if (onSectionClick && section) {
      onSectionClick(section);
    }
  };

  // // In Header.jsx
// Update the renderTopButtons function

const renderTopButtons = () => {
  const topItems = navItems.slice(0, 2);
  
  return topItems.map((item, index) => (
    <button
      key={index}
      className={`header__button ${item.isThemeToggle ? 'theme-toggle' : ''}`}
      onMouseEnter={() => setHoveredIndex(index)}
      onMouseLeave={() => setHoveredIndex(null)}
      onClick={() => item.isThemeToggle && handleNavClick(null, true)}
      aria-label={item.text || "Button"}
    >
      {item.isThemeToggle ? (
        // Show sun icon in dark mode, moon icon in light mode
        <img
          className="header__img"
          src={darkMode ? "/img/header/icons8-sun-25.png" : "/img/header/icons8-moon-25.png"}
          alt={darkMode ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
        />
      ) : (
        <img
          className="header__img"
          src={hoveredIndex === index ? item.hoverSrc : item.defaultSrc}
          alt={item.text || ""}
        />
      )}
    </button>
  ));
};

  return (
    <header className="header">
      <div className="header__nav header__nav--top">
        {renderTopButtons()}
      </div>
      <nav className="header__nav header__nav--main">
        {navItems.slice(2).map((item, index) => {
          const buttonIndex = index + 2;
          const isActive = activeSection === item.section;
          
          return (
            <button
              key={buttonIndex}
              className={`header__button ${isActive ? 'header__button--active' : ''}`}
              onMouseEnter={() => setHoveredIndex(buttonIndex)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => handleNavClick(item.section)}
              aria-label={item.text}
              aria-current={isActive ? "page" : undefined}
            >
              <img
                className="header__img"
                src={
                  isActive || hoveredIndex === buttonIndex 
                    ? item.hoverSrc 
                    : item.defaultSrc
                }
                alt=""
              />
              <p className="header__p">{item.text}</p>
            </button>
          );
        })}
      </nav>
    </header>
  );
};

export default Header;