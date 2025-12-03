import Navbar from "../../../../components/Navbar";
import Footer from "../../../../components/Footer";

export default function YanginHortumu() {
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
        <h1>Soğutma Sistemleri</h1>
        {/* Ürün veya açıklama ekleyebilirsiniz */}
      </main>
      <Footer />
    </>
  );
}
