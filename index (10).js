import React from "react";
import { useNavigate } from "react-router-dom";
import Register from "../Register";

const RegisterWrapper = () => {
  const navigate = useNavigate();
  return <Register navigate={navigate} />;
};

export default RegisterWrapper;