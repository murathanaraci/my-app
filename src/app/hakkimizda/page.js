import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";

export default function Hakkında() {
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
        <h1>Hakkında</h1>
        <ul>
          <li>Biz kimiz</li>
        </ul>
      </main>
      <Footer />
    </>
  );
}
