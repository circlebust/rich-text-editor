import React from 'react';
import styled from '@emotion/styled';
import { Wrapper } from './Wrapper';
export const Warning = styled(Wrapper)`
  background: #fffae0;

  & > pre {
    background: #fbf1bd;
    white-space: pre;
    overflow-x: scroll;
    margin-bottom: 0;
  }
`;

export default Warning;