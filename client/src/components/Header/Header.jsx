import { useState } from 'react';
import styled from 'styled-components';

import { COLORS, QUERIES, WEIGHTS } from '../../lib/constants';
import Logo from '../Logo';
import SuperHeader from '../SuperHeader';
import MobileMenu from '../MobileMenu';
import Button from '../Button';
import Icon from '../Icon';
import NavigationLink from '../NavigationLink';

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <Side>
          <Logo />
        </Side>
        <Nav>
          <ul>
            <li>
              <NavigationLink to="/about-us"> من نحن  </NavigationLink>
            </li>
            <li>
              <NavigationLink to="/oil?category=oil"> زيت الزيتون</NavigationLink>
            </li>
            <li>
              <NavigationLink to="/honey?category=honey">العسل الحر </NavigationLink>
            </li>
            <li>
              <NavigationLink to="/">  الصفحة الرئيسية  </NavigationLink>
            </li>
          </ul>
        </Nav>
        <Side />
        <MenuButton>
          <Icon icon="menu" strokeWidth={1} size={30} onClick={() => setOpen(true)} />
        </MenuButton>
      </MainHeader>
      <MobileMenu isOpen={open} onDismiss={() => setOpen(false)} />
    </header>
  );
};

const MainHeader = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  /* justify-content: space */
  padding: 18px 32px;
  height: 72px;
  border-bottom: 1px solid ${COLORS.gray[300]};
`;

const Nav = styled.nav`
  display: none;
  margin: 0px 48px;
  &  ul {
    display: flex;
    gap: 48px;
    list-style: none;
    font-size: ${20 / 16}rem;
    font-weight: ${WEIGHTS.medium};
  }
  @media ${QUERIES.laptopAndUp}{
    display: block;
  }
`;

const Side = styled.div`
  @media ${QUERIES.laptopAndUp}{

    flex: 1;
  }
  
`;

const NavLink = styled.a`
  
`;
const MenuButton = styled(Button)`
  /* display: block; */
  margin-inline-end: auto;
  background-color: transparent;
  border: 0;

  @media ${QUERIES.laptopAndUp}{
    display: none;
  }
`;

export default Header;