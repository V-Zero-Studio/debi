import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  width: 40px;
  height: 40px;
  background-color: #ccc;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #bdbdbd;
  }

  &:active {
    background-color: #a6a6a6;
  }
`;

const Button = ({ onClick }) => {
  return <StyledButton onClick={onClick} />;
};

export default Button;
