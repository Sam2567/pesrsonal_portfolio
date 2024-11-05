import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Homescreen";
import Navbar from "./Pages/Home/NavBar";
import MyPortfolio from "./Pages/Home/MyPortfolio";
import AboutMe from "./Pages/Home/AboutMe";
import ContactMe from "./Pages/Home/ContactMe";
import "./App.css";
import Testimonial from "./Pages/Home/Testimonials";
function App() {
  return (
    <>
      <div className="app">
        <Router>
          <div>
            <Navbar />
            <Routes>
              <Route path="/Home" element={<Home></Home>} />
              <Route
                path="/MyPortfolio"
                element={<MyPortfolio></MyPortfolio>}
              />
              <Route path="/AboutMe" element={<AboutMe></AboutMe>} />
              <Route path="/Contact" element={<ContactMe></ContactMe>}></Route>
              <Route path="/Testimonials" element={<Testimonial />}></Route>
              <Route path="*" element={<div>404 Not Found</div>}></Route>
            </Routes>
          </div>
        </Router>
      </div>
    </>
  );
}

export default App;
