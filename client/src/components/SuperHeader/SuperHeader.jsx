import styled from "styled-components"
import { COLORS, QUERIES, WEIGHTS } from "../../lib/constants";
import VisuallyHidden from "../VisuallyHidden";
import Icon from "../Icon";

const SuperHeader = () => {
    return (
        <Wrapper>
            <Text>
                اتصال بنا: 0628303994
            </Text>
            مرحبا بزبنائنا الكرام التوصيل بالمجان، و الدفع عند الاستلام، اسرع واطلب الآن
        </Wrapper>
    )
}


const Wrapper = styled.div`
    display: none;
    padding: 12px 32px;
    align-items: center;
    background-color: ${COLORS.gray[900]};
    color: ${COLORS.white};
    font-size: ${14 / 16}rem;
    @media ${QUERIES.laptopAndUp}{
        display: flex;
    }
`;

const Text = styled.p`
    margin-inline-end: auto;
`;
export default SuperHeader