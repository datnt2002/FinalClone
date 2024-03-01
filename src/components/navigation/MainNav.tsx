import Image from "next/image";
import React from "react";
import logo from "../../assets/images/Logo.png";
import { CircleUserRound, ShoppingCart, MenuSquare } from "lucide-react";
import SearchBox from "../search/SearchBox";
import Link from "next/link";

type Props = {};

const MainNav = (props: Props) => {
  return (
    <div className="flex flex-nowrap h-20 px-5 justify-between shadow-md items-center">
      <Image src={logo.src} alt="Logo" width={40} height={40} className="" />

      <div className="lg:hidden basis-1/3">
        <MenuSquare />
      </div>
      <div className="lg:flex items-center basis-5/12 hidden">
        <div className="px-5">Categories</div>
        <div className="px-5">Deals</div>
        <div className="px-5 basis-48 text-center">New & Featured</div>
        <div className="px-5 basis-52 text-center">Pickup & Delivery</div>
      </div>

      <div className="flex-1 mr-4">
        <SearchBox />
      </div>
      <Link href="/login">
        <div className="flex basis-24">
          <CircleUserRound className="mr-1" />
          Sign in
        </div>
      </Link>

      <ShoppingCart className="ml-2" />
    </div>
  );
};

export default MainNav;
