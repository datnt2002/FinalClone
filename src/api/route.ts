import { IUser } from "@/types";
import axios from "axios";

const axiosClient = axios.create({
  baseURL: "https://api-ecom.duthanhduoc.com/",
  headers: {
    "Content-Type": "application/json",
  },
});

export async function RegisterApi(userData: IUser) {
  console.log(userData);
  const body = { email: userData.email, password: userData.password };
  const res = await axiosClient.post("login", body);
  console.log(res);

  return Response.json(res);
}
