import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserBroker = defineStore('broker', () => {
  const broker = ref([
    {
      broker: 'Angel',
      brokeruserid: 'A537412',
      tokendate: '2025-08-24 09:57:39',
      active: false,
    },
    {
      broker: 'Angel',
      brokeruserid: 'A537412',
      tokendate: '2025-08-24 09:57:39',
      active: false,
    },
  ])
  return {
    broker,
  }
})
