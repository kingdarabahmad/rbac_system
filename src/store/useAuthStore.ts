import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface AuthState {
  isAuthenticated: boolean;
  isAdmin: boolean;
  login: (email: string, password: string) => boolean;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      isAuthenticated: false,
      isAdmin: false,
      login: (email: string, password: string) => {
        if (email === 'admin@example.com' && password === 'admin') {
          set({ isAuthenticated: true, isAdmin: true });
          return true;
        }
        return false;
      },
      logout: () => {
        set({ isAuthenticated: false, isAdmin: false });
      },
    }),
    {
      name: 'auth-storage',
    }
  )
);