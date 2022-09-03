import { IMAGES } from "@/constants/images";

import { CategoryItemWrapper, Image } from "../CategoryItem/styled";
import { Title } from "../NewProducts/styled";

export const Elem = ({ item }) => {
    console.log(item);
    console.log(item.namePicture);
    return (
        <CategoryItemWrapper>
            <Image src={IMAGES[item.namePicture]} />
            <Title>{item.name}</Title>
        </CategoryItemWrapper>
    );
};
