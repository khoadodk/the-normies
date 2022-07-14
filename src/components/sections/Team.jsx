import styled from 'styled-components';
import Title from '../Title';

import img1 from '../../assets/Nfts/bighead-1.svg';
import img2 from '../../assets/Nfts/bighead-2.svg';
import img3 from '../../assets/Nfts/bighead-3.svg';
import img4 from '../../assets/Nfts/bighead-4.svg';
import img5 from '../../assets/Nfts/bighead-5.svg';
import img6 from '../../assets/Nfts/bighead-6.svg';
import ConfettiComponent from '../ConfettiComponent';

const SectionWrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  position: relative;
  background-color: ${(props) => props.theme.body};
`;

const Container = styled.div`
  width: 75%;
  margin: 2rem auto;

  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
`;

const ItemWrapper = styled.div`
  width: calc(20rem - 4vw);
  padding: 1rem 0;
  color: ${(props) => props.theme.body};
  margin: 2rem 1rem;
  position: relative;

  border: 2px solid ${(props) => props.theme.text};
  border-radius: 20px;

  &:hover {
    img {
      transform: translateY(-2rem) scale(1.2);
    }
  }
`;

const ImgContainer = styled.div`
  background-color: ${(props) => props.theme.body};
  border-radius: 20px;
  cursor: pointer;

  img {
    width: 100%;
    height: auto;
    transition: all 0.3s ease;
  }
`;

const NameWrapper = styled.h2`
  font-size: ${(props) => props.theme.fontlg};
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  color: ${(props) => props.theme.text};
  margin-top: 1rem;
`;

const PositionWrapper = styled.h2`
  font-size: ${(props) => props.theme.fontmd};
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: capitalize;
  color: ${(props) => `rgba(${props.theme.textRgba},0.5)`};
`;

const MemberComponent = ({ img, name = '', position = '' }) => {
  return (
    <ItemWrapper>
      <ImgContainer>
        <img src={img} alt={name} />
      </ImgContainer>
      <NameWrapper>{name}</NameWrapper>
      <PositionWrapper>{position}</PositionWrapper>
    </ItemWrapper>
  );
};

const Team = () => {
  return (
    <SectionWrapper>
      <ConfettiComponent />
      <Title titleText="Team" />
      <Container>
        <MemberComponent img={img1} name="John" position="Founder" />
        <MemberComponent
          img={img2}
          name="Jamie"
          position="Co-founder"
        />
        <MemberComponent
          img={img3}
          name="Susan"
          position="Community manager"
        />
        <MemberComponent
          img={img4}
          name="Ken"
          position="Community manager"
        />
        <MemberComponent
          img={img5}
          name="Vysper"
          position="UX Designer"
        />
        <MemberComponent img={img6} name="Bertra" position="Dev" />
      </Container>
    </SectionWrapper>
  );
};

export default Team;
