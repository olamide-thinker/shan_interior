import { syncCloudinaryToLocal } from '@/lib/cloudinarySyncLocal';
import { NextRequest, NextResponse } from 'next/server';

const SYNC_API_KEY = 'shan-sync-123'; // Using the same hardcoded key

export async function POST(req: NextRequest) {
  // Add a simple security check using an API key
  const apiKey = req.headers.get('x-api-key');
  if (apiKey !== SYNC_API_KEY) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const result = await syncCloudinaryToLocal();
    return NextResponse.json(result);
  } catch (error: any) {
    console.error('Sync error:', error);
    return NextResponse.json(
      { error: 'Failed to sync Cloudinary data', details: error.message },
      { status: 500 }
    );
  }
}
