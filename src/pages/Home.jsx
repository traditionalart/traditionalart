import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./Home.css";
import OpeningVideo from "../assets/graphics/home/opener.webm"; // adjust path

import Collapsible from "../components/collapsible";
import { EffectFade, Navigation, Pagination, Autoplay } from "swiper/modules";
import Title from "../components/title";
import Logo from "../assets/graphics/home/Banner.svg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Home() {
  //const images = ["./slideshow/img1", "./slideshow/img2", "./slideshow/img3"]ddfdfd;

  return (
    <div id="home-page" className="page">
      <div className="fs-video-container">
        <video
          className="fs-video-container__video"
          autoPlay
          loop
          muted
          playsInline
          src={OpeningVideo}
        />
        <div className="fs-video-container__overlay" />
        <div className="fs-video-container__logo-wrapper">
          <img src={Logo} alt="Logo" className="fs-video-container__logo" />
          <div className="fs-video-container__subtitle">
            בית הספר לאומנויות לחימה
          </div>
        </div>
      </div>

      <div className="mycard padded">
        <header className="card-info centered">נאנקינג טאי' צי'</header>

        <Swiper
          effect={"fade"}
          speed={1200}
          loop={true}
          autoplay={{ delay: 3000 }}
          modules={[EffectFade, Autoplay]}
          className="card-graphic home-swiper"
        >
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
