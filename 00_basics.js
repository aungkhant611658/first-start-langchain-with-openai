import { config } from "dotenv";
config();

import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

async function chat(input) {
  const messages = [{ role: "user", content: input }];

  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: messages,
    temperature: 0,
  });

  return response.choices[0].message.content;
}

const question = "What is the capital of Korea";

chat(question)
  .then((response) => console.log(response))
  .catch((error) => console.log(error));
