import styled, { keyframes } from 'styled-components';
import CoverVideo from '../CoverVideo';
import TypeWriter from '../TypeWriter';
import RoundedTextBlack from '../../assets/Rounded-Text-Black.png';

const rotate = keyframes`
  100% {
    transform: rotate(1turn);
  }
`;

const SectionWrapper = styled.section`
  min-height: ${(props) => `calc(100vh - ${props.theme.navHeight})`};
  width: 100vw;
  position: relative;
  background-color: ${(props) => props.theme.body};
`;

const ContainerWrapper = styled.div`
  width: 75%;
  min-height: 80vh;
  margin: 0 auto;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const BoxWrapper = styled.div`
  width: 50%;
  height: 100%;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const RoundWrapper = styled.div`
  position: absolute;
  bottom: 2rem;
  left: 10%;
  width: 6rem;
  height: 6rem;
  border: 1px solid ${(props) => props.theme.text};
  border-radius: 50%;
  img {
    width: 100%;
    height: auto;
    animation: ${rotate} 6s linear infinite reverse;
  }
`;

const ArrowWrapper = styled.span`
  width: 3rem;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 1.5rem;
  border: 1px solid ${(props) => props.theme.text};
  border-radius: 50%;
  color: ${(props) => props.theme.body};
  background-color: ${(props) => props.theme.text};
`;

const Home = () => {
  return (
    <SectionWrapper>
      <ContainerWrapper>
        <BoxWrapper>
          <TypeWriter />
        </BoxWrapper>
        <BoxWrapper>
          <CoverVideo />
        </BoxWrapper>
        <RoundWrapper>
          <ArrowWrapper>&#x2193;</ArrowWrapper>
          <img src={RoundedTextBlack} alt="roundedtextblack" />
        </RoundWrapper>
      </ContainerWrapper>
    </SectionWrapper>
  );
};

export default Home;
