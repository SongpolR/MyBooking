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
        liff.login({ redirectUri: 'https://songpolr.github.io/MyBooking/' })
      }
    })
    await liff.init({ liffId: '2006268278-e7G7G7Zk' })
  }

  return { profile, init }
})
