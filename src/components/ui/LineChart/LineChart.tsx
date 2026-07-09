import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip as ChartTooltip,
  Filler,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ChartTooltip,
  Filler
);

interface LineChartProps {
  data: {
    labels: string[];
    datasets: Array<{
      label: string;
      data: number[];
      borderColor: string;
      backgroundColor: string;
      borderWidth: number;
      tension: number;
      pointRadius: number[];
      pointHoverRadius: number;
      pointBackgroundColor: string;
      pointBorderColor: string;
      pointBorderWidth: number;
    }>;
  };
  onClick?: (event: React.MouseEvent<HTMLCanvasElement>) => void;
  chartRef?: React.RefObject<any>;
  min?: number;
  max?: number;
}

export const LineChart: React.FC<LineChartProps> = ({
  data,
  onClick,
  chartRef,
  min = 0,
  max = 100,
}) => {
  const options: any = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
        backgroundColor: "#8f9bba",
        titleFont: { family: "Inter", size: 10, weight: "bold" },
        bodyFont: { family: "Inter", size: 10 },
        cornerRadius: 8,
        displayColors: false,
        padding: 8,
        callbacks: {
          label: (context: any) => {
            return ` ${context.dataset.label}: ${context.raw}%`;
          },
        },
      },
    },
    interaction: {
      mode: "index",
      intersect: false,
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: "#a3aed0",
          font: {
            family: "Inter",
            size: 11,
          },
        },
      },
      y: {
        grid: {
          color: "#f1f5f9",
          drawBorder: false,
        },
        min,
        max,
        ticks: {
          color: "#a3aed0",
          font: {
            family: "Inter",
            size: 11,
          },
        },
      },
    },
  };

  return (
    <Line
      ref={chartRef}
      data={data}
      options={options}
      onClick={onClick}
    />
  );
};

export default LineChart;
