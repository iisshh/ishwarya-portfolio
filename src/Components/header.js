import React from "react"
import { Outlet, Link } from "react-router-dom";


const Header=()=>{
    return (

        // <>

<nav class="navbar my-navbar navbar-expand-lg navbar-dark bg-nav">
      <div className="container">
      <Link to="/">
        <a class="navbar-brand" href="#">
          <img src="ishwarya-font-yellow.png" alt="ISHWARYA" height="60px"/></a>
        </Link>
        <button
          class="navbar-toggler border-0"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span
            class="iconify bar-icon"
            data-icon="fa-solid:bars"
            data-inline="false"
          ></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item nav-active">
            <Link to="/">
              <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
            </Link>
            </li>
            <li class="nav-item">
            <Link to="/projects">
              <a class="nav-link" href="#">Projects</a>
              </Link>
            </li>
            <li class="nav-item">
            <Link to="/recruiters">
              <a class="nav-link" href="#">For Recruiters</a>
              </Link>
            </li>
            {/* add travel later */}
            {/* <li class="nav-item">
            <Link to="/">
              <a class="nav-link" href="#">Travel</a>
            </Link>
            </li> */}
            <li class="nav-item">
            <Link to="/contactMe">
              <a class="nav-link" href="#">Contact Me</a>
            </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    // {/* <div i
    
    

    )
}

export default Header

