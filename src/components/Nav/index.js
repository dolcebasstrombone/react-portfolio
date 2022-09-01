import React from "react";

function Nav(props) {
  const {
    aboutSelected,
    setAboutSelected,
    workSelected,
    setWorkSelected,
    contactSelected,
    setContactSelected,
  } = props;
  return (
    <nav>
      <ul>
        <li className={`${aboutSelected && "nav-focus"}`}>
          <a
            href="#about"
            onClick={() => {
              setAboutSelected(true);
              setWorkSelected(false);
              setContactSelected(false);
            }}
          >
            About Me
          </a>
        </li>
        <li className={`${workSelected && "nav-focus"}`}>
          <a
            href="#work"
            onClick={() => {
              setAboutSelected(false);
              setWorkSelected(true);
              setContactSelected(false);
            }}
          >
            My Work
          </a>
        </li>
        <li className={`${contactSelected && "navfocus"}`}>
          <a
            href="#contact"
            onClick={() => {
              setAboutSelected(false);
              setWorkSelected(false);
              setContactSelected(true);
            }}
          >
            Contact Me
          </a>
        </li>
        <li>
          <p>Resume</p>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
