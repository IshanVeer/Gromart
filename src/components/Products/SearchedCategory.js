import { Link } from "react-router-dom";
import React, { Fragment } from "react";
import classes from "./SearchedCategory.module.css";
import bonsiiImage from "../../assets/images/top-searches/bonsii.jpg";
import monstreaImage from "../../assets/images/top-searches/monstrea.jpg";
import chocolateImage from "../../assets/images/top-searches/chocolate.jpg";
import terriuamImage from "../../assets/images/top-searches/Terriuam.jpg";
import mossImage from "../../assets/images/top-searches/moss-wall.jpg";
import hydroponicImage from "../../assets/images/top-searches/hydroponic.jpg";


const SearchedCategory = () => {
  return (
    <Fragment>
      <div className={classes["searched-category"]}>
        <h2 className={classes["searched-heading"]}>Top Searches</h2>
        <ul
          className={`${classes["searched-list"]} ${classes["grid"]} ${classes["grid--6-cols"]} `}
        >
          {/* Card 1 */}
          <li className={classes["searched-list-item"]}>
            <Link to="/products" className={classes["searched-list-item-link"]}>
              <div className={classes["searched-card"]}>
                <img
                  src={bonsiiImage}
                  alt=""
                  className={classes["searched-card-img"]}
                />
                <div className={classes["searched-card-text"]}>Bonnsii</div>
              </div>
            </Link>
          </li>
          {/* Card 2 */}
          <li className={classes["searched-list-item"]}>
            <Link to="/products" className={classes["searched-list-item-link"]}>
              <div className={classes["searched-card"]}>
                <img
                  src={monstreaImage}
                  alt=""
                  className={classes["searched-card-img"]}
                />
                <div className={classes["searched-card-text"]}>Monstrea</div>
              </div>
            </Link>
          </li>
          {/* Card 3 */}
          <li className={classes["searched-list-item"]}>
            <Link to="/products" className={classes["searched-list-item-link"]}>
              <div className={classes["searched-card"]}>
                <img
                  src={chocolateImage}
                  alt=""
                  className={classes["searched-card-img"]}
                />
                <div className={classes["searched-card-text"]}>Chocolate</div>
              </div>
            </Link>
          </li>
          {/* Card 4 */}
          <li className={classes["searched-list-item"]}>
            <Link to="/products" className={classes["searched-list-item-link"]}>
              <div className={classes["searched-card"]}>
                <img
                  src={terriuamImage}
                  alt=""
                  className={classes["searched-card-img"]}
                />
                <div className={classes["searched-card-text"]}>Terriuam</div>
              </div>
            </Link>
          </li>
          {/* Card 5 */}
          <li className={classes["searched-list-item"]}>
            <Link to="/products" className={classes["searched-list-item-link"]}>
              <div className={classes["searched-card"]}>
                <img
                  src={mossImage}
                  alt=""
                  className={classes["searched-card-img"]}
                />
                <div className={classes["searched-card-text"]}>Moss Wall</div>
              </div>
            </Link>
          </li>
          {/* Card 6 */}
          <li className={classes["searched-list-item"]}>
            <Link to="/products" className={classes["searched-list-item-link"]}>
              <div className={classes["searched-card"]}>
                <img
                  src={hydroponicImage}
                  alt=""
                  className={classes["searched-card-img"]}
                />
                <div className={classes["searched-card-text"]}>Hydroponics</div>
              </div>
            </Link>
          </li>
        </ul>
      </div>
      
    </Fragment>
  );
};
export default SearchedCategory;
