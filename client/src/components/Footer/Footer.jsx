import styled from 'styled-components';
import Logo from '../Logo';
import { useTranslation } from 'react-i18next';
import { Facebook } from 'react-feather';
import Icon from '../Icon';
import MaxWidthWrapper from '../MaxWidthWrapper';

const Footer = () => {
    const { t, i18n } = useTranslation();
    return (
        <Wrapper>
            <Content>
                <Logo />
                <Desc>
                    {t('heroDesc')}
                </Desc>
                <Icons>
                    <Icon icon="facebook" color="blue" />
                    <Icon icon="instagram" color="red" />
                </Icons>
            </Content>
        </Wrapper>
    )
}

const Wrapper = styled.footer`
    background: linear-gradient(90deg, #ffa739, #ffae41, #ffb549, #ffbc51, #ffc359, #ffca62, #ffd16b, #ffd774);
    padding: 16px;
`;
const Content = styled(MaxWidthWrapper)`
    display: flex;
    gap: 20px;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
`;
const Desc = styled.p``;
const Icons = styled.div`
    display: flex;
    gap: 20px;
    justify-content: center;
    align-items: center;
`;

export default Footer