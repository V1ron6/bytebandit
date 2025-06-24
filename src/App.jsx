import React from 'react'
import './App.css'
//components
import Nav from './component/nav.jsx';
import Intro from './component/intro.jsx';
import About from './component/about.jsx';
import Projects from './component/project.jsx';
import Skill from './component/skill.jsx';
import Contact from './component/contact.jsx';
import Last from './component/last.jsx';


function App() {

  return (
    <>
    <Nav />
    <Intro />
    <About />
    <Projects />
    <Skill />
    <Contact />
    <Last />
    </>
  )
}

export default App
