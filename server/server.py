from pydantic import BaseModel
import uvicorn
from fastapi import FastAPI

app = FastAPI(title="Taza Khabar Server API", version="1.0.0")

class Query(BaseModel):
    query: str
    num_results: int = 10

@app.post("/web_search")
def web_search(query: Query):
    return {"query": query.query, "num_results": query.num_results}

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)