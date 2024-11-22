import { OpenAI } from "openai";

const openai = new OpenAI({
  apiKey: process.env.REACT_APP_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});

//
export const generateImages = async (prompt) => {
  // Example logic to generate images based on prompt
  // In a real scenario, this could involve calling an API to generate images
  // Here we just return mock image URLs

  let imgUrls = [];
  try {
    console.log("sending image generation request:", prompt);
    const response = await openai.images.generate({
      model: "dall-e-2",
      prompt: prompt,
      n: 4,
      size: "256x256",
    });
    response.data.map((image, index) => imgUrls.push(image.url));
  } catch (error) {
    console.error("Error generating image:", error);
    return [];
  }

  // return [
  //   "https://via.placeholder.com/150?text=Image+1",
  //   "https://via.placeholder.com/150?text=Image+2",
  //   "https://via.placeholder.com/150?text=Image+3",
  //   "https://via.placeholder.com/150?text=Image+4",
  // ];
  return imgUrls;
};

//
//
// finally, return a list of suggested attributes as keywords/phases formatted as follows: {keyword/phase, keyword/phase, ... keyword/phase}
export const generateTags = async (imgUrls) => {
  const textPrompt =
    "detect as many as possible attributes that the images have in common and, for each common attribute, suggest a different value.\n\n for example: if identifying that all images show 'male' as the gender attribute, you can suggest 'female' or 'non-binary' as a different value, and return JavaScript code of an array [{\"attribute\": \"gender\", \"common\": \"male\", \"suggestion\": [\"female\", \"non-binary\"]}]. only return the JavaScript code. do not include other texts or markdown code like '```javascript'";
  const messageContents = [
    {
      type: "text",
      text: textPrompt,
    },
  ];
  imgUrls.map((imgUrl) => {
    messageContents.push({ type: "image_url", image_url: { url: imgUrl } });
  });

  const messages = [{ role: "user", content: messageContents }];

  // console.log(message);

  try {
    console.log("captioning the generated images ...");
    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: messages,
    });

    const result = response.choices[0].message.content;
    console.log(result);

    const tags = JSON.parse(result);
    console.log(tags);
  } catch (error) {
    console.error("Error captioning images:", error);
    return [];
  }

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
  console.log("inserting", tag, "into prompt");
};
