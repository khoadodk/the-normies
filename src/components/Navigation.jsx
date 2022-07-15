import { useState } from 'react';
import styled from 'styled-components';
import Button from './Button';
import Logo from './Logo';

const SectionWrapper = styled.section`
  width: 100%;
  background-color: ${(props) => props.theme.body};
  @media (max-width: 768px) {
    .mobile {
      display: none;
    }
  }
`;

const NavbarWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 85%;
  height: ${(props) => props.theme.navHeight};
  margin: 0 auto;
`;

const MenuWrapper = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  @media (max-width: 1024px) {
    position: fixed;
    top: ${(props) => props.theme.navHeight};
    left: 0;
    right: 0;
    bottom: 0;
    width: 100vw;
    height: ${(props) => `calc(100vh - ${props.theme.navHeight})`};
    z-index: 50;
    background-color: ${(props) =>
      `rgba(${props.theme.bodyRgba},0.5)`};
    backdrop-filter: blur(2px);
    /* Hide navbar on click  */
    transform: ${(props) =>
      props.click ? 'translateY(0)' : 'translateY(-200%)'};
    transition: all 0.3s ease;

    flex-direction: column;
    justify-content: center;
  }
`;

const MenuItemWrapper = styled.li`
  margin: 0 1rem;
  color: ${(props) => props.theme.text};
  cursor: pointer;
  &::after {
    content: '';
    display: block;
    width: 0;
    height: 2px;
    background: ${(props) => props.theme.text};
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }

  @media (max-width: 1024px) {
    margin: 1rem 0;
  }
`;

const HamburgerMenu = styled.div`
  width: ${(props) => (props.click ? '2rem' : '1.5rem')};
  height: 2px;
  background: ${(props) => props.theme.text};
  position: absolute;
  top: 2rem;
  left: 50%;
  transform: translateX(-50%);
  cursor: pointer;
  transition: all 0.3s ease;
  display: none;
  @media (max-width: 1024px) {
    display: flex;
  }

  transform: ${(props) =>
    props.click
      ? 'translateX(-50%) rotate(90deg)'
      : 'translateX(-50%) rotate(0)'};

  &::after,
  &::before {
    content: '';
    right: ${(props) => (props.click ? '-2px' : '0')};
    width: ${(props) => (props.click ? '1rem' : '1.5rem')};
    height: 2px;
    background: ${(props) => props.theme.text};
    position: absolute;
  }
  &::after {
    top: ${(props) => (props.click ? '.3rem' : '.5rem')};
    transform: ${(props) =>
      props.click ? 'rotate(-40deg)' : 'rotate(0)'};
  }
  &::before {
    bottom: ${(props) => (props.click ? '.3rem' : '.5rem')};
    transform: ${(props) =>
      props.click ? 'rotate(40deg)' : 'rotate(0)'};
  }
`;

const Navigation = () => {
  const [click, setClick] = useState(false);

  const scrollTo = (id) => {
    let element = document.getElementById(id);

    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });

    setClick(!click);
  };

  return (
    <SectionWrapper>
      <NavbarWrapper>
        <Logo />
        <HamburgerMenu
          click={click}
          onClick={() => setClick(!click)}
        />
        <MenuWrapper click={click}>
          <MenuItemWrapper onClick={() => scrollTo('home')}>
            Home
          </MenuItemWrapper>
          <MenuItemWrapper onClick={() => scrollTo('about')}>
            About
          </MenuItemWrapper>
          <MenuItemWrapper onClick={() => scrollTo('roadmap')}>
            Roadmap
          </MenuItemWrapper>
          <MenuItemWrapper onClick={() => scrollTo('showcase')}>
            Showcase
          </MenuItemWrapper>
          <MenuItemWrapper onClick={() => scrollTo('team')}>
            Team
          </MenuItemWrapper>
          <MenuItemWrapper onClick={() => scrollTo('faq')}>
            Faq
          </MenuItemWrapper>
        </MenuWrapper>
        <div className="mobile">
          <Button text="Connext Wallet" link="#" />
        </div>
      </NavbarWrapper>
    </SectionWrapper>
  );
};

export default Navigation;
