import React from "react";
import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <div>
      <div className="w-[300px] h-[480px] rounded-xl shadow-md bg-red p-4">
        <h4 className="text-xs">Currently in</h4>
        <div className="flex items-center gap-4 p-3 transition-all rounded-lg personal hover:bg-clr-gb-1 ">
          <div className="max-w-[60px] h-[60px] flex-1">
            <img
              src="https://images.unsplash.com/photo-1694984121999-36d30b67f391?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt=""
              className="object-cover w-full h-full rounded-full"
            />
          </div>
          <div className="flex flex-col ">
            <h1 className="text-lg font-bold">Name</h1>
            <span className="text-sm text-clr-gb-2 opacity-90">Personal</span>
            <p className="text-sm">Email</p>
          </div>
        </div>
        <div className="mt-2 ">
          <MenuAccount></MenuAccount>
          <MenuSetting></MenuSetting>
        </div>
      </div>
    </div>
  );
};

function MenuAccount() {
  return (
    <>
      <span className="px-2 text-sm font-light">Your Account</span>
      <div className="flex flex-col gap-2 mt-3 mb-5 font-medium">
        <NavLink
          to="/"
          className="px-2 py-2 transition-all hover:bg-slate-200 rounded-xl"
        >
          Home Page
        </NavLink>
        <NavLink
          to="/favorite"
          className="px-2 py-2 transition-all hover:bg-slate-200 rounded-xl"
        >
          Your Favorite
        </NavLink>
      </div>
    </>
  );
}

function MenuSetting() {
  return (
    <>
      <span className="= text-sm font-light px-2">More option</span>
      <div className="flex flex-col gap-2 mt-3 font-medium">
        <div className="px-2 py-2 transition-all hover:bg-slate-200 rounded-xl">
          Get help
        </div>
        <div className="px-2 py-2 transition-all hover:bg-slate-200 rounded-xl">
          See terms of service
        </div>
        <div className="px-2 py-2 transition-all hover:bg-slate-200 rounded-xl">
          LogIn
        </div>
      </div>
    </>
  );
}

export default Menu;
