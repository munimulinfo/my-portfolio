// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import Headroom from "react-headroom";

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <Headroom>
      <nav className="navbar">
        <div className="nav-container max-w-7xl mx-auto">
          <a href="#banner" className="nav-logo font-bold">
            Munimul
          </a>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item text-white ">
              <a href="#banner" className="nav-links" onClick={handleClick}>
                Home
              </a>
            </li>
            <li className="nav-item text-white">
              <a href="#about" className="nav-links" onClick={handleClick}>
                About
              </a>
            </li>
            <li className="nav-item text-white">
              <a href="#services" className="nav-links" onClick={handleClick}>
                Services
              </a>
            </li>

            <li className="nav-item text-white">
              <a href="#skill" className="nav-links" onClick={handleClick}>
                Skill
              </a>
            </li>
            <li className="nav-item text-white">
              <a href="#project" className="nav-links" onClick={handleClick}>
                Project
              </a>
            </li>
            <li className="nav-item text-white">
              <a href="#contact" className="nav-links" onClick={handleClick}>
                Contact
              </a>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
    </Headroom>
  );
}

export default NavBar;
