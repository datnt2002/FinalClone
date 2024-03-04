import { gallery } from "@/constants/gallery";
import Image from "next/image";
import React from "react";

type Props = {};

const SlideGallery = (props: Props) => {
  return (
    <div className="mx-auto py-4 max-h-96 my-14 overflow-hidden">
      <div className="grid grid-cols-gallery gap-6 auto-rows-auto">
        {gallery.map((image, index) => {
          let ratioImage = image.height / image.width;
          const galleryHeight = Math.ceil(250 * ratioImage);
          const rotationClass = index % 2 === 0 ? "rotate-3" : "-rotate-3";
          return (
            <div
              key={image.key}
              className="w-[250px] justify-self-center self-center"
            >
              <div className="">
                <Image
                  sizes="250px"
                  className={`rounded-2xl ${rotationClass}`}
                  src={image.src}
                  alt={image.title}
                  width={250}
                  height={galleryHeight}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SlideGallery;
