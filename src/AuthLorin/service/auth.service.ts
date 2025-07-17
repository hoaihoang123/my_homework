import { storage } from "../utils/storage";
import api from "./api";

class AuthService {
  async login(username: string, password: string) {
    try {
      const response = await api.post("/auth/login", { username, password });
      const { access_token, refresh_token, loggedInUser } = response.data;
      storage.setToken(access_token);
      storage.setRefreshToken(refresh_token);

      return { success: true, loggedInUser };
    } catch (error: any) {
      return {
        success: false,
        message: error.response?.data?.message || "Login failed",
      };
    }
  }

  async logout() {
    try {
      storage.clearAll();
      window.location.href = "/login";
    } catch (error) {
      console.error("Logout failed", error);
    }
  }
}
