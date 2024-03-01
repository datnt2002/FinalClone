import { RegisterApi } from "@/api/route";
import { IUser } from "@/types";
import { url } from "inspector";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { redirect } from "next/navigation";
import { NextResponse } from "next/server";
import { create } from "zustand";

interface UserState {
  isLoading: boolean;
  user: Partial<IUser>;
  registerNewUser: (data: Omit<IUser, "id"> & router) => Promise<void>;
}

interface router {
  router: AppRouterInstance;
}

const useUserStore = create<UserState>((set) => ({
  isLoading: false,
  user: {},
  registerNewUser: async (data: Omit<IUser, "id"> & router) => {
    const dataToPost = {
      username: data.username,
      password: data.password,
      email: data.email,
      firstName: data.firstName,
      lastName: data.lastName,
      phoneNumber: data.phoneNumber,
    };
    const response = await RegisterApi(dataToPost);
    set({ isLoading: true });
    const router = data.router;

    if (response?.status === 204 || response?.status === 200) {
      set({
        isLoading: false,
      });
      router.push("/login");
    } else {
      set({
        isLoading: false,
      });
    }
  },
}));

export default useUserStore;
