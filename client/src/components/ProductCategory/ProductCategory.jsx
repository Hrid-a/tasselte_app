import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useSearchParams } from "react-router-dom";
import ProductCard from '../ProductCard';
import styled from "styled-components";

const ProductCategory = () => {
    const [s] = useSearchParams()
    const category = s.get('category');
    const fetchProducts = async () => {
        try {
            const query = `http://localhost:3000/api/v1/products/all_products?category=${category}`
            const { data } = await axios.get(query);
            return data;
        } catch (error) {
            console.log(error);
        }
    }
    const { isLoading, isError, error, data } = useQuery({
        queryKey: ['products', category],
        queryFn: () => fetchProducts(),
    })

    if (isError) return <p>{error.message}</p>
    return isLoading ? <p>loading...</p> : (
        <Wrapper>
            {data.products.map(product => <ProductCard key={product._id} product={product} />)}
        </Wrapper>
    )
}

const Wrapper = styled.section`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(min(320px, 100%), 1fr));
    gap: 62px 32px;
`;
export default ProductCategory;