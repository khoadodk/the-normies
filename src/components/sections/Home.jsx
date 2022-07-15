import styled from 'styled-components';
import CoverVideo from '../CoverVideo';
import TypeWriter from '../TypeWriter';

import ScrollToButton from '../ScrollToButton';

const SectionWrapper = styled.section`
  min-height: ${(props) => `calc(100vh - ${props.theme.navHeight})`};
  width: 100%;
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
`;

const Home = () => {
  return (
    <SectionWrapper id="home">
      <ContainerWrapper>
        <BoxWrapper>
          <TypeWriter />
        </BoxWrapper>
        <BoxWrapper>
          <CoverVideo />
        </BoxWrapper>
        <ScrollToButton arrowText="&#x2193;" ele="about" />
      </ContainerWrapper>
    </SectionWrapper>
  );
};

export default Home;
