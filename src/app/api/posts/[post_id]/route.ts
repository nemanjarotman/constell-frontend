import { NextRequest, NextResponse } from 'next/server'
import { API_URL } from '@/utils/constants'

export async function GET(req: NextRequest) {
  const token = req.headers.get('authorization')?.split(' ')[1] || ''
  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  }

  const post_id = 0

  const requestPath = `/posts/${post_id}`

  const res = await fetch(`${API_URL}${requestPath}`, {
    method: 'GET',
    headers,
  })
  const response = await res.json()
  return NextResponse.json(response, { headers: headers })
}
