import { create } from "zustand";
import { persist } from "zustand/middleware";

type AuthState = {
  isAuthenticated: boolean;
  username: string;
  signIn: (username: string) => void;
  signOut: () => void;
};

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      isAuthenticated: false,
      username: '',
      signIn: (username: string) => set({ isAuthenticated: true, username: username }),
      signOut: () => set({ isAuthenticated: false }),
    }),
    {
      name: "auth-storage",
    }
  )
);
