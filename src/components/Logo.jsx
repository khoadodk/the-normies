import { Link } from 'react-router-dom';
import styled from 'styled-components';

const LogoTextWrapper = styled.h1`
  font-family: 'Arya', cursive;
  font-size: ${(props) => props.theme.fontxxxl};
  color: ${(props) => props.theme.text};
  transition: all 0.2s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

const Logo = () => {
  return (
    <LogoTextWrapper>
      <Link to="">K.</Link>
    </LogoTextWrapper>
  );
};

export default Logo;
