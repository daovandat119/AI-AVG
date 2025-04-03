import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
  matchPath,
} from "react-router-dom";
import Header from "@/components/header/header.jsx";
import Home from "@/pages/home.jsx";
import UseScrollToTop from "@/hooks/UseScrollToTop.jsx";

export default function App() {
  return (
    <div>
      <Router>
        <UseScrollToTop />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<div>About</div>} />
        </Routes>
      </Router>
    </div>
  );
}
