import { IMAGES } from "@/constants/images";

import { Buy, Picture, Price, ProductItemWrapper, Title } from "./styled";

export const ProductItem = ({ product }) => {
    console.log(product);
    return (
        <ProductItemWrapper>
            <Picture src={IMAGES[product.namePicture]} />
            <Title>{product.title}</Title>
            <Price>{product.price} BYN</Price>
            <Buy>Купить</Buy>
        </ProductItemWrapper>
    );
};
