import { useState } from 'react';
import styled from 'styled-components';
import { Minus } from '../Icons/Minus';
import { Plus } from '../Icons/Plus';

const Container = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  padding: 1rem 0.5rem;
  margin: 3rem 0;
  border-bottom: 1px solid ${(props) => props.theme.carouselColor};
`;

const TitleWrapper = styled.div`
  font-size: ${(props) => props.theme.fontsm};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const RevealWrapper = styled.div`
  display: ${(props) => (props.clicked ? 'block' : 'none')};
  margin-top: 1rem;
  color: ${(props) => `rgba(${props.theme.textRgba},0.6)`};
  font-size: ${(props) => props.theme.fontsm};
  font-weight: 300;
  line-height: 1.5rem;
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Indicator = styled.span`
  font-size: ${(props) => props.theme.fontxxl};
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    width: 1rem;
    height: auto;
    fill: ${(props) => `rgba(${props.theme.textRgba},0.6)`};
  }
`;

const Accordion = ({ title, children }) => {
  const [collapse, setCollapse] = useState(false);

  return (
    <Container>
      <TitleWrapper onClick={() => setCollapse(!collapse)}>
        <TitleContainer>
          <span>{title}</span>
        </TitleContainer>
        {collapse ? (
          <Indicator>
            <Minus />
          </Indicator>
        ) : (
          <Indicator>
            <Plus />
          </Indicator>
        )}
      </TitleWrapper>
      <RevealWrapper clicked={collapse}>{children}</RevealWrapper>
    </Container>
  );
};

export default Accordion;
