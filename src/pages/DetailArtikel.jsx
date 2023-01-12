import PicArtikel1 from "../assets/images/artikel1.png";
// import PicArtikel2 from "../assets/images/artikel2.png";
// import PicArtikel3 from "../assets/images/artikel3.png";
import deskDok from "../assets/images/deskdok.png";
import { Card, Container } from "react-bootstrap";
import Layout from "../components/Layout";

const DetailArtikel = () => {
  return (
    <Layout>
      <div className="dokter">
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
            <img src={PicArtikel1} alt="" />
          </Container>
        </div>
      </div>
    </Layout>
  );
};

export default DetailArtikel;
