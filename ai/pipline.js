import { news_agent } from "./news_agent.js";
import axios from "axios";
import { db } from "./lib/db.js";
import * as schema from "./lib/schema/news.js";

try {
  // Fetch news data from API
  let dump = await axios.post("http://localhost:8000/tool", {
    query: "India News",
    num_results: 20,
  });

  console.log(`Found ${dump.data.scraped_data.length} news articles`);

  // Extract text from scraped data
  const extractedText = dump.data.scraped_data
    .map((item) => {
      if (item.text_blocks && Array.isArray(item.text_blocks)) {
        return item.text_blocks.join(" ");
      }
      return "";
    })
    .join("\n\n");

  console.log("Extracted News Text.");
  console.log("=".repeat(50));

  // Generate news report
  const newsReport = await news_agent("India News", extractedText);
  console.log("News report generation successful!");

  // Save to database
  await db.insert(schema.alert).values({
    content: newsReport,
  });
  console.log("News report saved to database successfully!");
} catch (error) {
  console.error("Pipeline failed:", error.message);

  // More specific error handling
  if (error.code === "ECONNREFUSED") {
    console.error(
      "Could not connect to the news API server. Make sure the server is running on localhost:8000"
    );
  } else if (error.response) {
    console.error(
      "API returned an error:",
      error.response.status,
      error.response.statusText
    );
  } else if (error.message.includes("scraped_data")) {
    console.error(
      "Issue with data structure - scraped_data might be missing or malformed"
    );
  } else if (
    error.message.includes("database") ||
    error.message.includes("db")
  ) {
    console.error(
      "Database operation failed - check database connection and schema"
    );
  } else {
    console.error("Unexpected error:", error);
  }
}
