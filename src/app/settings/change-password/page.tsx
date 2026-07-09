"use client";

import { useState } from "react";
import AppLayout from "../../../components/layout/app-layout";

export default function ChangePasswordPage() {
  const [currentPassword, setCurrentPassword] =
    useState("");

  const [newPassword, setNewPassword] =
    useState("");

  const [confirmPassword, setConfirmPassword] =
    useState("");

  function changePassword() {
    if (
      !currentPassword ||
      !newPassword ||
      !confirmPassword
    ) {
      alert("Please fill all fields.");
      return;
    }

    if (newPassword !== confirmPassword) {
      alert("New password and confirm password do not match.");
      return;
    }

    alert("Password Changed Successfully");
  }

  return (
    <AppLayout>
      <h1
        style={{
          fontSize: "32px",
          marginBottom: "24px",
        }}
      >
        Change Password
      </h1>

      <div
        style={{
          background: "#fff",
          padding: "24px",
          borderRadius: "16px",
          boxShadow: "0 8px 20px rgba(0,0,0,.08)",
          maxWidth: "700px",
        }}
      >
        <div style={{ marginBottom: "20px" }}>
          <label>Current Password</label>

          <input
            type="password"
            value={currentPassword}
            onChange={(e) =>
              setCurrentPassword(e.target.value)
            }
            style={{
              width: "100%",
              marginTop: "8px",
              padding: "12px",
              border: "1px solid #d1d5db",
              borderRadius: "10px",
            }}
          />
        </div>

        <div style={{ marginBottom: "20px" }}>
          <label>New Password</label>

          <input
            type="password"
            value={newPassword}
            onChange={(e) =>
              setNewPassword(e.target.value)
            }
            style={{
              width: "100%",
              marginTop: "8px",
              padding: "12px",
              border: "1px solid #d1d5db",
              borderRadius: "10px",
            }}
          />
        </div>

        <div style={{ marginBottom: "20px" }}>
          <label>Confirm Password</label>

          <input
            type="password"
            value={confirmPassword}
            onChange={(e) =>
              setConfirmPassword(e.target.value)
            }
            style={{
              width: "100%",
              marginTop: "8px",
              padding: "12px",
              border: "1px solid #d1d5db",
              borderRadius: "10px",
            }}
          />
        </div>

        <button
          onClick={changePassword}
          style={{
            padding: "12px 22px",
            background: "#2563eb",
            color: "#fff",
            border: "none",
            borderRadius: "10px",
            cursor: "pointer",
            fontWeight: 600,
          }}
        >
          Change Password
        </button>
      </div>
    </AppLayout>
  );
}