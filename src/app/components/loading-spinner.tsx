export function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center py-16">
      <div className="relative w-20 h-20">
        <div className="absolute inset-0 border-t-2 border-b-2 border-blue-500 rounded-full animate-spin"></div>
        <div className="absolute inset-1 border-r-2 border-l-2 border-purple-500 rounded-full animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}></div>
        <div className="absolute inset-2 border-t-2 border-b-2 border-pink-500 rounded-full animate-spin" style={{ animationDuration: '2s' }}></div>
        <div className="absolute inset-3 border-r-2 border-l-2 border-blue-500 rounded-full animate-spin" style={{ animationDirection: 'reverse', animationDuration: '2.5s' }}></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
        </div>
      </div>
    </div>
  );
} 