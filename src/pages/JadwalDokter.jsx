import dokter1 from "../assets/images/dokter1.png";
import dokter7 from "../assets/images/dokter7.png"
import dokter3 from "../assets/images/dokter3.png";
import dokter4 from "../assets/images/dokter4.png";
import dokter5 from "../assets/images/dokter5.png";
import dokter6 from "../assets/images/dokter6.png"
import dokter8 from "../assets/images/dokter8.png"
import dokter9 from "../assets/images/dokter9.png"
import deskDok from "../assets/images/deskdok.png";
import Dok from "../assets/images/dokter2.png";
import { Card, Container, Row, Col, Button } from "react-bootstrap";
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
                <Card className="isi-kartu me-5">
                <Card.Img src={dokter1}/>
                <Card.Body> 
                  <Card.Text className="text-center" style={{fontSize: "15px", fontWeight:"normal"}}>
                  dr. Anton Prihandana, SpOG
                  </Card.Text>
                    <p className="fw-bold ms-2" style={{fontSize: "18px"}}>SPESIALIS OBSETRI  & GINEKOLOGI</p>

                </Card.Body>
                  <Button style={{width:"100%", borderRadius:"0"}}>Lihat Jadwal Praktik</Button>
                </Card>
              </Col>

              <Col className="mb-5">
                <Card className="isi-kartu me-5">
                  <Card.Img src={dokter6}/>
                  <Card.Body> 
                    <Card.Text className="text-center" style={{fontSize: "15px", fontWeight:"normal"}}>
                    dr. Tiara Nurlita Sari, Sp.A
                    </Card.Text>
                      <p className="fw-bold ms-2" style={{fontSize: "18px"}}>SPESIALIS ANAK</p><br/>

                  </Card.Body>
                    <Button style={{width:"100%", borderRadius:"0"}}>Lihat Jadwal Praktik</Button>
                  </Card>
              </Col>

              <Col className="mb-5">
              <Card className="isi-kartu me-5">
                <Card.Img src={Dok}/>
                <Card.Body> 
                  <Card.Text className="text-center" style={{fontSize: "15px", fontWeight:"normal"}}>
                  dr. I Made Dikky KDokp.A
                  </Card.Text>
                    <p className="fw-bold ms-2" style={{fontSize: "18px"}}>SPESIALIS ANAK</p><br/>

                </Card.Body>
                  <Button style={{width:"100%", borderRadius:"0"}}>Lihat Jadwal Praktik</Button>
                </Card>
              </Col>

              <Col className="mb-5">
              <Card className="isi-kartu me-5">
                <Card.Img src={dokter7}/>
                <Card.Body> 
                  <Card.Text className="text-center" style={{fontSize: "15px", fontWeight:"normal"}}>
                  dr. Sutrisno, M.Kes.,Sp,OG.,Subsp.                  
                  </Card.Text>
                    <p className="fw-bold ms-2" style={{fontSize: "18px"}}>SPESIALIS OBSETRI  & GINEKOLOGI</p>

                </Card.Body>
                  <Button style={{width:"100%", borderRadius:"0"}}>Lihat Jadwal Praktik</Button>
                </Card>
              </Col>

              <Col className="mb-5">
              <Card className="isi-kartu me-5">
                <Card.Img src={dokter3}/>
                <Card.Body> 
                  <Card.Text className="text-center" style={{fontSize: "15px", fontWeight:"normal"}}>
                  dr. Budi Irawan, Sp.OG
                  </Card.Text>
                    <p className="fw-bold ms-2" style={{fontSize: "18px"}}>SPESIALIS OBSETRI  & GINEKOLOGI</p>

                </Card.Body>
                  <Button style={{width:"100%", borderRadius:"0"}}>Lihat Jadwal Praktik</Button>
                </Card>
              </Col>

              <Col className="mb-5">
              <Card className="isi-kartu me-5">
                <Card.Img src={dokter8}/>
                <Card.Body> 
                  <Card.Text className="text-center" style={{fontSize: "15px", fontWeight:"normal"}}>
                  dr. Anisah Amalia, Sp.Rad
                  </Card.Text>
                    <p className="fw-bold ms-2" style={{fontSize: "18px"}}>SPESIALIS RADIOLOGI</p><br/>

                </Card.Body>
                  <Button style={{width:"100%", borderRadius:"0"}}>Lihat Jadwal Praktik</Button>
                </Card>
              </Col>

              <Col className="mb-5">
              <Card className="isi-kartu me-5">
                <Card.Img src={dokter9}/>
                <Card.Body> 
                  <Card.Text className="text-center" style={{fontSize: "15px", fontWeight:"normal"}}>
                  dr. Yohanes William Prasetyo, Sp.S                  
                  </Card.Text>
                    <p className="fw-bold ms-2" style={{fontSize: "18px"}}>SPESIALIS SARAF</p><br/><br/>

                </Card.Body>
                  <Button style={{width:"100%", borderRadius:"0"}}>Lihat Jadwal Praktik</Button>
                </Card>
              </Col>

              <Col className="mb-5">
              <Card className="isi-kartu me-5">
                <Card.Img src={dokter4}/>
                <Card.Body> 
                  <Card.Text className="text-center" style={{fontSize: "15px", fontWeight:"normal"}}>
                  dr. I Gede Arianto, Sp.PD-KGEH, M.Kom, MMR
                  </Card.Text>
                    <p className="fw-bold ms-2" style={{fontSize: "18px"}}>SPESIALIS PENYAKIT DALAM</p>

                </Card.Body>
                  <Button style={{width:"100%", borderRadius:"0"}}>Lihat Jadwal Praktik</Button>
                </Card>
              </Col>

              <Col className="mb-5">
              <Card className="isi-kartu me-5">
                <Card.Img src={dokter5}/>
                <Card.Body> 
                  <Card.Text className="text-center" style={{fontSize: "15px", fontWeight:"normal"}}>
                  dr. Achmad Heppy Oktavianto, M.Sc, Sp.PD. K-PTI FINASIM                  
                  </Card.Text>
                    <p className="fw-bold ms-2" style={{fontSize: "18px"}}>SPESIALIS PENYAKIT DALAM</p>

                </Card.Body>
                  <Button style={{width:"100%", borderRadius:"0"}}>Lihat Jadwal Praktik</Button>
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
