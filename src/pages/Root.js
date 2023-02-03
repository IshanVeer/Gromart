import { Outlet } from "react-router-dom";
import React, { Fragment } from "react";
import MainNavigation from "../components/Header/MainNavigation";

const RootPage = () => {
  return (
    <Fragment>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
    </Fragment>
  );
};
export default RootPage;
