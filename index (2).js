import React, { Fragment } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { isAuthenticated } from "../../utils/auth";

// Tables

import Administradores from "./Administradores";
import Clientes from "./Clientes";
import Categorias from "./Categorias";
import FormasPago from "./FormasPago";
import Productos from "./Productos";

const Tables = () => (
  <Fragment>
    <Routes>
      <Route path="consulta-administradores" element={isAuthenticated() ? <Administradores /> : <Navigate to="/login" />} />
      <Route path="consulta-clientes" element={isAuthenticated() ? <Clientes /> : <Navigate to="/login" />} />
      <Route path="consulta-categorias" element={isAuthenticated() ? <Categorias /> : <Navigate to="/login" />} />
      <Route path="consulta-formas-pago" element={isAuthenticated() ? <FormasPago /> : <Navigate to="/login" />} />
      <Route path="consulta-producto" element={isAuthenticated() ? <Productos /> : <Navigate to="/login" />} />
    </Routes>
  </Fragment>
);

export default Tables;
