import { LoginApi, RegisterApi } from "src/api/route";
import { IUser } from "src/types";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { UseFormSetError } from "react-hook-form";
import { create } from "zustand";

interface UserState {
  isLoading: boolean;
  user: Partial<IUser>;
  registerNewUser: (data: Omit<IUser, "id"> & router) => Promise<void>;
  login: (data: Pick<IUser, "username" | "password"> & router) => Promise<void>;
}

interface router {
  router: AppRouterInstance;
  setError: UseFormSetError<{
    username: string;
    password: string;
  }>;
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
    } else {
      response = {
        status: 401,
        data: {
          message: "User Not Found",
        },
      };
    }
    // const response = await LoginApi(dataToPost);

    set({ isLoading: true });
    const router = data.router;
    const setError = data.setError;
    if (response?.status === 200) {
      set({ user: response?.data?.user });
      router.push("/admin");
      localStorage.setItem("token", "go");
    } else {
      setError("password", { message: response?.data?.message || "Error" });
    }
  },
}));

export default useUserStore;
