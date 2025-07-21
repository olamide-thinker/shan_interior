'use client';

import { useState } from 'react';

export default function SyncPage() {
  const [syncing, setSyncing] = useState(false);
  const [message, setMessage] = useState('');

  const handleSync = async () => {
    try {
      setSyncing(true);
      setMessage('Syncing...');

      const response = await fetch('/api/sync-cloudinary', {
        method: 'POST',
        headers: {
          'x-api-key': 'shan-sync-123'  // Using the same key we set in .env
        }
      });

      const data = await response.json();

      if (data.success) {
        setMessage('Sync completed successfully! You can now refresh the main pages.');
      } else {
        setMessage('Sync failed: ' + data.message);
      }
    } catch (error) {
      setMessage('Error during sync: ' + (error as Error).message);
    } finally {
      setSyncing(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-bold">Cloudinary Sync</h2>
          <p className="mt-2 text-sm text-gray-600">
            Use this page to synchronize Cloudinary data to local storage.
          </p>
        </div>

        <div className="mt-8 space-y-6">
          <button
            onClick={handleSync}
            disabled={syncing}
            className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${
              syncing 
                ? 'bg-gray-400 cursor-not-allowed' 
                : 'bg-black hover:bg-black/90'
            }`}
          >
            {syncing ? 'Syncing...' : 'Sync Now'}
          </button>

          {message && (
            <div className={`mt-2 p-2 rounded ${
              message.includes('successfully') 
                ? 'bg-green-100 text-green-700' 
                : 'bg-red-100 text-red-700'
            }`}>
              {message}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
