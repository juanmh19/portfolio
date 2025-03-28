import "./study.css"

const Study = () => {
  return (
    <section className='study'>
      <h2><span>S</span>tudy</h2>
      <div className='study__container'>
        <div className='study__div'>
          <div className='study__div--info'>
            <h4>Licenciatura en Sistemas</h4>
            <p className="study__p">2023 - En curso</p>
          </div>
          <ul>
            <li>Fundamentos e introducción a Python</li>
            <li>Lógica y resolucion de problemas en programación</li>
            <li>Fundamentos e introducción a Java</li>
            <li>Estructura de datos y Algoritmos</li>
            <li>Fundamentos e introducción a Assembler</li>
          </ul>
        </div>

        <div className='study__div'>
          <div className='study__div--info'>
            <h4>Licenciatura en Economia Politica</h4>
            <p className="study__p">2024 - En curso</p>
          </div>
          <ul>
            <li>Fundamentos e introducción a Economía</li>
            <li>Macroeconomia</li>
            <li>Sociologia clasica</li>
          </ul>
        </div>

        <div className='study__div'>
          <div className='study__div--info'>
            <h4>Diplomatura en Big data con Python</h4>
            <p className="study__p">2022</p>
          </div>
          <ul>
            <li>Fundamentos e introducción a Big data</li>
            <li>Manejo y procesamiento de Datos</li>
            <li>Almacenamiento y consulta de Datos</li>
            <li>Fundamentos e introducción a Python</li>
          </ul>
        </div>
        <div className='study__div'>
          <div className='study__div--info'>
            <h4>Diplomatura en Fullstack con Node.js</h4>
            <p className="study__p">2022</p>
          </div>
          <ul>
            <li>Fundamentos e introducción a Node.js</li>
            <li>Asincronia y promesas</li>
            <li>Bases de datos con SQL y MongoDB</li>
            <li>Apis, servidor HTTP, despliegue, escabilidad, autenticación y seguridad</li>
          </ul>
        </div>

      </div>
    </section>
  )
}

export default Study