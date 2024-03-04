import Banner from "@/components/banner/Banner";
import ProductListBanner from "@/components/product/ProductListBanner";
import React, { Suspense } from "react";
import Loading from "./loading";
import CarouselProduct from "@/components/carousel/CarouselProduct";
import SlideGallery from "@/components/gallery/SlideGallery";

type Props = {};

const Homepage = (props: Props) => {
  return (
    <div className=" mx-auto">
      <Banner />
      <ProductListBanner />
      <CarouselProduct />
      <Suspense fallback={<Loading />}> {/* <Feature />{" "} */}</Suspense>

      <SlideGallery />
    </div>
  );
};

export default Homepage;
