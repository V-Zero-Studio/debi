import React from "react";
import styled from "styled-components";

const TagContainer = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap; /* Allow wrapping */
  margin: 10px;
  padding: 10px;
`;

const TagButton = styled.button`
  padding: 8px 12px;
  background-color: #f0f0f0;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  font-size: 14px;
`;

// const Tag = ({ label }) => {
//   return <TagButton>{label}</TagButton>;
// };

// const Button = styled.button`
//   width: 40px;
//   height: 40px;
//   background-color: #ccc;
//   border: none;
//   border-radius: 5px;
//   margin: 0 5px;
//   cursor: pointer;
// `;

const TagList = ({ tags, onUpdate, onTag}) => {
    // const handleButtonClick = () => {
    //     onUpdate(tags)
    // };

    const handleTagClick = (e) => {
        onTag(e.target.getAttribute("tag"))
    }

  return (
    <TagContainer>
      {tags.map((tag, index) => (
        <TagButton key={index} tag={tag} onClick={handleTagClick}>{tag}</TagButton>
      ))}
    {/* <Button onClick={handleButtonClick}/> */}
    </TagContainer>
  );
};

export default TagList;
