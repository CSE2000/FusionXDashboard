<script setup>
import { ref } from 'vue'
import { Link } from 'lucide-vue-next'
import { useUserBroker } from '@/stores/Broker'
import { storeToRefs } from 'pinia'
import BrokerEditModal from '@/modals/BrokerEditModal.vue'
import DeleteModal from '@/modals/DeleteModal.vue'
import ToggleButton from '@/Buttons/ToggleButton.vue'

const brokers = useUserBroker()
const { broker } = storeToRefs(brokers)

const isEditedBrokerOpen = ref(false)
const isDeleteModalOpen = ref(false)
const selectedRow = ref(null)

const openEditedBroker = (row = null) => {
  selectedRow.value = row
  isEditedBrokerOpen.value = true
}

const openDeleteModal = (row) => {
  selectedRow.value = row
  isDeleteModalOpen.value = true
}
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
    <div class="relative z-10 w-full h-full px-4 py-6">
      <div class="shadow-lg transition-all duration-300 p-4">
        <div
          class="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4"
        >
          <button
            class="border border-white/20 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-md text-sm font-medium transition-all"
            @click="openEditedBroker()"
          >
            Add New Broker
          </button>
          <p class="text-sm text-white/80">{{ broker.length }} Brokers</p>
        </div>

        <div class="overflow-x-auto rounded-lg max-h-[32rem]">
          <table class="min-w-full text-sm text-white">
            <thead
              class="bg-white/10 backdrop-blur sticky top-0 z-10 text-left text-medium uppercase tracking-wide text-white/60 font-semibold"
            >
              <tr>
                <th class="px-4 py-3">Broker</th>
                <th class="px-4 py-3">Broker UserId</th>
                <th class="px-4 py-3">Token Date</th>
                <th class="px-4 py-3">Active</th>
                <th class="px-4 py-3">Connect</th>
                <th class="px-4 py-3 text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(row, index) in broker"
                :key="index"
                class="hover:bg-white/10 transition-all border-b border-white/10"
              >
                <td class="px-4 py-3 truncate max-w-[12rem]">{{ row.broker }}</td>
                <td class="px-4 py-3 truncate max-w-[12rem]">{{ row.brokeruserid }}</td>
                <td class="px-4 py-3">{{ row.tokendate }}</td>
                <td class="px-4 py-2">
                  <ToggleButton v-model="row.active" />
                </td>
                <td class="px-4 py-3">
                  <button class="flex justify-around font-medium text-gray-400 hover:text-gray-300 text-xs px-2 py-1 rounded-md transition">
                    <Link class="w-6 h-6 p-1"/>
                    Connect
                  </button>
                </td>
                <td class="text-center px-4 py-3 space-x-2">
                  <button
                    class="text-blue-400 hover:text-blue-200 text-medium font-medium"
                    @click="openEditedBroker(row)"
                  >
                    Edit
                  </button>
                  <button class="text-green-400 hover:text-green-200 text-medium font-medium">
                    Orders/Positions
                  </button>
                  <button
                    class="text-red-400 hover:text-red-200 text-medium font-medium"
                    @click="openDeleteModal(row)"
                  >
                    Delete
                  </button>
                </td>
              </tr>
              <tr v-if="broker.length === 0">
                <td colspan="6" class="text-center py-4 text-white/60 text-sm">
                  No brokers found.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <BrokerEditModal
      v-if="isEditedBrokerOpen"
      :show="isEditedBrokerOpen"
      :broker="selectedRow"
      @close="isEditedBrokerOpen = false"
    />
    <DeleteModal
      v-if="isDeleteModalOpen"
      :show="isDeleteModalOpen"
      @close="isDeleteModalOpen = false"
    />
  </div>
</template>
