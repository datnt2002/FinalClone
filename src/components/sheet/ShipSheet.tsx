"use client";
import React from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MapPin } from "lucide-react";
import { Separator } from "../ui/separator";

type Props = {};

const ShipSheet = (props: Props) => {
  return (
    <Sheet key="left">
      <SheetTrigger asChild>
        <button className="flex text-sm hover:bg-black/25 p-2 rounded-md">
          <MapPin className="mr-1" size={18} />
          <p className="">Ship to 11211</p>
        </button>
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle>Update Shipping Location</SheetTitle>
          <Separator />
          <SheetDescription>
            Item availability and shipping options will change based on
            location.
          </SheetDescription>
        </SheetHeader>
        <div className=" py-4">
          <Input className="" />
        </div>
        <SheetFooter className="">
          <SheetClose asChild>
            <Button type="submit">Update</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default ShipSheet;
