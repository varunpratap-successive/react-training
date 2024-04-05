import { Outlet, Navigate } from "react-router-dom";
import { useContext } from "react";
import { MyContext } from "./DashboardRouting";

function Authenticate() {
  const { auth } = useContext(MyContext);
  return auth.username === "varun" && auth.password === "abcde" ? (
    <Outlet />
  ) : (
    <Navigate to="/login" />
  );
}

export default Authenticate;
