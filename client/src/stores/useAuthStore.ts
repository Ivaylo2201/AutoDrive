import { create } from "zustand";
import { persist } from "zustand/middleware";

type AuthState = {
  isAuthenticated: boolean;
  signIn: () => void;
  signOut: () => void;
};

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      isAuthenticated: false,
      signIn: () => set({ isAuthenticated: true }),
      signOut: () => set({ isAuthenticated: false }),
    }),
    {
      name: "auth-storage",
    }
  )
);
