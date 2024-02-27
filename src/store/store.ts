import { RegisterApi } from "@/api/route";
import { IUser } from "@/types";
import { create } from "zustand";

interface UserState {
  profile: {
    password?: string;
    email?: string;
  };
  registerNewUser: (data: IUser) => Promise<void>;
}

const useUserStore = create<UserState>((set) => ({
  profile: {},
  registerNewUser: async (data: IUser) => {
    console.log(data);
    const response = await RegisterApi(data);
    console.log(response);

    if (response.status === 201) {
      set({});
    }
  },
}));

export default useUserStore;
