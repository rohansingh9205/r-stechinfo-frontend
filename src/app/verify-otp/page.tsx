"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function VerifyOTPPage() {
  const router = useRouter();

  const [otp, setOtp] = useState("");

  function verifyOTP() {
    if (otp.length !== 6) {
      alert("Enter a valid 6-digit OTP");
      return;
    }

    alert("OTP Verified Successfully");

    router.push("/reset-password");
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
          Verify OTP
        </h1>

        <p
          style={{
            textAlign: "center",
            color: "#64748b",
            marginBottom: "24px",
          }}
        >
          Enter the 6-digit OTP sent to your email.
        </p>

        <input
          type="text"
          maxLength={6}
          placeholder="Enter OTP"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          style={{
            width: "100%",
            padding: "14px",
            textAlign: "center",
            fontSize: "20px",
            letterSpacing: "8px",
            borderRadius: "10px",
            border: "1px solid #d1d5db",
          }}
        />

        <button
          onClick={verifyOTP}
          style={{
            width: "100%",
            marginTop: "22px",
            padding: "14px",
            border: "none",
            background: "#2563eb",
            color: "#fff",
            borderRadius: "10px",
            cursor: "pointer",
            fontWeight: 700,
          }}
        >
          Verify OTP
        </button>

        <button
          onClick={() => alert("OTP Sent Again")}
          style={{
            width: "100%",
            marginTop: "12px",
            padding: "14px",
            border: "1px solid #2563eb",
            background: "#fff",
            color: "#2563eb",
            borderRadius: "10px",
            cursor: "pointer",
          }}
        >
          Resend OTP
        </button>
      </div>
    </div>
  );
}