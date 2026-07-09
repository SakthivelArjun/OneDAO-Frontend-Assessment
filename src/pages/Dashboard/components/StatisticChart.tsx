import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { getElementAtEvent } from "react-chartjs-2";
import api from "@/utils/api";
import type { ChartDataPoint } from "@/types";
import { LineChart } from "@/components/ui";

export const StatisticChart: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(7);
  const chartRef = useRef<any>(null);

  const [chartData, setChartData] = useState<ChartDataPoint[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<any>(null);
  const hasFetched = useRef(false);

  useEffect(() => {
    if (hasFetched.current) return;
    hasFetched.current = true;

    const fetchChartData = async () => {
      try {
        const res = await api.get("/api/chart.json");
        setChartData(res.data);
      } catch (err: any) {
        console.error(err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchChartData();
  }, []);

  const currentData = chartData[activeIndex] || {
    month: "Aug",
    averageGrade: 71,
    exams: 60,
  };
  const ratingValue = (currentData.averageGrade / 10).toFixed(1);

  const handlePrevMonth = () => {
    if (!Array.isArray(chartData) || chartData.length === 0) return;
    setActiveIndex((prev) => (prev === 0 ? chartData.length - 1 : prev - 1));
  };

  const handleNextMonth = () => {
    if (!Array.isArray(chartData) || chartData.length === 0) return;
    setActiveIndex((prev) => (prev === chartData.length - 1 ? 0 : prev + 1));
  };

  const onChartClick = (event: React.MouseEvent<HTMLCanvasElement>) => {
    if (!chartRef.current) return;
    const elements = getElementAtEvent(chartRef.current, event);
    if (elements.length > 0) {
      const { index } = elements[0];
      setActiveIndex(index);
    }
  };

  const labels = Array.isArray(chartData) ? chartData.map((d) => d.month) : [];
  const averageGrades = Array.isArray(chartData)
    ? chartData.map((d) => d.averageGrade)
    : [];
  const exams = Array.isArray(chartData) ? chartData.map((d) => d.exams) : [];

  const data = {
    labels,
    datasets: [
      {
        label: "Average Grade",
        data: averageGrades,
        borderColor: "#4318ff",
        backgroundColor: "transparent",
        borderWidth: 3.5,
        tension: 0.45,
        pointRadius: Array.isArray(chartData)
          ? chartData.map((_, i) => (i === activeIndex ? 6 : 0))
          : [],
        pointHoverRadius: 8,
        pointBackgroundColor: "#4318ff",
        pointBorderColor: "#ffffff",
        pointBorderWidth: 2.5,
      },
      {
        label: "Exams",
        data: exams,
        borderColor: "#05cd99",
        backgroundColor: "transparent",
        borderWidth: 3.5,
        tension: 0.45,
        pointRadius: Array.isArray(chartData)
          ? chartData.map((_, i) => (i === activeIndex ? 6 : 0))
          : [],
        pointHoverRadius: 8,
        pointBackgroundColor: "#05cd99",
        pointBorderColor: "#ffffff",
        pointBorderWidth: 2.5,
      },
    ],
  };

  return (
    <div className="dashboard-card chart-card flex-grow-1 d-flex flex-column mb-0">
      <div className="d-flex flex-column mb-4">
        {/* Row 1: Statistic title and navigation chevrons */}
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h4 className="fs-5 fw-bold m-0" style={{ color: "#2b3674" }}>
            Statistic
          </h4>
          <div
            className="d-flex align-items-center gap-2"
            style={{ color: "#a3aed0", fontSize: "13px", fontWeight: "600" }}
          >
            <FontAwesomeIcon
              icon={faChevronLeft}
              onClick={handlePrevMonth}
              style={{ cursor: "pointer", fontSize: "11px" }}
            />
            <span
              style={{
                color: "#2b3674",
                width: "70px",
                textAlign: "center",
                display: "inline-block",
              }}
            >
              {currentData.month} 2021
            </span>
            <FontAwesomeIcon
              icon={faChevronRight}
              onClick={handleNextMonth}
              style={{ cursor: "pointer", fontSize: "11px" }}
            />
          </div>
        </div>

        {/* Row 2: Progress score and legend */}
        <div className="d-flex justify-content-between align-items-center">
          <h5 className="fs-6 fw-bold m-0" style={{ color: "#2b3674" }}>
            Progress score
          </h5>
          <div className="d-flex gap-3 align-items-center">
            <div className="d-flex align-items-center gap-2">
              <span
                className="d-inline-block rounded-circle"
                style={{
                  width: "8px",
                  height: "8px",
                  backgroundColor: "#4318ff",
                }}
              ></span>
              <span
                className="small fw-semibold"
                style={{ color: "#a3aed0", fontSize: "12px" }}
              >
                Average grade:{" "}
                <strong style={{ color: "#4318ff" }}>
                  {currentData.averageGrade}%
                </strong>
              </span>
            </div>
            <div className="d-flex align-items-center gap-2">
              <span
                className="d-inline-block rounded-circle"
                style={{
                  width: "8px",
                  height: "8px",
                  backgroundColor: "#05cd99",
                }}
              ></span>
              <span
                className="small fw-semibold"
                style={{ color: "#a3aed0", fontSize: "12px" }}
              >
                Exams:{" "}
                <strong style={{ color: "#05cd99" }}>
                  {currentData.exams}
                </strong>
              </span>
            </div>
            {/* Display points rating */}
            <div
              className="badge bg-secondary text-white ms-2"
              style={{
                fontSize: "11px",
                borderRadius: "6px",
                backgroundColor: "#8f9bba",
              }}
            >
              {ratingValue} pts
            </div>
          </div>
        </div>
      </div>

      <div
        className="w-100 flex-grow-1 d-flex align-items-center"
        style={{ position: "relative" }}
      >
        {loading && (
          <div className="d-flex justify-content-center align-items-center w-100 h-100 py-5">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        )}

        {error && (
          <div
            className="alert alert-danger w-100 py-3 text-center"
            role="alert"
          >
            Failed to load statistic chart data.
          </div>
        )}

        {!loading &&
          !error &&
          Array.isArray(chartData) &&
          chartData.length > 0 && (
            <LineChart
              chartRef={chartRef}
              data={data}
              onClick={onChartClick}
            />
          )}
      </div>
    </div>
  );
};

export default StatisticChart;
