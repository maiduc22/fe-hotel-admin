import utils from "../../utils";
import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";

export const MonthlyChart = ({ data }) => {
  const chartData = {
    labels: data.map((item) => `Month ${item.month}`),
    datasets: [
      {
        label: "Monthly Statistics",
        data: data.map((item) => item.total),
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  return <Bar data={chartData} options={chartOptions} />;
};
