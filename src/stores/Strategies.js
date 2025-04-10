import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useStrategyStore = defineStore('strategy', () => {
  const selectedIndex = ref(0)
  const navItems = ref([
    'Essential Nifty',
    'Essential Banknifty',
    'Monthly',
    'Half',
    'Testpa',
    'Example Plan',
    'New Plan',
    'Kuldeep Plan W',
    'Kuldeep Plan W2',
    'Hello Test',
    'Elite',
  ])

  const strategies = ref([
    [
      { title: 'Nifty Strategy 1', description: 'Essential Nifty strategy 1' },
      { title: 'Nifty Strategy 2', description: 'Essential Nifty strategy 2' },
      { title: 'Nifty Strategy 3', description: 'Essential Nifty strategy 3' },
    ],
    [
      { title: 'Banknifty Strategy A', description: 'Banknifty plan description' },
      { title: 'Banknifty Strategy B', description: 'Another strategy for banknifty' },
    ],
    [{ title: 'Monthly Strategy 1', description: 'Monthly trading strategy details' }],
    [{ title: 'Half Plan Strategy', description: 'Strategy for Half Plan' }],
    [{ title: 'Testpa Strategy', description: 'Strategy for Testpa' }],
    [{ title: 'Example Plan Strategy', description: 'Strategy for Example Plan' }],
    [{ title: 'New Plan Strategy', description: 'Strategy for New Plan' }],
    [{ title: 'Kuldeep Plan W Strategy', description: 'Strategy for Kuldeep Plan W' }],
    [{ title: 'Kuldeep Plan W2 Strategy', description: 'Strategy for Kuldeep Plan W2' }],
    [{ title: 'Hello Test Strategy', description: 'Strategy for Hello Test' }],
    [{ title: 'Elite Strategy', description: 'Strategy for Elite Plan' }],
  ])

  return {
    selectedIndex,
    navItems,
    strategies,
  }
})
