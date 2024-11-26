import React, { useState, forwardRef, useImperativeHandle } from "react";
// import Button from './Button';
import styled from "styled-components";

const PromptContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 20px;
`;

const PromptInput = styled.input`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 300px;
  margin-right: 10px;
`;

const Button = styled.button`
  width: 40px;
  height: 40px;
  background-color: #ccc;
  border: none;
  border-radius: 5px;
  margin: 0 5px;
  cursor: pointer;
`;

const Prompt = forwardRef(({ onGenerate }, ref) => {
  const [prompt, setPrompt] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);

  const sendPrompt = async () => {
    if (prompt) {
      setIsDisabled(true);
      await onGenerate(prompt);
      setIsDisabled(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      sendPrompt();
    }
  };

  const insertTagIntoPrompt = (tag) => {
    console.log("inserting into prompt: ", tag);
  }
  
  useImperativeHandle(ref, () => ({
    insertTagIntoPrompt,
  }));

  return (
    <PromptContainer>
      <PromptInput
        type="text"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Describe the image you want to generate"
        onKeyDown={handleKeyDown}
        disabled={isDisabled}
      />
      <Button onClick={sendPrompt} />
    </PromptContainer>
  );
});

export default Prompt;
