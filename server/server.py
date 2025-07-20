from pydantic import BaseModel
import uvicorn
from fastapi import FastAPI
from Tools.scrapeTool import scrape
from Tools.searchTool import search_news_tool
app = FastAPI(title="Taza Khabar Server API", version="1.0.0")

class Query(BaseModel):
    query: str
    num_results: int = 10

@app.post("/web_search")
def web_search(query: Query):
    res = search_news_tool(query.query, query.num_results)
    print(res.get("links", [])) 
    return {"message": "Search completed successfully."}

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)