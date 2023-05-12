import React from "react";
import { NavLink } from "react-router-dom";
import TerminalIcon from '@mui/icons-material/Terminal';

const Navbar = () => {
  document.title = "RIPPLESTACKS";
  return (
    <>
      <div className="container-fluid nav_bg">
        <div className="row">
          <div className="col-10 mx-auto">
            <nav className="navbar navbar-expand-lg navbar-light">
              <NavLink className="navbar-brand navbar_brand" exact to="/">
                <h4>
                TwinCode
                  <TerminalIcon
                    style={{
                      fontSize: "40px",
                      paddingLeft: "6px",
                      paddingBottom: "4px",
                      color:"#baa4ba"
                    }}
                  />
                </h4>
              </NavLink>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav mr-auto nav_opetion">
                  <li className="nav-item active">
                    <NavLink
                      className="nav-link"
                      exact
                      to="/"
                      style={({ isActive, isPending }) => {
                        return {
                          borderBottom: isActive ? "2px solid black" : "",
                          color: isPending ? "black" : "",
                        };
                      }}
                    >
                      Home
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className="nav-link"
                      exact
                      to="/about"
                      style={({ isActive, isPending }) => {
                        return {
                          borderBottom: isActive ? "2px solid black" : "",
                          color: isPending ? "black" : "",
                        };
                      }}
                    >
                      About
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className="nav-link"
                      exact
                      to="/service"
                      style={({ isActive, isPending }) => {
                        return {
                          borderBottom: isActive ? "2px solid black" : "",
                          color: isPending ? "black" : "",
                        };
                      }}
                    >
                      Service
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className="nav-link"
                      exact
                      to="/contact"
                      style={({ isActive, isPending }) => {
                        return {
                          borderBottom: isActive ? "2px solid black" : "",
                          color: isPending ? "black" : "",
                        };
                      }}
                    >
                      Contact
                    </NavLink>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
