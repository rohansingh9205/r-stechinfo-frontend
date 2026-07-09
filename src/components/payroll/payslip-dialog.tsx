"use client";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function PayslipDialog({
  open,
  onClose,
}: Props) {
  if (!open) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,.45)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 999,
      }}
    >
      <div
        style={{
          width: "650px",
          maxWidth: "95%",
          background: "#fff",
          borderRadius: "16px",
          padding: "28px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "24px",
          }}
        >
          <h2
            style={{
              margin: 0,
            }}
          >
            Employee Payslip
          </h2>

          <button
            onClick={onClose}
            style={{
              border: "none",
              background: "transparent",
              fontSize: "22px",
              cursor: "pointer",
            }}
          >
            ✕
          </button>
        </div>

        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
          }}
        >
          <tbody>
            <Row label="Employee" value="Rohan Singh" />
            <Row label="Employee ID" value="EMP001" />
            <Row label="Company" value="Khushi Hind" />
            <Row label="Month" value="July 2026" />
            <Row label="Basic Salary" value="₹ 50,000" />
            <Row label="HRA" value="₹ 10,000" />
            <Row label="Bonus" value="₹ 3,000" />
            <Row label="Other Allowance" value="₹ 2,000" />
            <Row label="PF" value="- ₹ 1,800" />
            <Row label="ESI" value="- ₹ 500" />
            <Row label="TDS" value="- ₹ 2,500" />
            <Row label="Net Salary" value="₹ 60,200" />
          </tbody>
        </table>

        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            gap: "12px",
            marginTop: "30px",
          }}
        >
          <button
            style={{
              padding: "12px 20px",
              border: "none",
              background: "#2563eb",
              color: "#fff",
              borderRadius: "10px",
              cursor: "pointer",
            }}
          >
            Download PDF
          </button>

          <button
            style={{
              padding: "12px 20px",
              border: "none",
              background: "#16a34a",
              color: "#fff",
              borderRadius: "10px",
              cursor: "pointer",
            }}
          >
            Print
          </button>
        </div>
      </div>
    </div>
  );
}

function Row({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <tr>
      <td
        style={{
          padding: "12px 0",
          fontWeight: 600,
          color: "#475569",
        }}
      >
        {label}
      </td>

      <td
        style={{
          textAlign: "right",
          fontWeight: 700,
        }}
      >
        {value}
      </td>
    </tr>
  );
}