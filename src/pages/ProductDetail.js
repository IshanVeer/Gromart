import { useParams } from "react-router-dom";
import React, { Fragment } from "react";

const ProductDetailPage = () => {
    const params = useParams()
  return (
    <Fragment>
      <h1>Product detail page</h1>
      <p>{params.productID}</p>
    </Fragment>
  );
};
export default ProductDetailPage;
