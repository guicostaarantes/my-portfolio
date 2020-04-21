import React from "react";
import Start from "../components/start";
import AboutMe from "../components/aboutme";
import Projects from "../components/projects";
import Contact from "../components/contact";

function Home() {
  return (
    <div>
      <Start />
      <AboutMe />
      <Projects />
      <Contact />
    </div>
  );
}

export default Home;
