import { Container, Card, Row, Col, Navbar, Nav } from "react-bootstrap";
import AdminLayout from "../../components/AdminLayout";
import { ADMIN_DASHBOARD, DATA_POLI } from "../../router";
import { AiFillHome, AiOutlineRight } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const DataPoliklinik = () => {
  const navigate = useNavigate();
  return (
    <AdminLayout>
        <div className="DataPoliklinik">
        <Container className="container-nav-home mb-3">
        <Row>

            <Navbar bg="light" expand="lg">
        <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <AiFillHome size="25px" className="ho"/>
                <Nav.Link href={ADMIN_DASHBOARD}>Home</Nav.Link><AiOutlineRight className="ho1"/>
                <Nav.Link style={{color: 'black'}}>Data Poliklinik</Nav.Link>
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
                            <h4>Data Poliklinik</h4>
                        </Card.Title>
                        </Col>
                        </Row>
                        

                        {/* card poli dokter */}
                        <Container className="container-fluid text-center mb-5">
                        <Row>
                            <Col sm={6}>
                                <Card className="card2 content mt-4">
                                <Row>
                                    <Col  className="mt-4">
                                        <h6><strong>POLI PARU</strong></h6>
                                        <h6 className="text mt-2 mb-5">dr.Wahyu Mustiadi, Sp.P. M. Kes</h6>
                                    </Col>
                                    <Col className="mt-3 text-center mt-3">
                                    <button class="btnDataDokter btn btnpad"  onClick={() => navigate(DATA_POLI)}>Lihat data</button>
                                    <h4 className="prog">13/20 kuota terisi</h4>
                                    </Col>
                                </Row>
                                </Card>
                            </Col>
                            
                            <Col sm={6}>
                                <Card className="card2 content mt-3">
                                <Row>
                                    <Col  className="mt-4">
                                        <h6><strong>POLI RADIOLOGI</strong></h6>
                                        <h6 className="text mt-2 mb-5">dr.Anisah Amalia, Sp.P.Rad</h6>
                                    </Col>
                                    <Col className="mt-3 text-center mt-4">
                                    <button class="btnDataDokter btn btnpad" onClick={() => navigate(DATA_POLI)}>Lihat data</button>
                                    <h4 className="prog prog3">7/20 kuota terisi</h4>
                                    </Col>
                                </Row>
                                </Card>
                            </Col>

                        </Row>
                        <Row className="mt-5">
                            <Col sm={6}>
                                <Card className="card2 content mt-3">
                                <Row>
                                    <Col  className="mt-4">
                                        <h6><strong>POLI ANAK</strong></h6>
                                        <h6 className="text mt-2 mb-5">dr.Tiara Nurlita Sari, Sp.A.</h6>
                                    </Col>
                                    <Col className="mt-3 text-center mt-4">
                                    <button class="btnDataDokter btn btnpad " onClick={() => navigate(DATA_POLI)}>Lihat data</button>
                                    <h4 className="prog prog1">20/20 kuota terisi</h4>
                                    </Col>
                                </Row>
                                </Card>
                            </Col>
                            
                            <Col sm={6}>
                                <Card className="card2 content mt-3">
                                <Row>
                                    <Col  className="mt-4">
                                        <h6><strong>POLI SARAF</strong></h6>
                                        <h6 className="text mt-2 mb-5">dr.Yohanes Wiliam Prasetyo, Sp.S</h6>
                                    </Col>
                                    <Col className="mt-3 text-center mt-4">
                                    <button class="btnDataDokter btn btnpad" onClick={() => navigate(DATA_POLI)}>Lihat data</button>
                                    <h4 className="prog prog3">7/20 kuota terisi</h4>
                                    </Col>
                                </Row>
                                </Card>
                            </Col>
                        </Row>

                  <Row className="mt-5">
                    <Col sm={6}>
                      <Card className="card2 content mt-3">
                        <Row>
                          <Col className="mt-4">
                            <h6>
                              <strong>POLI ANAK</strong>
                            </h6>
                            <h6 className="text mt-2 mb-5">
                              dr.Imade Dikky Kalsa, Sp.A.
                            </h6>
                          </Col>
                          <Col className="mt-3 text-center mt-4">
                            <button
                              class="btnDataDokter"
                              onClick={() => navigate(DATA_POLI)}
                            >
                              Lihat data
                            </button>
                            <h4 className="prog prog1">20/20 kuota terisi</h4>
                          </Col>
                        </Row>
                      </Card>
                    </Col>

                    <Col sm={6}>
                      <Card className="card2 content mt-3">
                        <Row>
                          <Col className="mt-4">
                            <h6>
                              <strong>POLI P.DALAM</strong>
                            </h6>
                            <h6 className="text mt-2 mb-5">
                              dr.I Gede Arinton, Sp.PD-KGEH,M.Kom,MMR
                            </h6>
                          </Col>
                          <Col className="mt-3 text-center mt-4">
                            <button
                              class="btnDataDokter"
                              onClick={() => navigate(DATA_POLI)}
                            >
                              Lihat data
                            </button>
                            <h4 className="prog prog2">3/20 kuota terisi</h4>
                          </Col>
                        </Row>
                      </Card>
                    </Col>
                  </Row>
                  <Row className="mt-5">
                    <Col sm={6}>
                      <Card className="card2 content mt-3">
                        <Row>
                          <Col className="mt-4">
                            <h6>
                              <strong>POLI KANDUNGAN</strong>
                            </h6>
                            <h6 className="text mt-2 mb-5">
                              dr.Sutrisno, M.Kes., SP.OG,Subsp.ONK
                            </h6>
                          </Col>
                          <Col className="mt-3 text-center mt-4">
                            <button
                              class="btnDataDokter"
                              onClick={() => navigate(DATA_POLI)}
                            >
                              Lihat data
                            </button>
                            <h4 className="prog prog2">3/20 kuota terisi</h4>
                          </Col>
                        </Row>
                      </Card>
                    </Col>

                    <Col sm={6}>
                      <Card className="card2 content mt-3">
                        <Row>
                          <Col className="mt-4">
                            <h6>
                              <strong>POLI P.DALAM</strong>
                            </h6>
                            <h6 className="text mt-2 mb-5">
                              dr.Achmad Happy Oktavianto, M.Sc, Sp.PD
                            </h6>
                          </Col>
                          <Col className="mt-3 text-center mt-4">
                            <button
                              class="btnDataDokter"
                              onClick={() => navigate(DATA_POLI)}
                            >
                              Lihat data
                            </button>
                            <h4 className="prog prog2">3/20 kuota terisi</h4>
                          </Col>
                        </Row>
                      </Card>
                    </Col>
                  </Row>
                  <Row className="mt-5">
                    <Col sm={6}>
                      <Card className="cardDo1 content mt-3">
                        <Row>
                          <Col className="mt-4">
                            <h6>
                              <strong>POLI KANDUNGAN</strong>
                            </h6>
                            <h6 className="text mt-2 mb-5">
                              dr.Budi Irawan, M.Sc, Sp.OG
                            </h6>
                          </Col>
                          <Col className="mt-3 text-center mt-4">
                            <button
                              class="btnDataDokter"
                              onClick={() => navigate(DATA_POLI)}
                            >
                              Lihat data
                            </button>
                            <h4 className="prog prog2">3/20 kuota terisi</h4>
                          </Col>
                        </Row>
                      </Card>
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

export default DataPoliklinik;
