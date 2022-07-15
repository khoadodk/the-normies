import styled from 'styled-components';
import GIF from '../assets/HomeGIF.gif';

const VideoContainer = styled.div`
  width: 100%;

  img {
    width: 100%;
    height: auto;
  }
`;

const CoverVideo = () => {
  return (
    <VideoContainer>
      <img src={GIF} alt="gif" />
    </VideoContainer>
  );
};

export default CoverVideo;
