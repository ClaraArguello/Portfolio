import React from "react";
import VideogameApp from "../../media/VideogameApp.jpg";
import BookStore from "../../media/BookStore.png";
import Digisolve from "../../media/Digisolve.jpg";
import s from "./Slider.module.css";

const slidesInfo = [
  {
    src: VideogameApp,
    alt: "Videogame App",
    desc: "Videogame App",
    href: "https://github.com/ClaraArguello/PI-Videogames",
  },
  {
    src: BookStore,
    alt: "BookStore",
    desc: "BookStore",
    href: "https://github.com/AM4772/Henry-PF",
  },
  {
    src: Digisolve,
    alt: "Digisolve",
    desc: "Digisolve",
    href: "https://github.com/ClaraArguello/Digisolve",
  },
];

const slides = slidesInfo.map((slide) => (
  <a
    className={s.slideContainer}
    href={slide.href}
    target="_blank"
    rel="noreferrer"
  >
    <img src={slide.src} alt={slide.alt} />
    <div className={s.slideDesc}>
      <span>{slide.desc}</span>
    </div>
  </a>
));

export default slides;
