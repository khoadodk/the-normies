import styled, { ThemeProvider } from 'styled-components';
import Carousel from '../Carousel';
import Button from '../Button';
import { dark } from '../../styles/Themes';

const SectionWrapper = styled.section`
  min-height: 100vh;
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.text};
  color: ${(props) => props.theme.body};
`;

const ContainerWrapper = styled.div`
  width: 75%;
  margin: 0 auto;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const BoxWrapper = styled.div`
  width: 50%;
  height: 100%;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const TitleWrapper = styled.h2`
  @media (max-width: 768px) {
    font-size: ${(props) => props.theme.fontlg};
  }
  @media (max-width: 425px) {
    font-size: ${(props) => props.theme.fontmd};
  }
`;

const SubtitleWrapper = styled.p`
  margin-top: 1rem;
  @media (max-width: 425px) {
    font-size: ${(props) => props.theme.fontsm};
  }
`;

const ButtonWrapper = styled.div`
  align-self: flex-start;
  margin-top: 1rem;
  @media (max-width: 768px) {
    align-self: center;
  }
`;

const About = () => {
  return (
    <SectionWrapper id="about">
      <ContainerWrapper>
        <BoxWrapper>
          <Carousel />
        </BoxWrapper>
        <BoxWrapper>
          <TitleWrapper>
            The NORMIES is a private collection of NFTs—unique digital
            collectibles. The Normies are stored as ERC-721 tokens on
            the Ethereum blockchain and hosted on IPFS.
          </TitleWrapper>
          <SubtitleWrapper>
            With more than 1000+ hand drawn traits, each NFT is unique
            and comes with a membership to an exclusive group of
            successful investors. Join an ambitious ever-growing
            community with multiple benefits and utilities.
          </SubtitleWrapper>
          <ButtonWrapper>
            <ThemeProvider theme={dark}>
              <Button text="JOIN OUR DISCORD" link="#" />
            </ThemeProvider>
          </ButtonWrapper>
        </BoxWrapper>
      </ContainerWrapper>
    </SectionWrapper>
  );
};

export default About;
