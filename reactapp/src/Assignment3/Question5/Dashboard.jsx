import { Link, Outlet } from "react-router-dom";

function Dashboard() {
  return (
    <>
      <h2>DashBoard</h2>
      <Link to="/dashboard/profile">Profile</Link>
      <Link to="/dashboard/settings">Settings</Link>
      <Outlet />
    </>
  );
}

export default Dashboard;
