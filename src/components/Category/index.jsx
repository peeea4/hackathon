import fruits from "../../assets/fruits.jpg";
import honey from "../../assets/honey.jpg";
import juice from "../../assets/juice.jpg";
import meet from "../../assets/meet.jpg";
import milk from "../../assets/milk.jpg";
import vegetables from "../../assets/vegetables.jpg";
import { CategoryItem } from "../CategoryItem";
import { CategoryWrapper, ListOfCategory, Title } from "./styled";
const categoryList = [
    { id: 1, name: "vegetables", src: vegetables },
    { id: 2, name: "fruits", src: fruits },
    { id: 3, name: "meet", src: meet },
    { id: 4, name: "milk", src: milk },
    { id: 5, name: "honey", src: honey },
    { id: 6, name: "juice", src: juice },
];

export const Category = () => {
    return (
        <CategoryWrapper>
            <Title>Категории</Title>
            <ListOfCategory>
                {categoryList.map((item) => (
                    <CategoryItem key={item.id} item={item} />
                ))}
            </ListOfCategory>
        </CategoryWrapper>
    );
};
