import React, { useState } from "react";
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

const sendPrompt = () => {
  console.log("sending prompt");
};

const Prompt = ({ onGenerate }) => {
  const [prompt, setPrompt] = useState("");

  const handleButtonClick = () => {
    if (prompt) {
      onGenerate(prompt);
    }
  };

  return (
    <PromptContainer>
      <PromptInput
        type="text"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="a successful tech company CEO"
      />
      <Button onClick={handleButtonClick} />
    </PromptContainer>
    //   <div>
    //     <input
    //       type="text"
    //       value={prompt}
    //       onChange={(e) => setPrompt(e.target.value)}
    //       placeholder="a successful tech company CEO"
    //     />
    //     <Button onClick={handleButtonClick} />
    //   </div>
  );
};

export default Prompt;
