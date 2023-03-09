import React from 'react';

const Producto = ({ codigo, nombre, categoría, webs, web2, fichas, fichas2, idiomas, idiomas2, imagen, onVolver }) => {
  return (
    <div className="card mb-3 mt-4">
      <div className="row g-0">
        
        <div className="col-md-8">
          <div className="card-body">
            <h2 className="card-title">{nombre}</h2>
            <p className="card-text d-flex mt-3"><b>Código:</b>  &nbsp;  {codigo}</p>
            <p className="card-text d-flex"><b>Categoría:</b>  &nbsp;{categoría}</p>
            <p className="card-text d-flex"><b>Webs:</b> &nbsp; 
              <span className="mb-1 btn btn-primary">{webs}</span> 
                      &nbsp; 
              <span className="mb-1 btn btn-info">{web2}</span> 
            </p>
            <p className="card-text d-flex"><b>Fichas:</b> &nbsp; 
              <span className="mb-1 btn btn-success">{fichas}</span> 
                      &nbsp; 
              <span className="mb-1 btn btn-success">{fichas2}</span> 
            </p>
            <p className="card-text d-flex"><b>Idiomas:</b> &nbsp; 
                       <img
                        className="rounded"
                        src={idiomas}
                        alt={nombre}
                        width="50"
                        height="50"
                       />
                       &nbsp; 
                       <img
                        className="rounded"
                        src={idiomas2}
                        alt={nombre}
                        width="50"
                        height="50"
                       />
            </p>
            <button className="btn btn-primary" onClick={onVolver}>Volver</button>
          </div>
        </div>
        <div className="col-md-4 mt-4">
          <img src={imagen} alt={nombre} className="img-fluid img-round" />
        </div>
      </div>
    </div>
  );
};

export default Producto;
