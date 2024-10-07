import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <h1>Error 404</h1>
      <h3>Página no encontrada</h3>
      <Link to={"/"}>Regresar al Home</Link>
    </>
  );
};

export default NotFound;
