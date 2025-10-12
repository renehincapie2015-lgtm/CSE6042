import React from "react";
import { useNavigate } from "react-router-dom";
import Main from "../Main";

const MainWrapper = () => {
  const navigate = useNavigate();
  return <Main navigate={navigate} />;
};

export default MainWrapper;