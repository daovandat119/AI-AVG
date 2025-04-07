import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
  matchPath,
} from "react-router-dom";
import Header from "@/components/header/Header.jsx";
import Home from "@/pages/Home.jsx";
import Login from "@/pages/Login.jsx";
import UseScrollToTop from "@/hooks/UseScrollToTop.jsx";
import { AuthProvider } from "./context/AuthContext";
import PublicRoute from "./components/PublicRoute";
import ProtectedRoute from "./components/ProtectedRoute";


function AppLayout() {
  const location = useLocation();
  const hideHeader = matchPath("/login", location.pathname);

  return (
    <>
      {!hideHeader && <Header />}
      <Routes>
        <Route
          path="/login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
}

export default function App() {
  return (
    <Router>
      <AuthProvider>
        <UseScrollToTop />
        <AppLayout />
      </AuthProvider>
    </Router>
  );
}
