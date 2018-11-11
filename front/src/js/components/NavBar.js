import React, { Component } from 'react'
import { Link } from "react-router-dom"

class NavBar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark mb-4 p-0">
        <div className="navbar-header">
          <a className="navbar-brand m-1" href="#">
            <img alt="Brand" className="cm-nav-logo" src="src/style/logo.png" />
            CATMASH
          </a>
        </div>
        <ul className="nav navbar-nav m-1">
          <Link to="/"><li><a href="#" style={{fontSize: "16px", color: "white"}}>Retour aux votes</a></li></Link>
        </ul>
      </nav>
    )
  }
}

export default NavBar