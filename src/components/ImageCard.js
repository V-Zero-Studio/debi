import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  margin: 20px;
`;

const ImageGrid = ({images}) => {
  return (
    <CardContainer>
      {images.map((image, index) => (
        <img key={index} src={image} alt={image} width={256} height={256}/>
      ))}
    </CardContainer>
  );
};

export default ImageGrid;
