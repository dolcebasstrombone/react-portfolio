import React from "react";

function About() {
  return (
    <section>
      <img
        src={require("../../assets/images/josie-headshot.jpg")}
        alt="Josie's professional headshot"
      ></img>
      <div className="about-container">
        <h2>About Josie</h2>
        <p>
          I am a student at UNC Chapel Hill with the goal to become a full-stack
          web developer. I graduated from Appalachian State University in 2019
          with a degree in Music Education. The unprecedented events of 2020
          left me wanting a career that would challenge me and foster growth. I
          am excited to learn new skills that will be put to the test as I
          become a web developer. I look forward to working with you!
        </p>
      </div>
    </section>
  );
}

export default About;
