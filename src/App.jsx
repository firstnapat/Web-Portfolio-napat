import React from "react"
import NavBar from "./components/navbar/Navbar"
import Home from "./components/home/Home"
import About from "./components/about/About"
import Skills from "./components/skills/Skills"
import Project from "./components/project/Project"
import Contact from "./components/contact/Contact"
function App() {
  return (
    <div>
      <div className="">
        <NavBar />
      </div>
      <div className="">
        <Home />
      </div>
      <div className="">
        <About />
      </div>
      <div className="">
        <Skills />
      </div>
      <div className="">
        <Project />
      </div>
      <div className="">
        <Contact />
      </div>

    </div>
  )
}

export default App
