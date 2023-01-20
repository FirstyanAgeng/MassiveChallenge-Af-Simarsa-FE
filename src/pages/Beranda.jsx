/* eslint-disable jsx-a11y/alt-text */
import { Row, Col, Container, Card } from "react-bootstrap";
import { DOKTER, ABOUT, LAYANAN } from "../router";
import { Link } from "react-router-dom";
import Layanan1 from "../assets/images/layanan1.png";
import Arrow from "../assets/images/arrow.png";
import dokter1 from "../assets/images/dok1.png";
import dokter2 from "../assets/images/dokter6.png";
import Layout from "../components/Layout";

const Beranda = () => {
  return (
    <Layout>
      <div className="beranda">
        <h1 className="ms-5 judul">
          Selamat Datang Di Website Resmi <br />
          Rumah Sakit Bunda Purwokerto
        </h1>
      </div>
      <div className="beranda-content">
        <Container>
          <Row className="justify-content-center pt-4">
            <Col xs="9">
              <h2 className="pt-5">Sejarah Rumah Sakit Bunda</h2>
              <p>
                Rumah Sakit Bunda Purwokerto merupakan Rumah sakit swasta di
                bawah naungan Yayasan Bunda Purwokerto. Di bangun sejak 09
                Agustus 1989 dan beroperasi sebagai Rumah Bersalin pada 14 juni
                1990 yang diresmikan oleh Bapak Kepala Kandep Kesehatan Banyumas
                (Bapak dr. Koentoro)
              </p>
              <p>
                <Link to={ABOUT}>
                  Selengkapnya
                  <img
                    src={Arrow}
                    alt=""
                    style={{ width: "10px", height: "10px" }}
                  />
                </Link>
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="beranda-layanan container mb-5 pb-5">
        <h2 className="pt-5 text-center">Layanan</h2>
        <Container>
          <Row className="container my-5">
            <Col xs="7">
              <h3>Layanan Unggulan Kandungan</h3>
              <ul className="list pt-3">
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
            <Col xs="5">
              <img src={Layanan1} style={{ width: "400px", height: "220px" }} />
            </Col>
          </Row>
          <p className="text-center">
            <Link to={LAYANAN}>
              Selengkapnya
              <img
                src={Arrow}
                alt=""
                style={{ width: "10px", height: "10px" }}
              />
            </Link>
          </p>
        </Container>
      </div>
      <div className="beranda-jadwal pb-5">
        <Container>
          <h2 className="pt-5 text-center">Jadwal Dokter</h2>
          <Row className="justify-content-center mt-5">
            <Col className="mb-5 me-5" xs="3">
              <Card style={{ width: "17rem" }} className="isi-kartu">
                <Card.Img variant="top" src={dokter1} />
                <Card.Body>
                  <Card.Text className="text-center">
                    <p>Dr. Anton Prihandana, Sp.OG</p>
                    <p>Spesialis Obstetri & Ginekologi</p>
                  </Card.Text>
                </Card.Body>
                <Link
                  to={DOKTER}
                  style={{
                    backgroundColor: "#0957DE",
                    color: "#BFD2F8",
                    padding: "10px",
                    textAlign: "center",
                    textDecoration: "none",
                  }}
                >
                  Lihat Jadwal Praktik
                </Link>
              </Card>
            </Col>
            <Col className="mb-5 ms-5" xs="3">
              <Card style={{ width: "17rem" }} className="isi-kartu">
                <Card.Img variant="top" src={dokter2} />
                <Card.Body>
                  <Card.Text className="text-center">
                    <p>Dr. Tiara Nurlita Sari, Sp.A</p>
                    <p>SPESIALIS ANAK</p>
                  </Card.Text>
                </Card.Body>
                <Link
                  to={DOKTER}
                  style={{
                    backgroundColor: "#0957DE",
                    color: "#BFD2F8",
                    padding: "10px",
                    textAlign: "center",
                    textDecoration: "none",
                  }}
                >
                  Lihat Jadwal Praktik
                </Link>
              </Card>
            </Col>
          </Row>
          <p className="text-center">
            <Link to={DOKTER}>
              Selengkapnya
              <img
                src={Arrow}
                alt=""
                style={{ width: "10px", height: "10px" }}
              />
            </Link>
          </p>
        </Container>
      </div>
    </Layout>
  );
};

export default Beranda;
