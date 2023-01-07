import { Card, Container, Row, Col } from "react-bootstrap";
import Layout from "../components/Layout";
import logoRs from "../assets/images/logoRs.png";
import Rs from "../assets/images/rs.png";

const TentangKami = () => {
  return (
    <Layout>
      <div className="tentangKami mb-5">
        <Card className="bg-light text-dark tentang">
          <Card.Img src={Rs} alt="Card image" />
          <Card.ImgOverlay className="background-filter">
            <Container>
              <h1>Tentang Kami</h1>
            </Container>
          </Card.ImgOverlay>
        </Card>
        <Container className="my-5 tentang-content h-80 p-2">
          <Row className="my-5 mx-2">
            <Col xs="5">
              <img src={logoRs} alt="logo" className="logoRs" />
            </Col>
            <Col xs="7">
              <h3>SELAMAT DATANG DI RUMAH SAKIT BUNDA PURWOKERTO</h3>
              <h2 className="deskripsi">
                Sejarah Rumah Sakit Bunda Purwokerto
              </h2>
              <p>
                Rumah Sakit Bunda Purwokerto merupakan Rumah sakit swasta di
                bawah naungan Yayasan Bunda Purwokerto. Di bangun sejak 09
                Agustus 1989 dan beroperasi sebagai Rumah Bersalin pada 14 juni
                1990 yang diresmikan oleh Bapak Kepala Kandep Kesehatan Banyumas
                (Bapak dr. Koentoro)
              </p>
              <p>
                Seiring berjalannya waktu RB tersebut terus berkembang dengan
                meningkatnya statsu RB tersebut kearah yang lebih besar. Pada
                tanggal 1 September 1991 status Rumah Bersalin “BUNDA” berubah
                dan meningkat menjadi Rumah Sakit Khusus Ibu dan Anak “BUNDA”
                yang operasioanalnya membawahi persalinan.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </Layout>
  );
};

export default TentangKami;
