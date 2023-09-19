import { handleResponse } from '@/lib/handleResponse'
import { API_URL } from '@/utils/constants'
import { User, UserLoginResponse, UserResponse } from '@/types/types'

export async function apiLoginUser(credentials: string): Promise<string> {
  const response = await fetch(`${API_URL}/login`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    body: credentials,
  })

  return handleResponse<UserLoginResponse>(response).then((data) => data.token)
}

export async function apiGetAuthUser(token?: string): Promise<User> {
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
  }

  if (token) {
    headers['Authorization'] = `Bearer ${token}`
  }
  const response = await fetch(`${API_URL}/accounts/me`, {
    method: 'GET',
    credentials: 'include',
    headers,
  })

  return handleResponse<UserResponse>(response).then((data) => data.data.user)
}
