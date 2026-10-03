import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../components/Home'
import About from './about'
import Projects from './projct'
import Education from './education'
import Services from './services'
import Contact from './Contact'

const MainRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/education" element={<Education />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  )
}

export default MainRouter