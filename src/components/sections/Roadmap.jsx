import styled from 'styled-components';
import DrawSVG from '../DrawSVG';
import Title from '../Title';

const SectionWrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  position: relative;
  background-color: ${(props) => props.theme.body};
`;

const ContainerWrapper = styled.div`
  width: 75%;
  min-height: 200vh;
  margin: 0 auto;
  background-color: ${(props) => props.theme.body};
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const SVGWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ItemsWrapper = styled.ul`
  list-style: none;
  width: 100%;
  height: 200vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    width: 60%;
  }
  & > *:nth-of-type(2n + 1) {
    justify-content: start;
    div {
      border-radius: 50px 0 50px 0;
      text-align: right;
    }
    p {
      border-radius: 50px 0 50px 0;
    }
  }
  & > *:nth-of-type(2n) {
    justify-content: end;
    div {
      border-radius: 0 50px 0 50px;
      text-align: left;
    }
    p {
      border-radius: 0 50px 0 50px;
    }
  }
`;

const ItemWrapper = styled.li`
  width: 100%;
  height: 200vh;
  display: flex;
`;

const ItemContainer = styled.div`
  width: 40%;
  height: fit-content;
  padding: 1rem;
  border: 3px solid ${(props) => props.theme.text};
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const BoxWrapper = styled.p`
  height: fit-content;
  background-color: ${(props) => props.theme.carouselColor};
  color: ${(props) => props.theme.text};
  padding: 1rem;
  position: relative;
  border: 1px solid ${(props) => props.theme.text};
`;

const SubtitleWrapper = styled.span`
  display: block;
  font-size: ${(props) => props.theme.fontxl};
  text-transform: capitalize;
  color: ${(props) => props.theme.text};
  @media (max-width: 768px) {
    font-size: ${(props) => props.theme.fontlg};
  }
  @media (max-width: 425px) {
    font-size: ${(props) => props.theme.fontmd};
  }
`;

const TextWrapper = styled.span`
  display: block;
  font-size: ${(props) => props.theme.fontsm};
  text-transform: capitalize;
  color: ${(props) => props.theme.text};
  font-weight: 400;
  margin: 0.5rem 0;
`;

const RoadmapItem = ({ title, text }) => {
  return (
    <ItemWrapper>
      <ItemContainer>
        <BoxWrapper>
          <SubtitleWrapper>{title}</SubtitleWrapper>
          <TextWrapper>{text}</TextWrapper>
        </BoxWrapper>
      </ItemContainer>
    </ItemWrapper>
  );
};

const Roadmap = () => {
  return (
    <SectionWrapper id="roadmap">
      <Title titleText="Roadmap" />
      <ContainerWrapper>
        <SVGWrapper>
          <DrawSVG />
        </SVGWrapper>
        <ItemsWrapper>
          <RoadmapItem
            title="1.Pre-Launch"
            text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum, voluptatem."
          />
          <RoadmapItem
            title="2.Minting"
            text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum, voluptatem."
          />
          <RoadmapItem
            title="3.Staking"
            text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum, voluptatem."
          />
          <RoadmapItem
            title="4.Merch"
            text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum, voluptatem."
          />
          <RoadmapItem
            title="5.Roadmap 2.0"
            text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum, voluptatem."
          />
        </ItemsWrapper>
      </ContainerWrapper>
    </SectionWrapper>
  );
};

export default Roadmap;
