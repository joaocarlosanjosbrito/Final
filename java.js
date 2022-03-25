new Chart(document.getElementById("bar-chart"), {
    type: 'bar',
    data: {
      labels: [" ", " ", " ", " ", " ", " ", " ", " "],
      datasets: [
        {
          label: " ",
          backgroundColor: ["rgb(238, 135, 17)","rgb(247, 72, 72)","rgb(238, 135, 17)","rgb(247, 72, 72)","rgb(238, 135, 17)","rgb(247, 72, 72)","rgb(238, 135, 17)","rgb(247, 72, 72)"],
          data: [70,80,89,90,85,93,95,89]
        }
      ]
    },
    options: {
      legend: { display: false },
      title: {
        display: true,
        text: ''
      }
    }
});