import styled from 'styled-components';
import Button from './Button';
import Logo from './Logo';

const SectionWrapper = styled.section`
  width: 100%;
  background-color: ${(props) => props.theme.body};
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
`;

const Navigation = () => {
  const scrollTo = (id) => {
    let element = document.getElementById(id);

    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
  };
  return (
    <SectionWrapper>
      <NavbarWrapper>
        <Logo />
        <MenuWrapper>
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
        <Button text="Connext Wallet" link="#" />
      </NavbarWrapper>
    </SectionWrapper>
  );
};

export default Navigation;
