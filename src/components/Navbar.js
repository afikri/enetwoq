import React from 'react'
import { Link } from "react-router-dom"
import logo from '../assets/logo.png';

const Navbar = () => {
  const handleClick = (e) => {
    e.preventDefault()
    const target = e.target.getAttribute('href');
    const location = document.querySelector(target).offsetTop;

    window.scrollTo({
      left: 0,
      top: location - 64
    });
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

        <nav id="navbar" className="navbar">
          <ul>
            <li>
              <Link className="nav-link scrollto" to="/">Home</Link>
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

                <li className="dropdown"><a href="#"><span>Agile and Scrum</span> <i class="bi bi-chevron-right"></i></a>
                  <ul>
                    <li><a href="#">Agile Certificate Practitioner (PMI-ACP<sup>&reg;</sup>)</a></li>
                    <li><a href="#">Prince2 Agile<sup>&reg;</sup> Foundation</a></li>
                    <li><a href="#">Prince2 Agile<sup>&reg;</sup> Practitioner</a></li>
                  </ul>
                </li>
              </ul>
            </li>







            <li>
              <Link className="nav-link scrollto" to="services">Services</Link>
            </li>
            <li>
              <Link className="nav-link scrollto" to="events">Events</Link>
            </li>
            <li>
              <Link className="nav-link scrollto" to="joinus">Join Us</Link>
            </li>





            <li className="dropdown"><a href="#"><span>About Us</span> <i class="bi bi-chevron-down"></i></a>
              <ul>
                <li><a href="#">Our Value </a></li>
                <li><a href="#">Milestone</a></li>
                <li><a href="#">Our Policy</a></li>
                <li><a href="#">Contact Us</a></li>
              </ul>
            </li>
          </ul>
          <i className="bi bi-list mobile-nav-toggle"></i>
        </nav>
      </div>
    </header>

  )
}

export default Navbar