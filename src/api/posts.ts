import { handleResponse } from '@/lib/handleResponse'
import { API_URL } from '@/utils/constants'
import { User, UserResponse } from '@/types/types'

export async function apiGetAllPosts(): Promise<User> {
  const token = localStorage.getItem('token')

  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
  }

  const response = await fetch(`${API_URL}/accounts/me`, {
    method: 'GET',
    credentials: 'include',
    headers,
  })

  return handleResponse<UserResponse>(response).then((data) => data.data.user)
}
