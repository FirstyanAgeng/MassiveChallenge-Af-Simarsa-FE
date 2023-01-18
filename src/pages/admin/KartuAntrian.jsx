import { Container, Card, Row, Col } from "react-bootstrap";
import "../../styles/admin.css";
import { useNavigate, useParams } from "react-router-dom";
import { ADMIN_DASHBOARD } from "../../router";
import { useEffect, useState, useRef } from "react";
import { useReactToPrint } from "react-to-print";
import axios from "axios";

const KartuAntrian = () => {
  const navigate = useNavigate();
  const [pasien, setPasien] = useState([]);
  const { id } = useParams();

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "kartu-antrian",
    onAfterPrint: () => alert("Kartu Berhasil di Print"),
  });
  // useEffect(() => {
  //   getPasienById();
  // }, []);
  // const getPasienById = async () => {

  //   setPasien(response.data);
  // };

  (async () => {
    if (id !== undefined) {
      const { data } = await axios.get(`http://localhost:5100/pasien/${id}`);
      setPasien(data);
      console.log(data);
    }
  })();

  return (
    <div className="pageAntrian">
      <Container className="cont9 text-center">
        <p className="t9 bold">KARTU ANTRIAN</p>
        <Card className="cardAntrian card" ref={componentRef}>
          <Card.Title className="cardTA">
            <h4>NOMOR ANTRIAN</h4>
          </Card.Title>

          <Card.Body style={{ marginTop: "0px" }}>
            <Row className="content9 mb-3">
              <p className="mt-2 mb-2 idl">
                <strong>UM{pasien.id}</strong>
                <span>
                  <p className="idl1">Kamis</p>
                </span>
              </p>
            </Row>
            <Row className="content9">
              <p className="mt-1 mb-1 idl2">
                Dokter
                <span>
                  <p className="idl3">
                    {pasien.dokter}
                    {/* {pasien.dokter} */}
                  </p>
                </span>
              </p>
            </Row>

            <Row>
              <Col className="content8">
                <p className="mt-3 idl2">
                  Poli Tujuan
                  <span>
                    <p className="idl4">Poli {pasien.poli}</p>
                  </span>
                </p>
              </Col>

              <Col className="content8">
                <p className="mt-3 idl2">
                  Nama
                  <span>
                    <p className="idl4">{pasien.name}</p>
                  </span>
                </p>
              </Col>
            </Row>

            <Row>
              <Col className="content8">
                <p className="mt-3 idl2">
                  No. rekam Medis
                  <span>
                    <p className="idl4">PS.123458888</p>
                  </span>
                </p>
              </Col>
              <Col className="content8">
                <p className="mt-3 idl2">
                  Waktu
                  <span>
                    <p className="idl4">{pasien.jam}</p>
                  </span>
                </p>
              </Col>
            </Row>
          </Card.Body>
        </Card>

        <Row className="text-center mt-2">
          <Col sm={6}>
            <button
              className="btn-home"
              onClick={() => navigate(ADMIN_DASHBOARD)}
            >
              Home
            </button>
          </Col>
          <Col sm={6}>
            <button className="btn-print" onClick={handlePrint}>
              Print
            </button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default KartuAntrian;
