import React from "react";
import { Outlet } from "react-router";
import { Header } from "./Header";
const DefaultLayout = () => {
  return (
    <div>
      <Header />
      <main style={{ paddingTop: "60px" }}>
        <Outlet />
      </main>
      <h1>Footer</h1>
    </div>
  );
};

export default DefaultLayout;
