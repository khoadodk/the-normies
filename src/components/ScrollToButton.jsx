import styled, { keyframes } from 'styled-components';
import RoundedTextBlack from '../assets/Rounded-Text-Black.png';

const rotate = keyframes`
  100% {
    transform: rotate(1turn);
  }
`;

const RoundWrapper = styled.div`
  position: absolute;
  bottom: 2rem;
  margin: 0 auto;
  width: 6rem;
  height: 6rem;
  border: 1px solid ${(props) => props.theme.text};
  border-radius: 50%;
  cursor: pointer;
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

const ScrollToButton = ({ arrowText, ele }) => {
  const scrollTo = (ele) => {
    let element = document.getElementById(ele);

    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
  };

  return (
    <RoundWrapper onClick={() => scrollTo(ele)}>
      <ArrowWrapper>{arrowText}</ArrowWrapper>
      <img src={RoundedTextBlack} alt="roundedtextblack" />
    </RoundWrapper>
  );
};

export default ScrollToButton;
