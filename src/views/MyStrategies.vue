<script setup>
import { ref, computed } from 'vue'
import { storeToRefs } from 'pinia'

import { useUserStrategies } from '@/stores/myStrategies'
import EditJoinerInfo from '@/modals/EditJoinerInfo.vue'
import DeleteModal from '@/modals/DeleteModal.vue'
import ToggleButton from '@/Buttons/ToggleButton.vue'

const userStrategies = useUserStrategies()
const { myStrategy } = storeToRefs(userStrategies)

const trades = computed(() => myStrategy.value || [])
const strategyCount = computed(() => trades.value.length)

const isEditModalOpen = ref(false)
const isDeleteModalOpen = ref(false)
const selectedRow = ref(null)

const openEditModal = (row) => {
  selectedRow.value = row
  isEditModalOpen.value = true
}

const openDeleteModal = (row) => {
  selectedRow.value = row
  isDeleteModalOpen.value = true
}
</script>

<template>
  <div
    class="relative min-h-screen overflow-hidden mt-0 sm:mt-0 md:mt-10 lg:mt-[3rem] text-gray-800 dark:text-white bg-gradient-to-br from-[#f8fafc] via-[#e2e8f0] to-[#cbd5e1] dark:from-[#0F2027] dark:via-[#203A43] dark:to-[#2C5364]"
  >
    <img
      src="../assets/images/img3.png"
      alt="Dashboard Background"
      class="absolute top-0 left-0 w-full h-full object-cover opacity-5 z-0 pointer-events-none"
    />

    <h1 class="text-2xl font-bold mb-6 px-4 pt-6">
      Strategy Joined: <span>{{ strategyCount }}</span>
    </h1>

    <div
      class="overflow-x-auto mx-4 mb-6 border border-gray-300/20 dark:border-white/10 rounded-xl shadow bg-white/80 dark:bg-white/5"
    >
      <table class="min-w-[768px] w-full text-sm">
        <thead
          class="sticky top-0 z-10 text-left text-gray-700 dark:text-white bg-white/90 dark:bg-white/10 backdrop-blur"
        >
          <tr>
            <th class="px-4 py-3">Strategy</th>
            <th class="px-4 py-3">Brokers</th>
            <th class="px-4 py-3">Lot Size</th>
            <th class="px-4 py-3">ReEntry</th>
            <th class="px-4 py-3">ReEntry Triggered</th>
            <th class="px-4 py-3">Active</th>
            <th class="px-4 py-3">Joined At</th>
            <th class="px-4 py-3">Action</th>
          </tr>
        </thead>
        <tbody class="text-gray-800 dark:text-white">
          <tr
            v-for="(row, index) in trades"
            :key="index"
            class="transition-all duration-200 border-t border-gray-300/20 dark:border-white/10 dark:hover:bg-white/5"
          >
            <td class="px-4 py-2 truncate max-w-[12rem]">{{ row.strategy }}</td>
            <td class="px-4 py-2 truncate max-w-[10rem]">{{ row.broker }}</td>
            <td class="px-4 py-2">{{ row.lotsize }}</td>
            <td class="px-4 py-2">{{ row.reentry }}</td>
            <td class="px-4 py-2">{{ row.reentrytriggered }}</td>
            <td class="px-4 py-2">
              <ToggleButton v-model="row.active" />
            </td>
            <td class="px-4 py-2">{{ row.joinedat }}</td>
            <td class="px-4 py-2">
              <div class="flex flex-wrap gap-2">
                <button
                  class="px-3 py-1 text-gray-700 dark:text-gray-300 border border-gray-400 dark:border-gray-300 rounded hover:bg-gray-200 dark:hover:bg-white/10"
                  @click="openEditModal(row)"
                >
                  Edit
                </button>
                <button
                  class="px-3 py-1 text-red-600 dark:text-red-400 border border-red-400 rounded hover:bg-red-100 dark:hover:bg-white/10"
                  @click="openDeleteModal(row)"
                >
                  Delete
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Modals -->
    <EditJoinerInfo
      v-if="isEditModalOpen"
      :show="isEditModalOpen"
      :data="selectedRow"
      @close="isEditModalOpen = false"
    />
    <DeleteModal
      v-if="isDeleteModalOpen"
      :show="isDeleteModalOpen"
      :data="selectedRow"
      @close="isDeleteModalOpen = false"
    />
  </div>
</template>

<style scoped>
td::-webkit-scrollbar {
  display: none;
}

td {
  overflow-x: auto;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>
