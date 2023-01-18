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

        <Container className="tentang-content">
          <Row>
            <Col>
              <img src={logoRs} alt="logo" className="logoRs" />
            </Col>
            <Col className="me-5 mb-4">
              <h3
                className="text-center"
                style={{ fontSize: "18px", paddingTop: "20px" }}
              >
                SELAMAT DATANG DI RUMAH SAKIT BUNDA PURWOKERTO
              </h3>
              <h2 className="deskripsi text-center mb-4">
                Sejarah Rumah Sakit Bunda Purwokerto
              </h2>
              <p style={{ textAlign: "justify" }}>
                Rumah Sakit Bunda Purwokerto merupakan Rumah sakit swasta di
                bawah naungan Yayasan Bunda Purwokerto. Di bangun sejak 09
                Agustus 1989 dan beroperasi sebagai Rumah Bersalin pada 14 juni
                1990 yang diresmikan oleh Bapak Kepala Kandep Kesehatan Banyumas
                (Bapak dr. Koentoro)
              </p>
              <p style={{ textAlign: "justify" }}>
                Seiring berjalannya waktu RB tersebut terus berkembang dengan
                meningkatnya statsu RB tersebut kearah yang lebih besar. Pada
                tanggal 1 September 1991 status Rumah Bersalin “BUNDA” berubah
                dan meningkat menjadi Rumah Sakit Khusus Ibu dan Anak “BUNDA”
                yang operasioanalnya membawahi persalinan.
              </p>
              <p style={{ textAlign: "justify" }}>
                Saat ini Rumah sakit Bunda Purwokerto memiliki lahan seluas
                4.396 m² dengan luas bangunan 3.920 m², dan telah ditetapkan
                sebagai Rumah Sakit Umum / RSU Tipe D.Untuk kesiapan mutu dan
                layanan yang baik, rs tersebut telah melakukan akreditasi
                pertamanya pada 31 mei 1999 dan saat ini telah melampaui tahap
                ketiga akreditasi dari Komisi Akreditasi Rumah Sakit (KARS)
                untuk versi 2012 dengan hasil lulus tingkat Madya pada 13
                September 2017 lalu
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </Layout>
  );
};

export default TentangKami;
