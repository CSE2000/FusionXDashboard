import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useUserDashBoard = defineStore('users', () => {
  const trades = ref([
    {
      strategy: 'DOMAIN TREND (NIFTY)',
      broker: 'Angel (A537412)',
      script: 'NIFTY15FEB2420000PE (NFO)',
      product: 'INTRADAY',
      side: 'SELL',
      quantity: 500,
      buyprice: 200,
      sellprice: 210,
      positionstatus: 'CLOSED',
      pnl: 260,
    },
    {
      strategy: 'DOMAIN TREND (NIFTY)',
      broker: 'Angel (A537412)',
      script: 'NIFTY15FEB2420000PE (NFO)',
      product: 'INTRADAY',
      side: 'SELL',
      quantity: 500,
      buyprice: 200,
      sellprice: 210,
      positionstatus: 'CLOSED',
      pnl: 480,
    },
    {
      strategy: 'DOMAIN TREND (NIFTY)',
      broker: 'Angel (A537412)',
      script: 'NIFTY15FEB2420000PE (NFO)',
      product: 'INTRADAY',
      side: 'SELL',
      quantity: 500,
      buyprice: 200,
      sellprice: 210,
      positionstatus: 'CLOSED',
      pnl: 480,
    },
    {
      strategy: 'DOMAIN TREND (NIFTY)',
      broker: 'Angel (A537412)',
      script: 'NIFTY15FEB2420000PE (NFO)',
      product: 'INTRADAY',
      side: 'SELL',
      quantity: 500,
      buyprice: 200,
      sellprice: 210,
      positionstatus: 'CLOSED',
      pnl: 480,
    },
    {
      strategy: 'DOMAIN TREND (NIFTY)',
      broker: 'Angel (A537412)',
      script: 'NIFTY15FEB2420000PE (NFO)',
      product: 'INTRADAY',
      side: 'SELL',
      quantity: 500,
      buyprice: 200,
      sellprice: 210,
      positionstatus: 'CLOSED',
      pnl: 480,
    },
    {
      strategy: 'DOMAIN TREND (NIFTY)',
      broker: 'Angel (A537412)',
      script: 'NIFTY15FEB2420000PE (NFO)',
      product: 'INTRADAY',
      side: 'SELL',
      quantity: 500,
      buyprice: 200,
      sellprice: 210,
      positionstatus: 'CLOSED',
      pnl: 480,
    },
  ])

  const totalProfit = computed(() => {
    return trades.value.reduce((acc, trade) => acc + trade.pnl, 0)
  })

  const profitClass = computed(() => (totalProfit.value >= 0 ? 'text-green-500' : 'text-red-500'))

  return {
    trades,
    totalProfit,
    profitClass,
  }
})
