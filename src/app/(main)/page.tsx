import Banner from "@/components/banner/Banner";
import ProductListBanner from "@/components/product/ProductListBanner";
import React, { Suspense } from "react";
import Loading from "./loading";
import CarouselProduct from "@/components/carousel/CarouselProduct";

type Props = {};

const Homepage = (props: Props) => {
  return (
    <div>
      <Banner />
      <ProductListBanner />
      <CarouselProduct />
      <Suspense fallback={<Loading />}>{/* <FeatureCategory /> */}</Suspense>
    </div>
  );
};

export default Homepage;
