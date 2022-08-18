import React from "react";
import s from "./About.module.css";
import image from "../../media/pictureClara.jpg";

const About = () => {
  return (
    <div className={s.aboutContainer}>
      <div className={s.aboutDesc}>
        <h3>Let me tell you something about me</h3>
        <p>
          Hello there! I'm Clara Arguello, Full Stack Web Developer.
          <br />
          <br />
          I was studying Systems Engineering at Catholic University of Cordoba
          when the pandemic hit. I needed a change in my career when I found an
          ad about Henry, and it was a one-way street. I fell in love with
          programming, and being able to create my own projects was such an
          experience. In this Bootcamp I learned a ton of skills such as
          JAVASCRIPT, REACT, REDUX, NODE.JS, EXPRESS, SEQUELIZE, SQL, SCRUM and
          POSTGRESQL among others.
          <br />
          <br />
          I love design. In my spare time I wacth tutorials about Photoshop or
          Illustrator, besides of looking constantly for fresh ideas to my next
          designs.
          <br />
          <br />I hope to one day be able to create something that will be of
          use to people all around the globe! In the meantime, I'll give my all
          to the company that decides to put their faith in me!
        </p>
      </div>
      <div className={s.aboutImg}>
        <img src={image} alt="about" />
      </div>
    </div>
  );
};

export default About;
