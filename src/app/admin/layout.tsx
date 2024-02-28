import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./../globals.css";
import SideNav from "@/components/navigation/SideNav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex">
      <div className="basis-1/5">
        {" "}
        <SideNav />
      </div>
      <div className="basis-4/5"> {children}</div>
    </div>
  );
}
