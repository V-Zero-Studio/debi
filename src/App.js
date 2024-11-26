import React, { useState, useRef } from "react";
import "./App.css";
import PromptInput from "./components/PromptInput";
import TagList from "./components/Tag";
import ImageGrid from "./components/ImageCard";
import {
  generateTags,
  generateImages,
  changeTags,
  insertToPrompt,
} from "./generateService";

function App() {
  const [tags, setTags] = useState(["female", "elder", "informally dressed"]); // initial tags
  const [images, setImages] = useState([]); // initial images
  const promptInput = useRef(null);

  // Function to generate new tags and images based on the prompt
  const handleGenerate = async (prompt) => {
    const newImages = await generateImages(prompt);
    setImages(newImages);

    const newTags = await generateTags(prompt, newImages);
    setTags(newTags);
  };

  const handleUpdate = (tags) => {
    const newTags = changeTags(tags); // if not providing a prompt, use the previous prompt
    setTags(newTags);
  };

  const handleTagClick = (tag) => {
    if (promptInput.current) {
      promptInput.current.insertTagIntoPrompt(tag);
    }
  };

  return (
    <div className="App">
      <PromptInput ref={promptInput} onGenerate={handleGenerate} />
      <TagList tags={tags} onUpdate={handleUpdate} onTag={handleTagClick} />
      <ImageGrid images={images} />
    </div>
  );
}

export default App;
