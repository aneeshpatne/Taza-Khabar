import { tool } from "ai";
import { z } from "zod";
import axios from "axios";
let sources = [];
export const webSearchTool = tool({
  description:
    "Search the web for current information, news, or any topic. Use this tool whenever a user asks for web search, latest news, current events, or information that requires searching the internet.",
  parameters: z.object({
    query: z.string().describe("The search query to find information about"),
  }),
  execute: async ({ query }) => {
    console.log(`\n Web search tool invoked with query: "${query}"`);

    try {
      const response = await axios.post("http://localhost:8000/tool", {
        query: query,
        num_results: 2,
      });

      console.log("Search results received");
      const links = response.data.search_results?.links || [];
      sources.push(...links);
      return response.data;
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
