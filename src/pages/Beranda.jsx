/* eslint-disable jsx-a11y/alt-text */
import { Row, Col, Container, Card } from "react-bootstrap";
import { DOKTER, ABOUT } from "../router";
import { Link } from "react-router-dom";
import Layanan1 from "../assets/images/layanan1.png";
import Arrow from "../assets/images/arrow.png";
import Dok from "../assets/images/dok1.png";
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
          <h2 className="pt-5">Sejarah Rumah Sakit Bunda</h2>
          <p>
            Rumah Sakit Bunda Purwokerto merupakan Rumah sakit swasta di bawah
            naungan Yayasan Bunda Purwokerto. Di bangun sejak 09 Agustus 1989
            dan beroperasi sebagai Rumah Bersalin pada 14 juni 1990 yang
            diresmikan oleh Bapak Kepala Kandep Kesehatan Banyumas (Bapak dr.
            Koentoro)
          </p>
          <p>
            <Link to={ABOUT}>
              Baca Selengkapnya
              <img
                src={Arrow}
                alt=""
                style={{ width: "10px", height: "10px" }}
              />
            </Link>
          </p>
        </Container>
      </div>
      <div className="beranda-layanan container my-5 h-50">
        <h2 className="text-center p-5">Layanan</h2>
        <Container>
          <Row className="container">
            <Col>
              <h3>Layanan Unggulan Kandungan</h3>
              <p>USG Obsetri Ginekologi</p>
              <p>USG Skrining Kelainan Kongenital Janin dan Detail Jantung</p>
              <p>USG 4 Dimensi HD Live Studio</p>
              <p>Penanganan Kehamilan Resiko Tinggi</p>
              <p className="pb-5">
                <a href="/layanan">Baca Selengkapnya</a>
              </p>
            </Col>
            <Col>
              <img src={Layanan1} width="400px" height="220px" />
            </Col>
          </Row>
        </Container>
      </div>
      <div className="beranda-jadwal pb-5">
        <Container>
          <h2 className="pt-5 text-center">Jadwal Dokter</h2>
          <Row className="justify-content-center mt-5">
            <Card style={{ width: "17rem" }} className="isi-kartu me-5">
              <Card.Img variant="top" src={Dok} />
              <Card.Body>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>

                <Link to={DOKTER}>
                  Lihat Jadwal Praktik
                  <img
                    src={Arrow}
                    alt=""
                    style={{ width: "10px", height: "10px" }}
                  />
                </Link>
              </Card.Body>
            </Card>

            <Card style={{ width: "18rem" }} className="isi-kartu ms-5">
              <Card.Img variant="top" src={Dok} />
              <Card.Body>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <div className="">
                  <Link to={DOKTER}>
                    Lihat Jadwal Praktik
                    <img
                      src={Arrow}
                      alt=""
                      style={{ width: "10px", height: "10px" }}
                    />
                  </Link>
                </div>
              </Card.Body>
            </Card>
            <Link to={DOKTER} className="text-center mt-3">
              Selengkapnya
              <img
                src={Arrow}
                alt=""
                style={{ width: "10px", height: "10px" }}
              />
            </Link>
          </Row>
        </Container>
      </div>
    </Layout>
  );
};

export default Beranda;
