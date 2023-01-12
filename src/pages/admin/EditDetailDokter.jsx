import { Container, Card, Row, Col, Button, Nav, Form, Tab, Tabs, Navbar } from "react-bootstrap";
import { ADMIN_DASHBOARD,  DATA_DOKTER, DETAIL_DOKTER} from "../../router";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AiFillHome, AiOutlineRight } from "react-icons/ai";
import AdminLayout from "../../components/AdminLayout";
import "../../styles/admin.css";

import Ava from "../../assets/images/Ava.png";


const EditDetailDokter = () =>{
    const navigate = useNavigate();

    const [dokter, setDokter] = useState({
      name: "",
      no_izin_praktik: "",
      alamat:"",
      ttl: "",
      agama: ""
    });

    function handleChange(e) {
      let newFormState = { ...dokter };
      newFormState[e.target.name] = e.target.value;
      setDokter(newFormState);
    }

    useEffect(() => {
        getDataDokterById();
      }, []);

    const getDataDokterById = async () => {
        const response = await axios.get("http://localhost:5100/dokter/8");
        setDokter(response.data);
      };

      const updateDokter = async (e) => {
        e.preventDefault();
        try {
          await axios.patch("http://localhost:5100/dokter/8", {
            name: dokter.name,
            no_izin_praktik: dokter.no_izin_praktik,
            alamat: dokter.alamat,
            ttl: dokter.ttl,
            agama: dokter.agama
          });
          navigate(DETAIL_DOKTER);
        } catch (error) {
          console.log(error);
        }
      };
      
    return (
        <AdminLayout>
            <div className="EditdetailDokter">
            <Container className="container2 container mb-4">
        <Row>
        <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <AiFillHome size="25px" className="ho"/>
            <Nav.Link href={ADMIN_DASHBOARD}>Home</Nav.Link><AiOutlineRight className="ho1"/>
            <Nav.Link href={DATA_DOKTER}>Data Dokter</Nav.Link><AiOutlineRight className="ho1"/>
            <Nav.Link style={{color: 'black'}}>Data Detail Dokter</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </Row>
        </Container>

        <Container className="pageJadwalPraktik">
            <Row>
                <Card className="cardJadwalPraktik card">
                <Card.Body>
                    <Card.Title>Detail Data Dokter</Card.Title>
                    <Container className="container-fluid">
                    <Row>
                        <Col sm={6}>
                            <Card className="uk text-center">
                            {/* <Card.Img variant="top" src={Ava} /> */}
                            <img src={Ava} alt="" className="cardf"/>
                            <Card.Body>
                                <Card.Text>
                                    <h4 className="hw"><strong>{dokter.name}</strong></h4>
                                    <h4 className="category mt-4">{dokter.spesialis}</h4>
                                    <h4 className="mt-3 hw1">Selasa, Kamis, Sabtu</h4>
                                    <h4 className="mt-3 hw2">(021) - {dokter.telp}</h4>
                                </Card.Text>
                            </Card.Body>
                            <Button className="km">Lihat Surat Izin</Button>
                            </Card>
                        </Col>

                        <Col sm={6}>
                        <Tabs defaultActiveKey="profile-dokter" className="mb-3 tabq" justify>
                        <Tab eventKey="profile-dokter" title="Profile Dokter">
                        
                        <Form onSubmit={updateDokter}>
                        <Form.Group className="tab1 mb-3">
                        <Form.Label className="bold ">Nama Dokter</Form.Label>
                        <Form.Control value={dokter.name}  
                                      onChange={handleChange}
                                      name="name"
                        // onChange = {(e) => setName(e.target.value)}
                        />
                        </Form.Group>
                        <Form.Group className="tab1 mb-3">
                        <Form.Label className="bold ">No. Izin Praktek</Form.Label>
                        <Form.Control value={dokter.no_izin_praktik}  
                        onChange={handleChange}
                        name="no_izin_praktik"
                        // onChange = {(e) => setNo_izin_praktik(e.target.value)}
                        />
                        </Form.Group>
                        <Form.Group className="tab1 mb-3">
                        <Form.Label className="bold ">Alamat</Form.Label>
                        <Form.Control value={dokter.alamat} 
                        onChange={handleChange}
                        name="alamat" 
                        // onChange = {(e) => setAlamat(e.target.value)}
                        />
                        </Form.Group>
                        <Form.Group className="tab1 mb-3">
                        <Form.Label className="bold ">Tempat, Tanggal Lahir</Form.Label>
                        <Form.Control value={dokter.ttl}
                        onChange={handleChange}
                        name="ttl"  
                        // onChange = {(e) => setTtl(e.target.value)}
                        />
                        </Form.Group>
                        <Form.Group className="tab1 mb-3">
                        <Form.Label className="bold ">Agama</Form.Label>
                        <Form.Control value={dokter.agama}  
                        onChange={handleChange}
                        name="agama"
                        // onChange = {(e) => setAgama(e.target.value)}
                        />
                        </Form.Group>
                        <Button className="km2"
                        type="submit"
                        >Simpan</Button>
                        </Form>
                        </Tab>


                        <Tab eventKey="jadwal-praktik" title="Jadwal Praktik">
                        <Form.Group className="tab1 mb-3">
                        <Form.Label className="bold ">Senin</Form.Label>
                        <Form.Control placeholder="08.00 - 11.00"  />
                        </Form.Group>
                        <Form.Group className="tab1 mb-3">
                        <Form.Label className="bold ">Selasa</Form.Label>
                        <Form.Control placeholder="08.00 - 11.00"  />
                        </Form.Group>
                        <Form.Group className="tab1 mb-3">
                        <Form.Label className="bold ">Rabu</Form.Label>
                        <Form.Control placeholder="08.00 - 11.00"  />
                        </Form.Group>
                        <Form.Group className="tab1 mb-3">
                        <Form.Label className="bold ">Kamis</Form.Label>
                        <Form.Control placeholder="08.00 - 11.00"  />
                        </Form.Group>
                        <Form.Group className="tab1 mb-3">
                        <Form.Label className="bold ">Jumat</Form.Label>
                        <Form.Control placeholder="09.00 - 11.00"  />
                        </Form.Group>
                        <Button className="km2" 
                        type="submit"
                        >Simpan</Button>
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

export default EditDetailDokter;