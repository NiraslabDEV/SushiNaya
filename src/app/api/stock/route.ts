import { NextResponse } from 'next/server'
import { combos } from '@/data/combos'

// Fase 1: returns static combo data (no database yet)
export async function GET() {
  return NextResponse.json({ combos })
}