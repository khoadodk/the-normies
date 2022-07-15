import styled from 'styled-components';

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
  @media (max-width: 768px) {
    font-size: ${(props) => props.theme.fontxl};
  }
`;

const Title = ({ titleText }) => {
  return <TitleWrapper>{titleText}</TitleWrapper>;
};

export default Title;
