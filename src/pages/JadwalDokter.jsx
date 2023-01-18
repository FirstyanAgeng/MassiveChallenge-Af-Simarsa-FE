import deskDok from "../assets/images/deskdok.png";
import dokter1 from "../assets/images/dok1.png";
import dokter2 from "../assets/images/dok-sutrisno.png";
import dokter3 from "../assets/images/dokter3.png";
import dokter4 from "../assets/images/dokter4.png";
import dokter5 from "../assets/images/dokter5.png";
import dokter6 from "../assets/images/dokter2.png";
import dokter7 from "../assets/images/dokter6.png";
import dokter8 from "../assets/images/dokter7.png";
import dokter9 from "../assets/images/dokter8.png";
import { Card, Container, Row, Col, Modal, Button } from "react-bootstrap";
import Layout from "../components/Layout";
import { useState } from "react";
import Jadwal from "../assets/images/jadwal-dokter.png";

const JadwalDokter = () => {
  const [modalShow, setModalShow] = useState(false);

  function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        className="modal-jadwal"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Jadwal Dokter
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="d-flex justify-content-center text-center">
          <img src={Jadwal} alt="" />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  return (
    <Layout>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      <div className="dokter">
        <Card className="text-dark">
          <Card.Img src={deskDok} alt="Card image" />
          <Card.ImgOverlay className="background-filter">
            <Container>
              <h1>Jadwal Dokter</h1>
            </Container>
          </Card.ImgOverlay>
        </Card>
        <div className="p-5 dokter-content">
          <Container>
            <Row className="justify-content-center">
              {/* CARD */}

              <Col className="mb-5" xs="3">
                <Card style={{ width: "17rem" }} className="isi-kartu">
                  <Card.Img variant="top" src={dokter1} />
                  <Card.Body>
                    <Card.Text className="text-center">
                      <p>dr. Anton Prihandana, Sp.OG</p>
                      <p>Spesialis Obstetri & Ginekologi</p>
                    </Card.Text>
                  </Card.Body>
                  <button
                    onClick={() => setModalShow(true)}
                    style={{
                      backgroundColor: "#0957DE",
                      color: "#BFD2F8",
                      padding: "10px",
                      textAlign: "center",
                      border: "none",
                    }}
                  >
                    Lihat Jadwal
                  </button>
                </Card>
              </Col>
              {/* END */}

              {/* CARF */}
              <Col className="mb-5" xs="3">
                <Card style={{ width: "17rem" }} className="isi-kartu">
                  <Card.Img variant="top" src={dokter2} height="300px" />
                  <Card.Body>
                    <Card.Text className="text-center">
                      <p>dr. Sutrisno, M.Kes.,Sp,OG</p>
                      <p>Spesialis Obstetri & Ginekologi </p>
                    </Card.Text>
                  </Card.Body>
                  <button
                    onClick={() => setModalShow(true)}
                    style={{
                      backgroundColor: "#0957DE",
                      color: "#BFD2F8",
                      padding: "10px",
                      textAlign: "center",
                      border: "none",
                    }}
                  >
                    Lihat Jadwal
                  </button>
                </Card>
              </Col>
              {/* END */}

              {/* CARD */}
              <Col className="mb-5" xs="3">
                <Card style={{ width: "17rem" }} className="isi-kartu">
                  <Card.Img variant="top" src={dokter3} />
                  <Card.Body>
                    <Card.Text className="text-center">
                      <p> dr. Budi Irawan, Sp.OG </p>
                      <p>Spesialis Obstetri & Ginekologi </p>
                    </Card.Text>
                  </Card.Body>
                  <button
                    onClick={() => setModalShow(true)}
                    style={{
                      backgroundColor: "#0957DE",
                      color: "#BFD2F8",
                      padding: "10px",
                      textAlign: "center",
                      border: "none",
                    }}
                  >
                    Lihat Jadwal
                  </button>
                </Card>
              </Col>
              {/* END */}
            </Row>
            <Row className="justify-content-center">
              {/* CARD */}
              <Col className="mb-5" xs="3">
                <Card style={{ width: "17rem" }} className="isi-kartu">
                  <Card.Img variant="top" src={dokter4} />
                  <Card.Body>
                    <Card.Text className="text-center">
                      <p>dr. I Gede Arianto, Sp.PD-KGEH</p>
                      <p>SPESIALIS PENYAKIT DALAM</p>
                    </Card.Text>
                  </Card.Body>
                  <button
                    onClick={() => setModalShow(true)}
                    style={{
                      backgroundColor: "#0957DE",
                      color: "#BFD2F8",
                      padding: "10px",
                      textAlign: "center",
                      border: "none",
                    }}
                  >
                    Lihat Jadwal
                  </button>
                </Card>
              </Col>
              {/* END */}

              {/* CARF */}
              <Col className="mb-5" xs="3">
                <Card style={{ width: "17rem" }} className="isi-kartu">
                  <Card.Img variant="top" src={dokter5} height="300px" />
                  <Card.Body>
                    <Card.Text className="text-center">
                      <p>dr. Sutrisno, M.Kes.,Sp,OG</p>
                      <p>SPESIALIS KANDUNGAN</p>
                    </Card.Text>
                  </Card.Body>
                  <button
                    onClick={() => setModalShow(true)}
                    style={{
                      backgroundColor: "#0957DE",
                      color: "#BFD2F8",
                      padding: "10px",
                      textAlign: "center",
                      border: "none",
                    }}
                  >
                    Lihat Jadwal
                  </button>
                </Card>
              </Col>
              {/* END */}

              {/* CARD */}
              <Col className="mb-5" xs="3">
                <Card style={{ width: "17rem" }} className="isi-kartu">
                  <Card.Img variant="top" src={dokter6} />
                  <Card.Body>
                    <Card.Text className="text-center">
                      <p>dr. Sutrisno, M.Kes.,Sp,OG</p>
                      <p> Spesialis Obstetri & Ginekologi </p>
                    </Card.Text>
                  </Card.Body>
                  <button
                    onClick={() => setModalShow(true)}
                    style={{
                      backgroundColor: "#0957DE",
                      color: "#BFD2F8",
                      padding: "10px",
                      textAlign: "center",
                      border: "none",
                    }}
                  >
                    Lihat Jadwal
                  </button>
                </Card>
              </Col>
              {/* END */}
            </Row>
            <Row className="justify-content-center">
              {/* CARD */}
              <Col className="mb-5" xs="3">
                <Card style={{ width: "17rem" }} className="isi-kartu">
                  <Card.Img variant="top" src={dokter7} />
                  <Card.Body>
                    <Card.Text className="text-center">
                      <p>dr. Tiara Nurlita Sari, Sp.A</p>
                      <p>SPESIALIS ANAK</p>
                    </Card.Text>
                  </Card.Body>
                  <button
                    onClick={() => setModalShow(true)}
                    style={{
                      backgroundColor: "#0957DE",
                      color: "#BFD2F8",
                      padding: "10px",
                      textAlign: "center",
                      border: "none",
                    }}
                  >
                    Lihat Jadwal
                  </button>
                </Card>
              </Col>
              {/* END */}

              {/* CARF */}
              <Col className="mb-5" xs="3">
                <Card style={{ width: "17rem" }} className="isi-kartu">
                  <Card.Img variant="top" src={dokter8} height="300px" />
                  <Card.Body>
                    <Card.Text className="text-center">
                      <p>dr. Yohanes William, Sp.S</p>
                      <p>SPESIALIS SARAF</p>
                    </Card.Text>
                  </Card.Body>
                  <button
                    onClick={() => setModalShow(true)}
                    style={{
                      backgroundColor: "#0957DE",
                      color: "#BFD2F8",
                      padding: "10px",
                      textAlign: "center",
                      border: "none",
                    }}
                  >
                    Lihat Jadwal
                  </button>
                </Card>
              </Col>
              {/* END */}

              {/* CARD */}
              <Col className="mb-5" xs="3">
                <Card style={{ width: "17rem" }} className="isi-kartu">
                  <Card.Img variant="top" src={dokter9} />
                  <Card.Body>
                    <Card.Text className="text-center">
                      <p>dr. Anisah Amalia, Sp Rad</p>
                      <p>SPESIALIS RADIOLOGI</p>
                    </Card.Text>
                  </Card.Body>
                  <button
                    onClick={() => setModalShow(true)}
                    style={{
                      backgroundColor: "#0957DE",
                      color: "#BFD2F8",
                      padding: "10px",
                      textAlign: "center",
                      border: "none",
                    }}
                  >
                    Lihat Jadwal
                  </button>
                </Card>
              </Col>
              {/* END */}
            </Row>
          </Container>
        </div>
      </div>
    </Layout>
  );
};
export default JadwalDokter;
