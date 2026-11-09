import React, { useContext, useState } from "react";
import Logo from "../../assets/Logo.png";
import "./NavBar.css";
import ProfilePhoto from "../../assets/FotoDelPerfil.png";
import { Link } from "react-router-dom";
import ShopCart from "../ShopCart/ShopCart";
import { ListaProductosCarrito } from "../../App";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const [cartIsOpen, setCartIsOpen] = useState(false);
  const handleClickCart = () => {
    setCartIsOpen(!cartIsOpen);
  };

  const { allProducts } = useContext(ListaProductosCarrito);

  return (
    <>
      <div className="nav-div">
        <Link to="/">
          <img src={Logo} alt="Logotipo de la marca" />
        </Link>
        <nav>
          <ul>
            <li>
              <Link to="/coleccion">Colección</Link>
            </li>
            <li>
              <Link to="/novedades">Novedades</Link>
            </li>
            <li>
              <Link to="/">Básicos</Link>
            </li>
            <li>
              <Link to="/">Descuentos</Link>
            </li>
          </ul>
        </nav>
        <div className="bar-right-elements">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            className="bi bi-search"
            viewBox="0 0 16 16"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            className="bi bi-bag"
            viewBox="0 0 16 16"
            onClick={handleClickCart}
          >
            <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z" />
          </svg>
          <Link to="/login">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              className="bi bi-person-fill"
              viewBox="0 0 16 16"
            >
              <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
            </svg>
          </Link>
          <div className="count-icon">
            <p>{allProducts.length}</p>
          </div>
        </div>
        <div className="toggle-menu">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            fill="currentColor"
            className="bi bi-list"
            viewBox="0 0 16 16"
            onClick={handleClick}
          >
            <path
              fillRule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
            />
          </svg>
        </div>
      </div>
      <div className={`mobile-menu ${isOpen ? "opened" : ""}`}>
        <nav>
          <ul>
            <li>
              <Link to="/coleccion">Colección</Link>
            </li>
            <li>
              <Link to="/novedades">Novedades</Link>
            </li>
            <li>
              <Link to="/coleccion">Básicos</Link>
            </li>
            <li>
              <Link to="/coleccion">Descuentos</Link>
            </li>
          </ul>
        </nav>
      </div>
      <ShopCart cartState={cartIsOpen} clickCartFunction={handleClickCart} />
    </>
  );
};

export default NavBar;
