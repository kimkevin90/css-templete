import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import LandingPage from "./components/LandingPage";

function App() {
  return (
    <Router>
      <LandingPage />
    </Router>
  );
}

export default App;
