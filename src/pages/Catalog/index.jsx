import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { BigProduct } from "@/components/BigProduct";
import { SearchBar } from "@/components/SearchBar";

import { CatalogWrapper, List } from "./styled";

export const Catalog = () => {
    const dispatch = useDispatch();
    const list = useSelector((state) => state.productList.filteredList);
    
    return (
        <CatalogWrapper>
            <SearchBar />
            <List>
                {list?.map((item) => (
                    <BigProduct key={item.id} item={item} />
                ))}
            </List>
        </CatalogWrapper>
    );
};
