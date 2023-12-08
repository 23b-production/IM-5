const ctx = document.getElementById('nutzung-1').getContext('2d');
const nutzungChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['seltener', 'täglich', 'wöchentlich', 'monatlich'],
        datasets: [{
            data: [29, 16, 37, 18],
            backgroundColor: [
                'rgba(255, 99, 132, 0.6)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(255, 206, 86, 0.6)',
                'rgba(75, 192, 192, 0.6)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false
    }
});


const ctx2 = document.getElementById('nutzung-2').getContext('2d');
const nutzungChart2 = new Chart(ctx2, {
    type: 'doughnut',
    data: {
        labels: ['kostenloser Account', 'kein Account', 'Pro Account'],
        datasets: [{
            data: [92, 6, 2],
            backgroundColor: [
                'rgba(102, 204, 0, 0.6)', 
                'rgba(255, 205, 86, 0.6)', 
                'rgba(255, 99, 132, 0.6)'  
            ],
            borderColor: [
                'rgba(102, 204, 0, 1)',
                'rgba(255, 205, 86, 1)',
                'rgba(255, 99, 132, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false
    }
});
