import styles from "./ContactBanner.module.css";
import Link from "next/link";

export default function ContactBanner() {
  return (
    <section className={styles.banner}>
      <h2>Profesyonel destek almak ister misiniz?</h2>
      <Link href="/iletisim" className={styles.button}>
        İletişime Geç
      </Link>
    </section>
  );
}
