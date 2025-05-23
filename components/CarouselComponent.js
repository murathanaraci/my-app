"use client";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";

export default function CarouselComponent() {
  return (
    <div style={{ maxWidth: "800px", margin: "0 auto" }}>
      <Carousel autoPlay infiniteLoop showThumbs={false}>
        <div>
          <Image src="/logo.jpg" alt="Slide 1" width={800} height={400} />
          <p className="legend">Tuğsan Logo</p>
        </div>
        <div>
          <img src="1.jpg" alt="Slide 2" />
          <p className="legend">İkinci Görsel</p>
        </div>
        <div>
          <img src="2.jpg" alt="Slide 3" />
          <p className="legend">Üçüncü Görsel</p>
        </div>
        <div>
          <img src="3.jpg" alt="Slide 3" />
          <p className="legend">Üçüncü Görsel</p>
        </div>
        <div>
          <img src="4.jpg" alt="Slide 3" />
          <p className="legend">Üçüncü Görsel</p>
        </div>
        <div>
          <img src="5.jpg" alt="Slide 3" />
          <p className="legend">Üçüncü Görsel</p>
        </div>
      </Carousel>
    </div>
  );
}
