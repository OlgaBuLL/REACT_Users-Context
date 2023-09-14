import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/person.svg";
import "./style.sass";

export default function Header() {
  return (
    <header className="header">
      <Link to="/">
        <img src={logo} className="header__logo" alt="Logo" />
      </Link>

      <nav className="nav">
        <Link to="/" className="nav__link">
          Table
        </Link>
        <Link to="/about" className="nav__link">
          About
        </Link>
      </nav>
    </header>
  );
}
