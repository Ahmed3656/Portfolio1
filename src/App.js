import { React, ReactDOM } from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom"
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

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <div className="main-container">  
        <Welcome/>
        <Skills/>
      </div>
      <Profile/>
      <Projects/>
      <Contact/>
    </BrowserRouter>
  );
}

export default App;
