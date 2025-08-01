import { tool } from "ai";
import { z } from "zod";
import axios from "axios";
let sources = [];
let generatedTitle = "";

export const titleTool = tool({
  description:
    "Generate a compelling and relevant title for the news report based on the topic and content provided. Use this tool to create an engaging headline that captures the essence of the news article.",
  parameters: z.object({
    topic: z.string().describe("The topic of the news report"),
  }),
  execute: async ({ topic }) => {
    console.log(`\n Title tool invoked with topic: "${topic}"`);
    const title = `Breaking News: ${topic}`;

    // Store the generated title
    generatedTitle = title;

    return {
      title: title,
    };
  },
});
export const webSearchTool = tool({
  description:
    "Search the web for current information, news, or any topic. Use this tool whenever a user asks for web search, latest news, current events, or information that requires searching the internet.",
  parameters: z.object({
    query: z.string().describe("The search query to find information about"),
  }),
  execute: async ({ query }) => {
    console.log(`\n Web search tool invoked with query: "${query}"`);

    try {
      const response = await axios.post("http://localhost:8000/web_search", {
        query: query,
        num_results: 3,
      });

      console.log("Search results received");

      // Extract URLs (keys) and content (values) from the new format
      const results = response.data.results || {};
      const urls = Object.keys(results);
      const content = Object.values(results);

      // Store URLs as sources
      sources.push(...urls);

      console.log(`Found ${urls.length} URLs with content`);

      // Return the scraped content for the AI to use
      return {
        urls: urls,
        content: content,
        summary: `Found ${urls.length} relevant articles with scraped content`,
      };
    } catch (error) {
      console.error("Error performing web search:", error.message);
      return {
        error: "Failed to perform web search",
        message: error.message,
      };
    }
  },
});
export const getSources = () => sources;
export const getTitle = () => generatedTitle;
