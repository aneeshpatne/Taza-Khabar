from playwright.async_api import async_playwright
import json
from typing import Dict, Any
import asyncio

async def scrape(url: str) -> Dict[str, Any]:
    try:
        async with async_playwright() as p:
            # Launch browser with better options to avoid detection
            browser = await p.chromium.launch(
                headless=True,
                args=[
                    '--disable-blink-features=AutomationControlled',
                    '--disable-dev-shm-usage',
                    '--no-sandbox',
                    '--disable-setuid-sandbox',
                    '--disable-web-security',
                    '--disable-features=VizDisplayCompositor'
                ]
            )
            
            # Create context with better settings
            context = await browser.new_context(
                user_agent="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
                viewport={"width": 1920, "height": 1080},
                ignore_https_errors=True
            )
            
            page = await context.new_page()
            
            # Stealth settings to avoid detection
            await page.add_init_script("""
                Object.defineProperty(navigator, 'webdriver', {
                    get: () => undefined,
                });
            """)
            
            await page.set_extra_http_headers({
                "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
                "Accept-Language": "en-US,en;q=0.5",
                "Accept-Encoding": "gzip, deflate",
                "Connection": "keep-alive",
                "Upgrade-Insecure-Requests": "1"
            })
            
            try:
                # Load page and wait for DOM content to be loaded
                await page.goto(url, wait_until="domcontentloaded", timeout=10000)
                
                # Wait a bit for dynamic content to load
                await page.wait_for_timeout(2000)
                
                # Try to get text content with better selectors
                text_blocks = []
                
                # Try different selectors for better content extraction
                selectors = [
                    "article p, article h1, article h2, article h3, article h4, article h5, article h6",
                    "main p, main h1, main h2, main h3, main h4, main h5, main h6",
                    ".content p, .content h1, .content h2, .content h3, .content h4, .content h5, .content h6",
                    "body p, body h1, body h2, body h3, body h4, body h5, body h6"
                ]
                
                for selector in selectors:
                    try:
                        elements = await page.locator(selector).all_text_contents()
                        if elements:
                            text_blocks = elements
                            break
                    except Exception:
                        continue
                
                # Clean and limit text blocks
                text_blocks = [text.strip() for text in text_blocks if text.strip() and len(text.strip()) > 10][:100]
                
                content = {
                    "url": url,
                    "title": await page.title(),
                    "text_blocks": text_blocks,
                    "success": True,
                    "content_length": len(text_blocks)
                }
                
                await browser.close()
                return content
                
            except Exception as e:
                error_msg = str(e)
                print(f"Error scraping {url}: {error_msg}")  # Debug logging
                await browser.close()
                return {
                    "error": error_msg,
                    "url": url,
                    "success": False,
                    "error_type": type(e).__name__
                }
            
    except Exception as e:
        return {
            "error": str(e),
            "url": url,
            "success": False,
            "error_type": type(e).__name__
        }

if __name__ == "__main__":
    async def main():
        url = "https://www.firstpost.com/explainers/operation-sindoor-india-pakistan-rafale-x-guard-13904322.html"
        result = await scrape(url)
        print(json.dumps(result, indent=2))
    
    asyncio.run(main())
