import { NavLink, Outlet } from "react-router-dom";

import "./DashboardLayout.css";

function DashboardLayout() {
    return (
        <div className="dashboard-layout">
            <aside className="sidebar">
                <nav className="sidebar-links">
                    <NavLink to="/dashboard">Home</NavLink>

                    <NavLink to="profile">Profile</NavLink>

                    <NavLink to="settings">Settings</NavLink>

                    <NavLink to="users">Users</NavLink>

                </nav>
            </aside>

            <main className="dashboard-content">
                <Outlet/>
            </main>
        </div>
    )
}

export default DashboardLayout;