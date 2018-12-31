import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

export const MaskedRouterLink = ({ active, ...props }) => <RouterLink to={""} {...props} />;