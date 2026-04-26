import { useState } from "react";
import { BACKEND_URL,DASHBOARD_URL } from "../../config";


/* ---------------- API CALLS ---------------- */

const signup = async (data) => {
  const res = await fetch(`${BACKEND_URL}/api/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    body: JSON.stringify(data),
  });

  return res.json();
};

const login = async (data) => {
  const res = await fetch(`${BACKEND_URL}/api/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    body: JSON.stringify(data),
  });

  return res.json();
};

/* ---------------- COMPONENT ---------------- */

export default function Signup() {
  const [isLogin, setIsLogin] = useState(true);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {
    const data = await signup({ name, email, password });
    alert(data.message || "User created successfully");
  };

  const handleLogin = async () => {
    const data = await login({ email, password });

    if (data.accessToken) {
      localStorage.setItem("accessToken", data.accessToken);
      window.location.href = DASHBOARD_URL;
    } else {
      alert(data.message || "Login failed");
    }
  };

  /* ---------------- STYLES (BIGGER UI) ---------------- */

  const page = {
    height: "100vh",
    display: "flex",
    fontFamily: "Arial, sans-serif",
    background: "#f5f7fa",
  };

  const left = {
    flex: 1,
    background: "linear-gradient(135deg, #387ed1, #1d4ed8)",
    color: "white",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: "80px",
  };

  const right = {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const box = {
    width: "420px",
    padding: "50px",
    borderRadius: "10px",
    background: "white",
    boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
  };

  const input = {
    width: "100%",
    padding: "14px",
    margin: "10px 0",
    border: "1px solid #ddd",
    borderRadius: "6px",
    fontSize: "15px",
    outline: "none",
  };

  const button = {
    width: "100%",
    padding: "14px",
    marginTop: "15px",
    background: "#387ed1",
    color: "white",
    border: "none",
    borderRadius: "6px",
    fontSize: "16px",
    fontWeight: "600",
    cursor: "pointer",
  };

  const toggle = {
    marginTop: "18px",
    textAlign: "center",
    color: "#387ed1",
    cursor: "pointer",
    fontSize: "14px",
  };

  const title = {
    fontSize: "26px",
    marginBottom: "25px",
    color: "#333",
    fontWeight: "600",
  };

  const bigText = {
    fontSize: "42px",
    fontWeight: "700",
    marginBottom: "20px",
  };

  const subText = {
    fontSize: "18px",
    opacity: 0.9,
    lineHeight: "1.6",
  };

  /* ---------------- UI ---------------- */

  return (
    <div style={page}>
      {/* LEFT BRAND SIDE (ZERODHA STYLE) */}
      <div style={left}>
        <h1 style={bigText}>TradingApp</h1>
        <p style={subText}>
          Simple, fast and secure trading platform built for modern investors.
        </p>
      </div>

      {/* RIGHT AUTH BOX */}
      <div style={right}>
        <div style={box}>
          <h2 style={title}>{isLogin ? "Login to your account" : "Create your account"}</h2>

          {!isLogin && (
            <input
              style={input}
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          )}

          <input
            style={input}
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            style={input}
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            style={button}
            onClick={isLogin ? handleLogin : handleSignup}
          >
            {isLogin ? "Login" : "Signup"}
          </button>

          <p style={toggle} onClick={() => setIsLogin(!isLogin)}>
            {isLogin
              ? "Don't have an account? Create one"
              : "Already have an account? Login"}
          </p>
        </div>
      </div>
    </div>
  );
}