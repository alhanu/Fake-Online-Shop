export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center py-20 gap-4">
      <div className="h-10 w-10 border-4 border-gray-300 border-t-blue-600 rounded-full animate-spin"></div>
      <p className="text-gray-600">Loading products...</p>
    </div>
  );
}
