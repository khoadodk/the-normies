import styled from 'styled-components';
import DrawSVG from '../DrawSVG';

const SectionWrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  position: relative;
  background-color: ${(props) => props.theme.body};
`;

const TitleWrapper = styled.h1`
  font-size: ${(props) => props.theme.fontxxl};
  color: ${(props) => props.theme.text};
  display: flex;
  text-transform: capitalize;
  justify-content: center;
  align-items: center;
  margin: 1rem auto;
  border-bottom: 2px solid ${(props) => props.theme.text};
  width: fit-content;
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
    <SectionWrapper>
      <TitleWrapper>Roadmap</TitleWrapper>
      <ContainerWrapper>
        <SVGWrapper>
          <DrawSVG />
        </SVGWrapper>
        <ItemsWrapper>
          <ItemWrapper>&nbsp;</ItemWrapper>
          <RoadmapItem
            title="Pre-Launch"
            text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum, voluptatem."
          />
          <RoadmapItem
            title="Minting"
            text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum, voluptatem."
          />
          <RoadmapItem
            title="Staking"
            text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum, voluptatem."
          />
          <RoadmapItem
            title="Merch"
            text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum, voluptatem."
          />
          <RoadmapItem
            title="Roadmap 2.0"
            text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum, voluptatem."
          />
        </ItemsWrapper>
      </ContainerWrapper>
    </SectionWrapper>
  );
};

export default Roadmap;
