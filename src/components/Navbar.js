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
          <h1><a href="#">
            <img src={logo} style={{ width: "180px", height: "auto" }} alt="logo" />
          </a>
          </h1>
        </div>

        <nav id="navbar" className="navbar">
          <ul>
            <li>
              <Link className="nav-link scrollto" to="/">Home</Link>
            </li>
            <li class="dropdown">
              <a href="#"><span>Training</span> <i class="bi bi-chevron-down"></i></a>
              <ul>
                <li class="dropdown"><a href="#"><span>Project Management</span> <i class="bi bi-chevron-right"></i></a>
                  <ul>
                    <li><a href="#">Project Management Professional (PMP<sup>&reg;</sup>)</a></li>
                    <li><a href="#">PRINCE2 Foundation<sup>&reg;</sup></a></li>
                    <li><a href="#">PRINCE2 Practitioner<sup>&reg;</sup></a></li>
                    <li><a href="#">Risk Management Professional (PMI-RMP<sup>&reg;</sup>)</a></li>
                  </ul>
                </li>
                <li><a href="#">IT Service Management</a></li>
                <li class="dropdown"><a href="#"><span>Agile and Scrum</span> <i class="bi bi-chevron-right"></i></a>
                  <ul>
                    <li><a href="#">Deep Drop Down 1</a></li>
                    <li><a href="#">Deep Drop Down 2</a></li>
                    <li><a href="#">Deep Drop Down 3</a></li>
                    <li><a href="#">Deep Drop Down 4</a></li>
                    <li><a href="#">Deep Drop Down 5</a></li>
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





            <li class="dropdown"><a href="#"><span>About Us</span> <i class="bi bi-chevron-down"></i></a>
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