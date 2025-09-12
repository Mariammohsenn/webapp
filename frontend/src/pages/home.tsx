import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="container">
      <h1>Welcome</h1>
      <p>Please sign up or log in to continue</p>

      <div className="button-group">
        <Link to="/signup">
          <button className="cute-btn">Sign Up</button>
        </Link>
        <Link to="/login">
          <button className="cute-btn">Login</button>
        </Link>
      </div>
    </div>
  );
}
