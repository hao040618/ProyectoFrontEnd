import React from "react";
import "./NovedadesContent.css";
import imagen1 from "../../assets/ImagenNovedades_1.jpg";
import imagen2 from "../../assets/ImagenNovedades_2.jpg";
import imagen3 from "../../assets/ImagenNovedades_3.jpg";
import imagen4 from "../../assets/ImagenNovedades_4.jpg";
import footerImg from "../../assets/ImagenFooter.jpg";

const images = [imagen1, imagen2, imagen3, imagen4];

function NovedadesContent() {
  return (
    <>
      <article className="new-section-content">
        <header>
          <span>RECIÉN LLEGADO · OTOÑO 2025</span>
          <h1>Novedades que se sienten</h1>
          <p>
            Piezas esenciales, texturas naturales y tonos que <br /> acompañan
            cada día.
          </p>
        </header>
        <section>
          {images.map((image) => (
            <article key={crypto.randomUUID()}>
              <div>
                <img src={image} alt="Imagen de las novedades" />
                <span>NUEVO</span>
              </div>
            </article>
          ))}
        </section>
        <footer>
          <article>
            <img src={footerImg} alt="Imagen del pie de página" />
            <div className="text-div">
              <h2>
                Menos piezas, <br /> más posibilidades.
              </h2>
              <button>Explorar colección&nbsp;&nbsp;→</button>
            </div>
          </article>
          <div className="mobile-text-div">
            <h2>
              Menos piezas, <br /> más posibilidades.
            </h2>
            <button>Explorar colección&nbsp;&nbsp;→</button>
          </div>
        </footer>
      </article>
    </>
  );
}

export default NovedadesContent;
