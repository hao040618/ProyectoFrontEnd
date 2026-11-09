import React, { useState, useEffect, useContext } from "react";
import "./ClotheCards.css";
import {
  ColorRopa,
  FiltroContext,
  FiltroPrecio,
  ListaProductosCarrito,
} from "../../App";

const ClotheCards = () => {
  const [camisetas, setCamisetas] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => setCamisetas(data || []));
  }, []);

  const { categoriaActiva, setCategoriaActiva } = useContext(FiltroContext);
  const { filtroPrecioActivo, setFiltroPrecioActivo } =
    useContext(FiltroPrecio);
  const { allProducts, setAllProducts } = useContext(ListaProductosCarrito);
  const { color, setColor } = useContext(ColorRopa);

  const handleClickColor = (color) => {
    setColor(color);
  };

  console.log(color);

  const addProductsCart = (product) => {
    let duplicated = allProducts.find((item) => item.id === product.id);

    if (duplicated !== undefined) {
      const updatedProducts = allProducts.map((item) => {
        if (item.id === duplicated.id) {
          const currentQuantity = item.quantity;
          return { ...item, quantity: currentQuantity + 1 };
        } else {
          return item;
        }
      });
      setAllProducts(updatedProducts);
    } else {
      setAllProducts([...allProducts, product]);
    }
  };

  const productosFiltrados =
    categoriaActiva === "Todos"
      ? camisetas
      : camisetas.filter((camiseta) => camiseta.tipoPrenda === categoriaActiva);

  const productosOrdenados = [...productosFiltrados].sort((a, b) => {
    if (filtroPrecioActivo === "mayorprecio") {
      return b.precio - a.precio;
    } else if (filtroPrecioActivo === "menorprecio") {
      return a.precio - b.precio;
    } else {
      return 0;
    }
  });

  return (
    <section className="clothe-grid">
      {productosOrdenados.map((camiseta) => (
        <article className="clothe-card" key={camiseta.id}>
          <div>
            <img src={camiseta.img} alt={camiseta.tipoPrenda} />
          </div>
          <div className="info-box">
            <div>
              <span>{camiseta.tipoPrenda}</span>
              <h3>{camiseta.nombrePrenda}</h3>
            </div>
            <div>
              {camiseta.colores.map((color) => (
                <button
                  onClick={() => handleClickColor(color)}
                  type="button"
                  key={crypto.randomUUID()}
                  style={{ backgroundColor: color }}
                ></button>
              ))}
            </div>
          </div>
          <div className="price">
            <p>{camiseta.precio}€</p>
            <button type="button" onClick={() => addProductsCart(camiseta)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-cart-plus"
                viewBox="0 0 16 16"
              >
                <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9z" />
                <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zm3.915 10L3.102 4h10.796l-1.313 7zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
              </svg>{" "}
              Agregar
            </button>
          </div>
        </article>
      ))}
    </section>
  );
};

export default ClotheCards;
