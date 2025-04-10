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
        <h2 class="text-2xl font-bold mb-4">Are you sure?</h2>
        <hr class="border-white/20 mb-4" />
        <p class="text-gray-300">
          Do you really want to delete these records? This process cannot be undone.
        </p>
        <div class="flex justify-end mt-6 space-x-3">
          <button
            @click="emit('close')"
            class="px-4 py-2 bg-gray-600 hover:bg-gray-700 rounded-lg transition"
          >
            Cancel
          </button>
          <button
            @click="emit('submit')"
            class="px-4 py-2 bg-red-500 hover:bg-red-600 rounded-lg transition"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'

defineProps({
  show: Boolean
})

const emit = defineEmits(['close', 'submit'])
</script>
