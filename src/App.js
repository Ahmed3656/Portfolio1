import { React } from "react";
import {BrowserRouter, Routes, Route, useLocation} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './style.css'
import './all.css'

import Header from "./Header";
import Welcome from "./Welcome";
import Skills from "./Skills";
import Profile from "./Profile";
import Projects from "./Projects";
import Contact from "./Contact";
import AboutMe from "./AboutMe";
import Footer from "./Footer";

function App() {
  
  return (
    <BrowserRouter>
      <Header />
      <div className="main-container">  
        <Welcome />
        <Skills />
      </div>
      <Profile />
      <Routes>
        <Route path="AboutMe" element={<AboutMe />}/>
        <Route path="Projects" element={<Projects />}/>
      </Routes>
      <Contact />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
