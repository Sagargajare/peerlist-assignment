import create from "zustand";
import user, { IUser } from "@/data/user";

const useUserStore = create((set) => ({
  user: user.yogini,
  setUser: (user: IUser) => set({ user }),
  logout: () => set({ user: null }),
}));

export default useUserStore;
