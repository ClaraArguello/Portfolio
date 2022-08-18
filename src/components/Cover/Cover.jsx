import React from "react";
import s from "./Cover.module.css";
import coverVideo from "../../media/coverVideo.mp4";

const Cover = () => {
  return (
    <div className={s.coverContainer}>
      <video className={s.video} src={coverVideo} autoPlay loop muted />
      <h1>Clara Argüello</h1>
      <p>Frontend Developer</p>
    </div>
  );
};

export default Cover;
