<template>
  <Teleport to="body">
    <div
      v-if="show"
      class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-5 backdrop-blur-sm"
      @click.self="emit('close')"
    >
      <div
        class="bg-white text-gray-800 dark:bg-gradient-to-br dark:from-[#0F2027] dark:via-[#203A43] dark:to-[#2C5364] dark:text-white border border-gray-200 dark:border-white/10 rounded-2xl p-6 w-[90%] md:w-3/5 shadow-2xl transition-all"
      >
        <h2 class="text-2xl font-bold mb-4">Edit Broker Info</h2>
        <hr class="mb-6 border-white/20" />

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="flex flex-col">
            <label class="text-sm font-medium mb-1">Select Broker:</label>
            <select
              v-model="brokerData.broker"
              class="bg-white text-gray-800 dark:bg-gray-800 dark:text-white border border-gray-300 dark:border-gray-600 rounded px-3 py-2 transition"
            >
              <option value="">Choose a Broker</option>
              <option value="Zerodha">Zerodha</option>
              <option value="Angel">Angel</option>
              <option value="Alice">Alice</option>
              <option value="IIFL">IIFL</option>
              <option value="MH Trade">MH Trade</option>
            </select>
          </div>

          <div class="flex flex-col">
            <label class="text-sm font-medium mb-1">Broker User Id:</label>
            <input
              v-model="brokerData.brokeruserid"
              class="bg-white text-gray-800 dark:bg-gray-800 dark:text-white border border-gray-300 dark:border-gray-600 rounded px-3 py-2 transition"
            />
          </div>

          <div class="flex flex-col">
            <label class="text-sm font-medium mb-1">Broker Pin:</label>
            <input
              v-model="brokerData.brokerpin"
              class="bg-white text-gray-800 dark:bg-gray-800 dark:text-white border border-gray-300 dark:border-gray-600 rounded px-3 py-2 transition"
            />
          </div>

          <div class="flex flex-col">
            <label class="text-sm font-medium mb-1">Broker QR Key:</label>
            <input
              v-model="brokerData.brokerqrkey"
              class="bg-white text-gray-800 dark:bg-gray-800 dark:text-white border border-gray-300 dark:border-gray-600 rounded px-3 py-2 transition"
            />
          </div>

          <div class="flex flex-col">
            <label class="text-sm font-medium mb-1">Broker API:</label>
            <input
              v-model="brokerData.brokerapi"
              class="bg-white text-gray-800 dark:bg-gray-800 dark:text-white border border-gray-300 dark:border-gray-600 rounded px-3 py-2 transition"
            />
          </div>

          <div class="flex flex-col">
            <label class="text-sm font-medium mb-1">Broker API Secret:</label>
            <input
              v-model="brokerData.brokerapisecret"
              class="bg-white text-gray-800 dark:bg-gray-800 dark:text-white border border-gray-300 dark:border-gray-600 rounded px-3 py-2 transition"
            />
          </div>

          <div class="flex flex-col">
            <label class="text-sm font-medium mb-1">Broker Password:</label>
            <input
              type="password"
              v-model="brokerData.brokerpassword"
              class="bg-white text-gray-800 dark:bg-gray-800 dark:text-white border border-gray-300 dark:border-gray-600 rounded px-3 py-2 transition"
            />
          </div>

          <div class="flex items-center space-x-2 mt-2 md:mt-8">
            <ToggleButton v-model="brokerData.active" />
            <label class="text-sm font-medium">Account Active</label>
          </div>
        </div>

        <div class="flex justify-end mt-6 space-x-3">
          <button
            @click="emit('close')"
            class="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg transition"
          >
            Close
          </button>
          <button
            @click="submitForm"
            class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup>
import { defineProps, defineEmits, ref, watch } from 'vue'
import ToggleButton from '@/Buttons/ToggleButton.vue'

const props = defineProps({
  show: Boolean,
  broker: Object,
})

const emit = defineEmits(['close', 'save'])

const brokerData = ref({
  broker: '',
  brokeruserid: '',
  brokerpin: '',
  brokerqrkey: '',
  brokerapi: '',
  brokerapisecret: '',
  brokerpassword: '',
  active: false,
})

watch(
  () => props.broker,
  (newBroker) => {
    if (newBroker) {
      brokerData.value = { ...newBroker }
    }
  },
  { immediate: true },
)

const submitForm = () => {
  emit('save', brokerData.value)
  brokerData.value = {
    broker: '',
    brokeruserid: '',
    brokerpin: '',
    brokerqrkey: '',
    brokerapi: '',
    brokerapisecret: '',
    brokerpassword: '',
    active: false,
  }
}
</script>
