import { Form, Container } from "react-bootstrap";
// import { DAFTAR_BERHASIL } from "../router";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";

import Layout from "../components/Layout";

const Pendaftaran = () => {
  const navigate = useNavigate();
  const [nik, setNik] = useState("");
  const [name, setName] = useState("");
  const [telp, setTelp] = useState("");
  const [jenis_kelamin, setJenis_kelamin] = useState("Pria");
  const [poli, setPoli] = useState("Paru");
  const [dokter, setDokter] = useState("dr. Wahyu Mustiadi, Sp. P. M.Kes. (PARU)");
  const [jadwal, setJadwal] = useState("");
  const [jam, setJam] = useState("08.00 - 11.00");
  const [keluhan, setKeluhan] = useState("");  

  const savePasien = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5100/pasien", {
        name, nik, telp, jenis_kelamin, poli, dokter, jadwal, jam, keluhan
      });
      navigate("/daftar-berhasil");
    } catch (error) {
      console.log(error);
    }
  };
  
  return (
    <Layout>
      <section className="my-5">
        <Container>
            <h1>PENDAFTARAN</h1>
            <Form onSubmit={savePasien}>
          <div className="row">
              <div className="col">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label className="bold">NIK</Form.Label>
                  <Form.Control 
                  type="number" 
                  placeholder="Masukan NIK anda"
                  value={nik}
                  onChange={(e) => setNik(e.target.value)}
                  required
                  />
                  <Form.Text className="text-muted">
                    *NIK harus 10 digit
                  </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label className="bold">Nama Lengkap</Form.Label>
                  <Form.Control 
                  type="text" 
                  placeholder="Masukkan Nama lengkap"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  />
                  <Form.Text className="text-muted">
                    *Sesuai dengan KTP
                  </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label className="bold">No Hp</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Masukan no.hp anda..."
                    value={telp}
                    onChange={(e) => setTelp(e.target.value)}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label className="bold">Jenis Kelamin</Form.Label>
                  <Form.Select 
                  placeholder="masukan jenis kelamin anda"
                  value={jenis_kelamin}
                  onChange={(e) => setJenis_kelamin(e.target.value)}
                  required
                  >
                    <option value="Pria">Pria</option>
                    <option value="Wanita">Wanita</option>
                  </Form.Select>
                </Form.Group>
            </div>

            <div className="col">
              <Form.Group className="mb-3">
                <Form.Label className="bold">Poli</Form.Label>
                <Form.Select 
                placeholder="Pilih poliklinik yang akan dituju"
                value={poli}
                onChange={(e) => setPoli(e.target.value)}
                required
                >
                <option value="Paru">-- POLI PARU --</option>
                <option value="Anak">-- POLI ANAK --</option>
                <option value="Obsetri & Ginekologi">-- POLI OBSTETRI & GINEKOLOGI --</option>
                <option value="Radiologi">-- POLI RADIOLOGI --</option>
                <option value="Saraf">-- POLI SARAF --</option>
                <option value="Penyakit Dalam">-- POLI PENYAKIT DALAM --</option>
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Dokter</Form.Label>
                <Form.Select 
                placeholder="Pilih Dokter"
                value={dokter}
                onChange={(e) => setDokter(e.target.value)}
                required
                >
                  <option value="dr. Wahyu Mustiadi, Sp. P. M.Kes. (PARU)">
                  dr. Wahyu Mustiadi, Sp. P. M.Kes. (PARU)
                  </option>
                  <option value="dr. Tiara Nurlita Sari, Sp.A. (ANAK)">
                  dr. Tiara Nurlita Sari, Sp.A. (ANAK)
                  </option>
                  <option value="dr. I Made Dikky Kalsa, Sp. A.(ANAK)">
                  dr. I Made Dikky Kalsa, Sp. A.(ANAK)
                  </option>
                  <option value="dr. Sutrisno, M.Kes, Sp. OG, Subsp.ONK.(KANDUNGAN)">
                  dr. Sutrisno, M.Kes, Sp. OG, Subsp.ONK.(KANDUNGAN)
                  </option>
                  <option value="dr. Budi Irawan, SP.OG. (KANDUNGAN)">dr. Budi Irawan, SP.OG. (KANDUNGAN)</option>
                  <option value="dr. Anisah Amalia, Sp.Rad. (Radiologi)">
                  dr. Anisah Amalia, Sp.Rad. (Radiologi)
                  </option>
                  <option value="dr. Yohanes William Prasetyo, Sp.S. (Saraf)">
                  dr. Yohanes William Prasetyo, Sp.S. (Saraf)
                  </option>
                  <option value="dr. I Gede Arintan, Sp.PD-KGEH, M.Kom, MMR.(P.DALAM)">
                  dr. I Gede Arintan, Sp.PD-KGEH, M.Kom, MMR.(P.DALAM)
                  </option>
                  <option value="dr. Achmad Heppy Oktavianto, M.Sc, Sp.PD. (P.DALAM)">
                  dr. Achmad Heppy Oktavianto, M.Sc, Sp.PD. (P.DALAM)
                  </option>
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="bold">Jadwal</Form.Label>
                <Form.Control 
                type="date" 
                placeholder="masukan jadwal" 
                value={jadwal}
                onChange={(e) => setJadwal(e.target.value)}
                required
                />
                <Form.Text className="text-muted">
                  *Silahkan masukan jadwal
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label className="bold">Jam</Form.Label>
                <Form.Select 
                placeholder="------"
                value={jam}
                onChange={(e) => setJam(e.target.value)}
                required
                >
                <option value="08.00 - 11.00">-- 08.00 - 11.00 --</option>
                <option value="09.00 - 11.00">-- 09.00 - 11.00 --</option>
                <option value="10.00 - 11.00">-- 10.00 - 11.00 --</option>
                <option value="13.00 - 17.00">-- 13.00 - 17.00 --</option>
                <option value="14.00 - 17.00">-- 14.00 - 17.00 --</option>
                <option value="15.00 - 17.00">-- 15.00 - 17.00 --</option>
                <option value="16.00 - 17.00">-- 16.00 - 17.00 --</option>
                </Form.Select>
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label className="bold">Keluhan</Form.Label>
                <Form.Control 
                as="textarea" 
                rows={3} 
                value={keluhan}
                onChange={(e) => setKeluhan(e.target.value)}
                required
                />
                <Form.Text className="text-muted">
                  *Pastikan data sudah terisi dengan benar
                </Form.Text>
              </Form.Group>
              <button
                type="submit"
                className="tombol-submit"
                // onClick={() => navigate(DAFTAR_BERHASIL)}
              >
                KONFIRMASI
              </button>
            </div>
            
          </div>
          </Form>
        </Container>
      </section>
    </Layout>
  );
};

export default Pendaftaran;
