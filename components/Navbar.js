"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import styles from "./Navbar.module.css";

export default function Navbar({ topbarVisible }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [urunlerOpen, setUrunlerOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Update isMobile on mount and on resize
    function handleResize() {
      setIsMobile(window.innerWidth <= 768);
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Offset for topbar (height: 40px, adjust if your topbar height is different)
  const navbarStyle = topbarVisible
    ? { top: "40px", transition: "top 0.3s" }
    : { top: 0, transition: "top 0.3s" };

  return (
    <nav className={styles.navbar} style={navbarStyle}>
      <Link href="/" className={styles.logo}>
        <div className={styles.logo}>Tuğsan Yangın</div>
      </Link>

      <button
        className={styles.menuToggle}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Menüyü Aç/Kapat"
        aria-expanded={menuOpen}
      >
        ☰
      </button>

      <ul className={`${styles.navList} ${menuOpen ? styles.showMenu : ""}`}>
        <li>
          <Link href="/">Ana Sayfa</Link>
        </li>
        <li>
          <Link href="/hakkimizda">Hakkımızda</Link>
        </li>
        <li
          className={styles.dropdown}
          onMouseEnter={() => !isMobile && setUrunlerOpen(true)}
          onMouseLeave={() => !isMobile && setUrunlerOpen(false)}
        >
          <span
            onClick={() => isMobile && setUrunlerOpen(!urunlerOpen)}
            style={{ cursor: "pointer" }}
            tabIndex={0}
            aria-haspopup="true"
            aria-expanded={urunlerOpen}
          >
            Ürünler ▾
          </span>

          <ul
            className={`${styles.dropdownMenu} ${
              urunlerOpen ? styles.showDropdown : ""
            }`}
          >
            <li>
              <Link href="/urunler/alarm-sistemleri">Yangın Alarmı</Link>
            </li>
            <li>
              <Link href="/urunler/duman-dedektorleri">Duman Dedektörü</Link>
            </li>
            <li>
              <Link href="/urunler/yangin-sondurme-tupleri">Yangın Tüpü</Link>
            </li>
            <li>
              <Link href="/urunler">Tüm Ürünler</Link>
            </li>
          </ul>
        </li>

        <li>
          <Link href="/iletisim">İletişim</Link>
        </li>
      </ul>
    </nav>
  );
}
