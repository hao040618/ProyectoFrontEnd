import React from "react";
import HeroPhoto from "../../assets/HeroPhoto.jpg";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <article className="information-div">
        <header>
          <span>• TEMPORADA 01 // 2025</span>
          <h1>Colección Esencial 2025</h1>
          <p>
            Prendas minimalistas de lino y algodón pensadas para durar.
            Siluetas relajadas con acabados de confección artesanal.
          </p>
        </header>

        <div className="button-div">
          <button type="button">Ver Colección</button>
          <button type="button">Descubrir Materiales</button>
        </div>
        <hr />
        <footer>
          <div>
            <span>100%</span>
            <span>FIBRAS ORGÁNICAS</span>
          </div>
          <div>
            <span>03</span>
            <span>CUOTA SIN INTERÉS</span>
          </div>
          <div>
            <span>30 Días</span>
            <span>CAMBIO SIN CARGO</span>
          </div>
        </footer>
      </article>
      <div className="hero-photo">
        <img src={HeroPhoto} alt="Foto del hero" />
        <div className="information-price">
          <div className="info">
          <span>EDICIÓN LIMITADA</span>
          <h3>Lino Natural Puro</h3>
          </div>
          <p>$42.000</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
