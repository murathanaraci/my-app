import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import HeroSection from "../../../components/HeroSection";

export default function İletişim() {
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
        <h1>İletişim</h1>
        <HeroSection />
      </main>
      <Footer />
    </>
  );
}
