import React from "react";
import { useForm } from "react-hook-form";
import "./LoginForm.css";
import Logo from "../../assets/Logo.png";
import { Link } from "react-router-dom";

function LoginForm() {
  const { handleSubmit, register } = useForm({
    defaultValues: {
      usuario: null,
      contraseña: null,
    },
  });

  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <div className="login-form-div">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-image-div">
          <img src={Logo} alt="Logo de la marca" />
        </div>

        <div className="usuario-div">
          <label htmlFor="usuario"></label>
          <input
            type="text"
            {...register("usuario")}
            id="usuario"
            placeholder="Usuario"
          />
        </div>

        <div className="contra-div">
          <label htmlFor="contraseña"></label>
          <input
            type="password"
            {...register("contraseña")}
            id="contraseña"
            placeholder="Contraseña"
          />
        </div>
        <div className="button-div">
          <div className="login-btn">
          <button type="submit">Iniciar sesión</button>
          </div>
          <div className="crear-cuenta-btn">
          <Link to="/registration">
            <button type="button">Crear cuenta</button>
          </Link>
          </div>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
