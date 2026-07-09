"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ResetPasswordPage() {
  const router = useRouter();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] =
    useState("");

  function resetPassword() {
    if (!password || !confirmPassword) {
      alert("Please fill all fields.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    alert("Password Reset Successfully");

    router.push("/login");
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
            textAlign: "center",
            marginTop: 0,
          }}
        >
          Reset Password
        </h1>

        <p
          style={{
            textAlign: "center",
            color: "#64748b",
            marginBottom: "24px",
          }}
        >
          Create a new password for your account.
        </p>

        <input
          type="password"
          placeholder="New Password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
          style={{
            width: "100%",
            padding: "14px",
            border: "1px solid #d1d5db",
            borderRadius: "10px",
            marginBottom: "16px",
          }}
        />

        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) =>
            setConfirmPassword(e.target.value)
          }
          style={{
            width: "100%",
            padding: "14px",
            border: "1px solid #d1d5db",
            borderRadius: "10px",
          }}
        />

        <button
          onClick={resetPassword}
          style={{
            width: "100%",
            marginTop: "24px",
            padding: "14px",
            border: "none",
            background: "#16a34a",
            color: "#fff",
            borderRadius: "10px",
            cursor: "pointer",
            fontWeight: 700,
          }}
        >
          Reset Password
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
          }}
        >
          Back to Login
        </button>
      </div>
    </div>
  );
}