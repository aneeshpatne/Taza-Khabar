import ReactMarkdown from 'react-markdown';

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  
  // Mock article data - matching your schema: {id, content, sources, created_at}
  const article = {
    id: parseInt(id),
    content: `# Breaking: Global Climate Summit Reaches Historic Agreement

World leaders from over 190 countries have reached a groundbreaking climate agreement at the Global Climate Summit, marking one of the most significant environmental policy achievements in decades.

## Major Commitments Announced

The agreement includes ambitious carbon reduction targets, with participating nations committing to reduce greenhouse gas emissions by 50% by 2030 and achieve net-zero emissions by 2050. The summit also announced a $500 billion global fund for renewable energy infrastructure and climate adaptation projects.

### Key Highlights of the Agreement

• **Immediate phase-out** of coal power plants in developed nations by 2028
• **$200 billion investment** in solar and wind energy projects worldwide  
• **Enhanced protection** for global forests and biodiversity hotspots
• **Technology transfer programs** for developing nations to access clean energy
• **Mandatory carbon pricing** mechanisms across all participating economies

## International Response

The breakthrough came after three days of intense negotiations, with environmental advocates calling it a "historic moment for our planet." Several world leaders praised the comprehensive nature of the agreement, noting its binding commitments and clear timelines.

## Implementation Timeline

The agreement will be formally signed by all participating nations within the next 30 days, with immediate implementation of several key provisions beginning in Q1 2025.

---

*This report was generated using AI analysis of multiple news sources and verified information from official summit documentation.*`,
    sources: [
      "https://climatesummit2025.org/official-statement",
      "https://reuters.com/environment/climate-summit-agreement-2025",
      "https://bbc.com/news/world-climate-summit-historic-deal",
      "https://cnn.com/climate/global-agreement-breakthrough",
      "https://apnews.com/climate-change-summit-deal",
      "https://theguardian.com/environment/climate-summit-agreement",
      "https://washingtonpost.com/climate/summit-agreement-2025",
      "https://nytimes.com/climate/global-climate-deal-reached"
    ],
    created_at: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString() // 2 hours ago
  };

  // Helper function to format date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  // Helper function to get relative time
  const getRelativeTime = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInMilliseconds = now.getTime() - date.getTime();
    const diffInMinutes = Math.floor(diffInMilliseconds / (1000 * 60));
    const diffInHours = Math.floor(diffInMilliseconds / (1000 * 60 * 60));
    const diffInDays = Math.floor(diffInMilliseconds / (1000 * 60 * 60 * 24));
    
    if (diffInMinutes < 1) return 'Just now';
    if (diffInMinutes < 60) return `${diffInMinutes} minutes ago`;
    if (diffInHours < 24) return `${diffInHours} hours ago`;
    if (diffInDays === 1) return '1 day ago';
    if (diffInDays < 30) return `${diffInDays} days ago`;
    
    // For demo purposes, let's show recent time for the mock data
    return '2 hours ago';
  };

  // Extract title from content (first line after #)
  const getTitle = (content: string) => {
    const lines = content.split('\n');
    const titleLine = lines.find(line => line.startsWith('# '));
    return titleLine ? titleLine.replace('# ', '') : 'News Article';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">TK</span>
              </div>
              <div>
                <a href="/" className="text-2xl font-bold text-gray-900 hover:text-blue-600 transition-colors">Taza Khabar</a>
                <span className="text-xs text-gray-500 hidden sm:block">Fresh News, Powered by AI</span>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="/" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Home</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Latest</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Categories</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">About</a>
            </nav>
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Subscribe
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Article Content */}
          <main className="lg:col-span-3">
            <article className="bg-white rounded-2xl shadow-lg overflow-hidden">
              {/* Article Header */}
              <div className="relative h-32 md:h-40 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600">
                <div className="absolute inset-0 bg-black bg-opacity-60"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wide shadow-lg border-2 border-white">
                      Article #{article.id}
                    </span>
                    <span className="text-white text-lg font-bold bg-gray-900 bg-opacity-80 px-4 py-2 rounded-full border border-white">{getRelativeTime(article.created_at)}</span>
                  </div>
                  <h1 className="text-2xl md:text-3xl font-bold text-white drop-shadow-2xl leading-tight">
                    {getTitle(article.content)}
                  </h1>
                </div>
              </div>

              {/* Article Meta Info */}
              <div className="p-6 border-b border-gray-200 bg-gray-50">
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-white font-bold">AI</span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">AI News Assistant</p>
                      <p className="text-sm text-gray-500">Powered by Taza Khabar AI</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-500">Published</p>
                    <p className="text-sm font-medium text-gray-900">{formatDate(article.created_at)}</p>
                  </div>
                </div>
              </div>

              {/* Article Content */}
              <div className="p-8">
                <div className="prose prose-lg max-w-none">
                  <ReactMarkdown
                    components={{
                      h1: ({ children }) => (
                        <h1 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
                          {children}
                        </h1>
                      ),
                      h2: ({ children }) => (
                        <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4 leading-tight">
                          {children}
                        </h2>
                      ),
                      h3: ({ children }) => (
                        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3 leading-tight">
                          {children}
                        </h3>
                      ),
                      p: ({ children }) => (
                        <p className="mb-4 text-gray-700 leading-relaxed">
                          {children}
                        </p>
                      ),
                      ul: ({ children }) => (
                        <ul className="list-none space-y-2 mb-6">
                          {children}
                        </ul>
                      ),
                      li: ({ children }) => (
                        <li className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700 leading-relaxed">{children}</span>
                        </li>
                      ),
                      hr: () => <hr className="my-8 border-gray-300" />,
                      strong: ({ children }) => (
                        <strong className="font-semibold text-gray-900">{children}</strong>
                      ),
                      em: ({ children }) => (
                        <em className="italic text-gray-700">{children}</em>
                      ),
                    }}
                  >
                    {article.content}
                  </ReactMarkdown>
                </div>

                {/* Sources Section */}
                <div className="mt-12 pt-8 border-t border-gray-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                    <svg className="w-6 h-6 mr-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
                    </svg>
                    Sources ({article.sources.length})
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {article.sources.map((source, index) => (
                      <div key={index} className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
                        <a 
                          href={source} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center space-x-3 group"
                        >
                          <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                            <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.559-.499-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.559.499.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.497-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.148.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-gray-900 group-hover:text-blue-600 transition-colors truncate">
                              {new URL(source).hostname}
                            </p>
                            <p className="text-xs text-gray-500 truncate">
                              {source}
                            </p>
                          </div>
                          <svg className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        </a>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Share Section */}
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Share this article</h3>
                  <div className="flex space-x-4">
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center">
                      <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                      Twitter
                    </button>
                    <button className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors flex items-center">
                      <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
                      </svg>
                      Copy Link
                    </button>
                  </div>
                </div>
              </div>
            </article>
          </main>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Article Info Card */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                  <svg className="w-5 h-5 mr-2 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                  Article Details
                </h4>
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <span className="text-gray-600 text-sm">Article ID</span>
                    <span className="font-semibold text-gray-900">#{article.id}</span>
                  </div>
                  <div className="flex justify-between items-start">
                    <span className="text-gray-600 text-sm">Published</span>
                    <span className="font-semibold text-gray-900 text-right text-sm">{formatDate(article.created_at)}</span>
                  </div>
                  <div className="flex justify-between items-start">
                    <span className="text-gray-600 text-sm">Sources</span>
                    <span className="font-semibold text-blue-600">{article.sources.length} links</span>
                  </div>
                  <div className="flex justify-between items-start">
                    <span className="text-gray-600 text-sm">Reading time</span>
                    <span className="font-semibold text-gray-900">~{Math.ceil(article.content.length / 1000)} min</span>
                  </div>
                </div>
              </div>

              {/* Back to Home */}
              <div className="bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-700 rounded-2xl shadow-lg p-6 text-white">
                <h4 className="text-lg font-bold mb-4">More News</h4>
                <p className="text-sm opacity-95 mb-6">
                  Discover more AI-curated news stories and insights.
                </p>
                <a
                  href="/"
                  className="inline-block bg-white text-purple-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  ← Back to Home
                </a>
              </div>

              {/* Newsletter Signup */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                  <svg className="w-5 h-5 mr-2 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  Stay Updated
                </h4>
                <p className="text-gray-600 text-sm mb-4">
                  Get the latest AI-curated news delivered to your inbox.
                </p>
                <div className="space-y-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                  />
                  <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">TK</span>
              </div>
              <h3 className="text-xl font-bold">Taza Khabar</h3>
            </div>
            <p className="text-gray-400 mb-4">Fresh News, Powered by AI</p>
            <p className="text-gray-500 text-sm">&copy; 2025 Taza Khabar. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
