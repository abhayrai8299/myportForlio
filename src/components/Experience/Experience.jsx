import React, { useContext } from "react";
import { themeContext } from "../../Context";
import "./Experience.css";
const Experience = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const getExperienceYears = () => {
    const startDate = new Date("2021-01-10"); // Replace with your actual start date
    const now = new Date();
    const diffInMs = now - startDate;
    const diffInYears = diffInMs / (1000 * 60 * 60 * 24 * 365.25);
    return diffInYears.toFixed(1); // 1 decimal point, like 4.6
  };

  return (
    <div className="experience" id='experience'>
      <div className="achievement">
        {/* darkMode */}
        <div className="circle" style={{color: darkMode?'var(--orange)':''}}>{getExperienceYears()}+</div>
        <span  style={{color: darkMode?'white':''}}>years </span>
        <span>Experience</span>
      </div>
      <div className="achievement">
        <div className="circle" style={{color: darkMode?'var(--orange)':''}}>9+</div>
        <span  style={{color: darkMode?'white':''}}>Completed </span>
        <span>Projects</span>
      </div>
      <div className="achievement">
        <div className="circle" style={{color: darkMode?'var(--orange)':''}}>11+</div>
        <span  style={{color: darkMode?'white':''}}>Completed </span>
        <span>Personal Projects</span>
      </div>
      <div className="achievement">
        <div className="circle" style={{color: darkMode?'var(--orange)':''}}>3</div>
        <span  style={{color: darkMode?'white':''}}>Companies </span>
        <span>Work</span>
      </div>
    </div>
  );
};

export default Experience;
