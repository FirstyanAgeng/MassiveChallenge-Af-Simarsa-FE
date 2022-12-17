import { Container, Card, Form, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";

import Telp from "../assets/images/logo-telp.png";
import Map from "../assets/images/logo-map.png";
import Message from "../assets/images/logo-sms.png";
import Jam from "../assets/images/logo-jam.png";
import deskDok from "../assets/images/deskdok.png";
import Layout from "../components/Layout";

const HubungiKami = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subjek, setSubjek] = useState("");
  const [pesan, setPesan] = useState("");

  const saran = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5100/saran", {
        name, email, subjek, pesan
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <div className="hubungi">
        <Card className="text-dark">
          <Card.Img src={deskDok} alt="Card image" />
          <Card.ImgOverlay className="background-filter">
            <Container>
              <h1>Hubungi Kami</h1>
            </Container>
          </Card.ImgOverlay>
        </Card>
        <Container>
          <div className="mt-5 text-center">
            {/* Google Maps */}
            <iframe
              title="This is a unique title"
              style={{ width: "100%", height: "400px" }}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.326885766876!2d109.2513220147758!3d-7.429031694640239!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e655e9a29d91be7%3A0x30e5e61e7afd3ed2!2sRumah%20Sakit%20Umum%20Bunda!5e0!3m2!1sid!2sid!4v1671007682338!5m2!1sid!2sid"
            ></iframe>
          </div>
          <div className="my-5">
            <Row>
              {/* 1 */}
              <Col xs="5" className="me-5">
                <h2>Saran</h2>
                <Form className="form" onSubmit={saran}>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Nama</Form.Label>
                    <Form.Control 
                    type="text" 
                    placeholder="masukkan nama"
                    value={name} 
                    onChange={(e) => setName(e.target.value)}
                    required
                    />
                  </Form.Group>

                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Email</Form.Label>
                    <Form.Control 
                    type="email" 
                    placeholder="masukkan email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Subjek</Form.Label>
                    <Form.Control 
                    type="text" 
                    placeholder="masukkan subjek"
                    value={subjek}
                    onChange={(e) => setSubjek(e.target.value)}
                    required
                    />
                  </Form.Group>

                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                  >
                    <Form.Label>Pesan</Form.Label>
                    <Form.Control 
                    as="textarea" rows={3} 
                    placeholder="masukkan pesan anda"
                    value={pesan}
                    onChange={(e) => setPesan(e.target.value)}
                    />
                  </Form.Group>
                <button class="tombol-kirim" type="submit">SUBMIT</button>
                </Form>
              </Col>
              {/* 2 */}
              <Col xs="3">
                <h2>Hubungi Kami</h2>
                <Card className="card-kami2 mb-3 ">
                  <Card.Body>
                    <img src={Telp} alt="" className="logo-layanan mb-2 " />
                    <Card.Title>GAWAT DARURAT</Card.Title>
                    <Card.Text>
                      <p>(237) 681-812-255</p>
                      <p>(237) 666-331-89</p>
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card className="card-kami2 ">
                  <Card.Body>
                    <img src={Message} alt="" className="logo-layanan mb-2 " />
                    <Card.Title>EMAIL KAMI</Card.Title>
                    <Card.Text>
                      <p>
                        rsu.bunda@gmail.com / bundacare@rsb-pwt.com /
                        mgm@rsb-pwt.com
                      </p>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              {/* 3 */}
              <Col xs="2">
                <Card className="card-kami mb-3" id="card">
                  <Card.Body>
                    <img src={Map} alt="" className="logo-layanan mb-2 " />
                    <Card.Title>LOKASI</Card.Title>
                    <Card.Text>
                      <p>
                        Jl. Pramuka No.249, Pertabatan, Purwokerto Kidul, Kec.
                        Purwokerto
                      </p>
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card className="card-kami2">
                  <Card.Body>
                    <img src={Jam} alt="" className="logo-layanan mb-2 " />
                    <Card.Title>JAM KERJA</Card.Title>
                    <Card.Text>
                      <p>Mon-Sat 09:00-20:00</p>
                      <p>Sunday Emergency only</p>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </Layout>
  );
};

export default HubungiKami;
