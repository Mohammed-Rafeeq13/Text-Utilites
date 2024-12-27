import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';  //Import Link from react-router-dom


export default function Navbar(props) {
  return (
    <>
        <nav class="navbar navbar-expand-lg bg-body-tertiary bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"><b>Textutilites</b></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        {/* <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
          {/* <a class="nav-link active" aria-current="page" href="#">{props.Title}</a> 
        </li> */}
        <li class="nav-item">
          <Link className="nav-link" to="/">Home</Link>
        </li>
        <li class="nav-item">
          <Link className="nav-link" to="/about">About</Link>  {/*Use Link for About*/}
          {/* <a class="nav-link" href="#">About</a> */}
          {/* <a class="nav-link" href="#">{props.Text}</a> */}
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Products
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Technologies</a></li>
            <li><a class="dropdown-item" href="#">Clients Review</a></li>
            {/* <li><hr class="dropdown-divider"/></li> */}
            <li><a class="dropdown-item" href="#">Product Services</a></li>
          </ul>
        </li>
        <li class="nav-item">
          {/* <a class="nav-link disabled" aria-disabled="true">About</a> */}
          <a class="nav-link" href="#">Login</a>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    </>
  )
}

// This below is used to give type of props 
Navbar.propTypes = {
    Title : PropTypes.string.isRequired,
    Text : PropTypes.string.isRequired
}
// This below is used when developer not give the props
Navbar.defaultProps = {
    Title : "Set Title Here",
    Text : "Set Nav Link Here"
}