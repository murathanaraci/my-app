import styles from "./AboutSection.module.css";

// "use client"; // Uncomment if you plan to use client-side hooks

export default function AboutSection() {
  return (
    <section className={styles.about}>
      <h2>Hakkımızda</h2>
      <p>
        Tuğsan Yangın Söndürme Sistemleri olarak sektörde yılların tecrübesiyle
        hizmet veriyoruz. Güvenilir, kaliteli ve sertifikalı ürünlerimizle
        müşteri memnuniyeti sağlıyoruz.
      </p>
      <p>
        👋 Merhaba, Yangın, sadece saniyeler içinde hem hayatları hem de
        işyerlerini yok edebilir. Ama iyi haber şu: Önlem almak çok kolay. Biz
        Tuğsan Yangın olarak, sizi ve sevdiklerinizi koruyacak 3 kritik güvenlik
        ekipmanını tek çatı altında sunuyoruz:
      </p>{" "}
      <p>
        {" "}
        🔥 Yangın Tüpü İlk müdahaleyi saniyeler içinde yapın. Doğru yerde, doğru
        tipte tüp hayat kurtarır.
      </p>{" "}
      <p>
        💨 Duman Dedektörü Yangının ilk habercisi. Uyurken bile sizi uyarır,
        zaman kazandırır.
      </p>{" "}
      <p>
        {" "}
        🚨 Yangın Alarmı Sesli ve görsel uyarılarla binayı anında tahliye edin.
        Kaosu önleyin.
      </p>
      <p>
        💡 Biz ne yapıyoruz? ✓ Binanıza özel analiz ✓ Uygun ürün seçimi ✓
        Profesyonel montaj ve devreye alma ✓ Periyodik bakım ve sertifikalı
        hizmet
      </p>
      <p>
        🔐 Güvenliği ertelemeyin. Bir yangın değil, bir önlem her şeyi
        değiştirir.
      </p>
      <p>
        📞 Hemen bizimle iletişime geçin, gelin yerinde ücretsiz keşif yapalım.
        Çünkü biz sadece ürün değil, güvenlik sunuyoruz. Saygılarımızla, Tuğsan
        Yangın Söndürme Sistemleri
      </p>
      <p>📱 05324791358</p>
    </section>
  );
}
