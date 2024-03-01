import Image from "next/image";
import React from "react";
import bannerImage from "../../assets/images/banner.png";
type Props = {};

const Banner = (props: Props) => {
  return (
    <div className=" mx-auto max-w-7xl cursor-pointer">
      <div className="bg-pink-200 relative rounded-tl-3xl rounded-tr-[700px] w-full mt-36 h-[380px]">
        <div className="max-w-2xl text-left p-10">
          <h1 className="font-bold text-7xl">Pokemon Getaway</h1>
          <h2 className="text-2xl mt-2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </h2>
          <p className="p-4 w-fit mt-2 bg-slate-200 border rounded-xl">
            Buy Something
          </p>
        </div>
        <Image
          src={bannerImage.src}
          alt="banner"
          width={500}
          height={500}
          className="absolute bottom-0 right-0"
        />
      </div>
    </div>
  );
};

export default Banner;
