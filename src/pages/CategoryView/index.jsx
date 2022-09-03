import { useSelector } from "react-redux";

import { Elem } from "@/components/ElemForCategory";

import { CategoryViewWrapper } from "./styled";

export const CategoryView = () => {
    const listOfProducts = useSelector((state) => state.productList.productList);
    console.log();
    return (
        <CategoryViewWrapper>
            {listOfProducts.map((item) => (
                <Elem key={item.id} item={item}/>
            ))}
        </CategoryViewWrapper>
    );
};
