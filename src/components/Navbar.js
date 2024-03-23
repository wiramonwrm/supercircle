import React, { useState } from "react";
import { FiAlignJustify, FiBox, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            CIRCLE <FiBox className="name-icon" />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            {click ? (
              <FiX className="close-icon" />
            ) : (
              <FiAlignJustify className="open-icon" />
            )}
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/projects" className="nav-links" onClick={closeMenu}>
                Projects
              </Link>
            </li>{" "}
            <li className="nav-item">
              <Link to="/contact" className="nav-links" onClick={closeMenu}>
                Contact Info
              </Link>
            </li>
          </ul>
          {/* {button && <Button buttonStyle="btn--outline">SIGN UP</Button>} */}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
