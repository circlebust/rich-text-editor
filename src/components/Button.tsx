import React from 'react';
import styled from '@emotion/styled';


type E = { active: any }
export const Button = styled('span')<E>`
  cursor: pointer;
  color: ${(props) => props["reversed"]
      ? props["active"] ? 'white' : '#aaa'
      : props["active"] ? 'black' : '#ccc'};
`;

export default Button;


