import styles from "./HeroSection.module.css";

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}>
        <h1>Yangın Söndürme Sistemlerinde Uzman</h1>
        <p>Profesyonel çözümler için hemen bizimle iletişime geçin.</p>
        <link href="/iletisim" className={styles.cta}>
          Bize Ulaşın
        </link>
      </div>
    </section>
  );
}
