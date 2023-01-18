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
import { Card, Container, Row, Col } from "react-bootstrap";
import Layout from "../components/Layout";

const JadwalDokter = () => {
  return (
    <Layout>
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
                      <p>Dr. Anton Prihandana, Sp.OG</p>
                      <p>Spesialis Obstetri & Ginekologi</p>
                    </Card.Text>
                  </Card.Body>
                  <Card.Link
                    href="#"
                    style={{
                      backgroundColor: "#0957DE",
                      color: "#BFD2F8",
                      padding: "10px",
                      textAlign: "center",
                    }}
                  >
                    Lihat Jadwal
                  </Card.Link>
                </Card>
              </Col>
              {/* END */}

              {/* CARF */}
              <Col className="mb-5" xs="3">
                <Card style={{ width: "17rem" }} className="isi-kartu">
                  <Card.Img variant="top" src={dokter2} height="300px" />
                  <Card.Body>
                    <Card.Text className="text-center">
                      <p>Dr. Sutrisno, M.Kes.,Sp,OG</p>
                      <p>Spesialis Obstetri & Ginekologi </p>
                    </Card.Text>
                  </Card.Body>
                  <Card.Link
                    href="#"
                    style={{
                      backgroundColor: "#0957DE",
                      color: "#BFD2F8",
                      padding: "10px",
                      textAlign: "center",
                    }}
                  >
                    Lihat Jadwal
                  </Card.Link>
                </Card>
              </Col>
              {/* END */}

              {/* CARD */}
              <Col className="mb-5" xs="3">
                <Card style={{ width: "17rem" }} className="isi-kartu">
                  <Card.Img variant="top" src={dokter3} />
                  <Card.Body>
                    <Card.Text className="text-center">
                      <p> Dr. Budi Irawan, Sp.OG </p>
                      <p>Spesialis Obstetri & Ginekologi </p>
                    </Card.Text>
                  </Card.Body>
                  <Card.Link
                    href="#"
                    style={{
                      backgroundColor: "#0957DE",
                      color: "#BFD2F8",
                      padding: "10px",
                      textAlign: "center",
                    }}
                  >
                    Lihat Jadwal
                  </Card.Link>
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
                      <p>Dr. I Gede Arianto, Sp.PD-KGEH</p>
                      <p>SPESIALIS PENYAKIT DALAM</p>
                    </Card.Text>
                  </Card.Body>
                  <Card.Link
                    href="#"
                    style={{
                      backgroundColor: "#0957DE",
                      color: "#BFD2F8",
                      padding: "10px",
                      textAlign: "center",
                    }}
                  >
                    Lihat Jadwal
                  </Card.Link>
                </Card>
              </Col>
              {/* END */}

              {/* CARF */}
              <Col className="mb-5" xs="3">
                <Card style={{ width: "17rem" }} className="isi-kartu">
                  <Card.Img variant="top" src={dokter5} height="300px" />
                  <Card.Body>
                    <Card.Text className="text-center">
                      <p>Dr. Sutrisno, M.Kes.,Sp,OG</p>
                      <p>SPESIALIS KANDUNGAN</p>
                    </Card.Text>
                  </Card.Body>
                  <Card.Link
                    href="#"
                    style={{
                      backgroundColor: "#0957DE",
                      color: "#BFD2F8",
                      padding: "10px",
                      textAlign: "center",
                    }}
                  >
                    Lihat Jadwal
                  </Card.Link>
                </Card>
              </Col>
              {/* END */}

              {/* CARD */}
              <Col className="mb-5" xs="3">
                <Card style={{ width: "17rem" }} className="isi-kartu">
                  <Card.Img variant="top" src={dokter6} />
                  <Card.Body>
                    <Card.Text className="text-center">
                      <p>Dr. Sutrisno, M.Kes.,Sp,OG</p>
                      <p> Spesialis Obstetri & Ginekologi </p>
                    </Card.Text>
                  </Card.Body>
                  <Card.Link
                    href="#"
                    style={{
                      backgroundColor: "#0957DE",
                      color: "#BFD2F8",
                      padding: "10px",
                      textAlign: "center",
                    }}
                  >
                    Lihat Jadwal
                  </Card.Link>
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
                      <p>Dr. Tiara Nurlita Sari, Sp.A</p>
                      <p>SPESIALIS ANAK</p>
                    </Card.Text>
                  </Card.Body>
                  <Card.Link
                    href="#"
                    style={{
                      backgroundColor: "#0957DE",
                      color: "#BFD2F8",
                      padding: "10px",
                      textAlign: "center",
                    }}
                  >
                    Lihat Jadwal
                  </Card.Link>
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
                  <Card.Link
                    href="#"
                    style={{
                      backgroundColor: "#0957DE",
                      color: "#BFD2F8",
                      padding: "10px",
                      textAlign: "center",
                    }}
                  >
                    Lihat Jadwal
                  </Card.Link>
                </Card>
              </Col>
              {/* END */}

              {/* CARD */}
              <Col className="mb-5" xs="3">
                <Card style={{ width: "17rem" }} className="isi-kartu">
                  <Card.Img variant="top" src={dokter9} />
                  <Card.Body>
                    <Card.Text className="text-center">
                      <p>Dr. Anisah Amalia, Sp Rad</p>
                      <p>SPESIALIS RADIOLOGI</p>
                    </Card.Text>
                  </Card.Body>
                  <Card.Link
                    href="#"
                    style={{
                      backgroundColor: "#0957DE",
                      color: "#BFD2F8",
                      padding: "10px",
                      textAlign: "center",
                    }}
                  >
                    Lihat Jadwal
                  </Card.Link>
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
