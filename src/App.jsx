import React from 'react'
import './App.css'
import './darkmode.css'
import Nav from './component/nav.jsx';
import Intro from './component/intro.jsx';
import About from './component/about.jsx';
import Projects from './component/project.jsx';
import Skill from './component/skill.jsx';
import Contact from './component/contact.jsx';
import Last from './component/last.jsx';
import ResumeButton from './component/ResumeButton.jsx';
import DarkModeToggle from './DarkModeToggle.jsx';

function App() {
  return (
    <>
      <DarkModeToggle />
      <Nav />
      <Intro />
      <About />
      <ResumeButton />
      <Projects />
      <Skill />
      <Contact />
      <Last />
    </>
  )
}

export default App