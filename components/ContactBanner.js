import styles from './ContactBanner.module.css';

export default function ContactBanner() {
  return (
    <section className={styles.banner}>
      <h2>Profesyonel destek almak ister misiniz?</h2>
      <a href="/iletisim" className={styles.button}>İletişime Geç</a>
    </section>
  );
}
