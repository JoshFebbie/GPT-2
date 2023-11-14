import OpenAI from "openai";

const openai = new OpenAI({
    apiKey: "",
    dangerouslyAllowBrowser: true
});


export async function sendMsgToOpenAI(message) {
    const res = await openai.completions.create({
      model: "gpt-3.5-turbo-instruct",
      prompt: message,
      max_tokens: 256,
      temperature: 0,
    });
  
    console.log("API Response:", res);  // Log the full response
  
    if (res && res.choices) {
        return res.choices[0].text;
      } else {
        throw new Error("Invalid API response");
      }
    }



















