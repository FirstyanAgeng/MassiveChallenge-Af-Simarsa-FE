import PicArtikel1 from "../assets/images/artikel1.png";
// import PicArtikel2 from "../assets/images/artikel2.png";
// import PicArtikel3 from "../assets/images/artikel3.png";
import deskDok from "../assets/images/deskdok.png";
import { Card, Container } from "react-bootstrap";
import Layout from "../components/Layout";

const DetailArtikel = () => {
  return (
    <Layout>
      <div className="artikel">
        <Card className="text-dark">
          <Card.Img src={deskDok} alt="Card image" />
          <Card.ImgOverlay className="background-filter">
            <Container>
              <h1>Artikel</h1>
            </Container>
          </Card.ImgOverlay>
        </Card>
        <div className="p-5 dokter-content">
          <Container>
            <img src={PicArtikel1} alt="" className="w-100" />
            <h2 className="text-center pt-5">Bahaya Stress pada Ibu Hamil</h2>
            <p className="bold">Penyebab stres pada ibu hamil</p>

            <p style={{ lineHeight: "25px" }}>
              {" "}
              Saat menjalani masa masa kehamilan tentunya akan banyak perubahan
              yang akan mungkin dialami oleh ibu Hamil. Hamil memang bukan
              perkara yang mudah. Itu sebabnya, ibu hamil rentan mengalami
              stres. Stres saat hamil adalah normal karena rasa khawatir ibu
              terhadap banyak hal. Namun, ibu perlu mengendalikan stres agar
              tidak memberi dampak buruk pada diri sendiri dan janin. Simak
              penjelasan seputar stres (stress) pada ibu hamil dan efeknya ini!
            </p>
            <p style={{ lineHeight: "25px" }}>
              Penyebab stres pada ibu hamil Mengutip dari Pregnancy, Birth, &
              Baby, sebagian ibu mengalami stres saat mengetahui dirinya sedang
              mengandung. Stres ini bisa terjadi karena beberapa masalah,
              seperti: mengalami kehamilan tidak terencana, pernah keguguran
              pernah mengalami bayi lahir dalam keadaan tidak bernyawa (still
              birth) mendapat kekerasan dalam keluarga, trauma, memiliki masalah
              dengan minuman beralkohol dan narkoba, masalah keuangan, masalah
              hubungan dengan pasangan, hamil saat usia remaja. Bagi sebagian
              wanita, kehamilan bisa menimbulkan serangkaian tantangan, seperti
              kesulitan keuangan atau perubahan pekerjaan. Adanya tekanan
              emosional, seperti kesedihan kehilangan anggota keluarga,
              kecemasan masa lalu, dan penyakit mental juga bisa membuat stres
              pada ibu hamil lebih bertahan lama.
            </p>
          </Container>
        </div>
      </div>
    </Layout>
  );
};

export default DetailArtikel;
