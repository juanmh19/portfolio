import { useState, useEffect, useRef } from "react";
import "./heroCart.css";

const HeroCart = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [actualCursorPosition, setActualCursorPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isHoveringGithub, setIsHoveringGithub] = useState(false);
  const [isHoveringLinkedin, setIsHoveringLinkedin] = useState(false);
  const cursorFollowAnimationRef = useRef(null);

  const images = [
    "/img/heroCart/firos-nv-Z2c6ounF-iE-unsplash-1200x800.webp",
    "/img/heroCart/clement-helardot-95YRwf6CNw8-unsplash-1200x800.webp",
    "/img/heroCart/20210106_221044.webp",
    "/img/heroCart/mohammad-rahmani-lPKIb8dJ8kw-unsplash-1200x800.webp",
  ];

  const githubIcons = {
    default: "/img/heroCart/icons8-github-19.png",
    hover: "/img/heroCart/icons8-github-19 (1).png"
  };

  const linkedinIcons = {
    default: "/img/heroCart/icons8-linkedin-19.png",
    hover: "/img/heroCart/icons8-linkedin-19 (1).png" 
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
        setIsFading(false);
      }, 1000);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  useEffect(() => {
    const moveCursor = (e) => {
      setActualCursorPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  useEffect(() => {
    const updateCursorWithDelay = () => {
      setCursorPosition(prev => {
        const dx = actualCursorPosition.x - prev.x;
        const dy = actualCursorPosition.y - prev.y;
        
        return {
          x: prev.x + dx * 0.2,
          y: prev.y + dy * 0.2
        };
      });
      
      cursorFollowAnimationRef.current = requestAnimationFrame(updateCursorWithDelay);
    };
    
    cursorFollowAnimationRef.current = requestAnimationFrame(updateCursorWithDelay);
    
    return () => {
      if (cursorFollowAnimationRef.current) {
        cancelAnimationFrame(cursorFollowAnimationRef.current);
      }
    };
  }, [actualCursorPosition]);


  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => setIsHovering(false);
  const handleGithubMouseEnter = () => setIsHoveringGithub(true);
  const handleGithubMouseLeave = () => setIsHoveringGithub(false);
  const handleLinkedinMouseEnter = () => setIsHoveringLinkedin(true);
  const handleLinkedinMouseLeave = () => setIsHoveringLinkedin(false);

  return (
    <>
      <div 
        className={`custom-cursor ${isHovering ? 'custom-cursor--expanded' : ''}`} 
        style={{ 
          left: `${cursorPosition.x}px`, 
          top: `${cursorPosition.y}px`,
        }}
      />

      <div className="heroCart">
        <div className="heroCart__div--img">
          <img
            className={`heroCart__img ${isFading ? "fade-out" : "fade-in"}`}
            src={images[currentImageIndex]}
            alt={`Background ${currentImageIndex + 1}`}
          />
        </div>
        <div className="heroCart__div">
          <img
            className="heroCart__img--perfil"
            src="./img/heroCart/yo.png"
            alt="Profile"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
          <div>
            <h1 className="heroCart__h1">Herner, Juan</h1>
            <p className="heroCart__p">Full Stack Developer</p>
          </div>
          <div className="heroCart__social">
            <img 
              className="heroCart__icon" 
              src={isHoveringGithub ? githubIcons.hover : githubIcons.default} 
              alt="GitHub" 
              onMouseEnter={() => {
                handleMouseEnter();
                handleGithubMouseEnter();
              }}
              onClick={() => {
                window.open("https://github.com/juanmh19?tab=repositories", "_blank");
              }}
              onMouseLeave={() => {
                handleMouseLeave();
                handleGithubMouseLeave();
              }}
            />
            <img 
              className="heroCart__icon" 
              src={isHoveringLinkedin ? linkedinIcons.hover : linkedinIcons.default} 
              alt="LinkedIn"
              onMouseEnter={() => {
                handleMouseEnter();
                handleLinkedinMouseEnter();
              }}
              onClick={() => {
                window.open("https://www.linkedin.com/in/juan-herner-103a45230/", "_blank");
              }}
              onMouseLeave={() => {
                handleMouseLeave();
                handleLinkedinMouseLeave();
              }}
            />
          </div>
        </div>
        <div className="heroCart__contact">
          <a 
            href="#" 
            className="heroCart__contact-btn"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            Contactame
            <img className="heroCart__img--send" src="./img/heroCart/icons8-send-25.png" alt="" />
          </a>
        </div>
      </div>
    </>
  );
};

export default HeroCart;
