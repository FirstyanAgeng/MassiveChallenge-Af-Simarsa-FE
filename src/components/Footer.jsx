import { Col, Container, Row } from "react-bootstrap";
import Logos from "../assets/images/logo-simarsa-2nd.png";
import Fb from "../assets/images/fb.png";
import Ig from "../assets/images/ig.png";

const Footer = () => {
  return (
    <>
      <footer className="container-fluid">
        <Container>
          <Row>
            <Col xs="4">
              <img
                src={Logos}
                width="300px"
                height="100px"
                alt=""
                className="mt-5 logo-footer"
              />
            </Col>
            <Col xs="3" className="mt-5">
              <h3>Tautan Penting</h3>
              <p>Halaman Utama</p>
              <p>Tentang Kami</p>
              <p>Layanan</p>
              <p>Jadwal Dokter</p>
            </Col>
            <Col xs="5" className="mt-5">
              <h3>Hubungi Kami</h3>
              <p>Telepon: ( 0281 ) 635424</p>
              <p>
                Email: rsu.bunda@gmail.com / bundacare@rsb-pwt.com
                /mgm@rsb-pwt.com
              </p>
              <p>
                Alamat: Jl. Pramuka No.249, Pertabatan, Purwokerto Kidul, Kec.
                Purwokerto Sel., Kabupaten Banyumas, Jawa Tengah 53147
                Purwokerto
              </p>
            </Col>
          </Row>
          <hr />
          <Row>
            <Col xs="10" className="pb-3">
              <p>© 2022 Rumah Sakit Bunda Purwokerto</p>
            </Col>
            <Col xs="2">
              <a
                href="https://m.facebook.com/profile.php?id=515510535160871"
                target={"_blank"}
                rel="noreferrer"
              >
                <img src={Fb} alt="" className="pe-3 " />
              </a>
              <a
                href="https://www.instagram.com/rsbunda.pwt/?hl=id"
                target={"_blank"}
                rel="noreferrer"
              >
                <img src={Ig} alt="" />
              </a>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
