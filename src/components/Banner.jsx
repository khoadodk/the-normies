import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import Button from './Button';
import { dark } from '../styles/Themes';
import img1 from '../assets/Nfts/bighead-1.svg';
import img2 from '../assets/Nfts/bighead-2.svg';
import img3 from '../assets/Nfts/bighead-3.svg';
import img4 from '../assets/Nfts/bighead-4.svg';
import img5 from '../assets/Nfts/bighead-5.svg';
import img6 from '../assets/Nfts/bighead-6.svg';

const SectionWrapper = styled.section`
  width: 100vw;
  height: 25rem;
  position: relative;
  border-top: 2px solid ${(props) => props.theme.text};
  border-bottom: 2px solid ${(props) => props.theme.text};

  background-color: ${(props) => `rgba(${props.theme.textRgba},0.8)`};

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;

  overflow: hidden;
`;

const ImgContainer = styled.div`
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.2;

  img {
    width: 15rem;
    height: auto;
  }
`;

const TitleWrapper = styled.h1`
  font-size: ${(props) => props.theme.fontxxxl};
  color: ${(props) => props.theme.body};
  padding: 1rem 2rem;
  z-index: 10;
  width: 50%;
  @media (max-width: 768px) {
    font-size: ${(props) => props.theme.fontxl};
  }
`;

const Banner = () => {
  return (
    <SectionWrapper>
      <ImgContainer>
        <img src={img1} alt="" />
        <img src={img2} alt="" />
        <img src={img3} alt="" />
        <img src={img4} alt="" />
        <img src={img5} alt="" />
        <img src={img6} alt="" />
      </ImgContainer>
      <TitleWrapper>
        Be one of <br /> The Normies
      </TitleWrapper>
      <ThemeProvider theme={dark}>
        <Button text="JOIN OUR DISCORD" link="#" />
      </ThemeProvider>
    </SectionWrapper>
  );
};

export default Banner;
