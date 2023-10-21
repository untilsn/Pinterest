import React, { Fragment } from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";

const HomePage = () => {
  return (
    <Fragment>
      <Header></Header>
      <Outlet></Outlet>
    </Fragment>
  );
};

export default HomePage;
