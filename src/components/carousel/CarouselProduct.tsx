"use client";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import AutoScroll from "embla-carousel-auto-scroll";

type Props = {};

const CarouselProduct = (props: Props) => {
  return (
    <div className="mx-auto max-w-7xl bg-orange-200 h-auto">
      <Carousel
        plugins={[AutoScroll({ playOnInit: true })]}
        opts={{
          startIndex: 1,
          loop: true,
        }}
        className="w-full mx-auto max-w-6xl py-10"
      >
        <CarouselContent className="">
          {Array.from({ length: 10 }).map((_, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1 w-fit mx-auto">
                <Card className="h-60 w-60">
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <span className="text-3xl font-semibold">{index + 1}</span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default CarouselProduct;
