import React, { useState } from 'react';
import './App.css';
import PromptInput from './components/PromptInput';
import TagList from './components/Tag';
import ImageGrid from './components/ImageCard';
import { generateTags, generateImages, changeTags, insertToPrompt } from './generateService';

function App() {
  const [tags, setTags] = useState(['female', 'elder', 'informally dressed']); // initial tags
  const [images, setImages] = useState([]); // initial images

  // Function to generate new tags and images based on the prompt
  const handleGenerate = (prompt) => {
    const newTags = generateTags(prompt);
    const newImages = generateImages(prompt);
    setTags(newTags);
    setImages(newImages);
  };

  const handleUpdate = (tags) => {
    const newTags = changeTags(tags) // if not providing a prompt, use the previous prompt
    setTags(newTags);
  }

  return (
    <div className="App">
      <PromptInput onGenerate={handleGenerate} />
      <TagList tags={tags} onUpdate={handleUpdate} onTag={insertToPrompt}/>
      <ImageGrid images={images} />
    </div>
  );
}

export default App;
