import React from "react";

export default function Footer() {
  return (
    <footer className="footer-3 text-center-xs space--xs">
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <img alt="Image" className="logo" src="img/logo.png" />
          </div>
          <div className="col-sm-6 text-right text-center-xs">
            <ul className="social-list list-inline list--hover">
              <li>
                <a href="https://github.com/iamralch">
                  <i className="socicon icon socicon-github icon--xs"></i>
                </a>
              </li>
              <li>
                <a href="https://twitter.com/ralch">
                  <i className="socicon icon socicon-twitter icon--xs"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6 text-center-xs">
            <p className="type--fine-print">
              Let's turn awesome ideas into brilliant software products
            </p>
          </div>
          <div className="col-sm-6 text-right text-center-xs">
            <span className="type--fine-print">
              © <span className="update-year">2021</span> Svetlin Ralchev
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
