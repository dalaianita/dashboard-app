import { NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";

import "./DashboardLayout.css";
import { Suspense } from "react";
import PageLoader from "../components/PageLoader";

function DashboardLayout({ setIsLoggedIn }) {  
  const navigate = useNavigate();
  const location = useLocation();

  function handleLogout() {
    setIsLoggedIn(false);
    navigate("/");
  }

  function handleBack() {
    navigate(-1);
  }

  function handleNext() {
    navigate(1);
  }

  function handleDoubleNext() {
    navigate(2);
  }

  return (
    <div className="dashboard-layout">
      <aside className="sidebar">
        <nav className="sidebar-links">
          <NavLink to="/dashboard">Home</NavLink>

          <NavLink to="profile">Profile</NavLink>

          <NavLink to="settings">Settings</NavLink>

          <NavLink to="users">Users</NavLink>

          <button onClick={handleLogout}>Logout</button>
          <button onClick={handleBack}>Back</button>
          <button onClick={handleNext}>Next</button>
          <button onClick={handleDoubleNext}>Next to Next</button>
        </nav>
      </aside>

      <main className="dashboard-content">
        <h2>PathName: {location.pathname}</h2>

        <Suspense fallback={<PageLoader/>}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
}

export default DashboardLayout;
