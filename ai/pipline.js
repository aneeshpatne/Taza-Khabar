import { news_agent } from "./news_agent.js";
import axios from "axios";
import { db } from "./lib/db.js";
import * as schema from "./lib/schema/news.js";
import { getSources } from "./Tools/tools.js";
try {
  let dump = await axios.post("http://localhost:8000/tool", {
    query: "India News",
    num_results: 2,
  });

  console.log(`Found ${dump.data.scraped_data.length} news articles`);

  const initialSources = dump.data.search_results?.links || [];

  const extractedText = dump.data.scraped_data
    .map((item) => {
      if (item.text_blocks && Array.isArray(item.text_blocks)) {
        return item.text_blocks.join(" ");
      }
      return "";
    })
    .join("\n\n");

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
