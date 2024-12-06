"use server";

import { Content } from "@/app/page";

import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env["GPT_API_KEY"]
});

export async function gpt(prompt: string) {
  const chatCompletion = await client.chat.completions.create({
    messages: [{ role: "user", content: prompt }],
    model: "gpt-4o-mini"
  });

  return chatCompletion.choices[0].message.content;
}

export default async function GptComponent({ input }: { input: string }) {
  return (
    <Content
      color="red"
      input={input}
    />
  );
}
