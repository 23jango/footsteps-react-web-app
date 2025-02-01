import React from "react";
import About from "./About";
import Events from "./Events";
import Membership from "./Membership";
//import FsNav from "./FsNavigation";
import Home from "./Home";
import ReactDOM from 'react-dom/client';
import { HashRouter, Route, Routes, Navigate } from "react-router-dom";
function App() {
  return (
    <HashRouter>
      <div>
        {/* <FsNavigation /> */}
        <Routes>
          {/* Redirect "/" to "/home" */}
          <Route path="/" element={<Navigate to="/home" />} />
          {/* Define the "home" route */}
          <Route path="/home" element={<Home />} />
          <Route path="/members" element={<Membership />} />
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<Events />} />

          
          {/* <Route path="/About/*" element={<About />} />
          <Route path="/Events/*" element={<Events />} />
          <Route path="/Membership/*" element={<Membership />} /> */}
        </Routes>
      </div>
    </HashRouter>
  );
}
export default App;
