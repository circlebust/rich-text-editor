import React from 'react';
import styled from '@emotion/styled';

export const Menu = styled('div')`
  & > * {
    display: inline-block;
  }

  & > * + * {
    margin-left: 15px;
  }
`;

export default Menu;
