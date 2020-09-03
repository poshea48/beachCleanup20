import React from 'react';
// import { Link } from 'gatsby';
import SEO from '../components/layout/SEO';
import { Router } from '@reach/router';
import LandingPage from '../components/landingPage/LandingPage';
import RouterPage from '../components/RouterPage';

const IndexPage: React.FC = () => (
  <>
    <SEO title="Your World Landing Page" />
    <Router>
      <RouterPage path="/" default pageComponent={() => <LandingPage />} />
    </Router>
  </>
);

export default IndexPage;
