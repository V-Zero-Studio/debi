import React, {
  useState,
  forwardRef,
  useImperativeHandle,
  useRef,
} from "react";
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
  width: 100%;
  margin-right: 10px;
  overflow: hidden;
`;

const Button = styled.button`
  width: 40px;
  height: 40px;
  background-color: #888;
  border: none;
  border-radius: 5px;
  margin: 0 5px;
  cursor: pointer;
  background-image: url('data:image/svg+xml;charset=UTF-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>');
  background-repeat: no-repeat;
  background-position: center;
  background-size: 50%;
`;

const Prompt = forwardRef(({ onGenerate }, ref) => {
  const [prompt, setPrompt] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);
  const inputRef = useRef(null);

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
      return;
    }

    const input = inputRef.current;

    // Scroll to the end of the input box to keep the cursor in view
    input.scrollLeft = input.scrollWidth;
  };

  const insertTagIntoPrompt = (tag) => {
    console.log("inserting into prompt: ", tag);
    setPrompt(prompt + ", " + tag);
  };

  useImperativeHandle(ref, () => ({
    insertTagIntoPrompt,
  }));

  return (
    <PromptContainer>
      <PromptInput
        type="text"
        ref={inputRef}
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
