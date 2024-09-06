import liff from '@line/liff'
import { ref } from 'vue'

const useLiff = (liffId = import.meta.env.VITE_LIFF_ID) => {
  const error = ref(null)
  const liffInstance = ref(null)
  liff
    .init({ liffId: liffId })
    .then(() => {
      liffInstance.value = liff
      error.value = null
      if (!liff.isLoggedIn()) {
        liff.login({ redirectUri: window.location.href })
      }
    })
    .catch((err) => (error.value = err))

  return { liff: liffInstance, error }
}

export default useLiff
