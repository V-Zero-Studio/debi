import React from 'react';
import styled from 'styled-components';

const TagContainer = styled.div`
  display: flex;
  gap: 10px;
  margin: 10px;
`;

const TagButton = styled.button`
  padding: 8px 12px;
  background-color: #f0f0f0;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  font-size: 14px;
`;

const Tag = ({ label }) => {
  return <TagButton>{label}</TagButton>;
};

const Button = styled.button`
  width: 40px;
  height: 40px;
  background-color: #ccc;
  border: none;
  border-radius: 5px;
  margin: 0 5px;
  cursor: pointer;
`;

const TagList = () => {
  return (
    <TagContainer>
      <Tag label="female" />
      <Tag label="elder" />
      <Tag label="informally dressed" />
      <Button />
    </TagContainer>
  );
};

export default TagList;
