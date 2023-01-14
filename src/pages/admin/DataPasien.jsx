import AdminLayout from "../../components/AdminLayout";
import { Container, Card, Row, Navbar, Nav, Col, Form, Tabs, Button, Tab} from "react-bootstrap";
import { AiFillHome, AiOutlineRight } from "react-icons/ai";
import { ADMIN_DASHBOARD, DATA_POLIKLINIK, DATA_POLI, RIWAYAT_PASIEN, EDIT_DATA_PASIEN} from "../../router";
import { useNavigate, useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";


import "../../styles/admin.css";
import male from "../../assets/images/male.png";


const DataPasien= () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [pasien, setPasien] = useState([]);

    useEffect(() => {
        getDataPasienById();
      }, []);
    const getDataPasienById = async () => {
        const response = await axios.get(`http://localhost:5100/pasien/${id}`);
        setPasien(response.data);
      };

    return(
    <AdminLayout>
        <div className="dataPasien">
            <Container className="containerDataPasien container mb-4">
                <Row>
                <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <AiFillHome size="25px" className="ho"/>
                        <Nav.Link href={ADMIN_DASHBOARD}>Home</Nav.Link><AiOutlineRight className="ho1"/>
                        <Nav.Link href={DATA_POLIKLINIK}>Data Poliklinik</Nav.Link><AiOutlineRight className="ho1"/>
                        <Nav.Link href={DATA_POLI}>Data Poli</Nav.Link><AiOutlineRight className="ho1"/>
                        <Nav.Link style={{color: 'black'}}>Data Pasien</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
                </Navbar>
                </Row>
            </Container>

            <Container className="cont">
            <Row>
                <Card className="cardDetailPasien">
                <Card.Body>
                    <Row>
                        <Card.Title className="card-title pl-4">
                        <h4>Detail Pasien</h4>
                        </Card.Title>
                    </Row>

                <Container className="container-fluid mb-5">
                    <Row>
                        <Col sm={6} style={{paddingLeft: '0px'}}>
                        <img src={male} alt="" className="mt-5 ma"/>
                        </Col>

                        <Col sm={6}>
                        <Tabs defaultActiveKey="profile-dokter" className="mb-3 tabq" justify>
                        <Tab eventKey="profile-dokter" title="Detail Pasien">
                        <Form.Group className="tab1 mb-3">
                        <Form.Label className="bold ">NIK</Form.Label>
                        <Form.Control value={pasien.nik} disabled />
                        </Form.Group>
                        <Form.Group className="tab1 mb-3">
                        <Form.Label className="bold ">No. Rekam Medis</Form.Label>
                        <Form.Control value={pasien.nrk} disabled />
                        </Form.Group>
                        <Form.Group className="tab1 mb-3">
                        <Form.Label className="bold ">Nama Lengkap</Form.Label>
                        <Form.Control value={pasien.name} disabled />
                        </Form.Group>
                        <Form.Group className="tab1 mb-3">
                        <Form.Label className="bold ">Jenis Kelamin</Form.Label>
                        <Form.Select value={pasien.jenis_kelamin} disabled >
                        <option>Laki-laki</option>
                        <option>Perempuan</option>
                        </Form.Select>
                        </Form.Group>
                        <Form.Group className="tab1 mb-3">
                        <Form.Label className="bold ">No. HP</Form.Label>
                        <Form.Control value={pasien.telp} disabled />
                        </Form.Group>
                        <Button className="km2"
                        // onClick={() => navigate(EDIT_DATA_PASIEN)}
                        >
                        <Link
                        to={`/data-pasien/edit/${pasien.id}`}
                        className="btn-dataDokter"
                        >
                        Edit
                        </Link>
                        </Button>

                        </Tab>




                        <Tab eventKey="jadwal-praktik" title="Rekam Medis">
                        <Card className="card2 content mt-5">
                                <Row>
                                    <Col  className="mt-4 text-center">
                                        <h6><strong>POLI UMUM</strong></h6>
                                        <h6 className="text mt-2 mb-5">dr.Wahyu Mustiadi, Sp.P. M. Kes</h6>
                                    </Col>
                                    <Col className="mt-3 text-center mt-3">
                                    <button class="btnDataDokter btn btnpad mt-2 sd1" style={{padding:"10px 20px"}} onClick={() => navigate(RIWAYAT_PASIEN)}>Sedang diproses</button>
                                    <h6 className="text">Tanggal: 27 Mei 2022</h6>
                                    </Col>
                                </Row>
                        </Card>
                        <Card className="card2 content mt-5">
                                <Row>
                                    <Col  className="mt-4 text-center">
                                        <h6><strong>POLI UMUM</strong></h6>
                                        <h6 className="text mt-2 mb-5">dr.Wahyu Mustiadi, Sp.P. M. Kes</h6>
                                    </Col>
                                    <Col className="mt-3 text-center mt-3">
                                    <button class="btnDataDokter btn btnpad mt-2 sd">Selesai</button>
                                    <h6 className="text">Tanggal: 27 Mei 2022</h6>
                                    </Col>
                                </Row>
                        </Card>
                        </Tab>
                        
                        </Tabs>

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
export default DataPasien;