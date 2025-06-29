import React from "react";
import { Outlet } from "react-router";
import ProtectedRoutes from "../../middleware/ProtectedRoutes";

const AdminLayout = () => {
  ProtectedRoutes();
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default AdminLayout;
