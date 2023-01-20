import {
  Container,
  Card,
  Row,
  Col,
  Button,
  Nav,
  Form,
  Tab,
  Navbar,
} from "react-bootstrap";
import { ADMIN_DASHBOARD, DATA_DOKTER } from "../../router";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { AiFillHome, AiOutlineRight } from "react-icons/ai";
import { RiShieldCrossFill, RiEditBoxFill } from "react-icons/ri";
import AdminLayout from "../../components/AdminLayout";
import Ava from "../../assets/images/Ava.png";
import "../../styles/admin.css";

const DetailDokter = () => {
  // const navigate = useNavigate();
  const { id } = useParams();
  const [dokter, setDokter] = useState([]);

  useEffect(() => {
    getDataDokterById();
  }, []);

  const getDataDokterById = async () => {
    const response = await axios.get(`http://localhost:5100/dokter/${id}`);
    setDokter(response.data);
  };

  return (
    <AdminLayout>
      <div className="detailDokter">
        <Container className="container-nav-home mb-3">
          <Row>
            <Navbar bg="light" expand="lg">
              <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto">
                    <AiFillHome size="25px" className="ho" />
                    <Nav.Link href={ADMIN_DASHBOARD}>Home</Nav.Link>
                    <AiOutlineRight className="ho1" />
                    <Nav.Link href={DATA_DOKTER}>Data Dokter</Nav.Link>
                    <AiOutlineRight className="ho1" />
                    <Nav.Link style={{ color: "black" }}>
                      Data Detail Dokter
                    </Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </Row>
        </Container>

        <Container className="pageJadwalPraktik">
          <Row>
            <Card className="cardJadwalPraktik">
              <Card.Body>
                <Container>
                  <Row>
                    <Col sm={6}>
                      <Card.Title className="title-Detaildokter">
                        Detail Data Dokter
                      </Card.Title>

                      <Card className="card-fotoDokter text-center">
                        <img src={Ava} alt="" className="cardf" />
                        <Card.Body>
                          <Card.Text>
                            <h4 className="nama-dokter fw-bold">
                              {dokter.name}
                            </h4>
                            <h4 className="category mt-4 fw-bold">
                              <RiShieldCrossFill className="shield-detaildokter" />
                              {dokter.spesialis}
                            </h4>
                            <h4 className="mt-3 jadwal-dokter">
                              Selasa, Kamis, Sabtu
                            </h4>
                            <h4 className="mt-3 telp-dokter">
                              (021) - {dokter.telp}
                            </h4>
                          </Card.Text>
                        </Card.Body>
                        <Button className="km">Lihat Surat Izin</Button>
                      </Card>
                    </Col>

                    <Col sm={6}>
                      <Tab.Container defaultActiveKey="profile-dokter" justify>
                        <Row>
                          <Nav
                            variant="pills"
                            className="container-tab-data-dokter"
                          >
                            <Col>
                              <Nav.Item>
                                <Nav.Link
                                  eventKey="profile-dokter"
                                  className="text-center fw-bold"
                                >
                                  Profile Dokter
                                </Nav.Link>
                              </Nav.Item>
                            </Col>
                            <Col>
                              <Nav.Item>
                                <Nav.Link
                                  eventKey="jadwal-praktik"
                                  className="text-center fw-bold"
                                >
                                  Jadwal Praktik
                                </Nav.Link>
                              </Nav.Item>
                            </Col>
                          </Nav>
                        </Row>

                        <Tab.Content>
                          <Tab.Pane eventKey="profile-dokter">
                            <Form.Group className="tab1 mb-3">
                              <Form.Label className="bold ">
                                Nama Dokter
                              </Form.Label>
                              <Form.Control value={dokter.name} disabled />
                            </Form.Group>
                            <Form.Group className="tab1 mb-3">
                              <Form.Label className="bold ">
                                No. Izin Praktek
                              </Form.Label>
                              <Form.Control
                                value={dokter.no_izin_praktik}
                                disabled
                              />
                            </Form.Group>
                            <Form.Group className="tab1 mb-3">
                              <Form.Label className="bold ">Alamat</Form.Label>
                              <Form.Control value={dokter.alamat} disabled />
                            </Form.Group>
                            <Form.Group className="tab1 mb-3">
                              <Form.Label className="bold ">
                                Tempat, Tanggal Lahir
                              </Form.Label>
                              <Form.Control value={dokter.ttl} disabled />
                            </Form.Group>
                            <Form.Group className="tab1 mb-3">
                              <Form.Label className="bold ">Agama</Form.Label>
                              <Form.Control value={dokter.agama} disabled />
                            </Form.Group>
                            <Button className="km2">
                              <Link
                                to={`/detail-dokter/edit/${dokter.id}`}
                                className="btn-dataDokter"
                              >
                                <RiEditBoxFill className="edit" size="22px" />
                                EDIT
                              </Link>
                            </Button>
                          </Tab.Pane>
                        </Tab.Content>

                        <Tab.Content>
                          <Tab.Pane eventKey="jadwal-praktik">
                            <Form.Group className="tab1 mb-3">
                              <Form.Label className="bold ">Senin</Form.Label>
                              <Form.Control value="08.00 - 11.00" disabled />
                            </Form.Group>
                            <Form.Group className="tab1 mb-3">
                              <Form.Label className="bold ">Selasa</Form.Label>
                              <Form.Control value="08.00 - 11.00" disabled />
                            </Form.Group>
                            <Form.Group className="tab1 mb-3">
                              <Form.Label className="bold ">Rabu</Form.Label>
                              <Form.Control value="08.00 - 11.00" disabled />
                            </Form.Group>
                            <Form.Group className="tab1 mb-3">
                              <Form.Label className="bold ">Kamis</Form.Label>
                              <Form.Control value="08.00 - 11.00" disabled />
                            </Form.Group>
                            <Form.Group className="tab1 mb-3">
                              <Form.Label className="bold ">Jumat</Form.Label>
                              <Form.Control value="09.00 - 11.00" disabled />
                            </Form.Group>
                            <Button
                              className="km2 "
                              // onClick={() => navigate(EDIT_DETAIL_DOKTER)}
                            >
                              <Link
                                to={`edit/${dokter.id}`}
                                className="btn-dataDokter"
                              >
                                <RiEditBoxFill className="edit" size="22px" />
                                EDIT
                              </Link>
                            </Button>
                          </Tab.Pane>
                        </Tab.Content>
                      </Tab.Container>
                    </Col>
                  </Row>
                </Container>
              </Card.Body>
            </Card>
          </Row>
        </Container>
      </div>
    </AdminLayout>
  );
};

export default DetailDokter;
