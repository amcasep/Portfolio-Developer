import { useState } from 'react'
import './App.css'
import NavBar from './Components/NavBar'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Contact from './Components/Contact'
import Toolkit from './Components/Toolkit'

import Projects from './Components/Projects'

function App() {


  return (
    <>
      <NavBar />
      <Header />
      <Projects />
      <Toolkit />
      <Contact />
      <Footer />
    </>
  )
}

export default App
