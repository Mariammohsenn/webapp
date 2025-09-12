import React, { useState } from "react";
import API from "../api";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMsg("");

    try {
      const r = await API.post("/auth/signin", { email, password });
      const token: string = (r.data as any).token;

      localStorage.setItem("token", token);
      localStorage.setItem("me_email", email);

      setMsg("Signed in — redirecting to welcome...");
      setTimeout(() => navigate("/welcome"), 600);
    } catch (err: any) {
      setMsg(err?.response?.data?.message || "Error signing in");
    }
  };

  return (
    <div className="container">
      <h2>Login</h2>
      <form onSubmit={submit}>
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
          Sign In
        </button>
        {msg && <div className="message">{msg}</div>}
      </form>
    </div>
  );
}
