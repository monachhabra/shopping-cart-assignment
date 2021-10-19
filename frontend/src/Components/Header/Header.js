import { HiShoppingCart } from "react-icons/hi";
import React, { useState, useEffect, useContext } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "./Header.css";

const Header = (props) => {
  const [loggedin, setLoggedin] = useState(false);
  return (
    <header>
      <div className="header__logo">
        <img src={`static/images/logo.png`} alt="logo"></img>
      </div>
      <div className="header__left">
        <nav className="header__nav">
          <Link to="/">Home</Link>
          <Link to="/product">Products</Link>
        </nav>
      </div>
      <div className="header__right">
        <div className="header__right--nav">
          <nav>
            <Link to="/signin">SignIn</Link>
            <Link to="/register">Register</Link>
          </nav>
          <div className="header__right--img">
            <HiShoppingCart className="shopping-cart" />0 Items
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
