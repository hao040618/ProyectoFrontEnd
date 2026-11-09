import "./TypeClotheCards.css";
import React, { useEffect, useState } from "react";

function TypeClotheCards() {
  const [types, setTypes] = useState([]);

  useEffect(() => {
    fetch("/dataCollection.json")
      .then((response) => response.json())
      .then((data) => setTypes(data || []));
  }, []);

  return (
    <section className="type-grid">
      {types.map((type) => (
        <article className="type-card" key={type.id}>
          <div className="type-img-div">
            <img src={type.img} alt={type.nombre} />
          </div>
          <span>{type.nombre}</span>
        </article>
      ))}
    </section>
  );
}

export default TypeClotheCards;
