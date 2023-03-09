import React, { useState } from "react";
import "./App.css";

function AgregarProducto() {
  const [codigo, setCodigo] = useState("");
  const [nombre, setNombre] = useState("");
  const [categoría, setCategoría] = useState("");
  const [webs, setWebs] = useState("");
  const [fichas, setFichas] = useState("");
  const [idiomas, setIdiomas] = useState("");
  
 

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Enviando formulario...");
    console.log(`Código: ${codigo}`);
    console.log(`Nombre: ${nombre}`);
    console.log(`Categoría: ${categoría}`);
    console.log(`Webs: ${webs}`);
    console.log(`Fichas: ${fichas}`);
    console.log(`Idiomas: ${idiomas}`);
  };

  return (
    <div className="container-fluid  col-md-4">
      <div className="card">
        <div className="card-header">Agregar producto</div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="form-group mt-1">
              <label htmlFor="codigo">Código</label>
              <input
                type="text"
                className="form-control"
                id="codigo"
                value={codigo}
                onChange={(event) => setCodigo(event.target.value)}
              />
            </div>
            <div className="form-group mt-2">
              <label htmlFor="nombre">Nombre</label>
              <input
                type="text"
                className="form-control"
                id="nombre"
                value={nombre}
                onChange={(event) => setNombre(event.target.value)}
              />
            </div>
            <div className="form-group mt-2">
              <label htmlFor="categoría">Categoría</label>
              <input
                type="text"
                className="form-control"
                id="categoría"
                value={categoría}
                onChange={(event) => setCategoría(event.target.value)}
              />
            </div>
            <div className="form-group mt-2">
              <label htmlFor="webs">Webs</label>
              <input
                type="text"
                className="form-control"
                id="webs"
                value={webs}
                onChange={(event) => setWebs(event.target.value)}
              />
            </div>
            <div className="form-group mt-2">
              <label htmlFor="fichas">Fichas</label>
              <input
                type="text"
                className="form-control"
                id="fichas"
                value={fichas}
                onChange={(event) => setFichas(event.target.value)}
              />
            </div>
            <div className="form-group mt-2">
              <label htmlFor="idiomas">Idiomas</label>
              <input
                type="text"
                className="form-control"
                id="idiomas"
                value={idiomas}
                onChange={(event) => setIdiomas(event.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-primary mt-2">
              Agregar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AgregarProducto;
