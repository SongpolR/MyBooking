import { ref } from 'vue'
import { defineStore } from 'pinia'
import liff from '@line/liff'

export const useLiffStore = defineStore('liff', () => {
  const profile = ref()

  async function init() {
    console.log(import.meta.env.VITE_LIFF_ID)
    liff.ready.then(async () => {
      if (liff.isLoggedIn()) {
        profile.value = await liff.getProfile()
      } else {
        liff.login({ redirectUri: import.meta.env.VITE_LIFF_REDIRECT_URI })
      }
    })
    await liff.init({ liffId: import.meta.env.VITE_LIFF_ID })
  }

  return { profile, init }
})
