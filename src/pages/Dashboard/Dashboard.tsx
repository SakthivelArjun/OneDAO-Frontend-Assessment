import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolder, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { RidesTable } from "./components/RidesTable";
import { StatisticChart } from "./components/StatisticChart";
import { DriversList } from "./components/DriversList";
import "./Dashboard.css";

const Dashboard: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div>
      <div className="row g-3 mb-4 align-items-stretch">
        <div className="col-12 col-xl-8 d-flex flex-column">
          {/* Knowledge Base */}
          <h4 className="fs-5 fw-bold text-dark mb-3">Knowledge base</h4>
          <div className="row g-3 mb-4">
            <div className="col-12 col-md-6 col-xxl-3 animate-fade-in-up" style={{ animationDelay: "50ms" }}>
              <div className="kb-card kb-card-blue d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center gap-3">
                  <div className="kb-icon-container d-flex align-items-center justify-content-center">
                    <FontAwesomeIcon icon={faFolder} />
                  </div>
                  <span className="fw-bold small">Total Orders</span>
                </div>
                <FontAwesomeIcon icon={faChevronRight} className="small" />
              </div>
            </div>

            <div className="col-12 col-md-6 col-xxl-3 animate-fade-in-up" style={{ animationDelay: "100ms" }}>
              <div className="kb-card kb-card-red d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center gap-3">
                  <div className="kb-icon-container d-flex align-items-center justify-content-center">
                    <FontAwesomeIcon icon={faFolder} />
                  </div>
                  <span className="fw-bold small">Total Earnings</span>
                </div>
                <FontAwesomeIcon icon={faChevronRight} className="small" />
              </div>
            </div>

            <div className="col-12 col-md-6 col-xxl-3 animate-fade-in-up" style={{ animationDelay: "150ms" }}>
              <div className="kb-card kb-card-orange d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center gap-3">
                  <div className="kb-icon-container d-flex align-items-center justify-content-center">
                    <FontAwesomeIcon icon={faFolder} />
                  </div>
                  <span className="fw-bold small">Profit</span>
                </div>
                <FontAwesomeIcon icon={faChevronRight} className="small" />
              </div>
            </div>

            <div className="col-12 col-md-6 col-xxl-3 animate-fade-in-up" style={{ animationDelay: "200ms" }}>
              <div className="kb-card kb-card-green d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center gap-3">
                  <div className="kb-icon-container d-flex align-items-center justify-content-center">
                    <FontAwesomeIcon icon={faFolder} />
                  </div>
                  <span className="fw-bold small">Catalog</span>
                </div>
                <FontAwesomeIcon icon={faChevronRight} className="small" />
              </div>
            </div>
          </div>

          {/* Chart */}
          <div className="animate-fade-in-up flex-grow-1 d-flex flex-column" style={{ animationDelay: "250ms" }}>
            <StatisticChart />
          </div>
        </div>

        {/* Drivers sidebar */}
        <DriversList />
      </div>

      {/* Recent rides */}
      <div className="animate-fade-in-up" style={{ animationDelay: "350ms" }}>
        <RidesTable currentPage={currentPage} setCurrentPage={setCurrentPage} />
      </div>
    </div>
  );
};

export default Dashboard;
