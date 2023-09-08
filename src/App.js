import React from "react"; 
import { Routes, Route } from "react-router-dom";
import Hero from "./components/Hero"
import Characters from "./components/Characters";
import Locations from "./components/Locations";
import "./App.css";

export default function App() {
  return(
    <div>
      <Routes>
        <Route path="/" element={ <Hero /> } />
        <Route path="characters" element={ <Characters /> } />
        <Route path="locations" element={ <Locations /> } />
      </Routes>
    </div>
  )
}


