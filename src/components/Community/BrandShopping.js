import { Link } from "react-router-dom";
import React, { Fragment } from "react";
import classes from "./BrandShopping.module.css";
import brandImage1 from "../../assets/images/community/find-your-calling.jpg";
import brandImage2 from "../../assets/images/community/sell-your-way.jpg";


const BrandShopping = () => {
  return (
    <Fragment>
      <div className={classes["brand-shopping"]}>
        {/* step 1 */}
        <div className={classes["brand-container"]}>
          <img src={brandImage1} alt="" className={classes["brand-img"]} />

          <div className={classes["brand-text-box"]}>
            <h3 className={classes["brand-heading"]}>Find your calling</h3>

            <p className={classes["brand-para"]}>
              Shop the biggest brands you know and love. Discover independent
              brands making waves and the creators behind them. Whatever you're
              into, find the item and the seller for you on Gromart.
            </p>

            <Link to="/" className={classes["brand-link"]}>
              Shop Now
            </Link>
          </div>
        </div>
        {/* step 2 */}
        <div className={classes["brand-container"]}>
          <div className={classes["brand-text-box"]}>
            <h3 className={classes["brand-heading"]}>Sell your way</h3>

            <p className={classes["brand-para"]}>
              Sell a few items or build your empire. Whatever your vibe we’ll
              share our pro tips to help you get there. It's simple to get
              started.
            </p>

            <Link to="/" className={classes["brand-link"]}>
              Shop Now
            </Link>
          </div>
          <img src={brandImage2} alt="" className={classes["brand-img"]} />
        </div>
      </div>
      
    </Fragment>
  );
};
export default BrandShopping;
