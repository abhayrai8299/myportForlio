import React, { useContext } from "react";
import "./Works.css";
import Upwork from "../../img/Upwork.png";
import foody from "../../img/foody.png";
import CalmAir from "../../img/CalmAir.png";
import mploie from "../../img/mploi.png";
import PacificCoastal from "../../img/PacificCoastal.png";
import Fiverr from "../../img/fiverr.png";
import Amazon from "../../img/amazon.png";
import Shopify from "../../img/Shopify.png";
import Facebook from "../../img/Facebook.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import {Link} from 'react-scroll'
const Works = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  return (
    <div className="works" id="works">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          {/* dark Mode */}
          <span style={{ color: darkMode ? "white" : "" }}>
            Works for All these
          </span>
          <span>Brands & Clients</span>
          <spane>
          Document with a price showing the cost of that travel, passenger and journey details.
            <br />
            Flight tickets have departure and arrival details, PNR and booking code, seat number, and boarding time on them.
            <br />
            Passengers can also get their tickets by searching “Find flight tickets for X” through mobile applications or websites.
            <br />
            You might as well purchase cheap flight tickets on Calm.com or Pacific Coatel Airlines Mobile Application
          </spane>
          <Link to="contact" smooth={true} spy={true}>
            <button className="button s-button">Hire Me</button>
          </Link>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>

        {/* right side */}
      </div>
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img src={foody} alt="" width={200} />
          </div>
          <div className="w-secCircle">
            <img src={CalmAir} alt="" width={200}  />
          </div>
          <div className="w-secCircle">
            <img src={PacificCoastal} alt="" width={200} />
          </div>{" "}
          <div className="w-secCircle">
            <img src={mploie} alt="" width={200} />
          </div>
          <div className="w-secCircle">
            <img src={Shopify} alt="" />
          </div>
        </motion.div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
