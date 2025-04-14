<template>
  <div
    class="flex items-center bg-gray-300 rounded-full w-12 h-6 p-1 cursor-pointer transition-all duration-300 ease-in-out"
    :class="{ 'bg-green-400': modelValue }"
    @click="toggle"
  >
    <div
      class="h-4 w-4 rounded-full shadow-md transform transition-all duration-300 ease-in-out bg-white"
      :class="{ 'translate-x-6': modelValue }"
    ></div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits(['update:modelValue'])

const toggle = () => {
  emit('update:modelValue', !props.modelValue)
}
</script>
