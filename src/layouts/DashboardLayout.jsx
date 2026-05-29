import { Outlet, useLocation, useNavigate } from "react-router-dom";

import "./DashboardLayout.css";
import { Suspense, useState } from "react";
import PageLoader from "../components/PageLoader";
import Sidebar from "./Sidebar";
import { useCallback } from "react";

function DashboardLayout({ setIsLoggedIn }) {  
  const navigate = useNavigate();
  
  const location = useLocation();

  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  console.log("DashboardLayout Rendered");

  const handleLogout = useCallback(() => {
    setIsLoggedIn(false);
    navigate("/");
  }, [navigate, setIsLoggedIn]);

  function handleBack() {
    navigate(-1);
  }

  function handleNext() {
    navigate(1);
  }

  function handleDoubleNext() {
    navigate(2);
  }

  function handleToggleSidebar (){
      console.log("Sidebar toggled");

    setIsSidebarOpen(!isSidebarOpen);

    localStorage.setItem("sidebar", "closed")
  }


//   return (
//     <div className="dashboard-layout">
//         <button onClick={handleToggelSidebar}>
//             Toggle Sidebar
//         </button>
//       {isSidebarOpen && <Sidebar />}

//       <main className="dashboard-content">
//         <h2>PathName: {location.pathname}</h2>

//         <Suspense fallback={<PageLoader/>}>
//           <Outlet />

//           <button onClick={handleLogout}>Logout</button>
//           <button onClick={handleBack}>Back</button>
//           <button onClick={handleNext}>Next</button>
//           <button onClick={handleDoubleNext}>Next to Next</button>
//         </Suspense>
//       </main>
//     </div>
//   );

return (
  <div className="dashboard-layout">

    <header className="dashboard-header">
      <button onClick={handleToggleSidebar}>
        ☰
      </button>
    </header>

    <div className="dashboard-body">

      {isSidebarOpen && <Sidebar />}

      <main className="dashboard-content">
        <h2>PathName: {location.pathname}</h2>

        <Suspense fallback={<PageLoader />}>
          <Outlet />

          <button onClick={handleLogout}>Logout</button>
          <button onClick={handleBack}>Back</button>
          <button onClick={handleNext}>Next</button>
          <button onClick={handleDoubleNext}>Next to Next</button>
        </Suspense>

      </main>

    </div>
  </div>
);
}

export default DashboardLayout;
