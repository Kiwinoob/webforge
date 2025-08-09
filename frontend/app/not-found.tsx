import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-neutral-900 flex items-center justify-center">
      <div className="max-w-2xl mx-auto px-6 py-24 text-center">
        <h1 className="text-9xl font-bold text-red-600 mb-8">404</h1>
        <h2 className="text-3xl font-bold text-white mb-4">Page Not Found</h2>
        <p className="text-xl text-neutral-400 mb-12">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link href="/">
          <Button className="bg-red-600 hover:bg-red-700 text-white">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </Link>
      </div>
    </div>
  );
}