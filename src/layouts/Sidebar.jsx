import { NavLink } from "react-router-dom";
import { useEffect, useState, memo } from "react";

const navItems = [
  { id: 1, label: "Home", path: "/dashboard" },
  { id: 2, label: "Profile", path: "profile" },
  { id: 3, label: "Settings", path: "settings" },
  { id: 4, label: "Users", path: "users" },
];

const Sidebar = memo(function Sidebar() {
    console.log("Sidebar rendered..");

  const [activeMenu, setActiveMenu] = useState("Home");


  return (
    <aside className="sidebar">
      <nav className="sidebar-links">
        {/* using list and keys */}
        {navItems.map((item) => (
          <NavLink
            key={item.id}
            to={item.path}
            className={
              activeMenu === item.label
                ? "sidebar-link active-link"
                : "sidebar-link"
            }
            onClick={() => setActiveMenu(item.label)}
          >
            {item.label}
          </NavLink>
        ))}
        {/* <NavLink to="/dashboard">Home</NavLink>

        <NavLink to="profile">Profile</NavLink>

        <NavLink to="settings">Settings</NavLink>

        <NavLink to="users">Users</NavLink> */}
      </nav>
    </aside>
  );
})

export default Sidebar;
