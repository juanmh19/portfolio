import { useState, useRef, useEffect } from "react";
import { useTheme } from "../../App";
import HeroCart from "../../components/heroCart/HeroCart";
import AboutCart from "../../components/aboutCart/AboutCart";
import ExperienciaCart from "../../components/experienciaCart/ExperienciaCart";
import ProjectCart from "../../components/projectCart/ProjectCart";
import Study from "../../components/study/Study";
import Header from "../../components/header/Header";
import "./appCart.css";

const AppCart = () => {
  // Access the theme context
  const { darkMode } = useTheme();
  
  // State to track active section
  const [activeSection, setActiveSection] = useState("resumen");
  
  // State to track animation states
  const [animatingOut, setAnimatingOut] = useState(false);
  const [previousSection, setPreviousSection] = useState(null);
  
  // Refs for scrolling to sections
  const aboutRef = useRef(null);
  const experienciaRef = useRef(null);
  const projectsRef = useRef(null);
  const studyRef = useRef(null);
  
  // Function to handle section clicks from Header with animation
  const handleSectionClick = (section) => {
    if (section === activeSection) return;
    
    // Start animation process
    setPreviousSection(activeSection);
    setAnimatingOut(true);
    
    // Wait for the exit animation, then change the active section
    setTimeout(() => {
      setActiveSection(section);
      setAnimatingOut(false);
      
      // If a specific section is clicked, scroll to it
      if (section !== "resumen") {
        const sectionRef = {
          about: aboutRef,
          experiencia: experienciaRef,
          projects: projectsRef,
          study: studyRef
        }[section];
        
        if (sectionRef && sectionRef.current) {
          sectionRef.current.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        // If "resumen" is clicked, scroll to top
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }, 500); // Half a second for the exit animation
  };
  
  // Determine which sections should be visible during transitions
  const shouldShowSection = (sectionId) => {
    if (animatingOut) {
      return activeSection === "resumen" || activeSection === sectionId || 
             (previousSection === "resumen" || previousSection === sectionId);
    }
    return activeSection === "resumen" || activeSection === sectionId;
  };
  
  // Determine CSS classes for animation
  const getSectionClass = (sectionId) => {
    if (animatingOut) {
      if (activeSection === sectionId || (activeSection === "resumen" && previousSection !== "resumen")) {
        return "slide-out";
      } else if (previousSection === sectionId || previousSection === "resumen") {
        return "waiting-to-slide-in";
      }
    } else if (activeSection === sectionId || activeSection === "resumen") {
      return "slide-in";
    }
    return "";
  };
  
  return (
    <div className={`appCart app-container ${darkMode ? "dark" : "light"}`}>
      <div className="appCart__divv">
      <HeroCart />
      <main className="appCart__contenedor main-content">
        {/* Render sections with appropriate animation classes */}
        {shouldShowSection("about") && (
          <div 
            ref={aboutRef} 
            id="about" 
            className={`section-container ${getSectionClass("about")}`}
            style={{display: getSectionClass("about") === "waiting-to-slide-in" ? "none" : "block"}}
          >
            <AboutCart />
          </div>
        )}
        
        {shouldShowSection("experiencia") && (
          <div 
            ref={experienciaRef} 
            id="experiencia" 
            className={`section-container ${getSectionClass("experiencia")}`}
            style={{display: getSectionClass("experiencia") === "waiting-to-slide-in" ? "none" : "block"}}
          >
            <ExperienciaCart />
          </div>
        )}
        
        {shouldShowSection("projects") && (
          <div 
            ref={projectsRef} 
            id="projects" 
            className={`section-container ${getSectionClass("projects")}`}
            style={{display: getSectionClass("projects") === "waiting-to-slide-in" ? "none" : "block"}}
          >
            <ProjectCart />
          </div>
        )}
        
        {shouldShowSection("study") && (
          <div 
            ref={studyRef} 
            id="study" 
            className={`section-container ${getSectionClass("study")}`}
            style={{display: getSectionClass("study") === "waiting-to-slide-in" ? "none" : "block"}}
          >
            <Study />
          </div>
        )}
      </main>
      </div>
      <Header 
        activeSection={activeSection} 
        onSectionClick={handleSectionClick} 
      />
    </div>
  );
};

export default AppCart;