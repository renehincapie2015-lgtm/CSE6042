import React from "react";
import { useNavigate } from "react-router-dom";
import ForgotPassword from "../ForgotPassword";

const ForgotPasswordWrapper = () => {
  const navigate = useNavigate();
  return <ForgotPassword navigate={navigate} />;
};

export default ForgotPasswordWrapper;