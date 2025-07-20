export default function Loading() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white border-b border-gray-300 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gray-800 rounded flex items-center justify-center">
                <span className="text-white font-bold text-sm">TK</span>
              </div>
              <div>
                <div className="text-xl font-serif font-bold text-gray-900">
                  Taza Khabar
                </div>
                <span className="text-xs text-gray-600 hidden sm:block">
                  Independent News
                </span>
              </div>
            </div>
            <nav className="hidden md:flex space-x-6">
              <div className="text-gray-700 font-medium">Home</div>
              <div className="text-gray-700 font-medium">Politics</div>
              <div className="text-gray-700 font-medium">World</div>
              <div className="text-gray-700 font-medium">Business</div>
              <div className="text-gray-700 font-medium">Opinion</div>
            </nav>
            <div className="flex items-center">
              <div className="w-8 h-8 bg-gray-300 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Article Content Loading */}
          <main className="lg:col-span-3">
            <article className="bg-white border border-gray-300 overflow-hidden">
              {/* Article Header Loading */}
              <div className="bg-gray-800 text-white px-8 py-6">
                <div className="animate-pulse">
                  <div className="flex items-center justify-between mb-4">
                    <div className="bg-red-600 text-white px-3 py-1 text-xs font-bold uppercase tracking-wide">
                      Breaking News
                    </div>
                    <div className="h-4 bg-gray-600 rounded w-20"></div>
                  </div>
                  <div className="h-8 bg-gray-600 rounded w-3/4 mb-2"></div>
                  <div className="h-4 bg-gray-600 rounded w-48"></div>
                </div>
              </div>

              {/* Article Meta Info Loading */}
              <div className="px-8 py-4 border-b border-gray-200 bg-gray-50">
                <div className="animate-pulse">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                      <div>
                        <div className="h-4 bg-gray-300 rounded w-24 mb-1"></div>
                        <div className="h-3 bg-gray-300 rounded w-16"></div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="h-4 bg-gray-300 rounded w-32"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sources Loading */}
              <div className="px-8 py-4 border-b border-gray-200 bg-gray-25">
                <div className="animate-pulse">
                  <div className="h-4 bg-gray-300 rounded w-20 mb-2"></div>
                  <div className="flex flex-wrap gap-3">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="flex items-center space-x-2 px-3 py-1.5 bg-white border border-gray-200 rounded-full">
                        <div className="w-4 h-4 bg-gray-300 rounded"></div>
                        <div className="h-4 bg-gray-300 rounded w-16"></div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Article Content Loading */}
              <div className="px-8 py-8">
                <div className="animate-pulse space-y-4">
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                    <div key={i} className="h-4 bg-gray-300 rounded w-full" style={{ width: `${Math.random() * 30 + 70}%` }}></div>
                  ))}
                  
                  <div className="mt-8 space-y-3">
                    <div className="h-6 bg-gray-300 rounded w-1/2"></div>
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="h-4 bg-gray-300 rounded w-full" style={{ width: `${Math.random() * 20 + 80}%` }}></div>
                    ))}
                  </div>

                  <div className="mt-8 space-y-3">
                    <div className="h-6 bg-gray-300 rounded w-1/3"></div>
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="h-4 bg-gray-300 rounded w-full" style={{ width: `${Math.random() * 25 + 75}%` }}></div>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          </main>

          {/* Sidebar Loading */}
          <aside className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Article Information Loading */}
              <div className="bg-white border border-gray-300 p-6">
                <div className="animate-pulse">
                  <div className="h-6 bg-gray-300 rounded w-32 mb-4"></div>
                  <div className="space-y-3">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="flex justify-between items-start">
                        <div className="h-4 bg-gray-300 rounded w-16"></div>
                        <div className="h-4 bg-gray-300 rounded w-20"></div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Related Articles Loading */}
              <div className="bg-white border border-gray-300 p-6">
                <div className="animate-pulse">
                  <div className="h-6 bg-gray-300 rounded w-40 mb-4"></div>
                  <div className="space-y-4">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="border-b border-gray-100 pb-3">
                        <div className="h-4 bg-gray-300 rounded w-full mb-1"></div>
                        <div className="h-3 bg-gray-300 rounded w-16"></div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Newsletter Loading */}
              <div className="bg-gray-800 text-white p-6">
                <div className="animate-pulse">
                  <div className="h-6 bg-gray-600 rounded w-32 mb-3"></div>
                  <div className="h-4 bg-gray-600 rounded w-full mb-4"></div>
                  <div className="space-y-3">
                    <div className="h-10 bg-gray-600 rounded w-full"></div>
                    <div className="h-10 bg-red-700 rounded w-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-8 mt-16 border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-6 h-6 bg-gray-300 rounded flex items-center justify-center">
                <span className="text-gray-900 font-bold text-xs">TK</span>
              </div>
              <span className="font-serif font-bold text-gray-300">
                Taza Khabar
              </span>
            </div>
            <div className="text-center md:text-right">
              <p className="text-sm text-gray-400">
                &copy; 2025 Taza Khabar. All rights reserved.
              </p>
              <p className="text-xs text-gray-500 mt-1">
                Independent journalism since 2025
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
