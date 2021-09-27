import React from "react";
import { Link } from "@reach/router";

export default function Header() {
  return (
    <div>
      <div className="bar bar--sm visible-xs">
        <div className="container">
          <div className="row">
            <div className="col-3 col-md-2">
              <Link to="/">
                <img
                  className="logo"
                  alt="logo"
                  src="img/logo.png"
                />
              </Link>
            </div>
            <div className="col-9 col-md-10 text-right">
              <a
                href="#"
                className="hamburger-toggle"
                data-toggle-class="#menu;hidden-xs hidden-sm"
              >
                <i className="icon button icon--sm stack-interface stack-menu" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <nav id="menu" className="bar bar-1 hidden-xs">
        <div className="container">
          <div className="row">
            <div className="col-lg-1 col-md-1 hidden-xs">
              <div className="bar__module">
                <Link to="/">
                  <img
                    className="logo"
                    alt="logo"
                    src="img/logo.png"
                  />
                </Link>
              </div>
            </div>
            <div className="col-lg-11 col-md-12 text-right text-left-xs text-left-sm">
              <div className="bar__module">
                <ul className="menu-horizontal text-left">
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <a href="https://blog.ralch.com" target="_blank">Blog</a>
                  </li>
                  <li>
                    <Link to="/about">About Me</Link>
                  </li>
                  <li>
                    <Link to="/services">Services</Link>
                  </li>
                  <li>
                    <Link to="/projects">Projects</Link>
                  </li>
                </ul>
              </div>
              <div className="bar__module">
                <Link
                  to="/contacts"
                  className="btn btn--sm btn--primary type--uppercase"
                >
                  <span className="btn__text">Contact us</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
