import { Container, Nav, Navbar, Row, Col, Stack } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import Logo from "../assets/images/logo-simarsa.png";
import Telp from "../assets/images/telp.png";
import Jam from "../assets/images/jam.png";
import Lokasi from "../assets/images/lokasi.png";

import {
  ABOUT,
  LOGIN,
  DAFTAR,
  DOKTER,
  LAYANAN,
  HOME,
  HUBUNGI,
  KARIR,
  ARTIKEL,
} from "../router";

const NavigasiBar = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* Header Navbar */}
      <section className="container navbar-logo">
        <Row>
          <Col xs={4}>
            <img src={Logo} width="250px" alt="" className="p-2" />
          </Col>
          <Col xs={8} className="mt-3">
            <Stack direction="horizontal" gap="3">
              <img src={Telp} alt="" />
              GAWAT DARURAT (0281) 635423
              <img src={Jam} alt="" />
              JAM KERJA 24 JAM Senin-Sabtu
              <img src={Lokasi} alt="" />
              LOKASI 0123 Some Place
            </Stack>
          </Col>
        </Row>
      </section>
      {/* Navbar */}
      <Navbar className="navbar-main" variant="dark" expand="lg">
        <Container>
          <NavLink to="/" className="navbar-brand">
            SIMARSA
          </NavLink>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavLink className="nav-link" to={HOME}>
                Halaman Utama
              </NavLink>
              <NavLink className="nav-link" to={ABOUT}>
                Tentang Kami
              </NavLink>
              <NavLink className="nav-link" to={LAYANAN}>
                Layanan
              </NavLink>
              <NavLink className="nav-link" to={DOKTER}>
                Jadwal Dokter
              </NavLink>
              <NavLink className="nav-link" to={DAFTAR}>
                Pendaftaran Online
              </NavLink>
              <NavLink className="nav-link" to={KARIR}>
                Karir
              </NavLink>
              <NavLink className="nav-link" to={ARTIKEL}>
                Artikel
              </NavLink>
              <NavLink className="nav-link" to={HUBUNGI}>
                Hubungi Kami
              </NavLink>
            </Nav>
            <button
              className="tombol-nav fw-bold"
              onClick={() => navigate(LOGIN)}
            >
              LOGIN
            </button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavigasiBar;
