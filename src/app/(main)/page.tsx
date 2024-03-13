import Banner from "src/components/banner/Banner";
import ProductListBanner from "src/components/product/ProductListBanner";
import React, { Suspense } from "react";
import Loading from "./loading";
import CarouselProduct from "src/components/carousel/CarouselProduct";
import SlideGallery from "src/components/gallery/SlideGallery";

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
