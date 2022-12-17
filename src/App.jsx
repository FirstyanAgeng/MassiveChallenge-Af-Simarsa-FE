import { Routes, Route } from "react-router-dom";
import HubungiKami from "./pages/HubungiKami";
import Beranda from "./pages/Beranda";
import TentangKami from "./pages/TentangKami";
import Layanan from "./pages/Layanan";
import DaftarDokter from "./pages/JadwalDokter";
import Pendaftaran from "./pages/Pendaftaran";
import AdminHome from "./pages/admin/Dashboard";
import Login from "./pages/admin/Login";
import DataDokter from "./pages/admin/DataDokter";
import DetailDokter from "./pages/admin/DetailDokter";
import DataPoliklinik from "./pages/admin/DataPoliklinik";
import DataPoli from "./pages/admin/DataPoli";
import DataPasien from "./pages/admin/DataPasien";
import RiwayatPasien from "./pages/admin/RiwayatRekamMedis"
import DaftarPasienBaru from "./pages/admin/daftarPasienBaru"
import DaftarBerhasil from "./pages/admin/daftarBerhasil"
import KartuAntrian from "./pages/admin/KartuAntrian";
import DaftarPasienLama from "./pages/admin/daftarPasienLama" 

import {
  HOME,
  ABOUT,
  DAFTAR,
  DOKTER,
  LAYANAN,
  HUBUNGI,
  ADMIN_DASHBOARD,
  LOGIN,
  DATA_DOKTER,
  DETAIL_DOKTER,
  DATA_POLIKLINIK,
  DATA_POLI,
  DATA_PASIEN,
  RIWAYAT_PASIEN,
  DAFTAR_PASIEN_BARU,
  DAFTAR_BERHASIL,
  KARTU_ANTRIAN,
  DAFTAR_PASIEN_LAMA
} from "./router";

function App() {
  return (
    <>
      <Routes>
        <Route path={HOME} element={<Beranda />} />
        <Route path={ABOUT} element={<TentangKami />} />
        <Route path={LAYANAN} element={<Layanan />} />
        <Route path={DOKTER} element={<DaftarDokter />} />
        <Route path={DAFTAR} element={<Pendaftaran />} />
        <Route path={HUBUNGI} element={<HubungiKami />} />
        <Route path={ADMIN_DASHBOARD} element={<AdminHome />} />
        <Route path={LOGIN} element={<Login />} />
        <Route path={DATA_DOKTER} element={<DataDokter />} />
        <Route path={DETAIL_DOKTER} element={<DetailDokter />} />
        <Route path={DATA_POLIKLINIK} element={<DataPoliklinik />} />
        <Route path={DATA_POLI} element={<DataPoli />} />
        <Route path={DATA_PASIEN} element={<DataPasien/>}/>
        <Route path={RIWAYAT_PASIEN} element={<RiwayatPasien/>}/>
        <Route path={DAFTAR_PASIEN_BARU} element={<DaftarPasienBaru/>}/>
        <Route path={DAFTAR_BERHASIL} element={<DaftarBerhasil/>}/>
        <Route path={KARTU_ANTRIAN} element={<KartuAntrian/>}/>
        <Route path={DAFTAR_PASIEN_LAMA} element={<DaftarPasienLama/>}/>
        <Route path="*" element={<h1>PAGE NOT FOUND</h1>}/>
      </Routes>
    </>
  );
}

export default App;
