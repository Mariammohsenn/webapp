import React, { useState } from "react";
import API from "../api";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const validate = () => {
    if (name.trim().length < 3) return "Name must be at least 3 characters.";
    if (!/^[\w-.]+@[\w-]+(\.[\w-]+)+$/.test(email)) return "Invalid email.";
    if (password.length < 8) return "Password must be at least 8 characters.";
    if (!/[A-Za-z]/.test(password)) return "Password needs at least one letter.";
    if (!/\d/.test(password)) return "Password needs at least one number.";
    if (!/[^A-Za-z0-9]/.test(password))
      return "Password needs at least one special character.";
    return "";
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMsg("");
    const v = validate();
    if (v) {
      setMsg(v);
      return;
    }
    console.log("Signup data:", { name, email, password });
    try {
      await API.post("/auth/signup", { name, email, password });
      setMsg("Account created. Redirecting to login...");
      setTimeout(() => navigate("/login"), 900);
    } catch (err: any) {
      setMsg(err?.response?.data?.message || "Error creating account");
    }
  };

  return (
    <div className="container">
      <h2>Sign Up</h2>
      <form onSubmit={submit}>
        <input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        
        <button type="submit" className="cute-btn">
          Create account
        </button>
        {msg && <div className="message">{msg}</div>}
      </form>
    </div>
  );
}
