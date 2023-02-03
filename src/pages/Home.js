import React, { Fragment } from "react";
import BrandShopping from "../components/Community/BrandShopping";
import Header from "../components/Header/Header";
import ProductCategory from "../components/Products/ProductCategory";

const HomePage = () => {
  return (
    <Fragment>
      <main>
        <Header />
        <ProductCategory />
        <BrandShopping />
      </main>
    </Fragment>
  );
};
export default HomePage;
