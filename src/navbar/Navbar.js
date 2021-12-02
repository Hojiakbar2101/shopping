import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(true);
  function isOpen() {
    setOpen((prev) => !prev);
    document.querySelector(".navbar__bar").classList.toggle("isOpen");
  }
  return (
    <>
      <div className="my-navbar">
        <button className="navbar__btn" onClick={isOpen}>
          <i className={open ? "fas fa-bars" : "fas fa-times"}></i>
        </button>
        <div className="navbar__catigoris my__none">
          <a href="#" className="navbar__catigory">
            Men
          </a>
          <a href="#" className="navbar__catigory left">
            Women
          </a>
          <a href="#" className="navbar__catigory left">
            New Arrivals
          </a>
        </div>
        <div className="navbar__brend">
          <Link to="/">
            <img src="./brend.png" />
          </Link>
        </div>
        <div className="navbar__document my__none">
          <a href="#" className="navbar__document_link right">
            Sustainability
          </a>
          <a href="#" className="navbar__document_link right">
            Stores
          </a>
          <a href="#" className="navbar__document_link icon">
            <i className="far fa-user"></i>
          </a>
          <a href="#" className="navbar__document_link icon">
            <i className="far fa-question-circle"></i>
          </a>
          <a href="#" className="navbar__document_link">
            <i className="fas fa-shopping-cart"></i>
          </a>
        </div>
      </div>
      <div className="navbar__bar">
        <div className="container">
          <div className="box">
            <a href="#" className="bar__link">
              Man
            </a>
            <a href="#" className="bar__link">
              Women
            </a>
            <a href="#" className="bar__link">
              New Arrivals
            </a>
          </div>
          <div className="box mt-4">
            <a href="#" className="bar__link">
              Sustainability
            </a>
            <a href="#" className="bar__link">
              Stores
            </a>
            <a href="#" className="bar__link">
              <i className="far fa-user"></i>
            </a>
            <a href="#" className="bar__link">
              <i className="far fa-question-circle"></i>
            </a>
          </div>
          <div className="box basket__box mt-4">
            <a href="#" className="bar__link">
              <i className="fas fa-shopping-cart"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
