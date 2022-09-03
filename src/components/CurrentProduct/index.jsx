import { useDispatch, useSelector } from "react-redux";

import { IMAGES } from "@/constants/images";
import { setProduct } from "@/store/actions/modalProduct";

import { Title } from "../NewProducts/styled";
import { Description } from "../ProductItem/styled";
import { BtnClose, CurrentProductModal, CurrentProductWrapper, Image, PhoneNumber } from "./styled";

export const CurrentProduct = () => {
    const dispath = useDispatch();
    const currentProduct = useSelector((state) => state.modalState.currentProduct);
    console.log(currentProduct);
    const clickHandler = () => {
        dispath(setProduct(null, false));
    };
    return (
        <CurrentProductWrapper>
            <CurrentProductModal id="modal-photo">
                <Image src={IMAGES[currentProduct.namePicture]} />
                <Title>{currentProduct.title}</Title>
                <Description>{currentProduct.description}</Description>
                <PhoneNumber >{currentProduct.user.phoneNumber}</PhoneNumber>
            </CurrentProductModal>
            <BtnClose onClick={clickHandler}>Close</BtnClose>
        </CurrentProductWrapper>
    );
};
