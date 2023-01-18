import { Container, Card, Row, Col } from "react-bootstrap";
import "../../styles/admin.css";
import { useNavigate } from "react-router-dom";
import { ADMIN_DASHBOARD} from "../../router";
// import { saveAs } from 'file-saver';
import { useEffect, useState, useRef } from "react";
import axios from "axios";
import { useReactToPrint } from "react-to-print";



const KartuAntrian = () =>{
  const navigate = useNavigate();
  const [pasien, setPasien] = useState([]);

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content:() => componentRef.current,
    documentTitle: 'kartu-antrian',
    onAfterPrint: () => alert("Print succes"),
    
  })

  useEffect(() => {
    getPasienById();
  }, []);
  const getPasienById = async () => {
    const response = await axios.get("http://localhost:5100/pasien/7");
    setPasien(response.data);
  };

    return(
        <div className="kartuAntrian pageAntrian"
        >
            <Container className="cont9 text-center">
          <div className="cont9 text-center"
                  ref={componentRef}
          >
            <p className="t9 bold">
                KARTU ANTRIAN
            </p>
            <Card className="cardAntrian card">
            <Card.Title className="cardTA">
                <h4>No Antrian</h4>
            </Card.Title>
                
            <Card.Body style={{marginTop:"0px"}}>
                <Row className="content9 mb-3">
                <p className="mt-2 mb-2 idl">
                <strong>UM0</strong>
                <span>
                  <p className="idl1">
                    Kamis
                  </p>
                </span>
              </p>
                </Row>
                <Row className="content9">
                <p className="mt-1 mb-1 idl2">
                Dokter
                <span>
                  <p className="idl3">
                dr. Wahyu Mustiadi, Sp. P. M.Kes 
              {/* {pasien.dokter} */}
                  </p>
                </span>
              </p>
                </Row>

                <Row>
                  <Col sm={6}l className="content8">
                  <p className="mt-3 idl2">
                Poli Tujuan
                <span>
                  <p className="idl4">
                POLI PARU
                  </p>
                </span>
              </p>
                  </Col>

                  <Col sm={6}l className="content8">
                  <p className="mt-3 idl2">
                Nama
                <span>
                  <p className="idl4">
                Tengku Mahmudi
                  </p>
                </span>
              </p>
                  </Col>
                </Row>

                <Row>
                  <Col sm={6}l className="content8">
                  <p className="mt-3 idl2">
                No. rekam Medis
                <span>
                  <p className="idl4">
                  PS.123458888
                  </p>
                </span>
              </p>
                  </Col>

                  <Col sm={6}l className="content8">
                  <p className="mt-3 idl2">
                Waktu
                <span>
                  <p className="idl4">
                  08:00-11:00
                  </p>
                </span>
              </p>
                  </Col>
                </Row>
            </Card.Body>
            </Card>

          </div>

            <Row className="text-center mt-2">
              <Col sm={6}>
                <button className="btn btn9" onClick={() => navigate(ADMIN_DASHBOARD)}
                >Home</button>
              </Col>
              <Col sm={6}>
                <button className="btn btn7"
                onClick={handlePrint}
                >Print</button>
              </Col>
            </Row>
            </Container>
        </div>
    );
};

export default KartuAntrian;