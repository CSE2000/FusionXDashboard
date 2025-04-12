<template>
  <div
    class="relative min-h-screen bg-gradient-to-br from-[#0F2027] via-[#203A43] to-[#2C5364] text-white overflow-hidden pt-0 sm:pt-0 md:pt-0 lg:pt-12"
  >
    <img
      src="../assets/images/img3.png"
      alt="Dashboard Background"
      class="absolute top-0 left-0 w-full h-full object-cover opacity-5 z-0 pointer-events-none"
    />

    <div class="relative z-10 mx-auto p-4 sm:p-6 md:p-8 mt-0 sm:mt-0 md:mt-12 lg:mt-0">
      <div class="flex flex-col md:flex-row border-b border-slate-500 pb-5">
        <div class="flex flex-1 items-center justify-center md:justify-start space-x-4">
          <img
            class="h-16 w-16 rounded-full border-2 border-gray-500 object-cover"
            src="../assets/images/img1.png"
            alt="Profile Image"
          />
          <div>
            <h2 class="text-xl font-semibold text-white">Roshni Chandra</h2>
            <p class="text-gray-400">Basic Plan</p>
          </div>
        </div>

        <div
          class="mt-6 md:mt-0 flex-1 px-0 md:px-6 border-t md:border-t-0 md:border-l border-gray-600"
        >
          <div class="text-center lg:text-left text-gray-300 space-y-1">
            <p class="font-medium">chandra@mail.com</p>
            <p class="font-medium">964587123</p>
            <p class="font-medium">Raipur, Talibandha</p>
          </div>
        </div>
      </div>

      <nav class="mt-6 border-b border-gray-600">
        <ul class="flex flex-wrap justify-center lg:justify-start space-x-2 md:space-x-6">
          <li>
            <button
              @click="activeTab = 'personal'"
              :class="{ 'text-blue-500 border-b-2 border-blue-500': activeTab === 'personal' }"
              class="flex items-center space-x-2 px-4 py-2"
            >
              <User class="w-5 h-5" />
              <span>Personal Info</span>
            </button>
          </li>
          <li>
            <button
              @click="activeTab = 'social'"
              :class="{ 'text-blue-500 border-b-2 border-blue-500': activeTab === 'social' }"
              class="flex items-center space-x-2 px-4 py-2"
            >
              <Users class="w-5 h-5" />
              <span>Social Info</span>
            </button>
          </li>
          <li>
            <button
              @click="activeTab = 'billing'"
              :class="{ 'text-blue-500 border-b-2 border-blue-500': activeTab === 'billing' }"
              class="flex items-center space-x-2 px-4 py-2"
            >
              <IndianRupee class="w-5 h-5" />
              <span>Billing Info</span>
            </button>
          </li>
          <li>
            <button
              @click="activeTab = 'password'"
              :class="{ 'text-blue-500 border-b-2 border-blue-500': activeTab === 'password' }"
              class="flex items-center space-x-2 px-4 py-2"
            >
              <LockKeyhole class="w-5 h-5" />
              <span>Change Password</span>
            </button>
          </li>
        </ul>
      </nav>

      <!-- personal Information -->
      <div v-if="activeTab === 'personal'" class="mt-6">
        <h3 class="text-lg font-semibold">Personal Details</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div>
            <label class="block text-gray-400">Full Name</label>
            <input
              v-model="personalForm.fullName"
              type="text"
              class="w-full p-2 bg-gray-800 bg:opacity-5 rounded-md border border-gray-600"
            />
          </div>

          <div>
            <label class="block text-gray-400">Number</label>
            <input
              v-model="personalForm.number"
              type="text"
              maxlength="10"
              class="w-full p-2 bg-gray-800 rounded-md border border-gray-600"
            />
          </div>

          <div>
            <label class="block text-gray-400">Email</label>
            <input
              v-model="personalForm.email"
              type="email"
              class="w-full p-2 bg-gray-800 rounded-md border border-gray-600 bg:opacity-5"
            />
          </div>

          <div>
            <label class="block text-gray-400">Address</label>
            <input
              v-model="personalForm.address"
              type="text"
              class="w-full p-2 bg-gray-800 rounded-md border border-gray-600"
            />
          </div>
        </div>

        <div
          class="mt-4 flex flex-col md:flex-row justify-between space-y-4 md:space-y-0 md:space-x-4"
        >
          <input
            class="bg-gray-800 border border-gray-600 p-2 rounded-md"
            type="file"
            @change="handleFileUpload"
          />

          <div class="flex justify-end space-x-2">
            <button class="px-4 py-2 bg-gray-600 rounded-md hover:bg-gray-500" @click="clearForm">
              Cancel
            </button>
            <button
              class="px-4 py-2 bg-blue-600 rounded-md hover:bg-blue-500"
              :disabled="!isFormValid"
              @click="submitForm"
            >
              Update
            </button>
          </div>
        </div>
      </div>

      <!-- Social Information -->
      <div v-if="activeTab === 'social'" class="mt-6">
        <h3 class="text-lg font-semibold">Social Info</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div>
            <label class="block text-gray-400">TradingView ID</label>
            <input type="text" class="w-full p-2 bg-gray-800 rounded-md border border-gray-600" />
          </div>
          <div>
            <label class="block text-gray-400">Telegram API</label>
            <input type="text" class="w-full p-2 bg-gray-800 rounded-md border border-gray-600" />
          </div>
          <div>
            <label class="block text-gray-400">Telegram Chat ID</label>
            <input type="text" class="w-full p-2 bg-gray-800 rounded-md border border-gray-600" />
          </div>
        </div>

        <div class="mt-4 flex justify-between items-center">
          <div class="flex items-center space-x-2">
            <input type="checkbox" class="w-5 h-5 text-blue-500" />
            <span class="text-gray-400">Status</span>
          </div>
          <div class="flex space-x-2">
            <button class="px-4 py-2 bg-gray-600 rounded-md hover:bg-gray-500">Cancel</button>
            <button class="px-4 py-2 bg-blue-600 rounded-md hover:bg-blue-500">Update</button>
          </div>
        </div>
      </div>

      <!-- Billing Information -->
      <div v-if="activeTab === 'billing'" class="mt-6">
        <h3 class="text-lg font-semibold">Billing Info</h3>
        <button class="mt-2 px-4 py-2 bg-green-600 rounded-md hover:bg-green-500">
          Create Invoice
        </button>
        <hr class="my-4 border-gray-600" />
        <p class="text-gray-400">Record Not Found</p>
      </div>

      <!-- Change Password -->
      <div v-if="activeTab === 'password'" class="mt-6">
        <h3 class="text-lg font-semibold">Change Password</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div v-for="(field, index) in passwordFields" :key="index">
            <label class="block text-gray-400">{{ field.label }}</label>
            <div class="relative">
              <input
                :type="field.visible ? 'text' : 'password'"
                v-model="field.value"
                class="w-full p-2 pr-10 bg-gray-800 rounded-md border border-gray-600"
              />
              <button
                @click="toggleVisibility(index)"
                type="button"
                class="absolute right-2 top-5 transform -translate-y-1/2 text-gray-400"
              >
                <EyeOff v-if="!field.visible" />
                <Eye v-else />
              </button>
            </div>
          </div>
        </div>
        <div class="mt-4">
          <button class="px-4 py-2 bg-blue-600 rounded-md hover:bg-blue-500">Submit</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useUserProfile } from '@/stores/profile'
import { User, Users, IndianRupee, LockKeyhole, EyeOff, Eye } from 'lucide-vue-next'

import { storeToRefs } from 'pinia'

const store = useUserProfile()
const { activeTab, personalForm, errors, isFormValid, selectedFile, passwordFields } =
  storeToRefs(store)

const { validateForm, clearForm, submitForm, handleFileUpload, toggleVisibility } = store
</script>

<style scoped>
button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>
