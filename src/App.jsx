import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layouts from "./components/Layouts";
import Home from "./pages/Home";
import About from "./pages/About";
import Activities from "./pages/Activities";
import OurImpact from "./pages/OurImpact";
import Team from "./pages/Team";
import ContactUs from "./pages/ContactUs";
import DonationPage from "./pages/DonationPage";




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
      <Route path="/activities" element={
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
      {/* Donate */}
      <Route path="/donatePage" element={
        <Layouts>
          <DonationPage/>
        </Layouts>
      }/>
       {/* Team*/}
       <Route path="/team" element={
        <Layouts>
          <Team/>
        </Layouts>
      }/>

       {/* Contact Us*/}
       <Route path="/contact-us" element={
        <Layouts>
          <ContactUs/>
        </Layouts>
      }/>

    </Routes>
   </Router>
    );
}

export default App;
