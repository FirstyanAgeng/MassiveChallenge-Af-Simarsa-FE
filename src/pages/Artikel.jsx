import { Card, Container, Row, Col } from "react-bootstrap";
import PicArtikel1 from "../assets/images/artikel1.png";
import PicArtikel2 from "../assets/images/artikel2.png";
import PicArtikel3 from "../assets/images/artikel3.png";
import deskDok from "../assets/images/deskdok.png";
import Layout from "../components/Layout";
import { DETAIL_ARTIKEL } from "../router";
import { Link } from "react-router-dom";

const Artikel = () => {
  return (
    <Layout>
      <div className="artikel">
        <Card className="text-dark">
          <Card.Img src={deskDok} alt="Card image" />
          <Card.ImgOverlay className="background-filter">
            <Container>
              <h1>Artikel</h1>
            </Container>
          </Card.ImgOverlay>
        </Card>
        <div className="p-5 dokter-content">
          <Container>
            <Row>
              <Col className="mb-5">
                <Card style={{ width: "17rem" }} className="isi-kartu2">
                  <Card.Img variant="top" src={PicArtikel2} />
                  <Card.Body>
                    <Card.Text>
                      Saat menjalani masa masa kehamilan tentunya akan banyak
                      perubahan yang akan mungkin dialami oleh ibu Hamil...
                    </Card.Text>
                    <Link to={DETAIL_ARTIKEL}>Selengkapnya</Link>
                  </Card.Body>
                </Card>
              </Col>

              <Col className="mb-5">
                <Card style={{ width: "17rem" }} className="isi-kartu2">
                  <Card.Img variant="top" src={PicArtikel3} />
                  <Card.Body>
                    <Card.Text>
                      Saat menjalani masa masa kehamilan tentunya akan banyak
                      perubahan yang akan mungkin dialami oleh ibu Hamil...
                    </Card.Text>
                    <Link to={DETAIL_ARTIKEL}>Selengkapnya</Link>
                  </Card.Body>
                </Card>
              </Col>

              <Col className="mb-5">
                <Card style={{ width: "17rem" }} className="isi-kartu2">
                  <Card.Img variant="top" src={PicArtikel1} />
                  <Card.Body>
                    <Card.Text>
                      Saat menjalani masa masa kehamilan tentunya akan banyak
                      perubahan yang akan mungkin dialami oleh ibu Hamil...
                    </Card.Text>
                    <Link to={DETAIL_ARTIKEL}>Selengkapnya</Link>
                  </Card.Body>
                </Card>
              </Col>

              <Col className="mb-5">
                <Card style={{ width: "17rem" }} className="isi-kartu2">
                  <Card.Img variant="top" src={PicArtikel1} />
                  <Card.Body>
                    <Card.Text className="isi-kartu2">
                      Saat menjalani masa masa kehamilan tentunya akan banyak
                      perubahan yang akan mungkin dialami oleh ibu Hamil...
                    </Card.Text>
                    <Link to={DETAIL_ARTIKEL}>Selengkapnya</Link>
                  </Card.Body>
                </Card>
              </Col>

              <Col className="mb-5">
                <Card style={{ width: "17rem" }} className="isi-kartu2">
                  <Card.Img variant="top" src={PicArtikel1} />
                  <Card.Body>
                    <Card.Text className="desk-card">
                      Saat menjalani masa masa kehamilan tentunya akan banyak
                      perubahan yang akan mungkin dialami oleh ibu Hamil...
                    </Card.Text>
                    <Link to={DETAIL_ARTIKEL}>Selengkapnya</Link>
                  </Card.Body>
                </Card>
              </Col>

              <Col className="mb-5">
                <Card style={{ width: "17rem" }} className="isi-kartu2">
                  <Card.Img variant="top" src={PicArtikel1} />
                  <Card.Body>
                    <Card.Text className="desk-card">
                      Saat menjalani masa masa kehamilan tentunya akan banyak
                      perubahan yang akan mungkin dialami oleh ibu Hamil...
                    </Card.Text>
                    <Link to={DETAIL_ARTIKEL}>Selengkapnya</Link>
                  </Card.Body>
                </Card>
              </Col>

              <Col>
                <Card style={{ width: "17rem" }} className="isi-kartu2">
                  <Card.Img variant="top" src={PicArtikel1} />
                  <Card.Body>
                    <Card.Text className="desk-card">
                      Saat menjalani masa masa kehamilan tentunya akan banyak
                      perubahan yang akan mungkin dialami oleh ibu Hamil...
                    </Card.Text>
                    <Link to={DETAIL_ARTIKEL}>Selengkapnya</Link>
                  </Card.Body>
                </Card>
              </Col>

              <Col>
                <Card style={{ width: "17rem" }} className="isi-kartu2">
                  <Card.Img variant="top" src={PicArtikel1} />
                  <Card.Body>
                    <Card.Text className="desk-card">
                      Saat menjalani masa masa kehamilan tentunya akan banyak
                      perubahan yang akan mungkin dialami oleh ibu Hamil...
                    </Card.Text>
                    <Link to={DETAIL_ARTIKEL}>Selengkapnya</Link>
                  </Card.Body>
                </Card>
              </Col>

              <Col className="mb-5">
                <Card style={{ width: "17rem" }} className="isi-kartu2">
                  <Card.Img variant="top" src={PicArtikel1} />
                  <Card.Body>
                    <Card.Text className="desk-card">
                      Saat menjalani masa masa kehamilan tentunya akan banyak
                      perubahan yang akan mungkin dialami oleh ibu Hamil...
                    </Card.Text>
                    <Link to={DETAIL_ARTIKEL}>Selengkapnya</Link>
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

export default Artikel;
