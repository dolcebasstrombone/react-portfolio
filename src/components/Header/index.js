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
    <header>
      <p>Header</p>
      <Nav
        aboutSelected={aboutSelected}
        setAboutSelected={setAboutSelected}
        workSelected={workSelected}
        setWorkSelected={setWorkSelected}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
    </header>
  );
}

export default Header;
