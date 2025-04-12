<template>
  <div class="w-full">
    <h2 class="text-lg font-semibold mb-4 text-white">Profit Overview</h2>
    <div class="relative w-full h-[300px]">
      <canvas ref="chartCanvas" class="w-full h-full"></canvas>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import Chart from 'chart.js/auto'

const chartCanvas = ref(null)

onMounted(() => {
  new Chart(chartCanvas.value, {
    type: 'line',
    data: {
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
      datasets: [
        {
          label: 'Profit ₹',
          data: [1200, 1900, 3000, 2500, 4200],
          backgroundColor: 'rgba(59, 130, 246, 0.2)',
          borderColor: '#3B82F6',
          borderWidth: 2,
          tension: 0.3,
          fill: true,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          labels: { color: 'white' },
        },
      },
      scales: {
        x: {
          ticks: { color: 'white' },
        },
        y: {
          ticks: { color: 'white' },
        },
      },
    },
  })
})
</script>
