import React from "react";

function Footer() {
  return (
    <footer>
      <a
        href="https://www.linkedin.com/in/josie-franklin-05b378235/"
        target="blank"
      >
        <img
          className="icon"
          src={require("../../assets/images/linkedin-icon.png")}
          alt="LinkedIn icon"
        ></img>
      </a>
      <a href="https://github.com/josie-franklin" target="blank">
        <img
          className="icon"
          src={require("../../assets/images/github.png")}
          alt="Github icon"
        ></img>
      </a>
      <a href="https://stackoverflow.com/users/19913846/josie-franklin" target="blank">
        <img
          className="icon"
          src={require("../../assets/images/stack-overflow.png")}
          alt="Another icon"
        ></img>
      </a>
    </footer>
  );
}

export default Footer;
