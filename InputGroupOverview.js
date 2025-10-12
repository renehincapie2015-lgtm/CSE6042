import React, { useState } from "react";
import { InputGroup, InputGroupText, Input } from "reactstrap";

const FormInputGroupOverview = (props) => {
  const [nombre, setNombre] = useState("");
  const [errorNombre, setErrorNombre] = useState("");
  const [exitoNombre, setExitoNombre] = useState("");
  const [email, setEmail] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [exitoEmail, setExitoEmail] = useState("");
  const [clave, setClave] = useState("");
  const [errorClave, setErrorClave] = useState("");
  const [exitoClave, setExitoClave] = useState("");
  const [confirmar, setConfirmar] = useState("");
  const [errorConfirmar, setErrorConfirmar] = useState("");
  const [exitoConfirmar, setExitoConfirmar] = useState("");
  const [fecha, setFecha] = useState("");
  const [errorFecha, setErrorFecha] = useState("");
  const [exitoFecha, setExitoFecha] = useState("");
  const [edad, setEdad] = useState("");
  const [exper, setExper] = useState("");
  const [errorExper, setErrorExper] = useState("");
  const [exitoExper, setExitoExper] = useState("");

  const validarNombre = (valor) => {
    const regex = /^[A-ZÁÉÍÓÚÑ][a-záéíóúñ]+(\s[A-ZÁÉÍÓÚÑ][a-záéíóúñ]+)*$/;
    return regex.test(valor);
  }

  const validarEmail = (valor) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(valor);
  }

  const validarClave = (valor) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#@$!%*?&])[A-Za-z\d#@$!%*?&]{15,}$/;
    return regex.test(valor);
  }

  const validarConfirmar = (valor) => {
    return (valor === clave);
  }

  const validarFecha = (valor) => {
    const fecha = new Date(valor);
    const hoy = new Date();
    setEdad(Math.ceil(Math.abs(hoy - fecha) / (1000 * 60 * 60 * 24 * 365)));
    const hace18 = new Date(
      hoy.getFullYear() - 18,
      hoy.getMonth(),
      hoy.getDate()
    );
    return (fecha <= hace18);
  }

  const validarExper = (valor) => {
    return (valor >= 0 && valor <= edad);
  }

  const cambioNombre = (e) => {
    const valor = e.target.value;

    setExitoNombre("");
    setErrorNombre("");
    setNombre(valor);
    // validacion
    if (!valor) {
      setErrorNombre("Los nombres y apellidos son obligatorios");
    } else {
      if (!validarNombre(valor)) {
        setErrorNombre("Debe empezar con mayúscula y sólo contener letras");
      } else {
        setExitoNombre("Valor aceptado, cumple con las validaciones");
      }
    }
  }

  const salirNombre = (e) => {
    if (e.key === 'Enter') {
      if (!nombre) {
        setErrorNombre("Los nombres y apellidos son obligatorios");
      }
      alert(errorNombre || exitoNombre);
    }
  }

  const cambioEmail = (e) => {
    const valor = e.target.value;

    setExitoEmail("");
    setErrorEmail("");
    setEmail(valor);
    // validacion
    if (valor) {
      if (!validarEmail(valor)) {
        setErrorEmail("Correo electrónico mal formado");
      } else {
        setExitoEmail("Correo electrónico bien formado");
      }
    }
  }

  const salirEmail = (e) => {
    if (e.key === 'Enter') {
      if (email) {
        alert(errorEmail || exitoEmail);
      }
    }
  }

  const cambioClave = (e) => {
    const valor = e.target.value;

    setExitoClave("");
    setErrorClave("");
    setClave(valor);
    // validacion
    if (!valor) {
      setErrorClave("La contraseña es obligatoria");
    } else {
      if (!validarClave(valor)) {
        setErrorClave("La contraseña debe tener mínimo 15 caracteres, incluyendo mayúsculas, minúsculas, dígitos y signos especiales");
      } else {
        setExitoClave("La contraseña cumple los criterios de fortaleza");
      }
    }
  }

  const salirClave = (e) => {
    if (e.key === 'Enter') {
      if (!clave) {
        setErrorClave("La contraseña es obligatoria");
      }
      alert(errorClave || exitoClave);
    }
  }

  const cambioConfirmar = (e) => {
    const valor = e.target.value;

    setExitoConfirmar("");
    setErrorConfirmar("");
    setConfirmar(valor);
    // validacion
    if (!valor) {
      setErrorConfirmar("La confirmación de contraseña es obligatoria");
    } else {
      if (!validarConfirmar(valor)) {
        setErrorConfirmar("La confirmación no coincide con la contraseña");
      } else {
        setExitoConfirmar("La confirmación coincide con la contraseña");
      }
    }
  }

  const salirConfirmar = (e) => {
    if (e.key === 'Enter') {
      if (!confirmar) {
        setErrorConfirmar("La confirmación de contraseña es obligatoria");
      }
      alert(errorConfirmar || exitoConfirmar);
    }
  }

  const cambioFecha = (e) => {
    const valor = e.target.value;

    setExitoFecha("");
    setErrorFecha("");
    setFecha(valor);
    // validacion
    if (!valor) {
      setErrorFecha("La fecha de nacimiento es obligatoria");
    } else {
      if (!validarFecha(valor)) {
        setErrorFecha("Usted es menor de edad. No puede ser nuestro cliente");
      } else {
        setExitoFecha("Usted es adulto. Bienvenido a nuestro e-Commerce");
      }
    }
  }

  const salirFecha = (e) => {
    if (e.key === 'Enter') {
      if (!fecha) {
        setErrorFecha("La fecha de nacimiento es obligatoria");
      }
      alert(errorFecha || exitoFecha);
    }
  }

  const cambioExper = (e) => {
    const valor = e.target.value;

    setExitoExper("");
    setErrorExper("");
    setExper(valor);
    // validacion
    if (!valor) {
      setErrorExper("La experiencia es obligatoria");
    } else {
      if (!validarExper(valor)) {
        setErrorExper("Su experiencia no puede ser negativa o mayor a su edad");
      } else {
        setExitoExper("Tiene una buena experiencia. Será agradable su colaboración");
      }
    }
  }

  const salirExper = (e) => {
    if (e.key === 'Enter') {
      if (!exper) {
        setErrorExper("La experiencia es obligatoria");
      }
      alert(errorExper || exitoExper);
    }
  }

  return (
    <div>
      <InputGroup>
        <InputGroupText>A</InputGroupText>
        <Input placeholder="nombres y apellidos" type="text" value={nombre} onChange={cambioNombre} onKeyUp={salirNombre} />
        {errorNombre && <p style={{ color: "red" }}>{errorNombre}</p>}
        {exitoNombre && <p style={{ color: "green" }}>{exitoNombre}</p>}
      </InputGroup>
      <br />
      <InputGroup>
        <InputGroupText>@</InputGroupText>
        <Input placeholder="correo" type="email" value={email} onChange={cambioEmail} onKeyUp={salirEmail} />
        {errorEmail && <p style={{ color: "red" }}>{errorEmail}</p>}
        {exitoEmail && <p style={{ color: "green" }}>{exitoEmail}</p>}
      </InputGroup>
      <br />
      <InputGroup>
        <InputGroupText>@</InputGroupText>
        <Input placeholder="contraseña" type="password" value={clave} onChange={cambioClave} onKeyUp={salirClave} />
        {errorClave && <p style={{ color: "red" }}>{errorClave}</p>}
        {exitoClave && <p style={{ color: "green" }}>{exitoClave}</p>}
      </InputGroup>
      <br />
      <InputGroup>
        <InputGroupText>@</InputGroupText>
        <Input placeholder="confirmar" type="password" value={confirmar} onChange={cambioConfirmar} onKeyUp={salirConfirmar} />
        {errorConfirmar && <p style={{ color: "red" }}>{errorConfirmar}</p>}
        {exitoConfirmar && <p style={{ color: "green" }}>{exitoConfirmar}</p>}
      </InputGroup>
      <br />
      <InputGroup>
        <InputGroupText>#</InputGroupText>
        <Input placeholder="fecha nacimiento" type="date" value={fecha} onChange={cambioFecha} onKeyUp={salirFecha} />
        {errorFecha && <p style={{ color: "red" }}>{errorFecha}</p>}
        {exitoFecha && <p style={{ color: "green" }}>{exitoFecha}</p>}
      </InputGroup>
      <br />
      <InputGroup>
        <InputGroupText>#</InputGroupText>
        <Input placeholder="años de experiencia" type="number" value={exper} onChange={cambioExper} onKeyUp={salirExper} />
        {errorExper && <p style={{ color: "red" }}>{errorExper}</p>}
        {exitoExper && <p style={{ color: "green" }}>{exitoExper}</p>}
      </InputGroup>
    </div>
  );
};

export default FormInputGroupOverview;
