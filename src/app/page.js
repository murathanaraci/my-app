"use client";

import { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import CarouselComponent from "../../components/CarouselComponent";
import Topbar from "../../components/Topbar";
import AboutSection from "../../components/AboutSection";
import ProductPreview from "../../components/ProductPreview";
import HeroSection from "../../components/HeroSection";
import CarouselComponent2 from "../../components/CarouselComponent2";

export default function Home() {
  const [topbarVisible, setTopbarVisible] = useState(true);

  return (
    <>
      <Topbar onVisibleChange={setTopbarVisible} />
      <Navbar topbarVisible={topbarVisible} />
      <main
        style={{
          paddingTop: "2rem",
          color: "#fff",
          backgroundColor: "#1a1a1a",
          minHeight: "100vh",
        }}
      >
        <HeroSection />
        <CarouselComponent />
        <AboutSection />
        <ProductPreview />
        <CarouselComponent2 />
        <section style={{ padding: "2rem" }}>
          <h1>Hoş Geldiniz</h1>
          <p>
            Bu Tuğsan Yangın Söndürme Sistemleri web sitesinin ana sayfasıdır.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
