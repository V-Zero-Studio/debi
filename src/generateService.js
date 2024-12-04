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

  return imgUrls;
};

//
//
// finally, return a list of suggested attributes as keywords/phases formatted as follows: {keyword/phase, keyword/phase, ... keyword/phase}
export const generateTags = async (prompt, imgUrls) => {
  const textPrompt = "the prompt that generates these images is \"" + prompt + "\". " +
    "detect as many as possible a set of attributes for which all these images' objects or people have a common value and, for each such attribute, suggest a different value (unless the original value has been specified in the prompt, in which case you should ignore such an attribute).\n\n for example: if identifying that all images' people are 'male' as the value of the gender attribute, you can suggest 'female' or 'non-binary' as a different value (unless 'male' has been specified in the prompt, in which case you should ignore the gender attribute). do not suggest a value that already appears in at least one of the images. return JavaScript code of an array [{\"attribute\": \"gender\", \"common\": \"male\", \"suggestion\": [\"gender: female\", \"gender: non-binary\"]}]. only return the JavaScript code. do not include other texts or markdown code like '```javascript'";
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

  let result
  try {
    console.log("captioning the generated images ...");
    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: messages,
    });

    result = response.choices[0].message.content;
    // console.log(result);
    const tagList = JSON.parse(result);
    console.log(tagList);

    const tags = []
    tagList.map((tagInfo) => {tags.push(...tagInfo.suggestion)})
    return tags
  } catch (error) {
    console.error("Error captioning images:", error);
    console.error(result)
    return [];
  }
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
