import React from "react";

function DetalleProducto({ codigo, nombre, onVolver }) {
  return (
    <div>
      <h1>Detalles del producto</h1>
      <p>Código: {codigo}</p>
      <p>Nombre: {nombre}</p>
      <button onClick={onVolver}>Volver</button>
    </div>
  );
}

export default DetalleProducto;
