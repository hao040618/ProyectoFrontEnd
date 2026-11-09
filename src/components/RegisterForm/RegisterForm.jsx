import React, { useState } from "react";
import "./RegisterForm.css";
import { useForm } from "react-hook-form";
import Logo from "../../assets/Logo.png";

const RegisterForm = () => {
  const { handleSubmit, register, formState } = useForm({
    defaultValues: {
      correoElectronico: null,
      contraseña: null,
      nombre: null,
      apellidos: null,
      fechaNacimiento: null,
    },
  });

  const [inputHasError, setInputHasError] = useState(true)


  console.log(formState.errors);

  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <form className="register-form" onSubmit={handleSubmit(onSubmit)}>
      <div className="logo-img">
        <img src={Logo} alt="Logo de la marca" />
      </div>
      <div>
        <label htmlFor="correoElectronico">Correo Electrónico</label>
        <input className={`${formState.errors.correoElectronico ? "error" : ""}`}
          type="email"
          id="correoElectronico"
          {...register("correoElectronico", {
            required: {
              value: true,
              message: "⚠️ Correo electrónico obligatorio ⚠️",
            },
          })}
        />
        {formState.errors.correoElectronico ? (
          <p style={{ color: "red" }}>
            {formState.errors.correoElectronico.message}
          </p>
        ) : null}
      </div>
      <div>
        <label htmlFor="contraseña">Contraseña</label>
        <input className={`${formState.errors.contraseña ? "error" : ""}`}
          type="password"
          id="contraseña"
          {...register("contraseña", {
            required: {
              value: true,
              message: "⚠️ Contraseña requerida ⚠️",
            },
            minLength: {
              value: 8,
              message: "⚠️ Debe tener al menos 8 caracteres ⚠️",
            },
          })}
        />
        {formState.errors.contraseña ? (
          <p style={{ color: "red" }}>{formState.errors.contraseña.message}</p>
        ) : null}
      </div>
      <div>
        <label htmlFor="nombre">Nombre</label>
        <input className={`${formState.errors.nombre ? "error" : ""}`}
          type="text"
          id="nombre"
          {...register("nombre", {
            required: {
              value: true,
              message: "⚠️ Nombre obligatorio ⚠️",
            },
          })}
        />
        {formState.errors.nombre ? (
          <p style={{ color: "red" }}>{formState.errors.nombre.message}</p>
        ) : null}
      </div>
      <div>
        <label htmlFor="apellidos">Apellidos</label>
        <input className={`${formState.errors.apellidos ? "error" : ""}`}
          type="text"
          id="apellidos"
          {...register("apellidos", {
            required: {
              value: true,
              message: "⚠️ Apellidos obligatorios ⚠️",
            },
          })}
        />
        {formState.errors.apellidos ? (
          <p style={{ color: "red" }}>{formState.errors.apellidos.message}</p>
        ) : null}
      </div>
      <div>
        <label htmlFor="fecha-nacimiento">Fecha de nacimiento</label>
        <input className={`${formState.errors.fechaNacimiento ? "error" : ""}`}
          type="date"
          id="fecha-nacimiento"
          {...register("fechaNacimiento", {
            required: {
              value: true,
              message: "⚠️ Fecha de nacimiento obligatoria ⚠️",
            },
            validate: (value) => {
              const inputYear = new Date(value).getFullYear();
              const actualYear = new Date().getFullYear();
              const minAge = 18;

              if (actualYear - inputYear < minAge) {
                return "⚠️ Debes ser mayor de 18 años ⚠️";
              }
            },
          })}
        />
        {formState.errors.fechaNacimiento ? (
          <p style={{ color: "red" }}>
            {formState.errors.fechaNacimiento.message}
          </p>
        ) : null}
      </div>
      <button type="submit">Crear cuenta</button>
    </form>
  );
};

export default RegisterForm;
