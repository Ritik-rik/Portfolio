import { Link } from "react-router-dom";
import "./NavbarStyle.css";
import { FaBars, FaTimes } from "react-icons/fa";
import React, { useState } from "react";

const Navbar = () => {
  const [click, setClick] = useState(false);
  
  // Handle clicking the hamburger menu
  const handleClick = () => {
    setClick(!click);
    window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to top when menu is toggled
  };

  // Change the header background color based on scroll position
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  window.addEventListener("scroll", changeColor);

  // Scroll to the top when a menu item is clicked
  const scrollToTop = () => {
    setClick(false); // Close the menu
    window.scrollTo({ top: 0, behavior: "smooth" }); // Smoothly scroll to the top
  };

  return (
    <div className={color ? "header header-bg" : "header"}>
      <Link to="/" onClick={scrollToTop}>
        <h1>Ritik Mehta</h1>
      </Link>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li>
          <Link to="/" onClick={scrollToTop}>Home</Link>
        </li>
        <li>
          <Link to="/project" onClick={scrollToTop}>Project</Link>
        </li>
        <li>
          <Link to="/experience" onClick={scrollToTop}>Experience</Link>
        </li>
        <li>
          <Link to="/about" onClick={scrollToTop}>About</Link>
        </li>
        <li>
          <Link to="/contact" onClick={scrollToTop}>Contact</Link>
        </li>
      </ul>
      <div className="hamburger" onClick={handleClick}>
        {click ? (
          <FaTimes size={20} style={{ color: "#fff" }} />
        ) : (
          <FaBars size={20} style={{ color: "#fff" }} />
        )}
      </div>
    </div>
  );
};

export default Navbar;
