import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";

interface NavbarProps {
  onToggleSidebar?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onToggleSidebar }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user_session");
    navigate("/login", { state: { message: "Logged out successfully" } });
  };

  return (
    <header className="dashboard-header pt-2">
      <div className="d-flex align-items-center">
        {onToggleSidebar && (
          <button
            onClick={onToggleSidebar}
            className="btn btn-link p-0 me-3 text-dark"
            aria-label="Toggle Sidebar"
          >
            <FontAwesomeIcon icon={faBars} size="lg" />
          </button>
        )}
        <div className="header-greeting-wrapper">
          <h1 className="header-greeting">
            Good morning, <span className="italic-letter">M</span>aharram 👋
          </h1>
          <span className="greeting-subtext">
            you have <span className="highlight-text">1 new message</span>
          </span>
        </div>
      </div>

      <div className="header-actions">
        <button
          onClick={handleLogout}
          className="header-action-btn"
          title="Logout"
          aria-label="Logout"
        >
          <FontAwesomeIcon icon={faSignOutAlt} />
        </button>
      </div>
    </header>
  );
};

export default Navbar;
export type { NavbarProps };
