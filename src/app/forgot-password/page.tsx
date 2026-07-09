"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ForgotPasswordPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");

  function sendOTP() {
    if (!email) {
      alert("Please enter your email.");
      return;
    }

    alert("OTP sent successfully.");

    router.push("/verify-otp");
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
          width: "420px",
          background: "#fff",
          padding: "35px",
          borderRadius: "16px",
          boxShadow: "0 10px 25px rgba(0,0,0,.08)",
        }}
      >
        <h1
          style={{
            marginTop: 0,
            textAlign: "center",
          }}
        >
          Forgot Password
        </h1>

        <p
          style={{
            textAlign: "center",
            color: "#64748b",
            marginBottom: "24px",
          }}
        >
          Enter your registered email to receive an OTP.
        </p>

        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            width: "100%",
            padding: "14px",
            border: "1px solid #d1d5db",
            borderRadius: "10px",
          }}
        />

        <button
          onClick={sendOTP}
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
          Send OTP
        </button>

        <button
          onClick={() => router.push("/login")}
          style={{
            width: "100%",
            marginTop: "12px",
            padding: "14px",
            border: "1px solid #2563eb",
            background: "#fff",
            color: "#2563eb",
            borderRadius: "10px",
            cursor: "pointer",
            fontWeight: 600,
          }}
        >
          Back to Login
        </button>
      </div>
    </div>
  );
}