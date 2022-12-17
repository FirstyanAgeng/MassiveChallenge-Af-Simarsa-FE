import { Container, Navbar, Nav } from "react-bootstrap";
import { IoLogOutOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import "../pages/Beranda";
// import { hover } from "@testing-library/user-event/dist/hover";

import React, {useEffect, useState} from "react";
import axios from "axios";
import { useHistory } from "react-router-use-history";
import jwt_decode from "jwt-decode";

const AdminNavbar = () => {
  const [name, setName] = useState('');
  const [token, setToken] = useState('');
  const [expire, setExpire] = useState('');
  const history = useHistory();

  const Logout = async () => {
      try {
          await axios.delete('http://localhost:5100/logout');
          history.push("/");
      } catch (error) {
          console.log(error);
      }
  }

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
    <>
      <Navbar className="navbar-main" variant="dark" expand="lg">
        <Container>
          <NavLink to="/" className="navbar-brand h1Header">
            SIMARSA
          </NavLink>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Nav>
              <Navbar.Text>
                <p className="hsatu">
                  <strong>{name}</strong> - Petugas Entry
                </p>
              </Navbar.Text>
            </Nav>

            <IoLogOutOutline
              className="nav-logout"
              onClick={Logout}
              style={{ color: "white" }}
              size="27px"
            />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default AdminNavbar;
