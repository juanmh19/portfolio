import "./experienciaCart.css"

const ExperienciaCart = () => {
  return (
    <section className='experiencia'>
        <h2><span>E</span>xperiencia</h2>
        <div className="experiencia__experiencia">
            <div className="experiencia__trabajo">
            <img className='experiencia__img' src="./img/experiencia/valmec-logo.svg" alt="" />
            <p className="experiencia__fecha">2020 - 2022</p>
            </div>
            <p className="experiencia__p">Desarrollador Fullstack <br />Empresa de Válvulas radicada en Buenos Aires</p>
            <ul className="experiencia__ul">
              <li>Migración de software a la web.</li>
              <li>Analisis inicial (Arquitectura, Lógica de negocio, selección de tecnologias).</li>
              <li>Desarrollo Frontend.</li>
              <li>Desarollo Backend e implementación de API.</li>
            </ul>
        </div>
        <div className="experiencia__experiencia">
            <div className="experiencia__trabajo">
            <img className='experiencia__img' src="./img/experiencia/Builderk.webp" alt="" />
            <p className="experiencia__fecha">2023 - 2024</p>       
            </div>
            <p className="experiencia__p">Analista Programador <br />Constructora Estadounidense radicada en Florida</p>
            <ul className="experiencia__ul">
              <li>Análisis e involucramiento en procesos existentes.</li>
              <li>Documentación de Ineficiencias y cuellos de botella.</li>
              <li>Diseño e implementación de soluciones.</li>
              <li>Optimización y automatización de tareas.</li>
              <li>Desarollo con Python y xml en Odoo.</li>
              <li>Capacitación y soporte en las soluciones implementadas.</li>
            </ul>
        </div>
    </section>
  )
}

export default ExperienciaCart