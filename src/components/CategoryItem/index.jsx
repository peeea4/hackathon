import { useNavigate } from "react-router-dom";

import { CategoryItemWrapper, Image, Title } from "./styled";
export const CategoryItem = ({ item }) => {
    const navigate = useNavigate();
    const checkNavigate = () => {
        navigate("../category", { replace: true });
    };

    return (
        <CategoryItemWrapper onClick={checkNavigate}>
            <Image src={item.src} />
            <Title>{item.name}</Title>
        </CategoryItemWrapper>
    );
};
