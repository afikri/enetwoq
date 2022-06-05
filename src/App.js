
import React from 'react';
import { Routes, Route } from "react-router-dom"
import { Footer, Navbar } from './components/';
import {
  Events,
  Home,
  JoinUs,
  Services,
} from './pages/';

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="events" element={<Events />} />
        <Route path="/" element={<Home />} />
        <Route path="joinus" element={<JoinUs />} />
        <Route path="services" element={<Services />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App