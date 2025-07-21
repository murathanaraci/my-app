import styles from "./ProductPreview.module.css";
import Link from "next/link";

export default function ProductPreview() {
  return (
    <section className={styles.products}>
      <h2>Ürünlerimiz</h2>
      <div className={styles.grid}>
        <div className={styles.card}>
          <img src="/1.jpg" alt="Yangın Tüpü" width={200} />
          <div>Yangın Tüpü</div>
        </div>
        <div className={styles.card}>
          <img src="/2.jpg" alt="Yangın Dolabı" width={200} />
          <div>Yangın Dolabı</div>
        </div>
        <div className={styles.card}>
          <img src="/3.jpg" alt="Gazlı Söndürme" width={200} />
          <div>Gazlı Söndürme</div>
        </div>
      </div>
      <Link href="/urunler" className={styles.more}>
        Tüm Ürünler
      </Link>
    </section>
  );
}
