import React from "react";
import { MapPin, Building2 } from "lucide-react";
import ShipSheet from "../sheet/ShipSheet";
type Props = {};

const TopNav = (props: Props) => {
  return (
    <div className="bg-red-600 text-white h-12 flex justify-between px-3">
      <div className="flex items-center gap-3">
        <ShipSheet />

        <button className="flex text-sm hover:bg-black/25 p-2 rounded-md">
          <Building2 className="mr-1" size={18} />
          Select your store
        </button>
      </div>
      <div className="flex text-sm items-center gap-5">
        <div className="hover:underline cursor-pointer">Registry</div>
        <div className="hover:underline cursor-pointer">Weekly Ad</div>
        <div className="hover:underline cursor-pointer">RedCard</div>
        <div className="hover:underline cursor-pointer">Target Circle</div>
        <div className="hover:underline cursor-pointer">Find Stores</div>
      </div>
    </div>
  );
};

export default TopNav;
