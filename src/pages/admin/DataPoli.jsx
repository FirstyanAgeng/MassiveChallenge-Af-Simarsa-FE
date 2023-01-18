import { Container, Card, Row, Col, Button, Nav,Table, ToggleButton, ToggleButtonGroup, Navbar} from "react-bootstrap";
import AdminLayout from "../../components/AdminLayout";
import "../../styles/admin.css";
import { ADMIN_DASHBOARD, DATA_POLIKLINIK} from "../../router";
import { AiFillHome, AiOutlineRight } from "react-icons/ai";
import {FaSort} from "react-icons/fa";
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";



const DataPoli = () => {
  const [pasien, setPasien] = useState([]);

  useEffect(() => {
      getPasien();
    }, []);

  const getPasien = async () => {
    const response = await axios.get("http://localhost:5100/pasien");
    setPasien(response.data);
  };

  const deletePasien = async (id) => {
    try {
      await axios.delete(`http://localhost:5100/pasien/${id}`);
      getPasien();
    } catch (error) {
      console.log(error);
    }
  };  

    return (
        <AdminLayout>
            <div className="dataPoli">
            <Container className="container-nav-home mb-3">
            <Row>

                <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <AiFillHome size="25px" className="ho"/>
                    <Nav.Link href={ADMIN_DASHBOARD}>Home</Nav.Link><AiOutlineRight className="ho1"/>
                    <Nav.Link href={DATA_POLIKLINIK}>Data Poliklinik</Nav.Link><AiOutlineRight className="ho1"/>
                    <Nav.Link style={{color: 'black'}}>Data Poli</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
            </Row>
        </Container>

            <Container className="container-dataDokter">
                <Row>
                    <Card className="CardDataDokter">
                    <Card.Body>
                    <Row className="mb-4">
                        <Col>
                        <Card.Title className="card-title pl-4">
                            <h4>Data Poli Paru</h4>
                        </Card.Title>
                        </Col>
                    </Row>

                    <Container className="container-fluid text-center mb-5">
                    <Table bordered responsive>
                    <thead className="table-light">
                      <tr>
                        <th>
                          Status
                          <FaSort />
                        </th>
                        <th>Antrian</th>
                        <th>Nama Lengkap</th>
                        <th>Jadwal</th>
                        <th>Aksi</th>
                      </tr>
                    </thead>
                    <tbody>
                    {pasien.map((pasien) => (
                <tr key={pasien.id}>
                <th><p className="sed">Sedang diproses</p></th>
                <td>UM0{pasien.id-5}</td>
                <td>{pasien.name}</td>  
                <td>{pasien.jadwal}</td>
                <td className="ad">
                  <Button
                  // onClick={() => navigate(DATA_PASIEN)} 

                  className="sed sed1">
                  <Link
                  to={`/data-pasien/${pasien.id}`}
                  className="btn-dataDokter"
                  >
                  Lihat
                  </Link>
                  </Button>
                  <Button
                    onClick={() => deletePasien(pasien.id)}
                    className="sed sed2" variant="danger"                  >
                    Hapus
                  </Button>
                </td>
              </tr>
            ))}
                    </tbody>
                  </Table>

                  <div class="d-flex justify-content-end">
                    <BsFillArrowLeftCircleFill size="35px" className="kir" />
                    <ToggleButtonGroup
                      type="radio"
                      name="options"
                      className="left flex-row mb-3 ms-1"
                    >
                      <ToggleButton id="tbg-radio-1" className="clr">
                        1
                      </ToggleButton>
                      <ToggleButton id="tbg-radio-2" className="wt">
                        /
                      </ToggleButton>
                      <ToggleButton id="tbg-radio-3" className="clr">
                        2
                      </ToggleButton>
                    </ToggleButtonGroup>
                    <BsFillArrowRightCircleFill size="35px" className="kan" />
                  </div>
                </Container>
              </Card.Body>
            </Card>
          </Row>
        </Container>
      </div>
    </AdminLayout>
  );
};

export default DataPoli;
