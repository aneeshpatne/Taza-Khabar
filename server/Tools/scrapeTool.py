from playwright.sync_api import sync_playwright
import json
from typing import Dict, List, Any

def scrape(urls: List[str]) -> List[Dict[str, Any]]:
    results = []
    
    try:
        with sync_playwright() as p:
            browser = p.chromium.launch(headless=True)
            page = browser.new_page()
            
            page.set_extra_http_headers({
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"
            })
            
            for url in urls:
                try:
                    page.goto(url, wait_until="networkidle", timeout=30000)
                    
                    text_blocks = page.locator("body p, body h1, body h2, body h3, body h4, body h5, body h6").all_text_contents()
                    
                    text_blocks = [text.strip() for text in text_blocks if text.strip()]
                    
                    content = {
                        "url": url,
                        "title": page.title(),
                        "text_blocks": text_blocks,
                        "success": True
                    }
                    
                    results.append(content)
                    
                except Exception as e:
                    results.append({
                        "error": str(e),
                        "url": url,
                        "success": False
                    })
            
            browser.close()
            return results
            
    except Exception as e:
        error_results = []
        for url in urls:
            error_results.append({
                "error": str(e),
                "url": url,
                "success": False
            })
        
        return error_results

if __name__ == "__main__":
    urls = ["https://example.com", "https://httpbin.org/html"]
    results = scrape(urls)
    print(json.dumps(results, indent=2))
