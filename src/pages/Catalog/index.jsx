import { useDispatch, useSelector } from "react-redux";

import { BigProduct } from "@/components/BigProduct";
import { CurrentProduct } from "@/components/CurrentProduct";
import { SearchBar } from "@/components/SearchBar";

import { CatalogWrapper, List } from "./styled";

export const Catalog = () => {
    const dispatch = useDispatch();
    const list = useSelector((state) => state.productList.filteredList);
    const status = useSelector((state) => state.modalState.currentStatus);
    console.log(status);
    return (
        <CatalogWrapper>
            <SearchBar />
            <List>
                {list?.map((item) => (
                    <BigProduct key={item.id} item={item} />
                ))}
            </List>
            {status ? <CurrentProduct /> : null}
        </CatalogWrapper>
    );
};
