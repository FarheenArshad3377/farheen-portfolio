import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavbarComponent from "./components/Navbar";
import Home from "./components/Home/Home";
import Projects from "./components/Project/Projects";
import About from "./components/About/About";
import Resume from "./components/Resume/ResumeNew";
import ScrollToTop from "./components/ScrollToTop";
import Preloader from "../src/components/pre";


import { Route, Routes, Navigate } from "react-router-dom";
About
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer";
function App() {
  const [load, updateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      updateLoad(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
  <>
    <Preloader load={load} />
    <div className="App" id={load ? "no-scroll" : "scroll"}>
      <NavbarComponent />
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>

      <Footer />
    </div>
  </>
  );
}

export default App;
