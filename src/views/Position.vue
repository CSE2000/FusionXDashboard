<script setup>
import { useUserDashBoard } from '@/stores/DashBoard'
import { storeToRefs } from 'pinia'

const userdashbaord = useUserDashBoard()
const { trades, totalProfit, profitClass } = storeToRefs(userdashbaord)

const tableHeaders = [
  'Strategy',
  'Broker',
  'Script',
  'Product',
  'Side',
  'Quantity',
  'Buy Price',
  'Sell Price',
  'Position Status',
  'P&L',
  'Actions',
]
</script>

<template>
  <div
    class="relative min-h-screen bg-gradient-to-br from-[#0F2027] via-[#203A43] to-[#2C5364] text-white overflow-hidden mt-0 sm:mt-0 md:mt-0 lg:mt-[3rem]"
  >
    <img
      src="../assets/images/img3.png"
      alt="Dashboard Background"
      class="absolute top-0 left-0 w-full h-full object-cover opacity-5 z-0 pointer-events-none"
    />
    <div class="relative z-10 p-4">
      <div
        class="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl shadow-lg transition-all duration-300 p-4"
      >
        <div
          class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-4 text-sm font-semibold"
        >
          <p>
            Today's Profit:
            <span :class="profitClass" class="ml-1">
              <span v-if="totalProfit >= 0" class="text-green-500">+{{ totalProfit }}</span>
              <span v-else class="text-red-500">{{ totalProfit }}</span>
            </span>
          </p>
          <h1 class="text-white">{{ trades.length }} Positions</h1>
        </div>

        <!-- Table -->
        <div class="overflow-auto rounded-lg max-h-[80vh]">
          <table class="min-w-full text-sm text-left border-collapse text-white">
            <thead class="bg-white/10 sticky top-0 backdrop-blur z-10">
              <tr>
                <th
                  v-for="header in tableHeaders"
                  :key="header"
                  class="px-4 py-2 whitespace-nowrap text-xs uppercase tracking-wider text-gray-200"
                >
                  {{ header }}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(row, index) in trades"
                :key="index"
                class="hover:bg-white/5 transition text-center"
              >
                <td class="px-4 py-2 max-w-[10rem] truncate">{{ row.strategy }}</td>
                <td class="px-4 py-2 max-w-[10rem] truncate">{{ row.broker }}</td>
                <td class="px-4 py-2 max-w-[10rem] truncate">{{ row.script }}</td>
                <td class="px-4 py-2 max-w-[10rem] truncate">{{ row.product }}</td>
                <td class="px-4 py-2">{{ row.side }}</td>
                <td class="px-4 py-2">{{ row.quantity }}</td>
                <td class="px-4 py-2">{{ row.buyprice }}</td>
                <td class="px-4 py-2">{{ row.sellprice }}</td>
                <td class="px-4 py-2">
                  <span
                    class="px-2 py-1 text-xs rounded-full font-medium"
                    :class="{
                      'bg-green-600/20 text-green-400': row.positionstatus === 'Open',
                      'bg-yellow-600/20 text-yellow-400': row.positionstatus === 'Pending',
                      'bg-red-600/20 text-red-400': row.positionstatus === 'Closed',
                    }"
                  >
                    {{ row.positionstatus }}
                  </span>
                </td>
                <td
                  class="px-4 py-2 font-bold"
                  :class="row.pnl >= 0 ? 'text-green-500' : 'text-red-500'"
                >
                  {{ row.pnl.toFixed(0) }}
                </td>
                <td class="px-4 py-2">
                  <button class="text-red-400 hover:text-red-300 text-sm font-semibold">
                    Sq. Off
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
