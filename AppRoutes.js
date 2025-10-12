import { Routes, Route, Navigate } from "react-router-dom";
import LoginWrapper from "./DemoPages/UserPages/LoginWrapper";
import RegisterWrapper from "./DemoPages/UserPages/RegisterWrapper";
import ForgotPasswordWrapper from "./DemoPages/UserPages/ForgotPasswordWrapper";
import MainWrapper from "./DemoPages/MainWrapper";
import Administradores from "./DemoPages/Tables/Administradores";
import Clientes from "./DemoPages/Tables/Clientes";
import Categorias from "./DemoPages/Tables/Categorias";
import FormasPago from "./DemoPages/Tables/FormasPago";
import Productos from "./DemoPages/Tables/Productos";
import Usuarios from "./DemoPages/Forms/Usuarios";
import { isAuthenticated } from "./utils/auth";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<LoginWrapper />} />
      <Route path="/register" element={<RegisterWrapper />} />
      <Route path="/forgot-password" element={<ForgotPasswordWrapper />} />
      <Route path="/main/*" element={isAuthenticated() ? <MainWrapper /> : <Navigate to="/login" />} />
      <Route path="/tables/consulta-administradores/*" element={isAuthenticated() ? <Administradores /> : <Navigate to="/login" />} />
      <Route path="/tables/consulta-clientes/*" element={isAuthenticated() ? <Clientes /> : <Navigate to="/login" />} />
      <Route path="/tables/consulta-categorias/*" element={isAuthenticated() ? <Categorias /> : <Navigate to="/login" />} />
      <Route path="/tables/consulta-formas-pago/*" element={isAuthenticated() ? <FormasPago /> : <Navigate to="/login" />} />
      <Route path="/tables/consulta-producto/*" element={isAuthenticated() ? <Productos /> : <Navigate to="/login" />} />
      <Route path="/forms/gestion-usuarios/*" element={isAuthenticated() ? <Usuarios /> : <Navigate to="/login" />} />
    </Routes>
  );
};

export default AppRoutes;
