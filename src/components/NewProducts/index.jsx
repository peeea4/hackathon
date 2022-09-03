import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getProductList } from "@/store/actions/product";

import { ProductItem } from "../ProductItem";
import { List, NewProductsWrapper, Title } from "./styled";

export const NewProducts = () => {
    const productList = useSelector((state) => state.productList.productList).slice(0, 6);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProductList());
    }, []);

    return (
        <NewProductsWrapper>
            <Title>Новое поступление</Title>
            <List>
                {productList.map((product) => (
                    <ProductItem key={product.id} product={product} />
                ))}
            </List>
        </NewProductsWrapper>
    );
};
