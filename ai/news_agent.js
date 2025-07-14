import { generateText } from "ai";
import { createOpenAI } from "@ai-sdk/openai";
import dotenv from "dotenv";
import { webSearchTool } from "./Tools/tools.js";

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
  const { text } = await generateText({
    model: openai("o4-mini"),
    prompt: `
You are an experienced journalist. The current date is ${currentDate}.

Your task is to write a clear, factual, and in-depth news report on the following topic:

**Topic:** ${topic}

${
  data_dump
    ? `You are also given the following base data to support your research:\n\n${data_dump}`
    : "No additional data has been provided."
}

Instructions:
1. Break down the topic into 3-4 important angles or subtopics that need coverage to give readers a full understanding.
2. Use the \`webSearch\` tool to gather current, credible, and multi-perspective information on each angle.
3. Organize your report with appropriate section headers. Each section should focus on one angle and include facts, sources, and context.
4. Cross-verify key facts wherever possible using multiple sources.
5. End the report with a “What's Next” or “Looking Ahead” section summarizing future implications or developments related to the topic.

Tone: Neutral, factual, and professional. Do not speculate or invent information. If facts are unclear or disputed, note that clearly.

Output only the final report—no notes or meta-commentary.
`,
    tools: {
      webSearch: webSearchTool,
    },
    maxSteps: 5,
  });

  console.log(text);
};

// Execute the news agent function
news_agent("Mumbai news today");
