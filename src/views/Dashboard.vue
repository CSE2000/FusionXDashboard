<script setup>
import { storeToRefs } from 'pinia'
import { useUserDashBoard } from '@/stores/DashBoard'
import { useUserOrder } from '@/stores/order'
import LineChart from '@/components/LineChart.vue'
import { ListOrdered, IndianRupee, CircleUserRound, BadgeIndianRupee } from 'lucide-vue-next'

const userdashbaord = useUserDashBoard()
const { trades, totalProfit, profitClass } = storeToRefs(userdashbaord)

const usersOrder = useUserOrder()
const { totalOrders } = storeToRefs(usersOrder)
</script>

<template>
  <div
    class="bg-black/5 min-h-screen bg-gradient-to-br from-[#0F2027] via-[#203A43] to-[#2C5364] text-white font-sans relative overflow-hidden"
  >
    <img
      src="../assets/images/img3.png"
      alt="Dashboard Background"
      class="absolute top-0 left-0 w-full h-full object-cover opacity-20 pointer-events-none z-0"
    />

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4 pt-6 mt-0 sm:mt-0 md:mt-0 lg:mt-[3rem]">
      <div
        class="p-6 bg-white/5 backdrop-blur-md text-white rounded-xl shadow-lg group transition-all duration-300"
      >
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-3">
            <div class="icon-box group-hover:bg-indigo-600">
              <ListOrdered class="w-5 h-5" />
            </div>
            <h2 class="text-lg font-semibold">Total Orders</h2>
          </div>
          <span class="text-2xl font-bold">{{ totalOrders }}</span>
        </div>
        <p class="text-xs text-gray-300 mt-4">Updated 5 min ago</p>
      </div>

      <div class="glass-upgrade group">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-3">
            <div class="icon-box group-hover:bg-green-600">
              <IndianRupee class="w-5 h-5" />
            </div>
            <h2 class="text-lg font-semibold">Total Profit</h2>
          </div>
          <span class="text-2xl font-bold" :class="profitClass">{{ totalProfit }}</span>
        </div>
        <p class="text-xs text-gray-300 mt-4">Updated 5 min ago</p>
      </div>

      <div class="glass-upgrade group">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-3">
            <div class="icon-box group-hover:bg-yellow-500">
              <CircleUserRound class="w-5 h-5" />
            </div>
            <h2 class="text-lg font-semibold">Brokers</h2>
          </div>
          <span class="text-2xl font-bold">(0/10)</span>
        </div>
        <p class="text-xs text-gray-300 mt-4">Updated 5 min ago</p>
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 px-4 py-6">
      <div class="glass-upgrade md:col-span-2 flex flex-col justify-between p-6">
        <LineChart class="w-full h-[300px]" />
      </div>

      <div class="glass-upgrade flex flex-col justify-between p-6">
        <div>
          <div class="flex justify-between items-center mb-4">
            <div class="flex items-center gap-3">
              <div class="icon-box group-hover:bg-red-400">
                <BadgeIndianRupee class="w-5 h-5" />
              </div>
              <h2 class="text-lg font-semibold">Positions</h2>
            </div>
            <div class="flex gap-2">
              <button
                class="bg-green-600 text-white px-3 py-1 text-xs rounded-md shadow hover:bg-green-500 transition"
              >
                Live
              </button>
              <button
                class="bg-gray-600 text-white px-3 py-1 text-xs rounded-md shadow hover:bg-gray-500 transition"
              >
                Paper
              </button>
            </div>
          </div>

          <div class="text-2xl font-bold text-white mb-4">₹56,456.00</div>

          <div class="text-sm text-gray-300 space-y-1 pt-5">
            <p>DOMAIN PRICE ACTION: <span class="font-semibold text-white">₹3500.00</span></p>
            <p>DOMAIN TREND: <span class="font-semibold text-white">₹6500.00</span></p>
          </div>
        </div>
      </div>
    </div>

    <div class="glass-upgrade overflow-x-auto px-4 py-6">
      <h1 class="text-2xl font-semibold mb-4 text-white">Strategy Table</h1>

      <table class="min-w-full text-sm text-left text-gray-300">
        <thead class="bg-white/10 backdrop-blur-sm text-gray-100 uppercase text-xs tracking-wider">
          <tr>
            <th class="py-3 px-4 rounded-tl-lg">Strategy</th>
            <th class="py-3 px-4">Product</th>
            <th class="py-3 px-4">Side</th>
            <th class="py-3 px-4">Quantity</th>
            <th class="py-3 px-4">Status</th>
            <th class="py-3 px-4 rounded-tr-lg">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(row, index) in trades"
            :key="index"
            class="hover:bg-white/5 transition-all duration-200 border-b border-white/10"
          >
            <td class="py-3 px-4">{{ row.strategy }}</td>
            <td class="py-3 px-4">{{ row.product }}</td>
            <td
              class="py-3 px-4 font-semibold"
              :class="row.side === 'Buy' ? 'text-green-400' : 'text-red-400'"
            >
              {{ row.side }}
            </td>
            <td class="py-3 px-4">{{ row.quantity }}</td>
            <td class="py-3 px-4">
              <span
                class="px-2 py-1 rounded-full text-xs font-semibold"
                :class="{
                  'bg-green-600/20 text-green-400': row.positionstatus === 'Open',
                  'bg-yellow-600/20 text-yellow-400': row.positionstatus === 'Pending',
                  'bg-red-600/20 text-red-400': row.positionstatus === 'Closed',
                }"
              >
                {{ row.positionstatus }}
              </span>
            </td>
            <td class="py-3 px-4">
              <button class="text-red-400 hover:text-red-200 font-semibold transition duration-150">
                Sq. Off
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<style scoped>
.glass-upgrade {
  @apply bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300;
}

.icon-box {
  @apply p-2 bg-white/10 text-white transition-all duration-300;
}
</style>
