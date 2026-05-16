import React, { useEffect, useState } from 'react'
import './App.css'
//components
import Nav from './component/nav.jsx';
import Intro from './component/intro.jsx';
import ElevatorPitch from './component/elevatorpitch.jsx';
import About from './component/about.jsx';
import Services from './component/services.jsx';
import Projects from './component/project.jsx';
import Skill from './component/skill.jsx';
import Stats from './component/stats.jsx';
import Timeline from './component/timeline.jsx';
import Contact from './component/contact.jsx';
import Last from './component/last.jsx';
import ScrollTop from './component/scrolltop.jsx';


const STORAGE_MODE_KEY = 'portfolio-theme-mode';
const STORAGE_ACCENT_KEY = 'portfolio-accent';
const DEFAULT_MODE = 'dark';
const DEFAULT_ACCENT = 'green';

function App() {
  const [mode, setMode] = useState(() => localStorage.getItem(STORAGE_MODE_KEY) || DEFAULT_MODE);
  const [accent, setAccent] = useState(() => localStorage.getItem(STORAGE_ACCENT_KEY) || DEFAULT_ACCENT);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', mode);
    localStorage.setItem(STORAGE_MODE_KEY, mode);
  }, [mode]);

  useEffect(() => {
    document.documentElement.setAttribute('data-accent', accent);
    localStorage.setItem(STORAGE_ACCENT_KEY, accent);
  }, [accent]);

  const toggleMode = () => {
    setMode((previous) => (previous === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className="app-shell">
      <Nav
        mode={mode}
        accent={accent}
        onToggleMode={toggleMode}
        onAccentChange={setAccent}
      />
      <main>
        <Intro />
        <Contact />
        <About />
        <ElevatorPitch />
        <Services />
        <Projects />
        <Skill />
        <Stats />
        <Timeline />
      </main>
      <Last />
      <ScrollTop />
    </div>
  )
}

export default App
