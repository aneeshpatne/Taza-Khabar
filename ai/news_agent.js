import { generateText } from "ai";
import { createOpenAI } from "@ai-sdk/openai";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

const openai = createOpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const { text } = await generateText({
  model: openai("gpt-4o"),
  prompt: "Write a short summary of the latest news in Mumbai.",
});
console.log(text);
