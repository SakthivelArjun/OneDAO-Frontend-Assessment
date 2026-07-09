import React, { useState, useEffect, useRef } from "react";
import api from "@/utils/api";
import type { Ride } from "@/types";
import { Table, Pagination } from "@/components/ui";
import type { Column } from "@/components/ui";

interface RidesTableProps {
  currentPage: number;
  setCurrentPage: (page: number) => void;
}

const ITEMS_PER_PAGE = 5;

export const RidesTable: React.FC<RidesTableProps> = ({
  currentPage,
  setCurrentPage,
}) => {
  const [rides, setRides] = useState<Ride[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<any>(null);
  const hasFetched = useRef(false);

  useEffect(() => {
    if (hasFetched.current) return;
    hasFetched.current = true;

    const fetchRides = async () => {
      try {
        const res = await api.get("/api/rides.json");
        setRides(res.data);
      } catch (err: any) {
        console.error(err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchRides();
  }, []);

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center py-5 bg-white rounded-4 shadow-sm">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div
        className="alert alert-danger py-3 text-center rounded-4 shadow-sm"
        role="alert"
      >
        Failed to load rides log.
      </div>
    );
  }

  const paginatedRides = Array.isArray(rides)
    ? rides.slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE,
      )
    : [];

  const columns: Column<Ride>[] = [
    {
      key: "checkbox",
      header: <input type="checkbox" className="table-checkbox" />,
      className: "d-none d-lg-table-cell",
      style: { width: "50px" },
      render: () => <input type="checkbox" className="table-checkbox" />,
    },
    {
      key: "user",
      header: "User",
      className: "table-header-text",
      style: { width: "200px" },
      render: (ride) => (
        <div className="d-flex align-items-center">
          <img
            src={ride.avatar}
            alt={ride.user}
            className="driver-avatar"
            style={{
              width: "36px",
              height: "36px",
              borderRadius: "50%",
              marginRight: "12px",
            }}
          />
          <div>
            <div
              className="fw-bold"
              style={{ fontSize: "14px", color: "#2b3674" }}
            >
              {ride.user}
            </div>
            <span
              style={{
                fontSize: "11px",
                color: "#a3aed0",
                fontWeight: 500,
              }}
            >
              {ride.phone}
            </span>
          </div>
        </div>
      ),
    },
    {
      key: "comfort",
      header: "Car Comfort",
      className: "table-header-text d-none d-md-table-cell",
      style: { width: "130px" },
      render: (ride) => (
        <span className="table-cell-text text-muted text-lowercase">
          {ride.comfort}
        </span>
      ),
    },
    {
      key: "time",
      header: "Ordered Time",
      className: "table-header-text d-none d-sm-table-cell",
      style: { width: "150px" },
      render: (ride) => (
        <span className="table-cell-text text-muted">{ride.time}</span>
      ),
    },
    {
      key: "start",
      header: "Start Location",
      className: "table-header-text d-none d-md-table-cell",
      style: { width: "260px" },
      render: (ride) => <span className="table-location-text">{ride.start}</span>,
    },
    {
      key: "end",
      header: "Finish Location",
      className: "table-header-text d-none d-lg-table-cell",
      style: { width: "260px" },
      render: (ride) => <span className="table-location-text">{ride.end}</span>,
    },
    {
      key: "income",
      header: "Income",
      className: "table-header-text text-end",
      style: { width: "150px" },
      render: (ride) => <span className="badge-income">{ride.income}</span>,
    },
  ];

  return (
    <div>
      <Table columns={columns} data={paginatedRides} />

      <Pagination
        currentPage={currentPage}
        totalItems={Array.isArray(rides) ? rides.length : 0}
        itemsPerPage={ITEMS_PER_PAGE}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default RidesTable;
