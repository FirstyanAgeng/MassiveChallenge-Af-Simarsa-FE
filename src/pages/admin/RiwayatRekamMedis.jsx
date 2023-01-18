import AdminLayout from "../../components/AdminLayout";
import {
  Container,
  Card,
  Row,
  Navbar,
  Nav,
  Col,
  Form,
  Button,
} from "react-bootstrap";
import { AiFillHome, AiOutlineRight } from "react-icons/ai";
import { ADMIN_DASHBOARD, DATA_POLIKLINIK, DATA_POLI, DATA_PASIEN, EDIT_RIWAYAT} from "../../router";
import { useNavigate, useParams } from "react-router-dom";
import {RiEditBoxFill} from "react-icons/ri"
import { useState } from "react";

import "../../styles/admin.css";
import male from "../../assets/images/male.png";


const RiwayatPasien= () =>{
    const navigate = useNavigate();
    const { id } = useParams();
    const [riwayat, setRiwayat] = useState({
        jenis_kunjungan: "riwayat jalan",
        tanggal_kunjungan: "27/05/2022",
        jam_kunjungan:"08:00-11:00",
        anamnesa: "Terindikasi ditinggal ayang",
        alergiObat: "Tidak ada",
        terapi_obat: "Paracetamol",
        diagnosa: "cardiomyopathy",
        tinggi_badan:"175",
        berat_badan:"80",
        sistole:"90",
        diastole:"60",
        suhu:"34",
        status_pulang:"Rawat Jalan"
      });

      

    return (
        <AdminLayout>
                    <div className="dataPasien">
                    <Container className="container-nav-home mb-3">
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
                        <Nav.Link href={DATA_PASIEN}>Data Detail Pasien</Nav.Link><AiOutlineRight className="ho1"/>
                    <Nav.Link style={{color: 'black'}}>Riwayat Rekam Medis</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
            </Row>
        </Container>

            <Container className="pageJadwalPraktik mt-1 mb-3">
            <Row>
                <Card className="cardJadwalPraktik pb-5">
                <Card.Body>
                    <Row>
                        <Card.Title className="title-Detailpasien">
                        <h4>Riwayat Rekam Medis</h4>
                        </Card.Title>
                    </Row>

                <Container className="container-fluid mb-5">
                    <Row>
                        <Col sm={6}>
                        <img src={male} alt="" className="imgPasien"/>
                        </Col>

                        <Col sm={6}>
                        <Form.Group className="tab1 mb-3">
                        <Form.Label className="bold">Jenis Kunjungan</Form.Label>
                        <Form.Select value={riwayat.jenis_kunjungan} disabled>
                        <option>Riwayat Jalan</option>
                        </Form.Select>
                      </Form.Group>

                      <Form.Group className="tab1 mb-3">
                        <Form.Label className="bold">
                          Tanggal Kunjungan
                        </Form.Label>
                        <Row>
                            <Col>
                            <Form.Control value={riwayat.tanggal_kunjungan} disabled/>
                            </Col>
                            <Col>
                            <Form.Control value={riwayat.jam_kunjungan} disabled />
                            </Col>
                        </Row>
                      </Form.Group>

                        <Form.Group className="mb-3 tab1">
                            <Form.Label className="bold">Anamnesa</Form.Label>
                            <Form.Control value={riwayat.anamnesa} disabled 
                            as="textarea" rows={4} />
                        </Form.Group>

                      <Form.Group className="tab1 mb-3">
                        <Form.Label className="bold">
                          Riwayat Alergi Obat
                        </Form.Label>
                        <Row>
                            <Col>
                            <Form.Control value="Obat" disabled/>
                            </Col>
                            <Col>
                            <Form.Select value={riwayat.alergiObat} disabled>
                            <option className="text-center">-- Tidak ada --</option>
                            </Form.Select>
                          </Col>
                        </Row>
                      </Form.Group>

                        <Form.Group className="mb-3 tab1">
                            <Form.Label className="bold">Terapi Obat</Form.Label>
                            <Form.Control value={riwayat.terapi_obat} disabled 
                            as="textarea" rows={4} />
                        </Form.Group>

                        <Form.Group className="mb-3 tab1">
                            <Form.Label className="bold">Diagnosa</Form.Label>
                            <Form.Control value={riwayat.diagnosa} disabled 
                            as="textarea" rows={4} />
                        </Form.Group>

                      <Form.Group className="tab1 mb-3">
                        <Form.Label className="bold">
                          Pemeriksaan Fisik
                        </Form.Label>
                        <Row>
                            <Col>
                            <Form.Label className="bold">Tinggi Badan (cm)</Form.Label>
                            <Form.Control value={riwayat.tinggi_badan} disabled />
                            </Col>
                            <Col>
                            <Form.Label className="bold">Berat Badan (kg)</Form.Label>
                            <Form.Control value={riwayat.berat_badan} disabled />
                            </Col>
                        </Row>
                      </Form.Group>

                      <Form.Group className="tab1 mb-3">
                        <Form.Label className="bold">Tekanan Darah</Form.Label>
                        <Row>
                            <Col>
                            <Form.Label className="bold">Sistole (mmHg)</Form.Label>
                            <Form.Control value={riwayat.sistole} disabled />
                            </Col>
                            <Col>
                            <Form.Label className="bold">Diastole (mmHg)</Form.Label>
                            <Form.Control value={riwayat.diastole} disabled />
                            </Col>
                        </Row>
                      </Form.Group>
                      <Form.Group className="tab1 mb-3">
                        <Row>
                          <Col sm={6}>
                            <Form.Label className="bold">Suhu (C)</Form.Label>
                            <Form.Control placeholder="34" />
                            </Col>
                        </Row>
                      </Form.Group>

                      <Form.Group className="tab1 mb-3">
                        <Form.Label className="bold">Status Pulang</Form.Label>
                        <Form.Select disabled>
                        <option>Rawat Jalan</option>
                        </Form.Select>
                        </Form.Group>
                        <Form.Label className="bold tab1">*Pastikan semua data terisi benar</Form.Label>
                        <Button className="km2 mt-3">Edit</Button>
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

export default RiwayatPasien;
