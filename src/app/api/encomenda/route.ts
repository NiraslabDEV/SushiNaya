import { NextResponse } from 'next/server'

// Fase 1: stub — Fase 2 will connect to PostgreSQL + Resend
export async function POST(request: Request) {
  const body = await request.json()
  const { name, phone, items, total } = body
  console.log('Nova encomenda recebida:', { name, phone, items, total })
  return NextResponse.json({
    success: true,
    message: 'Encomenda recebida. Finalize pelo WhatsApp.',
  })
}