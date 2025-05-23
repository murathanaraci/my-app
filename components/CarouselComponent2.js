"use client";

import { useState, useEffect } from "react";
import styles from "./CarouselComponent2.module.css";

const slides = [
  {
    id: 1,
    image: "/logo.jpg",
    title: "Yangın Söndürme Sistemleri",
    description: "Güvenilir ve etkili çözümler.",
  },
  {
    id: 2,
    image: "/1.jpg",
    title: "Profesyonel Hizmet",
    description: "Uzman ekibimizle kaliteli hizmet.",
  },
  {
    id: 3,
    image: "/2.jpg",
    title: "Uygun Fiyatlar",
    description: "Bütçenize uygun kaliteli ürünler.",
  },
];

export default function CarouselComponent2() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.carousel}>
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`${styles.slide} ${
            index === current ? styles.active : ""
          }`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className={styles.overlay}>
            <h2>{slide.title}</h2>
            <p>{slide.description}</p>
          </div>
        </div>
      ))}
      <div className={styles.dots}>
        {slides.map((_, idx) => (
          <span
            key={idx}
            className={idx === current ? styles.dotActive : styles.dot}
            onClick={() => setCurrent(idx)}
          ></span>
        ))}
      </div>
    </div>
  );
}
