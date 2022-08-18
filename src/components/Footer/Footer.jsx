import React from "react";
import s from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={s.footer}>
      <div className={s.footerInfo}>
        <h1>Clara Argüello</h1>
        <p>Based in Córdoba, Argentina</p>
      </div>
      <div className={s.footerContact}>
        <h3>Contact me</h3>
        <p>And let's get down to work</p>
      </div>
      <div className={s.footerSNS}>
        <div className={s.design}>Design by Clara Argüello</div>
        <div className={s.snsLinks}>
          <a
            href="https://www.linkedin.com/in/claraarguello/"
            target="_blank"
            rel="noreferrer"
          >
            <i className={`fab fa-linkedin ${s.linkedin}`}></i>
          </a>
          <a
            href="https://github.com/ClaraArguello"
            target="_blank"
            rel="noreferrer"
          >
            <i className={`fab fa-github ${s.github}`}></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
