import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import Services from "./components/Services/Services";
import "./App.css";
import Experience from "./components/Experience/Experience";
import Works from "./components/Works/Works";
import Portfolio from "./components/Portfolio/Portfolio";
import Testimonial from "./components/Testimonials/Testimonial";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import { useContext } from "react";
import { themeContext } from "./Context";

function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div
    className="App"
    style={{
      background: darkMode ? "black" : "",
      color: darkMode ? "white" : "",
    }}
  >
    <div id="Navbar">
      <Navbar />
      <Intro />
    </div>

    <div id="services">
      <Services />
    </div>

    <div id="works">
      <Experience />
      <Works />
    </div>

    <div id="portfolio">
      <Portfolio />
    </div>

    <div id="testimonial">
      <Testimonial />
    </div>

    <div id="contact">
      <Contact />
    </div>

    <Footer />
  </div>

  );
}

export default App;
