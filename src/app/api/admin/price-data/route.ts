import { NextRequest, NextResponse } from 'next/server';

const STORAGE_BASE = 'https://mgltkbcfblwvqdnmnttl.supabase.co/storage/v1/object/public/Content';
const PUBLIC_URL = `${STORAGE_BASE}/content.json`;

const SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1nbHRrYmNmYmx3dnFkbm1udHRsIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc1Nzk2MjA3OCwiZXhwIjoyMDczNTM4MDc4fQ.FCx28QnZO_A3zOiOaB1mbii9CBtyYolrGM7NCxiDQow';

export async function PUT(request: NextRequest) {
  try {
    const { priceData } = await request.json();

    if (!Array.isArray(priceData)) {
      return NextResponse.json({ error: 'Price data must be an array' }, { status: 400 });
    }

    for (const item of priceData) {
      if (!item.productValue || !item.transferAmount || !item.firstPayment) {
        return NextResponse.json({ error: 'Each price item must have productValue, transferAmount, and firstPayment' }, { status: 400 });
      }
    }

    // Fetch current remote content
    const res = await fetch(PUBLIC_URL);
    if (!res.ok) {
      console.error('Failed to fetch remote content for price update:', res.statusText);
      return NextResponse.json({ error: 'Failed to fetch remote content' }, { status: 502 });
    }
    const content = await res.json();

    // Update priceData
    content.priceData = priceData;

    // Write updated content back to Supabase storage
    const upsertRes = await fetch(`${STORAGE_BASE}/content.json`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        apikey: SERVICE_ROLE_KEY,
        Authorization: `Bearer ${SERVICE_ROLE_KEY}`,
      },
      body: JSON.stringify(content),
    });

    if (!upsertRes.ok) {
      const text = await upsertRes.text();
      console.error('Failed to write updated content to Supabase:', upsertRes.status, text);
      return NextResponse.json({ error: 'Failed to update remote content' }, { status: 502 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error updating price data:', error);
    return NextResponse.json({ error: 'Failed to update price data' }, { status: 500 });
  }
}