import { Fragment } from "react";

const PorqueEscogernos = ({ items }) => {
  return (
    <div className="why-choose-us">
      {items
        ? items.map((item, index) => (
            <Fragment>
              <h2>{item.Titulo}</h2>
              <div dangerouslySetInnerHTML={{__html: `<p>${item.Descripcion}</p>`}}></div>
            </Fragment>
          ))
        : "Cargando..."}
    </div>
  );
};

export default PorqueEscogernos;
