import React from "react";
import Chart from "chart.js";

const RetirementChart = () => {
  const calculatedData = {
    years: [2023, 2024, 2025, 2026, 2027],
    requiredSavings: [100000, 120000, 140000, 160000, 180000],
  };

  const chartConfig = {
    type: "line",
    data: {
      labels: calculatedData.years,
      datasets: [
        {
          label: "Required Retirement Savings",
          data: calculatedData.requiredSavings,
          borderColor: "#3366CC",
          backgroundColor: "rgba(51, 102, 204, 0.2)",
        },
      ],
    },
    options: {
      title: {
        text: "Retirement Savings Projection",
      },
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
            },
          },
        ],
      },
    },
  };

  return (
    <div>
      <canvas id="retirementChart" width="600" height="400"></canvas>

      <script>
        const ctx = document.getElementById('retirementChart'); const chart =
        new Chart(ctx, chartConfig);
      </script>
    </div>
  );
};

export default RetirementChart;
