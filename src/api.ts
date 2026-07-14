const API_BASE_URL = "http://localhost:8080/api";

export async function getDashboardReport() {
  const response = await fetch(`${API_BASE_URL}/reports/dashboard`);

  if (!response.ok) {
    throw new Error("Failed to load dashboard");
  }

  return response.json();
}