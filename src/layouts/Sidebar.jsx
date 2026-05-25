import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="sidebar">
      <nav className="sidebar-links">
        <NavLink to="/dashboard">Home</NavLink>

        <NavLink to="profile">Profile</NavLink>

        <NavLink to="settings">Settings</NavLink>

        <NavLink to="users">Users</NavLink>
      </nav>
    </aside>
  );
}

export default Sidebar;
