import { Image } from "../CategoryItem/styled";
import { Title } from "../NewProducts/styled";
import { Description } from "../ProductItem/styled";
import { ProductWrapper } from "./styled";

export const BigProduct = ({ item }) => {
    return (
        <ProductWrapper>
            <Image src={`../../assets/${item.namePicture}.jpg`} />
            <Title>{item.title}</Title>
            <Description>{item.description}</Description>
        </ProductWrapper>
    );
};
