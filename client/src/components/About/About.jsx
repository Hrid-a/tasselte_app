import styled from "styled-components"
import MaxWidthWrapper from "../MaxWidthWrapper";
import logo from '../../assets/images/LOGO-TASSELTE.png'
import { QUERIES } from "../../lib/constants";


const About = () => {
    return (
        <Wrapper>
            <Title>من نحن</Title>
            <Content>
                <ImageWrapper>
                    <Image src={logo} alt="best honey ever with tasselte" />
                </ImageWrapper>
                <Description>
                    هدفنا توفير افضل واجود وافخر انواع العسل المغربي حر الطبيعي بأفضل الاسعار ثقتكم ورضاكم اولويتنا. عسل الدغموس، عسل سدر ، عسل الخروب، عسل الزعتر, عسل الكالبتوس, عسل البرتقال
                </Description>
            </Content>
        </Wrapper>
    )
}

const Wrapper = styled(MaxWidthWrapper)``;
const Title = styled.h1`
    font-size: ${30 / 16}rem;
    text-align: center;
`;
const Content = styled.article`
    display: flex;
    flex-direction: column;
    gap: 16px;
    justify-content: center;
    align-items: center;
    text-align: end;
    font-size: ${18 / 16}rem;
    margin-top: -50px;
    @media ${QUERIES.laptopAndUp}{
        flex-direction: row-reverse;
    }
`;
const ImageWrapper = styled.div``;
const Image = styled.img`
    display: block;
    width: 100%;
    object-fit: cover;
`;
const Description = styled.p`
    margin-top: -40px;
`;
export default About