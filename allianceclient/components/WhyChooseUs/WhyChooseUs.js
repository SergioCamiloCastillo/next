import { Fragment } from "react";
import { Row, Col } from "antd";
import Image from "next/image";
import CountUp from "react-countup";

const PorqueEscogernos = ({ items }) => {
  
  const API_URL  = 'https://idevcol.com';

  return (
    <div className="why-choose-us container">
      <Row gutter={[40, 40]}>
        {items
          ? items.map((item, index) => (
              <Fragment>
                <Col className='why-choose-us__logos-description text-center' xs={24} sm={12} key={index}>
                  <Row>
                    {item.LogoDescripcionPorqueEscogernos
                      ? item.LogoDescripcionPorqueEscogernos.map(
                          (logos, indexlogos) => (
                            <Col xs={24} sm={12}>
                              <Image src={API_URL + logos.Logo[0].url} width={50} height={50} />
                              <h3><CountUp duration={2} end={logos.Cantidad}></CountUp></h3>
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
