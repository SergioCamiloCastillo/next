import React from "react";
import { Fragment } from "react";

const NuestrosServicios = ({ items }) => {
  return (
    <div className="title-description-our-services container">
      {items
        ? items.map((item, index) => (
            <Fragment>
              <h2>{item.Titulo}</h2>
              <p>{item.Descripcion}</p>
            </Fragment>
          ))
        : "Cargando..."}
    </div>
  );
};

export default NuestrosServicios;
