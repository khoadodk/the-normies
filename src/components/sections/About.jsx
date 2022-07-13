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
`;

const BoxWrapper = styled.div`
  width: 50%;
  height: 100%;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TitleWrapper = styled.h2``;

const SubtitleWrapper = styled.p`
  margin-top: 1rem;
`;

const ButtonWrapper = styled.div`
  align-self: flex-start;
  margin-top: 1rem;
`;

const About = () => {
  return (
    <SectionWrapper>
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
