import { Outlet } from "react-router-dom";
import React, { Fragment } from "react";

const RootPage = () => {
  return (
    <Fragment>
      <h1>Root Page</h1>
      <main>
        <Outlet />
      </main>
    </Fragment>
  );
};
export default RootPage;
