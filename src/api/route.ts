import { IUser } from "@/types";
import axios from "axios";
import { NextResponse } from "next/server";
import { Interface } from "readline";

const axiosClient = axios.create({
  baseURL: "http://localhost:5000/api/",
  headers: {
    "Content-Type": "application/json",
  },
});

export async function RegisterApi(userData: Omit<IUser, "id">) {
  console.log(userData);
  const body = userData;
  const res = await axiosClient.post("users/auth/register", body);
  console.log(res);

  return res;
}
export async function LoginApi(userData: Pick<IUser, "username" | "password">) {
  const body = userData;
  const res = await axiosClient.post("users/auth/login", body);
  console.log(res);

  return res.data;
}
