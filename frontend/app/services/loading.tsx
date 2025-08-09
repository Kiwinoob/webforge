export default function ServicesLoading() {
  return (
    <div className="min-h-screen bg-neutral-950 flex items-center justify-center">
      <div className="space-y-4 text-center">
        <div className="w-8 h-8 bg-red-600 animate-pulse mx-auto"></div>
        <div className="text-white font-medium">Loading Services...</div>
      </div>
    </div>
  )
}
