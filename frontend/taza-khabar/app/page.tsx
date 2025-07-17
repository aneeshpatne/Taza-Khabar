import Image from "next/image";

export default function Home() {
  // Mock news data - in a real app, this would come from your API/database
  const featuredNews = {
    id: 1,
    title: "Breaking: Global Climate Summit Reaches Historic Agreement",
    excerpt:
      "World leaders unite on groundbreaking climate policies with immediate effect. The agreement includes ambitious carbon reduction targets and significant renewable energy investments.",
    image: "/news-placeholder.jpg",
    category: "Environment",
    publishedAt: "2 hours ago",
    readTime: "5 min read",
  };

  const latestNews = [
    {
      id: 2,
      title: "Technology Giants Announce AI Safety Partnership",
      excerpt:
        "Major tech companies collaborate on new AI safety standards and ethical guidelines for artificial intelligence development.",
      category: "Technology",
      publishedAt: "4 hours ago",
      readTime: "3 min read",
    },
    {
      id: 3,
      title: "Global Economic Markets Show Resilience",
      excerpt:
        "Despite ongoing challenges, international markets demonstrate remarkable stability across multiple regions.",
      category: "Economy",
      publishedAt: "6 hours ago",
      readTime: "4 min read",
    },
    {
      id: 4,
      title: "Healthcare Innovation Breakthrough Announced",
      excerpt:
        "Revolutionary treatment shows promising results in clinical trials, offering hope for millions worldwide.",
      category: "Health",
      publishedAt: "8 hours ago",
      readTime: "6 min read",
    },
    {
      id: 5,
      title: "Space Exploration Reaches New Milestone",
      excerpt:
        "International space program achieves unprecedented success in deep space mission objectives.",
      category: "Science",
      publishedAt: "12 hours ago",
      readTime: "4 min read",
    },
    {
      id: 6,
      title: "Renewable Energy Adoption Surges Globally",
      excerpt:
        "Countries worldwide report record-breaking installations of solar and wind power infrastructure.",
      category: "Environment",
      publishedAt: "1 day ago",
      readTime: "5 min read",
    },
  ];

  const categories = [
    "All News",
    "Technology",
    "Environment",
    "Economy",
    "Health",
    "Science",
    "Politics",
    "Sports",
  ];

  const trendingTopics = [
    "Climate Summit",
    "AI Safety",
    "Market Trends",
    "Healthcare Innovation",
    "Space Exploration",
    "Renewable Energy",
  ];

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
                <h1 className="text-2xl font-bold text-gray-900">
                  Taza Khabar
                </h1>
                <span className="text-xs text-gray-500 hidden sm:block">
                  Fresh News, Powered by AI
                </span>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a
                href="#"
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                Home
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                Latest
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                Categories
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                About
              </a>
            </nav>
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Subscribe
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <main className="lg:col-span-3">
            {/* Featured Article */}
            <section className="mb-12">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-64 md:h-80 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
                  <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                    <div className="flex items-center space-x-3 mb-3">
                      <span className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide animate-pulse">
                        BREAKING
                      </span>
                      <span className="text-sm opacity-90">
                        {featuredNews.category}
                      </span>
                      <span className="text-sm opacity-75">•</span>
                      <span className="text-sm opacity-90">
                        {featuredNews.publishedAt}
                      </span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-3 leading-tight">
                      {featuredNews.title}
                    </h2>
                    <p className="text-lg opacity-95 mb-6 leading-relaxed">
                      {featuredNews.excerpt}
                    </p>
                    <div className="flex items-center space-x-6">
                      <span className="text-sm opacity-90 flex items-center">
                        <svg
                          className="w-4 h-4 mr-2"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {featuredNews.readTime}
                      </span>
                      <button className="bg-white text-gray-900 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300 shadow-lg">
                        Read Full Story →
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Latest News Grid */}
            <section>
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-3xl font-bold text-gray-900">
                  Latest News
                </h3>
                <a
                  href="#"
                  className="text-blue-600 hover:text-blue-700 font-semibold flex items-center group"
                >
                  View all
                  <svg
                    className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {latestNews.map((article) => (
                  <article
                    key={article.id}
                    className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group"
                  >
                    <div className="h-48 bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-500/20 group-hover:from-blue-500/30 group-hover:to-purple-600/30 transition-all duration-300"></div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center space-x-3 mb-4">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            article.category === "Technology"
                              ? "bg-blue-100 text-blue-800"
                              : article.category === "Economy"
                              ? "bg-green-100 text-green-800"
                              : article.category === "Health"
                              ? "bg-red-100 text-red-800"
                              : article.category === "Science"
                              ? "bg-purple-100 text-purple-800"
                              : "bg-gray-100 text-gray-800"
                          }`}
                        >
                          {article.category}
                        </span>
                        <span className="text-gray-500 text-sm">
                          {article.publishedAt}
                        </span>
                      </div>
                      <h4 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
                        {article.title}
                      </h4>
                      <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                        {article.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500 flex items-center">
                          <svg
                            className="w-4 h-4 mr-1"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                              clipRule="evenodd"
                            />
                          </svg>
                          {article.readTime}
                        </span>
                        <button className="text-blue-600 hover:text-blue-700 font-semibold flex items-center group-hover:translate-x-1 transition-transform">
                          Read more →
                        </button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          </main>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Categories */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                  <svg
                    className="w-5 h-5 mr-2 text-blue-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
                  </svg>
                  Categories
                </h4>
                <div className="space-y-2">
                  {categories.map((category, index) => (
                    <a
                      key={index}
                      href="#"
                      className={`block px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                        index === 0
                          ? "bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 shadow-md"
                          : "text-gray-600 hover:bg-gray-100 hover:text-gray-900 hover:shadow-sm"
                      }`}
                    >
                      {category}
                    </a>
                  ))}
                </div>
              </div>

              {/* Trending Topics */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                  <svg
                    className="w-5 h-5 mr-2 text-red-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Trending Topics
                </h4>
                <div className="flex flex-wrap gap-2">
                  {trendingTopics.map((topic, index) => (
                    <span
                      key={index}
                      className="bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 px-4 py-2 rounded-full text-sm hover:from-gray-200 hover:to-gray-300 cursor-pointer transition-all duration-200 transform hover:scale-105 shadow-sm"
                    >
                      #{topic}
                    </span>
                  ))}
                </div>
              </div>

              {/* AI Insights */}
              <div className="bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-700 rounded-2xl shadow-lg p-6 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full -mr-16 -mt-16"></div>
                <div className="relative">
                  <h4 className="text-xl font-bold mb-4 flex items-center">
                    🤖 AI Insights
                  </h4>
                  <p className="text-sm opacity-95 mb-6 leading-relaxed">
                    Our AI has analyzed over 1,000 news sources today and
                    identified 3 emerging trends worth your attention.
                  </p>
                  <button className="bg-white text-purple-600 px-6 py-3 rounded-full text-sm font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
                    View Analysis →
                  </button>
                </div>
              </div>

              {/* Newsletter Signup */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <svg
                    className="w-5 h-5 mr-2 text-green-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  Daily Digest
                </h4>
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                  Get AI-curated news summary delivered to your inbox every
                  morning.
                </p>
                <div className="space-y-4">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                  />
                  <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                    Subscribe Now
                  </button>
                </div>
              </div>

              {/* Live Stats */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                  <svg
                    className="w-5 h-5 mr-2 text-orange-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Live Stats
                </h4>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 text-sm">
                      Articles Today
                    </span>
                    <span className="font-bold text-lg text-blue-600">
                      1,247
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 text-sm">AI Analysis</span>
                    <span className="font-bold text-lg text-green-600">
                      847
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 text-sm">
                      Active Readers
                    </span>
                    <span className="font-bold text-lg text-purple-600">
                      12.4K
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-xl">TK</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Taza Khabar</h3>
                  <span className="text-gray-400 text-sm">Powered by AI</span>
                </div>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed max-w-md">
                Fresh News, Powered by AI. Delivering comprehensive,
                multi-perspective news reports from across the globe with
                cutting-edge artificial intelligence.
              </p>
              <div className="flex space-x-6">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-lg">Quick Links</h4>
              <div className="space-y-3">
                <a
                  href="#"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  About Us
                </a>
                <a
                  href="#"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Contact
                </a>
                <a
                  href="#"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Terms of Service
                </a>
                <a
                  href="#"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Careers
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-lg">Categories</h4>
              <div className="space-y-3">
                <a
                  href="#"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Technology
                </a>
                <a
                  href="#"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Environment
                </a>
                <a
                  href="#"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Economy
                </a>
                <a
                  href="#"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Health
                </a>
                <a
                  href="#"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Science
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>
              &copy; 2025 Taza Khabar. All rights reserved. Powered by
              Artificial Intelligence.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
