import { news_agent } from "./news_agent.js";
import axios from "axios";

let dump = await axios.post("http://localhost:8000/tool", {
  query: "India News",
  num_results: 20,
});

console.log(`Found ${dump.data.scraped_data.length} news articles`);

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

try {
  const newsReport = await news_agent("India News", extractedText);
  console.log("News report generation successful!");
} catch (error) {
  console.error("Failed to generate news report:", error.message);
}
