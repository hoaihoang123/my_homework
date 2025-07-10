import { apiBaseUrl, defaultHeaders } from "../constants";

export const authLogin = async (user: any) => {
  const response = await fetch(`${apiBaseUrl}/auth/login`, {
    method: "POST",
    headers: defaultHeaders,
    body: JSON.stringify(user),
  });

  if (!response.ok) {
    throw new Error("Login failed");
  }
  return response.json();
};
