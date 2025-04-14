<script setup>
import { storeToRefs } from 'pinia'
import { useUserDashBoard } from '@/stores/DashBoard'
import { useUserOrder } from '@/stores/order'
import LineChart from '@/components/LineChart.vue'
import { ListOrdered, IndianRupee, UserRound, BadgeIndianRupee } from 'lucide-vue-next'
import { useThemeStore } from '@/stores/theme'

const themeStore = useThemeStore()
const userdashbaord = useUserDashBoard()
const { trades, totalProfit, profitClass } = storeToRefs(userdashbaord)

const usersOrder = useUserOrder()
const { totalOrders } = storeToRefs(usersOrder)
</script>

<template>
  <div
    class="min-h-screen font-sans relative overflow-hidden transition-all duration-300 bg-white dark:bg-[#0F2027]"
  >
    <img
      src="../assets/images/img3.png"
      alt="Dashboard Background"
      class="absolute top-0 left-0 w-full h-full object-cover opacity-10 pointer-events-none z-0"
    />

    <!-- Cards -->
    <div
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4 pt-6 mt-2 sm:mt-4 md:mt-14 lg:mt-[3rem]"
    >
      <div
        class="glass-card group transition-all duration-300 ease-in-out transform hover:scale-[1.02] hover:shadow-xl"
      >
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-3">
            <div
              class="icon-box group-hover:bg-indigo-600 shadow-md dark:shadow-none bg-white/10 dark:bg-white/10 transition-all duration-300 ease-in-out"
            >
              <ListOrdered class="w-5 h-5 text-gray-800 dark:text-white" />
            </div>
            <h2
              class="text-lg font-semibold transition-colors duration-300 ease-in-out group-hover:text-indigo-600 dark:group-hover:text-indigo-400"
            >
              Total Orders
            </h2>
          </div>
          <span
            class="text-2xl font-bold transition-transform duration-300 ease-in-out group-hover:scale-105"
          >
            {{ totalOrders }}
          </span>
        </div>
        <p
          class="text-[0.8em] text-gray-600 dark:text-gray-300 mt-4 transition-opacity duration-300 ease-in-out group-hover:opacity-80"
        >
          Updated 5 min ago
        </p>
      </div>

      <div
        class="glass-card group transition-all duration-300 ease-in-out transform hover:scale-[1.02] hover:shadow-xl"
      >
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-3">
            <div
              class="icon-box group-hover:bg-green-600 shadow-md dark:shadow-none bg-white dark:bg-white/10 transition-all duration-300 ease-in-out"
            >
              <IndianRupee class="w-5 h-5 text-gray-800 dark:text-white" />
            </div>
            <h2
              class="text-lg font-semibold transition-colors duration-300 ease-in-out group-hover:text-green-600 dark:group-hover:text-green-400"
            >
              Total Profit
            </h2>
          </div>
          <span
            class="text-2xl font-bold transition-transform duration-300 ease-in-out group-hover:scale-105"
            :class="profitClass"
          >
            {{ totalProfit }}
          </span>
        </div>
        <p
          class="text-[0.8em] text-gray-600 dark:text-gray-300 mt-4 transition-opacity duration-300 ease-in-out group-hover:opacity-80"
        >
          Updated 5 min ago
        </p>
      </div>

      <div
        class="glass-card group transition-all duration-300 ease-in-out transform hover:scale-[1.02] hover:shadow-xl"
      >
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-3">
            <div
              class="icon-box group-hover:bg-yellow-500 shadow-md dark:shadow-none bg-white dark:bg-white/10 transition-all duration-300 ease-in-out"
            >
              <UserRound class="w-5 h-5 text-gray-800 dark:text-white" />
            </div>
            <h2
              class="text-lg font-semibold transition-colors duration-300 ease-in-out group-hover:text-yellow-600 dark:group-hover:text-yellow-400"
            >
              Brokers
            </h2>
          </div>
          <span
            class="text-2xl font-bold transition-transform duration-300 ease-in-out group-hover:scale-105"
          >
            (0/10)
          </span>
        </div>
        <p
          class="text-[0.8em] text-gray-600 dark:text-gray-300 mt-4 transition-opacity duration-300 ease-in-out group-hover:opacity-80"
        >
          Updated 5 min ago
        </p>
      </div>
    </div>

    <!-- Chart & Positions -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 px-4 py-6">
      <div
        class="glass-card md:col-span-2 flex flex-col justify-between p-6 transition-all duration-300 ease-in-out transform hover:scale-[1.02] hover:shadow-xl"
      >
        <LineChart />
      </div>

      <div
        class="glass-card group flex flex-col justify-between p-6 transition-all duration-300 ease-in-out transform hover:scale-[1.02] hover:shadow-xl"
      >
        <div>
          <div
            class="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-3 mb-4"
          >
            <div class="flex items-center gap-3">
              <div
                class="icon-box bg-white dark:bg-white/10 shadow-md dark:shadow-none transition-all duration-300 ease-in-out group-hover:bg-gray-200 dark:group-hover:bg-red-500"
              >
                <BadgeIndianRupee class="w-5 h-5 text-gray-800 dark:text-white" />
              </div>

              <h2
                class="text-lg font-semibold transition-colors duration-300 ease-in-out group-hover:text-red-600 dark:group-hover:text-red-400"
              >
                Positions
              </h2>
            </div>

            <div class="flex gap-2">
              <button
                class="bg-green-600 text-white px-3 py-1 text-xs rounded-md shadow hover:bg-green-500 transition-all duration-300 ease-in-out"
              >
                Live
              </button>
              <button
                class="bg-gray-600 text-white px-3 py-1 text-xs rounded-md shadow hover:bg-gray-500 transition-all duration-300 ease-in-out"
              >
                Paper
              </button>
            </div>
          </div>

          <div
            class="text-2xl font-bold mb-4 dark:text-white text-gray-900 transition-transform duration-300 ease-in-out group-hover:scale-105"
          >
            ₹56,456.00
          </div>

          <div
            class="text-sm text-gray-700 dark:text-gray-300 space-y-1 pt-5 transition-opacity duration-300 ease-in-out group-hover:opacity-85"
          >
            <p>
              DOMAIN PRICE ACTION:
              <span class="font-semibold dark:text-white text-gray-900">₹3500.00</span>
            </p>
            <p>
              DOMAIN TREND:
              <span class="font-semibold dark:text-white text-gray-900">₹6500.00</span>
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Strategy Table -->
    <div class="glass-card overflow-x-auto px-4 py-6 mx-4">
      <h1 class="text-2xl font-semibold mb-4 dark:text-white text-gray-900">Strategy Table</h1>

      <table class="min-w-full text-sm text-left text-gray-700 dark:text-gray-300">
        <thead
          class="bg-gray-200 dark:bg-white/10 backdrop-blur-sm text-gray-800 dark:text-gray-100 uppercase text-xs tracking-wider"
        >
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
            class="hover:bg-gray-100 dark:hover:bg-white/5 transition-all duration-200 border-b border-gray-300 dark:border-white/10"
          >
            <td class="py-3 px-4">{{ row.strategy }}</td>
            <td class="py-3 px-4">{{ row.product }}</td>
            <td
              class="py-3 px-4 font-semibold"
              :class="
                row.side === 'Buy'
                  ? 'text-green-600 dark:text-green-400'
                  : 'text-red-600 dark:text-red-400'
              "
            >
              {{ row.side }}
            </td>
            <td class="py-3 px-4">{{ row.quantity }}</td>
            <td class="py-3 px-4">
              <span
                class="px-2 py-1 rounded-full text-xs font-semibold"
                :class="{
                  'bg-green-100 text-green-700 dark:bg-green-600/20 dark:text-green-400':
                    row.positionstatus === 'Open',
                  'bg-yellow-100 text-yellow-700 dark:bg-yellow-600/20 dark:text-yellow-400':
                    row.positionstatus === 'Pending',
                  'bg-red-100 text-red-700 dark:bg-red-600/20 dark:text-red-400':
                    row.positionstatus === 'Closed',
                }"
              >
                {{ row.positionstatus }}
              </span>
            </td>
            <td class="py-3 px-4">
              <button
                class="text-red-600 dark:text-red-400 hover:opacity-80 font-semibold transition duration-150"
              >
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
.glass-card {
  @apply rounded-2xl p-6 border transition-all duration-300
    bg-white/60 dark:bg-gradient-to-br dark:from-[#0F2027] dark:via-[#203A43] dark:to-[#2C5364]
    backdrop-blur-xl border-gray-200 dark:border-white/10 text-gray-900 dark:text-white shadow-md hover:shadow-lg;
}
.icon-box {
  @apply p-2 bg-white/10 text-white transition-all duration-300 rounded-md;
}

.icon-box {
  @apply p-2 rounded-xl transition-colors duration-300;
}
</style>
