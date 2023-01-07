import dokter1 from "../assets/images/dokter1.png";
import dokter2 from "../assets/images/dokter2.png";
import dokter3 from "../assets/images/dokter3.png";
import dokter4 from "../assets/images/dokter4.png";
import dokter5 from "../assets/images/dokter5.png";
import deskDok from "../assets/images/deskdok.png";
import Dok from "../assets/images/dok1.png";
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
            <Row>
              <Col className="mb-5">
                <Card style={{ width: "17rem" }} className="isi-kartu">
                  <Card.Img variant="top" src={Dok} />
                  <Card.Body>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                    <Card.Link href="#">Card Link</Card.Link>
                  </Card.Body>
                </Card>
              </Col>
              <Col className="mb-5">
                <Card style={{ width: "17rem" }} className="isi-kartu">
                  <Card.Img variant="top" src={dokter1} />
                  <Card.Body>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                    <Card.Link href="#">Card Link</Card.Link>
                  </Card.Body>
                </Card>
              </Col>
              <Col className="mb-5">
                <Card style={{ width: "17rem" }} className="isi-kartu">
                  <Card.Img variant="top" src={dokter2} />
                  <Card.Body>
                    <Card.Text className="isi-kartu">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                    <Card.Link href="#">Card Link</Card.Link>
                  </Card.Body>
                </Card>
              </Col>

              <Col>
                <Card style={{ width: "17rem" }} className="isi-kartu">
                  <Card.Img variant="top" src={dokter3} />
                  <Card.Body>
                    <Card.Text className="isi-kartu">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                    <Card.Link href="#">Card Link</Card.Link>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card style={{ width: "17rem" }} className="isi-kartu">
                  <Card.Img variant="top" src={dokter4} />
                  <Card.Body>
                    <Card.Text className="desk-card">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                    <Card.Link href="#">Card Link</Card.Link>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card style={{ width: "17rem" }} className="isi-kartu">
                  <Card.Img variant="top" src={dokter5} />
                  <Card.Body>
                    <Card.Text className="desk-card">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                    <Card.Link href="#">Card Link</Card.Link>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </Layout>
  );
};

export default JadwalDokter;
