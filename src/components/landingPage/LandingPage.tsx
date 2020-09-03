import React from 'react';
import { Link } from '@reach/router';
import styled from '../../styles/customStyled';

const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  flex-direction: column;
  padding: 40px;
  background-color: ${({ theme }) => theme.colors.primary.main};
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const MainTitleWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Title = styled.h1`
  font-weight: bold;
  /* color: ${({ theme }) => theme.colors.primary.main}; */
  color: #fff;
  font-size: 2em;
  text-align: center;
`;

const MainTitle = styled(Title)`
  font-weight: bold;
  font-size: 2em;
  border-bottom: 1px solid ${({ theme }) => theme.colors.primary.gray};
  padding-bottom: 10px;

  @media (max-width: 810px) {
    font-size: 1.8em;
  }

  @media (max-width: 730px) {
    font-size: 1.5em;
  }
`;

const Nav = styled.nav`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const StyledLink = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: #fff;
  font-size: 18px;
  font-weight: 900;
  text-transform: uppercase;
  background: ${({ theme }) => theme.colors.primary.gray};
  margin-top: 1em;
  padding: 1em;
  width: 100%;
  max-width: 500px;
  height: 150px;
  text-align: center;
  border-radius: 5px;
  &:hover {
    /* background-color: ${({ theme }) => theme.colors.white.base};
    color: ${({ theme }) => theme.colors.primary.main}; */
    box-shadow: 0px 0px 12px ${({ theme }) => theme.colors.black.base};
  }
`;

const LandingPage = () => {
  return (
    <Container>
      <MainTitleWrapper>
        <MainTitle>This is your World</MainTitle>
      </MainTitleWrapper>
      <Content>
        <Title>Do Something</Title>
        <Nav>
          <StyledLink to="/cleanup">Beach Clean up</StyledLink>
          <StyledLink to="/profile">Your Profile</StyledLink>
        </Nav>
      </Content>
    </Container>
  );
};

export default LandingPage;
