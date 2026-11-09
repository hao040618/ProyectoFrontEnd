import React, { useState, useContext } from "react";
import "./TypeClotheBar.css";
import { FiltroContext, FiltroPrecio } from "../../App";

const TypeClotheBar = () => {
  const { categoriaActiva, setCategoriaActiva } = useContext(FiltroContext);
  const { filtroPrecioActivo, setFiltroPrecioActivo } =
    useContext(FiltroPrecio);

  console.log(filtroPrecioActivo);
  return (
    <div className="bar-div">
      <div className="overflow">
        <div className="clothes-types">
          <button
            onClick={(e) => setCategoriaActiva(e.target.textContent)}
            type="button"
          >
            Todos
          </button>
          <button
            onClick={(e) => setCategoriaActiva(e.target.textContent)}
            type="button"
          >
            Remeras y Tops
          </button>
          <button
            onClick={(e) => setCategoriaActiva(e.target.textContent)}
            type="button"
          >
            Pantalones
          </button>
          <button
            onClick={(e) => setCategoriaActiva(e.target.textContent)}
            type="button"
          >
            Abrigos
          </button>
          <button
            onClick={(e) => setCategoriaActiva(e.target.textContent)}
            type="button"
          >
            Accesorios
          </button>
        </div>
        <div className="filter">
          <label htmlFor="filtro">ORDENAR POR:</label>
          <select
            name="filtro"
            id="filtro"
            onChange={(e) => setFiltroPrecioActivo(e.target.value)}
          >
            <option value="recomendado">Recomendado</option>
            <option value="mayorprecio">Mayor Precio</option>
            <option value="menorprecio">Menor Precio</option>
            <option value="masrecientes">Más Recientes</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default TypeClotheBar;
