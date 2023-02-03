import { Link } from "react-router-dom";
import React, { Fragment } from "react";
import classes from "./Header.module.css";


import heroImage from "../../assets/images/header/hero-image.jpg";

const Header = () => {
  return (
    <Fragment>
      
      <div
        className={`${classes["grid"]} ${classes["grid--2-cols"]} ${classes["hero"]}`}
      >
        <div className={classes["hero-content"]}>
          <h1 className={classes["hero-content__heading"]}>
            The Marketplace for all things Nature
          </h1>
          <p className={classes["hero-content__para"]}>
            The Largest online community for Nature
          </p>
          <Link to="/" className={classes["hero-content__link"]}>Browse Nature</Link>
        </div>
        <div className={classes["hero-img"]}>
          <img src={heroImage} alt="hero" />
        </div>
      </div>
    </Fragment>
  );
};

export default Header;
