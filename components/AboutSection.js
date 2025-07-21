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
    </section>
  );
}
