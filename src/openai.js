// const { Configuration, OpenAiApi } = require('openai');
// const configuration = new Configuration({ apiKey: "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" });
// const openai = new OpenAiApi(configuration);

// export async function sendMsgToOpenAI(message) {
//     const res = await openai.createCompletion ({
//         model: "text-davinci-003",
//         prompt: message,
//         temperature: 0.7,
//         max_tokens: 256,
//         top_p: 1,
//         frequency_penalty: 0,
//         presense_penalty: 0
//     })
//     return res.data.choices[0].text
// }


// const openai = require('openai');
// const Configuration = openai.Configuration;
// const OpenAiApi = openai.OpenAiApi;

// const configuration = new Configuration({ apiKey: "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" }); // Make sure to replace this with your API key if it's different
// const api = new OpenAiApi(configuration);

// export async function sendMsgToOpenAI(message) {
//     const res = await api.createCompletion({
//         model: "text-davinci-003",
//         prompt: message,
//         temperature: 0.7,
//         max_tokens: 256,
//         top_p: 1,
//         frequency_penalty: 0,
//         presense_penalty: 0
//     });
//     return res.data.choices[0].text;
// }





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



















