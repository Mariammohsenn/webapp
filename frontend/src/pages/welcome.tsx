import React, { useEffect, useState } from "react";
import API from "../api";
import { useNavigate } from "react-router-dom";

export default function Welcome() {
  const [message, setMessage] = useState("Loading...");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProtected = async () => {
      try {
        const r = await API.get("/auth/protected");
        setMessage((r.data as any).message || "Welcome");
      } catch (e: any) {
        setMessage("Not authenticated or token expired.");
      }
    };
    fetchProtected();
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("me_email");
    navigate("/");
  };

  const email = localStorage.getItem("me_email") || "";

  return (
    <div className="container">
      <h1>Welcome{email ? `, ${email}` : ""}!</h1>
      <div>{message}</div>
      <div style={{ marginTop: 12 }}>
        <button onClick={logout} className="cute-btn">
          Logout
        </button>
      </div>
    </div>
  );
}
