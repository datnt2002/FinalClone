"use client";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "src/components/ui/carousel";
import AutoScroll from "embla-carousel-auto-scroll";
import { gallery } from "src/constants/gallery";
import Image from "next/image";

type Props = {};

const CarouselProduct = (props: Props) => {
  return (
    <div className="mx-auto max-w-7xl bg-orange-200">
      <Carousel
        plugins={[AutoScroll({ playOnInit: true })]}
        opts={{
          startIndex: 1,
          loop: true,
        }}
        className="w-full mx-auto max-w-6xl py-10"
      >
        <CarouselContent className="">
          {gallery.map((image, index) => {
            let ratioImage = image.height / image.width;
            const galleryHeight = Math.ceil(250 * ratioImage);
            const rotationClass = index % 2 === 0 ? "rotate-3" : "-rotate-3";
            return (
              <CarouselItem
                key={image.key}
                className=" md:basis-1/2 lg:basis-1/3 py-2 justify-self-center self-center"
              >
                <Image
                  sizes="250px"
                  className={`rounded-2xl ${rotationClass} hover:scale-110 duration-500 transition-transform`}
                  src={image.src}
                  alt={image.title}
                  width={250}
                  height={galleryHeight}
                />
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default CarouselProduct;
