import { Card, Container, Row, Col, Form, Pagination } from "react-bootstrap";
import PicArtikel1 from "../assets/images/artikel1.png";
import PicArtikel2 from "../assets/images/artikel2.png";
import PicArtikel3 from "../assets/images/artikel3.png";
import PicArtikel4 from "../assets/images/artikel4.png";
import PicArtikel5 from "../assets/images/artikel5.png";
import PicArtikel6 from "../assets/images/artikel6.png";
import PicArtikel7 from "../assets/images/artikel7.png";
import PicArtikel8 from "../assets/images/artikel8.png";
import PicArtikel9 from "../assets/images/artikel10.jpg";
// import SearchIcon from "../assets/images/search-icon.png";
import deskDok from "../assets/images/deskdok.png";
import Layout from "../components/Layout";
import { DETAIL_ARTIKEL } from "../router";
import { Link } from "react-router-dom";

const Artikel = () => {
  let active = 1;
  let items = [];
  for (let number = 1; number <= 5; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active}>
        {number}
      </Pagination.Item>
    );
  }
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
            <Form>
              <input
                type="text"
                placeholder="Cari Artikel"
                className="search mb-4"
              />
            </Form>
            <Row>
              {/* CARD 1 */}
              <Col className="mb-5">
                <Card style={{ width: "300px" }} className="isi-kartu2">
                  <Card.Img variant="top" src={PicArtikel2} />
                  <Card.Body>
                    <Card.Text>
                      <h3>Bahaya Stress pada Ibu Hamil</h3>
                      <p>
                        Saat menjalani masa masa kehamilan tentunya akan banyak
                        perubahan yang akan mungkin dialami oleh ibu Hamil...
                      </p>
                    </Card.Text>
                    <Link to={DETAIL_ARTIKEL}>Selengkapnya</Link>
                  </Card.Body>
                </Card>
              </Col>
              {/* END */}

              {/* CARD 2 */}
              <Col className="mb-5">
                <Card style={{ width: "300px" }} className="isi-kartu2">
                  <Card.Img variant="top" src={PicArtikel3} />
                  <Card.Body>
                    <Card.Text>
                      <h3>Cara Meningkatkan Imunitas di Masa Pandemi</h3>
                      <p></p>
                      Imunitas atau sering disebut daya tahan tubuh, merupakan
                      sistem kekebalan tubuh yang dirancang untuk mendeteksi
                      ataupun...
                    </Card.Text>
                    <Link to={DETAIL_ARTIKEL}>Selengkapnya</Link>
                  </Card.Body>
                </Card>
              </Col>

              {/* END */}

              {/* CARD 3 */}
              <Col className="mb-5">
                <Card style={{ width: "300px" }} className="isi-kartu2">
                  <Card.Img variant="top" src={PicArtikel1} />
                  <Card.Body>
                    <Card.Text>
                      <h3>Bahaya Stress pada Ibu Hamil</h3>
                      Saat menjalani masa masa kehamilan tentunya akan banyak
                      perubahan yang akan mungkin dialami oleh ibu Hamil...
                    </Card.Text>
                    <Link to={DETAIL_ARTIKEL}>Selengkapnya</Link>
                  </Card.Body>
                </Card>
              </Col>

              {/* END */}

              {/* CARD 4 */}
              <Col className="mb-5">
                <Card style={{ width: "300px" }} className="isi-kartu2">
                  <Card.Img variant="top" src={PicArtikel4} />
                  <Card.Body>
                    <Card.Text className="isi-kartu2">
                      <h3>Bahaya Nyeri Yang sepele</h3>
                      Saraf kejepit adalah tekanan pada saraf oleh jaringan di
                      sekitar tubuh, seperti tulang, tulang yang mulai rapuh
                      ditelan usia...
                    </Card.Text>
                    <Link to={DETAIL_ARTIKEL}>Selengkapnya</Link>
                  </Card.Body>
                </Card>
              </Col>

              {/* END */}

              {/* CARD 5 */}
              <Col className="mb-5">
                <Card style={{ width: "300px" }} className="isi-kartu2">
                  <Card.Img variant="top" src={PicArtikel5} />
                  <Card.Body>
                    <Card.Text className="desk-card">
                      <h3>Karbohidrat Kompleks</h3>
                      Karbohidrat komplek merupakan jenis karbohidrat yang
                      diketahui lebih sehat dan bergizi, sehingga memiliki
                      banyak manfaat
                    </Card.Text>
                    <Link to={DETAIL_ARTIKEL}>Selengkapnya</Link>
                  </Card.Body>
                </Card>
              </Col>

              {/* END */}

              {/* CARD 6 */}

              <Col className="mb-5">
                <Card style={{ width: "300px" }} className="isi-kartu2">
                  <Card.Img variant="top" src={PicArtikel6} />
                  <Card.Body>
                    <Card.Text className="desk-card">
                      <h3>
                        Ibu, Kenali Penyebab Janin Cegukan dalam Kandungan
                      </h3>
                      Selain menendang, berguling, dan menonjol, ibu hamil juga
                      dapat merasakan janin saat bergerak...
                    </Card.Text>
                    <Link to={DETAIL_ARTIKEL}>Selengkapnya</Link>
                  </Card.Body>
                </Card>
              </Col>

              {/* END */}

              {/* CARD 7 */}
              <Col>
                <Card style={{ width: "300px" }} className="isi-kartu2">
                  <Card.Img variant="top" src={PicArtikel7} />
                  <Card.Body>
                    <Card.Text className="desk-card">
                      <h3>Bahaya Stress pada Ibu Hamil</h3>
                      Saat menjalani masa masa kehamilan tentunya akan banyak
                      perubahan yang akan mungkin dialami oleh..
                    </Card.Text>
                    <Link to={DETAIL_ARTIKEL}>Selengkapnya</Link>
                  </Card.Body>
                </Card>
              </Col>

              {/* END */}

              {/* CARD 8 */}
              <Col>
                <Card style={{ width: "300px" }} className="isi-kartu2">
                  <Card.Img variant="top" src={PicArtikel8} />
                  <Card.Body>
                    <Card.Text className="desk-card">
                      <h3>
                        Ketahui Obat Alami untuk Mengatasi Keracunan Makanan
                      </h3>
                      <p>
                        Mengonsumsi makanan dan minuman sembarangan, tanpa
                        memerhatikan
                      </p>
                    </Card.Text>
                    <Link to={DETAIL_ARTIKEL}>Selengkapnya</Link>
                  </Card.Body>
                </Card>
              </Col>

              {/* END */}

              {/* CARD 9 */}
              <Col className="mb-5">
                <Card style={{ width: "300px" }} className="isi-kartu2">
                  <Card.Img variant="top" src={PicArtikel9} />
                  <Card.Body>
                    <Card.Text className="desk-card">
                      <h3>Makanan Sehat untuk Balita</h3>
                      <p>
                        Mulai usia dua tahun, anak balita mulai menjadi pemilih
                        makanan yang ulung. Terkadang menu yang sama...
                      </p>
                    </Card.Text>
                    <Link to={DETAIL_ARTIKEL}>Selengkapnya</Link>
                  </Card.Body>
                </Card>
              </Col>
              {/* END */}
            </Row>
            <div className="d-flex justify-content-center">
              <Pagination className="text-center">{items}</Pagination>
            </div>
          </Container>
        </div>
      </div>
    </Layout>
  );
};

export default Artikel;
