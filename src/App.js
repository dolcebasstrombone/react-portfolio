import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Work from "./components/Work/index.js";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [aboutSelected, setAboutSelected] = useState(true);
  const [workSelected, setWorkSelected] = useState(false);
  const [contactSelected, setContactSelected] = useState(false);

  useEffect(() => {
    document.title = "My Portfolio";
  });

  return (
    <div>
      <Header
        aboutSelected={aboutSelected}
        setAboutSelected={setAboutSelected}
        workSelected={workSelected}
        setWorkSelected={setWorkSelected}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Header>
      <main>
        {aboutSelected && <About />}
        {workSelected && <Work />}
        {contactSelected && <Contact />}
      </main>
      <Footer />
    </div>
  );
}

export default App;
