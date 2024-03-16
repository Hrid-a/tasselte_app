import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { COLORS, QUERIES, WEIGHTS } from "../../lib/constants";
import MaxWidthWrapper from '../MaxWidthWrapper';

const ProductPage = () => {
    const { id } = useParams()
    const fetchProducts = async () => {
        try {
            const query = `http://localhost:3000/api/v1/products/${id}`
            const { data } = await axios.get(query);
            return data;
        } catch (error) {
            console.log(error);
        }
    }
    const { isLoading, isError, error, data } = useQuery({
        queryKey: ['product', id],
        queryFn: () => fetchProducts(),
    })

    if (isError) return <p>{error.message}</p>
    return isLoading ? <p>loading...</p> : (
        <Wrapper>
            <ImageWrapper>
                <Image src={data.product.image.src} alt={data.product.name} />
            </ImageWrapper>
            <Content>
                <Row>
                    <Name>{data.product.name}</Name>
                    <Price>{data.product.price + "DH"} </Price>
                </Row>
                <Description>{data.product.description}</Description>
            </Content>
        </Wrapper>
    )
}

const Wrapper = styled(MaxWidthWrapper)`
    /* border-radius: 8px; */
    padding: 40px 16px;
    display: flex;
    gap: 32px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media ${QUERIES.laptopAndUp} {
        flex-direction: row-reverse;
    }
`;
const ImageWrapper = styled.div`
    margin-bottom: 10px;
    overflow: hidden;
`;
const Image = styled.img`
    display: block;
    border-radius: 8px 8px 0 0;
    width: 100%;
    
`;

const Content = styled.article`
flex: 1;
padding-top: 30px;
@media ${QUERIES.laptopAndUp}{
    align-self: self-start;
}
`;
const Row = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row-reverse;
    margin-bottom: 45px;
`;
const Name = styled.h2`
    font-size: ${25 / 16}rem;
    font-weight: ${WEIGHTS.medium};
`;
const Price = styled.p`
    font-weight: ${WEIGHTS.medium};
    color: ${COLORS.primary};
`;
const Description = styled.p`
    text-align: end;
    font-size: ${20 / 16}rem;
`;

export default ProductPage