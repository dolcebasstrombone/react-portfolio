import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Work from "./components/Work/index.js";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <main>
        <About />
        <Work />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
