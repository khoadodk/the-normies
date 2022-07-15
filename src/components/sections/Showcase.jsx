import { useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import img1 from '../../assets/Nfts/bighead-1.svg';
import img2 from '../../assets/Nfts/bighead-2.svg';
import img3 from '../../assets/Nfts/bighead-3.svg';
import img4 from '../../assets/Nfts/bighead-4.svg';
import img5 from '../../assets/Nfts/bighead-5.svg';
import img6 from '../../assets/Nfts/bighead-6.svg';
import img7 from '../../assets/Nfts/bighead-7.svg';
import img8 from '../../assets/Nfts/bighead-8.svg';
import img9 from '../../assets/Nfts/bighead-9.svg';
import img10 from '../../assets/Nfts/bighead-10.svg';
import ETH from '../../assets/Ethereum.svg';

const move = keyframes`
  0% {transform: translateX(100%)}
  100% {transform: translateX(-100%)}
`;

const SectionWrapper = styled.div`
  min-height: 100vh;
  width: 100vw;
  position: relative;
  background-color: ${(props) => props.theme.text};
  color: ${(props) => props.theme.body};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const RowWrapper = styled.div`
  white-space: nowrap;
  box-sizing: content-box;
  margin: 2rem 0;
  display: flex;
  animation: ${move} 20s linear infinite ${(props) => props.direction};
  @media (max-width: 768px) {
    animation-duration: 12s;
  }
`;

const ImgContainer = styled.div`
  width: 15rem;
  margin: 0 1.2rem;
  background-color: ${(props) => props.theme.body};

  border-radius: 20px;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 10rem;
  }

  img {
    width: 100%;
    height: auto;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.8rem 1rem;
  background-color: ${(props) => props.theme.text};
  color: ${(props) => props.theme.body};
  border: 2px solid ${(props) => props.theme.body};
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  span {
    color: ${(props) => `rgba(${props.theme.bodyRgba},0.5)`};
  }
`;

const PriceWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 0.7rem;
  img {
    width: 1.2rem;
    height: auto;
  }
`;

const NFTItem = ({ img, number = 0, price = 0, passRef }) => {
  let play = (e) =>
    (passRef.current.style.animationPlayState = 'running');

  let pause = (e) =>
    (passRef.current.style.animationPlayState = 'paused');

  return (
    <ImgContainer
      onMouseOver={(e) => pause(e)}
      onMouseLeave={(e) => play(e)}
    >
      <img src={img} alt="" />
      <ContentWrapper>
        <div>
          <span>Normie</span>
          <br />
          <h2>#{number}</h2>
        </div>
        <div>
          <span>Price</span>
          <PriceWrapper>
            <img src={ETH} alt="eth" />
            {price}
          </PriceWrapper>
        </div>
      </ContentWrapper>
    </ImgContainer>
  );
};

const Showcase = () => {
  const Row1Ref = useRef(null);
  const Row2Ref = useRef(null);

  return (
    <SectionWrapper id="showcase">
      <RowWrapper direction="none" ref={Row1Ref}>
        <NFTItem
          img={img1}
          number="1"
          price="0.1"
          passRef={Row1Ref}
        />
        <NFTItem
          img={img2}
          number="2"
          price="0.1"
          passRef={Row1Ref}
        />
        <NFTItem
          img={img3}
          number="3"
          price="0.1"
          passRef={Row1Ref}
        />
        <NFTItem
          img={img4}
          number="4"
          price="0.1"
          passRef={Row1Ref}
        />
        <NFTItem
          img={img5}
          number="5"
          price="0.1"
          passRef={Row1Ref}
        />
      </RowWrapper>
      <RowWrapper direction="reverse" ref={Row2Ref}>
        <NFTItem
          img={img6}
          number="6"
          price="0.1"
          passRef={Row2Ref}
        />
        <NFTItem
          img={img7}
          number="7"
          price="0.1"
          passRef={Row2Ref}
        />
        <NFTItem
          img={img8}
          number="8"
          price="0.1"
          passRef={Row2Ref}
        />
        <NFTItem
          img={img9}
          number="9"
          price="0.1"
          passRef={Row2Ref}
        />
        <NFTItem
          img={img10}
          number="10"
          price="0.1"
          passRef={Row2Ref}
        />
      </RowWrapper>
    </SectionWrapper>
  );
};

export default Showcase;
