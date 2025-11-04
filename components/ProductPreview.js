import styles from "./ProductPreview.module.css";
import Link from "next/link";

export default function ProductPreview() {
  return (
    <section className={styles.products}>
      <h2>Ürünlerimiz</h2>
      <div className={styles.grid}>
        <Link href="/urunler/yanginAlarmi">
          <div className={styles.card}>
            <img src="/Alarm.jpg" alt="Yangın Alarmı" width={200} />
            <div>Yangın Alarmı</div>
          </div>
        </Link>
        <Link href="/urunler/dumanDedektoru">
          <div className={styles.card}>
            <img src="/Dedektor.jpg" alt="Duman Dedektörü" width={200} />
            <div>Duman Dedektörü</div>
          </div>
        </Link>
        <Link href="/urunler/yanginTupu">
          <div className={styles.card}>
            <img src="/1.jpg" alt="Yangın Tüpü" width={200} />
            <div>Yangın Tüpü</div>
          </div>
        </Link>
      </div>
      <Link href="/urunler" className={styles.more}>
        Tüm Ürünler
      </Link>
    </section>
  );
}
