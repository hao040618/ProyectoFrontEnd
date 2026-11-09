import { createContext, useState } from "react";
import "./App.css";
import { Route, Routes, Outlet } from "react-router-dom";
import Home from "./pages/Home";
import Collection from "./pages/Collection";
import New from "./pages/New";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import { useLocalStorage } from "./customHook/localStorage";

export const FiltroContext = createContext();
export const FiltroPrecio = createContext();
export const ListaProductosCarrito = createContext();
export const ColorRopa = createContext();

function App() {
  const [categoriaActiva, setCategoriaActiva] = useState("Todos");
  const [filtroPrecioActivo, setFiltroPrecioActivo] = useState("recomendado");
  const [allProducts, setAllProducts] = useLocalStorage("carrito", []);
  const [color, setColor] = useState("");

  return (
    <>
      <FiltroContext.Provider value={{ categoriaActiva, setCategoriaActiva }}>
        <FiltroPrecio.Provider
          value={{ filtroPrecioActivo, setFiltroPrecioActivo }}
        >
          <ListaProductosCarrito.Provider
            value={{ allProducts, setAllProducts }}
          >
            <ColorRopa.Provider value={{ color, setColor }}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/coleccion" element={<Collection />} />
                <Route path="/novedades" element={<New />} />
                <Route path="/login" element={<Login />}/>
                <Route path="/registration" element={<Registration />} />
              </Routes>
            </ColorRopa.Provider>
          </ListaProductosCarrito.Provider>
        </FiltroPrecio.Provider>
      </FiltroContext.Provider>
    </>
  );
}

export default App;
