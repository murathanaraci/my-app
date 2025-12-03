import styles from "./ProductPreview.module.css";
import Link from "next/link";

export default function ProductPreview() {
  return (
    <section className={styles.products}>
      <h2>Ürünlerimiz</h2>
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
      </div>
      <Link href="/urunler" className={styles.more}>
        Tüm Ürünler
      </Link>
    </section>
  );
}
