import { useLayoutEffect, useRef } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

import Title from '../Title';
import { dark } from '../../styles/Themes';
import Accordion from '../Accordion';

const SectionWrapper = styled.section`
  min-height: 100vh;
  width: 100%;
  position: relative;
  color: ${(props) => props.theme.body};
  background-color: ${(props) => props.theme.text};

  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const ContainerWrapper = styled.div`
  width: 75%;
  margin: 2rem auto;

  display: grid;
  grid-template-columns: 1fr 1fr;
  align-content: center;
  gap: 15%;
`;

const Faq = () => {
  const ref = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useLayoutEffect(() => {
    let element = ref.current;
    ScrollTrigger.create({
      trigger: element,
      start: 'top top',
      end: 'bottom top',
      pin: true,
      pinSpacing: false,
      scrub: true,
    });

    return () => {
      ScrollTrigger.kill();
    };
  }, []);

  return (
    <SectionWrapper ref={ref} id="faq">
      <ThemeProvider theme={dark}>
        <Title titleText="FAQs" />
        <ContainerWrapper>
          <Accordion title="WHAT ARE THE NORMIES?">
            We aim to be the BAYC killer.
          </Accordion>
          <Accordion title="WHEN IS STAKING LIVE">
            4 weeks after fully minted
          </Accordion>
          <Accordion title="WHERE CAN I VIEW MY NFTS?">
            Once minted or bought simply connect to your OpenSea
            account to view your NFTs.
          </Accordion>
          <Accordion title="WHAT IS THE METAVERSE?">
            A metaverse is a network of 3D virtual worlds focused on
            social connection. In futurism and science fiction, it is
            often described as a hypothetical iteration of the
            Internet as a single, universal virtual world that is
            facilitated by the use of virtual and augmented reality
            headsets.
          </Accordion>
          <Accordion title="WHY DO WE NEED ROYALTIES?">
            The amount of royalties was fixed at 5% to finance the
            Normies Club's projects. We have the ambition to organize
            multiple events around the world in order to strengthen
            the community and build a network of entrepreneurs and
            investors with the same mindset and common interests.
          </Accordion>
          <Accordion title="HOW CAN I USE MY NFT?">
            You will be able to use your NFT as an avatar in the
            Metaverse and our future video game. Holding also means
            that you are part of an exclusive network of investors and
            entrepreneurs.
          </Accordion>
        </ContainerWrapper>
      </ThemeProvider>
    </SectionWrapper>
  );
};

export default Faq;
