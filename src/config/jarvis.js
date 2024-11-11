
// const apiKey = "";

import {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } from "@google/generative-ai"
  
  
  // const apiKey = import.meta.env.VITE_API_KEY;
  const apiKey = "AIzaSyDb6E6x8169ctqRMW7-zMIvX542IViGSdY";
  if(!apiKey){
    console.log('API is not defined');
  }
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
  };
  
  async function runChat(prompt) {
    const chatSession = model.startChat({
      generationConfig,
      history: [
      ],
    });
  
    const result = await chatSession.sendMessage(prompt);
    const reponse = result.response;
    console.log(result.response.text());
    return reponse.text();
  }
  
 export default runChat;