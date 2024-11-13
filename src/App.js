import React from 'react';
import './App.css';
import Prompt from './components/PromptInput';
import TagList from './components/Tag';
import ImageGrid from './components/ImageCard';

function App() {
  return (
    <div className="App">
      <Prompt />
      <TagList />
      <ImageGrid />
    </div>
  );
}

export default App;
