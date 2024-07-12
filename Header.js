import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBarLinks = () => {
  return (
    <ul className="navbar-nav">
      <li className="nav-item">
        <NavLink to="/" activeClassName="active" exact className="nav-link">Home</NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/services" activeClassName="active" className="nav-link">Services</NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/about" activeClassName="active" className="nav-link">About</NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/contact" activeClassName="active" className="nav-link">Contact</NavLink>
      </li>
    </ul>
  );
};

const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">AutoRepairShop</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarContent">
          <NavBarLinks />
        </div>
      </nav>
    </header>
  );
};

export default Header;