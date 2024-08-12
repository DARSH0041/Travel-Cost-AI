import React from "react";
//import { Helmet } from "react-helmet";
// Screens
import Landing from "./screens/Landing.jsx";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Prediction from "./prediction.js";
import Signup from "./Signup.js"
import Login from "./Login.js";
import Homepage from "./Home.js";


export default function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Landing/>}/>
      <Route path="/Login" element={<Login/>}/>
      <Route path="/Login/Homepage" element={<Homepage/>}/>
      <Route path="/Signup" element={<Signup/>}/>
      <Route path="/prediction" element={<Prediction/>}/>

      </Routes>
      
    </Router>
  );
  // return (
  //   <>
  //     <Landing />
  //   </>
  // );
}

