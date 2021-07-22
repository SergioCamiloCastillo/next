import { Fragment } from "react";
import { Row, Col } from "antd";
import Image from "next/image";

const PorqueEscogernos = ({ items }) => {
  const { API_URL } = process.env;

  return (
    <div className="why-choose-us container">
      <Row gutter={[40, 40]}>
        {items
          ? items.map((item, index) => (
              <Fragment>
                <Col xs={24} sm={12} key={index}>
                  <Row>
                    {item.LogoDescripcionPorqueEscogernos
                      ? item.LogoDescripcionPorqueEscogernos.map(
                          (logos, indexlogos) => (
                            <Col xs={24} sm={12}>
                              <Image src={API_URL + logos.Logo[0].url} width={50} height={50} />
                              <h3>{logos.Cantidad}</h3>
                              <p>{logos.TituloLogo}</p>
                            </Col>
                          )
                        )
                      : "Cargando..."}
                  </Row>
                </Col>
                <Col xs={24} sm={12} key={index}>
                  <h2>{item.Titulo}</h2>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: `<p>${item.Descripcion}</p>`,
                    }}
                  ></div>
                </Col>
              </Fragment>
            ))
          : "Cargando..."}
      </Row>
    </div>
  );
};

export default PorqueEscogernos;
