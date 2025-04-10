<template>
    <div
      class="flex items-center bg-gray-300 rounded-full w-12 h-6 p-1 cursor-pointer transition-all duration-300"
      :class="{ 'bg-green-400': modelValue }"
      @click="toggle"
    >
      <div
        class="h-4 w-5 rounded-full shadow-md transform transition-transform duration-300 bg-gray-100"
        :class="{ 'translate-x-4': modelValue }"
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
  