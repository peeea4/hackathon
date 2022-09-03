import chicken from "../../assets/chicken.png";
// import chicken from "../../assets/chicken.png";
// import chicken from "../../assets/chicken.png";
// import chicken from "../../assets/chicken.png";
// import chicken from "../../assets/chicken.png";
// import chicken from "../../assets/chicken.png";
// import chicken from "../../assets/chicken.png";
import { Buy, Picture, Price, ProductItemWrapper, Title } from "./styled";

export const ProductItem = ({ product }) => {
    return (
        <ProductItemWrapper>
            <Picture src={chicken} />
            <Title>{product.title}</Title>
            <Price>{product.price} BYN</Price>
            <Buy>Купить</Buy>
        </ProductItemWrapper>
    );
};
