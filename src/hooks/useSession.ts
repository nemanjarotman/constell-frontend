import { useEffect } from 'react'
import { apiGetAuthUser } from '../lib/api-requests'
import useStore from '@/store/authStore'

export default function useSession() {
  const store = useStore()

  async function fetchUser() {
    try {
      const user = await apiGetAuthUser()
      store.setAuthUser(user)
    } catch (error: any) {
      store.reset()
    }
  }

  useEffect(() => {
    if (!store.authUser) {
      fetchUser()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return store.authUser
}
