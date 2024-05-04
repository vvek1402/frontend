let ctx = document.getElementById("DoughnutChart").getContext("2d");
let myChart = new Chart(ctx, {
  type: "doughnut",
  data: {
    labels: ["M", "T", "W", "T", "F", "S", "S"],
    datasets: [
      {
        backgroundColor: [
          "#2ecc71",
          "#3498db",
          "#95a5a6",
          "#9b59b6",
          "#f1c40f",
          "#e74c3c",
          "#34495e",
        ],
        data: [12, 19, 3, 17, 28, 24, 7],
      },
    ],
  },
});

const labels = ["M", "T", "W", "T", "F", "S", "S"];
const data = {
  labels: labels,
  datasets: [{
    label: 'My First Dataset',
    data: [65, 59, 80, 81, 56, 55, 40],
    fill: false,
    borderColor: 'rgb(75, 192, 192)',
    tension: 0.1
  }]
};

let linectx = document.getElementById("lineChart").getContext("2d");
let lineChart = new Chart(linectx, {
  type: "line",
  data: data
});


const menuIcon = document.querySelector(".ham-icon");
const sidebar = document.querySelector(".sidebar");
const main = document.getElementById("main");

menuIcon.addEventListener("click", (event) => {
  event.stopPropagation(); 
  sidebar.classList.toggle("active");
  main.classList.toggle("active");
});

document.addEventListener("click", () => {
  if (sidebar.classList.contains("active")) {
    sidebar.classList.remove("active");
    main.classList.remove("active");
  }
});