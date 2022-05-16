import React from 'react';
import styled from 'styled-components';

export const ButtonContainer = styled.div`
  position: relative;
  display: inline-block;
  color: white;
  font-size: 1.2em;
  font-weight: 600;
  text-align: center;
  padding: 0.5em 1em;
  margin: 0.5em;
  background-color: royalblue;
  border-radius: 8px;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  overflow: hidden;
  cursor: pointer;
`;

type ButtonProps = {
  onClick: () => void;
  children?: React.ReactNode;
};
export function Button(props: ButtonProps) {
  const { onClick } = props;
  return (
    <ButtonContainer id="Button" onClick={onClick}>
      <span>Load More</span>
    </ButtonContainer>
  );
}

export default Button;
