import { Link } from "react-router-dom"
import styled from "styled-components"
import { COLORS, WEIGHTS } from "../../lib/constants"

const ProductCard = ({ product }) => {
    return (
        <CardLink to={`product/${product._id}`}>
            <Wrapper>
                <ImageWrapper>
                    <Image src={product.image.src} alt={product.name} />
                </ImageWrapper>
                <Row>
                    <Name>{product.name}</Name>
                    <Price>{product.price + " DH"}</Price>
                </Row>
            </Wrapper>
        </CardLink>
    )
}

const CardLink = styled(Link)`
    text-decoration: none;
    color: inherit;
    border-radius: 8px;
`;
const Wrapper = styled.article`
    border-radius: 8px;
`;
const ImageWrapper = styled.div`
    margin-bottom: 10px;
    overflow: hidden;
`;
const Image = styled.img`
    display: block;
    border-radius: 8px 8px 0 0;
    width: 100%;
    will-change: transform;
    filter: brightness(80%);
    transition: transform 500ms ease-out, filter 450ms ease-out;
    transform-origin: 50% 75%;
    @media (prefers-reduced-motion: no-preference){
        ${CardLink}:hover & {
            transform: scale(1.1);
            filter: brightness(100%);
            transition: transform 250ms ease-in;
        }
    }
`;
const Row = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row-reverse;
    text-align: end;
`;
const Name = styled.h2`
    font-size: ${18 / 16}rem;
    font-weight: ${WEIGHTS.medium};
`;
const Price = styled.p`
    font-weight: ${WEIGHTS.medium};
    color: ${COLORS.primary};
`;

export default ProductCard