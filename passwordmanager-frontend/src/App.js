import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import Test1 from "./pages/passwords/Test1";
import Login from "./pages/login/Login";
import Passwords from "./pages/passwords/Passwords";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/passwords" element={<Passwords />} />
      </Routes>
    </Router>
  );
};

export default App;
