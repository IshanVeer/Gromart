import { Link } from "react-router-dom";
import React, { Fragment } from "react";
import classes from "./BestSellers.module.css";
import image1 from "../../assets/images/best-sellers/best-seller-1.jpg";
import image2 from "../../assets/images/best-sellers/best-seller-2.jpg";
import image3 from "../../assets/images/best-sellers/best-seller-3.jpg";
import image4 from "../../assets/images/best-sellers/best-seller-4.jpg";
import image5 from "../../assets/images/best-sellers/best-seller-5.jpg";
import image6 from "../../assets/images/best-sellers/best-seller-6.jpg";
import image7 from "../../assets/images/best-sellers/best-seller-7.jpg";
import image8 from "../../assets/images/best-sellers/best-seller-8.jpg";
import image9 from "../../assets/images/best-sellers/best-seller-9.jpg";
import image10 from "../../assets/images/best-sellers/best-seller-10.jpg";
import image11 from "../../assets/images/best-sellers/best-seller-11.jpg";
import image12 from "../../assets/images/best-sellers/best-seller-12.jpg";

const BestSellers = () => {
  return (
    <Fragment>
      <div className={classes["bestsellers"]}>
        <h2 className={classes["bestsellers-heading"]}>Best Sellers</h2>
        <ul
          className={`${classes["bestsellers-list"]} ${classes["grid"]} ${classes["grid--6-cols"]}`}
        >
          {/* card 1 */}
          <li className={classes["bestsellers-list-item"]}>
            <Link
              className={classes["bestsellers-list-item-link"]}
              to="/products"
            >
              <div className={classes["bestsellers-card"]}>
                <div className={classes["bestsellers-card-image-box"]}>
                  <img
                    src={image1}
                    alt="cardboard house"
                    className={classes["bestsellers-card-image"]}
                  />
                </div>
                <div className={classes["bestsellers-card-text"]}>A$47.00</div>
              </div>
            </Link>
          </li>
          {/* card 2 */}
          <li className={classes["bestsellers-list-item"]}>
            <Link
              className={classes["bestsellers-list-item-link"]}
              to="/products"
            >
              <div className={classes["bestsellers-card"]}>
                <div className={classes["bestsellers-card-image-box"]}>
                  <img
                    src={image2}
                    alt="cardboard house"
                    className={classes["bestsellers-card-image"]}
                  />
                </div>
                <div className={classes["bestsellers-card-text"]}>A$47.00</div>
              </div>
            </Link>
          </li>
          {/* card 3 */}
          <li className={classes["bestsellers-list-item"]}>
            <Link
              className={classes["bestsellers-list-item-link"]}
              to="/products"
            >
              <div className={classes["bestsellers-card"]}>
                <div className={classes["bestsellers-card-image-box"]}>
                  <img
                    src={image3}
                    alt="cardboard house"
                    className={classes["bestsellers-card-image"]}
                  />
                </div>
                <div className={classes["bestsellers-card-text"]}>A$47.00</div>
              </div>
            </Link>
          </li>
          {/* card 4 */}
          <li className={classes["bestsellers-list-item"]}>
            <Link
              className={classes["bestsellers-list-item-link"]}
              to="/products"
            >
              <div className={classes["bestsellers-card"]}>
                <div className={classes["bestsellers-card-image-box"]}>
                  <img
                    src={image4}
                    alt="cardboard house"
                    className={classes["bestsellers-card-image"]}
                  />
                </div>
                <div className={classes["bestsellers-card-text"]}>A$47.00</div>
              </div>
            </Link>
          </li>
          {/* card 5 */}
          <li className={classes["bestsellers-list-item"]}>
            <Link
              className={classes["bestsellers-list-item-link"]}
              to="/products"
            >
              <div className={classes["bestsellers-card"]}>
                <div className={classes["bestsellers-card-image-box"]}>
                  <img
                    src={image5}
                    alt="cardboard house"
                    className={classes["bestsellers-card-image"]}
                  />
                </div>
                <div className={classes["bestsellers-card-text"]}>A$47.00</div>
              </div>
            </Link>
          </li>
          {/* card 6 */}
          <li className={classes["bestsellers-list-item"]}>
            <Link
              className={classes["bestsellers-list-item-link"]}
              to="/products"
            >
              <div className={classes["bestsellers-card"]}>
                <div className={classes["bestsellers-card-image-box"]}>
                  <img
                    src={image6}
                    alt="cardboard house"
                    className={classes["bestsellers-card-image"]}
                  />
                </div>
                <div className={classes["bestsellers-card-text"]}>A$47.00</div>
              </div>
            </Link>
          </li>
          {/* card 7 */}
          <li className={classes["bestsellers-list-item"]}>
            <Link
              className={classes["bestsellers-list-item-link"]}
              to="/products"
            >
              <div className={classes["bestsellers-card"]}>
                <div className={classes["bestsellers-card-image-box"]}>
                  <img
                    src={image7}
                    alt="cardboard house"
                    className={`${classes["bestsellers-card-image"]} ${classes["img-resize"]}`}
                  />
                </div>
                <div className={classes["bestsellers-card-text"]}>A$47.00</div>
              </div>
            </Link>
          </li>
          {/* card 8 */}
          <li className={classes["bestsellers-list-item"]}>
            <Link
              className={classes["bestsellers-list-item-link"]}
              to="/products"
            >
              <div className={classes["bestsellers-card"]}>
                <div className={classes["bestsellers-card-image-box"]}>
                  <img
                    src={image8}
                    alt="cardboard house"
                    className={classes["bestsellers-card-image"]}
                  />
                </div>
                <div className={classes["bestsellers-card-text"]}>A$47.00</div>
              </div>
            </Link>
          </li>
          {/* card 9 */}
          <li className={classes["bestsellers-list-item"]}>
            <Link
              className={classes["bestsellers-list-item-link"]}
              to="/products"
            >
              <div className={classes["bestsellers-card"]}>
                <div className={classes["bestsellers-card-image-box"]}>
                  <img
                    src={image9}
                    alt="cardboard house"
                    className={classes["bestsellers-card-image"]}
                  />
                </div>
                <div className={classes["bestsellers-card-text"]}>A$47.00</div>
              </div>
            </Link>
          </li>
          {/* card 10 */}
          <li className={classes["bestsellers-list-item"]}>
            <Link
              className={classes["bestsellers-list-item-link"]}
              to="/products"
            >
              <div className={classes["bestsellers-card"]}>
                <div className={classes["bestsellers-card-image-box"]}>
                  <img
                    src={image10}
                    alt="cardboard house"
                    className={classes["bestsellers-card-image"]}
                  />
                </div>
                <div className={classes["bestsellers-card-text"]}>A$47.00</div>
              </div>
            </Link>
          </li>
          {/* card 11 */}
          <li className={classes["bestsellers-list-item"]}>
            <Link
              className={classes["bestsellers-list-item-link"]}
              to="/products"
            >
              <div className={classes["bestsellers-card"]}>
                <div className={classes["bestsellers-card-image-box"]}>
                  <img
                    src={image11}
                    alt="cardboard house"
                    className={classes["bestsellers-card-image"]}
                  />
                </div>
                <div className={classes["bestsellers-card-text"]}>A$47.00</div>
              </div>
            </Link>
          </li>
          {/* card 12 */}
          <li className={classes["bestsellers-list-item"]}>
            <Link
              className={classes["bestsellers-list-item-link"]}
              to="/products"
            >
              <div className={classes["bestsellers-card"]}>
                <div className={classes["bestsellers-card-image-box"]}>
                  <img
                    src={image12}
                    alt="cardboard house"
                    className={classes["bestsellers-card-image"]}
                  />
                </div>
                <div className={classes["bestsellers-card-text"]}>A$47.00</div>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </Fragment>
  );
};
export default BestSellers;
