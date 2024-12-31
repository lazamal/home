// Making charts with charts.js
const ctx1 = document.getElementById('chart1')
const ctx2 = document.getElementById('chart2')
const ctx3 = document.getElementById('chart3')
let delayed

const config1 = {
    type: 'bar',
    data: {
        labels: ['2021', '2022', '2023', '2024', '2025', '2026'],
        datasets: [
            {
                label: 'Activity sales',
                data: [5, 15, 25, 50, 70, 100],
                borderWidth: 2,
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
}

const chart1 = new Chart(ctx1, config1)

const chart2 = new Chart(ctx2, {
    type: 'line',
    data: {
        labels: ['2021', '2022', '2023', '2024', '2025'],
        datasets: [
            {
                label: 'Time wasted',
                data: [100, 75, 50, 25, 10],
                borderWidth: 7,
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
})

const chart3 = new Chart(ctx3, {
    type: 'line',
    data: {
        labels: ['2021', '2022', '2023', '2024', '2025', '2026'],
        datasets: [
            {
                label: 'User retention',
                data: [0, 25, 75, 150, 250],
                borderWidth: 7,
            },
        ],
    },
    options: {
        animation: {
            onComplete: () => {
                delayed = true
            },
            delay: (context) => {
                let delay = 0
                if (
                    context.type === 'data' &&
                    context.mode === 'default' &&
                    !delayed
                ) {
                    delay = context.dataIndex * 300 + context.datasetIndex * 100
                }
                return delay
            },
        },
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    },
})
// chart1.resize('50px', '500px')
