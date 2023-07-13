import React from "react";
// import A from "./A";
import LoginForm from "./Login";
import RegistrationForm from "./SignUp";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RegistrationForm />} />
        <Route path="/login" element={<LoginForm />} />
        {/* <Route path="/home" element={<A />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
