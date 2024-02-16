import { React, ReactDOM } from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './style.css'
import './all.css'

import Header from "./Header";
import Welcome from "./Welcome";

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Welcome/>
    </BrowserRouter>
  );
}

export default App;
