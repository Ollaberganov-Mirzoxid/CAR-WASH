// Global rang sozlamalari
Chart.defaults.color = '#a8adb0'; // barcha matn (legend, ticks, tooltip) uchun
Chart.defaults.borderColor = 'rgba(228,229,230,0.2)'; // grid chiziqlari uchun
Chart.defaults.font.size = '14';

// Revenue Chart (Line)
const ctx1 = document.getElementById('revenueChart');
new Chart(ctx1, {
    type: 'line',
    data: {
        labels: ['', 'Du', 'Se', 'Cho', 'Pay', 'Ju', 'Sha', 'Yak'],
        datasets: [{
            label: '1 240 000 UZS',
            data: [0, 120000, 150000, 80000, 200000, 170000, 220000, 300000],
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.4,
            fill: true,
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
        }]
    }
});

document.getElementById("sidebarToggle").addEventListener("click", function () {
  document.getElementById("sidebar").classList.toggle("active");
});
