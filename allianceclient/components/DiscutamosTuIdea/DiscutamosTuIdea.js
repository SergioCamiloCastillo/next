import { Row, Col, Button } from "antd";
import Link from "next/link";

const DiscutamosTuIdea = ({ items }) => {
  return (
    <div className="discutamos-tu-idea">
      {items
        ? items.map((item, index) => (
            <div
              key={index}
              className="discutamos-tu-idea__contenedor"
              style={{
                backgroundImage: `url(https://idevcol.com${item.ImagenFondo[0].url})`,
                backgroundSize: "cover",
                backgroundPosition: "center top",
                height: "240px",
                backgroundColor: "#A63374",
              }}
            >
              <div className="container">
                <Row gutter={[40, 40]}>
                  <Col xs={0} sm={2} key={index}></Col>
                  <Col xs={24} sm={14} key={index}>
                    <h3>{item.Titulo}</h3>
                    <p>{item.Descripcion}</p>
                  </Col>
                  <Col
                    xs={24}
                    sm={6}
                    key={index}
                    className="discutamos-tu-idea__col-right"
                  >
                    <Button>
                      <Link href={item.BotonEnlace}>{item.BotonTitulo}</Link>
                    </Button>
                  </Col>
                  <Col xs={0} sm={2} key={index}></Col>
                </Row>
              </div>
            </div>
          ))
        : "Cargando..."}
    </div>
  );
};

export default DiscutamosTuIdea;
