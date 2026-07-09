"use client";

import AppLayout from "../../../../components/layout/app-layout";
import EmployeeForm, {
  EmployeeFormData,
} from "../../../../components/employees/employee-form";

export default function EditEmployeePage() {
  const employee: EmployeeFormData = {
    employeeId: "EMP001",
    firstName: "Rahul",
    lastName: "Sharma",
    company: "R&S Tech Info",
    department: "Engineering",
    designation: "Frontend Developer",
    joiningDate: "2024-01-12",
    gender: "Male",
    dob: "1999-06-20",
    phone: "9876543210",
    email: "rahul@rstechinfo.com",
    employmentType: "Full Time",
    status: "Active",
    salary: "65000",
    address: "New Delhi, India",
  };

  const handleSubmit = (data: EmployeeFormData) => {
    console.log(data);
    alert("Employee Updated Successfully");
  };

  return (
    <AppLayout>
      <div
        style={{
          marginBottom: "24px",
        }}
      >
        <h1
          style={{
            margin: 0,
            fontSize: "32px",
            fontWeight: 700,
          }}
        >
          Edit Employee
        </h1>

        <p
          style={{
            marginTop: "8px",
            color: "#64748b",
          }}
        >
          Update employee information.
        </p>
      </div>

      <EmployeeForm
        initialData={employee}
        onSubmit={handleSubmit}
        onCancel={() => window.history.back()}
      />
    </AppLayout>
  );
}