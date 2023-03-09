import React, { useState } from "react";
import Producto from "./Producto";
import AgregarProducto from "./AgregarProducto";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {

  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const mostrarForm = () => {
    setMostrarFormulario(true);
  };
  const [productos] = useState([
    {
      codigo: "001",
      nombre: "Producto 1",
      categoría: "Categorias del producto 1",
      webs: "web1",
      web2: "web1.2",
      fichas: "ficha1",
      fichas2: "ficha1.2",
      idiomas:"https://cdn-icons-png.flaticon.com/512/330/330557.png",
      idiomas2:"https://cdn-icons-png.flaticon.com/512/4060/4060233.png",
      imagen: "https://via.placeholder.com/150",
    },
    {
      codigo: "002",
      nombre: "Producto 2",
      categoría: "Categorias del producto 2",
      webs: "web2",
      web2: "web2.2",
      fichas: "ficha2",
      fichas2: "ficha2.2",
      idiomas:"https://cdn-icons-png.flaticon.com/512/330/330557.png",
      idiomas2:"https://cdn-icons-png.flaticon.com/512/4060/4060233.png",
      imagen: "https://via.placeholder.com/150",
    },
    {
      codigo: "003",
      nombre: "Producto 3",
      categoría: "Categorias del producto 3",
      webs: "web3",
      web2: "web3.2",
      fichas: "ficha3",
      fichas2: "ficha3.2",
      idiomas:"https://cdn-icons-png.flaticon.com/512/330/330557.png",
      idiomas2:"https://cdn-icons-png.flaticon.com/512/4060/4060233.png",
      imagen: "https://via.placeholder.com/150",
    },
  ]);

  const [productoSeleccionado, setProductoSeleccionado] = useState(null);

  const handleClick = (codigo) => {
    const producto = productos.find((p) => p.codigo === codigo);
    setProductoSeleccionado(producto);
  };

  const handleVolver = () => {
    setProductoSeleccionado(null);
  };

  if (productoSeleccionado) {
    return (
      <div className="container-fluid">
        <div className="row">
          <nav className="col-md-2 d-none d-md-block bg-light sidebar">
            <div className="sidebar-sticky">
              <ul className="nav flex-column">
                <li className="nav-item">
                  <h3><u>Productos</u></h3>
                  <div className="col-md-12">
                    <button type="button" className="btn hvr-border-fade"><h5>Web</h5></button>
                  </div>
                  <div className="col-md-12">
                    <button type="button" className="btn hvr-curl-top-left"><h5>Fichas</h5></button>
                  </div>
                  <div className="col-md-12">
                    <button type="button" className="btn hvr-float-shadow"><h5>Documentos</h5></button>
                  </div>
                </li>
              </ul>
            </div>
           

          </nav>
          <main className="col-md-9 ml-sm-auto col-lg-10 px-md-4">
            <Producto
              codigo={productoSeleccionado.codigo}
              nombre={productoSeleccionado.nombre}
              categoría={productoSeleccionado.categoría}
              webs={productoSeleccionado.webs}
              web2={productoSeleccionado.web2}
              fichas={productoSeleccionado.fichas}
              fichas2={productoSeleccionado.fichas2}
              idiomas={productoSeleccionado.idiomas}
              idiomas2={productoSeleccionado.idiomas2}
              imagen={productoSeleccionado.imagen}
              onVolver={handleVolver}
            />
          </main>
        </div>
      </div>
    );
  }

  return (
    <div className="container-fluid">
      <div className="row d-flex md-12 justify-content-between mb-4">
        <div className="col-md-3">
          <h1>regarsa</h1>
        </div>
        <div className="col-md-1">
          <div className="col-md-3 d-flex">
            <h3>Itxaro</h3>
            &nbsp; 
          <img
              className="rounded "
               src="https://via.placeholder.com/150"
               alt= "avatar"
               width="50"
               height="50"
            />
          </div>
            
        </div>
      </div>
      <div className="row">
        <nav className="col-md-2 d-none d-md-block bg-light sidebar">
          <div className="sidebar-sticky">
            <ul className="nav flex-column ">
              <li className="nav-item">
                <h3><u>Productos</u></h3>
                <div className="col-md-12">
                  <button type="button" className="btn hvr-border-fade"><h5>Web</h5></button>
                </div>
                <div className="col-md-12">
                  <button type="button" className="btn hvr-curl-top-left"><h5>Fichas</h5></button>
                </div>
                <div className="col-md-12">
                  <button type="button" className="btn hvr-float-shadow"><h5>Documentos</h5></button>
                </div>
                
              
                
              </li>
            </ul>
          </div>
        </nav>
        <main className="col-md-9 ml-sm-auto col-lg-10 px-md-4">
          <div className="col-md-12 d-flex">
            <h2 className="mt-2">Productos</h2>
            
            <button className="btn btn-dark mt-2 mb-2 ml-3"onClick={mostrarForm}>
              + Añadir producto
            </button>

            
          </div>
          <div className="col-md-12 d-flex justify-content-between">
            <div className="col-md-2 ">
              <select className="form-select" aria-label="Default select example" defaultValue={0}>
                  <option value="0">Show entries</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
              </select>
            </div>
            <div className="col-md-3 ">
                  <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
                  </form>
            </div>
          </div>
          
          
          <ul className="list-group">
          <div className="col-md-12 d-flex barra">
                  <div className="col-md-1"></div>
                  <div className="col-md-1"><p className="titulo">Código</p></div>
                  <div className="col-md-1"><p className="titulo">Nombre</p></div>
                  <div className="col-md-3"><p className="titulo">Categoría</p></div>
                  <div className="col-md-2"><p className="titulo">Webs</p></div>
                  <div className="col-md-3"><p className="titulo">Fichas</p></div>
                  <div className="col-md-1"><p className="titulo">Idiomas</p></div>
                </div>
            {productos.map((producto) => (
              <li
                key={producto.codigo}
                className="personal-list shadow d-flex justify-content-between align-items-center"
                onClick={() => handleClick(producto.codigo)}
              >
                
                <div className="col-md-12 d-flex">
                  <div className="col-md-1">
                      <img
                        className="rounded"
                        src={producto.imagen}
                        alt={producto.nombre}
                        width="50"
                        height="50"
                       />
                  </div>
                  <div className="col-md-1">
                    <p className="mb-1">{producto.codigo}</p>
                  </div>
                  <div className="col-md-1">
                    <p className="mb-1">{producto.nombre}</p>
                  </div>
                  <div className="col-md-3">
                    <p className="mb-1">{producto.categoría}</p>
                  </div>
                  <div className="col-md-2">
                    <span className="mb-1 btn btn-primary">{producto.webs}</span> 
                    &nbsp; 
                    <span className="mb-1 btn btn-info">{producto.web2}</span>
                  </div>
                  <div className="col-md-3">
                  <span className="mb-1 btn btn-success">{producto.fichas}</span> 
                    &nbsp; 
                    <span className="mb-1 btn btn-success">{producto.fichas2}</span>
                  </div>
                  <div className="col-md-1">
                      <img
                        className="rounded"
                        src={producto.idiomas}
                        alt={producto.nombre}
                        width="50"
                        height="50"
                       />
                       &nbsp; 
                       <img
                        className="rounded"
                        src={producto.idiomas2}
                        alt={producto.nombre}
                        width="50"
                        height="50"
                       />
                  </div>
                  
                  
                  
                  
                  
                  
               
                
                 </div>
              </li>
            ))}
          </ul>
          {mostrarFormulario && (
  <div className="mt-3">
    <AgregarProducto />
  </div>
)}
        </main>
      </div>
    </div>
  );
}

export default App;
