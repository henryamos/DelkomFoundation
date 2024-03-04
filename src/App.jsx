import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layouts from "./components/Layouts";
import Home from "./pages/Home";
import About from "./pages/About";
import Activities from "./pages/Activities";
import OurImpact from "./pages/OurImpact";
import Team from "./pages/Team";
import Testimony from "./pages/Testimony";




function App() {
  return (
   <Router>
    <Routes>
      {/* Home */}
      <Route path="/" element={
        <Layouts>
          <Home/>
        </Layouts>
      }/>

      {/* About */}
      <Route path="/about" element={
        <Layouts>
          <About/>
        </Layouts>
      }/>

      {/* Activities*/}
      <Route path="/activties" element={
        <Layouts>
          <Activities/>
        </Layouts>
      }/>
       {/* Our Impact*/}
       <Route path="/our-impact" element={
        <Layouts>
          <OurImpact/>
        </Layouts>
      }/>
       {/* Team*/}
       <Route path="/team" element={
        <Layouts>
          <Team/>
        </Layouts>
      }/>

       {/* Testimony*/}
       <Route path="/testimony" element={
        <Layouts>
          <Testimony/>
        </Layouts>
      }/>

    </Routes>
   </Router>
    );
}

export default App;
