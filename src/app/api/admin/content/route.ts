import { NextRequest, NextResponse } from 'next/server';

// Supabase storage endpoint and tokens. Prefer environment variables.
const STORAGE_BASE = 'https://mgltkbcfblwvqdnmnttl.supabase.co/storage/v1/object/public/Content';
const PUBLIC_URL = `${STORAGE_BASE}/content.json`;

const ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1nbHRrYmNmYmx3dnFkbm1udHRsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc5NjIwNzgsImV4cCI6MjA3MzUzODA3OH0.IyQ7QMtXRVg8R6lSaZIFnKgBZ7KBRMyuC1EaHPRnFR8';

const SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1nbHRrYmNmYmx3dnFkbm1udHRsIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc1Nzk2MjA3OCwiZXhwIjoyMDczNTM4MDc4fQ.FCx28QnZO_A3zOiOaB1mbii9CBtyYolrGM7NCxiDQow';

export async function GET() {
  try {
    const res = await fetch(PUBLIC_URL, { headers: { apikey: ANON_KEY } });
    if (!res.ok) {
      console.error('Failed fetching remote content:', res.statusText);
      return NextResponse.json({ error: 'Failed to fetch remote content' }, { status: 502 });
    }
    const content = await res.json();
    return NextResponse.json(content);
  } catch (error) {
    console.error('Error fetching content from Supabase:', error);
    return NextResponse.json({ error: 'Failed to read content' }, { status: 500 });
  }
}

export async function PUT(request: NextRequest) {
  try {
    const newContent = await request.json();
    if (!newContent || typeof newContent !== 'object') {
      return NextResponse.json({ error: 'Invalid content format' }, { status: 400 });
    }

    // Write to Supabase storage using service role key
    const upsertRes = await fetch(`${STORAGE_BASE}/content.json`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        apikey: SERVICE_ROLE_KEY,
        Authorization: `Bearer ${SERVICE_ROLE_KEY}`,
      },
      body: JSON.stringify(newContent),
    });

    if (!upsertRes.ok) {
      const text = await upsertRes.text();
      console.error('Failed to write content to Supabase:', upsertRes.status, text);
      return NextResponse.json({ error: 'Failed to update remote content' }, { status: 502 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error updating remote content:', error);
    return NextResponse.json({ error: 'Failed to update content' }, { status: 500 });
  }
}