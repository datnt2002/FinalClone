import React from "react";
import backgroundImage from "../../../assets/images/bg-authen.jpg";
import Link from "next/link";
import LoginForm from "@/components/form/LoginForm";

type Props = {};

const Login = (props: Props) => {
  return (
    <div
      className="flex justify-end bg-cover w-screen min-h-screen"
      style={{
        backgroundImage: `url(${backgroundImage.src})`,
      }}
    >
      <div className="self-center mr-8 ml-8 w-full md:w-1/2 lg:w-1/3 bg-white/50 rounded-3xl shadow-lg p-6 backdrop-blur-sm text-center my-6">
        {/* name page */}
        <div>
          {/* <h1 className="text-3xl font-bold">
    <img src={logo} alt="" className="h-16 mx-auto" />
  </h1> */}
          <h4 className="text-base font-bold mt-4 ">Sign in</h4>
        </div>

        {/* form */}
        <div className="mt-4 w-full">
          <LoginForm />
        </div>

        <div>
          <h4 className="font-bold mb-1">Create an account?</h4>
          <Link
            href="/register"
            className="text-[#d33d57] underline underline-offset-2"
          >
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
