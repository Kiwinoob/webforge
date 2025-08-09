'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft, RefreshCw } from 'lucide-react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-neutral-900 flex items-center justify-center">
      <div className="max-w-2xl mx-auto px-6 py-24 text-center">
        <h1 className="text-9xl font-bold text-red-600 mb-8">Oops!</h1>
        <h2 className="text-3xl font-bold text-white mb-4">Something went wrong</h2>
        <p className="text-xl text-neutral-400 mb-12">
          We apologize for the inconvenience. Please try again or return to the homepage.
        </p>
        <div className="flex items-center justify-center space-x-4">
          <Button
            onClick={reset}
            className="bg-red-600 hover:bg-red-700 text-white"
          >
            <RefreshCw className="mr-2 h-4 w-4" />
            Try Again
          </Button>
          <Link href="/">
            <Button
              variant="outline"
              className="border-neutral-700 text-white hover:bg-neutral-800"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}