import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";

export const UnderDevelopment: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const pageName = location.pathname.substring(1);
  const formattedPageName = pageName.charAt(0).toUpperCase() + pageName.slice(1);

  return (
    <div className="text-center py-5 bg-white rounded-4 shadow-sm">
      <FontAwesomeIcon
        icon={faInfoCircle}
        className="text-primary mb-3"
        size="2x"
      />
      <h5 className="text-dark">Section Coming Soon</h5>
      <p className="text-muted small">
        The "{formattedPageName.toUpperCase()}" page module is currently
        scheduled for development.
      </p>
      <button
        onClick={() => navigate("/dashboard")}
        className="btn btn-dark btn-sm rounded-3 px-4 mt-2"
      >
        Back to Dashboard
      </button>
    </div>
  );
};

export default UnderDevelopment;
