import Image from "next/image";
import React from "react";
import logo from "../../assets/images/Logo.png";
import { CircleUserRound, ShoppingCart, MenuSquare } from "lucide-react";
import SearchBox from "../search/SearchBox";
import Link from "next/link";

type Props = {};

const AdminNav = (props: Props) => {
  return (
    <div className="flex flex-nowrap h-20 px-5 justify-between shadow-md items-center">
      <Image src={logo.src} alt="Logo" width={40} height={40} className="" />

      <div className="lg:hidden basis-1/3">
        <MenuSquare />
      </div>
      <div className="flex items-center">
        <div className=" mr-4">
          <SearchBox />
        </div>
        <Link href="/login">
          <div className="flex basis-24">
            <CircleUserRound className="mr-1" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default AdminNav;
