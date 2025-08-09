export default function Loading() {
  return (
    <div className="min-h-screen bg-neutral-900 flex items-center justify-center">
      <div className="relative">
        <div className="h-24 w-24 rounded-full border-t-4 border-b-4 border-red-600 animate-spin"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-16 w-16 rounded-full bg-neutral-900"></div>
        </div>
      </div>
    </div>
  );
}