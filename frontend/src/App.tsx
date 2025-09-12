// this is to decide which page to show
import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import Signup from "./pages/signup";
import Login from "./pages/login";
import Welcome from "./pages/welcome";
import ProtectedRoute from "./components/ProtectedRoute";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/welcome"
          element={
            <ProtectedRoute>
              <Welcome />
            </ProtectedRoute>
            // this is a protectedRoute because no one can enter welcome without the login
          }
        />
      </Routes>
    </div>
  );
}
