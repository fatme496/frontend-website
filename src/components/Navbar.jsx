import "../styles/Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false); // State to track if the menu is open
  const navigate = useNavigate();

  // Handle button click to navigate to the Contact page
  const goToContact = () => {
    navigate("/contact");
  };

  // Toggle menu open/close
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">D</div>

      {/* Mobile menu icon */}
      <div className="menu-icon" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Links container */}
      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/aboutus">About</Link></li>
        <li><Link to="/production">Production</Link></li>
      </ul>
      
      <button className="start-btn" onClick={goToContact}>Contact-us</button>
    </nav>
  );
}

export default Navbar;

