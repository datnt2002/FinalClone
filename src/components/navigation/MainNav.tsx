import React from "react";
import { Separator } from "../ui/separator";
import SearchBox from "../search/SearchBox";

type Props = {};

const MainNav = (props: Props) => {
  return (
    <>
      <div className=" flex justify-between mx-5 mt-5 h-16">
        <div>
          <SearchBox />
        </div>
        <div>Search</div>
        <div>Search</div>
      </div>
      <Separator className="my-4" />
    </>
  );
};

export default MainNav;
