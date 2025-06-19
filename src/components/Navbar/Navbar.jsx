import React from "react";
import Toggle from "../Toggle/Toggle";
import "./Navbar.css";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <div className="n-wrapper" id="Navbar">
      {/* Left side */}
      <div className="n-left">
        <div className="n-name">Abhay</div>
        <Toggle />
      </div>

      {/* Right side */}
      <div className="n-right">
        

        <Link to="contact" spy={true} smooth={true}>
          <button className="button n-button">Contact</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
