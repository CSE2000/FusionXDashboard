<template>
  <Teleport to="body">
    <div
      v-if="show"
      class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-5 backdrop-blur-sm"
      @click.self="emit('close')"
    >
      <div
        class="bg-gradient-to-br from-[#0F2027] via-[#203A43] to-[#2C5364] border border-white/10 rounded-2xl p-6 w-[90%] max-w-md shadow-2xl text-white"
      >
        <h2 class="text-2xl font-bold mb-4">Edit Joiner Info</h2>
        <hr class="border-white/20 mb-4" />

        <div class="space-y-4">
          <div>
            <label class="block text-sm font-semibold mb-1">Lot 1</label>
            <input 
              type="number" 
              v-model="lot1" 
              @input="validateInput('lot1')" 
              class="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label class="block text-sm font-semibold mb-1">Re Entry</label>
            <input 
              type="number" 
              v-model="reEntry" 
              @input="validateInput('reEntry')" 
              class="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div class="flex justify-end mt-6 space-x-3">
          <button @click="handleSubmit" class="px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg transition">
            Submit
          </button>
          <button @click="emit('close')" class="px-4 py-2 bg-red-500 hover:bg-red-600 rounded-lg transition">
            Close
          </button>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup>
import { defineProps, defineEmits, ref } from 'vue'

const props = defineProps({
  show: Boolean,
})

const emit = defineEmits(['close', 'submit'])

const lot1 = ref(0)
const reEntry = ref(0)

const validateInput = (field) => {
  if (field === 'lot1' && (lot1.value === '' || lot1.value < 0)) {
    lot1.value = 0
  }
  if (field === 'reEntry' && (reEntry.value === '' || reEntry.value < 0)) {
    reEntry.value = 0
  }
}

const handleSubmit = () => {
  emit('submit', { lot1: lot1.value, reEntry: reEntry.value })
  lot1.value = 0
  reEntry.value = 0
}
</script>
