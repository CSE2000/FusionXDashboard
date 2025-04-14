<template>
  <div
    class="relative w-full h-full text-gray-800 dark:text-white font-sans mt-0 sm:mt-0 md:mt-12 lg:mt-[3rem]"
  >
    <div
      class="relative min-h-screen bg-gradient-to-br from-[#f8fafc] via-[#e2e8f0] to-[#cbd5e1] dark:from-[#0F2027] dark:via-[#203A43] dark:to-[#2C5364] overflow-hidden"
    >
      <img
        src="../assets/images/img3.png"
        alt="Dashboard Background"
        class="absolute top-0 left-0 w-full h-full object-cover opacity-10 pointer-events-none z-0"
      />

      <h1 class="text-xl md:text-2xl font-bold mb-4 px-4 pt-6 text-gray-900 dark:text-white">
        Orders: <span class="text-gray-800 dark:text-white">{{ totalOrders }}</span>
      </h1>

      <div
        class="overflow-x-auto max-h-[34rem] border border-gray-300/20 dark:border-white/10 rounded-xl mx-4 bg-white/80 dark:bg-white/5 backdrop-blur-xl shadow-lg"
      >
        <table class="min-w-full text-sm text-left">
          <thead
            class="sticky top-0 z-10 bg-white/90 dark:bg-white/10 text-xs uppercase text-gray-700 dark:text-white backdrop-blur"
          >
            <tr>
              <th class="px-4 py-3">Time</th>
              <th class="px-4 py-3">Broker</th>
              <th class="px-4 py-3">Strategy</th>
              <th class="px-4 py-3">Script</th>
              <th class="px-4 py-3">Quantity</th>
              <th class="px-4 py-3">Price</th>
              <th class="px-4 py-3">Status</th>
              <th class="px-4 py-3">Product Type</th>
            </tr>
          </thead>
          <tbody class="text-gray-800 dark:text-white">
            <tr
              v-for="(row, index) in orders"
              :key="index"
              class="hover:bg-gray-100 dark:hover:bg-white/5 border-b border-gray-300/20 dark:border-white/10 transition-colors"
            >
              <td
                class="px-4 py-2 whitespace-nowrap overflow-hidden overflow-ellipsis max-w-[8rem] text-gray-800 dark:text-white"
              >
                {{ row.time }}
              </td>
              <td
                class="px-4 py-2 whitespace-nowrap overflow-hidden overflow-ellipsis max-w-[8rem] text-gray-800 dark:text-white"
              >
                {{ row.broker }}
              </td>
              <td
                class="px-4 py-2 whitespace-nowrap overflow-hidden overflow-ellipsis max-w-[8rem] text-gray-800 dark:text-white"
              >
                {{ row.strategy }}
              </td>
              <td
                class="px-4 py-2 whitespace-nowrap overflow-hidden overflow-ellipsis max-w-[8rem] text-gray-800 dark:text-white"
              >
                {{ row.script }}
              </td>
              <td class="px-4 py-2 text-gray-800 dark:text-white">{{ row.quantity }}</td>
              <td class="px-4 py-2 text-gray-800 dark:text-white">₹{{ row.price }}</td>
              <td class="px-4 py-2 text-gray-800 dark:text-white">
                <span
                  :class="{
                    'text-green-400': row.status === 'Executed',
                    'text-yellow-400': row.status === 'Pending',
                    'text-red-400': row.status === 'Failed',
                  }"
                  class="font-semibold"
                >
                  {{ row.status }}
                </span>
              </td>
              <td class="px-4 py-2 text-gray-800 dark:text-white">{{ row.producttype }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useUserOrder } from '@/stores/order'
import { storeToRefs } from 'pinia'

const usersOrder = useUserOrder()
const { orders, totalOrders } = storeToRefs(usersOrder)
</script>
