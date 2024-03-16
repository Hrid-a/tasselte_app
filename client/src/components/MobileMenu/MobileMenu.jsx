import styled, { keyframes } from 'styled-components';
import Button from '../Button';
import Icon from '../Icon';
import { COLORS, WEIGHTS } from '../../lib/constants';
import { NavLink } from 'react-router-dom';


const MobileMenu = ({ isOpen, onDismiss }) => {
    return isOpen ? (
        <Wrapper>
            <BackDrop onClick={onDismiss} />
            <MainWrapper>
                <Content>

                    <CloseButton>
                        <Icon icon={'dismiss-icon'} size={20} onClick={onDismiss} />
                    </CloseButton>
                    <Nav>
                        <Link to="/about-us"> من نحن  </Link>
                        <Link to="/oil?category=oil">زيت الزيتون </Link>
                        <Link to="/honey?category=honey">العسل الحر </Link>
                        <Link to="/"> الصفحة الرئيسية </Link>
                    </Nav>
                </Content>
            </MainWrapper>
        </Wrapper>
    ) : null;
}


const fadeIn = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

const slideIn = keyframes`
    from {
        transform: translateX(100%);
    }
    to {
        transform: translateX(0%);
    }
`;

const Wrapper = styled.div`
    /* position: relative; */
    top:0;
    left:0;
    min-height: 100vh;
    min-height: 100dvh;
`;
const BackDrop = styled.div`
    position: fixed;
    inset: 0;
    background-color: rgba(96, 100, 108, 0.80);
    animation: ${fadeIn} 500ms both ease-out;
`;
const MainWrapper = styled.section`
position: fixed;
    top: 0;
    right: 0;
    width: 300px;
    background-color: ${COLORS.white};
    @media (prefers-reduced-motion: no-preference){
        animation: ${slideIn} 500ms both cubic-bezier(0, 0.6, 0.32, 1.06);
        animation-delay: 250ms;
    }
    `;
const Content = styled.div`
padding: 32px;
min-height: 100vh;
min-height: 100dvh;
animation: ${fadeIn} 400ms ease-out both 400ms;

`;
const CloseButton = styled(Button)`
    background-color: transparent;
    border: 0;
    position: absolute;
    top: 16px;
    right: 26px;
    width: 16px;
    height: 16px;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  gap: 48px;
  margin: 0px 48px;
  height: 100vh;
  height: 100dvh;
  `;
const Link = styled(NavLink)`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.medium};
  &:focus {
    font-weight: ${WEIGHTS.bold};
  }

`;



export default MobileMenu