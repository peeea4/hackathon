import { useDispatch, useSelector } from "react-redux";

import { IMAGES } from "@/constants/images";
import { setProduct } from "@/store/actions/modalProduct";

import { Image } from "../CategoryItem/styled";
import { Title } from "../NewProducts/styled";
import { Description } from "../ProductItem/styled";
import { ProductWrapper } from "./styled";

export const BigProduct = ({ item }) => {
    const dispatch = useDispatch();

    const clickHandler = () => {
        dispatch(setProduct(item, true));
    };
    return (
        <ProductWrapper onClick={clickHandler}>
            <Image src={IMAGES[item.namePicture]} />
            <Title>{item.title}</Title>
            <Description>{item.description}</Description>
        </ProductWrapper>
    );
};
