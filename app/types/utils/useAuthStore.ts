import { deleteCookie, getCookie } from 'cookies-next';
import {create} from 'zustand';

interface AuthStore {
  token: string;
  isLoggedIn: boolean;
  setToken: (newToken: string) => void;
  login: () => void;
  logout: () => void;
}

const useAuthStore = create<AuthStore>((set) => ({
  token: getCookie('token') || '',
  isLoggedIn: getCookie('token') ? true : false, 
  setToken: (newToken) => set({ token: newToken }), 
  login: () => set({ isLoggedIn: true }),
  logout: () => {
    deleteCookie('token')
    deleteCookie('role')
    set({ isLoggedIn: false, token: '' })
  }, 
}));

export default useAuthStore;
