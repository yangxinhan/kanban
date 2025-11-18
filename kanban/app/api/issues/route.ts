import { NextResponse } from 'next/server';

import { storage } from '@/lib/storage';

export function GET() {
  const issues = storage.getAll();
  return NextResponse.json(issues);
}
