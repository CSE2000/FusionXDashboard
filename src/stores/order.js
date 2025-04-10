import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useUserOrder = defineStore('orders', () => {
  const orders = ref([
    {
      time: '09:13:54',
      broker: 'Angel (A537412)',
      strategy: 'DOMAIN PRICE ACTION (BANKNIFTY)',
      script: 'NIFTY15FEB24C21000 (NFO)',
      quantity: 0,
      price: 0,
      status: 'REJECTED @ SELL',
      producttype: 'MIS',
    },
  ])
  const totalOrders = computed(() => orders.value.length)

  return {
    orders,
    totalOrders,
  }
})
