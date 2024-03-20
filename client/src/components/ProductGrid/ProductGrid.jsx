import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import ProductCard from "../ProductCard";
import styled from "styled-components";
import { COLORS, WEIGHTS } from "../../lib/constants";
import Button from "../Button";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const ProductGrid = () => {

    const [page, setPage] = useState(1);
    const { t, i18n } = useTranslation();
    const lang = i18n.language;


    const fetchProducts = async (page = 1) => {
        try {
            const query = `${import.meta.env.VITE_BACKEND_URI}/products/all_products?page=${page}`;
            const { data } = await axios.get(query);
            return data;
        } catch (error) {
            console.log(error);
        }
    }
    const { isLoading, isError, error, data, isPreviousData } = useQuery({
        queryKey: ['products', page],
        queryFn: () => fetchProducts(page),
        keepPreviousData: true
    })
    const products = data?.products?.slice(0, 6);
    if (isError) return <h1>{error?.message}</h1>
    return isLoading ? <h2>loading...</h2> : (
        <Wrapper>
            <Header style={{ "--direction": lang == "ar" && "row-reverse" }}>
                <Title>{t('products')}</Title>
                <More>{t('more')}</More>
            </Header>
            <Content>
                {products.map(product => <ProductCard key={product._id} product={product} />)}
            </Content>
            {/* <Paginator>
                {new Array(paginate).fill().map((_, index) => <Page key={index}
                    style={{ '--bg-clr': (index + 1) == page && COLORS.primary, "--color": (index + 1) == page ? COLORS.white : 'inherit' }}
                    onClick={() => setPage(index + 1)} >{index + 1}</Page>)}
            </Paginator> */}

        </Wrapper>
    )
}
const Wrapper = styled.div`
    padding: 40px 16px;
`;
const Header = styled.div`
    margin-block: 40px;
    display: flex;
    flex-direction: var(--direction, "row");
    gap: 20px;
    justify-content: space-between;
    align-items: center;
`;
const Title = styled.h3`
    text-transform: capitalize;
    font-size: ${20 / 16}rem;
    font-weight: ${WEIGHTS.medium};
    color: ${COLORS.black}
    `;
const More = styled(Link)`
    font-size: ${20 / 16}rem;
    font-weight: ${WEIGHTS.medium};
    transition: color 400ms ease-out;
    color: ${COLORS.primary};
    text-transform: capitalize;
`;

const Content = styled.section
    `
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(min(320px, 100%), 1fr));
    gap: 62px 32px;
`;
// const Paginator = styled.div`
//     padding: 29px;
//     margin-top: 50px;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     gap: 20px;
// `;

// const Page = styled(Button)`
//     font-weight: ${WEIGHTS.medium};
//     font-size: ${20 / 16}rem;
//     color: var(--color);
//     background-color: var(--bg-clr, ${COLORS.white});
//     width: 30px;
//     height: 30px;
//     border-radius: 8px;
//     border: 1px solid var(--bg-clr);
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     cursor: pointer;
//     will-change: transform;
//     transition: background-color 500ms ease-out;
//     &:hover {
//         background-color: ${COLORS.primary};
//         color: ${COLORS.white};
//         transition: transform 300ms ease-in;
//     }
// `;

export default ProductGrid