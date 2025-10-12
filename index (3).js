import React, { Fragment } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { isAuthenticated } from "../../utils/auth";

// Forms

import Usuarios from "./Usuarios";

const Forms = () => (
  <Fragment>
    <Routes>
      {/* Forms */}
      <Route path="gestion-usuarios" element={isAuthenticated() ? <Usuarios /> : <Navigate to="/login" />} />
    </Routes>
  </Fragment>
);

export default Forms;
