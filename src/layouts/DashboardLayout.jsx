import { NavLink, Outlet, useNavigate } from "react-router-dom";

import "./DashboardLayout.css";

function DashboardLayout({setIsLoggedIn}) {
const navigate = useNavigate();

function handleLogout(){
    setIsLoggedIn(false);
    navigate("/");
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

                </nav>
            </aside>

            <main className="dashboard-content">
                <Outlet/>
            </main>
        </div>
    )
}

export default DashboardLayout;