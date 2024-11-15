import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  margin: 20px;
`;

// const ImageCard = ({image}) => (
//     return <img src={image}></img>
// )

// styled.div`
//   width: 200PX;
//   height: 200px;
//   background-color: #eee;
//   border-radius: 10px;
// `;

const ImageGrid = ({images}) => {
  return (
    <CardContainer>
      {images.map((image, index) => (
        <img key={index} src={image} alt={image}/>
      ))}
    </CardContainer>
  );
};

export default ImageGrid;
