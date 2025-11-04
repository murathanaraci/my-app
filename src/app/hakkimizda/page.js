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
          <li>Misyonumuz</li>
          <>
            Tuğsan Yangın Söndürme Sistemleri olarak sektörde yılların
            tecrübesiyle hizmet veriyoruz. Güvenilir, kaliteli ve sertifikalı
            ürünlerimizle müşteri memnuniyeti sağlıyoruz. Yangın, sadece
            saniyeler içinde hem hayatları hem de işyerlerini yok edebilir. Ama
            iyi haber şu: Önlem almak çok kolay. Biz Tuğsan Yangın olarak, sizi
            ve sevdiklerinizi koruyacak 3 kritik güvenlik ekipmanını tek çatı
            altında sunuyoruz.
          </>

          <>
            <li> Biz ne yapıyoruz?</li>
            <li> ✓ Binanıza özel analiz</li>
            <li>✓ Uygun ürün seçimi</li>
            <li>✓ Profesyonel montaj ve devreye alma</li>
            <li>✓ Periyodik bakım ve sertifikalı hizmet</li>{" "}
            <li>
              Güvenliği ertelemeyin. Bir yangın değil, bir önlem her şeyi
              değiştirir.
            </li>
          </>
        </ul>
      </main>
      <Footer />
    </>
  );
}
