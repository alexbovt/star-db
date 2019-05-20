import React, { Component } from "react";

import "./header.css";

export default class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light ">
          <a className="navbar-brand" href="#">
            Star DB
          </a>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-item nav-link" href="#">
                People
              </a>
              <a className="nav-item nav-link" href="#">
                Planets
              </a>
              <a className="nav-item nav-link" href="#">
                Starships
              </a>
            </div>
          </div>
      </nav>
    );
  }
}
