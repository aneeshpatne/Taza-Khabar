from googlesearch import search_news, search

def search_news_tool(query, num_results=10):
    links = []
    try:
        for url in search_news(query, num_results=num_results):
            links.append(url)
            return {"links": links, "success": True}
    except Exception as e:
        return {"error": str(e), "success": False}
    
    