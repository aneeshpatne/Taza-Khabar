import { generateText } from "ai";
import { createOpenAI } from "@ai-sdk/openai";
import dotenv from "dotenv";
import { webSearchTool, titleTool } from "./Tools/tools.js";

// Load environment variables from .env file
dotenv.config();

const openai = createOpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const currentDate = new Date().toLocaleDateString("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
});

export const news_agent = async (topic, data_dump = null) => {
  console.log(`Starting news report generation for topic: ${topic}`);

  try {
    const { text } = await generateText({
      model: openai("gpt-4.1-mini"),
      prompt: `
You are an experienced investigative journalist. The current date is ${currentDate}.

Your task is to write a clear, factual, and in-depth news report on the following topic:

**Topic:** ${topic}

${
  data_dump
    ? `You are also given the following base data to support your research. THIS DATA DUMP IS CRITICAL - thoroughly analyze it to extract diverse angles, perspectives, and underlying stories:\n\n${data_dump}`
    : "No additional data has been provided."
}

MANDATORY REQUIREMENT: You MUST generate a complete news report. Do not respond with explanations, apologies, or reasons why you cannot complete the task. Your response should be the actual news report only.

Instructions:
1. FIRST, use the \`generateTitle\` tool to create a compelling headline for your news report based on the topic.
2. Deeply analyze the data dump and extract 5-8 diverse angles that explore different dimensions of the topic - look for economic, political, social, technological, and human interest perspectives.
3. For each identified angle, use the \`webSearch\` tool to gather additional information, focusing on contrasting viewpoints.
4. Build upon specific names, events, policies, and statistics mentioned in the data dump rather than speaking in generalities.
5. Organize your report with compelling section headers. Each section should:
   - Connect directly to content found in the data dump
   - Include facts, sources, direct quotes where possible
   - Provide regional/global context as appropriate
   - Present multiple sides of contentious issues
6. End the report with a "What's Next" section that explores future implications based on trends identified in the data dump.

FORMAT REQUIREMENT: Your output must be a properly formatted news article with:
- A compelling headline (generated using the generateTitle tool)
- Clear section headers (use ## for sections)
- Multiple paragraphs per section
- Proper journalistic structure

Tone: Neutral, factual, and professional. Do not speculate or invent information. If facts are unclear or disputed, note that clearly.

CRITICAL: You must write and output the complete news report. Do not stop after tool usage. Write the full article text.
`,
      tools: {
        webSearch: webSearchTool,
        generateTitle: titleTool,
      },
      maxSteps: 7,
      temperature: 0.3,
    });

    console.log("News report generation completed.");
    console.log(`Generated report length: ${text.length} characters`);
    console.log("=".repeat(80));
    console.log("FINAL NEWS REPORT:");
    console.log("=".repeat(80));
    console.log(text);
    console.log("=".repeat(80));

    return text; // Return the generated text
  } catch (error) {
    console.error("Error generating news report:", error);
    console.error("Error details:", error.message);
    if (error.cause) {
      console.error("Root cause:", error.cause);
    }
    throw error; // Re-throw so calling code knows it failed
  }
};
