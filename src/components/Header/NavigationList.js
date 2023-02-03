import { Link } from "react-router-dom";
import React, { Fragment } from "react";
import classes from "./NavigationList.module.css";

const NavigationList = () => {
  return (
    <Fragment>
      <ul className={classes["secondary-navigation-list"]}>
        <li className={classes["secondary-navigation-list-item"]}>
          <Link
            to="/products"
            className={classes["secondary-navigation-list-item--link"]}
          >
            Plants
          </Link>
        </li>
        <li className={classes["secondary-navigation-list-item"]}>
          <Link
            to="/products"
            className={classes["secondary-navigation-list-item--link"]}
          >
            Flowers
          </Link>
        </li>
        <li className={classes["secondary-navigation-list-item"]}>
          <Link
            to="/products"
            className={classes["secondary-navigation-list-item--link"]}
          >
            Pets
          </Link>
        </li>
        <li className={classes["secondary-navigation-list-item"]}>
          <Link
            to="/products"
            className={classes["secondary-navigation-list-item--link"]}
          >
            Foods & Beverages
          </Link>
        </li>
        <li className={classes["secondary-navigation-list-item"]}>
          <Link
            to="/products"
            className={classes["secondary-navigation-list-item--link"]}
          >
            Gardening & Farming
          </Link>
        </li>
        <li className={classes["secondary-navigation-list-item"]}>
          <Link
            to="/products"
            className={classes["secondary-navigation-list-item--link"]}
          >
            Home & Living
          </Link>
        </li>
        <li className={classes["secondary-navigation-list-item"]}>
          <Link
            to="/products"
            className={classes["secondary-navigation-list-item--link"]}
          >
            Accessories & Gifts
          </Link>
        </li>

        <li className={classes["secondary-navigation-list-item"]}>
          <Link
            to="/products"
            className={classes["secondary-navigation-list-item--link"]}
          >
            Services
          </Link>
        </li>
      </ul>
    </Fragment>
  );
};
export default NavigationList;
