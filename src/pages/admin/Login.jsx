import { Container, Card, Form, Button } from "react-bootstrap";
// import { useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
import {React, useState, } from "react";
// import { LoginUser, reset } from "../../features/authSlice";
import axios  from "axios";
import Logo1 from "../../assets/images/logo1.png";
import "../../styles/admin.css";

// const axios = require("axios");

const Login = () => {
  // const navigate = useNavigate();
  
  const [id, setId] = useState("")
  const [pass, setPass] = useState("")
  const [msg, setMsg] = useState('');
  // const dispatch = useDispatch();
  // const navigate = useNavigate();
  // const { user, isError, isSuccess, isLoading, message } = useSelector(
  //   (state) => state.auth
  // );

  // useEffect(() => {
  //   if (user || isSuccess) {
  //     navigate("/dashboard");
  //   }
  //   dispatch(reset());
  // }, [user, isSuccess, dispatch, navigate]);

  // const Auth = (e) => {
  //   e.preventDefault();
  //   dispatch(LoginUser({ id, pass }));
  // };

  const handleID = (inputNIP) =>{
    setId(inputNIP)
  }

  const handlePass = (inputPass) =>{
    setPass(inputPass)
  }
  
  const userLogin = async (e) =>{
    console.log('Ready')
    console.log('ID: ', id)
    console.log('Password: ', pass) 
    const requestingData = {
      nip:id, 
      password: pass 
    }
    e.preventDefault();
    try {
      await axios.post('http://localhost:3200/users/login', {
        requestingData
      })
      .then((result)=>{
        localStorage.setItem("id", result.data.id)
        localStorage.setItem("nama", result.data.nama)
        window.location.replace("/dashboard")
        
      }) 
    } catch (error) {
      if (error.res) {
       setMsg(error.res.data.msg) 
      }
    }
    // axios({
    //   method: 'post',
    //   url: 'http://localhost:3200/users/login',
    //   data: requestingData
    // })
    // .then((result)=>{
    //   localStorage.setItem("id", result.data.id)
    //   localStorage.setItem("nama", result.data.nama)
    //   window.location.replace("/dashboard")
    // })
  }
  

  return (
    <>
      <section className="login">
        <Container style={{ width: "500px" }} className="mt-3 p-5">
          <Card>
            <Card.Img variant="top" src={Logo1} />
            <Card.Body>
              <h3 className="log">LOGIN</h3>
              <p>{msg}</p>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label className="hdua">ID</Form.Label>
                  <Form.Control type="email" placeholder="Masukkan ID kamu" required
                  onChange={(event)=> handleID(event.target.value)}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label className="hdua">Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Masukkan Password"
                    required
                    onChange={(event)=> handlePass(event.target.value)}
                  />
                </Form.Group>
                <div className="d-grid gap-2">
                  <Button
                    variant="primary"
                    size="lg"
                    // onClick={() => navigate(ADMIN_DASHBOARD)}
                    onClick={() => userLogin()}
                  >Masuk
                  </Button>
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
