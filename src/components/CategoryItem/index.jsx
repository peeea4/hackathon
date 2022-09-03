import { CategoryItemWrapper, Image, Title } from "./styled";


export const CategoryItem = ({ item }) => {
    return (
        <CategoryItemWrapper>
            <Image src={item.src}/>
            <Title>{item.name}</Title>
        </CategoryItemWrapper>
    );
};
