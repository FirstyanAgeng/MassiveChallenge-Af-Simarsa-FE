/* eslint-disable jsx-a11y/alt-text */
import deskfas from "../assets/images/fasilitas.png";
import Arrow from "../assets/images/arrow.png";
import Layout from "../components/Layout";
import { Card, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
const Karir = () => {
  return (
    <Layout>
      <div className="Karir">
        <Card className="bg-light text-dark">
          <Card.Img src={deskfas} alt="Card image" />
          <Card.ImgOverlay className="background-filter">
            <Container>
              <h1>Karir </h1>
            </Container>
          </Card.ImgOverlay>
        </Card>
        <Container>
          <div className="p-5 Karir-content">
            <h1 className="text-center pb-5">Job yang tersedia</h1>
            <Row className="container mb-5 kartu-Karir py-5 text-center">
              <Col xs="4">Dokter Umum</Col>
              <Col xs="4">S3 Kedokteran</Col>
              <Col xs="4">Purwokerto</Col>

              <Link to="/" className="text-center pt-5">
                Selengkapnya
                <img
                  src={Arrow}
                  alt=""
                  style={{ width: "10px", height: "10px" }}
                />
              </Link>
            </Row>
            <Row className="container mb-5 kartu-Karir py-5 text-center">
              <Col xs="4">Dokter Umum</Col>
              <Col xs="4">S3 Kedokteran</Col>
              <Col xs="4">Purwokerto</Col>

              <Link to="/" className="text-center pt-5">
                Selengkapnya
                <img
                  src={Arrow}
                  alt=""
                  style={{ width: "10px", height: "10px" }}
                />
              </Link>
            </Row>
            <Row className="container mb-5 kartu-Karir py-5 text-center">
              <Col xs="4">Dokter Umum</Col>
              <Col xs="4">S3 Kedokteran</Col>
              <Col xs="4">Purwokerto</Col>

              <Link to="/" className="text-center pt-5">
                Selengkapnya
                <img
                  src={Arrow}
                  alt=""
                  style={{ width: "10px", height: "10px" }}
                />
              </Link>
            </Row>
            <Row className="container mb-5 kartu-Karir py-5 text-center">
              <Col xs="4">Dokter Umum</Col>
              <Col xs="4">S3 Kedokteran</Col>
              <Col xs="4">Purwokerto</Col>

              <Link to="/" className="text-center pt-5">
                Selengkapnya
                <img
                  src={Arrow}
                  alt=""
                  style={{ width: "10px", height: "10px" }}
                />
              </Link>
            </Row>
          </div>
        </Container>
      </div>
    </Layout>
  );
};

export default Karir;