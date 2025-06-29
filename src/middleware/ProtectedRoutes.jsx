import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
const ProtectedRoutes = () => {
  let [user, setState] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    if (!user) {
      navigate("/login");
      return;
    }
    navigate("/admin");
  }, [user]);
  return null;
};
export default ProtectedRoutes;
