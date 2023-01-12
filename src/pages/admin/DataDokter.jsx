import { Container, Card, Row, Col, Button, Nav, Form, Modal, Navbar } from "react-bootstrap";
import AdminLayout from "../../components/AdminLayout";
import { ADMIN_DASHBOARD,  DETAIL_DOKTER} from "../../router";
import { AiFillHome, AiOutlineRight } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import "../../styles/admin.css";
import React, { useState, useEffect } from 'react';
import axios from "axios";
// import { location } from "react-router-dom";


const DataDokter = () => {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [spesialis, setSpesialis] = useState("");
    const [telp, setTelp] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("Dokter");
    // const [jadwal, setJadwal] = useState("");
    const [dokter, setDokter] = useState([]);

    useEffect(() => {
        getDataDokter();
      }, []);
    
    const getDataDokter = async () => {
        const response = await axios.get("http://localhost:5100/dokter");
        setDokter(response.data);
      };

    const saveDokter = async (e) => {
        e.preventDefault();
        try {
          await axios.post("http://localhost:5100/dokter", {
            name, spesialis, telp, password, role
          });
          navigate(0);
        // location.reload()
        } catch (error) {
          console.log(error);
        }
      };
    


    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <AdminLayout>
            <div className="dataDokter">
        <Container className="container2 container mb-4">
        <Row>

        <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <AiFillHome size="25px" className="ho"/>
            <Nav.Link href={ADMIN_DASHBOARD}>Home</Nav.Link><AiOutlineRight className="ho1"/>
            <Nav.Link style={{color: 'black'}}>Data Dokter</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </Row>
        </Container>

        <Container className="cont">
            <Row>
                <Card className="CardDataDokter card">
                    <Card.Body>
                        <Row>
                        <Col>
                        <Card.Title className="card-title pl-4">
                            <h5>Data Dokter</h5>
                        </Card.Title>
                        </Col>
                        
                        <Col>
                        <Button className="btnDataDokter btn2 btn btn-block" onClick={handleShow}>
                            TAMBAH DATA DOKTER
                        </Button>
                        </Col>

                        {/* modal */}
                        <Modal show={show} onHide={handleClose}>
                        <Form onSubmit={saveDokter}>
                        <Modal.Header closeButton>
                        <Modal.Title>Form Tambah Dokter</Modal.Title>
                        </Modal.Header>
                        
                        <Modal.Body>
                            <Form.Group className="mb-3">
                            <Form.Label className="bold tab1">Nama Dokter</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Nama dokter"
                                autoFocus
                                value={name}
                                onChange = {(e) => setName(e.target.value)}
                            />
                            </Form.Group>

                            <Form.Group className="mb-3">
                            <Form.Label className="bold ">Spesialis:</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Spesialis"
                                autoFocus
                                value={spesialis}
                                onChange = {(e) => setSpesialis(e.target.value)}
                            />
                            </Form.Group>
                            <Form.Group className="mb-3">
                            <Form.Label className="bold ">Nomor Telepon</Form.Label>
                            <Form.Control
                                type="number"
                                placeholder="Nomor Telepon"
                                autoFocus
                                value={telp}
                                onChange = {(e) => setTelp(e.target.value)}
                            />
                            </Form.Group>
                            <Form.Group className="mb-3">
                            <Form.Label className="bold ">Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Password"
                                autoFocus
                                value={password}
                                onChange = {(e) => setPassword(e.target.value)}
                            />
                            </Form.Group>
                            <Form.Label className="bold ">Role</Form.Label>
                            <Form.Select aria-label="Default select example"
                                value={role}
                                onChange = {(e) => setRole(e.target.value)}>
                                <option value="1">Dokter</option>
                                <option value="2">Perawat</option>
                            </Form.Select>
                                </Modal.Body>
                                <Modal.Footer>
                                <Button className="btnModal" variant="outline-dark" onClick={handleClose} type="submit">
                                    OK
                                </Button>
                                </Modal.Footer>
                                </Form>
                            </Modal>
                        </Row>

                        {/* card poli dokter */}
                        <Container className="container-fluid text-center mb-5">
                        <Row>
                            {dokter.map((dokter)=>(    
                            <Col sm={6} key={dokter.id}>
                                <Card className="cardDo1 content mt-4 mb-4">
                                <Row>
                                    <Col  className="mt-4">
                                        <h6><strong>POLI {dokter.spesialis}</strong></h6>
                                        <h6 className="text mt-2 mb-5">{dokter.name}</h6>
                                    </Col>
                                    <Col className="mt-3 text-center mt-4">
                                    <button class="btnDataDokter btn btnpad"  onClick={() => navigate(DETAIL_DOKTER)}>Lihat data</button>
                                    <small className="text">Jadwal: {dokter.jadwal_praktik}</small>
                                    </Col>
                                </Row>
                                </Card>
                            </Col>
                            ))}
                            
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
export default DataDokter;