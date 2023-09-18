import { User, UserLoginResponse, UserResponse } from '@/types/types'

const API_URL = 'https://api.hr.constel.co/api/v1'

async function handleResponse<T>(response: Response): Promise<T> {
  const contentType = response.headers.get('Content-Type') || ''
  const isJson = contentType.includes('application/json')
  const data = isJson ? await response.json() : await response.text()

  if (!response.ok) {
    if (isJson && data.errors !== null) {
      throw new Error(JSON.stringify(data.errors))
    }

    throw new Error(data.message || response.statusText)
  }

  return data as T
}

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