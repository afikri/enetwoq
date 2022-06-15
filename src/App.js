
import React from 'react';
import { Routes, Route } from "react-router-dom"
import { Footer, MyScrollToTop, Navbar, Whatsapp } from './components/';

import {
  Events,
  Home,
  JoinUs,
  Services,
} from './pages/';

import {
  PMP, PMIRMP, Prince2Foundation, Prince2Practitioner, ITIL4Foundation,
  AgileCertificatePractitioner,
  Prince2AgileFoundation,
  Prince2AgilePractitioner,
} from './pages/training'

import {
  OurValues,
  Milestones,
  OurPolicy,
  ContactUs
} from './pages/about/';

const App = () => {
  return (
    <div>
      <Navbar />
      <MyScrollToTop /> 
      <Whatsapp/>
      <Routes>
        <Route path="events" element={<Events />} />
        <Route path="/" element={<Home />} />
        <Route path="joinus" element={<JoinUs />} />
        <Route path="services" element={<Services />} />

        <Route path="project-management-professional" element={<PMP />} />
        <Route path="risk-management-professional" element={<PMIRMP />} />
        <Route path="prince2-foundation" element={<Prince2Foundation />} />
        <Route path="prince2-practitioner" element={<Prince2Practitioner />} />
        <Route path="itil-4-foundation" element={<ITIL4Foundation />} />
        <Route path="agile-certificate-practitioner" element={<AgileCertificatePractitioner />} />
        <Route path="prince2-agile-foundation" element={<Prince2AgileFoundation />} />
        <Route path="prince2-agile-practitioner" element={<Prince2AgilePractitioner />} />
        <Route path="our-values" element={<OurValues />} />
        <Route path="milestones" element={<Milestones />} />
        <Route path="our-policy" element={<OurPolicy />} />
        <Route path="contact-us" element={<ContactUs />} />

      </Routes>
      <Footer />
    </div>
  )
}

export default App