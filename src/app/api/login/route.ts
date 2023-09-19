import { NextRequest, NextResponse } from 'next/server'
import { API_URL } from '@/utils/constants'

export const corsHeaders = {
  'Content-Type': 'application/json',
}

export async function POST(request: NextRequest) {
  const body = await request.json()
  console.log(body)

  const requestPath = '/login'

  const res = await fetch(`${API_URL}${requestPath}`, {
    method: 'POST',
    headers: corsHeaders,
    body: JSON.stringify(body), // body data type must match "Content-Type" header
  })
  const response = await res.json()
  return NextResponse.json(response, { headers: corsHeaders })
}
