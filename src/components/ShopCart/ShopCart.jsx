import React, { useContext } from "react";
import "./ShopCart.css";
import { ColorRopa, ListaProductosCarrito } from "../../App";

function ShopCart({ cartState, clickCartFunction }) {
  const { allProducts, setAllProducts } = useContext(ListaProductosCarrito);
  const { color, setColor } = useContext(ColorRopa);

  let sumaTotalArticulos = 0;
  let suma = 0;

  for (const product of allProducts) {
    suma += product.quantity * Number(product.precio);
    sumaTotalArticulos += product.quantity;
  }

  return (
    <div className={`cart-div ${cartState ? "opened" : ""}`}>
      <div className="title-and-close">
        <div className="title">
          <h2>Mi Carrito </h2>
          <span>Total De Artículos: {sumaTotalArticulos}</span>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          className="bi bi-x-lg"
          viewBox="0 0 16 16"
          onClick={clickCartFunction}
          style={{ cursor: "pointer" }}
        >
          <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
        </svg>
      </div>
      <div className="products">
        {allProducts.map((product) => (
          <div key={product.id}>
            <h3>
              {product.nombrePrenda} x{product.quantity}
            </h3>
            <p>{product.precio}€</p>
            <div
              className="clothe-color"
              style={
                product.colores.includes(color)
                  ? { backgroundColor: color }
                  : { display: "none" }
              }
            ></div>
          </div>
        ))}
      </div>
      <div className="total">
        <div className="price-div">
          <p>Total:</p>
          <p>{suma.toFixed(2)}€</p>
        </div>
        <button type="button">Confirmar</button>
      </div>
    </div>
  );
}

export default ShopCart;
