import { RouteComponentProps } from '@reach/router';
import React from 'react';

const RouterPage: React.FC<{
  pageComponent: (routerProps: RouteComponentProps) => JSX.Element;
} & RouteComponentProps> = ({ pageComponent, ...routerProps }) => {
  return <>{pageComponent(routerProps)}</>;
};

export default RouterPage;
