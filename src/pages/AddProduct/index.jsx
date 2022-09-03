import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addProduct } from "@/store/actions/product";

import {
    AddProductWrapper,
    Aside,
    Avatar,
    Button,
    Category,
    Content,
    Description,
    Price,
    ProductContent,
    Title,
} from "./styled";

const OPTIONS = [
    {
        id: 1,
        name: "Овощи",
    },
    {
        id: 2,
        name: "Фрукты",
    },
    {
        id: 3,
        name: "Молочные продукты",
    },
    {
        id: 4,
        name: "Мед",
    },
    {
        id: 5,
        name: "Мясные продукты",
    },
];

export const AddProduct = () => {
    const [title, setTitle] = useState();
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [price, setPrice] = useState("");
    const dispatch = useDispatch();
    const creatorUsername = useSelector((state) => state.userState.user.username);
    const addProducthandler = () => {
        dispatch(addProduct({ title, creatorUsername, description, category }));
    };

    /*
{
    "creatorUsername": "test creatorUsername",
    "location": "Belarus",
    "category": "test category",
    "price": 123,
    "namePicture": "+test",
    "dateCreating": "null"
}
    */

    return (
        <AddProductWrapper>
            <ProductContent>
                <Aside>
                    <Avatar />
                    <Button id="save" onClick={addProducthandler}>
                        Добавить продукт
                    </Button>
                </Aside>
                <Content>
                    <Title
                        placeholder="Название"
                        id="name"
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <Description
                        placeholder="Описание"
                        id="description"
                        onChange={(e) => setDescription(e.target.value)}
                    />
                    <Price
                        placeholder="Цена"
                        id="price"
                        onChange={(e) => setDescription(e.target.value)}
                    />
                    <Category onChange={(e) => setCategory(e.target.value)}>
                        {OPTIONS.map((option) => (
                            <option key={option.id}>{option.name}</option>
                        ))}
                    </Category>
                </Content>
            </ProductContent>
        </AddProductWrapper>
    );
};
