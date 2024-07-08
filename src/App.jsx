import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css'
import { BrowserRouter, Routes, Route, useLocation,} from 'react-router-dom';
import SidebarNavigation from './components/SidebarNavigation';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Aboutme from './components/Aboutme';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Contactme from './components/Contactme';
import { AnimatePresence } from 'framer-motion';
import Nav from './components/Nav';
import './components/fonts/Outfit-Bold.ttf'
import './components/fonts/Outfit-Medium.ttf'
import './components/fonts/Outfit-Regular.ttf'
function App(){
  const location =useLocation();
  return (
    <div className='container-fluid height-90 height-lg-100 bg-b overflow-hidden'>
    {/* <Navbar/> */}
    <Nav/>
      <div className='row '>
          <SidebarNavigation/>
          <AnimatePresence mode='wait'>
            <Routes location={location} key={location.pathname}>
              <Route exact path='/' element={<Home/>} />
              <Route path='/Aboutme' element={<Aboutme/>} />
              <Route path='/Services' element={<Services/>} />
              <Route path='/Gallery' element={<Gallery/>} />
              <Route path='/Contactme' element={<Contactme/>} />
            </Routes>
          </AnimatePresence>
      </div>
    </div>
  )
}

export default App
