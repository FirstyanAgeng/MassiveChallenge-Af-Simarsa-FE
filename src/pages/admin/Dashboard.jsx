import { Container, Card, Row, Col, Button } from "react-bootstrap";
import AdminLayout from "../../components/AdminLayout";
import React, {useEffect, useState} from "react";
import "../../styles/admin.css";
import { DATA_DOKTER, DATA_POLIKLINIK, DAFTAR_PASIEN_BARU, DAFTAR_PASIEN_LAMA } from "../../router";
import { useNavigate } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
import { RiShieldCrossFill } from "react-icons/ri";
import moment from "moment/moment";
import axios from "axios";
import { useHistory } from "react-router-use-history";
import jwt_decode from "jwt-decode";

import Pana from "../../assets/images/pana.png";
import Data from "../../assets/images/data.png";

const AdminHome = () => {
  const navigate = useNavigate();
  const dateTime = new Date()
  const [name, setName] = useState('');
  const [token, setToken] = useState('');
  const [expire, setExpire] = useState('');
  const history = useHistory();
  
  let arrDay= ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"]
  let day = dateTime.getDay()
  
  useEffect(() => {
    refreshToken();
},[]);

const refreshToken = async () => {
    try {
        const response = await axios.get('http://localhost:5100/token');
        setToken(response.data.accessToken);
        const decoded = jwt_decode(response.data.accessToken);
        setName(decoded.name);
        setExpire(decoded.exp);
    } catch (error) {
        if (error.response) {
            history.push("/");
        }
    }
}

  const axiosJWT = axios.create();

  axiosJWT.interceptors.request.use(async (config) => {
      const currentDate = new Date();
      if (expire * 1000 < currentDate.getTime()) {
          const response = await axios.get('http://localhost:5100/token');
          config.headers.Authorization = `Bearer ${response.data.accessToken}`;
          setToken(response.data.accessToken);
          const decoded = jwt_decode(response.data.accessToken);
          setName(decoded.name);
          setExpire(decoded.exp);
      }
      return config;
  }, (error) => {
      return Promise.reject(error);
  });

  return (
    <AdminLayout>
      <div className="adminHome">
        <Container className="head mt-3">
          <Row>
            <div className="col-md-6">
              <h1 className="titleHome">Selamat Datang {name}!</h1>
            </div>
            <div className="col-md-6">
              <p className="date">{arrDay[day]}, {moment(dateTime).format('DD/MM/YYYY HH:mm')} </p>
            </div>
          </Row>
        </Container>

        <Container className="cont">
          <Row>
            <div className="col-md-6">
              <Card className="pendaftaran">
                <Card.Body>
                  <Card.Title>
                    <h2 className="card-title">PENDAFTARAN PASIEN</h2>
                  </Card.Title>
                  <Card.Img variant="top" src={Pana} />
                  <Card.Text >
                    <p className="date-1">
                    Saat ini, {arrDay[day]}, {moment(dateTime).format('DD/MM/YYYY HH:mm')}
                    </p>
                    </Card.Text>
                    
                  <Button className="btnHome mb-3" onClick={() => navigate(DAFTAR_PASIEN_BARU)}>
                    <div className="text-btn">
                    <FaPlus size="22px" className="ta" />
                    Pendaftaran pasien baru
                    </div>
                  </Button>
                  <Button
                    className="btn1 mb-4"
                    onClick={() => navigate(DAFTAR_PASIEN_LAMA)}
                  ><div className="text-btn">
                    <RiShieldCrossFill size="23px" className="ta"/>
                    Pendaftaran pasien lama
                  </div>
                  </Button>
                </Card.Body>
              </Card>
            </div>

            <Col className="datapol-dok">
            <Row>
              <Card className="data-poliklinik mb-4">
                <Container>
                  <Row>
                    <Col>
                      <Card.Body>
                        <Card.Img src={Data} />
                      </Card.Body>
                    </Col>

                    <Col>
                      <Card.Body className="center">
                        <Card.Title className="font-datapoli">DATA POLIKLINIK</Card.Title>
                        <Button
                          variant="primary"
                          className="btnHome mb-4"
                          onClick={() => navigate(DATA_POLIKLINIK)}
                        >
                          LIHAT DATA
                        </Button>
                      </Card.Body>
                    </Col>
                  </Row>
                </Container>
              </Card>
            </Row>

            <Row>
                <Card className="data-poliklinik mt-4">
                  <Container>
                    <Row>
                      <Col>
                        <Card.Body>
                          <Card.Img src={Data} />
                        </Card.Body>
                      </Col>
                      <Col>
                        <Card.Body className="center">
                          <Card.Title className="font-datapoli">DATA DOKTER</Card.Title>
                          <Button
                            variant="primary"
                            className="btnHome btn btn-primary mb-4 text-center"
                            onClick={() => navigate(DATA_DOKTER)}
                          >
                            LIHAT DATA
                          </Button>
                        </Card.Body>
                      </Col>
                    </Row>
                  </Container>
                </Card>
            </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </AdminLayout>
  );
};

export default AdminHome;
