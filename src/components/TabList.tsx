import React from 'react';
import styled from '@emotion/styled';

export const TabList = styled('div')`
  padding: 15px 15px;
  background-color: #222;
  text-align: center;
  margin-bottom: 30px;

  & > * + * {
    margin-left: 0.5em;
  }
`;

export default TabList; 