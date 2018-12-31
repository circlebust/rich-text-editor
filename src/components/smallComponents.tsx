import React from 'react';
import styled from '@emotion/styled';
import {
  Link as RouterLink,
} from 'react-router-dom';

type E = { active: any }
export const Button = styled('span')<E>`
  cursor: pointer;
  color: ${(props) => props["reversed"]
      ? props["active"] ? 'white' : '#aaa'
      : props["active"] ? 'black' : '#ccc'};
`

export const Icon = styled(({ className, ...rest }) => {
  return <span className={`material-icons ${className}`} {...rest} />
})`
  font-size: 18px;
  vertical-align: text-bottom;
`

export const Menu = styled('div')`
  & > * {
    display: inline-block;
  }

  & > * + * {
    margin-left: 15px;
  }
`

export const Toolbar = styled(Menu)`
  position: relative;
  padding: 1px 18px 17px;
  margin: 0 -20px;
  border-bottom: 2px solid #eee;
  margin-bottom: 20px;
`




export const Nav = styled('div')`
  padding: 10px 15px;
  color: #aaa;
  background: #000;
`

export const Title = styled('span')`
  margin-right: 0.5em;
`

export const LinkList = styled('div')`
  float: right;
`

export const Link = styled('a')`
  margin-left: 1em;
  color: #aaa;
  text-decoration: none;

  &:hover {
    color: #fff;
    text-decoration: underline;
  }
`

export const TabList = styled('div')`
  padding: 15px 15px;
  background-color: #222;
  text-align: center;
  margin-bottom: 30px;

  & > * + * {
    margin-left: 0.5em;
  }
`

export const MaskedRouterLink = ({ active, ...props }) => <RouterLink to={""} {...props} />

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
`

export const Wrapper = styled('div')`
  max-width: 42em;
  margin: 0 auto 20px;
  padding: 20px;
`
