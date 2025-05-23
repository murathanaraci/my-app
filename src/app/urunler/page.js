import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";

export default function Urunler() {
  return (
    <>
      <Navbar />
      <main
        style={{
          padding: "2rem",
          backgroundColor: "#1a1a1a",
          color: "#fff",
          minHeight: "80vh",
        }}
      >
        <h1>Ürünlerimiz</h1>
        <ul>
          <li>Yangın Söndürme Tüpleri</li>
          <li>Yangın Alarm Sistemleri</li>
          <li>Otomatik Sprinkler Sistemleri</li>
          <li>Duman Dedektörleri</li>
        </ul>
      </main>
      <Footer />
    </>
  );
}
