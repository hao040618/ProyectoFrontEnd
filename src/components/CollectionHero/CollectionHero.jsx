import React from "react";
import "./CollectionHero.css";

function CollectionHero() {
  return (
    <>
      <section className="section-hero">
        <article>
          <span>COLECCIÓN</span>
          <h2>Descubre nuestra colección</h2>
          <p>
            Diseños atemporales,
            <br /> materiales de calidad y<br /> prendas pensadas para
            acompañarte en cada
            <br /> momento.
          </p>
          <div className="button-div">
            <button type="button">
              Ver todos los productos
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-arrow-right"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                />
              </svg>
            </button>
          </div>
        </article>
      </section>
      <article className="mobile-hero-info">
        <span>COLECCIÓN</span>
        <h2>Descubre nuestra colección</h2>
        <p>
          Diseños atemporales,
          <br /> materiales de calidad y<br /> prendas pensadas para acompañarte
          en cada
          <br /> momento.
        </p>
        <div className="button-div">
          <button type="button">
            Ver todos los productos
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              className="bi bi-arrow-right"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
              />
            </svg>
          </button>
        </div>
      </article>
    </>
  );
}

export default CollectionHero;
