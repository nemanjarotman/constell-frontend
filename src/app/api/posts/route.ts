import { NextRequest, NextResponse } from 'next/server'
import { API_URL } from '@/utils/constants'
import { corsHeaders } from '@/app/api/login/route'

export async function GET(req: NextRequest) {
  const token = req.headers.get('authorization')?.split(' ')[1] || ''
  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  }

  const requestPath = '/posts'

  const res = await fetch(`${API_URL}${requestPath}`, {
    method: 'GET',
    headers,
  })
  const response = await res.json()
  return NextResponse.json(response, { headers: headers })
}

export async function POST(request: NextRequest) {
  const body = await request.json()
  console.log(body)

  const requestPath = '/posts'

  const res = await fetch(`${API_URL}${requestPath}`, {
    method: 'POST',
    headers: corsHeaders,
    body: JSON.stringify(body),
  })
  const response = await res.json()
  return NextResponse.json(response, { headers: corsHeaders })
}
