import styles from "./Partners.css";
import Link from "next/link";

export default function Partners() {
  return (
    <section className={styles.Partners}>
      <h2>Çözüm ortaklarımız</h2>
      <div className={styles.grid}>
        <Link href="/urunler/alarm-sistemleri">
          <div className={styles.card}>
            <img src="/Alarm.jpg" alt="Alarm Sistemleri" width={200} />
            <div>Alarm Sistemleri</div>
          </div>
        </Link>
        <Link href="/urunler/duman-dedektorleri">
          <div className={styles.card}>
            <img src="/Dedektor.jpg" alt="Duman Dedektörleri" width={200} />
            <div>Duman Dedektörleri</div>
          </div>
        </Link>
        <Link href="/urunler/yangin-sondurme-tupleri">
          <div className={styles.card}>
            <img src="/1.jpg" alt="Yangın Tüpü" width={200} />
            <div>Yangın Söndürme Tüpleri</div>
          </div>
        </Link>
        <Link href="/urunler/hizmetlerimiz">
          <div className={styles.card}>
            <img src="/hizmetlerimiz.png" alt="Hizmetlerimiz" width={200} />
            <div>Hizmetlerimiz</div>
          </div>
        </Link>
        <Link href="/urunler/pompalar">
          <div className={styles.card}>
            <img src="/pompalar.jpg" alt="Pompalar" width={200} />
            <div>Pompalar</div>
          </div>
        </Link>
      </div>
      <Link href="/urunler" className={styles.more}>
        Tüm Ürünler
      </Link>
    </section>
  );
}
