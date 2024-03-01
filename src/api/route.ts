import { IUser } from "@/types";
import axios from "axios";
import { Interface } from "readline";

const axiosClient = axios.create({
  baseURL: "http://localhost:5000/api/",
  headers: {
    "Content-Type": "application/json",
  },
});

interface A {
  a: number;
}

export async function RegisterApi(userData: Omit<IUser, "id">) {
  console.log(userData);
  const body = userData;
  const res = await axiosClient.post("users/auth/register", body);
  console.log(res);

  return Response.json(res);
}
