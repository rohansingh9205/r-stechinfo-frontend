"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const loggedIn = localStorage.getItem("loggedIn");

    if (loggedIn === "true") {
      router.replace("/dashboard");
    }
  }, [router]);

  function login() {
    if (!email || !password) {
      alert("Please enter email and password");
      return;
    }

    localStorage.setItem("loggedIn", "true");

    alert("Login Successful");

    router.replace("/dashboard");
  }

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#f1f5f9",
      }}
    >
      <div
        style={{
          width: "400px",
          background: "#fff",
          padding: "35px",
          borderRadius: "18px",
          boxShadow: "0 10px 25px rgba(0,0,0,.08)",
        }}
      >
        <h1
          style={{
            marginTop: 0,
            textAlign: "center",
          }}
        >
          HRMS Login
        </h1>

        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            width: "100%",
            padding: "14px",
            marginTop: "20px",
            borderRadius: "10px",
            border: "1px solid #d1d5db",
          }}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            width: "100%",
            padding: "14px",
            marginTop: "16px",
            borderRadius: "10px",
            border: "1px solid #d1d5db",
          }}
        />

        <div
          style={{
            textAlign: "right",
            marginTop: "10px",
          }}
        >
          <button
            onClick={() => router.push("/forgot-password")}
            style={{
              background: "transparent",
              border: "none",
              color: "#2563eb",
              cursor: "pointer",
              fontWeight: 600,
            }}
          >
            Forgot Password?
          </button>
        </div>

        <button
          onClick={login}
          style={{
            width: "100%",
            marginTop: "20px",
            padding: "14px",
            border: "none",
            background: "#2563eb",
            color: "#fff",
            borderRadius: "10px",
            cursor: "pointer",
            fontWeight: 700,
          }}
        >
          Login
        </button>
      </div>
    </div>
  );
}