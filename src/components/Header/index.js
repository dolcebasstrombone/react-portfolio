import React from "react";
import Nav from "../Nav";

function Header(props) {
  const {
    aboutSelected,
    setAboutSelected,
    workSelected,
    setWorkSelected,
    contactSelected,
    setContactSelected,
  } = props;
  return (
      <header className="hero">
        <div className="hero-content media-row frosted">
          <h1 className="moon-flower">Josie Franklin</h1>
          <Nav
            aboutSelected={aboutSelected}
            setAboutSelected={setAboutSelected}
            workSelected={workSelected}
            setWorkSelected={setWorkSelected}
            contactSelected={contactSelected}
            setContactSelected={setContactSelected}
          ></Nav>
        </div>
      </header>
  );
}

export default Header;
