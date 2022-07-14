import { useLayoutEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import ScrollTrigger from 'gsap/ScrollTrigger';
import gsap from 'gsap';

import Vector from '../Icons/Vector';

const bounce = keyframes`
from {
    transform: translateX(-50%) scale(.5);
}
to {
    transform: translateX(-50%) scale(1);
}
`;

const VectorWrapper = styled.div`
  position: absolute;
  top: 1rem;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  height: 100%;
  overflow: hidden;
  svg {
    width: 100%;
    height: 100%;
  }
`;

const Ball = styled.div`
  position: absolute;
  top: 1rem;
  left: 50%;
  transform: translateX(-50%);
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background: linear-gradient(
    124deg,
    #ff2400,
    #e81d1d,
    #e8b71d,
    #e3e81d,
    #1de840,
    #1ddde8,
    #2b1de8,
    #dd00f3,
    #dd00f3
  );
  animation: ${bounce} 0.5s linear infinite alternate;
`;

const DrawSVG = () => {
  const ref = useRef(null);
  const ballRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useLayoutEffect(() => {
    let element = ref.current;
    let svg = document.getElementsByClassName('svg-path')[0];

    const length = svg.getTotalLength();

    // Start positioning of svg drawing
    svg.style.strokeDasharray = length;

    // Hide svg before scrolling start
    svg.style.strokeDashoffset = length;

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: element,
        start: 'top center',
        end: 'bottom bottom',
        onUpdate: (self) => {
          const draw = length * self.progress;
          // Reverse the drawing when scroll goes up
          svg.style.strokeDashoffset = length - draw;
        },
        onToggle: (self) => {
          if (self.isActive) {
            ballRef.current.style.display = 'none';
          } else {
            ballRef.current.style.display = 'inline-block';
          }
        },
      },
    });

    return () => {
      ScrollTrigger.kill();
    };
  }, []);

  return (
    <>
      <Ball ref={ballRef} />
      <VectorWrapper ref={ref}>
        <Vector />
      </VectorWrapper>
    </>
  );
};

export default DrawSVG;
