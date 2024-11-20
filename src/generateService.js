import { OpenAI } from 'openai';

const openai = new OpenAI({
  apiKey: process.env.REACT_APP_OPENAI_API_KEY, dangerouslyAllowBrowser: true
});


// 
export const generateImages = async (prompt) => {
  // Example logic to generate images based on prompt
  // In a real scenario, this could involve calling an API to generate images
  // Here we just return mock image URLs

  let imgUrls = []
  try {
    console.log("sending image generation request:", prompt)
    const response = await openai.images.generate({
      model: "dall-e-2",
      prompt: prompt,
      n: 4,
      size: "256x256",
    });
    response.data.map((image, index) => (imgUrls.push(image.url)));
  } catch (error) {
    console.error('Error generating image:', error);
    return [];
  }

  // return [
  //   "https://via.placeholder.com/150?text=Image+1",
  //   "https://via.placeholder.com/150?text=Image+2",
  //   "https://via.placeholder.com/150?text=Image+3",
  //   "https://via.placeholder.com/150?text=Image+4",
  // ];
  return imgUrls
};

// generateService.js
export const generateTags = (images) => {
  
  return ["creative", "experienced", "dynamic"];
};

//
//  find a new subset of tags different from tags
//
export const changeTags = (tags) => {
  console.log("changing tags ...");
  return [];
};

//
//
//
export const insertToPrompt = (tag) => {
  console.log("inserting", tag, "into prompt")
};
