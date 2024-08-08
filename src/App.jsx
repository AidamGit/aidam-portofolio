import { useState } from 'react'
import NavBar from './components/NavBar'
import Home from './components/Home'
import About from './components/About'
import Portofolio from './components/Portofolio'
// import Experience from './components/Experience' unused for now
import Contact from './components/Contact'

function App() {
  return (
      <div>
      <NavBar />
      <Home />
      <About />
      <Portofolio />
      <Contact />
      </div>
  )
}

export default App
