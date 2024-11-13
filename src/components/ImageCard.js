import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  margin: 20px;
`;

const ImageCard = styled.div`
  width: 200PX;
  height: 200px;
  background-color: #eee;
  border-radius: 10px;
`;

const ImageGrid = () => {
  return (
    <CardContainer>
      <ImageCard />
      <ImageCard />
      <ImageCard />
      <ImageCard />
    </CardContainer>
  );
};

export default ImageGrid;
