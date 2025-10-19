import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Availability from "./components/Availability";
import TypePage from "./components/TypePage";
import Contact from "./components/Contact";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/availability" element={<Availability />} />
        <Route path="/type/:type" element={<TypePage />} />
        <Route path="/contact" element= {<Contact/>}/>
      
      </Routes>
    </Router>
  );
};

export default App;
