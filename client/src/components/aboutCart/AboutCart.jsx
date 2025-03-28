import "./aboutCart.css";

const lenguajes = [
  {
    src: "./img/aboutCart/icons8-javascript-25.png",
    name: "JavaScript",
  },
  {
    src: "./img/aboutCart/icons8-react-25.png",
    name: "React",
  },
  {
    src: "./img/aboutCart/icons8-node-js-25.png",
    name: "NodeJS",
  },
  {
    src: "./img/aboutCart/icons8-mongodb-a-cross-platform-document-oriented-database-program-25.png",
    name: "MongoDB",
  },
  {
    src: "./img/aboutCart/icons8-sql-25.png",
    name: "SQL",
  },
  {
    src: "./img/aboutCart/icons8-electron-25.png",
    name: "Electron",
  },
  {
    src: "./img/aboutCart/icons8-python-25.png",
    name: "Python",
  },
  {
    src: "./img/aboutCart/icons8-java-25.png",
    name: "Java",
  }
];

const AboutCart = () => {
  return (
    <section className="aboutCart">
      <h2 className="aboutCart__h2"><span className="span__inicial">A</span>cerca de mí</h2>
      <p className="aboutCart__p">
        Desarrollador Fullstack apasionado por la automatización de procesos,
        diseño soluciones eficientes que impulsan resultados. En 2024, colaboré
        en Florida, EE.UU., con una constructora, optimizando flujos de trabajo
        con innovación y precisión.
      </p>
      <p className="aboutCart__p">
        "Más allá de ser programador, busco ser humano, conectando con empatía y
        aportando valor en cada proyecto que emprendo."
      </p>
      <h3 className="aboutCart__h2 aboutCart__h3"><span className="span__inicial">H</span>abilidades</h3>
      <div className="aboutCart__languages">
        {lenguajes.map((lenguaje, index) => (
          <div key={index} className="aboutCart__div">
            <img src={lenguaje.src} alt={lenguaje.name} />
            <p className="aboutCart__p">{lenguaje.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutCart;