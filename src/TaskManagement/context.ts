// Create authContext for task management

import { createContext } from "react";
import type { AuthContextType } from "../types";

const initialAuthContext: AuthContextType = {
  user: null,
  setUser: () => {},
  isAuthenticated: false,
  logout: () => {},
};
export const AuthContext = createContext<AuthContextType>(initialAuthContext);
