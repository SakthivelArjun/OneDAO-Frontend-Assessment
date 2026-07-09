import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

interface PaginationProps {
  currentPage: number;
  totalItems: number;
  itemsPerPage: number;
  onPageChange: (page: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalItems,
  itemsPerPage,
  onPageChange,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  if (totalPages <= 1) return null;

  // Generate page numbers
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  const startItem = (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(currentPage * itemsPerPage, totalItems);

  return (
    <div className="d-flex justify-content-end align-items-center gap-2 mt-2">
      <span
        className="small fw-semibold"
        style={{ color: "#a3aed0", fontSize: "13px" }}
      >
        {startItem}-{endItem} of {totalItems} items
      </span>
      <div className="d-flex gap-1">
        <button
          className={`btn-pagination ${currentPage === 1 ? "disabled" : ""}`}
          onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>

        {pageNumbers.map((num) => (
          <button
            key={num}
            className={`btn-pagination ${currentPage === num ? "active" : ""}`}
            onClick={() => onPageChange(num)}
          >
            {num}
          </button>
        ))}

        <button
          className={`btn-pagination ${currentPage === totalPages ? "disabled" : ""}`}
          onClick={() => currentPage < totalPages && onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
