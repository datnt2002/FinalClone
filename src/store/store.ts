import { LoginApi, RegisterApi } from "@/api/route";
import { IUser } from "@/types";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { create } from "zustand";

interface UserState {
  isLoading: boolean;
  user: Partial<IUser>;
  registerNewUser: (data: Omit<IUser, "id"> & router) => Promise<void>;
  login: (data: Pick<IUser, "username" | "password"> & router) => Promise<void>;
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
  login: async (data: Pick<IUser, "username" | "password"> & router) => {
    const dataToPost = {
      username: data.username,
      password: data.password,
    };
    let response;
    if (dataToPost?.username === "admin" && dataToPost?.password === "123123") {
      response = {
        status: 200,
        data: {
          user: {
            username: "admin",
          },
        },
      };
    }
    // const response = await LoginApi(dataToPost);

    set({ isLoading: true });
    const router = data.router;

    if (response?.status === 200) {
      set({ user: response?.data?.user });
      router.push("/admin");
      localStorage.setItem("token", "go");
    } else {
      router.push("/");
    }
  },
}));

export default useUserStore;
