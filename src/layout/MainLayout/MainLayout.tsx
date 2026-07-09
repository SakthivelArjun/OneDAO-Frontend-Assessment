import React, { useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";
import { Toast } from "@/components/ui";
import "./MainLayout.css";

const MainLayout: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  useEffect(() => {
    if (location.state?.message) {
      setToastMessage(location.state.message);
      navigate(location.pathname, { replace: true, state: {} });
    }
  }, [location, navigate]);

  useEffect(() => {
    setSidebarOpen(false);
  }, [location.pathname]);

  return (
    <div className="dashboard-container">
      {toastMessage && (
        <Toast
          message={toastMessage}
          type="success"
          onClose={() => setToastMessage(null)}
        />
      )}
      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          className="position-fixed top-0 start-0 w-100 h-100 bg-dark opacity-50 d-lg-none"
          style={{ zIndex: 90 }}
        />
      )}

      <div className={`sidebar-mobile-wrapper ${sidebarOpen ? "sidebar-open" : ""}`}>
        <Sidebar onToggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
      </div>
      <div className="dashboard-content-wrapper">
        <div className="dashboard-main">
          <Navbar onToggleSidebar={() => setSidebarOpen(!sidebarOpen)} />

          <div className="dashboard-body">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
