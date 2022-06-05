
import React from 'react';
import { Routes, Route } from "react-router-dom"
import { Footer, Navbar } from './components/';

import {
  Events,
  Home,
  JoinUs,
  Services,
  
  PMP,
  PMIRMP,
  Prince2Foundation,
  Prince2Practitioner,

  ITIL4Foundation,

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

        <Route path="project-management-professional" element={<PMP />} />
        <Route path="risk-management-professional" element={<PMIRMP />} />
        <Route path="prince2-foundation" element={<Prince2Foundation />} />
        <Route path="prince2-practitioner" element={<Prince2Practitioner />} />

        <Route path="itil4-foundation" element={<ITIL4Foundation />} />




      </Routes>
      <Footer />
    </div>
  )
}

export default App