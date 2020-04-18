import React from "react";
import Header from "../components/header";
import AboutMe from "../components/aboutme";
import Portfolio from "../components/portfolio";
import Contact from "../components/contact";

function Home() {
  return (
    <div>
      <Header />
      <AboutMe />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default Home;
