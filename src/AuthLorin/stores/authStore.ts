import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";
import api from "../service/api";
import type { NavigateFunction } from "react-router-dom";

export interface LoggedInUser {
  id: string | number;
  email: string;
  isActive: boolean;
  roles: [
    {
      id: string | number;
      name: string;
    }
  ];
}

export interface AuthState {
  access_token?: string;
  refresh_token?: string;
  loggedInUser?: LoggedInUser;
  loading: boolean;
  error: any;
  login: ({
    username,
    password,
    navigate,
  }: {
    username: string;
    password: string;
    navigate: NavigateFunction;
  }) => Promise<void>;
  logout: () => Promise<void>;
  updateTokens: (accessToken: string, refreshToken?: string) => void;
}

export const useAuthStore = create<AuthState>()(
  devtools(
    persist(
      (set) => ({
        access_token: undefined,
        refresh_token: undefined,
        loggedInUser: undefined,
        loading: false,
        error: null,
        login: async ({
          username,
          password,
          navigate,
        }: {
          username: string;
          password: string;
          navigate: NavigateFunction;
        }) => {
          set({
            loading: true,
            error: null,
            access_token: undefined,
            refresh_token: undefined,
            loggedInUser: undefined,
          });
          try {
            const response: any = (await api.post("/auth/login", {
              username,
              password,
            })) as any;
            set(
              {
                access_token: response.data.access_token,
                refresh_token: response.data.refresh_token,
                loggedInUser: response.data.loggedInUser,
                loading: false,
                error: null,
              },
              false,
              { type: "@AUTH/LOGIN/SUCCESS" }
            );
            navigate("/tasks");
          } catch (error) {
            set({ error, loading: false });
          }
        },

        logout: async () => {
          set({ loading: true, error: null });
          try {
            set({
              access_token: undefined,
              refresh_token: undefined,
              loggedInUser: undefined,
              loading: false,
              error: null,
            });
          } catch (error) {
            set({ error, loading: false });
          }
        },

        updateTokens: (accessToken: string, refreshToken?: string) => {
          set((state) => ({
            access_token: accessToken,
            refresh_token: refreshToken || state.refresh_token,
          }));
        },
      }),
      { name: "auth-storage" }
    )
  )
);
