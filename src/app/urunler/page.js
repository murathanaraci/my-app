import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import ProductPreview from "../../../components/ProductPreview";
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

        <ProductPreview />
      </main>
      <Footer />
    </>
  );
}
