import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useUserProfile = defineStore('profile', () => {
  const activeTab = ref('personal')

  const personalForm = ref({
    fullName: '',
    number: '',
    email: '',
    address: '',
  })

  const errors = ref({
    fullName: '',
    number: '',
    email: '',
    address: '',
  })

  const validateForm = () => {
    errors.value.fullName = personalForm.value.fullName.trim() ? '' : 'Full Name is required.'
    errors.value.number = /^\d{10}$/.test(personalForm.value.number.trim())
      ? ''
      : 'Enter a valid 10-digit number.'
    errors.value.email = /\S+@\S+\.\S+/.test(personalForm.value.email.trim())
      ? ''
      : 'Enter a valid email.'
    errors.value.address = personalForm.value.address.trim() ? '' : 'Address is required.'
  }

  const isFormValid = computed(() => {
    return (
      personalForm.value.fullName &&
      /^\d{10}$/.test(personalForm.value.number.trim()) &&
      /\S+@\S+\.\S+/.test(personalForm.value.email.trim()) &&
      personalForm.value.address &&
      !Object.values(errors.value).some((err) => err !== '')
    )
  })

  const clearForm = () => {
    personalForm.value = {
      fullName: '',
      number: '',
      email: '',
      address: '',
    }
    errors.value = {
      fullName: '',
      number: '',
      email: '',
      address: '',
    }
  }

  const submitForm = () => {
    console.log('Form submitted:', personalForm.value)
    clearForm()
  }

  const selectedFile = ref(null)

  const handleFileUpload = (event) => {
    selectedFile.value = event.target.files[0]
    console.log('Selected File:', selectedFile.value)
  }

  const passwordFields = ref([
    { label: 'Current Password', value: '', visible: false },
    { label: 'New Password', value: '', visible: false },
    { label: 'Confirm Password', value: '', visible: false },
  ])

  const toggleVisibility = (index) => {
    passwordFields.value[index].visible = !passwordFields.value[index].visible
  }

  return {
    activeTab,
    personalForm,
    errors,
    validateForm,
    isFormValid,
    clearForm,
    submitForm,
    selectedFile,
    handleFileUpload,
    passwordFields,
    toggleVisibility,
  }
})
