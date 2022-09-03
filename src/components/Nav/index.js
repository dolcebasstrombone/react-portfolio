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
        <li>
          <a
            className={`moon-flower ${aboutSelected && "nav-focus"}`}
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
        <li>
          <a
            className={`moon-flower ${workSelected && "nav-focus"}`}
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
        <li>
          <a
            className={`moon-flower ${contactSelected && "navfocus"}`}
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
          <a className="moon-flower" href="/">Resume</a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
