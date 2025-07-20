import ReactMarkdown from "react-markdown";
import FaviconImage from "./FaviconImage";
import UserNav from "../../components/UserNav";

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
      "https://nytimes.com/climate/global-climate-deal-reached",
      "https://mausam.aneeshpatne.com",
    ],
    created_at: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(), // 2 hours ago
  };

  // Helper function to format date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
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

    if (diffInMinutes < 1) return "Just now";
    if (diffInMinutes < 60) return `${diffInMinutes} minutes ago`;
    if (diffInHours < 24) return `${diffInHours} hours ago`;
    if (diffInDays === 1) return "1 day ago";
    if (diffInDays < 30) return `${diffInDays} days ago`;

    // For demo purposes, let's show recent time for the mock data
    return "2 hours ago";
  };

  // Extract title from content (first line after #)
  const getTitle = (content: string) => {
    const lines = content.split("\n");
    const titleLine = lines.find((line) => line.startsWith("# "));
    return titleLine ? titleLine.replace("# ", "") : "News Article";
  };

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
                <a
                  href="/"
                  className="text-xl font-serif font-bold text-gray-900 hover:text-gray-700 transition-colors"
                >
                  Taza Khabar
                </a>
                <span className="text-xs text-gray-600 hidden sm:block">
                  Independent News
                </span>
              </div>
            </div>
            <nav className="hidden md:flex space-x-6">
              <a
                href="/"
                className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
              >
                Home
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
              >
                Politics
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
              >
                World
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
              >
                Business
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
              >
                Opinion
              </a>
            </nav>
            <div className="flex items-center">
              <UserNav />
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Article Content */}
          <main className="lg:col-span-3">
            <article className="bg-white border border-gray-300 overflow-hidden">
              {/* Article Header */}
              <div className="bg-gray-800 text-white px-8 py-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-red-600 text-white px-3 py-1 text-xs font-bold uppercase tracking-wide">
                    Breaking News
                  </span>
                  <span className="text-sm text-gray-300">
                    Article #{article.id}
                  </span>
                </div>
                <h1 className="text-2xl md:text-3xl font-serif font-bold leading-tight mb-2">
                  {getTitle(article.content)}
                </h1>
                <div className="text-sm text-gray-300">
                  {getRelativeTime(article.created_at)} •{" "}
                  {Math.ceil(article.content.length / 1000)} min read
                </div>
              </div>

              {/* Article Meta Info */}
              <div className="px-8 py-4 border-b border-gray-200 bg-gray-50">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">AI</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">
                        AI News Assistant
                      </p>
                      <p className="text-sm text-gray-600">Taza Khabar</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-600">
                      {formatDate(article.created_at)}
                    </p>
                  </div>
                </div>
              </div>

              <div className="px-8 py-4 border-b border-gray-200 bg-gray-25">
                <div className="flex items-center space-x-2 mb-2">
                  <span className="text-xs font-medium text-gray-600 uppercase tracking-wide">
                    Sources ({article.sources.length})
                  </span>
                </div>
                <div className="flex flex-wrap gap-3">
                  {article.sources.map((source, index) => (
                    <a
                      key={index}
                      href={source}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 px-3 py-1.5 bg-white border border-gray-200 rounded-full hover:border-gray-300 hover:bg-gray-50 transition-colors group"
                      title={source}
                    >
                      <FaviconImage
                        hostname={new URL(source).hostname}
                        className="w-4 h-4"
                      />
                      <span className="text-sm text-gray-700 group-hover:text-gray-900">
                        {new URL(source).hostname}
                      </span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Article Content */}
              <div className="px-8 py-8">
                <div className="prose prose-lg max-w-none">
                  <ReactMarkdown
                    components={{
                      h1: ({ children }) => (
                        <h1 className="text-3xl font-serif font-bold text-gray-900 mb-6 leading-tight border-b border-gray-200 pb-4">
                          {children}
                        </h1>
                      ),
                      h2: ({ children }) => (
                        <h2 className="text-xl font-serif font-bold text-gray-800 mt-8 mb-4 leading-tight">
                          {children}
                        </h2>
                      ),
                      h3: ({ children }) => (
                        <h3 className="text-lg font-serif font-semibold text-gray-800 mt-6 mb-3 leading-tight">
                          {children}
                        </h3>
                      ),
                      p: ({ children }) => (
                        <p className="mb-4 text-gray-700 leading-relaxed text-base">
                          {children}
                        </p>
                      ),
                      ul: ({ children }) => (
                        <ul className="list-none space-y-3 mb-6 border-l-4 border-gray-300 pl-6">
                          {children}
                        </ul>
                      ),
                      li: ({ children }) => (
                        <li className="flex items-start space-x-3">
                          <div className="w-1.5 h-1.5 bg-gray-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700 leading-relaxed">
                            {children}
                          </span>
                        </li>
                      ),
                      hr: () => <hr className="my-8 border-gray-400" />,
                      strong: ({ children }) => (
                        <strong className="font-semibold text-gray-900">
                          {children}
                        </strong>
                      ),
                      em: ({ children }) => (
                        <em className="italic text-gray-700">{children}</em>
                      ),
                    }}
                  >
                    {article.content}
                  </ReactMarkdown>
                </div>

                {/* Article Footer */}
                <div className="mt-8 pt-6 border-t border-gray-300">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">
                        Published {getRelativeTime(article.created_at)}
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        Article ID: #{article.id}
                      </p>
                    </div>
                    <div className="flex space-x-4">
                      <button className="text-gray-600 hover:text-gray-800 text-sm font-medium">
                        Share
                      </button>
                      <button className="text-gray-600 hover:text-gray-800 text-sm font-medium">
                        Print
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </main>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Article Information */}
              <div className="bg-white border border-gray-300 p-6">
                <h4 className="text-lg font-serif font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2">
                  Article Information
                </h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-start">
                    <span className="text-gray-600 text-sm">Published</span>
                    <span className="font-medium text-gray-900 text-right text-sm">
                      {formatDate(article.created_at)}
                    </span>
                  </div>
                  <div className="flex justify-between items-start">
                    <span className="text-gray-600 text-sm">Reading time</span>
                    <span className="font-medium text-gray-900">
                      ~{Math.ceil(article.content.length / 1000)} min
                    </span>
                  </div>
                  <div className="flex justify-between items-start">
                    <span className="text-gray-600 text-sm">Sources</span>
                    <span className="font-medium text-gray-900">
                      {article.sources.length}
                    </span>
                  </div>
                </div>
              </div>

              {/* Related Articles */}
              <div className="bg-white border border-gray-300 p-6">
                <h4 className="text-lg font-serif font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2">
                  More from Taza Khabar
                </h4>
                <div className="space-y-4">
                  <div className="border-b border-gray-100 pb-3">
                    <h5 className="text-sm font-medium text-gray-900 mb-1">
                      Economic Update: Markets React to Policy Changes
                    </h5>
                    <p className="text-xs text-gray-600">3 hours ago</p>
                  </div>
                  <div className="border-b border-gray-100 pb-3">
                    <h5 className="text-sm font-medium text-gray-900 mb-1">
                      International Relations: Summit Outcomes
                    </h5>
                    <p className="text-xs text-gray-600">5 hours ago</p>
                  </div>
                  <div>
                    <h5 className="text-sm font-medium text-gray-900 mb-1">
                      Technology Sector Analysis
                    </h5>
                    <p className="text-xs text-gray-600">1 day ago</p>
                  </div>
                </div>
                <a
                  href="/"
                  className="inline-block mt-4 text-sm text-gray-700 hover:text-gray-900 font-medium"
                >
                  View all articles →
                </a>
              </div>

              {/* Newsletter */}
              <div className="bg-gray-800 text-white p-6">
                <h4 className="text-lg font-serif font-bold mb-3">
                  Daily Briefing
                </h4>
                <p className="text-sm text-gray-300 mb-4">
                  Get our top stories delivered to your inbox every morning.
                </p>
                <div className="space-y-3">
                  <input
                    type="email"
                    placeholder="Enter email address"
                    className="w-full px-3 py-2 bg-white text-gray-900 text-sm border border-gray-300 focus:outline-none focus:border-gray-500"
                  />
                  <button className="w-full bg-red-600 text-white py-2 text-sm font-medium hover:bg-red-700 transition-colors">
                    Subscribe
                  </button>
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
