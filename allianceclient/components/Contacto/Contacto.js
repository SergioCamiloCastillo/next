import { Row, Col } from "antd";
import Image from "next/image";
import FormularioContacto from "../FormularioContacto";
const Contacto = ({ items }) => {
  const API_URL  = 'https://idevcol.com';

  return (
    <div className="container contact" id='contacto'>
      <h2>Contáctenos</h2>
      <Row gutter={[40, 40]}>
        {items
          ? items.map((item, index) => (
              <Col xs={24} sm={8} key={index}>
                <div className="contact__image">
                  <Image
                    src={API_URL + item.Imagen[0].url}
                    width={70}
                    height={70}
                  />
                </div>
                <div className="contact__title">
                  <p>{item.TituloContacto}</p>
                </div>
                <div className="contact__description">
                <div
                    dangerouslySetInnerHTML={{
                      __html: `<p>${item.Descripcion}</p>`,
                    }}
                  ></div>
                </div>
              </Col>
            ))
          : "Cargando..."}
      </Row>
    </div>
  );
};

export default Contacto;
