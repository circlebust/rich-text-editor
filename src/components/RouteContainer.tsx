import React from 'react';
import { Route } from 'react-router-dom';
import { Tab } from './Tab';

export const RouteContainer = ({ path }) => (<Route key={path} exact path={path}>
  {({ match }) => (<Tab to={path} active={match && match.isExact}>{name}</Tab>)}
</Route>);

export default RouteContainer;