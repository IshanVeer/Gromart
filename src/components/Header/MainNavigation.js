import { Link } from "react-router-dom";
import React, { Fragment } from "react";
import classes from "./MainNavigation.module.css";
import { IoSearchOutline, IoLocationOutline } from "react-icons/io5";
import NavigationList from "./NavigationList";
import loginImage from "../../assets/images/header/dave.jpg";

const MainNavigation = () => {
  return (
    <Fragment>
      <nav className={classes["nav-bar"]}>
        {/* logo */}

        <Link to="/" className={classes.logo}>
          Gromart
        </Link>

        <div className={classes.border}></div>

        {/* search form */}
        <form className={classes.form}>
          <button className={classes["form--search__button"]}>
            <IoSearchOutline />
          </button>
          <input
            type="text"
            placeholder="Search nature..."
            className={classes["form--search"]}
          />
        </form>
        {/* navigation links */}
        <div className={classes["nav-link"]}>
          <ul className={classes["nav-link-list"]}>
            <li
              className={`${classes["nav-link-list-item"]} ${classes["location-icon"]} `}
            >
              <IoLocationOutline />
            </li>
            <li className={classes["nav-link-list-item"]}>
              <Link to="/" className={classes.link}>
                Sell your stock
              </Link>
            </li>
            <li className={classes["nav-link-list-item"]}>
              <Link to="/" className={classes.link}>
                Inbox
              </Link>
            </li>
            <li className={classes["nav-link-list-item"]}>
              <div className={classes["login-img__box"]}>
                <img
                  src={loginImage}
                  alt="login display"
                  className={classes["login-img"]}
                />
              </div>
            </li>
          </ul>
        </div>
      </nav>
      <NavigationList />
    </Fragment>

  );
};

export default MainNavigation;
