import utils from "../../utils";
import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const data = {
  labels: ["Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4", "Tháng 5", "Tháng 6"],
  datasets: [
    {
      label: "Doanh thu",
      data: [100, 200, 300, 400, 500, 600],
      backgroundColor: [
        "#F7464A",
        "#46BFBD",
        "#FDB45C",
        "#949FB1",
        "#4D5360",
        "#8e44ad",
      ],
      borderColor: [
        "#FF5A5E",
        "#5AD3D1",
        "#FFC870",
        "#A8B3C5",
        "#616774",
        "#9b59b6",
      ],
      borderWidth: 1,
    },
  ],
};

const MyChart = () => {
  const chartContainer = useRef(null);

  useEffect(() => {
    let myChart = null;

    const chartConfig = {
      type: "bar",
      data: {
        labels: [
          "Tháng 1",
          "Tháng 2",
          "Tháng 3",
          "Tháng 4",
          "Tháng 5",
          "Tháng 6",
        ],
        datasets: [
          {
            label: "Doanh thu",
            data: [100, 200, 300, 400, 500, 600],
            backgroundColor: [
              "#F7464A",
              "#46BFBD",
              "#FDB45C",
              "#949FB1",
              "#4D5360",
              "#8e44ad",
            ],
            borderColor: [
              "#FF5A5E",
              "#5AD3D1",
              "#FFC870",
              "#A8B3C5",
              "#616774",
              "#9b59b6",
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    };

    if (chartContainer && chartContainer.current) {
      const ctx = chartContainer.current.getContext("2d");

      // Hủy bỏ biểu đồ trước đó (nếu có)
      if (myChart) {
        myChart.destroy();
      }

      // Vẽ biểu đồ mới
      myChart = new Chart(ctx, chartConfig);
    }

    return () => {
      if (myChart) {
        myChart.destroy();
      }
    };
  }, []);

  return <canvas ref={chartContainer} />;
};

export const ProfitManagementPage = () => {
  const isUserAdmin = utils.isAdmin();
  console.log(isUserAdmin);

  if (isUserAdmin) {
    return <MyChart />;
  } else {
    return <Navigate to="/room-management" />;
  }
};
