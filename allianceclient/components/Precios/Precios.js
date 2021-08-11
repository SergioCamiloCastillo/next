import { Fragment } from "react";
import { Row, Col } from "antd";

const Precios = ({ items }) => {
  return (
    <Fragment >
      <div id="precio">
      <div className="container prices" >
        <h2>Precios del desarrollo de tu Sitio Web</h2>
        <Row gutter={[30, 30]}>
          {items
            ? items.map((item, index) => (
                <Col xs={24} sm={6} key={index}>
                  <div className="prices-card">
                    <div className="hover-overlay"></div>

                    <h4 className="prices-card__title">
                      {item.TituloServicio}
                    </h4>
                    <div className="prices-card__price">
                    $ {new Intl.NumberFormat("es-CO").format(item.Precio) }
                    </div>
                    <div className='prices-card__items'
                    dangerouslySetInnerHTML={{
                      __html: `<p>${item.MultipleItems}</p>`,
                    }}
                  ></div>
                   
                  </div>
                </Col>
              ))
            : "Cargando..."}
        </Row>
      </div>
      </div>
    </Fragment>
  );
};

export default Precios;
