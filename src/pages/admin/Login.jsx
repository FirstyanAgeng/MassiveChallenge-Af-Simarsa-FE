import { Container, Card, Form} from "react-bootstrap";
import {React, useState, } from "react";
import axios  from "axios";
import { useHistory } from "react-router-use-history";

import Logo1 from "../../assets/images/logo1.png";

const Login = () => {
  const [idAdmin, setIdAdmin] = useState("")
  const [password, setPassword] = useState("")
  const [msg, setMsg] = useState('');
  const history = useHistory();

  const Auth = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5100/login',{
        idAdmin: idAdmin,
        password: password
      });
      history.push("/dashboard")
    } catch (error) {
      if (error.response) {
          setMsg(error.response.data.msg)
      }
    }
  }

  return (
    <>
      <section className="login">
        <Container style={{ width: "500px" }} className="mt-3 p-5">
          <Card>
            <Card.Img variant="top" src={Logo1} />
            <Card.Body>
              <h3 className="log">LOGIN</h3>
              <Form onSubmit={ Auth }>
              <p className="text-center">{msg}</p>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label className="hdua">ID</Form.Label>
                  <Form.Control type="number" placeholder="Masukkan ID kamu" 
                  required
                  value={idAdmin}
                  onChange={(e)=> setIdAdmin(e.target.value)}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label className="hdua">Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Masukkan Password"
                    required
                    value={password}
                    onChange={(e)=> setPassword(e.target.value)}
                  />
                </Form.Group>
                <div className="d-grid gap-2">
                  <button
                    className="mt-4 w-100 btn btn-primary"
                  >MASUK
                  </button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Container>
      </section>
    </>
  );
};

export default Login;
