import styles from "./ProductPreview2.module.css";
import Link from "next/link";

export default function ProductPreview2() {
  return (
    <section className={styles.product2}>
      <h1>TEDARİKÇİLERİMİZ</h1>
      <div className={styles.grid}>
        <Link href="https://www.astreaonline.com/kategori/su-pompasi">
          <div className={styles.card}>
            <img src="asterapompa.webp" alt="ASTERA POMPA" width={200} />
            <div>ASTERA POMPA</div>
          </div>
        </Link>
        <Link href="https://kaizenguvenlik.com.tr/">
          <div className={styles.card}>
            <img
              src="/logo_kaizen.png"
              alt="KAİZEN GÜVENLİK TEKNOLOJİLERİ"
              width={200}
            />
            <div>KAİZEN GÜVENLİK TEKNOLOJİLERİ</div>
          </div>
        </Link>
        <Link href="/urunler/yangin-sondurme-tupleri">
          <div className={styles.card}>
            <img
              src="/logo_kaizen.png"
              alt="WATER POMPA TEKNOLOJİLERİ"
              width={200}
            />
            <div>WATER POMPA TEKNOLOJİLERİ</div>
          </div>
        </Link>
      </div>
    </section>
  );
}
