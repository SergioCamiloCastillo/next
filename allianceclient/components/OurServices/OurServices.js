import { Fragment } from "react";
import { Row, Col } from "antd";
import Image from "next/image";


const OurServices = ({ items }) => {
  const { API_URL } = process.env

  return (
    <Fragment>
      <div className="container">
        <Row gutter={[40, 40]}>
          {items
            ? items.map((item, index) => (
                <Col xs={24} sm={8} key={index}>
                  <div className="our-services">
                  <div className='hover-overlay'></div>

                    <Image src={API_URL + item.Icono[0].url} width={70} height={70} />

                    <h4 className="our-services__title">{item.Titulo}</h4>
                    <p className="our-services__description">{item.Descripcion}</p>
                  </div>
                </Col>
              ))
            : "Cargando..."}
        </Row>
      </div>
    </Fragment>
  );
};
export default OurServices;
