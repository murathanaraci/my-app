"use client";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import CarouselComponent from "../../components/CarouselComponent";
import Topbar from "../../components/Topbar";
import AboutSection from "../../components/AboutSection";
import ProductPreview from "../../components/ProductPreview";
import HeroSection from "../../components/HeroSection";
import CarouselComponent2 from "../../components/CarouselComponent2";

export default function Home() {
  return (
    <>
      <main
        style={{
          paddingTop: "2rem",
          color: "#fff",
          backgroundColor: "#1a1a1a",
          minHeight: "100vh",
        }}
      >
        <Topbar />
        <Navbar />
        <AboutSection />
        <ProductPreview />

        <CarouselComponent2 />

        <main
          style={{ padding: "2rem", backgroundColor: "#1a1a1a", color: "#fff" }}
        ></main>
        <h1>Hoş Geldiniz</h1>
        <p>
          Bu Tuğsan Yangın Söndürme Sistemleri web sitesinin ana sayfasıdır.
        </p>
      </main>

      <Footer />
    </>
  );
}
