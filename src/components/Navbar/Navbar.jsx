import React from "react";
import s from "./Navbar.module.css";

const Navbar = ({ isScrolling }) => {
  const toTheTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <nav className={`${s.navbar} ${isScrolling > 20 ? s.scrolling : null}`}>
      <div className={s.navbarLogo} onClick={toTheTop}>
        Clara Argüello
      </div>
    </nav>
  );
};

export default Navbar;
