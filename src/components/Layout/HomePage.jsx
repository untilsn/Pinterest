import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import HomeLanding from "./HomeLading";

const HomePage = () => {
  return (
    <Fragment>
      <HomeLanding></HomeLanding>
      <Outlet></Outlet>
    </Fragment>
  );
};

export default HomePage;
