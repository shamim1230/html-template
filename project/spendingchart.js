
const ratcoder = document
  .getElementById("monthlyExpenditureChart")
  .getContext("2d");

// Data for the chart
const data = {
  labels: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
  datasets: [
    // Primary Wave (weekly)
    {
      label: "weekly",
      data: [
        2000, 5000, 3500, 4000, 9000, 8000, 7500, 6500, 7000, 8500, 9000,
        8000,
      ],
      borderColor: "#ff00ff",
      backgroundColor: "rgba(255, 0, 255, 0.1)",
      borderWidth: 10,
      tension: 0.4, // Smooth curve
      pointBackgroundColor: "#c705f2",
      pointBorderColor: "#ffffff",
      pointBorderWidth: 4,
      pointRadius: 6,
      pointHoverRadius: 8,
    },
    // Crossing Wave (Monthly with 20px Gap)
    {
      label: "monthly ",
      data: [
        1000, 4420, 4500, 3920, 7500, 7500, 1800, 5000, 6500, 8000, 8220,
        3000,
      ], // Values offset by 20px lower than "monthly grow"
      borderColor: "#00ffff",
      backgroundColor: "rgba(0, 255, 255, 0.1)",
      borderWidth: 10,
      tension: 0.4, // Smooth curve
      pointBackgroundColor: "#00ffff",
      pointBorderColor: "#ffffff",
      pointBorderWidth: 6,
      pointRadius: 6,
      pointHoverRadius: 8,
    },
  ],
};

// Chart configuration
const config = {
  type: "line",
  data: data,
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: false, // Hides the legend
      },
    },
    scales: {
      x: {
        ticks: {
          color: "#a0a0a0",
          font: {
            size: 12,
          },
        },
        grid: {
          display: false,
        },
      },
      y: {
        ticks: {
          color: "#a0a0a0",
          font: {
            size: 12,
          },
        },
        grid: {
          color: "#2a2a2a",
        },
      },
    },
    animation: {
      duration: 2000, // Smooth animation
      easing: "easeInOutCubic",
    },
  },
};

new Chart(ratcoder, config);
