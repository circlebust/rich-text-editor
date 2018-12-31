import React from 'react';
import styled from '@emotion/styled';
import { MaskedRouterLink } from './MaskedRouterLink';

export const Tab = styled(MaskedRouterLink)`
  display: inline-block;
  margin-bottom: 0.2em;
  padding: 0.2em 0.5em;
  border-radius: 0.2em;
  text-decoration: none;
  color: ${p => (p.active ? 'white' : '#777')};
  background: ${p => (p.active ? '#333' : 'transparent')};

  &:hover {
    background: #333;
  }
`;

export default Tab;