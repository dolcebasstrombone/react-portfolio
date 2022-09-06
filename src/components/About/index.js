import React from "react";

function About() {
  return (
    <section className="media-row">
      <img
        className="headshot"
        src={require("../../assets/images/josie-headshot.jpg")}
        alt="Josie's professional headshot"
      ></img>
      <div className="about-container">
        <h2 className="moon-flower">About Josie</h2>
        <p>
          I am certified a full stack developer with a background in education and management.
          I work with a variety of technologies including HTML, CSS,
          JavaScript, MySql, and MongoDB to create and maintain full-stack web
          applications. My time dealing with art has given me
          an eye for design, color, and composition, and my previous job experience
          has proven my client-facing skills and abilities to handle fast-paced
          environents. I look forward to working with you!
        </p>
      </div>
    </section>
  );
}

export default About;
