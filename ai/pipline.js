import { news_agent } from "./news_agent.js";
import axios from "axios";
import { db } from "./lib/db.js";
import * as schema from "./lib/schema/news.js";
import { getSources } from "./Tools/tools.js";
try {
  let dump = await axios.post("http://localhost:8000/web_search", {
    query: "India News",
    num_results: 2,
  });

  console.log("Response received from web search API");

  // Extract URLs and content from the new format
  const results = dump.data.results || {};
  const urls = Object.keys(results);
  const content = Object.values(results);

  console.log(`Found ${urls.length} news articles`);

  // Use the URLs as initial sources
  const initialSources = urls;

  // Join all the scraped content
  const extractedText = content.join("\n\n");

  const newsReport = await news_agent("India News", extractedText);
  console.log("News report generation successful!");

  const allSources = [...new Set([...initialSources, ...getSources()])];

  await db.insert(schema.news).values({
    content: newsReport,
    sources: allSources,
  });
  console.log("News report saved to database successfully!");
} catch (error) {
  console.error("Pipeline failed:", error.message);
  console.error("Full error details:", error);
}
