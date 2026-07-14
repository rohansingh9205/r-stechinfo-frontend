const API_URL = "http://localhost:8080/api";

// ================= Dashboard =================

export async function getDashboard() {

  const response = await fetch(`${API_URL}/dashboard`);

  if (!response.ok) {
    throw new Error("Failed to fetch dashboard");
  }

  return response.json();

}

// ================= Companies =================

export async function getCompanies() {

  const response = await fetch(`${API_URL}/companies`);

  if (!response.ok) {
    throw new Error("Failed to fetch companies");
  }

  return response.json();

}

// ================= Company By Id =================

export async function getCompanyById(id: number) {

  const response = await fetch(`${API_URL}/companies/${id}`);

  if (!response.ok) {
    throw new Error("Failed to fetch company");
  }

  return response.json();

}

// ================= Create Company =================

export async function createCompany(company: any) {

  const response = await fetch(`${API_URL}/companies`, {

    method: "POST",

    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify(company),

  });

  const text = await response.text();

  if (!response.ok) {
    throw new Error(text);
  }

  if (text.trim() === "") {
    return null;
  }

  return JSON.parse(text);

}

// ================= Update Company =================

export async function updateCompany(id: number, company: any) {

  const response = await fetch(`${API_URL}/companies/${id}`, {

    method: "PUT",

    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify(company),

  });

  const text = await response.text();

  if (!response.ok) {
    throw new Error(text);
  }

  if (text.trim() === "") {
    return null;
  }

  return JSON.parse(text);

}

// ================= Delete Company =================

export async function deleteCompany(id: number) {

  const response = await fetch(`${API_URL}/companies/${id}`, {

    method: "DELETE",

  });

  if (!response.ok) {
    throw new Error("Failed to delete company");
  }

}
// ================= Employees =================

export async function getEmployees() {

  const response = await fetch(`${API_URL}/employees`);

  if (!response.ok) {
    throw new Error("Failed to fetch employees");
  }

  return response.json();
}

export async function getEmployeeById(id: number) {

  const response = await fetch(`${API_URL}/employees/${id}`);

  if (!response.ok) {
    throw new Error("Failed to fetch employee");
  }

  return response.json();
}

export async function createEmployee(employee: any) {
  console.log("API DATA =", employee);

  const response = await fetch(`${API_URL}/employees`, {

    method: "POST",

    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify(employee),

  });

  const text = await response.text();

  if (!response.ok) {
    throw new Error(text);
  }

  return text ? JSON.parse(text) : null;
}

export async function updateEmployee(
  id: number,
  employee: any
) {

  const response = await fetch(
    `${API_URL}/employees/${id}`,
    {

      method: "PUT",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(employee),

    }
  );

  const text = await response.text();

  if (!response.ok) {
    throw new Error(text);
  }

  return text ? JSON.parse(text) : null;
}

export async function deleteEmployee(id: number) {

  const response = await fetch(
    `${API_URL}/employees/${id}`,
    {

      method: "DELETE",

    }
  );

  if (!response.ok) {
    throw new Error("Failed to delete employee");
  }

}
