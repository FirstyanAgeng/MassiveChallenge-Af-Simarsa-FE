/* eslint-disable jsx-a11y/alt-text */
import { Row, Col, Container, Card, Button } from "react-bootstrap";
import { ABOUT } from "../router";
import { Link } from "react-router-dom";
import Arrow from "../assets/images/arrow.png";
import dokter1 from "../assets/images/dokter1.png"
import dokter6 from "../assets/images/dokter6.png"
import layanan from "../assets/images/layananhome.png"
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
          <p className="pt-3 ">
            Rumah Sakit Bunda Purwokerto merupakan Rumah sakit swasta di bawah
            naungan Yayasan Bunda Purwokerto. Di bangun sejak 09 Agustus 1989
            dan beroperasi sebagai Rumah Bersalin pada 14 juni 1990 yang
            diresmikan oleh Bapak Kepala Kandep Kesehatan Banyumas (Bapak dr.
            Koentoro)
          </p>
          <p>
            <Link to={ABOUT} className="link">
              Baca Selengkapnya
              <img
                src={Arrow}
                alt=""
                style={{ width: "10px", height: "10px", marginLeft:"5px"}
              }
              />
            </Link>
          </p>
        </Container>
      </div>
      <div className="beranda-layanan container mb-5 pb-3">
        <h2 className="text-center p-5 judul">Layanan</h2>
        <Container>
          <Row className="container my-5">
            <Col xs="7" className="page-layanan">
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
              <img src={layanan} style={{ width: "380px", height: "220px" }} />
            </Col>

          <p className="link">
            <Link to={ABOUT} className="link">
              Selengkapnya
              <img
                src={Arrow}
                alt=""
                style={{ width: "10px", height: "10px", marginLeft:"5px"}
              }
              />
            </Link>
          </p>
          </Row>
        </Container>
      </div>

      <div className="beranda-jadwal pb-6">
        <Container>
          <h2 className="pt-5 text-center">Jadwal Dokter</h2>
          <Row className="justify-content-center mt-5">
            <Card className="isi-kartu me-5">
              <Card.Img src={dokter1}/>
              <Card.Body> 
                <Card.Text className="text-center" style={{fontSize: "15px", fontWeight:"normal"}}>
                dr. Anton Prihandana, SpOG
                </Card.Text>
                  <p className="fw-bold ms-2" style={{fontSize: "18px"}}>SPESIALIS OBSETRI  & GINEKOLOGI</p>

              </Card.Body>
                <Button style={{width:"100%", borderRadius:"0"}}>Lihat Jadwal Praktik</Button>
            </Card>
            
            <Card className="isi-kartu ms-5">
              <Card.Img src={dokter6}/>
              <Card.Body> 
                <Card.Text className="text-center" style={{fontSize: "15px", fontWeight:"normal"}}>
                dr. Tiara Nurlita Sari, Sp.A
                </Card.Text>
                  <p className="fw-bold ms-2" style={{fontSize: "18px"}}>SPESIALIS ANAK</p><br/>

              </Card.Body>
                <Button style={{width:"100%", borderRadius:"0"}}>Lihat Jadwal Praktik</Button>
            </Card>


            
            <p className="link">
            <Link to={ABOUT} className="link">
              Selengkapnya
              <img
                src={Arrow}
                alt=""
                style={{ width: "10px", height: "10px", marginLeft:"5px"}
              }
              />
            </Link>
          </p>
          </Row>
        </Container>
      </div>
    </Layout>
  );
};

export default Beranda;
