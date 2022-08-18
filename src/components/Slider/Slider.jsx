import React from "react";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import Slides from "./Slides";
import s from "./Slider.module.css";

const Slider = () => {
  return (
    <div className={s.carouselContainer}>
      <div className={s.carouselTitle}>
        <h2>My Projects</h2>
      </div>

      <Carousel
        arrows
        slidesPerPage={3}
        infinite
        animationSpeed={200}
        centered
        offset={50}
        itemWidth={400}
        slides={Slides}
        breakpoints={{
          960: {
            slidesPerPage: 1,
            arrows: false,
            itemWidth: 300,
          },
        }}
      />
    </div>
  );
};

export default Slider;
