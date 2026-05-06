import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About';
import Service from './components/Service';
import Skill from './components/Skill';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Projects from './components/Projects';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// const {createProxyMiddleware} = require('http-proxy-middleware');
import Error from './components/error';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<Home />}/> 
          <Route exact path="/About" element={<About />} /> 
          <Route exact path="/Service" element={<Service/>} />
          <Route exact path="/Skill" element={<Skill />} />
          <Route exact path="/Projects" element={<Projects />} />
          <Route exact path="/Contact" element={<Contact/>} />
          <Route exact path="*" element={<Error/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App 


