import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
  matchPath,
} from "react-router-dom";
import UseAuthCheck from "@/hooks/UseAuthCheck";
import Header from "@/components/header/Header.jsx";
import Home from "@/pages/Home.jsx";
import Login from "@/pages/Login.jsx";
import UseScrollToTop from "@/hooks/UseScrollToTop.jsx";
import ProtectedRoute from "@/components/ProtectedRoute.jsx";

function AppLayout() {
  const location = useLocation();
  const hideHeader = matchPath("/login", location.pathname);

  UseAuthCheck(!hideHeader); 
  
  return (
    <>
      {!hideHeader && <Header />}
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default function App() {
  return (
    <Router>
      <UseScrollToTop />
      <AppLayout />
    </Router>
  );
}
