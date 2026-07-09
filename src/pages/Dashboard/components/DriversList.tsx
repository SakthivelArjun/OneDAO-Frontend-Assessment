import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import api from "@/utils/api";
import type { Driver } from "@/types";

export const DriversList: React.FC = () => {
  const [drivers, setDrivers] = useState<Driver[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<any>(null);
  const hasFetched = useRef(false);

  useEffect(() => {
    if (hasFetched.current) return;
    hasFetched.current = true;

    const fetchDrivers = async () => {
      try {
        const res = await api.get("/api/drivers.json");
        setDrivers(res.data);
      } catch (err: any) {
        console.error(err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchDrivers();
  }, []);

  return (
    <div
      className="col-12 col-xl-4 d-flex flex-column animate-fade-in-up"
      style={{ animationDelay: "300ms" }}
    >
      <div className="d-flex justify-content-between align-items-center mb-3 px-1">
        <h4 className="fs-5 fw-bold m-0" style={{ color: "#2b3674" }}>
          Top Drivers
        </h4>
        <FontAwesomeIcon
          icon={faChevronRight}
          style={{ color: "#2b3674", fontSize: "12px", cursor: "pointer" }}
        />
      </div>

      <div className="flex-grow-1">
        {loading && (
          <div className="d-flex justify-content-center align-items-center py-5">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        )}

        {error && (
          <div
            className="alert alert-danger py-2 px-3 small text-center"
            role="alert"
          >
            Failed to load drivers.
          </div>
        )}

        {!loading && !error && (
          <div className="row g-2">
            {Array.isArray(drivers) &&
              drivers.map((d, index) => (
                <div key={index} className="col-12 col-md-6 col-xl-12">
                  <div className="driver-card mb-0">
                    <div className="d-flex align-items-center">
                      <img
                        src={d.avatar}
                        alt={d.name}
                        className="driver-avatar"
                      />
                      <div>
                        <h6 className="driver-name">{d.name}</h6>
                        <span className="driver-phone">{d.phone}</span>
                      </div>
                    </div>
                    <div className="driver-stats">
                      <div className="driver-stat-row">
                        <span className="driver-stat-label">Orders :</span>
                        <span className="driver-stat-value">{d.orders}</span>
                      </div>
                      <div className="driver-stat-divider" />
                      <div className="driver-stat-row">
                        <span className="driver-stat-label">Income :</span>
                        <span className="driver-stat-value">
                          <span className="driver-currency">$</span> {d.income}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default DriversList;
