import React from "react";
import { Root, Routes } from "react-static";
import { Router } from "@reach/router";
import Header from "components/Header";
import Footer from "components/Footer";

export default function App() {
  return (
    <Root>
      <div className="nav-container">
        <Header />
      </div>
      <div className="main-container">
        <React.Suspense fallback={<em>Loading...</em>}>
          <Router>
            <Routes path="*" />
          </Router>
        </React.Suspense>
      </div>
      <Footer />
    </Root>
  );
}
