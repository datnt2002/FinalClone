import React from "react";
import { Skeleton } from "../ui/skeleton";

type Props = {};

const ProductListBanner = (props: Props) => {
  return (
    <div className="mx-auto max-w-7xl bg-pink-300 h-auto">
      <div className="flex justify-evenly py-16">
        <Skeleton className="bg-slate-500 w-60 h-60 rounded-xl" />
        <Skeleton className="bg-slate-500 w-60 h-60 rounded-xl" />
        <Skeleton className="bg-slate-500 w-60 h-60 rounded-xl" />
      </div>
    </div>
  );
};

export default ProductListBanner;
