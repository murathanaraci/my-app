import styles from "./HeroSection.module.css";
import Link from "next/link";
import { FaWhatsapp, FaEnvelope, FaClock } from "react-icons/fa";

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}>
        <h1>Yangın Söndürme Sistemlerinde Uzman</h1>
        <p>Profesyonel çözümler için hemen bizimle iletişime geçin.</p>
        <div className={styles.contactLinks}>
          <a
            href="https://wa.me/905324791358"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            <FaWhatsapp />
            <span>+90 532 479 13 58</span>
          </a>
          <a href="mailto:info@tugsanyangin.com.tr" className={styles.link}>
            <FaEnvelope />
            <span>info@tugsanyangin.com.tr</span>
          </a>
        </div>

        <Link href="/iletisim" className={styles.cta}>
          Bize Ulaşın
        </Link>
      </div>
    </section>
  );
}
