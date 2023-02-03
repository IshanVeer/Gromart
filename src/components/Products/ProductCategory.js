import { Link } from "react-router-dom";
import React, { Fragment } from "react";
import classes from "./ProductCategory.module.css";
import plantImage from "../../assets/images/popular-categories/plants.jpg";
import flowerImage from "../../assets/images/popular-categories/flowers.jpg";
import foodImage from "../../assets/images/popular-categories/food-and-beverages.jpg";
import petImage from "../../assets/images/popular-categories/pets.jpg";
import SearchedCategory from "./SearchedCategory";
import BestSellers from "./BestSellers";


const ProductCategory = () => {
  return (
    <Fragment>
      <div className={classes["product-category"]}>
        <h2 className={classes["categories-heading"]}>Popular Categories</h2>
        <ul
          className={`${classes["categories-list"]} ${classes["grid"]} ${classes["grid--4-cols"]}`}
        >
          {/* category 1 */}
          <li className={classes["categories-list-item"]}>
            <Link
              to="/products"
              className={classes["categories-list-item-link"]}
            >
              <div className={classes["categories-card"]}>
                <div className={classes["card-img-box"]}>
                  <img
                    src={plantImage}
                    alt="plant"
                    className={classes["card-img"]}
                  />
                </div>
                <div className={classes["card-text"]}>Plants</div>
              </div>
            </Link>
          </li>
          {/* category 2 */}
          <li className={classes["categories-list-item"]}>
            <Link
              to="/products"
              className={classes["categories-list-item-link"]}
            >
              <div className={classes["categories-card"]}>
                <div className={classes["card-img-box"]}>
                  <img
                    src={flowerImage}
                    alt="plant"
                    className={classes["card-img"]}
                  />
                </div>
                <div className={classes["card-text"]}>Flowers</div>
              </div>
            </Link>
          </li>
          {/* category 3 */}
          <li className={classes["categories-list-item"]}>
            <Link
              to="/products"
              className={classes["categories-list-item-link"]}
            >
              <div className={classes["categories-card"]}>
                <div className={classes["card-img-box"]}>
                  <img
                    src={foodImage}
                    alt="plant"
                    className={classes["card-img"]}
                  />
                </div>
                <div className={classes["card-text"]}>Foods & Beverages</div>
              </div>
            </Link>
          </li>
          {/* category 4 */}
          <li className={classes["categories-list-item"]}>
            <Link
              to="/products"
              className={classes["categories-list-item-link"]}
            >
              <div className={classes["categories-card"]}>
                <div className={classes["card-img-box"]}>
                  <img
                    src={petImage}
                    alt="plant"
                    className={classes["card-img"]}
                  />
                </div>
                <div className={classes["card-text"]}>Pets</div>
              </div>
            </Link>
          </li>
        </ul>
      </div>
      <SearchedCategory />
      <BestSellers />
      
    </Fragment>
  );
};
export default ProductCategory;
