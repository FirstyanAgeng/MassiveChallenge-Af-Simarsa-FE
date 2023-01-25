import { DETAIL_ARTIKEL } from "../router";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
const CardArticle = ({ title, description, image }) => {
  <Card style={{ width: "300px" }} className="isi-kartu2">
    <Card.Img variant="top" src={{ image }} />
    <Card.Body>
      <Card.Text className="desk-card">
        <h3>{title}</h3>
        <p>{description}</p>
      </Card.Text>
      <Link to={DETAIL_ARTIKEL}>Selengkapnya</Link>
    </Card.Body>
  </Card>;
};

export default CardArticle;
