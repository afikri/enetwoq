import React, { useState } from 'react'
import { Link } from "react-router-dom"
import logo from '../assets/logo.png';

const Navbar = () => {
  const [toggleOpen, setToggleOpen] = useState(false)
  
  const close = () => {
    setToggleOpen(false)
  }

  const handleToggle = () => {
    setToggleOpen(!toggleOpen)
  }

  return (
    <header id="header" className="d-flex align-items-center sticky">
      <div className="container d-flex justify-content-between">
        <div id="logo">
          <h1>
            <Link to="/">
              <img src={logo} style={{ width: "180px", height: "auto" }} alt="logo" />
            </Link>
          </h1>
        </div>

        <nav className={toggleOpen ? "navbar-mobile" : "navbar"}>
          <ul>
            <li>
              <Link className="nav-link scrollto" onClick={close} to="/">Home</Link>
            </li>

            <li className="dropdown">
              <Link to="/">
                <span>Training</span>
                <i className="bi bi-chevron-down"></i>
              </Link>
              <ul>
                <li className="dropdown">
                  <Link to="/">
                    <span>Project Management</span>
                    <i className="bi bi-chevron-right"></i>
                  </Link>
                  <ul>
                    <li>
                      <Link to="project-management-professional">Project Management Professional (PMP<sup>&reg;</sup>)</Link>
                    </li>
                    <li>
                      <Link to="prince2-foundation">PRINCE2 Foundation<sup>&reg;</sup></Link>
                    </li>
                    <li>
                      <Link to="prince2-practitioner">PRINCE2 Practitioner<sup>&reg;</sup></Link>
                    </li>
                    <li>
                      <Link to="risk-management-professional">Risk Management Professional (PMI-RMP<sup>&reg;</sup>)</Link>
                    </li>
                  </ul>
                </li>

                <li className="dropdown">
                  <Link to="/">
                    <span>IT Service Management</span>
                    <i className="bi bi-chevron-right"></i>
                  </Link>
                  <ul>
                    <li>
                      <Link to="itil-4-foundation">ITIL<sup>&reg;</sup>4 Foundation</Link>
                    </li>
                  </ul>
                </li>

                <li className="dropdown">
                  <Link to="/"><span>Agile and Scrum</span> <i className="bi bi-chevron-right"></i></Link>
                  <ul>
                    <li>
                      <Link to="agile-certificate-practitioner">Agile Certificate Practitioner (PMI-ACP<sup>&reg;</sup>)</Link></li>
                    <li>
                      <Link to="prince2-agile-foundation">Prince2 Agile<sup>&reg;</sup> Foundation</Link></li>
                    <li>
                      <Link to="prince2-agile-practitioner">Prince2 Agile<sup>&reg;</sup> Practitioner</Link></li>
                  </ul>
                </li>
              </ul>
            </li>

            <li>
              <Link className="nav-link scrollto" to="services" onClick={close}>Services</Link>
            </li>
            <li>
              <Link className="nav-link scrollto" to="events" onClick={close}>Events</Link>
            </li>
            <li>
              <Link className="nav-link scrollto" to="joinus" onClick={close}>Join Us</Link>
            </li>


            <li className="dropdown">
              <Link to="/">
                <span>About Us</span>
                <i className="bi bi-chevron-down"></i>
              </Link>
              <ul>
                <li><Link to="our-values">Our Values </Link></li>
                <li><Link to="milestones">Milestones</Link></li>
                <li><Link to="our-policy">Our Policy</Link></li>
                <li><Link to="contact-us">Contact Us</Link></li>
              </ul>
            </li>
          </ul>
          <i className="bi bi-list mobile-nav-toggle" onClick={handleToggle}></i>
          <i className="bi bi-x mobile-nav-toggle" onClick={handleToggle}></i>
        </nav>
      </div>
    </header>

  )
}

export default Navbar