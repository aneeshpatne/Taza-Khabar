from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from typing import List, Dict, Any
import uvicorn
from searchTool import search_news_tool
from scrapeTool import scrape

app = FastAPI(title="Taza Khabar Tool API", version="1.0.0")

class QueryRequest(BaseModel):
    query: str
    num_results: int = 10

class ToolResponse(BaseModel):
    query: str
    search_results: Dict[str, Any]
    scraped_data: List[Dict[str, Any]]
    success: bool
    error: str = None

@app.get("/")
async def root():
    return {"message": "Taza Khabar Tool API is running!"}

@app.post("/tool", response_model=ToolResponse)
async def tool_endpoint(request: QueryRequest):
    """
    Main tool endpoint that:
    1. Takes a query
    2. Searches for news links using searchTool
    3. Scrapes the found links using scrapeTool
    4. Returns the combined results
    """
    try:
        # Step 1: Search for news links
        search_results = search_news_tool(request.query, request.num_results)
        
        if not search_results.get("success", False):
            raise HTTPException(
                status_code=500, 
                detail=f"Search failed: {search_results.get('error', 'Unknown error')}"
            )
        
        links = search_results.get("links", [])
        
        if not links:
            return ToolResponse(
                query=request.query,
                search_results=search_results,
                scraped_data=[],
                success=True,
                error="No links found for the query"
            )
        
        # Step 2: Scrape the found links
        scraped_data = await scrape(links)
        
        return ToolResponse(
            query=request.query,
            search_results=search_results,
            scraped_data=scraped_data,
            success=True
        )
        
    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=f"Tool processing failed: {str(e)}"
        )

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)