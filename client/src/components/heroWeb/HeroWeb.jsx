import "./heroWeb.css"

const HeroWeb = () => {
  return (
<section className='hero'>
    <div className='hero__div--left'>
        <div className="hero__div">
            <div className="hero__info">
                <div className="hero__circle"></div>
                <p className="hero__name">Herner, Juan</p>
            </div>
            <img className="hero__img" src="" alt="" />
            <button className="hero__cv hero__button">Descargar CV</button>
        </div>
        <div className="hero__div hero__div--skill">
            <p className="hero__p--skill">Habilidades</p>
            <div className="hero__div--language">
                <img src="./img/aboutCart/icons8-javascript-25.png" alt="" />
                <img src="./img/aboutCart/icons8-react-25.png" alt="" />
                <img src="./img/aboutCart/icons8-node-js-25.png" alt="" />
                <img src="./img/aboutCart/icons8-electron-25.png" alt="" />
                <img src="./img/aboutCart/icons8-sql-25.png" alt="" />
                <img src="./img/aboutCart/icons8-mongodb-a-cross-platform-document-oriented-database-program-25.png" alt="" />
                <img src="./img/aboutCart/icons8-python-25.png" alt="" />
                <img src="./img/aboutCart/icons8-java-25.png" alt="" />
            </div>
            <p className="hero__p--skill">Visita la sección de mis proyectos para ver lo realizado con cada lenguaje.</p>
        </div>
    </div>
    <div className='hero__div--mid'>
        <div className="hero__div">
            <h1 className="hero__h1">Herner, Juan Manuel</h1>
            <div className="hero__div--button">
                <button className="hero__button">Proyectos</button>
                <button className="hero__button">Experiencia</button>
            </div>
        </div>
    </div>
    <div className='hero__div--right hero__div'>
        <p>Desarrollador web</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis quos, delectus exercitationem provident soluta sit voluptas placeat optio fugit deleniti eius quo? Perspiciatis optio officiis animi eum molestiae nesciunt aliquid?</p>
        <div>
            <a href="">icono lin</a>
            <a href="">icono lin</a>
            <a href="">icono lin</a>
        </div>
        <img src="" alt="" />
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi, vel sint! Accusamus itaque earum quisquam necessitatibus saepe provident explicabo sed, nisi dicta facilis tempore. Nos</p>
        <a href="">Contact me</a>
    </div>
</section>
  )
}

export default HeroWeb