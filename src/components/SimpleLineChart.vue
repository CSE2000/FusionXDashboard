<template>
  <Line :data="chartData" :options="chartOptions" />
</template>

<script setup>
import { ref, computed } from 'vue'
import { Line } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale, PointElement)

// Chart data and structure
const chartData = {
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
  datasets: [
    {
      label: 'PNL',
      data: [10, -5, 15, 5, 20],
      borderColor: '#3b82f6',
      backgroundColor: 'rgba(59, 130, 246, 0.3)',
      tension: 0.3,
      fill: true,
    },
  ],
}

const isDarkMode = ref(false)

const chartOptions = computed(() => ({
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    x: {
      ticks: {
        color: isDarkMode.value ? '#e5e7eb' : '#1f2937',
      },
    },
    y: {
      beginAtZero: true,
      ticks: {
        color: isDarkMode.value ? '#e5e7eb' : '#1f2937',
      },
    },
  },
}))
</script>
