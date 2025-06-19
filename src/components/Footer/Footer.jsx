import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-github";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span >abhay.rai2633@gmail.com</span>
        <span>8299172633</span>
        <div className="f-icons">
         <a href="https://github.com/abhayrai8299" ><img src={Github} alt="" /></a>
         <a href="https://www.linkedin.com/in/abhay-rai-192151197/"> <img src={LinkedIn} alt="" /></a>
      
  
        </div>
      </div>
    </div>
  );
};

export default Footer;
