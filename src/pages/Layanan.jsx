/* eslint-disable jsx-a11y/alt-text */
import deskfas from "../assets/images/fasilitas.png";
import Layanan1 from "../assets/images/layanan1.png";
import Layanan2 from "../assets/images/layanan2.png";
import Layanan3 from "../assets/images/layanan3.png";
import Layanan4 from "../assets/images/layanan4.png";
import Layanan5 from "../assets/images/layanan5.png";
import Layout from "../components/Layout";
import { Card, Container, Row, Col } from "react-bootstrap";

const Layanan = () => {
  return (
    <Layout>
      <div className="Layanan">
        <Card className="bg-light text-dark">
          <Card.Img src={deskfas} alt="Card image" />
          <Card.ImgOverlay className="background-filter">
            <Container>
              <h1>Layanan Kami</h1>
            </Container>
          </Card.ImgOverlay>
        </Card>
        <Container>
          <div className="p-5 layanan-content">
            <Row className="container mb-5 kartu-layanan py-5">
              <Col xs="6">
                <h3>Layanan Unggulan Kandungan</h3>
                <ul className="list">
                  <li>
                    <p>USG Obsetri Ginekologi</p>
                  </li>
                  <li>
                    <p>
                      USG Skrining Kelainan Kongenital Janin dan Detail Jantung
                    </p>
                  </li>
                  <li>
                    <p>USG 4 Dimensi HD Live Studio</p>
                  </li>
                  <li>
                    <p>Penanganan Kehamilan Resiko Tinggi</p>
                  </li>
                </ul>
              </Col>
              <Col xs="6">
                <img
                  src={Layanan1}
                  style={{ width: "400px", height: "220px" }}
                />
              </Col>
            </Row>
            <Row className="container mb-5 kartu-layanan py-5">
              <Col xs="6">
                <h3>Layanan Unggulan Saraf</h3>
                <ul className="list">
                  <li>
                    <p>Nyeri Kepala</p>
                  </li>
                  <li>
                    <p>Nyeri Otot</p>
                  </li>
                  <li>
                    <p>Nyeri Sendi</p>
                  </li>
                  <li>
                    <p>Vertigo dan Saraf Kejepit</p>
                  </li>
                </ul>
              </Col>
              <Col xs="6">
                <img src={Layanan2} width="400px" height="220px" />
              </Col>
            </Row>
            <Row className="container mb-5 kartu-layanan py-5">
              <Col xs="6">
                <h3>Layanan Unggulan Anak</h3>
                <ul className="list">
                  <li>
                    <p>Pelayanan Bayi dan Anak</p>
                  </li>
                  <li>
                    <p>Imunisasi</p>
                  </li>
                  <li>
                    <p>
                      Konseling Gizi, Nutrisi, Laktasi, dan Alergi pada Anak
                    </p>
                  </li>
                  <li>
                    <p>Konseling tumbuh kembang </p>
                  </li>
                </ul>
              </Col>
              <Col xs="6">
                <img src={Layanan3} width="397.94px" height="219.6px" />
              </Col>
            </Row>
            <Row className="container mb-5 kartu-layanan py-5">
              <Col xs="6">
                <h3>Layanan Unggulan Penyakit Dalam</h3>
                <ul className="list">
                  <li>
                    <p>Penyakit Lambung</p>
                  </li>
                  <li>
                    <p>Deteksi Hepatitis</p>
                  </li>
                  <li>
                    <p>Pengobatan Hepatitis</p>
                  </li>
                  <li>
                    <p>Endoscopy</p>
                  </li>
                </ul>
              </Col>
              <Col xs="6">
                <img src={Layanan4} width="400px" height="220px" />
              </Col>
            </Row>
            <Row className="container mb-5 kartu-layanan py-5">
              <Col xs="6">
                <h3>Layanan Unggulan Paru</h3>
                <ul className="list">
                  <li>
                    <p>Penyakit TBC</p>
                  </li>
                  <li>
                    <p>Asma</p>
                  </li>
                  <li>
                    <p>Gangguan pernapasan lainnya</p>
                  </li>
                </ul>
              </Col>
              <Col xs="6">
                <img src={Layanan5} width="400px" height="220px" />
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </Layout>
  );
};

export default Layanan;
