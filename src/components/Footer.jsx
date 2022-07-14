import React from 'react';
import styled from 'styled-components';
import Banner from './Banner';
import Logo from './Logo';
import FaceBook from '../assets/icons8-facebook.svg';
import Instagram from '../assets/icons8-instagram.svg';
import Linkedin from '../assets/icons8-linkedin.svg';
import Twitter from '../assets/icons8-twitter.svg';
import ScrollToButton from './ScrollToButton';

const SectionWrapper = styled.section`
  min-height: 80vh;
  height: 80vh;
  width: 100%;
  position: relative;
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.body};
`;

const Container = styled.div`
  width: 75%;
  margin: 2rem auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  border-bottom: 1px solid ${(props) => props.theme.text};
`;

const LeftWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem auto;

  & > * {
    padding-right: 0.5rem;
    transition: all 0.2s ease;
    &:hover {
      transform: scale(1.2);
    }
  }
`;

const RightWrapper = styled.ul`
  list-style: none;
  width: 50%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-gap: 1rem;
`;

const ListWrapper = styled.li`
  width: fit-content;
  cursor: pointer;
  &::after {
    content: '';
    display: block;
    width: 0;
    height: 2px;
    background: ${(props) => props.theme.text};
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }
`;

const BottomWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Footer = () => {
  return (
    <SectionWrapper>
      <Banner />
      <Container>
        <LeftWrapper>
          <Logo />
          <IconWrapper>
            <a
              href="http://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={FaceBook} alt="" />
            </a>
            <a
              href="http://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Twitter} alt="" />
            </a>
            <a
              href="http://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Linkedin} alt="" />
            </a>{' '}
            <a
              href="http://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Instagram} alt="" />
            </a>
          </IconWrapper>
        </LeftWrapper>
        <RightWrapper>
          <ListWrapper>Home</ListWrapper>
          <ListWrapper>About</ListWrapper>
          <ListWrapper>Roadmap</ListWrapper>
          <ListWrapper>Showcase</ListWrapper>
          <ListWrapper>Team</ListWrapper>
          <ListWrapper>FAQs</ListWrapper>
        </RightWrapper>
      </Container>

      <BottomWrapper>
        <span>
          &copy; {new Date().getFullYear()} Normies Club. All rights
          reserved.
        </span>
        <span>
          Made with &#10084; by{' '}
          <a href="https://khoado.dev">Khoa Do</a>
        </span>
      </BottomWrapper>

      <ButtonWrapper>
        <ScrollToButton arrowText="&#x2191;" ele="home" />
      </ButtonWrapper>
    </SectionWrapper>
  );
};

export default Footer;
