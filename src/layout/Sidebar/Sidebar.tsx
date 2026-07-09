import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThLarge,
  faShoppingCart,
  faCar,
  faUsers,
  faUserTie,
  faClock,
  faMap,
  faList,
  faBuilding,
  faUserShield,
  faCog,
} from "@fortawesome/free-solid-svg-icons";
import "./Sidebar.css";

interface SidebarProps {
  onToggleSidebar?: () => void;
}

const Sidebar: React.FC<SidebarProps> = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Extract path and default to 'dashboard' if path is empty/root
  const path = location.pathname.substring(1);
  const activeTab = path || "dashboard";

  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: faThLarge },
    { id: "orders", label: "Orders", icon: faShoppingCart },
    { id: "rides", label: "Rides", icon: faCar },
    { id: "clients", label: "Clients", icon: faUsers },
    { id: "drivers", label: "Drivers", icon: faUserTie },
    { id: "shift", label: "Shift", icon: faClock },
    { id: "livemap", label: "Live map", icon: faMap },
    { id: "carclasses", label: "Car classes", icon: faList },
    { id: "branches", label: "Branches", icon: faBuilding },
    { id: "moderators", label: "Moderators", icon: faUserShield },
    { id: "settings", label: "Settings", icon: faCog },
  ];

  return (
    <aside className="sidebar-panel">
      {/* Profile Section */}
      <div className="sidebar-profile">
        <img
          className="sidebar-avatar me-2"
          src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150"
          alt="Avatar"
        />
        <div className="sidebar-profile-info">
          <h5 className="sidebar-user-name">Maharram</h5>
          <p className="sidebar-user-phone">+998 (99) 436-46-15</p>
        </div>
      </div>

      {/* Menu Container */}
      <div className="sidebar-menu-container">
        <div className="sidebar-nav-title">MAIN MENU</div>
        <ul className="sidebar-menu">
          {menuItems.map((item) => (
            <li key={item.id} className="sidebar-item">
              <a
                onClick={() => navigate("/" + item.id)}
                className={`sidebar-link ${activeTab === item.id ? "active" : ""}`}
              >
                <FontAwesomeIcon icon={item.icon} className="sidebar-icon" />
                <span>{item.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
export type { SidebarProps };
