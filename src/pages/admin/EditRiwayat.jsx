import AdminLayout from "../../components/AdminLayout";
import { Container, Card, Row, Navbar, Nav, Col, Form, Button} from "react-bootstrap";
import { AiFillHome, AiOutlineRight } from "react-icons/ai";
import { ADMIN_DASHBOARD, DATA_POLIKLINIK, DATA_POLI, DATA_PASIEN, RIWAYAT_PASIEN} from "../../router";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import "../../styles/admin.css";
import male from "../../assets/images/male.png";


const RiwayatPasien= () =>{
    const navigate = useNavigate();
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

      function handleChange(e) {
        let newFormState = { ...riwayat };
        newFormState[e.target.name] = e.target.value;
        setRiwayat(newFormState);
      }
      function handleSubmit(e){
        e.preventDefault();
        let data = [...riwayat];

        if (riwayat.name === ""){
            return false;
        }
        setRiwayat(data);
      }

    return (
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
                        <Nav.Link href={DATA_PASIEN}>Data Pasien</Nav.Link><AiOutlineRight className="ho1"/>
                        <Nav.Link style={{color: 'black'}}>Riwayat Rekam Medis</Nav.Link>
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
                        <h4>Riwayat Rekam Medis</h4>
                        </Card.Title>
                    </Row>

                <Container className="container-fluid mb-5">
                    <Row>
                        <Col sm={6} style={{paddingLeft: '0px'}}>
                        <img src={male} alt="" className="mt-5 ma"/>
                        </Col>

                        <Col sm={6}>
                        <Form onSubmit={handleSubmit}>
                        <Form.Group className="tab1 mb-3">
                        <Form.Label className="bold">Jenis Kunjungan</Form.Label>
                        <Form.Select value={riwayat.jenis_kunjungan} onChange={handleChange} name="jenis_kunjungan">
                        <option>Riwayat Jalan</option>
                        </Form.Select>
                        </Form.Group>
                        
                        <Form.Group className="tab1 mb-3">
                        <Form.Label className="bold">Tanggal Kunjungan</Form.Label>
                        <Row>
                            <Col>
                            <Form.Control value={riwayat.tanggal_kunjungan} onChange={handleChange} name="tanggal_kunjungan"/>
                            </Col>
                            <Col>
                            <Form.Control value={riwayat.jam_kunjungan}  onChange={handleChange} name="jam_kunjungan"/>
                            </Col>
                        </Row>
                        </Form.Group>

                        <Form.Group className="mb-3 tab1">
                            <Form.Label className="bold">Anamnesa</Form.Label>
                            <Form.Control value={riwayat.anamnesa} onChange={handleChange} name="anamnesa"
                            as="textarea" rows={4} />
                        </Form.Group>

                        <Form.Group className="tab1 mb-3">
                        <Form.Label className="bold">Riwayat Alergi Obat</Form.Label>
                        <Row>
                            <Col>
                            <Form.Control value="Obat" />
                            </Col>
                            <Col>
                            <Form.Select value={riwayat.alergiObat} onChange={handleChange} name="alergiObat">
                            <option className="text-center">-- Tidak ada --</option>
                            </Form.Select>
                            </Col>
                        </Row>
                        </Form.Group>

                        <Form.Group className="mb-3 tab1">
                            <Form.Label className="bold">Terapi Obat</Form.Label>
                            <Form.Control value={riwayat.terapi_obat} onChange={handleChange} name="terapi_obat"
                            as="textarea" rows={4} />
                        </Form.Group>

                        <Form.Group className="mb-3 tab1">
                            <Form.Label className="bold">Diagnosa</Form.Label>
                            <Form.Control value={riwayat.diagnosa} onChange={handleChange} name="diagnosa"
                            as="textarea" rows={4} />
                        </Form.Group>

                        <Form.Group className="tab1 mb-3">
                        <Form.Label className="bold">Pemeriksaan Fisik</Form.Label>
                        <Row>
                            <Col>
                            <Form.Label className="bold">Tinggi Badan (cm)</Form.Label>
                            <Form.Control value={riwayat.tinggi_badan}  onChange={handleChange} name="tinggi_badan"/>
                            </Col>
                            <Col>
                            <Form.Label className="bold">Berat Badan (kg)</Form.Label>
                            <Form.Control value={riwayat.berat_badan} onChange={handleChange} name="berat_badan"/>
                            </Col>
                        </Row>
                        </Form.Group>

                        <Form.Group className="tab1 mb-3">
                        <Form.Label className="bold">Tekanan Darah</Form.Label>
                        <Row>
                            <Col>
                            <Form.Label className="bold">Sistole (mmHg)</Form.Label>
                            <Form.Control value={riwayat.sistole} onChange={handleChange} name="sistole"/>
                            </Col>
                            <Col>
                            <Form.Label className="bold">Diastole (mmHg)</Form.Label>
                            <Form.Control value={riwayat.diastole} onChange={handleChange} name="diastole"/>
                            </Col>
                        </Row>
                        </Form.Group>
                        <Form.Group className="tab1 mb-3">
                        <Row>
                            <Col sm={6}>
                            <Form.Label className="bold">Suhu (C)</Form.Label>
                            <Form.Control value={riwayat.suhu} onChange={handleChange} name="suhu"/>
                            </Col>
                        </Row>
                        </Form.Group>

                        <Form.Group className="tab1 mb-3">
                        <Form.Label className="bold">Status Pulang</Form.Label>
                        <Form.Select value={riwayat.status_pulang} onChange={handleChange} name="riwayat_pulang">
                        <option>Rawat Jalan</option>
                        <option>Rawat Inap</option>
                        </Form.Select>
                        </Form.Group>
                        <Form.Label className="bold tab1">*Pastikan semua data terisi benar</Form.Label>
                        <Button className="km2 mt-3" type="submit"
                        onClick={()=>navigate(RIWAYAT_PASIEN)}
                        >Simpan</Button>
                        </Form>
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