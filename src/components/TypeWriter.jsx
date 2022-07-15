import styled from 'styled-components';
import Typewriter from 'typewriter-effect';

import Button from './Button';

const Container = styled.div`
  width: 100%;
`;

const TitleWrapper = styled.h2`
  font-size: ${(props) => props.theme.fontxxl};
  text-transform: capitalize;

  span {
    text-transform: uppercase;
    font-family: 'Arya';
    background-image: linear-gradient(
      to left,
      violet,
      indigo,
      blue,
      green,
      yellow,
      orange,
      red
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  @media (max-width: 1024px) {
    font-size: ${(props) => props.theme.fontxl};
  }
  @media (max-width: 768px) {
    font-size: ${(props) => props.theme.fontl};
  }
  @media (max-width: 320px) {
    font-size: ${(props) => props.theme.fontmd};
  }
`;

const SubtitleWrapper = styled.h2`
  font-size: ${(props) => props.theme.fontlg};
  text-transform: capitalize;
  color: ${(props) => `rgba(${props.theme.text}, 0.6)`};
  font-weight: 600;
  margin: 1.5rem 0;
  align-self: flex-start;
  @media (max-width: 320px) {
    font-size: ${(props) => props.theme.fontmd};
    margin: 1rem 0;
  }
`;

const ButtonContainer = styled.div`
  align-self: flex-start;
`;

const TypeWriter = () => {
  return (
    <Container>
      <TitleWrapper>
        Discover a new era of regular
        <Typewriter
          options={{ autoStart: true, loop: true }}
          onInit={(typewriter) => {
            typewriter
              .typeString('<span class="text-1">NFT.</span>')
              .pauseFor(2000)
              .deleteAll()
              .typeString(
                '<span class="text-2">1000 Unique traits.</span>'
              )
              .pauseFor(2000)
              .deleteAll()
              .typeString(
                '<span class="text-3">One of A Kind.</span>'
              )
              .pauseFor(2000)
              .deleteAll()
              .start();
          }}
        />
      </TitleWrapper>
      <SubtitleWrapper>The next Bored Ape?! Join us.</SubtitleWrapper>
      <ButtonContainer>
        <Button text="Explore More" link="#about" />
      </ButtonContainer>
    </Container>
  );
};

export default TypeWriter;
