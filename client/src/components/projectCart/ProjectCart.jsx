import "./projectCart.css";
import { useState } from "react";

const ProjectCart = () => {
  const [abierto, setAbierto] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 2,
      title: "Plataforma Web de Contratación Profesional",
      img: "./img/projectCart/servicexperto.png",
      video: "./video/proyecto/Servicesxperto - Google Chrome 2025-03-26 00-56-24.mp4",
      description: "Una plataforma intuitiva tipo uber/fiver que conecta a profesionales con clientes mediante chat en tiempo real, pagos integrados y un mapa de geolocalización para encontrar expertos cercanos. Diseñada para simplificar y agilizar el proceso de contratación de principio a fin.",
      technologies: ["React", "Node.Js", "Algoritmos (Quicksort)", "Stripe", "Socket.io"],
      challenges: "Verificaciones y validaciones que brinden robustez y seguridad a la plataforma. Desde cada mensaje, archivo subido e input completado.",
      results: "Se esta implementando la version mobile con react native y se estan implementando funciones atractivas como la de uber.",
    },
    {
      id: 3,
      title: "Software de Scraping de Productos",
      video: "./video/proyecto/productScraper.mp4",
      img: "./img/projectCart/productScraper.png",
      description: "Una solución robusta que extrae datos de productos de sitios web y los organiza en una base de datos para comparativas de precios. Pensada para ser fácil de usar, permite a las empresas tomar decisiones de compra informadas con rapidez.",
      technologies: ["Electron", "React", "Node.Js", "MongoDb"],
      challenges: "Superar protecciones anti-scraping y optimizar el rendimiento para consultas masivas de datos.",
      results: "Ahorró 20 horas semanales en análisis manual y busqueda de precios para pequeñas empresas , entregando resultados precisos y rápidos.",
    },
    {
      id: 4,
      title: "Software de Scraping de Leads en Google Maps",
      img: "/img/projectCart/leadExtractor.png",
      video: "/video/proyecto/leadExtract.mp4",
      description: "Una herramienta avanzada que extrae leads de Google Maps o Bing Maps, los exporta a Excel y automatiza campañas de correo masivo. Diseñada para maximizar precisión y escalabilidad, facilita la prospección para equipos de ventas.",
      technologies: ["Python", "Google Maps API", "Bing Maps API", "BeautifulSoup", "Emailers"],
      challenges: "Evitar bloqueos de APIs y gestionar grandes volúmenes de datos.",
      results: "Generó más de 500 leads por hora con un 95% de precisión, acelerando el crecimiento empresarial.",
    },
    {
      id: 1,
      title: "Software de Seguridad y Vigilancia con IA",
      img: "/img/heroCart/mohammad-rahmani-lPKIb8dJ8kw-unsplash-1200x800.webp",
      video: "/video/proyecto/Electron 2025-03-26 00-46-35.mp4",
      description: "--- AUN EN PROCESO ---Un sistema innovador que integra múltiples dispositivos, incluidos smartphones, en una red unificada para monitoreo en tiempo real. Utiliza reconocimiento facial con IA para detectar usuarios no autorizados y envía alertas inmediatas por WhatsApp, garantizando una gestión de seguridad fluida y eficiente.",
      technologies: ["React", "Node.js", "TensorFlow", "WebRTC", "Twilio"],
      challenges: "Lograr la integración de IA en tiempo real y asegurar compatibilidad entre plataformas para una experiencia de usuario impecable.",
      results: "",
    },
  ];

  const handleOpen = (project) => {
    setSelectedProject(project);
    setAbierto(true);
  };

  const handleClose = () => {
    setAbierto(false);
    setSelectedProject(null);
  };

  return (
    <>
      <div className={abierto ? "abierto" : "cerrado"} onClick={handleClose}>
        {selectedProject && (
          <div className="project__details" onClick={(e) => e.stopPropagation()}>
            <video className="project__video" controls src={selectedProject.video || ""} />
            <div className="project__content">
              <h2>{selectedProject.title}</h2>
              <section className="project__section">
                <h3>Descripción</h3>
                <p>{selectedProject.description}</p>
              </section>
              <section className="project__section">
                <h3>Tecnologías utilizadas</h3>
                <ul className="project__tech-list">
                  {selectedProject.technologies.map((tech, index) => (
                    <li key={index}>{tech}</li>
                  ))}
                </ul>
              </section>
              <section className="project__section">
                <h3>Desafíos superados</h3>
                <p>{selectedProject.challenges}</p>
              </section>
              <section className="project__section">
                <h3>Resultados</h3>
                <p>{selectedProject.results}</p>
              </section>
              <button className="project__close-btn" onClick={handleClose}>
                Cerrar
              </button>
            </div>
          </div>
        )}
      </div>

      <section className="project">
        <h2>
          <span>P</span>royectos
        </h2>
        <div className="project__container">
          {projects.map((project) => (
            <div
              key={project.id}
              className="project__div"
              onClick={() => handleOpen(project)}
            >
              <img className="project__img" src={project.img} alt={project.title} />
              <h4>{project.title}</h4>
              <p className="project__p">{project.description}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default ProjectCart;